"use client";

/**
 * Chalkboard -- Education Hero Template
 *
 * Classic green/black chalkboard with chalk writing and drawings.
 * Math formulas, diagrams, and doodles appear as if drawn in chalk.
 * Chalk dust particles float. An eraser smudge. Educational, academic,
 * nostalgic school feel with a wooden frame and chalk tray.
 *
 * @category Education
 * @palette chalkboard green (#2d4a3e), chalk white (#e8e0d0), chalk yellow (#fde68a),
 *          chalk pink (#fca5a5), chalk blue (#93c5fd), wood brown (#5c3d2e)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Academy of Excellence",
    heading: "Where Knowledge Comes to Life",
    subheading:
      "Ignite curiosity, inspire discovery, and shape the minds of tomorrow through world-class education rooted in passion and purpose.",
    cta: "Enroll Now",
    secondary: "Explore Courses",
    formula1: "E=mc\u00B2",
    formula2: "\u2211",
    formula3: "\u03C0\u22483.14",
    formula4: "\u222B dx",
    formula5: "a\u00B2+b\u00B2=c\u00B2",
  },
  ar: {
    badge: "\u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629 \u0627\u0644\u062A\u0645\u064A\u0651\u0632",
    heading: "\u062D\u064A\u062B \u062A\u0646\u0628\u0636 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0628\u0627\u0644\u062D\u064A\u0627\u0629",
    subheading:
      "\u0623\u0634\u0639\u0644 \u0627\u0644\u0641\u0636\u0648\u0644\u060C \u0648\u0627\u0644\u0647\u0645 \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641\u060C \u0648\u0634\u0643\u0651\u0644 \u0639\u0642\u0648\u0644 \u0627\u0644\u063A\u062F \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0639\u0644\u064A\u0645 \u0639\u0627\u0644\u0645\u064A \u0645\u062A\u062C\u0630\u0651\u0631 \u0641\u064A \u0627\u0644\u0634\u063A\u0641 \u0648\u0627\u0644\u0647\u062F\u0641.",
    cta: "\u0633\u062C\u0651\u0644 \u0627\u0644\u0622\u0646",
    secondary: "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062F\u0648\u0631\u0627\u062A",
    formula1: "E=mc\u00B2",
    formula2: "\u2211",
    formula3: "\u03C0\u22483.14",
    formula4: "\u222B dx",
    formula5: "a\u00B2+b\u00B2=c\u00B2",
  },
};

/* ---- Chalk dust particle positions & animations ---- */
const dustParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 47 + 13) % 84)}%`,
  top: `${12 + ((i * 31 + 7) % 70)}%`,
  size: 2 + (i % 3),
  delay: (i * 0.4) % 6,
  duration: 3 + (i % 4),
}));

export function Chalkboard({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* ---- Wooden frame — top ---- */}
      <div
        className="absolute top-0 left-0 right-0 h-6 z-20"
        style={{
          background:
            "linear-gradient(180deg, #6b4226 0%, #5c3d2e 40%, #4a3122 100%)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.15) 20px, rgba(0,0,0,0.15) 21px)",
          }}
        />
      </div>

      {/* ---- Wooden frame — bottom ---- */}
      <div
        className="absolute bottom-0 left-0 right-0 h-6 z-20"
        style={{
          background:
            "linear-gradient(0deg, #6b4226 0%, #5c3d2e 40%, #4a3122 100%)",
          boxShadow: "0 -4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.15) 20px, rgba(0,0,0,0.15) 21px)",
          }}
        />
      </div>

      {/* ---- Wooden frame — left ---- */}
      <div
        className="absolute top-0 bottom-0 left-0 w-4 z-20"
        style={{
          background:
            "linear-gradient(90deg, #6b4226 0%, #5c3d2e 50%, #4a3122 100%)",
          boxShadow: "4px 0 8px rgba(0,0,0,0.4)",
        }}
      />

      {/* ---- Wooden frame — right ---- */}
      <div
        className="absolute top-0 bottom-0 right-0 w-4 z-20"
        style={{
          background:
            "linear-gradient(-90deg, #6b4226 0%, #5c3d2e 50%, #4a3122 100%)",
          boxShadow: "-4px 0 8px rgba(0,0,0,0.4)",
        }}
      />

      {/* ---- Chalkboard surface ---- */}
      <div
        className="absolute inset-4 rounded-sm"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, #2d4a3e 0%, #243d33 40%, #1e3329 70%, #182a22 100%)",
        }}
      >
        {/* Chalk surface texture (noise) */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Subtle scratches */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(105deg, transparent, transparent 100px, rgba(255,255,255,0.08) 100px, rgba(255,255,255,0.08) 101px), repeating-linear-gradient(75deg, transparent, transparent 150px, rgba(255,255,255,0.05) 150px, rgba(255,255,255,0.05) 151px)",
          }}
        />
      </div>

      {/* ---- Eraser smudge ---- */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          top: "18%",
          [isRTL ? "left" : "right"]: "12%",
          width: "180px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(35,60,45,0.6) 0%, rgba(45,74,62,0.8) 50%, rgba(35,55,42,0.5) 100%)",
          borderRadius: "8px",
          filter: "blur(12px)",
          transform: "rotate(-8deg)",
        }}
      />

      {/* ---- Math formulas scattered around edges ---- */}
      <div className="absolute inset-4 pointer-events-none z-10">
        {/* E=mc² */}
        <span
          className="absolute text-lg font-serif italic"
          style={{
            top: "8%",
            [isRTL ? "right" : "left"]: "6%",
            color: "#e8e0d0",
            opacity: 0.55,
            textShadow: "0 0 4px rgba(232,224,208,0.3)",
            transform: "rotate(-3deg)",
          }}
        >
          {t.formula1}
        </span>

        {/* Sigma */}
        <span
          className="absolute text-3xl"
          style={{
            top: "14%",
            [isRTL ? "left" : "right"]: "8%",
            color: "#fde68a",
            opacity: 0.4,
            textShadow: "0 0 6px rgba(253,230,138,0.2)",
            transform: "rotate(5deg)",
          }}
        >
          {t.formula2}
        </span>

        {/* pi */}
        <span
          className="absolute text-sm font-mono"
          style={{
            bottom: "22%",
            [isRTL ? "right" : "left"]: "10%",
            color: "#93c5fd",
            opacity: 0.45,
            textShadow: "0 0 4px rgba(147,197,253,0.2)",
            transform: "rotate(2deg)",
          }}
        >
          {t.formula3}
        </span>

        {/* Integral */}
        <span
          className="absolute text-2xl font-serif"
          style={{
            bottom: "30%",
            [isRTL ? "left" : "right"]: "6%",
            color: "#fca5a5",
            opacity: 0.4,
            textShadow: "0 0 4px rgba(252,165,165,0.2)",
            transform: "rotate(-6deg)",
          }}
        >
          {t.formula4}
        </span>

        {/* Pythagorean theorem */}
        <span
          className="absolute text-xs font-mono"
          style={{
            top: "72%",
            [isRTL ? "right" : "left"]: "5%",
            color: "#e8e0d0",
            opacity: 0.35,
            textShadow: "0 0 3px rgba(232,224,208,0.2)",
            transform: "rotate(4deg)",
          }}
        >
          {t.formula5}
        </span>

        {/* ---- Chalk-drawn doodles ---- */}

        {/* Star doodle (top-left area) */}
        <svg
          className="absolute"
          style={{
            top: "25%",
            [isRTL ? "right" : "left"]: "4%",
            opacity: 0.35,
          }}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 2 L19 12 L30 12 L21 19 L24 30 L16 23 L8 30 L11 19 L2 12 L13 12 Z"
            stroke="#fde68a"
            strokeWidth="1.5"
            fill="none"
            strokeLinejoin="round"
            strokeDasharray="2 1"
          />
        </svg>

        {/* Lightbulb doodle (top-right area) */}
        <svg
          className="absolute"
          style={{
            top: "30%",
            [isRTL ? "left" : "right"]: "5%",
            opacity: 0.35,
          }}
          width="28"
          height="40"
          viewBox="0 0 28 40"
          fill="none"
        >
          <ellipse
            cx="14"
            cy="16"
            rx="10"
            ry="12"
            stroke="#fde68a"
            strokeWidth="1.5"
            strokeDasharray="3 1"
          />
          <line x1="10" y1="28" x2="18" y2="28" stroke="#fde68a" strokeWidth="1.5" />
          <line x1="11" y1="31" x2="17" y2="31" stroke="#fde68a" strokeWidth="1.5" />
          <line x1="12" y1="34" x2="16" y2="34" stroke="#fde68a" strokeWidth="1.5" />
          {/* rays */}
          <line x1="14" y1="1" x2="14" y2="4" stroke="#fde68a" strokeWidth="1" opacity="0.6" />
          <line x1="3" y1="10" x2="5" y2="12" stroke="#fde68a" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="10" x2="23" y2="12" stroke="#fde68a" strokeWidth="1" opacity="0.6" />
        </svg>

        {/* Arrow doodle (bottom-right area) */}
        <svg
          className="absolute"
          style={{
            bottom: "15%",
            [isRTL ? "left" : "right"]: "10%",
            opacity: 0.3,
            transform: isRTL ? "scaleX(-1)" : undefined,
          }}
          width="50"
          height="20"
          viewBox="0 0 50 20"
          fill="none"
        >
          <path
            d="M2 10 Q15 8 35 10 Q40 10 45 10"
            stroke="#e8e0d0"
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <path d="M40 5 L48 10 L40 15" stroke="#e8e0d0" strokeWidth="1.5" fill="none" />
        </svg>

        {/* Smiley doodle (bottom-left area) */}
        <svg
          className="absolute"
          style={{
            bottom: "18%",
            [isRTL ? "right" : "left"]: "14%",
            opacity: 0.3,
          }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <circle
            cx="15"
            cy="15"
            r="12"
            stroke="#e8e0d0"
            strokeWidth="1.5"
            strokeDasharray="3 1"
          />
          <circle cx="10" cy="12" r="1.5" fill="#e8e0d0" />
          <circle cx="20" cy="12" r="1.5" fill="#e8e0d0" />
          <path
            d="M9 19 Q15 24 21 19"
            stroke="#e8e0d0"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      {/* ---- Chalk dust particles ---- */}
      {dustParticles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none z-10"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: "rgba(232, 224, 208, 0.5)",
            animation: `chalkDust ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* ---- Main content ---- */}
      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        {/* Badge */}
        <div
          className="inline-block mb-6 px-5 py-1.5 rounded-sm"
          style={{
            border: "1px dashed rgba(232, 224, 208, 0.4)",
            color: "#fde68a",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textShadow: "0 0 6px rgba(253,230,138,0.2)",
          }}
        >
          {t.badge}
        </div>

        {/* Heading with chalk underline */}
        <div className="relative inline-block">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2"
            style={{
              color: "#e8e0d0",
              textShadow:
                "1px 1px 0 rgba(0,0,0,0.4), 0 0 8px rgba(232,224,208,0.15)",
              fontFamily: "serif",
            }}
          >
            {t.heading}
          </h1>
          {/* Chalk underline */}
          <svg
            className="w-3/4 mx-auto mt-1"
            height="8"
            viewBox="0 0 300 8"
            fill="none"
          >
            <path
              d="M0 5 Q30 2 60 4 Q90 6 120 3 Q150 1 180 4 Q210 6 240 3 Q270 1 300 4"
              stroke="#fde68a"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Subheading */}
        <p
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{
            color: "#e8e0d0",
            opacity: 0.7,
            textShadow: "0 0 4px rgba(232,224,208,0.1)",
          }}
        >
          {t.subheading}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {/* Primary CTA — chalk-style */}
          <button
            className="group flex items-center gap-2 px-8 py-3 rounded-sm text-base font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(232, 224, 208, 0.12)",
              border: "2px solid rgba(232, 224, 208, 0.6)",
              color: "#e8e0d0",
              textShadow: "0 0 4px rgba(232,224,208,0.2)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>

          {/* Secondary CTA */}
          <button
            className="px-8 py-3 rounded-sm text-base transition-all duration-300 hover:scale-105"
            style={{
              color: "#93c5fd",
              opacity: 0.75,
              border: "1px dashed rgba(147, 197, 253, 0.4)",
              textShadow: "0 0 4px rgba(147,197,253,0.15)",
            }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      {/* ---- Chalk tray at bottom ---- */}
      <div
        className="absolute bottom-6 left-4 right-4 z-30 flex items-end justify-center"
        style={{ height: "18px" }}
      >
        {/* Tray shelf */}
        <div
          className="w-full max-w-lg relative"
          style={{
            height: "10px",
            background:
              "linear-gradient(180deg, #5c3d2e 0%, #4a3122 60%, #3d2819 100%)",
            borderRadius: "2px 2px 0 0",
            boxShadow: "0 -2px 6px rgba(0,0,0,0.4)",
          }}
        >
          {/* Chalk pieces sitting on the tray */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-end gap-3">
            {/* White chalk */}
            <div
              className="rounded-sm"
              style={{
                width: "8px",
                height: "28px",
                background: "linear-gradient(90deg, #d4cfc5, #e8e0d0, #d4cfc5)",
                transform: "rotate(-2deg)",
                boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            />
            {/* Yellow chalk */}
            <div
              className="rounded-sm"
              style={{
                width: "8px",
                height: "24px",
                background: "linear-gradient(90deg, #d4b84a, #fde68a, #d4b84a)",
                transform: "rotate(3deg)",
                boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            />
            {/* Pink chalk */}
            <div
              className="rounded-sm"
              style={{
                width: "8px",
                height: "20px",
                background: "linear-gradient(90deg, #d47878, #fca5a5, #d47878)",
                transform: "rotate(-1deg)",
                boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            />
            {/* Blue chalk */}
            <div
              className="rounded-sm"
              style={{
                width: "8px",
                height: "26px",
                background: "linear-gradient(90deg, #6a9fd4, #93c5fd, #6a9fd4)",
                transform: "rotate(2deg)",
                boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            />
            {/* Short white stub */}
            <div
              className="rounded-sm"
              style={{
                width: "8px",
                height: "14px",
                background: "linear-gradient(90deg, #c5c0b5, #e8e0d0, #c5c0b5)",
                transform: "rotate(-4deg)",
                boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ---- Keyframe animations ---- */}
      <style jsx>{`
        @keyframes chalkDust {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-12px) translateX(6px);
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
}
