"use client";

/**
 * Luxury Columns Hero
 * Classical architectural columns framing content, marble texture via CSS gradients.
 * Neoclassical, timeless feel. White marble/gold palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    label: "MAISON DE LUXE",
    heading: "Built on\nTimeless Pillars",
    tagline: "Like the great temples of antiquity, true luxury stands on foundations that never crumble.",
    cta: "Enter the Atrium",
    inscription: "EXCELLENCE · HERITAGE · CRAFT",
  },
  ar: {
    label: "دار الفخامة",
    heading: "مبنية على\nأعمدة خالدة",
    tagline: "كالمعابد العظيمة القديمة، الفخامة الحقيقية تقف على أسس لا تنهار أبداً.",
    cta: "ادخل الردهة",
    inscription: "تميّز · إرث · حِرَفية",
  },
};

export function LuxuryColumns({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes columnRise {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes entabGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes marbleShimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .column-rise { animation: columnRise 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .content-fade { animation: contentFade 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .entab-grow { animation: entabGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: `
            linear-gradient(135deg,
              #f5f0e8 0%,
              #ede6d8 20%,
              #f0ebe0 40%,
              #e8e0d0 60%,
              #f2ece2 80%,
              #ebe5d5 100%
            )
          `,
        }}
      >
        {/* Marble veining texture */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="marble">
              <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="4" seed="5" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#marble)" />
          </svg>
        </div>

        {/* Left columns */}
        <div className={`absolute ${isAr ? "right-0" : "left-0"} top-0 bottom-0 flex gap-4 sm:gap-6 px-4 sm:px-8`}>
          {[0, 1].map((i) => (
            <div key={`l-${i}`} className="column-rise flex flex-col items-center" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
              {/* Capital (top decoration) */}
              <div className="w-14 sm:w-20 h-6 sm:h-8 flex flex-col items-center">
                <div className="w-full h-2 rounded-t-sm" style={{ background: "linear-gradient(180deg, #c9b896, #b8a580)" }} />
                <div className="w-[90%] h-1" style={{ background: "#d4c4a0" }} />
                <div className="w-[80%] flex-1 rounded-b-sm" style={{ background: "linear-gradient(180deg, #c9b896, #ddd4c0)" }} />
              </div>

              {/* Shaft */}
              <div
                className="w-10 sm:w-14 flex-1"
                style={{
                  background: `linear-gradient(90deg,
                    #d8cdb5 0%, #e8dfc8 15%, #f0e8d5 30%,
                    #e8dfc8 50%, #ddd4bc 70%, #d0c5a8 85%, #c8bda0 100%
                  )`,
                  boxShadow: "2px 0 8px rgba(0,0,0,0.05), -2px 0 8px rgba(0,0,0,0.05)",
                }}
              >
                {/* Fluting lines */}
                <div className="h-full flex justify-between px-1 opacity-20">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-px h-full bg-gray-500/30" />
                  ))}
                </div>
              </div>

              {/* Base */}
              <div className="w-16 sm:w-24 h-4 sm:h-6 flex flex-col">
                <div className="w-full h-1 rounded-t-sm" style={{ background: "#c9b896" }} />
                <div className="w-full flex-1" style={{ background: "linear-gradient(180deg, #d4c4a0, #c0b090)" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Right columns */}
        <div className={`absolute ${isAr ? "left-0" : "right-0"} top-0 bottom-0 flex gap-4 sm:gap-6 px-4 sm:px-8`}>
          {[0, 1].map((i) => (
            <div key={`r-${i}`} className="column-rise flex flex-col items-center" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
              <div className="w-14 sm:w-20 h-6 sm:h-8 flex flex-col items-center">
                <div className="w-full h-2 rounded-t-sm" style={{ background: "linear-gradient(180deg, #c9b896, #b8a580)" }} />
                <div className="w-[90%] h-1" style={{ background: "#d4c4a0" }} />
                <div className="w-[80%] flex-1 rounded-b-sm" style={{ background: "linear-gradient(180deg, #c9b896, #ddd4c0)" }} />
              </div>
              <div
                className="w-10 sm:w-14 flex-1"
                style={{
                  background: `linear-gradient(90deg,
                    #d8cdb5 0%, #e8dfc8 15%, #f0e8d5 30%,
                    #e8dfc8 50%, #ddd4bc 70%, #d0c5a8 85%, #c8bda0 100%
                  )`,
                  boxShadow: "2px 0 8px rgba(0,0,0,0.05), -2px 0 8px rgba(0,0,0,0.05)",
                }}
              >
                <div className="h-full flex justify-between px-1 opacity-20">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-px h-full bg-gray-500/30" />
                  ))}
                </div>
              </div>
              <div className="w-16 sm:w-24 h-4 sm:h-6 flex flex-col">
                <div className="w-full h-1 rounded-t-sm" style={{ background: "#c9b896" }} />
                <div className="w-full flex-1" style={{ background: "linear-gradient(180deg, #d4c4a0, #c0b090)" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Entablature (top beam connecting columns) */}
        <div
          className="entab-grow absolute top-0 left-0 right-0 h-8 sm:h-12"
          style={{
            animationDelay: "0.8s",
            background: "linear-gradient(180deg, #c9b896, #ddd4c0, #c9b896)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          {/* Frieze decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-2 flex justify-center gap-12 items-center">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-3 h-1.5 rounded-full" style={{ background: "rgba(160, 140, 100, 0.3)" }} />
            ))}
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center w-full max-w-2xl mx-auto px-8 sm:px-16 py-20">
          {/* Label */}
          <p
            className="content-fade text-[10px] uppercase tracking-[0.6em] font-light"
            style={{ color: "rgba(139, 105, 20, 0.5)", animationDelay: "1s" }}
          >
            {t.label}
          </p>

          {/* Ornamental divider */}
          <div className="content-fade flex items-center justify-center gap-4 mt-6" style={{ animationDelay: "1.2s" }}>
            <div className="h-px w-10" style={{ background: "rgba(139, 105, 20, 0.2)" }} />
            <div className="w-2 h-2 rotate-45" style={{ border: "1px solid rgba(139, 105, 20, 0.3)" }} />
            <div className="h-px w-10" style={{ background: "rgba(139, 105, 20, 0.2)" }} />
          </div>

          {/* Heading */}
          <h1
            className="content-fade mt-8 text-4xl sm:text-6xl lg:text-7xl font-extralight leading-[1] whitespace-pre-line"
            style={{
              animationDelay: "1.4s",
              fontFamily: "var(--font-amiri), Georgia, serif",
              fontStyle: "italic",
              color: "#2c1810",
            }}
          >
            {t.heading}
          </h1>

          {/* Tagline */}
          <p
            className="content-fade mt-8 text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto"
            style={{
              color: "rgba(44, 24, 16, 0.35)",
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
                color: "rgba(139, 105, 20, 0.6)",
                border: "1px solid rgba(139, 105, 20, 0.2)",
                background: "rgba(255,255,255,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(139, 105, 20, 0.5)";
                e.currentTarget.style.background = "rgba(139, 105, 20, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(139, 105, 20, 0.2)";
                e.currentTarget.style.background = "rgba(255,255,255,0.3)";
              }}
            >
              {t.cta}
              <ArrowRight size={12} className={isAr ? "rotate-180" : ""} />
            </a>
          </div>

          {/* Inscription */}
          <p
            className="content-fade mt-16 text-[10px] uppercase tracking-[0.5em]"
            style={{ color: "rgba(139, 105, 20, 0.15)", animationDelay: "2.5s" }}
          >
            {t.inscription}
          </p>
        </div>
      </section>
    </>
  );
}
