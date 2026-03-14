"use client";

import { ArrowRight, Gem, Layers, Sparkles } from "lucide-react";

const content = {
  en: {
    heading: ["Fluid Innovation", "For Modern Business"],
    sub: "Where organic creativity meets structured engineering. We design solutions that flow naturally with your business objectives.",
    cta1: "Get Started",
    cta2: "Explore Solutions",
    cards: [
      {
        icon: "gem",
        title: "Premium Quality",
        desc: "Crafted solutions with meticulous attention to every detail",
      },
      {
        icon: "layers",
        title: "Scalable Architecture",
        desc: "Built to grow with your business from startup to enterprise",
      },
      {
        icon: "sparkles",
        title: "AI-Powered",
        desc: "Intelligent automation that learns and adapts to your needs",
      },
    ],
    stats: [
      { value: "300+", label: "Projects" },
      { value: "99.5%", label: "Satisfaction" },
      { value: "45", label: "Countries" },
      { value: "$1.2B", label: "Impact" },
    ],
  },
  ar: {
    heading: ["ابتكار سلس", "لأعمال عصرية"],
    sub: "حيث يلتقي الإبداع العضوي بالهندسة المنظمة. نصمم حلولاً تتدفق بسلاسة مع أهداف أعمالك.",
    cta1: "ابدأ الآن",
    cta2: "استكشف الحلول",
    cards: [
      {
        icon: "gem",
        title: "جودة فائقة",
        desc: "حلول مصممة بعناية فائقة مع الاهتمام بكل التفاصيل",
      },
      {
        icon: "layers",
        title: "هندسة قابلة للتوسع",
        desc: "مبنية للنمو مع أعمالك من البداية إلى المؤسسة",
      },
      {
        icon: "sparkles",
        title: "مدعوم بالذكاء الاصطناعي",
        desc: "أتمتة ذكية تتعلم وتتكيف مع احتياجاتك",
      },
    ],
    stats: [
      { value: "+300", label: "مشروع" },
      { value: "99.5%", label: "رضا العملاء" },
      { value: "45", label: "دولة" },
      { value: "$1.2B", label: "تأثير" },
    ],
  },
};

const iconMap = {
  gem: Gem,
  layers: Layers,
  sparkles: Sparkles,
};

const accentColors = ["#7c3aed", "#2563eb", "#ec4899"];

export function Hero16({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#0c0a1a",
        fontFamily: fontBody,
      }}
    >
      <style>{`
        @keyframes blobMorph1 {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 40% 60% 70% 30% / 70% 40% 30% 60%; }
          75% { border-radius: 50% 30% 40% 60% / 40% 70% 60% 30%; }
        }
        @keyframes blobMorph2 {
          0%, 100% { border-radius: 40% 60% 60% 40% / 50% 40% 60% 50%; }
          25% { border-radius: 60% 40% 30% 70% / 40% 60% 70% 30%; }
          50% { border-radius: 30% 70% 50% 50% / 60% 30% 40% 70%; }
          75% { border-radius: 70% 30% 40% 60% / 30% 70% 50% 40%; }
        }
        @keyframes blobMorph3 {
          0%, 100% { border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%; }
          25% { border-radius: 70% 30% 60% 40% / 60% 40% 30% 70%; }
          50% { border-radius: 40% 60% 50% 50% / 30% 70% 60% 40%; }
          75% { border-radius: 60% 40% 70% 30% / 50% 30% 40% 60%; }
        }
        @keyframes blobDrift1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -20px); }
          50% { transform: translate(-15px, 25px); }
          75% { transform: translate(20px, 15px); }
        }
        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-25px, 15px); }
          50% { transform: translate(20px, -30px); }
          75% { transform: translate(-10px, -20px); }
        }
        @keyframes blobDrift3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(15px, 20px); }
          50% { transform: translate(-20px, -15px); }
          75% { transform: translate(25px, -10px); }
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardSlideInRtl {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glassShimmer {
          0%, 100% { border-color: rgba(255, 255, 255, 0.08); }
          50% { border-color: rgba(255, 255, 255, 0.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero16-blob,
          .hero16-card,
          .hero16-content,
          .hero16-stats {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Blob 1 — purple, top-left */}
      <div
        className="hero16-blob"
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "420px",
          height: "420px",
          background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
          filter: "blur(80px)",
          opacity: 0.4,
          animation: "blobMorph1 8s ease-in-out infinite, blobDrift1 18s ease-in-out infinite",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Blob 2 — blue, center-right */}
      <div
        className="hero16-blob"
        style={{
          position: "absolute",
          top: "25%",
          right: "8%",
          width: "480px",
          height: "480px",
          background: "linear-gradient(135deg, #2563eb, #60a5fa)",
          filter: "blur(80px)",
          opacity: 0.4,
          animation: "blobMorph2 10s ease-in-out infinite, blobDrift2 22s ease-in-out infinite",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Blob 3 — pink, bottom-center */}
      <div
        className="hero16-blob"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "30%",
          width: "380px",
          height: "380px",
          background: "linear-gradient(135deg, #ec4899, #f472b6)",
          filter: "blur(80px)",
          opacity: 0.4,
          animation: "blobMorph3 12s ease-in-out infinite, blobDrift3 25s ease-in-out infinite",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left column — 60% */}
          <div className="w-full lg:w-[60%]">
            <div
              className="hero16-content"
              style={{
                animation: "contentFade 0.8s ease-out forwards",
                opacity: 0,
              }}
            >
              <h1
                style={{ fontFamily: fontHeading }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                <span className="text-white block">{t.heading[0]}</span>
                <span
                  className="block mt-2"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t.heading[1]}
                </span>
              </h1>

              <p
                className="mt-8 text-lg sm:text-xl leading-relaxed max-w-xl"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                {t.sub}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  className="cursor-pointer px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                    fontFamily: fontBody,
                  }}
                >
                  <span className="flex items-center gap-2">
                    {t.cta1}
                    <ArrowRight
                      className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                <button
                  className="cursor-pointer px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-[0.98]"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "rgba(255, 255, 255, 0.85)",
                    fontFamily: fontBody,
                  }}
                >
                  {t.cta2}
                </button>
              </div>
            </div>
          </div>

          {/* Right column — 40%, stacked glass cards */}
          <div className="w-full lg:w-[40%] flex flex-col gap-5 pt-4">
            {t.cards.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <div
                  key={i}
                  className="hero16-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                    animation: `${isAr ? "cardSlideInRtl" : "cardSlideIn"} 0.6s ease-out ${0.4 + i * 0.2}s forwards, glassShimmer 3s ease-in-out ${i * 0.5}s infinite`,
                    opacity: 0,
                  }}
                >
                  {/* Colored left/right accent border */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12%",
                      bottom: "12%",
                      [isAr ? "right" : "left"]: 0,
                      width: "3px",
                      background: accentColors[i],
                      borderRadius: "0 3px 3px 0",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${accentColors[i]}20`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: accentColors[i] }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-white font-semibold text-base"
                        style={{ fontFamily: fontHeading }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="mt-1.5 text-sm leading-relaxed"
                        style={{ color: "rgba(255, 255, 255, 0.5)" }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom stats row */}
        <div
          className="hero16-stats mt-20 sm:mt-28"
          style={{
            animation: "contentFade 0.8s ease-out 1s forwards",
            opacity: 0,
          }}
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 rounded-2xl py-8 px-6 sm:px-10"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center ${
                  i < t.stats.length - 1
                    ? "sm:border-e sm:border-white/[0.06]"
                    : ""
                }`}
              >
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: fontHeading,
                    background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1.5 text-sm"
                  style={{ color: "rgba(255, 255, 255, 0.45)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
