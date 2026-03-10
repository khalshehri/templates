"use client";

/**
 * Real-time Metrics Dashboard Hero
 * Analytics-first layout with large animated counter numbers,
 * mini sparkline charts, and status indicators. Live-updating feel
 * with number counting animations and pulsing data points.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Real-time Analytics",
    heading: "Data-Driven",
    headingHighlight: "Decisions",
    subheading:
      "Monitor every metric that matters. Real-time dashboards, custom alerts, and predictive insights — all in one platform.",
    ctaPrimary: "Start Tracking",
    ctaSecondary: "See Demo",
    metrics: [
      { value: "2.4M", label: "Active Users", change: "+12.5%", up: true },
      { value: "$847K", label: "Revenue (MRR)", change: "+8.3%", up: true },
      { value: "99.97%", label: "Uptime", change: "+0.02%", up: true },
      { value: "23ms", label: "Avg Response", change: "-15%", up: true },
    ],
    chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    liveLabel: "LIVE",
    bottomStats: [
      { label: "Events/sec", value: "14,200" },
      { label: "Data Points", value: "1.2B" },
      { label: "Dashboards", value: "340" },
    ],
  },
  ar: {
    badge: "تحليلات فورية",
    heading: "قرارات",
    headingHighlight: "مبنية على البيانات",
    subheading:
      "راقب كل مقياس مهم. لوحات بيانات فورية، تنبيهات مخصصة، ورؤى تنبؤية — كل ذلك في منصة واحدة.",
    ctaPrimary: "ابدأ التتبع",
    ctaSecondary: "شاهد العرض",
    metrics: [
      { value: "2.4M", label: "مستخدم نشط", change: "+12.5%", up: true },
      { value: "$847K", label: "الإيرادات (شهري)", change: "+8.3%", up: true },
      { value: "99.97%", label: "وقت التشغيل", change: "+0.02%", up: true },
      { value: "23ms", label: "متوسط الاستجابة", change: "-15%", up: true },
    ],
    chartLabels: ["إثن", "ثلا", "أرب", "خمي", "جمع", "سبت", "أحد"],
    liveLabel: "مباشر",
    bottomStats: [
      { label: "حدث/ثانية", value: "14,200" },
      { label: "نقاط البيانات", value: "1.2B" },
      { label: "لوحات", value: "340" },
    ],
  },
};

/* Deterministic sparkline points */
const sparklines = [
  [20, 35, 28, 45, 38, 55, 62, 48, 72, 65, 78, 85],
  [30, 25, 40, 35, 50, 42, 58, 65, 55, 70, 75, 82],
  [90, 88, 92, 89, 91, 93, 90, 94, 92, 95, 93, 96],
  [45, 38, 42, 35, 30, 28, 32, 25, 28, 22, 25, 23],
];

function sparklinePath(points: number[], width: number, height: number): string {
  const maxVal = Math.max(...points);
  const minVal = Math.min(...points);
  const range = maxVal - minVal || 1;
  const stepX = width / (points.length - 1);
  return points.map((p, i) => {
    const x = i * stepX;
    const y = height - ((p - minVal) / range) * height;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

export function SaasMetrics({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes sparkDraw {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .count-up { animation: countUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08061a]">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "livePulse 1.5s ease-in-out infinite" }} />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Metrics dashboard */}
          <div className="fade-up max-w-4xl mx-auto" style={{ animationDelay: "0.6s" }}>
            {/* Live indicator */}
            <div className="flex items-center justify-end gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "livePulse 1.5s ease-in-out infinite" }} />
              <span className="text-[10px] text-emerald-400/60 font-mono uppercase tracking-wider">{t.liveLabel}</span>
            </div>

            {/* 4 metric cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {t.metrics.map((metric, i) => (
                <div key={i} className="relative bg-white/[0.03] border border-violet-500/10 rounded-xl p-4 sm:p-5 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] sm:text-xs text-white/30 uppercase tracking-wider">{metric.label}</span>
                    <span className={`text-[10px] font-mono ${metric.up ? "text-emerald-400/70" : "text-red-400/70"}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="count-up text-2xl sm:text-3xl font-bold text-white font-mono" style={{ animationDelay: `${0.7 + i * 0.15}s` }}>
                    {metric.value}
                  </div>
                  {/* Mini sparkline */}
                  <svg className="mt-3 w-full h-8" viewBox="0 0 120 30" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`spark-${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(139,92,246,0.15)" />
                        <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                      </linearGradient>
                    </defs>
                    <path d={sparklinePath(sparklines[i], 120, 25) + " L120,30 L0,30 Z"}
                      fill={`url(#spark-${i})`} />
                    <path d={sparklinePath(sparklines[i], 120, 25)}
                      fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5"
                      strokeDasharray="500" style={{ animation: `sparkDraw 2s ease-out ${0.8 + i * 0.2}s both` }} />
                    {/* Latest point dot */}
                    <circle cx="120" cy={30 - ((sparklines[i][sparklines[i].length - 1] - Math.min(...sparklines[i])) / (Math.max(...sparklines[i]) - Math.min(...sparklines[i]))) * 25}
                      r="2.5" fill="rgba(139,92,246,0.8)" style={{ animation: "livePulse 2s ease-in-out infinite" }} />
                  </svg>
                </div>
              ))}
            </div>

            {/* Bar chart area */}
            <div className="mt-4 bg-white/[0.02] border border-violet-500/10 rounded-xl p-5 sm:p-6">
              <div className="flex items-end justify-between h-28 gap-2 sm:gap-4">
                {t.chartLabels.map((label, i) => {
                  const heights = [45, 65, 55, 80, 70, 40, 60];
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full relative" style={{ height: "100%" }}>
                        <div className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-violet-600/40 to-purple-500/20"
                          style={{
                            height: `${heights[i]}%`,
                            transformOrigin: "bottom",
                            animation: `barGrow 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${0.9 + i * 0.1}s both`,
                          }} />
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-white/20 font-mono">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="fade-up mt-10 flex items-center justify-center gap-8 flex-wrap" style={{ animationDelay: "1.2s" }}>
            {t.bottomStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-violet-300 font-mono">{stat.value}</div>
                <div className="text-[10px] text-white/20 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
