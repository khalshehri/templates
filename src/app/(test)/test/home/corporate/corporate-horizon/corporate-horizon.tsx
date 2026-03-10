"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    above: "Where Vision",
    below: "Meets Execution",
    sub: "Strategic consulting and enterprise solutions that bridge the gap between ambition and achievement.",
    cta: "Begin Your Journey",
    cta2: "Explore Services",
    left: { value: "Founded", detail: "2004" },
    right: { value: "Revenue", detail: "$1.8B" },
  },
  ar: {
    above: "حيث تلتقي الرؤية",
    below: "بالتنفيذ",
    sub: "استشارات استراتيجية وحلول مؤسسية تسد الفجوة بين الطموح والإنجاز.",
    cta: "ابدأ رحلتك",
    cta2: "استكشف الخدمات",
    left: { value: "التأسيس", detail: "2004" },
    right: { value: "الإيرادات", detail: "$1.8B" },
  },
};

export function CorporateHorizon({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
        @keyframes horizonExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes horizonGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(148,163,184,0.1), 0 0 60px rgba(148,163,184,0.05); }
          50% { box-shadow: 0 0 40px rgba(148,163,184,0.2), 0 0 100px rgba(148,163,184,0.1); }
        }
        @keyframes fadeAbove {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeBelow {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes sideSlideL {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes sideSlideR {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .horizon-line { animation: horizonExpand 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both, horizonGlow 4s ease-in-out 1.5s infinite; transform-origin: center; }
        .fade-above { animation: fadeAbove 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-below { animation: fadeBelow 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-in { animation: fadeIn 0.8s ease both; }
        .side-l { animation: sideSlideL 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .side-r { animation: sideSlideR 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#fafaf9" }}>
        {/* Very subtle texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }} />

        {/* Side stat - left */}
        <div className={`side-l absolute top-1/2 -translate-y-1/2 ${isAr ? "right-8 sm:right-12 lg:right-20 text-right" : "left-8 sm:left-12 lg:left-20"}`} style={{ animationDelay: "1.4s" }}>
          <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400/60 font-medium">{t.left.value}</div>
          <div className="text-2xl font-light text-slate-700 mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{t.left.detail}</div>
        </div>

        {/* Side stat - right */}
        <div className={`side-r absolute top-1/2 -translate-y-1/2 ${isAr ? "left-8 sm:left-12 lg:left-20 text-left" : "right-8 sm:right-12 lg:right-20 text-right"}`} style={{ animationDelay: "1.5s" }}>
          <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400/60 font-medium">{t.right.value}</div>
          <div className="text-2xl font-light text-slate-700 mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{t.right.detail}</div>
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Heading above the line */}
          <h1 className="fade-above text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-slate-800 mb-8" style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.6s" }}>
            {t.above}
          </h1>

          {/* The horizon line */}
          <div className="relative my-4">
            <div className="horizon-line mx-auto h-[1px] w-full max-w-3xl" style={{ background: "linear-gradient(90deg, transparent, #94a3b8, #64748b, #94a3b8, transparent)" }} />
            {/* Small diamond at center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fade-in" style={{ animationDelay: "1.2s" }}>
              <div className="w-2.5 h-2.5 rotate-45 border border-slate-400/60 bg-[#fafaf9]" />
            </div>
          </div>

          {/* Heading below the line */}
          <h1 className="fade-below text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mt-8" style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.8s" }}>
            <span className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 bg-clip-text text-transparent">{t.below}</span>
          </h1>

          {/* Subheading */}
          <p className="fade-in mt-10 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto font-light" style={{ animationDelay: "1s" }}>
            {t.sub}
          </p>

          {/* CTAs */}
          <div className={`fade-in mt-10 flex items-center justify-center gap-5 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "1.2s" }}>
            <a href="#" className={`group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white rounded transition-all hover:-translate-y-0.5 hover:shadow-lg ${isAr ? "flex-row-reverse" : ""}`}
              style={{ background: "linear-gradient(135deg, #334155, #1e293b)" }}>
              {t.cta}
              <ArrowRight size={15} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-8 py-3.5 text-sm font-medium text-slate-500 border border-slate-300 rounded hover:bg-slate-100 transition-all">
              {t.cta2}
            </a>
          </div>
        </div>

        {/* Thin vertical lines for architectural feel */}
        <div className="absolute top-0 bottom-0 left-1/4 w-[0.5px] bg-slate-200/40" />
        <div className="absolute top-0 bottom-0 right-1/4 w-[0.5px] bg-slate-200/40" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[0.5px] bg-slate-200/20" />
      </section>
    </>
  );
}
