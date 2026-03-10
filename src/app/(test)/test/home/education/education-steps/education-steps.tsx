"use client";

/**
 * Education Steps -- Education Hero Template
 *
 * Ascending steps/stairs representing learning progression.
 * Content on each step level with milestone markers.
 *
 * @category Education
 * @palette emerald (#059669), mint (#6EE7B7), dark (#071510)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Step by Step",
    heading: "Climb the Stairway to Mastery",
    subheading:
      "Every step brings you closer to your goals. Our structured curriculum guides you from beginner to expert, one milestone at a time.",
    cta: "Begin the Climb",
    secondary: "See the Path",
    steps: [
      { level: "Beginner", desc: "Foundations & basics" },
      { level: "Intermediate", desc: "Core concepts" },
      { level: "Advanced", desc: "Deep expertise" },
      { level: "Expert", desc: "Mastery achieved" },
    ],
  },
  ar: {
    badge: "خطوة بخطوة",
    heading: "اصعد سلّم الإتقان",
    subheading:
      "كل خطوة تقرّبك من أهدافك. منهجنا المنظّم يرشدك من المبتدئ إلى الخبير، معلم تلو الآخر.",
    cta: "ابدأ الصعود",
    secondary: "شاهد المسار",
    steps: [
      { level: "مبتدئ", desc: "الأساسيات والقواعد" },
      { level: "متوسط", desc: "المفاهيم الجوهرية" },
      { level: "متقدم", desc: "خبرة عميقة" },
      { level: "خبير", desc: "تحقيق الإتقان" },
    ],
  },
};

export function EducationSteps({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  const stepColors = [
    { bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.2)", glow: "rgba(5,150,105,0.1)" },
    { bg: "rgba(5,150,105,0.12)", border: "rgba(5,150,105,0.3)", glow: "rgba(5,150,105,0.15)" },
    { bg: "rgba(5,150,105,0.18)", border: "rgba(5,150,105,0.4)", glow: "rgba(5,150,105,0.2)" },
    { bg: "rgba(5,150,105,0.25)", border: "rgba(5,150,105,0.5)", glow: "rgba(5,150,105,0.3)" },
  ];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #071510 0%, #0A1F17 50%, #0D2920 100%)",
      }}
    >
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(5,150,105,0.5) 40px, rgba(5,150,105,0.5) 41px)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Steps visual */}
        <div className="relative flex-shrink-0" style={{ width: "400px", height: "400px" }}>
          {/* Steps */}
          {t.steps.map((step, i) => {
            const stepWidth = 400 - i * 50;
            const stepHeight = 80;
            const stepBottom = i * 90;
            const stepLeft = isRTL ? (400 - stepWidth) : 0;

            return (
              <div
                key={i}
                className="absolute flex items-center px-5 transition-all duration-500"
                style={{
                  bottom: `${stepBottom}px`,
                  [isRTL ? "right" : "left"]: `${isRTL ? 0 : i * 50}px`,
                  width: `${stepWidth}px`,
                  height: `${stepHeight}px`,
                  backgroundColor: stepColors[i].bg,
                  borderTop: `2px solid ${stepColors[i].border}`,
                  borderLeft: isRTL ? "none" : `2px solid ${stepColors[i].border}`,
                  borderRight: isRTL ? `2px solid ${stepColors[i].border}` : "none",
                  boxShadow: `0 -4px 20px ${stepColors[i].glow}`,
                  animation: `stepAppear 0.6s ease-out ${i * 0.2}s both`,
                }}
              >
                {/* Step number circle */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    backgroundColor: "rgba(5,150,105,0.2)",
                    border: `2px solid ${stepColors[i].border}`,
                    color: "#34D399",
                    [isRTL ? "marginLeft" : "marginRight"]: "16px",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#E2FAF0" }}>
                    {step.level}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(167,243,208,0.5)" }}>
                    {step.desc}
                  </div>
                </div>

                {/* Milestone star on top step */}
                {i === 3 && (
                  <div
                    className="absolute -top-3"
                    style={{
                      [isRTL ? "left" : "right"]: "20px",
                      color: "#FBBF24",
                      fontSize: "20px",
                      animation: "starPulse 2s ease-in-out infinite alternate",
                    }}
                  >
                    ★
                  </div>
                )}
              </div>
            );
          })}

          {/* Climbing figure on step 2 */}
          <div
            className="absolute z-10"
            style={{
              bottom: "200px",
              [isRTL ? "right" : "left"]: `${isRTL ? 240 : 140}px`,
            }}
          >
            {/* Simple stick figure */}
            <svg width="24" height="40" viewBox="0 0 24 40">
              <circle cx="12" cy="6" r="5" fill="none" stroke="#34D399" strokeWidth="1.5" />
              <line x1="12" y1="11" x2="12" y2="26" stroke="#34D399" strokeWidth="1.5" />
              <line x1="12" y1="16" x2="4" y2="22" stroke="#34D399" strokeWidth="1.5" />
              <line x1="12" y1="16" x2="20" y2="20" stroke="#34D399" strokeWidth="1.5" />
              <line x1="12" y1="26" x2="5" y2="38" stroke="#34D399" strokeWidth="1.5" />
              <line x1="12" y1="26" x2="19" y2="35" stroke="#34D399" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Dotted path connecting steps */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
            <path
              d={isRTL
                ? "M380 360 L380 310 L330 310 L330 220 L280 220 L280 130 L230 130 L230 50"
                : "M20 360 L20 310 L70 310 L70 220 L120 220 L120 130 L170 130 L170 50"
              }
              fill="none"
              stroke="rgba(52,211,153,0.2)"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          </svg>
        </div>

        {/* Text content */}
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <div
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            style={{
              backgroundColor: "rgba(5,150,105,0.12)",
              color: "#34D399",
              border: "1px solid rgba(5,150,105,0.3)",
            }}
          >
            {t.badge}
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "#ECFDF5" }}
          >
            {t.heading}
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(167,243,208,0.65)" }}
          >
            {t.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#059669",
                boxShadow: "0 4px 20px rgba(5,150,105,0.3)",
              }}
            >
              {t.cta}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
              style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.3)" }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes stepAppear {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes starPulse {
          0% { transform: scale(1); text-shadow: 0 0 8px rgba(251,191,36,0.3); }
          100% { transform: scale(1.2); text-shadow: 0 0 20px rgba(251,191,36,0.6); }
        }
      `}</style>
    </section>
  );
}
