"use client";

/**
 * ClinicStethoscope — Medical Tool Focus Hero
 *
 * Large stethoscope CSS illustration with sound wave from earpiece.
 * Medical tool as central visual. Teal/mint palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "LISTEN. DIAGNOSE. HEAL.",
    heading: ["Expert Care", "Starts With", "Listening"],
    sub: "Our physicians take the time to truly understand your health. With advanced diagnostics and compassionate care, your wellbeing is our priority.",
    cta: "Book Appointment",
    cta2: "Our Specialists",
    features: [
      { value: "50+", label: "Specialists" },
      { value: "24/7", label: "Emergency" },
      { value: "15min", label: "Avg. Wait" },
    ],
  },
  ar: {
    badge: "نستمع. نشخّص. نعالج.",
    heading: ["الرعاية المتميّزة", "تبدأ", "بالاستماع"],
    sub: "أطباؤنا يأخذون الوقت الكافي لفهم صحتك حقًا. مع التشخيص المتقدم والرعاية الحانية، عافيتك أولويتنا.",
    cta: "احجز موعدًا",
    cta2: "أطباؤنا",
    features: [
      { value: "+٥٠", label: "أخصائي" },
      { value: "٢٤/٧", label: "طوارئ" },
      { value: "١٥ د", label: "متوسط الانتظار" },
    ],
  },
};

export function ClinicStethoscope({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes soundWave {
          0% { transform: scaleX(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes chestPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes drawTube {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes earTipGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20,184,166,0.3)); }
          50% { filter: drop-shadow(0 0 12px rgba(20,184,166,0.7)); }
        }
        @keyframes heartbeatLine {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: -300; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #021a1a 0%, #042626 40%, #021e1e 100%)" }}>

        {/* Subtle radial glow */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 60% 50%, rgba(20,184,166,0.05) 0%, transparent 50%)",
        }} />

        {/* Stethoscope illustration */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 pointer-events-none hidden lg:block"
          style={{ width: 320, height: 400 }}>
          {/* Tube SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 400" fill="none">
            {/* Y-tube from earpieces down to chest piece */}
            <path d="M110 20 Q110 60 130 90 Q160 140 160 200 Q160 280 160 320"
              stroke="rgba(20,184,166,0.25)" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="500" strokeDashoffset="500"
              style={{ animation: "drawTube 2s ease 0.5s both" }} />
            <path d="M210 20 Q210 60 190 90 Q160 140 160 200"
              stroke="rgba(20,184,166,0.25)" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="500" strokeDashoffset="500"
              style={{ animation: "drawTube 2s ease 0.7s both" }} />
          </svg>

          {/* Earpiece left */}
          <div className="absolute" style={{
            left: 96, top: 4, width: 28, height: 18,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(20,184,166,0.3), rgba(13,148,136,0.2))",
            border: "1.5px solid rgba(20,184,166,0.3)",
            animation: "earTipGlow 3s ease-in-out infinite",
          }} />

          {/* Earpiece right */}
          <div className="absolute" style={{
            left: 196, top: 4, width: 28, height: 18,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(20,184,166,0.3), rgba(13,148,136,0.2))",
            border: "1.5px solid rgba(20,184,166,0.3)",
            animation: "earTipGlow 3s ease-in-out 0.5s infinite",
          }} />

          {/* Sound waves from earpieces */}
          {[0, 1, 2].map((i) => (
            <div key={`l${i}`} className="absolute" style={{
              left: 80 - i * 14, top: 8, width: 12 + i * 8, height: 8 + i * 4,
              borderRadius: "50%", border: "1px solid rgba(20,184,166,0.15)",
              transformOrigin: "right center",
              animation: `soundWave 2.5s ease ${i * 0.3}s infinite`,
            }} />
          ))}
          {[0, 1, 2].map((i) => (
            <div key={`r${i}`} className="absolute" style={{
              left: 228 + i * 6, top: 8, width: 12 + i * 8, height: 8 + i * 4,
              borderRadius: "50%", border: "1px solid rgba(20,184,166,0.15)",
              transformOrigin: "left center",
              animation: `soundWave 2.5s ease ${0.15 + i * 0.3}s infinite`,
            }} />
          ))}

          {/* Chest piece (diaphragm) */}
          <div className="absolute" style={{
            left: 130, top: 310, width: 60, height: 60,
            animation: "chestPulse 2s ease-in-out infinite",
          }}>
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(13,148,136,0.1))",
                border: "2px solid rgba(20,184,166,0.3)",
                boxShadow: "0 0 20px rgba(20,184,166,0.1), inset 0 0 15px rgba(20,184,166,0.05)",
              }} />
            {/* Inner circle */}
            <div className="absolute rounded-full" style={{
              top: 12, left: 12, right: 12, bottom: 12,
              background: "rgba(20,184,166,0.08)",
              border: "1px solid rgba(20,184,166,0.2)",
            }} />
          </div>

          {/* Heartbeat line from chest piece */}
          <svg className="absolute" style={{ left: 60, top: 350, width: 200, height: 40 }} viewBox="0 0 200 40" fill="none">
            <path d="M0 20 L30 20 L40 20 L50 8 L60 32 L70 5 L80 35 L90 20 L100 20 L200 20"
              stroke="rgba(20,184,166,0.3)" strokeWidth="1.5" fill="none"
              strokeDasharray="300" strokeDashoffset="300"
              style={{ animation: "heartbeatLine 3s linear infinite" }} />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`max-w-xl ${isAr ? "mr-auto text-right" : ""}`}>
            <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/10 bg-teal-400/[0.04] mb-6 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.3s" }}>
              <span className="text-sm font-medium text-teal-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.45s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block text-white/60">{t.heading[1]}</span>
              <span className="block bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent">{t.heading[2]}</span>
            </h1>

            <p className="fade-up mt-5 text-base text-teal-100/30 leading-relaxed"
              style={{ animationDelay: "0.6s" }}>{t.sub}</p>

            {/* Feature stats */}
            <div className={`fade-up mt-6 flex gap-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.7s" }}>
              {t.features.map((f, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-teal-300/80">{f.value}</div>
                  <div className="text-xs text-teal-200/25 mt-0.5">{f.label}</div>
                </div>
              ))}
            </div>

            <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.85s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-6 py-3 text-sm font-semibold text-teal-200/30 border border-teal-300/10 rounded-lg hover:bg-teal-300/[0.04] transition-all">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
