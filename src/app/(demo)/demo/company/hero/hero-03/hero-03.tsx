"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";

interface Hero03Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "SYSTEM STATUS: OPERATIONAL_",
    heading: "Infrastructure that\nnever sleeps",
    body: "Enterprise-grade cloud platform engineered for zero-downtime operations, real-time analytics, and bulletproof security.",
    cta: "Request access",
    metrics: ["99.97% Uptime", "<12ms Latency", "256-bit Encrypted"],
  },
  ar: {
    badge: "حالة النظام: تشغيلي_",
    heading: "بنية تحتية\nلا تنام أبداً",
    body: "منصة سحابية بمستوى المؤسسات مصممة لعمليات بلا توقف وتحليلات فورية وأمان لا يُخترق.",
    cta: "اطلب الوصول",
    metrics: ["99.97% وقت التشغيل", "أقل من 12مل\u200Cث", "تشفير 256-بت"],
  },
};

export function Hero03({ language }: Hero03Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero03-scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes hero03-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes hero03-glow {
          0%, 100% { box-shadow: 0 0 0px rgba(6,182,212,0); }
          50% { box-shadow: 0 0 15px rgba(6,182,212,0.15); }
        }
        @keyframes hero03-fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero03-scanline {
          animation: hero03-scanline 10s linear infinite;
        }
        .hero03-blink {
          animation: hero03-blink 1s steps(1) infinite;
        }
        .hero03-glow {
          animation: hero03-glow 3s ease-in-out infinite;
        }
        .hero03-fade-1 {
          animation: hero03-fadeIn 0.6s ease-out 0.1s both;
        }
        .hero03-fade-2 {
          animation: hero03-fadeIn 0.6s ease-out 0.25s both;
        }
        .hero03-fade-3 {
          animation: hero03-fadeIn 0.6s ease-out 0.4s both;
        }
        .hero03-fade-4 {
          animation: hero03-fadeIn 0.6s ease-out 0.55s both;
        }
        .hero03-fade-5 {
          animation: hero03-fadeIn 0.6s ease-out 0.7s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero03-scanline,
          .hero03-blink,
          .hero03-glow,
          .hero03-fade-1,
          .hero03-fade-2,
          .hero03-fade-3,
          .hero03-fade-4,
          .hero03-fade-5 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#050505" }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Scan line */}
        <div
          className="hero03-scanline absolute left-0 w-full h-[2px] bg-cyan-500/10 pointer-events-none"
          style={{ top: "0%" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
          {/* Badge */}
          <div className="hero03-fade-1 mb-8">
            <span
              className={`inline-block font-mono text-[11px] text-cyan-400/70 border border-cyan-500/20 px-3 py-1.5 rounded ${
                isAr ? "font-[family-name:var(--font-tajawal)]" : ""
              }`}
            >
              {t.badge.slice(0, -1)}
              <span className="hero03-blink">_</span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`hero03-fade-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 whitespace-pre-line ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.heading}
          </h1>

          {/* Body */}
          <p
            className={`hero03-fade-3 text-gray-500 text-lg max-w-xl mx-auto mb-10 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.body}
          </p>

          {/* CTA */}
          <div className="hero03-fade-4 mb-14">
            <button
              className="hero03-glow cursor-pointer border border-cyan-500/30 text-cyan-300 bg-transparent px-8 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2 transition-all duration-300 hover:border-cyan-500/60"
            >
              {isAr && <ArrowLeft className="w-4 h-4" />}
              <span
                className={
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }
              >
                {t.cta}
              </span>
              {!isAr && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          {/* Metrics */}
          <div className="hero03-fade-5 flex items-center justify-center gap-0">
            {t.metrics.map((metric, i) => (
              <div
                key={i}
                className={`text-xs text-gray-600 font-mono px-5 ${
                  i > 0
                    ? isAr
                      ? "border-r border-white/10"
                      : "border-l border-white/10"
                    : ""
                }`}
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
