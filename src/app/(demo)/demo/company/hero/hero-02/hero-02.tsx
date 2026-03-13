"use client";

import { useState, useEffect } from "react";
import { Rocket, Check } from "lucide-react";

interface Hero02Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Build Software That Helps You",
    rotatingWords: ["Innovate", "Scale", "Lead"],
    sub: "A modern platform for teams who want to ship faster, collaborate better, and grow without limits.",
    cta1: "Get Started Free",
    cta2: "Watch Demo \u2192",
    checks: ["No credit card", "14-day trial", "Cancel anytime"],
  },
  ar: {
    heading: "\u0627\u0628\u0646\u0650 \u0628\u0631\u0645\u062c\u064a\u0627\u062a \u062a\u0633\u0627\u0639\u062f\u0643 \u0639\u0644\u0649",
    rotatingWords: ["\u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631", "\u0627\u0644\u062a\u0648\u0633\u0639", "\u0627\u0644\u0642\u064a\u0627\u062f\u0629"],
    sub: "\u0645\u0646\u0635\u0629 \u062d\u062f\u064a\u062b\u0629 \u0644\u0644\u0641\u0631\u0642 \u0627\u0644\u062a\u064a \u062a\u0631\u064a\u062f \u0627\u0644\u0634\u062d\u0646 \u0623\u0633\u0631\u0639 \u0648\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0623\u0641\u0636\u0644 \u0648\u0627\u0644\u0646\u0645\u0648 \u0628\u0644\u0627 \u062d\u062f\u0648\u062f.",
    cta1: "\u0627\u0628\u062f\u0623 \u0645\u062c\u0627\u0646\u0627\u064b",
    cta2: "\u0634\u0627\u0647\u062f \u0627\u0644\u0639\u0631\u0636 \u2192",
    checks: ["\u0628\u062f\u0648\u0646 \u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062a\u0645\u0627\u0646", "\u062a\u062c\u0631\u0628\u0629 14 \u064a\u0648\u0645", "\u0625\u0644\u063a\u0627\u0621 \u0641\u064a \u0623\u064a \u0648\u0642\u062a"],
  },
};

const shapes = [
  { type: "circle", size: 200, gradient: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)", top: "10%", right: "5%" },
  { type: "square", size: 160, gradient: "linear-gradient(135deg, #818cf8 0%, #a5b4fc 100%)", top: "30%", right: "15%" },
  { type: "circle", size: 120, gradient: "linear-gradient(135deg, #a5b4fc 0%, #c7d2fe 100%)", top: "55%", right: "3%" },
];

export function Hero02({ language }: Hero02Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp02 {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateWords {
          0%, 26% { transform: translateY(0); opacity: 1; }
          30%, 33% { transform: translateY(-100%); opacity: 0; }
          33.01%, 59% { transform: translateY(0); opacity: 1; }
          63%, 66% { transform: translateY(-100%); opacity: 0; }
          66.01%, 92% { transform: translateY(0); opacity: 1; }
          96%, 100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes shapeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .hero02-fade-up {
          opacity: 0;
          animation: fadeUp02 0.6s ease-out forwards;
        }
        .hero02-rotating-container {
          height: 1.2em;
          overflow: hidden;
          display: inline-flex;
          vertical-align: bottom;
        }
        .hero02-rotating-track {
          display: flex;
          flex-direction: column;
          animation: hero02rotate 9s ease-in-out infinite;
        }
        @keyframes hero02rotate {
          0%, 30% { transform: translateY(0); }
          33.33%, 63.33% { transform: translateY(calc(-100% / 3)); }
          66.66%, 96.66% { transform: translateY(calc(-200% / 3)); }
          100% { transform: translateY(0); }
        }
        .hero02-rotating-track span {
          height: 1.2em;
          display: flex;
          align-items: center;
        }
        .hero02-shape {
          animation: shapeFloat 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero02-fade-up {
            animation: none;
            opacity: 1;
          }
          .hero02-rotating-track {
            animation: none !important;
          }
          .hero02-shape {
            animation: none !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          fontFamily: isAr ? "var(--font-readex-pro), sans-serif" : "var(--font-inter), sans-serif",
        }}
      >
        {/* Dot grid on right half */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            backgroundImage: "radial-gradient(circle, #6366f1 0.8px, transparent 0.8px)",
            backgroundSize: "32px 32px",
            opacity: 0.06,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 24px",
            display: "flex",
            alignItems: "center",
            gap: "64px",
            flexDirection: isAr ? "row-reverse" : "row",
          }}
        >
          {/* Text side */}
          <div
            style={{
              flex: "0 0 55%",
              maxWidth: "55%",
              textAlign: isAr ? "right" : "left",
            }}
          >
            {/* Icon badge */}
            <div
              className="hero02-fade-up"
              style={{ animationDelay: "0ms", marginBottom: "24px" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  background: "rgba(99, 102, 241, 0.08)",
                  color: "#6366f1",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <Rocket size={16} />
                {isAr ? "\u0645\u0646\u0635\u0629 \u062d\u062f\u064a\u062b\u0629" : "Modern Platform"}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero02-fade-up"
              style={{
                animationDelay: "30ms",
                fontSize: "clamp(32px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#0f172a",
                margin: "0 0 24px",
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {t.heading}{" "}
              <span className="hero02-rotating-container">
                <span className="hero02-rotating-track">
                  {t.rotatingWords.map((word, i) => (
                    <span
                      key={i}
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero02-fade-up"
              style={{
                animationDelay: "60ms",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: 1.7,
                color: "#64748b",
                margin: "0 0 32px",
                maxWidth: "520px",
                marginLeft: isAr ? "auto" : undefined,
                marginRight: isAr ? undefined : undefined,
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className="hero02-fade-up"
              style={{
                animationDelay: "90ms",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                flexDirection: isAr ? "row-reverse" : "row",
                marginBottom: "28px",
              }}
            >
              <button
                style={{
                  padding: "16px 32px",
                  borderRadius: "12px",
                  background: "#6366f1",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
                  boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                  fontFamily: "inherit",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(99, 102, 241, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(99, 102, 241, 0.3)";
                }}
              >
                {t.cta1}
              </button>
              <button
                style={{
                  padding: "16px 24px",
                  background: "transparent",
                  border: "none",
                  color: "#6366f1",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "opacity 0.2s ease-out",
                  fontFamily: "inherit",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Checkmark badges */}
            <div
              className="hero02-fade-up"
              style={{
                animationDelay: "120ms",
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                flexDirection: isAr ? "row-reverse" : "row",
              }}
            >
              {t.checks.map((check, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    color: "#64748b",
                    fontWeight: 400,
                  }}
                >
                  <Check size={16} style={{ color: "#22c55e", flexShrink: 0 }} />
                  {check}
                </span>
              ))}
            </div>
          </div>

          {/* Shapes side */}
          <div
            style={{
              flex: "0 0 40%",
              maxWidth: "40%",
              position: "relative",
              height: "500px",
              display: "none",
            }}
            className="hero02-shapes-container"
          >
            {shapes.map((shape, i) => (
              <div
                key={i}
                className="hero02-shape"
                style={{
                  position: "absolute",
                  top: shape.top,
                  right: shape.right,
                  width: `${shape.size}px`,
                  height: `${shape.size}px`,
                  borderRadius: shape.type === "circle" ? "50%" : "24px",
                  background: shape.gradient,
                  boxShadow: "0 20px 60px rgba(99, 102, 241, 0.2)",
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + i}s`,
                  opacity: mounted ? 1 : 0,
                  transition: "opacity 0.6s ease-out",
                  transitionDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Responsive: show shapes on large screens */}
        <style>{`
          @media (min-width: 1024px) {
            .hero02-shapes-container {
              display: block !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
