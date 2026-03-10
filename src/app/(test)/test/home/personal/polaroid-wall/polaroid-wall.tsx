"use client";

/**
 * PolaroidWall — Personal Hero Template
 *
 * Scattered polaroid/instant photos pinned to a cork board wall.
 * Each photo is a colored placeholder at a random angle. Photos drop in
 * and pin themselves on load with staggered animation. A central area
 * remains clear for heading text. Nostalgic, personal, warm, authentic —
 * like a personal mood board.
 *
 * Features:
 * - Cork board background with subtle noise texture
 * - 10-12 polaroid photos with white borders, colored placeholders, pins
 * - Staggered drop-in animation with rotation settle
 * - Washi tape accent on one photo
 * - Handwritten-style italic headings
 * - Full RTL support
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "My Story, My Way",
    subheading: "A collection of moments, memories, and the things that make me who I am",
    description:
      "Welcome to my personal corner of the world. Here you will find the authentic, unfiltered version of me — the passions that drive me, the moments that shaped me, and the journey that continues to unfold.",
    cta: "Explore My World",
    secondaryCta: "Get to Know Me",
    captions: [
      "Summer '24",
      "My studio",
      "Morning light",
      "Best day ever",
      "Create daily",
      "On the road",
      "Quiet moments",
      "Inspiration",
      "Weekend vibes",
      "Golden hour",
      "Grateful",
      "New chapter",
    ],
  },
  ar: {
    heading: "قصتي، بأسلوبي",
    subheading: "مجموعة من اللحظات والذكريات والأشياء التي تجعلني من أنا",
    description:
      "مرحباً بكم في ركني الشخصي من العالم. هنا ستجدون النسخة الحقيقية مني — الشغف الذي يحركني، واللحظات التي شكّلتني، والرحلة التي لا تزال تتكشف.",
    cta: "استكشف عالمي",
    secondaryCta: "تعرّف عليّ",
    captions: [
      "صيف ٢٤",
      "مرسمي",
      "ضوء الصباح",
      "أجمل يوم",
      "إبداع يومي",
      "على الطريق",
      "لحظات هادئة",
      "إلهام",
      "أجواء نهاية الأسبوع",
      "الساعة الذهبية",
      "امتنان",
      "فصل جديد",
    ],
  },
};

interface Polaroid {
  id: number;
  color: string;
  rotation: number;
  top: string;
  left: string;
  zIndex: number;
  delay: number;
  caption: string;
  hasWashiTape: boolean;
  washiColor: string;
  washiRotation: number;
}

const PHOTO_COLORS = [
  "#5f9ea0", // teal
  "#e08070", // coral
  "#8fbc8f", // sage
  "#b0a0c8", // lavender
  "#d4a574", // sandy
  "#7eb8b0", // seafoam
  "#c8a0a0", // dusty rose
  "#a0b8d0", // steel blue
  "#c8c090", // khaki
  "#b8a0c0", // mauve
  "#90b8a0", // mint
  "#d0a880", // caramel
];

function buildPolaroids(captions: string[]): Polaroid[] {
  // Positions carefully placed around the edges, leaving center clear
  const positions: { top: string; left: string }[] = [
    { top: "2%", left: "3%" },
    { top: "5%", left: "25%" },
    { top: "0%", left: "72%" },
    { top: "3%", left: "88%" },
    { top: "35%", left: "0%" },
    { top: "38%", left: "82%" },
    { top: "60%", left: "2%" },
    { top: "58%", left: "85%" },
    { top: "75%", left: "18%" },
    { top: "78%", left: "60%" },
    { top: "72%", left: "80%" },
    { top: "80%", left: "40%" },
  ];

  return positions.map((pos, i) => ({
    id: i,
    color: PHOTO_COLORS[i % PHOTO_COLORS.length],
    rotation: Math.round((i * 7.3 + 3) % 30) - 15, // deterministic -15 to +15
    top: pos.top,
    left: pos.left,
    zIndex: (i * 3 + 5) % 12 + 1,
    delay: i * 0.12,
    caption: captions[i] || "",
    hasWashiTape: i === 2, // third photo gets washi tape
    washiColor: "#e8c8d0",
    washiRotation: -25,
  }));
}

export function PolaroidWall({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRtl = language === "ar";
  const polaroids = buildPolaroids(t.captions);

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#c4956a",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Cork board texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(210,170,130,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Polaroid photos */}
      {polaroids.map((p) => (
        <div
          key={p.id}
          className="absolute hidden md:block"
          style={{
            top: p.top,
            left: isRtl ? "auto" : p.left,
            right: isRtl ? p.left : "auto",
            zIndex: p.zIndex,
            transform: `rotate(${p.rotation}deg)`,
            animation: `polaroidDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${p.delay}s both`,
          }}
        >
          {/* Pin / thumbtack */}
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${
                p.id % 3 === 0 ? "#e05050" : p.id % 3 === 1 ? "#5080d0" : "#50b050"
              }, ${
                p.id % 3 === 0 ? "#a03030" : p.id % 3 === 1 ? "#304080" : "#308030"
              })`,
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          />

          {/* Polaroid frame */}
          <div
            className="bg-white p-2 pb-8 w-28 lg:w-36"
            style={{
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15)",
            }}
          >
            {/* Photo placeholder */}
            <div
              className="w-full aspect-square"
              style={{ backgroundColor: p.color }}
            />
            {/* Caption */}
            <p
              className="text-center mt-2 text-xs"
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "#5c3d2e",
              }}
            >
              {p.caption}
            </p>
          </div>

          {/* Washi tape */}
          {p.hasWashiTape && (
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 opacity-70"
              style={{
                backgroundColor: p.washiColor,
                transform: `translateX(-50%) rotate(${p.washiRotation}deg)`,
                borderRadius: "1px",
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)",
              }}
            />
          )}
        </div>
      ))}

      {/* Center content area */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-2xl text-center">
          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-6"
            style={{
              fontStyle: "italic",
              color: "#5c3d2e",
              textShadow: "0 1px 2px rgba(255,255,255,0.3)",
              lineHeight: 1.2,
            }}
          >
            {t.heading}
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl mb-6 max-w-xl mx-auto"
            style={{
              color: "#4a3020",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            {t.subheading}
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg mb-10 max-w-lg mx-auto"
            style={{
              color: "#6b4a38",
              lineHeight: 1.7,
            }}
          >
            {t.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#5c3d2e",
                color: "#faf0e6",
                boxShadow: "0 4px 12px rgba(92,61,46,0.4)",
              }}
            >
              {t.cta}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                  isRtl ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </button>

            <button
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 border-2"
              style={{
                borderColor: "#5c3d2e",
                color: "#5c3d2e",
                backgroundColor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(4px)",
              }}
            >
              {t.secondaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile polaroids — show a few at the top and bottom */}
      <div className="md:hidden absolute top-0 left-0 right-0 flex justify-around px-4 pt-4">
        {polaroids.slice(0, 4).map((p) => (
          <div
            key={`mobile-top-${p.id}`}
            className="relative"
            style={{
              transform: `rotate(${p.rotation}deg)`,
              animation: `polaroidDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${p.delay}s both`,
            }}
          >
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${
                  p.id % 3 === 0 ? "#e05050" : p.id % 3 === 1 ? "#5080d0" : "#50b050"
                }, ${
                  p.id % 3 === 0 ? "#a03030" : p.id % 3 === 1 ? "#304080" : "#308030"
                })`,
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            />
            <div
              className="bg-white p-1.5 pb-5 w-16"
              style={{
                boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="w-full aspect-square"
                style={{ backgroundColor: p.color }}
              />
              <p
                className="text-center mt-1 text-[8px]"
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  color: "#5c3d2e",
                }}
              >
                {p.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-around px-4 pb-4">
        {polaroids.slice(8, 12).map((p) => (
          <div
            key={`mobile-bot-${p.id}`}
            className="relative"
            style={{
              transform: `rotate(${p.rotation}deg)`,
              animation: `polaroidDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${p.delay}s both`,
            }}
          >
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${
                  p.id % 3 === 0 ? "#e05050" : p.id % 3 === 1 ? "#5080d0" : "#50b050"
                }, ${
                  p.id % 3 === 0 ? "#a03030" : p.id % 3 === 1 ? "#304080" : "#308030"
                })`,
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            />
            <div
              className="bg-white p-1.5 pb-5 w-16"
              style={{
                boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="w-full aspect-square"
                style={{ backgroundColor: p.color }}
              />
              <p
                className="text-center mt-1 text-[8px]"
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  color: "#5c3d2e",
                }}
              >
                {p.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes polaroidDrop {
          0% {
            opacity: 0;
            transform: translateY(-80px) rotate(0deg) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(8px) rotate(var(--final-rotation, 0deg)) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(var(--final-rotation, 0deg)) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
