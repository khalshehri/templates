"use client";

import { ArrowRight, Sparkles } from "lucide-react";

const content = {
  en: {
    badge: "Trusted by 500+ Companies",
    heading: ["We Build Digital", "Experiences That Inspire"],
    sub: "Transform your vision into reality with cutting-edge solutions that drive growth, engage audiences, and deliver measurable results.",
    cta1: "Get Started",
    cta2: "Watch Demo",
    stats: [
      { value: "12+", label: "Years" },
      { value: "500+", label: "Clients" },
      { value: "98%", label: "Satisfaction" },
      { value: "50+", label: "Countries" },
    ],
  },
  ar: {
    badge: "موثوق من قبل +500 شركة",
    heading: ["نبني تجارب", "رقمية تُلهم العالم"],
    sub: "حوّل رؤيتك إلى واقع مع حلول متطورة تدفع النمو وتجذب الجمهور وتحقق نتائج ملموسة.",
    cta1: "ابدأ الآن",
    cta2: "شاهد العرض",
    stats: [
      { value: "+12", label: "سنوات" },
      { value: "+500", label: "عملاء" },
      { value: "98%", label: "رضا العملاء" },
      { value: "+50", label: "دولة" },
    ],
  },
};

const PARTICLE_COLORS = [
  "#845ec2",
  "#d65db1",
  "#ff6f91",
  "#ff9671",
  "#ffc75f",
  "#f9f871",
  "#845ec2",
  "#d65db1",
  "#ff6f91",
  "#ff9671",
  "#ffc75f",
  "#f9f871",
  "#845ec2",
  "#d65db1",
  "#ff6f91",
];

const particles = Array.from({ length: 15 }, (_, i) => ({
  top: (i * 7 + 13) % 100,
  left: (i * 11 + 5) % 100,
  size: (i % 3) * 2 + 2,
  color: PARTICLE_COLORS[i],
  delay: (i * 0.6) % 8,
  duration: 8 + (i % 5),
}));

export function Hero10({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes aurora1 {
          0%, 100% {
            transform: translateX(-10%) translateY(0%) rotate(-15deg);
          }
          25% {
            transform: translateX(5%) translateY(-8%) rotate(-12deg);
          }
          50% {
            transform: translateX(10%) translateY(3%) rotate(-18deg);
          }
          75% {
            transform: translateX(-5%) translateY(-5%) rotate(-13deg);
          }
        }

        @keyframes aurora2 {
          0%, 100% {
            transform: translateX(8%) translateY(0%) rotate(5deg);
          }
          30% {
            transform: translateX(-12%) translateY(6%) rotate(8deg);
          }
          60% {
            transform: translateX(6%) translateY(-4%) rotate(2deg);
          }
        }

        @keyframes aurora3 {
          0%, 100% {
            transform: translateX(5%) translateY(3%) rotate(-8deg);
          }
          35% {
            transform: translateX(-8%) translateY(-6%) rotate(-5deg);
          }
          70% {
            transform: translateX(12%) translateY(5%) rotate(-11deg);
          }
        }

        @keyframes aurora4 {
          0%, 100% {
            transform: translateX(-6%) translateY(-2%) rotate(12deg);
          }
          40% {
            transform: translateX(10%) translateY(7%) rotate(15deg);
          }
          70% {
            transform: translateX(-3%) translateY(-5%) rotate(9deg);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
          75% {
            opacity: 0.9;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero10-aurora1 {
          animation: aurora1 20s ease-in-out infinite;
        }
        .hero10-aurora2 {
          animation: aurora2 17s ease-in-out infinite;
        }
        .hero10-aurora3 {
          animation: aurora3 23s ease-in-out infinite;
        }
        .hero10-aurora4 {
          animation: aurora4 15s ease-in-out infinite;
        }

        .hero10-particle {
          animation: particleFloat var(--dur) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .hero10-shimmer {
          background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 199, 95, 0.4) 50%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .hero10-fadeup {
          animation: fadeUp 0.8s ease-out both;
        }
        .hero10-fadeup-1 { animation-delay: 0.1s; }
        .hero10-fadeup-2 { animation-delay: 0.25s; }
        .hero10-fadeup-3 { animation-delay: 0.4s; }
        .hero10-fadeup-4 { animation-delay: 0.55s; }
        .hero10-fadeup-5 { animation-delay: 0.7s; }

        @media (prefers-reduced-motion: reduce) {
          .hero10-aurora1,
          .hero10-aurora2,
          .hero10-aurora3,
          .hero10-aurora4,
          .hero10-particle,
          .hero10-shimmer {
            animation: none !important;
          }
          .hero10-fadeup {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#0a0612", fontFamily: fontBody }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Aurora ribbon 1 — top */}
        <div
          className="hero10-aurora1 pointer-events-none absolute"
          style={{
            top: "5%",
            left: "-50%",
            width: "300%",
            height: "280px",
            background:
              "linear-gradient(90deg, #845ec2 0%, #d65db1 25%, #ff6f91 50%, #ff9671 75%, #ffc75f 100%)",
            filter: "blur(100px)",
            opacity: 0.2,
            transform: "rotate(-15deg)",
          }}
        />

        {/* Aurora ribbon 2 — upper-mid */}
        <div
          className="hero10-aurora2 pointer-events-none absolute"
          style={{
            top: "25%",
            left: "-40%",
            width: "250%",
            height: "320px",
            background:
              "linear-gradient(90deg, #ff9671 0%, #ffc75f 20%, #f9f871 40%, #845ec2 65%, #d65db1 100%)",
            filter: "blur(110px)",
            opacity: 0.18,
            transform: "rotate(5deg)",
          }}
        />

        {/* Aurora ribbon 3 — lower-mid */}
        <div
          className="hero10-aurora3 pointer-events-none absolute"
          style={{
            top: "50%",
            left: "-60%",
            width: "350%",
            height: "250px",
            background:
              "linear-gradient(90deg, #d65db1 0%, #ff6f91 30%, #ff9671 55%, #ffc75f 80%, #f9f871 100%)",
            filter: "blur(90px)",
            opacity: 0.22,
            transform: "rotate(-8deg)",
          }}
        />

        {/* Aurora ribbon 4 — bottom */}
        <div
          className="hero10-aurora4 pointer-events-none absolute"
          style={{
            top: "72%",
            left: "-45%",
            width: "280%",
            height: "350px",
            background:
              "linear-gradient(90deg, #ffc75f 0%, #f9f871 15%, #845ec2 40%, #d65db1 65%, #ff6f91 90%, #ff9671 100%)",
            filter: "blur(120px)",
            opacity: 0.15,
            transform: "rotate(12deg)",
          }}
        />

        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
            zIndex: 5,
          }}
        />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="hero10-particle pointer-events-none absolute rounded-full"
            style={
              {
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
                "--delay": `${p.delay}s`,
                "--dur": `${p.duration}s`,
                zIndex: 6,
                opacity: 0.5,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Content */}
        <div
          className="relative flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto"
          style={{ zIndex: 10 }}
        >
          {/* Badge */}
          <div className="hero10-fadeup hero10-fadeup-1 mb-8">
            <span
              className="relative inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm overflow-hidden"
              style={{
                borderColor: "rgba(255, 199, 95, 0.25)",
                color: "#ffc75f",
                backgroundColor: "rgba(255, 199, 95, 0.06)",
                fontFamily: fontBody,
              }}
            >
              <span className="hero10-shimmer absolute inset-0 rounded-full" />
              <Sparkles className="relative w-4 h-4" style={{ zIndex: 1 }} />
              <span className="relative" style={{ zIndex: 1 }}>
                {t.badge}
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero10-fadeup hero10-fadeup-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: fontHeading }}
          >
            <span className="block text-white">{t.heading[0]}</span>
            <span
              className="block mt-1"
              style={{
                background:
                  "linear-gradient(135deg, #845ec2 0%, #d65db1 20%, #ff6f91 40%, #ff9671 60%, #ffc75f 80%, #f9f871 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.heading[1]}
            </span>
          </h1>

          {/* Sub */}
          <p
            className="hero10-fadeup hero10-fadeup-3 mt-6 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.55)", fontFamily: fontBody }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="hero10-fadeup hero10-fadeup-4 mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              className="cursor-pointer inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#ffc75f",
                color: "#0a0612",
                fontFamily: fontBody,
                boxShadow: "0 0 30px rgba(255, 199, 95, 0.25)",
              }}
            >
              {t.cta1}
              <ArrowRight
                className="w-4 h-4"
                style={{
                  transform: isAr ? "scaleX(-1)" : undefined,
                }}
              />
            </button>

            <button
              className="cursor-pointer inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border transition-all duration-300 hover:scale-105 hover:bg-white/10"
              style={{
                borderColor: "rgba(255, 255, 255, 0.15)",
                color: "rgba(255, 255, 255, 0.85)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(12px)",
                fontFamily: fontBody,
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero10-fadeup hero10-fadeup-5 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 w-full"
          >
            {t.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    color: "#ffc75f",
                    fontFamily: fontHeading,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    color: "rgba(255, 255, 255, 0.4)",
                    fontFamily: fontBody,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
