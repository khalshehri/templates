"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fitness Center",
    title: "Burn It All",
    description:
      "Feel the fire rising from within. Every calorie burned is fuel for your transformation. Watch the meter climb as you ignite your potential.",
    cta: "Start Training",
    secondary: "View Plans",
    calories: "847",
    unit: "KCAL BURNED",
    goal: "TARGET: 1,200",
  },
  ar: {
    badge: "مركز لياقة",
    title: "احرق كل شيء",
    description:
      "اشعر بالنار تشتعل من الداخل. كل سعرة حرارية محروقة هي وقود لتحولك. شاهد المقياس يرتفع وأنت تشعل إمكاناتك.",
    cta: "ابدأ التدريب",
    secondary: "عرض الخطط",
    calories: "٨٤٧",
    unit: "سعرة محروقة",
    goal: "الهدف: ١٬٢٠٠",
  },
};

export function GymFlame({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Flame meter container - tall vertical bar */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "8%",
          top: "10%",
          bottom: "10%",
          width: 80,
          borderRadius: 40,
          border: "2px solid rgba(239,68,68,0.15)",
          background: "rgba(239,68,68,0.03)",
          overflow: "hidden",
        }}
      >
        {/* Filling level */}
        <div
          className="absolute bottom-0 left-0 right-0 gf-fill-rise"
          style={{
            height: "70%",
            background: "linear-gradient(to top, #ef4444, #f97316, #fbbf2440)",
            borderRadius: "0 0 38px 38px",
            filter: "blur(1px)",
          }}
        />
        {/* Flame tongues at top of fill */}
        {[0, 1, 2].map((f) => (
          <div
            key={f}
            className="absolute gf-flame-dance"
            style={{
              bottom: "70%",
              left: `${15 + f * 25}%`,
              width: 16,
              height: 30,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              background: `linear-gradient(to top, #ef4444, #f97316, transparent)`,
              animationDelay: `${f * 0.3}s`,
              filter: "blur(2px)",
            }}
          />
        ))}
        {/* Scale marks */}
        {[20, 40, 60, 80].map((pos) => (
          <div
            key={pos}
            className="absolute right-0 w-4 h-px"
            style={{
              bottom: `${pos}%`,
              background: "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Second meter on right (mirror) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "8%",
          top: "10%",
          bottom: "10%",
          width: 80,
          borderRadius: 40,
          border: "2px solid rgba(249,115,22,0.15)",
          background: "rgba(249,115,22,0.03)",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 gf-fill-rise"
          style={{
            height: "55%",
            background: "linear-gradient(to top, #f97316, #fbbf24, #fbbf2440)",
            borderRadius: "0 0 38px 38px",
            filter: "blur(1px)",
            animationDelay: "0.5s",
          }}
        />
        {[0, 1, 2].map((f) => (
          <div
            key={f}
            className="absolute gf-flame-dance"
            style={{
              bottom: "55%",
              left: `${15 + f * 25}%`,
              width: 14,
              height: 25,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              background: `linear-gradient(to top, #f97316, #fbbf24, transparent)`,
              animationDelay: `${0.5 + f * 0.3}s`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      {/* Background heat waves */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none gf-ember"
          style={{
            bottom: `${Math.random() * 30}%`,
            left: `${10 + Math.random() * 80}%`,
            width: 3 + Math.random() * 4,
            height: 3 + Math.random() * 4,
            background: i % 2 === 0 ? "#ef4444" : "#f97316",
            opacity: 0.1 + Math.random() * 0.2,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Heat shimmer at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(239,68,68,0.08), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <span
          className="inline-block text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "#ef4444",
            borderColor: "rgba(239,68,68,0.3)",
            background: "rgba(239,68,68,0.08)",
          }}
        >
          {t.badge}
        </span>

        {/* Calorie counter */}
        <div className="mb-4">
          <span
            className="font-black gf-count-up"
            style={{
              fontSize: "clamp(4rem, 10vw, 7rem)",
              background: "linear-gradient(to top, #ef4444, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            {t.calories}
          </span>
          <div className="text-xs tracking-[0.3em] uppercase mt-1" style={{ color: "#f9731680" }}>
            {t.unit}
          </div>
          <div className="text-xs tracking-wider mt-1 text-gray-600">{t.goal}</div>
        </div>

        <h1
          className="font-extrabold mb-4 leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff",
            textShadow: "0 0 30px rgba(239,68,68,0.2)",
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
              background: "linear-gradient(135deg, #ef4444, #f97316)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(239,68,68,0.4)",
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
              color: "#fb923c",
              background: "rgba(249,115,22,0.08)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        .gf-fill-rise {
          animation: gfRise 2.5s ease-out forwards;
          transform-origin: bottom;
          transform: scaleY(0);
        }
        @keyframes gfRise {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        .gf-flame-dance {
          animation: gfFlame 1s ease-in-out infinite;
        }
        @keyframes gfFlame {
          0%, 100% { transform: scaleY(1) translateY(0); opacity: 0.6; }
          50% { transform: scaleY(1.4) translateY(-5px); opacity: 0.9; }
        }
        .gf-ember {
          animation: gfEmber 2.5s ease-out infinite;
        }
        @keyframes gfEmber {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          100% { transform: translateY(-200px) scale(0); opacity: 0; }
        }
        .gf-count-up {
          animation: gfCount 1s ease-out forwards;
        }
        @keyframes gfCount {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
