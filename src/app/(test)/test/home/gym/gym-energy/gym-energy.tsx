"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Unleash Power",
    title: "Explode With Energy",
    subtitle: "No Limits. No Excuses.",
    description: "Channel raw power into every movement. Our high-energy training programs are designed to ignite your inner fire and shatter every barrier.",
    cta: "Ignite Now",
    secondary: "Explore Classes",
  },
  ar: {
    badge: "أطلق قوتك",
    title: "انفجر بالطاقة",
    subtitle: "لا حدود. لا أعذار.",
    description: "وجّه القوة الخام في كل حركة. برامجنا التدريبية عالية الطاقة مصممة لإشعال نارك الداخلية وتحطيم كل حاجز.",
    cta: "ابدأ الآن",
    secondary: "استكشف الحصص",
  },
};

export function GymEnergy({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const particles = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i * 15) * (Math.PI / 180);
    const distance = 80 + Math.random() * 180;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      color: ['#ef4444', '#f97316', '#fbbf24', '#f59e0b'][i % 4],
    };
  });

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Central explosion glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="energy-core"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(239,68,68,0.08) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Inner ring burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="energy-ring"
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "2px solid rgba(249,115,22,0.3)",
            boxShadow: "0 0 40px rgba(249,115,22,0.15), inset 0 0 40px rgba(249,115,22,0.1)",
          }}
        />
      </div>

      {/* Outer ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="energy-ring-outer"
          style={{
            width: 350,
            height: 350,
            borderRadius: "50%",
            border: "1px solid rgba(239,68,68,0.15)",
            boxShadow: "0 0 60px rgba(239,68,68,0.08)",
          }}
        />
      </div>

      {/* Radial particles */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full energy-particle"
            style={{
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 8px ${p.color}`,
              left: 0,
              top: 0,
              // @ts-expect-error CSS custom properties
              '--tx': `${p.x}px`,
              '--ty': `${p.y}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 speed-line"
              style={{
                width: "50vw",
                height: 1,
                background: `linear-gradient(to right, transparent, rgba(249,115,22,${0.1 + Math.random() * 0.15}), transparent)`,
                transformOrigin: "0 50%",
                transform: `rotate(${angle}deg)`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          style={{
            background: "rgba(249,115,22,0.15)",
            color: "#fbbf24",
            border: "1px solid rgba(249,115,22,0.3)",
          }}
        >
          {t.badge}
        </span>

        <h1
          className="font-black mb-2 leading-none"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#fff",
            textShadow: "0 0 80px rgba(249,115,22,0.4), 0 0 40px rgba(239,68,68,0.2)",
          }}
        >
          {t.title}
        </h1>

        <h2
          className="font-bold mb-6"
          style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "#f97316" }}
        >
          {t.subtitle}
        </h2>

        <p className="text-lg md:text-xl mb-10 mx-auto max-w-xl leading-relaxed text-gray-400">
          {t.description}
        </p>

        <div className={`flex items-center justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f97316, #ef4444)",
              color: "#fff",
              boxShadow: "0 0 40px rgba(249,115,22,0.5), 0 4px 15px rgba(0,0,0,0.3)",
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
              border: "1px solid rgba(249,115,22,0.4)",
              color: "#f97316",
              background: "rgba(249,115,22,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes energy-core-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
        }
        .energy-core {
          animation: energy-core-pulse 2s ease-in-out infinite;
        }
        @keyframes energy-ring-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
        }
        .energy-ring {
          animation: energy-ring-pulse 2.5s ease-in-out infinite;
        }
        @keyframes energy-ring-outer-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
        }
        .energy-ring-outer {
          animation: energy-ring-outer-pulse 3s ease-in-out infinite;
        }
        @keyframes energy-burst {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          70% { opacity: 0.6; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0; }
        }
        .energy-particle {
          animation: energy-burst 2s ease-out infinite;
        }
        @keyframes speed-flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .speed-line {
          animation: speed-flash 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
