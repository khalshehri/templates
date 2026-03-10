"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fitness Center",
    title: "Claim Your Podium",
    description:
      "Every champion was once a beginner. Step onto the podium, raise your trophy, and prove that dedication always wins.",
    cta: "Start Training",
    secondary: "View Plans",
    gold: "1ST",
    silver: "2ND",
    bronze: "3RD",
  },
  ar: {
    badge: "مركز لياقة",
    title: "اعتلِ منصة التتويج",
    description:
      "كل بطل كان مبتدئاً يوماً. اصعد المنصة، ارفع كأسك، وأثبت أن الالتزام ينتصر دائماً.",
    cta: "ابدأ التدريب",
    secondary: "عرض الخطط",
    gold: "الأول",
    silver: "الثاني",
    bronze: "الثالث",
  },
};

export function GymChampion({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Spotlight from above */}
      <div
        className="absolute pointer-events-none gc-spotlight-main"
        style={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "150px solid transparent",
          borderRight: "150px solid transparent",
          borderTop: "700px solid rgba(239,68,68,0.04)",
          filter: "blur(30px)",
        }}
      />

      {/* Trophy in center */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 pointer-events-none gc-trophy-float">
        {/* Trophy cup */}
        <div className="relative" style={{ width: 120, height: 140 }}>
          {/* Cup body */}
          <div
            style={{
              width: 100,
              height: 80,
              margin: "0 auto",
              borderRadius: "10px 10px 40px 40px",
              background: "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.05))",
              border: "2px solid rgba(251,191,36,0.2)",
              boxShadow: "0 0 30px rgba(251,191,36,0.1)",
            }}
          />
          {/* Handles */}
          <div style={{
            position: "absolute",
            top: 10,
            left: -12,
            width: 20,
            height: 40,
            borderRadius: "20px 0 0 20px",
            border: "2px solid rgba(251,191,36,0.15)",
            borderRight: "none",
          }} />
          <div style={{
            position: "absolute",
            top: 10,
            right: -12,
            width: 20,
            height: 40,
            borderRadius: "0 20px 20px 0",
            border: "2px solid rgba(251,191,36,0.15)",
            borderLeft: "none",
          }} />
          {/* Stem */}
          <div style={{
            width: 12,
            height: 25,
            margin: "0 auto",
            background: "rgba(251,191,36,0.1)",
            border: "1px solid rgba(251,191,36,0.15)",
          }} />
          {/* Base */}
          <div style={{
            width: 60,
            height: 10,
            margin: "0 auto",
            borderRadius: "0 0 4px 4px",
            background: "rgba(251,191,36,0.1)",
            border: "1px solid rgba(251,191,36,0.15)",
          }} />
          {/* Star on trophy */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 gc-star-pulse" style={{
            color: "rgba(251,191,36,0.4)",
            fontSize: 20,
          }}>
            ★
          </div>
        </div>
      </div>

      {/* Podium blocks */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex items-end gap-2 pointer-events-none">
        {/* 2nd place - left */}
        <div className="gc-podium-rise" style={{ animationDelay: "0.3s" }}>
          <div className="text-center mb-2">
            <div className="w-10 h-10 mx-auto rounded-full" style={{
              border: "2px solid rgba(192,192,192,0.2)",
              background: "rgba(192,192,192,0.05)",
            }} />
          </div>
          <div
            className="w-28 rounded-t-lg flex items-center justify-center"
            style={{
              height: 100,
              background: "linear-gradient(to top, rgba(192,192,192,0.08), rgba(192,192,192,0.03))",
              border: "1px solid rgba(192,192,192,0.15)",
              borderBottom: "none",
            }}
          >
            <span className="text-2xl font-black" style={{ color: "rgba(192,192,192,0.3)" }}>{t.silver}</span>
          </div>
        </div>

        {/* 1st place - center (tallest) */}
        <div className="gc-podium-rise" style={{ animationDelay: "0s" }}>
          <div className="text-center mb-2">
            <div className="w-12 h-12 mx-auto rounded-full gc-gold-glow" style={{
              border: "2px solid rgba(251,191,36,0.3)",
              background: "rgba(251,191,36,0.08)",
            }} />
          </div>
          <div
            className="w-32 rounded-t-lg flex items-center justify-center"
            style={{
              height: 140,
              background: "linear-gradient(to top, rgba(251,191,36,0.1), rgba(251,191,36,0.03))",
              border: "1px solid rgba(251,191,36,0.2)",
              borderBottom: "none",
              boxShadow: "0 0 20px rgba(251,191,36,0.05)",
            }}
          >
            <span className="text-3xl font-black" style={{ color: "rgba(251,191,36,0.4)" }}>{t.gold}</span>
          </div>
        </div>

        {/* 3rd place - right */}
        <div className="gc-podium-rise" style={{ animationDelay: "0.6s" }}>
          <div className="text-center mb-2">
            <div className="w-10 h-10 mx-auto rounded-full" style={{
              border: "2px solid rgba(205,127,50,0.2)",
              background: "rgba(205,127,50,0.05)",
            }} />
          </div>
          <div
            className="w-28 rounded-t-lg flex items-center justify-center"
            style={{
              height: 80,
              background: "linear-gradient(to top, rgba(205,127,50,0.08), rgba(205,127,50,0.03))",
              border: "1px solid rgba(205,127,50,0.15)",
              borderBottom: "none",
            }}
          >
            <span className="text-2xl font-black" style={{ color: "rgba(205,127,50,0.3)" }}>{t.bronze}</span>
          </div>
        </div>
      </div>

      {/* Confetti particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none gc-confetti"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${5 + Math.random() * 30}%`,
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            background: i % 4 === 0 ? "#ef4444" : i % 4 === 1 ? "#f97316" : i % 4 === 2 ? "#fbbf24" : "#fb923c",
            opacity: 0.15 + Math.random() * 0.15,
            borderRadius: i % 2 === 0 ? "50%" : "1px",
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
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
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            background: "linear-gradient(135deg, #ef4444, #f97316, #fbbf24)",
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
        .gc-trophy-float {
          animation: gcFloat 3s ease-in-out infinite;
        }
        @keyframes gcFloat {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        .gc-star-pulse {
          animation: gcStar 2s ease-in-out infinite;
        }
        @keyframes gcStar {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateX(-50%) scale(1.2); }
        }
        .gc-podium-rise {
          animation: gcRise 1s ease-out forwards;
          opacity: 0;
          transform: translateY(50px);
        }
        @keyframes gcRise {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .gc-gold-glow {
          animation: gcGold 2s ease-in-out infinite;
        }
        @keyframes gcGold {
          0%, 100% { box-shadow: 0 0 10px rgba(251,191,36,0.1); }
          50% { box-shadow: 0 0 25px rgba(251,191,36,0.2); }
        }
        .gc-confetti {
          animation: gcConfetti 4s ease-out infinite;
        }
        @keyframes gcConfetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          100% { transform: translateY(300px) rotate(720deg); opacity: 0; }
        }
        .gc-spotlight-main {
          animation: gcSpot 3s ease-in-out infinite;
        }
        @keyframes gcSpot {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
