"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Fitness Center",
    title: "Maximum Power Output",
    description:
      "Push the needle past your limits. Our programs are engineered to redline your potential and unlock performance you never knew you had.",
    cta: "Start Training",
    secondary: "View Plans",
    level: "POWER LEVEL",
    max: "MAX",
  },
  ar: {
    badge: "مركز لياقة",
    title: "أقصى إنتاج للطاقة",
    description:
      "ادفع المؤشر إلى أقصى حدودك. برامجنا مصممة لتحرير إمكاناتك وفتح أداء لم تكن تعلم أنه لديك.",
    cta: "ابدأ التدريب",
    secondary: "عرض الخطط",
    level: "مستوى الطاقة",
    max: "الأقصى",
  },
};

export function GymPower({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const gaugeAngle = 240; // degrees of arc
  const needleAngle = -120 + (gaugeAngle * 0.78); // 78% power

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Power gauge - large speedometer */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 450, height: 300 }}>
        {/* Gauge arc */}
        <svg width="450" height="300" viewBox="0 0 450 300">
          {/* Background arc */}
          <path
            d="M 55 260 A 170 170 0 1 1 395 260"
            fill="none"
            stroke="rgba(239,68,68,0.1)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Colored arc segments */}
          <path
            d="M 55 260 A 170 170 0 0 1 130 100"
            fill="none"
            stroke="#22c55e"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.2"
          />
          <path
            d="M 130 100 A 170 170 0 0 1 225 90"
            fill="none"
            stroke="#f97316"
            strokeWidth="12"
            opacity="0.2"
          />
          <path
            d="M 225 90 A 170 170 0 0 1 320 100"
            fill="none"
            stroke="#ef4444"
            strokeWidth="12"
            opacity="0.25"
          />
          <path
            d="M 320 100 A 170 170 0 0 1 395 260"
            fill="none"
            stroke="#ef4444"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.4"
            className="gp-redline"
          />

          {/* Tick marks */}
          {Array.from({ length: 13 }).map((_, i) => {
            const angle = (-210 + i * 20) * (Math.PI / 180);
            const x1 = 225 + 155 * Math.cos(angle);
            const y1 = 260 + 155 * Math.sin(angle);
            const x2 = 225 + 170 * Math.cos(angle);
            const y2 = 260 + 170 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={i > 9 ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.15)"}
                strokeWidth="2"
              />
            );
          })}

          {/* Needle */}
          <g className="gp-needle-swing" style={{ transformOrigin: "225px 260px" }}>
            <line
              x1="225" y1="260"
              x2={225 + 140 * Math.cos((-210 + needleAngle) * (Math.PI / 180))}
              y2={260 + 140 * Math.sin((-210 + needleAngle) * (Math.PI / 180))}
              stroke="#ef4444"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 6px rgba(239,68,68,0.5))" }}
            />
            {/* Needle center */}
            <circle cx="225" cy="260" r="8" fill="#ef4444" opacity="0.8" />
            <circle cx="225" cy="260" r="4" fill="#fff" opacity="0.3" />
          </g>

          {/* Scale labels */}
          <text x="55" y="285" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">0</text>
          <text x="225" y="75" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">50</text>
          <text x="395" y="285" fill="rgba(239,68,68,0.5)" fontSize="10" textAnchor="middle" fontWeight="bold">{t.max}</text>
        </svg>

        {/* Digital readout */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
          <div
            className="font-mono font-black gp-value-pulse"
            style={{
              fontSize: "3rem",
              color: "#ef4444",
              textShadow: "0 0 20px rgba(239,68,68,0.4)",
              lineHeight: 1,
            }}
          >
            78
          </div>
          <div className="text-xs tracking-[0.3em] uppercase mt-1" style={{ color: "#f9731660" }}>
            {t.level}
          </div>
        </div>
      </div>

      {/* Side power bars */}
      {["left", "right"].map((side) => (
        <div
          key={side}
          className="absolute top-[20%] bottom-[20%] pointer-events-none"
          style={{ [side]: "5%", width: 6 }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden" style={{ background: "rgba(239,68,68,0.08)" }}>
            <div
              className="absolute bottom-0 left-0 right-0 rounded-full gp-side-fill"
              style={{
                height: side === "left" ? "78%" : "65%",
                background: "linear-gradient(to top, #ef4444, #f97316)",
                animationDelay: side === "right" ? "0.3s" : "0s",
              }}
            />
          </div>
        </div>
      ))}

      {/* RPM-style background circles */}
      {[200, 350, 500].map((size, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: size,
            height: size,
            border: `1px solid rgba(239,68,68,${0.03 + i * 0.01})`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[350px]">
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
        .gp-needle-swing {
          animation: gpSwing 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes gpSwing {
          0% { transform: rotate(-120deg); }
          100% { transform: rotate(0deg); }
        }
        .gp-redline {
          animation: gpRedline 1s ease-in-out infinite;
        }
        @keyframes gpRedline {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .gp-value-pulse {
          animation: gpValue 1.5s ease-in-out infinite;
        }
        @keyframes gpValue {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .gp-side-fill {
          animation: gpFill 2s ease-out forwards;
          transform-origin: bottom;
          transform: scaleY(0);
        }
        @keyframes gpFill {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
