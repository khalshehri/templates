"use client";

/**
 * ClinicCare — Emotional/Human Hero
 *
 * Gentle hands cradling a heart shape (CSS), warmth/care theme.
 * Emotional/human feel with teal/mint palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "COMPASSIONATE CARE",
    heading: ["Healthcare", "With Heart"],
    sub: "Because healing is not just about medicine. It's about the gentle touch, the reassuring voice, and the genuine care that makes all the difference.",
    cta: "Experience Our Care",
    cta2: "Patient Stories",
    values: [
      { title: "Compassion", desc: "Every patient is family" },
      { title: "Dignity", desc: "Respectful, always" },
      { title: "Comfort", desc: "Your ease matters" },
    ],
  },
  ar: {
    badge: "رعاية بالقلب",
    heading: ["رعاية صحية", "من القلب"],
    sub: "لأن الشفاء ليس مجرد دواء. إنه اللمسة الحانية والصوت المطمئن والعناية الصادقة التي تصنع الفرق.",
    cta: "اختبر رعايتنا",
    cta2: "قصص المرضى",
    values: [
      { title: "التعاطف", desc: "كل مريض عائلتنا" },
      { title: "الكرامة", desc: "الاحترام دائمًا" },
      { title: "الراحة", desc: "أنت في المقام الأول" },
    ],
  },
};

export function ClinicCare({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartBeat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          10% { transform: translate(-50%, -50%) scale(1.12); }
          20% { transform: translate(-50%, -50%) scale(1); }
          30% { transform: translate(-50%, -50%) scale(1.08); }
          40%, 100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes heartGlow {
          0%, 100% { opacity: 0.15; }
          15% { opacity: 0.4; }
          30% { opacity: 0.15; }
        }
        @keyframes handCradle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }
        @keyframes warmthSpread {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(0.8); opacity: 0; }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #021a1a 0%, #031e1e 40%, #041a1a 100%)" }}>

        {/* Warm radial glow */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 45%, rgba(20,184,166,0.06) 0%, transparent 50%)",
        }} />

        {/* Hands + Heart illustration - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 320, height: 280, animation: "gentleFloat 6s ease-in-out infinite" }}>

          {/* Warmth rings */}
          {[0, 1, 2].map((i) => (
            <div key={i} className="absolute top-1/2 left-1/2 rounded-full border border-teal-400/[0.06]"
              style={{
                width: 140 + i * 60, height: 140 + i * 60,
                marginLeft: -(70 + i * 30), marginTop: -(70 + i * 30),
                animation: `warmthSpread 4s ease-out ${i * 1.2}s infinite`,
              }} />
          ))}

          {/* Left hand */}
          <svg className="absolute" style={{
            left: 20, top: 100, width: 130, height: 120,
            animation: "handCradle 5s ease-in-out infinite",
            transformOrigin: "right center",
          }} viewBox="0 0 130 120" fill="none">
            <path d="M5 60 Q5 30 30 20 Q45 15 55 25 L70 40 Q75 45 80 50 L90 60 Q100 65 105 75 Q115 95 100 105 Q85 115 65 110 Q40 105 20 90 Q5 80 5 60Z"
              fill="rgba(20,184,166,0.08)" stroke="rgba(20,184,166,0.2)" strokeWidth="1.5" />
            {/* Fingers */}
            <path d="M55 25 Q58 15 65 12 Q72 9 75 18 L70 40" fill="none" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
            <path d="M70 40 Q78 32 82 28 Q88 24 90 32 L80 50" fill="none" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
          </svg>

          {/* Right hand (mirrored) */}
          <svg className="absolute" style={{
            right: 20, top: 100, width: 130, height: 120,
            transform: "scaleX(-1)",
            animation: "handCradle 5s ease-in-out 0.5s infinite",
            transformOrigin: "left center",
          }} viewBox="0 0 130 120" fill="none">
            <path d="M5 60 Q5 30 30 20 Q45 15 55 25 L70 40 Q75 45 80 50 L90 60 Q100 65 105 75 Q115 95 100 105 Q85 115 65 110 Q40 105 20 90 Q5 80 5 60Z"
              fill="rgba(20,184,166,0.08)" stroke="rgba(20,184,166,0.2)" strokeWidth="1.5" />
            <path d="M55 25 Q58 15 65 12 Q72 9 75 18 L70 40" fill="none" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
            <path d="M70 40 Q78 32 82 28 Q88 24 90 32 L80 50" fill="none" stroke="rgba(20,184,166,0.15)" strokeWidth="1" />
          </svg>

          {/* Heart */}
          <div className="absolute top-1/2 left-1/2"
            style={{ animation: "heartBeat 2s ease-in-out infinite" }}>
            <svg width="80" height="72" viewBox="0 0 80 72" style={{ marginLeft: -40, marginTop: -50 }}>
              <path d="M40 65 C20 45 0 32 0 18 C0 8 8 0 18 0 C25 0 32 4 40 14 C48 4 55 0 62 0 C72 0 80 8 80 18 C80 32 60 45 40 65Z"
                fill="url(#heartGrad)" stroke="rgba(45,212,191,0.3)" strokeWidth="1" />
              <defs>
                <radialGradient id="heartGrad" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="rgba(45,212,191,0.2)" />
                  <stop offset="100%" stopColor="rgba(20,184,166,0.08)" />
                </radialGradient>
              </defs>
            </svg>
            {/* Heart glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: 100, height: 100,
                marginTop: -65,
                background: "radial-gradient(circle, rgba(45,212,191,0.15), transparent 70%)",
                animation: "heartGlow 2s ease-in-out infinite",
              }} />
          </div>
        </div>

        {/* Content - bottom-centered */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col min-h-screen">
          {/* Top spacer */}
          <div className="flex-1" />

          {/* Content block */}
          <div className={`max-w-3xl mx-auto text-center pb-20 ${isAr ? "text-center" : ""}`}>
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/10 bg-teal-400/[0.04] mb-6"
              style={{ animationDelay: "0.3s" }}>
              <span className="text-sm font-medium text-teal-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.45s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent">{t.heading[1]}</span>
            </h1>

            <p className="fade-up mt-5 text-base text-teal-100/30 leading-relaxed max-w-xl mx-auto"
              style={{ animationDelay: "0.6s" }}>{t.sub}</p>

            {/* Values row */}
            <div className={`fade-up mt-8 flex justify-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.7s" }}>
              {t.values.map((v, i) => (
                <div key={i} className="text-center">
                  <div className="text-sm font-bold text-teal-300/70">{v.title}</div>
                  <div className="text-xs text-teal-200/25 mt-1">{v.desc}</div>
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
