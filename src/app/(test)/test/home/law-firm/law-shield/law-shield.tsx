"use client";

/**
 * LawShield — Guardian/Defense Hero
 *
 * Protection shield with laurel wreath emblem.
 * Guardian/defense theme. Shield-centric with amber/burgundy palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "YOUR LEGAL GUARDIAN",
    heading: ["Shielding Your", "Rights", "& Interests"],
    sub: "In a world of legal complexity, you need a defender who stands unwavering. Our firm is your fortress against injustice.",
    cta: "Get Protected",
    cta2: "Defense Areas",
    pillars: [
      { title: "Criminal Defense", count: "800+" },
      { title: "Civil Litigation", count: "1,200+" },
      { title: "Corporate Law", count: "500+" },
    ],
  },
  ar: {
    badge: "حارسك القانوني",
    heading: ["نحمي", "حقوقك", "ومصالحك"],
    sub: "في عالم من التعقيد القانوني، تحتاج إلى مدافع لا يتزعزع. مكتبنا هو حصنك ضد الظلم.",
    cta: "احمِ نفسك",
    cta2: "مجالات الدفاع",
    pillars: [
      { title: "الدفاع الجنائي", count: "+٨٠٠" },
      { title: "التقاضي المدني", count: "+١,٢٠٠" },
      { title: "قانون الشركات", count: "+٥٠٠" },
    ],
  },
};

export function LawShield({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shieldGlow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(180,140,60,0.15)); }
          50% { filter: drop-shadow(0 0 35px rgba(180,140,60,0.35)); }
        }
        @keyframes laurelGrow {
          from { stroke-dashoffset: 300; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes shieldReveal {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes protectPulse {
          0% { transform: scale(1); opacity: 0.15; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #12081a 0%, #1a0f24 40%, #0f0815 100%)" }}>

        {/* Radial glow */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 65% 45%, rgba(180,140,60,0.04) 0%, transparent 45%)",
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`flex flex-col lg:flex-row items-center gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            {/* Text content */}
            <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/10 bg-amber-400/[0.04] mb-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}>
                <span className="text-sm font-medium text-amber-300/60 tracking-widest">{t.badge}</span>
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.45s" }}>
                <span className="block text-white/90">{t.heading[0]}</span>
                <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.heading[1]}</span>
                <span className="block text-white/70">{t.heading[2]}</span>
              </h1>

              <p className="fade-up mt-5 text-base text-amber-100/25 leading-relaxed max-w-md"
                style={{ animationDelay: "0.6s" }}>{t.sub}</p>

              {/* Practice pillars */}
              <div className={`fade-up mt-8 flex gap-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.7s" }}>
                {t.pillars.map((p, i) => (
                  <div key={i} className="px-4 py-3 rounded-lg border border-amber-400/[0.08] bg-amber-400/[0.02]">
                    <div className="text-lg font-black text-amber-300/70">{p.count}</div>
                    <div className="text-xs text-amber-200/25 mt-0.5">{p.title}</div>
                  </div>
                ))}
              </div>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.85s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #92400e, #d97706, #f59e0b)" }}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-amber-200/30 border border-amber-300/10 rounded-lg hover:bg-amber-300/[0.04] transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>

            {/* Shield + Laurel illustration */}
            <div className="flex-1 flex justify-center">
              <div className="relative" style={{
                width: 260, height: 320,
                animation: "shieldReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both",
              }}>
                {/* Protection pulse rings */}
                {[0, 1, 2].map((i) => (
                  <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/[0.06]"
                    style={{
                      width: 200, height: 200,
                      animation: `protectPulse 4s ease-out ${i * 1.3}s infinite`,
                    }} />
                ))}

                {/* Laurel wreath */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 320" fill="none">
                  {/* Left laurel branch */}
                  <path d="M60 280 Q40 240 45 200 Q50 160 60 130 Q70 100 85 80"
                    stroke="rgba(180,140,60,0.2)" strokeWidth="2" fill="none"
                    strokeDasharray="300" strokeDashoffset="300"
                    style={{ animation: "laurelGrow 2s ease 0.8s both" }} />
                  {/* Left leaves */}
                  {[200, 170, 140, 115, 95].map((y, i) => (
                    <ellipse key={`ll${i}`} cx={48 + i * 3} cy={y} rx="12" ry="5"
                      transform={`rotate(-30 ${48 + i * 3} ${y})`}
                      fill="rgba(180,140,60,0.08)" stroke="rgba(180,140,60,0.15)" strokeWidth="0.5" />
                  ))}

                  {/* Right laurel branch */}
                  <path d="M200 280 Q220 240 215 200 Q210 160 200 130 Q190 100 175 80"
                    stroke="rgba(180,140,60,0.2)" strokeWidth="2" fill="none"
                    strokeDasharray="300" strokeDashoffset="300"
                    style={{ animation: "laurelGrow 2s ease 1s both" }} />
                  {/* Right leaves */}
                  {[200, 170, 140, 115, 95].map((y, i) => (
                    <ellipse key={`rl${i}`} cx={212 - i * 3} cy={y} rx="12" ry="5"
                      transform={`rotate(30 ${212 - i * 3} ${y})`}
                      fill="rgba(180,140,60,0.08)" stroke="rgba(180,140,60,0.15)" strokeWidth="0.5" />
                  ))}
                </svg>

                {/* Shield */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2"
                  style={{ animation: "shieldGlow 4s ease-in-out infinite" }}>
                  <svg width="120" height="150" viewBox="0 0 120 150">
                    <path d="M60 5L8 30v50c0 35 20 52 52 63 32-11 52-28 52-63V30L60 5z"
                      fill="url(#lawShieldGrad)" stroke="rgba(180,140,60,0.35)" strokeWidth="1.5" />
                    <path d="M60 20L22 40v38c0 26 15 40 38 48 23-8 38-22 38-48V40L60 20z"
                      fill="none" stroke="rgba(180,140,60,0.15)" strokeWidth="1" />
                    {/* Sword/scale icon inside */}
                    <line x1="60" y1="45" x2="60" y2="100" stroke="rgba(180,140,60,0.3)" strokeWidth="2" />
                    <line x1="42" y1="60" x2="78" y2="60" stroke="rgba(180,140,60,0.3)" strokeWidth="2" />
                    <circle cx="60" cy="42" r="4" fill="rgba(180,140,60,0.2)" stroke="rgba(180,140,60,0.3)" strokeWidth="1" />
                    <defs>
                      <linearGradient id="lawShieldGrad" x1="60" y1="0" x2="60" y2="150" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(146,64,14,0.2)" />
                        <stop offset="100%" stopColor="rgba(120,53,15,0.1)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
