"use client";

/**
 * Spice Market Hero
 * Middle Eastern spice souk aesthetic.
 * Background: #0a0604. Accent: saffron #d97706.
 */

import { ArrowRight, Sparkles } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "MIDDLE EASTERN KITCHEN",
    heading: "A Thousand",
    headingAccent: "Spices",
    sub: "Recipes passed down through generations, spices sourced from ancient trade routes. Every dish tells a story of heritage and warmth.",
    cta1: "Experience It",
    cta2: "Our Story",
    spices: ["Saffron", "Sumac", "Za'atar", "Cardamom", "Turmeric"],
  },
  ar: {
    badge: "المطبخ الشرقي",
    heading: "ألف",
    headingAccent: "توابل",
    sub: "وصفات توارثتها الأجيال، توابل من طرق التجارة القديمة. كل طبق يحكي قصة تراث ودفء.",
    cta1: "عِشها",
    cta2: "قصتنا",
    spices: ["زعفران", "سماق", "زعتر", "هيل", "كركم"],
  },
};

export function Hero06({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0a0604" }}>
      {/* Warm spice glow */}
      <div className="absolute w-[500px] h-[400px] rounded-full opacity-12 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #d97706, #92400e, transparent)", top: "30%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Floating spice particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: 2 + (i % 3), height: 2 + (i % 3),
            background: ["#d97706", "#f59e0b", "#dc2626"][i % 3],
            left: `${10 + (i * 5.5) % 80}%`, top: `${10 + (i * 7) % 80}%`,
            opacity: 0.15,
            animation: `spiceFloat ${4 + i % 3}s ease-in-out ${i * 0.3}s infinite alternate`,
          }} />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-600/20 bg-amber-600/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-amber-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="leading-[0.85] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 120px)", fontFamily: "Georgia, serif", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <span className="text-white font-light">{t.heading}</span><br />
          <span className="font-bold italic bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #fbbf24, #d97706, #dc2626)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "Georgia, serif", animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(217,119,6,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.spices.map((s, i) => (
            <span key={i} className="px-4 py-2 text-sm text-amber-400/60 border border-amber-600/10 rounded-full bg-amber-600/[0.03] hover:border-amber-600/30 hover:text-amber-300 transition-all">{s}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spiceFloat { from{transform:translateY(0)} to{transform:translateY(-10px)} }
      `}</style>
    </section>
  );
}
