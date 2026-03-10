"use client";

/**
 * Education Puzzle -- Education Hero Template
 *
 * Puzzle pieces assembling, each piece a different course/skill.
 * Interactive mosaic feel with interlocking shapes and bright colors.
 *
 * @category Education
 * @palette emerald (#059669), teal (#0D9488), lime (#84CC16), amber (#F59E0B), dark (#0A1612)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Piece It Together",
    heading: "Every Skill Is a Piece of the Puzzle",
    subheading:
      "Build your complete picture with courses that interlock perfectly. Each skill connects to the next, creating a masterwork of knowledge.",
    cta: "Find Your Piece",
    secondary: "Browse Skills",
    pieces: ["Design", "Code", "Data", "Strategy", "Writing", "Leadership"],
  },
  ar: {
    badge: "ركّب المعرفة",
    heading: "كل مهارة قطعة من الأحجية",
    subheading:
      "ابنِ صورتك الكاملة بدورات تتشابك بإتقان. كل مهارة تتصل بالتالية، لتخلق تحفة من المعرفة.",
    cta: "اعثر على قطعتك",
    secondary: "تصفّح المهارات",
    pieces: ["تصميم", "برمجة", "بيانات", "استراتيجية", "كتابة", "قيادة"],
  },
};

const pieceColors = [
  { bg: "rgba(5,150,105,0.2)", border: "rgba(5,150,105,0.5)", text: "#34D399" },
  { bg: "rgba(13,148,136,0.2)", border: "rgba(13,148,136,0.5)", text: "#2DD4BF" },
  { bg: "rgba(132,204,22,0.2)", border: "rgba(132,204,22,0.5)", text: "#A3E635" },
  { bg: "rgba(245,158,11,0.2)", border: "rgba(245,158,11,0.5)", text: "#FBBF24" },
  { bg: "rgba(14,165,233,0.2)", border: "rgba(14,165,233,0.5)", text: "#38BDF8" },
  { bg: "rgba(168,85,247,0.2)", border: "rgba(168,85,247,0.5)", text: "#C084FC" },
];

const puzzlePositions = [
  { gridRow: 1, gridCol: 1, delay: 0 },
  { gridRow: 1, gridCol: 2, delay: 0.3 },
  { gridRow: 1, gridCol: 3, delay: 0.6 },
  { gridRow: 2, gridCol: 1, delay: 0.2 },
  { gridRow: 2, gridCol: 2, delay: 0.5 },
  { gridRow: 2, gridCol: 3, delay: 0.8 },
];

function PuzzlePiece({ label, color, delay, position }: {
  label: string;
  color: typeof pieceColors[0];
  delay: number;
  position: typeof puzzlePositions[0];
}) {
  return (
    <div
      className="relative flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:z-10 cursor-default"
      style={{
        gridRow: position.gridRow,
        gridColumn: position.gridCol,
        width: "120px",
        height: "120px",
        animation: `puzzleFloat 4s ease-in-out ${delay}s infinite alternate`,
      }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
        <path
          d={`M10 20
            L45 20
            C45 20, 45 8, 55 8
            C65 8, 65 20, 65 20
            L110 20
            L110 45
            C110 45, 122 45, 122 55
            C122 65, 110 65, 110 65
            L110 110
            L65 110
            C65 110, 65 122, 55 122
            C45 122, 45 110, 45 110
            L10 110
            L10 65
            C10 65, -2 65, -2 55
            C-2 45, 10 45, 10 45
            Z`}
          fill={color.bg}
          stroke={color.border}
          strokeWidth="2"
        />
      </svg>
      <span
        className="relative z-10 text-xs font-bold tracking-wide"
        style={{ color: color.text }}
      >
        {label}
      </span>
    </div>
  );
}

export function EducationPuzzle({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #0A1F17 0%, #0A1612 50%, #060E0A 100%)",
      }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(rgba(5,150,105,0.8) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Puzzle grid */}
        <div
          className="relative flex-shrink-0"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 120px)",
            gridTemplateRows: "repeat(2, 120px)",
            gap: "4px",
          }}
        >
          {t.pieces.map((label, i) => (
            <PuzzlePiece
              key={i}
              label={label}
              color={pieceColors[i]}
              delay={puzzlePositions[i].delay}
              position={puzzlePositions[i]}
            />
          ))}

          {/* Connecting lines between pieces */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.15 }}
          >
            <line x1="120" y1="60" x2="124" y2="60" stroke="#34D399" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="244" y1="60" x2="248" y2="60" stroke="#34D399" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="120" y1="184" x2="124" y2="184" stroke="#34D399" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="244" y1="184" x2="248" y2="184" stroke="#34D399" strokeWidth="1" strokeDasharray="3 2" />
          </svg>
        </div>

        {/* Text content */}
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <div
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            style={{
              backgroundColor: "rgba(5,150,105,0.12)",
              color: "#34D399",
              border: "1px solid rgba(5,150,105,0.3)",
            }}
          >
            {t.badge}
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "#ECFDF5" }}
          >
            {t.heading}
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(167,243,208,0.6)" }}
          >
            {t.subheading}
          </p>

          {/* Progress bar decoration */}
          <div className="mb-8 max-w-xs">
            <div className="flex justify-between text-xs mb-2" style={{ color: "rgba(167,243,208,0.5)" }}>
              <span>4/6</span>
              <span>67%</span>
            </div>
            <div className="h-2 rounded-full" style={{ backgroundColor: "rgba(5,150,105,0.15)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: "67%",
                  background: "linear-gradient(90deg, #059669, #34D399)",
                  boxShadow: "0 0 10px rgba(5,150,105,0.4)",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#059669",
                boxShadow: "0 4px 20px rgba(5,150,105,0.3)",
              }}
            >
              {t.cta}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
              style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.3)" }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes puzzleFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
