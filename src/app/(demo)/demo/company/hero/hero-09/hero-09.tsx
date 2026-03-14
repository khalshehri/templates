"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Connected Intelligence",
    heading1: "Every Connection",
    heading2: "Drives Growth",
    sub: "Our interconnected approach ensures every department, every team, and every decision point works in harmony toward your goals.",
    cta1: "Connect Now",
    cta2: "See the Network",
    stat1Value: "10K+",
    stat1Label: "Connections",
    stat2Value: "50ms",
    stat2Label: "Latency",
    stat3Value: "99.99%",
    stat3Label: "Reliability",
  },
  ar: {
    badge: "ذكاء مترابط",
    heading1: "كل اتصال",
    heading2: "يدفع النمو",
    sub: "نهجنا المترابط يضمن أن كل قسم وكل فريق وكل نقطة قرار تعمل بتناغم نحو أهدافك.",
    cta1: "اتصل الآن",
    cta2: "شاهد الشبكة",
    stat1Value: "+10K",
    stat1Label: "اتصال",
    stat2Value: "50ms",
    stat2Label: "زمن الاستجابة",
    stat3Value: "99.99%",
    stat3Label: "موثوقية",
  },
};

// 12 nodes positioned using viewBox coordinates (0-1000 range for precision)
// Nodes 0-3 are "hub" nodes (larger, stronger glow)
const nodes = [
  { x: 120, y: 250, hub: true },
  { x: 850, y: 200, hub: true },
  { x: 500, y: 750, hub: true },
  { x: 300, y: 550, hub: true },
  { x: 680, y: 400, hub: false },
  { x: 80, y: 650, hub: false },
  { x: 920, y: 550, hub: false },
  { x: 250, y: 120, hub: false },
  { x: 750, y: 850, hub: false },
  { x: 420, y: 300, hub: false },
  { x: 580, y: 150, hub: false },
  { x: 180, y: 850, hub: false },
];

// 15 connections between node pairs
const connections: [number, number][] = [
  [0, 7],   // 0
  [0, 3],   // 1
  [0, 9],   // 2
  [7, 10],  // 3
  [10, 1],  // 4
  [9, 4],   // 5
  [4, 1],   // 6
  [3, 5],   // 7
  [3, 2],   // 8
  [5, 11],  // 9
  [2, 8],   // 10
  [2, 11],  // 11
  [4, 6],   // 12
  [1, 6],   // 13
  [8, 6],   // 14
];

// Which connections get animated pulse dots + their timing
const pulseAnimations = [
  { conn: 0, duration: 3, delay: 0 },
  { conn: 2, duration: 4.5, delay: 1.2 },
  { conn: 4, duration: 3.5, delay: 0.6 },
  { conn: 6, duration: 5, delay: 2.1 },
  { conn: 8, duration: 4, delay: 1.8 },
  { conn: 10, duration: 6, delay: 0.3 },
  { conn: 13, duration: 3.8, delay: 2.5 },
];

// Node sizes and animation timing (deterministic)
function getNodeSize(i: number, hub: boolean): number {
  return hub ? 8 : 4 + ((i * 3) % 3);
}

function getNodePulseDuration(i: number): number {
  return 3 + (i % 3);
}

function getNodePulseDelay(i: number): number {
  return ((i * 7) % 50) / 10;
}

// Build the style string with all keyframes
function buildStyles(): string {
  // Generate pulse travel keyframes using SVG animateMotion alternative:
  // We use CSS transforms with custom keyframes for each pulse path
  const pulseKeyframes = pulseAnimations
    .map(({ conn }) => {
      const [a, b] = connections[conn];
      const ax = nodes[a].x, ay = nodes[a].y;
      const bx = nodes[b].x, by = nodes[b].y;
      return `
        @keyframes pulseTravel${conn} {
          0% { transform: translate(${ax}px, ${ay}px); }
          100% { transform: translate(${bx}px, ${by}px); }
        }`;
    })
    .join("");

  return `
    @keyframes hero09NodePulse {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.4); opacity: 1; }
    }
    @keyframes hero09NodeGlow {
      0%, 100% { r: 8; opacity: 0.6; }
      50% { r: 14; opacity: 1; }
    }
    @keyframes hero09HubRing {
      0%, 100% { stroke-opacity: 0.15; r: 14; }
      50% { stroke-opacity: 0.4; r: 20; }
    }
    @keyframes hero09ContentFadeUp {
      0% { transform: translateY(30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    ${pulseKeyframes}
    @media (prefers-reduced-motion: reduce) {
      .hero09-animated {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `;
}

export function Hero09({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#080c15", fontFamily: fontBody }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <style dangerouslySetInnerHTML={{ __html: buildStyles() }} />

      {/* Network SVG background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ zIndex: 1 }}
      >
        <defs>
          <filter id="hero09-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero09-pulse-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="hero09-hub-gradient">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <line
            key={`conn-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(236,72,153,0.12)"
            strokeWidth="1.5"
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const r = getNodeSize(i, node.hub);
          const dur = getNodePulseDuration(i);
          const del = getNodePulseDelay(i);
          return (
            <g key={`node-${i}`}>
              {/* Hub outer glow ring */}
              {node.hub && (
                <circle
                  className="hero09-animated"
                  cx={node.x}
                  cy={node.y}
                  r={14}
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="1"
                  style={{
                    animation: `hero09HubRing ${dur + 1}s ease-in-out ${del}s infinite`,
                    transformOrigin: `${node.x}px ${node.y}px`,
                  }}
                />
              )}
              {/* Node circle */}
              <circle
                className="hero09-animated"
                cx={node.x}
                cy={node.y}
                r={r}
                fill={node.hub ? "url(#hero09-hub-gradient)" : `rgba(236,72,153,${0.4 + (i % 4) * 0.15})`}
                filter={node.hub ? "url(#hero09-glow)" : undefined}
                style={{
                  animation: `hero09NodePulse ${dur}s ease-in-out ${del}s infinite`,
                  transformOrigin: `${node.x}px ${node.y}px`,
                }}
              />
            </g>
          );
        })}

        {/* Pulse dots traveling along connections using animateMotion */}
        {pulseAnimations.map(({ conn, duration, delay }) => {
          const [a, b] = connections[conn];
          const ax = nodes[a].x, ay = nodes[a].y;
          const bx = nodes[b].x, by = nodes[b].y;
          return (
            <circle
              key={`pulse-${conn}`}
              className="hero09-animated"
              r="4"
              fill="#f472b6"
              filter="url(#hero09-pulse-glow)"
            >
              <animateMotion
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
                path={`M${ax},${ay} L${bx},${by}`}
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          );
        })}
      </svg>

      {/* Radial gradient overlay for depth and to soften network edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(8,12,21,0) 0%, #080c15 100%)",
          zIndex: 2,
        }}
      />

      {/* Subtle top/bottom vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #080c15 0%, transparent 15%, transparent 85%, #080c15 100%)",
          zIndex: 2,
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="hero09-animated inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style={{
            background: "rgba(236,72,153,0.08)",
            borderColor: "rgba(236,72,153,0.2)",
            animation: "hero09ContentFadeUp 0.8s ease-out both",
          }}
        >
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: "#ec4899" }}
          />
          <span
            className="text-sm font-medium"
            style={{ color: "#f9a8d4", fontFamily: fontBody }}
          >
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <h1
          className="hero09-animated text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{
            fontFamily: fontHeading,
            animation: "hero09ContentFadeUp 0.8s ease-out 0.15s both",
          }}
        >
          <span className="block text-white">{t.heading1}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #ec4899, #fb7185)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.heading2}
          </span>
        </h1>

        {/* Sub text */}
        <p
          className="hero09-animated text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.55)",
            fontFamily: fontBody,
            animation: "hero09ContentFadeUp 0.8s ease-out 0.3s both",
          }}
        >
          {t.sub}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero09-animated flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{
            animation: "hero09ContentFadeUp 0.8s ease-out 0.45s both",
          }}
        >
          <button
            className="cursor-pointer group flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ec4899, #fb7185)",
              fontFamily: fontBody,
              boxShadow: "0 4px 24px rgba(236,72,153,0.3)",
            }}
          >
            {t.cta1}
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            />
          </button>
          <button
            className="cursor-pointer flex items-center gap-2 px-8 py-3.5 rounded-xl text-white/80 font-semibold text-base border transition-all duration-300 hover:bg-white/5 hover:text-white"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              fontFamily: fontBody,
            }}
          >
            {t.cta2}
          </button>
        </div>

        {/* Stats */}
        <div
          className="hero09-animated grid grid-cols-3 gap-6 sm:gap-10 max-w-lg mx-auto"
          style={{
            animation: "hero09ContentFadeUp 0.8s ease-out 0.6s both",
          }}
        >
          {[
            { value: t.stat1Value, label: t.stat1Label },
            { value: t.stat2Value, label: t.stat2Label },
            { value: t.stat3Value, label: t.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{
                  fontFamily: fontHeading,
                  background: "linear-gradient(135deg, #ec4899, #fb7185)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: fontBody,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
