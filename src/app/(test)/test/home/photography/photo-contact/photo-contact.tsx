"use client";

/**
 * Photo Contact -- Photography Hero Template
 *
 * Contact sheet grid of small thumbnails, one enlarged.
 * Film photography workflow aesthetic with numbered frames.
 *
 * @category Photography
 * @palette rose (#E11D48), warm gray (#78716C), cream (#FAF5E4), dark (#141210)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Contact Sheet",
    heading: "Every Shot Tells a Story",
    subheading:
      "Browse the contact sheet. Find the frame that speaks. The one that captures the essence of the moment.",
    cta: "Select Your Prints",
    secondary: "Full Archive",
    roll: "Roll 024",
    date: "March 2026",
  },
  ar: {
    badge: "ورقة الاتصال",
    heading: "كل لقطة تروي قصة",
    subheading:
      "تصفّح ورقة الاتصال. ابحث عن الإطار الذي يتحدث. الإطار الذي يلتقط جوهر اللحظة.",
    cta: "اختر مطبوعاتك",
    secondary: "الأرشيف الكامل",
    roll: "لفة ٠٢٤",
    date: "مارس ٢٠٢٦",
  },
};

const frameColors = [
  "#E11D4815", "#BE123C15", "#9F122215", "#FB718515",
  "#F4364715", "#E11D4820", "#DC262615", "#F43F5E15",
  "#E11D4810", "#FB923C15", "#E11D4818", "#F9737315",
  "#E11D4812", "#BE123C18", "#9F122218", "#FB718518",
  "#F4364718", "#E11D4822", "#DC262618", "#F43F5E18",
];

export function PhotoContact({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#141210" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Contact sheet grid */}
        <div className="flex-shrink-0">
          {/* Sheet header */}
          <div className="flex justify-between items-center mb-2 text-[10px] font-mono" style={{ color: "rgba(120,113,108,0.6)", width: "360px" }}>
            <span>{t.roll}</span>
            <span>{t.date}</span>
          </div>

          <div
            className="grid grid-cols-5 gap-[3px] p-3 rounded"
            style={{
              width: "360px",
              backgroundColor: "#FAF5E4",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => {
              const isSelected = i === 7;
              return (
                <div
                  key={i}
                  className="relative"
                  style={{
                    aspectRatio: "3/2",
                    backgroundColor: frameColors[i] || "#1A1A1A10",
                    border: isSelected ? "2px solid #E11D48" : "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "1px",
                  }}
                >
                  {/* Frame number */}
                  <span
                    className="absolute bottom-0 text-[7px] font-mono"
                    style={{
                      [isRTL ? "left" : "right"]: "2px",
                      color: "rgba(0,0,0,0.25)",
                    }}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Red wax pencil circle on selected */}
                  {isSelected && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div
                        className="rounded-full"
                        style={{
                          width: "80%",
                          height: "80%",
                          border: "1.5px solid #E11D48",
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  )}

                  {/* X marks on rejects */}
                  {[2, 5, 11, 15].includes(i) && (
                    <div
                      className="absolute inset-0 flex items-center justify-center text-xs font-bold"
                      style={{ color: "rgba(0,0,0,0.15)" }}
                    >
                      ×
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sprocket hole markers along edges */}
          <div className="flex justify-between mt-1" style={{ width: "360px" }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="rounded-sm"
                style={{
                  width: "8px",
                  height: "4px",
                  backgroundColor: "rgba(120,113,108,0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider"
            style={{
              backgroundColor: "rgba(225,29,72,0.1)",
              color: "#FB7185",
              border: "1px solid rgba(225,29,72,0.2)",
            }}
          >
            {t.badge}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#FAF5E4" }}
          >
            {t.heading}
          </h1>

          <p
            className="text-base leading-relaxed mb-8 max-w-md"
            style={{ color: "rgba(250,245,228,0.5)" }}
          >
            {t.subheading}
          </p>

          {/* Loupe magnifier decoration */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-full"
              style={{
                border: "2px solid rgba(225,29,72,0.3)",
                boxShadow: "0 0 10px rgba(225,29,72,0.1)",
              }}
            />
            <div className="text-xs" style={{ color: "rgba(250,245,228,0.3)" }}>
              Frame #08 selected
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#E11D48",
                boxShadow: "0 4px 20px rgba(225,29,72,0.3)",
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
              style={{ color: "#FB7185", border: "1px solid rgba(225,29,72,0.3)" }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contactHover {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
