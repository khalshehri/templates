"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fitness Center",
    title: "Own Your Lane",
    description:
      "Every champion starts at the starting blocks. Choose your lane, lock in your focus, and sprint toward the best version of yourself.",
    cta: "Start Training",
    secondary: "View Plans",
  },
  ar: {
    badge: "مركز لياقة",
    title: "امتلك مسارك",
    description:
      "كل بطل يبدأ من نقطة الانطلاق. اختر مسارك، ركّز تمامًا، واندفع نحو أفضل نسخة من نفسك.",
    cta: "ابدأ التدريب",
    secondary: "عرض الخطط",
  },
};

export function GymTrack({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const lanes = [
    { color: "#ef4444", label: "STRENGTH" },
    { color: "#f97316", label: "CARDIO" },
    { color: "#ef4444", label: "HIIT" },
    { color: "#f97316", label: "FLEX" },
    { color: "#ef4444", label: "POWER" },
    { color: "#f97316", label: "ENDURE" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Track lanes in perspective */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          perspective: "800px",
          perspectiveOrigin: "50% 30%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateX(60deg)",
            transformOrigin: "center bottom",
          }}
        >
          {lanes.map((lane, i) => (
            <div
              key={i}
              className="absolute gtr-lane-pulse"
              style={{
                left: `${8 + i * 14}%`,
                top: 0,
                width: "12%",
                height: "100%",
                background: `linear-gradient(to bottom, ${lane.color}06, ${lane.color}15, ${lane.color}06)`,
                borderLeft: `1px solid ${lane.color}15`,
                borderRight: `1px solid ${lane.color}15`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {/* Lane number */}
              <div
                className="absolute bottom-[10%] left-1/2 -translate-x-1/2 font-bold text-xl"
                style={{ color: `${lane.color}30` }}
              >
                {i + 1}
              </div>
            </div>
          ))}

          {/* Horizontal lane markers */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-[8%] right-[8%]"
              style={{
                top: `${15 + i * 10}%`,
                height: 1,
                background: `rgba(239,68,68,${0.05 + i * 0.02})`,
              }}
            />
          ))}

          {/* Starting blocks */}
          <div className="absolute bottom-[8%] left-[8%] right-[8%] h-2 gtr-start-flash" style={{
            background: "linear-gradient(90deg, #ef4444, #f97316)",
            opacity: 0.3,
            borderRadius: 2,
          }} />
        </div>
      </div>

      {/* Speed lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none gtr-speed-line"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${10 + Math.random() * 80}%`,
            width: 60 + Math.random() * 100,
            height: 1,
            background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? "#ef4444" : "#f97316"}15, transparent)`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Finish line */}
      <div className="absolute top-[15%] left-[8%] right-[8%] h-6 pointer-events-none" style={{ opacity: 0.1 }}>
        <div className="w-full h-full" style={{
          backgroundImage: "repeating-linear-gradient(90deg, #fff 0px, #fff 8px, transparent 8px, transparent 16px), repeating-linear-gradient(90deg, transparent 0px, transparent 8px, #fff 8px, #fff 16px)",
          backgroundSize: "16px 50%",
          backgroundPosition: "0 0, 0 50%",
        }} />
      </div>

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
        .gtr-lane-pulse {
          animation: gtrLane 3s ease-in-out infinite;
        }
        @keyframes gtrLane {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .gtr-speed-line {
          animation: gtrSpeed 1.5s ease-out infinite;
        }
        @keyframes gtrSpeed {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .gtr-start-flash {
          animation: gtrFlash 2s ease-in-out infinite;
        }
        @keyframes gtrFlash {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
