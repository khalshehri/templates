"use client";

import { useState, useEffect } from "react";
import { Layers, Zap, Lock, ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "New: Horizon 2.0",
    heading: "The workspace that works with you",
    sub: "Unify projects, automate workflows, and scale your team — all in one platform.",
    cta: "Start Free Trial",
    ctaSub: "No credit card required",
    stats: [
      { value: 99.9, suffix: "%", label: "Uptime" },
      { value: 10, suffix: "K+", label: "Teams" },
    ],
    features: [
      { icon: Zap, title: "Lightning Fast", desc: "Sub-second response times globally" },
      { icon: Lock, title: "Enterprise Security", desc: "SOC2, GDPR, and ISO certified" },
    ],
    ctaCard: {
      heading: "Ready to transform your workflow?",
      cta: "Start Free Trial",
    },
  },
  ar: {
    badge: "جديد: هورايزن 2.0",
    heading: "مساحة العمل التي تعمل معك",
    sub: "وحّد المشاريع وأتمت سير العمل ووسّع فريقك — كل ذلك في منصة واحدة.",
    cta: "ابدأ مجاناً",
    ctaSub: "لا حاجة لبطاقة ائتمان",
    stats: [
      { value: 99.9, suffix: "%", label: "وقت التشغيل" },
      { value: 10, suffix: "K+", label: "فريق" },
    ],
    features: [
      { icon: Zap, title: "سرعة البرق", desc: "أوقات استجابة أقل من ثانية عالمياً" },
      { icon: Lock, title: "أمان مؤسسي", desc: "معتمد SOC2 و GDPR و ISO" },
    ],
    ctaCard: {
      heading: "مستعد لتحويل سير عملك؟",
      cta: "ابدأ مجاناً",
    },
  },
};

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(target);
        clearInterval(interval);
      } else {
        setCurrent(Number((increment * step).toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}

export function Hero01({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-cairo)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-cairo)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes h01FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes h01Pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @media (prefers-reduced-motion: reduce) {
          .h01-animate { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <section
        style={{
          background: "#f5f5f7",
          minHeight: "100vh",
          fontFamily: fontBody,
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "16px",
          }}
          className="h01-grid"
        >
          {/* HERO TEXT — spans 2 cols, 2 rows */}
          <div
            className="h01-animate h01-hero-text"
            style={{
              gridColumn: "1 / 3",
              gridRow: "1 / 3",
              background: "#ffffff",
              borderRadius: "24px",
              padding: "clamp(24px, 5vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
              animation: "h01FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "0ms",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)";
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#0071e3",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: "999px",
                marginBottom: "24px",
                width: "fit-content",
                fontFamily: fontBody,
              }}
            >
              <Layers size={14} />
              {t.badge}
            </div>

            <h1
              style={{
                fontFamily: fontHeading,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              {t.heading}
            </h1>

            <p
              style={{
                color: "#6e6e73",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                lineHeight: 1.6,
                maxWidth: "540px",
                marginBottom: "32px",
                fontFamily: fontBody,
              }}
            >
              {t.sub}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <button
                className="cursor-pointer"
                style={{
                  background: "#0071e3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "14px",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: fontBody,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0062c4")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#0071e3")}
              >
                {t.cta}
                <ArrowRight size={18} />
              </button>
              <span style={{ color: "#86868b", fontSize: "14px", fontFamily: fontBody }}>{t.ctaSub}</span>
            </div>
          </div>

          {/* STAT CARDS */}
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="h01-animate h01-stat-card"
              style={{
                gridColumn: "3 / 4",
                background: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                animation: "h01FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
                animationDelay: `${(i + 1) * 50}ms`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#1d1d1f",
                  fontFamily: fontHeading,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ color: "#86868b", fontSize: "14px", fontWeight: 500, fontFamily: fontBody }}>
                {stat.label}
              </div>
            </div>
          ))}

          {/* FEATURE CARDS */}
          {t.features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="h01-animate h01-feature-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  padding: "32px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                  animation: "h01FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
                  animationDelay: `${(i + 3) * 50}ms`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "rgba(0,113,227,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon size={22} color="#0071e3" />
                </div>
                <h3
                  style={{
                    fontFamily: fontHeading,
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#1d1d1f",
                    marginBottom: "6px",
                  }}
                >
                  {feat.title}
                </h3>
                <p style={{ color: "#86868b", fontSize: "14px", lineHeight: 1.5, fontFamily: fontBody }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}

          {/* CTA CARD — dark, spans last column row 2 */}
          <div
            className="h01-animate h01-cta-card"
            style={{
              background: "#1d1d1f",
              borderRadius: "24px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
              animation: "h01FadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "250ms",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)";
            }}
          >
            {/* Decorative gradient arc */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "#0071e3",
                borderRightColor: "#34c759",
                opacity: 0.3,
              }}
            />
            <h3
              style={{
                fontFamily: fontHeading,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                marginBottom: "20px",
                lineHeight: 1.3,
              }}
            >
              {t.ctaCard.heading}
            </h3>
            <button
              className="cursor-pointer"
              style={{
                background: "#0071e3",
                color: "#fff",
                border: "none",
                borderRadius: "14px",
                padding: "12px 24px",
                fontSize: "15px",
                fontWeight: 600,
                fontFamily: fontBody,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0062c4")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0071e3")}
            >
              {t.ctaCard.cta}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .h01-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .h01-hero-text {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
          }
          .h01-stat-card {
            grid-column: 1 / -1 !important;
          }
          .h01-feature-card {
            grid-column: 1 / -1 !important;
          }
          .h01-cta-card {
            grid-column: 1 / -1 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .h01-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .h01-hero-text {
            grid-column: 1 / 3 !important;
            grid-row: auto !important;
          }
          .h01-stat-card {
            grid-column: auto !important;
          }
          .h01-cta-card {
            grid-column: 1 / 3 !important;
          }
        }
      `}</style>
    </>
  );
}
