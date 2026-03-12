"use client";

/**
 * Garden Dining Hero
 * Farm-to-table green garden aesthetic.
 * Background: #040a04. Accent: green #16a34a.
 */

import { ArrowRight, Leaf } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FARM TO TABLE",
    heading: "Grown Here.",
    headingAccent: "Served Here.",
    sub: "Our on-site garden supplies 80% of our ingredients. What you eat tonight was in the soil this morning. That's our promise.",
    cta1: "Book a Table",
    cta2: "Today's Harvest",
    values: [
      { icon: "🌱", title: "Organic", desc: "100% pesticide-free" },
      { icon: "🌿", title: "Seasonal", desc: "Menu changes weekly" },
      { icon: "🍃", title: "Zero Waste", desc: "Full circle kitchen" },
    ],
  },
  ar: {
    badge: "من المزرعة للطاولة",
    heading: "يُزرع هنا.",
    headingAccent: "يُقدّم هنا.",
    sub: "حديقتنا توفر 80% من مكوناتنا. ما تأكله الليلة كان في التربة هذا الصباح. هذا وعدنا.",
    cta1: "احجز طاولة",
    cta2: "حصاد اليوم",
    values: [
      { icon: "🌱", title: "عضوي", desc: "100% بلا مبيدات" },
      { icon: "🌿", title: "موسمي", desc: "القائمة تتغير أسبوعياً" },
      { icon: "🍃", title: "صفر هدر", desc: "مطبخ دائري" },
    ],
  },
};

export function Hero05({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#040a04" }}>
      {/* Green ambient glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#16a34a", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      {/* Falling leaf particles */}
      {[15, 35, 55, 75, 90].map((x, i) => (
        <div key={i} className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: "#16a34a", left: `${x}%`, top: "-5%", opacity: 0.15,
            animation: `leafFall ${8 + i * 2}s linear ${i * 1.5}s infinite`,
          }} />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-600/20 bg-green-600/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Leaf className="w-4 h-4 text-green-400" />
          <span className="text-xs font-bold text-green-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#16a34a", textShadow: "0 0 40px rgba(22,163,74,0.2)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(22,163,74,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.values.map((v, i) => (
            <div key={i} className="p-5 rounded-xl border border-green-600/10 bg-green-600/[0.03]">
              <span className="text-2xl mb-2 block">{v.icon}</span>
              <h3 className="text-sm font-semibold text-white mb-1">{v.title}</h3>
              <p className="text-xs text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes leafFall { 0%{transform:translateY(0) rotate(0deg)} 100%{transform:translateY(110vh) rotate(360deg)} }
      `}</style>
    </section>
  );
}
