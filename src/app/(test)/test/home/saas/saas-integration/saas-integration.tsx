"use client";

/**
 * Integration Hub Hero
 * Central hub icon with integration logos/icons connecting via animated lines.
 * Platform ecosystem visualization showing how services connect.
 * Orbiting connection nodes with pulse animations.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "500+ Integrations",
    heading: "Connect",
    headingHighlight: "Everything",
    subheading:
      "One platform to rule them all. Seamlessly connect your favorite tools, automate workflows, and sync data across your entire stack.",
    ctaPrimary: "Browse Integrations",
    ctaSecondary: "Build Custom",
    hubLabel: "Your\nPlatform",
    integrations: [
      { icon: "Sl", name: "Slack", angle: 0 },
      { icon: "Gh", name: "GitHub", angle: 45 },
      { icon: "St", name: "Stripe", angle: 90 },
      { icon: "Aw", name: "AWS", angle: 135 },
      { icon: "Zp", name: "Zapier", angle: 180 },
      { icon: "Hb", name: "HubSpot", angle: 225 },
      { icon: "Jt", name: "Jira", angle: 270 },
      { icon: "Tw", name: "Twilio", angle: 315 },
    ],
    categories: [
      { name: "Payments", count: "45+" },
      { name: "Analytics", count: "38+" },
      { name: "DevOps", count: "62+" },
      { name: "CRM", count: "31+" },
      { name: "Marketing", count: "54+" },
      { name: "Support", count: "27+" },
    ],
  },
  ar: {
    badge: "+500 تكامل",
    heading: "وصّل",
    headingHighlight: "كل شيء",
    subheading:
      "منصة واحدة تربط الجميع. اربط أدواتك المفضلة بسلاسة، أتمت سير العمل، وزامن البيانات عبر مجموعتك التقنية بالكامل.",
    ctaPrimary: "تصفح التكاملات",
    ctaSecondary: "بناء مخصص",
    hubLabel: "منصتك",
    integrations: [
      { icon: "Sl", name: "Slack", angle: 0 },
      { icon: "Gh", name: "GitHub", angle: 45 },
      { icon: "St", name: "Stripe", angle: 90 },
      { icon: "Aw", name: "AWS", angle: 135 },
      { icon: "Zp", name: "Zapier", angle: 180 },
      { icon: "Hb", name: "HubSpot", angle: 225 },
      { icon: "Jt", name: "Jira", angle: 270 },
      { icon: "Tw", name: "Twilio", angle: 315 },
    ],
    categories: [
      { name: "المدفوعات", count: "45+" },
      { name: "التحليلات", count: "38+" },
      { name: "DevOps", count: "62+" },
      { name: "CRM", count: "31+" },
      { name: "التسويق", count: "54+" },
      { name: "الدعم", count: "27+" },
    ],
  },
};

export function SaasIntegration({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const radius = 160;

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hubPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(139,92,246,0.15), 0 0 60px rgba(139,92,246,0.05); }
          50% { box-shadow: 0 0 50px rgba(139,92,246,0.3), 0 0 90px rgba(139,92,246,0.1); }
        }
        @keyframes nodeFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }
        @keyframes lineFlow {
          0% { stroke-dashoffset: 16; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes dotFlow {
          0% { offset-distance: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes ringExpand {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.1; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08061a]">
        {/* Radial lines background */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              return (
                <line key={i} x1="50" y1="50"
                  x2={50 + Math.cos(angle) * 60} y2={50 + Math.sin(angle) * 60}
                  stroke="rgba(139,92,246,1)" strokeWidth="0.15" />
              );
            })}
          </svg>
        </div>

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 60%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Integration hub visualization */}
          <div className="fade-up relative mx-auto" style={{ animationDelay: "0.6s", width: "400px", height: "400px", maxWidth: "100%" }}>
            {/* Expanding rings */}
            <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full border border-violet-500/10"
              style={{ animation: "ringExpand 4s ease-out infinite" }} />
            <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full border border-violet-500/10"
              style={{ animation: "ringExpand 4s ease-out 1.5s infinite" }} />

            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {t.integrations.map((integ, i) => {
                const rad = (integ.angle * Math.PI) / 180;
                const x2 = 200 + Math.cos(rad) * radius;
                const y2 = 200 + Math.sin(rad) * radius;
                return (
                  <g key={i}>
                    <line x1="200" y1="200" x2={x2} y2={y2}
                      stroke="rgba(139,92,246,0.12)" strokeWidth="1"
                      strokeDasharray="4 4"
                      style={{ animation: `lineFlow 2s linear ${i * 0.3}s infinite` }} />
                    <circle r="3" fill="rgba(139,92,246,0.6)">
                      <animateMotion dur={`${2.5 + i * 0.2}s`} repeatCount="indefinite" begin={`${i * 0.4}s`}
                        path={`M200,200 L${x2},${y2}`} />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600/40 to-purple-700/40 border border-violet-500/30 flex items-center justify-center backdrop-blur-sm"
                style={{ animation: "hubPulse 3s ease-in-out infinite" }}>
                <span className="text-xs text-white/70 font-semibold text-center whitespace-pre-line leading-tight">{t.hubLabel}</span>
              </div>
            </div>

            {/* Integration nodes */}
            {t.integrations.map((integ, i) => {
              const rad = (integ.angle * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * (radius / 4) * 100 / 400 * 4;
              const y = 50 + Math.sin(rad) * (radius / 4) * 100 / 400 * 4;
              return (
                <div key={i} className="absolute z-10"
                  style={{
                    left: `${50 + Math.cos(rad) * 40}%`,
                    top: `${50 + Math.sin(rad) * 40}%`,
                    animation: `nodeFloat ${3 + (i % 3)}s ease-in-out ${i * 0.2}s infinite`,
                  }}>
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-violet-500/15 flex items-center justify-center backdrop-blur-sm hover:bg-white/[0.1] hover:border-violet-500/30 transition-all cursor-default">
                      <span className="text-xs font-bold text-violet-300">{integ.icon}</span>
                    </div>
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-white/25">{integ.name}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category pills */}
          <div className="fade-up mt-10 flex items-center justify-center gap-3 flex-wrap max-w-2xl mx-auto" style={{ animationDelay: "1s" }}>
            {t.categories.map((cat, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs text-white/30">
                <span className="text-violet-400 font-mono font-bold text-[10px]">{cat.count}</span>
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
