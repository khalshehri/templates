"use client";

/**
 * Stained Glass Hero
 * Geometric mosaic inspired by cathedral stained glass windows.
 * Background: warm dark (#0a0806). Accent: warm amber (#f59e0b) + multicolor warm.
 * Signature: CSS polygon mosaic tiles with warm color fills and light glow.
 */

import { ArrowRight, Church } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "Legacy of Excellence",
    heading: "Crafted to",
    headingAccent: "Endure",
    sub: "Like the great cathedrals that have stood for centuries, we build digital foundations designed to outlast trends, technologies, and time itself.",
    cta1: "Build Your Legacy",
    cta2: "Our Heritage",
    timeline: [
      { year: "2008", event: "Founded with a vision to build lasting digital works" },
      { year: "2014", event: "Expanded to 12 countries, 200+ enterprise clients" },
      { year: "2020", event: "Launched AI division, tripled team capacity" },
      { year: "2025", event: "Serving Fortune 500 across 40+ countries" },
    ],
  },
  ar: {
    badge: "إرث التميّز",
    heading: "مصنوع",
    headingAccent: "ليدوم",
    sub: "كالكاتدرائيات العظيمة التي صمدت لقرون، نبني أسساً رقمية مصممة لتتخطى الاتجاهات والتقنيات والزمن ذاته.",
    cta1: "ابنِ إرثك",
    cta2: "تراثنا",
    timeline: [
      { year: "2008", event: "تأسسنا برؤية لبناء أعمال رقمية تدوم" },
      { year: "2014", event: "توسعنا إلى 12 دولة وأكثر من 200 عميل" },
      { year: "2020", event: "أطلقنا قسم الذكاء الاصطناعي وضاعفنا الفريق" },
      { year: "2025", event: "نخدم Fortune 500 في أكثر من 40 دولة" },
    ],
  },
};

// Stained glass mosaic tiles
const TILES = [
  { points: "0,0 15,0 12,18 0,15", fill: "rgba(245,158,11,0.08)", x: 5, y: 10 },
  { points: "0,0 20,0 18,16 4,20", fill: "rgba(239,68,68,0.06)", x: 20, y: 5 },
  { points: "0,0 14,0 16,22 2,18", fill: "rgba(168,85,247,0.05)", x: 70, y: 8 },
  { points: "0,0 18,0 20,14 0,12", fill: "rgba(245,158,11,0.07)", x: 85, y: 20 },
  { points: "0,0 12,0 14,24 0,20", fill: "rgba(234,179,8,0.06)", x: 10, y: 65 },
  { points: "0,0 22,0 20,18 2,16", fill: "rgba(251,146,60,0.05)", x: 60, y: 70 },
  { points: "0,0 16,0 18,20 0,22", fill: "rgba(245,158,11,0.04)", x: 40, y: 15 },
  { points: "0,0 24,0 22,12 0,14", fill: "rgba(220,38,38,0.04)", x: 80, y: 60 },
  { points: "0,0 14,0 12,16 2,18", fill: "rgba(245,158,11,0.06)", x: 50, y: 45 },
  { points: "0,0 18,0 16,20 0,18", fill: "rgba(168,85,247,0.04)", x: 30, y: 80 },
];

export function Hero07({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0806" }}>
      {/* Warm cathedral glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, #d97706 30%, transparent 70%)", top: "-15%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Stained glass tiles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {TILES.map((tile, i) => (
          <g key={i} transform={`translate(${tile.x},${tile.y})`}>
            <polygon points={tile.points} fill={tile.fill} stroke="rgba(245,158,11,0.06)" strokeWidth="0.15">
              <animate attributeName="opacity" values="0.6;1;0.6" dur={`${4 + (i % 3)}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </polygon>
          </g>
        ))}
        {/* Lead lines (dividers between tiles) */}
        {[20, 40, 60, 80].map((x, i) => (
          <line key={`v${i}`} x1={x} y1="0" x2={x + 5} y2="100" stroke="rgba(245,158,11,0.03)" strokeWidth="0.2" />
        ))}
        {[25, 50, 75].map((y, i) => (
          <line key={`h${i}`} x1="0" y1={y} x2="100" y2={y + 3} stroke="rgba(245,158,11,0.03)" strokeWidth="0.2" />
        ))}
      </svg>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <div style={{ animation: "fadeInUp 0.7s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 mb-8">
              <Church className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-medium text-amber-300 tracking-wide">{t.badge}</span>
            </div>

            <h1 className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 96px)", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {t.heading}<br />
              <span className="italic" style={{ color: "#f59e0b", textShadow: "0 0 60px rgba(245,158,11,0.2)" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-7 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-7 py-3.5 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-200">{t.cta2}</button>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-0" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
            {t.timeline.map((item, i) => (
              <div key={i} className="flex gap-4 pb-6 relative"
                style={{ animation: `fadeInUp 0.5s ease-out ${0.4 + i * 0.12}s both` }}>
                {i < t.timeline.length - 1 && <div className="absolute left-[11px] top-6 w-px h-full bg-amber-500/15" />}
                <div className="w-6 h-6 rounded-full border-2 border-amber-500/40 bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 font-mono">{item.year}</span>
                  <p className="text-sm text-gray-400 mt-1">{item.event}</p>
                </div>
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
