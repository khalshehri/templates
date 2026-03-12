"use client";

/**
 * Minimal Canvas Hero
 * Ultra-minimal white-on-black with subtle motion.
 * Background: #000000. Accent: pure white.
 */

import { ArrowRight, Minus } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "LESS IS MORE",
    heading: "Subtract.",
    headingAccent: "Until Perfect.",
    sub: "The most powerful designs are the simplest. We strip away everything unnecessary until only the essential remains.",
    cta1: "Begin Subtraction",
    cta2: "Philosophy",
    principles: ["Clarity", "Purpose", "Restraint", "Impact"],
  },
  ar: {
    badge: "الأقل هو الأكثر",
    heading: "احذف.",
    headingAccent: "حتى الكمال.",
    sub: "أقوى التصاميم هي الأبسط. نزيل كل ما هو غير ضروري حتى يبقى الجوهر فقط.",
    cta1: "ابدأ الاختزال",
    cta2: "الفلسفة",
    principles: ["وضوح", "هدف", "ضبط", "تأثير"],
  },
};

export function Hero09({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#000000" }}>
      {/* Single subtle line */}
      <div className="absolute w-px h-full left-1/2 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)" }} />
      <div className="absolute h-px w-full top-1/2 pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.03), transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-12"
          style={{ animation: "fadeIn 1s ease-out both" }}>
          <Minus className="w-4 h-4 text-gray-600" />
          <span className="text-[10px] font-mono text-gray-600 tracking-[0.3em] uppercase">{t.badge}</span>
          <Minus className="w-4 h-4 text-gray-600" />
        </div>

        <h1 className="text-white leading-[0.85] tracking-[-0.05em] mb-8"
          style={{ fontSize: "clamp(52px, 12vw, 140px)", fontWeight: 200, animation: "fadeIn 1s ease-out 0.2s both" }}>
          {t.heading}<br />
          <span className="font-bold">{t.headingAccent}</span>
        </h1>

        <div className="w-16 h-px mx-auto mb-8 bg-white/20"
          style={{ animation: "expandCenter 0.8s ease-out 0.4s both" }} />

        <p className="text-gray-500 text-lg max-w-md mx-auto mb-12 leading-relaxed"
          style={{ animation: "fadeIn 1s ease-out 0.5s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          style={{ animation: "fadeIn 0.8s ease-out 0.6s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-none hover:bg-gray-200 transition-all">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-600 hover:text-white font-medium border-b border-transparent hover:border-white transition-all">{t.cta2}</button>
        </div>

        <div className="flex items-center justify-center gap-12"
          style={{ animation: "fadeIn 0.8s ease-out 0.8s both" }}>
          {t.principles.map((p, i) => (
            <span key={i} className="text-xs text-gray-700 tracking-[0.2em] uppercase font-mono">{p}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes expandCenter { from{width:0} to{width:64px} }
      `}</style>
    </section>
  );
}
