"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const particles = [
  { x: 5, y: 12, size: 2, delay: 0, duration: 12 },
  { x: 15, y: 45, size: 3, delay: 1.5, duration: 14 },
  { x: 25, y: 78, size: 1.5, delay: 0.8, duration: 10 },
  { x: 35, y: 22, size: 2.5, delay: 2.2, duration: 16 },
  { x: 45, y: 60, size: 1, delay: 3.1, duration: 11 },
  { x: 55, y: 35, size: 2, delay: 0.5, duration: 13 },
  { x: 65, y: 82, size: 3, delay: 1.8, duration: 15 },
  { x: 72, y: 15, size: 1.5, delay: 2.8, duration: 12 },
  { x: 80, y: 50, size: 2, delay: 0.3, duration: 14 },
  { x: 88, y: 70, size: 2.5, delay: 3.5, duration: 10 },
  { x: 10, y: 90, size: 1, delay: 1.2, duration: 16 },
  { x: 20, y: 55, size: 2, delay: 2.5, duration: 11 },
  { x: 40, y: 88, size: 1.5, delay: 0.7, duration: 13 },
  { x: 50, y: 18, size: 3, delay: 3.8, duration: 15 },
  { x: 60, y: 42, size: 1, delay: 1.0, duration: 12 },
  { x: 70, y: 65, size: 2.5, delay: 2.0, duration: 14 },
  { x: 78, y: 30, size: 2, delay: 0.2, duration: 10 },
  { x: 85, y: 85, size: 1.5, delay: 3.3, duration: 16 },
  { x: 92, y: 40, size: 1, delay: 1.6, duration: 11 },
  { x: 95, y: 75, size: 2, delay: 2.7, duration: 13 },
];

const trustLogos = [
  { en: "McKinsey", ar: "ماكنزي" },
  { en: "Deloitte", ar: "ديلويت" },
  { en: "BCG", ar: "بي سي جي" },
  { en: "Accenture", ar: "أكسنتشر" },
  { en: "Bain", ar: "باين" },
];

const content = {
  en: {
    heading: "Defining the Future of Enterprise",
    sub: "We architect transformative digital ecosystems for the world's most ambitious organizations.",
    cta: "Explore Solutions",
    watch: "Watch our story",
  },
  ar: {
    heading: "نحدد مستقبل المؤسسات الرقمية",
    sub: "نبني أنظمة رقمية تحويلية لأكثر المؤسسات طموحاً في العالم.",
    cta: "استكشف الحلول",
    watch: "شاهد قصتنا",
  },
};

export function Hero01({ language }: { language: "en" | "ar" }) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#08090d" }}
    >
      <style>{`
        @keyframes orbDrift {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, -60px) scale(1.05); }
          50% { transform: translate(-40px, -120px) scale(0.95); }
          75% { transform: translate(-100px, 40px) scale(1.02); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(20px); opacity: 0; }
        }

        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .hero01-heading {
          animation: fadeSlideUp 0.8s ease-out 0.2s both;
        }
        .hero01-sub {
          animation: fadeSlideUp 0.8s ease-out 0.4s both;
        }
        .hero01-cta {
          animation: fadeSlideUp 0.8s ease-out 0.6s both;
        }
        .hero01-trust {
          animation: fadeSlideUp 0.8s ease-out 0.8s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero01-heading,
          .hero01-sub,
          .hero01-cta,
          .hero01-trust {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero01-orb {
            animation: none !important;
          }
          .hero01-particle {
            animation: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Radial gradient orb */}
      <div
        className="hero01-orb absolute z-[2] pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: "50%",
          left: "50%",
          marginTop: -300,
          marginLeft: -300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.15) 40%, transparent 70%)",
          animation: "orbDrift 20s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="hero01-particle absolute z-[3] rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: "rgba(99,102,241,0.5)",
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-inter)",
        }}
      >
        <h1
          className="hero01-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          style={{
            fontFamily: isAr ? "var(--font-changa)" : "var(--font-inter)",
            backgroundImage:
              "linear-gradient(135deg, #6366f1 0%, #a5b4fc 40%, #ffffff 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {t.heading}
        </h1>

        <p
          className="hero01-sub text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.sub}
        </p>

        <div
          className={`hero01-cta flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 ${
            isAr ? "sm:flex-row-reverse" : ""
          }`}
        >
          <button
            className="cursor-pointer group relative px-8 py-3.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 border border-indigo-500/50 text-white hover:bg-indigo-600 hover:border-transparent hover:shadow-lg hover:shadow-indigo-500/25"
          >
            <span className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.cta}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                  isAr ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </span>
          </button>

          <button
            className="cursor-pointer group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            <span
              className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-indigo-400 transition-all duration-300">
                <Play className="w-3 h-3 ml-0.5" />
              </span>
              {t.watch}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {isAr ? "←" : "→"}
              </span>
            </span>
          </button>
        </div>

        <div className="hero01-trust">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-600 mb-6">
            {isAr ? "موثوق من قبل رواد الصناعة" : "Trusted by industry leaders"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {trustLogos.map((logo, i) => (
              <span
                key={i}
                className="text-gray-600 text-sm sm:text-base font-medium tracking-wider hover:text-gray-400 transition-all duration-300 cursor-default"
                style={{
                  fontFamily: isAr
                    ? "var(--font-changa)"
                    : "var(--font-inter)",
                }}
              >
                {isAr ? logo.ar : logo.en}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #08090d 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
