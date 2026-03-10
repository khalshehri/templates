"use client";

/**
 * Luxury Diamond Hero
 * Diamond/gemstone facets as CSS shapes, light refractions, content emerges from brilliance.
 * Sparkling, precious feel. Crystal/gold palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    label: "HAUTE JOAILLERIE",
    heading: "Brilliance\nBeyond Compare",
    tagline: "Cut to perfection, polished by masters. Each facet captures light and transforms it into wonder.",
    cta: "View the Collection",
    carats: "Flawless Since 1968",
  },
  ar: {
    label: "مجوهرات راقية",
    heading: "بريق\nلا يُضاهى",
    tagline: "مقطوعة بإتقان، مصقولة بأيدي خبراء. كل وجه يلتقط الضوء ويحوله إلى سحر.",
    cta: "شاهد المجموعة",
    carats: "بلا عيوب منذ ١٩٦٨",
  },
};

export function LuxuryDiamond({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  const facets = [
    { x: 50, y: 35, size: 120, rot: 0, delay: 0 },
    { x: 35, y: 45, size: 80, rot: 30, delay: 0.2 },
    { x: 65, y: 45, size: 80, rot: -30, delay: 0.3 },
    { x: 42, y: 30, size: 60, rot: 15, delay: 0.4 },
    { x: 58, y: 30, size: 60, rot: -15, delay: 0.5 },
    { x: 50, y: 55, size: 70, rot: 45, delay: 0.6 },
    { x: 30, y: 35, size: 50, rot: 60, delay: 0.7 },
    { x: 70, y: 35, size: 50, rot: -60, delay: 0.8 },
  ];

  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    x: 15 + Math.random() * 70,
    y: 10 + Math.random() * 80,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <>
      <style>{`
        @keyframes facetReveal {
          from { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rot)) scale(0); }
          to { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rot)) scale(1); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes lightRefraction {
          0% { opacity: 0; transform: rotate(0deg) translateX(0); }
          25% { opacity: 0.3; }
          50% { opacity: 0; transform: rotate(180deg) translateX(100px); }
          75% { opacity: 0.2; }
          100% { opacity: 0; transform: rotate(360deg) translateX(0); }
        }
        @keyframes prismLight {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes diamondGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.1)); }
          50% { filter: drop-shadow(0 0 40px rgba(212, 175, 55, 0.2)); }
        }
        .content-fade { animation: contentFade 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#050505]">
        {/* Diamond facets in upper area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ animation: "diamondGlow 4s ease-in-out infinite" }}
        >
          {facets.map((f, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: `${f.size}px`,
                height: `${f.size}px`,
                "--rot": `${f.rot}deg`,
                animation: `facetReveal 1s cubic-bezier(0.16, 1, 0.3, 1) ${f.delay + 0.5}s both`,
                transform: `translate(-50%, -50%) rotate(${f.rot}deg)`,
              } as React.CSSProperties}
            >
              <div
                className="w-full h-full"
                style={{
                  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  background: `linear-gradient(${135 + f.rot}deg, rgba(212, 175, 55, 0.06), rgba(255, 255, 255, 0.03), rgba(212, 175, 55, 0.02))`,
                  border: "none",
                  boxShadow: "inset 0 0 20px rgba(212, 175, 55, 0.05)",
                }}
              />
              {/* Facet edge highlight */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  background: "transparent",
                  border: "1px solid rgba(212, 175, 55, 0.08)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Sparkle points */}
        {sparkles.map((s, i) => (
          <div
            key={`s-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)",
              animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}

        {/* Light refraction beams */}
        {[0, 1, 2].map((i) => (
          <div
            key={`r-${i}`}
            className="absolute top-[35%] left-1/2 w-px h-40 pointer-events-none origin-top"
            style={{
              background: `linear-gradient(180deg, rgba(212, 175, 55, 0.15), transparent)`,
              transform: `rotate(${-40 + i * 40}deg)`,
              animation: `lightRefraction ${8 + i * 2}s ease-in-out ${i * 1.5}s infinite`,
            }}
          />
        ))}

        {/* Prismatic color hint */}
        <div
          className="absolute top-[30%] left-1/2 -translate-x-1/2 w-40 h-1 opacity-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #ff0000, #ff7700, #ffff00, #00ff00, #0077ff, #8800ff, #ff0000)",
            backgroundSize: "200% auto",
            filter: "blur(3px)",
            animation: "prismLight 4s ease-in-out infinite",
          }}
        />

        {/* Content at bottom */}
        <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 ${isAr ? "text-right" : "text-left"}`}>
          {/* Label */}
          <p
            className="content-fade text-[10px] uppercase tracking-[0.5em] font-light"
            style={{ color: "rgba(212, 175, 55, 0.4)", animationDelay: "1.5s" }}
          >
            {t.label}
          </p>

          {/* Line */}
          <div
            className={`content-fade mt-6 h-px w-12 ${isAr ? "ml-auto" : ""}`}
            style={{
              background: "linear-gradient(90deg, rgba(212, 175, 55, 0.5), transparent)",
              animationDelay: "1.7s",
            }}
          />

          {/* Heading */}
          <h1
            className="content-fade mt-6 text-5xl sm:text-7xl lg:text-8xl font-extralight leading-[0.95] whitespace-pre-line"
            style={{
              animationDelay: "1.9s",
              fontFamily: "var(--font-amiri), Georgia, serif",
              fontStyle: "italic",
              color: "#ffffff",
            }}
          >
            {t.heading}
          </h1>

          {/* Tagline */}
          <p
            className="content-fade mt-8 text-base font-light max-w-md leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "var(--font-amiri), Georgia, serif",
              fontStyle: "italic",
              animationDelay: "2.2s",
              marginLeft: isAr ? "auto" : undefined,
            }}
          >
            {t.tagline}
          </p>

          {/* CTA */}
          <div className={`content-fade mt-10 flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "2.5s" }}>
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

          <p
            className="content-fade mt-16 text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.08)", animationDelay: "2.8s" }}
          >
            {t.carats}
          </p>
        </div>
      </section>
    </>
  );
}
