"use client";

import { useState, useEffect } from "react";
import { HardHat } from "lucide-react";

interface Hero05Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "BUILDING SINCE 1995",
    heading: "ENGINEERING EXCELLENCE",
    sub: "From concept to completion, we deliver structures that define skylines and withstand generations.",
    tabs: ["Commercial", "Residential", "Industrial"],
    tabDescriptions: [
      "Towers, malls, and office complexes",
      "Luxury homes and communities",
      "Factories and logistics centers",
    ],
    cta: "Request a Quote",
    barLabels: [
      [
        ["180 Projects", "85%"],
        ["On-Time", "98%"],
        ["Value $1.8B", "72%"],
      ],
      [
        ["420 Units", "90%"],
        ["Satisfaction", "99%"],
        ["Value $950M", "65%"],
      ],
      [
        ["95 Facilities", "70%"],
        ["Safety", "100%"],
        ["Value $1.2B", "80%"],
      ],
    ],
  },
  ar: {
    badge: "\u0646\u0628\u0646\u064a \u0645\u0646\u0630 1995",
    heading: "\u062a\u0645\u064a\u0651\u0632 \u0647\u0646\u062f\u0633\u064a",
    sub: "\u0645\u0646 \u0627\u0644\u0645\u0641\u0647\u0648\u0645 \u0625\u0644\u0649 \u0627\u0644\u0625\u0646\u062c\u0627\u0632\u060c \u0646\u0628\u0646\u064a \u0645\u0646\u0634\u0622\u062a \u062a\u062d\u062f\u062f \u0627\u0644\u0623\u0641\u0642 \u0648\u062a\u0635\u0645\u062f \u0644\u0623\u062c\u064a\u0627\u0644.",
    tabs: ["\u062a\u062c\u0627\u0631\u064a", "\u0633\u0643\u0646\u064a", "\u0635\u0646\u0627\u0639\u064a"],
    tabDescriptions: [
      "\u0623\u0628\u0631\u0627\u062c \u0648\u0645\u0631\u0627\u0643\u0632 \u062a\u062c\u0627\u0631\u064a\u0629 \u0648\u0645\u062c\u0645\u0639\u0627\u062a \u0645\u0643\u0627\u062a\u0628",
      "\u0645\u0646\u0627\u0632\u0644 \u0641\u0627\u062e\u0631\u0629 \u0648\u0645\u062c\u062a\u0645\u0639\u0627\u062a \u0633\u0643\u0646\u064a\u0629",
      "\u0645\u0635\u0627\u0646\u0639 \u0648\u0645\u0631\u0627\u0643\u0632 \u0644\u0648\u062c\u0633\u062a\u064a\u0629",
    ],
    cta: "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631",
    barLabels: [
      [
        ["180 \u0645\u0634\u0631\u0648\u0639", "85%"],
        ["\u0641\u064a \u0627\u0644\u0645\u0648\u0639\u062f", "98%"],
        ["\u0627\u0644\u0642\u064a\u0645\u0629 $1.8B", "72%"],
      ],
      [
        ["420 \u0648\u062d\u062f\u0629", "90%"],
        ["\u0627\u0644\u0631\u0636\u0627", "99%"],
        ["\u0627\u0644\u0642\u064a\u0645\u0629 $950M", "65%"],
      ],
      [
        ["95 \u0645\u0646\u0634\u0623\u0629", "70%"],
        ["\u0627\u0644\u0633\u0644\u0627\u0645\u0629", "100%"],
        ["\u0627\u0644\u0642\u064a\u0645\u0629 $1.2B", "80%"],
      ],
    ],
  },
};

export function Hero05({ language }: Hero05Props) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [barKey, setBarKey] = useState(0);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabSwitch = (index: number) => {
    setActiveTab(index);
    setBarKey((prev) => prev + 1);
  };

  return (
    <>
      <style>{`
        @keyframes forge-fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes forge-svg-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes forge-bar-fill {
          0% { width: 0%; }
          100% { width: var(--bar-target); }
        }
        .forge-fade-up {
          opacity: 0;
          animation: forge-fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .forge-svg-in {
          opacity: 0;
          animation: forge-svg-in 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .forge-bar-fill {
          animation: forge-bar-fill 600ms ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .forge-fade-up,
          .forge-svg-in {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .forge-bar-fill {
            animation: none !important;
            width: var(--bar-target) !important;
          }
        }
      `}</style>

      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "70vh",
          backgroundColor: "#0c1424",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(59,130,246,0.08) 29px, rgba(59,130,246,0.08) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(59,130,246,0.08) 29px, rgba(59,130,246,0.08) 30px)",
          fontFamily: isAr
            ? "var(--font-ibm-plex-arabic)"
            : "var(--font-inter)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content - 55% */}
          <div className="w-full lg:w-[55%]">
            {/* Badge */}
            {mounted && (
              <div
                className="forge-fade-up flex items-center gap-2 mb-6"
                style={{ animationDelay: "100ms" }}
              >
                <HardHat size={16} style={{ color: "#f97316" }} />
                <span
                  className="text-xs font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "#f97316" }}
                >
                  {t.badge}
                </span>
              </div>
            )}

            {/* Heading */}
            {mounted && (
              <h1
                className="forge-fade-up mb-5"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: isAr ? "0" : "-0.02em",
                  lineHeight: 1.1,
                  color: "#e2e8f0",
                  textTransform: isAr ? "none" : "uppercase",
                  animationDelay: "200ms",
                }}
              >
                {t.heading}
              </h1>
            )}

            {/* Subtitle */}
            {mounted && (
              <p
                className="forge-fade-up max-w-lg mb-8"
                style={{
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  lineHeight: 1.7,
                  color: "#64748b",
                  animationDelay: "300ms",
                }}
              >
                {t.sub}
              </p>
            )}

            {/* Tabs */}
            {mounted && (
              <div
                className="forge-fade-up mb-6"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex gap-1 mb-4">
                  {t.tabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => handleTabSwitch(i)}
                      className="cursor-pointer px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                      style={{
                        backgroundColor:
                          activeTab === i
                            ? "rgba(249, 115, 22, 0.15)"
                            : "transparent",
                        color: activeTab === i ? "#f97316" : "#64748b",
                        border:
                          activeTab === i
                            ? "1px solid rgba(249, 115, 22, 0.3)"
                            : "1px solid transparent",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <p
                  className="text-sm mb-5"
                  style={{ color: "#94a3b8" }}
                >
                  {t.tabDescriptions[activeTab]}
                </p>

                {/* Progress bars */}
                <div className="flex flex-col gap-3">
                  {t.barLabels[activeTab].map((bar, i) => (
                    <div key={`${barKey}-${i}`}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs" style={{ color: "#94a3b8" }}>
                          {bar[0]}
                        </span>
                        <span className="text-xs" style={{ color: "#f97316" }}>
                          {bar[1]}
                        </span>
                      </div>
                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}
                      >
                        <div
                          className="forge-bar-fill h-full rounded-full"
                          style={
                            {
                              "--bar-target": bar[1],
                              backgroundColor: "#f97316",
                              animationDelay: `${i * 150}ms`,
                            } as React.CSSProperties
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            {mounted && (
              <div
                className="forge-fade-up"
                style={{ animationDelay: "550ms" }}
              >
                <button
                  className="cursor-pointer px-7 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: "#f97316",
                    color: "#0c1424",
                  }}
                >
                  {t.cta}
                </button>
              </div>
            )}
          </div>

          {/* Right side - Decorative SVG blueprint elements */}
          <div className="hidden lg:flex w-[45%] items-center justify-center">
            {mounted && (
              <svg
                className="forge-svg-in"
                width="360"
                height="360"
                viewBox="0 0 360 360"
                fill="none"
                aria-hidden="true"
                style={{ animationDelay: "400ms" }}
              >
                {/* Main circle with crosshairs */}
                <circle
                  cx="180"
                  cy="180"
                  r="100"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  cx="180"
                  cy="180"
                  r="70"
                  stroke="rgba(59,130,246,0.12)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                />
                {/* Crosshairs */}
                <line
                  x1="180"
                  y1="60"
                  x2="180"
                  y2="300"
                  stroke="rgba(59,130,246,0.15)"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="180"
                  x2="300"
                  y2="180"
                  stroke="rgba(59,130,246,0.15)"
                  strokeWidth="0.5"
                />
                {/* Dimension line - horizontal top */}
                <line
                  x1="80"
                  y1="50"
                  x2="280"
                  y2="50"
                  stroke="rgba(59,130,246,0.25)"
                  strokeWidth="0.5"
                />
                <line
                  x1="80"
                  y1="45"
                  x2="80"
                  y2="55"
                  stroke="rgba(59,130,246,0.25)"
                  strokeWidth="0.5"
                />
                <line
                  x1="280"
                  y1="45"
                  x2="280"
                  y2="55"
                  stroke="rgba(59,130,246,0.25)"
                  strokeWidth="0.5"
                />
                {/* Arrow heads on dimension line */}
                <polygon
                  points="85,50 80,47 80,53"
                  fill="rgba(59,130,246,0.25)"
                />
                <polygon
                  points="275,50 280,47 280,53"
                  fill="rgba(59,130,246,0.25)"
                />
                {/* Dimension line - vertical right */}
                <line
                  x1="310"
                  y1="80"
                  x2="310"
                  y2="280"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="0.5"
                />
                <line
                  x1="305"
                  y1="80"
                  x2="315"
                  y2="80"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="0.5"
                />
                <line
                  x1="305"
                  y1="280"
                  x2="315"
                  y2="280"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="0.5"
                />
                {/* Angle arc */}
                <path
                  d="M 180 180 L 230 130"
                  stroke="rgba(59,130,246,0.2)"
                  strokeWidth="0.5"
                />
                <path
                  d="M 200 180 A 20 20 0 0 0 195 165"
                  stroke="rgba(249,115,22,0.3)"
                  strokeWidth="1"
                  fill="none"
                />
                <text
                  x="208"
                  y="170"
                  fill="rgba(249,115,22,0.4)"
                  fontSize="8"
                  fontFamily="var(--font-inter)"
                >
                  45°
                </text>
                {/* Small decorative circles */}
                <circle
                  cx="80"
                  cy="80"
                  r="4"
                  stroke="rgba(59,130,246,0.25)"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle
                  cx="280"
                  cy="280"
                  r="4"
                  stroke="rgba(59,130,246,0.25)"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle
                  cx="280"
                  cy="80"
                  r="4"
                  stroke="rgba(59,130,246,0.25)"
                  strokeWidth="0.5"
                  fill="none"
                />
                {/* Center crosshair dot */}
                <circle cx="180" cy="180" r="3" fill="rgba(249,115,22,0.4)" />
                {/* Dimension text */}
                <text
                  x="170"
                  y="44"
                  fill="rgba(59,130,246,0.3)"
                  fontSize="8"
                  fontFamily="var(--font-inter)"
                >
                  200
                </text>
                <text
                  x="316"
                  y="184"
                  fill="rgba(59,130,246,0.3)"
                  fontSize="8"
                  fontFamily="var(--font-inter)"
                >
                  200
                </text>
              </svg>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
