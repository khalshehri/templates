"use client";

/**
 * Sushi Bar Hero
 * Japanese sushi bar with clean minimal aesthetic.
 * Background: #080808. Accent: salmon #f87171.
 */

import { ArrowRight, Fish } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "OMAKASE",
    heading: "Trust the",
    headingAccent: "Chef",
    sub: "Eighteen seats. One master chef. The freshest catch flown daily from Tsukiji. Surrender to the art of omakase.",
    cta1: "Book Omakase",
    cta2: "Our Philosophy",
    kanji: "鮨",
    info: "EST. 2018 · SEATS: 18 · TOKYO × RIYADH",
  },
  ar: {
    badge: "أوماكاسي",
    heading: "ثق في",
    headingAccent: "الشيف",
    sub: "ثمانية عشر مقعداً. شيف واحد محترف. أطيب الأسماك تصل يومياً من تسوكيجي. استسلم لفن الأوماكاسي.",
    cta1: "احجز أوماكاسي",
    cta2: "فلسفتنا",
    kanji: "鮨",
    info: "تأسس 2018 · المقاعد: 18 · طوكيو × الرياض",
  },
};

export function Hero03({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#080808" }}>
      {/* Subtle wood grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02 0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "300px" }} />

      {/* Warm salmon glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full opacity-8 blur-[80px] pointer-events-none"
        style={{ background: "#f87171", top: "40%", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
        {/* Large kanji */}
        <div className="text-[120px] leading-none text-white/[0.03] font-bold mb-8"
          style={{ fontFamily: "serif", animation: "fadeIn 1.5s ease-out both" }}>{t.kanji}</div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-red-400/20 bg-red-400/10 mb-8"
          style={{ animation: "fadeIn 1s ease-out 0.2s both" }}>
          <Fish className="w-4 h-4 text-red-300" />
          <span className="text-xs font-bold text-red-200 tracking-[0.3em] uppercase">{t.badge}</span>
        </div>

        <h1 className="leading-[0.9] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 100px)", fontFamily: "Georgia, serif", animation: "fadeIn 1s ease-out 0.3s both" }}>
          <span className="text-white font-light">{t.heading}</span><br />
          <span className="font-bold italic" style={{ color: "#f87171" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-500 text-lg max-w-md mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "Georgia, serif", animation: "fadeIn 1s ease-out 0.4s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animation: "fadeIn 0.8s ease-out 0.5s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-medium rounded-sm transition-all hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-600 hover:text-white font-medium border-b border-transparent hover:border-red-400 transition-all">{t.cta2}</button>
        </div>

        <p className="text-[10px] text-gray-700 tracking-[0.2em] uppercase"
          style={{ animation: "fadeIn 0.8s ease-out 0.7s both" }}>{t.info}</p>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
      `}</style>
    </section>
  );
}
