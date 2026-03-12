"use client";

/**
 * Ink Bleed Hero
 * Japanese sumi-e ink wash aesthetic with bleeding ink spots.
 * Background: off-white-on-black (#080808). Accent: pure white + red seal (#dc2626).
 * Signature: ink blot SVG shapes that expand on load, zen minimal layout.
 */

import { ArrowRight } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    seal: "道",
    heading: "The Way",
    headingAccent: "Forward",
    sub: "In the philosophy of continuous improvement, every project is a brushstroke. We compose digital masterpieces with deliberate precision and quiet confidence.",
    cta1: "Begin the Journey",
    cta2: "Philosophy",
    principles: [
      { kanji: "精", title: "Precision", desc: "Every detail matters" },
      { kanji: "和", title: "Harmony", desc: "Systems in balance" },
      { kanji: "道", title: "The Way", desc: "Process as art" },
    ],
    footer: "Est. 2008 · Tokyo · London · Riyadh · New York",
  },
  ar: {
    seal: "道",
    heading: "الطريق",
    headingAccent: "إلى الأمام",
    sub: "في فلسفة التحسين المستمر، كل مشروع ضربة فرشاة. نؤلّف روائع رقمية بدقة متعمّدة وثقة هادئة.",
    cta1: "ابدأ الرحلة",
    cta2: "الفلسفة",
    principles: [
      { kanji: "精", title: "الدقة", desc: "كل تفصيل مهم" },
      { kanji: "和", title: "الانسجام", desc: "أنظمة متوازنة" },
      { kanji: "道", title: "الطريق", desc: "العملية كفن" },
    ],
    footer: "تأسست 2008 · طوكيو · لندن · الرياض · نيويورك",
  },
};

// Ink blot shapes (organic SVG blobs)
const BLOTS = [
  { cx: 75, cy: 25, r: 80, opacity: 0.04, delay: 0 },
  { cx: 20, cy: 70, r: 60, opacity: 0.03, delay: 0.3 },
  { cx: 55, cy: 55, r: 45, opacity: 0.025, delay: 0.6 },
  { cx: 85, cy: 75, r: 35, opacity: 0.02, delay: 0.9 },
];

export function Hero09({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#080808" }}>
      {/* Ink blots */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {BLOTS.map((b, i) => (
          <circle key={i} cx={b.cx} cy={b.cy} fill="white" opacity={b.opacity}>
            <animate attributeName="r" from="0" to={b.r} dur="2s" begin={`${b.delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
          </circle>
        ))}
      </svg>

      {/* Subtle paper texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Red seal stamp */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm border-2 border-red-600 mb-12"
          style={{ animation: "stampIn 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
          <span className="text-2xl text-red-600 font-bold" style={{ fontFamily: "serif" }}>{t.seal}</span>
        </div>

        {/* Headline — large, light weight */}
        <h1 className="text-white leading-[0.9] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 300, animation: "fadeIn 1s ease-out 0.3s both" }}>
          {t.heading}<br />
          <span className="font-bold italic">{t.headingAccent}</span>
        </h1>

        {/* Ink brush divider */}
        <div className="w-24 h-[2px] mx-auto mb-8 bg-white/20 rounded-full"
          style={{ animation: "expandCenter 0.8s ease-out 0.5s both" }} />

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", animation: "fadeIn 1s ease-out 0.6s both" }}>
          {t.sub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          style={{ animation: "fadeIn 0.8s ease-out 0.8s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-none transition-all duration-200 hover:bg-gray-200">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-500 hover:text-white font-medium border-b border-transparent hover:border-white transition-all duration-200">
            {t.cta2}
          </button>
        </div>

        {/* Principles */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          {t.principles.map((p, i) => (
            <div key={i} className="text-center" style={{ animation: `fadeIn 0.6s ease-out ${1 + i * 0.15}s both` }}>
              <span className="text-4xl text-white/10 block mb-2" style={{ fontFamily: "serif" }}>{p.kanji}</span>
              <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-700 tracking-[0.15em] uppercase"
          style={{ animation: "fadeIn 0.8s ease-out 1.3s both" }}>{t.footer}</p>
      </div>

      <style>{`
        @keyframes stampIn { from{opacity:0;transform:scale(2) rotate(-5deg)} to{opacity:1;transform:scale(1) rotate(0deg)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes expandCenter { from{width:0} to{width:96px} }
      `}</style>
    </section>
  );
}
