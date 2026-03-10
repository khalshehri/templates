"use client";

/**
 * LawScales — Scales of Justice Hero
 *
 * Scales of justice balancing with gentle sway animation.
 * Content flanking. Symmetrical balance layout.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "JUSTICE IN BALANCE",
    heading: ["Where Law", "Meets", "Justice"],
    sub: "Every case deserves fair representation. Our attorneys bring decades of experience to tip the scales in your favor, with integrity and precision.",
    cta: "Consult Now",
    cta2: "Our Practice Areas",
    stats: [
      { value: "2,500+", label: "Cases Won" },
      { value: "35+", label: "Years Experience" },
      { value: "98%", label: "Success Rate" },
    ],
  },
  ar: {
    badge: "العدالة في ميزانها",
    heading: ["حيث القانون", "يلتقي", "بالعدالة"],
    sub: "كل قضية تستحق تمثيلًا عادلًا. محامونا يقدمون عقودًا من الخبرة لترجيح الكفة لصالحك، بنزاهة ودقة.",
    cta: "استشر الآن",
    cta2: "مجالات الممارسة",
    stats: [
      { value: "+٢,٥٠٠", label: "قضية رابحة" },
      { value: "+٣٥", label: "عامًا من الخبرة" },
      { value: "٩٨٪", label: "نسبة النجاح" },
    ],
  },
};

export function LawScales({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scalesSway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        @keyframes panSwayLeft {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(8px) rotate(-3deg); }
          75% { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes panSwayRight {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(3deg); }
          75% { transform: translateY(8px) rotate(-3deg); }
        }
        @keyframes beamGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(180,140,60,0.1)); }
          50% { filter: drop-shadow(0 0 20px rgba(180,140,60,0.3)); }
        }
        @keyframes pillarRise {
          from { height: 0; }
          to { height: 140px; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f0a14 0%, #14101e 40%, #0f0a14 100%)" }}>

        {/* Subtle pattern */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 35%, rgba(180,140,60,0.04) 0%, transparent 50%)",
        }} />

        {/* Scales illustration - center top */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 300, height: 280 }}>
          {/* Pillar */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{
            width: 8, overflow: "hidden",
            animation: "pillarRise 1s ease 0.3s both",
          }}>
            <div style={{
              width: "100%", height: 140,
              background: "linear-gradient(180deg, rgba(180,140,60,0.3), rgba(180,140,60,0.1))",
              borderRadius: 4,
            }} />
          </div>

          {/* Pillar base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{
            width: 60, height: 8,
            background: "linear-gradient(90deg, rgba(180,140,60,0.1), rgba(180,140,60,0.25), rgba(180,140,60,0.1))",
            borderRadius: 4,
          }} />

          {/* Beam + pans wrapper */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            animation: "scalesSway 6s ease-in-out infinite",
            transformOrigin: "center top",
          }}>
            {/* Top knob */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full"
              style={{ background: "rgba(180,140,60,0.3)", border: "1px solid rgba(180,140,60,0.4)" }} />

            {/* Beam */}
            <div className="relative" style={{
              width: 260, height: 4, marginLeft: -130,
              background: "linear-gradient(90deg, rgba(180,140,60,0.15), rgba(180,140,60,0.3), rgba(180,140,60,0.15))",
              borderRadius: 2, marginTop: 8,
              animation: "beamGlow 6s ease-in-out infinite",
            }}>
              {/* Left chain */}
              <div className="absolute left-0 top-full" style={{ width: 2, height: 50, marginLeft: 10 }}>
                {[0, 1, 2, 3, 4].map((j) => (
                  <div key={j} className="w-1.5 h-2 border border-amber-600/20 rounded-full mx-auto" style={{ marginTop: j > 0 ? 2 : 0 }} />
                ))}
              </div>

              {/* Right chain */}
              <div className="absolute right-0 top-full" style={{ width: 2, height: 50, marginRight: 10 }}>
                {[0, 1, 2, 3, 4].map((j) => (
                  <div key={j} className="w-1.5 h-2 border border-amber-600/20 rounded-full mx-auto" style={{ marginTop: j > 0 ? 2 : 0 }} />
                ))}
              </div>

              {/* Left pan */}
              <div className="absolute" style={{
                left: -15, top: 55,
                animation: "panSwayLeft 6s ease-in-out infinite",
              }}>
                <svg width="60" height="30" viewBox="0 0 60 30">
                  <ellipse cx="30" cy="8" rx="28" ry="8" fill="rgba(180,140,60,0.12)" stroke="rgba(180,140,60,0.25)" strokeWidth="1" />
                  <path d="M2 8 Q2 25 30 28 Q58 25 58 8" fill="none" stroke="rgba(180,140,60,0.15)" strokeWidth="0.8" />
                </svg>
              </div>

              {/* Right pan */}
              <div className="absolute" style={{
                right: -15, top: 55,
                animation: "panSwayRight 6s ease-in-out infinite",
              }}>
                <svg width="60" height="30" viewBox="0 0 60 30">
                  <ellipse cx="30" cy="8" rx="28" ry="8" fill="rgba(180,140,60,0.12)" stroke="rgba(180,140,60,0.25)" strokeWidth="1" />
                  <path d="M2 8 Q2 25 30 28 Q58 25 58 8" fill="none" stroke="rgba(180,140,60,0.15)" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content - flanking symmetrical below scales */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center mt-[260px] lg:mt-[220px]">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/10 bg-amber-400/[0.04] mb-6"
              style={{ animationDelay: "0.3s" }}>
              <span className="text-sm font-medium text-amber-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.45s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.heading[1]}</span>
              <span className="block text-white/70">{t.heading[2]}</span>
            </h1>

            <p className="fade-up mt-5 text-base text-amber-100/25 leading-relaxed max-w-xl mx-auto"
              style={{ animationDelay: "0.6s" }}>{t.sub}</p>

            {/* Stats */}
            <div className={`fade-up mt-8 flex justify-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.7s" }}>
              {t.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-amber-300/80">{s.value}</div>
                  <div className="text-xs text-amber-200/25 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className={`fade-up mt-8 flex justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.85s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #92400e, #d97706, #f59e0b)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-6 py-3 text-sm font-semibold text-amber-200/30 border border-amber-300/10 rounded-lg hover:bg-amber-300/[0.04] transition-all">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
