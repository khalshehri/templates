"use client";

import { useState, useEffect } from "react";
import { Scale, ArrowRight } from "lucide-react";

interface Hero09Props {
  language: "en" | "ar";
}

const content = {
  en: {
    est: "Est. 1987",
    headingParts: ["Justice. Integrity.", ""],
    accent: "Results.",
    sub: "Riyadh\u2019s premier law firm with 35+ years of courtroom excellence.",
    cta: "Discuss Your Case",
    areas: [
      "Corporate Law",
      "Litigation",
      "Real Estate",
      "Arbitration",
      "IP Law",
    ],
  },
  ar: {
    est: "\u062a\u0623\u0633\u0633\u062a 1987",
    headingParts: ["\u0639\u062f\u0627\u0644\u0629. \u0646\u0632\u0627\u0647\u0629.", ""],
    accent: "\u0646\u062a\u0627\u0626\u062c.",
    sub: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u062d\u0627\u0645\u0627\u0629 \u0627\u0644\u0631\u0627\u0626\u062f\u0629 \u0641\u064a \u0627\u0644\u0631\u064a\u0627\u0636 \u0628\u062e\u0628\u0631\u0629 \u062a\u0632\u064a\u062f \u0639\u0646 35 \u0639\u0627\u0645\u0627\u064b.",
    cta: "\u0646\u0627\u0642\u0634 \u0642\u0636\u064a\u062a\u0643",
    areas: [
      "\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062a",
      "\u0627\u0644\u062a\u0642\u0627\u0636\u064a",
      "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a",
      "\u0627\u0644\u062a\u062d\u0643\u064a\u0645",
      "\u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629",
    ],
  },
};

export function Hero09({ language }: Hero09Props) {
  const [isVisible, setIsVisible] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero09FadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero09LineExpand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes hero09Underline {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .hero09-fadeUp {
          opacity: 0;
          animation: hero09FadeUp 500ms ease-out forwards;
        }

        .hero09-line {
          transform: scaleX(0);
          transform-origin: center;
          animation: hero09LineExpand 800ms ease-out forwards;
          animation-delay: 400ms;
        }

        .hero09-underline {
          transform: scaleX(0);
          transform-origin: ${isAr ? "right" : "left"};
          animation: hero09Underline 600ms ease-out forwards;
          animation-delay: 600ms;
        }

        .hero09-delay-0 { animation-delay: 0ms; }
        .hero09-delay-1 { animation-delay: 50ms; }
        .hero09-delay-2 { animation-delay: 150ms; }
        .hero09-delay-3 { animation-delay: 500ms; }
        .hero09-delay-4 { animation-delay: 600ms; }
        .hero09-delay-5 { animation-delay: 700ms; }

        @media (prefers-reduced-motion: reduce) {
          .hero09-fadeUp {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero09-line {
            animation: none;
            transform: scaleX(1);
          }
          .hero09-underline {
            animation: none;
            transform: scaleX(1);
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: "#1e293b",
          fontFamily: isAr
            ? "var(--font-almarai), sans-serif"
            : "var(--font-inter), sans-serif",
        }}
      >
        {/* Est. badge */}
        {isVisible && (
          <div
            className="hero09-fadeUp hero09-delay-0 absolute top-8 sm:top-12"
            style={{
              right: isAr ? "auto" : "2rem",
              left: isAr ? "2rem" : "auto",
            }}
          >
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4" style={{ color: "#fbbf24" }} />
              <span
                className="text-xs sm:text-sm font-medium tracking-widest uppercase"
                style={{ color: "#94a3b8" }}
              >
                {t.est}
              </span>
            </div>
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
          {/* Heading */}
          {isVisible && (
            <h1 className="hero09-fadeUp hero09-delay-1 mb-0">
              <span
                className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
                style={{
                  color: "#f1f5f9",
                  fontFamily: isAr
                    ? "var(--font-el-messiri), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                {t.headingParts[0]}
              </span>
              <span
                className="relative inline-block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mt-2"
                style={{
                  color: "#f1f5f9",
                  fontFamily: isAr
                    ? "var(--font-el-messiri), sans-serif"
                    : "var(--font-inter), sans-serif",
                }}
              >
                {t.accent}
                <span
                  className="hero09-underline absolute bottom-1 sm:bottom-2 left-0 w-full h-[4px] sm:h-[6px]"
                  style={{ backgroundColor: "#fbbf24" }}
                  aria-hidden="true"
                />
              </span>
            </h1>
          )}

          {/* Horizontal line */}
          {isVisible && (
            <div className="flex justify-center my-8 sm:my-12">
              <div
                className="hero09-line w-full max-w-md h-px"
                style={{ backgroundColor: "#334155" }}
                aria-hidden="true"
              />
            </div>
          )}

          {/* Subtitle */}
          {isVisible && (
            <p
              className="hero09-fadeUp hero09-delay-3 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 sm:mb-14"
              style={{
                color: "#94a3b8",
                lineHeight: isAr ? "1.8" : "1.75",
                fontFamily: isAr
                  ? "var(--font-almarai), sans-serif"
                  : "var(--font-inter), sans-serif",
              }}
            >
              {t.sub}
            </p>
          )}

          {/* CTA - text style link */}
          {isVisible && (
            <div className="hero09-fadeUp hero09-delay-4 mb-16 sm:mb-20">
              <a
                href="#"
                className="cursor-pointer inline-flex items-center gap-2 text-base sm:text-lg font-medium transition-opacity duration-200 hover:opacity-70"
                style={{
                  color: "#f1f5f9",
                  minHeight: "48px",
                  textDecoration: "underline",
                  textUnderlineOffset: "6px",
                  textDecorationColor: "#475569",
                }}
              >
                {t.cta}
                <ArrowRight
                  className="w-5 h-5"
                  style={{
                    transform: isAr ? "scaleX(-1)" : "none",
                  }}
                />
              </a>
            </div>
          )}

          {/* Practice areas */}
          {isVisible && (
            <div className="hero09-fadeUp hero09-delay-5">
              <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2">
                {t.areas.map((area, index) => (
                  <span key={index} className="flex items-center gap-3 sm:gap-4">
                    <span
                      className="text-xs sm:text-sm tracking-wider uppercase"
                      style={{
                        color: "#64748b",
                        fontFamily: isAr
                          ? "var(--font-almarai), sans-serif"
                          : "var(--font-inter), sans-serif",
                      }}
                    >
                      {area}
                    </span>
                    {index < t.areas.length - 1 && (
                      <span
                        className="text-xs sm:text-sm"
                        style={{ color: "#334155" }}
                        aria-hidden="true"
                      >
                        |
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
