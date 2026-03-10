"use client";

/**
 * Resume Scroll -- Resume Hero Template
 *
 * Ancient scroll unrolling to reveal professional history.
 * Parchment texture CSS with scroll handles and aged paper effect.
 *
 * @category Resume
 * @palette parchment (#F5E6C8), sepia (#8B6914), violet (#7C3AED), dark (#1A1510)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Marcus Aurelius",
    role: "Senior Consultant",
    heading: "A Scroll of Distinguished Service",
    subheading:
      "Unroll the parchment and discover a legacy of strategic thinking, client success, and industry leadership spanning over a decade.",
    cta: "Unroll the Full Scroll",
    secondary: "Request Meeting",
    timeline: [
      { year: "2024", event: "Partner & Managing Director" },
      { year: "2021", event: "Senior Strategy Consultant" },
      { year: "2018", event: "Management Consultant" },
      { year: "2015", event: "Business Analyst" },
    ],
    seal: "EXCELLENCE",
  },
  ar: {
    name: "ماركوس أوريليوس",
    role: "مستشار أول",
    heading: "مخطوطة خدمة متميزة",
    subheading:
      "افتح المخطوطة واكتشف إرثاً من التفكير الاستراتيجي ونجاح العملاء وقيادة الصناعة على مدى أكثر من عقد.",
    cta: "افتح المخطوطة الكاملة",
    secondary: "طلب اجتماع",
    timeline: [
      { year: "٢٠٢٤", event: "شريك ومدير إداري" },
      { year: "٢٠٢١", event: "مستشار استراتيجي أول" },
      { year: "٢٠١٨", event: "مستشار إداري" },
      { year: "٢٠١٥", event: "محلل أعمال" },
    ],
    seal: "تميّز",
  },
};

export function ResumeScroll({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1510 0%, #1F1A12 50%, #151008 100%)",
      }}
    >
      {/* Ambient warm light */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(139,105,20,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-4">
        {/* Top scroll handle */}
        <div className="relative flex justify-center mb-0">
          <div
            className="relative rounded-full"
            style={{
              width: "90%",
              height: "28px",
              background: "linear-gradient(180deg, #6B4226 0%, #4A2E18 50%, #3D2412 100%)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            {/* Wood grain */}
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 9px)",
              }}
            />
            {/* Knobs */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
              style={{
                [isRTL ? "right" : "left"]: "-8px",
                background: "linear-gradient(135deg, #8B6914, #5C3D2E)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
              }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
              style={{
                [isRTL ? "left" : "right"]: "-8px",
                background: "linear-gradient(135deg, #8B6914, #5C3D2E)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>

        {/* Parchment body */}
        <div
          className="relative px-8 sm:px-12 py-10"
          style={{
            background: "linear-gradient(180deg, #E8D8B4 0%, #F5E6C8 5%, #F0DDB8 50%, #F5E6C8 95%, #E8D8B4 100%)",
            boxShadow: "inset 0 0 40px rgba(139,105,20,0.15), 0 10px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Aged paper texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Edge staining */}
          <div
            className="absolute top-0 left-0 right-0 h-8"
            style={{
              background: "linear-gradient(180deg, rgba(139,105,20,0.15) 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-8"
            style={{
              background: "linear-gradient(0deg, rgba(139,105,20,0.15) 0%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Decorative header flourish */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-12" style={{ backgroundColor: "rgba(139,105,20,0.4)" }} />
              <span style={{ color: "#8B6914", fontSize: "18px" }}>&#9830;</span>
              <div className="h-[1px] w-12" style={{ backgroundColor: "rgba(139,105,20,0.4)" }} />
            </div>

            <div
              className="text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "#8B6914" }}
            >
              {t.role}
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
              style={{
                color: "#2D1E12",
                fontFamily: "Georgia, serif",
              }}
            >
              {t.name}
            </h1>

            <p
              className="text-sm italic mb-6"
              style={{ color: "rgba(45,30,18,0.5)", fontFamily: "Georgia, serif" }}
            >
              {t.heading}
            </p>

            {/* Scroll divider */}
            <svg className="w-40 mx-auto mb-6" height="10" viewBox="0 0 160 10">
              <path d="M0 5 Q20 0 40 5 Q60 10 80 5 Q100 0 120 5 Q140 10 160 5" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>

            {/* Timeline entries */}
            <div className="space-y-4 mb-6 text-left max-w-sm mx-auto">
              {t.timeline.map((entry, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4"
                  style={{
                    [isRTL ? "borderRight" : "borderLeft"]: "1px solid rgba(139,105,20,0.3)",
                    [isRTL ? "paddingRight" : "paddingLeft"]: "12px",
                  }}
                >
                  <span
                    className="text-xs font-mono flex-shrink-0"
                    style={{ color: "#7C3AED", width: "40px" }}
                  >
                    {entry.year}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "#2D1E12", fontFamily: "Georgia, serif" }}
                  >
                    {entry.event}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-sm leading-relaxed mb-8 max-w-md mx-auto"
              style={{ color: "rgba(45,30,18,0.6)", fontFamily: "Georgia, serif" }}
            >
              {t.subheading}
            </p>

            {/* Wax seal */}
            <div
              className="inline-flex items-center justify-center rounded-full mb-6"
              style={{
                width: "60px",
                height: "60px",
                background: "radial-gradient(circle at 35% 35%, #9B2C2C, #7C2D2D, #6B2121)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.15)",
              }}
            >
              <span className="text-[8px] font-bold tracking-widest text-red-200">
                {t.seal}
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                className="group flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#7C3AED",
                  boxShadow: "0 4px 15px rgba(124,58,237,0.3)",
                }}
              >
                {t.cta}
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
                />
              </button>
              <button
                className="px-7 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#7C3AED", border: "1px solid rgba(124,58,237,0.4)" }}
              >
                {t.secondary}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom scroll handle */}
        <div className="relative flex justify-center mt-0">
          <div
            className="relative rounded-full"
            style={{
              width: "90%",
              height: "28px",
              background: "linear-gradient(0deg, #6B4226 0%, #4A2E18 50%, #3D2412 100%)",
              boxShadow: "0 -4px 12px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 9px)",
              }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
              style={{
                [isRTL ? "right" : "left"]: "-8px",
                background: "linear-gradient(135deg, #8B6914, #5C3D2E)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
              }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
              style={{
                [isRTL ? "left" : "right"]: "-8px",
                background: "linear-gradient(135deg, #8B6914, #5C3D2E)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollUnroll {
          0% { max-height: 0; opacity: 0; }
          100% { max-height: 800px; opacity: 1; }
        }
      `}</style>
    </section>
  );
}
