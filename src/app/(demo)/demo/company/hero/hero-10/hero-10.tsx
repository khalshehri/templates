"use client";

/**
 * Vaporwave Grid Hero
 * Retro-futuristic synthwave perspective grid with sunset gradient sky.
 * Background: deep purple (#0a0015). Accent: hot pink (#ec4899) + cyan.
 * Signature: CSS perspective grid floor + gradient horizon + chrome text.
 */

import { ArrowRight, Zap } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "RETROFUTURE CORP",
    heading: "Tomorrow",
    headingAccent: "Built Today",
    sub: "We fuse cutting-edge technology with bold vision to create digital experiences that feel like they're from the future — because they are.",
    cta1: "Enter the Grid",
    cta2: "Our Vision",
    columns: [
      { value: "2025", label: "FOUNDED" },
      { value: "∞", label: "POTENTIAL" },
      { value: "NOW", label: "THE TIME IS" },
    ],
    bottomTicker: "DIGITAL TRANSFORMATION ◆ AI INTEGRATION ◆ CLOUD NATIVE ◆ EDGE COMPUTING ◆ QUANTUM READY",
  },
  ar: {
    badge: "شركة المستقبل الرجعي",
    heading: "الغد",
    headingAccent: "يُبنى اليوم",
    sub: "ندمج التقنية المتطورة مع الرؤية الجريئة لإنشاء تجارب رقمية تبدو وكأنها من المستقبل — لأنها كذلك.",
    cta1: "ادخل الشبكة",
    cta2: "رؤيتنا",
    columns: [
      { value: "2025", label: "تأسست" },
      { value: "∞", label: "الإمكانيات" },
      { value: "الآن", label: "الوقت هو" },
    ],
    bottomTicker: "التحول الرقمي ◆ تكامل AI ◆ سحابة أصلية ◆ حوسبة الحافة ◆ جاهزون للكم",
  },
};

export function Hero10({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "#0a0015" }}>
      {/* Sunset gradient sky */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0a0015 0%, #1a0030 30%, #3b0764 50%, #7c2d12 70%, #f97316 85%, #fbbf24 95%, #fbbf24 100%)", opacity: 0.15 }} />

      {/* Perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none overflow-hidden"
        style={{ perspective: "400px" }}>
        <div className="absolute inset-0"
          style={{
            transform: "rotateX(60deg)", transformOrigin: "center top",
            backgroundImage: "linear-gradient(rgba(236,72,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            animation: "gridScroll 3s linear infinite",
          }} />
      </div>

      {/* Horizon glow */}
      <div className="absolute w-full h-[3px] pointer-events-none" style={{ top: "55%", background: "linear-gradient(90deg, transparent, #ec4899, #f97316, #ec4899, transparent)", boxShadow: "0 0 60px 20px rgba(236,72,153,0.3)" }} />

      {/* Sun */}
      <div className="absolute w-[200px] h-[100px] rounded-t-full pointer-events-none"
        style={{ bottom: "44%", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(to top, #f97316, #fbbf24)", opacity: 0.3, boxShadow: "0 0 80px 30px rgba(249,115,22,0.2)" }} />
      {/* Sun scan lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{ bottom: `${44 + i * 2}%`, left: "50%", transform: "translateX(-50%)", width: `${200 - i * 20}px`, height: "4px", background: "#0a0015", opacity: 0.8 }} />
      ))}

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8"
            style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <Zap className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-mono font-bold text-pink-300 tracking-[0.2em] uppercase">{t.badge}</span>
          </div>

          {/* Chrome text headline */}
          <h1 className="font-black leading-[0.85] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to bottom, #fdf4ff, #f0abfc, #c084fc, #7c3aed)", WebkitBackgroundClip: "text" }}>
              {t.heading}
            </span>
            <br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to bottom, #fff7ed, #fdba74, #f97316, #c2410c)" }}>
              {t.headingAccent}
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_50px_rgba(236,72,153,0.4)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-200">{t.cta2}</button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12"
            style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
            {t.columns.map((c, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl font-black bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to bottom, #fdf4ff, #d946ef)" }}>{c.value}</span>
                <span className="block text-[10px] text-gray-600 tracking-[0.3em] uppercase font-mono mt-1">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-10 border-t border-pink-500/10 py-3 overflow-hidden"
        style={{ animation: "fadeIn 0.6s ease-out 0.6s both" }}>
        <div className="whitespace-nowrap font-mono text-[10px] text-pink-500/40 tracking-[0.2em]"
          style={{ animation: "ticker 20s linear infinite" }}>
          {t.bottomTicker} &nbsp;&nbsp; {t.bottomTicker} &nbsp;&nbsp; {t.bottomTicker}
        </div>
      </div>

      <style>{`
        @keyframes gridScroll { from{background-position:0 0} to{background-position:0 60px} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
      `}</style>
    </section>
  );
}
