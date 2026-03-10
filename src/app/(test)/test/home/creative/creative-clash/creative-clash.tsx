"use client";

/**
 * Creative Clash — "Paint Explosion"
 * -----------------------------------
 * A pristine white/cream canvas that gets splattered with vibrant paint
 * splashes on load. Multiple irregular CSS blobs burst outward from
 * different points with staggered timing. The heading has a paint-drip
 * effect. Brushstroke-style CTA buttons. An artist's palette floats
 * in the corner.
 */

import { ArrowRight, Palette } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Creative Studio",
    headingLine1: "Where Ideas",
    headingLine2: "Explode",
    subheading:
      "We create bold visual identities that break conventions and make your brand unforgettable.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "View Portfolio",
    services: ["Branding", "Web Design", "Motion", "Strategy"],
  },
  ar: {
    badge: "استوديو إبداعي",
    headingLine1: "حيث تنفجر",
    headingLine2: "الأفكار",
    subheading:
      "نصنع هويات بصرية جريئة تكسر القواعد وتجعل علامتك التجارية لا تُنسى.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "عرض الأعمال",
    services: ["هوية بصرية", "تصميم مواقع", "موشن", "استراتيجية"],
  },
};

/* ---- paint splash definitions ---- */
const SPLASHES = [
  { color: "#ff2d7b", x: "12%", y: "18%", size: 220, radius: "63% 37% 54% 46% / 55% 68% 32% 45%", delay: 0, rotate: 12 },
  { color: "#ffe600", x: "78%", y: "14%", size: 180, radius: "42% 58% 70% 30% / 45% 55% 45% 55%", delay: 0.15, rotate: -20 },
  { color: "#0055ff", x: "85%", y: "65%", size: 250, radius: "58% 42% 36% 64% / 52% 38% 62% 48%", delay: 0.3, rotate: 45 },
  { color: "#ff6b00", x: "20%", y: "72%", size: 200, radius: "44% 56% 65% 35% / 38% 62% 38% 62%", delay: 0.45, rotate: -15 },
  { color: "#00e676", x: "50%", y: "10%", size: 160, radius: "52% 48% 42% 58% / 65% 35% 65% 35%", delay: 0.1, rotate: 30 },
  { color: "#ff2d7b", x: "65%", y: "80%", size: 140, radius: "68% 32% 48% 52% / 42% 58% 42% 58%", delay: 0.55, rotate: -40 },
  { color: "#0055ff", x: "8%",  y: "48%", size: 170, radius: "38% 62% 55% 45% / 48% 52% 60% 40%", delay: 0.25, rotate: 22 },
  { color: "#ffe600", x: "42%", y: "85%", size: 130, radius: "55% 45% 60% 40% / 35% 65% 50% 50%", delay: 0.6, rotate: -8 },
  { color: "#ff6b00", x: "92%", y: "35%", size: 110, radius: "48% 52% 38% 62% / 58% 42% 55% 45%", delay: 0.35, rotate: 55 },
  { color: "#00e676", x: "35%", y: "40%", size: 100, radius: "62% 38% 45% 55% / 50% 50% 38% 62%", delay: 0.5, rotate: -30 },
];

/* ---- drip definitions for heading underline ---- */
const DRIPS = [
  { color: "#ff2d7b", left: "5%",  width: 22, height: 38, delay: 0.7 },
  { color: "#ffe600", left: "18%", width: 18, height: 30, delay: 0.8 },
  { color: "#0055ff", left: "35%", width: 24, height: 45, delay: 0.75 },
  { color: "#ff6b00", left: "52%", width: 16, height: 28, delay: 0.85 },
  { color: "#00e676", left: "68%", width: 20, height: 35, delay: 0.9 },
  { color: "#ff2d7b", left: "82%", width: 14, height: 25, delay: 0.95 },
  { color: "#0055ff", left: "93%", width: 18, height: 32, delay: 0.88 },
];

/* ---- palette color swatches ---- */
const PALETTE_COLORS = ["#ff2d7b", "#ffe600", "#0055ff", "#ff6b00", "#00e676"];

export function CreativeClash({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        /* ---- splash burst animation ---- */
        @keyframes splashBurst {
          0%   { transform: translate(-50%, -50%) scale(0) rotate(var(--splash-rotate)); opacity: 0; }
          50%  { opacity: 0.85; }
          70%  { transform: translate(-50%, -50%) scale(1.15) rotate(var(--splash-rotate)); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1) rotate(var(--splash-rotate)); opacity: 0.6; }
        }

        /* ---- drip animation ---- */
        @keyframes dripDown {
          0%   { transform: scaleY(0); opacity: 0; }
          40%  { opacity: 1; }
          100% { transform: scaleY(1); opacity: 0.85; }
        }

        /* ---- fade-in for content ---- */
        @keyframes paintFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ---- palette float ---- */
        @keyframes paletteFloat {
          0%, 100% { transform: rotate(-12deg) translateY(0); }
          50%      { transform: rotate(-8deg) translateY(-12px); }
        }

        /* ---- splatter micro drops ---- */
        @keyframes microDrop {
          0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          60%  { opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
        }

        /* ---- brushstroke button hover ---- */
        @keyframes brushWipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }

        .splash-blob {
          animation: splashBurst 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .drip-el {
          animation: dripDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          transform-origin: top center;
        }

        .paint-fade {
          animation: paintFadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .palette-float {
          animation: paletteFloat 4s ease-in-out infinite;
        }

        .micro-drop {
          animation: microDrop 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* ---- brushstroke button ---- */
        .brush-btn {
          position: relative;
          clip-path: polygon(2% 8%, 96% 0%, 100% 85%, 4% 100%);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .brush-btn:hover {
          transform: translateY(-2px) rotate(-0.5deg);
        }

        .brush-btn-outline {
          position: relative;
          clip-path: polygon(4% 5%, 98% 2%, 97% 92%, 2% 98%);
          transition: transform 0.25s ease;
        }
        .brush-btn-outline:hover {
          transform: translateY(-2px) rotate(0.5deg);
        }

        /* ---- canvas texture ---- */
        .canvas-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden canvas-texture"
        style={{ backgroundColor: "#faf8f4" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* ---- Paint splashes ---- */}
        {SPLASHES.map((splash, i) => (
          <div
            key={`splash-${i}`}
            className="splash-blob absolute pointer-events-none"
            style={{
              left: splash.x,
              top: splash.y,
              width: splash.size,
              height: splash.size,
              borderRadius: splash.radius,
              backgroundColor: splash.color,
              animationDelay: `${splash.delay}s`,
              "--splash-rotate": `${splash.rotate}deg`,
              filter: `blur(1px)`,
              mixBlendMode: "multiply",
            } as React.CSSProperties}
          />
        ))}

        {/* ---- Micro splatter drops (small dots around big splashes) ---- */}
        {SPLASHES.slice(0, 6).flatMap((splash, si) =>
          [1, 2, 3].map((_, di) => {
            const offsetX = (di - 1) * 40 - 20;
            const offsetY = (di % 2 === 0 ? -1 : 1) * (25 + di * 12);
            return (
              <div
                key={`micro-${si}-${di}`}
                className="micro-drop absolute pointer-events-none rounded-full"
                style={{
                  left: `calc(${splash.x} + ${offsetX}px)`,
                  top: `calc(${splash.y} + ${offsetY}px)`,
                  width: 6 + di * 3,
                  height: 6 + di * 3,
                  backgroundColor: splash.color,
                  animationDelay: `${splash.delay + 0.3 + di * 0.08}s`,
                  mixBlendMode: "multiply",
                }}
              />
            );
          })
        )}

        {/* ---- Artist's palette (corner decoration) ---- */}
        <div
          className="palette-float absolute pointer-events-none hidden lg:block"
          style={{
            [isAr ? "left" : "right"]: "3%",
            bottom: "8%",
            zIndex: 5,
          }}
        >
          <div className="relative">
            {/* Palette shape */}
            <div
              style={{
                width: 140,
                height: 100,
                borderRadius: "50% 50% 50% 20% / 60% 60% 40% 40%",
                background: "linear-gradient(135deg, #d4a574, #c49464, #b8845a)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.2)",
                position: "relative",
              }}
            >
              {/* Thumb hole */}
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  top: 35,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#faf8f4",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              {/* Color dabs on palette */}
              {PALETTE_COLORS.map((c, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: 55 + (i % 3) * 25,
                    top: 18 + Math.floor(i / 3) * 35,
                    width: 16,
                    height: 14,
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    backgroundColor: c,
                    boxShadow: `0 1px 3px ${c}66`,
                  }}
                />
              ))}
            </div>
            {/* Paintbrush */}
            <div
              style={{
                position: "absolute",
                right: -30,
                top: -15,
                width: 8,
                height: 80,
                background: "linear-gradient(to bottom, #c49464 0%, #a0734e 40%, #666 40%, #888 42%, #555 100%)",
                borderRadius: "3px 3px 2px 2px",
                transform: "rotate(35deg)",
              }}
            >
              {/* Brush tip */}
              <div
                style={{
                  position: "absolute",
                  bottom: -14,
                  left: -2,
                  width: 12,
                  height: 18,
                  borderRadius: "3px 3px 50% 50%",
                  backgroundColor: "#ff2d7b",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
        </div>

        {/* ---- Content ---- */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center">
            {/* Badge */}
            <div
              className="paint-fade inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10"
              style={{
                animationDelay: "0.6s",
                backgroundColor: "rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Palette size={14} style={{ color: "#ff2d7b" }} />
              <span className="text-sm font-semibold" style={{ color: "#333" }}>{t.badge}</span>
            </div>

            {/* Heading with paint-drip underline */}
            <div className="relative inline-block">
              <h1
                className="paint-fade text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.95]"
                style={{ animationDelay: "0.7s", color: "#1a1a1a" }}
              >
                {t.headingLine1}
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(90deg, #ff2d7b, #0055ff, #ff6b00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.headingLine2}
                  {/* Paint drip elements under the text */}
                  <span className="absolute left-0 right-0 bottom-0 h-1 overflow-visible pointer-events-none">
                    {DRIPS.map((drip, i) => (
                      <span
                        key={i}
                        className="drip-el absolute"
                        style={{
                          left: drip.left,
                          top: 0,
                          width: drip.width,
                          height: drip.height,
                          backgroundColor: drip.color,
                          borderRadius: "0 0 50% 50%",
                          animationDelay: `${drip.delay}s`,
                          opacity: 0.75,
                        }}
                      />
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p
              className="paint-fade mt-12 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed"
              style={{ animationDelay: "0.85s", color: "#666" }}
            >
              {t.subheading}
            </p>

            {/* CTA Buttons — brushstroke style */}
            <div
              className="paint-fade mt-10 flex items-center justify-center gap-5 flex-wrap"
              style={{ animationDelay: "0.95s" }}
            >
              <a
                href="#"
                className={`brush-btn inline-flex items-center gap-2 px-10 py-4 text-sm font-bold text-white ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  backgroundColor: "#ff2d7b",
                  boxShadow: "0 4px 20px rgba(255,45,123,0.3)",
                }}
              >
                {t.ctaPrimary}
                <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
              </a>
              <a
                href="#"
                className={`brush-btn-outline inline-flex items-center gap-2 px-10 py-4 text-sm font-bold ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  border: "2px solid #1a1a1a",
                  color: "#1a1a1a",
                  backgroundColor: "transparent",
                }}
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Service tags — painted label style */}
            <div
              className="paint-fade mt-14 flex items-center justify-center gap-3 flex-wrap"
              style={{ animationDelay: "1.1s" }}
            >
              {t.services.map((s, i) => {
                const tagColors = ["#ff2d7b", "#0055ff", "#ff6b00", "#00e676"];
                const c = tagColors[i % tagColors.length];
                return (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-semibold rounded-sm cursor-default transition-transform hover:-translate-y-0.5"
                    style={{
                      backgroundColor: `${c}15`,
                      color: c,
                      borderBottom: `3px solid ${c}`,
                    }}
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* ---- Edge paint streaks (top & bottom) ---- */}
        <div
          className="absolute top-0 left-0 right-0 h-2 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #ff2d7b 0%, transparent 15%, #ffe600 30%, transparent 45%, #0055ff 60%, transparent 75%, #ff6b00 90%, transparent 100%)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-2 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 5%, #00e676 20%, transparent 35%, #ff2d7b 50%, transparent 65%, #0055ff 80%, transparent 95%)",
            opacity: 0.3,
          }}
        />
      </section>
    </>
  );
}
