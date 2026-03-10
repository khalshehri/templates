"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "Street-Level Creativity",
    description:
      "We don't follow trends — we spray them on walls. Bold ideas that stop traffic and start conversations.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "إبداع على مستوى الشارع",
    description:
      "لا نتبع الاتجاهات — بل نرشّها على الجدران. أفكار جريئة توقف حركة المرور وتبدأ المحادثات.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencySpray({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Brick wall texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
        {Array.from({ length: 20 }).map((_, row) => (
          <div key={row} className="flex" style={{ height: 40 }}>
            {Array.from({ length: 12 }).map((_, col) => (
              <div
                key={col}
                style={{
                  width: row % 2 === 0 ? "8.33%" : "8.33%",
                  height: "100%",
                  border: "1px solid rgba(255,255,255,0.3)",
                  marginLeft: row % 2 === 0 ? 0 : col === 0 ? "4%" : 0,
                  background: `rgba(255,255,255,${0.02 + Math.random() * 0.03})`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Stencil cutout shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large spray circle */}
        <div
          className="absolute as-spray-appear"
          style={{
            left: "10%",
            top: "15%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0.05) 40%, transparent 70%)",
            filter: "blur(30px)",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute as-spray-appear"
          style={{
            right: "5%",
            top: "10%",
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
            filter: "blur(25px)",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="absolute as-spray-appear"
          style={{
            left: "60%",
            bottom: "10%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(236,72,153,0.04) 40%, transparent 70%)",
            filter: "blur(35px)",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Spray mist particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full as-particle"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#a855f7" : "#f472b6",
            opacity: 0.1 + Math.random() * 0.3,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Stencil border frame */}
      <div
        className="absolute pointer-events-none as-stencil-frame"
        style={{
          inset: "8%",
          border: "3px dashed rgba(236,72,153,0.15)",
          borderRadius: 8,
        }}
      />

      {/* Drip marks on edges */}
      {[15, 35, 55, 75].map((pos, i) => (
        <div
          key={i}
          className="absolute as-drip-down"
          style={{
            left: `${pos}%`,
            top: 0,
            width: 2,
            height: 60 + i * 20,
            background: `linear-gradient(to bottom, ${i % 2 === 0 ? "#ec4899" : "#a855f7"}40, transparent)`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border as-badge-flicker"
          style={{
            color: "#ec4899",
            borderColor: "rgba(236,72,153,0.3)",
            background: "rgba(236,72,153,0.08)",
            fontFamily: "monospace",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-black mb-6 leading-tight as-text-reveal"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#fff",
            textShadow: "0 0 40px rgba(236,72,153,0.4), 0 0 80px rgba(168,85,247,0.2)",
            letterSpacing: "-0.02em",
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
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(236,72,153,0.4)",
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
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
              background: "rgba(168,85,247,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .as-spray-appear {
          animation: asSpray 4s ease-in-out infinite;
        }
        @keyframes asSpray {
          0%, 100% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        .as-particle {
          animation: asFloat 3s ease-in-out infinite;
        }
        @keyframes asFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.15; }
          50% { transform: translate(${Math.random() > 0.5 ? '' : '-'}8px, -12px); opacity: 0.5; }
        }
        .as-stencil-frame {
          animation: asFrame 3s ease-in-out infinite;
        }
        @keyframes asFrame {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .as-drip-down {
          animation: asDrip 2.5s ease-in infinite;
        }
        @keyframes asDrip {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50% { transform: scaleY(1); opacity: 0.6; }
          100% { transform: scaleY(1); opacity: 0.2; }
        }
        .as-badge-flicker {
          animation: asFlicker 2s ease-in-out infinite;
        }
        @keyframes asFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .as-text-reveal {
          animation: asReveal 1.5s ease-out forwards;
        }
        @keyframes asReveal {
          0% { opacity: 0; filter: blur(20px); }
          100% { opacity: 1; filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
