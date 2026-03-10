"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "CUT PASTE CREATE",
    description:
      "We tear apart conventions and glue together something extraordinary. Ransom-note creativity that demands attention.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "قص ولصق وابتكار",
    description:
      "نمزق التقاليد ونلصق شيئاً استثنائياً. إبداع يتطلب الانتباه ويكسر القواعد.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencyScissors({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const titleWords = t.title.split(" ");
  const wordStyles = [
    { bg: "#ec4899", font: "serif", size: "clamp(2rem, 5vw, 4rem)", rotate: -3, weight: 900 },
    { bg: "#a855f7", font: "monospace", size: "clamp(1.8rem, 4.5vw, 3.5rem)", rotate: 2, weight: 700 },
    { bg: "#d946ef", font: "sans-serif", size: "clamp(2.2rem, 5.5vw, 4.5rem)", rotate: -1, weight: 800 },
  ];

  const scraps = [
    { x: "5%", y: "10%", w: 120, h: 40, rotate: 12, color: "#ec489920" },
    { x: "80%", y: "8%", w: 100, h: 50, rotate: -8, color: "#a855f720" },
    { x: "70%", y: "75%", w: 90, h: 35, rotate: 15, color: "#d946ef20" },
    { x: "10%", y: "80%", w: 110, h: 45, rotate: -5, color: "#f472b620" },
    { x: "45%", y: "5%", w: 80, h: 30, rotate: 7, color: "#c084fc20" },
    { x: "90%", y: "45%", w: 70, h: 60, rotate: -12, color: "#ec489918" },
    { x: "3%", y: "50%", w: 95, h: 38, rotate: 4, color: "#a855f718" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Magazine page texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
        <div className="w-full h-full" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.5) 20px, rgba(255,255,255,0.5) 21px)",
        }} />
      </div>

      {/* Torn paper scraps */}
      {scraps.map((scrap, i) => (
        <div
          key={i}
          className="absolute pointer-events-none asc-scrap-float"
          style={{
            left: scrap.x,
            top: scrap.y,
            width: scrap.w,
            height: scrap.h,
            background: scrap.color,
            transform: `rotate(${scrap.rotate}deg)`,
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.05)",
            animationDelay: `${i * 0.5}s`,
            clipPath: "polygon(2% 0%, 98% 3%, 100% 97%, 3% 100%)",
          }}
        />
      ))}

      {/* Scissors icon (CSS) */}
      <div className="absolute pointer-events-none asc-scissors" style={{ top: "15%", right: "15%" }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(236,72,153,0.3)",
          position: "relative",
        }}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "100%",
            width: 30,
            height: 2,
            background: "rgba(236,72,153,0.3)",
            transform: "rotate(15deg)",
            transformOrigin: "left",
          }} />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "100%",
            width: 30,
            height: 2,
            background: "rgba(236,72,153,0.3)",
            transform: "rotate(-15deg)",
            transformOrigin: "left",
          }} />
        </div>
      </div>

      {/* Dotted cut lines */}
      <div className="absolute pointer-events-none" style={{
        top: "25%",
        left: 0,
        right: 0,
        height: 1,
        borderTop: "2px dashed rgba(236,72,153,0.1)",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "20%",
        left: 0,
        right: 0,
        height: 1,
        borderTop: "2px dashed rgba(168,85,247,0.1)",
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-6 px-4 py-1.5 border"
          style={{
            color: "#ec4899",
            borderColor: "rgba(236,72,153,0.3)",
            background: "rgba(236,72,153,0.08)",
            transform: "rotate(-1deg)",
            fontFamily: "monospace",
          }}
        >
          {t.badge}
        </span>

        {/* Ransom-note title */}
        <div className={`flex flex-wrap items-center justify-center gap-3 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {titleWords.map((word, i) => {
            const style = wordStyles[i % wordStyles.length];
            return (
              <span
                key={i}
                className="inline-block px-4 py-2 asc-word-pop"
                style={{
                  fontFamily: style.font,
                  fontSize: style.size,
                  fontWeight: style.weight,
                  color: "#fff",
                  background: `${style.bg}15`,
                  border: `2px solid ${style.bg}30`,
                  transform: `rotate(${style.rotate}deg)`,
                  lineHeight: 1.1,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(236,72,153,0.4)",
              transform: "rotate(-1deg)",
              borderRadius: 2,
            }}
          >
            {isAr ? (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t.cta}
              </>
            ) : (
              <>
                {t.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <button
            className="px-8 py-3.5 font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "2px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
              background: "rgba(168,85,247,0.08)",
              transform: "rotate(1deg)",
              borderRadius: 2,
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .asc-scrap-float {
          animation: ascFloat 5s ease-in-out infinite;
        }
        @keyframes ascFloat {
          0%, 100% { transform: rotate(var(--r, 5deg)) translateY(0); }
          50% { transform: rotate(var(--r, 5deg)) translateY(-8px); }
        }
        .asc-word-pop {
          animation: ascPop 0.6s ease-out forwards;
          opacity: 0;
          transform: scale(0.5);
        }
        @keyframes ascPop {
          0% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          70% { opacity: 1; transform: scale(1.05) rotate(-1deg); }
          100% { opacity: 1; transform: scale(1) rotate(var(--r, -2deg)); }
        }
        .asc-scissors {
          animation: ascSnip 2s ease-in-out infinite;
        }
        @keyframes ascSnip {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
    </section>
  );
}
