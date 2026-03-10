"use client";

/**
 * Luxury Interior Hero
 * Elegant interior room with ambient lighting via CSS gradients.
 * Indoor elegance with furniture silhouettes and warm glow.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Interior Excellence",
    heading: "Luxury",
    headingHighlight: "From Within",
    subheading:
      "Italian marble, bespoke finishes, and smart home technology. Every detail crafted to create an atmosphere of refined living.",
    ctaPrimary: "View Interiors",
    ctaSecondary: "Design Options",
    roomTypes: [
      { name: "Penthouse Suite", area: "280 m²", price: "From $1.8M" },
      { name: "Executive Flat", area: "180 m²", price: "From $920K" },
      { name: "Garden Villa", area: "350 m²", price: "From $2.4M" },
    ],
    features: ["Italian Marble", "Smart Lighting", "Custom Joinery", "Premium Appliances"],
  },
  ar: {
    badge: "تميز داخلي",
    heading: "فخامة",
    headingHighlight: "من الداخل",
    subheading:
      "رخام إيطالي، تشطيبات مخصصة، وتقنية المنزل الذكي. كل تفصيل مصنوع ليخلق أجواء الحياة الراقية.",
    ctaPrimary: "عرض التصاميم الداخلية",
    ctaSecondary: "خيارات التصميم",
    roomTypes: [
      { name: "جناح بنتهاوس", area: "280 م²", price: "من $1.8M" },
      { name: "شقة تنفيذية", area: "180 م²", price: "من $920K" },
      { name: "فيلا حديقة", area: "350 م²", price: "من $2.4M" },
    ],
    features: ["رخام إيطالي", "إضاءة ذكية", "نجارة مخصصة", "أجهزة فاخرة"],
  },
};

export function RealestateInterior({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ambientGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes lampLight {
          0%, 100% { opacity: 0.5; r: 30; }
          50% { opacity: 0.8; r: 35; }
        }
        @keyframes shadowShift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0a06]">
        {/* Warm ambient light */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Interior room SVG */}
          <div className="fade-up max-w-3xl mx-auto mb-10" style={{ animationDelay: "0.6s" }}>
            <div className="relative rounded-2xl border border-amber-500/10 overflow-hidden bg-gradient-to-b from-[#1a150e]/80 to-[#0c0a06]"
              style={{ boxShadow: "inset 0 0 60px rgba(245,158,11,0.03)" }}>
              <svg viewBox="0 0 600 280" className="w-full" preserveAspectRatio="xMidYMid meet">
                {/* Room perspective lines */}
                {/* Ceiling */}
                <polygon points="0,0 600,0 500,50 100,50" fill="rgba(245,158,11,0.015)" stroke="rgba(245,158,11,0.05)" strokeWidth="0.5" />
                {/* Back wall */}
                <rect x="100" y="50" width="400" height="180" fill="rgba(245,158,11,0.01)" stroke="rgba(245,158,11,0.05)" strokeWidth="0.5" />
                {/* Floor */}
                <polygon points="0,280 600,280 500,230 100,230" fill="rgba(245,158,11,0.02)" stroke="rgba(245,158,11,0.04)" strokeWidth="0.5" />
                {/* Left wall */}
                <polygon points="0,0 100,50 100,230 0,280" fill="rgba(245,158,11,0.008)" stroke="rgba(245,158,11,0.04)" strokeWidth="0.5" />
                {/* Right wall */}
                <polygon points="600,0 500,50 500,230 600,280" fill="rgba(245,158,11,0.008)" stroke="rgba(245,158,11,0.04)" strokeWidth="0.5" />

                {/* Floor marble pattern */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <line key={i} x1={100 + i * 80} y1="230" x2={i * 100} y2="280"
                    stroke="rgba(245,158,11,0.02)" strokeWidth="0.3" />
                ))}

                {/* Sofa silhouette */}
                <g style={{ animation: "shadowShift 6s ease-in-out infinite" } as React.CSSProperties}>
                  <rect x="180" y="170" width="160" height="55" rx="8" fill="rgba(120,53,15,0.08)" stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" />
                  <rect x="185" y="155" width="150" height="20" rx="5" fill="rgba(120,53,15,0.06)" />
                  {/* Cushions */}
                  <rect x="195" y="175" width="50" height="40" rx="4" fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.04)" strokeWidth="0.3" />
                  <rect x="255" y="175" width="50" height="40" rx="4" fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.04)" strokeWidth="0.3" />
                </g>

                {/* Coffee table */}
                <rect x="220" y="210" width="80" height="15" rx="2" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.06)" strokeWidth="0.3" />

                {/* Side table + lamp */}
                <rect x="390" y="185" width="30" height="40" rx="2" fill="rgba(120,53,15,0.06)" stroke="rgba(245,158,11,0.05)" strokeWidth="0.3" />
                {/* Lamp */}
                <line x1="405" y1="185" x2="405" y2="140" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
                <polygon points="390,140 420,140 412,120 398,120" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.08)" strokeWidth="0.3" />
                {/* Lamp light */}
                <circle cx="405" cy="130" fill="rgba(245,158,11,0.04)"
                  style={{ animation: "lampLight 4s ease-in-out infinite" } as React.CSSProperties}>
                  <animate attributeName="r" values="30;35;30" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Wall art / window */}
                <rect x="230" y="70" width="140" height="90" rx="2" fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="0.5" />
                <rect x="235" y="75" width="130" height="80" rx="1" fill="rgba(245,158,11,0.01)" />
                {/* Art content - abstract gradient */}
                <linearGradient id="artGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(245,158,11,0.05)" />
                  <stop offset="100%" stopColor="rgba(217,119,6,0.03)" />
                </linearGradient>
                <rect x="235" y="75" width="130" height="80" rx="1" fill="url(#artGrad)" />

                {/* Ambient light from ceiling */}
                <radialGradient id="ceilingLight">
                  <stop offset="0%" stopColor="rgba(245,158,11,0.06)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <ellipse cx="300" cy="50" rx="120" ry="80" fill="url(#ceilingLight)"
                  style={{ animation: "ambientGlow 5s ease-in-out infinite" } as React.CSSProperties} />

                {/* Plant in corner */}
                <rect x="130" y="195" width="15" height="30" rx="2" fill="rgba(120,53,15,0.06)" />
                <ellipse cx="137" cy="190" rx="12" ry="15" fill="rgba(34,197,94,0.06)" />
              </svg>
            </div>
          </div>

          {/* Room type cards */}
          <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            style={{ animationDelay: "0.8s" }}>
            {t.roomTypes.map((room, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-amber-500/10 hover:border-amber-500/20 transition-all cursor-pointer">
                <div className="text-sm font-semibold text-white/60">{room.name}</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-white/20">{room.area}</span>
                  <span className="text-xs font-bold text-amber-400/60">{room.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="fade-up mt-8 flex items-center justify-center gap-6 flex-wrap"
            style={{ animationDelay: "1s" }}>
            {t.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/20">
                <span className="w-1 h-1 rounded-full bg-amber-500/40" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
