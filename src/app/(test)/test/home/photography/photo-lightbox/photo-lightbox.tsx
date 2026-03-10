"use client";

/**
 * Photo Lightbox -- Photography Hero Template
 *
 * Image lightbox/comparison layout with before/after slider aesthetic.
 * Photo editing tool feel with adjustment panels and histogram.
 *
 * @category Photography
 * @palette rose (#E11D48), slate (#334155), white (#F8FAFC), dark (#0F0F0F)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Professional Editing",
    heading: "Transform Every Image",
    subheading:
      "From raw capture to polished masterpiece. Professional photo editing that brings out the emotion in every shot.",
    cta: "Start Editing",
    secondary: "See Examples",
    before: "Before",
    after: "After",
    adjustments: [
      { name: "Exposure", value: 65 },
      { name: "Contrast", value: 72 },
      { name: "Highlights", value: 45 },
      { name: "Shadows", value: 80 },
      { name: "Saturation", value: 58 },
    ],
  },
  ar: {
    badge: "تحرير احترافي",
    heading: "حوّل كل صورة",
    subheading:
      "من الالتقاط الخام إلى التحفة المصقولة. تحرير صور احترافي يُبرز المشاعر في كل لقطة.",
    cta: "ابدأ التحرير",
    secondary: "شاهد أمثلة",
    before: "قبل",
    after: "بعد",
    adjustments: [
      { name: "التعريض", value: 65 },
      { name: "التباين", value: 72 },
      { name: "الإضاءات", value: 45 },
      { name: "الظلال", value: 80 },
      { name: "التشبّع", value: 58 },
    ],
  },
};

export function PhotoLightbox({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0F0F0F" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Editor panel left */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Before/After comparison */}
          <div
            className="relative rounded-lg overflow-hidden mb-6"
            style={{
              height: "300px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Before side */}
            <div
              className="absolute inset-0"
              style={{
                width: "50%",
                background: "linear-gradient(135deg, #1A1A1A 0%, #2A2020 50%, #1A1515 100%)",
              }}
            >
              <div
                className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.5)" }}
              >
                {t.before}
              </div>
            </div>

            {/* After side */}
            <div
              className="absolute top-0 bottom-0 right-0"
              style={{
                width: "50%",
                background: "linear-gradient(135deg, #2A1525 0%, #3A1A2A 50%, #2A1020 100%)",
              }}
            >
              <div
                className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.5)" }}
              >
                {t.after}
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] z-10"
              style={{ backgroundColor: "#E11D48" }}
            >
              {/* Slider handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "#E11D48",
                  boxShadow: "0 0 15px rgba(225,29,72,0.5)",
                }}
              >
                <span className="text-white text-xs">&#8596;</span>
              </div>
            </div>
          </div>

          {/* Histogram */}
          <div
            className="rounded-lg p-3 mb-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <svg className="w-full" height="50" viewBox="0 0 300 50">
              {/* Red channel */}
              <path
                d="M0 50 L20 45 L40 35 L60 25 L80 20 L100 15 L120 10 L140 8 L160 12 L180 18 L200 25 L220 30 L240 38 L260 42 L280 46 L300 50"
                fill="rgba(225,29,72,0.15)"
                stroke="rgba(225,29,72,0.4)"
                strokeWidth="1"
              />
              {/* Green channel */}
              <path
                d="M0 50 L20 48 L40 40 L60 30 L80 22 L100 18 L120 15 L140 12 L160 15 L180 20 L200 28 L220 35 L240 42 L260 46 L280 49 L300 50"
                fill="rgba(74,222,128,0.1)"
                stroke="rgba(74,222,128,0.3)"
                strokeWidth="1"
              />
              {/* Blue channel */}
              <path
                d="M0 50 L20 46 L40 38 L60 28 L80 18 L100 12 L120 8 L140 10 L160 14 L180 22 L200 30 L220 38 L240 44 L260 48 L280 50 L300 50"
                fill="rgba(96,165,250,0.1)"
                stroke="rgba(96,165,250,0.3)"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        {/* Right side - controls + text */}
        <div className={`flex-1 order-1 lg:order-2 ${isRTL ? "text-right" : "text-left"}`}>
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "#F8FAFC" }}
          >
            {t.heading}
          </h1>

          <p
            className="text-base leading-relaxed mb-6 max-w-md"
            style={{ color: "rgba(248,250,252,0.5)" }}
          >
            {t.subheading}
          </p>

          {/* Adjustment sliders */}
          <div
            className="rounded-lg p-4 mb-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {t.adjustments.map((adj, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: "rgba(248,250,252,0.6)" }}>{adj.name}</span>
                  <span style={{ color: "rgba(248,250,252,0.3)" }}>{adj.value}</span>
                </div>
                <div className="h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${adj.value}%`,
                      backgroundColor: "#E11D48",
                      boxShadow: "0 0 6px rgba(225,29,72,0.3)",
                    }}
                  />
                </div>
              </div>
            ))}
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
        @keyframes sliderGlow {
          0% { box-shadow: 0 0 10px rgba(225,29,72,0.3); }
          100% { box-shadow: 0 0 20px rgba(225,29,72,0.6); }
        }
      `}</style>
    </section>
  );
}
