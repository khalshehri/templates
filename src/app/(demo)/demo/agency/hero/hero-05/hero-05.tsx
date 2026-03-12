"use client";

/**
 * Blueprint Hero
 * Architectural blueprint / wireframe aesthetic.
 * Background: #040a14. Accent: blueprint blue #3b82f6.
 */

import { ArrowRight, PenTool } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "STRATEGIC DESIGN",
    heading: "Designed by",
    headingAccent: "Blueprint",
    sub: "Every masterpiece starts with a plan. We architect digital experiences with engineering precision and creative boldness.",
    cta1: "See the Plan",
    cta2: "Our Process",
    process: [
      { step: "01", title: "Discover", desc: "Research & strategy" },
      { step: "02", title: "Design", desc: "Visual architecture" },
      { step: "03", title: "Develop", desc: "Precision build" },
      { step: "04", title: "Deploy", desc: "Launch & optimize" },
    ],
  },
  ar: {
    badge: "تصميم استراتيجي",
    heading: "صُمّم وفق",
    headingAccent: "المخطط",
    sub: "كل تحفة تبدأ بخطة. نبني تجارب رقمية بدقة هندسية وجرأة إبداعية.",
    cta1: "اطلع على الخطة",
    cta2: "منهجيتنا",
    process: [
      { step: "01", title: "اكتشف", desc: "بحث واستراتيجية" },
      { step: "02", title: "صمّم", desc: "هندسة بصرية" },
      { step: "03", title: "طوّر", desc: "بناء دقيق" },
      { step: "04", title: "أطلق", desc: "إطلاق وتحسين" },
    ],
  },
};

export function Hero05({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#040a14" }}>
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)", backgroundSize: "200px 200px" }} />

      {/* Corner marks */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-blue-500/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-blue-500/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-blue-500/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-blue-500/20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-blue-500/20 bg-blue-500/10 mb-8">
              <PenTool className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono font-bold text-blue-300 tracking-[0.2em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 88px)" }}>
              {t.heading}<br />
              <span style={{ color: "#3b82f6" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-7 py-3.5 text-gray-400 hover:text-white font-medium rounded-lg border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          <div className="space-y-4" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            {t.process.map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-blue-500/10 bg-blue-500/[0.03]"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <span className="text-2xl font-mono font-bold text-blue-500/40">{p.step}</span>
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                </div>
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
