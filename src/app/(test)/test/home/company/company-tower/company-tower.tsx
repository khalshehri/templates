"use client";

/**
 * Glass Tower Hero
 * A single tall glass tower rising from the bottom with animated window lights
 * flickering on. Reflective glass panels with shimmer effect.
 */

import { ArrowRight, Shield } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Enterprise Solutions",
    heading: "Reaching New",
    headingLine2: "Heights.",
    sub: "Industry-leading solutions that elevate your business to unprecedented levels of success.",
    cta: "Schedule Consultation",
    cta2: "Our Services",
    stats: [
      { value: "25+", label: "Years of Experience" },
      { value: "500+", label: "Enterprise Clients" },
      { value: "98%", label: "Client Retention" },
    ],
  },
  ar: {
    badge: "حلول المؤسسات",
    heading: "نصل إلى آفاق",
    headingLine2: "جديدة.",
    sub: "حلول رائدة في الصناعة ترتقي بأعمالك إلى مستويات غير مسبوقة من النجاح.",
    cta: "حجز استشارة",
    cta2: "خدماتنا",
    stats: [
      { value: "+25", label: "عاماً من الخبرة" },
      { value: "+500", label: "عميل مؤسسي" },
      { value: "98%", label: "معدل الاحتفاظ" },
    ],
  },
};

const WINDOWS = Array.from({ length: 200 }, (_, i) => ({
  lit: ((i * 7919 + 1301) % 100) < 30,
  delay: ((i * 3137 + 491) % 80) / 10,
  duration: 3 + ((i * 2741) % 50) / 10,
}));

export function CompanyTower({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes towerRise {
          from { transform: translateY(100%) scaleY(0.3); opacity: 0; }
          50% { opacity: 1; }
          to { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes windowFlicker {
          0%, 40% { opacity: 0.05; }
          45% { opacity: 0.85; }
          50% { opacity: 0.6; }
          55% { opacity: 0.9; }
          90% { opacity: 0.85; }
          95% { opacity: 0.1; }
          100% { opacity: 0.05; }
        }
        @keyframes windowGlow {
          0%, 100% { opacity: 0.85; }
          30% { opacity: 0.45; }
          60% { opacity: 1; }
        }
        @keyframes glassShimmer {
          0% { transform: translateX(-200%) skewX(-15deg); }
          100% { transform: translateX(400%) skewX(-15deg); }
        }
        @keyframes beaconPulse {
          0%, 100% { opacity: 0.3; box-shadow: 0 0 6px rgba(255,80,80,0.3); }
          50% { opacity: 1; box-shadow: 0 0 20px rgba(255,80,80,0.8); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes panelFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .tower-rise { animation: towerRise 1.6s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: bottom center; }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .panel-float { animation: panelFloat 5s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0a1628" }}>
        {/* Sky */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #0f2847 0%, #1e3a5f 30%, #152a45 60%, #0a1628 100%)",
        }} />

        {/* Stars */}
        {Array.from({ length: 35 }, (_, i) => (
          <div key={i} className="absolute rounded-full bg-white" style={{
            left: `${((i * 7919 + 1301) % 10000) / 100}%`,
            top: `${((i * 6271 + 3457) % 3000) / 100}%`,
            width: 1 + ((i * 3137) % 2), height: 1 + ((i * 3137) % 2),
            opacity: 0.15 + ((i * 2741) % 4) / 15,
          }} />
        ))}

        {/* Ground line */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent z-[1]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`grid lg:grid-cols-2 gap-8 items-center ${isAr ? "" : ""}`}>
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-md backdrop-blur-xl border border-sky-300/10 bg-white/[0.04] mb-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}>
                <Shield size={14} className="text-sky-300/80" />
                <span className="text-sm font-medium text-sky-200/70 tracking-wide">{t.badge}</span>
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]"
                style={{ animationDelay: "0.45s" }}>
                <span className="block text-white/90">{t.heading}</span>
                <span className="block bg-gradient-to-r from-sky-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                  {t.headingLine2}
                </span>
              </h1>

              <div className="fade-up mt-6 h-[2px] w-24" style={{
                background: "linear-gradient(90deg, #38bdf8, #60a5fa, transparent)",
                animationDelay: "0.55s",
              }} />

              <p className="fade-up mt-6 text-lg text-sky-100/25 leading-relaxed max-w-md"
                style={{ animationDelay: "0.6s" }}>{t.sub}</p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.7s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb, #38bdf8)" }}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-sky-200/30 border border-sky-300/10 rounded-lg hover:bg-sky-300/[0.04] transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>

            {/* Tower */}
            <div className={`relative flex items-end justify-center ${isAr ? "lg:order-1" : ""}`} style={{ height: "560px" }}>
              <div className="tower-rise relative flex flex-col items-center" style={{ animationDelay: "0.3s" }}>
                {/* Antenna */}
                <div className="relative mb-0">
                  <div className="mx-auto w-[2px] h-16 bg-gradient-to-t from-sky-400/40 to-transparent" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-400"
                    style={{ animation: "beaconPulse 2s ease-in-out infinite" }} />
                </div>

                {/* Tower body */}
                <div className="relative overflow-hidden rounded-t-md" style={{
                  width: "clamp(140px, 20vw, 200px)", height: "420px",
                  background: "linear-gradient(180deg, rgba(30,58,95,0.9) 0%, rgba(15,40,71,0.95) 50%, rgba(10,22,40,0.98) 100%)",
                  boxShadow: "0 0 80px rgba(56,189,248,0.08), inset 0 0 40px rgba(56,189,248,0.03)",
                }}>
                  {/* Shimmer */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.4 }}>
                    <div className="absolute top-0 h-full" style={{
                      width: "50px",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                      animation: "glassShimmer 7s ease-in-out 2s infinite",
                    }} />
                  </div>

                  {/* Grid lines */}
                  <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.06 }}>
                    {Array.from({ length: 25 }, (_, i) => (
                      <div key={`h${i}`} className="absolute left-0 right-0 bg-sky-200"
                        style={{ top: `${(i + 1) * 4}%`, height: "0.5px" }} />
                    ))}
                    {Array.from({ length: 10 }, (_, i) => (
                      <div key={`v${i}`} className="absolute top-0 bottom-0 bg-sky-200"
                        style={{ left: `${(i + 1) * 10}%`, width: "0.5px" }} />
                    ))}
                  </div>

                  {/* Windows */}
                  <div className="absolute inset-[6px] grid grid-cols-10 gap-[2px]">
                    {WINDOWS.map((win, i) => (
                      <div key={i} className="rounded-[1px]" style={{
                        background: win.lit
                          ? "linear-gradient(180deg, rgba(255,220,150,0.8) 0%, rgba(255,200,100,0.5) 100%)"
                          : "rgba(56,189,248,0.04)",
                        boxShadow: win.lit ? "0 0 3px rgba(255,220,150,0.3)" : "none",
                        animation: win.lit
                          ? `windowGlow ${win.duration}s ease-in-out ${win.delay}s infinite`
                          : `windowFlicker ${win.duration}s ease-in-out ${win.delay}s infinite`,
                      }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat panels */}
              {t.stats.map((stat, i) => {
                const positions = isAr
                  ? [{ left: "0%", top: "15%" }, { left: "-8%", top: "42%" }, { left: "5%", top: "68%" }]
                  : [{ right: "0%", top: "15%" }, { right: "-8%", top: "42%" }, { right: "5%", top: "68%" }];
                return (
                  <div key={i} className="absolute fade-up panel-float"
                    style={{ ...positions[i], animationDelay: `${1 + i * 0.2}s` }}>
                    <div className="px-5 py-4 rounded-lg backdrop-blur-xl border border-sky-300/10"
                      style={{ background: "linear-gradient(135deg, rgba(30,58,95,0.4), rgba(10,22,40,0.5))" }}>
                      <div className="text-2xl font-black text-sky-200/90">{stat.value}</div>
                      <div className="text-[11px] text-sky-300/30 mt-1 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
