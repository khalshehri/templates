"use client";

import { useState, useEffect } from "react";
import { Building2 } from "lucide-react";

interface Hero01Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "#1 Digital Transformation Partner",
    heading: "Powering the Next Generation",
    accent: "of Business",
    sub: "We deliver enterprise solutions that transform operations, accelerate growth, and drive measurable results across every industry.",
    cta1: "Start Your Project",
    cta2: "View Case Studies",
    trust: "Trusted by 500+ enterprises worldwide",
    stats: [
      { value: 500, suffix: "+", label: "Clients" },
      { value: 1200, suffix: "+", label: "Projects" },
      { value: 35, suffix: "", label: "Countries" },
      { value: 18, suffix: "", label: "Years" },
    ],
  },
  ar: {
    badge: "#1 شريك التحول الرقمي",
    heading: "نقود الجيل القادم",
    accent: "من الأعمال",
    sub: "نقدم حلولاً مؤسسية تحوّل العمليات وتسرّع النمو وتحقق نتائج قابلة للقياس في كل قطاع.",
    cta1: "ابدأ مشروعك",
    cta2: "عرض دراسات الحالة",
    trust: "موثوق من قبل أكثر من 500 مؤسسة حول العالم",
    stats: [
      { value: 500, suffix: "+", label: "عملاء" },
      { value: 1200, suffix: "+", label: "مشاريع" },
      { value: 35, suffix: "", label: "دولة" },
      { value: 18, suffix: "", label: "سنوات" },
    ],
  },
};

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    setCount(0);
    const startTime = performance.now();
    let rafId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return count;
}

function formatNumber(n: number, isAr: boolean): string {
  if (isAr) {
    return n.toLocaleString("ar-SA");
  }
  return n.toLocaleString("en-US");
}

export function Hero01({ language }: Hero01Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stat0 = useCountUp(t.stats[0].value, 2000, mounted);
  const stat1 = useCountUp(t.stats[1].value, 2000, mounted);
  const stat2 = useCountUp(t.stats[2].value, 2000, mounted);
  const stat3 = useCountUp(t.stats[3].value, 2000, mounted);
  const statValues = [stat0, stat1, stat2, stat3];

  return (
    <>
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.4; }
        }
        .hero01-fade-up {
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero01-fade-up {
            animation: none;
            opacity: 1;
          }
          .hero01-grid-line {
            animation: none !important;
          }
          .hero01-dot {
            animation: none !important;
            opacity: 0.15 !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#0a0f1e",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: isAr ? "var(--font-cairo), sans-serif" : "var(--font-inter), sans-serif",
        }}
      >
        {/* Animated grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          {/* Vertical lines */}
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="hero01-grid-line"
              style={{
                position: "absolute",
                left: `${i * 60}px`,
                top: 0,
                bottom: 0,
                width: "1px",
                background: "#3b82f6",
                opacity: 0.04,
                animation: `gridPulse ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i % 5) * 0.4}s`,
              }}
            />
          ))}
          {/* Horizontal lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="hero01-grid-line"
              style={{
                position: "absolute",
                top: `${i * 60}px`,
                left: 0,
                right: 0,
                height: "1px",
                background: "#3b82f6",
                opacity: 0.04,
                animation: `gridPulse ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i % 5) * 0.4}s`,
              }}
            />
          ))}
          {/* Intersection dots */}
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => (
              <div
                key={`dot-${row}-${col}`}
                className="hero01-dot"
                style={{
                  position: "absolute",
                  left: `${col * 120 + 60}px`,
                  top: `${row * 120 + 60}px`,
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "#06b6d4",
                  opacity: 0.15,
                  animation: `dotPulse ${2 + ((row + col) % 3)}s ease-in-out infinite`,
                  animationDelay: `${((row * 10 + col) % 7) * 0.3}s`,
                }}
              />
            ))
          )}
        </div>

        {/* Radial gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "900px",
            width: "100%",
            padding: "80px 24px 40px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            className="hero01-fade-up"
            style={{
              animationDelay: "0ms",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                color: "#3b82f6",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <Building2 size={16} />
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero01-fade-up"
            style={{
              animationDelay: "30ms",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              margin: "0 0 24px",
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {t.heading}
            <br />
            <span style={{ color: "#3b82f6" }}>{t.accent}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero01-fade-up"
            style={{
              animationDelay: "60ms",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "640px",
              margin: "0 auto 40px",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="hero01-fade-up"
            style={{
              animationDelay: "90ms",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "48px",
              flexDirection: isAr ? "row-reverse" : "row",
            }}
          >
            <button
              style={{
                padding: "16px 32px",
                borderRadius: "12px",
                background: "#3b82f6",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                fontFamily: "inherit",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(59, 130, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.3)";
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
                border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                transition: "transform 0.2s ease-out, border-color 0.2s ease-out",
                fontFamily: "inherit",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Trust line */}
          <p
            className="hero01-fade-up"
            style={{
              animationDelay: "120ms",
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.4)",
              marginBottom: "32px",
              fontWeight: 500,
            }}
          >
            {t.trust}
          </p>

          {/* Stats bar */}
          <div
            className="hero01-fade-up"
            style={{
              animationDelay: "150ms",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              padding: "32px 24px",
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            {t.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(24px, 4vw, 40px)",
                    fontWeight: 700,
                    color: i === 0 ? "#3b82f6" : i === 1 ? "#06b6d4" : "#ffffff",
                    lineHeight: 1.2,
                    direction: isAr ? "rtl" : "ltr",
                  }}
                >
                  {isAr
                    ? `${stat.suffix}${formatNumber(statValues[i], isAr)}`
                    : `${formatNumber(statValues[i], isAr)}${stat.suffix}`}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginTop: "4px",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
