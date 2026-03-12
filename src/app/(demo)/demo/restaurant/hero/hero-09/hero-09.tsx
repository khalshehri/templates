"use client";

/**
 * Brick Oven Hero
 * Italian pizzeria / trattoria vibe.
 * Background: #0a0806. Accent: terracotta #dc2626.
 */

import { ArrowRight, Pizza } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "AUTHENTIC ITALIAN",
    heading: "Brick Oven.",
    headingAccent: "Real Dough.",
    sub: "900°F stone oven. 48-hour fermented dough. San Marzano tomatoes. Some things are worth doing the hard way.",
    cta1: "Order Now",
    cta2: "Our Process",
    features: [
      { temp: "900°F", label: "Stone Oven" },
      { temp: "48h", label: "Fermentation" },
      { temp: "DOP", label: "Ingredients" },
    ],
  },
  ar: {
    badge: "إيطالي أصيل",
    heading: "فرن حجري.",
    headingAccent: "عجينة حقيقية.",
    sub: "فرن حجري 900°F. عجينة مخمّرة 48 ساعة. طماطم سان مارزانو. بعض الأشياء تستحق الطريقة الصعبة.",
    cta1: "اطلب الآن",
    cta2: "طريقتنا",
    features: [
      { temp: "900°F", label: "فرن حجري" },
      { temp: "48h", label: "تخمير" },
      { temp: "DOP", label: "المكونات" },
    ],
  },
};

export function Hero09({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0a0806" }}>
      {/* Fire glow from below */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(220,38,38,0.06), transparent)" }} />

      {/* Terracotta glow */}
      <div className="absolute w-[400px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#dc2626", bottom: "20%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/20 bg-red-600/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Pizza className="w-4 h-4 text-red-400" />
          <span className="text-xs font-bold text-red-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#dc2626" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex items-center justify-center gap-10"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.features.map((f, i) => (
            <div key={i} className="text-center">
              <span className="text-3xl font-black text-red-400 font-mono">{f.temp}</span>
              <span className="block text-xs text-gray-600 mt-1">{f.label}</span>
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
