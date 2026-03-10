"use client";

/**
 * LawCurtain — Courtroom Theatrical Reveal Hero
 *
 * Courtroom velvet curtain pulling aside to reveal content.
 * Theatrical reveal. Burgundy/gold palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "THE COURTROOM AWAITS",
    heading: ["Behind Every", "Verdict", "Stands a Champion"],
    sub: "When the curtain rises and the court is in session, you need an advocate who commands the room. Our attorneys deliver performances that win cases.",
    cta: "Enter the Courtroom",
    cta2: "Case Results",
    accolades: [
      { value: "Top 10", label: "Law Firm" },
      { value: "A+", label: "Rating" },
      { value: "450+", label: "Verdicts" },
    ],
  },
  ar: {
    badge: "قاعة المحكمة بانتظارك",
    heading: ["خلف كل", "حكم", "يقف بطل"],
    sub: "عندما يُرفع الستار وتنعقد المحكمة، تحتاج إلى محامٍ يسيطر على القاعة. محامونا يقدمون أداءً يربح القضايا.",
    cta: "ادخل قاعة المحكمة",
    cta2: "نتائج القضايا",
    accolades: [
      { value: "أفضل ١٠", label: "مكتب محاماة" },
      { value: "A+", label: "التقييم" },
      { value: "+٤٥٠", label: "حكم" },
    ],
  },
};

export function LawCurtain({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes curtainOpenLeft {
          0% { transform: translateX(0) skewY(0deg); }
          100% { transform: translateX(-85%) skewY(-2deg); }
        }
        @keyframes curtainOpenRight {
          0% { transform: translateX(0) skewY(0deg); }
          100% { transform: translateX(85%) skewY(2deg); }
        }
        @keyframes curtainSway {
          0%, 100% { transform: translateX(-85%) skewY(-2deg); }
          50% { transform: translateX(-85%) skewY(-1deg); }
        }
        @keyframes curtainSwayRight {
          0%, 100% { transform: translateX(85%) skewY(2deg); }
          50% { transform: translateX(85%) skewY(1deg); }
        }
        @keyframes spotlightOn {
          0% { opacity: 0; }
          60% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes tiebackSwing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes goldDust {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(5px); opacity: 0.5; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0a0510 0%, #120a1a 50%, #0a0510 100%)" }}>

        {/* Spotlight from above */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ animation: "spotlightOn 2s ease both" }}>
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "60%", height: "100%",
            background: "radial-gradient(ellipse at 50% 0%, rgba(180,140,60,0.06) 0%, transparent 60%)",
          }} />
        </div>

        {/* Curtain rod */}
        <div className="absolute top-0 left-0 right-0 h-4" style={{
          background: "linear-gradient(180deg, rgba(180,140,60,0.2), rgba(120,80,30,0.1))",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }} />

        {/* Left curtain */}
        <div className="absolute top-0 left-0 h-full pointer-events-none"
          style={{
            width: "52%",
            background: "linear-gradient(135deg, #4a1020 0%, #6b1528 20%, #4a1020 40%, #5a1225 60%, #4a1020 80%)",
            borderRight: "3px solid rgba(180,140,60,0.15)",
            animation: "curtainOpenLeft 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both, curtainSway 5s ease-in-out 3s infinite",
            transformOrigin: "left center",
            zIndex: 20,
          }}>
          {/* Curtain folds */}
          {[20, 35, 50, 65, 80].map((left, i) => (
            <div key={i} className="absolute top-0 h-full" style={{
              left: `${left}%`, width: "2%",
              background: `linear-gradient(180deg, rgba(0,0,0,${0.1 + i * 0.02}), transparent 30%, rgba(0,0,0,${0.05 + i * 0.01}) 70%, rgba(0,0,0,${0.1 + i * 0.02}))`,
            }} />
          ))}
          {/* Gold trim */}
          <div className="absolute top-0 right-0 h-full w-1" style={{
            background: "linear-gradient(180deg, rgba(180,140,60,0.3), rgba(180,140,60,0.1) 50%, rgba(180,140,60,0.3))",
          }} />
        </div>

        {/* Right curtain */}
        <div className="absolute top-0 right-0 h-full pointer-events-none"
          style={{
            width: "52%",
            background: "linear-gradient(-135deg, #4a1020 0%, #6b1528 20%, #4a1020 40%, #5a1225 60%, #4a1020 80%)",
            borderLeft: "3px solid rgba(180,140,60,0.15)",
            animation: "curtainOpenRight 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both, curtainSwayRight 5s ease-in-out 3.2s infinite",
            transformOrigin: "right center",
            zIndex: 20,
          }}>
          {[20, 35, 50, 65, 80].map((right, i) => (
            <div key={i} className="absolute top-0 h-full" style={{
              right: `${right}%`, width: "2%",
              background: `linear-gradient(180deg, rgba(0,0,0,${0.1 + i * 0.02}), transparent 30%, rgba(0,0,0,${0.05 + i * 0.01}) 70%, rgba(0,0,0,${0.1 + i * 0.02}))`,
            }} />
          ))}
          <div className="absolute top-0 left-0 h-full w-1" style={{
            background: "linear-gradient(180deg, rgba(180,140,60,0.3), rgba(180,140,60,0.1) 50%, rgba(180,140,60,0.3))",
          }} />
        </div>

        {/* Gold dust particles */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                left: `${20 + (i * 5) % 60}%`,
                top: `${10 + (i * 8) % 80}%`,
                width: 2 + (i % 3),
                height: 2 + (i % 3),
                background: "rgba(180,140,60,0.3)",
                animation: `goldDust ${4 + (i % 3) * 2}s ease-in-out ${i * 0.5}s infinite`,
              }} />
          ))}
        </div>

        {/* Content - revealed behind curtains */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full"
          style={{ animation: "spotlightOn 2.5s ease both" }}>
          <div className={`text-center max-w-2xl mx-auto ${isAr ? "text-center" : ""}`}>
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/10 bg-amber-400/[0.04] mb-6"
              style={{ animationDelay: "1.5s" }}>
              <span className="text-sm font-medium text-amber-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ animationDelay: "1.7s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-red-300 via-amber-200 to-red-300 bg-clip-text text-transparent">{t.heading[1]}</span>
              <span className="block text-white/70">{t.heading[2]}</span>
            </h1>

            <p className="fade-up mt-5 text-base text-amber-100/25 leading-relaxed max-w-xl mx-auto"
              style={{ animationDelay: "1.9s" }}>{t.sub}</p>

            {/* Accolades */}
            <div className={`fade-up mt-8 flex justify-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "2.1s" }}>
              {t.accolades.map((a, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-amber-300/80">{a.value}</div>
                  <div className="text-xs text-amber-200/25 mt-1">{a.label}</div>
                </div>
              ))}
            </div>

            <div className={`fade-up mt-8 flex justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "2.3s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #7f1d1d, #991b1b, #b91c1c)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-6 py-3 text-sm font-semibold text-amber-200/30 border border-amber-300/10 rounded-lg hover:bg-amber-300/[0.04] transition-all">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
