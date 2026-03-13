"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

interface Hero04Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "We Create Brands That",
    accent: "Move People",
    sub: "Strategy. Design. Technology. We build digital experiences that captivate audiences and drive real business growth.",
    cta1: "See Our Work",
    cta2: "Let\u2019s Talk",
    cards: ["Brand Identity", "Digital Platform", "Campaign Launch"],
  },
  ar: {
    heading: "\u0646\u0635\u0646\u0639 \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u062c\u0627\u0631\u064a\u0629",
    accent: "\u062a\u062d\u0631\u0651\u0643 \u0627\u0644\u0646\u0627\u0633",
    sub: "\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629. \u062a\u0635\u0645\u064a\u0645. \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627. \u0646\u0628\u0646\u064a \u062a\u062c\u0627\u0631\u0628 \u0631\u0642\u0645\u064a\u0629 \u062a\u0623\u0633\u0631 \u0627\u0644\u062c\u0645\u0647\u0648\u0631 \u0648\u062a\u062d\u0642\u0642 \u0646\u0645\u0648\u0627\u064b \u062d\u0642\u064a\u0642\u064a\u0627\u064b.",
    cta1: "\u0634\u0627\u0647\u062f \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u0644\u0646\u062a\u062d\u062f\u062b",
    cards: ["\u0647\u0648\u064a\u0629 \u0628\u0635\u0631\u064a\u0629", "\u0645\u0646\u0635\u0629 \u0631\u0642\u0645\u064a\u0629", "\u0625\u0637\u0644\u0627\u0642 \u062d\u0645\u0644\u0629"],
  },
};

const marqueeItems = ["ACME Corp", "TechFlow", "Zenith", "Lunar Inc", "Apex Digital", "NovaStar", "BluePeak"];

const cardGradients = [
  "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
  "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
  "linear-gradient(135deg, #f97316 0%, #8b5cf6 100%)",
];

const cardTransforms = [
  { rotate: -6, translateY: 0 },
  { rotate: 3, translateY: 40 },
  { rotate: -3, translateY: 80 },
];

const blobs = [
  { size: 400, x: "60%", y: "15%", gradient: "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)", duration: 15 },
  { size: 350, x: "75%", y: "55%", gradient: "radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)", duration: 20 },
  { size: 300, x: "40%", y: "70%", gradient: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)", duration: 25 },
];

export function Hero04({ language }: Hero04Props) {
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
        @keyframes fadeUp04 {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blobDrift0 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(40px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
        @keyframes blobDrift1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-30px, 40px); }
          66% { transform: translate(25px, -15px); }
        }
        @keyframes blobDrift2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, 30px); }
          66% { transform: translate(-40px, -20px); }
        }
        @keyframes cardFloat0 {
          0%, 100% { transform: rotate(-6deg) translateY(0px); }
          50% { transform: rotate(-6deg) translateY(-10px); }
        }
        @keyframes cardFloat1 {
          0%, 100% { transform: rotate(3deg) translateY(40px); }
          50% { transform: rotate(3deg) translateY(30px); }
        }
        @keyframes cardFloat2 {
          0%, 100% { transform: rotate(-3deg) translateY(80px); }
          50% { transform: rotate(-3deg) translateY(70px); }
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero04-fade-up {
          opacity: 0;
          animation: fadeUp04 0.6s ease-out forwards;
        }
        .hero04-card-0 { animation: cardFloat0 4s ease-in-out infinite; }
        .hero04-card-1 { animation: cardFloat1 4s ease-in-out infinite; animation-delay: 0.5s; }
        .hero04-card-2 { animation: cardFloat2 4s ease-in-out infinite; animation-delay: 1s; }
        .hero04-blob-0 { animation: blobDrift0 15s ease-in-out infinite; }
        .hero04-blob-1 { animation: blobDrift1 20s ease-in-out infinite; }
        .hero04-blob-2 { animation: blobDrift2 25s ease-in-out infinite; }
        .hero04-marquee-track {
          animation: marqueeScroll 30s linear infinite;
        }
        .hero04-cards-container {
          display: none;
        }
        @media (min-width: 1024px) {
          .hero04-cards-container {
            display: block !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero04-fade-up {
            animation: none;
            opacity: 1;
          }
          .hero04-card-0,
          .hero04-card-1,
          .hero04-card-2 {
            animation: none !important;
          }
          .hero04-card-0 { transform: rotate(-6deg) translateY(0px); }
          .hero04-card-1 { transform: rotate(3deg) translateY(40px); }
          .hero04-card-2 { transform: rotate(-3deg) translateY(80px); }
          .hero04-blob-0,
          .hero04-blob-1,
          .hero04-blob-2 {
            animation: none !important;
          }
          .hero04-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#0f0720",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: isAr ? "var(--font-tajawal), sans-serif" : "var(--font-inter), sans-serif",
        }}
      >
        {/* Blurred gradient blobs */}
        {blobs.map((blob, i) => (
          <div
            key={i}
            className={`hero04-blob-${i}`}
            style={{
              position: "absolute",
              left: blob.x,
              top: blob.y,
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              background: blob.gradient,
              filter: "blur(100px)",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            display: "flex",
            alignItems: "center",
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "80px 24px 40px",
            gap: "48px",
            flexDirection: isAr ? "row-reverse" : "row",
          }}
        >
          {/* Text side */}
          <div
            style={{
              flex: "1 1 55%",
              textAlign: isAr ? "right" : "left",
            }}
          >
            {/* Badge */}
            <div
              className="hero04-fade-up"
              style={{ animationDelay: "0ms", marginBottom: "24px" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  background: "rgba(139, 92, 246, 0.12)",
                  color: "#c084fc",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                <Palette size={16} />
                {isAr ? "\u0648\u0643\u0627\u0644\u0629 \u0625\u0628\u062f\u0627\u0639\u064a\u0629" : "Creative Agency"}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero04-fade-up"
              style={{
                animationDelay: "30ms",
                fontSize: "clamp(36px, 5.5vw, 68px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#ffffff",
                margin: "0 0 24px",
                letterSpacing: isAr ? "0" : "-0.02em",
                fontFamily: isAr ? "var(--font-changa), sans-serif" : "inherit",
              }}
            >
              {t.heading}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.accent}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero04-fade-up"
              style={{
                animationDelay: "60ms",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.55)",
                maxWidth: "520px",
                margin: "0 0 36px",
                marginLeft: isAr ? "auto" : undefined,
              }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className="hero04-fade-up"
              style={{
                animationDelay: "90ms",
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                flexDirection: isAr ? "row-reverse" : "row",
              }}
            >
              <button
                style={{
                  padding: "16px 32px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                  fontFamily: "inherit",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(139, 92, 246, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(139, 92, 246, 0.3)";
                }}
              >
                {t.cta1}
              </button>
              <button
                style={{
                  padding: "16px 32px",
                  borderRadius: "12px",
                  background: "transparent",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-out, border-color 0.2s ease-out",
                  fontFamily: "inherit",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                }}
              >
                {t.cta2}
              </button>
            </div>
          </div>

          {/* Floating cards side */}
          <div
            className="hero04-cards-container"
            style={{
              flex: "0 0 40%",
              position: "relative",
              height: "480px",
            }}
          >
            {t.cards.map((card, i) => (
              <div
                key={i}
                className={`hero04-card-${i}`}
                style={{
                  position: "absolute",
                  left: `${i * 30 + 20}px`,
                  top: "40px",
                  width: "260px",
                  height: "160px",
                  borderRadius: "16px",
                  background: cardGradients[i],
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "20px",
                  opacity: mounted ? 1 : 0,
                  transition: "opacity 0.6s ease-out",
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 600,
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {card}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee ticker */}
        <div
          className="hero04-fade-up"
          style={{
            animationDelay: "150ms",
            position: "relative",
            zIndex: 10,
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            padding: "20px 0",
            overflow: "hidden",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
              width: "max-content",
            }}
          >
            <div
              className="hero04-marquee-track"
              style={{
                display: "flex",
                gap: "24px",
                paddingRight: "24px",
              }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "8px 24px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    color: "rgba(255, 255, 255, 0.35)",
                    fontSize: "13px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              className="hero04-marquee-track"
              style={{
                display: "flex",
                gap: "24px",
                paddingRight: "24px",
              }}
              aria-hidden="true"
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={`dup-${i}`}
                  style={{
                    padding: "8px 24px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    color: "rgba(255, 255, 255, 0.35)",
                    fontSize: "13px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
