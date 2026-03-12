"use client";

import { useState, useEffect } from "react";
import { Shield, AlertTriangle, CheckCircle, Activity } from "lucide-react";

interface Hero04Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "CYBERVAULT SECURITY",
    heading: "YOUR DIGITAL",
    accent: "FORTRESS",
    sub: "Enterprise-grade cybersecurity protecting critical infrastructure across 45 countries. Zero breaches. Zero compromises.",
    cta1: "Get Protected",
    cta2: "Threat Assessment",
    stats: [
      { label: "Threats Blocked", value: 2400000, suffix: "", display: "2.4M" },
      { label: "Uptime", value: 99.99, suffix: "%", display: "99.99%" },
      { label: "Clients", value: 850, suffix: "+", display: "850+" },
    ],
    threatLevel: "THREAT LEVEL",
    threatValue: "ELEVATED",
    recentAlerts: "RECENT ALERTS",
    alerts: [
      "Blocked DDoS attempt — 14:32 UTC",
      "Firewall rule updated — 14:28 UTC",
      "Vulnerability scan complete — 14:15 UTC",
    ],
    systemStatus: "SYSTEM STATUS",
    statusItems: ["Firewall", "IDS/IPS", "Encryption"],
  },
  ar: {
    badge: "سايبر فولت للأمن",
    heading: "حصنك",
    accent: "الرقمي",
    sub: "أمن سيبراني بمستوى المؤسسات يحمي البنية التحتية الحيوية في 45 دولة. صفر اختراقات. صفر تنازلات.",
    cta1: "احصل على الحماية",
    cta2: "تقييم التهديدات",
    stats: [
      { label: "التهديدات المحظورة", value: 2400000, suffix: "", display: "2.4M" },
      { label: "وقت التشغيل", value: 99.99, suffix: "%", display: "99.99%" },
      { label: "العملاء", value: 850, suffix: "+", display: "850+" },
    ],
    threatLevel: "مستوى التهديد",
    threatValue: "مرتفع",
    recentAlerts: "التنبيهات الأخيرة",
    alerts: [
      "تم صد هجوم DDoS — 14:32 UTC",
      "تحديث قاعدة جدار الحماية — 14:28 UTC",
      "اكتمل فحص الثغرات — 14:15 UTC",
    ],
    systemStatus: "حالة النظام",
    statusItems: ["جدار الحماية", "كشف التسلل", "التشفير"],
  },
};

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

function formatStat(value: number, index: number) {
  if (index === 0) {
    return (value / 1000000).toFixed(1) + "M";
  }
  if (index === 1) {
    return value.toFixed(2);
  }
  return Math.floor(value).toString();
}

export function Hero04({ language }: Hero04Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontFamily = isAr
    ? "var(--font-ibm-plex-arabic)"
    : "var(--font-inter)";

  const stat0 = useCountUp(2400000, 2500);
  const stat1 = useCountUp(99.99, 2000);
  const stat2 = useCountUp(850, 2000);
  const statValues = [stat0, stat1, stat2];

  const [threatWidth, setThreatWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setThreatWidth(73), 500);
    return () => clearTimeout(timer);
  }, []);

  // Generate columns for matrix rain
  const columns = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section
      style={{
        fontFamily,
        background: "#0a0f0a",
        color: "#e0e0e0",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style>{`
        @keyframes matrixFall0 { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 0.7; } 90% { opacity: 0.3; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes matrixFall1 { 0% { transform: translateY(-100%); opacity: 0; } 15% { opacity: 0.5; } 85% { opacity: 0.2; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes matrixFall2 { 0% { transform: translateY(-100%); opacity: 0; } 5% { opacity: 0.6; } 95% { opacity: 0.1; } 100% { transform: translateY(100vh); opacity: 0; } }
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes threatPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(0, 255, 136, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.6); }
        }
        @keyframes blinkDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cv-fade-in { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .cv-fade-in-1 { animation-delay: 0.1s; }
        .cv-fade-in-2 { animation-delay: 0.3s; }
        .cv-fade-in-3 { animation-delay: 0.5s; }
        .cv-fade-in-4 { animation-delay: 0.7s; }
      `}</style>

      {/* Matrix rain background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {columns.map((col) => {
          const leftPercent = (col * 5) + 2.5;
          const animName = `matrixFall${col % 3}`;
          const duration = 4 + (col % 5) * 1.2;
          const delay = (col * 0.7) % 4;
          const width = col % 3 === 0 ? 2 : 1;
          const height = 60 + (col % 4) * 30;

          return (
            <div
              key={col}
              style={{
                position: "absolute",
                left: `${leftPercent}%`,
                top: 0,
                width: `${width}px`,
                height: `${height}px`,
                background: `linear-gradient(180deg, transparent 0%, #00ff8844 30%, #00ff8822 70%, transparent 100%)`,
                animation: `${animName} ${duration}s linear ${delay}s infinite`,
                borderRadius: "1px",
              }}
            />
          );
        })}

        {/* Scan line overlay */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.15), transparent)",
            animation: "scanLine 6s linear infinite",
          }}
        />
      </div>

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
        {/* Left side — 55% */}
        <div style={{ flex: "1 1 520px", minWidth: "320px" }}>
          {/* Badge */}
          <div className="cv-fade-in cv-fade-in-1" style={{ marginBottom: "24px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                background: "rgba(0,255,136,0.08)",
                border: "1px solid rgba(0,255,136,0.25)",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#00ff88",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              <Shield size={14} />
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <div className="cv-fade-in cv-fade-in-2">
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 8px 0",
                color: "#e8e8e8",
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {t.heading}
            </h1>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 24px 0",
                color: "#00ff88",
                letterSpacing: isAr ? "0" : "-0.02em",
              }}
            >
              {t.accent}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="cv-fade-in cv-fade-in-3"
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#8a9a8a",
              maxWidth: "540px",
              margin: "0 0 32px 0",
            }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className="cv-fade-in cv-fade-in-3"
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
                background: "#00ff88",
                color: "#0a0f0a",
                border: "none",
                borderRadius: "4px",
                fontSize: "0.95rem",
                fontWeight: 700,
                fontFamily,
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              {t.cta1}
            </button>
            <button
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "#00ff88",
                border: "1px solid rgba(0,255,136,0.4)",
                borderRadius: "4px",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily,
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              {t.cta2}
            </button>
          </div>

          {/* Stats */}
          <div
            className="cv-fade-in cv-fade-in-4"
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {t.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: isAr ? "right" : "left" }}>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#00ff88",
                    fontFamily: "monospace",
                    lineHeight: 1.2,
                  }}
                >
                  {formatStat(statValues[i], i)}
                  {stat.suffix}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#5a6a5a",
                    marginTop: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
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
          className="cv-fade-in cv-fade-in-4"
          style={{
            flex: "1 1 400px",
            minWidth: "320px",
            maxWidth: "480px",
            background: "rgba(10, 20, 14, 0.85)",
            border: "1px solid rgba(0,255,136,0.15)",
            borderRadius: "8px",
            padding: "24px",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Threat Level */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#5a6a5a",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                {t.threatLevel}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#f59e0b",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                }}
              >
                {t.threatValue}
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "8px",
                background: "#0d2818",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${threatWidth}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #00ff88, #f59e0b)",
                  borderRadius: "4px",
                  transition: "width 1.5s cubic-bezier(0.4,0,0.2,1)",
                  animation: "threatPulse 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(0,255,136,0.1)", margin: "0 0 20px 0" }} />

          {/* Recent Alerts */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              <AlertTriangle size={13} color="#f59e0b" />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#5a6a5a",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                {t.recentAlerts}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {t.alerts.map((alert, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "8px 10px",
                    background: "rgba(0,255,136,0.03)",
                    borderRadius: "4px",
                    borderLeft: isAr ? "none" : "2px solid",
                    borderRight: isAr ? "2px solid" : "none",
                    borderColor: i === 0 ? "#f59e0b" : i === 1 ? "#00ff88" : "#3b82f6",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#8a9a8a",
                      fontFamily: "monospace",
                      lineHeight: 1.5,
                    }}
                  >
                    {alert}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(0,255,136,0.1)", margin: "0 0 20px 0" }} />

          {/* System Status */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              <Activity size={13} color="#00ff88" />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#5a6a5a",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                {t.systemStatus}
              </span>
            </div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {t.statusItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00ff88",
                      animation: "blinkDot 2s ease-in-out infinite",
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#8a9a8a",
                      fontFamily: "monospace",
                    }}
                  >
                    {item}
                  </span>
                  <CheckCircle size={12} color="#00ff88" style={{ opacity: 0.6 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
