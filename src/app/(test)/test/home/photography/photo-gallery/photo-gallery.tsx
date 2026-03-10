"use client";

/**
 * Photo Gallery -- Photography Hero Template
 *
 * Gallery wall with floating frames at angles, content in center open space.
 * Museum-like atmosphere with spotlit frames.
 *
 * @category Photography
 * @palette rose (#E11D48), warm white (#FFF1F2), charcoal (#1C1917), gold (#D4AF37)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Gallery Exhibition",
    heading: "Where Moments Become Art",
    subheading:
      "Step into a curated gallery of captured emotions. Each frame tells a story, each shadow holds a secret.",
    cta: "Book a Session",
    secondary: "View Gallery",
  },
  ar: {
    badge: "معرض فني",
    heading: "حيث تصبح اللحظات فناً",
    subheading:
      "ادخل معرضاً منسّقاً من المشاعر الملتقطة. كل إطار يروي قصة، وكل ظل يخفي سراً.",
    cta: "احجز جلسة",
    secondary: "عرض المعرض",
  },
};

const frames = [
  { x: 5, y: 8, w: 140, h: 180, rotate: -5, gradient: "linear-gradient(135deg, #BE123C22, #E11D4822)" },
  { x: 78, y: 5, w: 160, h: 120, rotate: 3, gradient: "linear-gradient(135deg, #9F122222, #E11D4822)" },
  { x: 2, y: 55, w: 120, h: 150, rotate: 4, gradient: "linear-gradient(225deg, #FB718522, #E11D4822)" },
  { x: 82, y: 58, w: 150, h: 110, rotate: -3, gradient: "linear-gradient(45deg, #BE123C22, #FB718522)" },
  { x: 20, y: 3, w: 100, h: 80, rotate: -8, gradient: "linear-gradient(180deg, #9F122222, #E11D4822)" },
  { x: 60, y: 68, w: 110, h: 140, rotate: 6, gradient: "linear-gradient(135deg, #FB718522, #BE123C22)" },
];

export function PhotoGallery({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1C1917" }}
    >
      {/* Gallery wall texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating frames */}
      {frames.map((frame, i) => (
        <div
          key={i}
          className="absolute hidden md:block"
          style={{
            left: `${frame.x}%`,
            top: `${frame.y}%`,
            width: `${frame.w}px`,
            height: `${frame.h}px`,
            transform: `rotate(${frame.rotate}deg)`,
            animation: `frameFloat ${4 + (i % 3)}s ease-in-out ${i * 0.4}s infinite alternate`,
          }}
        >
          {/* Frame border */}
          <div
            className="absolute inset-0 rounded"
            style={{
              border: "3px solid rgba(212,175,55,0.3)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.2)",
            }}
          >
            {/* Inner mat */}
            <div
              className="absolute inset-2 rounded-sm"
              style={{
                border: "1px solid rgba(255,255,255,0.05)",
                background: frame.gradient,
              }}
            />
          </div>

          {/* Spotlight on frame */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2"
            style={{
              width: "60%",
              height: "10px",
              background: "radial-gradient(ellipse, rgba(255,241,242,0.15) 0%, transparent 80%)",
              filter: "blur(4px)",
            }}
          />
        </div>
      ))}

      {/* Center content area */}
      <div className="relative z-10 max-w-xl mx-auto px-8 text-center">
        <div
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
          style={{
            backgroundColor: "rgba(225,29,72,0.1)",
            color: "#FB7185",
            border: "1px solid rgba(225,29,72,0.2)",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5"
          style={{
            color: "#FFF1F2",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          {t.heading}
        </h1>

        <p
          className="text-lg leading-relaxed mb-8 max-w-md mx-auto"
          style={{ color: "rgba(255,241,242,0.6)" }}
        >
          {t.subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#E11D48",
              boxShadow: "0 4px 20px rgba(225,29,72,0.4)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-8 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{ color: "#FB7185", border: "1px solid rgba(225,29,72,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes frameFloat {
          0% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          100% { transform: translateY(-8px) rotate(var(--rotate, 0deg)); }
        }
      `}</style>
    </section>
  );
}
