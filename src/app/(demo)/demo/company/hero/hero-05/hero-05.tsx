"use client";

/**
 * Horizon Line Hero
 * Architecture / engineering firm aesthetic.
 * Background: #0a0a0f. Accent: rose-400 / pink-300.
 * Glowing horizon line + perspective grid below + floating project cards.
 */

import { ArrowRight, Compass } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "DESIGN & ENGINEERING",
    heading: "Shaping",
    headingAccent: "Horizons",
    headingSuffix: "With Precision",
    sub: "Award-winning design meets structural excellence. We create spaces that inspire, endure, and define skylines across the region.",
    cta1: "View Projects",
    cta2: "Our Process",
    projects: [
      { name: "Al Noor Tower", location: "Riyadh", year: "2025" },
      { name: "Marina Bay Complex", location: "Jeddah", year: "2024" },
      { name: "Desert Oasis Resort", location: "NEOM", year: "2026" },
    ],
  },
  ar: {
    badge: "التصميم والهندسة",
    heading: "نرسم",
    headingAccent: "الآفاق",
    headingSuffix: "بدقة متناهية",
    sub: "تصميم حائز على جوائز يلتقي بالتميز الهندسي. نبتكر مساحات تُلهم وتدوم وتحدد أفق المنطقة.",
    cta1: "عرض المشاريع",
    cta2: "منهجيتنا",
    projects: [
      { name: "برج النور", location: "الرياض", year: "2025" },
      { name: "مجمع مارينا باي", location: "جدة", year: "2024" },
      { name: "منتجع واحة الصحراء", location: "نيوم", year: "2026" },
    ],
  },
};

export function Hero05({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0a0f" }}>
      {/* Perspective grid below horizon */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] overflow-hidden pointer-events-none"
        style={{ perspective: "500px" }}>
        <div className="absolute inset-0"
          style={{
            transform: "rotateX(55deg)",
            transformOrigin: "top center",
            backgroundImage: `
              linear-gradient(to right, rgba(251,113,133,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(251,113,133,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridShift 20s linear infinite",
          }} />
      </div>

      {/* Horizon line */}
      <div className="absolute w-full pointer-events-none" style={{ top: "55%" }}>
        <div className="h-[1px] w-full"
          style={{
            background: "linear-gradient(90deg, transparent 5%, rgba(251,113,133,0.3) 30%, rgba(251,113,133,0.5) 50%, rgba(251,113,133,0.3) 70%, transparent 95%)",
            animation: "lineExtend 1.5s ease-out both",
          }} />
        <div className="h-[40px] w-full"
          style={{
            background: "linear-gradient(to bottom, rgba(251,113,133,0.08), transparent)",
            animation: "horizonPulse 4s ease-in-out infinite",
          }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className={`grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start ${isAr ? "" : ""}`}>
          {/* Text content — above horizon */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`} style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <Compass className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-mono font-bold text-rose-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 92px)" }}>
              {t.heading}<br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #fb7185, #f9a8d4)" }}>{t.headingAccent}</span><br />
              <span className="text-gray-500" style={{ fontSize: "0.6em" }}>{t.headingSuffix}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">{t.sub}</p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(251,113,133,0.25)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Floating project cards */}
          <div className={`space-y-3 pt-16 ${isAr ? "lg:order-1" : ""}`}>
            {t.projects.map((p, i) => (
              <div key={i}
                className="px-5 py-4 rounded-xl border border-rose-500/10 bg-rose-500/[0.03] backdrop-blur-sm"
                style={{ animation: `cardFloat 3s ease-in-out ${i * 0.5}s infinite, fadeUp 0.5s ease-out ${0.4 + i * 0.15}s both` }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.location}</div>
                  </div>
                  <span className="text-xs font-mono text-rose-400/50">{p.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes horizonPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes lineExtend { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes cardFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes gridShift { from{background-position:0 0} to{background-position:0 60px} }
      `}</style>
    </section>
  );
}
