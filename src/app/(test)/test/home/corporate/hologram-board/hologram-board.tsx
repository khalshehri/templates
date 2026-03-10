"use client";

/**
 * Hologram Board — Corporate Hero Template
 *
 * A futuristic corporate boardroom table seen from above, with holographic data
 * projections floating above it. Translucent data panels, pie charts (CSS), and
 * bar graphs float in 3D space with a blue holographic glow. A circular conference
 * table outline anchors the bottom. Screams "we run on data." Ultra-modern corporate.
 *
 * Color palette: deep navy (#0a1225), hologram blue (#38bdf8), cyan (#06b6d4), white glow.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    headline: "Data-Driven Leadership",
    subheadline: "Where Vision Meets Intelligence",
    description:
      "Transform your corporate strategy with real-time holographic insights. Our platform turns complex data into actionable decisions at the speed of thought.",
    cta: "Explore Platform",
    secondaryCta: "Watch Demo",
    stats: {
      revenue: { label: "Revenue Growth", value: "247%" },
      efficiency: { label: "Operational Efficiency", value: "98.6%" },
      markets: { label: "Global Markets", value: "43" },
      roi: { label: "Avg. ROI", value: "12.4x" },
    },
    panels: {
      bar: "Quarterly Performance",
      pie: "Market Distribution",
      line: "Growth Trajectory",
      stat: "Live Analytics",
    },
  },
  ar: {
    headline: "قيادة مبنية على البيانات",
    subheadline: "حيث تلتقي الرؤية بالذكاء",
    description:
      "حوّل استراتيجيتك المؤسسية برؤى هولوغرافية في الوقت الفعلي. منصتنا تحوّل البيانات المعقدة إلى قرارات فعّالة بسرعة الفكر.",
    cta: "استكشف المنصة",
    secondaryCta: "شاهد العرض",
    stats: {
      revenue: { label: "نمو الإيرادات", value: "٢٤٧٪" },
      efficiency: { label: "الكفاءة التشغيلية", value: "٩٨.٦٪" },
      markets: { label: "الأسواق العالمية", value: "٤٣" },
      roi: { label: "متوسط العائد", value: "١٢.٤x" },
    },
    panels: {
      bar: "الأداء الربعي",
      pie: "توزيع السوق",
      line: "مسار النمو",
      stat: "تحليلات مباشرة",
    },
  },
};

export function HologramBoard({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <>
      <style>{`
        @keyframes holoBob1 {
          0%, 100% { transform: translateY(0px) rotateX(8deg) rotateY(-4deg); }
          50% { transform: translateY(-18px) rotateX(10deg) rotateY(-2deg); }
        }
        @keyframes holoBob2 {
          0%, 100% { transform: translateY(0px) rotateX(6deg) rotateY(5deg); }
          50% { transform: translateY(-14px) rotateX(8deg) rotateY(3deg); }
        }
        @keyframes holoBob3 {
          0%, 100% { transform: translateY(0px) rotateX(10deg) rotateY(-3deg); }
          50% { transform: translateY(-22px) rotateX(12deg) rotateY(-1deg); }
        }
        @keyframes holoBob4 {
          0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(6deg); }
          50% { transform: translateY(-12px) rotateX(7deg) rotateY(4deg); }
        }
        @keyframes scanLine {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes tableGlow {
          0%, 100% { opacity: 0.4; filter: blur(8px); }
          50% { opacity: 0.7; filter: blur(12px); }
        }
        @keyframes barGrow {
          0% { height: 0%; }
          100% { height: var(--bar-h); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .holo-panel {
          background: linear-gradient(
            135deg,
            rgba(56, 189, 248, 0.08) 0%,
            rgba(6, 182, 212, 0.04) 50%,
            rgba(56, 189, 248, 0.06) 100%
          );
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 12px;
          box-shadow:
            0 0 20px rgba(56, 189, 248, 0.15),
            0 0 60px rgba(56, 189, 248, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }
        .holo-panel::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(56, 189, 248, 0.4),
            transparent
          );
          animation: scanLine 3s linear infinite;
          pointer-events: none;
        }
        .holo-panel-1 { animation: holoBob1 5s ease-in-out infinite; }
        .holo-panel-2 { animation: holoBob2 6s ease-in-out infinite 0.5s; }
        .holo-panel-3 { animation: holoBob3 5.5s ease-in-out infinite 1s; }
        .holo-panel-4 { animation: holoBob4 7s ease-in-out infinite 1.5s; }
      `}</style>

      <section
        dir={isRTL ? "rtl" : "ltr"}
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{ background: "#0a1225" }}
      >
        {/* Perspective grid floor */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            perspective: "800px",
            perspectiveOrigin: "50% 40%",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "-20%",
              right: "-20%",
              height: "60%",
              transformStyle: "preserve-3d",
              transform: "rotateX(65deg)",
              backgroundImage: `
                linear-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56, 189, 248, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              animation: "gridPulse 4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-8"
          style={{ animation: "fadeInUp 1s ease-out" }}
        >
          {/* Headline area */}
          <div className="text-center mb-16">
            <p
              className="text-sm font-mono tracking-[0.3em] uppercase mb-4"
              style={{ color: "#38bdf8" }}
            >
              {t.subheadline}
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{
                color: "#ffffff",
                textShadow: "0 0 40px rgba(56, 189, 248, 0.3)",
              }}
            >
              {t.headline}
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              {t.description}
            </p>
            <div
              className={`flex items-center justify-center gap-4 flex-wrap`}
            >
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #38bdf8, #06b6d4)",
                  color: "#0a1225",
                  boxShadow: "0 0 30px rgba(56, 189, 248, 0.3)",
                }}
              >
                {t.cta}
                <ArrowRight
                  className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                />
              </button>
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#38bdf8",
                }}
              >
                {t.secondaryCta}
              </button>
            </div>
          </div>

          {/* Holographic panels container */}
          <div
            className="relative mx-auto"
            style={{
              maxWidth: "1000px",
              height: "420px",
              perspective: "1200px",
            }}
          >
            {/* Panel 1: Bar Chart */}
            <div
              className="holo-panel holo-panel-1 absolute p-4"
              style={{
                width: "220px",
                height: "180px",
                top: "10px",
                [isRTL ? "right" : "left"]: "0px",
              }}
            >
              <p
                className="text-xs font-mono mb-3 tracking-wide"
                style={{ color: "#38bdf8" }}
              >
                {t.panels.bar}
              </p>
              <div className="flex items-end gap-2 h-[110px] px-2">
                {[65, 82, 45, 90, 73, 55, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={
                      {
                        "--bar-h": `${h}%`,
                        height: `${h}%`,
                        background: `linear-gradient(to top, rgba(56, 189, 248, 0.6), rgba(6, 182, 212, 0.2))`,
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        animation: `barGrow 1.5s ease-out ${i * 0.1}s both`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>
            </div>

            {/* Panel 2: Pie Chart */}
            <div
              className="holo-panel holo-panel-2 absolute p-4"
              style={{
                width: "200px",
                height: "200px",
                top: "0px",
                [isRTL ? "left" : "right"]: "40px",
              }}
            >
              <p
                className="text-xs font-mono mb-3 tracking-wide"
                style={{ color: "#38bdf8" }}
              >
                {t.panels.pie}
              </p>
              <div className="flex items-center justify-center">
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `conic-gradient(
                      rgba(56, 189, 248, 0.7) 0deg 120deg,
                      rgba(6, 182, 212, 0.5) 120deg 210deg,
                      rgba(56, 189, 248, 0.3) 210deg 290deg,
                      rgba(6, 182, 212, 0.2) 290deg 360deg
                    )`,
                    border: "2px solid rgba(56, 189, 248, 0.3)",
                    boxShadow:
                      "0 0 30px rgba(56, 189, 248, 0.15), inset 0 0 20px rgba(56, 189, 248, 0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "#0a1225",
                      margin: "35px auto 0",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Panel 3: Line Graph (SVG) */}
            <div
              className="holo-panel holo-panel-3 absolute p-4"
              style={{
                width: "240px",
                height: "160px",
                top: "140px",
                [isRTL ? "right" : "left"]: "180px",
              }}
            >
              <p
                className="text-xs font-mono mb-2 tracking-wide"
                style={{ color: "#38bdf8" }}
              >
                {t.panels.line}
              </p>
              <svg
                viewBox="0 0 200 80"
                className="w-full h-[90px]"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="lineGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(56, 189, 248, 0.3)"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(56, 189, 248, 0)"
                    />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[20, 40, 60].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="200"
                    y2={y}
                    stroke="rgba(56, 189, 248, 0.1)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Area fill */}
                <path
                  d="M0,65 Q20,55 40,50 T80,35 T120,25 T160,15 T200,8 L200,80 L0,80 Z"
                  fill="url(#lineGrad)"
                />
                {/* Line */}
                <path
                  d="M0,65 Q20,55 40,50 T80,35 T120,25 T160,15 T200,8"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 4px rgba(56, 189, 248, 0.5))"
                />
                {/* Data points */}
                {[
                  [0, 65],
                  [40, 50],
                  [80, 35],
                  [120, 25],
                  [160, 15],
                  [200, 8],
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="3"
                    fill="#0a1225"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>

            {/* Panel 4: Live Stat */}
            <div
              className="holo-panel holo-panel-4 absolute p-4 flex flex-col items-center justify-center"
              style={{
                width: "180px",
                height: "150px",
                top: "160px",
                [isRTL ? "left" : "right"]: "0px",
              }}
            >
              <p
                className="text-xs font-mono mb-2 tracking-wide"
                style={{ color: "#38bdf8" }}
              >
                {t.panels.stat}
              </p>
              <p
                className="text-4xl font-bold font-mono"
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
                }}
              >
                {t.stats.revenue.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "rgba(56, 189, 248, 0.7)" }}
              >
                {t.stats.revenue.label}
              </p>
              <div className="flex gap-4 mt-3">
                <div className="text-center">
                  <p
                    className="text-sm font-mono font-bold"
                    style={{ color: "#06b6d4" }}
                  >
                    {t.stats.markets.value}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {t.stats.markets.label}
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className="text-sm font-mono font-bold"
                    style={{ color: "#06b6d4" }}
                  >
                    {t.stats.roi.value}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {t.stats.roi.label}
                  </p>
                </div>
              </div>
            </div>

            {/* Panel 5: Efficiency gauge */}
            <div
              className="holo-panel holo-panel-2 absolute p-4 flex flex-col items-center justify-center"
              style={{
                width: "160px",
                height: "130px",
                top: "50px",
                left: "50%",
                marginLeft: "-80px",
              }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{ width: "80px", height: "80px" }}
              >
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.1)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${0.986 * 2 * Math.PI * 34} ${2 * Math.PI * 34}`}
                    transform="rotate(-90 40 40)"
                    style={{
                      filter: "drop-shadow(0 0 4px rgba(56, 189, 248, 0.5))",
                    }}
                  />
                </svg>
                <span
                  className="absolute text-xs font-mono font-bold"
                  style={{ color: "#38bdf8" }}
                >
                  {t.stats.efficiency.value}
                </span>
              </div>
              <p
                className="text-[10px] mt-1 text-center"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {t.stats.efficiency.label}
              </p>
            </div>
          </div>
        </div>

        {/* Conference table outline */}
        <div
          className="relative z-10 mt-4 mb-12"
          style={{
            width: "min(600px, 80vw)",
            height: "80px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "2px solid rgba(56, 189, 248, 0.25)",
              boxShadow:
                "0 0 40px rgba(56, 189, 248, 0.1), inset 0 0 40px rgba(56, 189, 248, 0.05)",
              animation: "tableGlow 4s ease-in-out infinite",
            }}
          />
          {/* Table center highlight */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: "40%",
              height: "60%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: "1px solid rgba(56, 189, 248, 0.12)",
            }}
          />
        </div>

        {/* Bottom stats row */}
        <div
          className="relative z-10 w-full max-w-3xl mx-auto px-6 pb-16"
          style={{ animation: "fadeInUp 1s ease-out 0.5s both" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(
              Object.keys(t.stats) as Array<keyof typeof t.stats>
            ).map((key) => (
              <div
                key={key}
                className="text-center p-3 rounded-lg"
                style={{
                  border: "1px solid rgba(56, 189, 248, 0.1)",
                  background: "rgba(56, 189, 248, 0.03)",
                }}
              >
                <p
                  className="text-xl md:text-2xl font-bold font-mono"
                  style={{
                    color: "#38bdf8",
                    textShadow:
                      "0 0 12px rgba(56, 189, 248, 0.3)",
                  }}
                >
                  {t.stats[key].value}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  {t.stats[key].label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
