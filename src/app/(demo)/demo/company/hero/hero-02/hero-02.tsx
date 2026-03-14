"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    sideLeftLabel: "Founded",
    sideLeftValue: "2004",
    sideRightLabel: "Revenue",
    sideRightValue: "$1.8B",
    headingTop: "Where Vision",
    headingBottom: "Meets Execution",
    sub: "Strategic consulting and enterprise solutions that bridge the gap between ambition and achievement.",
    cta1: "Begin Your Journey",
    cta2: "Explore Services",
  },
  ar: {
    sideLeftLabel: "الإيرادات",
    sideLeftValue: "$1.8B",
    sideRightLabel: "التأسيس",
    sideRightValue: "2004",
    headingTop: "حيث تلتقي الرؤية",
    headingBottom: "بالتنفيذ",
    sub: "استشارات استراتيجية وحلول مؤسسية تسد الفجوة بين الطموح والإنجاز.",
    cta1: "ابدأ رحلتك",
    cta2: "استكشف الخدمات",
  },
};

export function Hero02({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes horizonExpand {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes horizonGlow {
          0%, 100% { box-shadow: 0 0 8px 0 rgba(148, 163, 184, 0); }
          50% { box-shadow: 0 0 20px 2px rgba(148, 163, 184, 0.3); }
        }

        @keyframes fadeAbove {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeBelow {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes sideSlideL {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes sideSlideR {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes pillarRise {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }

        @keyframes diamondFade {
          0% { opacity: 0; transform: rotate(45deg) scale(0); }
          100% { opacity: 1; transform: rotate(45deg) scale(1); }
        }

        .hero02-horizon {
          animation: horizonExpand 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both,
                     horizonGlow 4s ease-in-out 1.8s infinite;
          transform-origin: center;
        }

        .hero02-diamond {
          animation: diamondFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1.6s both;
        }

        .hero02-fade-above {
          animation: fadeAbove 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
        }

        .hero02-fade-below {
          animation: fadeBelow 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.0s both;
        }

        .hero02-fade-in {
          animation: fadeIn 0.8s ease 1.4s both;
        }

        .hero02-fade-in-late {
          animation: fadeIn 0.8s ease 1.8s both;
        }

        .hero02-side-l {
          animation: sideSlideL 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.6s both;
        }

        .hero02-side-r {
          animation: sideSlideR 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.6s both;
        }

        .hero02-pillar-1 {
          animation: pillarRise 1.2s cubic-bezier(0.22, 1, 0.36, 1) 2.0s both;
          transform-origin: bottom;
        }

        .hero02-pillar-2 {
          animation: pillarRise 1.2s cubic-bezier(0.22, 1, 0.36, 1) 2.2s both;
          transform-origin: bottom;
        }

        .hero02-pillar-3 {
          animation: pillarRise 1.2s cubic-bezier(0.22, 1, 0.36, 1) 2.4s both;
          transform-origin: bottom;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero02-horizon,
          .hero02-diamond,
          .hero02-fade-above,
          .hero02-fade-below,
          .hero02-fade-in,
          .hero02-fade-in-late,
          .hero02-side-l,
          .hero02-side-r,
          .hero02-pillar-1,
          .hero02-pillar-2,
          .hero02-pillar-3 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero02-diamond {
            transform: rotate(45deg) !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#fafaf9" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Subtle dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 0.8px, transparent 0.8px)",
            backgroundSize: "32px 32px",
            opacity: 0.02,
          }}
        />

        {/* 3 thin vertical lines at 25%, 50%, 75% */}
        <div
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: "25%", backgroundColor: "rgba(226, 232, 240, 0.4)" }}
        />
        <div
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: "50%", backgroundColor: "rgba(226, 232, 240, 0.4)" }}
        />
        <div
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{ left: "75%", backgroundColor: "rgba(226, 232, 240, 0.4)" }}
        />

        {/* 3 rising pillars at bottom */}
        <div
          className="hero02-pillar-1 absolute bottom-0 pointer-events-none"
          style={{
            left: "20%",
            width: "2px",
            height: "180px",
            background:
              "linear-gradient(to top, rgba(148, 163, 184, 0.08), rgba(148, 163, 184, 0))",
            opacity: 0.08,
          }}
        />
        <div
          className="hero02-pillar-2 absolute bottom-0 pointer-events-none"
          style={{
            left: "50%",
            width: "2px",
            height: "240px",
            background:
              "linear-gradient(to top, rgba(148, 163, 184, 0.06), rgba(148, 163, 184, 0))",
            opacity: 0.06,
          }}
        />
        <div
          className="hero02-pillar-3 absolute bottom-0 pointer-events-none"
          style={{
            left: "80%",
            width: "2px",
            height: "160px",
            background:
              "linear-gradient(to top, rgba(148, 163, 184, 0.05), rgba(148, 163, 184, 0))",
            opacity: 0.05,
          }}
        />

        {/* Side stats — left */}
        <div
          className={`hero02-side-l absolute hidden lg:flex flex-col gap-1 ${
            isAr ? "right-8 xl:right-16 items-end" : "left-8 xl:left-16 items-start"
          }`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              color: "#94a3b8",
              fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
              letterSpacing: isAr ? "0" : "0.2em",
            }}
          >
            {t.sideLeftLabel}
          </span>
          <span
            className="text-2xl font-light"
            style={{
              color: "#1e293b",
              fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
            }}
          >
            {t.sideLeftValue}
          </span>
        </div>

        {/* Side stats — right */}
        <div
          className={`hero02-side-r absolute hidden lg:flex flex-col gap-1 ${
            isAr ? "left-8 xl:left-16 items-start" : "right-8 xl:right-16 items-end"
          }`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              color: "#94a3b8",
              fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
              letterSpacing: isAr ? "0" : "0.2em",
            }}
          >
            {t.sideRightLabel}
          </span>
          <span
            className="text-2xl font-light"
            style={{
              color: "#1e293b",
              fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
            }}
          >
            {t.sideRightValue}
          </span>
        </div>

        {/* Main centered content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
          {/* Heading top — above horizon */}
          <h1
            className="hero02-fade-above text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light"
            style={{
              color: "#1e293b",
              fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
              letterSpacing: isAr ? "0" : "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {t.headingTop}
          </h1>

          {/* Horizon line with diamond */}
          <div className="relative w-full my-6 sm:my-8 lg:my-10 flex items-center justify-center">
            {/* The expanding line */}
            <div
              className="hero02-horizon w-full max-w-2xl"
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent 0%, #94a3b8 20%, #64748b 50%, #94a3b8 80%, transparent 100%)",
              }}
            />
            {/* Diamond at center */}
            <div
              className="hero02-diamond absolute"
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#64748b",
                left: "50%",
                top: "50%",
                marginLeft: "-5px",
                marginTop: "-5px",
              }}
            />
          </div>

          {/* Heading bottom — below horizon */}
          <h1
            className="hero02-fade-below text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light"
            style={{
              fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
              letterSpacing: isAr ? "0" : "-0.02em",
              lineHeight: 1.1,
              background:
                "linear-gradient(90deg, #475569, #1e293b, #475569)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.headingBottom}
          </h1>

          {/* Subtitle */}
          <p
            className="hero02-fade-in mt-8 sm:mt-10 max-w-xl text-base sm:text-lg font-light leading-relaxed"
            style={{
              color: "#64748b",
              fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="hero02-fade-in-late mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 items-center"
          >
            {/* Primary CTA */}
            <button
              className="cursor-pointer group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
              }}
            >
              <span>{t.cta1}</span>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isAr
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </button>

            {/* Secondary CTA */}
            <button
              className="cursor-pointer px-8 py-3.5 rounded-lg text-sm font-medium border transition-all duration-300 hover:bg-slate-50 active:scale-[0.98]"
              style={{
                color: "#475569",
                borderColor: "#cbd5e1",
                fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
              }}
            >
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Mobile side stats — shown below content on small screens */}
        <div
          className="absolute bottom-8 left-0 right-0 flex lg:hidden justify-center gap-12 hero02-fade-in-late"
        >
          <div className="flex flex-col items-center gap-0.5">
            <span
              className="text-[10px] tracking-[0.15em] uppercase"
              style={{
                color: "#94a3b8",
                fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
                letterSpacing: isAr ? "0" : "0.15em",
              }}
            >
              {t.sideLeftLabel}
            </span>
            <span
              className="text-lg font-light"
              style={{
                color: "#1e293b",
                fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.sideLeftValue}
            </span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span
              className="text-[10px] tracking-[0.15em] uppercase"
              style={{
                color: "#94a3b8",
                fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
                letterSpacing: isAr ? "0" : "0.15em",
              }}
            >
              {t.sideRightLabel}
            </span>
            <span
              className="text-lg font-light"
              style={{
                color: "#1e293b",
                fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
              }}
            >
              {t.sideRightValue}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
