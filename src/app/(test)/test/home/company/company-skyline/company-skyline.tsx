"use client";

/**
 * City Skyline Hero
 * Layered city skyline silhouettes with parallax depth layers,
 * glass reflection at bottom, atmospheric gradient sky, floating particles.
 */

import { ArrowRight, Building2 } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "SINCE 2005",
    heading: ["Building", "The Future", "Together"],
    sub: "We deliver enterprise solutions that transform businesses and shape skylines across the globe.",
    cta: "Get Started",
    cta2: "Learn More",
    stats: [
      { value: "200+", label: "Projects Delivered" },
      { value: "50+", label: "Cities Worldwide" },
      { value: "18", label: "Years of Excellence" },
    ],
  },
  ar: {
    badge: "منذ ٢٠٠٥",
    heading: ["نبني", "المستقبل", "معاً"],
    sub: "نقدم حلولاً مؤسسية تحوّل الأعمال وتشكّل أفق المدن حول العالم.",
    cta: "ابدأ الآن",
    cta2: "اعرف المزيد",
    stats: [
      { value: "+200", label: "مشروع منجز" },
      { value: "+50", label: "مدينة حول العالم" },
      { value: "18", label: "عاماً من التميز" },
    ],
  },
};

const SKYLINE_BACK = [
  { x: 0, w: 6, h: 25 }, { x: 7, w: 4, h: 40 }, { x: 12, w: 5, h: 30 },
  { x: 18, w: 3, h: 50 }, { x: 22, w: 7, h: 35 }, { x: 30, w: 4, h: 55 },
  { x: 35, w: 6, h: 28 }, { x: 42, w: 3, h: 45 }, { x: 46, w: 5, h: 38 },
  { x: 52, w: 4, h: 60 }, { x: 57, w: 6, h: 32 }, { x: 64, w: 3, h: 48 },
  { x: 68, w: 5, h: 42 }, { x: 74, w: 4, h: 55 }, { x: 79, w: 6, h: 30 },
  { x: 86, w: 3, h: 45 }, { x: 90, w: 5, h: 35 }, { x: 96, w: 4, h: 50 },
];

const SKYLINE_MID = [
  { x: 2, w: 5, h: 20 }, { x: 8, w: 4, h: 35 }, { x: 13, w: 6, h: 28 },
  { x: 20, w: 3, h: 42 }, { x: 24, w: 5, h: 22 }, { x: 30, w: 4, h: 48 },
  { x: 35, w: 7, h: 32 }, { x: 43, w: 3, h: 38 }, { x: 47, w: 5, h: 55 },
  { x: 53, w: 4, h: 25 }, { x: 58, w: 6, h: 45 }, { x: 65, w: 3, h: 30 },
  { x: 69, w: 5, h: 50 }, { x: 75, w: 4, h: 35 }, { x: 80, w: 6, h: 40 },
  { x: 87, w: 4, h: 28 }, { x: 92, w: 5, h: 52 }, { x: 98, w: 2, h: 38 },
];

const SKYLINE_FRONT = [
  { x: 0, w: 7, h: 18 }, { x: 8, w: 5, h: 30 }, { x: 14, w: 4, h: 22 },
  { x: 19, w: 6, h: 38 }, { x: 26, w: 3, h: 15 }, { x: 30, w: 5, h: 42 },
  { x: 36, w: 4, h: 25 }, { x: 41, w: 7, h: 35 }, { x: 49, w: 3, h: 20 },
  { x: 53, w: 5, h: 45 }, { x: 59, w: 4, h: 28 }, { x: 64, w: 6, h: 32 },
  { x: 71, w: 3, h: 48 }, { x: 75, w: 5, h: 22 }, { x: 81, w: 4, h: 38 },
  { x: 86, w: 6, h: 30 }, { x: 93, w: 4, h: 40 }, { x: 98, w: 2, h: 25 },
];

export function CompanySkyline({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes skyPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes driftLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20px); }
        }
        @keyframes driftRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(20px); }
        }
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-100px); }
        }
        @keyframes reflectionShimmer {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes skylineReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes windowBlink {
          0%, 60% { opacity: 0.05; }
          65% { opacity: 0.8; }
          70% { opacity: 0.6; }
          75% { opacity: 0.9; }
          100% { opacity: 0.05; }
        }
        .slide-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#070d1a" }}>
        {/* Sky gradient */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #0c1929 0%, #142640 30%, #1a3355 50%, #0f1f35 70%, #070d1a 100%)",
        }} />

        {/* Stars */}
        {Array.from({ length: 50 }, (_, i) => ({
          x: ((i * 7919 + 1301) % 10000) / 100,
          y: ((i * 6271 + 3457) % 3500) / 100,
          s: 1 + ((i * 3137) % 2),
          o: 0.15 + ((i * 2741) % 5) / 15,
          d: 2 + ((i * 1523) % 40) / 10,
        })).map((star, i) => (
          <div key={i} className="absolute rounded-full bg-white" style={{
            left: `${star.x}%`, top: `${star.y}%`, width: star.s, height: star.s,
            opacity: star.o, animation: `skyPulse ${star.d}s ease-in-out ${i * 0.3}s infinite`,
          }} />
        ))}

        {/* Back skyline layer */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: "55%", animation: "skylineReveal 1.2s ease both 0.2s, driftRight 40s ease-in-out infinite alternate",
        }}>
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 100 65" preserveAspectRatio="none">
            {SKYLINE_BACK.map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={65 - b.h} width={b.w} height={b.h} fill="rgba(10,20,35,0.5)" />
                {Array.from({ length: Math.floor(b.h / 5) }, (_, wi) => (
                  <rect key={wi} x={b.x + 1} y={65 - b.h + 2 + wi * 5} width={0.6} height={0.8}
                    fill={((i * 31 + wi * 17) % 100) < 15 ? "rgba(255,220,150,0.4)" : "rgba(255,255,255,0.02)"} rx={0.1} />
                ))}
              </g>
            ))}
          </svg>
        </div>

        {/* Mid skyline layer */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: "50%", animation: "skylineReveal 1.2s ease both 0.4s, driftLeft 35s ease-in-out infinite alternate",
        }}>
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 100 55" preserveAspectRatio="none">
            {SKYLINE_MID.map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={55 - b.h} width={b.w} height={b.h} fill="rgba(8,16,30,0.7)" />
                {Array.from({ length: Math.floor(b.h / 4) * 2 }, (_, wi) => {
                  const col = wi % 2;
                  const row = Math.floor(wi / 2);
                  const isLit = ((i * 41 + wi * 23) % 100) < 20;
                  return (
                    <rect key={wi} x={b.x + 0.5 + col * (b.w / 2 - 0.3)} y={55 - b.h + 1.5 + row * 4}
                      width={0.7} height={1} rx={0.1}
                      fill={isLit ? "rgba(255,220,150,0.5)" : "rgba(255,255,255,0.03)"}
                      style={{ animation: isLit ? `windowBlink ${5 + (wi % 4)}s ease ${wi * 0.5}s infinite` : undefined }} />
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        {/* Front skyline layer */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: "42%", animation: "skylineReveal 1.2s ease both 0.6s",
        }}>
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 100 48" preserveAspectRatio="none">
            {SKYLINE_FRONT.map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={48 - b.h} width={b.w} height={b.h} fill="rgba(5,10,20,0.9)" />
                {Array.from({ length: Math.floor(b.h / 3) * 3 }, (_, wi) => {
                  const col = wi % 3;
                  const row = Math.floor(wi / 3);
                  const isLit = ((i * 53 + wi * 29) % 100) < 25;
                  return (
                    <rect key={wi} x={b.x + 0.4 + col * (b.w / 3 - 0.1)} y={48 - b.h + 1 + row * 3}
                      width={0.8} height={1.2} rx={0.1}
                      fill={isLit ? "rgba(255,200,100,0.7)" : "rgba(100,180,255,0.04)"} />
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        {/* Reflection water layer at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(20,60,100,0.08) 40%, rgba(30,80,130,0.12) 100%)",
          animation: "reflectionShimmer 4s ease-in-out infinite",
        }} />

        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => ({
          x: ((i * 4973 + 2111) % 10000) / 100,
          d: 4 + ((i * 3137) % 60) / 10,
          dl: ((i * 1789) % 80) / 10,
        })).map((p, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-blue-300/20" style={{
            left: `${p.x}%`, bottom: "20%",
            animation: `floatUp ${p.d}s ease-in-out ${p.dl}s infinite`,
          }} />
        ))}

        {/* Ground glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`max-w-2xl ${isAr ? "mr-auto text-right" : "ml-0"}`}>
            {/* Badge */}
            <div className={`slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-blue-300/10 bg-white/[0.03] mb-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.3s" }}>
              <Building2 size={14} className="text-blue-300/70" />
              <span className="text-sm font-medium text-blue-200/60 tracking-widest">{t.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="slide-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.45s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                {t.heading[1]}
              </span>
              <span className="block text-white/80">{t.heading[2]}</span>
            </h1>

            {/* Accent line */}
            <div className="slide-up mt-6 h-[2px] w-28" style={{
              background: "linear-gradient(90deg, #60a5fa, #22d3ee, transparent)",
              boxShadow: "0 0 20px rgba(96,165,250,0.3)",
              animationDelay: "0.55s",
            }} />

            {/* Subheading */}
            <p className="slide-up mt-6 text-lg text-blue-100/25 leading-relaxed max-w-lg"
              style={{ animationDelay: "0.6s" }}>
              {t.sub}
            </p>

            {/* CTAs */}
            <div className={`slide-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.7s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(96,165,250,0.3)] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/[0.04] hover:border-blue-300/20 transition-all backdrop-blur-sm">
                {t.cta2}
              </a>
            </div>

            {/* Stats */}
            <div className={`slide-up mt-14 flex gap-10 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.9s" }}>
              {t.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-blue-200/80">{stat.value}</div>
                  <div className="text-xs text-blue-300/25 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
