"use client";

/**
 * Personal Pixel Hero
 * Pixel art style avatar/portrait area, 8-bit aesthetic, retro gaming UI for content.
 * Fun, geeky. Cyan/blue on dark retro palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    handle: "PLAYER_1",
    name: "Faisal Dev",
    title: "Game Developer & Creative Coder",
    bio: "Turning pixels into experiences since 2018. I build games, creative coding experiments, and interactive websites that make people smile.",
    cta: "Press Start",
    ctaSecondary: "View High Scores",
    stats: [
      { label: "LVL", value: "42" },
      { label: "XP", value: "9,001" },
      { label: "QUESTS", value: "87" },
    ],
    skills: ["Unity", "Three.js", "WebGL", "React", "Rust"],
    statusBar: "HP",
  },
  ar: {
    handle: "اللاعب_١",
    name: "فيصل ديف",
    title: "مطور ألعاب ومبرمج إبداعي",
    bio: "أحوّل البكسلات إلى تجارب منذ ٢٠١٨. أبني ألعاب، تجارب برمجة إبداعية، ومواقع تفاعلية تجعل الناس يبتسمون.",
    cta: "ابدأ اللعب",
    ctaSecondary: "عرض الإنجازات",
    stats: [
      { label: "المستوى", value: "٤٢" },
      { label: "الخبرة", value: "٩٠٠١" },
      { label: "المهام", value: "٨٧" },
    ],
    skills: ["Unity", "Three.js", "WebGL", "React", "Rust"],
    statusBar: "الطاقة",
  },
};

export function PersonalPixel({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  // Simple pixel art avatar (8x8 grid pattern)
  const pixelAvatar = [
    [0,0,1,1,1,1,0,0],
    [0,1,2,2,2,2,1,0],
    [1,2,3,2,2,3,2,1],
    [1,2,2,2,2,2,2,1],
    [0,1,2,4,4,2,1,0],
    [0,0,1,1,1,1,0,0],
    [0,1,5,5,5,5,1,0],
    [0,1,5,5,5,5,1,0],
  ];

  const pixelColors: Record<number, string> = {
    0: "transparent",
    1: "#164e63",
    2: "#f5d6a0",
    3: "#22d3ee",
    4: "#0891b2",
    5: "#06b6d4",
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pixelBuild {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes blink8bit {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes hpFill {
          from { width: 0%; }
          to { width: 85%; }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes starCollect {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .pixel-build { animation: pixelBuild 0.3s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0c1222", fontFamily: "'Courier New', monospace" }}
      >
        {/* Scanline effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)",
          }}
        />

        {/* CRT vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            {/* Pixel art side */}
            <div className={`flex justify-center ${isAr ? "lg:order-2" : ""}`}>
              <div className="text-center">
                {/* Player handle */}
                <div
                  className="fade-up inline-block px-4 py-1 mb-6 text-xs font-bold tracking-wider"
                  style={{
                    animationDelay: "0.1s",
                    color: "#22d3ee",
                    border: "2px solid #22d3ee",
                    imageRendering: "pixelated",
                  }}
                >
                  {t.handle}
                </div>

                {/* Pixel avatar */}
                <div className="inline-grid gap-0" style={{ imageRendering: "pixelated" }}>
                  {pixelAvatar.map((row, y) => (
                    <div key={y} className="flex gap-0">
                      {row.map((pixel, x) => (
                        <div
                          key={`${y}-${x}`}
                          className={pixel > 0 ? "pixel-build" : ""}
                          style={{
                            width: "20px",
                            height: "20px",
                            background: pixelColors[pixel],
                            animationDelay: pixel > 0 ? `${0.2 + (y * 8 + x) * 0.01}s` : undefined,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* HP bar */}
                <div className="fade-up mt-6 max-w-[160px] mx-auto" style={{ animationDelay: "0.8s" }}>
                  <div className={`flex items-center gap-2 mb-1 ${isAr ? "flex-row-reverse" : ""}`}>
                    <span className="text-[10px] font-bold text-cyan-400">{t.statusBar}</span>
                    <span className="text-[10px] text-cyan-600">85/100</span>
                  </div>
                  <div className="h-3 bg-gray-800 border border-cyan-800">
                    <div
                      className="h-full"
                      style={{
                        background: "linear-gradient(90deg, #22d3ee, #06b6d4)",
                        animation: "hpFill 1.5s cubic-bezier(0.22, 1, 0.36, 1) 1s both",
                      }}
                    />
                  </div>
                </div>

                {/* Stats row */}
                <div className="fade-up mt-4 flex justify-center gap-6" style={{ animationDelay: "0.9s" }}>
                  {t.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-cyan-300" style={{ fontFamily: "'Courier New', monospace" }}>
                        {stat.value}
                      </div>
                      <div className="text-[9px] text-cyan-600 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className={isAr ? "lg:order-1 text-right" : ""}>
              <h1
                className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.3s", fontFamily: "'Courier New', monospace" }}
              >
                {t.name}
                <span
                  className="inline-block w-3 h-6 ml-1 bg-cyan-400 align-middle"
                  style={{ animation: "cursorBlink 1s step-end infinite" }}
                />
              </h1>

              <p
                className="fade-up mt-2 text-sm sm:text-base font-bold text-cyan-400"
                style={{ animationDelay: "0.4s", fontFamily: "'Courier New', monospace" }}
              >
                &gt; {t.title}
              </p>

              <div
                className={`fade-up mt-4 h-0.5 w-16 ${isAr ? "ml-auto" : ""}`}
                style={{ animationDelay: "0.45s", background: "#22d3ee" }}
              />

              <p
                className="fade-up mt-5 text-gray-400 leading-relaxed max-w-md text-sm"
                style={{ animationDelay: "0.5s", fontFamily: "'Courier New', monospace" }}
              >
                {t.bio}
              </p>

              {/* Skills as pixel badges */}
              <div className={`fade-up mt-6 flex flex-wrap gap-2 ${isAr ? "justify-end" : ""}`} style={{ animationDelay: "0.6s" }}>
                {t.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider"
                    style={{
                      color: "#22d3ee",
                      background: "rgba(6, 182, 212, 0.1)",
                      border: "1px solid rgba(6, 182, 212, 0.2)",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.7s" }}>
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-black transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "#22d3ee",
                    boxShadow: "4px 4px 0 #0891b2",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {t.cta}
                  <ArrowRight size={14} className={isAr ? "rotate-180" : ""} />
                </a>
                <a
                  href="#"
                  className="px-6 py-3 text-sm font-bold text-cyan-400 transition-all hover:-translate-y-1"
                  style={{
                    border: "2px solid #22d3ee",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
