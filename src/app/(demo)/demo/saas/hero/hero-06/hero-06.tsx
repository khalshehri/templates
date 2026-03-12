"use client";

/**
 * Integration Hub Hero
 * Connected apps / integration platform.
 * Background: #060608. Accent: blue #3b82f6.
 */

import { ArrowRight, Plug } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "INTEGRATION PLATFORM",
    heading: "Connect",
    headingAccent: "Everything",
    sub: "500+ pre-built integrations. Connect your entire stack in minutes, not months. Slack, Salesforce, HubSpot, and more.",
    cta1: "Browse Integrations",
    cta2: "Build Custom",
    integrations: ["Slack", "Salesforce", "HubSpot", "Stripe", "Jira", "GitHub", "Notion", "Zapier"],
  },
  ar: {
    badge: "منصة التكامل",
    heading: "اربط",
    headingAccent: "كل شيء",
    sub: "500+ تكامل جاهز. اربط مجموعتك التقنية بالكامل في دقائق لا أشهر. Slack، Salesforce، HubSpot، والمزيد.",
    cta1: "تصفح التكاملات",
    cta2: "ابنِ مخصص",
    integrations: ["Slack", "Salesforce", "HubSpot", "Stripe", "Jira", "GitHub", "Notion", "Zapier"],
  },
};

export function Hero06({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060608" }}>
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-8 blur-[120px] pointer-events-none"
        style={{ background: "#3b82f6", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Hub center */}
        <circle cx="50" cy="50" r="3" fill="#3b82f6" opacity="0.4">
          <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 50 + Math.cos(rad) * 35;
          const y2 = 50 + Math.sin(rad) * 35;
          return (
            <g key={i}>
              <line x1="50" y1="50" x2={x2} y2={y2} stroke="#3b82f6" strokeWidth="0.2" opacity="0.3" />
              <circle cx={x2} cy={y2} r="1.5" fill="#3b82f6" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Plug className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-mono font-bold text-blue-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#3b82f6" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.integrations.map((name, i) => (
            <span key={i} className="px-4 py-2 text-sm font-medium text-blue-300/60 border border-blue-500/10 rounded-lg bg-blue-500/[0.03] hover:border-blue-500/25 transition-all">{name}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
