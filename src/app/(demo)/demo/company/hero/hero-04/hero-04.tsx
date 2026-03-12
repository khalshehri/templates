"use client";

/**
 * Brutalist Type Hero
 * Raw, oversized brutalist typography with extreme contrast.
 * Background: pure white (#fff) on black (#000) halves. Accent: red (#dc2626).
 * Signature: massive 200px+ type, diagonal split, no-nonsense layout.
 */

import { ArrowRight } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    line1: "NO",
    line2: "LIMITS.",
    sub: "We reject mediocrity. We reject 'good enough.' We build digital products that dominate markets and redefine categories. Full stop.",
    cta: "WORK WITH US",
    tagline: "STRATEGY × DESIGN × ENGINEERING",
    facts: [
      { label: "PROJECTS SHIPPED", value: "847" },
      { label: "TEAM SIZE", value: "200+" },
      { label: "COUNTRIES", value: "32" },
    ],
  },
  ar: {
    line1: "بلا",
    line2: "حدود.",
    sub: "نرفض المتوسط. نرفض «المقبول». نبني منتجات رقمية تهيمن على الأسواق وتعيد تعريف الصناعات. نقطة.",
    cta: "اعمل معنا",
    tagline: "استراتيجية × تصميم × هندسة",
    facts: [
      { label: "مشروع مُنجز", value: "847" },
      { label: "حجم الفريق", value: "+200" },
      { label: "دولة", value: "32" },
    ],
  },
};

export function Hero04({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col bg-black">
      {/* Diagonal white slash */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-white/[0.03] pointer-events-none"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }} />

      {/* Red accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600" style={{ animation: "expandWidth 0.8s cubic-bezier(0.16,1,0.3,1) both" }} />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
          {/* Tagline */}
          <p className="text-[10px] text-gray-600 tracking-[0.4em] uppercase font-mono mb-12"
            style={{ animation: "fadeIn 0.6s ease-out both" }}>{t.tagline}</p>

          {/* Massive type */}
          <div className="mb-12">
            <div className="overflow-hidden" style={{ animation: "revealUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
              <span className="block font-black text-white leading-[0.8] tracking-[-0.06em] uppercase"
                style={{ fontSize: "clamp(80px, 18vw, 220px)" }}>{t.line1}</span>
            </div>
            <div className="overflow-hidden" style={{ animation: "revealUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
              <span className="block font-black leading-[0.8] tracking-[-0.06em] uppercase"
                style={{ fontSize: "clamp(80px, 18vw, 220px)", color: "#dc2626", WebkitTextStroke: "0" }}>
                {t.line2}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div style={{ animation: "fadeIn 0.6s ease-out 0.4s both" }}>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">{t.sub}</p>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-sm tracking-wider uppercase transition-all duration-200">
                {t.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
            </div>

            <div className="flex flex-col justify-end gap-0"
              style={{ animation: "fadeIn 0.6s ease-out 0.5s both" }}>
              {t.facts.map((f, i) => (
                <div key={i} className="flex items-baseline justify-between py-4 border-b border-white/[0.08]">
                  <span className="text-xs text-gray-600 tracking-[0.2em] uppercase font-mono">{f.label}</span>
                  <span className="text-2xl font-black text-white">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes revealUp { from{opacity:0;transform:translateY(100%)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes expandWidth { from{transform:scaleX(0);transform-origin:left} to{transform:scaleX(1);transform-origin:left} }
      `}</style>
    </section>
  );
}
