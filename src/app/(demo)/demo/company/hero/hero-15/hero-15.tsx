"use client";

/**
 * Magazine Editorial Hero
 * Bold editorial typography layout with image blocks.
 * Newspaper / magazine aesthetic. Large serif-like heading.
 * Background: #fafaf9 (light). Accent: black / red.
 */

import { ArrowRight, Newspaper } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "ISSUE №47 — MARCH 2025",
    heading: "THE FUTURE",
    headingLine2: "IS BUILT",
    headingAccent: "HERE",
    sub: "How one company is quietly reshaping the digital landscape across the Middle East — and why the world is starting to notice.",
    cta1: "Read the Story",
    cta2: "Subscribe",
    sidebar: ["Strategy", "Innovation", "Growth", "Culture"],
    pullQuote: "\"We don't predict the future. We build it.\"",
    pullQuoteAr: "\"لا نتنبأ بالمستقبل. نحن نبنيه.\"",
  },
  ar: {
    badge: "العدد ٤٧ — مارس ٢٠٢٥",
    heading: "المستقبل",
    headingLine2: "يُبنى",
    headingAccent: "هنا",
    sub: "كيف تعيد شركة واحدة تشكيل المشهد الرقمي في الشرق الأوسط بهدوء — ولماذا بدأ العالم ينتبه.",
    cta1: "اقرأ القصة",
    cta2: "اشترك",
    sidebar: ["استراتيجية", "ابتكار", "نمو", "ثقافة"],
    pullQuote: "\"لا نتنبأ بالمستقبل. نحن نبنيه.\"",
    pullQuoteAr: "\"لا نتنبأ بالمستقبل. نحن نبنيه.\"",
  },
};

export function Hero15({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#fafaf9" }}>
      {/* Red accent stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className={`grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start ${isAr ? "" : ""}`}>
          {/* Main content */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`}>
            <div className={`inline-flex items-center gap-2 mb-6 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.5s ease-out both" }}>
              <Newspaper className="w-4 h-4 text-red-600" />
              <span className="text-xs font-mono font-bold text-gray-500 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <div className="mb-8" style={{ animation: "fadeUp 0.5s ease-out 0.1s both" }}>
              <h1 className="font-black text-gray-900 leading-[0.85] tracking-[-0.04em]"
                style={{ fontSize: "clamp(52px, 10vw, 110px)", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                {t.heading}<br />
                {t.headingLine2}<br />
                <span className="text-red-600">{t.headingAccent}</span>
              </h1>
            </div>

            {/* Horizontal rule */}
            <div className="w-20 h-0.5 bg-gray-900 mb-6" style={{ animation: "lineGrow 0.6s ease-out 0.2s both" }} />

            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg"
              style={{ animation: "fadeUp 0.5s ease-out 0.2s both" }}>{t.sub}</p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.5s ease-out 0.3s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-600 hover:text-gray-900 font-medium rounded-xl border border-gray-300 hover:border-gray-500 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Sidebar with image blocks and pull quote */}
          <div className={`space-y-6 ${isAr ? "lg:order-1" : ""}`} style={{ animation: "fadeUp 0.5s ease-out 0.25s both" }}>
            {/* Featured image placeholder */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)" }} />
              {/* Abstract shapes suggesting a portrait/photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-white/10" />
                <div className="absolute w-16 h-16 rounded-full border border-white/5 mt-2" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-xs text-white/60 font-mono">CEO Portrait — 2025</span>
              </div>
            </div>

            {/* Pull quote */}
            <blockquote className={`text-xl font-bold text-gray-900 leading-snug border-red-600 ${isAr ? "border-r-4 pr-4" : "border-l-4 pl-4"}`}
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {isAr ? t.pullQuoteAr : t.pullQuote}
            </blockquote>

            {/* Category tags */}
            <div className={`flex flex-wrap gap-2 ${isAr ? "justify-end" : ""}`}>
              {t.sidebar.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-mono text-gray-500 border border-gray-300 rounded">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes lineGrow { from{width:0} to{width:80px} }
      `}</style>
    </section>
  );
}
