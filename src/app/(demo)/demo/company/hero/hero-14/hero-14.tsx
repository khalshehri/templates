"use client";

import React, { useEffect, useState } from "react";

interface Hero14Props {
  language: "en" | "ar";
}

const content = {
  en: {
    masthead: "The Quarterly Review",
    dateline: "MARCH 2024 · RIYADH",
    col1Body:
      "For over two decades, our advisory practice has guided the region's most consequential institutions through periods of profound transformation. From sovereign wealth funds to national champions, our approach combines rigorous analysis with deep cultural understanding.",
    col2Heading: "Leading Through Disruption",
    col2Body:
      "The pace of change demands a new kind of partner. We bring frameworks tested across 47 markets and refined through thousands of engagements.",
    cta: "Read the full report →",
    metricsLabel: "Key Figures",
    metrics: [
      { number: "230+", label: "Enterprise Clients" },
      { number: "47", label: "Markets Served" },
      { number: "$18B", label: "Assets Advised" },
      { number: "96%", label: "Client Retention" },
    ],
  },
  ar: {
    masthead: "المراجعة الفصلية",
    dateline: "مارس ٢٠٢٤ · الرياض",
    col1Body:
      "لأكثر من عقدين، قادت ممارستنا الاستشارية أهم المؤسسات في المنطقة خلال فترات التحول العميق. من صناديق الثروة السيادية إلى الأبطال الوطنيين، يجمع نهجنا بين التحليل الدقيق والفهم الثقافي العميق.",
    col2Heading: "القيادة خلال الاضطراب",
    col2Body:
      "تتطلب وتيرة التغيير نوعاً جديداً من الشركاء. نقدم أطراً مختبرة عبر 47 سوقاً ومحسّنة من خلال آلاف المشاريع.",
    cta: "اقرأ التقرير الكامل ←",
    metricsLabel: "أرقام رئيسية",
    metrics: [
      { number: "+٢٣٠", label: "عملاء مؤسسيون" },
      { number: "٤٧", label: "سوقاً مخدوماً" },
      { number: "$١٨ مليار", label: "أصول استشارية" },
      { number: "٩٦٪", label: "معدل الاحتفاظ" },
    ],
  },
};

export function Hero14({ language }: Hero14Props) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero14-ruleExpand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes hero14-fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes hero14-colFadeIn {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes hero14-colFadeInRtl {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero14-rule,
          .hero14-fade,
          .hero14-col {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen w-full flex items-center justify-center py-16 px-6"
        style={{ backgroundColor: "#f9f6f1" }}
      >
        <div className="max-w-6xl w-full mx-auto">
          {/* Terracotta accent square */}
          <div
            className="hero14-fade w-3 h-3 mb-4"
            style={{
              backgroundColor: "#e07a5f",
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero14-fadeIn 0.6s ease-out forwards"
                : "none",
            }}
          />

          {/* Top double rule */}
          <div
            className="hero14-rule border-t border-b border-stone-300 h-[3px]"
            style={{
              transformOrigin: "center",
              transform: mounted ? "scaleX(1)" : "scaleX(0)",
              animation: mounted
                ? "hero14-ruleExpand 0.8s ease-out forwards"
                : "none",
            }}
          />

          {/* Masthead */}
          <div
            className="hero14-fade py-8 md:py-10"
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? "hero14-fadeIn 0.8s ease-out 0.3s forwards"
                : "none",
              animationFillMode: "both",
            }}
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 tracking-tight text-center ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.masthead}
            </h1>
          </div>

          {/* Bottom rule */}
          <div
            className="hero14-rule border-t border-stone-300"
            style={{
              transformOrigin: "center",
              transform: mounted ? "scaleX(1)" : "scaleX(0)",
              animation: mounted
                ? "hero14-ruleExpand 0.8s ease-out 0.15s forwards"
                : "none",
              animationFillMode: "both",
            }}
          />

          {/* 3-Column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-10">
            {/* Column 1 — Article body */}
            <div
              className="hero14-col py-4 md:py-0 md:pr-6"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? `${isAr ? "hero14-colFadeInRtl" : "hero14-colFadeIn"} 0.7s ease-out 0.5s forwards`
                  : "none",
                animationFillMode: "both",
              }}
            >
              <p
                className={`text-[10px] text-stone-400 uppercase tracking-wider mb-3 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.dateline}
              </p>
              <p
                className={`text-stone-600 text-sm leading-relaxed ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.col1Body}
              </p>
            </div>

            {/* Column 2 — Subheading + body + CTA */}
            <div
              className={`hero14-col py-4 md:py-0 md:px-6 border-t md:border-t-0 border-stone-200 ${
                isAr ? "md:border-r" : "md:border-l"
              } md:border-stone-200`}
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? `${isAr ? "hero14-colFadeInRtl" : "hero14-colFadeIn"} 0.7s ease-out 0.65s forwards`
                  : "none",
                animationFillMode: "both",
              }}
            >
              <h2
                className={`font-semibold text-lg text-stone-900 mb-3 ${
                  isAr
                    ? "font-[family-name:var(--font-changa)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.col2Heading}
              </h2>
              <p
                className={`text-stone-600 text-sm leading-relaxed ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.col2Body}
              </p>
              <a
                className={`inline-block mt-4 text-sm underline underline-offset-4 cursor-pointer transition-all duration-300 hover:opacity-80 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
                style={{ color: "#e07a5f" }}
              >
                {t.cta}
              </a>
            </div>

            {/* Column 3 — Key Figures sidebar */}
            <div
              className={`hero14-col py-4 md:py-0 md:ps-6 border-t md:border-t-0 border-stone-200 ${
                isAr ? "md:border-r" : "md:border-l"
              } md:border-stone-200`}
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? `${isAr ? "hero14-colFadeInRtl" : "hero14-colFadeIn"} 0.7s ease-out 0.8s forwards`
                  : "none",
                animationFillMode: "both",
              }}
            >
              <p
                className={`text-[10px] text-stone-400 uppercase tracking-wider mb-4 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.metricsLabel}
              </p>
              <div className="space-y-0">
                {t.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="hero14-fade border-b border-stone-200 py-3"
                    style={{
                      opacity: mounted ? 1 : 0,
                      animation: mounted
                        ? `hero14-fadeIn 0.5s ease-out ${0.9 + i * 0.1}s forwards`
                        : "none",
                      animationFillMode: "both",
                    }}
                  >
                    <div
                      className={`text-xl font-light text-stone-900 ${
                        isAr
                          ? "font-[family-name:var(--font-changa)]"
                          : "font-[family-name:var(--font-inter)]"
                      }`}
                    >
                      {metric.number}
                    </div>
                    <div
                      className={`text-xs text-stone-500 mt-0.5 ${
                        isAr
                          ? "font-[family-name:var(--font-tajawal)]"
                          : "font-[family-name:var(--font-inter)]"
                      }`}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
