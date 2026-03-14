"use client";

import { ArrowRight, Stars } from "lucide-react";

const content = {
  en: {
    badge: "Charting New Territories",
    heading1: "Navigate Your",
    heading2: "Digital Galaxy",
    sub: "Like stars in a constellation, every element of your digital strategy connects to form something greater. We help you see the full picture.",
    cta1: "Start Exploring",
    cta2: "View Star Map",
    stat1Value: "1000+",
    stat1Label: "Stars Aligned",
    stat2Value: "50+",
    stat2Label: "Constellations",
    stat3Value: "\u221E",
    stat3Label: "Possibilities",
    stat4Value: "24/7",
    stat4Label: "Mission Control",
  },
  ar: {
    badge: "\u0646\u0631\u0633\u0645 \u0645\u0646\u0627\u0637\u0642 \u062C\u062F\u064A\u062F\u0629",
    heading1: "\u0623\u0628\u062D\u0631 \u0641\u064A",
    heading2: "\u0645\u062C\u0631\u062A\u0643 \u0627\u0644\u0631\u0642\u0645\u064A\u0629",
    sub: "\u0643\u0627\u0644\u0646\u062C\u0648\u0645 \u0641\u064A \u0643\u0648\u0643\u0628\u0629\u060C \u0643\u0644 \u0639\u0646\u0635\u0631 \u0645\u0646 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u062A\u0643 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u064A\u062A\u0635\u0644 \u0644\u064A\u0634\u0643\u0644 \u0634\u064A\u0626\u0627\u064B \u0623\u0639\u0638\u0645. \u0646\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0631\u0624\u064A\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629.",
    cta1: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",
    cta2: "\u0639\u0631\u0636 \u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u0646\u062C\u0648\u0645",
    stat1Value: "+1000",
    stat1Label: "\u0646\u062C\u0645 \u0645\u062A\u0646\u0627\u0633\u0642",
    stat2Value: "+50",
    stat2Label: "\u0643\u0648\u0643\u0628\u0629",
    stat3Value: "\u221E",
    stat3Label: "\u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A",
    stat4Value: "24/7",
    stat4Label: "\u063A\u0631\u0641\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",
  },
};

// Deterministic star positions across a 1000x1000 viewBox
// Small stars (r 1.5-2): 15 stars
// Medium stars (r 3-4): 7 stars
// Large stars (r 5-6): 3 stars
const stars: { cx: number; cy: number; r: number; opacity: number; twinkle?: boolean; twinkleDuration?: number }[] = [
  // Small stars (15)
  { cx: 120, cy: 80, r: 1.5, opacity: 0.3 },
  { cx: 250, cy: 150, r: 2, opacity: 0.4 },
  { cx: 380, cy: 60, r: 1.5, opacity: 0.35 },
  { cx: 510, cy: 200, r: 2, opacity: 0.5 },
  { cx: 640, cy: 90, r: 1.5, opacity: 0.3 },
  { cx: 770, cy: 170, r: 2, opacity: 0.45 },
  { cx: 880, cy: 50, r: 1.5, opacity: 0.35 },
  { cx: 150, cy: 450, r: 2, opacity: 0.4 },
  { cx: 300, cy: 520, r: 1.5, opacity: 0.3 },
  { cx: 450, cy: 680, r: 2, opacity: 0.5, twinkle: true, twinkleDuration: 3 },
  { cx: 600, cy: 750, r: 1.5, opacity: 0.35 },
  { cx: 750, cy: 600, r: 2, opacity: 0.4 },
  { cx: 850, cy: 480, r: 1.5, opacity: 0.3 },
  { cx: 50, cy: 300, r: 2, opacity: 0.45 },
  { cx: 950, cy: 350, r: 1.5, opacity: 0.35 },
  // Medium stars (7)
  { cx: 200, cy: 250, r: 3, opacity: 0.55, twinkle: true, twinkleDuration: 2.5 },
  { cx: 420, cy: 320, r: 4, opacity: 0.6 },
  { cx: 580, cy: 420, r: 3, opacity: 0.5, twinkle: true, twinkleDuration: 3.5 },
  { cx: 730, cy: 300, r: 4, opacity: 0.65 },
  { cx: 350, cy: 700, r: 3, opacity: 0.55 },
  { cx: 820, cy: 700, r: 4, opacity: 0.6, twinkle: true, twinkleDuration: 2.8 },
  { cx: 100, cy: 650, r: 3, opacity: 0.5 },
  // Large/bright stars (3)
  { cx: 310, cy: 400, r: 5, opacity: 0.8, twinkle: true, twinkleDuration: 4 },
  { cx: 680, cy: 180, r: 6, opacity: 0.85, twinkle: true, twinkleDuration: 3.2 },
  { cx: 530, cy: 580, r: 5, opacity: 0.75, twinkle: true, twinkleDuration: 2.6 },
];

// Constellation lines connecting star pairs by index
// Forms 4 distinct shapes: triangle, pentagon-like, zigzag, arc
const constellationLines: [number, number][] = [
  // Triangle (top-left area): stars 0, 1, 15
  [0, 1], [1, 15], [15, 0],
  // Pentagon-like (center-right): stars 3, 17, 23, 18, 16
  [3, 23], [23, 16], [16, 17], [17, 18], [18, 3],
  // Zigzag (top-right): stars 4, 5, 19, 6, 24
  [4, 5], [5, 19], [19, 6], [6, 24],
  // Arc (bottom): stars 7, 22, 9, 20, 24, 21
  [7, 22], [22, 9], [9, 20], [20, 24], [24, 21],
  // Extra connecting lines
  [14, 19], [13, 7], [11, 21],
];

export function Hero13({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const statsData = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  return (
    <>
      <style>{`
        @keyframes constellationRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes starTwinkle-1 {
          0%, 100% { opacity: var(--star-base); }
          50% { opacity: var(--star-bright); }
        }
        @keyframes nebulaFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -10px); }
        }
        @keyframes hero13FadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero13-constellation-svg {
          animation: constellationRotate 120s linear infinite;
        }

        .hero13-star-twinkle {
          animation: starTwinkle-1 var(--twinkle-duration, 3s) ease-in-out infinite;
          animation-delay: var(--twinkle-delay, 0s);
        }

        .hero13-nebula {
          animation: nebulaFloat 20s ease-in-out infinite;
        }
        .hero13-nebula-alt {
          animation: nebulaFloat 20s ease-in-out 10s infinite;
        }

        .hero13-fade-up {
          opacity: 0;
          animation: hero13FadeUp 0.8s ease-out forwards;
        }
        .hero13-fade-up-1 { animation-delay: 0.1s; }
        .hero13-fade-up-2 { animation-delay: 0.25s; }
        .hero13-fade-up-3 { animation-delay: 0.4s; }
        .hero13-fade-up-4 { animation-delay: 0.55s; }
        .hero13-fade-up-5 { animation-delay: 0.7s; }

        @media (prefers-reduced-motion: reduce) {
          .hero13-constellation-svg {
            animation: none !important;
          }
          .hero13-star-twinkle {
            animation: none !important;
          }
          .hero13-nebula,
          .hero13-nebula-alt {
            animation: none !important;
            transform: none !important;
          }
          .hero13-fade-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: "#0f172a",
          fontFamily: fontBody,
        }}
      >
        {/* Nebula glow - top right (blue-purple) */}
        <div
          className="hero13-nebula"
          style={{
            position: "absolute",
            top: "5%",
            right: "10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(96,165,250,0.08) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        {/* Nebula glow - bottom left (indigo) */}
        <div
          className="hero13-nebula-alt"
          style={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.07) 0%, rgba(79,70,229,0.04) 40%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        {/* Constellation SVG background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <svg
            className="hero13-constellation-svg"
            viewBox="0 0 1000 1000"
            style={{
              width: "140%",
              height: "140%",
              maxWidth: "none",
              opacity: 1,
            }}
          >
            <defs>
              <filter id="hero13-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Constellation lines */}
            {constellationLines.map(([a, b], i) => (
              <line
                key={`line-${i}`}
                x1={stars[a].cx}
                y1={stars[a].cy}
                x2={stars[b].cx}
                y2={stars[b].cy}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
              />
            ))}

            {/* Stars */}
            {stars.map((star, i) => {
              const isLarge = star.r >= 5;
              const twinkleDelay = `${(i * 0.37) % 4}s`;
              return (
                <circle
                  key={`star-${i}`}
                  cx={star.cx}
                  cy={star.cy}
                  r={star.r}
                  fill="white"
                  opacity={star.opacity}
                  filter={isLarge ? "url(#hero13-glow)" : undefined}
                  className={star.twinkle ? "hero13-star-twinkle" : undefined}
                  style={
                    star.twinkle
                      ? ({
                          "--star-base": star.opacity,
                          "--star-bright": Math.min(star.opacity + 0.25, 1),
                          "--twinkle-duration": `${star.twinkleDuration || 3}s`,
                          "--twinkle-delay": twinkleDelay,
                        } as React.CSSProperties)
                      : undefined
                  }
                />
              );
            })}
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 py-20 text-center">
          {/* Badge */}
          <div className="hero13-fade-up hero13-fade-up-1 flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "rgba(56,189,248,0.08)",
                color: "#38bdf8",
                border: "1px solid rgba(56,189,248,0.15)",
                fontFamily: fontBody,
              }}
            >
              <Stars className="w-4 h-4" />
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero13-fade-up hero13-fade-up-2 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ fontFamily: fontHeading }}
          >
            <span className="text-white block">{t.heading1}</span>
            <span
              className="block mt-2"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.heading2}
            </span>
          </h1>

          {/* Sub paragraph */}
          <p
            className="hero13-fade-up hero13-fade-up-3 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: fontBody,
            }}
          >
            {t.sub}
          </p>

          {/* CTA buttons */}
          <div className="hero13-fade-up hero13-fade-up-4 flex flex-wrap justify-center gap-4 mb-16">
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #60a5fa)",
                color: "#0f172a",
                border: "none",
                fontFamily: fontBody,
              }}
            >
              {t.cta1}
              <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            </button>
            <button
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)",
                background: "rgba(255,255,255,0.04)",
                fontFamily: fontBody,
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Stats row */}
          <div
            className="hero13-fade-up hero13-fade-up-5 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "2rem",
            }}
          >
            {statsData.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{
                    fontFamily: fontHeading,
                    background: "linear-gradient(135deg, #38bdf8, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: fontBody }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #0f172a, transparent)",
            pointerEvents: "none",
          }}
        />
      </section>
    </>
  );
}
