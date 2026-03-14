"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    line1: "Create.",
    line2: "Innovate.",
    line3: "Lead.",
    sub: "We turn bold ideas into digital reality.",
    cta: "Start Creating",
  },
  ar: {
    line1: "أنشئ.",
    line2: "ابتكر.",
    line3: "قُد.",
    sub: "نحوّل الأفكار الجريئة إلى واقع رقمي.",
    cta: "ابدأ الإنشاء",
  },
};

const blobs = [
  {
    // Blob 1 — violet-600, top-left area
    color: "#7c3aed",
    size: 600,
    top: "5%",
    left: "10%",
    animation: "blob1Move 20s ease-in-out infinite",
  },
  {
    // Blob 2 — blue-600, center-right area
    color: "#2563eb",
    size: 550,
    top: "20%",
    left: "55%",
    animation: "blob2Move 25s ease-in-out infinite",
  },
  {
    // Blob 3 — cyan-500, bottom-center
    color: "#06b6d4",
    size: 500,
    top: "55%",
    left: "30%",
    animation: "blob3Move 18s ease-in-out infinite",
  },
  {
    // Blob 4 — emerald-500, center area
    color: "#10b981",
    size: 450,
    top: "35%",
    left: "40%",
    animation: "blob4Move 30s ease-in-out infinite",
  },
  {
    // Blob 5 — violet-500, top-right
    color: "#8b5cf6",
    size: 700,
    top: "0%",
    left: "65%",
    animation: "blob5Move 22s ease-in-out infinite",
  },
];

export function Hero14({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const lines = [t.line1, t.line2, t.line3];

  return (
    <>
      <style>{`
        @keyframes blob1Move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, 60px) scale(1.1); }
          50% { transform: translate(40px, 120px) scale(0.95); }
          75% { transform: translate(-60px, 80px) scale(1.05); }
        }
        @keyframes blob2Move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(-100px, 80px) scale(1.08); }
          40% { transform: translate(-60px, 160px) scale(0.92); }
          60% { transform: translate(60px, 120px) scale(1.12); }
          80% { transform: translate(80px, 40px) scale(0.96); }
        }
        @keyframes blob3Move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(70px, -100px) scale(1.1); }
          66% { transform: translate(-50px, -60px) scale(0.9); }
        }
        @keyframes blob4Move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          12.5% { transform: translate(60px, -40px) scale(1.05); }
          25% { transform: translate(100px, 0px) scale(0.95); }
          37.5% { transform: translate(60px, 50px) scale(1.08); }
          50% { transform: translate(0px, 80px) scale(1); }
          62.5% { transform: translate(-60px, 50px) scale(0.92); }
          75% { transform: translate(-100px, 0px) scale(1.06); }
          87.5% { transform: translate(-60px, -40px) scale(0.98); }
        }
        @keyframes blob5Move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-120px, 60px) scale(1.08); }
          50% { transform: translate(-80px, 100px) scale(0.94); }
          75% { transform: translate(-160px, 40px) scale(1.04); }
        }
        @keyframes wordFade {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .hero14-word {
          opacity: 0;
          animation: wordFade 0.8s ease-out forwards;
        }
        .hero14-word-0 { animation-delay: 0.2s; }
        .hero14-word-1 { animation-delay: 0.5s; }
        .hero14-word-2 { animation-delay: 0.8s; }
        .hero14-sub {
          opacity: 0;
          animation: wordFade 0.8s ease-out 1.2s forwards;
        }
        .hero14-cta {
          opacity: 0;
          animation: wordFade 0.8s ease-out 1.5s forwards;
        }
        .hero14-cta-inner {
          animation: subtlePulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero14-word,
          .hero14-sub,
          .hero14-cta {
            opacity: 1;
            animation: none;
          }
          .hero14-cta-inner {
            animation: none;
          }
          .hero14-blob {
            animation: none !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#030712" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Mesh gradient blobs */}
        <div className="absolute inset-0" aria-hidden="true">
          {blobs.map((blob, i) => (
            <div
              key={i}
              className="hero14-blob absolute rounded-full"
              style={{
                width: blob.size,
                height: blob.size,
                top: blob.top,
                left: blob.left,
                background: `radial-gradient(circle at center, ${blob.color} 0%, ${blob.color}88 30%, ${blob.color}44 55%, transparent 70%)`,
                filter: "blur(100px)",
                mixBlendMode: "screen",
                animation: blob.animation,
                willChange: "transform",
                opacity: 0.8,
              }}
            />
          ))}
          {/* Subtle noise overlay for texture */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 0%, #030712 75%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
          {/* Heading */}
          <h1
            className="flex flex-col items-center gap-0 leading-[0.9] tracking-tighter font-extrabold"
            style={{ fontFamily: fontHeading }}
          >
            {lines.map((line, i) => (
              <span
                key={i}
                className={`hero14-word hero14-word-${i} text-6xl sm:text-7xl lg:text-8xl xl:text-9xl block`}
                style={{ color: "white" }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            className="hero14-sub mt-8 text-lg max-w-xl"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontFamily: fontBody,
            }}
          >
            {t.sub}
          </p>

          {/* CTA */}
          <div className="hero14-cta mt-10">
            <button
              className="hero14-cta-inner cursor-pointer inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95"
              style={{
                backgroundColor: "white",
                color: "#030712",
                fontFamily: fontBody,
              }}
            >
              {t.cta}
              <ArrowRight
                className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
