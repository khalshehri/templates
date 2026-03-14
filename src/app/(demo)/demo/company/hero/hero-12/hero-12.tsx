"use client";

import { ArrowRight, Terminal, Code2 } from "lucide-react";

const content = {
  en: {
    badge: "Code-Driven Solutions",
    heading1: "Engineering the",
    heading2: "Future of Business",
    sub: "We write the code that powers enterprise transformation. Clean architecture, scalable systems, and bulletproof deployment — that's our commit history.",
    cta1: "Deploy Now",
    cta2: "View Source",
    stat1Val: "2M+",
    stat1Label: "Lines Shipped",
    stat2Val: "99.9%",
    stat2Label: "Uptime",
    stat3Val: "0",
    stat3Label: "Security Breaches",
    stat4Val: "500+",
    stat4Label: "APIs Built",
  },
  ar: {
    badge: "حلول مدفوعة بالكود",
    heading1: "نهندس",
    heading2: "مستقبل الأعمال",
    sub: "نكتب الكود الذي يدير تحول المؤسسات. هندسة نظيفة، أنظمة قابلة للتوسع، ونشر محصّن — هذا سجل إنجازاتنا.",
    cta1: "انشر الآن",
    cta2: "عرض المصدر",
    stat1Val: "+2M",
    stat1Label: "سطر تم شحنه",
    stat2Val: "99.9%",
    stat2Label: "وقت التشغيل",
    stat3Val: "0",
    stat3Label: "اختراقات أمنية",
    stat4Val: "+500",
    stat4Label: "واجهة برمجة",
  },
};

const RAIN_COLUMNS = [
  { speed: 12, opacity: 0.06, width: 12 },
  { speed: 18, opacity: 0.04, width: 10 },
  { speed: 10, opacity: 0.08, width: 14 },
  { speed: 15, opacity: 0.05, width: 11 },
  { speed: 9, opacity: 0.1, width: 13 },
  { speed: 20, opacity: 0.03, width: 10 },
  { speed: 11, opacity: 0.07, width: 16 },
  { speed: 14, opacity: 0.05, width: 12 },
  { speed: 8, opacity: 0.12, width: 10 },
  { speed: 17, opacity: 0.04, width: 14 },
  { speed: 13, opacity: 0.06, width: 11 },
  { speed: 19, opacity: 0.03, width: 13 },
  { speed: 10, opacity: 0.09, width: 15 },
  { speed: 16, opacity: 0.05, width: 10 },
  { speed: 12, opacity: 0.07, width: 12 },
  { speed: 8, opacity: 0.04, width: 14 },
  { speed: 14, opacity: 0.06, width: 11 },
  { speed: 11, opacity: 0.08, width: 13 },
];

export function Hero12({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes rainFall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.1); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.2); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero12-rain-col,
          .hero12-typewriter,
          .hero12-cursor,
          .hero12-loadbar,
          .hero12-content-fade,
          .hero12-glow {
            animation: none !important;
          }
          .hero12-typewriter {
            width: 100% !important;
          }
          .hero12-loadbar {
            width: 100% !important;
          }
          .hero12-content-fade {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: "#0a0a0a" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Matrix Rain Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {RAIN_COLUMNS.map((col, i) => (
            <div
              key={i}
              className="hero12-rain-col absolute top-0 h-full"
              style={{
                left: `${i * 5.5 + 1.5}%`,
                width: `${col.width}px`,
                opacity: col.opacity,
                background:
                  "repeating-linear-gradient(180deg, #22c55e 0px, #22c55e 3px, transparent 3px, transparent 18px, #4ade80 18px, #4ade80 20px, transparent 20px, transparent 32px)",
                animation: `rainFall ${col.speed}s linear infinite`,
                animationDelay: `${-(i * 1.3)}s`,
              }}
            />
          ))}
          {/* Radial overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, #0a0a0a 75%)",
            }}
          />
        </div>

        {/* Scanline overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
          {/* Terminal Window */}
          <div
            className="hero12-content-fade hero12-glow w-full max-w-xl rounded-xl overflow-hidden mb-10"
            style={{
              backgroundColor: "#1a1a2e",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              animation:
                "contentFade 0.8s ease-out both, glowPulse 4s ease-in-out infinite",
            }}
          >
            {/* Terminal Top Bar */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(34, 197, 94, 0.15)",
              }}
            >
              <div className="flex gap-1.5">
                <span
                  className="block rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "#ef4444",
                  }}
                />
                <span
                  className="block rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "#eab308",
                  }}
                />
                <span
                  className="block rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "#22c55e",
                  }}
                />
              </div>
              <span
                className="text-xs tracking-wider"
                style={{
                  color: "rgba(74, 222, 128, 0.6)",
                  fontFamily: "monospace",
                  marginInlineStart: "8px",
                }}
              >
                enterprise.sh
              </span>
            </div>

            {/* Terminal Body */}
            <div
              className="px-5 py-4 space-y-2"
              style={{ fontFamily: "monospace", fontSize: "13px" }}
            >
              {/* Line 1 */}
              <div className="flex items-center" dir="ltr">
                <span style={{ color: "#22c55e" }}>$&nbsp;</span>
                <span
                  className="hero12-typewriter inline-block overflow-hidden whitespace-nowrap"
                  style={{
                    color: "#e2e8f0",
                    animation: "typewriter 2s steps(30) 0.5s both",
                    borderInlineEnd: "none",
                  }}
                >
                  initiating digital_transformation
                </span>
                <span
                  className="hero12-cursor inline-block"
                  style={{
                    width: "8px",
                    height: "15px",
                    backgroundColor: "#22c55e",
                    animation: "blink 0.8s infinite",
                    marginInlineStart: "2px",
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Line 2 */}
              <div className="flex items-center gap-2" dir="ltr">
                <span style={{ color: "#4ade80" }}>&gt;</span>
                <span style={{ color: "rgba(226, 232, 240, 0.7)" }}>
                  Loading modules...{" "}
                </span>
                <div
                  className="relative rounded-sm overflow-hidden"
                  style={{
                    width: "120px",
                    height: "10px",
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    flexShrink: 0,
                  }}
                >
                  <div
                    className="hero12-loadbar absolute inset-y-0 left-0 rounded-sm"
                    style={{
                      backgroundColor: "#22c55e",
                      animation: "loadBar 1.5s ease-out 2.5s both",
                    }}
                  />
                </div>
                <span
                  style={{ color: "#22c55e", fontSize: "11px", flexShrink: 0 }}
                >
                  100%
                </span>
              </div>

              {/* Line 3 */}
              <div className="flex items-center gap-2" dir="ltr">
                <span style={{ color: "#4ade80" }}>&gt;</span>
                <span style={{ color: "rgba(226, 232, 240, 0.7)" }}>
                  Status:{" "}
                </span>
                <span
                  className="font-bold tracking-wider"
                  style={{ color: "#22c55e" }}
                >
                  OPERATIONAL
                </span>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div
            className="hero12-content-fade inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.08)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              animation: "contentFade 0.8s ease-out 0.3s both",
            }}
          >
            <Terminal
              size={14}
              style={{ color: "#4ade80" }}
              strokeWidth={2}
            />
            <span
              className="text-sm font-medium"
              style={{
                color: "#4ade80",
                fontFamily: fontBody,
              }}
            >
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero12-content-fade text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{
              fontFamily: fontHeading,
              animation: "contentFade 0.8s ease-out 0.5s both",
            }}
          >
            <span style={{ color: "rgba(240, 253, 244, 0.95)" }}>
              {t.heading1}
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #22c55e, #4ade80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.heading2}
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="hero12-content-fade text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
            style={{
              color: "rgba(209, 250, 229, 0.6)",
              fontFamily: fontBody,
              animation: "contentFade 0.8s ease-out 0.7s both",
            }}
          >
            {t.sub}
          </p>

          {/* CTA Buttons */}
          <div
            className="hero12-content-fade flex flex-wrap items-center justify-center gap-4 mb-16"
            style={{
              animation: "contentFade 0.8s ease-out 0.9s both",
            }}
          >
            <button
              className="cursor-pointer inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#22c55e",
                color: "#0a0a0a",
                fontFamily: fontBody,
              }}
            >
              {t.cta1}
              <ArrowRight
                size={16}
                className={isAr ? "rotate-180" : ""}
              />
            </button>
            <button
              className="cursor-pointer inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: "#4ade80",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                fontFamily: fontBody,
              }}
            >
              <Code2 size={16} />
              {t.cta2}
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero12-content-fade grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-2xl"
            style={{
              animation: "contentFade 0.8s ease-out 1.1s both",
            }}
          >
            {[
              { val: t.stat1Val, label: t.stat1Label },
              { val: t.stat2Val, label: t.stat2Label },
              { val: t.stat3Val, label: t.stat3Label },
              { val: t.stat4Val, label: t.stat4Label },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    color: "#4ade80",
                    fontFamily: "monospace",
                  }}
                >
                  {stat.val}
                </span>
                <span
                  className="text-xs sm:text-sm"
                  style={{
                    color: "rgba(209, 250, 229, 0.45)",
                    fontFamily: fontBody,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
