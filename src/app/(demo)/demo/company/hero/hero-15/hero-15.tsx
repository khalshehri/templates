"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Zap, Building2, Globe, ThumbsUp, Clock } from "lucide-react";

const slatConfig = [
  { index: 0, delay: 0.3, origin: "bottom" },
  { index: 1, delay: 0.15, origin: "bottom" },
  { index: 2, delay: 0, origin: "bottom" },
  { index: 3, delay: 0, origin: "top" },
  { index: 4, delay: 0.15, origin: "top" },
  { index: 5, delay: 0.3, origin: "top" },
];

const metricsData = {
  en: [
    { value: 234, suffix: "+", label: "Deals", icon: Zap },
    { value: 18, prefix: "$", suffix: "B+", label: "Assets", icon: Building2 },
    { value: 15, suffix: "", label: "Offices", icon: Globe },
    { value: 99, suffix: "%", label: "Satisfaction", icon: ThumbsUp },
    { value: 28, suffix: "", label: "Years", icon: Clock },
  ],
  ar: [
    { value: 234, suffix: "+", label: "صفقة", icon: Zap },
    { value: 18, prefix: "$", suffix: "B+", label: "أصول", icon: Building2 },
    { value: 15, suffix: "", label: "مكتب", icon: Globe },
    { value: 99, suffix: "%", label: "رضا", icon: ThumbsUp },
    { value: 28, suffix: "", label: "عام", icon: Clock },
  ],
};

const content = {
  en: {
    heading: "The Momentum Never Stops",
    sub: "Relentless execution. Unwavering commitment. Results that compound.",
    cta1: "Partner With Us",
    cta2: "Our Methodology",
  },
  ar: {
    heading: "الزخم لا يتوقف أبداً",
    sub: "تنفيذ لا هوادة فيه. التزام لا يتزعزع. نتائج تتراكم.",
    cta1: "شاركنا",
    cta2: "منهجيتنا",
  },
};

export function Hero15({ language }: { language: "en" | "ar" }) {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0, 0]);
  const [contentVisible, setContentVisible] = useState(false);
  const t = content[language];
  const metrics = metricsData[language];
  const isAr = language === "ar";
  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  // Show content after slats finish opening
  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Count-up animation after content visible
  useEffect(() => {
    if (!contentVisible) return;
    const targets = metrics.map((m) => m.value);
    const duration = 2000;
    const steps = 50;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters(targets.map((target) => Math.round(target * eased)));
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [contentVisible, language]);

  return (
    <>
      <style>{`
        @keyframes slatOpen {
          to { transform: scaleY(0); }
        }
        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanlineScroll {
          from { background-position: 0 0; }
          to { background-position: 0 4px; }
        }
        .slat-anim-0 {
          animation: slatOpen 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          transform-origin: bottom;
        }
        .slat-anim-1 {
          animation: slatOpen 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          transform-origin: bottom;
        }
        .slat-anim-2 {
          animation: slatOpen 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
          transform-origin: bottom;
        }
        .slat-anim-3 {
          animation: slatOpen 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
          transform-origin: top;
        }
        .slat-anim-4 {
          animation: slatOpen 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          transform-origin: top;
        }
        .slat-anim-5 {
          animation: slatOpen 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          transform-origin: top;
        }
        .content-fade {
          animation: contentFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
          opacity: 0;
        }
        .scanlines {
          animation: scanlineScroll 0.5s linear infinite;
          background-image: repeating-linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.02) 0px,
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px,
            transparent 2px
          );
        }
        .metric-fade-0 { animation: contentFadeIn 0.5s ease 1.4s forwards; opacity: 0; }
        .metric-fade-1 { animation: contentFadeIn 0.5s ease 1.5s forwards; opacity: 0; }
        .metric-fade-2 { animation: contentFadeIn 0.5s ease 1.6s forwards; opacity: 0; }
        .metric-fade-3 { animation: contentFadeIn 0.5s ease 1.7s forwards; opacity: 0; }
        .metric-fade-4 { animation: contentFadeIn 0.5s ease 1.8s forwards; opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
          .slat-anim-0, .slat-anim-1, .slat-anim-2,
          .slat-anim-3, .slat-anim-4, .slat-anim-5 {
            animation: none !important;
            transform: scaleY(0);
          }
          .content-fade,
          .metric-fade-0, .metric-fade-1, .metric-fade-2,
          .metric-fade-3, .metric-fade-4 {
            animation: none !important;
            opacity: 1;
          }
          .scanlines {
            animation: none !important;
          }
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden" style={{ background: "#141414" }}>
        {/* Scan lines overlay (appears after slats open) */}
        {contentVisible && (
          <div className="scanlines absolute inset-0 z-20 pointer-events-none" />
        )}

        {/* Venetian Slats */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {slatConfig.map((slat) => (
            <div
              key={slat.index}
              className={`absolute w-full slat-anim-${slat.index}`}
              style={{
                height: "calc(100vh / 6)",
                top: `calc(100vh / 6 * ${slat.index})`,
                background: "#0e0e0e",
              }}
            />
          ))}
        </div>

        {/* Content (behind slats) */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          {/* Main content */}
          <div className="content-fade text-center max-w-4xl mx-auto mb-16">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: headingFont }}
            >
              {t.heading}
            </h1>
            <p
              className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ fontFamily: bodyFont }}
            >
              {t.sub}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="cursor-pointer flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10"
                style={{ fontFamily: bodyFont }}
              >
                {t.cta1}
                {isAr ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
              <button
                className="cursor-pointer flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/40"
                style={{ fontFamily: bodyFont }}
              >
                {t.cta2}
              </button>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className={`metric-fade-${i} flex items-center`}
                >
                  <div className="text-center px-4 sm:px-6 md:px-8 py-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <metric.icon className="w-4 h-4 text-gray-600" />
                      <p
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                        style={{ fontFamily: headingFont }}
                      >
                        {metric.prefix || ""}
                        {counters[i]}
                        {metric.suffix}
                      </p>
                    </div>
                    <p
                      className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider"
                      style={{ fontFamily: bodyFont }}
                    >
                      {metric.label}
                    </p>
                  </div>
                  {/* Vertical divider (not after last) */}
                  {i < metrics.length - 1 && (
                    <div className="hidden sm:block w-px h-10 bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ambient gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-5 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(20,20,20,1) 0%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
