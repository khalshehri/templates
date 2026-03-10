"use client";

/**
 * Ink Flow — Creative Hero Template
 *
 * Japanese sumi ink flowing and bleeding across white washi paper.
 * Multiple ink blots expand and flow organically on load with thin
 * branching veins. Heading appears brush-calligraphed. Features an
 * enso circle with stroke draw-in animation and a red hanko seal.
 *
 * Category: Creative
 * Style: Zen, artistic, meditative
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "Where Ink Meets Intention",
    subtitle:
      "Every stroke carries meaning. We craft digital experiences with the deliberation of a calligrapher — nothing wasted, everything felt.",
    cta: "Begin the journey",
    sealChar: "墨",
  },
  ar: {
    heading: "حيث يلتقي الحبر بالنيّة",
    subtitle:
      "كل ضربة فرشاة تحمل معنى. نصنع تجارب رقمية بتأنّي الخطّاط — لا شيء يُهدر، كل شيء يُحسّ.",
    cta: "ابدأ الرحلة",
    sealChar: "墨",
  },
};

/* ---------- Ink blot configs ---------- */
const inkBlots: {
  id: number;
  cx: string;
  cy: string;
  size: number;
  color: string;
  delay: string;
  radii: string;
  radiiFinal: string;
}[] = [
  {
    id: 1,
    cx: "18%",
    cy: "30%",
    size: 220,
    color: "#1a1a1a",
    delay: "0s",
    radii: "40% 60% 55% 45% / 50% 40% 60% 50%",
    radiiFinal: "55% 45% 48% 52% / 45% 55% 42% 58%",
  },
  {
    id: 2,
    cx: "75%",
    cy: "25%",
    size: 180,
    color: "#1a1a1a",
    delay: "0.3s",
    radii: "50% 50% 45% 55% / 55% 45% 50% 50%",
    radiiFinal: "45% 55% 52% 48% / 50% 50% 55% 45%",
  },
  {
    id: 3,
    cx: "50%",
    cy: "60%",
    size: 260,
    color: "#1a1a1a",
    delay: "0.15s",
    radii: "45% 55% 50% 50% / 50% 50% 45% 55%",
    radiiFinal: "52% 48% 45% 55% / 48% 52% 50% 50%",
  },
  {
    id: 4,
    cx: "30%",
    cy: "70%",
    size: 140,
    color: "#1e1b4b",
    delay: "0.5s",
    radii: "55% 45% 50% 50% / 45% 55% 50% 50%",
    radiiFinal: "48% 52% 55% 45% / 52% 48% 45% 55%",
  },
  {
    id: 5,
    cx: "82%",
    cy: "65%",
    size: 120,
    color: "#7f1d1d",
    delay: "0.6s",
    radii: "50% 50% 55% 45% / 50% 50% 50% 50%",
    radiiFinal: "45% 55% 50% 50% / 55% 45% 52% 48%",
  },
  {
    id: 6,
    cx: "55%",
    cy: "15%",
    size: 100,
    color: "#1a1a1a",
    delay: "0.45s",
    radii: "48% 52% 50% 50% / 52% 48% 50% 50%",
    radiiFinal: "50% 50% 48% 52% / 50% 50% 52% 48%",
  },
];

/* ---------- Ink vein configs ---------- */
const inkVeins: {
  id: number;
  d: string;
  delay: string;
  width: number;
  color: string;
}[] = [
  {
    id: 1,
    d: "M 18 30 Q 25 20, 35 18 T 50 12",
    delay: "0.8s",
    width: 1.5,
    color: "#1a1a1a",
  },
  {
    id: 2,
    d: "M 50 60 Q 40 50, 30 52 T 15 55",
    delay: "0.9s",
    width: 1,
    color: "#1a1a1a",
  },
  {
    id: 3,
    d: "M 75 25 Q 80 35, 78 45 T 82 58",
    delay: "1s",
    width: 1.2,
    color: "#1a1a1a",
  },
  {
    id: 4,
    d: "M 50 60 Q 60 55, 68 58 T 78 62",
    delay: "1.1s",
    width: 0.8,
    color: "#1e1b4b",
  },
  {
    id: 5,
    d: "M 18 30 Q 15 40, 20 50 T 28 65",
    delay: "1s",
    width: 1,
    color: "#1a1a1a",
  },
  {
    id: 6,
    d: "M 55 15 Q 60 20, 65 22 T 72 24",
    delay: "1.15s",
    width: 0.7,
    color: "#1a1a1a",
  },
];

export function InkFlow({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#faf8f2" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ---------- Keyframes ---------- */}
      <style>{`
        /* Paper texture overlay */
        .ink-paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }

        /* Ink blot expand */
        @keyframes inkExpand {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          30% {
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
          }
        }

        /* Ink blot border-radius morph */
        @keyframes inkMorph1 {
          0%, 100% { border-radius: 40% 60% 55% 45% / 50% 40% 60% 50%; }
          50% { border-radius: 55% 45% 48% 52% / 45% 55% 42% 58%; }
        }
        @keyframes inkMorph2 {
          0%, 100% { border-radius: 50% 50% 45% 55% / 55% 45% 50% 50%; }
          50% { border-radius: 45% 55% 52% 48% / 50% 50% 55% 45%; }
        }
        @keyframes inkMorph3 {
          0%, 100% { border-radius: 45% 55% 50% 50% / 50% 50% 45% 55%; }
          50% { border-radius: 52% 48% 45% 55% / 48% 52% 50% 50%; }
        }
        @keyframes inkMorph4 {
          0%, 100% { border-radius: 55% 45% 50% 50% / 45% 55% 50% 50%; }
          50% { border-radius: 48% 52% 55% 45% / 52% 48% 45% 55%; }
        }
        @keyframes inkMorph5 {
          0%, 100% { border-radius: 50% 50% 55% 45% / 50% 50% 50% 50%; }
          50% { border-radius: 45% 55% 50% 50% / 55% 45% 52% 48%; }
        }
        @keyframes inkMorph6 {
          0%, 100% { border-radius: 48% 52% 50% 50% / 52% 48% 50% 50%; }
          50% { border-radius: 50% 50% 48% 52% / 50% 50% 52% 48%; }
        }

        .ink-blot {
          position: absolute;
          transform: translate(-50%, -50%) scale(0);
          animation: inkExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          filter: blur(2px);
        }
        .ink-blot-1 { animation: inkExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, inkMorph1 8s ease-in-out 1.8s infinite; }
        .ink-blot-2 { animation: inkExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, inkMorph2 9s ease-in-out 2.1s infinite; }
        .ink-blot-3 { animation: inkExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, inkMorph3 7s ease-in-out 1.95s infinite; }
        .ink-blot-4 { animation: inkExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, inkMorph4 10s ease-in-out 2.3s infinite; }
        .ink-blot-5 { animation: inkExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, inkMorph5 8.5s ease-in-out 2.4s infinite; }
        .ink-blot-6 { animation: inkExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, inkMorph6 9.5s ease-in-out 2.25s infinite; }

        /* Ink vein draw-in */
        @keyframes inkVeinDraw {
          0% {
            stroke-dashoffset: 200;
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.5;
          }
        }
        .ink-vein {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: inkVeinDraw 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          fill: none;
          stroke-linecap: round;
        }

        /* Enso circle */
        @keyframes ensoStroke {
          0% {
            stroke-dashoffset: 580;
            opacity: 0;
          }
          5% {
            opacity: 0.15;
          }
          100% {
            stroke-dashoffset: 60;
            opacity: 0.12;
          }
        }
        .enso-circle {
          stroke-dasharray: 580;
          stroke-dashoffset: 580;
          animation: ensoStroke 3s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
          fill: none;
          stroke-linecap: round;
        }

        /* Heading brush style */
        @keyframes brushReveal {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
        }
        .brush-heading {
          animation: brushReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
          opacity: 0;
        }
        [dir="rtl"] .brush-heading {
          animation-name: brushRevealRTL;
        }
        @keyframes brushRevealRTL {
          0% {
            clip-path: inset(0 0 0 100%);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0%);
            opacity: 1;
          }
        }

        /* Subtitle fade */
        @keyframes subtitleFade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .subtitle-fade {
          animation: subtitleFade 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        /* CTA fade */
        @keyframes ctaFade {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .cta-fade {
          animation: ctaFade 0.8s ease-out 1.6s forwards;
          opacity: 0;
        }

        /* Hanko seal */
        @keyframes sealStamp {
          0% { transform: scale(1.5) rotate(-8deg); opacity: 0; }
          60% { transform: scale(0.95) rotate(1deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 1; }
        }
        .hanko-seal {
          animation: sealStamp 0.5s cubic-bezier(0.22, 1, 0.36, 1) 2s forwards;
          opacity: 0;
        }
      `}</style>

      {/* ---------- Paper texture overlay ---------- */}
      <div className="ink-paper-texture absolute inset-0 z-0 pointer-events-none" />

      {/* ---------- Ink blots ---------- */}
      {inkBlots.map((blot) => (
        <div
          key={blot.id}
          className={`ink-blot ink-blot-${blot.id}`}
          style={{
            left: blot.cx,
            top: blot.cy,
            width: blot.size,
            height: blot.size,
            backgroundColor: blot.color,
            animationDelay: `${blot.delay}, calc(${blot.delay} + 1.8s)`,
            borderRadius: blot.radii,
            zIndex: 1,
          }}
        />
      ))}

      {/* ---------- Ink veins (SVG) ---------- */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 2 }}
      >
        {inkVeins.map((vein) => (
          <path
            key={vein.id}
            className="ink-vein"
            d={vein.d}
            stroke={vein.color}
            strokeWidth={vein.width * 0.15}
            style={{ animationDelay: vein.delay }}
          />
        ))}
      </svg>

      {/* ---------- Enso circle ---------- */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(500px, 70vw)",
          height: "min(500px, 70vw)",
          zIndex: 2,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            className="enso-circle"
            cx="100"
            cy="100"
            r="90"
            stroke="#1a1a1a"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* ---------- Content ---------- */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
        style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
      >
        {/* Heading */}
        <h1
          className="brush-heading text-center font-bold leading-tight"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            color: "#1a1a1a",
            transform: "rotate(-1deg)",
            letterSpacing: isRTL ? "0" : "-0.02em",
            fontFamily: isRTL
              ? "'Noto Sans Arabic', sans-serif"
              : "Georgia, 'Times New Roman', serif",
            textShadow: "1px 1px 0 rgba(26,26,26,0.08)",
            maxWidth: "800px",
          }}
        >
          {t.heading}
        </h1>

        {/* Subtitle */}
        <p
          className="subtitle-fade text-center mt-6"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            color: "#3f3f46",
            maxWidth: "540px",
            lineHeight: 1.7,
            fontFamily: isRTL
              ? "'Noto Sans Arabic', sans-serif"
              : "Georgia, 'Times New Roman', serif",
          }}
        >
          {t.subtitle}
        </p>

        {/* CTA */}
        <button
          className="cta-fade group mt-10 inline-flex items-center gap-2 border transition-colors duration-300"
          style={{
            borderColor: "#1a1a1a",
            color: "#1a1a1a",
            padding: "0.7rem 1.8rem",
            fontSize: "0.95rem",
            fontFamily: isRTL
              ? "'Noto Sans Arabic', sans-serif"
              : "Georgia, 'Times New Roman', serif",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1a1a1a";
            e.currentTarget.style.color = "#faf8f2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#1a1a1a";
          }}
        >
          <span>{t.cta}</span>
          <ArrowRight
            size={16}
            className={`transition-transform duration-300 group-hover:translate-x-1 ${
              isRTL ? "rotate-180 group-hover:-translate-x-1" : ""
            }`}
          />
        </button>

        {/* Hanko seal */}
        <div
          className="hanko-seal absolute"
          style={{
            bottom: "12%",
            [isRTL ? "left" : "right"]: "8%",
            width: 48,
            height: 48,
            backgroundColor: "#dc2626",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            boxShadow: "1px 2px 6px rgba(220,38,38,0.25)",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: "1.3rem",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {t.sealChar}
          </span>
        </div>
      </div>
    </section>
  );
}
