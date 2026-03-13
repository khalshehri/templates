"use client";

import { useState, useEffect } from "react";
import { Shield, Lock, Award, Star } from "lucide-react";

interface Hero03Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Your Financial Future,",
    accent: "Secured",
    sub: "Three decades of trusted advisory. We protect and grow your wealth with proven strategies and unwavering integrity.",
    cta: "Schedule a Consultation",
    testimonial: "Rated 4.9/5 by 10,000+ clients",
    trust: [
      { icon: "shield", label: "Bank-Grade Security" },
      { icon: "lock", label: "Licensed & Regulated" },
      { icon: "award", label: "Award-Winning Service" },
    ],
  },
  ar: {
    heading: "\u0645\u0633\u062a\u0642\u0628\u0644\u0643 \u0627\u0644\u0645\u0627\u0644\u064a\u060c",
    accent: "\u0641\u064a \u0623\u0645\u0627\u0646",
    sub: "\u062b\u0644\u0627\u062b\u0629 \u0639\u0642\u0648\u062f \u0645\u0646 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0648\u062b\u0648\u0642\u0629. \u0646\u062d\u0645\u064a \u062b\u0631\u0648\u062a\u0643 \u0648\u0646\u0646\u0645\u064a\u0647\u0627 \u0628\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0627\u062a \u0645\u062b\u0628\u062a\u0629 \u0648\u0646\u0632\u0627\u0647\u0629 \u0631\u0627\u0633\u062e\u0629.",
    cta: "\u062d\u062f\u062f \u0645\u0648\u0639\u062f \u0627\u0633\u062a\u0634\u0627\u0631\u0629",
    testimonial: "\u062a\u0642\u064a\u064a\u0645 4.9/5 \u0645\u0646 \u0623\u0643\u062b\u0631 \u0645\u0646 10,000 \u0639\u0645\u064a\u0644",
    trust: [
      { icon: "shield", label: "\u0623\u0645\u0627\u0646 \u0628\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0628\u0646\u0648\u0643" },
      { icon: "lock", label: "\u0645\u0631\u062e\u0635 \u0648\u0645\u0646\u0638\u0645" },
      { icon: "award", label: "\u062e\u062f\u0645\u0629 \u062d\u0627\u0626\u0632\u0629 \u0639\u0644\u0649 \u062c\u0648\u0627\u0626\u0632" },
    ],
  },
};

const trustIcons: Record<string, typeof Shield> = {
  shield: Shield,
  lock: Lock,
  award: Award,
};

export function Hero03({ language }: Hero03Props) {
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
        @keyframes fadeUp03 {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shieldEntrance {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes diagonalDrift {
          from { transform: translateY(0); }
          to { transform: translateY(-200px); }
        }
        .hero03-fade-up {
          opacity: 0;
          animation: fadeUp03 0.6s ease-out forwards;
        }
        .hero03-shield-icon {
          animation: shieldEntrance 0.6s ease-out forwards;
          opacity: 0;
        }
        .hero03-diag-lines {
          animation: diagonalDrift 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero03-fade-up {
            animation: none;
            opacity: 1;
          }
          .hero03-shield-icon {
            animation: none;
            opacity: 1;
          }
          .hero03-diag-lines {
            animation: none !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#0a1a0f",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: isAr ? "var(--font-almarai), sans-serif" : "var(--font-inter), sans-serif",
        }}
      >
        {/* Animated diagonal lines */}
        <div
          style={{
            position: "absolute",
            inset: "-200px 0 0 0",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div
            className="hero03-diag-lines"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(16, 185, 129, 0.05) 80px, rgba(16, 185, 129, 0.05) 81px)",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        {/* Radial overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "820px",
            width: "100%",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          {/* Shield SVG */}
          <div
            className="hero03-shield-icon"
            style={{ marginBottom: "32px", animationDelay: "0ms" }}
          >
            <svg
              width="80"
              height="96"
              viewBox="0 0 80 96"
              fill="none"
              style={{ margin: "0 auto", display: "block" }}
            >
              <path
                d="M40 4L8 20V44C8 66.4 21.6 87.2 40 92C58.4 87.2 72 66.4 72 44V20L40 4Z"
                fill="rgba(16, 185, 129, 0.1)"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M40 16L16 28V44C16 62.4 26.8 79.2 40 84C53.2 79.2 64 62.4 64 44V28L40 16Z"
                fill="rgba(16, 185, 129, 0.06)"
                stroke="rgba(16, 185, 129, 0.4)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M30 48L37 55L52 40"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1
            className="hero03-fade-up"
            style={{
              animationDelay: "30ms",
              fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              margin: "0 0 24px",
              letterSpacing: isAr ? "0" : "-0.02em",
              fontFamily: isAr ? "var(--font-el-messiri), sans-serif" : "inherit",
            }}
          >
            {t.heading}
            <br />
            <span style={{ color: "#10b981" }}>{t.accent}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero03-fade-up"
            style={{
              animationDelay: "60ms",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.55)",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            {t.sub}
          </p>

          {/* CTA */}
          <div
            className="hero03-fade-up"
            style={{ animationDelay: "90ms", marginBottom: "48px" }}
          >
            <button
              style={{
                padding: "18px 40px",
                borderRadius: "12px",
                background: "#10b981",
                color: "#ffffff",
                fontSize: "17px",
                fontWeight: 600,
                border: "2px solid #f59e0b",
                cursor: "pointer",
                transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.25), 0 0 0 0 rgba(245, 158, 11, 0)",
                fontFamily: "inherit",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(16, 185, 129, 0.35), 0 0 0 4px rgba(245, 158, 11, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(16, 185, 129, 0.25), 0 0 0 0 rgba(245, 158, 11, 0)";
              }}
            >
              {t.cta}
            </button>
          </div>

          {/* Trust badges */}
          <div
            className="hero03-fade-up"
            style={{
              animationDelay: "120ms",
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              flexWrap: "wrap",
              marginBottom: "40px",
              flexDirection: isAr ? "row-reverse" : "row",
            }}
          >
            {t.trust.map((item, i) => {
              const IconComp = trustIcons[item.icon];
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                    flexDirection: isAr ? "row-reverse" : "row",
                  }}
                >
                  <IconComp size={20} style={{ color: "#10b981", flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Star testimonial */}
          <div
            className="hero03-fade-up"
            style={{
              animationDelay: "150ms",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              flexDirection: isAr ? "row-reverse" : "row",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "2px",
                flexDirection: isAr ? "row-reverse" : "row",
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  style={{
                    color: "#f59e0b",
                    fill: "#f59e0b",
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.5)",
                fontWeight: 400,
              }}
            >
              {t.testimonial}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
