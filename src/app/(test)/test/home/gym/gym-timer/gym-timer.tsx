"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fitness Center",
    title: "Every Second Counts",
    description:
      "Your transformation starts with a single rep. Track every second, crush every set, break every personal record.",
    cta: "Start Training",
    secondary: "View Plans",
    time: "03:00",
    round: "ROUND 3",
    reps: "12 REPS",
  },
  ar: {
    badge: "مركز لياقة",
    title: "كل ثانية تحسب",
    description:
      "تحولك يبدأ بتمرين واحد. تتبع كل ثانية، أكمل كل مجموعة، حطم كل رقم قياسي شخصي.",
    cta: "ابدأ التدريب",
    secondary: "عرض الخطط",
    time: "٠٣:٠٠",
    round: "الجولة ٣",
    reps: "١٢ تكرار",
  },
};

export function GymTimer({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Large circular timer ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Outer ring track */}
        <div
          style={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "3px solid rgba(239,68,68,0.1)",
          }}
        />
        {/* Progress arc */}
        <svg
          className="absolute inset-0 gt-ring-fill"
          width="500"
          height="500"
          viewBox="0 0 500 500"
        >
          <circle
            cx="250"
            cy="250"
            r="247"
            fill="none"
            stroke="url(#timerGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1551"
            strokeDashoffset="388"
            style={{ filter: "drop-shadow(0 0 10px rgba(239,68,68,0.4))" }}
          />
          <defs>
            <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
        {/* Inner glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gt-inner-pulse"
          style={{
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Timer display in center of ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
        <div
          className="font-mono font-bold gt-time-pulse"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#ef4444",
            textShadow: "0 0 30px rgba(239,68,68,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          {t.time}
        </div>
        <div className="text-xs tracking-[0.3em] uppercase mt-2" style={{ color: "#f9731680" }}>
          {t.round}
        </div>
      </div>

      {/* Tick marks around the ring */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            width: 2,
            height: i % 5 === 0 ? 14 : 6,
            background: i % 5 === 0 ? "rgba(239,68,68,0.4)" : "rgba(239,68,68,0.15)",
            transformOrigin: "center 250px",
            transform: `rotate(${i * 6}deg)`,
          }}
        />
      ))}

      {/* Stat boxes */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex gap-8 pointer-events-none">
        {[
          { label: language === "en" ? "SETS" : "مجموعات", value: "4/6" },
          { label: t.reps, value: "" },
          { label: language === "en" ? "REST" : "راحة", value: "60s" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center px-4 py-2 rounded-lg"
            style={{
              background: "rgba(239,68,68,0.05)",
              border: "1px solid rgba(239,68,68,0.15)",
            }}
          >
            {stat.value && (
              <div className="text-lg font-bold" style={{ color: "#ef4444" }}>
                {stat.value}
              </div>
            )}
            <div className="text-xs tracking-wider uppercase text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Content below ring */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[420px]">
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

        <h1
          className="font-extrabold mb-6 leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            background: "linear-gradient(135deg, #ef4444, #f97316)",
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
        .gt-ring-fill {
          animation: gtRing 3s ease-out forwards;
          transform: rotate(-90deg);
          transform-origin: center;
        }
        @keyframes gtRing {
          0% { stroke-dashoffset: 1551; }
          100% { stroke-dashoffset: 388; }
        }
        .gt-inner-pulse {
          animation: gtPulse 2s ease-in-out infinite;
        }
        @keyframes gtPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }
        .gt-time-pulse {
          animation: gtTime 1s ease-in-out infinite;
        }
        @keyframes gtTime {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
