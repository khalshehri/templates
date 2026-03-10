"use client";

/**
 * Fireworks Hero Template — Event Category
 *
 * Night sky with colorful firework bursts, star field, and city skyline silhouette.
 * Multiple fireworks launch upward with thin trails then burst into radial spark patterns.
 * Each burst uses a different color. Stars twinkle in the background.
 * Conveys celebration, launch, and grand opening energy.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Grand Opening",
    headline: "Light Up the Night",
    subheadline:
      "Celebrate your most unforgettable moments with a spectacular launch that leaves everyone in awe.",
    cta: "Join the Celebration",
    secondary: "Learn More",
  },
  ar: {
    badge: "افتتاح كبير",
    headline: "أضِئ الليل",
    subheadline:
      "احتفل بأروع لحظاتك مع انطلاقة مذهلة تترك الجميع في حالة من الانبهار.",
    cta: "انضم للاحتفال",
    secondary: "اعرف المزيد",
  },
};

/* ── Firework configuration ── */
interface FireworkConfig {
  id: number;
  x: number; // % from left
  burstY: number; // % from top where it bursts
  color: string;
  sparkCount: number;
  delay: number; // seconds
  loop: boolean;
  duration: number; // total animation cycle in seconds
}

const fireworks: FireworkConfig[] = [
  { id: 1, x: 20, burstY: 22, color: "#fbbf24", sparkCount: 14, delay: 0, loop: true, duration: 3.5 },
  { id: 2, x: 50, burstY: 18, color: "#ef4444", sparkCount: 16, delay: 0.6, loop: true, duration: 4 },
  { id: 3, x: 75, burstY: 28, color: "#3b82f6", sparkCount: 12, delay: 1.2, loop: true, duration: 3.8 },
  { id: 4, x: 35, burstY: 15, color: "#22c55e", sparkCount: 14, delay: 1.8, loop: false, duration: 3.5 },
  { id: 5, x: 65, burstY: 25, color: "#ec4899", sparkCount: 16, delay: 2.4, loop: true, duration: 4.2 },
  { id: 6, x: 85, burstY: 20, color: "#06b6d4", sparkCount: 12, delay: 3.0, loop: false, duration: 3.5 },
];

/* ── Star field ── */
function generateStars(count: number) {
  const stars: { id: number; x: number; y: number; size: number; twinkleDelay: number; twinkleDuration: number }[] = [];
  // Use deterministic pseudo-random values for SSR/CSR consistency
  for (let i = 0; i < count; i++) {
    const seed = i * 137.508; // golden angle
    stars.push({
      id: i,
      x: ((seed * 7.3) % 100),
      y: ((seed * 3.7) % 85),
      size: 1 + ((seed * 1.3) % 2),
      twinkleDelay: (seed * 0.9) % 5,
      twinkleDuration: 2 + ((seed * 0.4) % 3),
    });
  }
  return stars;
}

const stars = generateStars(28);

/* ── Spark offset generator ── */
function sparkOffsets(index: number, total: number, radius: number) {
  const angle = (index / total) * 2 * Math.PI;
  // Add slight randomness per spark using index
  const jitter = ((index * 31) % 10) / 10;
  const r = radius + jitter * 20;
  return {
    tx: Math.cos(angle) * r,
    ty: Math.sin(angle) * r,
  };
}

export function Fireworks({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "#050510" }}
    >
      {/* ── Inline keyframes ── */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes trail {
          0% { transform: translateY(0); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(var(--trail-dist)); opacity: 0; }
        }
        @keyframes spark {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          70% { opacity: 0.8; }
          100% { transform: translate(var(--spark-tx), var(--spark-ty)) scale(0.2); opacity: 0; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 8px rgba(251,191,36,0.3); }
          50% { box-shadow: 0 0 20px rgba(251,191,36,0.6); }
        }
      `}</style>

      {/* ── Star field ── */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite`,
          }}
        />
      ))}

      {/* ── Fireworks ── */}
      {fireworks.map((fw) => {
        const trailDist = -(100 - fw.burstY);
        const trailDuration = fw.duration * 0.35;
        const burstDelay = fw.delay + trailDuration;
        const burstDuration = fw.duration * 0.65;
        const totalCycle = fw.duration;

        return (
          <div key={fw.id} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            {/* Trail */}
            <div
              className="absolute bottom-0"
              style={{
                left: `${fw.x}%`,
                width: 2,
                height: `${100 - fw.burstY}%`,
                ["--trail-dist" as string]: `${trailDist}vh`,
                animation: `trail ${trailDuration}s ease-out ${fw.delay}s ${fw.loop ? "infinite" : "1"} forwards`,
                animationDuration: `${trailDuration}s`,
                animationDelay: `${fw.delay}s`,
                animationIterationCount: fw.loop ? "infinite" : "1",
                animationFillMode: "forwards",
                animationTimingFunction: "ease-out",
                animationName: "trail",
                background: `linear-gradient(to top, transparent, ${fw.color})`,
                opacity: 0,
                // For looping, use total cycle
                ...(fw.loop
                  ? {
                      animation: `trail ${trailDuration}s ease-out ${fw.delay}s infinite`,
                      animationDuration: `${totalCycle}s`,
                    }
                  : {}),
              }}
            />

            {/* Burst sparks */}
            <div
              className="absolute"
              style={{
                left: `${fw.x}%`,
                top: `${fw.burstY}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {Array.from({ length: fw.sparkCount }).map((_, i) => {
                const { tx, ty } = sparkOffsets(i, fw.sparkCount, 60 + ((fw.id * 7) % 30));
                return (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: 4,
                      height: 4,
                      backgroundColor: fw.color,
                      boxShadow: `0 0 6px ${fw.color}, 0 0 12px ${fw.color}`,
                      left: 0,
                      top: 0,
                      ["--spark-tx" as string]: `${tx}px`,
                      ["--spark-ty" as string]: `${ty}px`,
                      animation: `spark ${burstDuration}s ease-out ${burstDelay}s ${fw.loop ? "infinite" : "1"} forwards`,
                      opacity: 0,
                      ...(fw.loop
                        ? { animation: `spark ${burstDuration}s ease-out ${burstDelay}s infinite` }
                        : {}),
                    }}
                  />
                );
              })}
              {/* Burst glow */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  left: -4,
                  top: -4,
                  backgroundColor: fw.color,
                  boxShadow: `0 0 30px 10px ${fw.color}`,
                  animation: `spark 0.8s ease-out ${burstDelay}s ${fw.loop ? "infinite" : "1"} forwards`,
                  opacity: 0,
                }}
              />
            </div>
          </div>
        );
      })}

      {/* ── City skyline silhouette ── */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]" style={{ height: "12%" }}>
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 L0,90 L40,90 L40,70 L55,70 L55,60 L60,55 L65,60 L65,70 L80,70 L80,85 L120,85 L120,65 L130,65 L130,45 L135,40 L140,45 L140,65 L150,65 L150,80 L200,80 L200,55 L210,55 L210,35 L220,30 L230,35 L230,55 L240,55 L240,75 L300,75 L300,50 L310,50 L310,60 L320,60 L320,40 L330,35 L340,40 L340,60 L360,60 L360,80 L420,80 L420,45 L430,45 L430,25 L435,20 L440,25 L440,45 L450,45 L450,70 L500,70 L500,85 L560,85 L560,55 L570,55 L570,30 L580,25 L590,30 L590,55 L600,55 L600,75 L660,75 L660,60 L670,60 L670,45 L680,40 L690,45 L690,60 L700,60 L700,80 L760,80 L760,50 L770,50 L770,35 L775,30 L780,35 L780,50 L790,50 L790,70 L850,70 L850,85 L900,85 L900,65 L910,65 L910,40 L920,35 L930,40 L930,65 L940,65 L940,80 L1000,80 L1000,55 L1010,55 L1010,50 L1020,45 L1030,50 L1030,55 L1040,55 L1040,75 L1100,75 L1100,60 L1110,60 L1110,30 L1120,25 L1130,30 L1130,60 L1140,60 L1140,85 L1200,85 L1200,70 L1210,70 L1210,50 L1215,45 L1220,50 L1220,70 L1240,70 L1240,80 L1300,80 L1300,60 L1310,60 L1310,45 L1320,40 L1330,45 L1330,60 L1340,60 L1340,75 L1400,75 L1400,90 L1440,90 L1440,120 Z"
            fill="#0a0a18"
          />
          {/* Building windows — small lit rectangles */}
          {[
            [135, 50], [220, 40], [330, 45], [435, 30], [580, 35],
            [680, 48], [775, 40], [920, 45], [1020, 52], [1120, 38], [1320, 48],
            [55, 65], [210, 48], [310, 55], [570, 42], [670, 55],
            [910, 55], [1010, 55], [1210, 58], [1130, 48],
          ].map(([cx, cy], i) => (
            <rect
              key={i}
              x={cx - 2}
              y={cy}
              width={4}
              height={5}
              fill="#fbbf24"
              opacity={0.4 + ((i * 17) % 5) / 10}
            />
          ))}
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ animation: "fadeInUp 1s ease-out 0.5s both" }}>
        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border"
          style={{
            color: "#fbbf24",
            borderColor: "rgba(251,191,36,0.4)",
            backgroundColor: "rgba(251,191,36,0.1)",
            animation: "badgePulse 3s ease-in-out infinite",
          }}
        >
          {t.badge}
        </span>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{
            textShadow: "0 0 40px rgba(251,191,36,0.3), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          {t.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.7)" }}
        >
          {t.subheadline}
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
          <button
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              color: "#050510",
              boxShadow: "0 0 20px rgba(251,191,36,0.4)",
            }}
          >
            {t.cta}
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`}
            />
          </button>
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold border transition-all duration-300 hover:bg-white/10"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "#ffffff",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>
    </section>
  );
}
