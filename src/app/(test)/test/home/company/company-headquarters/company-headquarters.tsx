"use client";

/**
 * CompanyHeadquarters — Architectural Hero
 *
 * Modern HQ building at night with illuminated windows (CSS).
 * Content overlaid on the building scene. Architectural feel.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "OUR HEADQUARTERS",
    heading: ["Where", "Innovation", "Comes to Life"],
    sub: "A state-of-the-art headquarters designed to inspire creativity, foster collaboration, and push the boundaries of what's possible.",
    cta: "Visit Our HQ",
    cta2: "Virtual Tour",
    details: [
      { label: "Floors", value: "42" },
      { label: "Employees", value: "3,200+" },
      { label: "Innovation Labs", value: "8" },
    ],
  },
  ar: {
    badge: "مقرّنا الرئيسي",
    heading: ["حيث", "الابتكار", "يصبح واقعًا"],
    sub: "مقر رئيسي متطور مصمّم لإلهام الإبداع وتعزيز التعاون ودفع حدود الممكن.",
    cta: "زر مقرّنا",
    cta2: "جولة افتراضية",
    details: [
      { label: "طابق", value: "٤٢" },
      { label: "موظف", value: "+٣,٢٠٠" },
      { label: "مختبر ابتكار", value: "٨" },
    ],
  },
};

// Generate window grid for the building
const FLOORS = 18;
const WINDOWS_PER_FLOOR = 8;

export function CompanyHeadquarters({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes windowFlicker {
          0%, 100% { opacity: var(--win-base); }
          50% { opacity: var(--win-peak); }
        }
        @keyframes buildingRise {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes beaconPulse {
          0%, 100% { opacity: 0.3; box-shadow: 0 0 10px rgba(239,68,68,0.3); }
          50% { opacity: 1; box-shadow: 0 0 20px rgba(239,68,68,0.6); }
        }
        @keyframes groundGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: "linear-gradient(180deg, #020817 0%, #0a1628 40%, #0c1a30 100%)" }}>
        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{
                left: `${5 + (i * 31) % 90}%`,
                top: `${3 + (i * 17) % 35}%`,
                width: 1 + (i % 3),
                height: 1 + (i % 3),
                animation: `starTwinkle ${2 + (i % 4)}s ease-in-out ${(i * 0.3) % 3}s infinite`,
              }} />
          ))}
        </div>

        {/* Moon */}
        <div className="absolute rounded-full" style={{
          top: "8%", right: "15%", width: 50, height: 50,
          background: "radial-gradient(circle at 35% 35%, #e2e8f0, #94a3b8)",
          boxShadow: "0 0 40px rgba(226,232,240,0.15), 0 0 80px rgba(226,232,240,0.05)",
        }} />

        {/* Building */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ animation: "buildingRise 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
          {/* Main building body */}
          <div className="relative" style={{
            width: 200, height: 420,
            background: "linear-gradient(180deg, #1a2744 0%, #0f1b30 50%, #0a1220 100%)",
            clipPath: "polygon(10% 0%, 90% 0%, 95% 100%, 5% 100%)",
            borderTop: "3px solid rgba(96,165,250,0.15)",
          }}>
            {/* Window grid */}
            <div className="absolute inset-0 p-4 pt-8">
              <div className="grid gap-y-2" style={{ gridTemplateRows: `repeat(${FLOORS}, 1fr)` }}>
                {Array.from({ length: FLOORS }).map((_, floor) => (
                  <div key={floor} className="flex justify-around px-2">
                    {Array.from({ length: WINDOWS_PER_FLOOR }).map((_, win) => {
                      const isLit = Math.random() > 0.3;
                      const baseOpacity = isLit ? 0.4 + Math.random() * 0.4 : 0.05;
                      const peakOpacity = isLit ? baseOpacity + 0.2 : 0.08;
                      const hue = isLit ? (Math.random() > 0.7 ? "rgba(251,191,36," : "rgba(96,165,250,") : "rgba(30,58,138,";
                      return (
                        <div key={win} className="rounded-sm"
                          style={{
                            width: 10, height: 8,
                            background: `${hue}${baseOpacity})`,
                            ["--win-base" as string]: baseOpacity,
                            ["--win-peak" as string]: peakOpacity,
                            animation: isLit ? `windowFlicker ${3 + Math.random() * 6}s ease-in-out ${Math.random() * 5}s infinite` : "none",
                          }} />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Roof beacon */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500"
              style={{ animation: "beaconPulse 2s ease-in-out infinite" }} />

            {/* Antenna */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-gray-600" />
          </div>

          {/* Side buildings (left) */}
          <div className="absolute bottom-0 -left-24" style={{
            width: 80, height: 220,
            background: "linear-gradient(180deg, #141f35 0%, #0a1220 100%)",
          }}>
            {Array.from({ length: 8 }).map((_, floor) => (
              <div key={floor} className="flex justify-around px-2 mt-2">
                {Array.from({ length: 4 }).map((_, win) => {
                  const on = Math.random() > 0.4;
                  return <div key={win} className="rounded-sm" style={{
                    width: 8, height: 6,
                    background: on ? `rgba(251,191,36,${0.2 + Math.random() * 0.3})` : "rgba(30,58,138,0.05)",
                  }} />;
                })}
              </div>
            ))}
          </div>

          {/* Side buildings (right) */}
          <div className="absolute bottom-0 -right-20" style={{
            width: 70, height: 180,
            background: "linear-gradient(180deg, #141f35 0%, #0a1220 100%)",
          }}>
            {Array.from({ length: 7 }).map((_, floor) => (
              <div key={floor} className="flex justify-around px-2 mt-2">
                {Array.from({ length: 3 }).map((_, win) => {
                  const on = Math.random() > 0.4;
                  return <div key={win} className="rounded-sm" style={{
                    width: 8, height: 6,
                    background: on ? `rgba(96,165,250,${0.15 + Math.random() * 0.25})` : "rgba(30,58,138,0.05)",
                  }} />;
                })}
              </div>
            ))}
          </div>

          {/* Ground glow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2"
            style={{
              width: 350, height: 30,
              background: "radial-gradient(ellipse, rgba(96,165,250,0.1) 0%, transparent 70%)",
              animation: "groundGlow 4s ease-in-out infinite",
            }} />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full mb-8">
          <div className={`max-w-lg ${isAr ? "mr-auto text-right" : ""}`}>
            <div className="p-8 rounded-2xl backdrop-blur-xl border border-blue-400/[0.06]"
              style={{ background: "rgba(2,8,23,0.85)" }}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] mb-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}>
                <span className="text-sm font-medium text-blue-300/60 tracking-widest">{t.badge}</span>
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.45s" }}>
                <span className="block text-white/90">{t.heading[0]}</span>
                <span className="block bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">{t.heading[1]}</span>
                <span className="block text-white/70">{t.heading[2]}</span>
              </h1>

              <p className="fade-up mt-4 text-sm text-blue-100/30 leading-relaxed"
                style={{ animationDelay: "0.6s" }}>{t.sub}</p>

              {/* Building details */}
              <div className={`fade-up mt-6 flex gap-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.7s" }}>
                {t.details.map((d, i) => (
                  <div key={i}>
                    <div className="text-xl font-black text-blue-300/80">{d.value}</div>
                    <div className="text-xs text-blue-200/25 mt-0.5">{d.label}</div>
                  </div>
                ))}
              </div>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.85s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)" }}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/[0.04] transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
