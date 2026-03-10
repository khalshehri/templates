"use client";

/**
 * Origami Hero Template
 *
 * Minimalist Japanese-inspired paper folding aesthetic. CSS triangles and
 * geometric shapes arranged to suggest folded paper cranes with subtle
 * drop shadows implying 3D depth. Clean, zen composition with generous
 * whitespace, a soft paper texture overlay, and a muted palette of warm
 * white, soft coral, sage green, and deep indigo accents. Gentle unfold
 * animations bring the cranes to life on load.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "Crafted with\nPrecision",
    subheading: "Every fold tells a story",
    description:
      "We shape digital experiences the way an artisan folds paper — with patience, intention, and an eye for beauty in simplicity.",
    cta: "Begin Your Journey",
    secondary: "Explore Our Work",
    tagline: "Design Studio",
  },
  ar: {
    heading: "صُنع\nبإتقان",
    subheading: "كل طية تحكي قصة",
    description:
      "نشكّل التجارب الرقمية كما يطوي الحِرَفي الورق — بصبر ونية وعين ترى الجمال في البساطة.",
    cta: "ابدأ رحلتك",
    secondary: "استكشف أعمالنا",
    tagline: "استوديو تصميم",
  },
};

export function Origami({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      {/* Inline keyframes */}
      <style>{`
        @keyframes origami-float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(4deg); }
        }
        @keyframes origami-float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(-5deg); }
        }
        @keyframes origami-float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(3deg); }
        }
        @keyframes origami-unfold {
          0% { transform: scale(0.3) rotate(-30deg); opacity: 0; }
          60% { transform: scale(1.05) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes origami-crease {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes origami-fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .origami-bird-1 { animation: origami-float-1 6s ease-in-out infinite; }
        .origami-bird-2 { animation: origami-float-2 8s ease-in-out infinite; }
        .origami-bird-3 { animation: origami-float-3 7s ease-in-out infinite; }
        .origami-hero-crane { animation: origami-unfold 1.2s cubic-bezier(0.34,1.56,0.64,1) both; }
        .origami-crease-line { animation: origami-crease 1.5s ease-out 0.6s both; }
        .origami-content { animation: origami-fade-up 0.9s ease-out 0.4s both; }
      `}</style>

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Fold crease lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Diagonal crease top-left to center */}
        <div
          className="origami-crease-line absolute"
          style={{
            top: "15%",
            left: isAr ? "auto" : "0",
            right: isAr ? "0" : "auto",
            height: "1px",
            width: "100%",
            maxWidth: "45%",
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.06) 40%, transparent)",
            transform: "rotate(-8deg)",
            transformOrigin: isAr ? "right" : "left",
          }}
        />
        {/* Horizontal crease */}
        <div
          className="origami-crease-line absolute"
          style={{
            top: "55%",
            left: "10%",
            height: "1px",
            width: "100%",
            maxWidth: "80%",
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.04) 50%, transparent)",
          }}
        />
        {/* Vertical crease */}
        <div
          className="origami-crease-line absolute"
          style={{
            top: "10%",
            left: isAr ? "30%" : "68%",
            width: "1px",
            height: "80%",
            background:
              "linear-gradient(180deg, transparent, rgba(0,0,0,0.05) 50%, transparent)",
          }}
        />
      </div>

      {/* ── Small floating origami birds ── */}

      {/* Bird 1 — top area */}
      <div
        className="origami-bird-1 absolute z-10"
        style={{
          top: "12%",
          [isAr ? "left" : "right"]: "18%",
          animationDelay: "0s",
        }}
      >
        <div className="origami-hero-crane" style={{ animationDelay: "0.2s" }}>
          <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
            {/* Body */}
            <polygon
              points="8,28 24,4 40,28"
              fill="#f0a0a0"
              opacity="0.7"
              style={{ filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.1))" }}
            />
            {/* Left wing */}
            <polygon
              points="8,28 0,20 20,16"
              fill="#e08e8e"
              opacity="0.5"
              style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.08))" }}
            />
            {/* Right wing */}
            <polygon
              points="40,28 48,20 28,16"
              fill="#d4817e"
              opacity="0.5"
              style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.08))" }}
            />
          </svg>
        </div>
      </div>

      {/* Bird 2 — mid-right */}
      <div
        className="origami-bird-2 absolute z-10"
        style={{
          top: "35%",
          [isAr ? "left" : "right"]: "10%",
          animationDelay: "1.5s",
        }}
      >
        <div className="origami-hero-crane" style={{ animationDelay: "0.5s" }}>
          <svg width="56" height="38" viewBox="0 0 56 38" fill="none">
            <polygon
              points="10,34 28,4 46,34"
              fill="#8fbc8f"
              opacity="0.6"
              style={{ filter: "drop-shadow(2px 3px 4px rgba(0,0,0,0.1))" }}
            />
            <polygon
              points="10,34 0,24 22,18"
              fill="#7daa7d"
              opacity="0.45"
              style={{ filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.08))" }}
            />
            <polygon
              points="46,34 56,24 34,18"
              fill="#6b986b"
              opacity="0.45"
              style={{ filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.08))" }}
            />
            {/* Tail */}
            <polygon
              points="28,4 32,0 26,8"
              fill="#8fbc8f"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Bird 3 — lower area */}
      <div
        className="origami-bird-3 absolute z-10"
        style={{
          top: "62%",
          [isAr ? "left" : "right"]: "22%",
          animationDelay: "3s",
        }}
      >
        <div className="origami-hero-crane" style={{ animationDelay: "0.8s" }}>
          <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
            <polygon
              points="6,22 18,3 30,22"
              fill="#c8c0b8"
              opacity="0.55"
              style={{ filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.08))" }}
            />
            <polygon
              points="6,22 0,16 14,12"
              fill="#b8b0a8"
              opacity="0.4"
            />
            <polygon
              points="30,22 36,16 22,12"
              fill="#a8a098"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* ── Large hero origami crane ── */}
      <div
        className="absolute z-10"
        style={{
          top: "18%",
          [isAr ? "left" : "right"]: "6%",
        }}
      >
        <div className="origami-hero-crane" style={{ animationDelay: "0.1s" }}>
          <svg
            width="280"
            height="240"
            viewBox="0 0 280 240"
            fill="none"
            className="hidden md:block"
          >
            {/* Main body triangle */}
            <polygon
              points="60,210 140,20 220,210"
              fill="#f0a0a0"
              opacity="0.25"
              style={{ filter: "drop-shadow(3px 5px 8px rgba(0,0,0,0.1))" }}
            />
            {/* Left wing — large sweep */}
            <polygon
              points="60,210 10,140 120,80"
              fill="#f0a0a0"
              opacity="0.18"
              style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.08))" }}
            />
            {/* Right wing — large sweep */}
            <polygon
              points="220,210 270,140 160,80"
              fill="#e89090"
              opacity="0.18"
              style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.08))" }}
            />
            {/* Head/beak */}
            <polygon
              points="140,20 152,0 136,36"
              fill="#3d3b8e"
              opacity="0.4"
              style={{ filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.12))" }}
            />
            {/* Inner fold — left */}
            <polygon
              points="100,140 140,50 60,210"
              fill="#f5b0b0"
              opacity="0.12"
            />
            {/* Inner fold — right */}
            <polygon
              points="180,140 140,50 220,210"
              fill="#e89898"
              opacity="0.12"
            />
            {/* Tail feather */}
            <polygon
              points="130,210 140,230 150,210"
              fill="#8fbc8f"
              opacity="0.3"
              style={{ filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.08))" }}
            />
            {/* Fold crease lines on the bird */}
            <line
              x1="140"
              y1="20"
              x2="60"
              y2="210"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="0.5"
            />
            <line
              x1="140"
              y1="20"
              x2="220"
              y2="210"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="0.5"
            />
            <line
              x1="140"
              y1="20"
              x2="140"
              y2="210"
              stroke="rgba(0,0,0,0.04)"
              strokeWidth="0.5"
              strokeDasharray="4 6"
            />
          </svg>

          {/* Smaller version for mobile */}
          <svg
            width="160"
            height="140"
            viewBox="0 0 280 240"
            fill="none"
            className="block md:hidden"
          >
            <polygon
              points="60,210 140,20 220,210"
              fill="#f0a0a0"
              opacity="0.25"
              style={{ filter: "drop-shadow(3px 5px 8px rgba(0,0,0,0.1))" }}
            />
            <polygon
              points="60,210 10,140 120,80"
              fill="#f0a0a0"
              opacity="0.18"
            />
            <polygon
              points="220,210 270,140 160,80"
              fill="#e89090"
              opacity="0.18"
            />
            <polygon
              points="140,20 152,0 136,36"
              fill="#3d3b8e"
              opacity="0.4"
            />
            <polygon
              points="130,210 140,230 150,210"
              fill="#8fbc8f"
              opacity="0.3"
            />
            <line
              x1="140"
              y1="20"
              x2="60"
              y2="210"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="0.5"
            />
            <line
              x1="140"
              y1="20"
              x2="220"
              y2="210"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Decorative diamond shapes (folded paper accents) */}
      <div
        className="absolute z-0"
        style={{
          top: "75%",
          [isAr ? "right" : "left"]: "8%",
        }}
      >
        <div className="origami-hero-crane" style={{ animationDelay: "1s" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <polygon
              points="20,0 40,20 20,40 0,20"
              fill="#3d3b8e"
              opacity="0.1"
              style={{ filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.06))" }}
            />
            <line
              x1="20"
              y1="0"
              x2="20"
              y2="40"
              stroke="rgba(0,0,0,0.04)"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="20"
              x2="40"
              y2="20"
              stroke="rgba(0,0,0,0.04)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      <div
        className="absolute z-0"
        style={{
          top: "8%",
          [isAr ? "right" : "left"]: "15%",
        }}
      >
        <div className="origami-hero-crane" style={{ animationDelay: "0.7s" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon
              points="12,0 24,12 12,24 0,12"
              fill="#8fbc8f"
              opacity="0.15"
            />
          </svg>
        </div>
      </div>

      {/* ── Content ── */}
      <div
        className={`relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 min-h-screen flex items-center ${
          isAr ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`origami-content max-w-xl ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          {/* Tagline */}
          <div
            className={`flex items-center gap-3 mb-8 ${
              isAr ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "rgba(61,59,142,0.4)" }}
            />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{
                color: "#3d3b8e",
                fontFamily: isAr ? "inherit" : "'Inter', sans-serif",
                letterSpacing: isAr ? "0.05em" : "0.25em",
              }}
            >
              {t.tagline}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl mb-6 whitespace-pre-line leading-[1.15]"
            style={{
              color: "#2a2a2a",
              fontWeight: 200,
              fontFamily: isAr
                ? "'Noto Sans Arabic', sans-serif"
                : "'Inter', sans-serif",
            }}
          >
            {t.heading}
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl mb-6"
            style={{
              color: "#3d3b8e",
              fontWeight: 300,
              fontFamily: isAr
                ? "'Noto Sans Arabic', sans-serif"
                : "'Inter', sans-serif",
            }}
          >
            {t.subheading}
          </p>

          {/* Description */}
          <p
            className="text-base sm:text-lg mb-10 leading-relaxed"
            style={{
              color: "#6b6b6b",
              fontWeight: 300,
              maxWidth: "480px",
              fontFamily: isAr
                ? "'Noto Sans Arabic', sans-serif"
                : "'Inter', sans-serif",
            }}
          >
            {t.description}
          </p>

          {/* CTA buttons */}
          <div
            className={`flex items-center gap-4 flex-wrap ${
              isAr ? "flex-row-reverse" : ""
            }`}
          >
            {/* Primary CTA */}
            <button
              className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm transition-all duration-300 hover:shadow-lg ${
                isAr ? "flex-row-reverse" : ""
              }`}
              style={{
                backgroundColor: "#3d3b8e",
                color: "#ffffff",
                fontWeight: 400,
                letterSpacing: isAr ? "0" : "0.05em",
              }}
            >
              {t.cta}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                  isAr
                    ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0"
                    : ""
                }`}
              />
            </button>

            {/* Secondary CTA */}
            <button
              className="inline-flex items-center px-7 py-3.5 rounded-sm text-sm transition-all duration-300 hover:bg-black/5"
              style={{
                color: "#4a4a4a",
                fontWeight: 300,
                border: "1px solid rgba(0,0,0,0.12)",
                letterSpacing: isAr ? "0" : "0.05em",
              }}
            >
              {t.secondary}
            </button>
          </div>

          {/* Decorative fold accent below CTA */}
          <div className="mt-16 flex items-center gap-0">
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "12px solid transparent",
                borderRight: "12px solid transparent",
                borderBottom: "12px solid rgba(240,160,160,0.25)",
              }}
            />
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "12px solid transparent",
                borderRight: "12px solid transparent",
                borderBottom: "12px solid rgba(143,188,143,0.25)",
              }}
            />
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "12px solid transparent",
                borderRight: "12px solid transparent",
                borderBottom: "12px solid rgba(61,59,142,0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
