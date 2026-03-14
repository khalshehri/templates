"use client";

import { ArrowRight, Play } from "lucide-react";

const content = {
  en: {
    tag: "PRESENTING",
    heading: ["The Art of", "Digital Excellence"],
    sub: "Step into the spotlight. We craft digital experiences that captivate audiences and command attention on every stage.",
    cta1: "Book a Consultation",
    cta2: "Watch Showreel",
    stats: [
      { value: "20+", label: "Years on Stage" },
      { value: "1000+", label: "Standing Ovations" },
      { value: "50+", label: "Awards" },
      { value: "Global", label: "Presence" },
    ],
  },
  ar: {
    tag: "\u0646\u0642\u062F\u0651\u0645 \u0644\u0643\u0645",
    heading: ["\u0641\u0646 \u0627\u0644\u062A\u0645\u064A\u0651\u0632", "\u0627\u0644\u0631\u0642\u0645\u064A"],
    sub: "\u0627\u062F\u062E\u0644 \u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u0636\u0648\u0621. \u0646\u0635\u0646\u0639 \u062A\u062C\u0627\u0631\u0628 \u0631\u0642\u0645\u064A\u0629 \u062A\u0623\u0633\u0631 \u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0648\u062A\u0641\u0631\u0636 \u0627\u0644\u062D\u0636\u0648\u0631 \u0639\u0644\u0649 \u0643\u0644 \u0645\u0633\u0631\u062D.",
    cta1: "\u0627\u062D\u062C\u0632 \u0627\u0633\u062A\u0634\u0627\u0631\u0629",
    cta2: "\u0634\u0627\u0647\u062F \u0627\u0644\u0639\u0631\u0636",
    stats: [
      { value: "+20", label: "\u0639\u0627\u0645\u064B\u0627 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0631\u062D" },
      { value: "+1000", label: "\u062A\u0635\u0641\u064A\u0642 \u062D\u0627\u0631" },
      { value: "+50", label: "\u062C\u0627\u0626\u0632\u0629" },
      { value: "\u0639\u0627\u0644\u0645\u064A", label: "\u0627\u0644\u062D\u0636\u0648\u0631" },
    ],
  },
};

const dustParticles = [
  { left: "18%", delay: "0s", duration: "9s", size: 2 },
  { left: "25%", delay: "1.2s", duration: "11s", size: 3 },
  { left: "35%", delay: "2.5s", duration: "8s", size: 2 },
  { left: "45%", delay: "0.8s", duration: "10s", size: 2 },
  { left: "52%", delay: "3.1s", duration: "12s", size: 3 },
  { left: "60%", delay: "1.7s", duration: "9s", size: 2 },
  { left: "68%", delay: "4.2s", duration: "11s", size: 2 },
  { left: "75%", delay: "2.0s", duration: "10s", size: 3 },
  { left: "82%", delay: "0.5s", duration: "8s", size: 2 },
  { left: "40%", delay: "3.8s", duration: "12s", size: 2 },
];

export function Hero15({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes spotlightSway1 {
          0%, 100% { transform: rotate(-7deg); }
          50% { transform: rotate(7deg); }
        }
        @keyframes spotlightSway2 {
          0%, 100% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
        }
        @keyframes spotlightSway3 {
          0%, 100% { transform: rotate(8deg); }
          50% { transform: rotate(-8deg); }
        }
        @keyframes dustFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          70% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-420px) translateX(25px);
            opacity: 0;
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes letterSpacing {
          0%, 100% { letter-spacing: 0.35em; }
          50% { letter-spacing: 0.55em; }
        }
        @keyframes glowPulse {
          0%, 100% {
            text-shadow: 0 0 20px rgba(245,158,11,0.15), 0 0 60px rgba(245,158,11,0.05);
          }
          50% {
            text-shadow: 0 0 30px rgba(245,158,11,0.3), 0 0 80px rgba(245,158,11,0.1);
          }
        }
        @keyframes curtainShimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.85; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero15-spotlight,
          .hero15-dust,
          .hero15-fadein,
          .hero15-tag,
          .hero15-glow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{ background: "#050505", fontFamily: fontBody }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* ── Stage Floor Reflection ── */}
        <div
          className="absolute inset-x-0 bottom-0 h-[35%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,248,230,0.025) 0%, rgba(255,248,230,0.008) 40%, transparent 100%)",
          }}
        />

        {/* ── Spotlight 1 — Left ── */}
        <div
          className="hero15-spotlight absolute pointer-events-none"
          style={{
            top: "-5%",
            left: "10%",
            width: "35%",
            height: "110%",
            transformOrigin: "top center",
            animation: "spotlightSway1 12s ease-in-out infinite",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              clipPath: "polygon(42% 0%, 58% 0%, 95% 100%, 5% 100%)",
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,248,230,0.09) 0%, rgba(255,248,230,0.04) 35%, rgba(255,248,230,0.01) 60%, transparent 85%)",
            }}
          />
        </div>

        {/* ── Spotlight 2 — Center ── */}
        <div
          className="hero15-spotlight absolute pointer-events-none"
          style={{
            top: "-5%",
            left: "32%",
            width: "36%",
            height: "110%",
            transformOrigin: "top center",
            animation: "spotlightSway2 15s ease-in-out infinite",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              clipPath: "polygon(44% 0%, 56% 0%, 90% 100%, 10% 100%)",
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,248,230,0.13) 0%, rgba(255,248,230,0.06) 30%, rgba(255,248,230,0.02) 55%, transparent 80%)",
            }}
          />
        </div>

        {/* ── Spotlight 3 — Right ── */}
        <div
          className="hero15-spotlight absolute pointer-events-none"
          style={{
            top: "-5%",
            right: "10%",
            width: "35%",
            height: "110%",
            transformOrigin: "top center",
            animation: "spotlightSway3 18s ease-in-out infinite",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              clipPath: "polygon(42% 0%, 58% 0%, 95% 100%, 5% 100%)",
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,248,230,0.08) 0%, rgba(255,248,230,0.035) 35%, rgba(255,248,230,0.01) 60%, transparent 85%)",
            }}
          />
        </div>

        {/* ── Side Curtains ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            animation: "curtainShimmer 8s ease-in-out infinite",
            background:
              "radial-gradient(ellipse at 0% 50%, rgba(0,0,0,0.95) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(0,0,0,0.95) 0%, transparent 50%)",
          }}
        />
        {/* Curtain top drape */}
        <div
          className="absolute inset-x-0 top-0 h-[18%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          }}
        />

        {/* ── Dust Particles ── */}
        {dustParticles.map((p, i) => (
          <div
            key={i}
            className="hero15-dust absolute rounded-full pointer-events-none"
            style={{
              left: p.left,
              bottom: "8%",
              width: p.size,
              height: p.size,
              background: "rgba(255,248,230,0.5)",
              animation: `dustFloat ${p.duration} ease-in-out ${p.delay} infinite`,
              opacity: 0,
            }}
          />
        ))}

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
          {/* Tag */}
          <span
            className="hero15-tag hero15-fadein inline-block text-xs sm:text-sm font-semibold tracking-[0.35em] mb-8"
            style={{
              color: "#f59e0b",
              fontFamily: fontBody,
              animation:
                "fadeInUp 0.8s ease-out 0.2s both, letterSpacing 6s ease-in-out 1.5s infinite",
            }}
          >
            {t.tag}
          </span>

          {/* Heading */}
          <h1
            className="hero15-glow"
            style={{
              fontFamily: fontHeading,
              animation: "glowPulse 4s ease-in-out infinite",
            }}
          >
            <span
              className="hero15-fadein block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-2"
              style={{
                animation: "fadeInUp 0.9s ease-out 0.5s both",
              }}
            >
              {t.heading[0]}
            </span>
            <span
              className="hero15-fadein block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "fadeInUp 0.9s ease-out 0.75s both",
              }}
            >
              {t.heading[1]}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="hero15-fadein mt-8 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: fontBody,
              animation: "fadeInUp 0.9s ease-out 1s both",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="hero15-fadein mt-10 flex flex-col sm:flex-row items-center gap-4"
            style={{ animation: "fadeInUp 0.9s ease-out 1.25s both" }}
          >
            <button
              className="cursor-pointer group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "#0a0a0a",
                fontFamily: fontBody,
              }}
            >
              {t.cta1}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isAr
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </button>

            <button
              className="cursor-pointer group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-white/[0.08]"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: fontBody,
              }}
            >
              <Play className="w-4 h-4 fill-current" />
              {t.cta2}
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero15-fadein mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-y-6"
            style={{ animation: "fadeInUp 0.9s ease-out 1.5s both" }}
          >
            {t.stats.map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <span
                    className="mx-5 sm:mx-7 w-1 h-1 rounded-full hidden sm:block"
                    style={{ background: "rgba(245,158,11,0.4)" }}
                  />
                )}
                <div className="text-center px-2">
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{
                      color: "#f59e0b",
                      fontFamily: fontHeading,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs sm:text-sm mt-1"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: fontBody,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom stage edge line ── */}
        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(245,158,11,0.15) 30%, rgba(245,158,11,0.25) 50%, rgba(245,158,11,0.15) 70%, transparent 95%)",
          }}
        />
      </section>
    </>
  );
}
