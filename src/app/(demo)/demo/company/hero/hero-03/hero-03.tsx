"use client";

import { Globe, Zap, Shield, BarChart3, Users, ArrowRight, Cpu } from "lucide-react";

const content = {
  en: {
    badge: "Next-Gen Solutions",
    heading1: "Command Your",
    heading2: "Digital Future",
    sub: "Orchestrate every aspect of your digital ecosystem from a single, powerful platform. Real-time insights, seamless integration, infinite scalability.",
    cta1: "Launch Platform",
    cta2: "Book a Demo",
    stat1: "99.9% Uptime",
    stat2: "150ms Response",
    stat3: "10M+ Users",
    nodeGlobal: "Global",
    nodeSpeed: "Speed",
    nodeSecurity: "Security",
    nodeAnalytics: "Analytics",
    nodeTeams: "Teams",
  },
  ar: {
    badge: "حلول الجيل القادم",
    heading1: "تحكّم في",
    heading2: "مستقبلك الرقمي",
    sub: "أدر كل جانب من نظامك الرقمي من منصة واحدة وقوية. رؤى فورية، تكامل سلس، قابلية توسع لا نهائية.",
    cta1: "أطلق المنصة",
    cta2: "احجز عرضاً",
    stat1: "99.9% وقت التشغيل",
    stat2: "150ms الاستجابة",
    stat3: "+10M مستخدم",
    nodeGlobal: "عالمي",
    nodeSpeed: "سرعة",
    nodeSecurity: "أمان",
    nodeAnalytics: "تحليلات",
    nodeTeams: "فرق",
  },
};

const orbitNodes = [
  { angle: 0, ring: 200, icon: "globe", key: "nodeGlobal" },
  { angle: 60, ring: 150, icon: "zap", key: "nodeSpeed" },
  { angle: 120, ring: 200, icon: "shield", key: "nodeSecurity" },
  { angle: 180, ring: 150, icon: "barchart", key: "nodeAnalytics" },
  { angle: 240, ring: 200, icon: "users", key: "nodeTeams" },
  { angle: 300, ring: 100, icon: "dot", key: null },
] as const;

function getNodeIcon(icon: string, size: number) {
  switch (icon) {
    case "globe": return <Globe size={size} />;
    case "zap": return <Zap size={size} />;
    case "shield": return <Shield size={size} />;
    case "barchart": return <BarChart3 size={size} />;
    case "users": return <Users size={size} />;
    default: return null;
  }
}

export function Hero03({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.03); }
        }
        @keyframes hubGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1); }
          50% { box-shadow: 0 0 30px rgba(99,102,241,0.5), 0 0 80px rgba(99,102,241,0.2); }
        }
        @keyframes nodeFadeIn {
          from { opacity: 0; transform: rotate(var(--counter-angle)) scale(0.5); }
          to { opacity: 1; transform: rotate(var(--counter-angle)) scale(1); }
        }
        @keyframes waveFlow1 {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        @keyframes waveFlow2 {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        @keyframes waveFlow3 {
          from { transform: translateX(-25%); }
          to { transform: translateX(25%); }
        }
        @keyframes contentSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes statSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero03-orbit-system,
          .hero03-wave,
          .hero03-ring,
          .hero03-hub,
          .hero03-node,
          .hero03-content,
          .hero03-stat {
            animation: none !important;
          }
          .hero03-orbit-system { transform: rotate(0deg) !important; }
          .hero03-node { opacity: 1 !important; transform: rotate(var(--counter-angle)) scale(1) !important; }
          .hero03-content { opacity: 1 !important; transform: translateY(0) !important; }
          .hero03-stat { opacity: 1 !important; transform: translateY(0) !important; }
        }
      `}</style>

      <section
        style={{
          background: "#070d1b",
          fontFamily: fontBody,
          position: "relative",
          overflow: "hidden",
        }}
        className="min-h-screen"
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Radial glow behind orbital */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: isAr ? "auto" : "15%",
            left: isAr ? "15%" : "auto",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 40%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 pt-20 pb-40 lg:pt-0 lg:pb-0 lg:min-h-screen"
        >
          {/* Left side - Text content */}
          <div
            className="hero03-content"
            style={{
              animation: "contentSlideUp 0.8s ease-out forwards",
              opacity: 0,
              order: isAr ? 2 : 1,
              textAlign: isAr ? "right" : "left",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#6366f1",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  color: "#a5b4fc",
                  fontFamily: fontBody,
                  fontWeight: 500,
                  letterSpacing: isAr ? "0" : "0.02em",
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: fontHeading,
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
              className="text-4xl sm:text-5xl lg:text-6xl"
            >
              <span style={{ color: "white", display: "block" }}>{t.heading1}</span>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
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
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "520px",
                marginBottom: "32px",
                fontFamily: fontBody,
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              <button
                className="cursor-pointer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily: fontBody,
                  border: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 30px rgba(99,102,241,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.3)";
                }}
              >
                {t.cta1}
                <ArrowRight size={16} style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
              </button>
              <button
                className="cursor-pointer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  borderRadius: "12px",
                  background: "transparent",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: fontBody,
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[t.stat1, t.stat2, t.stat3].map((stat, i) => (
                <div
                  key={i}
                  className="hero03-stat"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    animation: `statSlideIn 0.5s ease-out ${0.8 + i * 0.15}s forwards`,
                    opacity: 0,
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: i === 0 ? "#6366f1" : i === 1 ? "#8b5cf6" : "#a855f7",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: fontBody,
                      fontWeight: 500,
                    }}
                  >
                    {stat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Orbital Visualization */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              order: isAr ? 1 : 2,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "440px",
                height: "440px",
              }}
              className="scale-[0.7] sm:scale-[0.85] lg:scale-100 origin-center"
            >
              {/* Orbital ring system - rotates */}
              <div
                className="hero03-orbit-system"
                style={{
                  position: "absolute",
                  inset: 0,
                  animation: "orbitSpin 40s linear infinite",
                }}
              >
                {/* Ring 3 - outer */}
                <div
                  className="hero03-ring"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "400px",
                    height: "400px",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    border: "1px solid rgba(99,102,241,0.12)",
                    animation: "ringPulse 4s ease-in-out infinite",
                  }}
                />

                {/* Ring 2 - middle */}
                <div
                  className="hero03-ring"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "300px",
                    height: "300px",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    border: "1px solid rgba(99,102,241,0.15)",
                    animation: "ringPulse 4s ease-in-out 1.3s infinite",
                  }}
                />

                {/* Ring 1 - inner */}
                <div
                  className="hero03-ring"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "200px",
                    height: "200px",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    border: "1px solid rgba(99,102,241,0.2)",
                    animation: "ringPulse 4s ease-in-out 2.6s infinite",
                  }}
                />

                {/* Orbiting nodes */}
                {orbitNodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = 220 + node.ring * Math.cos(rad);
                  const y = 220 + node.ring * Math.sin(rad);
                  const counterAngle = `-${node.angle}deg`;

                  if (node.icon === "dot") {
                    return (
                      <div
                        key={i}
                        className="hero03-node"
                        style={{
                          position: "absolute",
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: `translate(-50%, -50%) rotate(var(--counter-angle))`,
                          ["--counter-angle" as string]: counterAngle,
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #6366f1, #a855f7)",
                          boxShadow: "0 0 12px rgba(99,102,241,0.5)",
                          animation: `nodeFadeIn 0.6s ease-out ${1.2 + i * 0.15}s forwards, orbitSpinReverse 40s linear infinite`,
                          opacity: 0,
                        }}
                      />
                    );
                  }

                  const label = node.key ? t[node.key as keyof typeof t] : "";

                  return (
                    <div
                      key={i}
                      className="hero03-node"
                      style={{
                        position: "absolute",
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `translate(-50%, -50%) rotate(var(--counter-angle))`,
                        ["--counter-angle" as string]: counterAngle,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 14px",
                        borderRadius: "10px",
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.18)",
                        backdropFilter: "blur(8px)",
                        whiteSpace: "nowrap",
                        animation: `nodeFadeIn 0.6s ease-out ${1.2 + i * 0.15}s forwards, orbitSpinReverse 40s linear infinite`,
                        opacity: 0,
                      }}
                    >
                      <span style={{ color: "#a5b4fc", display: "flex", alignItems: "center" }}>
                        {getNodeIcon(node.icon, 14)}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.8)",
                          fontFamily: fontBody,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Central hub - does NOT rotate with the system */}
              <div
                className="hero03-hub"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))",
                  border: "1px solid rgba(99,102,241,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  animation: "hubGlow 3s ease-in-out infinite",
                }}
              >
                <Cpu size={28} style={{ color: "#a5b4fc" }} />
              </div>
            </div>
          </div>
        </div>

        {/* SVG Waves */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "120px",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          {/* Wave 1 */}
          <div
            className="hero03-wave"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "200%",
              height: "100%",
              animation: "waveFlow1 20s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <path
                d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 C1400,100 1600,20 1800,60 C2000,100 2200,20 2400,60 L2400,120 L0,120 Z"
                fill="rgba(99,102,241,0.05)"
              />
            </svg>
          </div>

          {/* Wave 2 */}
          <div
            className="hero03-wave"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "200%",
              height: "100%",
              animation: "waveFlow2 25s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <path
                d="M0,80 C150,40 350,100 600,70 C850,40 1050,100 1200,80 C1350,40 1550,100 1800,70 C2050,40 2250,100 2400,80 L2400,120 L0,120 Z"
                fill="rgba(139,92,246,0.04)"
              />
            </svg>
          </div>

          {/* Wave 3 */}
          <div
            className="hero03-wave"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "200%",
              height: "100%",
              animation: "waveFlow3 30s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <path
                d="M0,90 C300,60 500,110 800,85 C1100,60 1300,110 1600,85 C1900,60 2100,110 2400,90 L2400,120 L0,120 Z"
                fill="rgba(168,85,247,0.03)"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
