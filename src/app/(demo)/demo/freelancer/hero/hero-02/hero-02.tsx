"use client";

/**
 * Terminal Hero
 * Code editor / terminal aesthetic.
 * Background: #0d1117. Accent: green #22c55e.
 */

import { ArrowRight, Terminal } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FULL-STACK ENGINEER",
    heading: "I Build",
    headingAccent: "The Future",
    sub: "Senior engineer with 8+ years shipping production-grade applications. Clean code, scalable architecture, on-time delivery.",
    cta1: "Let's Talk",
    cta2: "GitHub",
    metrics: [
      { value: "8+", label: "Years Experience" },
      { value: "150+", label: "Projects Shipped" },
      { value: "4.9★", label: "Client Rating" },
    ],
  },
  ar: {
    badge: "مهندس Full-Stack",
    heading: "أبني",
    headingAccent: "المستقبل",
    sub: "مهندس أول بخبرة 8+ سنوات في بناء تطبيقات إنتاجية. كود نظيف، هندسة قابلة للتوسع، تسليم في الموعد.",
    cta1: "لنتحدث",
    cta2: "GitHub",
    metrics: [
      { value: "8+", label: "سنوات خبرة" },
      { value: "150+", label: "مشروع مُنجز" },
      { value: "4.9★", label: "تقييم العملاء" },
    ],
  },
};

export function Hero02({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0d1117" }}>
      {/* Terminal window decoration */}
      <div className="absolute top-20 right-10 w-[450px] opacity-[0.06] pointer-events-none hidden lg:block rounded-lg border border-green-500/20 overflow-hidden">
        <div className="h-8 bg-green-500/10 flex items-center px-3 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        <div className="p-4 font-mono text-[10px] text-green-400/50 leading-5">
          <div>$ npm run build</div>
          <div className="text-gray-600">✓ Compiled successfully</div>
          <div>$ npm run deploy</div>
          <div className="text-green-500/60">✓ Deployed to production</div>
          <div className="mt-2">$ _<span className="animate-pulse">█</span></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-green-500/20 bg-green-500/10 mb-8">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-xs font-mono font-bold text-green-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(48px, 10vw, 108px)" }}>
            {t.heading}<br />
            <span style={{ color: "#22c55e", textShadow: "0 0 30px rgba(34,197,94,0.2)" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-lg border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          <div className="flex flex-wrap gap-6">
            {t.metrics.map((m, i) => (
              <div key={i} className="px-5 py-3 rounded-lg border border-green-500/10 bg-green-500/[0.03]"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <span className="text-xl font-bold text-green-400 font-mono">{m.value}</span>
                <span className="block text-xs text-gray-500 mt-1">{m.label}</span>
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
