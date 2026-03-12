"use client";

/**
 * Neon Studio Hero
 * Glowing neon sign aesthetic for creative agencies.
 * Background: #050510. Accent: electric violet #8b5cf6.
 */

import { ArrowRight, Lightbulb } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "DESIGN STUDIO",
    heading: "Ideas That",
    headingAccent: "Glow",
    sub: "We craft brands and digital products that demand attention. Every pixel placed with purpose, every interaction designed to delight.",
    cta1: "Light It Up",
    cta2: "Portfolio",
    services: ["Branding", "Web Design", "Motion", "Strategy"],
  },
  ar: {
    badge: "استوديو تصميم",
    heading: "أفكار",
    headingAccent: "تتوهّج",
    sub: "نصنع علامات تجارية ومنتجات رقمية تجذب الانتباه. كل بكسل بهدف، وكل تفاعل مصمم للإبهار.",
    cta1: "أشعل الضوء",
    cta2: "معرض الأعمال",
    services: ["هوية بصرية", "تصميم ويب", "موشن", "استراتيجية"],
  },
};

export function Hero02({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#050510" }}>
      {/* Neon glow orbs */}
      <div className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "#8b5cf6", top: "20%", left: "20%" }} />
      <div className="absolute w-[250px] h-[250px] rounded-full opacity-15 blur-[80px] pointer-events-none"
        style={{ background: "#ec4899", bottom: "20%", right: "25%" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Lightbulb className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-bold text-violet-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <span className="text-white">{t.heading}</span><br />
          <span className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #8b5cf6, #ec4899, #8b5cf6)",
              textShadow: "none",
              filter: "drop-shadow(0 0 30px rgba(139,92,246,0.4))",
            }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.4)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-violet-500/20 hover:border-violet-500/50 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.services.map((s, i) => (
            <span key={i} className="px-5 py-2 rounded-full border border-violet-500/15 text-sm text-violet-300/70 font-medium hover:border-violet-500/40 hover:text-violet-200 transition-all cursor-default"
              style={{ animation: `neonPulse 3s ease-in-out ${i * 0.5}s infinite` }}>{s}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes neonPulse { 0%,100%{border-color:rgba(139,92,246,0.15)} 50%{border-color:rgba(139,92,246,0.35)} }
      `}</style>
    </section>
  );
}
