"use client";

/**
 * Topographic Map Hero
 * Energy / environmental company aesthetic.
 * Background: #0c0f0a. Accent: lime-400 / green-300.
 * Nested SVG contour lines (topographic map) + grain texture overlay.
 */

import { ArrowRight, Leaf, Droplets, Sun } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "SUSTAINABLE FUTURE",
    heading: "Powering",
    headingAccent: "A Greener World",
    headingSuffix: "Responsibly",
    sub: "Clean energy solutions at scale. From solar farms to carbon capture, we're building infrastructure for a sustainable tomorrow.",
    cta1: "Partner With Us",
    cta2: "Impact Report",
    stats: [
      { icon: "leaf", value: "Carbon Neutral", label: "Since 2020" },
      { icon: "sun", value: "1.2 GW", label: "Clean Energy" },
      { icon: "droplets", value: "40+", label: "Countries Served" },
    ],
  },
  ar: {
    badge: "مستقبل مستدام",
    heading: "نمدّ",
    headingAccent: "عالماً أكثر خضرة",
    headingSuffix: "بمسؤولية",
    sub: "حلول طاقة نظيفة على نطاق واسع. من مزارع الطاقة الشمسية إلى احتجاز الكربون، نبني بنية تحتية لغد مستدام.",
    cta1: "كن شريكنا",
    cta2: "تقرير الأثر",
    stats: [
      { icon: "leaf", value: "محايد كربونياً", label: "منذ 2020" },
      { icon: "sun", value: "1.2 GW", label: "طاقة نظيفة" },
      { icon: "droplets", value: "+40", label: "دولة" },
    ],
  },
};

const iconMap = { leaf: Leaf, sun: Sun, droplets: Droplets };

/* Topographic contour line paths — organic, non-circular shapes */
const contours = [
  "M55,50 C62,42 70,44 74,50 C78,56 75,65 68,68 C61,71 52,67 50,60 C48,53 50,52 55,50Z",
  "M50,45 C60,35 75,38 82,48 C89,58 84,72 72,76 C60,80 46,74 42,62 C38,50 42,47 50,45Z",
  "M45,40 C58,28 78,32 88,45 C98,58 92,78 76,84 C60,90 40,82 34,66 C28,50 35,42 45,40Z",
  "M40,35 C56,20 82,26 94,42 C106,58 98,84 80,92 C62,100 34,90 26,70 C18,50 28,38 40,35Z",
  "M35,30 C54,12 86,20 100,39 C114,58 104,90 84,100 C64,110 28,98 18,74 C8,50 20,34 35,30Z",
  "M30,25 C52,4 90,14 106,36 C122,58 110,96 88,108 C66,120 22,106 10,78 C-2,50 14,30 30,25Z",
  "M25,20 C50,-4 94,8 112,33 C130,58 116,102 92,116 C68,130 16,114 2,82 C-12,50 8,26 25,20Z",
];

export function Hero10({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0c0f0a" }}>
      {/* Grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          animation: "grainShift 8s steps(10) infinite",
        }} />

      {/* Topographic contour SVG */}
      <svg className="absolute pointer-events-none opacity-70" viewBox="-20 -10 160 130" preserveAspectRatio="xMaxYMid meet"
        style={{ right: "-5%", top: "5%", width: "65%", height: "90%", animation: "contourShift 30s ease-in-out infinite" }}>
        {contours.map((d, i) => (
          <path key={i} d={d}
            fill="none"
            stroke={`rgba(163,230,53,${0.04 + i * 0.015})`}
            strokeWidth={0.4 + i * 0.05}
            style={{ animation: `contourPulse 6s ease-in-out ${i * 0.5}s infinite` }}
          />
        ))}
      </svg>

      {/* Lime glow */}
      <div className="absolute w-[400px] h-[300px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
        style={{ background: "#a3e635", top: "40%", right: "25%" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className={`max-w-2xl ${isAr ? "mr-0 ml-auto text-right" : ""}`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/20 bg-lime-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <Leaf className="w-4 h-4 text-lime-400" />
            <span className="text-xs font-mono font-bold text-lime-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(44px, 8vw, 92px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
            {t.heading}<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #a3e635, #86efac)" }}>{t.headingAccent}</span><br />
            <span className="text-gray-500" style={{ fontSize: "0.6em" }}>{t.headingSuffix}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg"
            style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-12 ${isAr ? "sm:flex-row-reverse" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-600 hover:bg-lime-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(163,230,53,0.2)]">
              {t.cta1}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          {/* Impact stats */}
          <div className={`flex flex-wrap gap-6 ${isAr ? "justify-end" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
            {t.stats.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <div key={i} className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-lime-400/70" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes contourPulse { 0%,100%{opacity:0.7} 50%{opacity:1} }
        @keyframes contourShift { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-15px)} }
        @keyframes grainShift { 0%{transform:translate(0,0)} 10%{transform:translate(-2%,-2%)} 20%{transform:translate(2%,1%)} 30%{transform:translate(-1%,2%)} 40%{transform:translate(1%,-1%)} 50%{transform:translate(-2%,2%)} 60%{transform:translate(2%,-2%)} 70%{transform:translate(-1%,-1%)} 80%{transform:translate(1%,2%)} 90%{transform:translate(2%,1%)} 100%{transform:translate(0,0)} }
      `}</style>
    </section>
  );
}
