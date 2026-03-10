"use client";

/**
 * Confetti Explosion Hero
 * Confetti particles bursting from center with celebration energy.
 * Party/launch moment with colorful animated pieces, streamers,
 * and celebration typography.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Celebrate With Us",
    heading: "Let's",
    headingHighlight: "Celebrate!",
    subheading:
      "Something amazing is happening. Join thousands of people in the biggest celebration of the year.",
    ctaPrimary: "Join the Party",
    ctaSecondary: "See Details",
    announcement: "LAUNCHING MARCH 15",
    features: ["Live Music", "Food & Drinks", "Prizes", "Networking"],
  },
  ar: {
    badge: "احتفل معنا",
    heading: "لنحتفل",
    headingHighlight: "معاً!",
    subheading:
      "شيء مذهل يحدث. انضم إلى آلاف الأشخاص في أكبر احتفال لهذا العام.",
    ctaPrimary: "انضم للحفلة",
    ctaSecondary: "التفاصيل",
    announcement: "الإطلاق 15 مارس",
    features: ["موسيقى حية", "طعام ومشروبات", "جوائز", "تواصل"],
  },
};

/* Generate deterministic confetti pieces */
function getConfetti() {
  const pieces: { x: number; y: number; size: number; color: string; delay: number; duration: number; rotation: number; dx: number; dy: number; shape: string }[] = [];
  const colors = ["rgba(239,68,68,", "rgba(249,115,22,", "rgba(245,158,11,", "rgba(234,179,8,", "rgba(236,72,153,", "rgba(168,85,247,"];
  const shapes = ["rect", "circle", "triangle"];
  for (let i = 0; i < 40; i++) {
    const seed = i * 137.508;
    pieces.push({
      x: 50 + ((seed * 7.3) % 80 - 40),
      y: 50 + ((seed * 3.1) % 60 - 30),
      size: 4 + (i % 4) * 2,
      color: colors[i % colors.length] + `${0.4 + (i % 4) * 0.15})`,
      delay: (i * 0.08) % 2,
      duration: 3 + (i % 5),
      rotation: (i * 47) % 360,
      dx: ((seed * 2.3) % 200) - 100,
      dy: ((seed * 1.7) % 200) - 100,
      shape: shapes[i % 3],
    });
  }
  return pieces;
}

const confetti = getConfetti();

export function EventConfetti({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes confettiBurst {
          0% { transform: translate(0, 0) rotate(0deg) scale(0); opacity: 0; }
          20% { opacity: 1; transform: translate(calc(var(--dx) * 0.3), calc(var(--dy) * 0.3)) rotate(calc(var(--rot) * 0.5)) scale(1.2); }
          100% { opacity: 0; transform: translate(var(--dx), calc(var(--dy) + 100px)) rotate(var(--rot)) scale(0.5); }
        }
        @keyframes celebratePop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0505]">
        {/* Center burst glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(239,68,68,0.1) 40%, transparent 70%)" }} />

        {/* Confetti particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confetti.map((piece, i) => (
            <div key={i} className="absolute"
              style={{
                left: `${piece.x}%`,
                top: `${piece.y}%`,
                width: `${piece.size}px`,
                height: piece.shape === "circle" ? `${piece.size}px` : `${piece.size * 1.5}px`,
                background: piece.shape !== "triangle" ? piece.color : "none",
                borderRadius: piece.shape === "circle" ? "50%" : piece.shape === "rect" ? "1px" : "0",
                borderLeft: piece.shape === "triangle" ? `${piece.size / 2}px solid transparent` : "none",
                borderRight: piece.shape === "triangle" ? `${piece.size / 2}px solid transparent` : "none",
                borderBottom: piece.shape === "triangle" ? `${piece.size}px solid ${piece.color}` : "none",
                // @ts-expect-error CSS custom properties
                "--dx": `${piece.dx}px`,
                "--dy": `${piece.dy}px`,
                "--rot": `${piece.rotation}deg`,
                animation: `confettiBurst ${piece.duration}s ease-out ${piece.delay}s infinite`,
              }} />
          ))}
        </div>

        {/* Sparkle dots */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const r = 25 + (i % 3) * 10;
          return (
            <div key={`sparkle-${i}`} className="absolute w-2 h-2 rounded-full bg-yellow-400/60"
              style={{
                left: `${50 + Math.cos(angle) * r}%`,
                top: `${50 + Math.sin(angle) * r}%`,
                animation: `sparkle ${1.5 + i * 0.2}s ease-in-out ${i * 0.3}s infinite`,
              }} />
          );
        })}

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6"
              style={{ animation: "celebratePop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            {/* Announcement banner */}
            <div className="fade-up mb-6" style={{ animationDelay: "0.4s" }}>
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-red-500/20 text-sm font-bold text-orange-300 tracking-wider">
                {t.announcement}
              </span>
            </div>

            <p className="fade-up text-lg text-white/35 max-w-xl mx-auto leading-relaxed mb-10"
              style={{ animationDelay: "0.5s" }}>
              {t.subheading}
            </p>

            <div className="fade-up flex items-center justify-center gap-4 mb-12"
              style={{ animationDelay: "0.6s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>

            {/* Features */}
            <div className="fade-up flex items-center justify-center gap-6 flex-wrap"
              style={{ animationDelay: "0.8s" }}>
              {t.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
