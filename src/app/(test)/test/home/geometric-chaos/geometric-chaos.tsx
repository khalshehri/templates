"use client";

/**
 * Geometric Chaos Hero
 * Scattered geometric shapes (triangles, circles, rectangles)
 * flying across the screen with varying rotations and sizes.
 * Bold, oversized brutalist typography cuts through the noise.
 * Black & white base with one accent color (electric lime).
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["BREAK", "THE", "GRID"],
    sub: "Order is overrated. We design in controlled chaos — where every broken rule creates a new possibility.",
    cta: "Unleash It",
    cta2: "Our Manifesto",
    manifesto: "DESIGN IS REBELLION",
  },
  ar: {
    heading: ["اكسر", "الشبكة", "تماماً"],
    sub: "النظام مبالغ فيه. نصمم في فوضى مُتحكم بها — حيث كل قاعدة مكسورة تخلق إمكانية جديدة.",
    cta: "أطلق العنان",
    cta2: "بياننا",
    manifesto: "التصميم هو تمرد",
  },
};

const shapes = [
  { type: "circle", x: 8, y: 15, size: 80, color: "#a3e635", rotation: 0, delay: 0.1 },
  { type: "rect", x: 75, y: 10, size: 60, color: "transparent", rotation: 45, delay: 0.3, stroke: "#a3e635" },
  { type: "triangle", x: 20, y: 65, size: 100, color: "#a3e635", rotation: -15, delay: 0.2 },
  { type: "circle", x: 85, y: 70, size: 40, color: "transparent", rotation: 0, delay: 0.4, stroke: "#fff" },
  { type: "rect", x: 50, y: 8, size: 45, color: "#fff", rotation: 30, delay: 0.15 },
  { type: "triangle", x: 65, y: 80, size: 70, color: "transparent", rotation: 60, delay: 0.35, stroke: "#a3e635" },
  { type: "circle", x: 35, y: 85, size: 30, color: "#a3e635", rotation: 0, delay: 0.5 },
  { type: "rect", x: 90, y: 40, size: 55, color: "transparent", rotation: -20, delay: 0.25, stroke: "#fff" },
  { type: "line", x: 5, y: 45, size: 120, color: "#a3e635", rotation: -30, delay: 0.45 },
  { type: "line", x: 60, y: 55, size: 90, color: "#fff", rotation: 15, delay: 0.55 },
  { type: "cross", x: 45, y: 20, size: 40, color: "#a3e635", rotation: 25, delay: 0.2 },
  { type: "cross", x: 15, y: 40, size: 30, color: "#fff", rotation: -10, delay: 0.6 },
];

export function GeometricChaos({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes shapeIn {
          from { opacity: 0; transform: rotate(var(--rot)) scale(0) translateY(40px); }
          to { opacity: var(--op); transform: rotate(var(--rot)) scale(1) translateY(0); }
        }
        @keyframes drift {
          0%, 100% { transform: rotate(var(--rot)) translateY(0); }
          50% { transform: rotate(calc(var(--rot) + 5deg)) translateY(-15px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stampIn {
          from { opacity: 0; transform: scale(3) rotate(-5deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .shape-in { animation: shapeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both, drift 8s ease-in-out infinite 1s; }
        .fade-in { animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .stamp-in { animation: stampIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* Scattered shapes */}
        {shapes.map((s, i) => (
          <div
            key={i}
            className="absolute shape-in pointer-events-none"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              "--rot": `${s.rotation}deg`,
              "--op": s.type === "line" ? "0.15" : "0.08",
              animationDelay: `${s.delay}s`,
            } as React.CSSProperties}
          >
            {s.type === "circle" && (
              <div
                style={{
                  width: s.size, height: s.size, borderRadius: "50%",
                  backgroundColor: s.stroke ? "transparent" : s.color,
                  border: s.stroke ? `2px solid ${s.stroke}` : "none",
                }}
              />
            )}
            {s.type === "rect" && (
              <div
                style={{
                  width: s.size, height: s.size,
                  backgroundColor: s.stroke ? "transparent" : s.color,
                  border: s.stroke ? `2px solid ${s.stroke}` : "none",
                }}
              />
            )}
            {s.type === "triangle" && (
              <div style={{
                width: 0, height: 0,
                borderLeft: `${s.size / 2}px solid transparent`,
                borderRight: `${s.size / 2}px solid transparent`,
                borderBottom: `${s.size}px solid ${s.stroke || s.color}`,
                opacity: s.stroke ? 1 : 0.5,
              }} />
            )}
            {s.type === "line" && (
              <div style={{ width: s.size, height: 2, backgroundColor: s.color }} />
            )}
            {s.type === "cross" && (
              <div className="relative" style={{ width: s.size, height: s.size }}>
                <div className="absolute top-1/2 left-0 w-full h-0.5" style={{ backgroundColor: s.color, transform: "translateY(-50%)" }} />
                <div className="absolute left-1/2 top-0 h-full w-0.5" style={{ backgroundColor: s.color, transform: "translateX(-50%)" }} />
              </div>
            )}
          </div>
        ))}

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          {/* Heading — brutalist oversized */}
          <h1 className="leading-[0.8]">
            {t.heading.map((word, i) => (
              <span
                key={i}
                className="stamp-in block text-7xl sm:text-8xl lg:text-9xl xl:text-[11rem] font-black"
                style={{
                  animationDelay: `${0.3 + i * 0.12}s`,
                  color: i === 1 ? "#a3e635" : "#fff",
                  WebkitTextStroke: i === 2 ? "2px #a3e635" : "none",
                  WebkitTextFillColor: i === 2 ? "transparent" : undefined,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="fade-in mt-8 text-base text-white/25 max-w-md mx-auto leading-relaxed" style={{ animationDelay: "0.7s" }}>
            {t.sub}
          </p>

          <div className="fade-in mt-8 flex items-center justify-center gap-4" style={{ animationDelay: "0.85s" }}>
            <a href="#" className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-widest text-black bg-[#a3e635] hover:bg-[#bef264] transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.cta}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/40 border-2 border-white/10 hover:border-white/30 transition-all">
              {t.cta2}
            </a>
          </div>

          {/* Manifesto stamp */}
          <div className="fade-in mt-16 text-xs tracking-[0.5em] text-white/8 uppercase font-black" style={{ animationDelay: "1s" }}>
            {t.manifesto}
          </div>
        </div>
      </section>
    </>
  );
}
