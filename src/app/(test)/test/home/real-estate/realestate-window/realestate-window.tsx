"use client";

/**
 * Window View Hero
 * Window frame looking out at cityscape gradient. Interior-to-exterior view.
 * Window mullions frame a gradient cityscape beyond with ambient light.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Premium Living",
    heading: "A View Worth",
    headingHighlight: "Coming Home To",
    subheading:
      "Floor-to-ceiling windows framing breathtaking cityscapes. Discover residences where every room has a story to tell.",
    ctaPrimary: "View Properties",
    ctaSecondary: "Book a Tour",
    features: ["Panoramic Views", "Smart Home", "24/7 Concierge", "Rooftop Garden"],
    stats: [
      { value: "42", label: "Floors" },
      { value: "180°", label: "View" },
      { value: "5★", label: "Living" },
    ],
  },
  ar: {
    badge: "حياة فاخرة",
    heading: "إطلالة تستحق",
    headingHighlight: "العودة إليها",
    subheading:
      "نوافذ من الأرض حتى السقف تؤطر مناظر المدينة الخلابة. اكتشف مساكن حيث كل غرفة لديها قصة ترويها.",
    ctaPrimary: "عرض العقارات",
    ctaSecondary: "حجز جولة",
    features: ["إطلالات بانورامية", "منزل ذكي", "كونسيرج 24/7", "حديقة على السطح"],
    stats: [
      { value: "42", label: "طابق" },
      { value: "°180", label: "إطلالة" },
      { value: "★5", label: "معيشة" },
    ],
  },
};

export function RealestateWindow({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes windowReveal {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes cityGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes lightFlicker {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes curtainSway {
          0%, 100% { transform: skewX(0deg); }
          50% { transform: skewX(1deg); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c0a06]">
        {/* Warm ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.15) 0%, rgba(217,119,6,0.05) 50%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Features */}
              <div className={`fade-up mt-10 grid grid-cols-2 gap-3 ${isAr ? "text-right" : ""}`}
                style={{ animationDelay: "0.5s" }}>
                {t.features.map((feat, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm text-white/25 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span className="w-1 h-1 rounded-full bg-amber-500/50" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className={`fade-up mt-8 flex items-center gap-8 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.6s" }}>
                {t.stats.map((stat, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <div className="text-2xl font-bold text-amber-300">{stat.value}</div>
                    <div className="text-xs text-white/20">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Window visualization */}
            <div className={`relative flex justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}
              style={{ animation: "windowReveal 0.8s ease-out 0.4s both" }}>
              <div className="relative w-72 sm:w-80">
                {/* Window frame */}
                <div className="relative rounded-lg border-[6px] border-amber-900/40 overflow-hidden"
                  style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 0 30px rgba(245,158,11,0.05)" }}>
                  {/* Cityscape through window */}
                  <div className="aspect-[3/4] relative bg-gradient-to-b from-[#1a1040] via-[#2d1b4e] to-[#0c0a06]">
                    {/* Sky gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-indigo-950 to-purple-950/50" />

                    {/* Stars */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="absolute w-0.5 h-0.5 rounded-full bg-white/30"
                        style={{
                          left: `${10 + (i * 37) % 80}%`,
                          top: `${5 + (i * 23) % 20}%`,
                          animation: `lightFlicker ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
                        }} />
                    ))}

                    {/* City buildings silhouette */}
                    <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 300 150" preserveAspectRatio="none">
                      {/* Background buildings */}
                      <rect x="10" y="60" width="25" height="90" fill="rgba(30,20,50,0.8)" />
                      <rect x="40" y="40" width="20" height="110" fill="rgba(25,18,45,0.9)" />
                      <rect x="65" y="55" width="30" height="95" fill="rgba(35,25,55,0.8)" />
                      <rect x="100" y="25" width="22" height="125" fill="rgba(28,20,48,0.9)" />
                      <rect x="128" y="50" width="28" height="100" fill="rgba(32,22,52,0.8)" />
                      <rect x="162" y="35" width="25" height="115" fill="rgba(27,19,47,0.9)" />
                      <rect x="192" y="45" width="30" height="105" fill="rgba(33,23,53,0.8)" />
                      <rect x="228" y="55" width="22" height="95" fill="rgba(30,21,50,0.85)" />
                      <rect x="255" y="40" width="35" height="110" fill="rgba(28,20,48,0.9)" />

                      {/* Building windows (lit up) */}
                      {Array.from({ length: 30 }).map((_, i) => {
                        const bx = 15 + (i * 47) % 260;
                        const by = 50 + (i * 31) % 80;
                        return (
                          <rect key={i} x={bx} y={by} width="3" height="4" rx="0.5"
                            fill="rgba(245,158,11,0.4)"
                            style={{ animation: `lightFlicker ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite` } as React.CSSProperties} />
                        );
                      })}
                    </svg>

                    {/* Golden hour glow on horizon */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-900/20 to-transparent"
                      style={{ animation: "cityGlow 4s ease-in-out infinite" }} />

                    {/* Window mullion cross */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[4px] bg-amber-900/50" />
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[4px] bg-amber-900/50" />
                    </div>

                    {/* Curtain edge (left) */}
                    <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-amber-950/30 to-transparent"
                      style={{ animation: "curtainSway 5s ease-in-out infinite" }} />
                  </div>
                </div>

                {/* Window sill */}
                <div className="h-3 bg-amber-900/30 rounded-b-sm -mt-px" />

                {/* Light cast into room */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-amber-500/[0.03] rounded-full blur-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
