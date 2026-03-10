"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Ride The", "Wave"],
    sub: "Psychedelic energy meets modern design. Bold, wavy, and unapologetically vibrant.",
    cta: "Explore Work",
    cta2: "Contact Us",
  },
  ar: {
    heading: ["\u0627\u0631\u0643\u0628", "\u0627\u0644\u0645\u0648\u062c\u0629"],
    sub: "\u0637\u0627\u0642\u0629 \u0633\u064a\u0643\u0627\u062f\u064a\u0644\u064a\u0629 \u062a\u0644\u062a\u0642\u064a \u0628\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u062d\u062f\u064a\u062b. \u062c\u0631\u064a\u0621\u060c \u0645\u062a\u0645\u0648\u062c\u060c \u0648\u0646\u0627\u0628\u0636 \u0628\u0627\u0644\u062d\u064a\u0627\u0629.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  },
};

const WAVE_BANDS = [
  { color: "#ff2d7b", offset: 0 },
  { color: "#ff6b00", offset: 1 },
  { color: "#ffe600", offset: 2 },
  { color: "#00e676", offset: 3 },
  { color: "#00e5ff", offset: 4 },
  { color: "#0055ff", offset: 5 },
  { color: "#7c3aed", offset: 6 },
  { color: "#ff2d7b", offset: 7 },
];

export function CreativeWave({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  const bandHeight = 100 / WAVE_BANDS.length;

  return (
    <>
      <style>{`
        @keyframes waveUndulate {
          0%   { transform: translateX(0) scaleY(1); }
          25%  { transform: translateX(-15px) scaleY(1.08); }
          50%  { transform: translateX(0) scaleY(1); }
          75%  { transform: translateX(15px) scaleY(1.08); }
          100% { transform: translateX(0) scaleY(1); }
        }
        @keyframes waveSlideIn {
          from { transform: translateX(var(--wave-dir)) scaleY(0.3); opacity: 0; }
          to   { transform: translateX(0) scaleY(1); opacity: 1; }
        }
        @keyframes waveFadeIn {
          from { opacity: 0; transform: scale(0.9); filter: blur(6px); }
          to   { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes waveTextShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .wave-band {
          animation: waveSlideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both,
                     waveUndulate 6s ease-in-out infinite;
        }
        .wave-content {
          animation: waveFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .wave-text-shift {
          background-size: 200% 100%;
          animation: waveTextShift 4s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{ backgroundColor: "#1a0a2e" }}
      >
        {/* Wavy horizontal color bands */}
        {WAVE_BANDS.map((band, i) => {
          const isEven = i % 2 === 0;
          // Each band uses an SVG-based wavy clip path
          const waveTop = i === 0 ? "0%" : `${i * bandHeight - 2}%`;
          const waveBottom = i === WAVE_BANDS.length - 1 ? "100%" : `${(i + 1) * bandHeight + 2}%`;

          return (
            <div
              key={i}
              className="wave-band absolute left-0 right-0"
              style={{
                top: waveTop,
                bottom: `${100 - parseFloat(waveBottom)}%`,
                backgroundColor: band.color,
                opacity: 0.75,
                zIndex: i,
                animationDelay: `${i * 0.1}s`,
                "--wave-dir": isEven ? "-100%" : "100%",
                clipPath: i === 0
                  ? `polygon(0 0, 100% 0, 100% calc(100% - 8px), 90% 100%, 80% calc(100% - 12px), 70% 100%, 60% calc(100% - 8px), 50% 100%, 40% calc(100% - 12px), 30% 100%, 20% calc(100% - 8px), 10% 100%, 0 calc(100% - 12px))`
                  : i === WAVE_BANDS.length - 1
                  ? `polygon(0 8px, 10% 0, 20% 12px, 30% 0, 40% 8px, 50% 0, 60% 12px, 70% 0, 80% 8px, 90% 0, 100% 12px, 100% 100%, 0 100%)`
                  : `polygon(0 8px, 10% 0, 20% 12px, 30% 0, 40% 8px, 50% 0, 60% 12px, 70% 0, 80% 8px, 90% 0, 100% 12px, 100% calc(100% - 8px), 90% 100%, 80% calc(100% - 12px), 70% 100%, 60% calc(100% - 8px), 50% 100%, 40% calc(100% - 12px), 30% 100%, 20% calc(100% - 8px), 10% 100%, 0 calc(100% - 12px))`,
                mixBlendMode: "screen",
              } as React.CSSProperties}
            />
          );
        })}

        {/* Overlay for depth */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: WAVE_BANDS.length,
        }} />

        {/* Content */}
        <div className="wave-content relative text-center max-w-3xl px-6" style={{
          zIndex: WAVE_BANDS.length + 1,
          animationDelay: "0.8s",
        }}>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tight">
            <span className="block text-white" style={{
              textShadow: "0 2px 30px rgba(0,0,0,0.5)",
            }}>
              {t.heading[0]}
            </span>
            <span
              className="block mt-2 wave-text-shift"
              style={{
                background: "linear-gradient(90deg, #ff2d7b, #ffe600, #00e5ff, #7c3aed, #ff2d7b)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 20px rgba(255,45,123,0.3))",
              }}
            >
              {t.heading[1]}
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed" style={{
            color: "rgba(255,255,255,0.7)",
            textShadow: "0 1px 10px rgba(0,0,0,0.5)",
          }}>
            {t.sub}
          </p>

          <div className={`mt-10 flex items-center justify-center gap-5 flex-wrap ${isAr ? "flex-row-reverse" : ""}`}>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-full ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                background: "linear-gradient(135deg, #ff2d7b, #ff6b00)",
                boxShadow: "0 4px 20px rgba(255,45,123,0.4), 0 0 40px rgba(255,107,0,0.2)",
              }}
            >
              {t.cta}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-full ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "#fff",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
            >
              {t.cta2}
            </a>
          </div>

          {/* Color dots as decoration */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {WAVE_BANDS.slice(0, 7).map((band, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{
                backgroundColor: band.color,
                boxShadow: `0 0 8px ${band.color}`,
              }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
