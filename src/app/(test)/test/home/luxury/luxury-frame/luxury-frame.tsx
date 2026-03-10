"use client";

/**
 * Luxury Frame Hero
 * Ornate golden frame border around entire viewport, content centered within.
 * Gallery/museum feel. Gold/black palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    galleryLabel: "EXHIBITION",
    heading: "A Masterpiece\nin Every Detail",
    tagline: "Curated with the precision of a master artisan. Each piece tells a story of uncompromising excellence.",
    cta: "Enter the Gallery",
    year: "Est. 1987",
    collection: "The Heritage Collection",
  },
  ar: {
    galleryLabel: "معرض",
    heading: "تحفة فنية\nفي كل تفصيل",
    tagline: "مُنسّقة بدقة حِرَفي بارع. كل قطعة تروي قصة تميّز لا يُساوَم عليه.",
    cta: "ادخل المعرض",
    year: "تأسست ١٩٨٧",
    collection: "مجموعة التراث",
  },
};

export function LuxuryFrame({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes frameReveal {
          0% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes innerGlow {
          0%, 100% { box-shadow: inset 0 0 60px rgba(212, 175, 55, 0.05); }
          50% { box-shadow: inset 0 0 100px rgba(212, 175, 55, 0.1); }
        }
        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cornerOrnament {
          from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes goldGleam {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .content-fade { animation: contentFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .corner-ornament { animation: cornerOrnament 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
        {/* Museum wall texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23d4af37' stroke-width='0.3'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ornate frame */}
        <div
          className="relative m-6 sm:m-10 lg:m-16 flex-1 max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-5rem)] min-h-[80vh] flex items-center justify-center"
          style={{
            animation: "frameReveal 2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both, innerGlow 4s ease-in-out infinite 2.2s",
            border: "3px solid rgba(212, 175, 55, 0.3)",
            borderRadius: "4px",
          }}
        >
          {/* Double inner border */}
          <div
            className="absolute inset-2 sm:inset-3 pointer-events-none"
            style={{
              border: "1px solid rgba(212, 175, 55, 0.12)",
              borderRadius: "2px",
            }}
          />

          {/* Triple inner border */}
          <div
            className="absolute inset-4 sm:inset-6 pointer-events-none"
            style={{
              border: "1px solid rgba(212, 175, 55, 0.06)",
              borderRadius: "2px",
            }}
          />

          {/* Corner ornaments */}
          {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((pos, i) => {
            const rotations = [0, 90, 270, 180];
            return (
              <div
                key={i}
                className={`corner-ornament absolute ${pos} w-12 h-12 sm:w-16 sm:h-16`}
                style={{
                  animationDelay: `${0.5 + i * 0.15}s`,
                  transform: `rotate(${rotations[i]}deg)`,
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path d="M0 0 L15 0 C10 0, 5 2, 3 5 C1 8, 0 12, 0 15 Z" fill="rgba(212, 175, 55, 0.2)" />
                  <path d="M0 0 C0 10, 2 14, 6 18 C10 22, 14 24, 18 24" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.5" fill="none" />
                  <circle cx="3" cy="3" r="2" fill="rgba(212, 175, 55, 0.3)" />
                </svg>
              </div>
            );
          })}

          {/* Center decorative elements on frame edges */}
          {/* Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 rotate-45 border border-amber-700/30 bg-[#080808]" />
          </div>
          {/* Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="w-8 h-8 rotate-45 border border-amber-700/30 bg-[#080808]" />
          </div>

          {/* Content inside frame */}
          <div className={`relative z-10 text-center px-8 sm:px-16 py-12 max-w-3xl`}>
            {/* Gallery label */}
            <p
              className="content-fade text-[10px] uppercase tracking-[0.6em] font-light"
              style={{ color: "rgba(212, 175, 55, 0.4)", animationDelay: "1s" }}
            >
              {t.galleryLabel}
            </p>

            {/* Decorative line */}
            <div className="content-fade flex items-center justify-center gap-4 mt-6" style={{ animationDelay: "1.2s" }}>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/30" />
              <div className="w-2 h-2 rotate-45 border border-amber-700/30" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/30" />
            </div>

            {/* Heading */}
            <h1
              className="content-fade mt-8 text-4xl sm:text-6xl lg:text-7xl font-extralight leading-[1] whitespace-pre-line"
              style={{
                animationDelay: "1.4s",
                fontFamily: "var(--font-amiri), Georgia, serif",
                fontStyle: "italic",
                backgroundImage: "linear-gradient(90deg, #b8941f, #f5e6a8, #d4af37, #b8941f)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "contentFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both, goldGleam 8s ease-in-out infinite 2.4s",
              }}
            >
              {t.heading}
            </h1>

            {/* Tagline */}
            <p
              className="content-fade mt-8 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.25)",
                fontFamily: "var(--font-amiri), Georgia, serif",
                fontStyle: "italic",
                animationDelay: "1.8s",
              }}
            >
              {t.tagline}
            </p>

            {/* CTA */}
            <div className="content-fade mt-10" style={{ animationDelay: "2.2s" }}>
              <a
                href="#"
                className={`group inline-flex items-center gap-3 px-8 py-3 text-xs uppercase tracking-[0.2em] font-light transition-all duration-500 ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  color: "rgba(212, 175, 55, 0.6)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
                  e.currentTarget.style.color = "rgba(212, 175, 55, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.2)";
                  e.currentTarget.style.color = "rgba(212, 175, 55, 0.6)";
                }}
              >
                {t.cta}
                <ArrowRight size={12} className={isAr ? "rotate-180" : ""} />
              </a>
            </div>

            {/* Bottom details */}
            <div className="content-fade mt-16 flex items-center justify-center gap-6" style={{ animationDelay: "2.5s" }}>
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.1)" }}>
                {t.year}
              </span>
              <div className="w-1 h-1 rounded-full bg-amber-700/30" />
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.1)" }}>
                {t.collection}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
