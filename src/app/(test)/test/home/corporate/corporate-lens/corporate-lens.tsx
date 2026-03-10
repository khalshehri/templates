"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Focused Vision",
    heading: "Clarity in",
    headingAccent: "Complexity",
    sub: "Through our strategic lens, we bring focus to enterprise challenges and illuminate the path to sustained growth.",
    cta: "Sharpen Your Focus",
    cta2: "Our Approach",
    items: [
      { label: "Strategy", value: "360" },
      { label: "Analytics", value: "AI" },
      { label: "Growth", value: "12x" },
      { label: "Markets", value: "90+" },
      { label: "Partners", value: "500" },
      { label: "Awards", value: "45" },
    ],
  },
  ar: {
    badge: "رؤية مركّزة",
    heading: "وضوح في",
    headingAccent: "التعقيد",
    sub: "من خلال عدستنا الاستراتيجية نجلب التركيز لتحديات المؤسسات ونضيء الطريق نحو نمو مستدام.",
    cta: "صقل تركيزك",
    cta2: "نهجنا",
    items: [
      { label: "استراتيجية", value: "360" },
      { label: "تحليلات", value: "AI" },
      { label: "نمو", value: "12x" },
      { label: "أسواق", value: "+90" },
      { label: "شركاء", value: "500" },
      { label: "جوائز", value: "45" },
    ],
  },
};

export function CorporateLens({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  const lensRadius = 160;
  const itemRadius = 260;

  return (
    <>
      <style>{`
        @keyframes lensRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes lensPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        @keyframes apertureBlades {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes itemFadeIn {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes glideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .item-fade { animation: itemFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .glide-up { animation: glideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .lens-pulse { animation: lensPulse 6s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#070c18" }}>
        {/* Radial ambient glow */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at center, rgba(30,64,120,0.15) 0%, transparent 50%)",
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col items-center">
            {/* Central lens element */}
            <div className="relative" style={{ width: `${itemRadius * 2 + 100}px`, height: `${itemRadius * 2 + 100}px`, maxWidth: "90vw", maxHeight: "90vw" }}>
              {/* Outer dashed ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/8" style={{ animation: "ringRotate 60s linear infinite" }} />

              {/* Middle ring */}
              <div className="absolute rounded-full border border-blue-400/6" style={{
                inset: `${(itemRadius * 2 + 100 - lensRadius * 2 - 120) / 2}px`,
              }} />

              {/* The lens / aperture circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lens-pulse" style={{ width: lensRadius * 2, height: lensRadius * 2 }}>
                {/* Gradient fill */}
                <div className="absolute inset-0 rounded-full" style={{
                  background: "conic-gradient(from 0deg, rgba(30,58,120,0.5), rgba(59,130,246,0.3), rgba(14,165,233,0.4), rgba(30,58,120,0.5))",
                }} />
                {/* Inner glass effect */}
                <div className="absolute inset-4 rounded-full" style={{
                  background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, rgba(30,58,95,0.4) 50%, rgba(8,12,24,0.8) 100%)",
                  boxShadow: "inset 0 0 60px rgba(59,130,246,0.1), 0 0 80px rgba(59,130,246,0.08)",
                }} />
                {/* Aperture blades (6 lines radiating from center) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" style={{ animation: "apertureBlades 8s ease-in-out infinite" }}>
                  {Array.from({ length: 6 }, (_, i) => {
                    const angle = (i * 60 * Math.PI) / 180;
                    const cx = 160, cy = 160;
                    const innerR = 40, outerR = 140;
                    return (
                      <line key={i}
                        x1={cx + Math.cos(angle) * innerR}
                        y1={cy + Math.sin(angle) * innerR}
                        x2={cx + Math.cos(angle) * outerR}
                        y2={cy + Math.sin(angle) * outerR}
                        stroke="rgba(96,165,250,0.12)" strokeWidth="1" />
                    );
                  })}
                </svg>
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400/30 border border-blue-400/20" />
              </div>

              {/* Items arranged in arc around the lens */}
              {t.items.map((item, i) => {
                // Spread items in upper and lower arcs
                const startAngle = -120;
                const endAngle = 120;
                const angleStep = (endAngle - startAngle) / (t.items.length - 1);
                const angleDeg = startAngle + i * angleStep;
                const angleRad = (angleDeg * Math.PI) / 180;
                const cx = itemRadius + 50;
                const cy = itemRadius + 50;
                const x = cx + Math.cos(angleRad) * itemRadius;
                const y = cy + Math.sin(angleRad) * itemRadius;

                return (
                  <div key={i} className="item-fade absolute" style={{
                    left: `${x - 36}px`,
                    top: `${y - 28}px`,
                    animationDelay: `${0.8 + i * 0.12}s`,
                  }}>
                    <div className="text-center px-3 py-2 rounded-lg border border-blue-400/10 bg-[#0a1528]/80 backdrop-blur-sm min-w-[72px]">
                      <div className="text-lg font-black text-blue-200/80">{item.value}</div>
                      <div className="text-[9px] text-blue-300/30 uppercase tracking-wider mt-0.5">{item.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Badge */}
            <div className="glide-up -mt-8 mb-4" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/10 bg-blue-500/5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                <span className="text-xs font-medium text-blue-300/50 tracking-widest uppercase">{t.badge}</span>
              </div>
            </div>

            {/* Heading below the lens */}
            <h1 className="glide-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-center leading-[1.1]" style={{ animationDelay: "0.4s" }}>
              <span className="text-white/90">{t.heading} </span>
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">{t.headingAccent}</span>
            </h1>

            {/* Subheading */}
            <p className="glide-up mt-5 text-base sm:text-lg text-blue-100/25 leading-relaxed max-w-lg text-center" style={{ animationDelay: "0.6s" }}>
              {t.sub}
            </p>

            {/* CTAs */}
            <div className={`glide-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.8s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #1e3a5f, #3b82f6, #60a5fa)" }}>
                {t.cta}
                <ArrowRight size={15} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/5 transition-all">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
