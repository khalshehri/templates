"use client";

/**
 * CompanyHandshake — Partnership Hero
 *
 * Abstract handshake illustration (CSS shapes), partnership theme.
 * Two-sided symmetrical layout with content split.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "PARTNERSHIPS THAT LAST",
    headingLeft: "Your Vision",
    headingRight: "Our Expertise",
    connector: "Together",
    sub: "When ambition meets experience, extraordinary things happen. We don't just serve clients — we build lasting partnerships that transform industries.",
    cta: "Become a Partner",
    cta2: "Our Partners",
    statsLeft: [
      { value: "200+", label: "Partners" },
      { value: "15+", label: "Countries" },
    ],
    statsRight: [
      { value: "98%", label: "Retention" },
      { value: "12+", label: "Years" },
    ],
  },
  ar: {
    badge: "شراكات تدوم",
    headingLeft: "رؤيتكم",
    headingRight: "خبرتنا",
    connector: "معًا",
    sub: "عندما يلتقي الطموح بالخبرة، تحدث أشياء استثنائية. لا نخدم عملاء فحسب — بل نبني شراكات دائمة تُحوّل الصناعات.",
    cta: "كن شريكنا",
    cta2: "شركاؤنا",
    statsLeft: [
      { value: "+٢٠٠", label: "شريك" },
      { value: "+١٥", label: "دولة" },
    ],
    statsRight: [
      { value: "٩٨٪", label: "استمرارية" },
      { value: "+١٢", label: "عامًا" },
    ],
  },
};

export function CompanyHandshake({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes handMeetLeft {
          0% { transform: translateX(-30px) rotate(-8deg); }
          40% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(2px) rotate(1deg); }
          60% { transform: translateX(0) rotate(0deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }
        @keyframes handMeetRight {
          0% { transform: translateX(30px) rotate(8deg) scaleX(-1); }
          40% { transform: translateX(0) rotate(0deg) scaleX(-1); }
          50% { transform: translateX(-2px) rotate(-1deg) scaleX(-1); }
          60% { transform: translateX(0) rotate(0deg) scaleX(-1); }
          100% { transform: translateX(0) rotate(0deg) scaleX(-1); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0; }
          45% { opacity: 0; }
          55% { opacity: 0.6; }
          65% { opacity: 0; }
        }
        @keyframes connectorPop {
          0%, 40% { transform: scale(0); opacity: 0; }
          55% { transform: scale(1.2); opacity: 1; }
          65% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#040c1e" }}>
        {/* Symmetrical background */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(90deg, rgba(30,64,175,0.04) 0%, transparent 30%, transparent 70%, rgba(30,64,175,0.04) 100%)",
        }} />
        {/* Center line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{
          background: "linear-gradient(180deg, transparent 10%, rgba(96,165,250,0.08) 30%, rgba(96,165,250,0.12) 50%, rgba(96,165,250,0.08) 70%, transparent 90%)",
        }} />

        {/* Handshake illustration - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 240, height: 120 }}>
          {/* Left hand (abstract) */}
          <div style={{ animation: "handMeetLeft 4s ease-in-out infinite", position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}>
            <svg width="120" height="60" viewBox="0 0 120 60">
              <path d="M0 35 Q10 35 20 30 L50 18 Q60 14 70 16 L85 20 Q90 22 88 26 L72 30 Q68 32 70 36 L86 34 Q90 34 90 38 L72 40 Q68 42 70 46 L82 44 Q86 44 86 48 L70 50 Q60 52 50 48 L20 38 Q10 36 0 38 Z"
                fill="rgba(30,64,175,0.2)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
            </svg>
          </div>
          {/* Right hand (abstract, mirrored) */}
          <div style={{ animation: "handMeetRight 4s ease-in-out infinite", position: "absolute", right: 0, top: "50%", transform: "translateY(-50%) scaleX(-1)" }}>
            <svg width="120" height="60" viewBox="0 0 120 60">
              <path d="M0 35 Q10 35 20 30 L50 18 Q60 14 70 16 L85 20 Q90 22 88 26 L72 30 Q68 32 70 36 L86 34 Q90 34 90 38 L72 40 Q68 42 70 46 L82 44 Q86 44 86 48 L70 50 Q60 52 50 48 L20 38 Q10 36 0 38 Z"
                fill="rgba(59,130,246,0.2)" stroke="rgba(147,197,253,0.3)" strokeWidth="1" />
            </svg>
          </div>
          {/* Connection glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(96,165,250,0.3), transparent 70%)",
              animation: "pulseGlow 4s ease-in-out infinite",
            }} />
        </div>

        {/* Content - two-sided symmetrical */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left side */}
            <div className={`${isAr ? "text-right" : "text-left"}`}
              style={{ animation: "slideFromLeft 0.8s ease 0.3s both" }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white/90 mb-6">{t.headingLeft}</h2>
              <div className="flex gap-6 mt-8">
                {t.statsLeft.map((s, i) => (
                  <div key={i} className={`${isAr ? "text-right" : ""}`}>
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">{s.value}</div>
                    <div className="text-sm text-blue-200/30 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className={`${isAr ? "text-right" : "text-left lg:text-right"}`}
              style={{ animation: "slideFromRight 0.8s ease 0.3s both" }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white/90 mb-6">{t.headingRight}</h2>
              <div className={`flex gap-6 mt-8 ${isAr ? "" : "lg:justify-end"}`}>
                {t.statsRight.map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">{s.value}</div>
                    <div className="text-sm text-blue-200/30 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center connector text */}
          <div className="text-center my-12"
            style={{ animation: "connectorPop 4s ease infinite" }}>
            <span className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              {t.connector}
            </span>
          </div>

          {/* Badge + description + CTAs */}
          <div className={`text-center max-w-2xl mx-auto ${isAr ? "text-center" : ""}`}>
            <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] mb-6"
              style={{ animationDelay: "0.8s" }}>
              <span className="text-sm font-medium text-blue-300/60 tracking-widest">{t.badge}</span>
            </div>

            <p className="fade-up text-base text-blue-100/30 leading-relaxed mb-8"
              style={{ animationDelay: "0.9s" }}>{t.sub}</p>

            <div className={`fade-up flex justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "1s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-6 py-3 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/[0.04] transition-all">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
