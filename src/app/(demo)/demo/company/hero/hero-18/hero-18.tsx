"use client";

import { ArrowRight, Hexagon } from "lucide-react";

const content = {
  en: {
    badge: "Precision Design",
    heading1: "Structured",
    heading2: "Brilliance",
    sub: "Every pixel has purpose. Every interaction is intentional. We build digital products with the precision of Swiss engineering and the beauty of modern art.",
    cta1: "Start Building",
    cta2: "View Framework",
    feat1: "Modular Systems",
    feat2: "Clean Architecture",
    feat3: "Scalable Patterns",
    stat1Val: "200+",
    stat1Label: "Components",
    stat2Val: "50+",
    stat2Label: "Design Systems",
    stat3Val: "99%",
    stat3Label: "Code Coverage",
    stat4Val: "Zero",
    stat4Label: "Compromises",
  },
  ar: {
    badge: "تصميم دقيق",
    heading1: "تألق",
    heading2: "منظّم",
    sub: "كل بكسل له غرض. كل تفاعل مقصود. نبني منتجات رقمية بدقة الهندسة السويسرية وجمال الفن الحديث.",
    cta1: "ابدأ البناء",
    cta2: "عرض الإطار",
    feat1: "أنظمة معيارية",
    feat2: "بنية نظيفة",
    feat3: "أنماط قابلة للتوسع",
    stat1Val: "+200",
    stat1Label: "مكوّن",
    stat2Val: "+50",
    stat2Label: "نظام تصميم",
    stat3Val: "99%",
    stat3Label: "تغطية الكود",
    stat4Val: "صفر",
    stat4Label: "تنازلات",
  },
};

interface GeoShape {
  type: "hexagon" | "triangle" | "diamond" | "circle";
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  animClass: string;
}

const pastelColors = [
  "#dbeafe", // blue-100
  "#ede9fe", // violet-100
  "#fce7f3", // pink-100
  "#d1fae5", // emerald-100
  "#fef3c7", // amber-100
];

const shapes: GeoShape[] = [
  // Hexagons (5)
  { type: "hexagon", x: 42, y: 8, size: 90, color: pastelColors[0], opacity: 0.5, animClass: "geo-rotate-1" },
  { type: "hexagon", x: 68, y: 22, size: 70, color: pastelColors[1], opacity: 0.4, animClass: "geo-pulse-1" },
  { type: "hexagon", x: 55, y: 55, size: 60, color: pastelColors[3], opacity: 0.35, animClass: "geo-rotate-2" },
  { type: "hexagon", x: 80, y: 72, size: 100, color: pastelColors[0], opacity: 0.3, animClass: "geo-pulse-2" },
  { type: "hexagon", x: 48, y: 82, size: 120, color: pastelColors[4], opacity: 0.3, animClass: "geo-rotate-3" },
  // Triangles (4)
  { type: "triangle", x: 60, y: 12, size: 50, color: pastelColors[2], opacity: 0.45, animClass: "geo-rotate-2" },
  { type: "triangle", x: 85, y: 40, size: 70, color: pastelColors[4], opacity: 0.4, animClass: "geo-pulse-1" },
  { type: "triangle", x: 45, y: 38, size: 40, color: pastelColors[1], opacity: 0.5, animClass: "geo-rotate-1" },
  { type: "triangle", x: 72, y: 88, size: 80, color: pastelColors[3], opacity: 0.35, animClass: "geo-rotate-3" },
  // Diamonds (3)
  { type: "diamond", x: 78, y: 10, size: 40, color: pastelColors[3], opacity: 0.5, animClass: "geo-pulse-2" },
  { type: "diamond", x: 50, y: 65, size: 55, color: pastelColors[2], opacity: 0.4, animClass: "geo-rotate-1" },
  { type: "diamond", x: 90, y: 58, size: 30, color: pastelColors[0], opacity: 0.6, animClass: "geo-pulse-1" },
  // Circles (4)
  { type: "circle", x: 65, y: 42, size: 35, color: pastelColors[4], opacity: 0.45, animClass: "geo-pulse-2" },
  { type: "circle", x: 88, y: 25, size: 25, color: pastelColors[2], opacity: 0.5, animClass: "geo-rotate-2" },
  { type: "circle", x: 53, y: 92, size: 50, color: pastelColors[1], opacity: 0.35, animClass: "geo-pulse-1" },
  { type: "circle", x: 75, y: 5, size: 20, color: pastelColors[3], opacity: 0.55, animClass: "geo-rotate-3" },
];

function getClipPath(type: GeoShape["type"]): string | undefined {
  switch (type) {
    case "hexagon":
      return "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
    case "triangle":
      return "polygon(50% 0%, 0% 100%, 100% 100%)";
    case "diamond":
      return "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
    default:
      return undefined;
  }
}

export function Hero18({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const featureColors = ["#2563eb", "#7c3aed", "#059669"];
  const features = [
    { label: t.feat1, color: featureColors[0] },
    { label: t.feat2, color: featureColors[1] },
    { label: t.feat3, color: featureColors[2] },
  ];

  const stats = [
    { value: t.stat1Val, label: t.stat1Label },
    { value: t.stat2Val, label: t.stat2Label },
    { value: t.stat3Val, label: t.stat3Label },
    { value: t.stat4Val, label: t.stat4Label },
  ];

  return (
    <>
      <style>{`
        @keyframes shapeRotate1 {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes shapeRotate2 {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes shapeRotate3 {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes shapePulse1 {
          0%, 100% { transform: scale(0.95); }
          50% { transform: scale(1.05); }
        }
        @keyframes shapePulse2 {
          0%, 100% { transform: scale(1.0); }
          50% { transform: scale(1.05); }
        }
        @keyframes hexSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes contentSlide {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes contentSlideRtl {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .geo-rotate-1 { animation: shapeRotate1 12s ease-in-out infinite; }
        .geo-rotate-2 { animation: shapeRotate2 16s ease-in-out infinite; }
        .geo-rotate-3 { animation: shapeRotate3 20s ease-in-out infinite; }
        .geo-pulse-1 { animation: shapePulse1 10s ease-in-out infinite; }
        .geo-pulse-2 { animation: shapePulse2 14s ease-in-out infinite; }
        .geo-hex-spin { animation: hexSpin 60s linear infinite; }
        .geo-content-slide { animation: contentSlide 0.8s ease-out both; }
        .geo-content-slide-rtl { animation: contentSlideRtl 0.8s ease-out both; }
        .geo-fade-in { animation: fadeIn 0.6s ease-out both; }
        .geo-fade-in-up { animation: fadeInUp 0.7s ease-out both; }
        .geo-fade-in-up-d1 { animation: fadeInUp 0.7s ease-out 0.1s both; }
        .geo-fade-in-up-d2 { animation: fadeInUp 0.7s ease-out 0.2s both; }
        .geo-fade-in-up-d3 { animation: fadeInUp 0.7s ease-out 0.3s both; }
        .geo-fade-in-up-d4 { animation: fadeInUp 0.7s ease-out 0.4s both; }
        .geo-fade-in-up-d5 { animation: fadeInUp 0.7s ease-out 0.5s both; }
        .geo-fade-in-up-d6 { animation: fadeInUp 0.7s ease-out 0.6s both; }

        @media (prefers-reduced-motion: reduce) {
          .geo-rotate-1,
          .geo-rotate-2,
          .geo-rotate-3,
          .geo-pulse-1,
          .geo-pulse-2,
          .geo-hex-spin,
          .geo-content-slide,
          .geo-content-slide-rtl,
          .geo-fade-in,
          .geo-fade-in-up,
          .geo-fade-in-up-d1,
          .geo-fade-in-up-d2,
          .geo-fade-in-up-d3,
          .geo-fade-in-up-d4,
          .geo-fade-in-up-d5,
          .geo-fade-in-up-d6 {
            animation: none !important;
          }
        }
      `}</style>

      <section
        dir={isAr ? "rtl" : "ltr"}
        style={{
          fontFamily: fontBody,
          background: "#f8fafc",
          position: "relative",
          overflow: "hidden",
        }}
        className="min-h-screen"
      >
        {/* Background geometric shapes */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          {shapes.map((shape, i) => {
            const clipPath = getClipPath(shape.type);
            return (
              <div
                key={i}
                className={shape.animClass}
                style={{
                  position: "absolute",
                  left: `${shape.x}%`,
                  top: `${shape.y}%`,
                  width: shape.size,
                  height: shape.size,
                  opacity: shape.opacity,
                  ...(clipPath
                    ? {
                        clipPath,
                        backgroundColor: shape.color,
                      }
                    : {
                        backgroundColor: shape.color,
                        borderRadius: "50%",
                      }),
                }}
              />
            );
          })}
        </div>

        {/* Large geometric accent — right side */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            ...(isAr ? { left: "5%" } : { right: "5%" }),
            transform: "translateY(-50%)",
            width: 320,
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
          aria-hidden="true"
          className="hidden lg:flex"
        >
          {/* Outer hexagon ring */}
          <div
            className="geo-hex-spin"
            style={{
              position: "absolute",
              width: 280,
              height: 280,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              background: "#dbeafe",
              opacity: 0.5,
            }}
          />
          {/* Middle hexagon */}
          <div
            className="geo-hex-spin"
            style={{
              position: "absolute",
              width: 200,
              height: 200,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              border: "2px solid rgba(59, 130, 246, 0.2)",
              background: "rgba(219, 234, 254, 0.3)",
              animationDirection: "reverse",
              animationDuration: "45s",
            }}
          />
          {/* Inner hexagon */}
          <div
            className="geo-hex-spin"
            style={{
              position: "absolute",
              width: 130,
              height: 130,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              background: "rgba(219, 234, 254, 0.4)",
              border: "1.5px solid rgba(59, 130, 246, 0.15)",
              animationDuration: "30s",
            }}
          />
          {/* Center hexagon */}
          <div
            className="geo-hex-spin"
            style={{
              position: "absolute",
              width: 70,
              height: 70,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              background: "rgba(37, 99, 235, 0.12)",
              animationDirection: "reverse",
              animationDuration: "20s",
            }}
          />
          {/* Accent border hexagon */}
          <div
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              border: "2px solid rgba(37, 99, 235, 0.2)",
              background: "transparent",
            }}
          />
        </div>

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1280,
            marginInline: "auto",
            paddingInline: 24,
            paddingTop: 80,
            paddingBottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          {/* Left column content */}
          <div
            style={{ maxWidth: 680 }}
            className={isAr ? "geo-content-slide-rtl" : "geo-content-slide"}
          >
            {/* Badge */}
            <div
              className="geo-fade-in-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 9999,
                background: "rgba(37, 99, 235, 0.08)",
                border: "1px solid rgba(37, 99, 235, 0.15)",
                marginBottom: 28,
              }}
            >
              <Hexagon size={14} color="#2563eb" strokeWidth={2.5} />
              <span
                style={{
                  fontFamily: fontBody,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#2563eb",
                  letterSpacing: isAr ? 0 : "0.02em",
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="geo-fade-in-up-d1"
              style={{
                fontFamily: fontHeading,
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: isAr ? 0 : "-0.03em",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#0f172a",
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                }}
              >
                {t.heading1}
              </span>
              <span
                style={{
                  display: "block",
                  color: "#2563eb",
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                }}
              >
                {t.heading2}
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="geo-fade-in-up-d2"
              style={{
                fontFamily: fontBody,
                fontSize: 18,
                lineHeight: 1.7,
                color: "#64748b",
                maxWidth: 540,
                marginBottom: 36,
              }}
            >
              {t.sub}
            </p>

            {/* CTA buttons */}
            <div
              className="geo-fade-in-up-d3"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 44,
              }}
            >
              <button
                className="cursor-pointer"
                style={{
                  fontFamily: fontBody,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 10,
                  background: "#2563eb",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 600,
                  border: "none",
                  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 1px 3px rgba(37, 99, 235, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1d4ed8";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(37, 99, 235, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563eb";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(37, 99, 235, 0.2)";
                }}
              >
                {t.cta1}
                <ArrowRight
                  size={16}
                  style={{
                    transform: isAr ? "scaleX(-1)" : "none",
                  }}
                />
              </button>
              <button
                className="cursor-pointer"
                style={{
                  fontFamily: fontBody,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 10,
                  background: "transparent",
                  color: "#0f172a",
                  fontSize: 15,
                  fontWeight: 600,
                  border: "1.5px solid #e2e8f0",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#94a3b8";
                  e.currentTarget.style.background = "rgba(241, 245, 249, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {t.cta2}
              </button>
            </div>

            {/* Features */}
            <div
              className="geo-fade-in-up-d4"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              {features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: feat.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: fontBody,
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#334155",
                    }}
                  >
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats bar */}
          <div
            className="geo-fade-in-up-d5"
            style={{
              marginTop: "auto",
              paddingTop: 48,
              paddingBottom: 40,
            }}
          >
            <div
              style={{
                borderTop: "1px solid #e2e8f0",
                paddingTop: 32,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                maxWidth: 700,
              }}
            >
              {stats.map((stat, i) => (
                <div key={i} className={`geo-fade-in-up-d${i + 3}`}>
                  <div
                    style={{
                      fontFamily: fontHeading,
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: fontBody,
                      fontSize: 13,
                      color: "#94a3b8",
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
