"use client";

/**
 * CompanyShield — Trust Shield Hero
 *
 * Trust shield emblem center stage with certification badges orbiting.
 * Shield-centric radial layout with blue/navy palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "TRUSTED & CERTIFIED",
    heading: ["Built on", "Trust", "Delivered with Excellence"],
    sub: "Our certifications and partnerships guarantee the highest standards of quality and reliability for your business.",
    cta: "View Certifications",
    cta2: "Get Started",
    certs: ["ISO 9001", "ISO 27001", "SOC 2", "GDPR", "PCI DSS", "CMMI L5"],
  },
  ar: {
    badge: "موثوقون ومعتمدون",
    heading: ["مبنيّون على", "الثقة", "نُنجز بتميّز"],
    sub: "شهاداتنا وشراكاتنا تضمن أعلى معايير الجودة والموثوقية لأعمالك.",
    cta: "عرض الشهادات",
    cta2: "ابدأ الآن",
    certs: ["آيزو 9001", "آيزو 27001", "SOC 2", "GDPR", "PCI DSS", "CMMI L5"],
  },
};

export function CompanyShield({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  const certPositions = [
    { angle: 0, distance: 180 },
    { angle: 60, distance: 180 },
    { angle: 120, distance: 180 },
    { angle: 180, distance: 180 },
    { angle: 240, distance: 180 },
    { angle: 300, distance: 180 },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shieldPulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(59,130,246,0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(59,130,246,0.6)); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes certAppear {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes shieldShine {
          0% { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(200%) rotate(25deg); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#030a1a" }}>
        {/* Radial background */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 45%, rgba(30,64,175,0.08) 0%, transparent 55%)",
        }} />

        {/* Concentric rings */}
        {[220, 280, 340].map((size, i) => (
          <div key={i} className="absolute top-1/2 left-1/2 rounded-full border border-blue-400/[0.06]"
            style={{
              width: size * 2, height: size * 2,
              marginLeft: -size, marginTop: -size,
              animation: `ringPulse ${4 + i}s ease-in-out ${i * 0.5}s infinite`,
            }} />
        ))}

        {/* Shield emblem - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {/* Shield shape */}
          <div style={{ animation: "shieldPulse 4s ease-in-out infinite" }}>
            <svg width="140" height="170" viewBox="0 0 140 170" fill="none">
              <path
                d="M70 8L12 36v55c0 38 24 60 58 73 34-13 58-35 58-73V36L70 8z"
                fill="url(#shieldGrad)" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5"
              />
              <path
                d="M70 28L30 48v38c0 28 17 44 40 54 23-10 40-26 40-54V48L70 28z"
                fill="none" stroke="rgba(147,197,253,0.15)" strokeWidth="1"
              />
              {/* Checkmark */}
              <path d="M52 85L64 97L90 65" fill="none" stroke="rgba(147,197,253,0.6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="shieldGrad" x1="70" y1="0" x2="70" y2="170" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(30,64,175,0.25)" />
                  <stop offset="100%" stopColor="rgba(15,23,42,0.4)" />
                </linearGradient>
              </defs>
            </svg>
            {/* Shine effect */}
            <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "50%" }}>
              <div style={{
                position: "absolute", top: 0, left: 0, width: "40px", height: "200%",
                background: "linear-gradient(90deg, transparent, rgba(147,197,253,0.1), transparent)",
                animation: "shieldShine 4s ease-in-out infinite",
              }} />
            </div>
          </div>

          {/* Orbiting certifications */}
          <div className="absolute top-1/2 left-1/2" style={{
            width: 0, height: 0,
            animation: "orbitSpin 30s linear infinite",
          }}>
            {certPositions.map((pos, i) => {
              const rad = (pos.angle * Math.PI) / 180;
              const x = Math.cos(rad) * pos.distance;
              const y = Math.sin(rad) * pos.distance;
              return (
                <div key={i} className="absolute" style={{
                  left: x, top: y,
                  transform: "translate(-50%, -50%)",
                  animation: `orbitCounterSpin 30s linear infinite, certAppear 0.5s ease ${0.8 + i * 0.15}s both`,
                }}>
                  <div className="px-3 py-1.5 rounded-lg border border-blue-400/15 backdrop-blur-sm text-center"
                    style={{ background: "rgba(30,64,175,0.12)", minWidth: 72 }}>
                    <span className="text-xs font-bold text-blue-300/70 whitespace-nowrap">{t.certs[i]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content - split layout, text on left */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`max-w-lg ${isAr ? "mr-auto text-right" : ""}`}>
            <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] mb-6 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.3s" }}>
              <span className="text-sm font-medium text-blue-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.45s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">{t.heading[1]}</span>
              <span className="block text-white/70 text-3xl sm:text-4xl lg:text-5xl">{t.heading[2]}</span>
            </h1>

            <p className="fade-up mt-5 text-base text-blue-100/30 leading-relaxed"
              style={{ animationDelay: "0.6s" }}>{t.sub}</p>

            <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.75s" }}>
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
