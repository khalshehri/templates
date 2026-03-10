"use client";

/**
 * Education Podium -- Education Hero Template
 *
 * Lecture podium/stage layout with speaker area and audience silhouettes.
 * Academic presentation feel with spotlight and stage curtains.
 *
 * @category Education
 * @palette emerald (#059669), gold (#D4AF37), stage dark (#0C0C0C), spotlight (#FFF8DC)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Center Stage",
    heading: "Take the Stage of Knowledge",
    subheading:
      "Step into the spotlight and command attention. Our expert-led lectures transform passive learning into powerful, memorable experiences.",
    cta: "Reserve Your Seat",
    secondary: "View Schedule",
    upcoming: "Next Lecture",
    lectureTitle: "The Future of AI in Education",
    lectureTime: "Tomorrow, 7:00 PM",
  },
  ar: {
    badge: "على المسرح",
    heading: "اعتلِ منصة المعرفة",
    subheading:
      "ادخل دائرة الضوء واجذب الانتباه. محاضراتنا التي يقودها خبراء تحوّل التعلم السلبي إلى تجارب قوية لا تُنسى.",
    cta: "احجز مقعدك",
    secondary: "عرض الجدول",
    upcoming: "المحاضرة القادمة",
    lectureTitle: "مستقبل الذكاء الاصطناعي في التعليم",
    lectureTime: "غداً، ٧:٠٠ مساءً",
  },
};

const audienceRows = [
  { count: 12, y: 82, scale: 0.7, opacity: 0.15 },
  { count: 10, y: 88, scale: 0.8, opacity: 0.2 },
  { count: 8, y: 94, scale: 0.9, opacity: 0.25 },
];

export function EducationPodium({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Curtain left */}
      <div
        className="absolute top-0 bottom-0 w-[8%] z-10"
        style={{
          [isRTL ? "right" : "left"]: 0,
          background: "linear-gradient(90deg, #1A0A0A 0%, #2D0F0F 30%, #1A0808 60%, #120505 100%)",
          boxShadow: "inset -10px 0 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* Curtain folds */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0"
            style={{
              left: `${i * 22}%`,
              width: "2px",
              background: "linear-gradient(180deg, rgba(100,20,20,0.3), rgba(60,10,10,0.1), rgba(100,20,20,0.3))",
            }}
          />
        ))}
      </div>

      {/* Curtain right */}
      <div
        className="absolute top-0 bottom-0 w-[8%] z-10"
        style={{
          [isRTL ? "left" : "right"]: 0,
          background: "linear-gradient(-90deg, #1A0A0A 0%, #2D0F0F 30%, #1A0808 60%, #120505 100%)",
          boxShadow: "inset 10px 0 30px rgba(0,0,0,0.5)",
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0"
            style={{
              right: `${i * 22}%`,
              width: "2px",
              background: "linear-gradient(180deg, rgba(100,20,20,0.3), rgba(60,10,10,0.1), rgba(100,20,20,0.3))",
            }}
          />
        ))}
      </div>

      {/* Curtain valance top */}
      <div
        className="absolute top-0 left-0 right-0 h-12 z-20"
        style={{
          background: "linear-gradient(180deg, #2D0F0F 0%, #1A0808 100%)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      />

      {/* Spotlight cone from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-5"
        style={{
          width: "400px",
          height: "100%",
          background: "linear-gradient(180deg, rgba(255,248,220,0.08) 0%, rgba(255,248,220,0.02) 60%, transparent 100%)",
          clipPath: "polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)",
        }}
      />

      {/* Stage floor */}
      <div
        className="absolute bottom-[18%] left-[8%] right-[8%] h-[3px] z-10"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 20%, rgba(212,175,55,0.6) 50%, rgba(212,175,55,0.4) 80%, transparent 100%)",
        }}
      />

      {/* Podium */}
      <div
        className="absolute z-10"
        style={{
          bottom: "18%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Podium body */}
        <div
          className="relative mx-auto"
          style={{
            width: "80px",
            height: "100px",
            background: "linear-gradient(180deg, #3D2A1A 0%, #2D1E12 100%)",
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          {/* Emblem */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: "30px",
              height: "30px",
              border: "2px solid rgba(212,175,55,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#D4AF37", fontSize: "14px" }}>★</span>
          </div>
          {/* Microphone */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2"
            style={{ width: "2px", height: "30px", backgroundColor: "rgba(150,150,150,0.6)" }}
          >
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width: "8px", height: "10px", backgroundColor: "rgba(80,80,80,0.8)", borderRadius: "4px 4px 2px 2px" }}
            />
          </div>
        </div>
      </div>

      {/* Audience silhouettes */}
      {audienceRows.map((row, ri) => (
        <div
          key={ri}
          className="absolute left-[10%] right-[10%] z-5 flex justify-center gap-4"
          style={{ top: `${row.y}%` }}
        >
          {Array.from({ length: row.count }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ transform: `scale(${row.scale})`, opacity: row.opacity }}
            >
              {/* Head */}
              <div
                className="rounded-full"
                style={{
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#333",
                }}
              />
              {/* Shoulders */}
              <div
                style={{
                  width: "28px",
                  height: "14px",
                  backgroundColor: "#2A2A2A",
                  borderRadius: "14px 14px 0 0",
                  marginTop: "2px",
                }}
              />
            </div>
          ))}
        </div>
      ))}

      {/* Main content - centered on stage */}
      <div className="relative z-20 max-w-2xl mx-auto px-8 text-center" style={{ marginBottom: "12%" }}>
        <div
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
          style={{
            backgroundColor: "rgba(212,175,55,0.1)",
            color: "#D4AF37",
            border: "1px solid rgba(212,175,55,0.3)",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5"
          style={{
            color: "#FFF8DC",
            textShadow: "0 2px 30px rgba(212,175,55,0.15)",
          }}
        >
          {t.heading}
        </h1>

        <p
          className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
          style={{ color: "rgba(255,248,220,0.6)" }}
        >
          {t.subheading}
        </p>

        {/* Upcoming lecture card */}
        <div
          className="inline-block mb-8 px-5 py-3 rounded-lg"
          style={{
            backgroundColor: "rgba(5,150,105,0.08)",
            border: "1px solid rgba(5,150,105,0.25)",
          }}
        >
          <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#34D399" }}>
            {t.upcoming}
          </div>
          <div className="text-sm font-semibold" style={{ color: "#E2FAF0" }}>
            {t.lectureTitle}
          </div>
          <div className="text-xs mt-1" style={{ color: "rgba(167,243,208,0.6)" }}>
            {t.lectureTime}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
            style={{ color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spotlightSweep {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.12; }
        }
      `}</style>
    </section>
  );
}
