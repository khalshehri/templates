"use client";

/**
 * Pixel Rain Hero
 * 8-bit retro pixel art style. Colorful pixel blocks fall from the top
 * like rain/tetris, stacking and disappearing. Pixelated font for the
 * heading. Bright, playful, nostalgic gaming vibe with NES-inspired
 * color palette and arcade-style UI elements.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "PRESS START",
    sub: "We craft digital experiences with pixel-perfect precision. Every block placed with purpose, every animation tuned to perfection.",
    cta: "INSERT COIN",
    cta2: "VIEW DEMO",
    score: "SCORE: 99999",
    level: "LEVEL: MAX",
    lives: "♥ ♥ ♥",
    playerTag: "PLAYER 1 READY",
    badge: "8-BIT STUDIO",
  },
  ar: {
    heading: "ابدأ اللعب",
    sub: "نصنع تجارب رقمية بدقة البكسل. كل قطعة توضع بعناية، وكل حركة مضبوطة للكمال.",
    cta: "أدخل العملة",
    cta2: "عرض تجريبي",
    score: "النقاط: ٩٩٩٩٩",
    level: "المستوى: الأقصى",
    lives: "♥ ♥ ♥",
    playerTag: "اللاعب ١ جاهز",
    badge: "استوديو ٨ بت",
  },
};

// Pixel rain config: [left%, color, size, duration, delay]
const pixels: [number, string, number, number, number][] = [
  [3, "#ff0044", 10, 4.2, 0],
  [8, "#0088ff", 8, 3.5, 1.2],
  [12, "#00ff88", 12, 5.0, 0.4],
  [17, "#ffdd00", 8, 3.8, 2.1],
  [22, "#ff44ff", 10, 4.5, 0.8],
  [27, "#00ffdd", 14, 5.5, 1.5],
  [31, "#ff0044", 8, 3.2, 0.2],
  [36, "#0088ff", 12, 4.8, 2.5],
  [40, "#00ff88", 10, 3.6, 1.0],
  [44, "#ffdd00", 16, 5.2, 0.6],
  [48, "#ff44ff", 8, 4.0, 1.8],
  [52, "#00ffdd", 10, 3.4, 2.8],
  [56, "#ff0044", 12, 4.6, 0.3],
  [60, "#0088ff", 8, 5.1, 1.4],
  [64, "#00ff88", 14, 3.9, 2.2],
  [68, "#ffdd00", 10, 4.3, 0.7],
  [72, "#ff44ff", 8, 5.4, 1.6],
  [76, "#00ffdd", 12, 3.7, 2.4],
  [80, "#ff0044", 10, 4.1, 0.9],
  [84, "#0088ff", 16, 5.3, 1.1],
  [88, "#00ff88", 8, 3.3, 2.6],
  [92, "#ffdd00", 10, 4.7, 0.5],
  [95, "#ff44ff", 12, 5.0, 1.9],
  [5, "#00ffdd", 8, 4.4, 2.0],
  [15, "#ff0044", 10, 3.1, 1.3],
  [35, "#0088ff", 14, 4.9, 0.1],
  [55, "#00ff88", 8, 5.2, 2.3],
  [75, "#ffdd00", 10, 3.6, 1.7],
  [85, "#ff44ff", 12, 4.0, 2.9],
  [50, "#00ffdd", 8, 5.5, 0.0],
];

// Pixel sprite patterns (row, col, color) — heart shape
const heartSprite: [number, number, string][] = [
  [0, 1, "#ff0044"], [0, 2, "#ff0044"], [0, 4, "#ff0044"], [0, 5, "#ff0044"],
  [1, 0, "#ff0044"], [1, 1, "#ff0044"], [1, 2, "#ff0044"], [1, 3, "#ff0044"], [1, 4, "#ff0044"], [1, 5, "#ff0044"], [1, 6, "#ff0044"],
  [2, 0, "#ff0044"], [2, 1, "#ff0044"], [2, 2, "#ff0044"], [2, 3, "#ff0044"], [2, 4, "#ff0044"], [2, 5, "#ff0044"], [2, 6, "#ff0044"],
  [3, 1, "#ff0044"], [3, 2, "#ff0044"], [3, 3, "#ff0044"], [3, 4, "#ff0044"], [3, 5, "#ff0044"],
  [4, 2, "#ff0044"], [4, 3, "#ff0044"], [4, 4, "#ff0044"],
  [5, 3, "#ff0044"],
];

// Star sprite
const starSprite: [number, number, string][] = [
  [0, 3, "#ffdd00"],
  [1, 2, "#ffdd00"], [1, 3, "#ffdd00"], [1, 4, "#ffdd00"],
  [2, 0, "#ffdd00"], [2, 1, "#ffdd00"], [2, 2, "#ffdd00"], [2, 3, "#ffdd00"], [2, 4, "#ffdd00"], [2, 5, "#ffdd00"], [2, 6, "#ffdd00"],
  [3, 1, "#ffdd00"], [3, 2, "#ffdd00"], [3, 3, "#ffdd00"], [3, 4, "#ffdd00"], [3, 5, "#ffdd00"],
  [4, 2, "#ffdd00"], [4, 4, "#ffdd00"],
  [5, 1, "#ffdd00"], [5, 5, "#ffdd00"],
];

// Arrow sprite
const arrowSprite: [number, number, string][] = [
  [0, 3, "#00ff88"],
  [1, 2, "#00ff88"], [1, 3, "#00ff88"], [1, 4, "#00ff88"],
  [2, 1, "#00ff88"], [2, 3, "#00ff88"], [2, 5, "#00ff88"],
  [3, 3, "#00ff88"],
  [4, 3, "#00ff88"],
  [5, 3, "#00ff88"],
];

function PixelSprite({
  sprite,
  pixelSize,
  className,
}: {
  sprite: [number, number, string][];
  pixelSize: number;
  className?: string;
}) {
  const maxRow = Math.max(...sprite.map(([r]) => r)) + 1;
  const maxCol = Math.max(...sprite.map(([, c]) => c)) + 1;
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: maxCol * pixelSize,
        height: maxRow * pixelSize,
      }}
    >
      {sprite.map(([row, col, color], i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: row * pixelSize,
            left: col * pixelSize,
            width: pixelSize,
            height: pixelSize,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}

export function PixelRain({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes pixelFall {
          0% {
            transform: translateY(-20px);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes pixelPulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes scoreFlash {
          0%, 100% {
            color: #ffdd00;
          }
          50% {
            color: #ff0044;
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        @keyframes spriteFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes borderDance {
          0% { box-shadow: 4px 4px 0 #ff0044, -4px -4px 0 #0088ff; }
          25% { box-shadow: 4px 4px 0 #0088ff, -4px -4px 0 #00ff88; }
          50% { box-shadow: 4px 4px 0 #00ff88, -4px -4px 0 #ffdd00; }
          75% { box-shadow: 4px 4px 0 #ffdd00, -4px -4px 0 #ff44ff; }
          100% { box-shadow: 4px 4px 0 #ff0044, -4px -4px 0 #0088ff; }
        }

        .pixel-grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 16px 16px;
        }

        .pixel-heading {
          text-shadow:
            3px 0 0 currentColor,
            -3px 0 0 currentColor,
            0 3px 0 currentColor,
            0 -3px 0 currentColor,
            2px 2px 0 rgba(0,0,0,0.5),
            4px 4px 0 rgba(0,0,0,0.3);
          letter-spacing: 0.15em;
        }

        .pixel-btn {
          box-shadow:
            4px 0 0 0 currentColor,
            -4px 0 0 0 currentColor,
            0 4px 0 0 currentColor,
            0 -4px 0 0 currentColor,
            4px 4px 0 0 rgba(0,0,0,0.4),
            8px 8px 0 0 rgba(0,0,0,0.2);
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .pixel-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow:
            4px 0 0 0 currentColor,
            -4px 0 0 0 currentColor,
            0 4px 0 0 currentColor,
            0 -4px 0 0 currentColor,
            6px 6px 0 0 rgba(0,0,0,0.4),
            10px 10px 0 0 rgba(0,0,0,0.2);
        }

        .pixel-btn:active {
          transform: translate(2px, 2px);
          box-shadow:
            4px 0 0 0 currentColor,
            -4px 0 0 0 currentColor,
            0 4px 0 0 currentColor,
            0 -4px 0 0 currentColor,
            2px 2px 0 0 rgba(0,0,0,0.4);
        }
      `}</style>

      <section
        className="pixel-grid-bg relative min-h-screen overflow-hidden"
        style={{ backgroundColor: "#0f0f23" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Falling pixels */}
        {pixels.map(([left, color, size, duration, delay], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: -20,
              width: size,
              height: size,
              backgroundColor: color,
              opacity: 0.7,
              animation: `pixelFall ${duration}s linear ${delay}s infinite`,
              zIndex: 1,
            }}
          />
        ))}

        {/* Score display - top corner */}
        <div
          className={`absolute top-6 ${isAr ? "left-6" : "right-6"} z-20`}
        >
          <div
            className="border-2 border-dashed px-4 py-3"
            style={{ borderColor: "#ffdd00", backgroundColor: "rgba(15,15,35,0.85)" }}
          >
            <div
              className="font-mono text-sm font-bold tracking-widest"
              style={{ color: "#ffdd00", animation: "scoreFlash 2s ease infinite" }}
            >
              {t.score}
            </div>
            <div
              className="font-mono text-sm font-bold tracking-widest mt-1"
              style={{ color: "#00ff88" }}
            >
              {t.level}
            </div>
            <div className="text-lg mt-1 tracking-widest">{t.lives}</div>
          </div>
        </div>

        {/* Player tag - top left */}
        <div
          className={`absolute top-6 ${isAr ? "right-6" : "left-6"} z-20`}
        >
          <div
            className="font-mono text-xs font-bold tracking-widest px-3 py-2"
            style={{
              color: "#0088ff",
              backgroundColor: "rgba(0,136,255,0.1)",
              border: "2px solid #0088ff",
            }}
          >
            {t.playerTag}
            <span style={{ animation: "blink 1s step-end infinite" }}> _</span>
          </div>
        </div>

        {/* Heart sprite - left side */}
        <div
          className="absolute hidden md:block z-10"
          style={{
            top: "25%",
            left: isAr ? "auto" : "8%",
            right: isAr ? "8%" : "auto",
            animation: "spriteFloat 3s ease-in-out infinite",
          }}
        >
          <PixelSprite sprite={heartSprite} pixelSize={8} />
        </div>

        {/* Star sprite - right side */}
        <div
          className="absolute hidden md:block z-10"
          style={{
            top: "20%",
            right: isAr ? "auto" : "10%",
            left: isAr ? "10%" : "auto",
            animation: "spriteFloat 3.5s ease-in-out 0.5s infinite",
          }}
        >
          <PixelSprite sprite={starSprite} pixelSize={7} />
        </div>

        {/* Arrow sprite - bottom */}
        <div
          className="absolute hidden md:block z-10"
          style={{
            bottom: "18%",
            left: isAr ? "auto" : "12%",
            right: isAr ? "12%" : "auto",
            animation: "spriteFloat 2.8s ease-in-out 1s infinite",
          }}
        >
          <PixelSprite sprite={arrowSprite} pixelSize={8} />
        </div>

        {/* Second star sprite - bottom right */}
        <div
          className="absolute hidden lg:block z-10"
          style={{
            bottom: "22%",
            right: isAr ? "auto" : "8%",
            left: isAr ? "8%" : "auto",
            animation: "spriteFloat 4s ease-in-out 1.5s infinite",
          }}
        >
          <PixelSprite sprite={starSprite} pixelSize={6} />
        </div>

        {/* Main content */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-block">
              <span
                className="font-mono text-xs font-bold tracking-[0.3em] px-4 py-2"
                style={{
                  color: "#00ffdd",
                  backgroundColor: "rgba(0,255,221,0.08)",
                  border: "2px solid #00ffdd",
                  animation: "borderDance 4s linear infinite",
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="pixel-heading font-mono font-black mb-6"
              style={{
                fontSize: "clamp(3rem, 10vw, 7rem)",
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              {t.heading}
            </h1>

            {/* Decorative pixel divider */}
            <div className="flex items-center justify-center gap-1 mb-8">
              {["#ff0044", "#0088ff", "#00ff88", "#ffdd00", "#ff44ff", "#00ffdd", "#ff0044", "#0088ff", "#00ff88"].map(
                (color, i) => (
                  <div
                    key={i}
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: color,
                      animation: `pixelPulse 1.5s ease ${i * 0.15}s infinite`,
                    }}
                  />
                )
              )}
            </div>

            {/* Subtitle */}
            <p
              className={`font-mono text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed ${
                isAr ? "text-right" : "text-left"
              } md:text-center`}
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {t.sub}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-6 ${
                isAr ? "sm:flex-row-reverse" : ""
              }`}
            >
              <button
                className="pixel-btn font-mono font-bold text-sm tracking-widest px-8 py-4 rounded-none"
                style={{
                  backgroundColor: "#ff0044",
                  color: "#ffffff",
                }}
              >
                <span className="flex items-center gap-3">
                  {t.cta}
                  <ArrowRight
                    className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`}
                  />
                </span>
              </button>

              <button
                className="pixel-btn font-mono font-bold text-sm tracking-widest px-8 py-4 rounded-none"
                style={{
                  backgroundColor: "transparent",
                  color: "#00ffdd",
                  border: "3px solid #00ffdd",
                }}
              >
                {t.cta2}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom scanline bar */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 px-6 py-3 font-mono text-xs tracking-widest flex items-center justify-center gap-2"
          style={{
            backgroundColor: "rgba(15,15,35,0.9)",
            borderTop: "2px solid #0088ff",
            color: "#0088ff",
          }}
        >
          {[
            "▪", "▪", "▪",
          ].map((dot, i) => (
            <span
              key={i}
              style={{
                animation: `pixelPulse 1s ease ${i * 0.3}s infinite`,
                color: ["#ff0044", "#00ff88", "#ffdd00"][i],
              }}
            >
              {dot}
            </span>
          ))}
          <span className={isAr ? "mr-2" : "ml-2"}>
            {isAr
              ? "© ٢٠٢٦ — صُنع بدقة البكسل"
              : "© 2026 — CRAFTED PIXEL BY PIXEL"}
          </span>
          {[
            "▪", "▪", "▪",
          ].map((dot, i) => (
            <span
              key={`r${i}`}
              style={{
                animation: `pixelPulse 1s ease ${i * 0.3 + 0.5}s infinite`,
                color: ["#ff44ff", "#00ffdd", "#0088ff"][i],
              }}
            >
              {dot}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
