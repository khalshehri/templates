"use client";

/**
 * AI Powered Hero
 * AI/ML product with neural network aesthetic.
 * Background: #08060f. Accent: purple #a855f7.
 */

import { ArrowRight, Brain } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "AI-POWERED",
    heading: "Intelligence",
    headingAccent: "Built In",
    sub: "Our AI engine learns your business patterns and automates decisions with 97% accuracy. Less manual work, more strategic impact.",
    cta1: "Try AI Free",
    cta2: "How It Works",
    capabilities: ["Predictive Analytics", "Auto-Classification", "Smart Alerts", "NLP Search"],
  },
  ar: {
    badge: "مدعوم بالذكاء الاصطناعي",
    heading: "ذكاء",
    headingAccent: "مدمج",
    sub: "محرك الذكاء الاصطناعي يتعلم أنماط عملك ويؤتمت القرارات بدقة 97%. عمل يدوي أقل، تأثير استراتيجي أكبر.",
    cta1: "جرّب AI مجاناً",
    cta2: "كيف يعمل",
    capabilities: ["تحليلات تنبؤية", "تصنيف تلقائي", "تنبيهات ذكية", "بحث NLP"],
  },
};

export function Hero04({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#08060f" }}>
      {/* Neural network SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Nodes */}
        {[[20, 25], [50, 15], [80, 30], [15, 55], [45, 50], [75, 55], [30, 80], [60, 85], [85, 75]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="1.2" fill="#a855f7" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + i % 3}s`} repeatCount="indefinite" />
            </circle>
            {/* Connect to next nodes */}
            {i < 6 && <line x1={cx} y1={cy} x2={[[20, 25], [50, 15], [80, 30], [15, 55], [45, 50], [75, 55], [30, 80], [60, 85], [85, 75]][i + 3]?.[0]} y2={[[20, 25], [50, 15], [80, 30], [15, 55], [45, 50], [75, 55], [30, 80], [60, 85], [85, 75]][i + 3]?.[1]} stroke="#a855f7" strokeWidth="0.15" opacity="0.2" />}
          </g>
        ))}
      </svg>

      <div className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#a855f7", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Brain className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono font-bold text-purple-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #ec4899)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-purple-500/15 hover:border-purple-500/40 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.capabilities.map((c, i) => (
            <span key={i} className="px-4 py-2 text-sm text-purple-300/60 border border-purple-500/10 rounded-full bg-purple-500/[0.03]">{c}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
