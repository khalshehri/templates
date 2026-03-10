"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fitness Center",
    title: "Data Drives Results",
    description:
      "Your body is a machine — track its performance. Real-time metrics, progress charts, and milestones that keep you accountable.",
    cta: "Start Training",
    secondary: "View Plans",
    metrics: [
      { label: "STRENGTH", value: 82, unit: "%" },
      { label: "CARDIO", value: 74, unit: "%" },
      { label: "FLEXIBILITY", value: 65, unit: "%" },
      { label: "ENDURANCE", value: 91, unit: "%" },
      { label: "BODY FAT", value: 18, unit: "%" },
      { label: "BMI", value: 23, unit: "" },
    ],
  },
  ar: {
    badge: "مركز لياقة",
    title: "البيانات تقود النتائج",
    description:
      "جسمك آلة — تتبع أداءها. مقاييس فورية ورسوم تقدم وإنجازات تبقيك ملتزمًا.",
    cta: "ابدأ التدريب",
    secondary: "عرض الخطط",
    metrics: [
      { label: "القوة", value: 82, unit: "%" },
      { label: "القلب", value: 74, unit: "%" },
      { label: "المرونة", value: 65, unit: "%" },
      { label: "التحمل", value: 91, unit: "%" },
      { label: "الدهون", value: 18, unit: "%" },
      { label: "BMI", value: 23, unit: "" },
    ],
  },
};

export function GymStats({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(239,68,68,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      {/* Metric circles grid */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {t.metrics.map((metric, i) => {
            const offset = circumference - (metric.value / 100) * circumference;
            const colors = i % 2 === 0 ? ["#ef4444", "#f97316"] : ["#f97316", "#fbbf24"];
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="relative" style={{ width: 100, height: 100 }}>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    {/* Track */}
                    <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(239,68,68,0.1)" strokeWidth="6" />
                    {/* Progress */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke={`url(#grad${i})`}
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      className="gs-circle-fill"
                      style={{
                        transformOrigin: "center",
                        transform: "rotate(-90deg)",
                        animationDelay: `${i * 0.2}s`,
                        filter: `drop-shadow(0 0 6px ${colors[0]}40)`,
                      }}
                    />
                    <defs>
                      <linearGradient id={`grad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={colors[0]} />
                        <stop offset="100%" stopColor={colors[1]} />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Value in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold text-lg" style={{ color: colors[0] }}>
                      {metric.value}{metric.unit}
                    </span>
                  </div>
                </div>
                <span className="text-xs tracking-wider uppercase mt-2 text-gray-500">
                  {metric.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="absolute bottom-[28%] left-[10%] flex items-end gap-1 pointer-events-none">
        {[40, 65, 55, 80, 70, 90, 60, 75].map((h, i) => (
          <div
            key={i}
            className="gs-bar-rise rounded-t"
            style={{
              width: 8,
              height: h,
              background: i % 2 === 0
                ? "linear-gradient(to top, #ef4444, #ef444440)"
                : "linear-gradient(to top, #f97316, #f9731640)",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Mini line chart */}
      <div className="absolute bottom-[30%] right-[10%] pointer-events-none">
        <svg width="120" height="60" viewBox="0 0 120 60">
          <polyline
            points="0,50 20,40 40,45 60,25 80,30 100,15 120,20"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            opacity="0.3"
            className="gs-line-draw"
          />
          {[
            { x: 0, y: 50 }, { x: 20, y: 40 }, { x: 40, y: 45 },
            { x: 60, y: 25 }, { x: 80, y: 30 }, { x: 100, y: 15 }, { x: 120, y: 20 },
          ].map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="2"
              fill="#ef4444"
              opacity="0.4"
              className="gs-dot-pop"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[380px]">
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
        .gs-circle-fill {
          animation: gsCircle 1.5s ease-out forwards;
          stroke-dashoffset: ${circumference} !important;
        }
        @keyframes gsCircle {
          0% { stroke-dashoffset: ${circumference}; }
          100% { stroke-dashoffset: var(--offset); }
        }
        .gs-bar-rise {
          animation: gsBar 1s ease-out forwards;
          transform-origin: bottom;
          transform: scaleY(0);
        }
        @keyframes gsBar {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        .gs-line-draw {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: gsLine 2s ease-out forwards;
        }
        @keyframes gsLine {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        .gs-dot-pop {
          animation: gsDot 0.5s ease-out forwards;
          opacity: 0;
          transform: scale(0);
          transform-origin: center;
        }
        @keyframes gsDot {
          0% { opacity: 0; r: 0; }
          100% { opacity: 0.4; r: 2; }
        }
      `}</style>
    </section>
  );
}
