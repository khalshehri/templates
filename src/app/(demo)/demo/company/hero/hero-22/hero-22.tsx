"use client";

import { ArrowRight, Building } from "lucide-react";

const content = {
  en: {
    badge: "Digital Architecture",
    heading1: "We Build",
    heading2: "Cities of Code",
    sub: "Like master architects, we construct digital ecosystems block by block. Every component is precisely placed, every system carefully integrated.",
    cta1: "Start Building",
    cta2: "View Blueprints",
    stat1Value: "500+",
    stat1Label: "Buildings Completed",
    stat2Value: "99.9%",
    stat2Label: "Structural Integrity",
    stat3Value: "50+",
    stat3Label: "Cities Served",
    stat4Value: "24/7",
    stat4Label: "Monitoring",
  },
  ar: {
    badge: "هندسة رقمية",
    heading1: "نبني",
    heading2: "مدن الكود",
    sub: "كمهندسين معماريين بارعين، نشيّد أنظمة رقمية حجراً حجراً. كل مكون موضوع بدقة، وكل نظام متكامل بعناية.",
    cta1: "ابدأ البناء",
    cta2: "عرض المخططات",
    stat1Value: "+500",
    stat1Label: "مبنى مكتمل",
    stat2Value: "99.9%",
    stat2Label: "سلامة هيكلية",
    stat3Value: "+50",
    stat3Label: "مدينة مخدومة",
    stat4Value: "24/7",
    stat4Label: "مراقبة مستمرة",
  },
};

/* ---- Isometric city data ---- */

// 6 columns x 5 rows = 30 blocks
const COLS = 6;
const ROWS = 5;

interface CityBlock {
  row: number;
  col: number;
  height: number;
  isAccent: boolean;
}

const blocks: CityBlock[] = [];
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const i = r * COLS + c;
    const height = 40 + ((i * 37 + 13) % 160);
    // accent blocks at deterministic positions
    const isAccent = (r === 2 && c === 3) || (r === 1 && c === 4) || (r === 3 && c === 1);
    blocks.push({ row: r, col: c, height, isAccent });
  }
}

// face colors
const topColors = ["#334155", "#475569", "#64748b"];
const leftColors = ["#293548", "#3b4a5e", "#56657a"];
const rightColors = ["#1e293b", "#334155", "#475569"];

const accentTop = "#3b82f6";
const accentLeft = "#2563eb";
const accentRight = "#1d4ed8";

function getColorIndex(i: number): number {
  return (i * 7 + 3) % 3;
}

export function Hero22({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{ background: "#0f172a", fontFamily: fontBody }}
    >
      <style>{`
        @keyframes blockRise {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes accentPulse {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }

        @keyframes contentFade {
          0% {
            transform: translateY(25px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }

        .hero22-content {
          animation: contentFade 0.8s ease-out forwards;
          opacity: 0;
        }

        .hero22-content-d1 {
          animation-delay: 0.1s;
        }
        .hero22-content-d2 {
          animation-delay: 0.3s;
        }
        .hero22-content-d3 {
          animation-delay: 0.5s;
        }
        .hero22-content-d4 {
          animation-delay: 0.7s;
        }
        .hero22-content-d5 {
          animation-delay: 0.9s;
        }

        .hero22-block {
          transform-origin: bottom center;
          animation: blockRise 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .hero22-accent {
          animation: blockRise 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     accentPulse 3s ease-in-out infinite;
          animation-delay: var(--rise-delay), calc(var(--rise-delay) + 0.8s);
          opacity: 0;
        }

        .hero22-accent .hero22-top-face {
          animation: glowPulse 3s ease-in-out infinite;
          animation-delay: calc(var(--rise-delay) + 0.8s);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero22-content,
          .hero22-block,
          .hero22-accent,
          .hero22-accent .hero22-top-face {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
          .hero22-block,
          .hero22-accent {
            transform: scaleY(1);
          }
        }
      `}</style>

      {/* Content — top portion */}
      <div className="relative z-10 flex-1 flex items-start justify-center pt-20 sm:pt-28 lg:pt-32 px-6">
        <div className="max-w-4xl text-center" dir={isAr ? "rtl" : "ltr"}>
          {/* Badge */}
          <div className="hero22-content hero22-content-d1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
            <Building className="w-4 h-4 text-blue-400" />
            <span
              className="text-sm text-blue-300 tracking-wide"
              style={{ fontFamily: fontBody }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero22-content hero22-content-d2 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: fontHeading }}
          >
            {t.heading1}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)",
              }}
            >
              {t.heading2}
            </span>
          </h1>

          {/* Sub */}
          <p
            className="hero22-content hero22-content-d3 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: fontBody }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="hero22-content hero22-content-d4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              className="cursor-pointer group flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                fontFamily: fontBody,
              }}
            >
              {t.cta1}
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </button>
            <button
              className="cursor-pointer flex items-center gap-2 px-8 py-4 rounded-xl text-slate-300 font-semibold text-lg border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 hover:bg-white/5"
              style={{ fontFamily: fontBody }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Stats */}
          <div className="hero22-content hero22-content-d5 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {(
              [
                [t.stat1Value, t.stat1Label],
                [t.stat2Value, t.stat2Label],
                [t.stat3Value, t.stat3Label],
                [t.stat4Value, t.stat4Label],
              ] as const
            ).map(([value, label], idx) => (
              <div key={idx} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: fontHeading }}
                >
                  {value}
                </div>
                <div
                  className="text-xs sm:text-sm text-slate-500"
                  style={{ fontFamily: fontBody }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Isometric Cityscape — bottom */}
      <div className="relative z-0 flex items-end justify-center pb-0 h-[340px] sm:h-[400px] lg:h-[440px]">
        {/* Gradient fade from content to city */}
        <div
          className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #0f172a, transparent)",
          }}
        />

        {/* Isometric container */}
        <div
          className="relative"
          style={{
            transform: "rotateX(55deg) rotateZ(-45deg)",
            transformStyle: "preserve-3d",
            width: `${COLS * 64}px`,
            height: `${ROWS * 64}px`,
          }}
        >
          {blocks.map((block, i) => {
            const ci = getColorIndex(i);
            const top = block.isAccent ? accentTop : topColors[ci];
            const left = block.isAccent ? accentLeft : leftColors[ci];
            const right = block.isAccent ? accentRight : rightColors[ci];

            // wave delay: front-right rises first, back-left last
            const waveDelay = ((ROWS - 1 - block.row) + (COLS - 1 - block.col)) * 0.08 + 0.5;

            const blockW = 52;
            const blockD = 52;
            const gap = 10;
            const posX = block.col * (blockW + gap);
            const posY = block.row * (blockD + gap);

            return (
              <div
                key={i}
                className={block.isAccent ? "hero22-accent" : "hero22-block"}
                style={
                  {
                    "--rise-delay": `${waveDelay}s`,
                    animationDelay: `${waveDelay}s`,
                    position: "absolute",
                    left: `${posX}px`,
                    top: `${posY}px`,
                    width: `${blockW}px`,
                    height: `${block.height}px`,
                    transformStyle: "preserve-3d",
                    transformOrigin: "bottom center",
                  } as React.CSSProperties
                }
              >
                {/* Top face */}
                <div
                  className="hero22-top-face"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${blockW}px`,
                    height: `${blockD}px`,
                    background: top,
                    transform: `translateZ(${block.height}px)`,
                    borderRadius: "2px",
                  }}
                />
                {/* Front face */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: `${blockW}px`,
                    height: `${block.height}px`,
                    background: `linear-gradient(to bottom, ${left}, ${darken(left, 0.15)})`,
                    transformOrigin: "bottom center",
                    transform: "rotateX(-90deg)",
                    borderRadius: "0 0 2px 2px",
                  }}
                />
                {/* Right face */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: `${block.height}px`,
                    height: `${blockD}px`,
                    background: `linear-gradient(to right, ${right}, ${darken(right, 0.1)})`,
                    transformOrigin: "right center",
                    transform: "rotateY(90deg)",
                    borderRadius: "0 2px 2px 0",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Reflected glow on "ground" */}
        <div
          className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}

/** Darken a hex color by a fraction (0-1). */
function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, ((num >> 16) & 0xff) * (1 - amount)) | 0;
  const g = Math.max(0, ((num >> 8) & 0xff) * (1 - amount)) | 0;
  const b = Math.max(0, (num & 0xff) * (1 - amount)) | 0;
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
