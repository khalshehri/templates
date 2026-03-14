"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Globe } from "lucide-react";

const content = {
  en: {
    badge: "Since 1994",
    heading: "Engineering Tomorrow's Infrastructure",
    body: "We design and build the critical systems that power modern civilization. From energy grids to digital networks, our engineering excellence shapes the future.",
    cta: "Explore Solutions",
    metricNumber: 47,
    metricLabel: "Countries",
    metricSub: "Global operations network",
  },
  ar: {
    badge: "منذ 1994",
    heading: "هندسة بنية الغد التحتية",
    body: "نصمّم ونبني الأنظمة الحيوية التي تشغّل الحضارة الحديثة. من شبكات الطاقة إلى الشبكات الرقمية، تميّزنا الهندسي يشكّل المستقبل.",
    cta: "استكشف الحلول",
    metricNumber: 47,
    metricLabel: "دولة",
    metricSub: "شبكة عمليات عالمية",
  },
};

export function Hero04({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setCount(0);
    const target = t.metricNumber;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [mounted, t.metricNumber]);

  const whiteClipPath = isRTL
    ? "polygon(25% 0, 100% 0, 100% 100%, 45% 100%)"
    : "polygon(0 0, 75% 0, 55% 100%, 0 100%)";

  const lineClipPath = isRTL
    ? "polygon(24.8% 0, 25.2% 0, 45.2% 100%, 44.8% 100%)"
    : "polygon(74.8% 0, 75.2% 0, 55.2% 100%, 54.8% 100%)";

  return (
    <>
      <style>{`
        @keyframes tectonic-slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tectonic-slideIn {
          from { opacity: 0; transform: translateX(${isRTL ? "-60px" : "60px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes tectonic-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes tectonic-borderGlow {
          0%, 100% { border-color: rgba(37, 99, 235, 0.15); box-shadow: 0 0 20px rgba(37, 99, 235, 0.05); }
          50% { border-color: rgba(37, 99, 235, 0.4); box-shadow: 0 0 30px rgba(37, 99, 235, 0.15); }
        }
        @keyframes tectonic-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .tectonic-slideUp {
          opacity: 0;
          animation: tectonic-slideUp 0.8s ease-out forwards;
        }
        .tectonic-slideUp-d1 { animation-delay: 0.2s; }
        .tectonic-slideUp-d2 { animation-delay: 0.4s; }
        .tectonic-slideUp-d3 { animation-delay: 0.6s; }
        .tectonic-slideUp-d4 { animation-delay: 0.8s; }
        .tectonic-slideIn {
          opacity: 0;
          animation: tectonic-slideIn 0.9s ease-out 0.5s forwards;
        }
        .tectonic-shimmer-line {
          background: linear-gradient(
            90deg,
            rgba(37, 99, 235, 0.1) 0%,
            rgba(37, 99, 235, 0.6) 25%,
            rgba(37, 99, 235, 1) 50%,
            rgba(37, 99, 235, 0.6) 75%,
            rgba(37, 99, 235, 0.1) 100%
          );
          background-size: 200% 100%;
          animation: tectonic-shimmer 3s linear infinite;
        }
        .tectonic-glow-card {
          animation: tectonic-borderGlow 3s ease-in-out infinite;
        }
        .tectonic-fadeIn {
          opacity: 0;
          animation: tectonic-fadeIn 1s ease-out 0.3s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .tectonic-slideUp,
          .tectonic-slideIn,
          .tectonic-shimmer-line,
          .tectonic-glow-card,
          .tectonic-fadeIn {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{ fontFamily: language === "ar" ? "var(--font-tajawal)" : "var(--font-inter)" }}
      >
        {/* Dark slate background (bottom layer) */}
        <div className="absolute inset-0 bg-[#1e293b]" />

        {/* Dark zone decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full tectonic-fadeIn"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
              top: "20%",
              right: isRTL ? "auto" : "5%",
              left: isRTL ? "5%" : "auto",
            }}
          />
          <div
            className="absolute w-[300px] h-[300px] rounded-full tectonic-fadeIn"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
              bottom: "10%",
              right: isRTL ? "auto" : "15%",
              left: isRTL ? "15%" : "auto",
            }}
          />
        </div>

        {/* White zone (top layer with clip-path) */}
        <div
          className="absolute inset-0 bg-white"
          style={{ clipPath: whiteClipPath }}
        />

        {/* Subtle pattern on white zone */}
        <div
          className="absolute inset-0 tectonic-fadeIn"
          style={{
            clipPath: whiteClipPath,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Diagonal shimmer line */}
        <div
          className="absolute inset-0 tectonic-shimmer-line"
          style={{ clipPath: lineClipPath }}
        />

        {/* Content container */}
        <div className="relative z-10 w-full min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* White zone content */}
              <div
                className={`${isRTL ? "lg:order-2" : "lg:order-1"} space-y-8`}
                style={{ textAlign: isRTL ? "right" : "left" }}
              >
                {/* Badge */}
                <div className="tectonic-slideUp tectonic-slideUp-d1">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-50"
                    style={{
                      borderLeft: isRTL ? "none" : "3px solid #2563eb",
                      borderRight: isRTL ? "3px solid #2563eb" : "none",
                    }}
                  >
                    <span
                      className="text-sm font-semibold text-[#2563eb]"
                      style={{
                        fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                      }}
                    >
                      {t.badge}
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h1
                  className="tectonic-slideUp tectonic-slideUp-d2 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                  style={{
                    fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                  }}
                >
                  {t.heading}
                </h1>

                {/* Body */}
                <p
                  className="tectonic-slideUp tectonic-slideUp-d3 text-gray-600 text-lg leading-relaxed max-w-lg"
                  style={{
                    fontFamily: language === "ar" ? "var(--font-tajawal)" : "var(--font-inter)",
                  }}
                >
                  {t.body}
                </p>

                {/* CTA */}
                <div className="tectonic-slideUp tectonic-slideUp-d4">
                  <button
                    className="cursor-pointer group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    style={{
                      fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                    }}
                  >
                    <span>{t.cta}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Dark zone content - Metric card */}
              <div
                className={`${isRTL ? "lg:order-1" : "lg:order-2"} flex items-center ${isRTL ? "justify-start" : "justify-end"}`}
              >
                <div
                  className="tectonic-slideIn tectonic-glow-card relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 max-w-sm w-full"
                >
                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-[#2563eb] to-transparent" />

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2563eb]/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-widest"
                        style={{
                          fontFamily: language === "ar" ? "var(--font-tajawal)" : "var(--font-inter)",
                        }}
                      >
                        {t.metricSub}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-7xl md:text-8xl font-black text-white leading-none"
                      style={{
                        fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                      }}
                    >
                      {count}
                    </span>
                    <span
                      className="text-2xl font-semibold text-gray-300"
                      style={{
                        fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                      }}
                    >
                      {t.metricLabel}
                    </span>
                  </div>

                  {/* Progress bar decoration */}
                  <div className="mt-8 space-y-3">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{isRTL ? "التغطية" : "Coverage"}</span>
                      <span>94%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-full transition-all duration-[2000ms] ease-out"
                        style={{ width: mounted ? "94%" : "0%" }}
                      />
                    </div>
                  </div>

                  {/* Dots grid decoration */}
                  <div className="absolute -bottom-4 -right-4 grid grid-cols-4 gap-2 opacity-20">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/30 to-transparent" />
      </section>
    </>
  );
}
