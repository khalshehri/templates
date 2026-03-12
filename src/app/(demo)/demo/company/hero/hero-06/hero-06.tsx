"use client";

import { useState, useEffect } from "react";
import { Truck, MapPin, Clock, Package, Globe } from "lucide-react";

interface Hero06Props {
  language: "en" | "ar";
}

const routeData = {
  en: {
    regions: ["Americas", "Europe", "Asia", "Middle East"],
    routes: {
      Americas: [
        { from: "New York", to: "São Paulo", percent: 82 },
        { from: "Miami", to: "Mexico City", percent: 95 },
        { from: "LA", to: "Vancouver", percent: 67 },
        { from: "Chicago", to: "Buenos Aires", percent: 41 },
      ],
      Europe: [
        { from: "London", to: "Berlin", percent: 88 },
        { from: "Paris", to: "Madrid", percent: 73 },
        { from: "Amsterdam", to: "Rome", percent: 56 },
        { from: "Stockholm", to: "Athens", percent: 34 },
      ],
      Asia: [
        { from: "Shanghai", to: "Tokyo", percent: 91 },
        { from: "Singapore", to: "Mumbai", percent: 68 },
        { from: "Seoul", to: "Sydney", percent: 77 },
        { from: "Dubai", to: "Bangkok", percent: 45 },
      ],
      "Middle East": [
        { from: "Riyadh", to: "Dubai", percent: 96 },
        { from: "Jeddah", to: "Cairo", percent: 84 },
        { from: "Doha", to: "Muscat", percent: 71 },
        { from: "Kuwait", to: "Amman", percent: 58 },
      ],
    },
  },
  ar: {
    regions: ["الأمريكتين", "أوروبا", "آسيا", "الشرق الأوسط"],
    routes: {
      "الأمريكتين": [
        { from: "نيويورك", to: "ساو باولو", percent: 82 },
        { from: "ميامي", to: "مكسيكو سيتي", percent: 95 },
        { from: "لوس أنجلوس", to: "فانكوفر", percent: 67 },
        { from: "شيكاغو", to: "بوينس آيرس", percent: 41 },
      ],
      "أوروبا": [
        { from: "لندن", to: "برلين", percent: 88 },
        { from: "باريس", to: "مدريد", percent: 73 },
        { from: "أمستردام", to: "روما", percent: 56 },
        { from: "ستوكهولم", to: "أثينا", percent: 34 },
      ],
      "آسيا": [
        { from: "شنغهاي", to: "طوكيو", percent: 91 },
        { from: "سنغافورة", to: "مومباي", percent: 68 },
        { from: "سيول", to: "سيدني", percent: 77 },
        { from: "دبي", to: "بانكوك", percent: 45 },
      ],
      "الشرق الأوسط": [
        { from: "الرياض", to: "دبي", percent: 96 },
        { from: "جدة", to: "القاهرة", percent: 84 },
        { from: "الدوحة", to: "مسقط", percent: 71 },
        { from: "الكويت", to: "عمّان", percent: 58 },
      ],
    },
  },
};

const content = {
  en: {
    badge: "ATLAS FREIGHT",
    heading: "GLOBAL LOGISTICS",
    accent: "COMMAND CENTER",
    sub: "End-to-end supply chain solutions powered by real-time tracking, AI optimization, and a fleet that never sleeps.",
    cta1: "Track Shipment",
    cta2: "Get a Quote",
    stats: [
      { label: "Shipments/Year", value: 1200000, display: "1.2M" },
      { label: "Countries", value: 120, suffix: "+" },
      { label: "Fleet Size", value: 3500, suffix: "" },
      { label: "On-Time", value: 99.2, suffix: "%" },
    ],
    deliveryTracker: "DELIVERY TRACKER",
    liveRoutes: "LIVE ROUTES",
  },
  ar: {
    badge: "أطلس للشحن",
    heading: "مركز قيادة",
    accent: "الخدمات اللوجستية",
    sub: "حلول سلسلة توريد شاملة مدعومة بالتتبع الفوري وتحسين الذكاء الاصطناعي وأسطول لا ينام.",
    cta1: "تتبع الشحنة",
    cta2: "احصل على عرض سعر",
    stats: [
      { label: "شحنات/سنة", value: 1200000, display: "1.2M" },
      { label: "دولة", value: 120, suffix: "+" },
      { label: "حجم الأسطول", value: 3500, suffix: "" },
      { label: "التسليم بالوقت", value: 99.2, suffix: "%" },
    ],
    deliveryTracker: "متتبع التوصيل",
    liveRoutes: "المسارات المباشرة",
  },
};

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let frame: number;

    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return count;
}

function formatStatValue(value: number, index: number) {
  if (index === 0) return (value / 1000000).toFixed(1) + "M";
  if (index === 3) return value.toFixed(1);
  return Math.floor(value).toLocaleString();
}

function getBarColor(percent: number) {
  if (percent >= 80) return "#22c55e";
  if (percent >= 60) return "#3b82f6";
  if (percent >= 45) return "#f59e0b";
  return "#f59e0b";
}

export function Hero06({ language }: Hero06Props) {
  const t = content[language];
  const rd = routeData[language];
  const isAr = language === "ar";
  const fontFamily = isAr ? "var(--font-tajawal)" : "var(--font-rubik)";

  const [activeRegion, setActiveRegion] = useState(0);
  const [animatedBars, setAnimatedBars] = useState(false);

  const stat0 = useCountUp(1200000, 2500);
  const stat1 = useCountUp(120, 2000);
  const stat2 = useCountUp(3500, 2000);
  const stat3 = useCountUp(99.2, 2000);
  const statValues = [stat0, stat1, stat2, stat3];

  const regionName = rd.regions[activeRegion];
  const routeMap = rd.routes as Record<string, { from: string; to: string; percent: number }[]>;
  const routes = routeMap[regionName] || [];

  useEffect(() => {
    setAnimatedBars(false);
    const timer = setTimeout(() => setAnimatedBars(true), 100);
    return () => clearTimeout(timer);
  }, [activeRegion]);

  return (
    <section
      style={{
        fontFamily,
        background: "#0c1220",
        color: "#e0e4ec",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style>{`
        @keyframes fadeInUp06 {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes barFill {
          from { width: 0%; }
        }
        .af-fade-in { animation: fadeInUp06 0.7s ease-out forwards; opacity: 0; }
        .af-fade-1 { animation-delay: 0.1s; }
        .af-fade-2 { animation-delay: 0.25s; }
        .af-fade-3 { animation-delay: 0.4s; }
        .af-fade-4 { animation-delay: 0.55s; }
      `}</style>

      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          alignItems: "center",
          direction: isAr ? "rtl" : "ltr",
        }}
      >
        {/* Left side */}
        <div style={{ flex: "1 1 480px", minWidth: "320px" }}>
          {/* Badge */}
          <div className="af-fade-in af-fade-1" style={{ marginBottom: "24px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.25)",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#3b82f6",
                textTransform: "uppercase",
              }}
            >
              <Truck size={14} />
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <div className="af-fade-in af-fade-2">
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 4px 0",
                color: "#e8ecf4",
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {t.heading}
            </h1>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 24px 0",
                color: "#3b82f6",
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {t.accent}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="af-fade-in af-fade-3"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#7a8599",
              maxWidth: "500px",
              margin: "0 0 32px 0",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="af-fade-in af-fade-3"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <button
              style={{
                padding: "14px 32px",
                background: "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 700,
                fontFamily,
                cursor: "pointer",
              }}
            >
              {t.cta1}
            </button>
            <button
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "#3b82f6",
                border: "1px solid rgba(59,130,246,0.35)",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily,
                cursor: "pointer",
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Stats */}
          <div
            className="af-fade-in af-fade-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {t.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(59,130,246,0.05)",
                  border: "1px solid rgba(59,130,246,0.1)",
                  borderRadius: "8px",
                  padding: "16px 12px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#3b82f6",
                    lineHeight: 1.2,
                  }}
                >
                  {formatStatValue(statValues[i], i)}
                  {stat.suffix || ""}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#5a6a80",
                    marginTop: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — Dashboard panel */}
        <div
          className="af-fade-in af-fade-4"
          style={{
            flex: "1 1 420px",
            minWidth: "320px",
            maxWidth: "500px",
            background: "rgba(12,18,36,0.9)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: "12px",
            padding: "0",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
          }}
        >
          {/* Panel header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 20px",
              borderBottom: "1px solid rgba(59,130,246,0.1)",
              background: "rgba(59,130,246,0.04)",
            }}
          >
            <Globe size={14} color="#3b82f6" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#5a6a80",
                textTransform: "uppercase",
              }}
            >
              {t.liveRoutes}
            </span>
          </div>

          {/* Region tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid rgba(59,130,246,0.1)",
            }}
          >
            {rd.regions.map((region, i) => {
              const isActive = activeRegion === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveRegion(i)}
                  style={{
                    flex: 1,
                    padding: "10px 8px",
                    background: isActive ? "rgba(59,130,246,0.1)" : "transparent",
                    color: isActive ? "#3b82f6" : "#5a6a80",
                    border: "none",
                    borderBottom: isActive ? "2px solid #3b82f6" : "2px solid transparent",
                    fontSize: "0.75rem",
                    fontWeight: isActive ? 700 : 500,
                    fontFamily,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {region}
                </button>
              );
            })}
          </div>

          {/* Delivery Tracker header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 20px 8px 20px",
            }}
          >
            <Package size={13} color="#3b82f6" />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#5a6a80",
                textTransform: "uppercase",
              }}
            >
              {t.deliveryTracker}
            </span>
          </div>

          {/* Route bars */}
          <div style={{ padding: "8px 20px 20px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
            {routes.map((route, i) => {
              const barColor = getBarColor(route.percent);
              return (
                <div key={`${activeRegion}-${i}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "6px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <MapPin size={11} color={barColor} />
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#a0aec0",
                          fontWeight: 500,
                        }}
                      >
                        {route.from}
                        <span style={{ color: "#4a5568", margin: "0 4px" }}>→</span>
                        {route.to}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: barColor,
                      }}
                    >
                      {route.percent}%
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      background: "rgba(59,130,246,0.08)",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: animatedBars ? `${route.percent}%` : "0%",
                        height: "100%",
                        background: barColor,
                        borderRadius: "3px",
                        transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
                        transitionDelay: `${i * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer with clock */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "12px",
              borderTop: "1px solid rgba(59,130,246,0.08)",
              background: "rgba(59,130,246,0.02)",
            }}
          >
            <Clock size={11} color="#5a6a80" />
            <span style={{ fontSize: "0.7rem", color: "#4a5568" }}>
              {isAr ? "تحديث مباشر" : "Real-time updates"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
