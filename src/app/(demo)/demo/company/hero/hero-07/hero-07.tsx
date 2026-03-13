"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Shield, Zap, Lock } from "lucide-react";

interface Hero07Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "> initializing secure protocol_",
    heading: "Intelligent Security",
    headingAccent: "for the Digital Age",
    subtitle:
      "AI-powered threat detection, real-time monitoring, and zero-trust architecture. Protect your infrastructure with next-generation cybersecurity.",
    cta: "Deploy Now",
    metrics: [
      { icon: "shield", label: "99.99% Uptime" },
      { icon: "zap", label: "< 10ms Response" },
      { icon: "lock", label: "256-bit Encryption" },
    ],
  },
  ar: {
    badge: "> تهيئة البروتوكول الآمن_",
    heading: "أمان ذكي",
    headingAccent: "للعصر الرقمي",
    subtitle:
      "كشف التهديدات بالذكاء الاصطناعي، مراقبة فورية، وبنية عدم الثقة. احمِ بنيتك التحتية بالجيل القادم من الأمن السيبراني.",
    cta: "ابدأ النشر",
    metrics: [
      { icon: "shield", label: "99.99% وقت التشغيل" },
      { icon: "zap", label: "أقل من 10 مللي ثانية" },
      { icon: "lock", label: "تشفير 256 بت" },
    ],
  },
};

const metricIconMap: Record<string, typeof Shield> = {
  shield: Shield,
  zap: Zap,
  lock: Lock,
};

export function Hero07({ language }: Hero07Props) {
  const [mounted, setMounted] = useState(false);
  const isAr = language === "ar";
  const t = content[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  const fontHeading = isAr
    ? "var(--font-readex-pro)"
    : "var(--font-inter)";
  const fontBody = isAr
    ? "var(--font-readex-pro)"
    : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes hero07FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero07Blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes hero07Glow {
          0%, 100% { box-shadow: 0 0 12px rgba(6,182,212,0.4), 0 0 24px rgba(6,182,212,0.15); }
          50% { box-shadow: 0 0 20px rgba(6,182,212,0.6), 0 0 40px rgba(6,182,212,0.25); }
        }
        @keyframes hero07Dash {
          to { stroke-dashoffset: 0; }
        }
        .hero07-fadeUp {
          opacity: 0;
          animation: hero07FadeUp 0.4s ease-out forwards;
        }
        .hero07-blink {
          animation: hero07Blink 1s step-end infinite;
        }
        .hero07-glow {
          animation: hero07Glow 2.5s ease-in-out infinite;
        }
        .hero07-circuit {
          stroke-dasharray: 12 8;
          stroke-dashoffset: 200;
          animation: hero07Dash 4s linear infinite;
        }
        .hero07-circuit-slow {
          stroke-dasharray: 16 10;
          stroke-dashoffset: 260;
          animation: hero07Dash 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero07-fadeUp {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero07-blink,
          .hero07-glow,
          .hero07-circuit,
          .hero07-circuit-slow {
            animation: none !important;
          }
          .hero07-glow {
            box-shadow: 0 0 12px rgba(6,182,212,0.4) !important;
          }
        }
      `}</style>

      <section
        style={{
          fontFamily: fontBody,
          background: "#030712",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Scan-line overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(6,182,212,0.015) 2px,
              rgba(6,182,212,0.015) 4px
            )`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Left circuit SVG */}
        <svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 200,
            height: "100%",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <path
            d="M 180 80 L 60 80 L 60 200 L 20 200"
            fill="none"
            stroke="#06b6d4"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path
            d="M 180 80 L 60 80 L 60 200 L 20 200"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.4"
            strokeWidth="1"
            className="hero07-circuit"
          />
          <path
            d="M 160 180 L 100 180 L 100 320 L 40 320"
            fill="none"
            stroke="#06b6d4"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path
            d="M 160 180 L 100 180 L 100 320 L 40 320"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.4"
            strokeWidth="1"
            className="hero07-circuit-slow"
          />
          <path
            d="M 140 400 L 80 400 L 80 500 L 30 500"
            fill="none"
            stroke="#06b6d4"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path
            d="M 140 400 L 80 400 L 80 500 L 30 500"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.4"
            strokeWidth="1"
            className="hero07-circuit"
          />
          {/* Circuit nodes */}
          <circle cx="60" cy="200" r="3" fill="#06b6d4" fillOpacity="0.4" />
          <circle cx="100" cy="320" r="3" fill="#06b6d4" fillOpacity="0.4" />
          <circle cx="80" cy="500" r="3" fill="#06b6d4" fillOpacity="0.4" />
        </svg>

        {/* Right circuit SVG */}
        <svg
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 200,
            height: "100%",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <path
            d="M 20 120 L 120 120 L 120 260 L 180 260"
            fill="none"
            stroke="#06b6d4"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path
            d="M 20 120 L 120 120 L 120 260 L 180 260"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.4"
            strokeWidth="1"
            className="hero07-circuit-slow"
          />
          <path
            d="M 40 300 L 100 300 L 100 440 L 160 440"
            fill="none"
            stroke="#06b6d4"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <path
            d="M 40 300 L 100 300 L 100 440 L 160 440"
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.4"
            strokeWidth="1"
            className="hero07-circuit"
          />
          {/* Circuit nodes */}
          <circle cx="120" cy="260" r="3" fill="#06b6d4" fillOpacity="0.4" />
          <circle cx="100" cy="440" r="3" fill="#06b6d4" fillOpacity="0.4" />
        </svg>

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 720,
            margin: "0 auto",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          {/* Code badge */}
          <div
            className={mounted ? "hero07-fadeUp" : ""}
            style={{ animationDelay: "0ms", marginBottom: 28 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.2)",
                borderRadius: 6,
                padding: "8px 16px",
                fontFamily: "monospace",
                fontSize: 13,
                color: "#22d3ee",
                letterSpacing: "0.02em",
              }}
            >
              <ShieldCheck size={15} style={{ flexShrink: 0 }} />
              <span>{t.badge.replace("_", "")}</span>
              <span className="hero07-blink" style={{ fontWeight: 700 }}>
                |
              </span>
            </span>
          </div>

          {/* Heading */}
          <h1
            className={mounted ? "hero07-fadeUp" : ""}
            style={{
              animationDelay: "40ms",
              fontFamily: fontHeading,
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1.15,
              color: "#f0fdfa",
              margin: "0 0 20px 0",
              letterSpacing: isAr ? undefined : "-0.02em",
            }}
          >
            {t.heading}
            <br />
            <span style={{ color: "#06b6d4" }}>{t.headingAccent}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={mounted ? "hero07-fadeUp" : ""}
            style={{
              animationDelay: "80ms",
              fontFamily: fontBody,
              fontSize: 16,
              lineHeight: 1.7,
              color: "#94a3b8",
              margin: "0 auto 40px auto",
              maxWidth: 560,
            }}
          >
            {t.subtitle}
          </p>

          {/* Metric cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {t.metrics.map((metric, i) => {
              const Icon = metricIconMap[metric.icon];
              return (
                <div
                  key={i}
                  className={mounted ? "hero07-fadeUp" : ""}
                  style={{
                    animationDelay: `${120 + i * 40}ms`,
                    background: "rgba(6,182,212,0.06)",
                    border: "1px solid rgba(6,182,212,0.15)",
                    borderRadius: 10,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    minWidth: 180,
                  }}
                >
                  <Icon
                    size={20}
                    color="#06b6d4"
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: fontBody,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#e2e8f0",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={mounted ? "hero07-fadeUp" : ""}
            style={{ animationDelay: "240ms" }}
          >
            <button
              className="hero07-glow"
              style={{
                cursor: "pointer",
                background: "#06b6d4",
                color: "#030712",
                border: "none",
                borderRadius: 8,
                padding: "14px 36px",
                fontSize: 16,
                fontWeight: 700,
                fontFamily: fontBody,
                minHeight: 48,
                minWidth: 44,
                transition:
                  "opacity 0.2s ease-out, transform 0.2s ease-out",
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
      </section>
    </>
  );
}
