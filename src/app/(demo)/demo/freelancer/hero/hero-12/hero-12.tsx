"use client";

import {
  ArrowRight,
  DollarSign,
  Users,
  TrendingUp,
  Star,
  BarChart3,
  Bell,
} from "lucide-react";

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

  return (
    <section
      className="min-h-screen relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
      style={{
        background: "#0c0c14",
        fontFamily: fontBody,
      }}
    >
      <style>{`
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sparklineDraw {
          from { stroke-dashoffset: ${sparkline.totalLength}; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes ringProgress {
          from { stroke-dashoffset: ${ringCircumference}; }
          to { stroke-dashoffset: ${ringOffset}; }
        }
        @keyframes chartDraw {
          from { stroke-dashoffset: ${areaChart.totalLength}; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes areaFade {
          from { opacity: 0; }
          to { opacity: 0.2; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }

        .hero12-card { animation: cardFadeIn 0.6s ease-out both; }
        .hero12-card-0 { animation-delay: 0.1s; }
        .hero12-card-1 { animation-delay: 0.2s; }
        .hero12-card-2 { animation-delay: 0.3s; }
        .hero12-card-3 { animation-delay: 0.4s; }
        .hero12-card-4 { animation-delay: 0.5s; }
        .hero12-card-5 { animation-delay: 0.6s; }

        .hero12-sparkline {
          stroke-dasharray: ${sparkline.totalLength};
          stroke-dashoffset: ${sparkline.totalLength};
          animation: sparklineDraw 1.5s ease-out 0.8s both;
        }
        .hero12-bar {
          transform-origin: bottom;
          animation: barGrow 0.8s ease-out both;
        }
        .hero12-bar-0 { animation-delay: 0.9s; }
        .hero12-bar-1 { animation-delay: 1.0s; }
        .hero12-bar-2 { animation-delay: 1.1s; }
        .hero12-bar-3 { animation-delay: 1.2s; }

        .hero12-ring {
          stroke-dasharray: ${ringCircumference};
          stroke-dashoffset: ${ringCircumference};
          animation: ringProgress 1.5s ease-out 1s both;
        }
        .hero12-chart-line {
          stroke-dasharray: ${areaChart.totalLength};
          stroke-dashoffset: ${areaChart.totalLength};
          animation: chartDraw 2s ease-out 0.8s both;
        }
        .hero12-chart-area {
          opacity: 0;
          animation: areaFade 1s ease-out 2s both;
        }
        .hero12-dot-pulse {
          animation: dotPulse 2s ease-in-out infinite;
        }
        .hero12-progress-bar {
          animation: progressFill 1s ease-out 1s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero12-card,
          .hero12-sparkline,
          .hero12-bar,
          .hero12-ring,
          .hero12-chart-line,
          .hero12-chart-area,
          .hero12-dot-pulse,
          .hero12-progress-bar {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
          .hero12-chart-area {
            opacity: 0.2 !important;
          }
          .hero12-ring {
            stroke-dashoffset: ${ringOffset} !important;
          }
          .hero12-progress-bar {
            width: var(--target-width) !important;
          }
        }
      `}</style>

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative z-10"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px 80px" }}
      >
        {/* Top Bar */}
        <div
          className="hero12-card hero12-card-0"
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
              className={`hero12-card hero12-card-${i}`}
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
                      className={`hero12-bar hero12-bar-${bi}`}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background:
                          bi === barHeights.length - 1
                            ? "#3b82f6"
                            : "rgba(59,130,246,0.3)",
                        borderRadius: 3,
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
            className="hero12-card hero12-card-4"
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
            className="hero12-card hero12-card-5"
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
