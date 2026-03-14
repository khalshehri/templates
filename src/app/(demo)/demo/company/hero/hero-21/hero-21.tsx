"use client";

import {
  ArrowRight,
  Code,
  Palette,
  LineChart,
  Shield,
  Smartphone,
} from "lucide-react";

const content = {
  en: {
    badge: "Full-Stack Solutions",
    heading1: "Everything You Need",
    heading2: "In One Place",
    sub: "Stop juggling multiple vendors. Our comprehensive suite of digital services covers every aspect of your online presence, from concept to deployment and beyond.",
    cta1: "View All Services",
    cta2: "Custom Package",
    metric1Value: "50+",
    metric1Label: "Services",
    metric2Value: "360°",
    metric2Label: "Coverage",
    metric3Value: "1",
    metric3Label: "Partner",
  },
  ar: {
    badge: "حلول متكاملة",
    heading1: "كل ما تحتاجه",
    heading2: "في مكان واحد",
    sub: "توقف عن التنقل بين موردين متعددين. مجموعة خدماتنا الرقمية الشاملة تغطي كل جانب من حضورك الرقمي.",
    cta1: "عرض الخدمات",
    cta2: "باقة مخصصة",
    metric1Value: "+50",
    metric1Label: "خدمة",
    metric2Value: "360°",
    metric2Label: "تغطية",
    metric3Value: "1",
    metric3Label: "شريك",
  },
};

const cards = [
  {
    icon: Code,
    titleEn: "Development",
    titleAr: "التطوير",
    descEn: "Custom web & mobile applications",
    descAr: "تطبيقات ويب وجوال مخصصة",
    color: "#f43f5e",
    rotation: -15,
    tx: -120,
  },
  {
    icon: Palette,
    titleEn: "Design",
    titleAr: "التصميم",
    descEn: "UI/UX and brand identity",
    descAr: "تصميم الواجهات وهوية العلامة",
    color: "#3b82f6",
    rotation: -7,
    tx: -55,
  },
  {
    icon: LineChart,
    titleEn: "Analytics",
    titleAr: "التحليلات",
    descEn: "Data-driven growth strategies",
    descAr: "استراتيجيات نمو مبنية على البيانات",
    color: "#10b981",
    rotation: 0,
    tx: 0,
  },
  {
    icon: Shield,
    titleEn: "Security",
    titleAr: "الأمان",
    descEn: "Enterprise-grade protection",
    descAr: "حماية بمستوى المؤسسات",
    color: "#f59e0b",
    rotation: 7,
    tx: 55,
  },
  {
    icon: Smartphone,
    titleEn: "Mobile",
    titleAr: "الجوال",
    descEn: "Native & cross-platform apps",
    descAr: "تطبيقات أصلية ومتعددة المنصات",
    color: "#8b5cf6",
    rotation: 15,
    tx: 120,
  },
];

export function Hero21({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes h21CardFan0 {
          0% { opacity: 0; transform: translateX(0px) rotate(0deg) translateY(40px); }
          100% { opacity: 1; transform: translateX(${isAr ? 120 : -120}px) rotate(${isAr ? 15 : -15}deg) translateY(0px); }
        }
        @keyframes h21CardFan1 {
          0% { opacity: 0; transform: translateX(0px) rotate(0deg) translateY(40px); }
          100% { opacity: 1; transform: translateX(${isAr ? 55 : -55}px) rotate(${isAr ? 7 : -7}deg) translateY(0px); }
        }
        @keyframes h21CardFan2 {
          0% { opacity: 0; transform: translateX(0px) rotate(0deg) translateY(40px); }
          100% { opacity: 1; transform: translateX(0px) rotate(0deg) translateY(0px); }
        }
        @keyframes h21CardFan3 {
          0% { opacity: 0; transform: translateX(0px) rotate(0deg) translateY(40px); }
          100% { opacity: 1; transform: translateX(${isAr ? -55 : 55}px) rotate(${isAr ? -7 : 7}deg) translateY(0px); }
        }
        @keyframes h21CardFan4 {
          0% { opacity: 0; transform: translateX(0px) rotate(0deg) translateY(40px); }
          100% { opacity: 1; transform: translateX(${isAr ? -120 : 120}px) rotate(${isAr ? -15 : 15}deg) translateY(0px); }
        }
        @keyframes h21CardHover {
          0%, 100% { transform: translateX(0px) rotate(0deg) translateY(0px); }
          50% { transform: translateX(0px) rotate(0deg) translateY(-5px); }
        }
        @keyframes h21ContentSlide {
          0% { opacity: 0; transform: translateX(${isAr ? "30px" : "-30px"}); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes h21GlowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes h21BadgePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes h21FadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .h21-card-0 {
          animation: h21CardFan0 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }
        .h21-card-1 {
          animation: h21CardFan1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }
        .h21-card-2 {
          animation: h21CardFan2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
          animation-name: h21CardFan2, h21CardHover;
          animation-duration: 0.8s, 4s;
          animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1), ease-in-out;
          animation-delay: 0.3s, 1.5s;
          animation-fill-mode: both, none;
          animation-iteration-count: 1, infinite;
        }
        .h21-card-3 {
          animation: h21CardFan3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both;
        }
        .h21-card-4 {
          animation: h21CardFan4 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both;
        }

        .h21-content-slide {
          animation: h21ContentSlide 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }
        .h21-glow {
          animation: h21GlowPulse 5s ease-in-out infinite;
        }
        .h21-fade-up {
          animation: h21FadeUp 0.6s ease-out both;
        }
        .h21-fade-up-1 { animation-delay: 0.15s; }
        .h21-fade-up-2 { animation-delay: 0.25s; }
        .h21-fade-up-3 { animation-delay: 0.35s; }
        .h21-fade-up-4 { animation-delay: 0.45s; }
        .h21-fade-up-5 { animation-delay: 0.55s; }

        .h21-card-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .h21-card-item:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          z-index: 20 !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .h21-card-0, .h21-card-1, .h21-card-2, .h21-card-3, .h21-card-4,
          .h21-content-slide, .h21-glow, .h21-fade-up,
          .h21-fade-up-1, .h21-fade-up-2, .h21-fade-up-3,
          .h21-fade-up-4, .h21-fade-up-5 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .h21-card-0 {
            transform: translateX(${isAr ? 120 : -120}px) rotate(${isAr ? 15 : -15}deg) !important;
          }
          .h21-card-1 {
            transform: translateX(${isAr ? 55 : -55}px) rotate(${isAr ? 7 : -7}deg) !important;
          }
          .h21-card-2 {
            transform: translateX(0px) rotate(0deg) !important;
          }
          .h21-card-3 {
            transform: translateX(${isAr ? -55 : 55}px) rotate(${isAr ? -7 : 7}deg) !important;
          }
          .h21-card-4 {
            transform: translateX(${isAr ? -120 : 120}px) rotate(${isAr ? -15 : 15}deg) !important;
          }
          .h21-card-item {
            transition: none !important;
          }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{
          background: "#0e1117",
          fontFamily: fontBody,
        }}
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow behind cards */}
        <div
          className="h21-glow absolute pointer-events-none"
          style={{
            width: "700px",
            height: "700px",
            top: "50%",
            right: isAr ? "auto" : "10%",
            left: isAr ? "10%" : "auto",
            transform: "translateY(-50%)",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content — 45% */}
            <div
              className="w-full lg:w-[45%] h21-content-slide"
              style={{ textAlign: isAr ? "right" : "left" }}
            >
              {/* Badge */}
              <div
                className="h21-fade-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                style={{
                  background: "rgba(244,63,94,0.1)",
                  border: "1px solid rgba(244,63,94,0.2)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#f43f5e",
                    animation: "h21BadgePulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#f43f5e", fontFamily: fontBody }}
                >
                  {t.badge}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="h21-fade-up h21-fade-up-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: fontHeading }}
              >
                <span className="text-white block">{t.heading1}</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #f43f5e, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.heading2}
                </span>
              </h1>

              {/* Sub */}
              <p
                className="h21-fade-up h21-fade-up-2 text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: fontBody }}
              >
                {t.sub}
              </p>

              {/* CTAs */}
              <div
                className="h21-fade-up h21-fade-up-3 flex flex-wrap gap-4 mb-10"
                style={{
                  justifyContent: isAr ? "flex-start" : "flex-start",
                }}
              >
                <button
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #f43f5e, #8b5cf6)",
                    fontFamily: fontBody,
                  }}
                >
                  {t.cta1}
                  <ArrowRight
                    className="w-4 h-4"
                    style={{
                      transform: isAr ? "scaleX(-1)" : "none",
                    }}
                  />
                </button>
                <button
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontFamily: fontBody,
                  }}
                >
                  {t.cta2}
                </button>
              </div>

              {/* Metrics */}
              <div
                className="h21-fade-up h21-fade-up-4 flex gap-8"
              >
                {[
                  { value: t.metric1Value, label: t.metric1Label },
                  { value: t.metric2Value, label: t.metric2Label },
                  { value: t.metric3Value, label: t.metric3Label },
                ].map((metric, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: fontHeading }}
                    >
                      {metric.value}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: fontBody,
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side — 55% — Card Cascade */}
            <div className="w-full lg:w-[55%] flex items-center justify-center">
              <div
                className="relative"
                style={{
                  width: "500px",
                  height: "420px",
                }}
              >
                {cards.map((card, i) => {
                  const Icon = card.icon;
                  const zIndex = i === 2 ? 15 : i === 1 || i === 3 ? 10 : 5;

                  return (
                    <div
                      key={i}
                      className={`h21-card-${i} h21-card-item absolute cursor-pointer`}
                      style={{
                        width: "200px",
                        height: "260px",
                        left: "50%",
                        bottom: "20px",
                        marginLeft: "-100px",
                        transformOrigin: "bottom center",
                        zIndex,
                        borderRadius: "16px",
                        background:
                          "linear-gradient(180deg, #1a1f2e 0%, #141925 100%)",
                        borderTop: `3px solid ${card.color}`,
                        border: `1px solid rgba(255,255,255,0.06)`,
                        borderTopWidth: "3px",
                        borderTopColor: card.color,
                        boxShadow: `0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px 20px",
                        gap: "16px",
                      }}
                    >
                      {/* Icon container */}
                      <div
                        className="flex items-center justify-center rounded-xl"
                        style={{
                          width: "56px",
                          height: "56px",
                          background: `${card.color}15`,
                          border: `1px solid ${card.color}30`,
                        }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: card.color }}
                        />
                      </div>

                      {/* Card title */}
                      <h3
                        className="text-base font-bold text-white text-center"
                        style={{ fontFamily: fontHeading }}
                      >
                        {isAr ? card.titleAr : card.titleEn}
                      </h3>

                      {/* Card desc */}
                      <p
                        className="text-xs text-center leading-relaxed"
                        style={{
                          color: "rgba(255,255,255,0.5)",
                          fontFamily: fontBody,
                        }}
                      >
                        {isAr ? card.descAr : card.descEn}
                      </p>

                      {/* Colored accent dot at bottom */}
                      <div
                        className="w-8 h-0.5 rounded-full mt-auto"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
