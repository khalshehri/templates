"use client";

/**
 * Workspace Hero
 * Clean workspace / desktop metaphor.
 * Background: #0a0a0f. Accent: sky blue #0ea5e9.
 */

import { ArrowRight, Laptop } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "INDEPENDENT CONSULTANT",
    heading: "Ship",
    headingAccent: "Faster",
    sub: "I help startups and scale-ups move at speed. Embedded team member, not an outsider. Your velocity, amplified.",
    cta1: "Check Availability",
    cta2: "How I Work",
    tools: [
      { name: "Figma", category: "Design" },
      { name: "VS Code", category: "Code" },
      { name: "Vercel", category: "Deploy" },
      { name: "Linear", category: "Manage" },
    ],
  },
  ar: {
    badge: "مستشار مستقل",
    heading: "أطلق",
    headingAccent: "أسرع",
    sub: "أساعد الشركات الناشئة على التحرك بسرعة. عضو فريق مندمج، لست خارجياً. سرعتك، مُعزّزة.",
    cta1: "تحقق من التوفر",
    cta2: "كيف أعمل",
    tools: [
      { name: "Figma", category: "تصميم" },
      { name: "VS Code", category: "برمجة" },
      { name: "Vercel", category: "نشر" },
      { name: "Linear", category: "إدارة" },
    ],
  },
};

export function Hero08({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0a0f" }}>
      <div className="absolute w-[500px] h-[300px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#0ea5e9", bottom: "20%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Laptop className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-bold text-sky-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.05em] mb-6"
          style={{ fontSize: "clamp(56px, 14vw, 150px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#0ea5e9", textShadow: "0 0 40px rgba(14,165,233,0.3)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(14,165,233,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.tools.map((tool, i) => (
            <div key={i} className="px-5 py-3 rounded-xl border border-sky-500/10 bg-sky-500/[0.03] text-center">
              <span className="text-sm font-semibold text-white block">{tool.name}</span>
              <span className="text-[10px] text-gray-600">{tool.category}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
