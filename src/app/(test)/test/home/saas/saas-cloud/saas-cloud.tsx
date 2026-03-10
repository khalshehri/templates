"use client";

/**
 * Cloud Infrastructure Hero
 * Architecture diagram layout with connected service nodes.
 * Central cloud icon with radiating service boxes connected by lines.
 * Animated data flow pulses along the connection paths.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Cloud Native",
    heading: "Infrastructure",
    headingHighlight: "That Scales",
    subheading:
      "Deploy across multiple regions with auto-scaling, load balancing, and zero-downtime deployments. Your cloud, simplified.",
    ctaPrimary: "Deploy Now",
    ctaSecondary: "Architecture Docs",
    centerLabel: "Core Platform",
    services: [
      { label: "CDN Edge", detail: "47 PoPs", x: 15, y: 15 },
      { label: "Load Balancer", detail: "Auto-scale", x: 75, y: 10 },
      { label: "Auth Service", detail: "OAuth 2.0", x: 5, y: 50 },
      { label: "Database", detail: "Multi-region", x: 85, y: 50 },
      { label: "Cache Layer", detail: "Redis Cluster", x: 15, y: 85 },
      { label: "Object Store", detail: "S3 Compatible", x: 75, y: 85 },
    ],
    metrics: ["99.99% SLA", "12 Regions", "<50ms Latency", "Auto-healing"],
  },
  ar: {
    badge: "سحابي الأصل",
    heading: "بنية تحتية",
    headingHighlight: "تتوسع",
    subheading:
      "انشر عبر مناطق متعددة مع التوسع التلقائي وتوزيع الحمل والنشر بدون توقف. سحابتك، مبسّطة.",
    ctaPrimary: "انشر الآن",
    ctaSecondary: "وثائق البنية",
    centerLabel: "المنصة الأساسية",
    services: [
      { label: "شبكة التوصيل", detail: "47 نقطة", x: 15, y: 15 },
      { label: "موزع الحمل", detail: "توسع تلقائي", x: 75, y: 10 },
      { label: "خدمة المصادقة", detail: "OAuth 2.0", x: 5, y: 50 },
      { label: "قاعدة البيانات", detail: "متعدد المناطق", x: 85, y: 50 },
      { label: "طبقة التخزين المؤقت", detail: "Redis Cluster", x: 15, y: 85 },
      { label: "تخزين الكائنات", detail: "متوافق S3", x: 75, y: 85 },
    ],
    metrics: ["99.99% SLA", "12 منطقة", "أقل من 50ms", "إصلاح تلقائي"],
  },
};

export function SaasCloud({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes nodeAppear {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes lineDraw {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes dataPulse {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes cloudFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        @keyframes ringPulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .node-appear { animation: nodeAppear 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#06071a]">
        {/* Hexagon grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 15v22L30 52 0 37V15z' fill='none' stroke='%238b5cf6' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }} />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(88,28,135,0.1) 40%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
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

          {/* Cloud architecture diagram */}
          <div className="fade-up relative max-w-3xl mx-auto" style={{ animationDelay: "0.6s" }}>
            <div className="relative" style={{ paddingBottom: "70%" }}>
              {/* Connection lines via SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70" preserveAspectRatio="xMidYMid meet">
                {t.services.map((service, i) => (
                  <line key={i}
                    x1="50" y1="35"
                    x2={service.x + 10} y2={service.y + 5}
                    stroke="rgba(139,92,246,0.15)"
                    strokeWidth="0.3"
                    strokeDasharray="2 2"
                    style={{ animation: `lineDraw 1.5s ease-out ${0.8 + i * 0.15}s both` }}
                  />
                ))}
                {/* Data flow dots */}
                {t.services.map((service, i) => (
                  <circle key={`dot-${i}`} r="0.8" fill="rgba(139,92,246,0.8)">
                    <animateMotion
                      dur={`${2 + i * 0.3}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                      path={`M50,35 L${service.x + 10},${service.y + 5}`}
                    />
                  </circle>
                ))}
              </svg>

              {/* Center platform node */}
              <div className="absolute top-1/2 left-1/2 z-10"
                style={{ animation: "cloudFloat 4s ease-in-out infinite" }}>
                <div className="relative">
                  {/* Pulse rings */}
                  <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full border border-violet-500/20"
                    style={{ animation: "ringPulse 3s ease-out infinite" }} />
                  <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full border border-violet-500/20"
                    style={{ animation: "ringPulse 3s ease-out 1s infinite" }} />
                  {/* Core circle */}
                  <div className="relative -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-violet-600/30 to-purple-700/30 border border-violet-500/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-mono text-violet-300">&#9729;</div>
                      <div className="text-[10px] text-white/50 mt-0.5 font-medium">{t.centerLabel}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service nodes */}
              {t.services.map((service, i) => (
                <div key={i}
                  className="node-appear absolute bg-white/[0.04] border border-violet-500/15 rounded-lg px-3 py-2 backdrop-blur-sm"
                  style={{
                    left: `${service.x}%`,
                    top: `${service.y}%`,
                    animationDelay: `${0.8 + i * 0.15}s`,
                    minWidth: "90px",
                  }}>
                  <div className="text-xs font-semibold text-white/80">{service.label}</div>
                  <div className="text-[10px] text-violet-400/60 mt-0.5">{service.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="fade-up mt-8 flex items-center justify-center gap-6 flex-wrap" style={{ animationDelay: "1s" }}>
            {t.metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/25">
                <span className="w-1 h-1 rounded-full bg-violet-500/50" />
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
