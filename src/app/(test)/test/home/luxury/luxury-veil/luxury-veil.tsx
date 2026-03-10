"use client";

/**
 * Luxury Veil Hero
 * Translucent veil/curtain layers with content visible through them.
 * Ultra-elegant, layered depth. Gold/black palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    label: "PRIVATE COLLECTION",
    heading: "Behind\nthe Veil",
    tagline: "Some things are too beautiful to reveal all at once",
    cta: "Unveil the Collection",
    detail: "Autumn/Winter 2026",
  },
  ar: {
    label: "مجموعة خاصة",
    heading: "خلف\nالحجاب",
    tagline: "بعض الأشياء أجمل من أن تُكشف دفعة واحدة",
    cta: "اكتشف المجموعة",
    detail: "خريف/شتاء ٢٠٢٦",
  },
};

export function LuxuryVeil({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes veilDrift1 {
          0%, 100% { transform: translateX(0) skewX(0deg); opacity: 0.15; }
          50% { transform: translateX(-30px) skewX(-2deg); opacity: 0.25; }
        }
        @keyframes veilDrift2 {
          0%, 100% { transform: translateX(0) skewX(0deg); opacity: 0.12; }
          50% { transform: translateX(25px) skewX(2deg); opacity: 0.2; }
        }
        @keyframes veilDrift3 {
          0%, 100% { transform: translateX(0); opacity: 0.08; }
          50% { transform: translateX(-15px); opacity: 0.14; }
        }
        @keyframes contentReveal {
          0% { opacity: 0; filter: blur(12px); transform: translateY(20px); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes goldShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .content-reveal { animation: contentReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .line-grow { animation: lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* Deep background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent 70%)" }}
        />

        {/* Veil layers — translucent curtain-like overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.03) 50%, transparent 100%)",
            animation: "veilDrift1 8s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute inset-y-0 ${isAr ? "right-0" : "left-0"} pointer-events-none`}
          style={{
            width: "60%",
            background: `linear-gradient(${isAr ? "270deg" : "90deg"}, rgba(212, 175, 55, 0.06), transparent)`,
            animation: "veilDrift2 10s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute inset-y-0 ${isAr ? "left-0" : "right-0"} pointer-events-none`}
          style={{
            width: "40%",
            background: `linear-gradient(${isAr ? "90deg" : "270deg"}, rgba(255, 255, 255, 0.02), transparent)`,
            animation: "veilDrift3 12s ease-in-out infinite",
          }}
        />

        {/* Vertical fabric-like lines */}
        {[20, 35, 50, 65, 80].map((left, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px pointer-events-none"
            style={{
              left: `${left}%`,
              background: "linear-gradient(180deg, transparent, rgba(212, 175, 55, 0.05) 30%, rgba(212, 175, 55, 0.05) 70%, transparent)",
              animation: `veilDrift${(i % 3) + 1} ${8 + i * 2}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Horizontal sheer bands */}
        {[25, 50, 75].map((top, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{
              top: `${top}%`,
              background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.08), transparent)",
              animation: `veilDrift${(i % 2) + 1} ${10 + i * 3}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Main content */}
        <div
          className={`relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 ${isAr ? "text-right" : "text-left"}`}
        >
          {/* Label */}
          <p
            className="content-reveal text-[10px] uppercase tracking-[0.5em] font-light"
            style={{ color: "rgba(212, 175, 55, 0.5)", animationDelay: "0.5s" }}
          >
            {t.label}
          </p>

          {/* Gold line */}
          <div
            className={`line-grow mt-6 h-px w-16 ${isAr ? "ml-auto" : ""}`}
            style={{
              background: "linear-gradient(90deg, rgba(212, 175, 55, 0.6), rgba(212, 175, 55, 0.1))",
              transformOrigin: isAr ? "right" : "left",
              animationDelay: "0.8s",
            }}
          />

          {/* Heading */}
          <h1
            className="content-reveal mt-8 text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-extralight leading-[0.95] whitespace-pre-line"
            style={{
              animationDelay: "1s",
              fontFamily: "var(--font-amiri), Georgia, serif",
              fontStyle: "italic",
              backgroundImage: "linear-gradient(90deg, #d4af37, #f5e6a8, #d4af37, #b8941f)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "contentReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s both, goldShimmer 6s ease-in-out infinite 2.5s",
            }}
          >
            {t.heading}
          </h1>

          {/* Tagline */}
          <p
            className="content-reveal mt-10 text-base sm:text-lg font-light max-w-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.25)",
              fontFamily: "var(--font-amiri), Georgia, serif",
              fontStyle: "italic",
              animationDelay: "1.5s",
              marginLeft: isAr ? "auto" : undefined,
            }}
          >
            {t.tagline}
          </p>

          {/* CTA */}
          <div className="content-reveal mt-12" style={{ animationDelay: "2s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-light transition-colors duration-500 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ color: "rgba(212, 175, 55, 0.5)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(212, 175, 55, 0.9)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212, 175, 55, 0.5)"; }}
            >
              {t.cta}
              <ArrowRight size={12} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
          </div>

          {/* Season detail */}
          <p
            className="content-reveal mt-20 text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.08)", animationDelay: "2.5s" }}
          >
            {t.detail}
          </p>
        </div>
      </section>
    </>
  );
}
