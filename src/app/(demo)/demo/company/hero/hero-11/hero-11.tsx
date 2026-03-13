"use client";

import { Compass, ArrowRight, ArrowLeft } from "lucide-react";

interface Hero11Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Navigating complexity\nwith confidence",
    body: "Trusted partner for the region's most ambitious organizations across three decades of transformation.",
    cta: "Chart your course",
    stats: [
      { value: "35 Years", label: "In Operation" },
      { value: "$8.2B", label: "Revenue Managed" },
      { value: "12", label: "Regional Offices" },
    ],
  },
  ar: {
    heading: "التعامل مع التعقيد\nبثقة",
    body: "شريك موثوق لأكثر مؤسسات المنطقة طموحاً عبر ثلاثة عقود من التحول.",
    cta: "ارسم مسارك",
    stats: [
      { value: "٣٥ عاماً", label: "في العمل" },
      { value: "$٨.٢ مليار", label: "إيرادات مُدارة" },
      { value: "١٢", label: "مكتباً إقليمياً" },
    ],
  },
};

export function Hero11({ language }: Hero11Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <>
      <style>{`
        @keyframes hero11-wave-sway-1 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
        }

        @keyframes hero11-wave-sway-2 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes hero11-wave-sway-3 {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-15px);
          }
        }

        @keyframes hero11-fade-up {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero11-compass-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero11-wave-1 {
          animation: hero11-wave-sway-1 15s ease-in-out infinite;
        }

        .hero11-wave-2 {
          animation: hero11-wave-sway-2 20s ease-in-out infinite;
        }

        .hero11-wave-3 {
          animation: hero11-wave-sway-3 25s ease-in-out infinite;
        }

        .hero11-fade-1 {
          animation: hero11-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          opacity: 0;
        }

        .hero11-fade-2 {
          animation: hero11-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
          opacity: 0;
        }

        .hero11-fade-3 {
          animation: hero11-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }

        .hero11-fade-stats {
          animation: hero11-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          opacity: 0;
        }

        .hero11-compass {
          animation: hero11-compass-spin 60s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero11-wave-1,
          .hero11-wave-2,
          .hero11-wave-3 {
            animation: none;
          }

          .hero11-fade-1,
          .hero11-fade-2,
          .hero11-fade-3,
          .hero11-fade-stats {
            animation: none;
            opacity: 1;
          }

          .hero11-compass {
            animation: none;
          }
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        {/* Dark top zone */}
        <div
          className="relative"
          style={{
            background: "linear-gradient(to bottom, #0f172a, #1e3a5f)",
            minHeight: "65vh",
          }}
        >
          {/* Compass decorative icon */}
          <div
            className={`absolute top-8 ${
              isAr ? "left-8" : "right-8"
            } hero11-compass`}
            aria-hidden="true"
          >
            <Compass size={48} className="text-white/10" strokeWidth={1} />
          </div>

          {/* Dark zone content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-40 md:pt-40 md:pb-52 text-center">
            <h1
              className={`hero11-fade-1 text-4xl md:text-5xl lg:text-6xl font-medium text-white whitespace-pre-line leading-tight ${fontHeading}`}
            >
              {t.heading}
            </h1>

            <p
              className={`hero11-fade-2 text-blue-200/60 text-lg max-w-xl mx-auto mt-6 ${fontBody}`}
            >
              {t.body}
            </p>

            <div className="hero11-fade-3 mt-8">
              <button
                className={`border border-white/20 text-white/80 px-7 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:text-white inline-flex items-center gap-2 ${fontBody}`}
              >
                <span>{t.cta}</span>
                {isAr ? (
                  <ArrowLeft size={16} className="transition-all duration-300" />
                ) : (
                  <ArrowRight size={16} className="transition-all duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* SVG Wave layers */}
          <div className="absolute bottom-0 left-0 right-0" style={{ height: "200px" }}>
            {/* Wave 1 — back, most transparent */}
            <svg
              className="hero11-wave-1 absolute bottom-0 left-0 w-full"
              style={{ height: "180px", minWidth: "120%" }}
              viewBox="0 0 1440 180"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,80 C240,140 480,20 720,80 C960,140 1200,40 1440,80 L1440,180 L0,180 Z"
                fill="rgba(255,255,255,0.05)"
              />
            </svg>

            {/* Wave 2 — middle */}
            <svg
              className="hero11-wave-2 absolute bottom-0 left-0 w-full"
              style={{ height: "150px", minWidth: "115%" }}
              viewBox="0 0 1440 150"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,60 C360,120 600,10 900,70 C1200,130 1320,30 1440,60 L1440,150 L0,150 Z"
                fill="rgba(255,255,255,0.08)"
              />
            </svg>

            {/* Wave 3 — front, solid white */}
            <svg
              className="hero11-wave-3 absolute bottom-0 left-0 w-full"
              style={{ height: "120px", minWidth: "110%" }}
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,40 C180,90 420,10 720,50 C1020,90 1260,20 1440,40 L1440,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>

        {/* White bottom zone */}
        <div className="relative bg-white">
          <div className="hero11-fade-stats max-w-4xl mx-auto px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
              {t.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <span
                    className={`text-2xl font-semibold text-gray-900 ${fontHeading}`}
                  >
                    {stat.value}
                  </span>
                  <span className={`text-sm text-gray-500 ${fontBody}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
