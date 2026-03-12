"use client";

/**
 * Pulse Grid Hero
 * Cloud / infrastructure company aesthetic.
 * Background: #060918. Accent: blue-500 / cyan-400.
 * Dot grid with pulsing nodes + central radial glow.
 */

import { ArrowRight, Server } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "ENTERPRISE INFRASTRUCTURE",
    heading: "Powering",
    headingAccent: "Digital Infrastructure",
    headingSuffix: "At Scale",
    sub: "Deploy globally in seconds. Auto-scale to millions. Monitor everything in real-time. The cloud platform built for teams that ship fast.",
    cta1: "Start Building",
    cta2: "View Architecture",
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "50M+", label: "Requests / Day" },
      { value: "12", label: "Data Centers" },
      { value: "SOC 2", label: "Certified" },
    ],
  },
  ar: {
    badge: "بنية تحتية مؤسسية",
    heading: "ندعم",
    headingAccent: "البنية التحتية الرقمية",
    headingSuffix: "على نطاق واسع",
    sub: "انشر عالمياً في ثوانٍ. توسّع تلقائياً لملايين المستخدمين. راقب كل شيء بالوقت الفعلي. المنصة السحابية المبنية للفِرق السريعة.",
    cta1: "ابدأ البناء",
    cta2: "عرض البنية",
    stats: [
      { value: "99.99%", label: "اتفاقية التشغيل" },
      { value: "+50M", label: "طلب / يومياً" },
      { value: "12", label: "مركز بيانات" },
      { value: "SOC 2", label: "معتمد" },
    ],
  },
};

/* deterministic pseudo-positions for 120 dots */
const dots = Array.from({ length: 120 }, (_, i) => ({
  x: ((i * 47 + 13) % 100),
  y: ((i * 31 + 7) % 100),
  delay: (i * 0.37) % 5,
  bright: i % 8 === 0,
}));

export function Hero01({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060918" }}>
      {/* Dot grid */}
      {dots.map((d, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: d.bright ? 4 : 2,
            height: d.bright ? 4 : 2,
            left: `${d.x}%`,
            top: `${d.y}%`,
            background: d.bright ? "#3b82f6" : "#1e3a5f",
            opacity: d.bright ? 0.8 : 0.3,
            animation: d.bright ? `dotPulse 3s ease-in-out ${d.delay}s infinite` : undefined,
          }} />
      ))}

      {/* Central radial glow */}
      <div className="absolute w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          top: "30%", left: "50%", transform: "translateX(-50%)",
          animation: "radialBreathe 6s ease-in-out infinite",
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
          style={{ animation: "fadeUp 0.6s ease-out both" }}>
          <Server className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-mono font-bold text-blue-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(44px, 9vw, 100px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #3b82f6, #22d3ee)" }}>{t.headingAccent}</span><br />
          <span className="text-gray-500" style={{ fontSize: "0.6em" }}>{t.headingSuffix}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 ${isAr ? "sm:flex-row-reverse" : ""}`}
          style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            {t.cta1}
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
          {t.stats.map((s, i) => (
            <div key={i} className="px-4 py-4 rounded-xl border border-blue-500/10 bg-blue-500/[0.03]">
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dotPulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:1;transform:scale(2)} }
        @keyframes radialBreathe { 0%,100%{opacity:1;transform:translateX(-50%) scale(1)} 50%{opacity:0.6;transform:translateX(-50%) scale(1.15)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
