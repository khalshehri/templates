"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "Glow Different",
    description:
      "In a world of dim ideas, we light yours up in neon. Bold, bright, and impossible to ignore — like a sign that never sleeps.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "توهّج بشكل مختلف",
    description:
      "في عالم من الأفكار الباهتة، نضيء أفكارك بالنيون. جريئة ومشرقة ومستحيلة التجاهل — كلافتة لا تنام أبداً.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencyNeon({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Brick wall texture */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, row) => (
          <div key={row} className="flex" style={{ height: 32 }}>
            {Array.from({ length: 16 }).map((_, col) => (
              <div
                key={col}
                style={{
                  width: `${100 / (row % 2 === 0 ? 8 : 8)}%`,
                  marginLeft: row % 2 === 0 ? 0 : col === 0 ? "3%" : 0,
                  height: "100%",
                  background: `rgba(60,40,35,${0.15 + Math.random() * 0.1})`,
                  borderRight: "1px solid rgba(30,20,15,0.4)",
                  borderBottom: "1px solid rgba(30,20,15,0.5)",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Neon glow background */}
      <div
        className="absolute pointer-events-none an-main-glow"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Neon tube decorations */}
      {/* Horizontal tube top */}
      <div className="absolute an-tube-flicker" style={{
        top: "20%",
        left: "15%",
        right: "15%",
        height: 2,
        background: "#ec4899",
        boxShadow: "0 0 10px #ec4899, 0 0 30px #ec489960, 0 0 60px #ec489930",
        borderRadius: 2,
      }} />
      {/* Vertical tube left */}
      <div className="absolute an-tube-flicker" style={{
        top: "20%",
        left: "15%",
        width: 2,
        height: "60%",
        background: "#ec4899",
        boxShadow: "0 0 10px #ec4899, 0 0 30px #ec489960, 0 0 60px #ec489930",
        borderRadius: 2,
        animationDelay: "0.1s",
      }} />
      {/* Vertical tube right */}
      <div className="absolute an-tube-flicker" style={{
        top: "20%",
        right: "15%",
        width: 2,
        height: "60%",
        background: "#a855f7",
        boxShadow: "0 0 10px #a855f7, 0 0 30px #a855f760, 0 0 60px #a855f730",
        borderRadius: 2,
        animationDelay: "0.2s",
      }} />
      {/* Horizontal tube bottom */}
      <div className="absolute an-tube-flicker" style={{
        bottom: "20%",
        left: "15%",
        right: "15%",
        height: 2,
        background: "#a855f7",
        boxShadow: "0 0 10px #a855f7, 0 0 30px #a855f760, 0 0 60px #a855f730",
        borderRadius: 2,
        animationDelay: "0.3s",
      }} />

      {/* Neon decorative shapes */}
      {/* Star shape */}
      <div className="absolute an-shape-pulse" style={{ top: "15%", right: "20%", animationDelay: "0.5s" }}>
        <div style={{
          width: 30,
          height: 30,
          border: "1px solid #ec489980",
          borderRadius: "50%",
          boxShadow: "0 0 8px #ec489940, inset 0 0 8px #ec489920",
        }} />
      </div>
      {/* Diamond shape */}
      <div className="absolute an-shape-pulse" style={{ bottom: "18%", left: "20%", animationDelay: "1s" }}>
        <div style={{
          width: 20,
          height: 20,
          border: "1px solid #a855f780",
          transform: "rotate(45deg)",
          boxShadow: "0 0 8px #a855f740, inset 0 0 8px #a855f720",
        }} />
      </div>
      {/* Triangle */}
      <div className="absolute an-shape-pulse" style={{ top: "30%", left: "18%", animationDelay: "1.5s" }}>
        <div style={{
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderBottom: "20px solid rgba(236,72,153,0.2)",
          filter: "drop-shadow(0 0 6px rgba(236,72,153,0.3))",
        }} />
      </div>

      {/* Mounting brackets (small CSS details) */}
      {[
        { x: "15%", y: "20%" },
        { x: "85%", y: "20%" },
        { x: "15%", y: "80%" },
        { x: "85%", y: "80%" },
      ].map((bracket, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: bracket.x,
            top: bracket.y,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full an-badge-glow"
          style={{
            color: "#ec4899",
            border: "1px solid rgba(236,72,153,0.4)",
            background: "rgba(236,72,153,0.05)",
            textShadow: "0 0 10px rgba(236,72,153,0.5)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight an-title-flicker"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#ec4899",
            textShadow: "0 0 20px rgba(236,72,153,0.6), 0 0 40px rgba(236,72,153,0.3), 0 0 80px rgba(236,72,153,0.15)",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              color: "#ec4899",
              border: "2px solid #ec4899",
              boxShadow: "0 0 15px rgba(236,72,153,0.3), inset 0 0 15px rgba(236,72,153,0.1)",
              textShadow: "0 0 10px rgba(236,72,153,0.5)",
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
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: "2px solid #a855f7",
              color: "#a855f7",
              background: "transparent",
              boxShadow: "0 0 15px rgba(168,85,247,0.2), inset 0 0 15px rgba(168,85,247,0.05)",
              textShadow: "0 0 10px rgba(168,85,247,0.5)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .an-tube-flicker {
          animation: anFlicker 4s ease-in-out infinite;
        }
        @keyframes anFlicker {
          0%, 100% { opacity: 1; }
          10% { opacity: 0.8; }
          12% { opacity: 1; }
          40% { opacity: 1; }
          42% { opacity: 0.6; }
          43% { opacity: 1; }
          70% { opacity: 1; }
          72% { opacity: 0.7; }
          73% { opacity: 0.9; }
          74% { opacity: 1; }
        }
        .an-main-glow {
          animation: anGlow 3s ease-in-out infinite;
        }
        @keyframes anGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .an-shape-pulse {
          animation: anPulse 2.5s ease-in-out infinite;
        }
        @keyframes anPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .an-title-flicker {
          animation: anTitleFlick 5s ease-in-out infinite;
        }
        @keyframes anTitleFlick {
          0%, 100% { opacity: 1; }
          5% { opacity: 0.85; }
          6% { opacity: 1; }
          50% { opacity: 1; }
          55% { opacity: 0.9; }
          56% { opacity: 0.7; }
          57% { opacity: 1; }
        }
        .an-badge-glow {
          animation: anBadge 2s ease-in-out infinite;
        }
        @keyframes anBadge {
          0%, 100% { box-shadow: 0 0 10px rgba(236,72,153,0.2); }
          50% { box-shadow: 0 0 20px rgba(236,72,153,0.4); }
        }
      `}</style>
    </section>
  );
}
