"use client";

/**
 * ClinicCells — Biological/Scientific Hero
 *
 * Microscopic cells/platelets floating and multiplying animation.
 * Scientific feel with teal/mint palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "CELLULAR PRECISION",
    heading: ["Healing at the", "Cellular", "Level"],
    sub: "Our advanced treatments work at the molecular level, harnessing the body's own regenerative power for lasting results.",
    cta: "Explore Treatments",
    cta2: "Research Papers",
    stats: [
      { value: "99.7%", label: "Accuracy" },
      { value: "< 48h", label: "Lab Results" },
      { value: "Advanced", label: "Genomics" },
    ],
  },
  ar: {
    badge: "دقّة خلوية",
    heading: ["الشفاء على", "المستوى", "الخلوي"],
    sub: "علاجاتنا المتقدمة تعمل على المستوى الجزيئي، مسخّرة قوة الجسم التجددية لنتائج دائمة.",
    cta: "اكتشف العلاجات",
    cta2: "الأبحاث العلمية",
    stats: [
      { value: "٩٩.٧٪", label: "دقّة" },
      { value: "< ٤٨ ساعة", label: "نتائج المختبر" },
      { value: "متقدم", label: "علم الجينوم" },
    ],
  },
};

// Cell data for the floating cells
const CELLS = [
  { x: 12, y: 18, size: 50, type: "rbc", delay: 0 },
  { x: 75, y: 12, size: 40, type: "rbc", delay: 1.2 },
  { x: 45, y: 70, size: 55, type: "rbc", delay: 0.6 },
  { x: 85, y: 55, size: 35, type: "rbc", delay: 2 },
  { x: 20, y: 80, size: 45, type: "rbc", delay: 1.8 },
  { x: 60, y: 30, size: 30, type: "platelet", delay: 0.3 },
  { x: 30, y: 45, size: 25, type: "platelet", delay: 1.5 },
  { x: 80, y: 75, size: 28, type: "platelet", delay: 2.5 },
  { x: 50, y: 15, size: 65, type: "wbc", delay: 0.9 },
  { x: 15, y: 55, size: 58, type: "wbc", delay: 2.2 },
  { x: 70, y: 85, size: 48, type: "rbc", delay: 3 },
  { x: 90, y: 30, size: 32, type: "platelet", delay: 1 },
];

export function ClinicCells({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  const getCellStyle = (type: string) => {
    switch (type) {
      case "rbc":
        return {
          background: "radial-gradient(ellipse at 40% 35%, rgba(20,184,166,0.15), rgba(13,148,136,0.08) 60%, rgba(6,95,70,0.04))",
          border: "1.5px solid rgba(20,184,166,0.15)",
          borderRadius: "50%",
        };
      case "wbc":
        return {
          background: "radial-gradient(circle at 45% 40%, rgba(56,189,248,0.12), rgba(14,165,233,0.06) 70%)",
          border: "1.5px solid rgba(56,189,248,0.12)",
          borderRadius: "45% 55% 50% 50%",
        };
      case "platelet":
        return {
          background: "radial-gradient(circle, rgba(45,212,191,0.2), rgba(20,184,166,0.08))",
          border: "1px solid rgba(45,212,191,0.15)",
          borderRadius: "40% 60% 55% 45%",
        };
      default:
        return {};
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cellFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(12px, -18px) rotate(5deg) scale(1.05); }
          50% { transform: translate(-8px, -25px) rotate(-3deg) scale(0.97); }
          75% { transform: translate(15px, -10px) rotate(4deg) scale(1.03); }
        }
        @keyframes cellDivide {
          0%, 80% { transform: scale(1); opacity: 0.8; }
          85% { transform: scale(1.2); opacity: 1; }
          90% { transform: scale(0.6); opacity: 0.5; }
          95%, 100% { transform: scale(1); opacity: 0.8; }
        }
        @keyframes innerPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.6; }
        }
        @keyframes microDrift {
          0%, 100% { transform: translate(0,0); }
          33% { transform: translate(4px, -6px); }
          66% { transform: translate(-5px, 3px); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #021a1e 0%, #031f24 40%, #02181c 100%)" }}>

        {/* Microscope grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(20,184,166,0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />

        {/* Floating cells */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {CELLS.map((cell, i) => (
            <div key={i} className="absolute"
              style={{
                left: `${cell.x}%`, top: `${cell.y}%`,
                width: cell.size, height: cell.type === "rbc" ? cell.size * 0.65 : cell.size,
                ...getCellStyle(cell.type),
                animation: `cellFloat ${8 + (i % 4) * 2}s ease-in-out ${cell.delay}s infinite`,
              }}>
              {/* Nucleus/inner structure */}
              {cell.type === "wbc" && (
                <div className="absolute top-1/2 left-1/2 rounded-full"
                  style={{
                    width: "40%", height: "40%",
                    background: "rgba(56,189,248,0.15)",
                    border: "1px solid rgba(56,189,248,0.1)",
                    animation: `innerPulse 4s ease-in-out ${cell.delay}s infinite`,
                  }} />
              )}
              {cell.type === "rbc" && (
                <div className="absolute top-1/2 left-1/2 rounded-full"
                  style={{
                    width: "30%", height: "45%",
                    background: "rgba(20,184,166,0.1)",
                    transform: "translate(-50%, -50%)",
                    animation: `innerPulse 5s ease-in-out ${cell.delay}s infinite`,
                  }} />
              )}
            </div>
          ))}

          {/* Tiny micro-organisms */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={`micro-${i}`} className="absolute rounded-full"
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: `${5 + (i * 11) % 85}%`,
                width: 3 + (i % 4),
                height: 3 + (i % 4),
                background: `rgba(20,184,166,${0.05 + (i % 5) * 0.03})`,
                animation: `microDrift ${5 + (i % 3) * 2}s ease-in-out ${i * 0.4}s infinite`,
              }} />
          ))}
        </div>

        {/* Content - centered layout */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`max-w-2xl mx-auto text-center ${isAr ? "text-center" : ""}`}>
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/10 bg-teal-400/[0.04] mb-6"
              style={{ animationDelay: "0.3s" }}>
              <span className="text-sm font-medium text-teal-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.45s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">{t.heading[1]}</span>
              <span className="block text-white/70">{t.heading[2]}</span>
            </h1>

            <p className="fade-up mt-5 text-base text-teal-100/30 leading-relaxed max-w-lg mx-auto"
              style={{ animationDelay: "0.6s" }}>{t.sub}</p>

            {/* Stats row */}
            <div className={`fade-up mt-8 flex justify-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.7s" }}>
              {t.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-teal-300/80">{s.value}</div>
                  <div className="text-xs text-teal-200/25 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`fade-up mt-8 flex justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.85s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-6 py-3 text-sm font-semibold text-teal-200/30 border border-teal-300/10 rounded-lg hover:bg-teal-300/[0.04] transition-all">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
