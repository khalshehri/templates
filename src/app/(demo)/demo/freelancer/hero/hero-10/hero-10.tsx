"use client";

/**
 * Tool Belt Hero
 * Swiss-army knife multi-skill freelancer.
 * Background: #080806. Accent: orange #f97316.
 */

import { ArrowRight, Wrench } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "MULTI-SKILLED",
    heading: "One Person.",
    headingAccent: "Every Skill.",
    sub: "Design, develop, deploy. I wear every hat so you don't have to hire a team. End-to-end execution from a battle-tested veteran.",
    cta1: "Get Started",
    cta2: "Services & Rates",
    skills: [
      { name: "UI Design", level: 95 },
      { name: "Frontend", level: 90 },
      { name: "Backend", level: 85 },
      { name: "DevOps", level: 75 },
    ],
  },
  ar: {
    badge: "متعدد المهارات",
    heading: "شخص واحد.",
    headingAccent: "كل المهارات.",
    sub: "صمّم، طوّر، انشر. ألبس كل القبعات حتى لا تحتاج فريقاً. تنفيذ شامل من محترف مخضرم.",
    cta1: "ابدأ الآن",
    cta2: "الخدمات والأسعار",
    skills: [
      { name: "تصميم UI", level: 95 },
      { name: "فرونت إند", level: 90 },
      { name: "باك إند", level: 85 },
      { name: "DevOps", level: 75 },
    ],
  },
};

export function Hero10({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#080806" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#f97316", top: "30%", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8">
              <Wrench className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold text-orange-300 tracking-[0.2em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 88px)" }}>
              {t.heading}<br />
              <span style={{ color: "#f97316" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Skill bars */}
          <div className="space-y-5" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            {t.skills.map((s, i) => (
              <div key={i} style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-white">{s.name}</span>
                  <span className="text-xs font-mono text-orange-400">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800/50 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
                    style={{ width: `${s.level}%`, animation: `barFill 1s ease-out ${0.5 + i * 0.15}s both` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes barFill { from{width:0} }
      `}</style>
    </section>
  );
}
