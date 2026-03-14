"use client";

import { ArrowRight, Check } from "lucide-react";

const content = {
  en: {
    badge: "Trusted Worldwide",
    heading1: "Ride the Wave",
    heading2: "of Digital Growth",
    sub: "Join thousands of businesses surfing the digital transformation wave. Our solutions adapt, scale, and deliver results that compound over time.",
    cta1: "Get Started Free",
    cta2: "See Pricing",
    features: ["No setup fees", "Cancel anytime", "24/7 support"],
    stats: [
      { value: "500+", label: "Projects" },
      { value: "98%", label: "Retention" },
      { value: "24/7", label: "Support" },
      { value: "15+", label: "Countries" },
    ],
    trust: ["TechCorp", "DataFlow", "CloudBase", "InnoVate", "ScalePro"],
  },
  ar: {
    badge: "موثوق عالمياً",
    heading1: "اركب موجة",
    heading2: "النمو الرقمي",
    sub: "انضم لآلاف الشركات التي تركب موجة التحول الرقمي. حلولنا تتكيف وتتوسع وتحقق نتائج متراكمة مع الوقت.",
    cta1: "ابدأ مجاناً",
    cta2: "الأسعار",
    features: ["بدون رسوم إعداد", "إلغاء في أي وقت", "دعم 24/7"],
    stats: [
      { value: "+500", label: "مشروع" },
      { value: "98%", label: "استبقاء" },
      { value: "24/7", label: "دعم" },
      { value: "+15", label: "دولة" },
    ],
    trust: ["TechCorp", "DataFlow", "CloudBase", "InnoVate", "ScalePro"],
  },
};

export function Hero06({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes waveFlow1 {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes waveFlow2 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes waveFlow3 {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(25%); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes statCount {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes logoSlide {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero06-wave { animation-play-state: paused !important; }
          .hero06-fadeup { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero06-stat { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero06-logo { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <section
        style={{
          background: "#071020",
          fontFamily: fontBody,
          direction: isAr ? "rtl" : "ltr",
        }}
        className="min-h-screen relative overflow-hidden flex flex-col"
      >
        {/* Content area */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-start px-4 sm:px-6 pt-20 sm:pt-28 pb-12">
          {/* Badge */}
          <div
            className="hero06-fadeup"
            style={{
              animation: "fadeUp 0.7s ease-out both",
              animationDelay: "0.1s",
            }}
          >
            <span
              style={{
                fontFamily: fontBody,
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.25)",
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm text-indigo-300"
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#6366f1",
                  boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                }}
              />
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero06-fadeup mt-6 text-center"
            style={{
              fontFamily: fontHeading,
              animation: "fadeUp 0.7s ease-out both",
              animationDelay: "0.25s",
            }}
          >
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: fontHeading }}
            >
              {t.heading1}
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-1"
              style={{
                fontFamily: fontHeading,
                background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.heading2}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="hero06-fadeup mt-6 text-center max-w-2xl text-base sm:text-lg"
            style={{
              fontFamily: fontBody,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              animation: "fadeUp 0.7s ease-out both",
              animationDelay: "0.4s",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="hero06-fadeup mt-8 flex flex-wrap items-center justify-center gap-4"
            style={{
              animation: "fadeUp 0.7s ease-out both",
              animationDelay: "0.55s",
            }}
          >
            <button
              className="cursor-pointer px-7 py-3 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                fontFamily: fontBody,
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
              }}
            >
              <span className="flex items-center gap-2">
                {t.cta1}
                <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
              </span>
            </button>
            <button
              className="cursor-pointer px-7 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10"
              style={{
                fontFamily: fontBody,
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Feature bullets */}
          <div
            className="hero06-fadeup mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            style={{
              animation: "fadeUp 0.7s ease-out both",
              animationDelay: "0.65s",
            }}
          >
            {t.features.map((feature, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-sm"
                style={{
                  fontFamily: fontBody,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <Check size={14} style={{ color: "#6366f1" }} />
                {feature}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-3xl"
          >
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="hero06-stat text-center"
                style={{
                  animation: "statCount 0.6s ease-out both",
                  animationDelay: `${0.8 + i * 0.1}s`,
                }}
              >
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: fontHeading,
                    background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-sm"
                  style={{
                    fontFamily: fontBody,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust logos */}
          <div className="mt-10 w-full max-w-3xl">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {t.trust.map((name, i) => (
                <div
                  key={i}
                  className="hero06-logo px-5 py-2.5 rounded-lg text-sm font-medium"
                  style={{
                    fontFamily: fontBody,
                    color: "rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    animation: "logoSlide 0.5s ease-out both",
                    animationDelay: `${1.2 + i * 0.08}s`,
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SVG Waves */}
        <div className="relative w-full" style={{ height: "220px" }}>
          {/* Wave 1 - back, gentle curves */}
          <div
            className="hero06-wave absolute bottom-0 left-0"
            style={{
              width: "200%",
              height: "180px",
              animation: "waveFlow1 25s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 2400 180"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <path
                d="M0,80 C150,120 350,40 600,80 C850,120 1050,40 1200,80 C1350,120 1550,40 1800,80 C2050,120 2250,40 2400,80 L2400,180 L0,180 Z"
                fill="rgba(99,102,241,0.08)"
              />
            </svg>
          </div>

          {/* Wave 2 - mid, different curve */}
          <div
            className="hero06-wave absolute bottom-0 left-0"
            style={{
              width: "200%",
              height: "150px",
              animation: "waveFlow2 20s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 2400 150"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <path
                d="M0,60 C200,100 400,20 600,60 C800,100 1000,30 1200,60 C1400,90 1600,20 1800,55 C2000,90 2200,25 2400,60 L2400,150 L0,150 Z"
                fill="rgba(59,130,246,0.06)"
              />
            </svg>
          </div>

          {/* Wave 3 - front, sharper peaks */}
          <div
            className="hero06-wave absolute bottom-0 left-0"
            style={{
              width: "200%",
              height: "120px",
              animation: "waveFlow3 30s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <path
                d="M0,50 C100,80 200,20 400,50 C600,80 700,15 900,45 C1100,75 1200,10 1400,50 C1600,85 1700,15 1900,45 C2100,75 2300,20 2400,50 L2400,120 L0,120 Z"
                fill="rgba(99,102,241,0.04)"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
