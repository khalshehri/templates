"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Break", "The Grid"],
    sub: "Rules are meant to be broken. We design outside every boundary.",
    cta: "Explore Work",
    cta2: "Contact Us",
  },
  ar: {
    heading: ["\u0627\u0643\u0633\u0631", "\u0627\u0644\u0642\u0627\u0644\u0628"],
    sub: "\u0627\u0644\u0642\u0648\u0627\u0639\u062f \u0635\u064f\u0646\u0639\u062a \u0644\u062a\u064f\u0643\u0633\u0631. \u0646\u0635\u0645\u0645 \u062e\u0627\u0631\u062c \u0643\u0644 \u0627\u0644\u062d\u062f\u0648\u062f.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  },
};

const GRID_CELLS = [
  // Row 1
  { col: "1/3", row: "1/2", bg: "#ff2d7b", z: 1, shift: { x: 0, y: 0, rot: 0 } },
  { col: "3/4", row: "1/2", bg: "#ffe600", z: 2, shift: { x: 12, y: 8, rot: 2 } },
  { col: "4/6", row: "1/2", bg: "#0055ff", z: 1, shift: { x: 0, y: 0, rot: 0 } },
  { col: "6/7", row: "1/3", bg: "#00e676", z: 3, shift: { x: -8, y: 15, rot: -3 } },
  // Row 2
  { col: "1/2", row: "2/3", bg: "#7c3aed", z: 2, shift: { x: 10, y: -5, rot: 1.5 } },
  { col: "2/4", row: "2/4", bg: "#ff6b00", z: 4, shift: { x: -15, y: 20, rot: -2 } },
  { col: "4/5", row: "2/3", bg: "#00e5ff", z: 1, shift: { x: 0, y: 0, rot: 0 } },
  { col: "5/6", row: "2/3", bg: "#ff2d7b", z: 2, shift: { x: 8, y: -10, rot: 3 } },
  // Row 3
  { col: "1/2", row: "3/4", bg: "#ffe600", z: 1, shift: { x: 0, y: 0, rot: 0 } },
  { col: "4/6", row: "3/5", bg: "#7c3aed", z: 3, shift: { x: 12, y: -8, rot: -1.5 } },
  { col: "6/7", row: "3/4", bg: "#0055ff", z: 1, shift: { x: 0, y: 0, rot: 0 } },
  // Row 4
  { col: "1/3", row: "4/5", bg: "#00e5ff", z: 2, shift: { x: -6, y: 10, rot: 2 } },
  { col: "3/4", row: "4/5", bg: "#ff6b00", z: 1, shift: { x: 0, y: 0, rot: 0 } },
  { col: "6/7", row: "4/5", bg: "#ff2d7b", z: 2, shift: { x: 8, y: -12, rot: -2.5 } },
];

export function CreativeGridBreak({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes gridShatter {
          0%   { opacity: 0; transform: translate(0,0) rotate(0deg) scale(0.8); }
          60%  { opacity: 1; transform: translate(var(--gx), var(--gy)) rotate(var(--gr)) scale(1.02); }
          100% { opacity: 0.85; transform: translate(var(--gx), var(--gy)) rotate(var(--gr)) scale(1); }
        }
        @keyframes gridTextBreak {
          from { opacity: 0; letter-spacing: 0.3em; filter: blur(4px); }
          to   { opacity: 1; letter-spacing: -0.02em; filter: blur(0); }
        }
        @keyframes gridGlitch {
          0%, 95%, 100% { transform: translate(var(--gx), var(--gy)) rotate(var(--gr)); }
          96% { transform: translate(calc(var(--gx) + 4px), calc(var(--gy) - 2px)) rotate(var(--gr)); }
          98% { transform: translate(calc(var(--gx) - 3px), calc(var(--gy) + 3px)) rotate(var(--gr)); }
        }
        .grid-cell {
          animation: gridShatter 0.6s cubic-bezier(0.22, 1, 0.36, 1) both,
                     gridGlitch 6s ease-in-out 1s infinite;
        }
        .grid-text-break {
          animation: gridTextBreak 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .grid-border-brutalist {
          border: 3px solid #000;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{ backgroundColor: "#f5f5f0" }}
      >
        {/* Broken grid background */}
        <div className="absolute inset-0 p-4" style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gap: "4px",
        }}>
          {GRID_CELLS.map((cell, i) => (
            <div
              key={i}
              className="grid-cell grid-border-brutalist"
              style={{
                gridColumn: cell.col,
                gridRow: cell.row,
                backgroundColor: cell.bg,
                opacity: 0.85,
                zIndex: cell.z,
                animationDelay: `${i * 0.06}s`,
                "--gx": `${cell.shift.x}px`,
                "--gy": `${cell.shift.y}px`,
                "--gr": `${cell.shift.rot}deg`,
                mixBlendMode: cell.z > 1 ? "multiply" : "normal",
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Brutalist lines crossing the screen */}
        <div className="absolute top-[20%] left-0 right-0 h-[3px] bg-black opacity-60 pointer-events-none" style={{ transform: "rotate(-1deg)" }} />
        <div className="absolute top-[80%] left-0 right-0 h-[3px] bg-black opacity-60 pointer-events-none" style={{ transform: "rotate(0.5deg)" }} />
        <div className="absolute top-0 bottom-0 left-[25%] w-[3px] bg-black opacity-40 pointer-events-none" style={{ transform: "rotate(1deg)" }} />
        <div className="absolute top-0 bottom-0 right-[25%] w-[3px] bg-black opacity-40 pointer-events-none" style={{ transform: "rotate(-0.5deg)" }} />

        {/* Content that breaks out of grid */}
        <div className="relative z-20 text-center px-6">
          {/* Heading breaking boundaries */}
          <h1 className="grid-text-break text-7xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tight" style={{ animationDelay: "0.5s" }}>
            <span className="block" style={{
              color: "#000",
              WebkitTextStroke: "3px #000",
              WebkitTextFillColor: "transparent",
              textShadow: "4px 4px 0 #ff2d7b, -2px -2px 0 #0055ff",
            }}>
              {t.heading[0]}
            </span>
            <span className="block" style={{
              color: "#000",
              textShadow: "3px 3px 0 #ffe600",
              transform: "translateX(20px) rotate(-1deg)",
              display: "inline-block",
            }}>
              {t.heading[1]}
            </span>
          </h1>

          <p className="grid-text-break mt-8 text-lg sm:text-xl max-w-md mx-auto font-mono leading-relaxed" style={{
            animationDelay: "0.8s",
            color: "#000",
            backgroundColor: "rgba(255,255,255,0.85)",
            padding: "12px 20px",
            border: "2px solid #000",
          }}>
            {t.sub}
          </p>

          <div className={`grid-text-break mt-8 flex items-center justify-center gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "1s" }}>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-wider ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                backgroundColor: "#000",
                color: "#ffe600",
                border: "3px solid #000",
                transform: "rotate(-1deg)",
              }}
            >
              {t.cta}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-wider ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "3px solid #000",
                transform: "rotate(1deg)",
              }}
            >
              {t.cta2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
