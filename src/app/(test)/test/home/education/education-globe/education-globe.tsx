"use client";

/**
 * Education Globe -- Education Hero Template
 *
 * Spinning globe with connection dots and "Learn from anywhere" theme.
 * Centered globe layout with orbital paths and location markers.
 *
 * @category Education
 * @palette emerald (#059669), teal (#0D9488), sky (#0EA5E9), dark (#0A1929)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Global Learning Network",
    heading: "Learn From Anywhere on Earth",
    subheading:
      "Connect with world-class educators across continents. Our global classroom breaks borders and builds bridges of knowledge.",
    cta: "Join the Network",
    secondary: "View Programs",
    stats: [
      { value: "120+", label: "Countries" },
      { value: "50K", label: "Students" },
      { value: "800", label: "Courses" },
    ],
  },
  ar: {
    badge: "شبكة التعلم العالمية",
    heading: "تعلّم من أي مكان على وجه الأرض",
    subheading:
      "تواصل مع أفضل المعلمين عبر القارات. فصلنا العالمي يكسر الحدود ويبني جسور المعرفة.",
    cta: "انضم للشبكة",
    secondary: "عرض البرامج",
    stats: [
      { value: "+١٢٠", label: "دولة" },
      { value: "٥٠ ألف", label: "طالب" },
      { value: "٨٠٠", label: "دورة" },
    ],
  },
};

const connectionDots = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  angle: (i * 30) * (Math.PI / 180),
  radius: 140 + (i % 3) * 30,
  size: 4 + (i % 3) * 2,
  delay: i * 0.3,
}));

const orbitalPaths = [
  { rx: 160, ry: 60, rotate: -25, dash: "4 6" },
  { rx: 190, ry: 50, rotate: 15, dash: "3 8" },
  { rx: 140, ry: 70, rotate: -60, dash: "5 5" },
];

export function EducationGlobe({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #0A2E1F 0%, #061A12 50%, #030D09 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,150,105,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(5,150,105,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Globe + content side by side */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Globe visual */}
        <div className="relative flex-shrink-0" style={{ width: "380px", height: "380px" }}>
          {/* Globe circle */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid rgba(5,150,105,0.3)",
              background:
                "radial-gradient(circle at 35% 35%, rgba(5,150,105,0.15) 0%, rgba(5,150,105,0.05) 50%, transparent 70%)",
              boxShadow: "0 0 80px rgba(5,150,105,0.15), inset 0 0 60px rgba(5,150,105,0.08)",
            }}
          />

          {/* Meridian/latitude lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
            {/* Equator */}
            <ellipse cx="190" cy="190" rx="185" ry="40" fill="none" stroke="rgba(5,150,105,0.2)" strokeWidth="1" />
            {/* Vertical meridian */}
            <ellipse cx="190" cy="190" rx="40" ry="185" fill="none" stroke="rgba(5,150,105,0.15)" strokeWidth="1" />
            {/* Angled meridian */}
            <ellipse cx="190" cy="190" rx="120" ry="185" fill="none" stroke="rgba(5,150,105,0.1)" strokeWidth="1" transform="rotate(30,190,190)" />
            {/* Tropic lines */}
            <ellipse cx="190" cy="140" rx="160" ry="30" fill="none" stroke="rgba(5,150,105,0.1)" strokeWidth="1" />
            <ellipse cx="190" cy="240" rx="160" ry="30" fill="none" stroke="rgba(5,150,105,0.1)" strokeWidth="1" />

            {/* Orbital paths */}
            {orbitalPaths.map((orb, i) => (
              <ellipse
                key={i}
                cx="190"
                cy="190"
                rx={orb.rx}
                ry={orb.ry}
                fill="none"
                stroke="rgba(16,185,129,0.25)"
                strokeWidth="1"
                strokeDasharray={orb.dash}
                transform={`rotate(${orb.rotate},190,190)`}
              />
            ))}
          </svg>

          {/* Connection dots */}
          {connectionDots.map((dot) => {
            const x = 190 + Math.cos(dot.angle) * dot.radius;
            const y = 190 + Math.sin(dot.angle) * dot.radius;
            return (
              <div
                key={dot.id}
                className="absolute rounded-full"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  width: `${dot.size}px`,
                  height: `${dot.size}px`,
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 8px rgba(16,185,129,0.6)",
                  transform: "translate(-50%, -50%)",
                  animation: `globePulse 2s ease-in-out ${dot.delay}s infinite alternate`,
                }}
              />
            );
          })}

          {/* Center glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#059669",
              boxShadow: "0 0 30px rgba(5,150,105,0.5), 0 0 60px rgba(5,150,105,0.2)",
              animation: "globeCenter 3s ease-in-out infinite alternate",
            }}
          />
        </div>

        {/* Text content */}
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ color: "#E2FAF0" }}
          >
            {t.heading}
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(167,243,208,0.7)" }}
          >
            {t.subheading}
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mb-8">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold" style={{ color: "#34D399" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "rgba(167,243,208,0.5)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
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
              style={{
                color: "#34D399",
                border: "1px solid rgba(52,211,153,0.3)",
              }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes globePulse {
          0% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.4); }
        }
        @keyframes globeCenter {
          0% { box-shadow: 0 0 30px rgba(5,150,105,0.5), 0 0 60px rgba(5,150,105,0.2); }
          100% { box-shadow: 0 0 50px rgba(5,150,105,0.7), 0 0 100px rgba(5,150,105,0.3); }
        }
      `}</style>
    </section>
  );
}
