"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Proven Process",
    heading: ["Ascending", "Beyond Limits"],
    sub: "Every step forward brings clarity. Our structured approach transforms complexity into measurable progress and lasting results.",
    stats: [
      { value: "4x", label: "ROI Average" },
      { value: "200+", label: "Implementations" },
      { value: "97%", label: "Success Rate" },
    ],
    cta1: "Start Climbing",
    cta2: "See Our Process",
  },
  ar: {
    badge: "منهجية مثبتة",
    heading: ["نرتقي", "بلا حدود"],
    sub: "كل خطوة للأمام تجلب الوضوح. نهجنا المنظم يحول التعقيد إلى تقدم قابل للقياس ونتائج دائمة.",
    stats: [
      { value: "4x", label: "متوسط العائد" },
      { value: "+200", label: "عملية تنفيذ" },
      { value: "97%", label: "معدل النجاح" },
    ],
    cta1: "ابدأ الصعود",
    cta2: "شاهد منهجيتنا",
  },
};

const stepOffsets = [0, 12, 24, 36, 48];
const stepDelays = [0.3, 0.55, 0.8, 1.05, 1.3];

export function Hero07({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const revealAnim = isAr ? "stairRevealRtl" : "stairReveal";

  // Diagonal grid lines data (20 lines)
  const diagonalLines = Array.from({ length: 20 }, (_, i) => {
    const offset = (i - 5) * 120;
    return { x1: offset, y1: 0, x2: offset + 1200, y2: 1200 };
  });

  return (
    <>
      <style>{`
        @keyframes stairReveal {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes stairRevealRtl {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes stepLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stair-step {
            animation: none !important;
            opacity: 1 !important;
          }
          .step-line {
            animation: none !important;
            transform: scaleX(1) !important;
          }
          .dot-connector {
            animation: none !important;
            opacity: 0.6 !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "linear-gradient(135deg, #0b1120 0%, #0f1729 50%, #0a0f1e 100%)",
          fontFamily: fontBody,
        }}
        className="relative min-h-screen overflow-hidden flex items-center"
      >
        {/* Background diagonal grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
            preserveAspectRatio="none"
            viewBox="0 0 1440 900"
          >
            {diagonalLines.map((line, i) => (
              <line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(16,185,129,0.03)"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* Diagonal dashed guide line */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            className="absolute inset-0"
            preserveAspectRatio="none"
            viewBox="0 0 1440 900"
          >
            <line
              x1={isAr ? 1440 : 0}
              y1="0"
              x2={isAr ? 0 : 1440}
              y2="900"
              stroke="rgba(16,185,129,0.08)"
              strokeWidth="1"
              strokeDasharray="8 12"
            />
          </svg>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
          {/* Step 1: Badge */}
          <div
            className="stair-step"
            style={{
              ...(isAr
                ? { marginRight: `${stepOffsets[0]}%` }
                : { marginLeft: `${stepOffsets[0]}%` }),
              animation: `${revealAnim} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[0]}s both`,
            }}
          >
            {/* Step line */}
            <div
              className="step-line"
              style={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, #10b981, #34d399)",
                marginBottom: 16,
                transformOrigin: isAr ? "right" : "left",
                animation: `stepLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[0]}s both`,
              }}
            />
            <span
              style={{
                fontFamily: fontBody,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: isAr ? "0" : "0.08em",
                color: "#34d399",
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.15)",
                padding: "6px 16px",
                borderRadius: 999,
                display: "inline-block",
                textTransform: isAr ? "none" : "uppercase",
              }}
            >
              {t.badge}
            </span>
          </div>

          {/* Dot connector 1→2 */}
          <div
            className="dot-connector"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#10b981",
              margin: "20px 0",
              ...(isAr
                ? { marginRight: `${(stepOffsets[0] + stepOffsets[1]) / 2}%` }
                : { marginLeft: `${(stepOffsets[0] + stepOffsets[1]) / 2}%` }),
              animation: `dotPulse 3s ease-in-out ${stepDelays[0] + 0.2}s infinite`,
              opacity: 0.4,
            }}
          />

          {/* Step 2: Heading */}
          <div
            className="stair-step"
            style={{
              ...(isAr
                ? { marginRight: `${stepOffsets[1]}%` }
                : { marginLeft: `${stepOffsets[1]}%` }),
              animation: `${revealAnim} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[1]}s both`,
            }}
          >
            <div
              className="step-line"
              style={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, #10b981, #34d399)",
                marginBottom: 16,
                transformOrigin: isAr ? "right" : "left",
                animation: `stepLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[1]}s both`,
              }}
            />
            <h1
              style={{
                fontFamily: fontHeading,
                fontWeight: 700,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#f1f5f9",
                }}
              >
                {t.heading[0]}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.heading[1]}
              </span>
            </h1>
          </div>

          {/* Dot connector 2→3 */}
          <div
            className="dot-connector"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#10b981",
              margin: "20px 0",
              ...(isAr
                ? { marginRight: `${(stepOffsets[1] + stepOffsets[2]) / 2}%` }
                : { marginLeft: `${(stepOffsets[1] + stepOffsets[2]) / 2}%` }),
              animation: `dotPulse 3s ease-in-out ${stepDelays[1] + 0.2}s infinite`,
              opacity: 0.4,
            }}
          />

          {/* Step 3: Subheading */}
          <div
            className="stair-step"
            style={{
              ...(isAr
                ? { marginRight: `${stepOffsets[2]}%` }
                : { marginLeft: `${stepOffsets[2]}%` }),
              animation: `${revealAnim} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[2]}s both`,
            }}
          >
            <div
              className="step-line"
              style={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, #10b981, #34d399)",
                marginBottom: 16,
                transformOrigin: isAr ? "right" : "left",
                animation: `stepLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[2]}s both`,
              }}
            />
            <p
              style={{
                fontFamily: fontBody,
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                lineHeight: 1.7,
                color: "#94a3b8",
                maxWidth: 480,
                margin: 0,
              }}
            >
              {t.sub}
            </p>
          </div>

          {/* Dot connector 3→4 */}
          <div
            className="dot-connector"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#10b981",
              margin: "20px 0",
              ...(isAr
                ? { marginRight: `${(stepOffsets[2] + stepOffsets[3]) / 2}%` }
                : { marginLeft: `${(stepOffsets[2] + stepOffsets[3]) / 2}%` }),
              animation: `dotPulse 3s ease-in-out ${stepDelays[2] + 0.2}s infinite`,
              opacity: 0.4,
            }}
          />

          {/* Step 4: Stats */}
          <div
            className="stair-step"
            style={{
              ...(isAr
                ? { marginRight: `${stepOffsets[3]}%` }
                : { marginLeft: `${stepOffsets[3]}%` }),
              animation: `${revealAnim} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[3]}s both`,
            }}
          >
            <div
              className="step-line"
              style={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, #10b981, #34d399)",
                marginBottom: 16,
                transformOrigin: isAr ? "right" : "left",
                animation: `stepLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[3]}s both`,
              }}
            />
            <div className="flex flex-wrap gap-6 sm:gap-10">
              {t.stats.map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: fontHeading,
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 700,
                      color: "#f1f5f9",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: fontBody,
                      fontSize: 14,
                      color: "#64748b",
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot connector 4→5 */}
          <div
            className="dot-connector"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#10b981",
              margin: "20px 0",
              ...(isAr
                ? { marginRight: `${(stepOffsets[3] + stepOffsets[4]) / 2}%` }
                : { marginLeft: `${(stepOffsets[3] + stepOffsets[4]) / 2}%` }),
              animation: `dotPulse 3s ease-in-out ${stepDelays[3] + 0.2}s infinite`,
              opacity: 0.4,
            }}
          />

          {/* Step 5: CTAs */}
          <div
            className="stair-step"
            style={{
              ...(isAr
                ? { marginRight: `${stepOffsets[4]}%` }
                : { marginLeft: `${stepOffsets[4]}%` }),
              animation: `${revealAnim} 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[4]}s both`,
            }}
          >
            <div
              className="step-line"
              style={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, #10b981, #34d399)",
                marginBottom: 16,
                transformOrigin: isAr ? "right" : "left",
                animation: `stepLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${stepDelays[4]}s both`,
              }}
            />
            <div className="flex flex-wrap gap-4">
              <button
                className="cursor-pointer"
                style={{
                  fontFamily: fontBody,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 32px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(16,185,129,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 28px rgba(16,185,129,0.45)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(16,185,129,0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {t.cta1}
                <ArrowRight size={16} style={{ transform: isAr ? "scaleX(-1)" : "none" }} />
              </button>

              <button
                className="cursor-pointer"
                style={{
                  fontFamily: fontBody,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#34d399",
                  background: "transparent",
                  border: "1px solid rgba(16,185,129,0.4)",
                  borderRadius: 12,
                  padding: "14px 32px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(16,185,129,0.08)";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.6)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {t.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
