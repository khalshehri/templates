"use client";

/**
 * Magnetic Field Hero
 * Curved magnetic field lines flowing around a central force.
 * Background: dark teal (#040e0e). Accent: teal (#14b8a6).
 * Signature: SVG curved field lines with flowing dot particles.
 */

import { ArrowRight, Magnet } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "Irresistible Force",
    heading: "Attract.",
    headingAccent: "Retain.",
    headingLine2: "Dominate.",
    sub: "Our magnetic approach to digital strategy creates an irresistible pull — drawing customers, talent, and opportunity to your business.",
    cta1: "Activate Your Field",
    cta2: "How It Works",
    cards: [
      { title: "Customer Magnetism", value: "3.8×", desc: "Higher conversion rates" },
      { title: "Talent Attraction", value: "67%", desc: "Faster hiring pipeline" },
      { title: "Market Pull", value: "#1", desc: "Category positioning" },
    ],
  },
  ar: {
    badge: "قوة لا تُقاوَم",
    heading: "اجذب.",
    headingAccent: "احتفظ.",
    headingLine2: "سيطر.",
    sub: "نهجنا المغناطيسي في الاستراتيجية الرقمية يخلق جاذبية لا تُقاوم — يسحب العملاء والمواهب والفرص نحو أعمالك.",
    cta1: "فعّل مجالك",
    cta2: "كيف يعمل",
    cards: [
      { title: "مغناطيسية العملاء", value: "3.8×", desc: "معدلات تحويل أعلى" },
      { title: "جذب المواهب", value: "67%", desc: "توظيف أسرع" },
      { title: "سحب السوق", value: "#1", desc: "تموضع في الفئة" },
    ],
  },
};

// Magnetic field line paths (curved)
const FIELD_LINES = [
  "M10,50 Q30,20 50,50 Q70,80 90,50",
  "M10,50 Q30,10 50,50 Q70,90 90,50",
  "M10,50 Q30,30 50,50 Q70,70 90,50",
  "M10,50 Q30,35 50,50 Q70,65 90,50",
  "M10,50 Q30,42 50,50 Q70,58 90,50",
  "M10,50 Q30,5 50,50 Q70,95 90,50",
  "M10,50 Q30,15 50,50 Q70,85 90,50",
];

export function Hero06({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#040e0e" }}>
      {/* Teal glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #14b8a6, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      {/* Magnetic field visualization */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {FIELD_LINES.map((d, i) => (
          <g key={i}>
            <path d={d} fill="none" stroke="#14b8a6" strokeWidth="0.2" opacity={0.3 + i * 0.05} />
            {/* Flowing particles along paths */}
            <circle r="0.5" fill="#14b8a6" opacity="0.8">
              <animateMotion dur={`${3 + i * 0.5}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" path={d} />
            </circle>
            <circle r="0.5" fill="#14b8a6" opacity="0.8">
              <animateMotion dur={`${3 + i * 0.5}s`} begin={`${i * 0.4 + 1.5}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        ))}
        {/* Center force node */}
        <circle cx="50" cy="50" r="2" fill="#14b8a6" opacity="0.4">
          <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="1" fill="#14b8a6" opacity="0.9" />
      </svg>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Magnet className="w-4 h-4 text-teal-400" />
          <span className="text-sm font-medium text-teal-300">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#14b8a6" }}>{t.headingAccent}</span><br />
          <span className="text-gray-500">{t.headingLine2}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(20,184,166,0.35)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-200">{t.cta2}</button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.cards.map((c, i) => (
            <div key={i} className="rounded-2xl border border-teal-500/10 bg-teal-500/[0.04] backdrop-blur p-6 hover:border-teal-500/25 transition-all duration-300">
              <span className="text-3xl font-bold text-teal-400 font-mono">{c.value}</span>
              <h3 className="text-sm font-semibold text-white mt-2 mb-1">{c.title}</h3>
              <p className="text-xs text-gray-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
