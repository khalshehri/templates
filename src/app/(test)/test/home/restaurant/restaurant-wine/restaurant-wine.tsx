"use client";

/**
 * Wine Glass Hero
 * Elegant wine glass with swirling liquid animation. Fine dining elegance.
 * Deep burgundy tones with sophisticated typography.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Fine Dining",
    heading: "An Evening of",
    headingHighlight: "Elegance",
    subheading:
      "Curated wine list of 200+ labels. Sommelier-guided pairings with every course. An experience for the senses.",
    ctaPrimary: "Reserve Table",
    ctaSecondary: "Wine Menu",
    wineList: [
      { name: "Chateau Margaux 2015", region: "Bordeaux", price: "$320" },
      { name: "Opus One 2018", region: "Napa Valley", price: "$450" },
      { name: "Sassicaia 2019", region: "Tuscany", price: "$280" },
    ],
    features: ["200+ Labels", "Expert Sommelier", "Climate Cellar", "Private Tastings"],
  },
  ar: {
    badge: "عشاء فاخر",
    heading: "أمسية من",
    headingHighlight: "الأناقة",
    subheading:
      "قائمة نبيذ منتقاة من +200 علامة. تنسيق متخصص مع كل طبق. تجربة للحواس.",
    ctaPrimary: "حجز طاولة",
    ctaSecondary: "قائمة النبيذ",
    wineList: [
      { name: "شاتو مارغو 2015", region: "بوردو", price: "$320" },
      { name: "أوبس ون 2018", region: "وادي نابا", price: "$450" },
      { name: "ساسيكايا 2019", region: "توسكانا", price: "$280" },
    ],
    features: ["+200 علامة", "ساقي خبير", "قبو مكيّف", "تذوق خاص"],
  },
};

export function RestaurantWine({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wineSwirl {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes glassShine {
          0%, 100% { opacity: 0.05; transform: translateX(-100%); }
          50% { opacity: 0.15; transform: translateX(100%); }
        }
        @keyframes liquidWave {
          0%, 100% { d: path("M60,120 Q80,115 100,120 Q120,125 140,120"); }
          50% { d: path("M60,120 Q80,125 100,120 Q120,115 140,120"); }
        }
        @keyframes dropletFall {
          0% { opacity: 0.5; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0806]">
        {/* Deep burgundy glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(127,29,29,0.3) 0%, rgba(234,88,12,0.05) 50%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s", fontFamily: "Georgia, serif" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-800 to-orange-700 rounded-lg hover:shadow-lg hover:shadow-red-900/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Wine list */}
              <div className="fade-up mt-10 space-y-2"
                style={{ animationDelay: "0.5s" }}>
                {t.wineList.map((wine, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-red-900/15 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className={isAr ? "text-right" : ""}>
                      <div className="text-sm text-white/50" style={{ fontFamily: "Georgia, serif" }}>{wine.name}</div>
                      <div className="text-[10px] text-white/20">{wine.region}</div>
                    </div>
                    <span className="text-sm font-bold text-red-400/50">{wine.price}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className={`fade-up mt-6 flex items-center gap-4 flex-wrap ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.6s" }}>
                {t.features.map((feat, i) => (
                  <span key={i} className="text-xs text-white/20 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500/40" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Wine glass */}
            <div className={`relative flex justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <svg viewBox="0 0 200 350" className="w-44 sm:w-52"
                style={{ filter: "drop-shadow(0 20px 40px rgba(127,29,29,0.15))" }}>
                {/* Glass shine */}
                <rect x="75" y="50" width="10" height="120" rx="5" fill="rgba(255,255,255,0.03)"
                  style={{ animation: "glassShine 4s ease-in-out infinite" }} />

                {/* Wine glass bowl */}
                <path d="M60,60 Q60,10 100,10 Q140,10 140,60 L140,130 Q140,150 120,155 L115,160"
                  fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <path d="M60,60 Q60,10 100,10 Q140,10 140,60 L140,130 Q140,150 120,155 L115,160 L85,160 Q60,150 60,130 Z"
                  fill="rgba(127,29,29,0.02)" />

                {/* Wine liquid */}
                <clipPath id="glassBowl">
                  <path d="M62,60 Q62,14 100,14 Q138,14 138,60 L138,128 Q138,148 118,153 L82,153 Q62,148 62,128 Z" />
                </clipPath>
                <rect x="62" y="100" width="76" height="55" fill="rgba(127,29,29,0.15)" clipPath="url(#glassBowl)" />
                {/* Wine surface */}
                <path d="M62,100 Q82,105 100,100 Q118,95 138,100" fill="none"
                  stroke="rgba(127,29,29,0.2)" strokeWidth="1">
                  <animate attributeName="d"
                    values="M62,100 Q82,105 100,100 Q118,95 138,100;M62,100 Q82,95 100,100 Q118,105 138,100;M62,100 Q82,105 100,100 Q118,95 138,100"
                    dur="3s" repeatCount="indefinite" />
                </path>

                {/* Wine legs (drips) */}
                {[72, 88, 115, 128].map((x, i) => (
                  <line key={i} x1={x} y1={100} x2={x} y2={100 - 8 - i * 3}
                    stroke="rgba(127,29,29,0.08)" strokeWidth="0.5" strokeLinecap="round"
                    style={{ animation: `dropletFall ${3 + i}s ease-in ${i * 0.7}s infinite` } as React.CSSProperties} />
                ))}

                {/* Swirl line inside wine */}
                <ellipse cx="100" cy="120" rx="20" ry="8" fill="none"
                  stroke="rgba(127,29,29,0.1)" strokeWidth="0.5"
                  style={{ transformOrigin: "100px 120px", animation: "wineSwirl 8s linear infinite" }} />

                {/* Stem */}
                <line x1="100" y1="160" x2="100" y2="280" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />

                {/* Base */}
                <ellipse cx="100" cy="285" rx="35" ry="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                {/* Highlight on glass rim */}
                <path d="M70,14 Q100,8 130,14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
