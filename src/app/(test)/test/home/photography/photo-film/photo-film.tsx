"use client";

/**
 * Photo Film -- Photography Hero Template
 *
 * Film strip horizontal layout with each frame a different gradient placeholder.
 * Cinematic aesthetic with sprocket holes and frame numbers.
 *
 * @category Photography
 * @palette rose (#E11D48), amber (#F59E0B), warm dark (#1A1210)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "35mm Film",
    heading: "Life Through the Lens",
    subheading:
      "Every frame captures a fleeting moment. Analog warmth, digital precision — the art of storytelling through film.",
    cta: "View Reel",
    secondary: "Contact",
    frameLabels: ["01", "02", "03", "04", "05", "06"],
  },
  ar: {
    badge: "فيلم ٣٥مم",
    heading: "الحياة عبر العدسة",
    subheading:
      "كل إطار يلتقط لحظة عابرة. دفء تقليدي، دقة رقمية — فن السرد القصصي عبر الفيلم.",
    cta: "شاهد الشريط",
    secondary: "تواصل",
    frameLabels: ["٠١", "٠٢", "٠٣", "٠٤", "٠٥", "٠٦"],
  },
};

const frameGradients = [
  "linear-gradient(135deg, #E11D4830, #F59E0B30)",
  "linear-gradient(225deg, #BE123C30, #FB718530)",
  "linear-gradient(45deg, #9F122230, #E11D4830)",
  "linear-gradient(180deg, #F4364730, #FB923C30)",
  "linear-gradient(135deg, #FB718530, #FBBF2430)",
  "linear-gradient(315deg, #E11D4830, #D9464630)",
];

export function PhotoFilm({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1A1210" }}
    >
      {/* Ambient warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(225,29,72,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Text content above film strip */}
      <div className="relative z-10 text-center mb-12 px-8">
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          style={{ color: "#FFF1F2" }}
        >
          {t.heading}
        </h1>

        <p
          className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
          style={{ color: "rgba(255,241,242,0.5)" }}
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

      {/* Film strip */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "220px" }}
      >
        <div
          className="flex items-center gap-0"
          style={{
            animation: "filmScroll 20s linear infinite",
            width: "fit-content",
          }}
        >
          {/* Duplicate frames for seamless loop */}
          {[...Array(3)].map((_, setIdx) =>
            t.frameLabels.map((label, i) => (
              <div
                key={`${setIdx}-${i}`}
                className="relative flex-shrink-0"
                style={{
                  width: "200px",
                  height: "220px",
                  backgroundColor: "#0A0A0A",
                  borderLeft: "1px solid rgba(255,255,255,0.05)",
                  borderRight: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Sprocket holes top */}
                <div className="absolute top-2 left-0 right-0 flex justify-between px-4">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div
                      key={j}
                      className="rounded-sm"
                      style={{
                        width: "12px",
                        height: "8px",
                        backgroundColor: "#1A1210",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>

                {/* Frame content */}
                <div
                  className="absolute left-4 right-4 top-6 bottom-6 rounded-sm"
                  style={{
                    background: frameGradients[i],
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
                  }}
                />

                {/* Frame number */}
                <div
                  className="absolute bottom-3 left-4 text-[9px] font-mono"
                  style={{ color: "rgba(255,241,242,0.2)" }}
                >
                  {label}A
                </div>

                {/* Sprocket holes bottom */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div
                      key={j}
                      className="rounded-sm"
                      style={{
                        width: "12px",
                        height: "8px",
                        backgroundColor: "#1A1210",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        @keyframes filmScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * 6)); }
        }
      `}</style>
    </section>
  );
}
