"use client";

/**
 * Cinematic Widescreen Hero
 * Full-bleed background image with cinematic letterbox bars.
 * Dramatic gradient overlay simulating a city/office skyline at dusk.
 * Background: gradient. Accent: warm orange #f59e0b.
 */

import { ArrowRight, Building2 } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "ESTABLISHED 1997",
    heading: "Building",
    headingAccent: "Legacies",
    sub: "Three decades of transforming industries across the Middle East. From humble beginnings to a global enterprise — our story is one of ambition, resilience, and relentless execution.",
    cta1: "Our Story",
    cta2: "Annual Report",
    ticker: ["Dubai", "Riyadh", "Cairo", "London", "Singapore", "New York"],
  },
  ar: {
    badge: "تأسست 1997",
    heading: "نبني",
    headingAccent: "إرثاً",
    sub: "ثلاثة عقود من تحويل الصناعات في الشرق الأوسط. من بدايات متواضعة إلى مؤسسة عالمية — قصتنا هي قصة طموح ومرونة وتنفيذ لا يتوقف.",
    cta1: "قصتنا",
    cta2: "التقرير السنوي",
    ticker: ["دبي", "الرياض", "القاهرة", "لندن", "سنغافورة", "نيويورك"],
  },
};

export function Hero12({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Full-bleed background — simulated city skyline at dusk */}
      <div className="absolute inset-0">
        {/* Sky gradient */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #0c0a1a 0%, #1a1235 20%, #2d1b4e 40%, #4a2040 55%, #8b3a2a 70%, #c45e20 85%, #f59e0b 100%)" }} />
        {/* Building silhouettes */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax slice" style={{ height: "45%" }}>
          <rect x="50" y="80" width="60" height="220" fill="rgba(0,0,0,0.85)" />
          <rect x="55" y="90" width="8" height="8" fill="rgba(245,158,11,0.15)" />
          <rect x="75" y="100" width="8" height="8" fill="rgba(245,158,11,0.2)" />
          <rect x="65" y="130" width="8" height="8" fill="rgba(245,158,11,0.1)" />

          <rect x="130" y="40" width="80" height="260" fill="rgba(0,0,0,0.9)" />
          <rect x="140" y="55" width="6" height="6" fill="rgba(245,158,11,0.2)" />
          <rect x="160" y="70" width="6" height="6" fill="rgba(245,158,11,0.15)" />
          <rect x="180" y="50" width="6" height="6" fill="rgba(245,158,11,0.1)" />
          <rect x="150" y="100" width="6" height="6" fill="rgba(245,158,11,0.25)" />

          <rect x="240" y="100" width="50" height="200" fill="rgba(0,0,0,0.8)" />
          <rect x="310" y="60" width="70" height="240" fill="rgba(0,0,0,0.88)" />
          <rect x="400" y="120" width="45" height="180" fill="rgba(0,0,0,0.82)" />
          <rect x="470" y="30" width="90" height="270" fill="rgba(0,0,0,0.92)" />
          <rect x="480" y="40" width="8" height="8" fill="rgba(245,158,11,0.3)" />
          <rect x="510" y="60" width="8" height="8" fill="rgba(245,158,11,0.15)" />
          <rect x="500" y="90" width="8" height="8" fill="rgba(245,158,11,0.2)" />
          <rect x="530" y="45" width="8" height="8" fill="rgba(245,158,11,0.1)" />

          <rect x="580" y="80" width="55" height="220" fill="rgba(0,0,0,0.85)" />
          <rect x="660" y="50" width="100" height="250" fill="rgba(0,0,0,0.9)" />
          <rect x="680" y="65" width="6" height="6" fill="rgba(245,158,11,0.2)" />
          <rect x="720" y="80" width="6" height="6" fill="rgba(245,158,11,0.15)" />
          <rect x="700" y="110" width="6" height="6" fill="rgba(245,158,11,0.25)" />

          <rect x="780" y="90" width="60" height="210" fill="rgba(0,0,0,0.83)" />
          <rect x="860" y="20" width="85" height="280" fill="rgba(0,0,0,0.93)" />
          <rect x="870" y="35" width="8" height="8" fill="rgba(245,158,11,0.2)" />
          <rect x="900" y="50" width="8" height="8" fill="rgba(245,158,11,0.3)" />
          <rect x="920" y="70" width="8" height="8" fill="rgba(245,158,11,0.1)" />

          <rect x="970" y="70" width="50" height="230" fill="rgba(0,0,0,0.86)" />
          <rect x="1040" y="100" width="70" height="200" fill="rgba(0,0,0,0.84)" />
          <rect x="1130" y="60" width="70" height="240" fill="rgba(0,0,0,0.88)" />
        </svg>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(12,10,26,0.8) 0%, rgba(12,10,26,0.4) 50%, rgba(12,10,26,0.7) 100%)" }} />
      </div>

      {/* Letterbox bar top */}
      <div className="relative z-10 h-12 bg-black/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className={`w-full max-w-6xl mx-auto px-6 py-20 ${isAr ? "text-right" : ""}`}>
          <div className={`max-w-2xl ${isAr ? "mr-0 ml-auto" : ""}`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-black/40 backdrop-blur-sm mb-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out both" }}>
              <Building2 className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(52px, 10vw, 120px)", animation: "fadeUp 0.6s ease-out 0.1s both", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
              {t.heading}<br />
              <span style={{ color: "#f59e0b", textShadow: "0 0 60px rgba(245,158,11,0.3)" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg"
              style={{ animation: "fadeUp 0.6s ease-out 0.2s both", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>{t.sub}</p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(245,158,11,0.3)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-white/80 hover:text-white font-medium rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all">{t.cta2}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Letterbox bar bottom with city ticker */}
      <div className="relative z-10 h-12 bg-black/80 backdrop-blur-sm flex items-center overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...t.ticker, ...t.ticker, ...t.ticker].map((city, i) => (
            <span key={i} className="text-xs font-mono text-amber-500/40 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-500/40" />
              {city}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </section>
  );
}
