"use client";

/**
 * Luxury Noir Hero
 * Pure black background, single spotlight illuminating heading.
 * Dramatic, theatrical. Minimal content, maximum impact.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Darkness\nReveals\nTruth",
    tagline: "In the absence of everything, only the essential remains",
    cta: "Step into the Light",
    footnote: "NOIR COLLECTION — MMXXVI",
  },
  ar: {
    heading: "الظلام\nيكشف\nالحقيقة",
    tagline: "في غياب كل شيء، لا يبقى إلا الجوهر",
    cta: "ادخل إلى النور",
    footnote: "مجموعة نوار — ٢٠٢٦",
  },
};

export function LuxuryNoir({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes spotlightOn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes spotlightBreath {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.85; }
        }
        @keyframes textRevealNoir {
          0% { opacity: 0; transform: translateY(50px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes dustParticle {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-100px); }
        }
        .text-reveal-noir { animation: textRevealNoir 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-in { animation: fadeIn 1s ease both; }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Absolute pure black — no texture, no noise */}

        {/* Single spotlight cone */}
        <div
          className="absolute top-0 left-1/2 w-[400px] sm:w-[500px] lg:w-[600px] h-[110%] pointer-events-none"
          style={{
            background: "conic-gradient(from 180deg at 50% 0%, transparent 30%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 70%)",
            animation: "spotlightOn 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both, spotlightBreath 6s ease-in-out 2.5s infinite",
          }}
        />

        {/* Spotlight pool on floor */}
        <div
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[300px] h-16 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.04), transparent 70%)",
            filter: "blur(10px)",
            animation: "spotlightOn 2s cubic-bezier(0.16, 1, 0.3, 1) 1s both",
          }}
        />

        {/* Dust particles in spotlight beam */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${45 + Math.random() * 10}%`,
              top: `${20 + Math.random() * 60}%`,
              background: "rgba(255,255,255,0.3)",
              animation: `dustParticle ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}

        {/* Content — centered in spotlight */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {/* Heading — each line revealed separately */}
          <h1 className="space-y-2">
            {t.heading.split("\n").map((line, i) => (
              <span
                key={i}
                className="text-reveal-noir block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight leading-[1]"
                style={{
                  animationDelay: `${1.5 + i * 0.4}s`,
                  fontFamily: "var(--font-amiri), Georgia, serif",
                  fontStyle: "italic",
                  color: "white",
                  textShadow: "0 0 40px rgba(255,255,255,0.1)",
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <p
            className="fade-in mt-10 text-sm sm:text-base font-light tracking-wide"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "var(--font-amiri), Georgia, serif",
              fontStyle: "italic",
              animationDelay: "3s",
            }}
          >
            {t.tagline}
          </p>

          {/* Minimal CTA */}
          <div className="fade-in mt-12" style={{ animationDelay: "3.5s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] font-extralight transition-all duration-700 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ color: "rgba(255,255,255,0.2)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                e.currentTarget.style.textShadow = "0 0 20px rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.2)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {t.cta}
              <ArrowRight size={10} className={isAr ? "rotate-180" : ""} />
            </a>
          </div>

          {/* Footnote */}
          <p
            className="fade-in absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.5em] whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.05)", animationDelay: "4s", position: "fixed" }}
          >
            {t.footnote}
          </p>
        </div>
      </section>
    </>
  );
}
