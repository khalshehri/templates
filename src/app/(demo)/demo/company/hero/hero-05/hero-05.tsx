"use client";

/**
 * Crystal Facets Hero
 * Faceted crystal/diamond geometric reflections with ice blue palette.
 * Background: deep ice (#060a10). Accent: ice blue (#38bdf8).
 * Signature: CSS geometric diamond shapes with refracted light shimmer.
 */

import { ArrowRight, Diamond } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "Precision Crafted",
    heading: "Cut with",
    headingAccent: "Precision",
    sub: "Like a master jeweler reveals brilliance through perfect cuts, we extract maximum value from every facet of your digital presence.",
    cta1: "See Our Craft",
    cta2: "Case Studies",
    pillars: [
      { title: "Clarity", desc: "Crystal-clear strategy that illuminates the path forward", icon: "◇" },
      { title: "Precision", desc: "Every decision backed by data, every pixel intentional", icon: "◆" },
      { title: "Brilliance", desc: "Solutions that shine brighter than the competition", icon: "◈" },
    ],
    trust: "Trusted by Fortune 100 · 340% avg. ROI · Zero failed launches",
  },
  ar: {
    badge: "صناعة دقيقة",
    heading: "مصقول",
    headingAccent: "بدقة",
    sub: "كما يكشف الجواهري البارع عن الألق من خلال القطع المثالي، نستخرج أقصى قيمة من كل جانب من حضورك الرقمي.",
    cta1: "شاهد حرفتنا",
    cta2: "دراسات حالة",
    pillars: [
      { title: "وضوح", desc: "استراتيجية واضحة كالكريستال تنير الطريق", icon: "◇" },
      { title: "دقة", desc: "كل قرار مدعوم بالبيانات، كل بكسل مقصود", icon: "◆" },
      { title: "تألق", desc: "حلول تتألق أكثر من المنافسة", icon: "◈" },
    ],
    trust: "موثوق من Fortune 100 · 340% عائد استثمار · صفر إطلاقات فاشلة",
  },
};

// Geometric crystal facets (positioned diamonds)
const FACETS = Array.from({ length: 8 }, (_, i) => ({
  x: ((i * 2371 + 431) % 80) + 10,
  y: ((i * 1879 + 937) % 70) + 15,
  size: 30 + ((i * 1153) % 40),
  rotation: ((i * 2099) % 360),
  opacity: 0.02 + ((i * 547) % 3) / 100,
  delay: i * 0.8,
}));

export function Hero05({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060a10" }}>
      {/* Ice blue glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)", top: "-10%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Crystal facets */}
      {FACETS.map((f, i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{
            left: `${f.x}%`, top: `${f.y}%`, width: `${f.size}px`, height: `${f.size}px`,
            transform: `rotate(${f.rotation}deg)`, opacity: f.opacity,
            background: "linear-gradient(135deg, rgba(56,189,248,0.3), rgba(56,189,248,0.05), rgba(255,255,255,0.1))",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animation: `crystalShimmer 4s ease-in-out ${f.delay}s infinite`,
          }} />
      ))}

      {/* Refracted light lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(56,189,248,0.3) 40px, rgba(56,189,248,0.3) 41px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/20 bg-sky-400/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Diamond className="w-4 h-4 text-sky-400" />
          <span className="text-sm font-medium text-sky-300">{t.badge}</span>
        </div>

        <h1 className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #38bdf8, #e0f2fe, #38bdf8)", backgroundSize: "200% 200%", animation: "gradShift 3s ease-in-out infinite" }}>
            {t.headingAccent}
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_50px_rgba(56,189,248,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-200">{t.cta2}</button>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {t.pillars.map((p, i) => (
            <div key={i} className="rounded-2xl border border-sky-500/10 bg-sky-500/[0.03] backdrop-blur p-6 text-center hover:border-sky-500/25 transition-all duration-300"
              style={{ animation: `fadeInUp 0.5s ease-out ${0.4 + i * 0.1}s both` }}>
              <span className="text-2xl mb-3 block text-sky-400">{p.icon}</span>
              <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-600 tracking-wide" style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}>{t.trust}</p>
      </div>

      <style>{`
        @keyframes crystalShimmer { 0%,100%{opacity:0.02;transform:rotate(var(--r)) scale(1)} 50%{opacity:0.06;transform:rotate(var(--r)) scale(1.05)} }
        @keyframes gradShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
