"use client";

/**
 * Dashboard Preview Hero
 * SaaS dashboard mockup with floating metrics.
 * Background: #06060a. Accent: indigo #6366f1.
 */

import { ArrowRight, BarChart3 } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "ANALYTICS PLATFORM",
    heading: "Data That",
    headingAccent: "Drives Growth",
    sub: "Real-time analytics, predictive insights, and automated reporting. Everything you need to make smarter decisions, faster.",
    cta1: "Start Free Trial",
    cta2: "Watch Demo",
    metrics: [
      { value: "2.4M", label: "Events/day", trend: "+12%" },
      { value: "99.9%", label: "Uptime SLA", trend: "Guaranteed" },
      { value: "<50ms", label: "Query Time", trend: "P99" },
    ],
  },
  ar: {
    badge: "منصة تحليلات",
    heading: "بيانات",
    headingAccent: "تُحرّك النمو",
    sub: "تحليلات فورية، رؤى تنبؤية، وتقارير آلية. كل ما تحتاجه لاتخاذ قرارات أذكى وأسرع.",
    cta1: "ابدأ مجاناً",
    cta2: "شاهد العرض",
    metrics: [
      { value: "2.4M", label: "حدث/يوم", trend: "+12%" },
      { value: "99.9%", label: "اتفاقية الجهوزية", trend: "مضمون" },
      { value: "<50ms", label: "وقت الاستعلام", trend: "P99" },
    ],
  },
};

export function Hero01({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#06060a" }}>
      {/* Indigo glow */}
      <div className="absolute w-[500px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#6366f1", top: "20%", right: "10%" }} />

      {/* Grid dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.5) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      {/* Floating dashboard mockup */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[450px] opacity-[0.06] pointer-events-none hidden lg:block rounded-xl border border-indigo-500/20 overflow-hidden">
        <div className="h-6 bg-indigo-500/10 flex items-center px-3 gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
        </div>
        <div className="p-4 space-y-3">
          {[75, 45, 60, 85, 30, 55, 70].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-16 h-2 bg-indigo-500/20 rounded" />
              <div className="h-3 bg-indigo-500/15 rounded" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8">
            <BarChart3 className="w-4 h-4 text-indigo-400" />
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

          <div className="grid sm:grid-cols-3 gap-3">
            {t.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-xl border border-indigo-500/10 bg-indigo-500/[0.03]"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <span className="text-xl font-bold text-indigo-400 font-mono">{m.value}</span>
                <p className="text-xs text-white mt-1">{m.label}</p>
                <p className="text-[10px] text-indigo-400/50 font-mono">{m.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
