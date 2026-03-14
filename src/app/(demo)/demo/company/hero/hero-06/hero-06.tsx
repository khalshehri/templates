"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Shield, Clock, Lock } from "lucide-react";

const content = {
  en: {
    pill: "Analytics Platform",
    heading: "Data-Driven Decisions at Enterprise Scale",
    body: "Transform raw data into actionable intelligence. Our platform processes billions of data points in real-time, giving your team the clarity to make confident decisions.",
    ctaPrimary: "Request Demo",
    ctaSecondary: "View Pricing",
    trustBadges: ["99.9% Uptime", "SOC 2 Certified", "ISO 27001"],
    cardMetric: "$4.2M",
    cardLabel: "Revenue this quarter",
    cardStatus: "Live tracking",
    barLabels: ["Q1", "Q2", "Q3", "Q4"],
  },
  ar: {
    pill: "منصة التحليلات",
    heading: "قرارات مبنية على البيانات بمقياس المؤسسات",
    body: "حو\u0651ل البيانات الخام إلى ذكاء قابل للتنفيذ. منصتنا تعالج مليارات نقاط البيانات في الوقت الفعلي، مما يمنح فريقك الوضوح لاتخاذ قرارات واثقة.",
    ctaPrimary: "اطلب عرضاً",
    ctaSecondary: "عرض الأسعار",
    trustBadges: ["99.9% وقت التشغيل", "شهادة SOC 2", "ISO 27001"],
    cardMetric: "$4.2M",
    cardLabel: "إيرادات هذا الربع",
    cardStatus: "تتبع مباشر",
    barLabels: ["ر1", "ر2", "ر3", "ر4"],
  },
};

const barHeights = [40, 60, 80, 50];
const barDelays = [0.3, 0.5, 0.7, 0.9];

export function Hero06({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trustIcons = [Clock, Shield, Lock];

  return (
    <>
      <style>{`
        @keyframes elevate-float {
          0%, 100% { transform: translateY(0) rotate(${isRTL ? "-2deg" : "2deg"}); }
          50% { transform: translateY(-6px) rotate(${isRTL ? "-2deg" : "2deg"}); }
        }
        @keyframes elevate-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes elevate-scaleY {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes elevate-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes elevate-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .elevate-float {
          animation: elevate-float 4s ease-in-out infinite;
        }
        .elevate-fadeUp {
          opacity: 0;
          animation: elevate-fadeUp 0.7s ease-out forwards;
        }
        .elevate-fadeUp-d1 { animation-delay: 0.1s; }
        .elevate-fadeUp-d2 { animation-delay: 0.25s; }
        .elevate-fadeUp-d3 { animation-delay: 0.4s; }
        .elevate-fadeUp-d4 { animation-delay: 0.55s; }
        .elevate-fadeUp-d5 { animation-delay: 0.7s; }
        .elevate-fadeUp-d6 { animation-delay: 0.85s; }
        .elevate-bar {
          transform-origin: bottom;
          transform: scaleY(0);
        }
        .elevate-bar-animate {
          animation: elevate-scaleY 0.6s ease-out forwards;
        }
        .elevate-bar-d0 { animation-delay: 0.6s; }
        .elevate-bar-d1 { animation-delay: 0.8s; }
        .elevate-bar-d2 { animation-delay: 1.0s; }
        .elevate-bar-d3 { animation-delay: 1.2s; }
        .elevate-card-fadeIn {
          opacity: 0;
          animation: elevate-fadeIn 0.8s ease-out 0.4s forwards;
        }
        .elevate-pulse {
          animation: elevate-pulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .elevate-float,
          .elevate-fadeUp,
          .elevate-bar,
          .elevate-bar-animate,
          .elevate-card-fadeIn,
          .elevate-pulse {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          fontFamily: language === "ar" ? "var(--font-tajawal)" : "var(--font-inter)",
          background: "radial-gradient(ellipse at center, #f5f7fa 0%, #eef2f7 100%)",
        }}
      >
        {/* Subtle decorative circles */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)",
            top: "-10%",
            right: isRTL ? "auto" : "-10%",
            left: isRTL ? "-10%" : "auto",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)",
            bottom: "5%",
            left: isRTL ? "auto" : "10%",
            right: isRTL ? "10%" : "auto",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left content (or right in RTL) */}
              <div
                className={`lg:col-span-7 space-y-7 ${isRTL ? "lg:order-2" : "lg:order-1"}`}
                style={{ textAlign: isRTL ? "right" : "left" }}
              >
                {/* Pill badge */}
                <div className="elevate-fadeUp elevate-fadeUp-d1">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#2563eb] elevate-pulse" />
                    {t.pill}
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="elevate-fadeUp elevate-fadeUp-d2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                  style={{
                    fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                  }}
                >
                  {t.heading}
                </h1>

                {/* Body */}
                <p className="elevate-fadeUp elevate-fadeUp-d3 text-gray-600 text-base leading-relaxed max-w-lg">
                  {t.body}
                </p>

                {/* CTAs */}
                <div className={`elevate-fadeUp elevate-fadeUp-d4 flex items-center gap-4 flex-wrap ${isRTL ? "justify-end" : "justify-start"}`}>
                  <button
                    className="cursor-pointer group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    style={{
                      fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                    }}
                  >
                    <span>{t.ctaPrimary}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </button>
                  <button
                    className="cursor-pointer inline-flex items-center gap-2 bg-transparent hover:bg-gray-100 text-gray-700 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 border border-gray-300 hover:border-gray-400"
                    style={{
                      fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                    }}
                  >
                    {t.ctaSecondary}
                  </button>
                </div>

                {/* Trust badges */}
                <div className={`elevate-fadeUp elevate-fadeUp-d5 flex items-center gap-3 flex-wrap ${isRTL ? "justify-end" : "justify-start"}`}>
                  {t.trustBadges.map((badge, i) => {
                    const Icon = trustIcons[i];
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white/60 text-xs font-medium text-gray-600"
                      >
                        <Icon className="w-3.5 h-3.5 text-gray-400" />
                        {badge}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Right: Dashboard card (or left in RTL) */}
              <div
                className={`lg:col-span-5 ${isRTL ? "lg:order-1" : "lg:order-2"} flex ${isRTL ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`elevate-card-fadeIn elevate-float relative bg-white rounded-2xl p-6 md:p-8 max-w-sm w-full`}
                  style={{
                    boxShadow: "0 4px 6px rgba(0,0,0,0.03), 0 10px 30px rgba(0,0,0,0.06), 0 20px 60px rgba(37,99,235,0.08)",
                    transform: `rotate(${isRTL ? "-2deg" : "2deg"})`,
                  }}
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                        style={{
                          fontFamily: language === "ar" ? "var(--font-changa)" : "var(--font-inter)",
                        }}
                      >
                        {t.cardMetric}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{t.cardLabel}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 elevate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400 elevate-pulse" style={{ animationDelay: "0.3s" }} />
                      <span className="w-2 h-2 rounded-full bg-emerald-400 elevate-pulse" style={{ animationDelay: "0.6s" }} />
                    </div>
                  </div>

                  {/* Status line */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-xs text-emerald-600 font-medium">{t.cardStatus}</span>
                  </div>

                  {/* Bar chart */}
                  <div className="flex items-end gap-4 h-28 mb-4">
                    {barHeights.map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full relative" style={{ height: `${h * 1.3}px` }}>
                          <div
                            className={`absolute bottom-0 w-full rounded-t-md bg-[#2563eb] elevate-bar ${mounted ? "elevate-bar-animate" : ""} elevate-bar-d${i}`}
                            style={{
                              height: "100%",
                              opacity: 0.3 + (i * 0.2),
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {t.barLabels[i]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom divider + mini stats */}
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-sm bg-[#2563eb]/80" />
                        <span className="text-[10px] text-gray-400">{isRTL ? "الإيرادات" : "Revenue"}</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600">+24.5%</span>
                    </div>
                  </div>

                  {/* Decorative corner dots */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]/30" />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
