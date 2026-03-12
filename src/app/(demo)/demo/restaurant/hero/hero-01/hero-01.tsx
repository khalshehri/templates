"use client";

/**
 * Kitchen Flame Hero
 * Open flame / charcoal grill aesthetic.
 * Background: #0a0504. Accent: flame orange #ea580c.
 */

import { ArrowRight, Flame } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FIRE-KISSED CUISINE",
    heading: "Taste the",
    headingAccent: "Flame",
    sub: "Where primal fire meets culinary artistry. Every dish is kissed by open flame and crafted with generations of tradition.",
    cta1: "Reserve a Table",
    cta2: "View Menu",
    hours: "Open Daily · 5 PM – 12 AM",
  },
  ar: {
    badge: "مطبخ اللهب",
    heading: "تذوّق",
    headingAccent: "اللهب",
    sub: "حيث يلتقي اللهب البدائي بفنون الطهي. كل طبق تقبّله النار المفتوحة ويُصنع بتقاليد أجيال.",
    cta1: "احجز طاولة",
    cta2: "قائمة الطعام",
    hours: "مفتوح يومياً · 5 م – 12 ص",
  },
};

export function Hero01({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0a0504" }}>
      {/* Ember particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: i % 3 === 0 ? "#ea580c" : "#fbbf24",
            left: `${15 + (i * 7) % 70}%`,
            bottom: "10%",
            opacity: 0.6,
            animation: `ember ${3 + (i % 4)}s ease-out ${i * 0.3}s infinite`,
          }} />
      ))}

      {/* Warm glow from below */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(234,88,12,0.08), transparent)" }} />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-600/20 bg-orange-600/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold text-orange-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="leading-[0.85] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", fontFamily: "Georgia, serif", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <span className="text-white font-light">{t.heading}</span><br />
          <span className="font-bold italic bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to bottom, #fbbf24, #ea580c, #7c2d12)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "Georgia, serif", animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-700 hover:bg-orange-600 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(234,88,12,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <p className="text-xs text-gray-600 tracking-[0.15em] uppercase"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>{t.hours}</p>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ember { 0%{transform:translateY(0) scale(1);opacity:0.6} 100%{transform:translateY(-300px) translateX(${Math.random() > 0.5 ? '' : '-'}30px) scale(0);opacity:0} }
      `}</style>
    </section>
  );
}
