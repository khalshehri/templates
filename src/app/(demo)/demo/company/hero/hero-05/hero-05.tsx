"use client";

import { ArrowRight, Activity, BarChart3, Gauge, TrendingUp } from "lucide-react";

const content = {
  en: {
    badge: "Holographic Intelligence",
    heading1: "See Beyond",
    heading2: "The Data",
    sub: "Transform raw information into strategic advantage with our AI-powered analytics platform. Real-time visibility across every dimension of your business.",
    cta1: "Access Dashboard",
    cta2: "Live Preview",
    efficiency: "Efficiency",
    revenue: "Revenue",
    revenueVal: "↑24%",
    users: "Users",
    usersVal: "1.2M",
    uptime: "Uptime",
    uptimeVal: "99.9%",
  },
  ar: {
    badge: "ذكاء هولوغرافي",
    heading1: "انظر أبعد",
    heading2: "من البيانات",
    sub: "حوّل المعلومات الخام إلى ميزة استراتيجية مع منصة التحليلات المدعومة بالذكاء الاصطناعي. رؤية فورية عبر كل أبعاد أعمالك.",
    cta1: "ادخل لوحة التحكم",
    cta2: "معاينة حية",
    efficiency: "الكفاءة",
    revenue: "الإيرادات",
    revenueVal: "↑٢٤٪",
    users: "المستخدمون",
    usersVal: "١.٢ مليون",
    uptime: "وقت التشغيل",
    uptimeVal: "٩٩.٩٪",
  },
};

const barHeights = [55, 80, 40, 95, 65, 75];

export function Hero05({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#0a1225", fontFamily: fontBody }}
    >
      <style>{`
        @keyframes panelBob1 {
          0%, 100% { transform: rotateY(-5deg) rotateX(3deg) translateY(0px); }
          50% { transform: rotateY(-5deg) rotateX(3deg) translateY(-10px); }
        }
        @keyframes panelBob2 {
          0%, 100% { transform: rotateY(5deg) rotateX(-3deg) translateY(0px); }
          50% { transform: rotateY(5deg) rotateX(-3deg) translateY(-10px); }
        }
        @keyframes panelBob3 {
          0%, 100% { transform: rotateY(-3deg) rotateX(2deg) translateY(0px); }
          50% { transform: rotateY(-3deg) rotateX(2deg) translateY(-10px); }
        }
        @keyframes panelBob4 {
          0%, 100% { transform: rotateY(4deg) rotateX(-2deg) translateY(0px); }
          50% { transform: rotateY(4deg) rotateX(-2deg) translateY(-10px); }
        }
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(calc(100% + 200px)); }
        }
        @keyframes globalScan {
          0% { top: -5%; }
          100% { top: 105%; }
        }
        @keyframes barGrow {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        @keyframes gaugeArc {
          0% { stroke-dashoffset: 188.5; }
          100% { stroke-dashoffset: 51; }
        }
        @keyframes drawLine {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes gridScroll {
          0% { transform: rotateX(60deg) translateY(0); }
          100% { transform: rotateX(60deg) translateY(80px); }
        }
        @keyframes contentFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes panelFadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(56,189,248,0.1), inset 0 0 15px rgba(56,189,248,0.03); }
          50% { box-shadow: 0 0 25px rgba(56,189,248,0.2), inset 0 0 25px rgba(56,189,248,0.06); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero05-anim { animation: none !important; }
          .hero05-anim-panel { animation: none !important; transform: none !important; }
          .hero05-anim-bar { animation: none !important; transform: scaleY(1) !important; }
          .hero05-anim-gauge { animation: none !important; stroke-dashoffset: 51 !important; }
          .hero05-anim-line { animation: none !important; stroke-dashoffset: 0 !important; }
          .hero05-anim-content { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero05-anim-grid { animation: none !important; }
          .hero05-scan { display: none !important; }
        }
      `}</style>

      {/* Perspective Grid Floor */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "55%",
          perspective: "800px",
          perspectiveOrigin: "50% 0%",
        }}
      >
        <div
          className="hero05-anim-grid absolute inset-0"
          style={{
            transformOrigin: "center top",
            animation: "gridScroll 8s linear infinite",
            backgroundImage: `
              linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Grid fade overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #0a1225 0%, transparent 30%, transparent 70%, rgba(10,18,37,0.8) 100%)",
          }}
        />
      </div>

      {/* Global scan line */}
      <div
        className="hero05-scan absolute left-0 right-0 pointer-events-none"
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), rgba(34,211,238,0.6), rgba(56,189,248,0.4), transparent)",
          animation: "globalScan 10s linear infinite",
          zIndex: 5,
          boxShadow: "0 0 20px rgba(56,189,248,0.3), 0 0 60px rgba(56,189,248,0.1)",
        }}
      />

      {/* Ambient glow spots */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)",
          bottom: "20%",
          left: "-5%",
        }}
      />

      {/* ========== HOLOGRAPHIC PANELS ========== */}

      {/* Panel A: Bar Chart — top-right */}
      <div
        className="hero05-anim-panel absolute hidden lg:block"
        style={{
          top: "12%",
          ...(isAr ? { left: "8%" } : { right: "8%" }),
          width: 200,
          height: 140,
          animation: "panelFadeIn 0.6s ease-out 0.3s both",
          zIndex: 4,
        }}
      >
        <div
          className="hero05-anim relative w-full h-full rounded-xl overflow-hidden"
          style={{
            background: "rgba(56,189,248,0.05)",
            border: "1px solid rgba(56,189,248,0.15)",
            backdropFilter: "blur(12px)",
            animation: "panelBob1 5s ease-in-out infinite, pulseGlow 4s ease-in-out infinite",
          }}
        >
          {/* Panel scan line */}
          <div
            className="hero05-scan absolute left-0 right-0 pointer-events-none"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
              animation: "scanLine 3s linear infinite",
            }}
          />
          {/* Panel header */}
          <div
            className="flex items-center gap-1.5 px-3 pt-2.5 pb-1"
            style={{ borderBottom: "1px solid rgba(56,189,248,0.08)" }}
          >
            <BarChart3 size={12} style={{ color: "#38bdf8" }} />
            <span
              style={{
                color: "rgba(56,189,248,0.7)",
                fontSize: 10,
                fontFamily: fontBody,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Performance
            </span>
            <div
              className="hero05-anim"
              style={{
                marginInlineStart: "auto",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#22d3ee",
                animation: "dotPulse 2s ease-in-out infinite",
              }}
            />
          </div>
          {/* Bars */}
          <div className="flex items-end justify-center gap-2 px-3 pt-3" style={{ height: 90 }}>
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="hero05-anim-bar"
                style={{
                  width: 16,
                  height: `${h}%`,
                  borderRadius: "3px 3px 0 0",
                  background: `linear-gradient(to top, rgba(56,189,248,0.3), rgba(34,211,238,0.6))`,
                  transformOrigin: "bottom",
                  animation: `barGrow 0.8s ease-out ${0.6 + i * 0.12}s both`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Panel B: Gauge — right-center */}
      <div
        className="hero05-anim-panel absolute hidden lg:block"
        style={{
          top: "40%",
          ...(isAr ? { left: "5%" } : { right: "5%" }),
          width: 180,
          height: 140,
          animation: "panelFadeIn 0.6s ease-out 0.6s both",
          zIndex: 4,
        }}
      >
        <div
          className="hero05-anim relative w-full h-full rounded-xl overflow-hidden"
          style={{
            background: "rgba(56,189,248,0.05)",
            border: "1px solid rgba(56,189,248,0.15)",
            backdropFilter: "blur(12px)",
            animation: "panelBob2 6s ease-in-out infinite, pulseGlow 5s ease-in-out infinite",
          }}
        >
          <div
            className="hero05-scan absolute left-0 right-0 pointer-events-none"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
              animation: "scanLine 3.5s linear infinite",
            }}
          />
          <div
            className="flex items-center gap-1.5 px-3 pt-2.5 pb-1"
            style={{ borderBottom: "1px solid rgba(56,189,248,0.08)" }}
          >
            <Gauge size={12} style={{ color: "#38bdf8" }} />
            <span
              style={{
                color: "rgba(56,189,248,0.7)",
                fontSize: 10,
                fontFamily: fontBody,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {t.efficiency}
            </span>
          </div>
          {/* Gauge SVG */}
          <div className="flex flex-col items-center justify-center" style={{ height: 100 }}>
            <svg width="80" height="50" viewBox="0 0 80 50">
              {/* Background arc */}
              <path
                d="M 10 45 A 30 30 0 0 1 70 45"
                fill="none"
                stroke="rgba(56,189,248,0.12)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Foreground arc — 73% */}
              <path
                className="hero05-anim-gauge"
                d="M 10 45 A 30 30 0 0 1 70 45"
                fill="none"
                stroke="url(#gaugeGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="94.25"
                strokeDashoffset="51"
                style={{ animation: "gaugeArc 1.5s ease-out 0.8s both" }}
              />
              <defs>
                <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            <span
              style={{
                color: "#22d3ee",
                fontSize: 18,
                fontWeight: 700,
                fontFamily: fontHeading,
                marginTop: -4,
              }}
            >
              73%
            </span>
          </div>
        </div>
      </div>

      {/* Panel C: Metrics — left */}
      <div
        className="hero05-anim-panel absolute hidden lg:block"
        style={{
          top: "25%",
          ...(isAr ? { right: "6%" } : { left: "6%" }),
          width: 170,
          height: 120,
          animation: "panelFadeIn 0.6s ease-out 0.9s both",
          zIndex: 4,
        }}
      >
        <div
          className="hero05-anim relative w-full h-full rounded-xl overflow-hidden"
          style={{
            background: "rgba(56,189,248,0.05)",
            border: "1px solid rgba(56,189,248,0.15)",
            backdropFilter: "blur(12px)",
            animation: "panelBob3 7s ease-in-out infinite, pulseGlow 6s ease-in-out infinite",
          }}
        >
          <div
            className="hero05-scan absolute left-0 right-0 pointer-events-none"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
              animation: "scanLine 4s linear infinite",
            }}
          />
          <div
            className="flex items-center gap-1.5 px-3 pt-2.5 pb-1"
            style={{ borderBottom: "1px solid rgba(56,189,248,0.08)" }}
          >
            <TrendingUp size={12} style={{ color: "#38bdf8" }} />
            <span
              style={{
                color: "rgba(56,189,248,0.7)",
                fontSize: 10,
                fontFamily: fontBody,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              KPIs
            </span>
          </div>
          <div className="flex flex-col gap-1.5 px-3 pt-2">
            {[
              { label: t.revenue, value: t.revenueVal },
              { label: t.users, value: t.usersVal },
              { label: t.uptime, value: t.uptimeVal },
            ].map((metric, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
                style={{
                  padding: "3px 6px",
                  borderRadius: 4,
                  background: "rgba(56,189,248,0.04)",
                }}
              >
                <span
                  style={{
                    color: "rgba(56,189,248,0.6)",
                    fontSize: 10,
                    fontFamily: fontBody,
                  }}
                >
                  {metric.label}
                </span>
                <span
                  style={{
                    color: "#22d3ee",
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: fontBody,
                  }}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panel D: Line Chart — bottom-right */}
      <div
        className="hero05-anim-panel absolute hidden lg:block"
        style={{
          bottom: "22%",
          ...(isAr ? { left: "10%" } : { right: "10%" }),
          width: 190,
          height: 100,
          animation: "panelFadeIn 0.6s ease-out 1.2s both",
          zIndex: 4,
        }}
      >
        <div
          className="hero05-anim relative w-full h-full rounded-xl overflow-hidden"
          style={{
            background: "rgba(56,189,248,0.05)",
            border: "1px solid rgba(56,189,248,0.15)",
            backdropFilter: "blur(12px)",
            animation: "panelBob4 8s ease-in-out infinite, pulseGlow 7s ease-in-out infinite",
          }}
        >
          <div
            className="hero05-scan absolute left-0 right-0 pointer-events-none"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
              animation: "scanLine 3.2s linear infinite",
            }}
          />
          <div
            className="flex items-center gap-1.5 px-3 pt-2.5 pb-1"
            style={{ borderBottom: "1px solid rgba(56,189,248,0.08)" }}
          >
            <Activity size={12} style={{ color: "#38bdf8" }} />
            <span
              style={{
                color: "rgba(56,189,248,0.7)",
                fontSize: 10,
                fontFamily: fontBody,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Analytics
            </span>
            <div
              className="hero05-anim"
              style={{
                marginInlineStart: "auto",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#22d3ee",
                animation: "dotPulse 2.5s ease-in-out infinite",
              }}
            />
          </div>
          {/* Line chart SVG */}
          <div className="flex items-center justify-center" style={{ height: 60, padding: "4px 12px" }}>
            <svg width="160" height="50" viewBox="0 0 160 50" fill="none">
              {/* Grid lines */}
              {[12, 25, 37].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="160"
                  y2={y}
                  stroke="rgba(56,189,248,0.06)"
                  strokeWidth="0.5"
                />
              ))}
              {/* Area fill */}
              <polygon
                points="0,45 10,38 30,42 50,28 70,32 90,18 110,22 130,12 150,15 160,8 160,50 0,50"
                fill="url(#areaFill)"
              />
              {/* Line */}
              <polyline
                className="hero05-anim-line"
                points="0,45 10,38 30,42 50,28 70,32 90,18 110,22 130,12 150,15 160,8"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="300"
                strokeDashoffset="0"
                style={{ animation: "drawLine 2s ease-out 1s both" }}
              />
              {/* Data point at end */}
              <circle cx="160" cy="8" r="3" fill="#22d3ee" opacity="0.8" />
              <circle cx="160" cy="8" r="5" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="160" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="50">
                  <stop offset="0%" stopColor="rgba(56,189,248,0.15)" />
                  <stop offset="100%" stopColor="rgba(56,189,248,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ zIndex: 10 }}
      >
        <div
          className="hero05-anim-content"
          style={{ animation: "contentFade 0.8s ease-out 0.2s both" }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.2)",
            }}
          >
            <div
              className="hero05-anim"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22d3ee",
                animation: "dotPulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                color: "#38bdf8",
                fontSize: 13,
                fontWeight: 500,
                fontFamily: fontBody,
                letterSpacing: isAr ? undefined : "0.05em",
              }}
            >
              {t.badge}
            </span>
          </div>
        </div>

        {/* Heading */}
        <div
          className="hero05-anim-content"
          style={{ animation: "contentFade 0.8s ease-out 0.4s both" }}
        >
          <h1
            style={{
              fontFamily: fontHeading,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "#e2e8f0" }}
            >
              {t.heading1}
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #22d3ee, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.heading2}
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div
          className="hero05-anim-content"
          style={{ animation: "contentFade 0.8s ease-out 0.6s both" }}
        >
          <p
            className="max-w-xl mx-auto mb-10"
            style={{
              color: "rgba(148,163,184,0.9)",
              fontSize: 16,
              lineHeight: 1.7,
              fontFamily: fontBody,
            }}
          >
            {t.sub}
          </p>
        </div>

        {/* CTAs */}
        <div
          className="hero05-anim-content flex flex-col sm:flex-row items-center gap-4"
          style={{ animation: "contentFade 0.8s ease-out 0.8s both" }}
        >
          <button
            className="cursor-pointer group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
              color: "#0a1225",
              fontFamily: fontBody,
              boxShadow: "0 0 20px rgba(56,189,248,0.3)",
            }}
          >
            {t.cta1}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              style={isAr ? { transform: "scaleX(-1)" } : undefined}
            />
          </button>
          <button
            className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-[rgba(56,189,248,0.12)] active:scale-[0.98]"
            style={{
              background: "rgba(56,189,248,0.06)",
              border: "1px solid rgba(56,189,248,0.2)",
              color: "#38bdf8",
              fontFamily: fontBody,
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Bottom decorative line */}
        <div
          className="hero05-anim-content absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ animation: "contentFade 0.8s ease-out 1s both" }}
        >
          <div
            style={{
              width: 60,
              height: 2,
              borderRadius: 1,
              background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
