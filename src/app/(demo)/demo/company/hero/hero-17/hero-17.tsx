"use client";

/**
 * Portrait Spotlight Hero
 * CEO / founder-led company aesthetic.
 * Large circular portrait area with dramatic spotlight beam.
 * Background: #09090b. Accent: warm white / gold.
 */

import { ArrowRight, Crown } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FOUNDER'S MESSAGE",
    founderName: "Ahmed Al-Rashid",
    founderTitle: "Founder & CEO",
    heading: "Led by Vision.",
    headingAccent: "Driven by Results.",
    sub: "\"I started this company with a single belief: that the Middle East deserves world-class technology built by its own people. 15 years later, that belief is our reality.\"",
    cta1: "Our Mission",
    cta2: "Join the Team",
    milestones: ["2010 Founded", "2015 IPO", "2020 Global", "2025 $2B Revenue"],
  },
  ar: {
    badge: "رسالة المؤسس",
    founderName: "أحمد الراشد",
    founderTitle: "المؤسس والرئيس التنفيذي",
    heading: "بقيادة رؤية.",
    headingAccent: "بدافع النتائج.",
    sub: "\"أسست هذه الشركة بإيمان واحد: أن الشرق الأوسط يستحق تقنية عالمية يبنيها أبناؤه. بعد 15 عاماً، هذا الإيمان أصبح واقعنا.\"",
    cta1: "رسالتنا",
    cta2: "انضم للفريق",
    milestones: ["2010 التأسيس", "2015 الطرح", "2020 عالمياً", "2025 $2B إيرادات"],
  },
};

export function Hero17({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#09090b" }}>
      {/* Spotlight beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[60vh] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(250,204,21,0.04) 0%, transparent 100%)",
          clipPath: "polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)",
          animation: "spotlightBreathe 6s ease-in-out infinite",
        }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className={`grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center ${isAr ? "" : ""}`}>
          {/* Portrait area */}
          <div className={`flex flex-col items-center ${isAr ? "lg:order-2" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out both" }}>
            {/* Circular portrait */}
            <div className="relative w-[280px] h-[280px] rounded-full mb-6">
              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-full"
                style={{ background: "conic-gradient(from 0deg, rgba(250,204,21,0.15), transparent, rgba(250,204,21,0.1), transparent, rgba(250,204,21,0.15))", animation: "ringRotate 10s linear infinite" }} />
              {/* Portrait bg */}
              <div className="absolute inset-0 rounded-full overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #1a1a2e 100%)" }}>
                {/* Silhouette figure */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%]">
                  {/* Head */}
                  <div className="mx-auto w-[55%] rounded-full mb-1"
                    style={{ paddingBottom: "55%", background: "linear-gradient(180deg, rgba(250,204,21,0.08), rgba(250,204,21,0.03))" }} />
                  {/* Shoulders */}
                  <div className="w-full h-[100px] rounded-t-[50%]"
                    style={{ background: "linear-gradient(180deg, rgba(250,204,21,0.06), transparent)" }} />
                </div>
              </div>
            </div>

            <h3 className="text-white font-bold text-lg">{t.founderName}</h3>
            <p className="text-amber-400/60 text-sm font-mono">{t.founderTitle}</p>
          </div>

          {/* Text content */}
          <div className={`${isAr ? "text-right lg:order-1" : ""}`} style={{ animation: "fadeUp 0.6s ease-out 0.15s both" }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(40px, 7vw, 76px)" }}>
              {t.heading}<br />
              <span style={{ color: "#fbbf24" }}>{t.headingAccent}</span>
            </h1>

            <blockquote className={`text-gray-400 text-lg mb-10 leading-relaxed max-w-lg ${isAr ? "border-r-2 border-amber-500/30 pr-4" : "border-l-2 border-amber-500/30 pl-4"}`}
              style={{ fontStyle: "italic" }}>
              {t.sub}
            </blockquote>

            <div className={`flex flex-col sm:flex-row gap-4 mb-10 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(251,191,36,0.2)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>

            {/* Timeline milestones */}
            <div className={`flex flex-wrap gap-4 ${isAr ? "justify-end" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
              {t.milestones.map((m, i) => (
                <div key={i} className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                  <span className="text-xs text-gray-500 font-mono">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spotlightBreathe { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes ringRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}
