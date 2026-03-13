"use client";

import React, { useEffect, useState } from "react";

interface Hero15Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Opening new\nhorizons",
    body: "We don't just open doors — we build new rooms. Strategic infrastructure for the enterprises that will define tomorrow.",
    cta: "Explore possibilities",
    metric: "21 years of opening doors",
  },
  ar: {
    heading: "نفتح آفاقاً\nجديدة",
    body: "لا نفتح الأبواب فحسب — بل نبني غرفاً جديدة. بنية تحتية استراتيجية للمؤسسات التي ستحدد الغد.",
    cta: "استكشف الإمكانيات",
    metric: "٢١ عاماً من فتح الأبواب",
  },
};

const slatColors = [
  "#111111",
  "#0e0e0e",
  "#111111",
  "#0e0e0e",
  "#111111",
  "#0e0e0e",
];

// Delay order: center outward — indices 2,3 first, then 1,4, then 0,5
const slatDelays = [200, 100, 0, 0, 100, 200];

export function Hero15({ language }: Hero15Props) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero15-slatOpen {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
        @keyframes hero15-contentFadeIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes hero15-pulse {
          0%, 100% {
            border-color: rgba(255, 255, 255, 0.03);
          }
          50% {
            border-color: rgba(255, 255, 255, 0.08);
          }
        }
        @keyframes hero15-numberFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.015;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero15-slat {
            animation: none !important;
            transform: scaleY(1) !important;
          }
          .hero15-content {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero15-pulse-border {
            animation: none !important;
          }
          .hero15-bg-number {
            animation: none !important;
            opacity: 0.015 !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen w-full overflow-hidden"
        style={{ backgroundColor: "#0e0e0e" }}
      >
        {/* Slats layer */}
        <div className="absolute inset-0 flex flex-col">
          {slatColors.map((color, index) => (
            <div
              key={index}
              className={`hero15-slat flex-1 border-b border-white/[0.03] ${
                index === 2 || index === 3 ? "hero15-pulse-border" : ""
              }`}
              style={{
                backgroundColor: color,
                transformOrigin: "center center",
                transform: mounted ? "scaleY(1)" : "scaleY(0)",
                animation: mounted
                  ? `hero15-slatOpen 0.4s ease-out ${slatDelays[index]}ms forwards${
                      index === 2 || index === 3
                        ? `, hero15-pulse 4s ease-in-out 1s infinite`
                        : ""
                    }`
                  : "none",
                animationFillMode: "both",
              }}
            />
          ))}
        </div>

        {/* Decorative background number */}
        <div
          className="hero15-bg-number absolute bottom-4 select-none pointer-events-none"
          style={{
            right: isAr ? "auto" : "2rem",
            left: isAr ? "2rem" : "auto",
            fontSize: "12rem",
            fontWeight: 900,
            lineHeight: 1,
            color: "white",
            opacity: mounted ? 0.015 : 0,
            animation: mounted
              ? "hero15-numberFade 1s ease-out 0.8s forwards"
              : "none",
            animationFillMode: "both",
          }}
        >
          15
        </div>

        {/* Content overlay — centered */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl mx-auto">
            {/* Heading */}
            <h1
              className={`hero15-content text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] whitespace-pre-line ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero15-contentFadeIn 0.7s ease-out 0.5s forwards"
                  : "none",
                animationFillMode: "both",
              }}
            >
              {t.heading}
            </h1>

            {/* Body */}
            <p
              className={`hero15-content text-gray-500 text-lg max-w-lg mx-auto mt-6 leading-relaxed ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero15-contentFadeIn 0.7s ease-out 0.65s forwards"
                  : "none",
                animationFillMode: "both",
              }}
            >
              {t.body}
            </p>

            {/* CTA row */}
            <div
              className="hero15-content mt-10 flex items-center justify-center gap-6 flex-wrap"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero15-contentFadeIn 0.7s ease-out 0.8s forwards"
                  : "none",
                animationFillMode: "both",
              }}
            >
              <button
                className={`cursor-pointer bg-white text-gray-900 px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:bg-gray-100 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.cta}
              </button>
              <span
                className={`text-gray-600 text-sm ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.metric}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
