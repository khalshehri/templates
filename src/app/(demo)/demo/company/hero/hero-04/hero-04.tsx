"use client";

import { ArrowUpRight, Globe, Users, TrendingUp } from "lucide-react";

const content = {
  en: {
    badge: "Elevating Enterprise",
    heading1: "Building the",
    heading2: "Skyline of Innovation",
    sub: "From foundation to summit, we architect digital solutions that stand tall in any market landscape.",
    cta1: "Rise With Us",
    cta2: "Our Portfolio",
    stat1Label: "Revenue",
    stat1Value: "+47%",
    stat2Label: "Global Reach",
    stat2Value: "30 Countries",
    stat3Label: "Team",
    stat3Value: "2,400+",
  },
  ar: {
    badge: "نرتقي بالمؤسسات",
    heading1: "نبني أفق",
    heading2: "الابتكار",
    sub: "من الأساس إلى القمة، نصمم حلولاً رقمية تقف شامخة في أي بيئة سوقية.",
    cta1: "ارتقِ معنا",
    cta2: "أعمالنا",
    stat1Label: "الإيرادات",
    stat1Value: "+47%",
    stat2Label: "الانتشار العالمي",
    stat2Value: "30 دولة",
    stat3Label: "الفريق",
    stat3Value: "+2,400",
  },
};

// Deterministic window pattern: 5 columns x 12 rows = 60 windows
// Each window is lit or dim based on index pattern
function getWindowLit(col: number, row: number): boolean {
  const idx = row * 5 + col;
  // Deterministic pattern using modular arithmetic
  return (idx * 7 + 3) % 5 !== 0;
}

// Deterministic animation delay for windows based on index
function getWindowDelay(col: number, row: number): number {
  const idx = row * 5 + col;
  return ((idx * 13) % 20) * 0.25;
}

export function Hero04({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  // Skyline building definitions (behind main tower)
  const skylineBuildings = [
    { x: 0, width: 60, height: 120 },
    { x: 70, width: 45, height: 180 },
    { x: 200, width: 55, height: 150 },
    { x: 270, width: 40, height: 100 },
  ];

  // Stat panels with icons and positioning
  const statPanels = [
    {
      icon: TrendingUp,
      label: t.stat1Label,
      value: t.stat1Value,
      top: "12%",
      offset: isAr ? "-60px" : "60px",
      delay: "0s",
    },
    {
      icon: Globe,
      label: t.stat2Label,
      value: t.stat2Value,
      top: "40%",
      offset: isAr ? "-90px" : "90px",
      delay: "0.8s",
    },
    {
      icon: Users,
      label: t.stat3Label,
      value: t.stat3Value,
      top: "65%",
      offset: isAr ? "-50px" : "50px",
      delay: "1.6s",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes towerRise {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes windowFlicker {
          0%, 100% { opacity: 1; }
          40% { opacity: 0.3; }
          60% { opacity: 0.8; }
          80% { opacity: 0.2; }
        }
        @keyframes shimmer {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
        @keyframes panelFloat {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(8px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blinkLight {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero04-tower { animation: none !important; transform: scaleY(1) !important; }
          .hero04-window { animation: none !important; }
          .hero04-shimmer { animation: none !important; display: none !important; }
          .hero04-panel { animation: none !important; transform: translateY(0) !important; }
          .hero04-content { animation: none !important; opacity: 1 !important; transform: translateY(0) !important; }
          .hero04-blink { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section
        style={{
          fontFamily: fontBody,
          background: "#0a1628",
          position: "relative",
          overflow: "hidden",
        }}
        className="min-h-screen flex items-center"
      >
        {/* Subtle radial glow behind tower area */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: isAr ? "auto" : "15%",
            left: isAr ? "15%" : "auto",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Main container */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "48px",
            minHeight: "100vh",
          }}
        >
          {/* Left side: Content */}
          <div style={{ order: isAr ? 2 : 1 }}>
            {/* Badge */}
            <div
              className="hero04-content"
              style={{
                animation: "fadeSlideUp 0.8s ease-out forwards",
                opacity: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                border: "1px solid rgba(56,189,248,0.2)",
                background: "rgba(56,189,248,0.06)",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow: "0 0 8px rgba(56,189,248,0.6)",
                }}
              />
              <span
                style={{
                  fontFamily: fontBody,
                  fontSize: "14px",
                  color: "#38bdf8",
                  fontWeight: 500,
                  letterSpacing: isAr ? "0" : "0.025em",
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero04-content"
              style={{
                fontFamily: fontHeading,
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "24px",
                animation: "fadeSlideUp 0.8s ease-out 0.2s forwards",
                opacity: 0,
              }}
            >
              <span style={{ color: "#f1f5f9" }}>{t.heading1}</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7dd3fc, #a5f3fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.heading2}
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="hero04-content"
              style={{
                fontFamily: fontBody,
                fontSize: "18px",
                color: "#94a3b8",
                lineHeight: 1.7,
                maxWidth: "520px",
                marginBottom: "36px",
                animation: "fadeSlideUp 0.8s ease-out 0.4s forwards",
                opacity: 0,
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className="hero04-content"
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                animation: "fadeSlideUp 0.8s ease-out 0.6s forwards",
                opacity: 0,
              }}
            >
              <button
                className="cursor-pointer"
                style={{
                  fontFamily: fontBody,
                  padding: "14px 32px",
                  borderRadius: "12px",
                  border: "none",
                  background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                  color: "#0c1a2e",
                  fontWeight: 700,
                  fontSize: "16px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow:
                    "0 0 30px rgba(56,189,248,0.25), 0 4px 14px rgba(0,0,0,0.3)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(56,189,248,0.35), 0 8px 20px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(56,189,248,0.25), 0 4px 14px rgba(0,0,0,0.3)";
                }}
              >
                {t.cta1}
                <ArrowUpRight size={18} />
              </button>

              <button
                className="cursor-pointer"
                style={{
                  fontFamily: fontBody,
                  padding: "14px 32px",
                  borderRadius: "12px",
                  border: "1px solid rgba(56,189,248,0.25)",
                  background: "rgba(56,189,248,0.06)",
                  color: "#7dd3fc",
                  fontWeight: 600,
                  fontSize: "16px",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56,189,248,0.12)";
                  e.currentTarget.style.borderColor = "rgba(56,189,248,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(56,189,248,0.06)";
                  e.currentTarget.style.borderColor = "rgba(56,189,248,0.25)";
                }}
              >
                {t.cta2}
              </button>
            </div>
          </div>

          {/* Right side: Glass Tower Scene */}
          <div
            style={{
              order: isAr ? 1 : 2,
              position: "relative",
              height: "100%",
              minHeight: "600px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/* Skyline silhouette behind tower */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "360px",
                height: "220px",
                pointerEvents: "none",
              }}
            >
              {skylineBuildings.map((b, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: `${b.x}px`,
                    width: `${b.width}px`,
                    height: `${b.height}px`,
                    background:
                      "linear-gradient(to top, #0d1f38, #0f2540)",
                    borderRadius: "2px 2px 0 0",
                  }}
                />
              ))}
            </div>

            {/* Main Glass Tower */}
            <div
              className="hero04-tower"
              style={{
                position: "relative",
                width: "160px",
                height: "420px",
                transformOrigin: "bottom center",
                animation: "towerRise 1.5s ease-out forwards",
                transform: "scaleY(0)",
                zIndex: 2,
              }}
            >
              {/* Tower body */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, #1e3a5f 0%, #0f2340 100%)",
                  borderRadius: "4px 4px 0 0",
                  border: "1px solid rgba(56,189,248,0.12)",
                  borderBottom: "none",
                  overflow: "hidden",
                }}
              >
                {/* Shimmer overlay */}
                <div
                  className="hero04-shimmer"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.04) 40%, rgba(56,189,248,0.08) 50%, rgba(56,189,248,0.04) 60%, transparent 100%)",
                    animation: "shimmer 4s linear infinite",
                    pointerEvents: "none",
                  }}
                />

                {/* Window grid: 5 cols x 12 rows */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 6px)",
                    gridTemplateRows: "repeat(12, 4px)",
                    gap: "10px 18px",
                    zIndex: 1,
                  }}
                >
                  {Array.from({ length: 60 }).map((_, idx) => {
                    const col = idx % 5;
                    const row = Math.floor(idx / 5);
                    const isLit = getWindowLit(col, row);
                    const delay = getWindowDelay(col, row);
                    return (
                      <div
                        key={idx}
                        className="hero04-window"
                        style={{
                          width: "6px",
                          height: "4px",
                          borderRadius: "0.5px",
                          background: isLit
                            ? "#38bdf8"
                            : "rgba(56,189,248,0.1)",
                          boxShadow: isLit
                            ? "0 0 6px rgba(56,189,248,0.5), 0 0 2px rgba(56,189,248,0.3)"
                            : "none",
                          animation: isLit
                            ? `windowFlicker 3s ease-in-out ${delay}s infinite`
                            : "none",
                        }}
                      />
                    );
                  })}
                </div>

                {/* Vertical edge highlights */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1px",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(56,189,248,0.15), transparent)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "1px",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(56,189,248,0.15), transparent)",
                  }}
                />
              </div>

              {/* Antenna / spire */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2px",
                  height: "40px",
                  background:
                    "linear-gradient(to top, rgba(56,189,248,0.3), rgba(56,189,248,0.05))",
                }}
              />
              {/* Blinking light on antenna */}
              <div
                className="hero04-blink"
                style={{
                  position: "absolute",
                  top: "-44px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow:
                    "0 0 10px rgba(56,189,248,0.8), 0 0 20px rgba(56,189,248,0.4)",
                  animation: "blinkLight 2s ease-in-out infinite",
                }}
              />

              {/* Tower base glow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "-20px",
                  right: "-20px",
                  height: "20px",
                  background:
                    "radial-gradient(ellipse at center, rgba(56,189,248,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Floating Stat Panels */}
            {statPanels.map((panel, i) => {
              const Icon = panel.icon;
              return (
                <div
                  key={i}
                  className="hero04-panel"
                  style={{
                    position: "absolute",
                    top: panel.top,
                    [isAr ? "left" : "right"]: panel.offset,
                    background: "rgba(56,189,248,0.08)",
                    border: "1px solid rgba(56,189,248,0.15)",
                    borderRadius: "12px",
                    padding: "14px 20px",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    animation: `panelFloat 6s ease-in-out ${panel.delay} infinite`,
                    zIndex: 3,
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(56,189,248,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#38bdf8" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: fontBody,
                        fontSize: "12px",
                        color: "#64748b",
                        marginBottom: "2px",
                      }}
                    >
                      {panel.label}
                    </div>
                    <div
                      style={{
                        fontFamily: fontHeading,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#e2e8f0",
                      }}
                    >
                      {panel.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom ground line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,0.15) 30%, rgba(56,189,248,0.15) 70%, transparent)",
          }}
        />
      </section>
    </>
  );
}
