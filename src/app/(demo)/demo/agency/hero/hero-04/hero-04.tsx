"use client";

/**
 * Graffiti Wall Hero
 * Street art / urban creative vibe.
 * Background: #0c0c0c. Accent: spray-can cyan #06b6d4.
 */

import { ArrowRight, Spray } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "STREET SMART AGENCY",
    heading: "Break The",
    headingAccent: "Rules",
    sub: "Convention is comfortable. We're not. Our disruptive creative approach shatters expectations and builds brands that own the culture.",
    cta1: "Get Disruptive",
    cta2: "Case Studies",
    manifesto: ["REBEL", "CREATE", "DISRUPT", "REPEAT"],
  },
  ar: {
    badge: "وكالة متمردة",
    heading: "اكسر",
    headingAccent: "القواعد",
    sub: "التقليد مريح. نحن لسنا كذلك. نهجنا الإبداعي يحطم التوقعات ويبني علامات تملك الثقافة.",
    cta1: "كن مُزعزعاً",
    cta2: "دراسات حالة",
    manifesto: ["تمرّد", "ابتكر", "زعزع", "كرّر"],
  },
};

export function Hero04({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0c0c0c" }}>
      {/* Brick texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.05) 60px, rgba(255,255,255,0.05) 61px)" }} />

      {/* Spray paint splashes */}
      <div className="absolute w-[350px] h-[350px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "#06b6d4", top: "10%", right: "10%" }} />
      <div className="absolute w-[200px] h-[200px] rounded-full opacity-8 blur-[60px] pointer-events-none"
        style={{ background: "#f43f5e", bottom: "20%", left: "15%" }} />

      {/* Drip effect lines */}
      {[10, 30, 65, 85].map((x, i) => (
        <div key={i} className="absolute bottom-0 w-[2px] pointer-events-none"
          style={{
            left: `${x}%`, height: `${20 + i * 8}%`,
            background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? "rgba(6,182,212,0.15)" : "rgba(244,63,94,0.1)"})`,
            animation: `drip 1.5s ease-out ${i * 0.3}s both`,
          }} />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-8">
            <Spray className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 tracking-[0.2em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.8] tracking-[-0.05em] mb-6"
            style={{ fontSize: "clamp(56px, 13vw, 140px)" }}>
            {t.heading}<br />
            <span style={{ color: "#06b6d4", textShadow: "0 0 40px rgba(6,182,212,0.3)" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          <div className="flex flex-wrap gap-4">
            {t.manifesto.map((w, i) => (
              <span key={i} className="text-4xl md:text-5xl font-black tracking-tighter"
                style={{
                  color: "transparent", WebkitTextStroke: "1px rgba(6,182,212,0.3)",
                  animation: `fadeInUp 0.4s ease-out ${0.4 + i * 0.1}s both`,
                }}>{w}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes drip { from{height:0;opacity:0} to{opacity:1} }
      `}</style>
    </section>
  );
}
