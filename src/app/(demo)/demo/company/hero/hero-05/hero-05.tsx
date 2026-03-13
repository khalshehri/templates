"use client";

import { useState, useEffect } from "react";
import { HardHat } from "lucide-react";

interface Hero05Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Construction & Engineering",
    headingLine1: "BUILDING THE FUTURE,",
    headingAccent: "ONE STRUCTURE AT A TIME",
    cta: "Request a Quote",
    tabs: [
      {
        label: "Commercial",
        subtitle:
          "From office towers to retail complexes, we deliver commercial projects that define city skylines.",
        stats: [
          { label: "180 Projects", value: 85 },
          { label: "On-Time", value: 98 },
          { label: "$1.8B Value", value: 72 },
        ],
      },
      {
        label: "Residential",
        subtitle:
          "Luxury homes and residential communities designed for modern living and lasting comfort.",
        stats: [
          { label: "420 Homes", value: 90 },
          { label: "Satisfaction", value: 99 },
          { label: "$950M Value", value: 65 },
        ],
      },
      {
        label: "Industrial",
        subtitle:
          "Warehouses, factories, and industrial facilities built for maximum performance and efficiency.",
        stats: [
          { label: "95 Facilities", value: 70 },
          { label: "Safety Record", value: 100 },
          { label: "$1.2B Value", value: 80 },
        ],
      },
    ],
  },
  ar: {
    badge: "البناء والهندسة",
    headingLine1: "نبني المستقبل،",
    headingAccent: "منشأة تلو الأخرى",
    cta: "اطلب عرض سعر",
    tabs: [
      {
        label: "تجاري",
        subtitle:
          "من أبراج المكاتب إلى المجمعات التجارية، ننفذ مشاريع تحدد أفق المدن.",
        stats: [
          { label: "180 مشروع", value: 85 },
          { label: "تسليم في الموعد 98%", value: 98 },
          { label: "1.8 مليار ريال", value: 72 },
        ],
      },
      {
        label: "سكني",
        subtitle:
          "منازل فاخرة ومجتمعات سكنية مصممة للحياة العصرية والراحة الدائمة.",
        stats: [
          { label: "420 منزل", value: 90 },
          { label: "رضا العملاء 99%", value: 99 },
          { label: "950 مليون ريال", value: 65 },
        ],
      },
      {
        label: "صناعي",
        subtitle:
          "مستودعات ومصانع ومنشآت صناعية مبنية لأقصى أداء وكفاءة.",
        stats: [
          { label: "95 منشأة", value: 70 },
          { label: "سجل السلامة 100%", value: 100 },
          { label: "1.2 مليار ريال", value: 80 },
        ],
      },
    ],
  },
};

export function Hero05({ language }: Hero05Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isAr = language === "ar";
  const t = content[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const fontHeading = isAr
    ? "var(--font-ibm-plex-arabic)"
    : "var(--font-inter)";
  const fontBody = isAr
    ? "var(--font-ibm-plex-arabic)"
    : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes hero05FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero05BarFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes hero05FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero05-fadeUp {
          opacity: 0;
          animation: hero05FadeUp 0.4s ease-out forwards;
        }
        .hero05-bar-fill {
          transform-origin: ${isAr ? "right" : "left"};
          transform: scaleX(0);
          animation: hero05BarFill 0.8s ease-out forwards;
        }
        .hero05-fadeIn {
          opacity: 0;
          animation: hero05FadeIn 0.3s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero05-fadeUp,
          .hero05-bar-fill,
          .hero05-fadeIn {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        style={{
          fontFamily: fontBody,
          background: "#111827",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blueprint grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(249,115,22,0.08) 39px, rgba(249,115,22,0.08) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(249,115,22,0.08) 39px, rgba(249,115,22,0.08) 40px)
            `,
            pointerEvents: "none",
          }}
        />

        {/* Blueprint building outlines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "15%",
              right: "8%",
              width: 120,
              height: 200,
              border: "1px solid rgba(249,115,22,0.12)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "25%",
              right: "18%",
              width: 80,
              height: 160,
              border: "1px solid rgba(249,115,22,0.1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "12%",
              width: 160,
              height: 100,
              border: "1px solid rgba(249,115,22,0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              right: "5%",
              width: 60,
              height: 60,
              border: "1px solid rgba(249,115,22,0.1)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 48,
            minHeight: "calc(100vh - 53px)",
          }}
        >
          {/* Left content — 55% */}
          <div style={{ flex: "1 1 520px", maxWidth: 680 }}>
            {/* Badge */}
            <div
              className={mounted ? "hero05-fadeUp" : ""}
              style={{ animationDelay: "0ms", marginBottom: 24 }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(249,115,22,0.12)",
                  border: "1px solid rgba(249,115,22,0.25)",
                  borderRadius: 6,
                  padding: "6px 14px",
                  color: "#f97316",
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: fontBody,
                }}
              >
                <HardHat size={16} />
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className={mounted ? "hero05-fadeUp" : ""}
              style={{
                animationDelay: "40ms",
                fontFamily: fontHeading,
                fontWeight: 700,
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.15,
                color: "#f3f4f6",
                textTransform: isAr ? undefined : "uppercase",
                letterSpacing: isAr ? undefined : "-0.02em",
                margin: "0 0 24px 0",
              }}
            >
              {t.headingLine1}
              <br />
              <span style={{ color: "#f97316" }}>{t.headingAccent}</span>
            </h1>

            {/* Service Tabs */}
            <div
              className={mounted ? "hero05-fadeUp" : ""}
              style={{
                animationDelay: "80ms",
                display: "flex",
                gap: 0,
                marginBottom: 24,
                borderBottom: "2px solid rgba(107,114,128,0.2)",
              }}
            >
              {t.tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: 15,
                    fontWeight: activeTab === i ? 600 : 400,
                    fontFamily: fontBody,
                    color: activeTab === i ? "#f97316" : "#6b7280",
                    borderBottom:
                      activeTab === i
                        ? "2px solid #f97316"
                        : "2px solid transparent",
                    marginBottom: -2,
                    transition: "color 0.2s ease-out, border-color 0.2s ease-out",
                    minHeight: 44,
                    minWidth: 44,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab subtitle */}
            <p
              key={`sub-${activeTab}`}
              className={animate ? "hero05-fadeIn" : ""}
              style={{
                fontFamily: fontBody,
                fontSize: 16,
                lineHeight: 1.65,
                color: "#9ca3af",
                margin: "0 0 28px 0",
                maxWidth: 540,
              }}
            >
              {t.tabs[activeTab].subtitle}
            </p>

            {/* Progress bars */}
            <div
              key={`bars-${activeTab}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginBottom: 36,
              }}
            >
              {t.tabs[activeTab].stats.map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                      fontSize: 13,
                      fontWeight: 500,
                      fontFamily: fontBody,
                    }}
                  >
                    <span style={{ color: "#d1d5db" }}>{stat.label}</span>
                    <span style={{ color: "#f97316" }}>{stat.value}%</span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 3,
                      background: "rgba(107,114,128,0.2)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className={animate ? "hero05-bar-fill" : ""}
                      style={{
                        height: "100%",
                        width: `${stat.value}%`,
                        background:
                          "linear-gradient(90deg, #f97316, #fb923c)",
                        borderRadius: 3,
                        animationDelay: `${i * 150 + 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={mounted ? "hero05-fadeUp" : ""}
              style={{ animationDelay: "160ms" }}
            >
              <button
                style={{
                  cursor: "pointer",
                  background: "#f97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "14px 32px",
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: fontBody,
                  minHeight: 48,
                  minWidth: 44,
                  transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {t.cta}
              </button>
            </div>
          </div>

          {/* Right — Blueprint visual (hidden on small screens) */}
          <div
            className={mounted ? "hero05-fadeUp" : ""}
            style={{
              animationDelay: "200ms",
              flex: "1 1 360px",
              maxWidth: 480,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: 400, height: "auto" }}
              aria-hidden="true"
            >
              {/* Ground line */}
              <line
                x1="20"
                y1="340"
                x2="380"
                y2="340"
                stroke="#f97316"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
              {/* Building 1 - tall */}
              <rect
                x="60"
                y="100"
                width="80"
                height="240"
                stroke="#f97316"
                strokeOpacity="0.25"
                strokeWidth="1"
                fill="rgba(249,115,22,0.03)"
              />
              {/* Windows B1 */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((row) =>
                [0, 1, 2].map((col) => (
                  <rect
                    key={`b1-${row}-${col}`}
                    x={72 + col * 22}
                    y={112 + row * 28}
                    width={14}
                    height={18}
                    stroke="#f97316"
                    strokeOpacity="0.15"
                    strokeWidth="0.5"
                    fill="rgba(249,115,22,0.04)"
                  />
                ))
              )}
              {/* Building 2 - medium */}
              <rect
                x="160"
                y="180"
                width="100"
                height="160"
                stroke="#f97316"
                strokeOpacity="0.25"
                strokeWidth="1"
                fill="rgba(249,115,22,0.03)"
              />
              {/* Windows B2 */}
              {[0, 1, 2, 3, 4].map((row) =>
                [0, 1, 2, 3].map((col) => (
                  <rect
                    key={`b2-${row}-${col}`}
                    x={170 + col * 22}
                    y={192 + row * 28}
                    width={14}
                    height={18}
                    stroke="#f97316"
                    strokeOpacity="0.15"
                    strokeWidth="0.5"
                    fill="rgba(249,115,22,0.04)"
                  />
                ))
              )}
              {/* Building 3 - short wide */}
              <rect
                x="280"
                y="240"
                width="90"
                height="100"
                stroke="#f97316"
                strokeOpacity="0.25"
                strokeWidth="1"
                fill="rgba(249,115,22,0.03)"
              />
              {/* Windows B3 */}
              {[0, 1, 2].map((row) =>
                [0, 1, 2].map((col) => (
                  <rect
                    key={`b3-${row}-${col}`}
                    x={292 + col * 24}
                    y={252 + row * 28}
                    width={16}
                    height={18}
                    stroke="#f97316"
                    strokeOpacity="0.15"
                    strokeWidth="0.5"
                    fill="rgba(249,115,22,0.04)"
                  />
                ))
              )}
              {/* Crane */}
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="40"
                stroke="#f97316"
                strokeOpacity="0.3"
                strokeWidth="1"
              />
              <line
                x1="100"
                y1="40"
                x2="220"
                y2="40"
                stroke="#f97316"
                strokeOpacity="0.3"
                strokeWidth="1"
              />
              <line
                x1="220"
                y1="40"
                x2="220"
                y2="60"
                stroke="#f97316"
                strokeOpacity="0.2"
                strokeWidth="0.5"
                strokeDasharray="4 3"
              />
              {/* Dimension lines */}
              <line
                x1="60"
                y1="360"
                x2="140"
                y2="360"
                stroke="#6b7280"
                strokeOpacity="0.3"
                strokeWidth="0.5"
              />
              <text
                x="100"
                y="375"
                textAnchor="middle"
                fill="#6b7280"
                fillOpacity="0.4"
                fontSize="9"
                fontFamily="monospace"
              >
                24m
              </text>
              <line
                x1="160"
                y1="360"
                x2="260"
                y2="360"
                stroke="#6b7280"
                strokeOpacity="0.3"
                strokeWidth="0.5"
              />
              <text
                x="210"
                y="375"
                textAnchor="middle"
                fill="#6b7280"
                fillOpacity="0.4"
                fontSize="9"
                fontFamily="monospace"
              >
                30m
              </text>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
