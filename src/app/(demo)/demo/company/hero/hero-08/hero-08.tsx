"use client";

import { ArrowRight, Building2, Target, TrendingUp } from "lucide-react";

const content = {
  en: {
    badge: "Built on Pillars of Excellence",
    heading: ["Three Pillars", "One Vision"],
    sub: "Our foundation rests on strategy, precision, and growth — three unshakeable pillars that support every client engagement.",
    cta1: "Build With Us",
    cta2: "Our Foundation",
    features: [
      {
        icon: Building2,
        title: "Strategy",
        desc: "Architecting pathways to sustainable growth",
      },
      {
        icon: Target,
        title: "Precision",
        desc: "Data-driven decisions with measurable impact",
      },
      {
        icon: TrendingUp,
        title: "Growth",
        desc: "Scaling operations for exponential returns",
      },
    ],
    stats: [
      { label: "Founded", value: "2008" },
      { label: "Revenue", value: "$3.2B" },
      { label: "Team", value: "12,000+" },
      { label: "Countries", value: "40" },
    ],
  },
  ar: {
    badge: "مبنية على أعمدة التميز",
    heading: ["ثلاثة أعمدة", "رؤية واحدة"],
    sub: "أساسنا يرتكز على الاستراتيجية والدقة والنمو — ثلاثة أعمدة راسخة تدعم كل مشروع.",
    cta1: "ابنِ معنا",
    cta2: "أساسنا",
    features: [
      {
        icon: Building2,
        title: "الاستراتيجية",
        desc: "بناء مسارات للنمو المستدام",
      },
      {
        icon: Target,
        title: "الدقة",
        desc: "قرارات مبنية على البيانات بنتائج قابلة للقياس",
      },
      {
        icon: TrendingUp,
        title: "النمو",
        desc: "توسيع العمليات لتحقيق عوائد مضاعفة",
      },
    ],
    stats: [
      { label: "التأسيس", value: "٢٠٠٨" },
      { label: "الإيرادات", value: "٣.٢ مليار$" },
      { label: "الفريق", value: "+١٢,٠٠٠" },
      { label: "الدول", value: "٤٠" },
    ],
  },
};

const pillarConfigs = [
  { left: "20%", height: "70%", width: "80px", delay: "0.3s", grooves: 8 },
  { left: "50%", height: "80%", width: "100px", delay: "0.5s", grooves: 10 },
  { left: "80%", height: "72%", width: "85px", delay: "0.7s", grooves: 9 },
];

export function Hero08({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <>
      <style>{`
        @keyframes pillarRise {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        @keyframes shimmerUp {
          0% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes cardFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentFade {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes statSlide {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero08-pillar,
          .hero08-card,
          .hero08-content,
          .hero08-stat {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero08-shimmer {
            animation: none !important;
          }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden"
        style={{
          background: "#060e1a",
          fontFamily: fontBody,
        }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* === PILLARS === */}
        {pillarConfigs.map((p, i) => (
          <div
            key={i}
            className="hero08-pillar"
            style={{
              position: "absolute",
              bottom: 0,
              left: p.left,
              transform: "translateX(-50%)",
              width: p.width,
              height: p.height,
              transformOrigin: "bottom",
              animation: `pillarRise 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${p.delay} both`,
              zIndex: 1,
            }}
          >
            {/* Pillar body gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "4px 4px 0 0",
                background: "linear-gradient(180deg, #0c1e36 0%, #0a1628 100%)",
                border: "1px solid rgba(148,163,184,0.08)",
                borderBottom: "none",
              }}
            />

            {/* Crown / capital at top */}
            <div
              style={{
                position: "absolute",
                top: "-4px",
                left: "-8px",
                right: "-8px",
                height: "20px",
                borderRadius: "3px 3px 0 0",
                background: "linear-gradient(180deg, #0f2740 0%, #0c1e36 100%)",
                border: "1px solid rgba(148,163,184,0.1)",
                borderBottom: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "-4px",
                right: "-4px",
                height: "6px",
                background: "linear-gradient(180deg, rgba(148,163,184,0.06) 0%, transparent 100%)",
              }}
            />

            {/* Groove lines */}
            {Array.from({ length: p.grooves }).map((_, gi) => (
              <div
                key={gi}
                style={{
                  position: "absolute",
                  left: "10%",
                  right: "10%",
                  height: "1px",
                  top: `${((gi + 1) / (p.grooves + 1)) * 100}%`,
                  background: "rgba(148,163,184,0.06)",
                }}
              />
            ))}

            {/* Shimmer overlay */}
            <div
              className="hero08-shimmer"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "4px 4px 0 0",
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(148,163,184,0.08) 45%, transparent 55%, transparent 100%)",
                backgroundSize: "100% 300%",
                animation: `shimmerUp 3s ease-in-out infinite`,
                animationDelay: `${1.2 + parseFloat(p.delay)}s`,
              }}
            />
          </div>
        ))}

        {/* === MAIN CONTENT (above pillars) === */}
        <div
          className="relative flex flex-col items-center justify-center"
          style={{ zIndex: 10, minHeight: "100vh", padding: "120px 24px 0" }}
        >
          {/* Badge */}
          <div
            className="hero08-content"
            style={{
              animation: "contentFade 0.8s ease-out 1.0s both",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.2)",
                color: "#fbbf24",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: fontBody,
                letterSpacing: isAr ? undefined : "0.02em",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#f59e0b",
                }}
              />
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <div
            className="hero08-content"
            style={{
              animation: "contentFade 0.8s ease-out 1.2s both",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <h1
              style={{
                fontFamily: fontHeading,
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#f1f5f9",
                margin: 0,
              }}
            >
              {t.heading[0]}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.heading[1]}
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            className="hero08-content"
            style={{
              animation: "contentFade 0.8s ease-out 1.4s both",
              maxWidth: "580px",
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "18px",
              lineHeight: 1.7,
              margin: "0 0 36px",
              fontFamily: fontBody,
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="hero08-content"
            style={{
              animation: "contentFade 0.8s ease-out 1.6s both",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "64px",
            }}
          >
            <button
              className="cursor-pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                color: "#0a0a0a",
                fontWeight: 700,
                fontSize: "16px",
                border: "none",
                fontFamily: fontBody,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(245,158,11,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t.cta1}
              <ArrowRight
                size={18}
                style={{
                  transform: isAr ? "scaleX(-1)" : undefined,
                }}
              />
            </button>
            <button
              className="cursor-pointer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.04)",
                color: "#e2e8f0",
                fontWeight: 600,
                fontSize: "16px",
                border: "1px solid rgba(148,163,184,0.15)",
                fontFamily: fontBody,
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.15)";
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* === FEATURE CARDS (between pillars) === */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              width: "100%",
              maxWidth: "900px",
              marginBottom: "80px",
            }}
          >
            {t.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="hero08-card"
                  style={{
                    animation: `cardFadeIn 0.6s ease-out ${1.8 + i * 0.15}s both`,
                    padding: "28px 24px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(148,163,184,0.08)",
                    textAlign: isAr ? "right" : "left",
                    transition: "border-color 0.3s, background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(245,158,11,0.25)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(148,163,184,0.08)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(245,158,11,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={22} color="#f59e0b" />
                  </div>
                  <h3
                    style={{
                      fontFamily: fontHeading,
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#f1f5f9",
                      margin: "0 0 8px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: "14px",
                      color: "#64748b",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* === STATS BAR === */}
          <div
            style={{
              width: "100%",
              maxWidth: "960px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(148,163,184,0.08)",
              padding: "24px 0",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              marginBottom: "60px",
            }}
          >
            {t.stats.map((s, i) => (
              <div
                key={i}
                className="hero08-stat"
                style={{
                  animation: `statSlide 0.5s ease-out ${2.2 + i * 0.1}s both`,
                  textAlign: "center",
                  borderRight:
                    i < 3
                      ? isAr
                        ? "none"
                        : "1px solid rgba(148,163,184,0.08)"
                      : "none",
                  borderLeft:
                    i < 3
                      ? isAr
                        ? "1px solid rgba(148,163,184,0.08)"
                        : "none"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: fontHeading,
                    fontWeight: 800,
                    fontSize: "24px",
                    color: "#fbbf24",
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: fontBody,
                    fontSize: "13px",
                    color: "#64748b",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
