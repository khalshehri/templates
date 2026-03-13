"use client";

import { Palette, ArrowRight, ExternalLink } from "lucide-react";

interface Hero04Props {
  language: "en" | "ar";
}

const content = {
  en: {
    label: "CREATIVE STUDIO",
    heading: "WE MAKE BRANDS",
    accent: "UNFORGETTABLE",
    sub: "Strategy, design, and technology fused into experiences that demand attention.",
    cta1: "View Our Work",
    cta2: "Start a Project",
    cards: [
      { label: "Brand Identity", gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)" },
      { label: "Digital Platform", gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)" },
      { label: "Campaign", gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
    ],
  },
  ar: {
    label: "استوديو إبداعي",
    heading: "نجعل العلامات التجارية",
    accent: "لا تُنسى",
    sub: "استراتيجية وتصميم وتكنولوجيا مدمجة في تجارب تستحوذ على الانتباه.",
    cta1: "شاهد أعمالنا",
    cta2: "ابدأ مشروعاً",
    cards: [
      { label: "هوية العلامة", gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)" },
      { label: "منصة رقمية", gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)" },
      { label: "حملة إعلانية", gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
    ],
  },
};

const cardTransforms = [
  { rotate: -8, translateX: 20, translateY: 0 },
  { rotate: 4, translateX: -15, translateY: -30 },
  { rotate: -2, translateX: 10, translateY: -60 },
];

const cardFloatDurations = [4, 5, 6];

export function Hero04({ language }: Hero04Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes prism-fadeSlideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes prism-fadeSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes prism-fadeSlideRightRTL {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes prism-fadeSlideLeftRTL {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes prism-float0 {
          0%, 100% { transform: rotate(-8deg) translate(20px, 0); }
          50% { transform: rotate(-8deg) translate(20px, -8px); }
        }
        @keyframes prism-float1 {
          0%, 100% { transform: rotate(4deg) translate(-15px, -30px); }
          50% { transform: rotate(4deg) translate(-15px, -38px); }
        }
        @keyframes prism-float2 {
          0%, 100% { transform: rotate(-2deg) translate(10px, -60px); }
          50% { transform: rotate(-2deg) translate(10px, -68px); }
        }
        @keyframes prism-gradientLine {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .prism-slideRight {
          animation: prism-fadeSlideRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .prism-slideLeft {
          animation: prism-fadeSlideLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        [dir="rtl"] .prism-slideRight {
          animation-name: prism-fadeSlideRightRTL;
        }
        [dir="rtl"] .prism-slideLeft {
          animation-name: prism-fadeSlideLeftRTL;
        }
        .prism-d1 { animation-delay: 0.1s; }
        .prism-d2 { animation-delay: 0.2s; }
        .prism-d3 { animation-delay: 0.35s; }
        .prism-d4 { animation-delay: 0.5s; }
        .prism-d5 { animation-delay: 0.3s; }
        .prism-d6 { animation-delay: 0.45s; }
        .prism-d7 { animation-delay: 0.6s; }
        @media (prefers-reduced-motion: reduce) {
          .prism-slideRight, .prism-slideLeft { animation: none; opacity: 1; }
          .prism-card { animation: none !important; }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "#0a0a0a",
          fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
        }}
      >
        {/* Diagonal Gradient Line */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "150%",
            height: "2px",
            top: "55%",
            left: "-25%",
            transform: "rotate(-15deg)",
            background: "linear-gradient(90deg, transparent 0%, #f43f5e 25%, #a855f7 50%, #3b82f6 75%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "prism-gradientLine 4s linear infinite",
            opacity: 0.3,
          }}
        />

        {/* Main Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left Content — 55% */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            {/* Label */}
            <div className="prism-slideRight prism-d1 inline-flex items-center gap-2 mb-8">
              <Palette className="w-4 h-4" style={{ color: "#f43f5e" }} />
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: "#a3a3a3", letterSpacing: "0.2em" }}
              >
                {t.label}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="prism-slideRight prism-d2"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "#fafafa",
                textTransform: isAr ? "none" : "uppercase",
                fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.heading}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #f43f5e 0%, #a855f7 50%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.accent}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="prism-slideRight prism-d3 mt-7 max-w-md text-lg"
              style={{ color: "#a3a3a3", fontWeight: 300, lineHeight: 1.7 }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div className="prism-slideRight prism-d4 flex flex-wrap items-center gap-4 mt-10">
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #f43f5e 0%, #a855f7 60%, #3b82f6 100%)",
                  boxShadow: "0 0 30px rgba(244,63,94,0.25), 0 0 60px rgba(168,85,247,0.15)",
                }}
              >
                {t.cta1}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-white/[0.08] active:scale-[0.98]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#d4d4d4",
                }}
              >
                {t.cta2}
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Cards — 45% */}
          <div className="w-full lg:w-[45%] flex items-center justify-center">
            <div className="relative" style={{ width: "280px", height: "380px" }}>
              {t.cards.map((card, i) => (
                <div
                  key={i}
                  className={`prism-card prism-slideLeft prism-d${i + 5} absolute rounded-2xl overflow-hidden`}
                  style={{
                    width: "180px",
                    height: "240px",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-90px",
                    marginTop: "-120px",
                    background: card.gradient,
                    animation: `prism-float${i} ${cardFloatDurations[i]}s ease-in-out infinite`,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Card overlay content */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-5"
                    style={{
                      background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)",
                    }}
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}
                    >
                      {isAr ? "مشروع" : "Project"}
                    </span>
                    <span className="text-sm font-semibold text-white mt-1">
                      {card.label}
                    </span>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
                  />
                  <div
                    className="absolute top-5 left-5 w-12 h-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  />
                  <div
                    className="absolute top-9 left-5 w-8 h-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
