"use client";

/**
 * Orbital Ring Hero
 * AI / Machine Learning company aesthetic.
 * Background: #0b0520. Accent: violet-400 / purple-300.
 * Concentric rotating rings with satellite dots.
 */

import { ArrowRight, Brain } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "ARTIFICIAL INTELLIGENCE",
    heading: "Intelligence",
    headingAccent: "Beyond Limits",
    headingSuffix: "Built for You",
    sub: "Custom AI models trained on your data. Real-time predictions at scale. From research to production in weeks, not years.",
    cta1: "Explore Models",
    cta2: "Read Research",
    stats: [
      { value: "500M+", label: "Predictions / Day" },
      { value: "98.7%", label: "Accuracy" },
      { value: "40+", label: "AI Models" },
    ],
  },
  ar: {
    badge: "الذكاء الاصطناعي",
    heading: "ذكاء",
    headingAccent: "بلا حدود",
    headingSuffix: "مصمّم لك",
    sub: "نماذج ذكاء اصطناعي مخصصة مدرّبة على بياناتك. تنبؤات فورية على نطاق واسع. من البحث إلى الإنتاج في أسابيع.",
    cta1: "استكشف النماذج",
    cta2: "اقرأ الأبحاث",
    stats: [
      { value: "+500M", label: "تنبؤ / يومياً" },
      { value: "98.7%", label: "دقة" },
      { value: "+40", label: "نموذج AI" },
    ],
  },
};

/* Satellite positions on each ring */
const satellites = [
  { ring: 1, angle: 0 }, { ring: 1, angle: 120 }, { ring: 1, angle: 240 },
  { ring: 2, angle: 60 }, { ring: 2, angle: 180 }, { ring: 2, angle: 300 },
  { ring: 3, angle: 30 }, { ring: 3, angle: 150 }, { ring: 3, angle: 270 },
];

export function Hero04({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0b0520" }}>
      {/* Orbital system */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Ring 1 — inner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-violet-500/[0.08]"
          style={{ animation: "orbitCW 25s linear infinite" }}>
          {satellites.filter(s => s.ring === 1).map((s, i) => (
            <div key={i} className="absolute w-2 h-2 rounded-full bg-violet-400"
              style={{
                top: `${50 - 50 * Math.cos(s.angle * Math.PI / 180)}%`,
                left: `${50 + 50 * Math.sin(s.angle * Math.PI / 180)}%`,
                transform: "translate(-50%,-50%)",
                animation: "satellitePulse 2s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }} />
          ))}
        </div>

        {/* Ring 2 — middle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-violet-500/[0.06]"
          style={{ animation: "orbitCCW 35s linear infinite" }}>
          {satellites.filter(s => s.ring === 2).map((s, i) => (
            <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/80"
              style={{
                top: `${50 - 50 * Math.cos(s.angle * Math.PI / 180)}%`,
                left: `${50 + 50 * Math.sin(s.angle * Math.PI / 180)}%`,
                transform: "translate(-50%,-50%)",
                animation: "satellitePulse 2.5s ease-in-out infinite",
                animationDelay: `${i * 0.7}s`,
              }} />
          ))}
        </div>

        {/* Ring 3 — outer, tilted */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-violet-500/[0.04]"
          style={{ animation: "orbitCW 50s linear infinite", transform: "translate(-50%,-50%) rotateX(60deg)" }}>
          {satellites.filter(s => s.ring === 3).map((s, i) => (
            <div key={i} className="absolute w-1 h-1 rounded-full bg-violet-300/50"
              style={{
                top: `${50 - 50 * Math.cos(s.angle * Math.PI / 180)}%`,
                left: `${50 + 50 * Math.sin(s.angle * Math.PI / 180)}%`,
                transform: "translate(-50%,-50%)",
              }} />
          ))}
        </div>

        {/* Core glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
            animation: "coreGlow 4s ease-in-out infinite",
          }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 mb-8"
          style={{ animation: "fadeUp 0.6s ease-out both" }}>
          <Brain className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono font-bold text-violet-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(44px, 9vw, 100px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #c4b5fd)" }}>{t.headingAccent}</span><br />
          <span className="text-gray-500" style={{ fontSize: "0.55em" }}>{t.headingSuffix}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 ${isAr ? "sm:flex-row-reverse" : ""}`}
          style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(167,139,250,0.3)]">
            {t.cta1}
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8"
          style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
          {t.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-white">{s.value}</div>
              <div className="text-xs text-violet-400/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes orbitCW { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes orbitCCW { from{transform:translate(-50%,-50%) rotate(360deg)} to{transform:translate(-50%,-50%) rotate(0deg)} }
        @keyframes satellitePulse { 0%,100%{opacity:0.4;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.8)} }
        @keyframes coreGlow { 0%,100%{opacity:1;transform:translate(-50%,-50%) scale(1)} 50%{opacity:0.5;transform:translate(-50%,-50%) scale(1.3)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
