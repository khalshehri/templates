"use client";

/**
 * Data Stream Hero
 * Analytics / SaaS platform aesthetic.
 * Background: #040d12. Accent: cyan-400 / sky-300.
 * Falling data streams (vertical rectangles) + frosted glass card center.
 */

import { ArrowRight, BarChart3 } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "REAL-TIME ANALYTICS",
    heading: "See",
    headingAccent: "Every Signal",
    headingSuffix: "In Your Data",
    sub: "From raw data to actionable insights in milliseconds. Unified dashboards, real-time alerts, and AI-powered anomaly detection.",
    cta1: "Start Free Trial",
    cta2: "Live Demo",
    integrations: ["SQL", "API", "Cloud", "AI", "BI"],
  },
  ar: {
    badge: "تحليلات فورية",
    heading: "اكتشف",
    headingAccent: "كل إشارة",
    headingSuffix: "في بياناتك",
    sub: "من البيانات الخام إلى رؤى قابلة للتنفيذ بالميلي ثانية. لوحات موحدة، تنبيهات فورية، وكشف شذوذ بالذكاء الاصطناعي.",
    cta1: "ابدأ مجاناً",
    cta2: "عرض مباشر",
    integrations: ["SQL", "API", "سحابي", "AI", "BI"],
  },
};

/* 24 data stream columns with deterministic properties */
const streams = Array.from({ length: 24 }, (_, i) => ({
  left: ((i * 4.17) % 100),
  duration: 8 + (i * 1.7) % 12,
  delay: (i * 0.8) % 6,
  segments: 4 + (i % 5),
  opacity: 0.03 + ((i * 3) % 12) * 0.01,
  bright: i % 6 === 0,
}));

export function Hero06({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#040d12" }}>
      {/* Data streams */}
      {streams.map((s, i) => (
        <div key={i} className="absolute top-0 flex flex-col gap-2 pointer-events-none"
          style={{
            left: `${s.left}%`,
            animation: `streamFall ${s.duration}s linear ${s.delay}s infinite`,
          }}>
          {Array.from({ length: s.segments }).map((_, j) => (
            <div key={j} className="rounded-sm"
              style={{
                width: s.bright ? 3 : 2,
                height: 8 + (j * 7) % 20,
                background: s.bright ? "rgba(34,211,238,0.3)" : `rgba(34,211,238,${s.opacity})`,
              }} />
          ))}
        </div>
      ))}

      {/* Frosted glass card */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-32">
        <div className="rounded-2xl border border-cyan-500/10 bg-gray-950/80 backdrop-blur-xl p-10 sm:p-14"
          style={{ animation: "cardReveal 0.8s ease-out both" }}>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-8"
              style={{ animation: "fadeUp 0.5s ease-out 0.3s both" }}>
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-cyan-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(40px, 8vw, 80px)", animation: "fadeUp 0.5s ease-out 0.4s both" }}>
              {t.heading}<br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #22d3ee, #7dd3fc)" }}>{t.headingAccent}</span><br />
              <span className="text-gray-500" style={{ fontSize: "0.6em" }}>{t.headingSuffix}</span>
            </h1>

            <p className="text-gray-400 text-base mb-10 leading-relaxed"
              style={{ animation: "fadeUp 0.5s ease-out 0.5s both" }}>{t.sub}</p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.5s ease-out 0.6s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-sky-500 hover:from-cyan-500 hover:to-sky-400 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>

            {/* Integration chips */}
            <div className="flex flex-wrap items-center justify-center gap-3"
              style={{ animation: "fadeUp 0.5s ease-out 0.7s both" }}>
              {t.integrations.map((label, i) => (
                <div key={i} className="w-12 h-12 rounded-xl border border-cyan-500/10 bg-cyan-500/[0.04] flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-cyan-400/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes streamFall { from{transform:translateY(-100vh)} to{transform:translateY(100vh)} }
        @keyframes cardReveal { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
