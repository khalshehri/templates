"use client";

/**
 * Pricing Spotlight Hero
 * Pricing-focused SaaS with clear value prop.
 * Background: #060606. Accent: emerald #10b981.
 */

import { ArrowRight, Zap } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "SIMPLE PRICING",
    heading: "One Plan.",
    headingAccent: "Everything.",
    sub: "No tiers, no gotchas. $49/month gets you every feature, unlimited users, and priority support. Simple as that.",
    cta1: "Start For $49/mo",
    cta2: "Compare Plans",
    includes: ["Unlimited Users", "All Features", "API Access", "Priority Support", "99.9% SLA", "SOC 2 Compliant"],
  },
  ar: {
    badge: "تسعير بسيط",
    heading: "خطة واحدة.",
    headingAccent: "كل شيء.",
    sub: "لا درجات، لا مفاجآت. $49/شهر تمنحك كل الميزات، مستخدمين غير محدودين، ودعم أولوية. بهذه البساطة.",
    cta1: "ابدأ بـ $49/شهر",
    cta2: "قارن الخطط",
    includes: ["مستخدمون غير محدودين", "كل الميزات", "وصول API", "دعم أولوية", "99.9% SLA", "متوافق SOC 2"],
  },
};

export function Hero05({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060606" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#10b981", top: "40%", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-emerald-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.05em] mb-6"
          style={{ fontSize: "clamp(56px, 14vw, 150px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#10b981" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.includes.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-sm text-gray-400">{item}</span>
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
