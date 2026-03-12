"use client";

/**
 * Mosaic Grid Hero
 * Geometric mosaic tiles that animate in.
 * Background: #080808. Accent: emerald #10b981.
 */

import { ArrowRight, LayoutGrid } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FULL-SERVICE AGENCY",
    heading: "The Whole",
    headingAccent: "Picture",
    sub: "We don't do fragments. Our full-service approach connects every piece of your brand puzzle into a cohesive, powerful whole.",
    cta1: "See It All",
    cta2: "Services",
    offerings: [
      { title: "Brand Identity", count: "50+" },
      { title: "Web Platforms", count: "120+" },
      { title: "Campaigns", count: "300+" },
      { title: "Products", count: "40+" },
    ],
  },
  ar: {
    badge: "وكالة خدمات متكاملة",
    heading: "الصورة",
    headingAccent: "الكاملة",
    sub: "لا نعمل بالقطعة. نهجنا الشامل يربط كل جزء من علامتك في كل متماسك وقوي.",
    cta1: "اطلع على الكل",
    cta2: "الخدمات",
    offerings: [
      { title: "هوية العلامة", count: "50+" },
      { title: "منصات ويب", count: "120+" },
      { title: "حملات", count: "300+" },
      { title: "منتجات", count: "40+" },
    ],
  },
};

const TILES = Array.from({ length: 24 }).map((_, i) => ({
  col: i % 6, row: Math.floor(i / 6),
  opacity: 0.02 + Math.random() * 0.04,
  delay: i * 0.05,
}));

export function Hero10({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#080808" }}>
      {/* Mosaic grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-8 pointer-events-none opacity-60">
        {TILES.map((tile, i) => (
          <div key={i} className="rounded-sm"
            style={{
              background: `rgba(16,185,129,${tile.opacity})`,
              animation: `tileIn 0.5s ease-out ${tile.delay}s both`,
            }} />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#10b981", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <LayoutGrid className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-emerald-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 11vw, 120px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#10b981" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.offerings.map((o, i) => (
            <div key={i} className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03]">
              <span className="text-2xl font-bold text-emerald-400 font-mono">{o.count}</span>
              <p className="text-xs text-gray-500 mt-1">{o.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tileIn { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </section>
  );
}
