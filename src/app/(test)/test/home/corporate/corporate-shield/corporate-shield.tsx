"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "Fortified Trust",
    sub: "Protected Partnership",
    cta: "Get Protected",
    cta2: "View Certifications",
    badges: [
      { label: "ISO 27001", angle: 0 },
      { label: "SOC 2", angle: 45 },
      { label: "HIPAA", angle: 90 },
      { label: "PCI DSS", angle: 135 },
      { label: "GDPR", angle: 180 },
      { label: "FedRAMP", angle: 225 },
      { label: "CSA STAR", angle: 270 },
      { label: "ISO 9001", angle: 315 },
    ],
    tagline: "Enterprise-grade security infrastructure protecting $4.2 trillion in transactions annually.",
  },
  ar: {
    heading: "ثقة محصّنة",
    sub: "شراكة محمية",
    cta: "احصل على الحماية",
    cta2: "عرض الشهادات",
    badges: [
      { label: "ISO 27001", angle: 0 },
      { label: "SOC 2", angle: 45 },
      { label: "HIPAA", angle: 90 },
      { label: "PCI DSS", angle: 135 },
      { label: "GDPR", angle: 180 },
      { label: "FedRAMP", angle: 225 },
      { label: "CSA STAR", angle: 270 },
      { label: "ISO 9001", angle: 315 },
    ],
    tagline: "بنية تحتية أمنية بمستوى المؤسسات تحمي 4.2 تريليون دولار من المعاملات سنوياً.",
  },
};

export function CorporateShield({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes shieldPulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(59,130,246,0.15)); }
          50% { filter: drop-shadow(0 0 50px rgba(59,130,246,0.3)); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes badgeFadeIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.02); }
        }
        .shield-pulse { animation: shieldPulse 4s ease-in-out infinite; }
        .orbit { animation: orbitSpin 40s linear infinite; }
        .orbit-reverse { animation: orbitSpinReverse 40s linear infinite; }
        .badge-fade { animation: badgeFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .slide-left { animation: slideFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .slide-right { animation: slideFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#080e1c" }}>
        {/* Radial background glow */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, rgba(30,58,95,0.2) 0%, transparent 60%)",
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left side - heading and CTA */}
            <div className={`flex-1 ${isAr ? "text-right lg:order-3" : "lg:order-1"}`}>
              <h1 className={`${isAr ? "slide-right" : "slide-left"} text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]`} style={{ animationDelay: "0.4s" }}>
                <span className="block text-white/90">{t.heading}</span>
              </h1>
              <p className={`${isAr ? "slide-right" : "slide-left"} mt-4 text-lg text-blue-100/20 max-w-xs`} style={{ animationDelay: "0.6s" }}>
                {t.tagline}
              </p>
              <div className={`${isAr ? "slide-right" : "slide-left"} mt-8 flex gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.8s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #1e3a5f, #2563eb)" }}>
                  {t.cta}
                  <ArrowRight size={15} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
              </div>
            </div>

            {/* Center - Shield with orbiting badges */}
            <div className="flex-shrink-0 lg:order-2 relative" style={{ width: "380px", height: "380px" }}>
              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-blue-400/8" style={{ animation: "ringPulse 4s ease-in-out infinite" }} />
              <div className="absolute inset-8 rounded-full border border-blue-400/10" style={{ animation: "ringPulse 4s ease-in-out 1s infinite" }} />
              <div className="absolute inset-16 rounded-full border border-blue-400/12" style={{ animation: "ringPulse 4s ease-in-out 2s infinite" }} />

              {/* Shield SVG in center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shield-pulse">
                <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
                  <path d="M60 5 L110 30 L110 75 C110 105 85 130 60 138 C35 130 10 105 10 75 L10 30 Z"
                    fill="url(#shieldGrad)" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" />
                  <path d="M60 20 L95 38 L95 72 C95 95 78 113 60 119 C42 113 25 95 25 72 L25 38 Z"
                    fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="1" />
                  {/* Checkmark */}
                  <path d="M42 68 L55 82 L80 55" fill="none" stroke="rgba(96,165,250,0.6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="shieldGrad" x1="60" y1="5" x2="60" y2="138" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(30,58,95,0.6)" />
                      <stop offset="50%" stopColor="rgba(15,35,64,0.8)" />
                      <stop offset="100%" stopColor="rgba(8,14,28,0.9)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Orbiting badges */}
              <div className="absolute inset-0 orbit">
                {t.badges.map((badge, i) => {
                  const radius = 175;
                  const angleRad = (badge.angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;
                  return (
                    <div key={i} className="badge-fade orbit-reverse absolute" style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 14px)`,
                      animationDelay: `${0.8 + i * 0.1}s`,
                    }}>
                      <div className="px-3 py-1.5 rounded-md border border-blue-400/15 bg-[#0c1a30]/80 backdrop-blur-sm whitespace-nowrap">
                        <span className="text-[10px] font-bold text-blue-300/50 tracking-wider">{badge.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side - subtitle and secondary CTA */}
            <div className={`flex-1 ${isAr ? "text-left lg:order-1" : "text-right lg:order-3"}`}>
              <h2 className={`${isAr ? "slide-left" : "slide-right"} text-3xl sm:text-4xl font-light text-blue-200/40 tracking-tight`} style={{ animationDelay: "0.5s" }}>
                {t.sub}
              </h2>
              <div className={`${isAr ? "slide-left" : "slide-right"} mt-8 ${isAr ? "" : "flex justify-end"}`} style={{ animationDelay: "0.9s" }}>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/5 transition-all inline-block">
                  {t.cta2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
