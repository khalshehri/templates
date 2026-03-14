"use client";

import { useRef, useCallback, useState } from "react";
import {
  ArrowRight,
  DollarSign,
  Users,
  TrendingUp,
  Star,
  BarChart3,
  Bell,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

const content = {
  en: {
    topBar: {
      name: "Mike Kim",
      label: "Mike Kim — Freelance Dashboard",
      status: "Online",
    },
    metrics: [
      {
        icon: "dollar",
        title: "Total Earnings",
        value: "$485,200",
        change: "+23% vs last year",
      },
      {
        icon: "users",
        title: "Active Clients",
        value: "12",
        change: "3 new this month",
      },
      {
        icon: "star",
        title: "Avg Rating",
        value: "4.9/5",
        change: "Based on 89 reviews",
      },
      {
        icon: "trending",
        title: "Completion Rate",
        value: "98%",
        change: "120/122 projects",
      },
    ],
    chartTitle: "Monthly Revenue 2024",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    recentTitle: "Recent Projects",
    projects: [
      { name: "Zenith Rebrand", status: "Completed", amount: "$12,500", rating: 5, progress: 100 },
      { name: "Pulse App UI", status: "In Progress", amount: "$18,000", rating: null, progress: 75 },
      { name: "Nova Website", status: "Completed", amount: "$8,200", rating: 5, progress: 100 },
      { name: "Echo Dashboard", status: "In Progress", amount: "$22,000", rating: null, progress: 40 },
    ],
    heading: "This could be your dashboard.",
    sub: "I bring this level of professionalism and data-driven approach to every project.",
    cta1: "Hire Me",
    cta2: "View Portfolio",
  },
  ar: {
    topBar: {
      name: "مايك كيم",
      label: "مايك كيم — لوحة المستقل",
      status: "متصل",
    },
    metrics: [
      {
        icon: "dollar",
        title: "إجمالي الأرباح",
        value: "$485,200",
        change: "+23% مقارنة بالعام الماضي",
      },
      {
        icon: "users",
        title: "العملاء النشطون",
        value: "12",
        change: "3 جدد هذا الشهر",
      },
      {
        icon: "star",
        title: "متوسط التقييم",
        value: "4.9/5",
        change: "بناءً على 89 تقييم",
      },
      {
        icon: "trending",
        title: "معدل الإنجاز",
        value: "98%",
        change: "120/122 مشروع",
      },
    ],
    chartTitle: "الإيرادات الشهرية 2024",
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    recentTitle: "المشاريع الأخيرة",
    projects: [
      { name: "Zenith Rebrand", status: "مكتمل", amount: "$12,500", rating: 5, progress: 100 },
      { name: "Pulse App UI", status: "قيد التنفيذ", amount: "$18,000", rating: null, progress: 75 },
      { name: "Nova Website", status: "مكتمل", amount: "$8,200", rating: 5, progress: 100 },
      { name: "Echo Dashboard", status: "قيد التنفيذ", amount: "$22,000", rating: null, progress: 40 },
    ],
    heading: "هذه يمكن أن تكون لوحتك.",
    sub: "أقدم هذا المستوى من الاحترافية والنهج القائم على البيانات في كل مشروع.",
    cta1: "وظّفني",
    cta2: "عرض الأعمال",
  },
};

const revenueData = [28, 32, 25, 41, 38, 45, 52, 48, 55, 62, 58, 71];
const maxRevenue = 75;

function buildSparklinePath(): { path: string; totalLength: number } {
  const points = [30, 45, 35, 55, 50, 60, 48, 65, 55, 70, 60, 72, 68, 75];
  const w = 80;
  const h = 28;
  const step = w / (points.length - 1);
  const max = Math.max(...points);
  const coords = points.map((p, i) => ({
    x: i * step,
    y: h - (p / max) * h,
  }));
  let d = `M${coords[0].x},${coords[0].y}`;
  for (let i = 1; i < coords.length; i++) {
    d += ` L${coords[i].x},${coords[i].y}`;
  }
  const totalLength = coords.reduce((acc, c, i) => {
    if (i === 0) return 0;
    const dx = c.x - coords[i - 1].x;
    const dy = c.y - coords[i - 1].y;
    return acc + Math.sqrt(dx * dx + dy * dy);
  }, 0);
  return { path: d, totalLength: Math.ceil(totalLength) };
}

function buildAreaChartPaths(): {
  linePath: string;
  areaPath: string;
  totalLength: number;
} {
  const chartW = 100;
  const chartH = 100;
  const step = chartW / (revenueData.length - 1);
  const coords = revenueData.map((v, i) => ({
    x: i * step,
    y: chartH - (v / maxRevenue) * chartH,
  }));

  let linePath = `M${coords[0].x.toFixed(1)},${coords[0].y.toFixed(1)}`;
  for (let i = 1; i < coords.length; i++) {
    linePath += ` L${coords[i].x.toFixed(1)},${coords[i].y.toFixed(1)}`;
  }

  const areaPath =
    linePath +
    ` L${coords[coords.length - 1].x.toFixed(1)},${chartH} L${coords[0].x.toFixed(1)},${chartH} Z`;

  const totalLength = coords.reduce((acc, c, i) => {
    if (i === 0) return 0;
    const dx = c.x - coords[i - 1].x;
    const dy = c.y - coords[i - 1].y;
    return acc + Math.sqrt(dx * dx + dy * dy);
  }, 0);

  return { linePath, areaPath, totalLength: Math.ceil(totalLength) };
}

const sparkline = buildSparklinePath();
const areaChart = buildAreaChartPaths();

const barHeights = [60, 85, 45, 100];

const ringCircumference = 2 * Math.PI * 42;
const ringOffset = ringCircumference * (1 - 0.98);

function MetricIcon({ type }: { type: string }) {
  const cls = "w-5 h-5";
  switch (type) {
    case "dollar":
      return <DollarSign className={cls} />;
    case "users":
      return <Users className={cls} />;
    case "star":
      return <Star className={cls} />;
    case "trending":
      return <TrendingUp className={cls} />;
    default:
      return null;
  }
}

export function Hero12({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const containerRef = useRef<HTMLDivElement>(null);

  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  useGSAP(
    () => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        // Set final states immediately
        gsap.set(".hero12-card", { opacity: 1, y: 0 });
        gsap.set(".hero12-sparkline", { strokeDashoffset: 0 });
        gsap.set(".hero12-bar", { scaleY: 1 });
        gsap.set(".hero12-ring", { strokeDashoffset: ringOffset });
        gsap.set(".hero12-chart-line", { strokeDashoffset: 0 });
        gsap.set(".hero12-chart-area", { opacity: 0.2 });
        gsap.set(".hero12-dot-pulse", { opacity: 1 });
        gsap.set(".hero12-progress-bar", {
          width: (index: number, target: HTMLElement) =>
            target.style.getPropertyValue("--target-width"),
        });
        return;
      }

      // Cards fade in with stagger
      gsap.from(".hero12-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      });

      // Sparkline draw
      const sparklineEl = containerRef.current?.querySelector(
        ".hero12-sparkline"
      ) as SVGPathElement | null;
      if (sparklineEl) {
        gsap.fromTo(
          sparklineEl,
          { strokeDashoffset: sparkline.totalLength },
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.8,
          }
        );
      }

      // Bar grow
      gsap.from(".hero12-bar", {
        scaleY: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.9,
      });

      // Ring progress
      const ringEl = containerRef.current?.querySelector(
        ".hero12-ring"
      ) as SVGCircleElement | null;
      if (ringEl) {
        gsap.fromTo(
          ringEl,
          { strokeDashoffset: ringCircumference },
          {
            strokeDashoffset: ringOffset,
            duration: 1.5,
            ease: "power2.out",
            delay: 1,
          }
        );
      }

      // Chart line draw
      const chartLineEl = containerRef.current?.querySelector(
        ".hero12-chart-line"
      ) as SVGPathElement | null;
      if (chartLineEl) {
        gsap.fromTo(
          chartLineEl,
          { strokeDashoffset: areaChart.totalLength },
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            delay: 0.8,
          }
        );
      }

      // Chart area fade
      gsap.fromTo(
        ".hero12-chart-area",
        { opacity: 0 },
        { opacity: 0.2, duration: 1, ease: "power2.out", delay: 2 }
      );

      // Dot pulse
      gsap.to(".hero12-dot-pulse", {
        opacity: 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Progress bar fill
      const progressBars = containerRef.current?.querySelectorAll(
        ".hero12-progress-bar"
      );
      if (progressBars) {
        progressBars.forEach((bar) => {
          const target = (bar as HTMLElement).style.getPropertyValue(
            "--target-width"
          );
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: target,
              duration: 1,
              ease: "power2.out",
              delay: 1,
            }
          );
        });
      }
    },
    { scope: containerRef, dependencies: [language] }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
      style={{
        background: "#0c0c14",
        fontFamily: fontBody,
      }}
    >
      {/* tsParticles — Blue/purple data visualization dots with connecting lines */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50, density: { enable: true, width: 1200, height: 800 } },
            color: { value: ["#3b82f6", "#8b5cf6", "#6366f1", "#22d3ee"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.15, max: 0.5 },
              animation: { enable: true, speed: 0.8, sync: false },
            },
            size: {
              value: { min: 1, max: 4 },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#6366f1",
              opacity: 0.12,
              width: 1,
            },
            move: {
              enable: true,
              speed: { min: 0.2, max: 0.6 },
              direction: "none",
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        className="relative z-10"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px 80px" }}
      >
        {/* Top Bar */}
        <div
          className="hero12-card"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #22c55e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "var(--font-inter)",
              }}
            >
              MK
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 14,
                fontFamily: fontBody,
              }}
            >
              {t.topBar.label}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                className="hero12-dot-pulse"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              <span
                style={{
                  color: "#22c55e",
                  fontSize: 13,
                  fontFamily: fontBody,
                }}
              >
                {t.topBar.status}
              </span>
            </div>
            <button
              className="cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "none",
                borderRadius: 8,
                padding: 8,
                color: "rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Row 1 — 4 Metric Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 16,
          }}
          className="hero12-metrics-grid"
        >
          {t.metrics.map((metric, i) => (
            <div
              key={i}
              className="hero12-card"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                padding: 20,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "rgba(255,255,255,0.45)",
                    fontSize: 13,
                    fontFamily: fontBody,
                  }}
                >
                  <MetricIcon type={metric.icon} />
                  <span>{metric.title}</span>
                </div>
              </div>

              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "var(--font-inter)",
                  marginBottom: 4,
                  letterSpacing: "-0.02em",
                }}
              >
                {metric.value}
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: i === 0 ? "#22c55e" : "rgba(255,255,255,0.4)",
                  marginBottom: 12,
                  fontFamily: fontBody,
                }}
              >
                {metric.change}
              </div>

              {/* Mini chart per card */}
              {i === 0 && (
                <svg
                  viewBox="0 0 80 28"
                  style={{ width: "100%", height: 28, overflow: "visible" }}
                  preserveAspectRatio="none"
                >
                  <path
                    d={sparkline.path}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hero12-sparkline"
                    style={{
                      strokeDasharray: sparkline.totalLength,
                      strokeDashoffset: sparkline.totalLength,
                    }}
                  />
                </svg>
              )}

              {i === 1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 6,
                    height: 28,
                  }}
                >
                  {barHeights.map((h, bi) => (
                    <div
                      key={bi}
                      className="hero12-bar"
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background:
                          bi === barHeights.length - 1
                            ? "#3b82f6"
                            : "rgba(59,130,246,0.3)",
                        borderRadius: 3,
                        transformOrigin: "bottom",
                      }}
                    />
                  ))}
                </div>
              )}

              {i === 2 && (
                <div style={{ display: "flex", gap: 3 }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5"
                      style={{
                        color: s <= 4 ? "#f59e0b" : "rgba(245,158,11,0.9)",
                        fill: s <= 4 ? "#f59e0b" : s === 5 ? "rgba(245,158,11,0.9)" : "none",
                      }}
                    />
                  ))}
                </div>
              )}

              {i === 3 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 100 100" style={{ width: 56, height: 56 }}>
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="6"
                      strokeLinecap="round"
                      className="hero12-ring"
                      style={{
                        transformOrigin: "center",
                        transform: "rotate(-90deg)",
                        strokeDasharray: ringCircumference,
                        strokeDashoffset: ringCircumference,
                      }}
                    />
                    <text
                      x="50"
                      y="54"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="16"
                      fontWeight="700"
                      fontFamily="var(--font-inter)"
                    >
                      98
                    </text>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2 — Revenue Chart + Recent Projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: 16,
            marginBottom: 64,
          }}
          className="hero12-row2-grid"
        >
          {/* Revenue Chart Card */}
          <div
            className="hero12-card"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: 20,
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
                color: "rgba(255,255,255,0.45)",
                fontSize: 13,
                fontFamily: fontBody,
              }}
            >
              <BarChart3 className="w-4 h-4" />
              <span>{t.chartTitle}</span>
            </div>

            <div style={{ position: "relative", height: 200, marginBottom: 8 }}>
              {/* Y-axis labels */}
              {[0, 25, 50, 75].map((v) => (
                <div
                  key={v}
                  style={{
                    position: "absolute",
                    bottom: `${(v / maxRevenue) * 100}%`,
                    [isAr ? "right" : "left"]: 0,
                    width: 32,
                    fontSize: 10,
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-inter)",
                    textAlign: isAr ? "left" : "right",
                    transform: "translateY(50%)",
                  }}
                >
                  {v}K
                </div>
              ))}

              {/* Grid lines */}
              {[0, 25, 50, 75].map((v) => (
                <div
                  key={`gl-${v}`}
                  style={{
                    position: "absolute",
                    bottom: `${(v / maxRevenue) * 100}%`,
                    [isAr ? "right" : "left"]: 38,
                    right: isAr ? 38 : 0,
                    left: isAr ? 0 : 38,
                    height: 1,
                    background: "rgba(255,255,255,0.04)",
                  }}
                />
              ))}

              {/* SVG chart */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  bottom: 0,
                  [isAr ? "right" : "left"]: 38,
                  width: "calc(100% - 38px)",
                  height: "100%",
                  overflow: "visible",
                  transform: isAr ? "scaleX(-1)" : undefined,
                }}
              >
                <path
                  d={areaChart.areaPath}
                  fill="url(#hero12AreaGrad)"
                  className="hero12-chart-area"
                  style={{ opacity: 0 }}
                />
                <path
                  d={areaChart.linePath}
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hero12-chart-line"
                  vectorEffect="non-scaling-stroke"
                  style={{
                    strokeDasharray: areaChart.totalLength,
                    strokeDashoffset: areaChart.totalLength,
                  }}
                />
                <defs>
                  <linearGradient
                    id="hero12AreaGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Month labels */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingInlineStart: 38,
                direction: isAr ? "rtl" : "ltr",
              }}
            >
              {t.months.map((m, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: fontBody,
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Projects Card */}
          <div
            className="hero12-card"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: 20,
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 13,
                marginBottom: 16,
                fontFamily: fontBody,
              }}
            >
              {t.recentTitle}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {t.projects.map((proj, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 600,
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {proj.name}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {proj.amount}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color:
                          proj.status === "Completed" || proj.status === "مكتمل"
                            ? "#22c55e"
                            : "#f59e0b",
                        fontFamily: fontBody,
                      }}
                    >
                      {proj.status}
                    </span>
                    {proj.rating !== null ? (
                      <div style={{ display: "flex", gap: 2 }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-3 h-3"
                            style={{ color: "#f59e0b", fill: "#f59e0b" }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          minWidth: 80,
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            height: 4,
                            background: "rgba(255,255,255,0.06)",
                            borderRadius: 2,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            className="hero12-progress-bar"
                            style={
                              {
                                height: "100%",
                                width: "0%",
                                background:
                                  proj.progress >= 70 ? "#3b82f6" : "#f59e0b",
                                borderRadius: 2,
                                "--target-width": `${proj.progress}%`,
                              } as React.CSSProperties
                            }
                          />
                        </div>
                        <span
                          style={{
                            fontSize: 11,
                            color: "rgba(255,255,255,0.4)",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {proj.progress}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <h1
            style={{
              fontSize: isAr ? 36 : 40,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
              fontFamily: fontHeading,
              lineHeight: 1.2,
              letterSpacing: isAr ? "0" : "-0.02em",
            }}
          >
            {t.heading}
          </h1>
          <p
            style={{
              fontSize: isAr ? 17 : 18,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 32,
              lineHeight: 1.6,
              fontFamily: fontBody,
            }}
          >
            {t.sub}
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="cursor-pointer"
              style={{
                background: "#22c55e",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "14px 32px",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: fontBody,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#16a34a";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#22c55e";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
            >
              {t.cta1}
              <ArrowRight
                className="w-4 h-4"
                style={{ transform: isAr ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "14px 32px",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: fontBody,
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
            >
              {t.cta2}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .hero12-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero12-row2-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .hero12-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
