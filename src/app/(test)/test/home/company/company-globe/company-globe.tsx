"use client";

/**
 * Global Network Hero
 * Spinning wireframe globe with pulsing dots for office locations,
 * connection lines between offices, orbital rings.
 */

import { ArrowRight, Globe } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "GLOBAL PRESENCE",
    heading: ["Connected", "Across", "Continents"],
    sub: "With offices in 30+ countries, we bring local expertise with global scale to every engagement.",
    cta: "Our Locations",
    cta2: "Contact Us",
    locations: ["Riyadh", "Dubai", "London", "New York", "Singapore", "Tokyo"],
    stat1: "30+",
    stat1Label: "Countries",
    stat2: "120+",
    stat2Label: "Offices",
  },
  ar: {
    badge: "حضور عالمي",
    heading: ["متصلون", "عبر", "القارات"],
    sub: "مع مكاتب في أكثر من 30 دولة، نقدم خبرة محلية بنطاق عالمي في كل مشروع.",
    cta: "مواقعنا",
    cta2: "تواصل معنا",
    locations: ["الرياض", "دبي", "لندن", "نيويورك", "سنغافورة", "طوكيو"],
    stat1: "+30",
    stat1Label: "دولة",
    stat2: "+120",
    stat2Label: "مكتب",
  },
};

// Office location dots on the globe (angle positions for the circular wireframe)
const OFFICE_DOTS = [
  { angle: 25, radius: 42, label: 0 },  // Riyadh
  { angle: 35, radius: 40, label: 1 },  // Dubai
  { angle: 130, radius: 44, label: 2 }, // London
  { angle: 200, radius: 38, label: 3 }, // New York
  { angle: 290, radius: 43, label: 4 }, // Singapore
  { angle: 320, radius: 41, label: 5 }, // Tokyo
];

export function CompanyGlobe({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes globeSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes globeSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.8); opacity: 1; }
        }
        @keyframes connectionPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        @keyframes orbitalRing {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to { transform: rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#050d1a" }}>
        {/* Deep space background */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(15,35,65,0.5) 0%, #050d1a 70%)",
        }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
          {Array.from({ length: 30 }, (_, i) => (
            <div key={`h${i}`} className="absolute left-0 right-0 bg-blue-300"
              style={{ top: `${(i + 1) * 3.33}%`, height: "0.5px" }} />
          ))}
          {Array.from({ length: 30 }, (_, i) => (
            <div key={`v${i}`} className="absolute top-0 bottom-0 bg-blue-300"
              style={{ left: `${(i + 1) * 3.33}%`, width: "0.5px" }} />
          ))}
        </div>

        {/* Globe container */}
        <div className="absolute top-1/2 -translate-y-1/2" style={{ [isAr ? "left" : "right"]: "8%", width: "500px", height: "500px" }}>
          {/* Glow behind globe */}
          <div className="absolute inset-0 rounded-full" style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%)",
            animation: "glowPulse 4s ease-in-out infinite",
          }} />

          {/* Wireframe globe - horizontal circles */}
          <div className="absolute inset-0" style={{ animation: "globeSpin 30s linear infinite" }}>
            {Array.from({ length: 8 }, (_, i) => {
              const scale = Math.cos((i * Math.PI) / 8);
              return (
                <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/[0.08]"
                  style={{
                    width: `${Math.abs(scale) * 90}%`,
                    height: "90%",
                    transform: `translate(-50%, -50%) rotateY(${i * 22.5}deg)`,
                  }} />
              );
            })}
            {/* Latitude lines */}
            {Array.from({ length: 6 }, (_, i) => {
              const yPos = 15 + i * 14;
              const width = Math.sin(((i + 1) * Math.PI) / 7) * 90;
              return (
                <div key={`lat${i}`} className="absolute left-1/2 -translate-x-1/2 rounded-full border border-blue-400/[0.06]"
                  style={{ top: `${yPos}%`, width: `${width}%`, height: "1px" }} />
              );
            })}
          </div>

          {/* Orbital ring 1 */}
          <div className="absolute inset-[-15%] rounded-full border border-blue-400/[0.06]"
            style={{ animation: "globeSpin 20s linear infinite", transform: "rotateX(70deg)" }} />
          {/* Orbital ring 2 */}
          <div className="absolute inset-[-8%] rounded-full border border-cyan-400/[0.08]"
            style={{ animation: "globeSpinReverse 25s linear infinite", transform: "rotateX(60deg) rotateZ(30deg)" }} />

          {/* Office location dots */}
          {OFFICE_DOTS.map((dot, i) => {
            const rad = (dot.angle * Math.PI) / 180;
            const x = 50 + dot.radius * Math.cos(rad);
            const y = 50 + dot.radius * Math.sin(rad);
            return (
              <div key={i} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>
                {/* Ripple */}
                <div className="absolute inset-0 w-3 h-3 -translate-x-[4px] -translate-y-[4px] rounded-full bg-cyan-400/30"
                  style={{ animation: `ripple 3s ease-out ${i * 0.5}s infinite` }} />
                {/* Dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  style={{ animation: `dotPulse 3s ease-in-out ${i * 0.4}s infinite` }} />
                {/* Label */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-cyan-300/50 font-medium">
                  {t.locations[dot.label]}
                </div>
              </div>
            );
          })}

          {/* Connection lines between dots (SVG) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {[[0, 1], [1, 2], [2, 3], [4, 5], [0, 4], [3, 2]].map(([a, b], i) => {
              const dA = OFFICE_DOTS[a];
              const dB = OFFICE_DOTS[b];
              const radA = (dA.angle * Math.PI) / 180;
              const radB = (dB.angle * Math.PI) / 180;
              return (
                <line key={i}
                  x1={50 + dA.radius * Math.cos(radA)} y1={50 + dA.radius * Math.sin(radA)}
                  x2={50 + dB.radius * Math.cos(radB)} y2={50 + dB.radius * Math.sin(radB)}
                  stroke="rgba(34,211,238,0.15)" strokeWidth="0.3"
                  style={{ animation: `connectionPulse 4s ease-in-out ${i * 0.7}s infinite` }} />
              );
            })}
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`max-w-xl ${isAr ? "mr-auto text-right" : ""}`}>
            <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.03] mb-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.3s" }}>
              <Globe size={14} className="text-cyan-400/70" />
              <span className="text-sm font-medium text-cyan-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.45s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                {t.heading[1]}
              </span>
              <span className="block text-white/80">{t.heading[2]}</span>
            </h1>

            <p className="fade-up mt-6 text-lg text-cyan-100/25 leading-relaxed max-w-lg"
              style={{ animationDelay: "0.6s" }}>{t.sub}</p>

            <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.7s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #0e4a6e, #0891b2, #22d3ee)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-cyan-200/30 border border-cyan-300/10 rounded-lg hover:bg-cyan-300/[0.04] transition-all">
                {t.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className={`fade-up mt-12 flex gap-12 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.9s" }}>
              <div>
                <div className="text-4xl font-black text-cyan-300/80">{t.stat1}</div>
                <div className="text-xs text-cyan-400/25 mt-1 uppercase tracking-wider">{t.stat1Label}</div>
              </div>
              <div>
                <div className="text-4xl font-black text-cyan-300/80">{t.stat2}</div>
                <div className="text-xs text-cyan-400/25 mt-1 uppercase tracking-wider">{t.stat2Label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
