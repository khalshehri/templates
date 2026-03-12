"use client";

/**
 * Dashboard Preview Hero
 * SaaS product showcase — mock app screenshot centered.
 * Background: #050507. Accent: sky-400 / blue-500.
 * Large floating "app window" with mock UI inside.
 */

import { ArrowRight, Zap } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "NOW IN BETA",
    heading: "Your Operations,",
    headingAccent: "One Dashboard",
    sub: "Real-time KPIs, automated workflows, and team collaboration — all in a single pane of glass. Finally, software that works the way you think.",
    cta1: "Start Free Trial",
    cta2: "Watch Demo",
    window: {
      tabs: ["Overview", "Analytics", "Team"],
      metrics: [
        { label: "Revenue", value: "$2.4M", change: "+12.3%" },
        { label: "Users", value: "48.2K", change: "+8.1%" },
        { label: "Uptime", value: "99.98%", change: "+0.02%" },
      ],
      chartBars: [35, 52, 45, 68, 72, 58, 80, 75, 88, 65, 92, 85],
    },
  },
  ar: {
    badge: "الآن في النسخة التجريبية",
    heading: "عملياتك،",
    headingAccent: "لوحة واحدة",
    sub: "مؤشرات أداء فورية، سير عمل آلي، وتعاون الفريق — كل ذلك في شاشة واحدة. أخيراً، برنامج يعمل بطريقتك.",
    cta1: "ابدأ مجاناً",
    cta2: "شاهد العرض",
    window: {
      tabs: ["نظرة عامة", "التحليلات", "الفريق"],
      metrics: [
        { label: "الإيرادات", value: "$2.4M", change: "+12.3%" },
        { label: "المستخدمون", value: "48.2K", change: "+8.1%" },
        { label: "وقت التشغيل", value: "99.98%", change: "+0.02%" },
      ],
      chartBars: [35, 52, 45, 68, 72, 58, 80, 75, 88, 65, 92, 85],
    },
  },
};

export function Hero13({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#050507" }}>
      {/* Glow behind window */}
      <div className="absolute w-[600px] h-[400px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ background: "#0ea5e9", top: "35%", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Text content */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 mb-8"
            style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <Zap className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-mono font-bold text-sky-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(40px, 7vw, 80px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
            {t.heading}<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #3b82f6)" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed"
            style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(14,165,233,0.3)]">
              {t.cta1}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>
        </div>

        {/* Mock App Window */}
        <div className="relative rounded-2xl border border-gray-800 bg-gray-950/80 overflow-hidden shadow-[0_20px_80px_rgba(14,165,233,0.08)]"
          style={{ animation: "windowReveal 0.8s ease-out 0.4s both" }}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 flex justify-center gap-1">
              {t.window.tabs.map((tab, i) => (
                <span key={i} className={`px-3 py-1 text-xs rounded-md ${i === 0 ? "bg-sky-500/10 text-sky-400" : "text-gray-600"}`}>{tab}</span>
              ))}
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6">
            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {t.window.metrics.map((m, i) => (
                <div key={i} className="text-left p-4 rounded-xl border border-gray-800 bg-gray-900/30">
                  <div className="text-xs text-gray-500 mb-1">{m.label}</div>
                  <div className="text-xl font-bold text-white">{m.value}</div>
                  <div className="text-xs text-emerald-400 mt-1">{m.change}</div>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <div className="flex items-end justify-between gap-1.5 h-[100px]">
                {t.window.chartBars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, rgba(14,165,233,${0.2 + (h / 100) * 0.4}), rgba(59,130,246,${0.1 + (h / 100) * 0.3}))`,
                      animation: `barGrow 0.6s ease-out ${0.6 + i * 0.05}s both`,
                    }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes windowReveal { from{opacity:0;transform:translateY(40px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes barGrow { from{height:0} }
      `}</style>
    </section>
  );
}
