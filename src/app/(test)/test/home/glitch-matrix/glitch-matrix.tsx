"use client";

/**
 * Glitch Matrix Hero
 * ---
 * Matrix-style falling characters (Arabic & Latin mix) with glitch distortion
 * effects. Random character columns fall at different speeds. Occasional
 * horizontal glitch bars. Green-on-black with RGB chromatic aberration on the
 * heading. Fully CSS-driven animations — no JS timers.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "Break the Code",
    subheading: "We build digital experiences that defy convention",
    description:
      "Enter the matrix of modern web development. We craft systems that are fast, resilient, and impossible to ignore.",
    cta: "Jack In",
    ctaSecondary: "Learn More",
  },
  ar: {
    heading: "اكسر الشيفرة",
    subheading: "نبني تجارب رقمية تتحدى المألوف",
    description:
      "ادخل عالم تطوير الويب الحديث. نصنع أنظمة سريعة ومتينة ويستحيل تجاهلها.",
    cta: "ابدأ الآن",
    ctaSecondary: "اعرف المزيد",
  },
};

/* Character columns — mix of binary, katakana-style, and Arabic glyphs */
const COLUMNS: string[] = [
  "01001ア10カ0キ1ク0ケ1コ0サ1",
  "بتثجحخد0101ذ1ر0ز1س0ش1",
  "10110タ0チ1ツ0テ1ト0ナ1ニ0",
  "صضطظعغف0110ق1ك0ل1م0ن1",
  "ヌネノハ01ヒフ10ヘホ01マ10ミ",
  "0هوي01أإؤ10ئ01ء10ة01ى10",
  "ムメモヤ01ユ10ヨ01ラ10リ01ル",
  "10ابتث01جح10خد01ذر10زس01",
  "レロワヲ10ン01ア10イ01ウ10エ",
  "شصضط01ظع10غف01قك10لم01ن",
  "01オカキ10クケ01コサ10シス01",
  "هوي0أ1إ0ؤ1ئ0ء1ة0ى1اب0",
  "セソタチ01ツテ10トナ01ニヌ10",
  "تثج0ح1خ0د1ذ0ر1ز0س1ش0ص",
  "ネノハヒ10フヘ01ホマ10ミム01",
  "ضطظ0ع1غ0ف1ق0ك1ل0م1ن0ه",
];

export function GlitchMatrix({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      style={{ fontFamily: "'Courier New', monospace" }}
    >
      {/* ── Inline keyframes ──────────────────────────────────── */}
      <style>{`
        @keyframes gm-fall {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        @keyframes gm-glitch-bar {
          0%, 92%, 100% { opacity: 0; }
          93%            { opacity: 1; clip-path: inset(20% 0 75% 0); }
          95%            { opacity: 1; clip-path: inset(55% 0 30% 0); }
          97%            { opacity: 0; }
        }

        @keyframes gm-glitch-bar-2 {
          0%, 88%, 100% { opacity: 0; }
          89%           { opacity: 1; clip-path: inset(40% 0 50% 0); }
          91%           { opacity: 1; clip-path: inset(10% 0 80% 0); }
          93%           { opacity: 0; }
        }

        @keyframes gm-glitch-bar-3 {
          0%, 95%, 100% { opacity: 0; }
          96%           { opacity: 1; clip-path: inset(65% 0 25% 0); }
          98%           { opacity: 1; clip-path: inset(5% 0 90% 0); }
          99%           { opacity: 0; }
        }

        @keyframes gm-heading-glitch {
          0%, 90%, 100% {
            transform: translate(0, 0) skewX(0deg);
          }
          91% {
            transform: translate(-4px, 2px) skewX(-2deg);
          }
          92% {
            transform: translate(3px, -1px) skewX(3deg);
          }
          93% {
            transform: translate(-2px, 0) skewX(0deg);
          }
          94% {
            transform: translate(0, 0) skewX(0deg);
          }
        }

        @keyframes gm-heading-glitch-2 {
          0%, 85%, 100% {
            transform: translate(0, 0) skewX(0deg);
          }
          86% {
            transform: translate(5px, -2px) skewX(4deg);
          }
          87% {
            transform: translate(-3px, 1px) skewX(-1deg);
          }
          88% {
            transform: translate(0, 0) skewX(0deg);
          }
        }

        @keyframes gm-flicker {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1; }
        }

        @keyframes gm-scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        @keyframes gm-pulse-glow {
          0%, 100% { box-shadow: 0 0 8px rgba(0,255,65,0.4), 0 0 20px rgba(0,255,65,0.1); }
          50%      { box-shadow: 0 0 16px rgba(0,255,65,0.7), 0 0 40px rgba(0,255,65,0.2); }
        }

        .gm-column {
          position: absolute;
          top: 0;
          writing-mode: vertical-lr;
          color: #00ff41;
          font-size: 14px;
          line-height: 1.2;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          animation: gm-fall var(--dur) linear infinite;
          animation-delay: var(--delay);
          opacity: var(--opacity);
          text-shadow: 0 0 8px rgba(0,255,65,0.5);
        }

        .gm-heading-wrap {
          animation: gm-heading-glitch 4s ease-in-out infinite;
        }

        .gm-heading-text {
          color: #00ff41;
          text-shadow:
            2px 0 #ff0040,
            -2px 0 #00e5ff,
            0 0 20px rgba(0,255,65,0.5),
            0 0 40px rgba(0,255,65,0.2);
          animation: gm-heading-glitch-2 6s ease-in-out infinite;
        }

        .gm-glitch-overlay-1 {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,255,65,0.03) 2px,
            rgba(0,255,65,0.03) 4px
          );
          pointer-events: none;
          animation: gm-glitch-bar 8s linear infinite;
          z-index: 5;
        }

        .gm-glitch-overlay-2 {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,0,64,0.08) 50%, transparent 100%);
          pointer-events: none;
          animation: gm-glitch-bar-2 6s linear infinite;
          z-index: 5;
        }

        .gm-glitch-overlay-3 {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.08) 50%, transparent 100%);
          pointer-events: none;
          animation: gm-glitch-bar-3 10s linear infinite;
          z-index: 5;
        }

        .gm-scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(0,255,65,0.015) 1px,
            rgba(0,255,65,0.015) 2px
          );
          pointer-events: none;
          z-index: 4;
        }

        .gm-btn-primary {
          animation: gm-pulse-glow 3s ease-in-out infinite;
        }

        .gm-btn-primary:hover {
          box-shadow: 0 0 24px rgba(0,255,65,0.8), 0 0 60px rgba(0,255,65,0.3) !important;
        }
      `}</style>

      {/* ── Falling character columns ─────────────────────────── */}
      {COLUMNS.map((chars, i) => (
        <div
          key={i}
          className="gm-column"
          style={
            {
              [isAr ? "right" : "left"]: `${(i / COLUMNS.length) * 100}%`,
              "--dur": `${8 + (i % 5) * 3}s`,
              "--delay": `-${(i * 1.7) % 12}s`,
              "--opacity": `${0.12 + (i % 4) * 0.08}`,
            } as React.CSSProperties
          }
        >
          {chars}
        </div>
      ))}

      {/* ── Glitch bars / scanlines ───────────────────────────── */}
      <div className="gm-glitch-overlay-1" />
      <div className="gm-glitch-overlay-2" />
      <div className="gm-glitch-overlay-3" />
      <div className="gm-scanline" />

      {/* ── Vignette ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-[6]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────────── */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 py-32 max-w-4xl mx-auto ${
          isAr ? "text-right" : "text-left"
        } md:text-center`}
      >
        {/* Sub-label */}
        <p
          className="text-[#00ff41]/60 text-sm tracking-[0.3em] uppercase mb-6"
          style={{ animation: "gm-flicker 4s ease-in-out infinite" }}
        >
          {isAr ? "[ تشغيل النظام ]" : "[ SYSTEM ONLINE ]"}
        </p>

        {/* Heading with glitch + chromatic aberration */}
        <div className="gm-heading-wrap mb-6">
          <h1
            className={`gm-heading-text font-bold leading-tight ${
              isAr ? "text-4xl md:text-6xl lg:text-7xl" : "text-5xl md:text-7xl lg:text-8xl"
            }`}
          >
            {t.heading}
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-[#00ff41]/80 text-lg md:text-2xl mb-4 max-w-2xl">
          {t.subheading}
        </p>

        {/* Divider */}
        <div
          className="w-24 h-px my-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00ff41, transparent)",
          }}
        />

        {/* Description */}
        <p className="text-[#00ff41]/50 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          {t.description}
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 ${
            isAr ? "sm:flex-row-reverse" : ""
          }`}
        >
          {/* Primary */}
          <button
            className={`gm-btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded border border-[#00ff41] bg-[#00ff41]/10 text-[#00ff41] font-semibold text-base transition-colors hover:bg-[#00ff41]/20 ${
              isAr ? "flex-row-reverse" : ""
            }`}
          >
            {t.cta}
            <ArrowRight
              className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`}
            />
          </button>

          {/* Secondary */}
          <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded border border-[#00ff41]/30 text-[#00ff41]/70 font-semibold text-base transition-colors hover:border-[#00ff41]/60 hover:text-[#00ff41]">
            {t.ctaSecondary}
          </button>
        </div>

        {/* Terminal-style footer line */}
        <p
          className="mt-16 text-[#00ff41]/30 text-xs tracking-widest"
          style={{ animation: "gm-flicker 3s ease-in-out infinite" }}
        >
          {isAr
            ? "█ جاهز للإدخال..."
            : "█ READY FOR INPUT..."}
        </p>
      </div>
    </section>
  );
}
