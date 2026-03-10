"use client";

/**
 * Kaleidoscope Hero
 * -----------------
 * Mesmerizing rotating symmetric patterns inspired by looking through a
 * kaleidoscope toy. Multiple concentric rings of jewel-toned geometric shapes
 * (diamonds, triangles, circles) rotate at different speeds and directions.
 * A frosted-glass center circle holds the hero text. The whole assembly
 * gently breathes (scales up and down) for a psychedelic-yet-elegant effect.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Infinite Symmetry",
    heading: "Beauty in\nEvery Pattern",
    description:
      "Discover the mesmerizing elegance of perfect symmetry. Where geometry meets art, repetition becomes beauty, and every angle reveals a new perspective.",
    cta: "Explore the Patterns",
  },
  ar: {
    badge: "تناظر لا نهائي",
    heading: "جمالٌ في\nكلّ نقش",
    description:
      "اكتشف الأناقة الساحرة للتناظر المثالي. حيث تلتقي الهندسة بالفن، يصبح التكرار جمالاً، وكل زاوية تكشف منظوراً جديداً.",
    cta: "استكشف الأنماط",
  },
};

/* ---------- shape generators ---------- */

type Shape = {
  type: "diamond" | "triangle" | "circle";
  left: string;
  top: string;
  color: string;
  glow: string;
  size: number;
};

const JEWEL_COLORS = [
  { color: "#e11d48", glow: "rgba(225,29,72,0.55)" },   // ruby
  { color: "#2563eb", glow: "rgba(37,99,235,0.55)" },    // sapphire
  { color: "#059669", glow: "rgba(5,150,105,0.55)" },    // emerald
  { color: "#9333ea", glow: "rgba(147,51,234,0.55)" },   // amethyst
  { color: "#d97706", glow: "rgba(217,119,6,0.55)" },    // topaz
];

const SHAPE_TYPES: Shape["type"][] = ["diamond", "triangle", "circle"];

function generateRing(
  count: number,
  radiusPct: number,
  sizeBase: number,
): Shape[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count;
    const left = 50 + radiusPct * Math.cos(angle);
    const top = 50 + radiusPct * Math.sin(angle);
    const palette = JEWEL_COLORS[i % JEWEL_COLORS.length];
    return {
      type: SHAPE_TYPES[i % SHAPE_TYPES.length],
      left: `${left.toFixed(2)}%`,
      top: `${top.toFixed(2)}%`,
      color: palette.color,
      glow: palette.glow,
      size: sizeBase,
    };
  });
}

const RINGS = [
  { shapes: generateRing(6, 8, 10), className: "kal-ring-1" },
  { shapes: generateRing(10, 16, 9), className: "kal-ring-2" },
  { shapes: generateRing(14, 25, 8), className: "kal-ring-3" },
  { shapes: generateRing(18, 34, 7), className: "kal-ring-4" },
  { shapes: generateRing(24, 44, 6), className: "kal-ring-5" },
];

/* ---------- small shape renderer ---------- */

function ShapeEl({ shape }: { shape: Shape }) {
  const base: React.CSSProperties = {
    position: "absolute",
    left: shape.left,
    top: shape.top,
    width: shape.size,
    height: shape.size,
    transform: "translate(-50%,-50%)",
    boxShadow: `0 0 8px 2px ${shape.glow}`,
  };

  if (shape.type === "circle") {
    return (
      <span
        style={{
          ...base,
          borderRadius: "50%",
          backgroundColor: shape.color,
        }}
      />
    );
  }
  if (shape.type === "diamond") {
    return (
      <span
        style={{
          ...base,
          backgroundColor: shape.color,
          transform: "translate(-50%,-50%) rotate(45deg)",
        }}
      />
    );
  }
  // triangle
  return (
    <span
      style={{
        ...base,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderLeft: `${shape.size / 2}px solid transparent`,
        borderRight: `${shape.size / 2}px solid transparent`,
        borderBottom: `${shape.size}px solid ${shape.color}`,
        boxShadow: `0 0 10px 3px ${shape.glow}`,
      }}
    />
  );
}

/* ---------- component ---------- */

export function Kaleidoscope({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#080012" }}
    >
      {/* ---------- CSS animations ---------- */}
      <style>{`
        @keyframes kal-spin-cw-slow {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes kal-spin-ccw-slow {
          to { transform: translate(-50%,-50%) rotate(-360deg); }
        }
        @keyframes kal-breathe {
          0%, 100% { transform: translate(-50%,-50%) scale(1); }
          50%      { transform: translate(-50%,-50%) scale(1.06); }
        }
        @keyframes kal-glow-pulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1; }
        }
        @keyframes kal-fade-in {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .kal-container {
          position: absolute;
          left: 50%; top: 50%;
          width: 110vmin; height: 110vmin;
          transform: translate(-50%,-50%);
          animation: kal-breathe 10s ease-in-out infinite;
        }

        .kal-ring-1 {
          animation: kal-spin-cw-slow 20s linear infinite, kal-glow-pulse 3s ease-in-out infinite;
        }
        .kal-ring-2 {
          animation: kal-spin-ccw-slow 28s linear infinite, kal-glow-pulse 4s ease-in-out infinite;
          opacity: 0.88;
        }
        .kal-ring-3 {
          animation: kal-spin-cw-slow 36s linear infinite, kal-glow-pulse 5s ease-in-out infinite;
          opacity: 0.72;
        }
        .kal-ring-4 {
          animation: kal-spin-ccw-slow 48s linear infinite, kal-glow-pulse 6s ease-in-out infinite;
          opacity: 0.55;
        }
        .kal-ring-5 {
          animation: kal-spin-cw-slow 60s linear infinite, kal-glow-pulse 7s ease-in-out infinite;
          opacity: 0.38;
        }

        /* each ring wrapper needs its own transform-origin at center */
        .kal-ring-wrap {
          position: absolute;
          inset: 0;
          left: 50%; top: 50%;
          width: 100%; height: 100%;
          transform: translate(-50%,-50%);
        }

        .kal-center-glass {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          width: min(420px, 80vw);
          padding: 3rem 2.5rem;
          border-radius: 50%;
          background: rgba(8,0,18,0.55);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 0 60px 10px rgba(147,51,234,0.15), inset 0 0 40px rgba(147,51,234,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 20;
          aspect-ratio: 1;
        }

        .kal-text-fade {
          animation: kal-fade-in 1s ease-out both;
        }
        .kal-text-fade:nth-child(2) { animation-delay: 0.15s; }
        .kal-text-fade:nth-child(3) { animation-delay: 0.3s; }
        .kal-text-fade:nth-child(4) { animation-delay: 0.45s; }
      `}</style>

      {/* ---------- kaleidoscope rings ---------- */}
      <div className="kal-container">
        {RINGS.map((ring, ri) => (
          <div key={ri} className={`kal-ring-wrap ${ring.className}`}>
            {ring.shapes.map((shape, si) => (
              <ShapeEl key={si} shape={shape} />
            ))}
          </div>
        ))}
      </div>

      {/* ---------- frosted center content ---------- */}
      <div className="kal-center-glass">
        {/* badge */}
        <span
          className={`kal-text-fade inline-block mb-4 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border ${
            isAr ? "font-arabic" : ""
          }`}
          style={{
            color: "#d97706",
            borderColor: "rgba(217,119,6,0.3)",
            background: "rgba(217,119,6,0.08)",
          }}
        >
          {t.badge}
        </span>

        {/* heading */}
        <h1
          className={`kal-text-fade text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight whitespace-pre-line ${
            isAr ? "font-arabic" : ""
          }`}
          style={{
            background: "linear-gradient(135deg, #e11d48, #9333ea, #2563eb, #059669)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t.heading}
        </h1>

        {/* description */}
        <p
          className={`kal-text-fade mt-4 text-sm sm:text-base leading-relaxed max-w-xs ${
            isAr ? "font-arabic" : ""
          }`}
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {t.description}
        </p>

        {/* cta */}
        <button
          className={`kal-text-fade mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 ${
            isAr ? "flex-row-reverse font-arabic" : ""
          }`}
          style={{
            background: "linear-gradient(135deg, #9333ea, #2563eb)",
            color: "#fff",
            boxShadow: "0 0 24px rgba(147,51,234,0.4)",
          }}
        >
          {t.cta}
          <ArrowRight
            size={16}
            className={isAr ? "rotate-180" : ""}
          />
        </button>
      </div>

      {/* ---------- radial vignette ---------- */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 30%, #080012 75%)",
        }}
      />
    </section>
  );
}
