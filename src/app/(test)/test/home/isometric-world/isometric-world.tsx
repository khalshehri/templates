"use client";

/**
 * Isometric World Hero
 * 3D isometric CSS buildings creating a tiny city.
 * Each building rises on load. Text floats above the city.
 * Pastel palette with depth shadows.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Build Your", "Digital City"],
    sub: "Every block tells a story. We construct digital ecosystems where your brand lives, breathes, and grows.",
    cta: "Build With Us",
    cta2: "Explore Blocks",
  },
  ar: {
    heading: ["ابنِ مدينتك", "الرقمية"],
    sub: "كل بلوك يروي قصة. نبني أنظمة رقمية حيث تعيش علامتك التجارية وتتنفس وتنمو.",
    cta: "ابنِ معنا",
    cta2: "استكشف البلوكات",
  },
};

const buildings = [
  { w: 60, h: 120, x: 0, y: 0, color: "#818cf8", delay: 0.2 },
  { w: 50, h: 80, x: 70, y: 20, color: "#c084fc", delay: 0.35 },
  { w: 70, h: 160, x: 130, y: -20, color: "#6366f1", delay: 0.5 },
  { w: 45, h: 100, x: 210, y: 10, color: "#a78bfa", delay: 0.3 },
  { w: 55, h: 70, x: 265, y: 30, color: "#e879f9", delay: 0.45 },
  { w: 65, h: 140, x: 330, y: -10, color: "#7c3aed", delay: 0.6 },
  { w: 40, h: 60, x: 405, y: 35, color: "#c084fc", delay: 0.25 },
  { w: 75, h: 110, x: 455, y: 5, color: "#818cf8", delay: 0.55 },
];

export function IsometricWorld({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes riseUp {
          from { transform: scaleY(0) translateY(20px); opacity: 0; }
          to { transform: scaleY(1) translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes windowBlink {
          0%, 90%, 100% { opacity: 0.3; }
          95% { opacity: 1; }
        }
        .rise-up { animation: riseUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: bottom; }
        .fade-in { animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0b1e]">
        {/* Gradient sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1040] via-[#0f0b1e] to-[#0a0618]" />

        {/* Stars */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.7 ? 2 : 1,
              height: Math.random() > 0.7 ? 2 : 1,
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.15 + Math.random() * 0.3,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Text */}
          <div className={`text-center mb-16 ${isAr ? "text-center" : ""}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]">
              {t.heading.map((line, i) => (
                <span
                  key={i}
                  className={`fade-in block ${i === 1 ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent" : "text-white"}`}
                  style={{ animationDelay: `${0.1 + i * 0.15}s` }}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="fade-in mt-6 text-lg text-white/30 max-w-lg mx-auto" style={{ animationDelay: "0.4s" }}>
              {t.sub}
            </p>
            <div className="fade-in mt-8 flex items-center justify-center gap-4" style={{ animationDelay: "0.55s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-500 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] ${isAr ? "flex-row-reverse" : ""}`}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
                {t.cta2}
              </a>
            </div>
          </div>

          {/* Isometric city */}
          <div className="relative h-48 sm:h-64 mx-auto max-w-2xl">
            {/* Ground plane */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] opacity-20"
              style={{
                background: "radial-gradient(ellipse at center, rgba(99,102,241,0.4), transparent 70%)",
              }}
            />

            {/* Buildings */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end" style={{ width: 540 }}>
              {buildings.map((b, i) => (
                <div
                  key={i}
                  className="rise-up absolute"
                  style={{
                    left: b.x,
                    bottom: 0,
                    width: b.w,
                    height: b.h,
                    animationDelay: `${b.delay}s`,
                  }}
                >
                  {/* Building body */}
                  <div
                    className="absolute inset-0 rounded-t-lg"
                    style={{
                      background: `linear-gradient(180deg, ${b.color}, ${b.color}88)`,
                      boxShadow: `0 0 30px ${b.color}33`,
                    }}
                  />
                  {/* Windows grid */}
                  <div className="absolute inset-2 grid grid-cols-2 gap-1.5 p-1">
                    {Array.from({ length: Math.floor(b.h / 20) * 2 }).map((_, wi) => (
                      <div
                        key={wi}
                        className="rounded-sm"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                          animation: Math.random() > 0.7 ? `windowBlink ${3 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 5}s` : "none",
                        }}
                      />
                    ))}
                  </div>
                  {/* Top light */}
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: i % 2 === 0 ? "#f87171" : "#4ade80",
                      boxShadow: `0 0 6px ${i % 2 === 0 ? "#f87171" : "#4ade80"}`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Ground reflection line */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}
