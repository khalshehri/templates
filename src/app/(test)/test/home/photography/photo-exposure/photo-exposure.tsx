"use client";

/**
 * Photo Exposure -- Photography Hero Template
 *
 * Long exposure light trails with abstract streaks of color.
 * Night photography feel with dynamic flowing light paths.
 *
 * @category Photography
 * @palette rose (#E11D48), amber (#F59E0B), cyan (#06B6D4), magenta (#D946EF), dark (#050505)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Long Exposure",
    heading: "Painting With Light",
    subheading:
      "Open the shutter and let time flow. Light trails carve stories through the darkness, turning seconds into art.",
    cta: "See the Light",
    secondary: "Gallery",
    exposure: "30s",
    aperture: "f/11",
    iso: "ISO 100",
  },
  ar: {
    badge: "تعريض طويل",
    heading: "الرسم بالضوء",
    subheading:
      "افتح الغالق واترك الوقت يتدفق. آثار الضوء تنحت قصصاً في الظلام، وتحوّل الثواني إلى فن.",
    cta: "شاهد النور",
    secondary: "المعرض",
    exposure: "٣٠ ثانية",
    aperture: "f/11",
    iso: "ISO 100",
  },
};

const trails = [
  { color: "#E11D48", startX: 5, startY: 70, controlX1: 30, controlY1: 20, controlX2: 70, controlY2: 80, endX: 95, endY: 30, width: 3, opacity: 0.5, delay: 0 },
  { color: "#F59E0B", startX: 10, startY: 85, controlX1: 25, controlY1: 40, controlX2: 65, controlY2: 60, endX: 90, endY: 20, width: 2, opacity: 0.4, delay: 0.5 },
  { color: "#06B6D4", startX: 0, startY: 50, controlX1: 35, controlY1: 90, controlX2: 55, controlY2: 10, endX: 100, endY: 55, width: 2.5, opacity: 0.35, delay: 1 },
  { color: "#D946EF", startX: 8, startY: 30, controlX1: 40, controlY1: 75, controlX2: 60, controlY2: 25, endX: 92, endY: 65, width: 2, opacity: 0.3, delay: 1.5 },
  { color: "#FB7185", startX: 15, startY: 60, controlX1: 45, controlY1: 15, controlX2: 75, controlY2: 70, endX: 85, endY: 40, width: 1.5, opacity: 0.4, delay: 0.8 },
  { color: "#FBBF24", startX: 3, startY: 40, controlX1: 20, controlY1: 65, controlX2: 80, controlY2: 35, endX: 97, endY: 75, width: 1.5, opacity: 0.3, delay: 2 },
];

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: (i * 43 + 7) % 100,
  y: (i * 31 + 13) % 100,
  size: 1 + (i % 3),
  color: ["#E11D48", "#F59E0B", "#06B6D4", "#D946EF", "#FB7185"][i % 5],
  delay: (i * 0.3) % 5,
}));

export function PhotoExposure({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Light trails SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {trails.map((trail, i) => (
            <filter key={`blur-${i}`} id={`trailBlur${i}`}>
              <feGaussianBlur stdDeviation={trail.width * 0.8} />
            </filter>
          ))}
        </defs>

        {trails.map((trail, i) => (
          <g key={i}>
            {/* Glow layer */}
            <path
              d={`M${trail.startX} ${trail.startY} C${trail.controlX1} ${trail.controlY1}, ${trail.controlX2} ${trail.controlY2}, ${trail.endX} ${trail.endY}`}
              fill="none"
              stroke={trail.color}
              strokeWidth={trail.width * 3}
              opacity={trail.opacity * 0.3}
              filter={`url(#trailBlur${i})`}
              style={{
                animation: `trailDraw ${4 + i}s ease-in-out ${trail.delay}s infinite alternate`,
              }}
            />
            {/* Core line */}
            <path
              d={`M${trail.startX} ${trail.startY} C${trail.controlX1} ${trail.controlY1}, ${trail.controlX2} ${trail.controlY2}, ${trail.endX} ${trail.endY}`}
              fill="none"
              stroke={trail.color}
              strokeWidth={trail.width}
              opacity={trail.opacity}
              strokeLinecap="round"
              style={{
                animation: `trailDraw ${4 + i}s ease-in-out ${trail.delay}s infinite alternate`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Bokeh particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size * 3}px`,
            height: `${p.size * 3}px`,
            background: `radial-gradient(circle, ${p.color}40 0%, transparent 70%)`,
            animation: `bokehFloat ${3 + (p.id % 4)}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto px-8 text-center">
        <div
          className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider"
          style={{
            backgroundColor: "rgba(225,29,72,0.1)",
            color: "#FB7185",
            border: "1px solid rgba(225,29,72,0.2)",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          style={{
            color: "#FFFFFF",
            textShadow: "0 0 40px rgba(225,29,72,0.15), 0 0 80px rgba(6,182,212,0.1)",
          }}
        >
          {t.heading}
        </h1>

        <p
          className="text-base leading-relaxed mb-6 max-w-md mx-auto"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {t.subheading}
        </p>

        {/* Exposure settings */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[t.exposure, t.aperture, t.iso].map((spec, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-3 py-1 rounded"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E11D48, #D946EF)",
              boxShadow: "0 4px 25px rgba(225,29,72,0.4)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-7 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{ color: "#FB7185", border: "1px solid rgba(225,29,72,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes trailDraw {
          0% { stroke-dasharray: 200; stroke-dashoffset: 200; opacity: 0.1; }
          50% { stroke-dashoffset: 0; opacity: 0.5; }
          100% { stroke-dasharray: 200; stroke-dashoffset: -200; opacity: 0.1; }
        }
        @keyframes bokehFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          100% { transform: translateY(-10px) scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
