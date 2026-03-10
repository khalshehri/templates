"use client";

/**
 * Constellation Hero
 * Deep space star map with hundreds of tiny stars connected by thin geometric lines.
 * Stars twinkle at different rates with varying opacities and sizes.
 * Slow rotation of the entire constellation field. Deep navy/black background
 * with silver/white stars, subtle blue/purple nebula glow, and occasional shooting stars.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Stellar Digital",
    heading: ["Navigate", "The Stars", "With Us"],
    sub: "We chart new constellations in the digital cosmos. Every pixel, every interaction — mapped with precision to guide your brand toward infinite horizons.",
    cta: "Chart Your Course",
    cta2: "Explore the Map",
    stats: [
      { value: "200+", label: "Stars Mapped" },
      { value: "99.9%", label: "Uptime" },
      { value: "12ms", label: "Response" },
    ],
  },
  ar: {
    badge: "رقمي نجمي",
    heading: ["أبحر", "بين النجوم", "معنا"],
    sub: "نرسم أبراجًا جديدة في الكون الرقمي. كل بكسل، كل تفاعل — مُحدد بدقة ليقود علامتك التجارية نحو آفاق لا نهائية.",
    cta: "ارسم مسارك",
    cta2: "استكشف الخريطة",
    stats: [
      { value: "+٢٠٠", label: "نجمة مُكتشفة" },
      { value: "٩٩.٩٪", label: "وقت التشغيل" },
      { value: "١٢مل‌ث", label: "زمن الاستجابة" },
    ],
  },
};

// Deterministic star field
const stars = Array.from({ length: 180 }, (_, i) => ({
  id: i,
  x: ((i * 7919 + 1301) % 10000) / 100, // pseudo-random x 0-100%
  y: ((i * 6271 + 3457) % 10000) / 100, // pseudo-random y 0-100%
  size: 1 + ((i * 3137) % 3), // 1-3px
  opacity: 0.3 + ((i * 2741) % 7) / 10, // 0.3-0.9
  delay: ((i * 1789) % 50) / 10, // 0-5s delay
  duration: 2 + ((i * 1117) % 40) / 10, // 2-6s duration
}));

// Constellation lines connecting specific stars
const constellationGroups = [
  // Group 1 — top-left triangle
  [0, 12, 27, 0],
  // Group 2 — center diamond
  [45, 58, 72, 63, 45],
  // Group 3 — right arc
  [90, 101, 115, 128],
  // Group 4 — bottom pattern
  [140, 150, 160, 155, 140],
  // Group 5 — scattered cross
  [30, 50, 80],
  [35, 50, 95],
  // Group 6 — upper right
  [8, 22, 38, 55],
  // Group 7 — lower left
  [110, 125, 138, 148, 165],
];

export function Constellation({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: var(--star-base-opacity); transform: scale(1); }
          50% { opacity: 1; transform: scale(1.6); }
        }
        @keyframes constellationRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes shootingStar {
          0% { transform: translate(0, 0) rotate(-35deg); opacity: 0; }
          5% { opacity: 1; }
          15% { opacity: 1; }
          25% { transform: translate(400px, 250px) rotate(-35deg); opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes shootingStar2 {
          0% { transform: translate(0, 0) rotate(-25deg); opacity: 0; }
          60% { opacity: 0; }
          65% { opacity: 1; }
          75% { opacity: 1; }
          85% { transform: translate(350px, 180px) rotate(-25deg); opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes nebulaBreath {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
        }
        @keyframes nebulaBreath2 {
          0%, 100% { opacity: 0.1; transform: scale(1.05); }
          50% { opacity: 0.2; transform: scale(0.95); }
        }
        @keyframes glideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes linePulse {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.2; }
        }
        @keyframes badgeOrbit {
          0%, 100% { box-shadow: 0 0 15px rgba(147, 197, 253, 0.2), 0 0 30px rgba(147, 197, 253, 0.05); }
          50% { box-shadow: 0 0 25px rgba(147, 197, 253, 0.4), 0 0 50px rgba(147, 197, 253, 0.1); }
        }
        .glide-up { animation: glideUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .badge-orbit { animation: badgeOrbit 4s ease-in-out infinite; }
        .star-point {
          border-radius: 50%;
          position: absolute;
          background: white;
          animation: twinkle var(--star-duration) ease-in-out var(--star-delay) infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#030014" }}>
        {/* Deep space base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 120% 100% at 50% 0%, #0a0020 0%, #030014 50%, #010008 100%)",
          }}
        />

        {/* Nebula glow 1 — purple/blue top-right */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            top: "-20%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(88,28,135,0.4) 0%, rgba(30,58,138,0.15) 40%, transparent 70%)",
            animation: "nebulaBreath 20s ease-in-out infinite",
          }}
        />

        {/* Nebula glow 2 — ice blue bottom-left */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            bottom: "-15%",
            left: "-5%",
            background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(88,28,135,0.1) 40%, transparent 70%)",
            animation: "nebulaBreath2 25s ease-in-out infinite",
          }}
        />

        {/* Nebula glow 3 — faint center */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: "40%",
            left: "45%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 60%)",
            animation: "nebulaBreath 30s ease-in-out 5s infinite",
          }}
        />

        {/* Star field + constellation lines */}
        <div className="absolute inset-0">
          {/* SVG constellation lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {constellationGroups.map((group, gi) =>
              group.slice(0, -1).map((starIdx, li) => {
                const from = stars[starIdx];
                const to = stars[group[li + 1]];
                if (!from || !to) return null;
                return (
                  <line
                    key={`${gi}-${li}`}
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke="rgba(147,197,253,0.12)"
                    strokeWidth="0.5"
                    style={{ animation: `linePulse ${6 + gi}s ease-in-out ${gi * 0.8}s infinite` }}
                  />
                );
              })
            )}
          </svg>

          {/* Star dots */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="star-point"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                "--star-base-opacity": star.opacity,
                "--star-delay": `${star.delay}s`,
                "--star-duration": `${star.duration}s`,
                boxShadow: star.size > 2
                  ? `0 0 ${star.size * 3}px rgba(191,219,254,0.4)`
                  : `0 0 ${star.size * 2}px rgba(191,219,254,0.2)`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Shooting star 1 */}
        <div
          className="absolute"
          style={{
            top: "8%",
            left: "15%",
            width: "120px",
            height: "2px",
            background: "linear-gradient(90deg, rgba(191,219,254,0.9) 0%, rgba(191,219,254,0) 100%)",
            borderRadius: "2px",
            animation: "shootingStar 12s ease-in 2s infinite",
            boxShadow: "0 0 8px rgba(191,219,254,0.5)",
          }}
        />

        {/* Shooting star 2 */}
        <div
          className="absolute"
          style={{
            top: "22%",
            right: "25%",
            width: "80px",
            height: "1.5px",
            background: "linear-gradient(90deg, rgba(196,181,253,0.8) 0%, rgba(196,181,253,0) 100%)",
            borderRadius: "2px",
            animation: "shootingStar2 18s ease-in 0s infinite",
            boxShadow: "0 0 6px rgba(196,181,253,0.4)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`${isAr ? "text-right" : "text-left"}`}>
            {/* Badge */}
            <div
              className="glide-up badge-orbit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-blue-300/[0.1] mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-xs font-medium text-blue-200/80 tracking-wider uppercase">
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.95] tracking-tight">
              {t.heading.map((word, i) => (
                <span
                  key={i}
                  className={`glide-up block ${
                    i === 0
                      ? "text-white/90"
                      : i === 1
                        ? "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
                        : "text-blue-100/50"
                  }`}
                  style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Sub */}
            <p
              className="glide-up mt-8 text-lg text-blue-100/25 max-w-xl leading-relaxed"
              style={{ animationDelay: "0.6s" }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className={`glide-up mt-10 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.75s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #312e81, #4338ca, #38bdf8)",
                }}
              >
                {t.cta}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`}
                />
              </a>
              <a
                href="#"
                className="px-8 py-4 text-sm font-semibold text-blue-200/30 border border-blue-300/[0.08] rounded-xl hover:bg-blue-300/[0.04] transition-all backdrop-blur-sm"
              >
                {t.cta2}
              </a>
            </div>

            {/* Stats */}
            <div
              className={`glide-up mt-16 flex gap-10 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.9s" }}
            >
              {t.stats.map((stat, i) => (
                <div key={i} className={isAr ? "text-right" : ""}>
                  <div className="text-2xl font-black text-white/90">{stat.value}</div>
                  <div className="text-xs text-blue-200/20 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
