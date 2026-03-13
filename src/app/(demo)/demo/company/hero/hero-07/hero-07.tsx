"use client";

import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

interface Hero07Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "> status: SECURE_",
    heading: "Zero trust. Total protection.",
    sub: "AI-powered threat detection guarding critical infrastructure across 45 countries.",
    cta: "Deploy Now",
    metrics: ["99.99% Uptime", "< 10ms Response", "256-bit AES"],
    terminalTitle: "threat_monitor.sh",
    threatLevel: "$ threat_level: LOW [===------] 27%",
    events: [
      "✓ DDoS attempt blocked — 14:32 UTC",
      "✓ Firewall rule #847 updated — 14:28 UTC",
      "✓ Vulnerability scan passed — 14:15 UTC",
    ],
    timestamp: "Last updated: 14:32:07 UTC",
  },
  ar: {
    badge: "> الحالة: آمن_",
    heading: "صفر ثقة. حماية كاملة.",
    sub: "كشف التهديدات بالذكاء الاصطناعي يحمي البنية التحتية الحيوية في 45 دولة.",
    cta: "ابدأ النشر",
    metrics: ["99.99% وقت التشغيل", "أقل من 10مللي ثانية", "تشفير AES-256"],
    terminalTitle: "threat_monitor.sh",
    threatLevel: "$ threat_level: LOW [===------] 27%",
    events: [
      "✓ تم صد هجوم DDoS — 14:32",
      "✓ تحديث قاعدة الجدار #847 — 14:28",
      "✓ اجتاز فحص الثغرات — 14:15",
    ],
    timestamp: "آخر تحديث: 14:32:07",
  },
};

const COLUMN_COUNT = 18;

export function Hero07({ language }: Hero07Props) {
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  const columns = Array.from({ length: COLUMN_COUNT }, (_, i) => {
    const duration = 3 + (i % 6) * 0.9;
    const delay = (i % 5) * 0.4;
    const left = (i * (100 / COLUMN_COUNT)).toFixed(1);
    const rectCount = 3 + (i % 3);
    return { duration, delay, left, rectCount, key: i };
  });

  return (
    <>
      <style>{`
        @keyframes hero07-rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes hero07-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes hero07-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 40px rgba(34,197,94,0.4); }
        }
        @keyframes hero07-eventIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero07-scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100vh; }
        }
        @keyframes hero07-fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero07-rain-col, .hero07-blink, .hero07-glow-btn,
          .hero07-event, .hero07-scanline, .hero07-fade {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "#020a02",
          fontFamily: isAr ? "var(--font-readex-pro)" : "var(--font-inter)",
        }}
      >
        {/* Scanline overlay */}
        <div
          className="hero07-scanline absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.03) 2px, rgba(34,197,94,0.03) 4px)",
            animation: "hero07-scanline 8s linear infinite",
          }}
        />

        {/* Matrix rain columns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {columns.map((col) => (
            <div
              key={col.key}
              className="hero07-rain-col absolute top-0"
              style={{
                left: `${col.left}%`,
                animation: `hero07-rain ${col.duration}s linear infinite`,
                animationDelay: `${col.delay}s`,
              }}
            >
              {Array.from({ length: col.rectCount }, (_, j) => (
                <div
                  key={j}
                  style={{
                    width: "2px",
                    height: `${15 + (j % 3) * 8}px`,
                    background: "#22c55e",
                    opacity: 0.4 - j * 0.08,
                    marginBottom: `${10 + (j % 4) * 5}px`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
              isAr ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left — Text content (55%) */}
            <div className="w-full lg:w-[55%] space-y-8">
              {/* Badge */}
              <div
                className="hero07-fade inline-flex items-center gap-2"
                style={{
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero07-fadeUp 0.6s ease-out forwards"
                    : "none",
                }}
              >
                <span
                  className="font-mono text-sm px-4 py-2 rounded-lg"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    color: "#4ade80",
                  }}
                >
                  {t.badge}
                  <span
                    className="hero07-blink"
                    style={{
                      animation: "hero07-blink 1s step-end infinite",
                    }}
                  >
                    |
                  </span>
                </span>
              </div>

              {/* Heading */}
              <h1
                className="hero07-fade font-semibold leading-tight"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#dcfce7",
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero07-fadeUp 0.6s ease-out 0.15s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                {t.heading}
              </h1>

              {/* Subtitle */}
              <p
                className="hero07-fade text-lg max-w-lg leading-relaxed"
                style={{
                  color: "#166534",
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero07-fadeUp 0.6s ease-out 0.3s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                {t.sub}
              </p>

              {/* CTA */}
              <div
                className="hero07-fade"
                style={{
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero07-fadeUp 0.6s ease-out 0.45s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                <button
                  className="hero07-glow-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-base cursor-pointer transition-transform hover:scale-[1.02]"
                  style={{
                    background: "#22c55e",
                    color: "#020a02",
                    animation: "hero07-glow 2s ease-in-out infinite",
                  }}
                >
                  <ShieldCheck className="w-5 h-5" />
                  {t.cta}
                </button>
              </div>

              {/* Metric pills */}
              <div
                className="hero07-fade flex flex-wrap gap-3"
                style={{
                  opacity: mounted ? 1 : 0,
                  animation: mounted
                    ? "hero07-fadeUp 0.6s ease-out 0.6s forwards"
                    : "none",
                  animationFillMode: "backwards",
                }}
              >
                {t.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-mono"
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      color: "#4ade80",
                    }}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Terminal card (45%) */}
            <div
              className="hero07-fade w-full lg:w-[45%]"
              style={{
                opacity: mounted ? 1 : 0,
                animation: mounted
                  ? "hero07-fadeUp 0.6s ease-out 0.3s forwards"
                  : "none",
                animationFillMode: "backwards",
              }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(34,197,94,0.1)",
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-5 py-3.5"
                  style={{
                    borderBottom: "1px solid rgba(34,197,94,0.1)",
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "#ef4444" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "#eab308" }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "#22c55e" }}
                  />
                  <span
                    className="font-mono text-xs ms-2"
                    style={{ color: "#166534" }}
                  >
                    {t.terminalTitle}
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-5 space-y-4 font-mono text-sm">
                  {/* Threat level */}
                  <div style={{ color: "#4ade80" }}>{t.threatLevel}</div>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(34,197,94,0.15)",
                    }}
                  />

                  {/* Events */}
                  <div className="space-y-3">
                    {t.events.map((event, i) => (
                      <div
                        key={i}
                        className="hero07-event"
                        style={{
                          color: "#dcfce7",
                          opacity: mounted ? 1 : 0,
                          animation: mounted
                            ? `hero07-eventIn 0.5s ease-out ${
                                0.8 + i * 0.5
                              }s forwards`
                            : "none",
                          animationFillMode: "backwards",
                          fontSize: "0.8125rem",
                        }}
                      >
                        {event}
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(34,197,94,0.15)",
                    }}
                  />

                  {/* Timestamp */}
                  <div
                    className="text-xs"
                    style={{ color: "#166534" }}
                  >
                    {t.timestamp}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
