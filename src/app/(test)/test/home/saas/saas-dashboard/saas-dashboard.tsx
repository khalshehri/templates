"use client";

/**
 * SaaS Dashboard Hero
 * Live dashboard with animated charts, sparklines, and metric cards.
 * Features a floating dashboard UI with real-time data visualizations.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Analytics Dashboard",
    heading: "Data-Driven",
    headingLine2: "Decisions, Instantly.",
    subheading:
      "Real-time analytics that transform raw data into actionable insights. Monitor, analyze, and grow your business from a single dashboard.",
    ctaPrimary: "Start Free Trial",
    ctaSecondary: "View Demo",
    metrics: [
      { label: "Revenue", value: "$48.2K", change: "+12.5%", up: true },
      { label: "Users", value: "12,847", change: "+8.3%", up: true },
      { label: "Conversion", value: "3.24%", change: "+0.8%", up: true },
      { label: "Churn", value: "1.2%", change: "-0.3%", up: false },
    ],
    chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  ar: {
    badge: "لوحة التحليلات",
    heading: "قرارات مبنية",
    headingLine2: "على البيانات، فوراً.",
    subheading:
      "تحليلات فورية تحول البيانات الخام إلى رؤى قابلة للتنفيذ. راقب وحلل ونمِّ أعمالك من لوحة واحدة.",
    ctaPrimary: "ابدأ تجربة مجانية",
    ctaSecondary: "شاهد العرض",
    metrics: [
      { label: "الإيرادات", value: "$48.2K", change: "+12.5%", up: true },
      { label: "المستخدمون", value: "12,847", change: "+8.3%", up: true },
      { label: "التحويل", value: "3.24%", change: "+0.8%", up: true },
      { label: "الاستنزاف", value: "1.2%", change: "-0.3%", up: false },
    ],
    chartLabels: ["إثن", "ثلا", "أرب", "خمي", "جمع", "سبت", "أحد"],
  },
};

const sparklineData = [
  [20, 35, 28, 45, 38, 55, 62],
  [40, 32, 48, 42, 55, 50, 68],
  [15, 22, 18, 35, 30, 42, 38],
  [30, 25, 35, 20, 28, 15, 12],
];

const barData = [35, 52, 41, 68, 55, 72, 85];

function sparklinePath(data: number[], width: number, height: number): string {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  return data
    .map((v, i) => {
      const x = i * step;
      const y = height - ((v - min) / range) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

export function SaasDashboard({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes dashFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dashFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dashPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes dashBarGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes dashSparkDraw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes dashGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.1); }
          50% { box-shadow: 0 0 40px rgba(139,92,246,0.2), 0 0 80px rgba(99,102,241,0.1); }
        }
        @keyframes dashDot {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        .dash-fade { animation: dashFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .dash-float { animation: dashFloat 6s ease-in-out infinite; }
        .dash-bar { animation: dashBarGrow 1s cubic-bezier(0.22,1,0.36,1) both; transform-origin: bottom; }
        .dash-spark { stroke-dasharray: 300; animation: dashSparkDraw 2s ease-out both; }
        .dash-card { animation: dashGlow 4s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]">
        {/* Background gradients */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div
              className="dash-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {t.badge}
            </div>

            <h1
              className="dash-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heading}
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {t.headingLine2}
              </span>
            </h1>

            <p
              className="dash-fade mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              {t.subheading}
            </p>

            <div
              className="dash-fade mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.ctaPrimary}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                />
              </a>
              <a
                href="#"
                className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Dashboard UI */}
          <div className="dash-fade dash-float" style={{ animationDelay: "0.6s" }}>
            <div className="dash-card max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-[#111127]/80 backdrop-blur-sm overflow-hidden">
              {/* Dashboard header bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm font-medium">Overview Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400/60 font-mono">LIVE</span>
                </div>
              </div>

              {/* Metric cards row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04]">
                {t.metrics.map((m, i) => (
                  <div key={i} className="bg-[#111127] p-5">
                    <div className="text-xs text-white/30 mb-1">{m.label}</div>
                    <div className="text-xl font-bold text-white mb-2">{m.value}</div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium ${m.up ? "text-emerald-400" : "text-rose-400"}`}>
                        {m.change}
                      </span>
                      <svg width="60" height="24" viewBox="0 0 60 24" className="overflow-visible">
                        <path
                          d={sparklinePath(sparklineData[i], 60, 20)}
                          fill="none"
                          stroke={m.up ? "rgba(52,211,153,0.6)" : "rgba(251,113,133,0.6)"}
                          strokeWidth="1.5"
                          className="dash-spark"
                          style={{ animationDelay: `${0.8 + i * 0.15}s` }}
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="p-6">
                <div className="flex items-end justify-between gap-3 h-32">
                  {barData.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full relative" style={{ height: "100px" }}>
                        <div
                          className="dash-bar absolute bottom-0 left-[15%] right-[15%] rounded-t-md bg-gradient-to-t from-violet-600/60 to-indigo-400/80"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${1.2 + i * 0.1}s`,
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-white/20 font-mono">
                        {t.chartLabels[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
