"use client";

/**
 * Desk Setup Hero
 * Cozy workspace with glowing monitor aesthetic.
 * Background: #080810. Accent: indigo #6366f1.
 */

import { ArrowRight, Monitor } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FREELANCE DEVELOPER",
    heading: "Code.",
    headingAccent: "Create. Ship.",
    sub: "Independent developer crafting pixel-perfect web experiences. From concept to deployment — one person, zero compromises.",
    cta1: "Hire Me",
    cta2: "View Projects",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
  },
  ar: {
    badge: "مطور مستقل",
    heading: "برمج.",
    headingAccent: "ابتكر. أطلق.",
    sub: "مطور مستقل يصنع تجارب ويب مثالية. من الفكرة إلى الإطلاق — شخص واحد، بلا تنازلات.",
    cta1: "وظّفني",
    cta2: "المشاريع",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
  },
};

export function Hero01({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#080810" }}>
      {/* Monitor glow */}
      <div className="absolute w-[500px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#6366f1", top: "20%", right: "15%" }} />

      {/* Code lines decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] opacity-[0.04] pointer-events-none font-mono text-xs text-indigo-400 leading-6 hidden lg:block"
        style={{ animation: "fadeIn 2s ease-out 0.5s both" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{ paddingLeft: `${(i % 4) * 20}px`, width: `${60 + (i * 17) % 40}%` }}
            className="h-2.5 bg-indigo-500/30 rounded-sm mb-1.5" />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8">
            <Monitor className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono font-bold text-indigo-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(48px, 10vw, 108px)" }}>
            {t.heading}<br />
            <span style={{ color: "#6366f1" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          <div className="flex flex-wrap gap-2">
            {t.stack.map((s, i) => (
              <span key={i} className="px-3 py-1.5 text-xs font-mono text-indigo-300/70 border border-indigo-500/15 rounded-md bg-indigo-500/[0.05]"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.08}s both` }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
      `}</style>
    </section>
  );
}
