"use client";

/**
 * Wine Cellar Hero
 * Luxurious wine bar / cellar aesthetic.
 * Background: #0a0408. Accent: burgundy #881337.
 */

import { ArrowRight, Wine } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "WINE & DINE",
    heading: "Cellar",
    headingAccent: "Selection",
    sub: "500+ labels from the world's finest vineyards. Our sommelier curates the perfect pairing for every course and every occasion.",
    cta1: "Book an Evening",
    cta2: "Wine List",
    collection: [
      { region: "Bordeaux", count: "120 labels" },
      { region: "Tuscany", count: "85 labels" },
      { region: "Napa Valley", count: "95 labels" },
    ],
  },
  ar: {
    badge: "نبيذ وعشاء",
    heading: "اختيار",
    headingAccent: "القبو",
    sub: "500+ علامة من أفضل مزارع الكروم في العالم. ساقينا يختار الإقران المثالي لكل طبق ومناسبة.",
    cta1: "احجز أمسية",
    cta2: "قائمة النبيذ",
    collection: [
      { region: "بوردو", count: "120 علامة" },
      { region: "توسكانا", count: "85 علامة" },
      { region: "وادي نابا", count: "95 علامة" },
    ],
  },
};

export function Hero07({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0408" }}>
      {/* Burgundy glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#881337", top: "30%", right: "20%" }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,4,8,0.8) 100%)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-900/30 bg-rose-900/10 mb-8">
              <Wine className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-bold text-rose-300 tracking-[0.2em] uppercase">{t.badge}</span>
            </div>

            <h1 className="leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(48px, 9vw, 96px)", fontFamily: "Georgia, serif" }}>
              <span className="text-white font-light">{t.heading}</span><br />
              <span className="font-bold italic" style={{ color: "#be185d" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(136,19,55,0.3)]"
                style={{ background: "linear-gradient(135deg, #881337, #be185d)" }}>
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-7 py-3.5 text-gray-500 hover:text-white font-medium rounded-lg border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          <div className="space-y-4" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            {t.collection.map((c, i) => (
              <div key={i} className="p-5 rounded-xl border border-rose-900/15 bg-rose-900/[0.04] flex items-center justify-between"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <span className="text-white font-medium">{c.region}</span>
                <span className="text-sm text-rose-400/70 font-mono">{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
