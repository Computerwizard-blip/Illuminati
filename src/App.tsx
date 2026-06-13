import React, { useState, useEffect, useRef } from "react";
import { 
  Eye, 
  Shield, 
  Key, 
  Users, 
  Lock, 
  Unlock, 
  Globe, 
  MapPin, 
  Send, 
  Coins, 
  CheckCircle, 
  DollarSign, 
  Compass, 
  HelpCircle,
  FileBadge,
  Sparkles,
  Search,
  ChevronRight,
  Flame,
  Award,
  RefreshCw,
  Hourglass,
  QrCode,
  ShieldCheck,
  FileText,
  Target,
  Car,
  Home,
  Building2,
  Gem,
  Layers,
  Cpu,
  Trophy,
  Sliders,
  Play,
  RotateCcw,
  Workflow,
  Camera,
  Upload,
  Image as ImageIcon,
  Save,
  Circle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Cinematic Visual Assets
const hypercarMansionImg = "/src/assets/images/hypercar_mansion_1781097731101.png";
const wealthBondsImg = "/src/assets/images/wealth_bonds_1781097747995.png";
const eliteCityscapeImg = "/src/assets/images/elite_cityscape_1781097763159.png";
const ritualAltarBgImg = "/src/assets/images/ritual_altar_bg_1781383031663.jpg";
const demonic666GlowImg = "/src/assets/images/demonic_666_glow_1781383523605.jpg";
const illuminati66LawsCoverImg = "/src/assets/images/illuminati_66_laws_cover_1781383955284.jpg";

// Real-world masonic lodge / templar addresses mapped to Kenya's primary regional clusters
interface TempleInfo {
  name: string;
  address: string;
  history: string;
  county: string;
  landmark: string;
  phone: string;
  initiates: number;
}

const KENYA_TEMPLES: Record<string, TempleInfo> = {
  Nairobi: {
    name: "Grand Lodge Sclater Core (Nairobi Chapter)",
    address: "Freemasons' Hall, Nyerere Road, Nairobi, Kenya",
    landmark: "Opposite University of Nairobi main campus / off State House road",
    history: "Formed in 1917, this heavy volcanic ash masonry structure serves as the primary regional apex for East African coordination.",
    county: "Nairobi",
    phone: "+254 117 051321",
    initiates: 6667
  },
  Mombasa: {
    name: "Coastal Kilindini Portal (Mombasa Chapter)",
    address: "Mombasa Lodge Temple, Archbishop Makarios Road, Mombasa, Kenya",
    landmark: "Off Moi Avenue, near the historic Kilindini Harbor perimeter",
    history: "Established near the deep sea lanes to manage oceanic transit networks and elite alignment along the Indian Ocean rim.",
    county: "Mombasa",
    phone: "+254 117 051321",
    initiates: 3996
  },
  Kisumu: {
    name: "Victoria Nyanza Apex Lodge (Kisumu Chapter)",
    address: "Kisumu Lodge No. 3424, Temple Road, Kisumu, Kenya",
    landmark: "Near Kisumu Municipal Court and the lakefront docks",
    history: "A vintage pre-colonial hub designed to regulate trade and resources along the Great Lakes basin.",
    county: "Kisumu",
    phone: "+254 117 051321",
    initiates: 2160
  },
  Nakuru: {
    name: "Rift Valley Crater Obelisk (Nakuru Chapter)",
    address: "Nakuru Lodge No. 3448, Club Road, Nakuru, Kenya",
    landmark: "Directly opposite the Nakuru Athletic Club perimeter",
    history: "An inland masonic lodge designed to channel planetary agricultural wealth and highland mineral grids.",
    county: "Nakuru",
    phone: "+254 117 051321",
    initiates: 1844
  },
  Nyeri: {
    name: "Central Highlands Peak Lodge (Mount Kenya Chapter)",
    address: "Mount Kenya Lodge No. 3418, Mount Kenya Road, Nyeri, Kenya",
    landmark: "Off the main Nyeri Club access road",
    history: "Situated beneath the shadow of Mt. Kenya to monitor highland rainfall, coffee syndicates, and mountain energy centers.",
    county: "Nyeri",
    phone: "+254 117 051321",
    initiates: 1206
  }
};

interface Message {
  id: string;
  sender: string;
  codename: string;
  ciphertext: string;
  hint: string;
  timestamp: string;
  isOfficial?: boolean;
}

// Client-side XOR cryptography representing End-to-End Encryption
function encryptText(text: string, key: string): string {
  if (!text) return "";
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length || 0);
    let hex = charCode.toString(16);
    if (hex.length < 2) hex = "0" + hex;
    result += hex;
  }
  return result;
}

function decryptText(hex: string, key: string): string {
  if (!hex) return "";
  let result = "";
  try {
    for (let i = 0; i < hex.length; i += 2) {
      const charCode = parseInt(hex.substring(i, i + 2), 16) ^ key.charCodeAt((i / 2) % key.length || 0);
      result += String.fromCharCode(charCode);
    }
  } catch (e) {
    return "[DECRYPTION_ERROR: CRITICAL PAYLOAD TAMPERING detected]";
  }
  return result;
}

// Convert string to Gematria numerical total with standard Masonic A=6, B=12 scale
function calculateMasonicGematria(word: string): number {
  if (!word) return 0;
  return word.toUpperCase()
    .split("")
    .filter(char => char >= 'A' && char <= 'Z')
    .reduce((sum, char) => sum + ((char.charCodeAt(0) - 64) * 6), 0);
}

// Interactive 3D Holographic Particle Simulation Component for Manifestation Sandbox
interface ManifestationCanvasProps {
  depth: number;
  frequency: number;
  speed: number;
  tilt: number;
}

function ManifestationCanvas({ depth, frequency, speed, tilt }: ManifestationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth || 600;
    let height = canvas.height = canvas.offsetHeight || 400;

    // Create a series of 3D particles rotating in spherical coordinates
    const numParticles = 40;
    const particles: { x: number; y: number; z: number; baseAngle: number; radius: number; speedCoeff: number }[] = [];

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: 0,
            y: 0,
            z: 0,
            baseAngle: (i / numParticles) * Math.PI * 2,
            radius: 80 + Math.random() * 90,
            speedCoeff: 0.2 + Math.random() * 0.8
        });
    }

    const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = canvas.offsetWidth || 600;
        height = canvas.height = canvas.offsetHeight || 400;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
        mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
        mouseRef.current.active = false;
    };

    const handleMouseDown = () => {
        // Concentrate energy on click
        resonanceFreqCoeff = 3;
        setTimeout(() => { resonanceFreqCoeff = 1; }, 400);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("mousedown", handleMouseDown);

    let resonanceFreqCoeff = 1;
    let localTime = 0;

    const render = () => {
        ctx.fillStyle = "rgba(11, 12, 16, 0.22)"; // Semi-transparent for glow trails
        ctx.fillRect(0, 0, width, height);

        // Draw grid lines
        ctx.strokeStyle = "rgba(212, 163, 89, 0.05)";
        ctx.lineWidth = 1;
        
        const numGrid = 12;
        for (let i = 0; i <= numGrid; i++) {
            const x = (width / numGrid) * i;
            const y = (height / numGrid) * i;
            // Vertical grid line
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
            // Horizontal grid line
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw compass circle guides
        ctx.strokeStyle = "rgba(212, 163, 89, 0.08)";
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 70, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 140, 0, Math.PI * 2);
        ctx.stroke();

        // 3D rotation projection matrix values based on user sliders
        const radTilt = (tilt * Math.PI) / 180;
        const focalLength = 220;
        localTime += 0.015 * speed * resonanceFreqCoeff;

        // Calculate particles paths
        const projectedPoints: { x: number; y: number; depthVal: number; size: number }[] = [];

        particles.forEach((p, idx) => {
            // Dynamic angle speed depends directly on user resonance freq state
            const currentAngle = p.baseAngle + localTime * p.speedCoeff * (frequency / 500);
            
            // Standard spherical 3D mapping using tilt
            let px = p.radius * Math.cos(currentAngle);
            let py = p.radius * Math.sin(currentAngle) * Math.cos(radTilt);
            let pz = p.radius * Math.sin(currentAngle) * Math.sin(radTilt);

            // Rotate around the Y axis slightly using local time
            const cosRot = Math.cos(localTime * 0.1);
            const sinRot = Math.sin(localTime * 0.1);
            const rx = px * cosRot - pz * sinRot;
            const rz = px * sinRot + pz * cosRot;

            // Apply interactive attractor pull toward mouse coordinates if hovering
            let finalX = rx;
            let finalY = py;
            let finalZ = rz + depth; // Depth translation based on user slider

            if (mouseRef.current.active) {
                const trgX = mouseRef.current.x - width / 2;
                const trgY = mouseRef.current.y - height / 2;
                
                // Vector distance calculation
                const dx = trgX - rx;
                const dy = trgY - py;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    const pullFactor = (1 - (dist / 180)) * 0.15;
                    finalX += dx * pullFactor;
                    finalY += dy * pullFactor;
                }
            }

            // Standard 3D perspective projection
            const scale = focalLength / (finalZ + focalLength);
            const screenX = width / 2 + finalX * scale;
            const screenY = height / 2 + finalY * scale;

            projectedPoints.push({
                x: screenX,
                y: screenY,
                depthVal: finalZ,
                size: Math.max(1, scale * 3.5)
            });
        });

        // Drawing connection lines between particles that are close in 3D projection space
        ctx.lineWidth = 0.8;
        for (let i = 0; i < projectedPoints.length; i++) {
            for (let j = i + 1; j < projectedPoints.length; j++) {
                const dx = projectedPoints[i].x - projectedPoints[j].x;
                const dy = projectedPoints[i].y - projectedPoints[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // If projection lines are within limit, connect them with high quality gradient stroke
                if (dist < 65) {
                    const opacity = (1 - (dist / 65)) * 0.15 * resonanceFreqCoeff;
                    ctx.strokeStyle = `rgba(189, 144, 53, ${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
                    ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
                    ctx.stroke();
                }
            }
        }

        // Connect each projected point back to masonic central anchor
        projectedPoints.forEach((pt) => {
            const dx = pt.x - width / 2;
            const dy = pt.y - height / 2;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const cap = 200;
            if (dist < cap) {
                const opacity = (1 - (dist / cap)) * 0.035;
                ctx.strokeStyle = `rgba(212, 163, 89, ${opacity})`;
                ctx.beginPath();
                ctx.moveTo(width / 2, height / 2);
                ctx.lineTo(pt.x, pt.y);
                ctx.stroke();
            }
        });

        // Renders nodes points
        projectedPoints.forEach((pt, idx) => {
            ctx.fillStyle = idx % 5 === 0 
                ? "rgba(16, 185, 129, 0.75)" // Emerald focus nodes
                : pt.depthVal < depth 
                    ? "rgba(245, 158, 11, 0.8)" // Golden close nodes
                    : "rgba(217, 119, 6, 0.4)";  // Dark amber deep nodes

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
            ctx.fill();

            // Symmetrically add glowing rings around selected larger nodes
            if (idx % 8 === 0) {
                ctx.strokeStyle = "rgba(212, 163, 89, 0.25)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, pt.size * 2.2, 0, Math.PI * 2);
                ctx.stroke();
            }
        });

        // Render central compass radar vector sweep line
        const sweepAngle = localTime * 0.2;
        ctx.strokeStyle = "rgba(212, 163, 89, 0.055)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.lineTo(width / 2 + Math.cos(sweepAngle) * 220, height / 2 + Math.sin(sweepAngle) * 220);
        ctx.stroke();

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
        if (canvas) {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("mousedown", handleMouseDown);
        }
    };
  }, [depth, frequency, speed, tilt]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full cursor-crosshair absolute inset-0 block bg-[#0b0c10]"
    />
  );
}

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"archives" | "intelligence" | "portal" | "terminal" | "manifest">("archives");

  // Cinematic Visual Matrix Parameters (no screen names)
  const [projectionAltitude, setProjectionAltitude] = useState<number>(65);
  const [resonanceFreq, setResonanceFreq] = useState<number>(528);
  const [liquidAssetAmt, setLiquidAssetAmt] = useState<number>(85000000);
  const [tiltAngle, setTiltAngle] = useState<number>(12);
  const [visualEngineActive, setVisualEngineActive] = useState<boolean>(true);
  const [matrixSpeed, setMatrixSpeed] = useState<number>(1.2);
  const [manifestationProgress, setManifestationProgress] = useState<number>(45);
  const [activeGridElement, setActiveGridElement] = useState<number | null>(null);

  // Gematria Calculator Input
  const [gematriaInput, setGematriaInput] = useState<string>("Novus Ordo");
  const [gematriaResult, setGematriaResult] = useState<number>(0);
  const [activeLawIndex, setActiveLawIndex] = useState<number | null>(null);

  // Timeline selections & AI analysis outputs
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [eventAnalysis, setEventAnalysis] = useState<string>("");
  const [analysisLoading, setAnalysisLoading] = useState<boolean>(false);
  const [analysisProvider, setAnalysisProvider] = useState<string>("");

  // E2E Message Board System
  const [messages, setMessages] = useState<Message[]>([]);
  const [msgPassphrase, setMsgPassphrase] = useState<string>("666");
  const [customPassphrase, setCustomPassphrase] = useState<string>("666");
  const [newMsgText, setNewMsgText] = useState<string>("");
  const [newMsgAlias, setNewMsgAlias] = useState<string>("");
  const [isE2eActive, setIsE2eActive] = useState<boolean>(true);

  // Registration Multi-Step Intake State
  const [regStep, setRegStep] = useState<number>(1);
  const [googleVerified, setGoogleVerified] = useState<boolean>(true);
  const [googleEmail, setGoogleEmail] = useState<string>("francypendy@gmail.com");
  const [googleName, setGoogleName] = useState<string>("Francy Pendy");
  
  // Live camera selfie state & ID document uploads
  const [selfieImg, setSelfieImg] = useState<string | null>(null);
  const [idFrontImg, setIdFrontImg] = useState<string | null>(null);
  const [idBackImg, setIdBackImg] = useState<string | null>(null);
  const [activeCamRole, setActiveCamRole] = useState<"selfie" | "front" | "back" | null>(null);
  const [cameraFacingMode, setCameraFacingMode] = useState<"user" | "environment">("user");
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  // Real-time camera timer and quality mapping states
  const [camTimer, setCamTimer] = useState<number>(60);
  const [scanConfidence, setScanConfidence] = useState<number>(0);
  const [scanMetrics, setScanMetrics] = useState<{
    clarity: number;
    lighting: "BALANCED" | "TOO DARK" | "TOO BRIGHT";
    alignment: string;
    isSteady: boolean;
  }>({
    clarity: 85,
    lighting: "BALANCED",
    alignment: "INITIALIZING SENSORS...",
    isSteady: true
  });
  
  // Custom persist save state status
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Manage camera streaming based on individual capture role
  useEffect(() => {
    let activeStream: MediaStream | null = null;
    if (activeCamRole) {
      // Selfie mode supports switching between user (selfie style) and environment (back side / rear)
      const constraints = {
        video: {
          facingMode: activeCamRole === "selfie" ? cameraFacingMode : { ideal: "environment" }
        }
      };
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          activeStream = stream;
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch(err => console.log("Stream play error:", err));
          }
          setCameraError(null);
        })
        .catch((err) => {
          console.error("Camera access failed:", err);
          setCameraError(`Dynamic camera capture error for ${activeCamRole}: Camera access denied or currently occupied by another node ledger.`);
          setActiveCamRole(null);
        });
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    }

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [activeCamRole, cameraFacingMode]);

  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setActiveCamRole(null);
  };

  // Snaps biometric photo specifically fitting the standard box dimensions
  const handleSnapSelfie = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      
      const vWidth = video.videoWidth || 640;
      const vHeight = video.videoHeight || 360;
      
      canvas.width = vWidth;
      canvas.height = vHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Draw flipped mirror horizontal view ONLY if using front/user/selfie camera facing mode
        if (cameraFacingMode === "user") {
          ctx.translate(vWidth, 0);
          ctx.scale(-1, 1);
        }
        ctx.drawImage(video, 0, 0, vWidth, vHeight);
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Restore transforms

        // High-level masonic watermark
        ctx.fillStyle = "rgba(255, 215, 0, 0.95)";
        ctx.font = "bold 14px monospace";
        ctx.textAlign = "center";
        ctx.fillText("BIOMETRIC FACE MAPPING: SECURED", vWidth / 2, vHeight - 40);
        ctx.fillText("DEC: 666 SOVEREIGN COUNCIL ACTIVE", vWidth / 2, vHeight - 20);

        const dataUrl = canvas.toDataURL("image/png");
        setSelfieImg(dataUrl);
        stopCameraStream();
      }
    }
  };

  // Snaps live card scans (Front or Back) beautifully formatted into standard ID aspect ratios
  const handleSnapIDCard = (role: "front" | "back") => {
    if (videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      // Standard ID proportion of 1.586
      canvas.width = 640;
      canvas.height = 404;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const vWidth = video.videoWidth || 640;
        const vHeight = video.videoHeight || 404;
        
        // Calculate center crop area for standard ID aspect ratio
        const targetHeight = vWidth / 1.586;
        let sx = 0;
        let sy = (vHeight - targetHeight) / 2;
        let sWidth = vWidth;
        let sHeight = targetHeight;

        if (targetHeight > vHeight) {
          sHeight = vHeight;
          sWidth = sHeight * 1.586;
          sx = (vWidth - sWidth) / 2;
          sy = 0;
        }

        // Draw camera frame without mirroring to preserve text readability
        ctx.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, 640, 404);

        // Thick golden high-integrity framing
        ctx.strokeStyle = "#bca03f";
        ctx.lineWidth = 12;
        ctx.strokeRect(0, 0, 640, 404);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, 620, 384);

        // Add security stamp details
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.font = "bold 11px monospace";
        ctx.fillText(`666 DIGITAL ARCHIVE ID SYSTEM: ${role.toUpperCase()}`, 25, 30);
        ctx.fillText("HIGH-CONTRAST SECURE CARRIER STREAM ACTIVE", 25, 45);

        const dataUrl = canvas.toDataURL("image/png");
        if (role === "front") setIdFrontImg(dataUrl);
        if (role === "back") setIdBackImg(dataUrl);
        stopCameraStream();
      }
    }
  };

  // Store active camera role in a ref to let asynchronous timer actions always see the latest state
  const activeCamRef = useRef<"selfie" | "front" | "back" | null>(null);
  useEffect(() => {
    activeCamRef.current = activeCamRole;
  }, [activeCamRole]);

  // Real-time Frame Scan Video Analyzer & Auto-lock Timer (60s limit with manual snap)
  useEffect(() => {
    if (!activeCamRole) {
      setCamTimer(60);
      setScanConfidence(0);
      return;
    }

    // Capture ticking every second - timeout stops the camera stream (locking it)
    const timerInterval = setInterval(() => {
      setCamTimer((prev) => {
        if (prev <= 1) {
          stopCameraStream();
          setCameraError("Camera session timed out after 60 seconds.");
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    // Frame Analyzer running at 5 FPS to calculate actual lighting and scan clarity!
    const analyzerInterval = setInterval(() => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        const video = videoRef.current;
        const width = video.videoWidth || 320;
        const height = video.videoHeight || 240;

        try {
          // Process current frame
          const canvas = document.createElement("canvas");
          canvas.width = 80; // small dimensions represent highly optimized pixel retrieval routines
          canvas.height = 60;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(video, 0, 0, 80, 60);
            const imgData = ctx.getImageData(0, 0, 80, 60);
            const data = imgData.data;

            let totalBrightness = 0;
            // Calculate average perceived luminance: Y = 0.299R + 0.587G + 0.114B
            for (let i = 0; i < data.length; i += 4) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];
              totalBrightness += (0.299 * r + 0.587 * g + 0.114 * b);
            }
            const avgBrightness = totalBrightness / (80 * 60);

            // Determine if balanced
            let currentLighting: "BALANCED" | "TOO DARK" | "TOO BRIGHT" = "BALANCED";
            if (avgBrightness < 35) {
              currentLighting = "TOO DARK";
            } else if (avgBrightness > 225) {
              currentLighting = "TOO BRIGHT";
            }

            // Real clarity computed from pixel intensity standard deviation
            let rawVariance = 0;
            for (let i = 0; i < data.length; i += 4) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];
              const lum = (0.299 * r + 0.587 * g + 0.114 * b);
              rawVariance += Math.abs(lum - avgBrightness);
            }
            const stdDev = rawVariance / (80 * 60);
            // Translate variance to solid clarity % index
            const calculatedClarity = Math.min(100, Math.max(50, Math.floor(55 + stdDev * 0.85)));

            // Check alignment rules based on stream role
            let isAligned = false;
            let alignStatusMsg = "";

            const currentRole = activeCamRef.current;
            if (currentRole === "selfie") {
              // Selfie face needs centered contrast clusters inside standard deviation bounds and balanced light
              isAligned = stdDev > 22 && avgBrightness > 45 && avgBrightness < 215;
              alignStatusMsg = isAligned 
                ? "BIO-MAPPED FACE DETECTED & ALIGNED" 
                : "CENTERING FACE IN THE SCANNER LAYOUT...";
            } else if (currentRole === "front" || currentRole === "back") {
              // ID scans need clear uniform layout edges
              isAligned = stdDev > 18 && avgBrightness > 40 && avgBrightness < 220;
              alignStatusMsg = isAligned 
                ? `${currentRole.toUpperCase()} DOCUMENT PROPORTIONS RESOLVED & READABLE` 
                : `ALIGN ${currentRole.toUpperCase()} DOCUMENT WITH HORIZONTAL ID LINE...`;
            }

            setScanMetrics({
              clarity: calculatedClarity,
              lighting: currentLighting,
              alignment: alignStatusMsg,
              isSteady: true
            });

            // Increase compliance confidence if parameters are all valid (balanced light and correct alignment)
            if (currentLighting === "BALANCED" && isAligned) {
              setScanConfidence((conf) => {
                const nextConf = conf + 12; // Reaches 100% in ~3.3 seconds of clear, well-aligned scan!
                if (nextConf >= 100) {
                  return 100; // Manual capture requested by the user instead of auto-capture
                }
                return nextConf;
              });
            } else {
              // Degenerate confidence slowly if alignment fails
              setScanConfidence((conf) => Math.max(0, conf - 12));
            }
          }
        } catch (e) {
          console.warn("Frame analyze lookup in sandbox:", e);
        }
      }
    }, 400);

    return () => {
      clearInterval(timerInterval);
      clearInterval(analyzerInterval);
    };
  }, [activeCamRole]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, target: "selfie" | "front" | "back") => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          if (target === "selfie") setSelfieImg(reader.result);
          if (target === "front") setIdFrontImg(reader.result);
          if (target === "back") setIdBackImg(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const [regData, setRegData] = useState({
    fullName: "Francy Pendy",
    country: "Kenya",
    county: "Nairobi",
    constituency: "",
    phoneNumber: "",
    email: "francypendy@gmail.com",
    purpose: "Wealth" // Fame, Power, Wealth
  });

  // Token Verification
  const [blockchainToken, setBlockchainToken] = useState<string>("");
  const [isMintingToken, setIsMintingToken] = useState<boolean>(false);

  // M-Pesa Payment Status for Church initiation
  const [paymentName, setPaymentName] = useState<string>("Francy Pendy");
  const [paymentPhone, setPaymentPhone] = useState<string>("");
  const [mpesaCode, setMpesaCode] = useState<string>("");
  const [submittingPayment, setSubmittingPayment] = useState<boolean>(false);
  const [paymentProcessed, setPaymentProcessed] = useState<boolean>(false);

  // Fast forward simulation core
  const [timeWarpActive, setTimeWarpActive] = useState<boolean>(false);
  const [daysElapsed, setDaysElapsed] = useState<number>(0);
  const [warpStage, setWarpStage] = useState<string>("");

  // Live status tickers
  const [liveSovereigns, setLiveSovereigns] = useState<number>(7136952);
  const [systemAlert, setSystemAlert] = useState<string>("SIGNAL SECURE - LEVEL 9 COVENANT BROADCAST");

  // Calibration System states for Initiation path
  const [isCalibrating, setIsCalibrating] = useState<boolean>(false);
  const [calibrationPhase, setCalibrationPhase] = useState<string>("");

  // Track calibration on purpose change to chosen goal
  useEffect(() => {
    if (!regData.purpose) return;
    setIsCalibrating(true);
    setCalibrationPhase("TUNING GEOMETRIC TUNNEL COGNIZANCE...");
    
    const t1 = setTimeout(() => {
      setCalibrationPhase("STABILIZING DEBT BOUNDS...");
    }, 700);
    
    const t2 = setTimeout(() => {
      setCalibrationPhase("ALIGNING HIGH-FREQUENCY GRIDS...");
    }, 1400);
    
    const t3 = setTimeout(() => {
      setIsCalibrating(false);
      setCalibrationPhase("");
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [regData.purpose]);

  // Load message board data & calculate default Gematria on mount
  useEffect(() => {
    fetchMessages();
    setGematriaResult(calculateMasonicGematria(gematriaInput));
    
    // Simulate ambient elite ticker changes
    const interval = setInterval(() => {
      setLiveSovereigns(prev => prev + (Math.random() > 0.4 ? 1 : 0));
      if (Math.random() > 0.85) {
        const warnings = [
          "COORD SYNC: Nyerere Road regional alignment normal.",
          "LEDGER MINT: Blockchain validation token hash matching...",
          "CIPHER DECRYPT: End-to-end payload broadcast secure.",
          "EYE DETECTED: Absolute surveillance core operational."
        ];
        setSystemAlert(warnings[Math.floor(Math.random() * warnings.length)]);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setGematriaResult(calculateMasonicGematria(gematriaInput));
  }, [gematriaInput]);

  // Save status indicator
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Load registration state from persistent localStorage on component mount
  useEffect(() => {
    try {
      const savedReg = localStorage.getItem("illuminati_reg_data");
      const savedToken = localStorage.getItem("illuminati_blockchain_token");
      const savedSelfie = localStorage.getItem("illuminati_selfie_img");
      const savedFront = localStorage.getItem("illuminati_id_front_img");
      const savedBack = localStorage.getItem("illuminati_id_back_img");
      const savedRegStep = localStorage.getItem("illuminati_reg_step");

      if (savedReg) {
        setRegData(JSON.parse(savedReg));
      }
      if (savedToken) setBlockchainToken(savedToken);
      if (savedSelfie) setSelfieImg(savedSelfie);
      if (savedFront) setIdFrontImg(savedFront);
      if (savedBack) setIdBackImg(savedBack);
      if (savedRegStep) {
        const stepNum = parseInt(savedRegStep, 10);
        if (!isNaN(stepNum)) setRegStep(stepNum);
      }
      
      if (savedReg || savedToken || savedSelfie) {
        setSaveToast("CREDENTIALS AUTOMATICALLY RESTORED FROM SECURE LOCAL STORAGE NODE");
        setTimeout(() => setSaveToast(null), 4000);
      }
    } catch (e) {
      console.error("Local storage restoration error:", e);
    }
  }, []);

  // Main save command that serializes all states securely
  const handleSaveAllDetails = () => {
    try {
      localStorage.setItem("illuminati_reg_data", JSON.stringify(regData));
      localStorage.setItem("illuminati_blockchain_token", blockchainToken);
      if (selfieImg) localStorage.setItem("illuminati_selfie_img", selfieImg);
      if (idFrontImg) localStorage.setItem("illuminati_id_front_img", idFrontImg);
      if (idBackImg) localStorage.setItem("illuminati_id_back_img", idBackImg);
      localStorage.setItem("illuminati_reg_step", String(regStep));
      
      setSaveToast("ALL IDENTITY ARCHIVES AND METRICS SECURED SAFELY");
      setTimeout(() => setSaveToast(null), 4000);
    } catch (e) {
      console.error("Local storage saving error:", e);
    }
  };

  // Synchronize changes automatically
  useEffect(() => {
    localStorage.setItem("illuminati_reg_data", JSON.stringify(regData));
  }, [regData]);

  useEffect(() => {
    if (blockchainToken) localStorage.setItem("illuminati_blockchain_token", blockchainToken);
  }, [blockchainToken]);

  useEffect(() => {
    if (selfieImg) localStorage.setItem("illuminati_selfie_img", selfieImg);
  }, [selfieImg]);

  useEffect(() => {
    if (idFrontImg) localStorage.setItem("illuminati_id_front_img", idFrontImg);
  }, [idFrontImg]);

  useEffect(() => {
    if (idBackImg) localStorage.setItem("illuminati_id_back_img", idBackImg);
  }, [idBackImg]);

  useEffect(() => {
    localStorage.setItem("illuminati_reg_step", String(regStep));
  }, [regStep]);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (e) {
      console.error("Failed to sync server messages. Falling back to default ledger.", e);
    }
  };

  const handlePostMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsgText.trim() || !newMsgAlias.trim()) return;

    // Perform client-side end-to-end encryption prior to transit
    const cipher = encryptText(newMsgText, msgPassphrase);
    
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: "Initiated Council",
          codename: newMsgAlias.toUpperCase(),
          ciphertext: cipher,
          hint: `Key: ${msgPassphrase}`
        })
      });

      if (res.ok) {
        setNewMsgText("");
        setNewMsgAlias("");
        fetchMessages();
      }
    } catch (err) {
      console.error("Failed to post cipher message", err);
    }
  };

  // Run Real-world Gemini with search grounding analyzer
  const handleAnalyzeConspiracy = async (eventName: string, year: string) => {
    setSelectedEvent(eventName);
    setAnalysisLoading(true);
    setEventAnalysis("");
    
    try {
      const res = await fetch("/api/conspiracy/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventName, year })
      });
      if (res.ok) {
        const data = await res.json();
        setEventAnalysis(data.analysis);
        setAnalysisProvider(data.source);
      } else {
        setEventAnalysis("Archival decryption connection failed. Energy grids out of phase.");
      }
    } catch (err) {
      setEventAnalysis("Archival core offline. Standard emergency protocols activated.");
    } finally {
      setAnalysisLoading(false);
    }
  };

  // Google authentication simulation logic
  const handleMockGoogleLogin = () => {
    setGoogleVerified(true);
    const mockEmail = googleName 
      ? `${googleName.toLowerCase().replace(/\s+/g, ".")}@gmail.com`
      : "francypendy@gmail.com";
    
    setGoogleEmail(mockEmail);
    setRegData(prev => ({
      ...prev,
      fullName: googleName || "Francy Pendy",
      email: mockEmail
    }));
  };

  // Decentralized proof token minting simulation
  const handleCreateBlockchainToken = () => {
    setIsMintingToken(true);
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      if (counter >= 10) {
        clearInterval(interval);
        // Generates an elegant masonic hex token ending in 666
        const randomHex = Math.random().toString(16).substring(2, 14);
        setBlockchainToken(`0x666:${randomHex.toUpperCase()}:PROFOUND_NODE`);
        setIsMintingToken(false);
      }
    }, 150);
  };

  // Multi-step intake flow progression
  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blockchainToken) {
      alert("Tokens required: Please generate your sovereign blockchain entry vector first.");
      return;
    }
    if (!selfieImg) {
      alert("Face biometric required: Please capture a live selfie clearly showing your full face first.");
      return;
    }
    if (!idFrontImg) {
      alert("ID scan required: Please upload or capture the Front side of your National ID photo first.");
      return;
    }
    if (!idBackImg) {
      alert("ID scan required: Please upload or capture the Back side of your National ID photo first.");
      return;
    }
    setRegStep(2); // Progresses into displaying county masonic temple/hall
  };

  // Payment portal submission
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mpesaCode.trim() || !paymentName.trim() || !paymentPhone.trim()) {
      alert("Please complete all requested verification parameters.");
      return;
    }
    setSubmittingPayment(true);
    setTimeout(() => {
      setSubmittingPayment(false);
      setPaymentProcessed(true);
    }, 1800);
  };

  // Time warp covenant acceleration
  const handleAccelerateTime = () => {
    setTimeWarpActive(true);
    setDaysElapsed(0);
    
    const logs = [
      "Interfacing planetary coordination layers...",
      "Syncing with Grand Lodge Nyerere Avenue Nairobi core...",
      "Applying animalistic sacrifice vector algorithms...",
      "Broadcasting sovereign alignment parameters...",
      "Sealing ancient initiates binding protocols...",
      "Generating high-frequency 666 digital watermarks...",
      "Assembled: Complete initiation certificate generated."
    ];

    let currentDay = 0;
    const interval = setInterval(() => {
      currentDay++;
      setDaysElapsed(currentDay);
      setWarpStage(logs[currentDay - 1] || "Finalizing initiate profile certificate...");
      
      if (currentDay >= 7) {
        clearInterval(interval);
        setTimeWarpActive(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white radial-mesh-grid text-zinc-800 font-sans selection:bg-gold-500/35 selection:text-zinc-900">
      
      {saveToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] bg-[#0b0e14]/95 border-2 border-gold-500 text-gold-400 font-mono text-xs font-black tracking-widest px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-fadeIn">
          <ShieldCheck className="w-5 h-5 text-emerald-500 animate-pulse" />
          <span>{saveToast}</span>
        </div>
      )}
      
      {/* Dynamic Sub-header system status ticker */}
      <div className="bg-zinc-950 border-b border-red-500/20 text-[10px] md:text-xs py-2.5 px-6 flex flex-wrap justify-between items-center text-red-500 font-mono tracking-wider uppercase">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="text-red-400 text-[11px] font-mono tracking-wide font-black animate-pulse">{systemAlert}</span>
        </div>
        <div className="flex items-center gap-6 text-[11px]">
          <span className="text-zinc-400">COVENANT ENROLLMENT: <strong className="text-red-500 font-black">{liveSovereigns.toLocaleString()}</strong></span>
          <span className="hidden md:inline text-zinc-500 font-bold">MATRIX WEIGHT: 666.99.13</span>
        </div>
      </div>

      {/* Main Brand Hero header with custom ritual background */}
      <header 
        style={{ backgroundImage: `url(${ritualAltarBgImg})` }}
        className="relative border-b border-red-500/20 bg-cover bg-center text-center py-16 px-4 overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-black/80 before:z-0"
      >
        {/* Subtle background vector circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none z-10">
          <div className="w-[500px] h-[500px] rounded-full border border-red-500 flex items-center justify-center p-12">
            <div className="w-full h-full rounded-full border border-dashed border-red-500 flex items-center justify-center">
              <div className="w-32 h-32 border border-red-500 transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-red-400 tracking-[0.5em] font-mono text-[10px] uppercase mb-3 bg-red-950/40 px-3 py-1 rounded border border-red-500/30 font-black mb-4">
            Novus Ordo Seclorum
          </span>
          <div className="inline-flex p-3 rounded-2xl bg-zinc-950/90 border-2 border-red-500/40 text-red-500 mb-5 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse">
            <Eye className="w-9 h-9" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-wide text-white mb-2 drop-shadow-[0_2px_15px_rgba(239,68,68,0.7)] uppercase">
            ILLUMINATI ORGANIZATION
          </h1>
          <h3 className="text-gold-400 tracking-[0.35em] font-mono text-sm md:text-base uppercase font-black mb-4 drop-shadow-[0_0_5px_rgba(188,160,63,0.3)]">
            NEW WORLD ORDER 666
          </h3>
          <p className="text-zinc-200 max-w-2xl text-xs md:text-sm font-semibold tracking-wide leading-relaxed font-sans mt-2 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            <strong className="text-red-400 font-extrabold">Sovereign Portal of the Illuminate Elites.</strong> Unlocking historical event ciphers, managing masonic highland grids, and guiding destined community members toward ultimate <strong className="text-gold-400 font-black bg-gold-500/10 px-1.5 py-0.5 rounded border border-gold-500/20 hover:border-gold-500/30 transition-colors">Fame, Power, and absolute Fortune.</strong>
          </p>

          {/* Join Now button requested right after description! */}
          <button 
            id="hero-join-now-btn"
            onClick={() => {
              setActiveTab("portal");
              setTimeout(() => {
                const formEl = document.getElementById("intake-form-header") || document.getElementById("tab-portal");
                if (formEl) {
                  formEl.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 150);
            }}
            className="mt-8 bg-gold-500 hover:bg-gold-600 active:scale-95 text-black font-mono text-xs font-black px-8 py-4 rounded-xl transition-all uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-500/30 hover:scale-102 border-2 border-gold-600/20"
          >
            <Sparkles className="w-4.5 h-4.5 text-black animate-spin" style={{ animationDuration: '4s' }} />
            Join Now
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Navigation Control Center */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-10 bg-white p-1.5 rounded-xl border border-red-500/30 max-w-4xl w-full shadow-[0_10px_35px_-5px_rgba(0,0,0,0.3),0_0_15px_rgba(239,68,68,0.15)] ring-1 ring-black/5 animate-fadeIn">
            <button 
              id="tab-archives"
              onClick={() => setActiveTab("archives")}
              className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "archives" 
                  ? "bg-gold-500 text-black font-extrabold shadow-md shadow-gold-500/25 ring-2 ring-gold-400/50 scale-[1.02]" 
                  : "text-zinc-700 hover:text-red-650 hover:bg-zinc-100 font-extrabold"
              }`}
            >
              <Globe className={`w-3.5 h-3.5 ${activeTab === "archives" ? "text-black" : "text-zinc-450 opacity-90"}`} />
              <span className="font-extrabold">Sovereign Archives</span>
            </button>

            <button 
              id="tab-intelligence"
              onClick={() => setActiveTab("intelligence")}
              className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "intelligence" 
                  ? "bg-gold-500 text-black font-extrabold shadow-md shadow-gold-500/25 ring-2 ring-gold-400/50 scale-[1.02]" 
                  : "text-zinc-700 hover:text-red-650 hover:bg-zinc-100 font-extrabold"
              }`}
            >
              <Compass className={`w-3.5 h-3.5 ${activeTab === "intelligence" ? "text-black" : "text-zinc-450 opacity-90"}`} />
              <span className="font-extrabold">666 Event Decoder</span>
            </button>

            <button 
              id="tab-terminal"
              onClick={() => setActiveTab("terminal")}
              className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "terminal" 
                  ? "bg-gold-500 text-black font-extrabold shadow-md shadow-gold-500/25 ring-2 ring-gold-400/50 scale-[1.02]" 
                  : "text-zinc-700 hover:text-red-650 hover:bg-zinc-100 font-extrabold"
              }`}
            >
              <Shield className={`w-3.5 h-3.5 ${activeTab === "terminal" ? "text-black" : "text-zinc-450 opacity-90"}`} />
              <span className="font-extrabold">E2E Safehouse Board</span>
            </button>

            <button 
              id="tab-portal"
              onClick={() => setActiveTab("portal")}
              className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "portal" 
                  ? "bg-gold-500 text-black font-extrabold shadow-md shadow-gold-500/25 ring-2 ring-gold-400/50 scale-[1.02]" 
                  : "text-zinc-700 hover:text-red-650 hover:bg-zinc-100 font-extrabold"
              }`}
            >
              <Users className={`w-3.5 h-3.5 ${activeTab === "portal" ? "text-black" : "text-zinc-450 opacity-90"}`} />
              <span className="font-extrabold">Initiate Sanctuary</span>
            </button>

            <button 
              id="tab-manifest"
              onClick={() => setActiveTab("manifest")}
              className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "manifest" 
                  ? "bg-gold-500 text-black font-extrabold shadow-md shadow-gold-500/25 ring-2 ring-gold-400/50 scale-[1.02]" 
                  : "text-zinc-700 hover:text-red-650 hover:bg-zinc-100 font-extrabold"
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${activeTab === "manifest" ? "text-black" : "text-zinc-450 opacity-90"}`} />
              <span className="font-extrabold">Manifest Matrix</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspaces Layout Container */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {/* TAB 1: CONSPIRACY ARCHIVES */}
        {activeTab === "archives" && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-gold-600 tracking-wide uppercase font-extrabold">THE DECLASSIFIED CHRONICLES</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-3"></div>
              <p className="text-zinc-700 text-xs md:text-sm font-bold leading-relaxed">
                Exposing historical shifts orchestrated by <strong className="text-gold-700">deep state actors, banking syndicates</strong>, and <strong className="text-gold-700">occult geometric alliances</strong>. Select an activation waypoint to run secure declassification analysis.
              </p>
            </div>

            {/* Interactive Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Timeline Card 1 */}
              <div 
                id="timeline-card-1"
                onClick={() => handleAnalyzeConspiracy("Great Seal Eye of Providence Creation", "1782")}
                className="bg-zinc-50 border-2 border-gold-500/20 rounded-xl p-6 transition-all duration-300 hover:border-gold-500/80 hover:bg-gold-50/10 group cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-gold-700 font-extrabold bg-gold-500/10 px-2.5 py-1 text-[11px] tracking-wider rounded border border-gold-500/20">1782 A.D.</span>
                    <Eye className="w-4 h-4 text-gold-600 group-hover:rotate-12 transition-transform" />
                  </div>
                  <h3 className="text-lg font-serif text-zinc-900 font-extrabold group-hover:text-gold-605 transition-colors">US Great Seal Creation</h3>
                  <p className="text-zinc-650 text-xs mt-2.5 leading-relaxed font-semibold">
                    <strong className="text-gold-700 font-extrabold block mb-1">Declaration of the Great Masonic Seal.</strong> Integrating the 13-tier pyramid and the unattached spiritual Capstone bearing the active Eye of Providence.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gold-500/10 pt-4 mt-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Protocol: APEX_SEAL</span>
                  <span className="text-xs text-gold-600 font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Run Analysis <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Timeline Card 2 */}
              <div 
                id="timeline-card-2"
                onClick={() => handleAnalyzeConspiracy("Bavarian Illuminati Founding Order", "1776")}
                className="bg-zinc-50 border-2 border-gold-500/20 rounded-xl p-6 transition-all duration-300 hover:border-gold-500/80 hover:bg-gold-50/10 group cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-gold-700 font-extrabold bg-gold-500/10 px-2.5 py-1 text-[11px] tracking-wider rounded border border-gold-500/20">1776 A.D.</span>
                    <Compass className="w-4 h-4 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-serif text-zinc-900 font-extrabold group-hover:text-gold-605 transition-colors">Founding of the Order</h3>
                  <p className="text-zinc-650 text-xs mt-2.5 leading-relaxed font-semibold">
                    <strong className="text-gold-700 font-extrabold block mb-1">Designing structural infiltration vectors.</strong> Adam Weishaupt gathers the elite scholars of Ingolstadt across royal networks of Europe.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gold-500/10 pt-4 mt-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Protocol: ORIGIN_CODE</span>
                  <span className="text-xs text-gold-600 font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Run Analysis <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Timeline Card 3 */}
              <div 
                id="timeline-card-3"
                onClick={() => handleAnalyzeConspiracy("United States Federal Reserve Act", "1913")}
                className="bg-zinc-50 border-2 border-gold-500/20 rounded-xl p-6 transition-all duration-300 hover:border-gold-500/80 hover:bg-gold-50/10 group cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-gold-700 font-extrabold bg-gold-500/10 px-2.5 py-1 text-[11px] tracking-wider rounded border border-gold-500/20">1913 A.D.</span>
                    <Coins className="w-4 h-4 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-serif text-zinc-900 font-extrabold group-hover:text-gold-605 transition-colors">Federal Reserve Inception</h3>
                  <p className="text-zinc-650 text-xs mt-2.5 leading-relaxed font-semibold">
                    <strong className="text-gold-700 font-extrabold block mb-1">Sovereign monetary controls transferred.</strong> Private central bank treaty ties global absolute debt to sovereign compound loops.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gold-500/10 pt-4 mt-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Protocol: FIAT_PRISM</span>
                  <span className="text-xs text-gold-600 font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Run Analysis <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Timeline Card 4 */}
              <div 
                id="timeline-card-4"
                onClick={() => handleAnalyzeConspiracy("WO2020060606 Cryptocurrency Biometric Systems", "2020")}
                className="bg-zinc-50 border-2 border-gold-500/20 rounded-xl p-6 transition-all duration-300 hover:border-gold-500/80 hover:bg-gold-50/10 group cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-gold-700 font-extrabold bg-gold-500/10 px-2.5 py-1 text-[11px] tracking-wider rounded border border-gold-500/20">2020 A.D.</span>
                    <Key className="w-4 h-4 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-serif text-zinc-900 font-extrabold group-hover:text-gold-605 transition-colors">Patent 060606 Reset</h3>
                  <p className="text-zinc-650 text-xs mt-2.5 leading-relaxed font-semibold">
                    <strong className="text-gold-700 font-extrabold block mb-1">Filing biometric reward protocols.</strong> Accelerating cashless tracking grids and centralizing human transaction nodes.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gold-500/10 pt-4 mt-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Protocol: CORE_666_GRID</span>
                  <span className="text-xs text-gold-600 font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Run Analysis <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Timeline Card 5 */}
              <div 
                id="timeline-card-5"
                onClick={() => handleAnalyzeConspiracy("East African Sovereign Grid Alignment", "2026")}
                className="bg-zinc-50 border-2 border-gold-500/20 rounded-xl p-6 transition-all duration-300 hover:border-gold-500/80 hover:bg-gold-50/10 group cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-gold-700 font-extrabold bg-gold-500/10 px-2.5 py-1 text-[11px] tracking-wider rounded border border-gold-500/20">2026 A.D.</span>
                    <MapPin className="w-4 h-4 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-serif text-zinc-900 font-extrabold group-hover:text-gold-605 transition-colors">Lodge Corridor: Kenya Transit</h3>
                  <p className="text-zinc-650 text-xs mt-2.5 leading-relaxed font-semibold">
                    <strong className="text-gold-700 font-extrabold block mb-1">Perfect geoglyphic alignment of Rift.</strong> Linking Nyerere Road Freemasons Hall to regional infrastructure projects.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gold-500/10 pt-4 mt-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Protocol: RIFT_BEACON</span>
                  <span className="text-xs text-gold-600 font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Run Analysis <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Timeline Card 6 (Interactive/Custom Search) */}
              <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-2 border-gold-500/30 rounded-xl p-6 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="font-mono text-gold-400 text-[10px] tracking-widest uppercase mb-1.5 block font-extrabold">Declassification Wave</span>
                  <h3 className="text-lg font-serif text-white font-extrabold">Custom Event Query</h3>
                  <p className="text-zinc-350 text-xs mt-1 font-semibold leading-relaxed">
                    Direct access to the Sovereign intelligence core. Input any custom historical event or elite theory.
                  </p>
                  <div className="mt-4 space-y-2">
                    <input 
                      type="text" 
                      placeholder="e.g. Denver Airport Murals" 
                      id="custom-event-input"
                      className="w-full bg-black/40 border border-gold-500/25 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-500/70 font-mono font-bold placeholder:text-zinc-500"
                    />
                    <input 
                      type="text" 
                      placeholder="e.g. 1995" 
                      id="custom-year-input"
                      className="w-full bg-black/40 border border-gold-500/25 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-500/70 font-mono font-bold placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const elEvent = document.getElementById("custom-event-input") as HTMLInputElement;
                    const elYear = document.getElementById("custom-year-input") as HTMLInputElement;
                    if (elEvent && elEvent.value) {
                      handleAnalyzeConspiracy(elEvent.value, elYear?.value || "");
                    }
                  }}
                  className="w-full mt-5 bg-gold-500 hover:bg-gold-400 text-black font-mono text-[11px] py-2.5 rounded font-extrabold transition-all uppercase tracking-wider cursor-pointer shadow-md shadow-gold-500/25 hover:scale-102"
                >
                  Query Sovereignty Core
                </button>
              </div>

            </div>

            {/* Analysis Result Terminal Panel */}
            {selectedEvent && (
              <div id="analysis-section" className="border-2 border-gold-500/20 rounded-xl bg-zinc-50 overflow-hidden shadow-lg">
                <div className="bg-zinc-100 px-5 py-3.5 flex items-center justify-between border-b border-gold-500/15">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-505 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-600"></span>
                    </span>
                    <span className="text-xs font-mono text-gold-700 font-extrabold tracking-wider uppercase">ARCHIVE TELEMETRY DECODED</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 font-bold">Waypoint: {selectedEvent}</span>
                </div>
                
                <div className="p-6 md:p-8">
                  {analysisLoading ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-3">
                      <RefreshCw className="w-8 h-8 text-gold-500 animate-spin" />
                      <span className="font-mono text-xs text-zinc-400">Initiating Gematria mapping cycles... Decoupling secret ledger keys...</span>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex justify-between items-start border-b border-zinc-800/60 pb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-serif text-white">{selectedEvent}</h3>
                          <span className="text-xs text-zinc-500 font-mono">Archive Provider: {analysisProvider}</span>
                        </div>
                        <span className="bg-gold-500/10 text-gold-400 text-[10px] uppercase tracking-widest font-mono text-right p-1.5 rounded border border-gold-500/20">
                          Classified Level-9 Clearance
                        </span>
                      </div>

                      <div className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed whitespace-pre-line space-y-4 font-sans">
                        {eventAnalysis.startsWith("#") ? (
                          /* Render simple formatted segments manually to avoid heavy extra packages */
                          <div className="prose prose-invert max-w-none text-zinc-300">
                            {eventAnalysis.split("\n").map((line, idx) => {
                              if (line.startsWith("###")) {
                                return <h4 key={idx} className="text-base font-serif text-gold-400 mt-4 mb-2">{line.replace("###", "")}</h4>;
                              }
                              if (line.startsWith("##")) {
                                return <h3 key={idx} className="text-lg font-serif text-gold-400 mt-6 mb-3">{line.replace("##", "")}</h3>;
                              }
                              return <p key={idx} className="mb-2 leading-relaxed font-light">{line}</p>;
                            })}
                          </div>
                        ) : (
                          <p className="leading-relaxed font-light">{eventAnalysis}</p>
                        )}
                      </div>

                      <div className="border-t border-zinc-800/60 pt-4 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                        <span>DO NOT DISSEMINATE OUTSIDE COUNCIL RINGS</span>
                        <span>PROUD INTEL CODE: 666-INIT</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: The Sixty-Six Laws of the Illuminati */}
        {activeTab === "intelligence" && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-red-500 tracking-wide uppercase font-extrabold drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">66 LAWS & COVENANT SYSTEM</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-3"></div>
              <p className="text-zinc-200 text-xs md:text-sm font-bold leading-relaxed">
                Unlock the ultimate blueprints of influence. Explore <strong className="text-gold-400">The Sixty-Six Laws of the Illuminati</strong>, the ancient codified paths of success, wisdom, and absolute sovereign fortune.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Illuminati 66 Laws Premium Book Cover / Interactive Reader */}
              <div className="lg:col-span-12 xl:col-span-5 bg-black border-2 border-red-500/30 p-6 md:p-8 rounded-xl flex flex-col justify-between shadow-[0_0_30px_rgba(239,68,68,0.15)] animate-fadeIn relative overflow-hidden">
                
                {activeLawIndex === null ? (
                  // BOOK COVER MODE (Matching the requested photos perfectly)
                  <div className="flex flex-col items-center justify-between h-full min-h-[500px] border-2 border-gold-500/40 p-6 rounded-lg bg-zinc-950 shadow-inner relative group">
                    
                    {/* Double gold border overlay inside cover */}
                    <div className="absolute inset-2 border border-gold-500/20 rounded pointer-events-none"></div>
                    
                    {/* Background Book Cover Image with cinematic overlay */}
                    <div className="absolute inset-3 rounded overflow-hidden opacity-30 group-hover:opacity-40 transition-all duration-700">
                      <img 
                        src={illuminati66LawsCoverImg} 
                        alt="The Sixty-Six Laws book cover" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center scale-[1.01] group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="text-center space-y-1 relative z-10 w-full pt-4">
                      <span className="text-gold-500 font-serif text-sm tracking-[0.4em] uppercase block font-black animate-pulse">THE</span>
                      <h3 className="text-3xl md:text-4xl font-serif text-gold-450 tracking-wider font-black uppercase drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)] pt-1">
                        SIXTY-SIX LAWS
                      </h3>
                      <p className="text-gold-500/80 font-serif text-xs italic tracking-widest pt-1">
                        of the Illuminati
                      </p>
                    </div>

                    {/* Grand Pyramid and All-Seeing Eye Icon Area */}
                    <div className="relative z-10 my-6 flex flex-col items-center justify-center">
                      <div className="w-36 h-36 rounded-full border-2 border-dashed border-gold-500/30 flex items-center justify-center p-3 animate-spin-slow">
                        <div className="w-full h-full rounded-full border border-gold-500/20 flex items-center justify-center transform rotate-45"></div>
                      </div>
                      
                      {/* Floating glowing golden eye of providence */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="bg-zinc-950 p-4 rounded-xl border border-gold-500/40 shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse">
                          <Eye className="w-12 h-12 text-gold-450" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-1.5 relative z-10 w-full pb-3">
                      <h4 className="text-gold-450 tracking-[0.2em] font-serif text-xs font-bold uppercase">
                        THE SECRETS OF SUCCESS
                      </h4>
                      <p className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase font-extrabold block">
                        published in the year 2013
                      </p>
                      
                      <div className="pt-6">
                        <button 
                          type="button"
                          onClick={() => setActiveLawIndex(0)}
                          className="px-6 py-3 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 active:scale-95 text-black font-mono text-[11px] font-black rounded-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] cursor-pointer"
                        >
                          👁️ OPEN COVENANT ARCHIVES
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // ACTIVE LAWS FLIP READER MODE
                  <div className="flex flex-col justify-between h-full min-h-[500px] border-2 border-red-500/30 p-6 md:p-8 rounded-lg bg-zinc-950 shadow-inner relative">
                    <div className="absolute inset-2 border border-red-500/10 rounded pointer-events-none"></div>

                    {/* Active Law Presentation Header */}
                    <div>
                      <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-5">
                        <span className="text-[10px] font-mono text-gold-500 font-extrabold tracking-widest uppercase">
                          ILLUMINATI SECRET MANUAL
                        </span>
                        <button 
                          type="button"
                          onClick={() => setActiveLawIndex(null)}
                          className="px-2 py-1 bg-zinc-900 hover:bg-black border border-gold-500/20 text-gold-400 font-mono text-[9px] rounded font-black tracking-wider uppercase cursor-pointer"
                        >
                          📕 CLOSE BOOK
                        </button>
                      </div>

                      {/* Animated Law details area */}
                      <div className="space-y-6">
                        <div className="flex items-base gap-3">
                          <span className="px-3 py-1.5 bg-red-950/60 border border-red-500/40 text-red-400 font-mono text-xs md:text-sm rounded font-black tracking-wider">
                            LAW {[1, 6, 11, 22, 33, 44, 55, 66][activeLawIndex]}
                          </span>
                          <h4 className="text-lg font-serif text-white uppercase font-black tracking-wide pt-1">
                            {
                              [
                                "The Law of Accumulation",
                                "The Law of Reputation",
                                "The Law of Silence",
                                "The Law of Association",
                                "The Law of the Apex",
                                "The Law of Multiplicity",
                                "The Law of Transmutation",
                                "The Law of Sovereign Covenant"
                              ][activeLawIndex]
                            }
                          </h4>
                        </div>

                        {/* Quote Box with custom blockquotes styling */}
                        <div className="bg-zinc-900/80 border-l-4 border-gold-500 p-4 rounded-r-lg shadow-sm">
                          <p className="text-zinc-200 text-xs md:text-sm italic font-medium leading-relaxed font-sans">
                            "
                            {
                              [
                                "Great achievements are built out of thousands of small, unseen, and highly disciplined daily actions.",
                                "Guard your reputation with your life; it is the currency of influence before they see your face.",
                                "Speak only when your words are more powerful than silence. Reveal the objective, never the mechanism.",
                                "Align exclusively with minds of gold and platinum. Energy is conductive; poverty of ambition is highly contagious.",
                                "Position yourself above the field, where you can observe all angles. Sovereignty belongs to the detached observer.",
                                "A single stream of fortune is a vulnerability. Elites construct multi-layered coordinates of wealth.",
                                "Turn every obstacle, resistance, and adversary into fuel for your ascension. Lead is gold waiting for fire.",
                                "Our destiny is anchored into the eternal geometry of human progress. Novus Ordo Seclorum."
                              ][activeLawIndex]
                            }
                            "
                          </p>
                        </div>

                        {/* Commentary / Internal Lodge Guidance notes */}
                        <div className="space-y-2 pt-2">
                          <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
                            INTERNAL DISCIPLINE & DIRECTIVE:
                          </span>
                          <p className="text-zinc-400 text-[11px] md:text-xs leading-relaxed font-sans font-semibold">
                            {
                              [
                                "Every transaction, every contact, and every micro-habit compound toward absolute sovereignty. Do not neglect small coordinates.",
                                "In the shadow of elite rings, credit, confidence and authority are the ultimate vehicles of seamless physical expansion.",
                                "Silent maneuvers prevent energetic disruption. Let massive material results proclaim your status to the lower domains.",
                                "Masonic circles were founded on this strict grid alignment. Guard your high-frequency corridor against lower vectors.",
                                "The all-seeing eye sits detached at the top of the pyramid, capturing cosmic alignments with pure unemotional precision.",
                                "Diversify investments into masonic highland county counties, gold reserves, and secure land bonds to protect your timeline lineage.",
                                "The sovereign mind recognizes no physical or mental limitations, only kinetic opportunities to reinforce authority.",
                                "The final covenant seal designating full energetic alignment with the 666 grand frequency matrix of carbon matter."
                              ][activeLawIndex]
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom controls / page switcher */}
                    <div className="border-t border-zinc-800 pt-5 mt-6 flex justify-between items-center">
                      <button 
                        type="button"
                        disabled={activeLawIndex === 0}
                        onClick={() => setActiveLawIndex(prev => prev !== null ? Math.max(0, prev - 1) : null)}
                        className="px-3 py-2 bg-zinc-900 hover:bg-black text-gold-400 disabled:opacity-30 disabled:pointer-events-none border border-gold-500/20 font-mono text-[10px] font-black rounded uppercase tracking-wider cursor-pointer"
                      >
                        ◀ PREV LAW
                      </button>

                      <div className="text-[11px] font-mono text-zinc-500 font-bold">
                        {activeLawIndex + 1} / 8 PRECIS
                      </div>

                      <button 
                        type="button"
                        disabled={activeLawIndex === 7}
                        onClick={() => setActiveLawIndex(prev => prev !== null ? Math.min(7, prev + 1) : null)}
                        className="px-3 py-2 bg-zinc-900 hover:bg-black text-gold-400 disabled:opacity-30 disabled:pointer-events-none border border-gold-500/20 font-mono text-[10px] font-black rounded uppercase tracking-wider cursor-pointer"
                      >
                        NEXT LAW ▶
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Secret Gematria Telemetry / Explanation Screen with custom 666 demonic artwork background */}
              <div className="lg:col-span-12 xl:col-span-7 border-2 border-red-500/30 bg-black rounded-xl overflow-hidden flex flex-col justify-between shadow-[0_0_25px_rgba(239,68,68,0.2)] animate-fadeIn">
                {/* 666 Artwork Viewport matching the second photo */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-red-500/20 group">
                  <img 
                    src={demonic666GlowImg} 
                    alt="Active 666 Covenant Seal" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glowing vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                  
                  {/* Status overlays */}
                  <div className="absolute top-4 left-4 bg-red-950/90 border border-red-500/50 px-3 py-1.5 rounded-md backdrop-blur-sm shadow flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span className="text-[10px] font-mono text-red-400 font-black tracking-widest uppercase">COVENANT ENFORCED: ACTIVE</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-zinc-950/90 border border-gold-500/30 px-3 py-1.5 rounded-md backdrop-blur-sm shadow">
                    <span className="text-[10px] font-mono text-gold-450 font-black tracking-widest uppercase">THE CHRONIC RESIDUE</span>
                  </div>
                </div>

                {/* Secret intelligence details */}
                <div className="p-6 md:p-8 space-y-4 bg-[#07090d]">
                  <h3 className="text-xl font-serif text-red-500 uppercase tracking-wide font-extrabold flex items-center gap-2 drop-shadow-[0_0_5px_rgba(239,68,68,0.3)]">
                    <span className="text-red-400">VI VI VI</span> - The Sovereign constant
                  </h3>
                  
                  <p className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed font-sans">
                    Throughout deep antiquity, global elites have structured institutions, treaties, and major infrastructural developments around primary mathematical ratios. The <strong className="text-red-400">666 code sequence</strong> is not an omen of chaos, but rather the sovereign structural constant of physical hidden power of enlightenment.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-zinc-950/90 p-4 rounded-lg border border-red-500/20 shadow-md">
                      <span className="text-red-400 font-mono text-[10px] font-extrabold uppercase tracking-widest block border-b border-red-500/10 pb-1">The Solar Seal Code</span>
                      <p className="text-zinc-400 text-[11px] mt-2 leading-relaxed font-semibold">
                        Ancient secret circles partitioned solar motion charts into 36 planetary squares. Summing all integers from 1 through 36 yields exactly <strong className="text-red-400 font-bold">666</strong>, the core of systemic solar alignment.
                      </p>
                    </div>

                    <div className="bg-zinc-950/90 p-4 rounded-lg border border-red-500/20 shadow-md">
                      <span className="text-red-400 font-mono text-[10px] font-extrabold uppercase tracking-widest block border-b border-red-500/10 pb-1">The Latitude Anchor</span>
                      <p className="text-zinc-400 text-[11px] mt-2 leading-relaxed font-semibold">
                        Mapping the orbital trajectories from Washington to the East African Rift reveals a recurring <strong className="text-red-400 font-bold">6.66°</strong> vector variation, used to designate temple county coordinates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: E2E SAFEhouse messaging BOARD */}
        {activeTab === "terminal" && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-gold-400 tracking-wide uppercase font-extrabold">SECURE COVENANT MESSAGING</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-3"></div>
              <p className="text-zinc-200 text-xs md:text-sm font-bold leading-relaxed">
                This board is protected by high-grade local, client-side <strong className="text-gold-400">end-to-end XOR cryptography</strong>. Enter the matching pass phrase below to decrypt existing logs or transmit your own anonymous intelligence securely to the sanctuary stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Side: Controller Panel */}
              <div className="lg:col-span-12 xl:col-span-5 bg-[#0b0e14]/95 border-2 border-gold-500/20 p-6 md:p-8 rounded-xl space-y-6 shadow-xl">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <h3 className="text-base font-serif text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Key className="w-4 h-4 text-gold-500" />
                      Cryptographic Controls
                    </h3>
                    <span className="bg-[#0e2119] text-[#2ebd7f] font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-[#1b3d2c]/50">
                      SECURE E2E ACTIVE
                    </span>
                  </div>

                  {/* Toggle Encryption */}
                  <div className="flex items-center justify-between p-3 rounded bg-black border-2 border-gold-500/20">
                    <div className="space-y-0.5">
                      <span className="text-xs text-gold-400 uppercase font-mono block font-extrabold">Decrypt Real-time Payloads</span>
                      <p className="text-[10px] text-zinc-300 font-bold">Enables automatic decryptor loop over raw cipher strings.</p>
                    </div>
                    <button 
                      onClick={() => setIsE2eActive(!isE2eActive)}
                      className={`font-mono text-xs font-black px-3 py-1.5 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                        isE2eActive 
                          ? "bg-gold-500 text-black shadow-md shadow-gold-500/30"
                          : "bg-[#0b0e14] text-zinc-400 border border-zinc-700 font-bold"
                      }`}
                    >
                      {isE2eActive ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                      {isE2eActive ? "DEC_ON" : "DEC_OFF"}
                    </button>
                  </div>

                  {/* Encryption Decryption Key Input */}
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-300 uppercase mb-2 font-extrabold">Decryption Passphrase Key:</label>
                    <input 
                      type="text" 
                      value={msgPassphrase}
                      onChange={(e) => setMsgPassphrase(e.target.value)}
                      placeholder="e.g. 666"
                      className="w-full bg-black border-2 border-gold-500/40 rounded-lg px-4 py-2.5 text-sm text-gold-400 focus:outline-none focus:border-gold-500 font-mono text-center tracking-widest font-black"
                    />
                    <span className="text-[10px] font-mono text-zinc-400 mt-1 block leading-normal font-bold">Default pre-shared lodge key: <strong className="text-gold-400 font-extrabold">666</strong>. Wrong keys show unreadable byte arrays.</span>
                  </div>
                </div>

                {/* Submitting form */}
                <form onSubmit={handlePostMessage} className="border-t border-zinc-800 pt-6 space-y-4">
                  <h4 className="text-xs font-mono text-gold-400 uppercase font-extrabold">Transmit Encrypted Message</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Elite Codename Override (e.g. VECTOR_COWL)" 
                        value={newMsgAlias}
                        onChange={(e) => setNewMsgAlias(e.target.value)}
                        required
                        className="w-full bg-black border-2 border-gold-500/20 rounded-lg px-3 py-2.5 text-xs text-gold-200 focus:outline-none focus:border-gold-500 font-mono font-bold placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Type classified message body..." 
                        value={newMsgText}
                        onChange={(e) => setNewMsgText(e.target.value)}
                        required
                        rows={3}
                        className="w-full bg-black border-2 border-gold-500/20 rounded-lg px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-gold-500 font-sans font-bold placeholder:text-zinc-600"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gold-500 hover:bg-gold-400 text-black font-mono text-xs py-3 rounded font-extrabold transition-all uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-gold-500/30"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Transmit Encrypted Bytes
                    </button>
                  </div>
                </form>

              </div>

              {/* Right Side: Terminals Boards */}
              <div className="lg:col-span-12 xl:col-span-7 bg-[#0b0e14]/95 border-2 border-gold-500/20 p-6 rounded-xl flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex justify-between items-center border-b border-zinc-805 pb-3 mb-4">
                    <span className="font-mono text-xs text-gold-400 uppercase font-extrabold">SAFEHOUSE TERMINAL BROADCAST FEED</span>
                    <button 
                      onClick={fetchMessages}
                      className="text-[10px] font-mono text-gold-400 font-bold flex items-center gap-1 hover:text-gold-300"
                    >
                      <RefreshCw className="w-3 h-3 animate-spin duration-300" />
                      RE-SYNC FEED
                    </button>
                  </div>

                  {/* Messages flow scroll */}
                  <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2">
                    {messages.length === 0 ? (
                      <div className="text-center py-12 text-zinc-500 text-xs font-mono font-semibold">
                        Vault log queue empty. Network synchronize active.
                      </div>
                    ) : (
                      messages.map((msg) => {
                        // Dynamically determine decrypted body string
                        const decrypted = isE2eActive 
                          ? decryptText(msg.ciphertext, msgPassphrase) 
                          : msg.ciphertext;

                        const isError = decrypted.includes("ERROR");

                        return (
                          <div key={msg.id} className="bg-black border-2 border-gold-500/10 hover:border-gold-500/30 transition-colors duration-300 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-mono border-b border-zinc-900 pb-2">
                              <span className="text-gold-400 font-extrabold tracking-wider">▲ CODENAME: {msg.codename}</span>
                              <span className="text-zinc-400 font-bold">{msg.timestamp}</span>
                            </div>

                            {/* Cipher output text */}
                            <div className="py-2">
                              <span className="text-[10px] font-mono text-zinc-400 block mb-1 font-bold">RAW TRANSMITTED PAYLOAD:</span>
                              <code className="text-[10px] text-gold-500/75 break-all font-mono block bg-[#0b0e14] p-1.5 rounded border border-zinc-900 mb-2 font-bold">
                                {msg.ciphertext}
                              </code>

                              <span className="text-[10px] font-mono text-gold-400 block mb-1 font-extrabold">DECRYPTED STATE:</span>
                              <p className={`text-xs p-2 rounded tracking-wide leading-relaxed font-mono font-extrabold ${
                                isE2eActive 
                                  ? isError 
                                    ? "bg-red-950/40 text-red-500 border border-red-900/40 font-bold" 
                                    : "bg-[#0b0e14] text-gold-300 border border-gold-500/30"
                                  : "bg-black text-rose-500/95 font-bold italic border border-rose-950"
                              }`}>
                                {isE2eActive ? decrypted : "⚠️ ENCRYPTED CONTENT UNREADABLE [DEC_OFF]"}
                              </p>
                            </div>

                            <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400 pt-1 font-bold">
                              <span>Verified Status: Node Accepted</span>
                              <span className="text-gold-500/80">{msg.hint}</span>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-4 mt-6 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                  <span>DISCLAIMER: Community E2E messages are simulated in local sandboxed storage per session.</span>
                  <span>E2E VERSION 1.1</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: MANIFEST APEX MATERIAL MATRIX */}
        {activeTab === "manifest" && (
          <div className="space-y-10 animate-fadeIn animate-duration-500" id="manifestation-tab-viewport">
            
            {/* Cinematic Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-gold-700 tracking-[0.4em] font-mono text-[10px] uppercase mb-2 bg-gold-500/10 px-3 py-1 rounded inline-block border border-gold-500/20 font-black">
                Dimension Grid Stabilizer
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gold-600 tracking-wide uppercase font-black">
                THE MANIFESTATION MATRIX
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-3"></div>
              <p className="text-zinc-700 text-xs md:text-sm font-bold leading-relaxed">
                Unlock high-value material alignments through multi-dimensional visualization dials. 
                Below rests the physical nodes of the <strong className="text-gold-700">Prime Core Vehicles</strong>, <strong className="text-gold-700">Volumetric Stored Wealth</strong>, and the <strong className="text-gold-700">Gulf Sovereign Coordinates</strong> without display names, ensuring optimal systemic privacy.
              </p>
            </div>

            {/* Interactive controls & Real-time Canvas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Sliders Console Panel */}
              <div className="lg:col-span-4 bg-zinc-50 border-2 border-gold-500/20 rounded-xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 border-b border-gold-500/15 pb-4 mb-5">
                    <Sliders className="w-5 h-5 text-gold-600" />
                    <div>
                      <h3 className="font-serif text-sm font-black text-zinc-900 uppercase">MATRIX SYNCRONIZER</h3>
                      <p className="text-[10px] text-zinc-500 font-mono tracking-wider font-bold">TUNING REALIZATION FIELDS</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Slider 1: Projection Depth Altitude */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono font-bold">
                        <span className="text-zinc-700 uppercase">LATTICE DEPTH (Z-ALTITUDE)</span>
                        <span className="text-gold-650">{projectionAltitude} units</span>
                      </div>
                      <input 
                        type="range" 
                        min="15" 
                        max="150" 
                        value={projectionAltitude}
                        onChange={(e) => setProjectionAltitude(Number(e.target.value))}
                        className="w-full accent-gold-500 bg-zinc-200 h-1.5 rounded-lg cursor-pointer"
                      />
                      <p className="text-[9px] text-zinc-400 font-bold leading-normal">
                        Calibrates standard 3D depth field division & scaling bounds inside sandbox.
                      </p>
                    </div>

                    {/* Slider 2: Resonance Grid Frequency */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono font-bold">
                        <span className="text-zinc-700 uppercase">GRID FLUIDITY (Hz)</span>
                        <span className="text-gold-650">{resonanceFreq} Hz</span>
                      </div>
                      <input 
                        type="range" 
                        min="100" 
                        max="999" 
                        value={resonanceFreq}
                        onChange={(e) => setResonanceFreq(Number(e.target.value))}
                        className="w-full accent-gold-500 bg-zinc-200 h-1.5 rounded-lg cursor-pointer"
                      />
                      <p className="text-[9px] text-zinc-400 font-bold leading-normal">
                        Speeds up the wave harmonic vibration on the geometric canvas below.
                      </p>
                    </div>

                    {/* Slider 3: Volumetric Stored Wealth Vault slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono font-bold">
                        <span className="text-zinc-700 uppercase">VOLUMETRIC LEDGER MULTIPLIER</span>
                        <span className="text-gold-650">x{(liquidAssetAmt/10000000).toFixed(1)} MASG</span>
                      </div>
                      <input 
                        type="range" 
                        min="10000000" 
                        max="1500000000" 
                        step="10000000"
                        value={liquidAssetAmt}
                        onChange={(e) => setLiquidAssetAmt(Number(e.target.value))}
                        className="w-full accent-gold-500 bg-zinc-200 h-1.5 rounded-lg cursor-pointer"
                      />
                      <p className="text-[9px] text-zinc-400 font-bold leading-normal">
                        Updates absolute sovereign asset reserve allocation capacity counters dynamic limits.
                      </p>
                    </div>

                    {/* Slider 4: Matrix TILT Angle */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono font-bold">
                        <span className="text-zinc-700 uppercase">INTERSECT TILT ANGLE</span>
                        <span className="text-gold-650">{tiltAngle}° RAD</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="45" 
                        value={tiltAngle}
                        onChange={(e) => setTiltAngle(Number(e.target.value))}
                        className="w-full accent-gold-500 bg-zinc-200 h-1.5 rounded-lg cursor-pointer"
                      />
                      <p className="text-[9px] text-zinc-400 font-bold leading-normal">
                        Alters rotational plane geometry limits of the canvas node sphere.
                      </p>
                    </div>

                    {/* Slider 5: Propagation speed scale */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono font-bold">
                        <span className="text-zinc-700 uppercase">MATRIX CHRONO VELOCITY</span>
                        <span className="text-gold-650">{matrixSpeed.toFixed(2)}x SEC</span>
                      </div>
                      <input 
                        type="range" 
                        min="0.1" 
                        max="3.0" 
                        step="0.1"
                        value={matrixSpeed}
                        onChange={(e) => setMatrixSpeed(Number(e.target.value))}
                        className="w-full accent-gold-500 bg-zinc-200 h-1.5 rounded-lg cursor-pointer"
                      />
                      <p className="text-[9px] text-zinc-400 font-bold leading-normal">
                        Adjusts standard temporal vector pacing coefficients in live orbits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gold-500/15 mt-6 space-y-4">
                  <div className="bg-zinc-900 border border-gold-500/25 p-3.5 rounded-lg text-[10px] font-mono text-zinc-350">
                    <div className="flex justify-between font-bold mb-1">
                      <span>STABILIZER ENGINE:</span>
                      <span className="text-emerald-400 font-black">ONLINE</span>
                    </div>
                    <div className="flex justify-between font-bold mb-1">
                      <span>HARMONIC MERGE RATIO:</span>
                      <span className="text-gold-400">{(resonanceFreq / 10).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>ENERGY SYNERGY COEFF:</span>
                      <span className="text-gold-400">{(matrixSpeed * 3.3).toFixed(3)} G-LIMIT</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setProjectionAltitude(65);
                      setResonanceFreq(528);
                      setLiquidAssetAmt(85000000);
                      setTiltAngle(12);
                      setMatrixSpeed(1.2);
                    }}
                    className="w-full border-2 border-gold-500/30 hover:bg-gold-500/10 text-gold-800 font-mono text-xs py-2.5 rounded-lg font-black tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    RE-CENTER OPTIMAL MATRIX
                  </button>
                </div>
              </div>

              {/* Holographic 3D Particle Canvas Sandbox */}
              <div className="lg:col-span-8 flex flex-col justify-between bg-zinc-900 border-2 border-gold-500/20 rounded-xl overflow-hidden shadow-2xl relative">
                
                {/* Overlay high-tech coordinate display (represents Dubai & Qatar coordinates without printing their names!) */}
                <div className="absolute top-4 left-4 z-10 text-[9px] font-mono text-zinc-400 bg-black/75 border border-gold-500/25 px-3 py-2 rounded space-y-1 font-bold">
                  <div className="flex items-center gap-1.5 text-gold-400">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                    CORE GEO-GRID DETECTOR: ACTIVE
                  </div>
                  <div>COORD ALPHA: 25.2048° N, 55.2708° E (Z-ALIGNED)</div>
                  <div>COORD BETA : 25.2854° N, 51.5310° E (MATRIX-BOUND)</div>
                  <div>SYSTEM STATE: STEADY-WAVE REALIZATION</div>
                </div>

                <div className="absolute top-4 right-4 z-10 text-[9px] font-mono text-zinc-400 bg-black/75 border border-gold-500/25 px-3 py-2 rounded space-y-1 font-bold">
                  <div>LATENCY: <span className="text-emerald-400">0.02ms</span></div>
                  <div>FIELD INDEX: 13.99.666</div>
                  <div>GRID STRENGTH: {(99.4 + (resonanceFreq/10000)).toFixed(2)}%</div>
                </div>

                {/* The main canvas */}
                <div className="flex-1 min-h-[420px] relative flex items-center justify-center overflow-hidden">
                  <ManifestationCanvas 
                    depth={projectionAltitude}
                    frequency={resonanceFreq}
                    speed={matrixSpeed}
                    tilt={tiltAngle}
                  />
                  
                  {/* Glowing core graphic overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/40 opacity-70"></div>
                  
                  {/* Centered geometric projection core */}
                  <div className="absolute pointer-events-none flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-2 border-gold-500/20 rounded-full animate-ping opacity-45" style={{ animationDuration: '6s' }}></div>
                    <div className="absolute w-24 h-24 border border-dashed border-gold-400/10 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Interactive Status Footer inside Sandbox */}
                <div className="bg-[#0b0c10] border-t border-gold-500/15 py-4 px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-gold-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                      Interactive 3D Quantum Particle Realization Sandbox
                    </span>
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 font-black">
                    MOVE MOUSE TO ATTRACT NODES • CLICK FIELD TO CONCENTRATE ENERGY
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Manifestation Bento Grid representing Cars, Houses, Wealth, and SkyCities (Dubai/Qatar) without text names */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              
              {/* Card 1: Nice Cars & Houses */}
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setActiveGridElement(0)}
                className={`bg-white border-2 rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer flex flex-col justify-between ${
                  activeGridElement === 0 ? "border-gold-500 shadow-gold-500/15 ring-2 ring-gold-500/20" : "border-gold-500/25 hover:border-gold-600/60"
                }`}
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-zinc-950 group">
                    <img 
                      src={hypercarMansionImg} 
                      alt="Vector Model Projection" 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                      <span className="text-[9px] font-mono bg-gold-500/20 text-gold-400 border border-gold-500/40 rounded px-2 py-0.5 uppercase tracking-widest font-black inline-block mb-1.5">
                        VECTOR-MODEL-CAR-HAUS
                      </span>
                      <h4 className="text-sm font-mono text-white font-black uppercase tracking-wider">SPECIFICATION CORE INDEX: A-99</h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <p className="text-xs text-zinc-700 leading-normal font-bold">
                      A quantum physical representation of high-tier structural elements (private estate structures & hyper-velocity mechanical constructs) aligned along premium nodes.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono border-t border-zinc-100 pt-3">
                      <div className="bg-zinc-50 p-2 rounded">
                        <span className="text-zinc-500 block font-bold">COEFFICIENT RATING</span>
                        <strong className="text-zinc-900 font-extrabold text-[11px]">0.198 CD (STEALTH)</strong>
                      </div>
                      <div className="bg-zinc-50 p-2 rounded">
                        <span className="text-zinc-500 block font-bold">ISOLATION SECURE</span>
                        <strong className="text-zinc-900 font-extrabold text-[11px]">LOCKED LEVEL 9</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-50 py-3.5 px-5 border-t border-zinc-100 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-500 font-black uppercase tracking-wider">STATUS: REALITY MAPS ALIGNED</span>
                  <Car className="w-4 h-4 text-gold-650 animate-pulse" />
                </div>
              </motion.div>

              {/* Card 2: Absolute Wealth / Stacks of Cash */}
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setActiveGridElement(1)}
                className={`bg-white border-2 rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer flex flex-col justify-between ${
                  activeGridElement === 1 ? "border-gold-500 shadow-gold-500/15 ring-2 ring-gold-500/20" : "border-gold-500/25 hover:border-gold-600/60"
                }`}
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-zinc-950 group">
                    <img 
                      src={wealthBondsImg} 
                      alt="Liquid Sovereign Bonds" 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                      <span className="text-[9px] font-mono bg-gold-500/20 text-gold-400 border border-gold-500/40 rounded px-2 py-0.5 uppercase tracking-widest font-black inline-block mb-1.5">
                        LIQUID-SOVEREIGN-YEILD
                      </span>
                      <h4 className="text-sm font-mono text-white font-black uppercase tracking-wider">LIQUID MASS MULTIPLIER CORE</h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-zinc-500 block font-bold uppercase">CURRENT REPRESENTATIVE LIQUID VAULT MULTIPLIER</span>
                      <div className="text-2xl font-serif text-gold-650 font-black tracking-wide">
                        ${liquidAssetAmt.toLocaleString()} <span className="text-xs font-sans text-zinc-500 font-black">USD STRIKE</span>
                      </div>
                      <div className="text-xs font-mono text-zinc-500 font-bold">
                        Equivalent projection capacity: <strong className="text-zinc-850">Ksh {(liquidAssetAmt * 128).toLocaleString()}</strong>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-700 leading-normal font-bold border-t border-zinc-100 pt-3">
                      Real-time scaling ledger of liquid membership gold and convertible asset indices. Syncs dynamically with structural yield tuning tools on the left console.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-50 py-3.5 px-5 border-t border-zinc-100 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-500 font-black uppercase tracking-wider">REVENUE GRID FEED: SYNCRONIZED</span>
                  <Coins className="w-4 h-4 text-gold-650 animate-pulse" />
                </div>
              </motion.div>

              {/* Card 3: Dubai & Qatar Cities Skyline (represented as precise geo coordinates without name display) */}
              <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => setActiveGridElement(2)}
                className={`bg-white border-2 rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer flex flex-col justify-between ${
                  activeGridElement === 2 ? "border-gold-500 shadow-gold-500/15 ring-2 ring-gold-500/20" : "border-gold-500/25 hover:border-gold-600/60"
                }`}
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-zinc-950 group">
                    <img 
                      src={eliteCityscapeImg} 
                      alt="Sovereign Sovereign Alignment Sky Grid" 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                      <span className="text-[9px] font-mono bg-gold-500/20 text-gold-400 border border-gold-500/40 rounded px-2 py-0.5 uppercase tracking-widest font-black inline-block mb-1.5">
                        SOVEREIGN-SKYLINE-COORDS
                      </span>
                      <h4 className="text-sm font-mono text-white font-black uppercase tracking-wider">APEX ARCHITECTURE GEOMETRY</h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <p className="text-xs text-zinc-700 leading-normal font-bold">
                      Geographic localization grids representing pristine harbor skylines and elite urban spaces. To uphold strict rules, identifiers are hidden, mapped purely on coordinates.
                    </p>

                    <div className="space-y-2 border-t border-zinc-150 pt-3.5 text-[11px] font-mono">
                      <div className="flex justify-between items-center bg-zinc-50 p-1.5 rounded">
                        <span className="text-zinc-500 font-bold">MAPPED TARGET ALPHA (DUBAI)</span>
                        <strong className="text-zinc-900 font-black">25.2048° N, 55.2708° E</strong>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-50 p-1.5 rounded">
                        <span className="text-zinc-500 font-bold">MAPPED TARGET BETA (QATAR)</span>
                        <strong className="text-zinc-900 font-black">25.2854° N, 51.5310° E</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-50 py-3.5 px-5 border-t border-zinc-100 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-500 font-black uppercase tracking-wider">MARINA SCANNER STATUS: ACTIVE</span>
                  <Building2 className="w-4 h-4 text-gold-650 animate-pulse" />
                </div>
              </motion.div>

            </div>

            {/* Explanatory high-tech alert banner */}
            <div className="bg-zinc-50 border-2 border-gold-500/20 rounded-xl p-5 text-center space-y-2 max-w-4xl mx-auto shadow-sm">
              <span className="text-[10px] font-mono text-gold-700 font-black uppercase tracking-widest block">Systemic Matrix Synchronization Process</span>
              <p className="text-xs text-zinc-700 font-bold leading-normal">
                These holographic visual simulations represent designated material nodes linked directly to your core Sovereign profile. Adjusting parameters realigns quantum focus fields toward these ultimate luxury outcomes. Submit your Initiate Intake application to begin your journey.
              </p>
            </div>
            
          </div>
        )}

        {/* TAB 4: JOIN/LOGIN PORTAL & MEMBRES SHIP RITUAL */}
        {activeTab === "portal" && (
          <div className="space-y-10 animate-fadeIn">
            
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-gold-600 tracking-wide uppercase font-black" id="intake-form-header">THE APEX INITIATE INTAKE</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-3"></div>
              <p className="text-zinc-700 text-xs md:text-sm font-bold leading-relaxed">
                Submit your credentials to the Sovereign high cabinet. After verification, your nearest national regional lodge Hall will be identified to proceed into the 4 initiatic steps.
              </p>
            </div>

            {/* If Not Fully Submitted yet (Intake Registration phase) */}
            {regStep === 1 && (
              <div className="max-w-3xl mx-auto bg-zinc-50 border-2 border-gold-500/20 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 py-4 px-6 border-b border-gold-500/25 text-center">
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-black flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-500" />
                    STAGE 1: IDENTITY & BLOCKCHAIN PROOF NODES
                  </span>
                </div>

                <form onSubmit={handleIntakeSubmit} className="p-6 md:p-8 space-y-8">
                  
                  {/* Part A: Blockchain Verification Action */}
                  <div className="space-y-3 bg-white p-5 rounded-lg border-2 border-gold-500/10 shadow-sm">
                    <span className="text-xs font-mono text-gold-800 tracking-wider block uppercase font-extrabold flex items-center gap-1.5">
                      <span className="text-[10px] bg-gold-500/10 text-gold-700 px-1.5 py-0.5 rounded font-mono border border-gold-500/20">A</span>
                      Sovereign Blockchain Node Proof-of-Stake
                    </span>
                    <p className="text-zinc-700 text-xs font-bold leading-normal">
                      Connect your identity to the decentralized Sovereign Ledger. We mint a cryptographic membership stamp hash confirming eligibility of entry.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      {!blockchainToken ? (
                        <button 
                          type="button"
                          disabled={isMintingToken}
                          onClick={handleCreateBlockchainToken}
                          className="bg-gold-500 hover:bg-gold-650 disabled:opacity-50 text-black font-mono text-xs px-5 py-2.5 rounded font-extrabold transition-all border border-gold-550/20 flex items-center gap-2 cursor-pointer shadow-md"
                        >
                          {isMintingToken ? <RefreshCw className="w-4 h-4 animate-spin text-black" /> : <Coins className="w-4 h-4" />}
                          {isMintingToken ? "MINTING EXCLUSIVE BLOCK TOKEN..." : "GENERATE BLOCKCHAIN ENTRY TOKEN"}
                        </button>
                      ) : (
                        <div className="space-y-1 w-full">
                          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2.5 border border-emerald-200 rounded">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                            <div className="text-xs font-mono font-bold">
                              Blockchain Token Created: <strong className="text-zinc-950 font-black">{blockchainToken}</strong>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Part B: Personal Registration Registry (Geographic Codes) */}
                  <div className="space-y-4 border-t border-gold-500/15 pt-6">
                    <span className="text-sm font-mono text-gold-805 block uppercase font-black tracking-wider flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gold-650" />
                      B. Personal Registration Registry (Geographic Codes)
                    </span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-700 uppercase mb-2 font-black">Full Legal Name:</label>
                        <input 
                          type="text" 
                          required
                          value={regData.fullName}
                          onChange={(e) => setRegData({...regData, fullName: e.target.value})}
                          placeholder="Francy Pendy"
                          className="w-full bg-white border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-gold-500 font-bold shadow-sm animate-pulse-subtle"
                        />
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-700 uppercase mb-2 font-black">Phone Number:</label>
                        <input 
                          type="text" 
                          required
                          value={regData.phoneNumber}
                          onChange={(e) => setRegData({...regData, phoneNumber: e.target.value})}
                          placeholder="e.g. +254 712 345678"
                          className="w-full bg-white border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-gold-500 font-bold shadow-sm"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-700 uppercase mb-2 font-black">Email Address:</label>
                        <input 
                          type="email" 
                          required
                          value={regData.email}
                          onChange={(e) => setRegData({...regData, email: e.target.value})}
                          placeholder="francypendy@gmail.com"
                          className="w-full bg-white border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-gold-500 font-bold shadow-sm"
                        />
                      </div>

                      {/* Country input */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-700 uppercase mb-2 font-black">Country Location:</label>
                        <input 
                          type="text" 
                          required
                          value={regData.country}
                          onChange={(e) => setRegData({...regData, country: e.target.value})}
                          placeholder="Kenya"
                          className="w-full bg-white border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-gold-500 font-bold shadow-sm"
                        />
                      </div>

                      {/* County select */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-700 uppercase mb-2 font-black">County Cluster (Kenya Only):</label>
                        <select 
                          value={regData.county}
                          onChange={(e) => setRegData({...regData, county: e.target.value})}
                          className="w-full bg-white border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-gold-500 font-mono font-bold shadow-sm"
                        >
                          <option value="Nairobi">Nairobi (including Kiambu, Kajiado, Machakos)</option>
                          <option value="Mombasa">Mombasa (coastal block)</option>
                          <option value="Kisumu">Kisumu (lakefront region)</option>
                          <option value="Nakuru">Nakuru (Rift Valley Highlands)</option>
                          <option value="Nyeri">Nyeri (Central / Mount Kenya peak region)</option>
                        </select>
                      </div>

                      {/* Constituency input */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-700 uppercase mb-2 font-black">Constituency:</label>
                        <input 
                          type="text" 
                          required
                          value={regData.constituency}
                          onChange={(e) => setRegData({...regData, constituency: e.target.value})}
                          placeholder="e.g. Westlands, Starehe, Changamwe"
                          className="w-full bg-white border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-zinc-900 focus:outline-none focus:border-gold-500 font-bold shadow-sm"
                        />
                      </div>

                      {/* Save progress draft override */}
                      <div className="md:col-span-2 pt-3">
                        <button
                          type="button"
                          onClick={handleSaveAllDetails}
                          className="w-full py-3 px-5 bg-zinc-900 hover:bg-black text-gold-400 font-mono text-xs rounded-lg font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gold-500/30 cursor-pointer shadow-md hover:scale-[1.01]"
                        >
                          <Save className="w-4.5 h-4.5 text-gold-500 animate-pulse" />
                          SAVE REGISTRY PROGRESS PROGRESSION
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Part C: Objective selection */}
                  <div className="space-y-4 border-t border-gold-500/15 pt-6">
                    <span className="text-sm font-mono text-gold-800 block uppercase font-extrabold tracking-wider flex items-center gap-2">
                      <Target className="w-4.5 h-4.5 text-gold-600" />
                      C. Supreme Initiatic Purpose Selection
                    </span>
                    <p className="text-zinc-700 text-xs font-bold leading-normal">
                      Select your primary spiritual motivation vector. The sovereign ritual alignments vary depending on this selected matrix focus.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      
                      {/* Fame */}
                      <label id="purpose-card-fame" className={`border-2 rounded-lg p-5 flex flex-col gap-2 cursor-pointer transition-all duration-300 ${
                        regData.purpose === "Fame" 
                          ? "bg-gold-500/10 border-gold-500 text-zinc-900 shadow-md ring-2 ring-gold-400/40" 
                          : "bg-white border-zinc-200 text-zinc-650 hover:border-gold-500/50"
                      }`}>
                        <input 
                          type="radio" 
                          name="purpose" 
                          value="Fame"
                          checked={regData.purpose === "Fame"}
                          onChange={() => setRegData({...regData, purpose: "Fame"})}
                          className="sr-only"
                        />
                        <span className="font-serif text-gold-700 text-base font-black tracking-wide uppercase block">FAME & REPUTATION</span>
                        <span className="text-[11px] leading-relaxed font-bold text-zinc-800">Become a global icon of the arts. Unhindered cultural influence and command of public consensus channels.</span>
                      </label>

                      {/* Power */}
                      <label id="purpose-card-power" className={`border-2 rounded-lg p-5 flex flex-col gap-2 cursor-pointer transition-all duration-300 ${
                        regData.purpose === "Power" 
                          ? "bg-gold-500/10 border-gold-500 text-zinc-900 shadow-md ring-2 ring-gold-400/40" 
                          : "bg-white border-zinc-200 text-zinc-650 hover:border-gold-500/50"
                      }`}>
                        <input 
                          type="radio" 
                          name="purpose" 
                          value="Power"
                          checked={regData.purpose === "Power"}
                          onChange={() => setRegData({...regData, purpose: "Power"})}
                          className="sr-only"
                        />
                        <span className="font-serif text-gold-700 text-base font-black tracking-wide uppercase block">COMMAND & POWER</span>
                        <span className="text-[11px] leading-relaxed font-bold text-zinc-800">Infiltrate executive administrative hierarchies, corporate chambers, and shape regional legal dynamics.</span>
                      </label>

                      {/* Money */}
                      <label id="purpose-card-wealth" className={`border-2 rounded-lg p-5 flex flex-col gap-2 cursor-pointer transition-all duration-300 ${
                        regData.purpose === "Wealth" 
                          ? "bg-gold-500/10 border-gold-500 text-zinc-900 shadow-md ring-2 ring-gold-400/40" 
                          : "bg-white border-zinc-200 text-zinc-650 hover:border-gold-500/50"
                      }`}>
                        <input 
                          type="radio" 
                          name="purpose" 
                          value="Wealth"
                          checked={regData.purpose === "Wealth"}
                          onChange={() => setRegData({...regData, purpose: "Wealth"})}
                          className="sr-only"
                        />
                        <span className="font-serif text-gold-700 text-base font-black tracking-wide uppercase block">MONEY / WEALTH</span>
                        <span className="text-[11px] leading-relaxed font-bold text-zinc-800">Direct connection to fiat control boards, endless real estate grants, gold syndicates, and corporate stock hubs.</span>
                      </label>

                    </div>
                  </div>

                  {/* Part D: Biometric Face Capture & Physical ID Card Uploads */}
                  <div className="space-y-5 border-t border-gold-500/15 pt-6 animate-fadeIn">
                    <span className="text-sm font-mono text-gold-805 block uppercase font-black tracking-wider flex items-center gap-2">
                      <Camera className="w-4.5 h-4.5 text-gold-600 animate-pulse" />
                      D. Biometric Video Capture & Physical ID Scan Credentials
                    </span>
                    <p className="text-zinc-700 text-xs font-bold leading-normal">
                      High-tier initiate files require valid dual-factor visual confirmation. Please secure a live full-face biometric camera snapshot and provide high-contrast front and back scans of your government-issued identity card. You may upload static images or scan your ID cards live using your device's camera.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      
                      {/* Left Block: Biometric Webcam Module */}
                      <div className="lg:col-span-6 bg-white border-2 border-gold-500/15 rounded-xl p-5 shadow-inner flex flex-col justify-between min-h-[420px]">
                        <div>
                          <div className="flex items-center justify-between border-b border-gold-500/10 pb-3 mb-4">
                            <span className="text-xs font-mono text-zinc-900 font-extrabold uppercase tracking-wide flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                              Biometric Camera Lock (Auto-locking active)
                            </span>
                            <span className="text-[9px] font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 font-bold uppercase">
                              60s LENS TIMEOUT SECURED
                            </span>
                          </div>

                          {/* 60s Count down alarm notifier */}
                          {activeCamRole === "selfie" && (
                            <div className="mb-2 bg-rose-50 border border-rose-200 p-2.5 rounded-lg flex items-center justify-between font-mono text-[10px] uppercase font-black tracking-wider text-rose-800 animate-pulse">
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
                                AUTO-LOCK ACTIVE SENSOR COUNTDOWN
                              </span>
                              <span className="bg-rose-600 text-white px-2 py-0.5 rounded font-black text-xs font-sans">{camTimer}s</span>
                            </div>
                          )}

                          {/* Lens Selector: Selfie Style vs Back Side of Camera */}
                          {activeCamRole === "selfie" && !selfieImg && (
                            <div className="mb-3.5 flex items-center justify-between gap-1.5 p-1.5 bg-zinc-50 border border-zinc-200 rounded-lg animate-fadeIn shadow-sm">
                              <span className="text-[10px] font-mono text-zinc-500 font-extrabold uppercase pl-1 flex items-center gap-1">
                                <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                                Camera Lens:
                              </span>
                              <div className="flex gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => setCameraFacingMode("user")}
                                  className={`px-3 py-1 text-[10px] font-mono uppercase rounded font-black transition-all cursor-pointer ${
                                    cameraFacingMode === "user"
                                      ? "bg-gold-500 text-black shadow-md ring-1 ring-gold-600/30"
                                      : "text-zinc-650 hover:bg-zinc-100"
                                  }`}
                                >
                                  🤳 Selfie Style
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setCameraFacingMode("environment")}
                                  className={`px-3 py-1 text-[10px] font-mono uppercase rounded font-black transition-all cursor-pointer ${
                                    cameraFacingMode === "environment"
                                      ? "bg-gold-500 text-black shadow-md ring-1 ring-gold-600/30"
                                      : "text-zinc-655 hover:bg-zinc-100"
                                  }`}
                                >
                                  📸 Back Side
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Live Video / Captured Still frame layout */}
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-950 flex flex-col items-center justify-center border border-zinc-900 shadow-inner group p-0">
                            
                            {/* Real-time frame scanner metrics HUD */}
                            {activeCamRole === "selfie" && (
                              <div className="absolute top-3 right-3 bg-zinc-950/90 border border-gold-500/30 text-gold-400 font-mono text-[8px] md:text-[9px] p-2.5 rounded-md flex flex-col gap-1.5 shadow-2xl z-20 min-w-[170px] leading-tight animate-fadeIn">
                                <div className="border-b border-gold-500/20 pb-1 mb-1 font-bold text-center text-gold-500 tracking-wider">
                                  BIO-DETECTION FEED
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                  <span>FACE CLARITY:</span>
                                  <span className={scanMetrics.clarity >= 80 ? "text-emerald-400 font-black" : "text-amber-500 font-black"}>
                                    {scanMetrics.clarity}% {scanMetrics.clarity >= 80 ? "PASS" : "LOW"}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                  <span>AMBIENT LUX:</span>
                                  <span className={scanMetrics.lighting === "BALANCED" ? "text-emerald-400 font-black" : "text-rose-500 font-black"}>
                                    {scanMetrics.lighting}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                  <span>FACE ALIGNED:</span>
                                  <span className="text-emerald-400 font-black">LOCKED</span>
                                </div>
                              </div>
                            )}

                            {selfieImg ? (
                              <div className="w-full h-full relative">
                                <img 
                                  src={selfieImg} 
                                  alt="Captured Sovereign Selfie" 
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gold-900/10 mix-blend-color-burn"></div>
                                <div className="absolute inset-0 border-2 border-dashed border-gold-500/30"></div>
                              </div>
                            ) : activeCamRole === "selfie" ? (
                              <div className="w-full h-full relative bg-black">
                                <video 
                                  ref={videoRef} 
                                  className={`w-full h-full object-cover ${cameraFacingMode === "user" ? "scale-x-[-1]" : ""}`}
                                  playsInline 
                                  muted 
                                />
                                {/* Tech overlay scanner line and dashed border guides */}
                                <div className="absolute inset-4 pointer-events-none z-10 border-2 border-dashed border-gold-500/30"></div>
                                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gold-500/40 animate-pulse pointer-events-none"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 text-[8px] font-mono text-gold-450 font-black tracking-widest text-center uppercase drop-shadow bg-black/50 px-3 py-1.5 rounded-md border border-gold-500/20">
                                  ALIGN FACE IN THE SCREEN
                                </div>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                                <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-500">
                                  <Camera className="w-5 h-5 text-gold-500" />
                                </div>
                                <div>
                                  <span className="text-[10px] font-mono text-zinc-400 block font-bold uppercase">SECURE LENS STREAM DISCONNECTED</span>
                                  <span className="text-[9px] text-zinc-650 leading-normal block max-w-[200px]">
                                    Unleash the biometric face scanner map below to calibrate your entry credentials.
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Bio-compliance verification state feedback text */}
                            {!selfieImg && activeCamRole === "selfie" && (
                              <div className="absolute bottom-3 left-3 bg-[#0c101a] border border-gold-500/30 text-gold-400 font-mono text-[8px] px-2.5 py-1.5 rounded flex items-center gap-1.5 font-bold animate-pulse max-w-[70%]">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 block animate-ping"></span>
                                <span>{scanMetrics.alignment}</span>
                              </div>
                            )}

                            {/* Lens status scanner block */}
                            {!selfieImg && activeCamRole === "selfie" && (
                              <div className="absolute bottom-3 right-3 bg-red-600 text-white font-mono text-[8px] px-2 py-0.5 rounded flex items-center gap-1 font-bold animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                                RECORDING BIO-SIGNATURE
                              </div>
                            )}
                            
                            {selfieImg && (
                              <div className="absolute bottom-3 left-3 bg-emerald-600 text-white font-mono text-[8px] px-2 py-0.5 rounded font-black uppercase">
                                VERIFIED BIOMETRIC MAP SECURED
                              </div>
                            )}
                          </div>

                          {/* Confidence level calibration bar */}
                          {activeCamRole === "selfie" && !selfieImg && (
                            <div className="mt-3.5 space-y-1.5 animate-fadeIn">
                              <div className="flex justify-between items-center text-[9px] font-mono text-zinc-600 font-black uppercase">
                                <span>BIOMETRIC SCAN ALIGNMENT CONFIDENCE INDEX</span>
                                <span className="text-gold-700 font-black">{scanConfidence}%</span>
                              </div>
                              <div className="w-full bg-zinc-200 h-2.5 rounded-full overflow-hidden border border-zinc-300 relative">
                                <div 
                                  className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300" 
                                  style={{ width: `${scanConfidence}%` }}
                                ></div>
                              </div>
                              <p className="text-[8px] font-mono text-[#71717a] font-bold uppercase leading-normal">
                                🔒 KEEP STILL. SCANNER WILL VERIFY BIO-COMPLIANCE. SNAP MANUALLY WHEN READY.
                              </p>
                            </div>
                          )}

                          {cameraError && activeCamRole === "selfie" && (
                            <div className="mt-3 bg-amber-50 border border-amber-200 text-amber-900 rounded p-2.5 text-[10px] font-mono font-bold leading-relaxed">
                              ⚠️ {cameraError}
                            </div>
                          )}
                        </div>

                        {/* Interactive Trigger block */}
                        <div className="mt-4 pt-3.5 border-t border-zinc-100 space-y-3">
                          {selfieImg ? (
                            <div className="space-y-2.5">
                              {/* Primary Save Button under captured photo */}
                              <button 
                                type="button"
                                onClick={() => {
                                  handleSaveAllDetails();
                                  setSaveStatus("SAVED");
                                  setTimeout(() => setSaveStatus(null), 3000);
                                }}
                                className="w-full py-3 px-5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-mono text-xs rounded-lg font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:scale-101 border-2 border-emerald-500/20"
                              >
                                <Save className="w-4 h-4 text-white" />
                                {saveStatus === "SAVED" ? "💾 BIOMETRIC PHOTO SAVED SECURELY!" : "💾 SAVE BIOMETRIC PHOTO"}
                              </button>

                              <button 
                                type="button"
                                onClick={() => {
                                  setSelfieImg(null);
                                  setActiveCamRole("selfie");
                                }}
                                className="w-full py-2 px-4 bg-zinc-900 hover:bg-black text-gold-450 font-mono text-xs rounded-lg font-black tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow border border-gold-500/25 animate-fadeIn"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                                RESET & RETAKE BIOMETRIC PIC
                              </button>
                            </div>
                          ) : activeCamRole === "selfie" ? (
                            <div className="space-y-2">
                              <button 
                                type="button"
                                onClick={handleSnapSelfie}
                                className="w-full py-3 px-5 bg-gold-500 hover:bg-gold-650 text-black font-mono text-xs rounded-lg font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-101 cursor-pointer animate-fadeIn"
                              >
                                <Camera className="w-4 h-4 animate-bounce" />
                                SNAP SECURE BIOMETRIC SELFIE
                              </button>
                              <button 
                                type="button"
                                onClick={stopCameraStream}
                                className="w-full py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-650 border border-zinc-200 font-mono text-[10px] rounded-lg font-bold uppercase transition-colors cursor-pointer"
                              >
                                Dismiss Camera Stream
                              </button>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <button 
                                type="button"
                                onClick={() => setActiveCamRole("selfie")}
                                className="w-full py-3 px-5 bg-zinc-900 border-2 border-gold-500/30 hover:border-gold-500/90 hover:bg-gold-500/5 text-gold-400 font-mono text-xs rounded-lg font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer hover:scale-[1.005]"
                              >
                                <Camera className="w-4.5 h-4.5 text-gold-500" />
                                ACTIVATE BIOMETRIC FACE CAMERA
                              </button>
                              
                              <div className="flex items-center justify-center gap-2 py-1">
                                <div className="h-px bg-zinc-100 flex-1"></div>
                                <span className="text-[9px] font-mono text-zinc-400 uppercase font-black">OR PROCEED VIA FILE IMPORT</span>
                                <div className="h-px bg-zinc-100 flex-1"></div>
                              </div>

                              <div className="text-center">
                                <label className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded border-2 border-dashed border-zinc-350 hover:border-gold-500 bg-zinc-50 hover:bg-gold-500/5 transition-all text-xs font-mono text-zinc-700 hover:text-gold-750 font-black uppercase cursor-pointer w-full justify-center shadow-sm select-none">
                                  <Upload className="w-3.5 h-3.5" />
                                  Browse Computer Selfie File...
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => handleFileChange(e, "selfie")} 
                                    className="hidden" 
                                  />
                                </label>
                              </div>
                            </div>
                          )}
                        </div>
                       {/* Right Block: Dual Government ID scan drop zones with auto-locking and sensor alignment */}
                      <div className="lg:col-span-6 space-y-5">
                        
                        {/* Front ID upload & Scan live zone */}
                        <div className="bg-white border-2 border-gold-500/15 rounded-xl p-5 shadow-inner flex flex-col justify-between min-h-[180px]">
                          <div className="flex items-center justify-between border-b border-gold-500/10 pb-2 mb-3">
                            <span className="text-xs font-mono text-zinc-900 font-extrabold uppercase tracking-wide flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                              FRONT SIDE DOCUMENT CARD
                            </span>
                            {idFrontImg ? (
                              <span className="text-[8px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded font-black uppercase">
                                FRONT STAMP: ACTIVE 666
                              </span>
                            ) : (
                              <span className="text-[8px] font-mono text-zinc-400 uppercase">Awaiting scans</span>
                            )}
                          </div>

                          {/* 60s Count down alarm notifier (Front ID) */}
                          {activeCamRole === "front" && (
                            <div className="mb-3 bg-rose-50 border border-rose-200 p-2 rounded flex items-center justify-between font-mono text-[9px] uppercase font-black text-rose-800 animate-pulse">
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
                                DOCUMENT SNAP TIMEOUT COUNTER
                              </span>
                              <span className="bg-rose-600 text-white px-2 py-0.5 rounded font-black text-xs">{camTimer}s</span>
                            </div>
                          )}

                          {activeCamRole === "front" ? (
                            <div className="space-y-3">
                              <div className="relative w-full aspect-[1.586/1] rounded-lg overflow-hidden bg-zinc-950 border-2 border-gold-500 flex items-center justify-center shadow-inner animate-fadeIn">
                                <video 
                                  ref={videoRef} 
                                  className="w-full h-full object-cover" 
                                  playsInline 
                                  muted 
                                />
                                <div className="absolute inset-3 border-2 border-dashed border-gold-500/40 rounded pointer-events-none"></div>
                                <div className="absolute top-2 left-2 bg-red-650 text-white font-mono text-[8px] px-2 py-0.5 rounded font-bold uppercase animate-pulse">
                                  LIVE SCAN PROPORTIONS DETECTED
                                </div>

                                {/* Active live sensor metrics overlay */}
                                <div className="absolute top-2 right-2 bg-zinc-950/90 border border-gold-500/30 text-gold-400 font-mono text-[8px] p-2 rounded flex flex-col gap-1 shadow-2xl z-20 md:min-w-[130px] leading-tight select-none">
                                  <div className="flex items-center justify-between gap-2 border-b border-gold-500/10 pb-0.5 text-gold-500 font-bold uppercase">
                                    <span>ID ANALYZER</span>
                                  </div>
                                  <div className="flex items-center justify-between gap-2">
                                    <span>SHARPNESS:</span>
                                    <span className="text-emerald-400 font-black">{scanMetrics.clarity}%</span>
                                  </div>
                                  <div className="flex items-center justify-between gap-1">
                                    <span>LUX:</span>
                                    <span className="text-emerald-400 font-black">{scanMetrics.lighting}</span>
                                  </div>
                                </div>

                                {/* Alignment instruction overlay banner */}
                                <div className="absolute bottom-2 left-2 right-2 bg-black/80 border border-zinc-850 px-2.5 py-1 rounded text-center font-mono text-[8px] text-zinc-300 font-black tracking-wider uppercase">
                                  {scanMetrics.alignment}
                                </div>
                              </div>

                              {/* Confidence level calibrator front bar */}
                              <div className="space-y-1 bg-zinc-50 border border-zinc-150 rounded-lg p-2.5">
                                <div className="flex justify-between items-center text-[8px] font-mono text-zinc-600 font-black uppercase">
                                  <span>CARD VERIFICATION CONFIDENCE RANGE</span>
                                  <span className="text-gold-700 font-black">{scanConfidence}%</span>
                                </div>
                                <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden border border-zinc-350 relative">
                                  <div 
                                    className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300" 
                                    style={{ width: `${scanConfidence}%` }}
                                  ></div>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <button 
                                  type="button"
                                  onClick={() => handleSnapIDCard("front")}
                                  className="flex-1 py-2 bg-gold-400 hover:bg-gold-500 text-black font-mono text-[10px] font-black rounded uppercase transition-colors"
                                >
                                  SNAP FRONT SIDE ID DOCUMENT
                                </button>
                                <button 
                                  type="button"
                                  onClick={stopCameraStream}
                                  className="py-2 px-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-650 font-mono text-[10px] rounded uppercase"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : idFrontImg ? (
                            <div className="relative w-full aspect-[1.586/1] rounded-lg overflow-hidden border border-zinc-150 bg-zinc-50 shadow group animate-fadeIn">
                              <img 
                                src={idFrontImg} 
                                alt="ID Card Front Capture" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
                                <button 
                                  type="button"
                                  onClick={() => setActiveCamRole("front")}
                                  className="bg-zinc-900 border border-gold-500/35 text-gold-400 hover:bg-black text-[10px] font-mono font-black uppercase py-2 px-3 rounded shadow"
                                >
                                  Scan Live Cam Again
                                </button>
                                <label className="bg-white text-zinc-900 border border-zinc-250 hover:bg-zinc-50 text-[10px] font-mono font-black uppercase py-2 px-3 rounded cursor-pointer shadow">
                                  Select File
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => handleFileChange(e, "front")} 
                                    className="hidden" 
                                  />
                                </label>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3 py-1">
                              <div className="grid grid-cols-2 gap-3">
                                <button 
                                  type="button"
                                  onClick={() => setActiveCamRole("front")}
                                  className="py-4 bg-zinc-50 hover:bg-gold-500/5 hover:border-gold-500/40 border-2 border-dashed border-zinc-300 rounded-lg flex flex-col items-center justify-center transition-colors text-center cursor-pointer select-none"
                                >
                                  <Camera className="w-5 h-5 text-gold-500 mb-1" />
                                  <span className="text-[10px] font-mono font-black text-zinc-900 uppercase">SCAN ID LIVE</span>
                                  <span className="text-[8px] text-zinc-500 mt-0.5">Device Camera ID Capture</span>
                                </button>
                                
                                <label className="py-4 bg-zinc-50 hover:bg-gold-500/5 hover:border-gold-500/40 border-2 border-dashed border-zinc-300 rounded-lg flex flex-col items-center justify-center transition-colors text-center cursor-pointer select-none">
                                  <Upload className="w-5 h-5 text-gold-500 mb-1" />
                                  <span className="text-[10px] font-mono font-black text-zinc-900 uppercase">UPLOAD FILE</span>
                                  <span className="text-[8px] text-zinc-500 mt-0.5">Browse PC ID file...</span>
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => handleFileChange(e, "front")} 
                                    className="hidden" 
                                  />
                                </label>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Back ID upload & Scan live zone */}
                        <div className="bg-white border-2 border-gold-500/15 rounded-xl p-5 shadow-inner flex flex-col justify-between min-h-[180px]">
                          <div className="flex items-center justify-between border-b border-gold-500/10 pb-2 mb-3">
                            <span className="text-xs font-mono text-zinc-900 font-extrabold uppercase tracking-wide flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                              BACK SIDE DOCUMENT CARD
                            </span>
                            {idBackImg ? (
                              <span className="text-[8px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded font-black uppercase">
                                BACK STAMP: ACTIVE 666
                              </span>
                            ) : (
                              <span className="text-[8px] font-mono text-zinc-400 uppercase">Awaiting scans</span>
                            )}
                          </div>

                          {/* 60s Count down alarm notifier (Back ID) */}
                          {activeCamRole === "back" && (
                            <div className="mb-3 bg-rose-50 border border-rose-200 p-2 rounded flex items-center justify-between font-mono text-[9px] uppercase font-black text-rose-800 animate-pulse">
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
                                DOCUMENT SNAP TIMEOUT COUNTER
                              </span>
                              <span className="bg-rose-600 text-white px-2 py-0.5 rounded font-black text-xs">{camTimer}s</span>
                            </div>
                          )}

                          {activeCamRole === "back" ? (
                            <div className="space-y-3">
                              <div className="relative w-full aspect-[1.586/1] rounded-lg overflow-hidden bg-zinc-950 border-2 border-gold-500 flex items-center justify-center shadow-inner animate-fadeIn">
                                <video 
                                  ref={videoRef} 
                                  className="w-full h-full object-cover" 
                                  playsInline 
                                  muted 
                                />
                                <div className="absolute inset-3 border-2 border-dashed border-gold-500/40 rounded pointer-events-none"></div>
                                <div className="absolute top-2 left-2 bg-red-650 text-white font-mono text-[8px] px-2 py-0.5 rounded font-bold uppercase animate-pulse">
                                  LIVE SCAN PROPORTIONS DETECTED
                                </div>

                                {/* Active live sensor metrics overlay */}
                                <div className="absolute top-2 right-2 bg-zinc-950/90 border border-gold-500/30 text-gold-400 font-mono text-[8px] p-2 rounded flex flex-col gap-1 shadow-2xl z-20 md:min-w-[130px] leading-tight select-none">
                                  <div className="flex items-center justify-between gap-2 border-b border-gold-500/10 pb-0.5 text-gold-500 font-bold uppercase">
                                    <span>ID ANALYZER</span>
                                  </div>
                                  <div className="flex items-center justify-between gap-2">
                                    <span>SHARPNESS:</span>
                                    <span className="text-emerald-400 font-black">{scanMetrics.clarity}%</span>
                                  </div>
                                  <div className="flex items-center justify-between gap-1">
                                    <span>LUX:</span>
                                    <span className="text-emerald-400 font-black">{scanMetrics.lighting}</span>
                                  </div>
                                </div>

                                {/* Alignment instruction overlay banner */}
                                <div className="absolute bottom-2 left-2 right-2 bg-black/80 border border-zinc-850 px-2.5 py-1 rounded text-center font-mono text-[8px] text-zinc-300 font-black tracking-wider uppercase">
                                  {scanMetrics.alignment}
                                </div>
                              </div>

                              {/* Confidence level calibrator back bar */}
                              <div className="space-y-1 bg-zinc-50 border border-zinc-150 rounded-lg p-2.5">
                                <div className="flex justify-between items-center text-[8px] font-mono text-zinc-600 font-black uppercase">
                                  <span>CARD VERIFICATION CONFIDENCE RANGE</span>
                                  <span className="text-gold-700 font-black">{scanConfidence}%</span>
                                </div>
                                <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden border border-zinc-350 relative">
                                  <div 
                                    className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300" 
                                    style={{ width: `${scanConfidence}%` }}
                                  ></div>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <button 
                                  type="button"
                                  onClick={() => handleSnapIDCard("back")}
                                  className="flex-1 py-2 bg-gold-400 hover:bg-gold-500 text-black font-mono text-[10px] font-black rounded uppercase transition-colors"
                                >
                                  SNAP BACK SIDE ID DOCUMENT
                                </button>
                                <button 
                                  type="button"
                                  onClick={stopCameraStream}
                                  className="py-2 px-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-650 font-mono text-[10px] rounded uppercase"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : idBackImg ? (
                            <div className="relative w-full aspect-[1.586/1] rounded-lg overflow-hidden border border-zinc-150 bg-zinc-50 shadow group animate-fadeIn">
                              <img 
                                src={idBackImg} 
                                alt="ID Card Back Capture" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
                                <button 
                                  type="button"
                                  onClick={() => setActiveCamRole("back")}
                                  className="bg-zinc-900 border border-gold-500/35 text-gold-400 hover:bg-black text-[10px] font-mono font-black uppercase py-2 px-3 rounded shadow"
                                >
                                  Scan Live Cam Again
                                </button>
                                <label className="bg-white text-zinc-900 border border-zinc-250 hover:bg-zinc-50 text-[10px] font-mono font-black uppercase py-2 px-3 rounded cursor-pointer shadow">
                                  Select File
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => handleFileChange(e, "back")} 
                                    className="hidden" 
                                  />
                                </label>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3 py-1">
                              <div className="grid grid-cols-2 gap-3">
                                <button 
                                  type="button"
                                  onClick={() => setActiveCamRole("back")}
                                  className="py-4 bg-zinc-50 hover:bg-gold-500/5 hover:border-gold-500/40 border-2 border-dashed border-zinc-300 rounded-lg flex flex-col items-center justify-center transition-colors text-center cursor-pointer select-none"
                                >
                                  <Camera className="w-5 h-5 text-gold-500 mb-1" />
                                  <span className="text-[10px] font-mono font-black text-zinc-900 uppercase">SCAN ID LIVE</span>
                                  <span className="text-[8px] text-zinc-500 mt-0.5">Device Camera ID Capture</span>
                                </button>
                                
                                <label className="py-4 bg-zinc-50 hover:bg-gold-500/5 hover:border-gold-500/40 border-2 border-dashed border-zinc-300 rounded-lg flex flex-col items-center justify-center transition-colors text-center cursor-pointer select-none">
                                  <Upload className="w-5 h-5 text-gold-500 mb-1" />
                                  <span className="text-[10px] font-mono font-black text-zinc-900 uppercase">UPLOAD FILE</span>
                                  <span className="text-[8px] text-zinc-500 mt-0.5">Browse PC ID file...</span>
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => handleFileChange(e, "back")} 
                                    className="hidden" 
                                  />
                                </label>
                              </div>
                            </div>
                          )}
                        </div>                       </div>

                      </div>
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <div className="border-t border-gold-500/15 pt-6 mt-6 animate-pulse-subtle">
                    <button 
                      type="submit"
                      className="w-full bg-gold-550 hover:bg-gold-600 text-black font-mono text-sm py-4 rounded-lg font-black tracking-widest uppercase transition-all shadow-md shadow-gold-550/30 hover:scale-101 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>TRANSMIT REQUISITION APPLICATION</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-[10px] font-mono text-gold-500 mt-3 block text-center uppercase tracking-widest font-extrabold">ALL ARCHIVE SUBMISSIONS ARE SUBJECT TO COMPREHENSIVE SURVEILLANCE VIBRATIONAL CHECKS.</span>
                  </div>

                </form>
              </div>
            )}

            {/* STAGE 2: ADRESS ALLOCATION & DETAILS IN COUTNY */}
            {regStep === 2 && !paymentProcessed && (
              <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
                
                {/* Visual Banner */}
                <div className="bg-[#0b0e14]/95 border-2 border-gold-500/30 p-6 md:p-8 rounded-xl space-y-4 shadow-2xl">
                  <div className="flex items-center gap-2 text-gold-500 font-mono text-xs">
                    <span className="px-2.5 py-1 rounded bg-amber-500/20 text-gold-400 border border-gold-500/30 uppercase tracking-widest font-black text-[10px]">
                      LEVEL 2 Clearance
                    </span>
                    <span className="font-extrabold text-gold-200">County allocation confirmed. Initiatic paths matching {regData.county} grid.</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white font-extrabold uppercase tracking-wide">
                    LOCAL SANCTUARY ASSIGNED: <span className="text-gold-400 font-black">{KENYA_TEMPLES[regData.county]?.name || "Central Kenyan Lodge Apex"}</span>
                  </h3>
                  
                  {/* Real address info card */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    
                    <div className="md:col-span-2 space-y-4 bg-black/60 p-5 rounded-lg border-2 border-gold-500/20">
                      <div className="flex gap-3 items-start text-xs text-zinc-300">
                        <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gold-400 font-mono text-xs block uppercase mb-1.5 tracking-wider font-black">Assigned Physical Address:</strong>
                          <span className="font-mono text-gold-100 text-sm font-black bg-neutral-900 border border-zinc-800 px-2 py-1.5 rounded block max-w-lg shadow-inner">{KENYA_TEMPLES[regData.county]?.address}</span>
                          <span className="block text-zinc-300 text-[11px] mt-2 italic font-bold">Near physical hallmark: {KENYA_TEMPLES[regData.county]?.landmark}</span>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start text-xs text-zinc-300 border-t border-zinc-800 pt-4">
                        <HelpCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gold-400 font-mono text-xs block uppercase mb-1.5 tracking-wider font-black">Archival Lodge History & Origin:</strong>
                          <p className="font-bold leading-relaxed text-zinc-300 text-xs font-sans">{KENYA_TEMPLES[regData.county]?.history}</p>
                        </div>
                      </div>
                    </div>

                    {/* Visual Template Image representation (Eye of Providence with pure CSS styling) */}
                    <div className="bg-gradient-to-br from-black to-[#0e121a] border-2 border-gold-500/20 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-2xl">
                      <div className="relative w-28 h-28 border-2 border-gold-500/20 rounded-full flex items-center justify-center p-4 bg-black">
                        <div className="absolute inset-0 border border-dashed border-gold-500/50 rounded-full animate-spin duration-[60s]"></div>
                        {/* Golden Illuminati Pyramid symbol */}
                        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-gold-500 relative">
                          <div className="absolute -bottom-10 -left-2.5 text-[8px] font-mono text-black font-black bg-gold-400 px-1 rounded">666</div>
                        </div>
                        {/* Detached Glowing Eye */}
                        <div className="absolute top-8 text-gold-400 animate-pulse">
                          <Eye className="w-6 h-6" />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest mt-3 font-black">Lodge Symbol Template</span>
                    </div>

                  </div>
                </div>

                {/* Secured Identity Dossier summary card */}
                <div className="bg-[#0b0e14]/95 border-2 border-gold-500/30 p-6 md:p-8 rounded-xl space-y-4 shadow-2xl animate-fadeIn">
                  <div className="flex items-center gap-2 border-b border-zinc-805 pb-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <div>
                      <h4 className="text-sm font-mono text-white uppercase font-black tracking-wider">SECURED IDENTITY DOSSIER SIGNED IN RED</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase">Subject Verified & Cleared via decentralized credential trace</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {/* Live Biometric Selfie */}
                    <div className="space-y-3 text-center bg-black/60 p-4 rounded-lg border border-gold-500/10 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-gold-400 block uppercase font-extrabold tracking-wider border-b border-zinc-900 pb-1.5 mb-3">Biometric Selfie Locked</span>
                        {selfieImg ? (
                          <div className="relative aspect-square w-full max-w-[130px] mx-auto rounded-lg overflow-hidden border-2 border-emerald-500/35 shadow-md">
                            <img src={selfieImg} alt="Biometric Face Grid" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            <div className="absolute top-1 left-1.5 bg-emerald-600 text-[8px] font-mono text-white font-black px-1.5 py-0.5 rounded shadow">ACTIVE</div>
                          </div>
                        ) : (
                          <div className="aspect-square w-full max-w-[130px] mx-auto bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 border border-dashed border-zinc-800">
                            <span className="text-[10px] font-mono font-bold">No selfie captured</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-zinc-200 block font-black uppercase mt-2">{regData.fullName}</span>
                        <span className="text-[9px] font-mono text-zinc-450 block italic leading-none uppercase font-bold mt-1">CODE: IL-666-BIOM</span>
                      </div>
                    </div>

                    {/* ID Front image visual */}
                    <div className="space-y-3 text-center bg-black/60 p-4 rounded-lg border border-gold-500/10 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-gold-400 block uppercase font-extrabold tracking-wider border-b border-zinc-900 pb-1.5 mb-3">ID Front Scan</span>
                        {idFrontImg ? (
                          <div className="relative aspect-[1.586/1] w-full max-w-[200px] mx-auto rounded-lg overflow-hidden border-2 border-emerald-500/35 shadow-md bg-zinc-950">
                            <img src={idFrontImg} alt="ID Front Scan Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            <div className="absolute top-1 left-1.5 bg-emerald-600 text-[8px] font-mono text-white font-black px-1.5 py-0.5 rounded shadow">SECURED</div>
                          </div>
                        ) : (
                          <div className="aspect-[1.586/1] w-full max-w-[180px] mx-auto bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 border border-dashed border-zinc-800">
                            <span className="text-[10px] font-mono font-bold">No front clip uploaded</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-zinc-300 block font-black uppercase mt-1">Country alignment</span>
                        <span className="text-[9px] font-mono text-zinc-450 block uppercase font-bold text-center mt-1">{regData.country}</span>
                      </div>
                    </div>

                    {/* ID Back image visual */}
                    <div className="space-y-3 text-center bg-black/60 p-4 rounded-lg border border-gold-500/10 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-gold-400 block uppercase font-extrabold tracking-wider border-b border-zinc-900 pb-1.5 mb-3">ID Back Scan</span>
                        {idBackImg ? (
                          <div className="relative aspect-[1.586/1] w-full max-w-[200px] mx-auto rounded-lg overflow-hidden border-2 border-emerald-500/35 shadow-md bg-zinc-950">
                            <img src={idBackImg} alt="ID Back Scan Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            <div className="absolute top-1 left-1.5 bg-emerald-600 text-[8px] font-mono text-white font-black px-1.5 py-0.5 rounded shadow">SECURED</div>
                          </div>
                        ) : (
                          <div className="aspect-[1.586/1] w-full max-w-[180px] mx-auto bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 border border-dashed border-zinc-800">
                            <span className="text-[10px] font-mono font-bold">No back clip uploaded</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-zinc-300 block font-black uppercase mt-1">Masonic sub-lodge</span>
                        <span className="text-[9px] font-mono text-zinc-450 block uppercase font-bold text-center mt-1">{regData.county} grid</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Steps to Reach Hall Details */}
                <div className="border-2 border-gold-500/20 rounded-xl bg-[#0b0e14]/95 p-6 md:p-8 space-y-6 shadow-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-zinc-900 pb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-serif text-gold-400 font-extrabold tracking-wide uppercase">
                        THE FOUR INITIATION STEPS TO REACH THE COVENANT HALL
                      </h3>
                      <p className="text-zinc-300 text-xs font-mono mt-1 font-bold">
                        Active calibration coordinates match your desired elite outcome.
                      </p>
                    </div>
                    
                    {/* Dynamic Purpose Switcher in Stage 2 to live-demonstrate calibration */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <span className="text-[10px] font-mono text-gold-400 uppercase font-extrabold">INITIATION FOCUS:</span>
                      <div className="flex bg-black p-1 rounded-lg border-2 border-gold-500/20">
                        {["Fame", "Power", "Wealth"].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setRegData(prev => ({ ...prev, purpose: item }))}
                            className={`px-3 py-1.5 rounded text-[10px] font-mono tracking-wider transition-all uppercase cursor-pointer font-black ${
                              regData.purpose === item
                                ? "bg-gold-500 text-black border-2 border-gold-400 font-black shadow-md"
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Calibration overlay banner inside steps block */}
                  {isCalibrating && (
                    <div className="bg-gradient-to-r from-gold-500/20 via-black to-gold-500/20 border-2 border-gold-500/40 rounded-lg p-3 text-center animate-pulse">
                      <div className="flex items-center justify-center gap-2 text-xs font-mono text-gold-400">
                        <RefreshCw className="w-4 h-4 animate-spin text-gold-500" />
                        <span className="tracking-widest uppercase font-black">
                          CALIBRATING INITIATION PATHWAY TO [ {regData.purpose.toUpperCase()} ] -- {warpStage || "RE-ORIENTING"}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Step 1 */}
                    <div className={`bg-black/60 p-5 rounded-lg relative overflow-hidden group transition-all duration-500 border-2 ${
                      isCalibrating 
                        ? "border-gold-500 animate-glow-calibrate shadow-2xl" 
                        : "border-zinc-900 hover:border-gold-500/40"
                    }`}>
                      {/* Subtle expanding radial glow template backdrop */}
                      {isCalibrating && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_65%)] pointer-events-none mix-blend-screen animate-pulse animate-glow-calibrate" />
                      )}
                      
                      <div className="absolute -top-6 -right-6 text-7xl font-mono text-zinc-900 font-black group-hover:scale-110 transition-transform select-none">1</div>
                      <span className="text-gold-400 font-mono text-xs font-black uppercase block mb-1">Step I: The Symbolic Sacrifice</span>
                      <p className="text-xs text-zinc-200 leading-relaxed font-bold mt-2 relative z-10 font-sans">
                        Initiates must proceed through the symbolic animal sacrifice. Historically matching classical templar offerings of the black ram/fowl, this ritual represents the **absolute death of your ordinary, blind, animalistic ego self**. You lay down your civilian ignorance and prepare your carbon frequency to acquire elite destiny.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className={`bg-black/60 p-5 rounded-lg relative overflow-hidden group transition-all duration-500 border-2 ${
                      isCalibrating 
                        ? "border-gold-500 animate-glow-calibrate shadow-2xl" 
                        : "border-zinc-900 hover:border-gold-500/40"
                    }`}>
                      {/* Subtle expanding radial glow template backdrop */}
                      {isCalibrating && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_65%)] pointer-events-none mix-blend-screen animate-pulse animate-glow-calibrate" />
                      )}
                      
                      <div className="absolute -top-6 -right-6 text-7xl font-mono text-zinc-900 font-black group-hover:scale-110 transition-transform select-none">2</div>
                      <span className="text-gold-400 font-mono text-xs font-black uppercase block mb-1">Step II: The Custodian Agent Contact</span>
                      <p className="text-xs text-zinc-200 leading-relaxed font-bold mt-2 relative z-10 font-sans">
                        A designated silent agent-representative will connect with you via coordinate secure channels matching your local constituency. You will arrange a covert checkpoint meet near a localized physical hallmark (e.g. the Sclater Nyerere avenue arches) to verify your printed blockchain validation token under cover of darkness.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className={`bg-black/60 p-5 rounded-lg relative overflow-hidden group transition-all duration-500 border-2 ${
                      isCalibrating 
                        ? "border-gold-500 animate-glow-calibrate shadow-2xl" 
                        : "border-zinc-900 hover:border-gold-500/40"
                    }`}>
                      {/* Subtle expanding radial glow template backdrop */}
                      {isCalibrating && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_65%)] pointer-events-none mix-blend-screen animate-pulse animate-glow-calibrate" />
                      )}
                      
                      <div className="absolute -top-6 -right-6 text-7xl font-mono text-zinc-900 font-black group-hover:scale-110 transition-transform select-none">3</div>
                      <span className="text-gold-400 font-mono text-xs font-black uppercase block mb-1">Step III: The Midnight Altar Sermon</span>
                      <p className="text-xs text-zinc-200 leading-relaxed font-bold mt-2 relative z-10 font-sans">
                        Clad in the custom golden-piped dark cowl, you will be escorted into the sanctuary inner chamber for the Altar Sermon. High elders recite the sovereign bylaws from the Sovereign Constitution Ledger, tuning your physical core vibrations to match your desired intention: <strong className="text-gold-400 font-mono font-black">{regData.purpose}</strong>.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className={`bg-black/60 p-5 rounded-lg relative overflow-hidden group transition-all duration-500 border-2 ${
                      isCalibrating 
                        ? "border-gold-500 animate-glow-calibrate shadow-2xl" 
                        : "border-zinc-900 hover:border-gold-500/40"
                    }`}>
                      {/* Subtle expanding radial glow template backdrop */}
                      {isCalibrating && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_65%)] pointer-events-none mix-blend-screen animate-pulse animate-glow-calibrate" />
                      )}
                      
                      <div className="absolute -top-6 -right-6 text-7xl font-mono text-zinc-900 font-black group-hover:scale-110 transition-transform select-none">4</div>
                      <span className="text-gold-400 font-mono text-xs font-black uppercase block mb-1">Step IV: The Initiate Ritual Oaths</span>
                      <p className="text-xs text-zinc-200 leading-relaxed font-bold mt-2 relative z-10 font-sans">
                        The ultimate seals. You swear absolute oaths of structural secrecy and binding silence. Six black candles are arranged in the pyramid star layout. In repeating the ancient texts, you enter into the sovereign family tree, unlocking lifelong flows of material opportunity and command authority.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Secure Payment System Requirements Form */}
                <div id="payment-gate" className="border-2 border-gold-500/30 bg-[#0b0e14]/95 rounded-xl overflow-hidden p-6 md:p-8 shadow-2xl space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-xs font-mono text-gold-500 uppercase tracking-widest font-black tracking-[0.2em] block">STAGE 3: NATIONAL COVENANT SEAL FEE PAYMENT</span>
                    <h3 className="text-2xl font-serif text-white font-extrabold uppercase">SUBMIT INITIATE RITUAL OATHS REQUEST</h3>
                    <p className="text-zinc-300 text-xs max-w-xl mx-auto font-bold leading-relaxed font-sans">
                      To complete registration with the local <span className="text-gold-400 font-bold">{KENYA_TEMPLES[regData.county]?.name || "sanctuary"}</span> temple and dispatch the high-grade ritual agent, pay the designated lodge entry processing fee of <strong className="text-gold-400 font-black text-sm">Ksh 3,999</strong> directly to the national treasury collector number listed below.
                    </p>
                  </div>

                  {/* Real-world direct instructions */}
                  <div className="bg-black/60 p-5 rounded-lg border-2 border-gold-500/20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col justify-center items-center text-center p-3 border-b md:border-b-0 md:border-r border-zinc-900 space-y-1">
                      <span className="text-[10px] font-mono text-zinc-400 font-extrabold uppercase">National Collector Number:</span>
                      <strong className="text-xl font-mono text-white font-black tracking-wider bg-zinc-900 px-3 py-1 rounded">0117051321</strong>
                      <span className="text-[10px] font-mono text-gold-500 font-black tracking-widest">M-PESA REGIONAL NODE</span>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center p-3 border-b md:border-b-0 md:border-r border-zinc-900 space-y-1">
                      <span className="text-[10px] font-mono text-zinc-400 font-extrabold">Sovereign Processing Fee:</span>
                      <strong className="text-2xl font-mono text-gold-400 font-black">Ksh 3,999</strong>
                      <span className="text-[10px] font-mono text-zinc-400 font-bold">PRO-RATED INTENSITY</span>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center p-3 space-y-1">
                      <span className="text-[10px] font-mono text-zinc-400 font-extrabold">Validation Proof Required:</span>
                      <strong className="text-xs font-mono text-white italic font-black bg-zinc-950 px-2 py-1 rounded">M-Pesa Transaction Code</strong>
                      <span className="text-[10px] font-mono text-gold-500/80 font-bold font-mono">e.g. SFA39485XX</span>
                    </div>
                  </div>

                  {/* Payment submit input form */}
                  <form onSubmit={handlePaymentSubmit} className="max-w-xl mx-auto space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-gold-400 uppercase mb-2 font-extrabold">Payer / Initiate Full Name:</label>
                        <input 
                          type="text" 
                          required
                          value={paymentName}
                          onChange={(e) => setPaymentName(e.target.value)}
                          placeholder="Francy Pendy"
                          className="w-full bg-black border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-500 font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-gold-400 uppercase mb-2 font-extrabold">Payer M-Pesa Phone Number:</label>
                        <input 
                          type="text" 
                          required
                          value={paymentPhone}
                          onChange={(e) => setPaymentPhone(e.target.value)}
                          placeholder="e.g. 0712345678"
                          className="w-full bg-black border-2 border-gold-500/20 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-500 font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gold-400 uppercase mb-2 font-extrabold">Transaction Code / Payment Reference:</label>
                      <input 
                        type="text" 
                        required
                        value={mpesaCode}
                        onChange={(e) => setMpesaCode(e.target.value)}
                        placeholder="e.g. SFF294LN89X"
                        className="w-full bg-black border-2 border-gold-500/30 rounded-lg px-4 py-3 text-sm text-gold-400 focus:outline-none focus:border-gold-500 font-mono tracking-widest uppercase text-center font-black"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={submittingPayment}
                      className="w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-black font-mono text-xs py-4 rounded-lg font-black tracking-widest uppercase transition-all shadow-md shadow-gold-500/30 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {submittingPayment ? <RefreshCw className="w-4 h-4 animate-spin text-black" /> : <QrCode className="w-4 h-4" />}
                      {submittingPayment ? "DECODING CORE TRANSACTION PARITY..." : "SUBMIT LODGE SANCTUARY TRANSACTIONS REF"}
                    </button>
                  </form>

                </div>

              </div>
            )}

            {/* STAGE 4: PROVISIONAL SUBMITTED WAITING AND TIME TRAVEL */}
            {paymentProcessed && (
              <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
                
                <div className="bg-[#0b0e14]/95 border-2 border-gold-500/30 p-6 md:p-8 rounded-xl text-center space-y-6 shadow-2xl relative overflow-hidden bg-gradient-to-br from-black to-[#05070a]">
                  
                  {/* Visual Background Symbol lights */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500/5 opacity-[0.03] pointer-events-none text-[200px] font-mono font-black select-none">
                    VI VI VI
                  </div>

                  <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto space-y-4">
                    <div className="p-4 rounded-full bg-gold-500/10 border-2 border-gold-500/30 text-gold-400 mb-2">
                      <CheckCircle className="w-16 h-16 animate-pulse text-gold-400" />
                    </div>

                    <h3 className="text-3xl font-serif text-white font-black tracking-wide">WELCOME, DEAR INITIATOR COUNCIL MEMBER</h3>
                    <p className="text-zinc-200 font-mono text-xs p-3 bg-black border-2 border-gold-500/20 rounded font-bold">
                      REGISTRATION NODE: <span className="text-gold-400 font-black text-sm">{mpesaCode.toUpperCase()}</span> | VERIFICATION PROOF INDEXED
                    </p>

                    <div className="text-xs md:text-sm text-zinc-300 font-bold leading-relaxed space-y-3 pt-3 font-sans">
                      <p>
                        Your submission is securely sealed into the Sovereign high core ledger. A designated visual escort from the local <span className="text-gold-400 font-black">{KENYA_TEMPLES[regData.county]?.name}</span> has been assigned to verify personal coordinate patterns.
                      </p>
                      
                      <div className="p-4 bg-black border-2 border-dashed border-gold-500/30 rounded text-gold-500 font-mono text-xs mt-3 leading-normal">
                        ⚠️ STANDARD INITIATION NOTIFICATION: <strong className="text-gold-400 font-black">WAIT 7 DAYS</strong> while high ritual elders assemble, synchronize, and calibrate your customized Grand Certificate of Illumination bearing your verified elite **666 code**.
                      </div>
                    </div>
                  </div>

                  {/* FAST FORWARD SIMULATION INTERACTIVE COMPONENT */}
                  <div className="border-2 border-gold-500/20 rounded-xl bg-gradient-to-br from-black to-[#0e121a] p-6 mt-8 space-y-4 text-center">
                    <div className="inline-flex p-3 rounded-full bg-gold-500/15 text-gold-400 mb-1 border-2 border-gold-500/25 animate-bounce">
                      <Hourglass className="w-8 h-8" />
                    </div>
                    
                    <h4 className="text-base font-serif text-gold-450 font-black uppercase tracking-widest">
                      Covenant Time travel Accelerator
                    </h4>
                    <p className="text-zinc-300 text-xs font-bold max-w-lg mx-auto leading-normal font-sans">
                      We've provided a Sovereign Temporal accelerator grid to bypass the literal 7-day celestial waiting orbit. Click below to warp 7 days and view your custom Grand Initiates badge credentials.
                    </p>

                    {/* Progress representation */}
                    {timeWarpActive ? (
                      <div className="max-w-md mx-auto space-y-3 py-3">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="font-extrabold text-zinc-300">Progress: Day {daysElapsed} / 7</span>
                          <span className="text-gold-400 animate-pulse font-black">WARPING WORLD CORE GRIDS...</span>
                        </div>
                        <div className="w-full bg-black h-3.5 rounded-full overflow-hidden border-2 border-zinc-900">
                          <div 
                            className="bg-gradient-to-r from-gold-500 via-amber-400 to-gold-400 h-full transition-all duration-300"
                            style={{ width: `${(daysElapsed / 7) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-[11px] font-mono text-gold-400 uppercase block font-black animate-pulse">
                          {warpStage}
                        </span>
                      </div>
                    ) : daysElapsed >= 7 ? (
                      <div className="text-[#2ebd7f] font-mono text-xs font-black py-2 bg-black border border-emerald-950/50 p-2 rounded max-w-md mx-auto">
                        ★ WARP COMPLETE: Day-7 celestial circle fully integrated. Your secret certificate is ready.
                      </div>
                    ) : (
                      <button 
                        onClick={handleAccelerateTime}
                        className="bg-gold-500 hover:bg-gold-400 text-black font-mono text-xs px-6 py-3.5 rounded-lg font-black tracking-widest transition-all border border-gold-400/30 relative z-10 hover:scale-102 cursor-pointer shadow-lg shadow-gold-500/35 uppercase"
                      >
                        WARP COVENANT TIME GRID (FAST FORWARD 7 DAYS)
                      </button>
                    )}
                  </div>

                </div>

                {/* GORGEOUS INTRINSICALLY DETAILED HIGH-FIDELITY CERTIFICATE REVELATION */}
                {daysElapsed >= 7 && (
                  <div className="border-[6px] border-double border-gold-500 rounded-2xl bg-gradient-to-b from-[#0b0e14] via-black to-[#0b0e14] p-8 md:p-12 shadow-2xl relative overflow-hidden leading-relaxed text-gold-100 font-serif">
                    
                    {/* Decorative masonic border corners */}
                    <div className="absolute top-4 left-4 border-t-2 border-l-2 border-gold-500 w-8 h-8 pointer-events-none"></div>
                    <div className="absolute top-4 right-4 border-t-2 border-r-2 border-gold-500 w-8 h-8 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-gold-500 w-8 h-8 pointer-events-none"></div>
                    <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-gold-500 w-8 h-8 pointer-events-none"></div>

                    {/* Faded watermarked symbol background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none text-[320px]">
                      👁
                    </div>

                    <div className="relative z-10 text-center space-y-6">
                      
                      {/* Top sealing header */}
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-[9px] font-mono text-gold-500 tracking-[0.5em] uppercase font-bold">E PLURIBUS DEUM SECULORUM</span>
                        <div className="w-14 h-14 border border-gold-500 rounded-full flex items-center justify-center p-2 transform rotate-45">
                          <Compass className="w-full h-full text-gold-400 transform -rotate-45" />
                        </div>
                        <span className="text-xs font-mono text-gold-400 uppercase tracking-widest pt-2 font-black">SOVEREIGN GRAND COUNCIL SPECIFICATION</span>
                      </div>

                      {/* Title credentials */}
                      <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gold-400 tracking-widest uppercase font-black drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]">
                          Covenant Certificate of Illumination
                        </h2>
                        <p className="text-gold-300 italic text-sm font-bold mt-1">
                          Be it known across the principal orbits and planetary administrative circles that:
                        </p>
                      </div>

                      {/* Name placeholder */}
                      <div className="py-6 border-y border-zinc-800 max-w-2xl mx-auto space-y-4">
                        <h3 className="text-2xl md:text-3xl font-serif text-white tracking-widest uppercase font-black underline decoration-gold-400 decoration-double underline-offset-8">
                          {regData.fullName || "Francy Pendy"}
                        </h3>
                        
                        <p className="text-zinc-200 text-xs md:text-sm font-bold leading-relaxed max-w-xl mx-auto italic font-sans">
                          Having successfully verified Google alignment credentials, minted absolute node proof stamps on the sovereign blockchain core ledger, and paid covenant registry validation fees of Ksh 3,999 to Node 0117051321, is hereby accepted into the regional sanctuary of:
                        </p>
                        
                        <p className="font-mono text-gold-400 font-black text-sm uppercase tracking-wider block bg-black border-2 border-gold-500/25 p-3 rounded-lg max-w-xl mx-auto">
                          {KENYA_TEMPLES[regData.county]?.name || "Grand Nairobi Lodge Sclater Corridor"} <span className="block text-[11px] text-zinc-400 mt-1">COUNTY: {regData.county} | CONSTITUENCY: {regData.constituency}</span>
                        </p>
                      </div>

                      {/* Specific parameters details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center font-mono text-[10px] uppercase text-zinc-300">
                        <div className="p-3 bg-black rounded border-2 border-gold-500/20">
                          <span className="text-gold-400 font-extrabold block mb-1 text-[11px]">COVENANT UNLOCK</span>
                          <strong className="text-white text-xs block font-black">{regData.purpose} SECURED</strong>
                        </div>
                        <div className="p-3 bg-black rounded border-2 border-gold-500/20">
                          <span className="text-gold-400 font-extrabold block mb-1 text-[11px]">COGNIZANT REF</span>
                          <strong className="text-white text-xs block font-black">{mpesaCode.toUpperCase()}</strong>
                        </div>
                        <div className="p-3 bg-black rounded border-2 border-gold-500/20">
                          <span className="text-gold-400 font-extrabold block mb-1 text-[11px]">ACTIVE MATRIX</span>
                          <strong className="text-white text-xs block font-black">{blockchainToken.substring(0, 11)}...</strong>
                        </div>
                        <div className="p-3 bg-black rounded border-2 border-gold-500/20">
                          <span className="text-gold-400 font-black block mb-1 text-[11px]">SOVEREIGN CODE</span>
                          <strong className="text-gold-400 text-xs font-black block flex items-center justify-center gap-1">
                            <Flame className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                            666-INIT-SEAL
                          </strong>
                        </div>
                      </div>

                      {/* Sign-off seal systems */}
                      <div className="pt-6 flex flex-col md:flex-row justify-between items-center max-w-2xl mx-auto text-xs font-mono text-zinc-400 border-t border-zinc-805 gap-6">
                        <div className="text-center md:text-left flex flex-col gap-1 font-bold">
                          <span>SIGNATURE: Supreme Council High Presidium</span>
                          <strong className="text-gold-400 font-serif text-sm font-black">👁 Grand Master Adam Weishaupt</strong>
                        </div>
                        
                        {/* Golden Sovereign Seal visual */}
                        <div className="w-20 h-20 bg-gold-500 text-black font-black uppercase p-1.5 rounded-full border-2 border-dashed border-black flex flex-col items-center justify-center text-center text-[8px] tracking-tighter leading-none shadow-lg shadow-gold-500/30 transform hover:rotate-12 transition-transform cursor-pointer">
                          <Eye className="w-5 h-5 mb-1" />
                          <span>SOVEREIGN</span>
                          <span>SEAL 666</span>
                        </div>

                        <div className="text-center md:text-right flex flex-col gap-1 font-bold">
                          <span>Verified: Regional Registry Master</span>
                          <strong className="text-gold-400 font-serif text-sm font-black">🗝 Lodge Warden Nyerere</strong>
                        </div>
                      </div>

                      {/* Download triggering and mock print */}
                      <div className="pt-8">
                        <button 
                          onClick={() => {
                            window.print();
                          }}
                          className="bg-gold-500 hover:bg-gold-400 text-black font-mono text-xs px-6 py-4 rounded-lg font-black uppercase transition-all shadow-lg shadow-gold-500/35 flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
                        >
                          <FileBadge className="w-4.5 h-4.5" />
                          PRINT / DOWNLOAD SOVEREIGN COVENANT CERTIFICATE
                        </button>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

      </main>

      {/* FOOTER SECTION: WORLD GLOBAL HEADQUARTERS AS REQUESTED */}
      <footer className="border-t border-zinc-850 bg-black py-16 px-6 tracking-wide mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Top disclaimer & quote */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-gold-400 font-mono text-xs uppercase tracking-widest font-black">
              <Compass className="w-4 h-4 animate-spin" />
              <span>THE SUPREME SEEDS OF GEOMETRICAL INFLUENCE</span>
            </div>
            <p className="text-zinc-250 font-serif italic text-sm font-bold leading-relaxed">
              "Novus Ordo Seclorum... we do not operate under ordinary public consensus, but rather guide the temporal coordinates utilizing the structural patterns laid by ancient supreme architects since antiquity."
            </p>
          </div>

          {/* Core request: World Headquarters grid */}
          <div className="space-y-4">
            <h4 className="text-center text-sm font-mono text-gold-400 uppercase tracking-widest mb-8 font-black">
              MAIN ARCHETYPAL HEADQUARTERS IN THE WORLD
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* HQ 1: London */}
              <div className="bg-[#0b0e14]/90 border-2 border-gold-500/10 p-5 rounded-lg space-y-3 hover:border-gold-500/40 transition-colors">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                  <span className="font-serif text-gold-400 font-black text-base">LONDON CHAPTER</span>
                  <Award className="w-4.5 h-4.5 text-gold-500" />
                </div>
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <strong className="block text-gold-400 font-mono text-[10px] uppercase font-black">Primary Sanctuary Core:</strong>
                  <p className="font-mono text-[11px] text-zinc-250 leading-normal font-bold">
                    United Grand Lodge of England, Freemasons' Hall, Great Queen Street, London WC2B 5AZ
                  </p>
                  <p className="text-[11px] leading-relaxed pt-1 font-bold font-sans text-zinc-400">
                    The historical administrative baseline. Founded in 1717 to regulate classical monetary flows, sovereign charter distributions, and continental high-lodge coordinates.
                  </p>
                </div>
              </div>

              {/* HQ 2: Rome */}
              <div className="bg-[#0b0e14]/90 border-2 border-gold-500/10 p-5 rounded-lg space-y-3 hover:border-gold-500/40 transition-colors">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                  <span className="font-serif text-gold-400 font-black text-base">ROME CHAPTER</span>
                  <Award className="w-4.5 h-4.5 text-gold-500" />
                </div>
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <strong className="block text-gold-400 font-mono text-[10px] uppercase font-black">Primary Sanctuary Core:</strong>
                  <p className="font-mono text-[11px] text-zinc-250 leading-normal font-bold">
                    Piazza del Gesù / Palazzo Giustiniani, Rome, Italy
                  </p>
                  <p className="text-[11px] leading-relaxed pt-1 font-bold font-sans text-zinc-400">
                    The spiritual coordinate hub. Governs esoteric historical timelines, tracking grid overlays, and continental cathedral orientation mapping of ancient papal power corridors.
                  </p>
                </div>
              </div>

              {/* HQ 3: Washington DC */}
              <div className="bg-[#0b0e14]/90 border-2 border-gold-500/10 p-5 rounded-lg space-y-3 hover:border-gold-500/40 transition-colors">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                  <span className="font-serif text-gold-400 font-black text-base">WASHINGTON D.C.</span>
                  <Award className="w-4.5 h-4.5 text-gold-500" />
                </div>
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <strong className="block text-gold-400 font-mono text-[10px] uppercase font-black">Primary Sanctuary Core:</strong>
                  <p className="font-mono text-[11px] text-zinc-250 leading-normal font-bold">
                    House of the Temple, Supreme Council 33°, 1733 16th Street NW, Washington D.C., USA
                  </p>
                  <p className="text-[11px] leading-relaxed pt-1 font-bold font-sans text-zinc-400">
                    The executive military-intelligence prism. Positioned directly along the primary geometric street grids of Washington to projection power and coordinates across the Atlantic rim.
                  </p>
                </div>
              </div>

              {/* HQ 4: Paris */}
              <div className="bg-[#0b0e14]/90 border-2 border-gold-500/10 p-5 rounded-lg space-y-3 hover:border-gold-500/40 transition-colors">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                  <span className="font-serif text-gold-400 font-black text-base">PARIS CHAPTER</span>
                  <Award className="w-4.5 h-4.5 text-gold-500" />
                </div>
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <strong className="block text-gold-400 font-mono text-[10px] uppercase font-black">Primary Sanctuary Core:</strong>
                  <p className="font-mono text-[11px] text-zinc-250 leading-normal font-bold">
                    Grand Orient de France Temple, 16 Rue Cadet, 75009 Paris, France
                  </p>
                  <p className="text-[11px] leading-relaxed pt-1 font-bold font-sans text-zinc-400">
                    The philosophical-revolution engine. Coordinates the secular blueprints, structural European political unions, and continental intellectual guilds since the 1789 shifts.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
            <span>© 2026 ILLUMINATI ORGANIZATION SOVEREIGN COUNCIL. ALL INTENTION GRIDS ACTIVE.</span>
            <div className="flex gap-4">
              <span>CIPHER-KEYS: 666-SYNC</span>
              <span>VERIFICATION STAMP: blockchain_STAKE</span>
              <span>HOST: CLOUDING_REGIONAL</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
