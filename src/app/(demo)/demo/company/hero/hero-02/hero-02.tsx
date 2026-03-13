"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Palette } from "lucide-react";

const content = {
  en: {
    heading: "WE DON'T DO ORDINARY",
    sub: "Strategy \u00b7 Design \u00b7 Technology",
    cta: "View our work",
    cards: [
      { title: "Rebrand", category: "Identity" },
      { title: "Platform", category: "Digital" },
      { title: "Campaign", category: "Motion" },
    ],
  },
  ar: {
    heading: "\u0644\u0627 \u0646\u0642\u062f\u0645 \u0627\u0644\u0645\u0623\u0644\u0648\u0641",
    sub: "\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u00b7 \u062a\u0635\u0645\u064a\u0645 \u00b7 \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627",
    cta: "\u0634\u0627\u0647\u062f \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cards: [
      { title: "\u0647\u0648\u064a\u0629 \u0628\u0635\u0631\u064a\u0629", category: "" },
      { title: "\u0645\u0646\u0635\u0629 \u0631\u0642\u0645\u064a\u0629", category: "" },
      { title: "\u062d\u0645\u0644\u0629 \u0625\u0639\u0644\u0627\u0646\u064a\u0629", category: "" },
    ],
  },
};

const cardPositions = [
  { top: "18%", left: "12%" , rotate: -3 },
  { top: "42%", left: "52%", rotate: 2 },
  { top: "64%", left: "22%", rotate: -1.5 },
];

export function Hero02({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes h02SlideLeft {
          from { opacity: 0; transform: translateX(${isAr ? "40px" : "-40px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes h02FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes h02CardPop {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes h02Float0 {
          0%, 100% { transform: translateY(0px) rotate(${cardPositions[0].rotate}deg); }
          50% { transform: translateY(-8px) rotate(${cardPositions[0].rotate}deg); }
        }
        @keyframes h02Float1 {
          0%, 100% { transform: translateY(0px) rotate(${cardPositions[1].rotate}deg); }
          50% { transform: translateY(8px) rotate(${cardPositions[1].rotate}deg); }
        }
        @keyframes h02Float2 {
          0%, 100% { transform: translateY(0px) rotate(${cardPositions[2].rotate}deg); }
          50% { transform: translateY(-6px) rotate(${cardPositions[2].rotate}deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .h02-animate { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
        @media (max-width: 768px) {
          .h02-split { flex-direction: column !important; }
          .h02-left, .h02-right { width: 100% !important; min-height: 50vh !important; }
          .h02-divider-wrap { display: none !important; }
        }
      `}</style>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: fontBody,
        }}
        className="h02-split"
      >
        {/* LEFT — Pure Black */}
        <div
          className="h02-left"
          style={{
            width: "50%",
            minHeight: "100vh",
            background: "#000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(32px, 6vw, 80px)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="h02-animate"
            style={{
              animation: mounted ? "h02SlideLeft 0.6s cubic-bezier(0.16,1,0.3,1) both" : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              <Palette size={18} color="#ff6b6b" />
              <span style={{ color: "#ff6b6b", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: fontBody }}>
                {isAr ? "ستوديو إبداعي" : "Creative Studio"}
              </span>
            </div>

            <h1
              style={{
                fontFamily: fontHeading,
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 0.95,
                letterSpacing: isAr ? "0" : "-0.04em",
                textTransform: isAr ? "none" : "uppercase",
                marginBottom: "24px",
              }}
            >
              {t.heading}
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                fontWeight: 300,
                marginBottom: "48px",
                fontFamily: fontBody,
                letterSpacing: "0.02em",
              }}
            >
              {t.sub}
            </p>

            <button
              className="cursor-pointer"
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: fontBody,
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: 0,
                transition: "gap 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "20px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "12px")}
            >
              {t.cta}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* WAVY SVG DIVIDER */}
        <div
          className="h02-divider-wrap"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "80px",
            transform: isAr ? "translateX(50%) scaleX(-1)" : "translateX(-50%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox="0 0 80 800"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M40,0 C60,100 20,200 40,300 C60,400 20,500 40,600 C60,700 20,750 40,800"
              fill="none"
              stroke="rgba(255,107,107,0.3)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* RIGHT — Vivid Gradient */}
        <div
          className="h02-right h02-animate"
          style={{
            width: "50%",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #f0932b 100%)",
            position: "relative",
            zIndex: 1,
            animation: mounted ? "h02FadeIn 0.4s ease both" : "none",
            animationDelay: "200ms",
            opacity: mounted ? undefined : 0,
          }}
        >
          {/* Floating project cards */}
          {t.cards.map((card, i) => (
            <div
              key={i}
              className="h02-animate"
              style={{
                position: "absolute",
                top: cardPositions[i].top,
                ...(isAr
                  ? { right: cardPositions[i].left }
                  : { left: cardPositions[i].left }),
                width: "160px",
                minHeight: "200px",
                background: "rgba(255,255,255,0.95)",
                borderRadius: "16px",
                padding: "24px 20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                animation: mounted
                  ? `h02CardPop 0.5s cubic-bezier(0.16,1,0.3,1) ${400 + i * 100}ms both, h02Float${i} ${4 + i}s ease-in-out infinite ${600 + i * 100}ms`
                  : "none",
                opacity: mounted ? undefined : 0,
              }}
            >
              {/* Colored bar at top */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "20px",
                  right: "20px",
                  height: "80px",
                  borderRadius: "10px",
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #1d1d1f, #3a3a3c)"
                      : i === 1
                      ? "linear-gradient(135deg, #ff6b6b, #ee5a24)"
                      : "linear-gradient(135deg, #f0932b, #f9ca24)",
                  opacity: 0.9,
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <p
                  style={{
                    fontFamily: fontHeading,
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#1d1d1f",
                    marginBottom: card.category ? "4px" : 0,
                  }}
                >
                  {card.title}
                </p>
                {card.category && (
                  <p style={{ color: "#86868b", fontSize: "12px", fontFamily: fontBody }}>
                    {card.category}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
