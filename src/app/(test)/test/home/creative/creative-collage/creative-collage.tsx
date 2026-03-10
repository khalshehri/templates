"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Cut &", "Paste"],
    sub: "Like a magazine spread ripped apart and reassembled. Raw, tactile, unforgettable design.",
    cta: "Explore Work",
    cta2: "Contact Us",
  },
  ar: {
    heading: ["\u0642\u0635\u0651 \u0648", "\u0627\u0644\u0635\u0642"],
    sub: "\u0643\u0645\u062c\u0644\u0629 \u0645\u0645\u0632\u0642\u0629 \u0623\u064f\u0639\u064a\u062f \u062a\u062c\u0645\u064a\u0639\u0647\u0627. \u062a\u0635\u0645\u064a\u0645 \u062e\u0627\u0645\u060c \u0645\u0644\u0645\u0648\u0633\u060c \u0644\u0627 \u064a\u064f\u0646\u0633\u0649.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  },
};

const FRAMES = [
  // Large frames
  { x: "2%",  y: "5%",  w: 280, h: 200, rot: -5,  bg: "#ff2d7b", z: 2, delay: 0 },
  { x: "55%", y: "3%",  w: 300, h: 180, rot: 3,   bg: "#ffe600", z: 1, delay: 0.1 },
  { x: "10%", y: "60%", w: 250, h: 220, rot: 4,   bg: "#0055ff", z: 3, delay: 0.15 },
  { x: "60%", y: "55%", w: 320, h: 190, rot: -3,  bg: "#00e676", z: 2, delay: 0.2 },
  // Medium frames
  { x: "35%", y: "20%", w: 200, h: 160, rot: 7,   bg: "#7c3aed", z: 4, delay: 0.08 },
  { x: "70%", y: "35%", w: 180, h: 240, rot: -6,  bg: "#ff6b00", z: 3, delay: 0.25 },
  { x: "0%",  y: "35%", w: 190, h: 170, rot: 2,   bg: "#00e5ff", z: 2, delay: 0.12 },
  // Small accent frames
  { x: "45%", y: "75%", w: 140, h: 120, rot: -8,  bg: "#ff2d7b", z: 5, delay: 0.3 },
  { x: "80%", y: "8%",  w: 120, h: 140, rot: 5,   bg: "#7c3aed", z: 1, delay: 0.18 },
  { x: "25%", y: "80%", w: 160, h: 100, rot: -4,  bg: "#ffe600", z: 2, delay: 0.22 },
  { x: "85%", y: "75%", w: 130, h: 150, rot: 6,   bg: "#0055ff", z: 1, delay: 0.28 },
];

export function CreativeCollage({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes collageDrop {
          0%   { opacity: 0; transform: rotate(var(--fr)) scale(0.3) translateY(-100px); }
          70%  { opacity: 1; transform: rotate(var(--fr)) scale(1.05) translateY(5px); }
          100% { opacity: 0.9; transform: rotate(var(--fr)) scale(1) translateY(0); }
        }
        @keyframes collageFloat {
          0%, 100% { transform: rotate(var(--fr)) translateY(0); }
          50%      { transform: rotate(calc(var(--fr) + 0.5deg)) translateY(-5px); }
        }
        @keyframes collageTextSlam {
          0%   { opacity: 0; transform: scale(2) rotate(-5deg); filter: blur(10px); }
          60%  { opacity: 1; transform: scale(0.95) rotate(1deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }
        }
        @keyframes collageFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tapeWiggle {
          0%, 100% { transform: rotate(var(--tape-rot)); }
          50%      { transform: rotate(calc(var(--tape-rot) + 2deg)); }
        }
        .collage-frame {
          animation: collageDrop 0.7s cubic-bezier(0.22, 1, 0.36, 1) both,
                     collageFloat 5s ease-in-out 1s infinite;
        }
        .collage-text {
          animation: collageTextSlam 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
        }
        .collage-fade {
          animation: collageFade 0.6s ease both;
        }
        .tape-piece {
          animation: tapeWiggle 4s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{ backgroundColor: "#f0ebe3" }}
      >
        {/* Paper texture background */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />

        {/* Magazine collage frames */}
        {FRAMES.map((frame, i) => (
          <div
            key={i}
            className="collage-frame absolute"
            style={{
              left: frame.x,
              top: frame.y,
              width: frame.w,
              height: frame.h,
              backgroundColor: frame.bg,
              zIndex: frame.z,
              animationDelay: `${frame.delay}s`,
              "--fr": `${frame.rot}deg`,
              boxShadow: "4px 6px 20px rgba(0,0,0,0.15), 1px 1px 0 rgba(0,0,0,0.05)",
            } as React.CSSProperties}
          >
            {/* Frame inner border (magazine look) */}
            <div className="absolute inset-2 border border-white/20" />
            {/* Diagonal line decoration inside some frames */}
            {i % 3 === 0 && (
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 left-0 right-0 bottom-0" style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 9px)",
                }} />
              </div>
            )}
          </div>
        ))}

        {/* Tape pieces */}
        {[
          { x: "15%", y: "18%", rot: 35, color: "rgba(255,255,200,0.6)" },
          { x: "68%", y: "12%", rot: -20, color: "rgba(255,255,200,0.6)" },
          { x: "22%", y: "72%", rot: 15, color: "rgba(255,220,200,0.5)" },
          { x: "75%", y: "65%", rot: -40, color: "rgba(255,255,200,0.6)" },
        ].map((tape, i) => (
          <div
            key={`tape-${i}`}
            className="tape-piece absolute pointer-events-none"
            style={{
              left: tape.x,
              top: tape.y,
              width: 80,
              height: 20,
              backgroundColor: tape.color,
              zIndex: 10,
              "--tape-rot": `${tape.rot}deg`,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            } as React.CSSProperties}
          />
        ))}

        {/* Central content card */}
        <div className="relative z-20 max-w-2xl mx-auto px-6">
          <div className="relative bg-white/90 backdrop-blur-sm p-8 sm:p-12" style={{
            boxShadow: "8px 10px 30px rgba(0,0,0,0.2)",
            transform: "rotate(-1deg)",
          }}>
            {/* Tape on top of content card */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5" style={{
              backgroundColor: "rgba(255,255,200,0.7)",
              transform: "rotate(2deg)",
              zIndex: 5,
            }} />

            <h1 className="collage-text text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight" style={{ color: "#1a1a1a" }}>
              <span className="block">{t.heading[0]}</span>
              <span className="block" style={{
                color: "#ff2d7b",
                textDecoration: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "#ffe600",
                textUnderlineOffset: "8px",
              }}>
                {t.heading[1]}
              </span>
            </h1>

            <p className="collage-fade mt-6 text-base sm:text-lg leading-relaxed font-serif italic" style={{ color: "#555", animationDelay: "0.8s" }}>
              {t.sub}
            </p>

            <div className={`collage-fade mt-8 flex items-center gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "1s" }}>
              <a
                href="#"
                className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  backgroundColor: "#ff2d7b",
                  transform: "rotate(1deg)",
                  boxShadow: "3px 3px 0 #000",
                }}
              >
                {t.cta}
                <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
              </a>
              <a
                href="#"
                className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  backgroundColor: "#ffe600",
                  color: "#1a1a1a",
                  transform: "rotate(-1deg)",
                  boxShadow: "3px 3px 0 #000",
                }}
              >
                {t.cta2}
              </a>
            </div>

            {/* Staple marks */}
            <div className="absolute top-4 left-4 w-4 h-1 rounded-full bg-gray-400/40" />
            <div className="absolute top-4 right-4 w-4 h-1 rounded-full bg-gray-400/40" />
          </div>
        </div>
      </section>
    </>
  );
}
