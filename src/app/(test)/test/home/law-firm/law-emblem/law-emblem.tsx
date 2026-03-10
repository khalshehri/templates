"use client";

/**
 * LawEmblem — Prestige Identity Hero
 *
 * Firm crest/emblem with heraldic elements (lions, shield, banner).
 * Prestige identity. Amber/burgundy palette.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "EST. 1985",
    heading: ["A Legacy of", "Legal", "Excellence"],
    sub: "For nearly four decades, our crest has stood as a symbol of unwavering commitment to justice, integrity, and the pursuit of truth.",
    cta: "Our Heritage",
    cta2: "Meet the Partners",
    legacy: [
      { year: "1985", event: "Founded" },
      { year: "2000", event: "International" },
      { year: "2024", event: "Leading Firm" },
    ],
  },
  ar: {
    badge: "تأسّس ١٩٨٥",
    heading: ["إرث من", "التميّز", "القانوني"],
    sub: "لما يقارب أربعة عقود، وقف شعارنا رمزًا للالتزام الراسخ بالعدالة والنزاهة والسعي نحو الحقيقة.",
    cta: "تراثنا",
    cta2: "تعرّف على الشركاء",
    legacy: [
      { year: "١٩٨٥", event: "التأسيس" },
      { year: "٢٠٠٠", event: "التوسع الدولي" },
      { year: "٢٠٢٤", event: "المكتب الرائد" },
    ],
  },
};

export function LawEmblem({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes emblemReveal {
          from { transform: scale(0.3) rotate(-10deg); opacity: 0; }
          to { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes emblemGlow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(180,140,60,0.15)); }
          50% { filter: drop-shadow(0 0 30px rgba(180,140,60,0.35)); }
        }
        @keyframes bannerWave {
          0%, 100% { transform: skewX(0deg); }
          25% { transform: skewX(1deg); }
          75% { transform: skewX(-1deg); }
        }
        @keyframes lionBreathe {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.02); }
        }
        @keyframes starShine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0a0710 0%, #120e1a 40%, #0a0710 100%)" }}>

        {/* Background heraldic pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(180,140,60,0.015) 80px, rgba(180,140,60,0.015) 82px)`,
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex flex-col items-center">
            {/* Emblem */}
            <div className="relative mb-12"
              style={{
                animation: "emblemReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
              }}>
              <div style={{ animation: "emblemGlow 4s ease-in-out infinite" }}>
                <svg width="200" height="240" viewBox="0 0 200 240" fill="none">
                  {/* Outer decorative border */}
                  <ellipse cx="100" cy="110" rx="90" ry="100" stroke="rgba(180,140,60,0.12)" strokeWidth="1" fill="none" />

                  {/* Shield shape */}
                  <path d="M100 30L40 60v50c0 40 25 60 60 72 35-12 60-32 60-72V60L100 30z"
                    fill="rgba(100,30,20,0.15)" stroke="rgba(180,140,60,0.3)" strokeWidth="1.5" />

                  {/* Inner shield */}
                  <path d="M100 45L55 68v40c0 30 18 46 45 55 27-9 45-25 45-55V68L100 45z"
                    fill="rgba(80,20,15,0.1)" stroke="rgba(180,140,60,0.15)" strokeWidth="1" />

                  {/* Center cross/sword */}
                  <line x1="100" y1="60" x2="100" y2="130" stroke="rgba(180,140,60,0.25)" strokeWidth="2" />
                  <line x1="75" y1="85" x2="125" y2="85" stroke="rgba(180,140,60,0.25)" strokeWidth="2" />

                  {/* Left lion (simplified heraldic) */}
                  <g style={{ animation: "lionBreathe 4s ease-in-out infinite" }} transform="translate(20, 50)">
                    {/* Body */}
                    <path d="M5 60 Q0 50 5 40 Q10 30 15 25 Q18 15 25 12 Q30 10 28 20 Q25 28 20 35 Q18 40 20 45 L25 60Z"
                      fill="rgba(180,140,60,0.12)" stroke="rgba(180,140,60,0.2)" strokeWidth="0.8" />
                    {/* Mane */}
                    <circle cx="20" cy="20" r="8" fill="rgba(180,140,60,0.08)" stroke="rgba(180,140,60,0.15)" strokeWidth="0.5" />
                  </g>

                  {/* Right lion (mirrored) */}
                  <g style={{ animation: "lionBreathe 4s ease-in-out 0.5s infinite" }} transform="translate(155, 50) scale(-1,1)">
                    <path d="M5 60 Q0 50 5 40 Q10 30 15 25 Q18 15 25 12 Q30 10 28 20 Q25 28 20 35 Q18 40 20 45 L25 60Z"
                      fill="rgba(180,140,60,0.12)" stroke="rgba(180,140,60,0.2)" strokeWidth="0.8" />
                    <circle cx="20" cy="20" r="8" fill="rgba(180,140,60,0.08)" stroke="rgba(180,140,60,0.15)" strokeWidth="0.5" />
                  </g>

                  {/* Crown on top */}
                  <path d="M82 28 L88 18 L94 25 L100 14 L106 25 L112 18 L118 28Z"
                    fill="rgba(180,140,60,0.15)" stroke="rgba(180,140,60,0.3)" strokeWidth="1" />

                  {/* Stars */}
                  {[70, 100, 130].map((cx, i) => (
                    <circle key={i} cx={cx} cy={105} r="2" fill="rgba(180,140,60,0.3)"
                      style={{ animation: `starShine 3s ease-in-out ${i * 0.5}s infinite` } as React.CSSProperties} />
                  ))}

                  {/* Banner ribbon */}
                  <g style={{ animation: "bannerWave 5s ease-in-out infinite" }}>
                    <path d="M35 190 L45 180 L155 180 L165 190 L155 200 L45 200Z"
                      fill="rgba(100,30,20,0.2)" stroke="rgba(180,140,60,0.25)" strokeWidth="1" />
                    {/* Banner tails */}
                    <path d="M35 190 L25 185 L35 195" fill="rgba(100,30,20,0.15)" />
                    <path d="M165 190 L175 185 L165 195" fill="rgba(100,30,20,0.15)" />
                    {/* Banner text line */}
                    <line x1="65" y1="190" x2="135" y2="190" stroke="rgba(180,140,60,0.15)" strokeWidth="1" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className={`text-center max-w-2xl ${isAr ? "text-center" : ""}`}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/10 bg-amber-400/[0.04] mb-6"
                style={{ animationDelay: "0.8s" }}>
                <span className="text-sm font-medium text-amber-300/60 tracking-widest">{t.badge}</span>
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.95s" }}>
                <span className="block text-white/90">{t.heading[0]}</span>
                <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">{t.heading[1]}</span>
                <span className="block text-white/70">{t.heading[2]}</span>
              </h1>

              <p className="fade-up mt-5 text-base text-amber-100/25 leading-relaxed max-w-xl mx-auto"
                style={{ animationDelay: "1.1s" }}>{t.sub}</p>

              {/* Legacy timeline */}
              <div className={`fade-up mt-8 flex justify-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "1.2s" }}>
                {t.legacy.map((l, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-lg font-black text-amber-300/70">{l.year}</div>
                    <div className="text-xs text-amber-200/25 mt-0.5">{l.event}</div>
                    {i < t.legacy.length - 1 && (
                      <div className="hidden sm:block absolute" style={{
                        width: 40, height: 1,
                        background: "rgba(180,140,60,0.1)",
                      }} />
                    )}
                  </div>
                ))}
              </div>

              <div className={`fade-up mt-8 flex justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "1.35s" }}>
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
          </div>
        </div>
      </section>
    </>
  );
}
