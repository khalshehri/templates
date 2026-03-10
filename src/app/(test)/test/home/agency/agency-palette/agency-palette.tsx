"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Creative Agency",
    title: "We Paint Your Brand's Story",
    description:
      "Every brand has colors waiting to burst free. We mix strategy with creativity to splash your vision across every canvas that matters.",
    cta: "Start Your Project",
    secondary: "View Portfolio",
  },
  ar: {
    badge: "وكالة إبداعية",
    title: "نرسم قصة علامتك التجارية",
    description:
      "كل علامة تجارية لديها ألوان تنتظر الانطلاق. نمزج الاستراتيجية مع الإبداع لنرش رؤيتك على كل لوحة تهم.",
    cta: "ابدأ مشروعك",
    secondary: "عرض الأعمال",
  },
};

export function AgencyPalette({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const splashes = [
    { color: "#ec4899", x: "15%", y: "20%", size: 180, delay: 0 },
    { color: "#8b5cf6", x: "75%", y: "15%", size: 160, delay: 0.3 },
    { color: "#06b6d4", x: "80%", y: "65%", size: 140, delay: 0.6 },
    { color: "#f59e0b", x: "20%", y: "70%", size: 150, delay: 0.9 },
    { color: "#10b981", x: "50%", y: "80%", size: 120, delay: 1.2 },
    { color: "#ef4444", x: "60%", y: "25%", size: 100, delay: 1.5 },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Palette shape in center background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="ap-palette-spin"
          style={{
            width: 500,
            height: 500,
            borderRadius: "50% 50% 50% 30%",
            border: "2px solid rgba(255,255,255,0.05)",
            background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.03), transparent 70%)",
          }}
        />
      </div>

      {/* Color splashes bursting outward */}
      {splashes.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none ap-splash-burst"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, ${s.color}30 0%, ${s.color}10 40%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />
          {/* Smaller satellite splashes */}
          {[0, 1, 2].map((j) => (
            <div
              key={j}
              className="absolute rounded-full ap-satellite"
              style={{
                width: s.size * 0.15,
                height: s.size * 0.15,
                background: s.color,
                opacity: 0.2,
                filter: "blur(4px)",
                top: `${30 + j * 20}%`,
                left: `${20 + j * 25}%`,
                animationDelay: `${s.delay + j * 0.2}s`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Paint dots on palette */}
      {[
        { color: "#ec4899", cx: "42%", cy: "38%" },
        { color: "#8b5cf6", cx: "52%", cy: "35%" },
        { color: "#06b6d4", cx: "58%", cy: "42%" },
        { color: "#f59e0b", cx: "48%", cy: "48%" },
        { color: "#10b981", cx: "38%", cy: "45%" },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full ap-dot-pulse pointer-events-none"
          style={{
            left: dot.cx,
            top: dot.cy,
            background: dot.color,
            boxShadow: `0 0 20px ${dot.color}60`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#ec4899",
            borderColor: "rgba(236,72,153,0.3)",
            background: "rgba(236,72,153,0.08)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
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
              border: "1px solid rgba(139,92,246,0.4)",
              color: "#a78bfa",
              background: "rgba(139,92,246,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .ap-palette-spin {
          animation: ap-spin 30s linear infinite;
        }
        @keyframes ap-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ap-splash-burst {
          animation: ap-burst 4s ease-in-out infinite;
        }
        @keyframes ap-burst {
          0%, 100% { transform: scale(0.8); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        .ap-satellite {
          animation: ap-orbit 3s ease-in-out infinite;
        }
        @keyframes ap-orbit {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(15px, -10px) scale(1.3); }
          50% { transform: translate(-10px, -20px) scale(0.8); }
          75% { transform: translate(10px, 5px) scale(1.1); }
        }
        .ap-dot-pulse {
          animation: ap-pulse 2s ease-in-out infinite;
        }
        @keyframes ap-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.8); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
