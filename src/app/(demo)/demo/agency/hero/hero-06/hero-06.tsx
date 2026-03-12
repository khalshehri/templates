"use client";

/**
 * Collage Layers Hero
 * Layered collage / cutout paper aesthetic.
 * Background: #0a0a0a. Accent: orange #f97316.
 */

import { ArrowRight, Layers } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "MULTI-DISCIPLINARY",
    heading: "Layer by",
    headingAccent: "Layer",
    sub: "Great work isn't one-dimensional. We layer strategy, design, and technology into cohesive brand experiences that reveal depth at every turn.",
    cta1: "Explore Layers",
    cta2: "Our Approach",
    capabilities: ["Brand Strategy", "UI/UX Design", "Development", "Content", "Analytics", "Growth"],
  },
  ar: {
    badge: "متعدد التخصصات",
    heading: "طبقة",
    headingAccent: "فوق طبقة",
    sub: "العمل الرائع ليس أحادي البعد. نبني طبقات من الاستراتيجية والتصميم والتقنية في تجارب علامات متماسكة.",
    cta1: "استكشف الطبقات",
    cta2: "نهجنا",
    capabilities: ["استراتيجية العلامة", "تصميم UI/UX", "تطوير", "محتوى", "تحليلات", "نمو"],
  },
};

export function Hero06({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0a0a0a" }}>
      {/* Floating paper layers */}
      {[
        { w: 300, h: 200, x: "10%", y: "15%", rot: -8, color: "rgba(249,115,22,0.04)", delay: 0 },
        { w: 250, h: 180, x: "65%", y: "10%", rot: 5, color: "rgba(168,85,247,0.03)", delay: 0.2 },
        { w: 280, h: 160, x: "20%", y: "60%", rot: 3, color: "rgba(249,115,22,0.03)", delay: 0.4 },
        { w: 220, h: 220, x: "70%", y: "55%", rot: -4, color: "rgba(234,179,8,0.03)", delay: 0.6 },
      ].map((l, i) => (
        <div key={i} className="absolute rounded-lg pointer-events-none border border-white/[0.02]"
          style={{
            width: l.w, height: l.h, left: l.x, top: l.y,
            background: l.color, transform: `rotate(${l.rot}deg)`,
            animation: `layerFloat 6s ease-in-out ${l.delay}s infinite alternate`,
          }} />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Layers className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold text-orange-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 11vw, 120px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #f97316, #eab308)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.capabilities.map((c, i) => (
            <span key={i} className="px-4 py-2 text-sm text-orange-300/60 border border-orange-500/10 rounded-lg bg-orange-500/[0.03] hover:border-orange-500/25 hover:text-orange-200 transition-all">{c}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes layerFloat { from{transform:rotate(var(--r)) translateY(0)} to{transform:rotate(var(--r)) translateY(-15px)} }
      `}</style>
    </section>
  );
}
