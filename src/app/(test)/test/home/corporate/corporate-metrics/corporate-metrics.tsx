"use client";

/**
 * Data Pulse Hero
 * Dark dashboard-style hero with animated data visualization.
 * SVG circular progress rings with stroke-dashoffset animation.
 * Network topology: dots connected by thin lines with pulse animation.
 * Oversized stat numbers with subtle glow. Ticker strip at bottom.
 * Dark (#0a0f1a) + accent blue (#3b82f6) + teal (#14b8a6).
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Proven Track Record",
    heading: "Numbers That Speak",
    headingHighlight: "Louder Than Words",
    subheading:
      "Our results-driven approach has helped hundreds of enterprises achieve their strategic goals.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Case Studies",
    rings: [
      { value: 98, label: "Client Retention", color: "#3b82f6", suffix: "%" },
      { value: 340, label: "Projects Delivered", color: "#14b8a6", suffix: "+", displayValue: "340+" },
      { value: 15, label: "Countries Served", color: "#8b5cf6", suffix: "", displayValue: "15" },
      { value: 99.7, label: "Uptime Guaranteed", color: "#06b6d4", suffix: "%" },
    ],
    ticker: [
      "Revenue Generated: $2.4B",
      "Enterprise Clients: 500+",
      "Average ROI: 340%",
      "Projects Delivered: 340+",
      "Response Time: <2hrs",
      "NPS Score: 92",
      "Team Members: 200+",
      "Years of Excellence: 25+",
    ],
  },
  ar: {
    badge: "سجل حافل بالإنجازات",
    heading: "أرقام تتحدث",
    headingHighlight: "بصوت أعلى من الكلمات",
    subheading:
      "ساعد نهجنا القائم على النتائج مئات المؤسسات في تحقيق أهدافها الاستراتيجية.",
    ctaPrimary: "ابدأ الآن",
    ctaSecondary: "عرض دراسات الحالة",
    rings: [
      { value: 98, label: "معدل الاحتفاظ", color: "#3b82f6", suffix: "%" },
      { value: 340, label: "مشروع منجز", color: "#14b8a6", suffix: "+", displayValue: "+340" },
      { value: 15, label: "دولة مخدومة", color: "#8b5cf6", suffix: "", displayValue: "15" },
      { value: 99.7, label: "وقت تشغيل مضمون", color: "#06b6d4", suffix: "%" },
    ],
    ticker: [
      "إيرادات محققة: $2.4B",
      "عميل مؤسسي: +500",
      "متوسط العائد: 340%",
      "مشروع منجز: +340",
      "وقت الاستجابة: أقل من ساعتين",
      "تقييم NPS: 92",
      "أعضاء الفريق: +200",
      "سنوات التميز: +25",
    ],
  },
};

// Network topology nodes (deterministic positions)
const NODES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: ((i * 7919 + 1301) % 10000) / 100,
  y: ((i * 6271 + 3457) % 10000) / 100,
  size: 2 + ((i * 3137) % 3),
  pulseDelay: ((i * 1789) % 60) / 10,
  opacity: 0.3 + ((i * 2741) % 5) / 10,
}));

// Edges connecting nearby nodes
const EDGES: Array<{ from: number; to: number }> = [];
for (let i = 0; i < NODES.length; i++) {
  for (let j = i + 1; j < NODES.length; j++) {
    const dx = NODES[i].x - NODES[j].x;
    const dy = NODES[i].y - NODES[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 18 && EDGES.length < 40) {
      EDGES.push({ from: i, to: j });
    }
  }
}

function ProgressRing({
  value,
  maxValue,
  label,
  display,
  color,
  size,
  delay,
}: {
  value: number;
  maxValue: number;
  label: string;
  display: string;
  color: string;
  size: number;
  delay: number;
}) {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(value / maxValue, 1);
  const dashOffset = circumference * (1 - percentage);

  return (
    <div
      className="relative flex flex-col items-center"
      style={{ animation: `ringReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both` }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            style={{
              animation: `ringFill 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay + 0.3}s forwards`,
              ["--ring-target" as string]: dashOffset,
              filter: `drop-shadow(0 0 8px ${color}60)`,
            }}
          />
        </svg>
        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-xl sm:text-2xl font-black text-white/90"
            style={{
              textShadow: `0 0 20px ${color}50`,
              animation: `fadeUp 0.6s ease ${delay + 0.8}s both`,
            }}
          >
            {display}
          </span>
        </div>
      </div>
      <span
        className="mt-3 text-[11px] text-white/25 uppercase tracking-wider font-medium text-center"
        style={{ animation: `fadeUp 0.6s ease ${delay + 1}s both` }}
      >
        {label}
      </span>
    </div>
  );
}

export function CorporateMetrics({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  // Double the ticker for seamless loop
  const tickerItems = [...t.ticker, ...t.ticker];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringReveal {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes ringFill {
          from { stroke-dashoffset: inherit; }
          to { stroke-dashoffset: var(--ring-target); }
        }
        @keyframes nodePulse {
          0%, 100% { opacity: var(--node-opacity); transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        @keyframes edgePulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.18; }
        }
        @keyframes dataTravel {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tickerScrollRTL {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.02; }
          50% { opacity: 0.05; }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 20px var(--glow-color, rgba(59,130,246,0.3)); }
          50% { text-shadow: 0 0 40px var(--glow-color, rgba(59,130,246,0.5)), 0 0 80px var(--glow-color, rgba(59,130,246,0.2)); }
        }
        @keyframes scanline {
          from { top: -5%; }
          to { top: 105%; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .node-pulse {
          border-radius: 50%;
          position: absolute;
          animation: nodePulse var(--node-duration, 4s) ease-in-out var(--node-delay, 0s) infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#0a0f1a" }}>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            animation: "gridPulse 8s ease-in-out infinite",
          }}
        />

        {/* Ambient glow spots */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            top: "-10%",
            left: "20%",
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            bottom: "10%",
            right: "10%",
            background: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Network topology background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Edges */}
            {EDGES.map((edge, i) => {
              const from = NODES[edge.from];
              const to = NODES[edge.to];
              return (
                <g key={`edge-${i}`}>
                  <line
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke="rgba(59,130,246,0.08)"
                    strokeWidth="0.5"
                    style={{ animation: `edgePulse ${5 + (i % 4)}s ease-in-out ${i * 0.3}s infinite` }}
                  />
                  {/* Traveling data dot along edge */}
                  {i % 3 === 0 && (
                    <circle
                      r="1.5"
                      fill="#3b82f6"
                      style={{
                        offsetPath: `path("M ${from.x * 10} ${from.y * 6} L ${to.x * 10} ${to.y * 6}")`,
                        animation: `dataTravel ${3 + (i % 3)}s linear ${i * 0.5}s infinite`,
                        filter: "drop-shadow(0 0 3px rgba(59,130,246,0.6))",
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Node dots */}
          {NODES.map((node) => (
            <div
              key={node.id}
              className="node-pulse"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: node.size,
                height: node.size,
                background: node.id % 3 === 0 ? "#14b8a6" : "#3b82f6",
                boxShadow: `0 0 ${node.size * 3}px ${node.id % 3 === 0 ? "rgba(20,184,166,0.4)" : "rgba(59,130,246,0.4)"}`,
                "--node-opacity": node.opacity,
                "--node-delay": `${node.pulseDelay}s`,
                "--node-duration": `${3 + (node.id % 4)}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Scanline */}
        <div
          className="absolute left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.06), transparent)",
            animation: "scanline 10s linear infinite",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div
                className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-blue-500/[0.1] bg-blue-500/[0.05] mb-8"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-medium text-blue-300/60 tracking-wider uppercase">
                  {t.badge}
                </span>
              </div>

              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="block text-white/90">{t.heading}</span>
                <span
                  className="block bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  {t.headingHighlight}
                </span>
              </h1>

              <p
                className="fade-up mt-6 text-lg text-white/20 leading-relaxed max-w-xl mx-auto"
                style={{ animationDelay: "0.3s" }}
              >
                {t.subheading}
              </p>

              {/* CTAs */}
              <div
                className="fade-up mt-8 flex items-center justify-center gap-4"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #1e40af, #3b82f6, #14b8a6)" }}
                >
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a
                  href="#"
                  className="px-8 py-4 text-sm font-semibold text-blue-200/25 border border-blue-400/[0.08] rounded-xl hover:bg-blue-400/[0.04] hover:border-blue-400/[0.15] transition-all backdrop-blur-sm"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Circular progress rings */}
            <div
              className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 justify-items-center"
            >
              {t.rings.map((ring, i) => {
                const displayVal = (ring as { displayValue?: string }).displayValue || `${ring.value}${ring.suffix}`;
                const maxVal = ring.suffix === "%" ? 100 : ring.value * 1.2;
                return (
                  <ProgressRing
                    key={i}
                    value={ring.value}
                    maxValue={maxVal}
                    label={ring.label}
                    display={displayVal}
                    color={ring.color}
                    size={130}
                    delay={0.5 + i * 0.2}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Ticker strip at bottom */}
        <div
          className="relative z-10 border-t border-blue-500/[0.06] bg-blue-500/[0.02] backdrop-blur-sm overflow-hidden"
          style={{ animation: "fadeUp 0.8s ease 1.8s both" }}
        >
          <div className="py-3">
            <div
              className="flex gap-12 whitespace-nowrap"
              style={{
                animation: `${isAr ? "tickerScrollRTL" : "tickerScroll"} 40s linear infinite`,
                width: "max-content",
              }}
            >
              {tickerItems.map((item, i) => (
                <span key={i} className="text-xs font-mono text-white/15 tracking-wider flex items-center gap-3">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "#3b82f6" : "#14b8a6",
                      boxShadow: `0 0 4px ${i % 2 === 0 ? "rgba(59,130,246,0.5)" : "rgba(20,184,166,0.5)"}`,
                    }}
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
