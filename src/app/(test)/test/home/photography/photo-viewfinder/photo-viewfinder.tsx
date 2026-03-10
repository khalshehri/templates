"use client";

/**
 * Photo Viewfinder -- Photography Hero Template
 *
 * Camera viewfinder overlay with rule-of-thirds grid and focus points.
 * Through-the-lens perspective with camera UI elements.
 *
 * @category Photography
 * @palette rose (#E11D48), white (#FFFFFF), dark (#0A0A0A)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Through the Lens",
    heading: "Frame Your Perfect Shot",
    subheading:
      "Precision meets artistry. Every composition follows the rules — and knows when to break them.",
    cta: "Capture Now",
    secondary: "View Work",
    exposure: "+0.7",
    mode: "M",
    iso: "ISO 400",
    shutter: "1/500",
    aperture: "f/2.8",
    wb: "AWB",
    battery: "87%",
    shots: "247",
  },
  ar: {
    badge: "عبر العدسة",
    heading: "أطّر لقطتك المثالية",
    subheading:
      "الدقة تلتقي بالفن. كل تكوين يتبع القواعد — ويعرف متى يكسرها.",
    cta: "التقط الآن",
    secondary: "شاهد الأعمال",
    exposure: "+0.7",
    mode: "M",
    iso: "ISO 400",
    shutter: "1/500",
    aperture: "f/2.8",
    wb: "AWB",
    battery: "٨٧٪",
    shots: "٢٤٧",
  },
};

export function PhotoViewfinder({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Viewfinder rounded rectangle frame */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
        style={{
          width: "min(92vw, 900px)",
          height: "min(70vh, 600px)",
          border: "2px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* Rule of thirds grid */}
        {/* Vertical lines */}
        <div className="absolute top-0 bottom-0" style={{ left: "33.33%", width: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
        <div className="absolute top-0 bottom-0" style={{ left: "66.66%", width: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
        {/* Horizontal lines */}
        <div className="absolute left-0 right-0" style={{ top: "33.33%", height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
        <div className="absolute left-0 right-0" style={{ top: "66.66%", height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

        {/* Focus points at intersections */}
        {[
          { x: "33.33%", y: "33.33%" },
          { x: "66.66%", y: "33.33%" },
          { x: "33.33%", y: "66.66%" },
          { x: "66.66%", y: "66.66%" },
        ].map((point, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="w-4 h-4"
              style={{
                border: `1px solid ${i === 0 ? "rgba(225,29,72,0.8)" : "rgba(255,255,255,0.2)"}`,
                boxShadow: i === 0 ? "0 0 8px rgba(225,29,72,0.3)" : "none",
              }}
            />
          </div>
        ))}

        {/* Center focus square (active) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "60px",
            height: "60px",
            border: "1.5px solid rgba(225,29,72,0.6)",
            boxShadow: "0 0 12px rgba(225,29,72,0.2)",
          }}
        >
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#E11D48" }} />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#E11D48" }} />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#E11D48" }} />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#E11D48" }} />
        </div>

        {/* Top bar - camera info */}
        <div
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="flex items-center gap-3 text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span>{t.mode}</span>
            <span>{t.iso}</span>
            <span>{t.wb}</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span>{t.battery}</span>
            <span>[{t.shots}]</span>
          </div>
        </div>

        {/* Bottom bar - exposure info */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-6 px-4 py-2"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{t.shutter}</span>
          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{t.aperture}</span>
          {/* Exposure meter */}
          <div className="flex items-center gap-1">
            <div className="flex items-end gap-[2px]">
              {[-2, -1, 0, 1, 2].map((val) => (
                <div key={val} className="flex flex-col items-center">
                  <div
                    className="w-[2px]"
                    style={{
                      height: val === 0 ? "8px" : "5px",
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-mono" style={{ color: "#E11D48" }}>{t.exposure}</span>
          </div>
        </div>

        {/* Level indicator */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: "35px" }}
        >
          <div className="flex items-center gap-1">
            <div className="w-8 h-[1px]" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(74,222,128,0.6)" }} />
            <div className="w-8 h-[1px]" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          </div>
        </div>
      </div>

      {/* Content centered in viewfinder */}
      <div className="relative z-10 max-w-lg mx-auto px-8 text-center">
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
          style={{ color: "#FFFFFF" }}
        >
          {t.heading}
        </h1>

        <p
          className="text-base leading-relaxed mb-8 max-w-sm mx-auto"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {t.subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#E11D48",
              boxShadow: "0 4px 20px rgba(225,29,72,0.4)",
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
            style={{ color: "#FB7185", border: "1px solid rgba(225,29,72,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes focusPulse {
          0%, 100% { border-color: rgba(225,29,72,0.6); }
          50% { border-color: rgba(225,29,72,0.3); }
        }
      `}</style>
    </section>
  );
}
