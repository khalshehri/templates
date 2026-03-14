"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const content = {
  en: {
    heading: "We turn market complexity into competitive advantage",
    sub: "Strategic consulting and technology solutions for enterprises navigating rapid transformation.",
    cta: "See the results",
    topMarquee: "MOMENTUM \u00b7 GROWTH \u00b7 SCALE \u00b7 VELOCITY \u00b7 IMPACT \u00b7 ",
    bottomMarquee: "STRATEGY \u00b7 PRECISION \u00b7 EXECUTION \u00b7 INSIGHT \u00b7 ANALYTICS \u00b7 ",
    metrics: [
      { value: 12, suffix: "B+", label: "Revenue" },
      { value: 340, suffix: "", label: "Enterprises" },
      { value: 28, suffix: "", label: "Markets" },
    ],
  },
  ar: {
    heading: "نحو\u0651ل تعقيد السوق إلى ميزة تنافسية",
    sub: "استشارات استراتيجية وحلول تقنية للمؤسسات التي تتنقل عبر التحول السريع.",
    cta: "شاهد النتائج",
    topMarquee: "زخم \u00b7 نمو \u00b7 نطاق \u00b7 سرعة \u00b7 تأثير \u00b7 ",
    bottomMarquee: "استراتيجية \u00b7 دقة \u00b7 تنفيذ \u00b7 رؤية \u00b7 تحليلات \u00b7 ",
    metrics: [
      { value: 12, suffix: "B+", label: "إيرادات" },
      { value: 340, suffix: "", label: "مؤسسة" },
      { value: 28, suffix: "", label: "سوقاً" },
    ],
  },
};

export function Hero05({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";
  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const targets = t.metrics.map((m) => m.value);
    const duration = 2000;
    const steps = 60;
    const increments = targets.map((tgt) => tgt / steps);
    const currents = [0, 0, 0];
    const timer = setInterval(() => {
      let allDone = true;
      for (let i = 0; i < 3; i++) {
        currents[i] += increments[i];
        if (currents[i] >= targets[i]) {
          currents[i] = targets[i];
        } else {
          allDone = false;
        }
      }
      setCounts([...currents].map(Math.floor));
      if (allDone) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [mounted, language]);

  const topDirection = isRTL ? "kinetic-scroll-right" : "kinetic-scroll-left";
  const bottomDirection = isRTL ? "kinetic-scroll-left" : "kinetic-scroll-right";

  return (
    <>
      <style>{`
        @keyframes kinetic-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes kinetic-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes kinetic-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes kinetic-arrowSlide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(${isRTL ? "-6px" : "6px"}); }
        }
        .kinetic-scroll-left {
          animation: kinetic-scroll-left 25s linear infinite;
        }
        .kinetic-scroll-right {
          animation: kinetic-scroll-right 25s linear infinite;
        }
        .kinetic-fadeUp {
          opacity: 0;
          animation: kinetic-fadeUp 0.8s ease-out forwards;
        }
        .kinetic-fadeUp-d1 { animation-delay: 0.15s; }
        .kinetic-fadeUp-d2 { animation-delay: 0.3s; }
        .kinetic-fadeUp-d3 { animation-delay: 0.45s; }
        .kinetic-fadeUp-d4 { animation-delay: 0.6s; }
        .kinetic-fadeUp-d5 { animation-delay: 0.75s; }
        .kinetic-cta:hover .kinetic-arrow {
          animation: kinetic-arrowSlide 0.6s ease-in-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .kinetic-scroll-left,
          .kinetic-scroll-right,
          .kinetic-fadeUp,
          .kinetic-cta:hover .kinetic-arrow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col"
        style={{
          fontFamily: language === "ar" ? "var(--font-tajawal)" : "var(--font-inter)",
        }}
      >
        {/* Top Marquee Band */}
        <div className="relative flex-shrink-0 h-[20vh] md:h-[25vh] flex items-center overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          <div className={`flex flex-nowrap whitespace-nowrap ${topDirection}`}>
            <span
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white/[0.04] select-none"
              style={{
                fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.topMarquee}{t.topMarquee}{t.topMarquee}{t.topMarquee}
            </span>
            <span
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white/[0.04] select-none"
              style={{
                fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.topMarquee}{t.topMarquee}{t.topMarquee}{t.topMarquee}
            </span>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Middle Content Band */}
        <div className="relative flex-1 flex items-center justify-center px-6 py-12 md:py-0">
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading */}
            <h1
              className="kinetic-fadeUp kinetic-fadeUp-d1 text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight max-w-3xl mx-auto"
              style={{
                fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.heading}
            </h1>

            {/* Subtext */}
            <p
              className="kinetic-fadeUp kinetic-fadeUp-d2 text-gray-500 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed"
            >
              {t.sub}
            </p>

            {/* CTA */}
            <div className="kinetic-fadeUp kinetic-fadeUp-d3 mt-8">
              <button
                className="kinetic-cta cursor-pointer group inline-flex items-center gap-2 text-white text-base font-medium transition-all duration-300 hover:text-gray-300 border-b border-white/20 hover:border-white/50 pb-1"
                style={{
                  fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                }}
              >
                <span>{t.cta}</span>
                {isRTL ? (
                  <ArrowLeft className="kinetic-arrow w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="kinetic-arrow w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </div>

            {/* Metrics Row */}
            <div className="kinetic-fadeUp kinetic-fadeUp-d4 mt-12 flex items-center justify-center gap-8 md:gap-12 flex-wrap">
              {t.metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && (
                    <div className="hidden md:block w-px h-10 bg-white/10 -ml-4 md:-ml-6 mr-4 md:mr-6" />
                  )}
                  <div className="text-center">
                    <div
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{
                        fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                      }}
                    >
                      {counts[i]}{metric.suffix}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 mt-1">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative line below metrics */}
            <div className="kinetic-fadeUp kinetic-fadeUp-d5 mt-10 flex justify-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Bottom Marquee Band */}
        <div className="relative flex-shrink-0 h-[20vh] md:h-[25vh] flex items-center overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          <div className={`flex flex-nowrap whitespace-nowrap ${bottomDirection}`}>
            <span
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white/[0.04] select-none"
              style={{
                fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.bottomMarquee}{t.bottomMarquee}{t.bottomMarquee}{t.bottomMarquee}
            </span>
            <span
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white/[0.04] select-none"
              style={{
                fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.bottomMarquee}{t.bottomMarquee}{t.bottomMarquee}{t.bottomMarquee}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
