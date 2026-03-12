"use client";

import { useState, useEffect } from "react";
import { Brain } from "lucide-react";

interface Hero09Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "QUANTUM LABS",
    heading: "Pushing the Boundaries of",
    accent: "Artificial Intelligence",
    sub: "Pioneering research lab at the frontier of machine learning, quantum computing, and neural architecture design.",
    cta1: "Explore Research",
    cta2: "Join Our Team",
    stats: [
      { label: "Papers Published", value: 340, suffix: "+" },
      { label: "Patents Filed", value: 89, suffix: "" },
      { label: "Model Accuracy", value: 99.4, suffix: "%", decimals: 1 },
      { label: "Researchers", value: 200, suffix: "+" },
    ],
  },
  ar: {
    badge: "كوانتم لابز",
    heading: "ندفع حدود",
    accent: "الذكاء الاصطناعي",
    sub: "مختبر أبحاث رائد في طليعة التعلم الآلي والحوسبة الكمية وتصميم البنية العصبية.",
    cta1: "استكشف الأبحاث",
    cta2: "انضم لفريقنا",
    stats: [
      { label: "الأبحاث المنشورة", value: 340, suffix: "+" },
      { label: "براءات الاختراع", value: 89, suffix: "" },
      { label: "دقة النماذج", value: 99.4, suffix: "%", decimals: 1 },
      { label: "الباحثون", value: 200, suffix: "+" },
    ],
  },
};

function useCountUp(target: number, decimals: number = 0, duration: number = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
}

// Deterministic constellation dots based on index
function getConstellationDots() {
  const dots: { x: number; y: number; size: number; delay: number; opacity: number }[] = [];
  for (let i = 0; i < 20; i++) {
    const angle = (i * 137.508) % 360; // golden angle distribution
    const radius = 15 + (i * 3.7) % 35;
    dots.push({
      x: 50 + radius * Math.cos((angle * Math.PI) / 180) * (i % 2 === 0 ? 0.8 : 1.2),
      y: 50 + radius * Math.sin((angle * Math.PI) / 180) * (i % 2 === 0 ? 1.1 : 0.7),
      size: 1.5 + (i % 4) * 0.5,
      delay: (i * 0.3) % 6,
      opacity: 0.2 + (i % 5) * 0.1,
    });
  }
  return dots;
}

const constellationDots = getConstellationDots();

export function Hero09({ language }: Hero09Props) {
  const t = content[language];
  const isAr = language === "ar";

  const stat0 = useCountUp(t.stats[0].value);
  const stat1 = useCountUp(t.stats[1].value);
  const stat2 = useCountUp(t.stats[2].value, 1);
  const stat3 = useCountUp(t.stats[3].value);
  const statValues = [stat0, stat1, stat2, stat3];

  return (
    <section
      style={{
        background: "#080414",
        fontFamily: isAr ? "var(--font-ibm-plex-arabic)" : "var(--font-inter)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes hero09FadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero09Drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(3px, -3px); }
          50% { transform: translate(-2px, 4px); }
          75% { transform: translate(4px, 2px); }
        }
        @keyframes hero09OrbitCW {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes hero09OrbitCCW {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes hero09OrbitTilt {
          from { transform: translate(-50%, -50%) rotateX(60deg) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotateX(60deg) rotate(360deg); }
        }
        @keyframes hero09GlowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes hero09GradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero09-fadeup { animation: hero09FadeUp 0.8s ease-out both; }
        .hero09-fadeup-1 { animation-delay: 0.15s; }
        .hero09-fadeup-2 { animation-delay: 0.3s; }
        .hero09-fadeup-3 { animation-delay: 0.45s; }
        .hero09-fadeup-4 { animation-delay: 0.6s; }
        .hero09-fadeup-5 { animation-delay: 0.75s; }
        .hero09-dot {
          animation: hero09Drift 8s ease-in-out infinite;
        }
        .hero09-orbit-1 {
          animation: hero09OrbitCW 30s linear infinite;
        }
        .hero09-orbit-2 {
          animation: hero09OrbitCCW 40s linear infinite;
        }
        .hero09-orbit-3 {
          animation: hero09OrbitTilt 25s linear infinite;
        }
        .hero09-glow {
          animation: hero09GlowPulse 4s ease-in-out infinite;
        }
        .hero09-accent-text {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4, #8b5cf6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hero09GradientShift 4s ease infinite;
        }
        .hero09-stat-card {
          transition: all 0.3s ease;
        }
        .hero09-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139,92,246,0.4);
        }
      `}</style>

      {/* Background Elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Radial glow behind center */}
        <div
          className="hero09-glow"
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)",
          }}
        />

        {/* Orbital Ring 1 - CW */}
        <div
          className="hero09-orbit-1"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(139,92,246,0.12)",
          }}
        />

        {/* Orbital Ring 2 - CCW */}
        <div
          className="hero09-orbit-2"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            border: "1px solid rgba(6,182,212,0.1)",
          }}
        />

        {/* Orbital Ring 3 - Tilted */}
        <div
          className="hero09-orbit-3"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            border: "1px solid rgba(139,92,246,0.08)",
            perspective: "800px",
          }}
        />

        {/* Constellation Dots */}
        {constellationDots.map((dot, i) => (
          <div
            key={i}
            className="hero09-dot"
            style={{
              position: "absolute",
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              borderRadius: "50%",
              background: i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#06b6d4" : "#a78bfa",
              opacity: dot.opacity,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto", padding: "100px 24px 60px" }}>
        {/* Badge */}
        <div className="hero09-fadeup hero09-fadeup-1" style={{ textAlign: "center", marginBottom: "28px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(139,92,246,0.3)",
              background: "rgba(139,92,246,0.08)",
              color: "#a78bfa",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: isAr ? "0" : "0.1em",
            }}
          >
            <Brain size={16} />
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="hero09-fadeup hero09-fadeup-2"
          style={{
            textAlign: "center",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "24px",
          }}
        >
          {t.heading}
          <br />
          <span className="hero09-accent-text">{t.accent}</span>
        </h1>

        {/* Subheading */}
        <p
          className="hero09-fadeup hero09-fadeup-3"
          style={{
            textAlign: "center",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#94a3b8",
            maxWidth: "620px",
            margin: "0 auto 48px",
          }}
        >
          {t.sub}
        </p>

        {/* CTAs */}
        <div
          className="hero09-fadeup hero09-fadeup-4"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "80px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 32px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              fontFamily: isAr ? "var(--font-ibm-plex-arabic)" : "var(--font-inter)",
            }}
          >
            {t.cta1}
          </button>
          <button
            style={{
              padding: "14px 32px",
              borderRadius: "12px",
              background: "transparent",
              color: "#a78bfa",
              fontWeight: 600,
              fontSize: "15px",
              border: "1px solid rgba(139,92,246,0.4)",
              cursor: "pointer",
              fontFamily: isAr ? "var(--font-ibm-plex-arabic)" : "var(--font-inter)",
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Stats Row */}
        <div
          className="hero09-fadeup hero09-fadeup-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="hero09-stat-card"
              style={{
                textAlign: "center",
                padding: "28px 20px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  fontFamily: "var(--font-inter)",
                  marginBottom: "8px",
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {statValues[i]}{stat.suffix}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
