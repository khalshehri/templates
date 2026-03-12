"use client";

/**
 * Coffee Break Hero
 * Warm, personal, coffeehouse freelancer vibe.
 * Background: #0c0806. Accent: warm amber #d97706.
 */

import { ArrowRight, Coffee } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "CREATIVE FREELANCER",
    heading: "Let's Make",
    headingAccent: "Something Cool",
    sub: "I'm a designer & developer who turns caffeine into clean code and beautiful interfaces. Available for your next project.",
    cta1: "Grab a Coffee",
    cta2: "My Work",
    available: "Currently available for new projects",
  },
  ar: {
    badge: "مستقل مبدع",
    heading: "لنصنع",
    headingAccent: "شيئاً رائعاً",
    sub: "مصمم ومطور يحوّل الكافيين إلى كود نظيف وواجهات جميلة. متاح لمشروعك القادم.",
    cta1: "لنتناول قهوة",
    cta2: "أعمالي",
    available: "متاح حالياً لمشاريع جديدة",
  },
};

export function Hero03({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0c0806" }}>
      {/* Warm ambient glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#d97706", top: "30%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Coffee steam lines */}
      <svg className="absolute opacity-[0.04] pointer-events-none" style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }} width="200" height="300" viewBox="0 0 200 300">
        {[60, 100, 140].map((x, i) => (
          <path key={i} d={`M${x},300 Q${x - 20},200 ${x + 10},150 Q${x + 30},100 ${x},0`}
            fill="none" stroke="#d97706" strokeWidth="1.5" opacity="0.5">
            <animate attributeName="d"
              values={`M${x},300 Q${x - 20},200 ${x + 10},150 Q${x + 30},100 ${x},0;M${x},300 Q${x + 20},200 ${x - 10},150 Q${x - 30},100 ${x},0;M${x},300 Q${x - 20},200 ${x + 10},150 Q${x + 30},100 ${x},0`}
              dur={`${4 + i}s`} repeatCount="indefinite" />
          </path>
        ))}
      </svg>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "150px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-600/20 bg-amber-600/10 mb-10"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
          <span className="text-xs text-amber-200/80">{t.available}</span>
        </div>

        <div className="inline-flex items-center gap-2 mb-6"
          style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <Coffee className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-bold text-amber-400 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", animation: "fadeInUp 0.6s ease-out 0.15s both" }}>
          {t.heading}<br />
          <span style={{ color: "#d97706" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.25s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0.35s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(217,119,6,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}
