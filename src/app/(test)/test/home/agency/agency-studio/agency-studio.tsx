"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "Where Ideas Take Shape",
    description:
      "A bird's eye view into our creative workshop. Every tool, every screen, every sketch pad — arranged for maximum inspiration.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "حيث تتشكل الأفكار",
    description:
      "نظرة علوية على ورشتنا الإبداعية. كل أداة، كل شاشة، كل دفتر رسم — مرتبة لأقصى قدر من الإلهام.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencyStudio({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Desk surface */}
      <div
        className="absolute rounded-2xl"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85%",
          maxWidth: 900,
          height: "65%",
          background: "linear-gradient(135deg, rgba(30,25,20,0.6), rgba(40,35,28,0.4))",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 16,
        }}
      />

      {/* Monitor/screen - top center of desk */}
      <div
        className="absolute ast-screen-glow"
        style={{
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 220,
          height: 140,
          borderRadius: 8,
          border: "2px solid rgba(236,72,153,0.2)",
          background: "linear-gradient(135deg, rgba(236,72,153,0.05), rgba(168,85,247,0.05))",
        }}
      >
        {/* Screen content lines */}
        {[20, 35, 50, 65, 80].map((y, i) => (
          <div
            key={i}
            className="absolute ast-line-type"
            style={{
              top: `${y}%`,
              left: "12%",
              width: `${40 + i * 8}%`,
              height: 2,
              background: i % 2 === 0 ? "rgba(236,72,153,0.2)" : "rgba(168,85,247,0.2)",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {/* Screen stand */}
        <div style={{
          position: "absolute",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          width: 40,
          height: 20,
          background: "rgba(255,255,255,0.03)",
          borderRadius: "0 0 4px 4px",
        }} />
      </div>

      {/* Laptop - left side */}
      <div className="absolute" style={{ top: "42%", left: "15%", transform: "rotate(-5deg)" }}>
        <div style={{
          width: 120,
          height: 80,
          borderRadius: 4,
          border: "1px solid rgba(168,85,247,0.2)",
          background: "rgba(168,85,247,0.03)",
        }}>
          <div className="ast-cursor-blink" style={{
            position: "absolute",
            top: "30%",
            left: "15%",
            width: 2,
            height: 12,
            background: "#a855f7",
          }} />
        </div>
        <div style={{
          width: 130,
          height: 6,
          borderRadius: "0 0 4px 4px",
          background: "rgba(255,255,255,0.04)",
          marginTop: 1,
        }} />
      </div>

      {/* Tablet - right side */}
      <div className="absolute" style={{ top: "38%", right: "14%", transform: "rotate(8deg)" }}>
        <div style={{
          width: 90,
          height: 120,
          borderRadius: 8,
          border: "1px solid rgba(236,72,153,0.15)",
          background: "rgba(236,72,153,0.03)",
        }}>
          {/* Stylus */}
          <div style={{
            position: "absolute",
            top: -10,
            right: -20,
            width: 3,
            height: 60,
            background: "rgba(236,72,153,0.15)",
            transform: "rotate(30deg)",
            borderRadius: 2,
          }} />
        </div>
      </div>

      {/* Coffee cup - bottom left */}
      <div className="absolute" style={{ bottom: "22%", left: "22%" }}>
        <div style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.08)",
          background: "rgba(139,69,19,0.1)",
        }}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "rgba(139,69,19,0.15)",
          }} />
        </div>
        {/* Steam */}
        <div className="ast-steam" style={{
          position: "absolute",
          top: -15,
          left: "50%",
          transform: "translateX(-50%)",
          width: 10,
          height: 20,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
          filter: "blur(3px)",
        }} />
      </div>

      {/* Color swatches - bottom right */}
      <div className="absolute flex gap-1" style={{ bottom: "25%", right: "18%" }}>
        {["#ec4899", "#a855f7", "#d946ef", "#f472b6"].map((c, i) => (
          <div
            key={i}
            style={{
              width: 16,
              height: 16,
              borderRadius: 2,
              background: `${c}30`,
              border: `1px solid ${c}20`,
            }}
          />
        ))}
      </div>

      {/* Pencil holder */}
      <div className="absolute" style={{ top: "35%", right: "30%" }}>
        <div style={{
          width: 20,
          height: 30,
          borderRadius: "0 0 4px 4px",
          border: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}>
          {[0, 1, 2].map((p) => (
            <div
              key={p}
              style={{
                position: "absolute",
                bottom: 20,
                left: 3 + p * 6,
                width: 2,
                height: 25,
                background: p === 0 ? "rgba(236,72,153,0.3)" : p === 1 ? "rgba(168,85,247,0.3)" : "rgba(255,255,255,0.1)",
                borderRadius: 1,
                transform: `rotate(${-5 + p * 5}deg)`,
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>
      </div>

      {/* Sticky notes */}
      {[
        { x: "32%", y: "55%", color: "#ec489915", rot: 3 },
        { x: "60%", y: "60%", color: "#a855f715", rot: -4 },
      ].map((note, i) => (
        <div
          key={i}
          className="absolute ast-note-wobble"
          style={{
            left: note.x,
            top: note.y,
            width: 40,
            height: 40,
            background: note.color,
            transform: `rotate(${note.rot}deg)`,
            borderRadius: 2,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {[0, 1, 2].map((l) => (
            <div key={l} style={{
              position: "absolute",
              top: 10 + l * 8,
              left: 5,
              width: 20 + l * 3,
              height: 1,
              background: "rgba(255,255,255,0.1)",
            }} />
          ))}
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#ec4899",
            borderColor: "rgba(236,72,153,0.3)",
            background: "rgba(236,72,153,0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #ec4899, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.title}
        </h1>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400"
          style={{ backdropFilter: "blur(4px)" }}
        >
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
              background: "rgba(168,85,247,0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .ast-screen-glow {
          animation: astGlow 3s ease-in-out infinite;
        }
        @keyframes astGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(236,72,153,0.05); }
          50% { box-shadow: 0 0 40px rgba(236,72,153,0.1); }
        }
        .ast-line-type {
          animation: astType 2s ease-out forwards;
          transform: scaleX(0);
          transform-origin: left;
        }
        @keyframes astType {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .ast-cursor-blink {
          animation: astBlink 1s step-end infinite;
        }
        @keyframes astBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .ast-steam {
          animation: astSteam 3s ease-in-out infinite;
        }
        @keyframes astSteam {
          0%, 100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateX(-50%) translateY(-10px) scale(1.5); opacity: 0; }
        }
        .ast-note-wobble {
          animation: astWobble 4s ease-in-out infinite;
        }
        @keyframes astWobble {
          0%, 100% { transform: rotate(var(--r, 3deg)); }
          50% { transform: rotate(calc(var(--r, 3deg) + 2deg)); }
        }
      `}</style>
    </section>
  );
}
