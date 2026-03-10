/**
 * FreelancerTools — Orbiting skill icons hero
 *
 * Central avatar with floating tool/skill icons orbiting in
 * concentric circles. Tech-forward, dynamic feel.
 *
 * @module freelancer-tools
 */
"use client";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Multi-Skilled Freelancer",
    title: "One Person,",
    titleAccent: "All the Skills",
    description:
      "Why hire a team when one versatile freelancer can handle design, development, and strategy? I orbit between skills so you don't have to.",
    cta: "Start Your Project",
    secondary: "See Skills",
    initials: "JD",
  },
  ar: {
    badge: "مستقل متعدد المهارات",
    title: "شخص واحد،",
    titleAccent: "كل المهارات",
    description:
      "لماذا توظف فريقًا عندما يمكن لمستقل واحد متعدد المهارات التعامل مع التصميم والتطوير والاستراتيجية؟ أنا أتنقل بين المهارات حتى لا تضطر أنت لذلك.",
    cta: "ابدأ مشروعك",
    secondary: "المهارات",
    initials: "م ع",
  },
};

const skills = [
  { label: "React", color: "#61dafb", orbit: 1, angle: 0 },
  { label: "Figma", color: "#a259ff", orbit: 1, angle: 72 },
  { label: "Node", color: "#68a063", orbit: 1, angle: 144 },
  { label: "TS", color: "#3178c6", orbit: 1, angle: 216 },
  { label: "CSS", color: "#06b6d4", orbit: 1, angle: 288 },
  { label: "Git", color: "#f05032", orbit: 2, angle: 30 },
  { label: "AWS", color: "#ff9900", orbit: 2, angle: 90 },
  { label: "DB", color: "#47a248", orbit: 2, angle: 150 },
  { label: "AI", color: "#8b5cf6", orbit: 2, angle: 210 },
  { label: "SEO", color: "#22d3ee", orbit: 2, angle: 270 },
  { label: "UX", color: "#ec4899", orbit: 2, angle: 330 },
];

export function FreelancerTools({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  const orbitRadius1 = 120;
  const orbitRadius2 = 190;

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #0c0a09 100%)" }}
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 60%)" }} />

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
        {/* Text */}
        <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
            {t.badge}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
            {t.title}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-teal-400">
            {t.titleAccent}
          </h1>

          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            {t.description}
          </p>

          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-black transition-all duration-300 hover:scale-105 bg-teal-400 hover:bg-teal-300" style={{ boxShadow: "0 0 30px rgba(20,184,166,0.3)" }}>
              {isAr ? (
                <>
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  {t.cta}
                </>
              ) : (
                <>
                  {t.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <button className="px-7 py-3.5 rounded-xl font-semibold text-teal-400 border border-teal-500/30 hover:bg-teal-500/10 transition-colors">
              {t.secondary}
            </button>
          </div>
        </div>

        {/* Orbiting Skills */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 420, height: 420 }}>
            {/* Orbit rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" style={{ width: orbitRadius1 * 2, height: orbitRadius1 * 2 }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" style={{ width: orbitRadius2 * 2, height: orbitRadius2 * 2 }} />

            {/* Central avatar */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold text-white z-10"
              style={{
                background: "linear-gradient(135deg, #0d9488, #06b6d4)",
                boxShadow: "0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(6,182,212,0.1)",
              }}
            >
              {t.initials}
            </div>

            {/* Orbiting skill icons */}
            {skills.map((skill, i) => {
              const radius = skill.orbit === 1 ? orbitRadius1 : orbitRadius2;
              const duration = skill.orbit === 1 ? 20 : 30;
              const size = skill.orbit === 1 ? 44 : 38;

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    animation: `orbit-spin ${duration}s linear infinite`,
                    animationDelay: `${-(skill.angle / 360) * duration}s`,
                  }}
                >
                  <div
                    className="absolute rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      width: size,
                      height: size,
                      background: `${skill.color}15`,
                      border: `1.5px solid ${skill.color}40`,
                      color: skill.color,
                      top: -radius - size / 2,
                      left: -size / 2,
                      animation: `orbit-counter-spin ${duration}s linear infinite`,
                      animationDelay: `${-(skill.angle / 360) * duration}s`,
                      boxShadow: `0 0 15px ${skill.color}20`,
                    }}
                  >
                    {skill.label}
                  </div>
                </div>
              );
            })}

            {/* Connecting pulse lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: 1,
                  height: orbitRadius2,
                  background: `linear-gradient(to top, rgba(6,182,212,0.1), transparent)`,
                  transformOrigin: "bottom center",
                  transform: `rotate(${angle}deg) translateX(-0.5px)`,
                  opacity: 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
