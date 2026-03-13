"use client";

import { ArrowRight } from "lucide-react";

interface Hero14Props {
  language: "en" | "ar";
}

const content = {
  en: {
    lines: ["LEAD.", "DISRUPT.", "DELIVER."],
    body: "For organizations that define categories, not follow them.",
    locations: "Riyadh · Dubai · London · Singapore",
  },
  ar: {
    lines: ["قُد.", "غيِّر.", "أنجِز."],
    body: "للمؤسسات التي تحدد الفئات، لا تتبعها.",
    locations: "الرياض · دبي · لندن · سنغافورة",
  },
};

export function Hero14({ language }: Hero14Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero14-spotlightRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes hero14-fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero14-spotlight { animation: none !important; }
          .hero14-fade { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#06060a" }}
      >
        {/* Spotlight */}
        <div
          className="hero14-spotlight absolute pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: "50%",
            left: "50%",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.04) 15deg, transparent 30deg, transparent 360deg)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            animation: "hero14-spotlightRotate 30s linear infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95] ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.lines.map((line, i) => (
              <span
                key={i}
                className="hero14-fade block"
                style={{
                  animation: `hero14-fadeIn 0.7s ease-out ${0.3 + i * 0.25}s both`,
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className={`hero14-fade text-gray-600 text-base max-w-md mx-auto mt-8 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
            style={{ animation: "hero14-fadeIn 0.7s ease-out 1.1s both" }}
          >
            {t.body}
          </p>

          <div
            className="hero14-fade mt-10 flex justify-center"
            style={{ animation: "hero14-fadeIn 0.7s ease-out 1.4s both" }}
          >
            <button
              className="cursor-pointer w-12 h-12 bg-white text-black flex items-center justify-center transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
              aria-label={isAr ? "المتابعة" : "Continue"}
            >
              <ArrowRight className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
            </button>
          </div>

          <p
            className="hero14-fade mt-16 text-[10px] text-white/10 tracking-[0.3em] font-[family-name:var(--font-inter)]"
            style={{ animation: "hero14-fadeIn 0.7s ease-out 1.7s both" }}
          >
            {t.locations}
          </p>
        </div>
      </section>
    </>
  );
}
