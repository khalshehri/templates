"use client";

import { useState, useEffect } from "react";

interface Hero03Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "GLOBAL OPERATIONS",
    heading: "Engineered for scale across borders",
    body: "Operating in 47 markets with 2,400 professionals, we bring institutional rigor to every engagement.",
    cta: "View capabilities",
    stats: [
      { value: "47", label: "Active Markets" },
      { value: "2.4K", label: "Professionals" },
      { value: "$18B", label: "Assets Under Advisory" },
    ],
  },
  ar: {
    eyebrow: "العمليات العالمية",
    heading: "مصممة للنمو عبر الحدود",
    body: "نعمل في 47 سوقاً مع 2,400 متخصص، ونجلب الصرامة المؤسسية لكل مشروع.",
    cta: "عرض القدرات",
    stats: [
      { value: "٤٧", label: "سوقاً نشطاً" },
      { value: "٢.٤ ألف", label: "متخصص" },
      { value: "$١٨ مليار", label: "أصول تحت الاستشارة" },
    ],
  },
};

export function Hero03({ language }: Hero03Props) {
  const t = content[language];
  const isAr = language === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <style>{`
        @keyframes hero03SlideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes hero03SlideInRtl {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes hero03FadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero03StatFade {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero03-diagonal-ltr {
          animation: hero03SlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero03-diagonal-rtl {
          animation: hero03SlideInRtl 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero03-fade {
          animation: hero03FadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero03-stat-fade {
          animation: hero03StatFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero03-delay-1 { animation-delay: 0.2s; }
        .hero03-delay-2 { animation-delay: 0.35s; }
        .hero03-delay-3 { animation-delay: 0.5s; }
        .hero03-delay-4 { animation-delay: 0.65s; }
        .hero03-stat-1 { animation-delay: 0.9s; }
        .hero03-stat-2 { animation-delay: 1.05s; }
        .hero03-stat-3 { animation-delay: 1.2s; }

        @media (prefers-reduced-motion: reduce) {
          .hero03-diagonal-ltr,
          .hero03-diagonal-rtl {
            animation: none;
            transform: translateX(0);
          }
          .hero03-fade,
          .hero03-stat-fade {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* White Section */}
        <div className="px-6 pt-20 pb-16">
          <div className="hero03-fade hero03-delay-1 flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
            <span
              className={`text-[11px] tracking-[0.2em] text-gray-400 uppercase ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.eyebrow}
            </span>
          </div>

          <h1
            className={`hero03-fade hero03-delay-2 text-3xl font-semibold text-gray-900 mb-5 ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.heading}
          </h1>

          <p
            className={`hero03-fade hero03-delay-3 text-gray-500 text-base mb-8 max-w-md ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.body}
          </p>

          <button
            className={`hero03-fade hero03-delay-4 cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-lg text-sm transition-all duration-300 hover:bg-gray-800 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.cta}
          </button>
        </div>

        {/* Dark Section */}
        <div className="px-6 py-16" style={{ backgroundColor: "#1e293b" }}>
          <div className="space-y-10">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className={`hero03-stat-fade hero03-stat-${i + 1}`}
              >
                <div
                  className={`text-3xl font-light text-white mb-1 ${
                    isAr
                      ? "font-[family-name:var(--font-changa)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm text-gray-400 ${
                    isAr
                      ? "font-[family-name:var(--font-tajawal)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative min-h-screen">
        {/* White Background — full */}
        <div className="absolute inset-0 bg-white" />

        {/* Dark Diagonal Overlay */}
        {mounted && (
          <div
            className={`absolute inset-0 ${isAr ? "hero03-diagonal-rtl" : "hero03-diagonal-ltr"}`}
            style={{
              backgroundColor: "#1e293b",
              clipPath: isAr
                ? "polygon(0 0, 50% 0, 40% 100%, 0 100%)"
                : "polygon(50% 0, 100% 0, 100% 100%, 40% 100%)",
            }}
          />
        )}

        {/* Content Layer */}
        <div className="relative z-10 flex min-h-screen">
          {/* Left — Text on White */}
          <div
            className={`flex-1 flex flex-col justify-center ${
              isAr ? "pr-12 lg:pr-20 pl-6" : "pl-12 lg:pl-20 pr-6"
            }`}
            style={{ maxWidth: "55%" }}
          >
            <div className="hero03-fade hero03-delay-1 flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span
                className={`text-[11px] tracking-[0.2em] text-gray-400 uppercase ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.eyebrow}
              </span>
            </div>

            <h1
              className={`hero03-fade hero03-delay-2 text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 max-w-lg ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>

            <p
              className={`hero03-fade hero03-delay-3 text-gray-500 text-base mb-10 max-w-md ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>

            <div className="hero03-fade hero03-delay-4">
              <button
                className={`cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-lg text-sm transition-all duration-300 hover:bg-gray-800 hover:shadow-lg ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.cta}
              </button>
            </div>
          </div>

          {/* Right — Stats on Dark */}
          <div
            className={`flex flex-col justify-center ${
              isAr ? "pl-12 lg:pl-20 pr-6" : "pr-12 lg:pr-20 pl-6"
            }`}
            style={{ width: "45%" }}
          >
            <div
              className={`space-y-12 ${
                isAr ? "mr-auto max-w-xs" : "ml-auto max-w-xs"
              }`}
            >
              {t.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`hero03-stat-fade hero03-stat-${i + 1}`}
                >
                  <div
                    className={`text-3xl font-light text-white mb-1 ${
                      isAr
                        ? "font-[family-name:var(--font-changa)]"
                        : "font-[family-name:var(--font-inter)]"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm text-gray-400 ${
                      isAr
                        ? "font-[family-name:var(--font-tajawal)]"
                        : "font-[family-name:var(--font-inter)]"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
