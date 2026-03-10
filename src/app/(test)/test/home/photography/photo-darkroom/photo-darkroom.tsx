"use client";

/**
 * Photo Darkroom -- Photography Hero Template
 *
 * Red darkroom lighting with image slowly "developing" effect.
 * Analog photography process aesthetic with chemical trays and safe light.
 *
 * @category Photography
 * @palette darkroom red (#7F1D1D), safe light (#DC2626), chemical green (#166534), dark (#0A0505)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "The Darkroom",
    heading: "Where Magic Develops",
    subheading:
      "In the quiet glow of red light, images emerge from nothing. The ancient art of developing photographs — patient, precise, and profoundly beautiful.",
    cta: "Enter the Darkroom",
    secondary: "View Prints",
    processSteps: ["Expose", "Develop", "Stop", "Fix", "Wash"],
    timer: "02:30",
  },
  ar: {
    badge: "الغرفة المظلمة",
    heading: "حيث يتطوّر السحر",
    subheading:
      "في التوهج الهادئ للضوء الأحمر، تبرز الصور من العدم. فن تطوير الصور القديم — صبور، دقيق، وجميل بعمق.",
    cta: "ادخل الغرفة المظلمة",
    secondary: "عرض المطبوعات",
    processSteps: ["تعريض", "تطوير", "إيقاف", "تثبيت", "غسل"],
    timer: "٠٢:٣٠",
  },
};

export function PhotoDarkroom({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0505" }}
    >
      {/* Red safe light glow from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full"
        style={{
          height: "50%",
          background: "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.08) 0%, transparent 70%)",
          animation: "safeLight 4s ease-in-out infinite alternate",
        }}
      />

      {/* Side red glow */}
      <div
        className="absolute rounded-full"
        style={{
          top: "20%",
          [isRTL ? "left" : "right"]: "5%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Chemical trays at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
        {t.processSteps.map((step, i) => (
          <div key={i} className="text-center">
            <div
              className="rounded-sm"
              style={{
                width: "60px",
                height: "8px",
                backgroundColor: i === 1 ? "rgba(22,101,52,0.3)" : i === 2 ? "rgba(220,38,38,0.15)" : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: i === 1 ? "0 0 8px rgba(22,101,52,0.2)" : "none",
              }}
            />
            <span className="text-[9px] font-mono mt-1 block" style={{ color: "rgba(220,38,38,0.3)" }}>
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Developing photo simulation */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 hidden md:block">
        <div
          className="relative"
          style={{
            width: "200px",
            height: "140px",
            border: "8px solid white",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
          {/* Photo "developing" */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(225,29,72,0.1) 0%, rgba(225,29,72,0.05) 50%, rgba(0,0,0,0.3) 100%)",
              animation: "developing 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* Clothespin / clip on top */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2"
          style={{
            width: "20px",
            height: "12px",
            backgroundColor: "#8B6914",
            borderRadius: "2px 2px 0 0",
          }}
        />

        {/* Hanging wire */}
        <div
          className="absolute -top-8 left-0 right-0 h-[1px]"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        />
      </div>

      {/* Timer */}
      <div
        className="absolute top-8"
        style={{ [isRTL ? "left" : "right"]: "8%" }}
      >
        <div
          className="font-mono text-2xl font-bold"
          style={{
            color: "rgba(220,38,38,0.5)",
            textShadow: "0 0 10px rgba(220,38,38,0.3)",
            animation: "timerPulse 1s step-end infinite",
          }}
        >
          {t.timer}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-xl mx-auto px-8 text-center">
        <div
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider"
          style={{
            backgroundColor: "rgba(220,38,38,0.08)",
            color: "rgba(220,38,38,0.7)",
            border: "1px solid rgba(220,38,38,0.15)",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5"
          style={{
            color: "rgba(255,241,242,0.85)",
            textShadow: "0 0 30px rgba(220,38,38,0.1)",
          }}
        >
          {t.heading}
        </h1>

        <p
          className="text-base leading-relaxed mb-8 max-w-md mx-auto"
          style={{ color: "rgba(255,241,242,0.35)" }}
        >
          {t.subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(220,38,38,0.15)",
              color: "#FCA5A5",
              border: "1px solid rgba(220,38,38,0.3)",
              boxShadow: "0 4px 20px rgba(220,38,38,0.15)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-7 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{ color: "rgba(220,38,38,0.5)", border: "1px solid rgba(220,38,38,0.15)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes safeLight {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        @keyframes developing {
          0% { opacity: 0.1; }
          50% { opacity: 0.6; }
          100% { opacity: 0.1; }
        }
        @keyframes timerPulse {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
