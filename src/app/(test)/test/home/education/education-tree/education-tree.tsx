"use client";

/**
 * Education Tree -- Education Hero Template
 *
 * Knowledge tree growing from bottom, branches hold topic badges.
 * Organic growth metaphor with leaves, roots, and subject nodes.
 *
 * @category Education
 * @palette emerald (#059669), leaf (#22C55E), bark (#6B4226), dark (#0A1A12)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Grow Your Knowledge",
    heading: "Plant Seeds of Wisdom, Harvest Success",
    subheading:
      "Like a mighty tree, strong education grows from deep roots. Branch out into new disciplines and let your knowledge flourish.",
    cta: "Start Growing",
    secondary: "Explore Branches",
    branches: [
      { label: "Science", x: 22, y: 18 },
      { label: "Arts", x: 78, y: 15 },
      { label: "Math", x: 15, y: 35 },
      { label: "Language", x: 85, y: 32 },
      { label: "History", x: 30, y: 50 },
      { label: "Music", x: 70, y: 48 },
    ],
  },
  ar: {
    badge: "نمِّ معرفتك",
    heading: "ازرع بذور الحكمة واحصد النجاح",
    subheading:
      "كالشجرة العظيمة، التعليم القوي ينمو من جذور عميقة. تفرّع إلى مجالات جديدة ودع معرفتك تزدهر.",
    cta: "ابدأ النمو",
    secondary: "استكشف الفروع",
    branches: [
      { label: "علوم", x: 22, y: 18 },
      { label: "فنون", x: 78, y: 15 },
      { label: "رياضيات", x: 15, y: 35 },
      { label: "لغات", x: 85, y: 32 },
      { label: "تاريخ", x: 30, y: 50 },
      { label: "موسيقى", x: 70, y: 48 },
    ],
  },
};

const leaves = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: 10 + (i * 41) % 80,
  y: 5 + (i * 29) % 55,
  size: 8 + (i % 4) * 4,
  rotation: (i * 37) % 360,
  delay: (i * 0.3) % 4,
  color: i % 3 === 0 ? "#22C55E" : i % 3 === 1 ? "#10B981" : "#059669",
}));

export function EducationTree({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A1A12 0%, #0F2518 40%, #132E1C 100%)",
      }}
    >
      {/* Sky glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1/3"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(5,150,105,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Floating leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute pointer-events-none"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            animation: `treeLeaf ${3 + (leaf.id % 3)}s ease-in-out ${leaf.delay}s infinite alternate`,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size * 1.4}
            viewBox="0 0 20 28"
            style={{ transform: `rotate(${leaf.rotation}deg)`, opacity: 0.3 }}
          >
            <path
              d="M10 0 Q20 10 10 28 Q0 10 10 0Z"
              fill={leaf.color}
            />
            <line x1="10" y1="4" x2="10" y2="24" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
          </svg>
        </div>
      ))}

      {/* Tree trunk + branches SVG */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl" style={{ height: "70%" }}>
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMax meet">
          {/* Roots */}
          <path d="M350 600 Q320 570 280 580 Q240 590 200 600" stroke="#6B4226" strokeWidth="8" fill="none" opacity="0.4" />
          <path d="M450 600 Q480 570 520 580 Q560 590 600 600" stroke="#6B4226" strokeWidth="8" fill="none" opacity="0.4" />
          <path d="M400 600 Q395 580 370 590 Q340 600 300 610" stroke="#5C3D2E" strokeWidth="6" fill="none" opacity="0.3" />

          {/* Trunk */}
          <path
            d="M370 600 Q365 500 375 420 Q380 360 390 300 Q395 260 400 220"
            stroke="#6B4226"
            strokeWidth="28"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M430 600 Q435 500 425 420 Q420 360 410 300 Q405 260 400 220"
            stroke="#5C3D2E"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Main branches */}
          <path d="M395 320 Q340 280 260 250 Q200 230 160 220" stroke="#6B4226" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M405 320 Q460 280 540 250 Q600 230 640 220" stroke="#6B4226" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M398 280 Q350 240 300 200 Q260 170 220 150" stroke="#5C3D2E" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M402 280 Q450 240 500 200 Q540 170 580 150" stroke="#5C3D2E" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M400 240 Q380 200 340 160 Q310 130 280 110" stroke="#4A3122" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M400 240 Q420 200 460 160 Q490 130 520 110" stroke="#4A3122" strokeWidth="8" fill="none" strokeLinecap="round" />

          {/* Crown foliage blobs */}
          <circle cx="160" cy="200" r="50" fill="#059669" opacity="0.15" />
          <circle cx="280" cy="120" r="60" fill="#10B981" opacity="0.12" />
          <circle cx="400" cy="100" r="70" fill="#059669" opacity="0.1" />
          <circle cx="520" cy="120" r="60" fill="#22C55E" opacity="0.12" />
          <circle cx="640" cy="200" r="50" fill="#059669" opacity="0.15" />
          <circle cx="350" cy="180" r="45" fill="#10B981" opacity="0.1" />
          <circle cx="450" cy="180" r="45" fill="#22C55E" opacity="0.1" />
        </svg>
      </div>

      {/* Branch topic badges */}
      {t.branches.map((branch, i) => (
        <div
          key={i}
          className="absolute z-20 px-3 py-1 rounded-full text-xs font-bold"
          style={{
            left: `${branch.x}%`,
            top: `${branch.y}%`,
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(5,150,105,0.2)",
            color: "#34D399",
            border: "1px solid rgba(5,150,105,0.4)",
            boxShadow: "0 0 12px rgba(5,150,105,0.2)",
            animation: `badgePulse 3s ease-in-out ${i * 0.5}s infinite alternate`,
          }}
        >
          {branch.label}
        </div>
      ))}

      {/* Text content overlaid at top */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-8 text-center" style={{ marginBottom: "35%" }}>
        <div
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
          style={{
            backgroundColor: "rgba(5,150,105,0.15)",
            color: "#34D399",
            border: "1px solid rgba(5,150,105,0.3)",
          }}
        >
          {t.badge}
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
          style={{
            color: "#ECFDF5",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          {t.heading}
        </h1>

        <p
          className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
          style={{ color: "rgba(167,243,208,0.7)" }}
        >
          {t.subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#059669",
              boxShadow: "0 4px 20px rgba(5,150,105,0.4)",
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
            style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      {/* Ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(30,20,10,0.8) 100%)",
        }}
      />

      <style>{`
        @keyframes treeLeaf {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          100% { transform: translateY(-8px) rotate(5deg); opacity: 0.15; }
        }
        @keyframes badgePulse {
          0% { box-shadow: 0 0 8px rgba(5,150,105,0.2); }
          100% { box-shadow: 0 0 20px rgba(5,150,105,0.4); }
        }
      `}</style>
    </section>
  );
}
