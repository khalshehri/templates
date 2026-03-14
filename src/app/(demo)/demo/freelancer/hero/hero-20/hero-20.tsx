"use client";

import { ArrowRight, Gamepad2, Trophy, Swords, Heart, Shield } from "lucide-react";

const content = {
  en: {
    player: "PLAYER 01",
    level: "LEVEL 42",
    levelTitle: "SENIOR FREELANCER",
    xpLabel: "XP",
    xpValue: "15,000 / 20,000",
    characterClass: "CLASS: Full-Stack Mage",
    guild: "GUILD: Freelancers United",
    statsTitle: "STATS",
    stats: [
      { label: "STR", desc: "Frontend", value: 85, color: "#22c55e" },
      { label: "INT", desc: "Backend", value: 75, color: "#3b82f6" },
      { label: "DEX", desc: "Design", value: 80, color: "#f59e0b" },
      { label: "WIS", desc: "Strategy", value: 65, color: "#22c55e" },
      { label: "CHA", desc: "Client Mgmt", value: 95, color: "#3b82f6" },
    ],
    achievements: [
      { icon: "trophy", text: "100 QUESTS COMPLETED" },
      { icon: "swords", text: "BOSS LEVEL CLIENTS" },
      { icon: "shield", text: "ZERO BUGS SHIPPED" },
      { icon: "gamepad", text: "PIXEL PERFECT" },
    ],
    insertCoin: "INSERT COIN TO START",
    ctaPrimary: "START GAME",
    ctaSecondary: "VIEW HIGH SCORES",
    subtext: "Press any button... or just click above",
  },
  ar: {
    player: "اللاعب 01",
    level: "المستوى 42",
    levelTitle: "مستقل أول",
    xpLabel: "XP",
    xpValue: "15,000 / 20,000",
    characterClass: "الفئة: ساحر فُل ستاك",
    guild: "النقابة: اتحاد المستقلين",
    statsTitle: "الإحصائيات",
    stats: [
      { label: "STR", desc: "الواجهة الأمامية", value: 85, color: "#22c55e" },
      { label: "INT", desc: "الواجهة الخلفية", value: 75, color: "#3b82f6" },
      { label: "DEX", desc: "التصميم", value: 80, color: "#f59e0b" },
      { label: "WIS", desc: "الاستراتيجية", value: 65, color: "#22c55e" },
      { label: "CHA", desc: "إدارة العملاء", value: 95, color: "#3b82f6" },
    ],
    achievements: [
      { icon: "trophy", text: "100 مهمة مكتملة" },
      { icon: "swords", text: "عملاء مستوى الزعيم" },
      { icon: "shield", text: "صفر أخطاء" },
      { icon: "gamepad", text: "دقة البكسل" },
    ],
    insertCoin: "أدخل عملة للبدء",
    ctaPrimary: "ابدأ اللعبة",
    ctaSecondary: "عرض أعلى النتائج",
    subtext: "اضغط أي زر... أو فقط انقر أعلاه",
  },
};

function AchievementIcon({ icon }: { icon: string }) {
  const props = { size: 20, className: "text-[#00ff41]" };
  switch (icon) {
    case "trophy":
      return <Trophy {...props} />;
    case "swords":
      return <Swords {...props} />;
    case "shield":
      return <Shield {...props} />;
    case "gamepad":
      return <Gamepad2 {...props} />;
    default:
      return null;
  }
}

// Pixel art character: 8x8 grid
const pixelArt = [
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 2, 2, 2, 2, 1, 0],
  [1, 2, 3, 2, 2, 3, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [0, 1, 2, 4, 4, 2, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 5, 1, 1, 5, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 0],
];

const pixelColors: Record<number, string> = {
  0: "transparent",
  1: "#16213e",
  2: "#00ff41",
  3: "#ffffff",
  4: "#ff6600",
  5: "#3b82f6",
};

export function Hero20({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const dir = isAr ? "rtl" : "ltr";

  return (
    <section
      dir={dir}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#1a1a2e",
        fontFamily: fontBody,
      }}
    >
      <style>{`
        @keyframes xpFill {
          from { width: 0%; }
          to { width: 75%; }
        }
        @keyframes statBar0 {
          from { width: 0%; }
          to { width: 85%; }
        }
        @keyframes statBar1 {
          from { width: 0%; }
          to { width: 75%; }
        }
        @keyframes statBar2 {
          from { width: 0%; }
          to { width: 80%; }
        }
        @keyframes statBar3 {
          from { width: 0%; }
          to { width: 65%; }
        }
        @keyframes statBar4 {
          from { width: 0%; }
          to { width: 95%; }
        }
        @keyframes insertCoin {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes achievementPop0 {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes achievementPop1 {
          0%, 15% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes achievementPop2 {
          0%, 30% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes achievementPop3 {
          0%, 45% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes scanline {
          0% { top: -4px; }
          100% { top: 100%; }
        }
        @keyframes pixelFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(0, 255, 65, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.6); }
        }
        @media (prefers-reduced-motion: reduce) {
          .retro-xp-bar,
          .retro-stat-bar,
          .retro-insert-coin,
          .retro-achievement,
          .retro-scanline,
          .retro-pixel-fade,
          .retro-glow {
            animation: none !important;
          }
          .retro-xp-bar { width: 75% !important; }
          .retro-stat-bar-0 { width: 85% !important; }
          .retro-stat-bar-1 { width: 75% !important; }
          .retro-stat-bar-2 { width: 80% !important; }
          .retro-stat-bar-3 { width: 65% !important; }
          .retro-stat-bar-4 { width: 95% !important; }
          .retro-insert-coin { opacity: 1 !important; }
          .retro-achievement { transform: scale(1) !important; opacity: 1 !important; }
        }
      `}</style>

      {/* Pixel Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* CRT Scanline */}
      <div
        className="retro-scanline absolute pointer-events-none"
        style={{
          left: 0,
          right: 0,
          height: "4px",
          background:
            "linear-gradient(180deg, transparent, rgba(0,255,65,0.06), transparent)",
          animation: "scanline 4s linear infinite",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* ===== TOP HUD BAR ===== */}
        <div
          className="retro-pixel-fade"
          style={{
            border: "2px solid #00ff41",
            background: "rgba(22, 33, 62, 0.8)",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            boxShadow:
              "4px 0 0 #00ff41, -4px 0 0 #00ff41, 0 4px 0 #00ff41, 0 -4px 0 #00ff41, 0 0 20px rgba(0,255,65,0.15)",
            animation: "pixelFade 0.6s steps(1) forwards",
            fontFamily: "monospace",
          }}
        >
          {/* Player + Hearts */}
          <div className="flex items-center gap-3">
            <span
              style={{
                color: "#00ff41",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              {t.player}
            </span>
            <div className="flex gap-1">
              <Heart size={16} fill="#ff6600" color="#ff6600" />
              <Heart size={16} fill="#ff6600" color="#ff6600" />
              <Heart size={16} fill="#ff6600" color="#ff6600" />
            </div>
          </div>

          {/* Level */}
          <div className="text-center">
            <span
              style={{
                color: "#f59e0b",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              {t.level}
            </span>
            <span style={{ color: "rgba(255,255,255,0.5)", margin: "0 8px" }}>
              {" "}
              —{" "}
            </span>
            <span
              style={{
                color: "#00ff41",
                fontSize: "13px",
                letterSpacing: "1px",
              }}
            >
              {t.levelTitle}
            </span>
          </div>

          {/* XP Bar */}
          <div className="flex items-center gap-3">
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "12px",
                letterSpacing: "1px",
              }}
            >
              {t.xpLabel}: {t.xpValue}
            </span>
            <div
              style={{
                width: "120px",
                height: "12px",
                background: "#16213e",
                border: "2px solid #00ff41",
                position: "relative",
              }}
            >
              <div
                className="retro-xp-bar"
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #00ff41, #22c55e)",
                  animation: "xpFill 1.5s ease-out forwards",
                  width: 0,
                }}
              />
            </div>
          </div>
        </div>

        {/* ===== MAIN CONTENT — CHARACTER SELECT ===== */}
        <div
          className="retro-pixel-fade"
          style={{
            marginTop: "24px",
            border: "2px solid #16213e",
            background: "rgba(22, 33, 62, 0.5)",
            padding: "32px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            animation: "pixelFade 0.6s steps(1) 0.3s both",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "40px",
              alignItems: "start",
            }}
            className="max-md:!grid-cols-1 max-md:!gap-6"
          >
            {/* LEFT — Character Avatar */}
            <div
              className="flex flex-col items-center gap-4"
              style={{ fontFamily: "monospace" }}
            >
              {/* Pixel Art Avatar */}
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  border: "3px solid #00ff41",
                  background: "#0a0a1a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "4px 0 0 #16213e, -4px 0 0 #16213e, 0 4px 0 #16213e, 0 -4px 0 #16213e, inset 0 0 40px rgba(0,255,65,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Pixel character grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(8, 18px)",
                    gridTemplateRows: "repeat(8, 18px)",
                    gap: "2px",
                  }}
                >
                  {pixelArt.flat().map((colorKey, i) => (
                    <div
                      key={i}
                      className="retro-pixel-fade"
                      style={{
                        width: "18px",
                        height: "18px",
                        background: pixelColors[colorKey],
                        animation: `pixelFade 0.1s steps(1) ${0.5 + i * 0.02}s both`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Class & Guild */}
              <div className="text-center space-y-1">
                <div
                  style={{
                    color: "#00ff41",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    fontWeight: 700,
                  }}
                >
                  {t.characterClass}
                </div>
                <div
                  style={{
                    color: "#ff6600",
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  {t.guild}
                </div>
              </div>
            </div>

            {/* RIGHT — Stats & Skills */}
            <div>
              <h2
                className="retro-pixel-fade"
                style={{
                  fontFamily: fontHeading,
                  color: "#00ff41",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  marginBottom: "20px",
                  borderBottom: "2px solid #16213e",
                  paddingBottom: "8px",
                  animation: "pixelFade 0.4s steps(1) 0.6s both",
                }}
              >
                {t.statsTitle}
              </h2>

              <div className="space-y-4">
                {t.stats.map((stat, i) => (
                  <div key={stat.label}>
                    {/* Stat label */}
                    <div
                      className="flex items-center justify-between mb-1"
                      style={{
                        fontFamily: "monospace",
                        fontSize: "13px",
                        letterSpacing: "1px",
                      }}
                    >
                      <span>
                        <span style={{ color: stat.color, fontWeight: 700 }}>
                          {stat.label}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>
                          {" "}
                          ({stat.desc})
                        </span>
                      </span>
                      <span style={{ color: stat.color, fontWeight: 700 }}>
                        {stat.value}%
                      </span>
                    </div>

                    {/* Stat bar */}
                    <div
                      style={{
                        width: "100%",
                        height: "16px",
                        background: "#0a0a1a",
                        border: "2px solid #16213e",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className={`retro-stat-bar retro-stat-bar-${i}`}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${stat.color}, ${stat.color}cc)`,
                          width: 0,
                          animation: `statBar${i} 1s ease-out ${0.8 + i * 0.2}s forwards`,
                          boxShadow: `0 0 8px ${stat.color}40`,
                        }}
                      />
                      {/* Block overlay for pixel feel */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(26,26,46,0.4) 8px, rgba(26,26,46,0.4) 10px)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== ACHIEVEMENT BADGES ===== */}
        <div
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
          className="max-sm:!grid-cols-2"
        >
          {t.achievements.map((ach, i) => (
            <div
              key={i}
              className={`retro-achievement retro-glow cursor-pointer`}
              style={{
                border: "2px solid #16213e",
                background: "rgba(22, 33, 62, 0.6)",
                padding: "16px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                textAlign: "center",
                animation: `achievementPop${i} 0.6s ease-out ${1.5 + i * 0.15}s both, glowPulse 2s ease-in-out ${i * 0.5}s infinite`,
                transition: "border-color 0.3s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#00ff41";
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#16213e";
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
              }}
            >
              <AchievementIcon icon={ach.icon} />
              <span
                style={{
                  color: "#00ff41",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  fontFamily: "monospace",
                  lineHeight: 1.4,
                }}
              >
                {ach.text}
              </span>
            </div>
          ))}
        </div>

        {/* ===== BOTTOM — INSERT COIN + CTAs ===== */}
        <div
          className="retro-pixel-fade"
          style={{
            marginTop: "32px",
            textAlign: "center",
            animation: "pixelFade 0.6s steps(1) 2s both",
          }}
        >
          {/* Insert Coin Blink */}
          <div
            className="retro-insert-coin"
            style={{
              color: "#f59e0b",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "4px",
              fontFamily: "monospace",
              animation: "insertCoin 1.2s steps(1) infinite",
              marginBottom: "24px",
            }}
          >
            {t.insertCoin}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex items-center justify-center gap-4 flex-wrap"
            style={{ fontFamily: "monospace" }}
          >
            <button
              className="cursor-pointer"
              style={{
                background: "#00ff41",
                color: "#0a0a1a",
                border: "none",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "3px",
                fontFamily: "monospace",
                boxShadow:
                  "4px 0 0 #16213e, -4px 0 0 #16213e, 0 4px 0 #16213e, 0 -4px 0 #16213e, 0 0 20px rgba(0,255,65,0.3)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1.05)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "4px 0 0 #16213e, -4px 0 0 #16213e, 0 4px 0 #16213e, 0 -4px 0 #16213e, 0 0 30px rgba(0,255,65,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "4px 0 0 #16213e, -4px 0 0 #16213e, 0 4px 0 #16213e, 0 -4px 0 #16213e, 0 0 20px rgba(0,255,65,0.3)";
              }}
            >
              {t.ctaPrimary}
              <ArrowRight
                size={16}
                className={`inline-block ${isAr ? "mr-2 rotate-180" : "ml-2"}`}
              />
            </button>

            <button
              className="cursor-pointer"
              style={{
                background: "transparent",
                color: "#ff6600",
                border: "2px solid #ff6600",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2px",
                fontFamily: "monospace",
                boxShadow: "0 0 10px rgba(255,102,0,0.15)",
                transition: "transform 0.15s, background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1.05)";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#ff6600";
                (e.currentTarget as HTMLButtonElement).style.color = "#0a0a1a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1)";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#ff6600";
              }}
            >
              {t.ctaSecondary}
            </button>
          </div>

          {/* Subtext */}
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "12px",
              marginTop: "16px",
              letterSpacing: "1px",
              fontFamily: "monospace",
            }}
          >
            {t.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
