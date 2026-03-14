"use client";

import { ArrowRight, Radar } from "lucide-react";

const content = {
  en: {
    badge: "Skill Scan Complete",
    heading: ["Full-Spectrum", "Developer"],
    sub: "A versatile engineer who thrives across the entire stack. From responsive frontends to scalable backends, I bring depth and breadth to every project.",
    highlights: [
      "Expert in React & TypeScript ecosystem",
      "Strong DevOps and cloud infrastructure",
      "Growing AI/ML capabilities",
    ],
    cta1: "Start a Project",
    cta2: "View GitHub",
    updated: "Last updated: March 2024",
  },
  ar: {
    badge: "فحص المهارات مكتمل",
    heading: ["مطور", "شامل الطيف"],
    sub: "مهندس متعدد المواهب يبدع عبر كامل المنظومة. من الواجهات المتجاوبة إلى الخوادم القابلة للتوسع، أجلب العمق والشمولية لكل مشروع.",
    highlights: [
      "خبير في نظام React و TypeScript",
      "بنية تحتية سحابية و DevOps قوية",
      "قدرات متنامية في الذكاء الاصطناعي",
    ],
    cta1: "ابدأ مشروعاً",
    cta2: "عرض GitHub",
    updated: "آخر تحديث: مارس 2024",
  },
};

const skills = [
  { label: "Frontend", value: 0.9 },
  { label: "Backend", value: 0.75 },
  { label: "Design", value: 0.85 },
  { label: "DevOps", value: 0.6 },
  { label: "Mobile", value: 0.7 },
  { label: "AI/ML", value: 0.5 },
];

const CX = 175;
const CY = 175;
const R = 140;
const SIDES = 6;

function hexPoint(cx: number, cy: number, r: number, i: number) {
  const angle = (Math.PI / 3) * i - Math.PI / 2;
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function hexagonPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: SIDES }, (_, i) => {
    const p = hexPoint(cx, cy, r, i);
    return `${p.x},${p.y}`;
  }).join(" ");
}

function dataPolygonPoints() {
  return Array.from({ length: SIDES }, (_, i) => {
    const p = hexPoint(CX, CY, R * skills[i].value, i);
    return `${p.x},${p.y}`;
  }).join(" ");
}

function dataPolygonLength() {
  const pts = Array.from({ length: SIDES }, (_, i) =>
    hexPoint(CX, CY, R * skills[i].value, i)
  );
  let len = 0;
  for (let i = 0; i < pts.length; i++) {
    const next = pts[(i + 1) % pts.length];
    len += Math.sqrt((next.x - pts[i].x) ** 2 + (next.y - pts[i].y) ** 2);
  }
  return Math.ceil(len);
}

export function Hero05({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const polyLen = dataPolygonLength();

  const labelOffsets: { x: number; y: number; anchor: string }[] = [
    { x: 0, y: -18, anchor: "middle" },
    { x: 20, y: 0, anchor: "start" },
    { x: 20, y: 0, anchor: "start" },
    { x: 0, y: 20, anchor: "middle" },
    { x: -20, y: 0, anchor: "end" },
    { x: -20, y: 0, anchor: "end" },
  ];

  return (
    <>
      <style>{`
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes polygonDraw {
          from { stroke-dashoffset: ${polyLen}; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes polygonFill {
          from { fill-opacity: 0; }
          to { fill-opacity: 0.15; }
        }
        @keyframes pointPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        @keyframes contentFade {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scanGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes labelFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes centerPulse {
          0%, 100% { r: 3; opacity: 0.6; }
          50% { r: 5; opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .radar-sweep,
          .data-polygon,
          .data-polygon-fill,
          .data-point,
          .content-fade,
          .scan-glow,
          .label-fade,
          .center-pulse {
            animation: none !important;
          }
          .data-polygon {
            stroke-dashoffset: 0 !important;
          }
          .data-polygon-fill {
            fill-opacity: 0.15 !important;
          }
          .data-point {
            transform: scale(1) !important;
            opacity: 1 !important;
          }
          .content-fade {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="min-h-screen relative overflow-hidden"
        style={{
          background: "#0a0e1a",
          fontFamily: fontBody,
        }}
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow behind radar */}
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
            ...(isAr ? { left: "15%" } : { right: "15%" }),
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 min-h-screen flex items-center">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full ${
              isAr ? "direction-rtl" : ""
            }`}
          >
            {/* Left / Content side */}
            <div className={`${isAr ? "lg:order-2" : "lg:order-1"}`}>
              {/* Badge */}
              <div
                className="content-fade inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  animation: "contentFade 0.6s ease-out forwards",
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  fontFamily: fontBody,
                }}
              >
                <Radar className="w-4 h-4" style={{ color: "#22d3ee" }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#22d3ee" }}
                >
                  {t.badge}
                </span>
              </div>

              {/* Heading */}
              <h1
                className="content-fade text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{
                  animation: "contentFade 0.6s ease-out 0.15s both",
                  fontFamily: fontHeading,
                }}
              >
                <span className="text-white block">{t.heading[0]}</span>
                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t.heading[1]}
                </span>
              </h1>

              {/* Sub */}
              <p
                className="content-fade text-lg leading-relaxed mb-8 max-w-xl"
                style={{
                  animation: "contentFade 0.6s ease-out 0.3s both",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: fontBody,
                }}
              >
                {t.sub}
              </p>

              {/* Highlights */}
              <div
                className="content-fade space-y-3 mb-10"
                style={{ animation: "contentFade 0.6s ease-out 0.45s both" }}
              >
                {t.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: "#22d3ee",
                        boxShadow: "0 0 8px rgba(34,211,238,0.4)",
                      }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontFamily: fontBody,
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="content-fade flex flex-wrap gap-4 mb-6"
                style={{ animation: "contentFade 0.6s ease-out 0.6s both" }}
              >
                <button
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)",
                    color: "#0a0e1a",
                    fontFamily: fontBody,
                    boxShadow: "0 4px 20px rgba(34,211,238,0.3)",
                  }}
                >
                  {t.cta1}
                  <ArrowRight
                    className="w-4 h-4"
                    style={{
                      transform: isAr ? "scaleX(-1)" : "none",
                    }}
                  />
                </button>
                <button
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: "transparent",
                    color: "#22d3ee",
                    border: "1px solid rgba(34,211,238,0.3)",
                    fontFamily: fontBody,
                  }}
                >
                  {t.cta2}
                </button>
              </div>

              {/* Updated */}
              <p
                className="content-fade text-xs"
                style={{
                  animation: "contentFade 0.6s ease-out 0.75s both",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: fontBody,
                }}
              >
                {t.updated}
              </p>
            </div>

            {/* Right / Radar side */}
            <div
              className={`${
                isAr ? "lg:order-1" : "lg:order-2"
              } flex justify-center items-center`}
            >
              <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px]">
                {/* Outer glow ring */}
                <div
                  className="scan-glow absolute inset-[-20px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, transparent 55%, rgba(34,211,238,0.04) 70%, transparent 85%)",
                    animation: "scanGlow 3s ease-in-out infinite",
                  }}
                />

                <svg
                  viewBox="0 0 350 350"
                  className="w-full h-full"
                  style={{ overflow: "visible" }}
                >
                  <defs>
                    {/* Sweep gradient */}
                    <linearGradient
                      id="sweepGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#22d3ee"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="#22d3ee"
                        stopOpacity="0"
                      />
                    </linearGradient>

                    {/* Sweep cone gradient */}
                    <radialGradient
                      id="sweepCone"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#22d3ee"
                        stopOpacity="0"
                      />
                      <stop
                        offset="60%"
                        stopColor="#22d3ee"
                        stopOpacity="0.05"
                      />
                      <stop
                        offset="100%"
                        stopColor="#22d3ee"
                        stopOpacity="0.12"
                      />
                    </radialGradient>

                    {/* Glow filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <filter id="pointGlow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Concentric hexagons — grid */}
                  {[0.33, 0.66, 1].map((scale, i) => (
                    <polygon
                      key={i}
                      points={hexagonPoints(CX, CY, R * scale)}
                      fill="none"
                      stroke="rgba(34,211,238,0.1)"
                      strokeWidth={i === 2 ? "1.5" : "0.8"}
                    />
                  ))}

                  {/* 6 axis lines */}
                  {Array.from({ length: SIDES }, (_, i) => {
                    const p = hexPoint(CX, CY, R, i);
                    return (
                      <line
                        key={i}
                        x1={CX}
                        y1={CY}
                        x2={p.x}
                        y2={p.y}
                        stroke="rgba(34,211,238,0.08)"
                        strokeWidth="0.8"
                      />
                    );
                  })}

                  {/* Center dot */}
                  <circle
                    className="center-pulse"
                    cx={CX}
                    cy={CY}
                    r={3}
                    fill="#22d3ee"
                    opacity="0.6"
                    style={{ animation: "centerPulse 3s ease-in-out infinite" }}
                  />

                  {/* Percentage ticks on axes */}
                  {[0.33, 0.66, 1].map((scale) => {
                    const p = hexPoint(CX, CY, R * scale, 0);
                    return (
                      <text
                        key={scale}
                        x={p.x + 4}
                        y={p.y - 4}
                        fill="rgba(34,211,238,0.25)"
                        fontSize="8"
                        fontFamily="var(--font-inter)"
                      >
                        {Math.round(scale * 100)}%
                      </text>
                    );
                  })}

                  {/* Data polygon fill (fades in) */}
                  <polygon
                    className="data-polygon-fill"
                    points={dataPolygonPoints()}
                    fill="#22d3ee"
                    stroke="none"
                    style={{
                      fillOpacity: 0,
                      animation:
                        "polygonFill 0.5s ease-out 1.6s forwards",
                    }}
                  />

                  {/* Data polygon stroke (draws in) */}
                  <polygon
                    className="data-polygon"
                    points={dataPolygonPoints()}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    style={{
                      strokeDasharray: polyLen,
                      strokeDashoffset: polyLen,
                      animation: `polygonDraw 1.5s ease-out 0.3s forwards`,
                    }}
                  />

                  {/* Data points */}
                  {skills.map((skill, i) => {
                    const p = hexPoint(CX, CY, R * skill.value, i);
                    return (
                      <circle
                        key={i}
                        className="data-point"
                        cx={p.x}
                        cy={p.y}
                        r={4}
                        fill="#22d3ee"
                        filter="url(#pointGlow)"
                        style={{
                          transformOrigin: `${p.x}px ${p.y}px`,
                          animation: `pointPulse 2s ease-in-out ${
                            0.3 * i
                          }s infinite`,
                        }}
                      />
                    );
                  })}

                  {/* Skill labels */}
                  {skills.map((skill, i) => {
                    const outer = hexPoint(CX, CY, R + 24, i);
                    const off = labelOffsets[i];
                    return (
                      <g
                        key={i}
                        className="label-fade"
                        style={{
                          animation: `labelFade 0.4s ease-out ${
                            1.8 + i * 0.1
                          }s both`,
                        }}
                      >
                        <text
                          x={outer.x + off.x}
                          y={outer.y + off.y}
                          textAnchor={off.anchor}
                          fill="rgba(255,255,255,0.85)"
                          fontSize="12"
                          fontWeight="600"
                          fontFamily="var(--font-inter)"
                        >
                          {skill.label}
                        </text>
                        <text
                          x={outer.x + off.x}
                          y={outer.y + off.y + 14}
                          textAnchor={off.anchor}
                          fill="#22d3ee"
                          fontSize="10"
                          fontWeight="500"
                          fontFamily="var(--font-inter)"
                        >
                          {Math.round(skill.value * 100)}%
                        </text>
                      </g>
                    );
                  })}

                  {/* Sweep line — rotating radar scan */}
                  <g
                    className="radar-sweep"
                    style={{
                      transformOrigin: `${CX}px ${CY}px`,
                      animation: "radarSweep 4s linear infinite",
                    }}
                  >
                    {/* Sweep trailing cone */}
                    <path
                      d={`M ${CX} ${CY} L ${CX} ${CY - R} A ${R} ${R} 0 0 1 ${
                        CX + R * Math.sin(Math.PI / 6)
                      } ${CY - R * Math.cos(Math.PI / 6)} Z`}
                      fill="url(#sweepCone)"
                      opacity="0.6"
                    />
                    {/* Main sweep line */}
                    <line
                      x1={CX}
                      y1={CY}
                      x2={CX}
                      y2={CY - R}
                      stroke="url(#sweepGrad)"
                      strokeWidth="1.5"
                    />
                    {/* Sweep tip dot */}
                    <circle
                      cx={CX}
                      cy={CY - R}
                      r={2}
                      fill="#22d3ee"
                      opacity="0.9"
                    />
                  </g>
                </svg>

                {/* Corner decorations */}
                <div
                  className="absolute top-0 left-0 w-6 h-6"
                  style={{
                    borderTop: "1px solid rgba(34,211,238,0.2)",
                    borderLeft: "1px solid rgba(34,211,238,0.2)",
                  }}
                />
                <div
                  className="absolute top-0 right-0 w-6 h-6"
                  style={{
                    borderTop: "1px solid rgba(34,211,238,0.2)",
                    borderRight: "1px solid rgba(34,211,238,0.2)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-6 h-6"
                  style={{
                    borderBottom: "1px solid rgba(34,211,238,0.2)",
                    borderLeft: "1px solid rgba(34,211,238,0.2)",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6"
                  style={{
                    borderBottom: "1px solid rgba(34,211,238,0.2)",
                    borderRight: "1px solid rgba(34,211,238,0.2)",
                  }}
                />

                {/* Status indicator */}
                <div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#22d3ee",
                      boxShadow: "0 0 6px rgba(34,211,238,0.5)",
                    }}
                  />
                  <span
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{
                      color: "rgba(34,211,238,0.5)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {isAr ? "مسح نشط" : "Scanning Active"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
