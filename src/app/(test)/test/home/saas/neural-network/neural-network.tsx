"use client";

/**
 * Neural Network Hero Template
 *
 * An animated neural network visualization for AI/ML SaaS products.
 * Multiple layers of nodes connected by lines with data pulses traveling
 * along connections. The network processes data left-to-right with each
 * layer lighting up in sequence. Input layer: cyan, hidden layers: purple,
 * output layer: green.
 *
 * @category SaaS
 * @variant neural-network
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "AI-Powered Platform",
    heading: "Intelligent Systems That Learn & Adapt",
    description:
      "Harness the power of neural networks and deep learning to transform raw data into actionable intelligence. Our AI engine processes millions of signals in real-time.",
    primaryCta: "Start Building",
    secondaryCta: "View Architecture",
    stats: [
      { value: "99.7%", label: "Accuracy" },
      { value: "< 50ms", label: "Inference" },
      { value: "10B+", label: "Parameters" },
    ],
  },
  ar: {
    badge: "منصة مدعومة بالذكاء الاصطناعي",
    heading: "أنظمة ذكية تتعلم وتتكيف",
    description:
      "استفد من قوة الشبكات العصبية والتعلم العميق لتحويل البيانات الخام إلى رؤى قابلة للتنفيذ. محرك الذكاء الاصطناعي لدينا يعالج ملايين الإشارات في الوقت الفعلي.",
    primaryCta: "ابدأ البناء",
    secondaryCta: "عرض البنية",
    stats: [
      { value: "٩٩.٧٪", label: "الدقة" },
      { value: "< ٥٠مل‌ث", label: "الاستدلال" },
      { value: "+١٠ مليار", label: "المعاملات" },
    ],
  },
};

/* ── Network topology ── */

/** Layers: 3 → 5 → 5 → 3 */
const LAYERS = [3, 5, 5, 3];
const LAYER_COLORS = ["#06b6d4", "#8b5cf6", "#8b5cf6", "#4ade80"];
const LAYER_GLOW_COLORS = [
  "rgba(6,182,212,0.6)",
  "rgba(139,92,246,0.6)",
  "rgba(139,92,246,0.6)",
  "rgba(74,222,128,0.6)",
];

const SVG_W = 700;
const SVG_H = 320;
const NODE_R = 7;
const LAYER_GAP = SVG_W / (LAYERS.length + 1);

interface Pos {
  x: number;
  y: number;
}

/** Pre-compute node positions */
function getNodePositions(): Pos[][] {
  return LAYERS.map((count, li) => {
    const x = LAYER_GAP * (li + 1);
    const totalH = (count - 1) * 56;
    const startY = (SVG_H - totalH) / 2;
    return Array.from({ length: count }, (_, ni) => ({
      x,
      y: startY + ni * 56,
    }));
  });
}

const positions = getNodePositions();

/** Build connections between adjacent layers */
interface Connection {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  fromLayer: number;
}

function getConnections(): Connection[] {
  const conns: Connection[] = [];
  for (let li = 0; li < positions.length - 1; li++) {
    for (const from of positions[li]) {
      for (const to of positions[li + 1]) {
        conns.push({
          x1: from.x,
          y1: from.y,
          x2: to.x,
          y2: to.y,
          fromLayer: li,
        });
      }
    }
  }
  return conns;
}

const connections = getConnections();

export function NeuralNetwork({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#060612" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ── Grid background ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow blobs ── */}
      <div
        className="pointer-events-none absolute rounded-full blur-[120px]"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          left: "10%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full blur-[120px]"
        style={{
          width: 400,
          height: 400,
          bottom: "0%",
          right: "5%",
          background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        {/* Text area */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          {/* Badge */}
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: "rgba(139,92,246,0.3)",
              background: "rgba(139,92,246,0.08)",
              color: "#a78bfa",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "#8b5cf6", boxShadow: "0 0 8px rgba(139,92,246,0.6)" }}
            />
            {t.badge}
          </span>

          {/* Heading */}
          <h1
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "#f0f0ff" }}
          >
            {t.heading}
          </h1>

          {/* Description */}
          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(203,213,225,0.75)" }}
          >
            {t.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition-shadow hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                boxShadow: "0 0 24px rgba(139,92,246,0.35)",
              }}
            >
              {t.primaryCta}
              <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "#cbd5e1" }}
            >
              {t.secondaryCta}
            </button>
          </div>
        </div>

        {/* ── Neural network SVG ── */}
        <div className="mx-auto max-w-3xl">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full"
            style={{ filter: "drop-shadow(0 0 40px rgba(139,92,246,0.12))" }}
          >
            <defs>
              {/* Glow filters per layer color */}
              <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="pulse-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Layer labels */}
            {["Input", "Hidden 1", "Hidden 2", "Output"].map((label, li) => (
              <text
                key={label}
                x={positions[li][0].x}
                y={20}
                textAnchor="middle"
                fill="rgba(203,213,225,0.35)"
                fontSize="10"
                fontFamily="monospace"
              >
                {label}
              </text>
            ))}

            {/* Connections */}
            {connections.map((c, ci) => (
              <line
                key={`conn-${ci}`}
                x1={c.x1}
                y1={c.y1}
                x2={c.x2}
                y2={c.y2}
                stroke="rgba(139,92,246,0.1)"
                strokeWidth="1"
              />
            ))}

            {/* Data pulses traveling along connections */}
            {connections.map((c, ci) => {
              const delay = (c.fromLayer * 1.2 + (ci % 5) * 0.3).toFixed(2);
              const duration = (2.5 + (ci % 3) * 0.5).toFixed(2);
              const pulseColor =
                c.fromLayer === 0
                  ? "#06b6d4"
                  : c.fromLayer === 2
                    ? "#4ade80"
                    : "#8b5cf6";

              return (
                <circle key={`pulse-${ci}`} r="2.5" fill={pulseColor} filter="url(#pulse-glow)">
                  <animate
                    attributeName="cx"
                    values={`${c.x1};${c.x2}`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${c.y1};${c.y2}`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.9;0.9;0"
                    keyTimes="0;0.1;0.8;1"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}

            {/* Nodes */}
            {positions.map((layer, li) =>
              layer.map((pos, ni) => (
                <g key={`node-${li}-${ni}`}>
                  {/* Outer glow ring */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={NODE_R + 4}
                    fill="none"
                    stroke={LAYER_GLOW_COLORS[li]}
                    strokeWidth="1"
                    opacity="0.4"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.15;0.5;0.15"
                      dur="3s"
                      begin={`${li * 0.8}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="r"
                      values={`${NODE_R + 2};${NODE_R + 6};${NODE_R + 2}`}
                      dur="3s"
                      begin={`${li * 0.8}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Main node */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={NODE_R}
                    fill={LAYER_COLORS[li]}
                    opacity="0.85"
                  >
                    {/* Sequential activation: layer brightens in order */}
                    <animate
                      attributeName="opacity"
                      values="0.4;1;0.4"
                      dur="3s"
                      begin={`${li * 0.8 + ni * 0.1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Inner bright core */}
                  <circle cx={pos.x} cy={pos.y} r={3} fill="white" opacity="0.6">
                    <animate
                      attributeName="opacity"
                      values="0.2;0.8;0.2"
                      dur="3s"
                      begin={`${li * 0.8 + ni * 0.1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))
            )}
          </svg>
        </div>

        {/* ── Stats bar ── */}
        <div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 rounded-2xl border p-6"
          style={{
            borderColor: "rgba(139,92,246,0.15)",
            background: "rgba(139,92,246,0.04)",
          }}
        >
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#a78bfa" }}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs" style={{ color: "rgba(203,213,225,0.5)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CSS keyframes (inline style tag) ── */}
      <style>{`
        @keyframes neural-layer-activate {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
