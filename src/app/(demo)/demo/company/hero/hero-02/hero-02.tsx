"use client";

/**
 * Aurora Waves Hero
 * Innovation / consulting firm aesthetic.
 * Background: #0a0f1e. Accent: emerald-400 / teal-300.
 * Layered SVG waves oscillating at bottom + left-aligned content.
 */

import { ArrowRight, Lightbulb } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "INNOVATION PARTNERS",
    heading: "Transform",
    headingAccent: "Your Vision",
    headingSuffix: "Into Reality",
    sub: "From strategy to execution, we help forward-thinking organizations unlock growth, streamline operations, and build what's next.",
    cta1: "Book a Consultation",
    cta2: "Our Approach",
    pills: [
      { icon: "📐", text: "Strategy & Planning" },
      { icon: "⚡", text: "Digital Transformation" },
      { icon: "📈", text: "Growth Advisory" },
    ],
  },
  ar: {
    badge: "شركاء الابتكار",
    heading: "حوّل",
    headingAccent: "رؤيتك",
    headingSuffix: "إلى واقع",
    sub: "من الاستراتيجية إلى التنفيذ، نساعد المؤسسات الطموحة على إطلاق النمو وتبسيط العمليات وبناء المستقبل.",
    cta1: "احجز استشارة",
    cta2: "منهجنا",
    pills: [
      { icon: "📐", text: "التخطيط والاستراتيجية" },
      { icon: "⚡", text: "التحول الرقمي" },
      { icon: "📈", text: "استشارات النمو" },
    ],
  },
};

export function Hero02({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0f1e" }}>
      {/* Aurora glow */}
      <div className="absolute w-[500px] h-[300px] rounded-full pointer-events-none opacity-[0.06] blur-[100px]"
        style={{ background: "linear-gradient(135deg, #34d399, #5eead4)", top: "20%", left: "30%", animation: "auroraGlow 8s ease-in-out infinite" }} />

      {/* SVG Waves at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none">
        <svg className="absolute bottom-0 w-[200%] h-full" viewBox="0 0 2400 400" preserveAspectRatio="none"
          style={{ animation: "waveShift1 12s ease-in-out infinite" }}>
          <path d="M0,300 C400,200 800,350 1200,280 C1600,210 2000,320 2400,260 L2400,400 L0,400Z"
            fill="rgba(52,211,153,0.04)" />
        </svg>
        <svg className="absolute bottom-0 w-[200%] h-full" viewBox="0 0 2400 400" preserveAspectRatio="none"
          style={{ animation: "waveShift2 16s ease-in-out infinite" }}>
          <path d="M0,320 C300,250 700,370 1100,300 C1500,230 1900,340 2400,290 L2400,400 L0,400Z"
            fill="rgba(94,234,212,0.06)" />
        </svg>
        <svg className="absolute bottom-0 w-[200%] h-full" viewBox="0 0 2400 400" preserveAspectRatio="none"
          style={{ animation: "waveShift3 20s ease-in-out infinite" }}>
          <path d="M0,340 C500,280 900,380 1300,310 C1700,240 2100,350 2400,300 L2400,400 L0,400Z"
            fill="rgba(52,211,153,0.08)" />
        </svg>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 py-28 ${isAr ? "text-right" : "text-left"}`}>
        <div className={`max-w-2xl ${isAr ? "mr-0 ml-auto" : ""}`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}
            style={{ animation: "fadeSlideIn 0.6s ease-out both" }}>
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(44px, 8vw, 96px)", animation: "fadeSlideIn 0.6s ease-out 0.1s both" }}>
            {t.heading}<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #34d399, #5eead4)" }}>{t.headingAccent}</span><br />
            {t.headingSuffix}
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg"
            style={{ animation: "fadeSlideIn 0.6s ease-out 0.2s both" }}>{t.sub}</p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-12 ${isAr ? "sm:flex-row-reverse" : ""}`}
            style={{ animation: "fadeSlideIn 0.6s ease-out 0.3s both" }}>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]">
              {t.cta1}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          {/* Feature pills */}
          <div className={`flex flex-wrap gap-3 ${isAr ? "justify-end" : ""}`}
            style={{ animation: "fadeSlideIn 0.6s ease-out 0.4s both" }}>
            {t.pills.map((p, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] text-sm text-emerald-300/70"
                style={{ animation: `pillAppear 0.4s ease-out ${0.5 + i * 0.1}s both` }}>
                <span>{p.icon}</span> {p.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pillAppear { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        @keyframes waveShift1 { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-10%)} }
        @keyframes waveShift2 { 0%,100%{transform:translateX(-5%)} 50%{transform:translateX(5%)} }
        @keyframes waveShift3 { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-8%)} }
        @keyframes auroraGlow { 0%,100%{opacity:0.06;transform:scale(1)} 50%{opacity:0.1;transform:scale(1.1)} }
      `}</style>
    </section>
  );
}
