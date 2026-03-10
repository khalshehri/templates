"use client";

/**
 * Building Construction Hero
 * Modern building rising from ground with construction crane.
 * Development/construction phase visualization with progress feel.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Under Development",
    heading: "Rising to New",
    headingHighlight: "Heights",
    subheading:
      "Watch your future home take shape. 45 floors of architectural excellence, designed for modern families.",
    ctaPrimary: "Pre-Register",
    ctaSecondary: "View Progress",
    progress: "67%",
    progressLabel: "Construction Progress",
    milestones: [
      { label: "Foundation", done: true },
      { label: "Structure", done: true },
      { label: "Exterior", done: false },
      { label: "Interior", done: false },
      { label: "Handover", done: false },
    ],
    details: [
      { label: "Floors", value: "45" },
      { label: "Units", value: "320" },
      { label: "Completion", value: "Q4 2026" },
      { label: "Starting", value: "$450K" },
    ],
  },
  ar: {
    badge: "قيد التطوير",
    heading: "نرتقي إلى",
    headingHighlight: "آفاق جديدة",
    subheading:
      "شاهد منزلك المستقبلي يتشكل. 45 طابقاً من التميز المعماري، مصمم للعائلات العصرية.",
    ctaPrimary: "التسجيل المسبق",
    ctaSecondary: "عرض التقدم",
    progress: "67%",
    progressLabel: "تقدم البناء",
    milestones: [
      { label: "الأساسات", done: true },
      { label: "الهيكل", done: true },
      { label: "الخارج", done: false },
      { label: "الداخل", done: false },
      { label: "التسليم", done: false },
    ],
    details: [
      { label: "الطوابق", value: "45" },
      { label: "الوحدات", value: "320" },
      { label: "الإنجاز", value: "Q4 2026" },
      { label: "ابتداءً من", value: "$450K" },
    ],
  },
};

export function RealestateBuilding({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes buildRise {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes craneSwing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 67%; }
        }
        @keyframes windowLight {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0a06]">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-950/10 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Progress bar */}
              <div className="fade-up mt-10" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/25">{t.progressLabel}</span>
                  <span className="text-sm font-bold text-amber-400">{t.progress}</span>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                    style={{ animation: "progressFill 2s ease-out 0.6s both" }} />
                </div>
              </div>

              {/* Milestones */}
              <div className={`fade-up mt-6 flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.6s" }}>
                {t.milestones.map((ms, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className={`w-3 h-3 mx-auto rounded-full border-2 ${ms.done ? "bg-amber-400 border-amber-400" : "border-white/15 bg-transparent"}`} />
                    <div className="text-[8px] text-white/20 mt-1">{ms.label}</div>
                    {i < t.milestones.length - 1 && <div className={`h-px mx-auto mt-[-14px] mb-[14px] ${ms.done ? "bg-amber-400/30" : "bg-white/5"}`} style={{ width: "calc(100% + 8px)" }} />}
                  </div>
                ))}
              </div>

              {/* Details grid */}
              <div className="fade-up mt-8 grid grid-cols-4 gap-3"
                style={{ animationDelay: "0.7s" }}>
                {t.details.map((d, i) => (
                  <div key={i} className="text-center p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-lg font-bold text-amber-300">{d.value}</div>
                    <div className="text-[9px] text-white/20">{d.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Building visualization */}
            <div className={`relative flex justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <svg viewBox="0 0 200 350" className="w-48 sm:w-56" style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }}>
                {/* Crane */}
                <g style={{ transformOrigin: "160px 30px", animation: "craneSwing 6s ease-in-out infinite" }}>
                  <line x1="160" y1="30" x2="160" y2="300" stroke="rgba(245,158,11,0.2)" strokeWidth="2" />
                  <line x1="120" y1="30" x2="190" y2="30" stroke="rgba(245,158,11,0.25)" strokeWidth="2" />
                  <line x1="160" y1="30" x2="120" y2="60" stroke="rgba(245,158,11,0.1)" strokeWidth="1" />
                  {/* Hook */}
                  <line x1="135" y1="30" x2="135" y2="80" stroke="rgba(245,158,11,0.15)" strokeWidth="0.5" />
                  <rect x="130" y="80" width="10" height="6" rx="1" fill="rgba(245,158,11,0.2)" />
                </g>

                {/* Building body */}
                <g style={{ transformOrigin: "bottom center", animation: "buildRise 2s ease-out 0.3s both" }}>
                  {/* Main structure */}
                  <rect x="40" y="60" width="80" height="240" rx="2"
                    fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.15)" strokeWidth="1" />

                  {/* Floor lines */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line key={i} x1="40" y1={72 + i * 12} x2="120" y2={72 + i * 12}
                      stroke="rgba(245,158,11,0.05)" strokeWidth="0.3" />
                  ))}

                  {/* Windows */}
                  {Array.from({ length: 60 }).map((_, i) => {
                    const col = i % 4;
                    const row = Math.floor(i / 4);
                    return (
                      <rect key={i}
                        x={48 + col * 18} y={65 + row * 16}
                        width="8" height="10" rx="0.5"
                        fill={`rgba(245,158,11,${0.05 + (i % 5) * 0.05})`}
                        style={{ animation: `windowLight ${3 + (i % 4)}s ease-in-out ${i * 0.2}s infinite` } as React.CSSProperties} />
                    );
                  })}

                  {/* Incomplete top section (under construction) */}
                  <rect x="40" y="60" width="80" height="50" rx="2"
                    fill="none" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Construction scaffolding lines */}
                  <line x1="38" y1="60" x2="38" y2="110" stroke="rgba(245,158,11,0.08)" strokeWidth="0.5" />
                  <line x1="122" y1="60" x2="122" y2="110" stroke="rgba(245,158,11,0.08)" strokeWidth="0.5" />
                  {Array.from({ length: 4 }).map((_, i) => (
                    <line key={i} x1="38" y1={65 + i * 12} x2="122" y2={65 + i * 12}
                      stroke="rgba(245,158,11,0.05)" strokeWidth="0.5" />
                  ))}
                </g>

                {/* Ground line */}
                <line x1="10" y1="300" x2="190" y2="300" stroke="rgba(245,158,11,0.1)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
