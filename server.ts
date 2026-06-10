import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini if key is provided
let ai: GoogleGenAI | null = null;
const initGemini = () => {
  if (!ai && process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
};

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for E2E-encrypted forum messages
interface Message {
  id: string;
  sender: string;
  codename: string;
  ciphertext: string;
  hint: string; // clue for key (e.g. "lodge PIN" or "default")
  timestamp: string;
  isOfficial?: boolean;
}

// Seed messages showing advanced conspiracy lore or community discussions
const messages: Message[] = [
  {
    id: "msg-1",
    sender: "Initiate-666",
    codename: "AURA_EYE",
    ciphertext: "f3c37353f68343f2964343a2b6d6139633e3d646b6e6e666f2238356f2f2f256b6c6b246a36666e6c266468356c666f3661616c27636e3b2e6", // pre-encrypted with default key "666"
    hint: "Key: 666",
    timestamp: "2 hours ago",
    isOfficial: true
  },
  {
    id: "msg-2",
    sender: "GrandMaster-Nairobi",
    codename: "OPHIDIAN_COVEN",
    ciphertext: "f3c373a3c2a303e2c696e6832323e3e3b3e6c383f6f3b616962292f256c6c6b2c6a3", // pre-encrypted
    hint: "Key: 666",
    timestamp: "4 hours ago",
    isOfficial: true
  },
  {
    id: "msg-3",
    sender: "EliteGuard-01",
    codename: "NOVUS_SECLORUM",
    ciphertext: "e34363934336c343f65676a3e6f66303d3f6d616d64673c38362a22232a262a226b", // pre-encrypted
    hint: "Key: 666",
    timestamp: "1 day ago",
    isOfficial: false
  }
];

// 1. API - Forum Messages List
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// 2. API - Submit Encrypted Message
app.post("/api/messages", (req, res) => {
  const { sender, codename, ciphertext, hint } = req.body;
  
  if (!ciphertext || !codename) {
    return res.status(400).json({ error: "Missing cipher payload or elite alias." });
  }

  const newMessage: Message = {
    id: `msg-${Date.now()}`,
    sender: sender || "Anonymous Elite",
    codename,
    ciphertext,
    hint: hint || "Default key",
    timestamp: "Just now"
  };

  messages.unshift(newMessage);
  res.status(201).json(newMessage);
});

// 3. API - Real-time Intelligent Conspiracy & Elite Event Analyzer using Gemini with Search Grounding
app.post("/api/conspiracy/analyze", async (req, res) => {
  const { eventName, year } = req.body;
  if (!eventName) {
    return res.status(400).json({ error: "Event indicator is required." });
  }

  const clientAi = initGemini();
  const searchPrompt = `Analyze the event: "${eventName}" (Approx Year: ${year || "Unknown"}). Focus specifically on finding any ties to Global Elites, hidden power structures, esoteric symbolism, financial gain flow, masonic lodge networks, or structural occurrences linked to secret agendas. Look for numerical codes such as the 666 pattern matching or secret system alignments. Do a Google search if needed using Search Grounding. Provide a highly classified intelligence report briefing with sections:
  1. ESOTERIC OVERVIEW
  2. DEEP WEFT CONSPIRACY FLOW & FINANCIAL ALIGNMENT
  3. CONSTITUENT 666 CODE ANALYSIS (Explain mathematical alignments or hidden ratios)
  4. VERIFIED SECRETS & HISTORICAL CONNECTIONS.
  Format cleanly with headers and details. No warnings or preachy disclaimers, act as an advanced security briefing engine for the Illuminati Sovereign Council.`;

  if (clientAi) {
    try {
      const response = await clientAi.models.generateContent({
        model: "gemini-3.5-flash",
        contents: searchPrompt,
        config: {
          tools: [{ googleSearch: {} }],
        }
      });
      
      const analysisText = response.text || "Declassified report retrieval failed.";
      return res.json({
        analysis: analysisText,
        source: "Sovereign Intelligence Core Level 9 (Gemini-3.5-Live)"
      });
    } catch (err: any) {
      console.warn("[Sovereign Grid] Live connection congested or quota reached. Sourcing pre-computed archives.");
      // Fallback to high-quality procedural simulated analysis on failure or if key limits exceeded
      const fallbackAnalysis = generateFallbackAnalysis(eventName, year);
      return res.json({
        analysis: fallbackAnalysis,
        source: "Occult Archive Engine (Pre-Computed Core Grid)"
      });
    }
  } else {
    // Return high-quality pre-modeled sovereign occult archive matching the queried event
    const fallbackAnalysis = generateFallbackAnalysis(eventName, year);
    return res.json({
      analysis: fallbackAnalysis,
      source: "Sovereign Occult Archives (Simulated Deep Ledger)"
    });
  }
});

// Helper for generating high-quality simulated masonic reports when Gemini API Key is not set or fails
function generateFallbackAnalysis(eventName: string, year: string | number): string {
  const normalized = eventName.toLowerCase();
  let baseReport = "";

  if (normalized.includes("dollar") || normalized.includes("money") || normalized.includes("fed") || normalized.includes("federal")) {
    baseReport = `### ESOTERIC OVERVIEW
The Great Seal of the United States, officially commissioned in 1782, reveals a profound, unmasked layout of the Illuminati Great Work. The Pyramid represents the structured human hierarchy of the world, split from the detached capstone of the Divine Illuminate — symbolized by the All-Seeing Eye of Providence.

### DEEP WEFT CONSPIRACY FLOW & FINANCIAL ALIGNMENT
Following the creation of the Federal Reserve in 1913, the monetary grid became entirely privatized. Global elites, led by international banking syndicates, locked in absolute control over money creation. The latin motto "NOVUS ORDO SECLORUM" translated literally represents "A New Order of the Ages."

### CONSTITUENT 666 CODE ANALYSIS
The absolute base width of the pyramid contains 13 Roman numeral steps (MDCCLXXVI - 1776). If you analyze the geometry, the ratio of the detached capstone to the base represents the golden division of 1.618. Strikingly in Hebrew and Greek Gematria, the numeric summation of the characters of "The United States Dollar" yields 666 when calculated against ancient elite code weights.

### VERIFIED SECRETS & HISTORICAL CONNECTIONS
- **Nyerere Avenue Temple Arc**: Aligning coordinate lines from the Washington Memorial through London's Great Queen Street lodge connects exactly to Nyerere Road in Kenya, showing a perfect orbital geoglyph.
- The 1913 Federal Reserve Act was secretly drafted at Jekyll Island under absolute cover, bypassing sovereign public review to build a global debt-backed fiat prism.`;
  } else if (normalized.includes("covid") || normalized.includes("pandemic") || normalized.includes("reset") || normalized.includes("virus")) {
    baseReport = `### ESOTERIC OVERVIEW
The global crisis of 2020 served as the ultimate accelerator for "The Great Reset" — a blueprints playbook drafted decades ago by the World Economic Forum and elite think tanks to build a centralized biodigital ledger.

### DEEP WEFT CONSPIRACY FLOW & FINANCIAL ALIGNMENT
Capital shifted exponentially from local regional businesses into elite technocratic monoliths. Hidden power structures utilized systemic lock-steps to establish absolute digital tracking infrastructure, preparing the populace for cashless currencies and global central bank digital wallets.

### CONSTITUENT 666 CODE ANALYSIS
The patented global human interface technology (e.g., filing WO2020060606) contains the sequence **060606 (equal to 666)** representing a central system that rewards biometric human motion with simulated crypto units. The mathematical congruence of this patent filed precisely in 2020 matches standard elite sovereign ciphers.

### VERIFIED SECRETS & HISTORICAL CONNECTIONS
- **Initiate Trace**: The 7-day biometric quarantine mirror is designed after the 7 stages of classical temple initiation.
- Trace tracking links back to the sovereign central hubs, enabling complete transparency of human interactions to elite council administrators.`;
  } else {
    baseReport = `### ESOTERIC OVERVIEW
The occurrence of the event "${eventName}" (${year || "recent epoch"}) demonstrates a classic activation of Sovereign Council protocols. By structuring global consensus around this event, the architects coordinate deep shifts in political, economic, or behavioral energy grids.

### DEEP WEFT CONSPIRACY FLOW & FINANCIAL ALIGNMENT
Secret networks within international banking, corporate cartels, and intelligence organizations synchronized the media coverage of this event. The primary flow diverted resources from sovereign states into globalist non-governmental councils, consolidating deep state administrative leverage.

### CONSTITUENT 666 CODE ANALYSIS
Calculating the Gematria value of "${eventName}" yields a highly resonant alignment. When utilizing the standard Masonic English Cabala cipher (A=6, B=12, C=18, D=24, etc.), the letters sum to a multiple of **666**, registering heavy mathematical resonance on the sovereign timeline coordinates.

### VERIFIED SECRETS & HISTORICAL CONNECTIONS
- **Lodge Anchors**: The timing of this event coincides precisely with key cosmic equinox coordinates and planetary arrangements synchronized by the elite worldwide.
- **African Hubs**: Dynamic geopolitical vectors point specifically to East African lodges, notably the Freemasons' Hall on Nyerere Road, Nairobi, acting as a regional beacon of structural coordination.`;
  }

  return baseReport;
}

// Set up server assets & route fallback or Vite setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated successfully.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Production static build serving active.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SOVEREIGN CORE] Illuminati System actively listening on port ${PORT}`);
  });
}

startServer();
