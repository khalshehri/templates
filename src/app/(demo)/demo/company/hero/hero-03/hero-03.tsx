"use client";

import { useState, useEffect } from "react";
import { Brain, Microscope, Cpu, FlaskConical, Atom } from "lucide-react";

const content = {
  en: {
    badge: "[ QUANTUM RESEARCH LAB ]",
    headingBefore: "Pushing the frontiers of",
    headingAccent: "artificial intelligence",
    sub: "Pioneering research at the intersection of machine learning, quantum computing, and neural architecture.",
    cta: "Explore Our Research",
    stats: [
      { value: 340, suffix: "+", label: "Papers Published", icon: Microscope },
      { value: 89, suffix: "", label: "Patents", icon: FlaskConical },
      { value: 99.4, suffix: "%", label: "Accuracy", icon: Cpu },
      { value: 200, suffix: "+", label: "Researchers", icon: Atom },
    ],
  },
  ar: {
    badge: "[ \u0645\u062e\u062a\u0628\u0631 \u0627\u0644\u0623\u0628\u062d\u0627\u062b \u0627\u0644\u0643\u0645\u064a\u0629 ]",
    headingBefore: "\u0646\u062f\u0641\u0639 \u062d\u062f\u0648\u062f",
    headingAccent: "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a",
    sub: "\u0623\u0628\u062d\u0627\u062b \u0631\u0627\u0626\u062f\u0629 \u0639\u0646\u062f \u062a\u0642\u0627\u0637\u0639 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0622\u0644\u064a \u0648\u0627\u0644\u062d\u0648\u0633\u0628\u0629 \u0627\u0644\u0643\u0645\u064a\u0629 \u0648\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0634\u0628\u0643\u0627\u062a \u0627\u0644\u0639\u0635\u0628\u064a\u0629.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0628\u062d\u0627\u062b\u0646\u0627",
    stats: [
      { value: 340, suffix: "+", label: "\u0623\u0628\u062d\u0627\u062b \u0645\u0646\u0634\u0648\u0631\u0629", icon: Microscope },
      { value: 89, suffix: "", label: "\u0628\u0631\u0627\u0621\u0629 \u0627\u062e\u062a\u0631\u0627\u0639", icon: FlaskConical },
      { value: 99.4, suffix: "%", label: "\u062f\u0642\u0629", icon: Cpu },
      { value: 200, suffix: "+", label: "\u0628\u0627\u062d\u062b", icon: Atom },
    ],
  },
};

// Generate deterministic particle positions using golden angle
function generateParticles(count: number) {
  const particles: { x: number; y: number; size: number; duration: number }[] = [];
  const goldenAngle = 137.508;
  for (let i = 0; i < count; i++) {
    const angle = i * goldenAngle * (Math.PI / 180);
    const radius = (i / count) * 45 + 5;
    const x = 50 + radius * Math.cos(angle) * (i % 2 === 0 ? 1 : -0.8);
    const y = 50 + radius * Math.sin(angle) * (i % 2 === 0 ? 0.9 : -1);
    const clampX = ((x % 100) + 100) % 100;
    const clampY = ((y % 100) + 100) % 100;
    particles.push({
      x: clampX,
      y: clampY,
      size: 3 + (i % 3),
      duration: 3 + (i % 5),
    });
  }
  return particles;
}

// Generate deterministic connections
function generateLines(particles: { x: number; y: number }[], count: number) {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i < count && i < particles.length - 1; i++) {
    const j = (i * 3 + 1) % particles.length;
    if (i !== j) {
      lines.push({
        x1: particles[i].x,
        y1: particles[i].y,
        x2: particles[j].x,
        y2: particles[j].y,
      });
    }
  }
  return lines;
}

const particles = generateParticles(28);
const lines = generateLines(particles, 10);

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(interval);
      } else {
        setCurrent(Number((increment * step).toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  const display = target % 1 === 0 ? Math.round(current) : current.toFixed(1);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Hero03({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-ibm-plex-arabic)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-ibm-plex-arabic)" : "var(--font-inter)";
  const fontMono = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace";

  return (
    <>
      <style>{`
        @keyframes h03Breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes h03Twinkle0 { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.8; } }
        @keyframes h03Twinkle1 { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes h03Twinkle2 { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.9; } }
        @keyframes h03Twinkle3 { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.75; } }
        @keyframes h03Twinkle4 { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.65; } }
        @keyframes h03FadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes h03Glow {
          0%, 100% { box-shadow: 0 0 20px rgba(129,140,248,0.4), 0 0 60px rgba(192,132,252,0.2); }
          50% { box-shadow: 0 0 30px rgba(129,140,248,0.6), 0 0 80px rgba(232,121,249,0.3); }
        }
        @media (prefers-reduced-motion: reduce) {
          .h03-animate { animation: none !important; opacity: 1 !important; transform: none !important; }
          .h03-breathe { animation: none !important; }
          .h03-twinkle { animation: none !important; opacity: 0.5 !important; }
          .h03-glow-btn { animation: none !important; }
        }
        @media (max-width: 640px) {
          .h03-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <section
        style={{
          minHeight: "100vh",
          background: "radial-gradient(ellipse at 50% 40%, #0a0020 0%, #050010 50%, #020014 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(60px, 10vh, 120px) 24px clamp(40px, 8vh, 80px)",
          fontFamily: fontBody,
        }}
      >
        {/* LAYER 1: Particle dots */}
        {particles.map((p, i) => (
          <div
            key={`dot-${i}`}
            className="h03-twinkle"
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              background: i % 3 === 0
                ? "#818cf8"
                : i % 3 === 1
                ? "#c084fc"
                : "#e879f9",
              animation: `h03Twinkle${i % 5} ${p.duration}s ease-in-out infinite`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* LAYER 2: Connecting lines (SVG) */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {lines.map((line, i) => (
            <line
              key={`line-${i}`}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="rgba(129,140,248,0.08)"
              strokeWidth="0.5"
            />
          ))}
        </svg>

        {/* LAYER 3: Glowing orb */}
        <div
          className="h03-breathe"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(200px, 30vw, 360px)",
            height: "clamp(200px, 30vw, 360px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
            animation: "h03Breathe 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "800px", width: "100%" }}>
          {/* Badge */}
          <div
            className="h03-animate"
            style={{
              animation: "h03FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "0ms",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: fontMono,
                fontSize: "12px",
                color: "#818cf8",
                letterSpacing: "0.12em",
                marginBottom: "32px",
                padding: "8px 16px",
                border: "1px solid rgba(129,140,248,0.2)",
                borderRadius: "8px",
                background: "rgba(129,140,248,0.05)",
              }}
            >
              <Brain size={14} color="#c084fc" />
              {t.badge}
            </div>
          </div>

          {/* Heading */}
          <h1
            className="h03-animate"
            style={{
              fontFamily: fontHeading,
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#e2e8f0",
              marginBottom: "24px",
              animation: "h03FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "80ms",
            }}
          >
            {t.headingBefore}
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc, #e879f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.headingAccent}
            </span>
          </h1>

          {/* Sub */}
          <p
            className="h03-animate"
            style={{
              color: "rgba(226,232,240,0.6)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto 40px",
              fontFamily: fontBody,
              animation: "h03FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "160ms",
            }}
          >
            {t.sub}
          </p>

          {/* CTA Button */}
          <div
            className="h03-animate"
            style={{
              animation: "h03FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "240ms",
              marginBottom: "clamp(48px, 8vh, 80px)",
            }}
          >
            <button
              className="cursor-pointer h03-glow-btn"
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                color: "#ffffff",
                border: "none",
                borderRadius: "16px",
                padding: "16px 36px",
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: fontBody,
                animation: "h03Glow 3s ease-in-out infinite",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {t.cta}
            </button>
          </div>

          {/* Stats Grid */}
          <div
            className="h03-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              width: "100%",
            }}
          >
            {t.stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="h03-animate"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "clamp(16px, 3vw, 28px)",
                    textAlign: "center",
                    animation: "h03FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
                    animationDelay: `${320 + i * 80}ms`,
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(129,140,248,0.3)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
                    <Icon size={20} color="#818cf8" />
                  </div>
                  <div
                    style={{
                      fontFamily: fontHeading,
                      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                      fontWeight: 800,
                      color: "#e2e8f0",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div
                    style={{
                      color: "rgba(226,232,240,0.45)",
                      fontSize: "clamp(11px, 1.2vw, 14px)",
                      fontWeight: 500,
                      fontFamily: fontBody,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
