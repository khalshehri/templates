"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fitness Center",
    title: "Train Like a Champion",
    description:
      "Olympic-grade dedication meets world-class facilities. Five rings of excellence — strength, speed, agility, endurance, and heart.",
    cta: "Start Training",
    secondary: "View Plans",
  },
  ar: {
    badge: "مركز لياقة",
    title: "تدرب كالأبطال",
    description:
      "تفانٍ أولمبي يلتقي بمرافق عالمية المستوى. خمس حلقات من التميز — القوة والسرعة والرشاقة والتحمل والقلب.",
    cta: "ابدأ التدريب",
    secondary: "عرض الخطط",
  },
};

export function GymRings({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const rings = [
    { cx: 150, cy: 180, color: "#ef4444", label: "POWER" },
    { cx: 260, cy: 180, color: "#f97316", label: "SPEED" },
    { cx: 370, cy: 180, color: "#ef4444", label: "AGILITY" },
    { cx: 205, cy: 250, color: "#f97316", label: "ENDURE" },
    { cx: 315, cy: 250, color: "#ef4444", label: "HEART" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Spotlight beams from top */}
      {[25, 50, 75].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none gr-spotlight"
          style={{
            top: 0,
            left: `${pos}%`,
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "80px solid transparent",
            borderRight: "80px solid transparent",
            borderTop: `500px solid ${i === 1 ? "rgba(239,68,68,0.03)" : "rgba(249,115,22,0.02)"}`,
            filter: "blur(20px)",
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Olympic rings SVG */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 pointer-events-none">
        <svg width="520" height="320" viewBox="0 0 520 320" fill="none">
          {rings.map((ring, i) => (
            <g key={i}>
              <circle
                cx={ring.cx}
                cy={ring.cy}
                r="70"
                stroke={ring.color}
                strokeWidth="4"
                fill="none"
                opacity="0.25"
                className="gr-ring-draw"
                style={{
                  strokeDasharray: 440,
                  strokeDashoffset: 440,
                  animationDelay: `${i * 0.3}s`,
                  filter: `drop-shadow(0 0 10px ${ring.color}40)`,
                }}
              />
              {/* Glow ring */}
              <circle
                cx={ring.cx}
                cy={ring.cy}
                r="70"
                stroke={ring.color}
                strokeWidth="1"
                fill="none"
                opacity="0.1"
                className="gr-ring-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              {/* Label */}
              <text
                x={ring.cx}
                y={ring.cy + 4}
                textAnchor="middle"
                fill={ring.color}
                fontSize="10"
                letterSpacing="3"
                opacity="0.3"
                fontWeight="bold"
              >
                {ring.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Arena floor reflection */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(239,68,68,0.04), transparent)",
        }}
      />

      {/* Particle sparkles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none gr-sparkle"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 50}%`,
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            background: i % 2 === 0 ? "#ef4444" : "#f97316",
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[300px]">
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
        .gr-ring-draw {
          animation: grDraw 1.5s ease-out forwards;
        }
        @keyframes grDraw {
          0% { stroke-dashoffset: 440; }
          100% { stroke-dashoffset: 0; }
        }
        .gr-ring-pulse {
          animation: grPulse 3s ease-in-out infinite;
        }
        @keyframes grPulse {
          0%, 100% { r: 70; opacity: 0.1; }
          50% { r: 80; opacity: 0.05; }
        }
        .gr-spotlight {
          animation: grSpot 4s ease-in-out infinite;
        }
        @keyframes grSpot {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .gr-sparkle {
          animation: grSparkle 2s ease-in-out infinite;
        }
        @keyframes grSparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
