"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Light Up", "The Night"],
    sub: "Electrifying designs that glow in the dark. Your brand, illuminated with neon brilliance.",
    cta: "Explore Work",
    cta2: "Contact Us",
  },
  ar: {
    heading: ["\u0623\u0636\u0626", "\u0627\u0644\u0644\u064a\u0644"],
    sub: "\u062a\u0635\u0627\u0645\u064a\u0645 \u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 \u062a\u062a\u0648\u0647\u062c \u0641\u064a \u0627\u0644\u0638\u0644\u0627\u0645. \u0639\u0644\u0627\u0645\u062a\u0643 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0645\u0636\u064a\u0626\u0629 \u0628\u0628\u0631\u064a\u0642 \u0627\u0644\u0646\u064a\u0648\u0646.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  },
};

const NEON_SHAPES = [
  // Circle top-left
  { type: "circle", x: "8%", y: "12%", size: 120, color: "#ff2d7b", delay: 0 },
  // Triangle top-right
  { type: "triangle", x: "75%", y: "8%", size: 100, color: "#00e5ff", delay: 0.3 },
  // Diamond mid-left
  { type: "diamond", x: "5%", y: "55%", size: 80, color: "#ffe600", delay: 0.15 },
  // Cross mid-right
  { type: "cross", x: "85%", y: "45%", size: 70, color: "#00e676", delay: 0.4 },
  // Circle bottom-left
  { type: "circle", x: "15%", y: "80%", size: 90, color: "#7c3aed", delay: 0.2 },
  // Zigzag bottom-right
  { type: "zigzag", x: "78%", y: "78%", size: 110, color: "#ff6b00", delay: 0.35 },
  // Small circle top-center
  { type: "circle", x: "45%", y: "5%", size: 50, color: "#ff2d7b", delay: 0.5 },
  // Small diamond bottom-center
  { type: "diamond", x: "50%", y: "90%", size: 60, color: "#00e5ff", delay: 0.45 },
];

function NeonShape({ type, size, color }: { type: string; size: number; color: string }) {
  const glow = `0 0 8px ${color}, 0 0 20px ${color}, 0 0 40px ${color}80`;
  const style: React.CSSProperties = {
    filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 15px ${color}80)`,
  };

  if (type === "circle") {
    return (
      <div style={{ width: size, height: size, ...style }}>
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          border: `2px solid ${color}`, boxShadow: glow,
        }} />
      </div>
    );
  }
  if (type === "triangle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
        <polygon points="50,5 95,90 5,90" fill="none" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  if (type === "diamond") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
        <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  if (type === "cross") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
        <line x1="50" y1="10" x2="50" y2="90" stroke={color} strokeWidth="2" />
        <line x1="10" y1="50" x2="90" y2="50" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  // zigzag
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 100 50" style={style}>
      <polyline points="5,40 20,10 35,40 50,10 65,40 80,10 95,40" fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function CreativeNeon({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 24%, 55% { opacity: 0.6; }
        }
        @keyframes neonPulse {
          0%, 100% { filter: drop-shadow(0 0 6px var(--neon-color)) drop-shadow(0 0 15px var(--neon-color)); }
          50%      { filter: drop-shadow(0 0 10px var(--neon-color)) drop-shadow(0 0 30px var(--neon-color)) drop-shadow(0 0 50px var(--neon-color)); }
        }
        @keyframes neonFadeIn {
          from { opacity: 0; filter: blur(10px); }
          to   { opacity: 1; filter: blur(0); }
        }
        @keyframes neonTextGlow {
          0%, 100% { text-shadow: 0 0 10px var(--neon-color), 0 0 20px var(--neon-color), 0 0 40px var(--neon-color), 0 0 80px var(--neon-color); }
          50%      { text-shadow: 0 0 5px var(--neon-color), 0 0 10px var(--neon-color), 0 0 20px var(--neon-color), 0 0 40px var(--neon-color); }
        }
        @keyframes neonLineGrow {
          from { stroke-dashoffset: 300; }
          to   { stroke-dashoffset: 0; }
        }
        .neon-shape {
          animation: neonFadeIn 0.5s ease both, neonPulse 3s ease-in-out infinite;
        }
        .neon-flicker {
          animation: neonFlicker 4s ease-in-out infinite;
        }
        .neon-heading {
          animation: neonFadeIn 0.8s ease 0.3s both, neonTextGlow 3s ease-in-out infinite;
        }
        .neon-content {
          animation: neonFadeIn 0.6s ease both;
        }
        .neon-line {
          stroke-dasharray: 300;
          animation: neonLineGrow 1.5s ease both;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{ backgroundColor: "#0a0a0f" }}
      >
        {/* Subtle brick texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px
          )`,
        }} />

        {/* Ambient glow spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,45,123,0.08) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)" }} />

        {/* Neon decorative shapes */}
        {NEON_SHAPES.map((shape, i) => (
          <div
            key={i}
            className="neon-shape neon-flicker absolute pointer-events-none"
            style={{
              left: shape.x,
              top: shape.y,
              animationDelay: `${shape.delay}s`,
              "--neon-color": shape.color,
            } as React.CSSProperties}
          >
            <NeonShape type={shape.type} size={shape.size} color={shape.color} />
          </div>
        ))}

        {/* Neon connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
          <line className="neon-line" x1="10%" y1="20%" x2="40%" y2="10%" stroke="#ff2d7b" strokeWidth="1" style={{ animationDelay: "0.5s" }} />
          <line className="neon-line" x1="80%" y1="15%" x2="90%" y2="50%" stroke="#00e5ff" strokeWidth="1" style={{ animationDelay: "0.7s" }} />
          <line className="neon-line" x1="10%" y1="60%" x2="20%" y2="85%" stroke="#ffe600" strokeWidth="1" style={{ animationDelay: "0.9s" }} />
          <line className="neon-line" x1="85%" y1="80%" x2="55%" y2="95%" stroke="#ff6b00" strokeWidth="1" style={{ animationDelay: "1.1s" }} />
        </svg>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="neon-heading text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tight"
            style={{ "--neon-color": "#ff2d7b", color: "#fff" } as React.CSSProperties}
          >
            <span className="block" style={{
              textShadow: "0 0 10px #ff2d7b, 0 0 20px #ff2d7b, 0 0 40px #ff2d7b80, 0 0 80px #ff2d7b40",
            }}>
              {t.heading[0]}
            </span>
            <span className="block mt-1" style={{
              textShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 40px #00e5ff80, 0 0 80px #00e5ff40",
              color: "#00e5ff",
            }}>
              {t.heading[1]}
            </span>
          </h1>

          <p className="neon-content mt-8 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", animationDelay: "0.8s" }}>
            {t.sub}
          </p>

          <div className={`neon-content mt-10 flex items-center justify-center gap-5 flex-wrap ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "1s" }}>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                color: "#ff2d7b",
                border: "2px solid #ff2d7b",
                boxShadow: "0 0 10px #ff2d7b, 0 0 20px #ff2d7b40, inset 0 0 10px #ff2d7b20",
                backgroundColor: "rgba(255,45,123,0.05)",
              }}
            >
              {t.cta}
              <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
            </a>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-sm ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                color: "#00e5ff",
                border: "2px solid #00e5ff",
                boxShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff40, inset 0 0 10px #00e5ff20",
                backgroundColor: "rgba(0,229,255,0.05)",
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
