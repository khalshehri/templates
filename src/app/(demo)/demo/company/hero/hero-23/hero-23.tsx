"use client";

import { ArrowRight, Atom } from "lucide-react";

const content = {
  en: {
    badge: "Quantum Digital",
    heading1: "Infinite",
    heading2: "Possibilities",
    sub: "In the vast field of digital potential, every particle of data becomes a building block for extraordinary outcomes. We harness the quantum leap.",
    cta1: "Explore the Field",
    cta2: "Learn More",
    stat1Value: "\u221E",
    stat1Label: "Potential",
    stat2Value: "10\u2076",
    stat2Label: "Data Points",
    stat3Value: "1",
    stat3Label: "Unified Platform",
  },
  ar: {
    badge: "\u0631\u0642\u0645\u064A \u0643\u0645\u0651\u064A",
    heading1: "\u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A",
    heading2: "\u0644\u0627 \u0646\u0647\u0627\u0626\u064A\u0629",
    sub: "\u0641\u064A \u062D\u0642\u0644 \u0627\u0644\u0625\u0645\u0643\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0627\u0644\u0648\u0627\u0633\u0639\u060C \u0643\u0644 \u062C\u0632\u064A\u0621 \u0628\u064A\u0627\u0646\u0627\u062A \u064A\u0635\u0628\u062D \u0644\u0628\u0646\u0629 \u0628\u0646\u0627\u0621 \u0644\u0646\u062A\u0627\u0626\u062C \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629. \u0646\u062D\u0646 \u0646\u0633\u062E\u0651\u0631 \u0627\u0644\u0642\u0641\u0632\u0629 \u0627\u0644\u0643\u0645\u064A\u0629.",
    cta1: "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062D\u0642\u0644",
    cta2: "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F",
    stat1Value: "\u221E",
    stat1Label: "\u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A",
    stat2Value: "10\u2076",
    stat2Label: "\u0646\u0642\u0627\u0637 \u0628\u064A\u0627\u0646\u0627\u062A",
    stat3Value: "1",
    stat3Label: "\u0645\u0646\u0635\u0629 \u0645\u0648\u062D\u062F\u0629",
  },
};

/* ── Particle Generation ─────────────────────────────────────── */

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  layer: "far" | "mid" | "near";
  isBlue: boolean;
  driftAnim: string;
  duration: number;
  delay: number;
}

function generateParticles(): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < 50; i++) {
    const top = (i * 17 + 23) % 100;
    const left = (i * 31 + 7) % 100;
    const isBlue = i % 5 === 0;

    let layer: "far" | "mid" | "near";
    let size: number;
    let opacity: number;
    let duration: number;
    let driftAnim: string;

    if (i < 30) {
      // Far layer — 30 particles
      layer = "far";
      size = 1.5 + (i % 3) * 0.25; // 1.5 - 2px
      opacity = 0.1 + (i % 5) * 0.025; // 0.1 - 0.2
      duration = 30 + (i % 4) * 2.5; // 30-40s slow
      driftAnim = `drift${(i % 3) + 1}`;
    } else if (i < 45) {
      // Mid layer — 15 particles
      layer = "mid";
      size = 2.5 + (i % 4) * 0.33; // 2.5 - 3.5px
      opacity = 0.25 + (i % 5) * 0.03; // 0.25 - 0.4
      duration = 20 + (i % 4) * 2; // 20-28s medium
      driftAnim = `drift${(i % 3) + 4}`;
    } else {
      // Near layer — 5 particles
      layer = "near";
      size = 4 + (i % 3) * 0.5; // 4 - 5px
      opacity = 0.5 + (i % 4) * 0.066; // 0.5 - 0.7
      duration = 15 + (i % 3) * 2; // 15-19s faster
      driftAnim = `drift${(i % 2) + 5}`;
    }

    const delay = (i * 1.3) % 8; // stagger delays 0-8s

    particles.push({
      id: i,
      top,
      left,
      size,
      opacity,
      layer,
      isBlue,
      driftAnim,
      duration,
      delay,
    });
  }

  return particles;
}

const particles = generateParticles();

/* ── Connecting Lines ────────────────────────────────────────── */

const connectingLines = [
  { x1: 20, y1: 15, x2: 35, y2: 28 },
  { x1: 55, y1: 10, x2: 70, y2: 25 },
  { x1: 40, y1: 60, x2: 58, y2: 72 },
  { x1: 75, y1: 45, x2: 88, y2: 55 },
  { x1: 15, y1: 70, x2: 30, y2: 82 },
  { x1: 60, y1: 35, x2: 48, y2: 50 },
];

/* ── Keyframes Style ─────────────────────────────────────────── */

const keyframesCSS = `
  @keyframes drift1 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(12px, -18px); }
    50% { transform: translate(-8px, -30px); }
    75% { transform: translate(20px, -10px); }
  }
  @keyframes drift2 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(-15px, 10px); }
    50% { transform: translate(10px, 25px); }
    75% { transform: translate(-20px, 15px); }
  }
  @keyframes drift3 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(25px, 8px); }
    50% { transform: translate(15px, -20px); }
    75% { transform: translate(-10px, -12px); }
  }
  @keyframes drift4 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(-20px, -25px); }
    50% { transform: translate(18px, -15px); }
    75% { transform: translate(-12px, 20px); }
  }
  @keyframes drift5 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(30px, -12px); }
    50% { transform: translate(-15px, 22px); }
    75% { transform: translate(22px, 30px); }
  }
  @keyframes drift6 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(-28px, 15px); }
    50% { transform: translate(20px, -28px); }
    75% { transform: translate(-18px, -20px); }
  }
  @keyframes gravityPulse {
    0%, 100% { opacity: 0.05; }
    50% { opacity: 0.12; }
  }
  @keyframes contentFade {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes particleGlow {
    0%, 100% { opacity: var(--base-opacity); }
    50% { opacity: calc(var(--base-opacity) + 0.25); }
  }
  @keyframes lineShimmer {
    0%, 100% { opacity: 0.03; }
    50% { opacity: 0.06; }
  }
  @media (prefers-reduced-motion: reduce) {
    .hero23-particle {
      animation: none !important;
    }
    .hero23-gravity {
      animation: none !important;
      opacity: 0.08 !important;
    }
    .hero23-content {
      animation: none !important;
      opacity: 1 !important;
    }
    .hero23-line {
      animation: none !important;
    }
  }
`;

/* ── Component ───────────────────────────────────────────────── */

export function Hero23({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#030306" }}
    >
      <style>{keyframesCSS}</style>

      {/* ── Gravity Well (Radial Glow) ──────────────────────── */}
      <div
        className="hero23-gravity absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.03) 40%, transparent 70%)",
          animation: "gravityPulse 5s ease-in-out infinite",
        }}
      />

      {/* ── Particle Field ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => {
          const color = p.isBlue ? "#60a5fa" : "#ffffff";
          const glowAnim =
            p.layer === "near"
              ? `, particleGlow 3s ease-in-out ${p.delay + 1}s infinite`
              : "";
          return (
            <div
              key={p.id}
              className="hero23-particle absolute rounded-full"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: color,
                opacity: p.opacity,
                ["--base-opacity" as string]: p.opacity,
                animation: `${p.driftAnim} ${p.duration}s ease-in-out ${p.delay}s infinite${glowAnim}`,
                boxShadow:
                  p.layer === "near"
                    ? `0 0 ${p.size * 2}px ${color}40`
                    : p.layer === "mid"
                      ? `0 0 ${p.size}px ${color}20`
                      : "none",
              }}
            />
          );
        })}
      </div>

      {/* ── Connecting Lines (SVG) ──────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {connectingLines.map((line, i) => (
          <line
            key={i}
            className="hero23-line"
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="white"
            strokeWidth="0.08"
            style={{
              opacity: 0.035,
              animation: `lineShimmer ${4 + i * 0.6}s ease-in-out ${i * 0.8}s infinite`,
            }}
          />
        ))}
      </svg>

      {/* ── Content ─────────────────────────────────────────── */}
      <div
        className="hero23-content relative z-10 w-full max-w-4xl mx-auto px-6 py-32 text-center"
        style={{
          animation: "contentFade 1s ease-out 0.3s both",
        }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-wide"
            style={{
              fontFamily: fontBody,
              backgroundColor: "rgba(96,165,250,0.08)",
              border: "1px solid rgba(96,165,250,0.15)",
              color: "#60a5fa",
            }}
          >
            <Atom className="w-4 h-4" />
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          style={{ fontFamily: fontHeading }}
        >
          <span className="block text-white">{t.heading1}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.heading2}
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{
            fontFamily: fontBody,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {t.sub}
        </p>

        {/* CTAs */}
        <div
          className="flex items-center justify-center gap-4 mb-16"
          style={{
            flexDirection: isAr ? "row-reverse" : "row",
          }}
        >
          <button
            className="cursor-pointer inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]"
            style={{
              fontFamily: fontBody,
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            }}
          >
            {t.cta1}
            <ArrowRight
              className="w-5 h-5"
              style={{
                transform: isAr ? "scaleX(-1)" : "none",
              }}
            />
          </button>

          <button
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-white/[0.08] active:scale-[0.98]"
            style={{
              fontFamily: fontBody,
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16">
          {[
            { value: t.stat1Value, label: t.stat1Label },
            { value: t.stat2Value, label: t.stat2Label },
            { value: t.stat3Value, label: t.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{
                  fontFamily: fontHeading,
                  background:
                    "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{
                  fontFamily: fontBody,
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Fade ─────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #030306 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
