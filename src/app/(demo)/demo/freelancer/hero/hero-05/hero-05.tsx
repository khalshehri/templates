"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, Radar } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

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

const particlesOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 40, density: { enable: true, width: 800, height: 800 } },
    color: { value: ["#22d3ee", "#06b6d4", "#0891b2"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.2, max: 0.6 },
      animation: { enable: true, speed: 0.8, startValue: "random", sync: false },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none" as const,
      outModes: { default: "out" as const },
    },
    links: {
      enable: true,
      distance: 120,
      color: "#22d3ee",
      opacity: 0.15,
      width: 1,
    },
  },
  detectRetina: true,
};

export function Hero05({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const polyLen = dataPolygonLength();
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

  const labelOffsets: { x: number; y: number; anchor: string }[] = [
    { x: 0, y: -18, anchor: "middle" },
    { x: 20, y: 0, anchor: "start" },
    { x: 20, y: 0, anchor: "start" },
    { x: 0, y: 20, anchor: "middle" },
    { x: -20, y: 0, anchor: "end" },
    { x: -20, y: 0, anchor: "end" },
  ];

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Radar sweep — continuous rotation
      gsap.to(".radar-sweep", {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: "none",
        transformOrigin: `${CX}px ${CY}px`,
      });

      // Data polygon stroke draw-in
      gsap.fromTo(
        ".data-polygon",
        { strokeDashoffset: polyLen },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", delay: 0.3 }
      );

      // Data polygon fill fade-in
      gsap.fromTo(
        ".data-polygon-fill",
        { attr: { "fill-opacity": 0 } },
        { attr: { "fill-opacity": 0.15 }, duration: 0.5, ease: "power2.out", delay: 1.6 }
      );

      // Data points pulse
      gsap.fromTo(
        ".data-point",
        { scale: 1, opacity: 0.7 },
        {
          scale: 1.5,
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.3,
        }
      );

      // Content fade-in sequence
      const contentTl = gsap.timeline({ defaults: { ease: "power2.out" } });
      contentTl
        .from(".content-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".content-heading", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".content-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".content-highlights", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".content-ctas", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
        .from(".content-updated", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45");

      // Scan glow pulse
      gsap.fromTo(
        ".scan-glow",
        { opacity: 0.3 },
        { opacity: 0.6, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
      );

      // Label fade-in
      gsap.from(".label-fade", {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.1,
        delay: 1.8,
      });

      // Center dot pulse
      gsap.fromTo(
        ".center-pulse",
        { attr: { r: 3 }, opacity: 0.6 },
        { attr: { r: 5 }, opacity: 1, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#0a0e1a",
        fontFamily: fontBody,
      }}
    >
      {/* Particles background */}
      <Particles
        id="hero05-particles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={particlesOptions}
      />

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
              className="content-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
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
              className="content-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
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
              className="content-sub text-lg leading-relaxed mb-8 max-w-xl"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: fontBody,
              }}
            >
              {t.sub}
            </p>

            {/* Highlights */}
            <div
              className="content-highlights space-y-3 mb-10"
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
              className="content-ctas flex flex-wrap gap-4 mb-6"
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
              className="content-updated text-xs"
              style={{
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
                  fillOpacity={0}
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
                      style={{ opacity: 0 }}
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
  );
}
