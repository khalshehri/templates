"use client";

/**
 * Radar Sweep Hero
 * Military/command center radar sweep with concentric rings.
 * Background: dark command (#060808). Accent: amber-green (#84cc16).
 * Signature: rotating radar sweep line + blip dots on detection rings.
 */

import { ArrowRight, Radar } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "THREAT INTELLIGENCE",
    heading: "See Everything.",
    headingAccent: "Miss Nothing.",
    sub: "Our enterprise intelligence platform scans your entire digital landscape 24/7 — detecting threats, uncovering opportunities, and delivering actionable insights before your competitors even notice.",
    cta1: "Activate Scanning",
    cta2: "View Demo",
    detections: [
      { label: "Threats Neutralized", value: "14.2M", period: "This Quarter" },
      { label: "Opportunities Found", value: "2,847", period: "This Month" },
      { label: "Scan Coverage", value: "99.97%", period: "Real-time" },
    ],
  },
  ar: {
    badge: "استخبارات التهديدات",
    heading: "ارصد كل شيء.",
    headingAccent: "لا تفوّت شيئاً.",
    sub: "منصتنا الاستخباراتية تفحص مشهدك الرقمي بالكامل على مدار الساعة — تكشف التهديدات وتكتشف الفرص وتقدم رؤى قابلة للتنفيذ قبل أن يلاحظ منافسوك.",
    cta1: "فعّل المسح",
    cta2: "شاهد العرض",
    detections: [
      { label: "تهديدات محيّدة", value: "14.2M", period: "هذا الربع" },
      { label: "فرص مكتشفة", value: "2,847", period: "هذا الشهر" },
      { label: "تغطية المسح", value: "99.97%", period: "لحظي" },
    ],
  },
};

// Radar blip positions (angle in degrees, distance from center 0-1)
const BLIPS = [
  { angle: 45, dist: 0.3, size: 4 }, { angle: 120, dist: 0.6, size: 3 },
  { angle: 200, dist: 0.45, size: 5 }, { angle: 310, dist: 0.75, size: 3 },
  { angle: 80, dist: 0.55, size: 4 }, { angle: 260, dist: 0.35, size: 3 },
  { angle: 170, dist: 0.8, size: 4 }, { angle: 350, dist: 0.5, size: 3 },
];

export function Hero08({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#060808" }}>
      {/* Lime glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#84cc16", top: "30%", right: "15%" }} />

      {/* Radar display (right side) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Concentric rings */}
          {[30, 55, 80].map((r, i) => (
            <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="#84cc16" strokeWidth="0.5" opacity={0.3 - i * 0.05} />
          ))}
          {/* Cross hairs */}
          <line x1="100" y1="15" x2="100" y2="185" stroke="#84cc16" strokeWidth="0.3" opacity="0.15" />
          <line x1="15" y1="100" x2="185" y2="100" stroke="#84cc16" strokeWidth="0.3" opacity="0.15" />

          {/* Sweep beam */}
          <line x1="100" y1="100" x2="100" y2="20" stroke="#84cc16" strokeWidth="1" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
          </line>
          {/* Sweep fade trail */}
          <path d="M100,100 L100,20 A80,80 0 0,1 156,40 Z" fill="url(#sweepGrad)">
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
          </path>
          <defs>
            <radialGradient id="sweepGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#84cc16" stopOpacity="0" />
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0.15" />
            </radialGradient>
          </defs>

          {/* Blips */}
          {BLIPS.map((b, i) => {
            const rad = (b.angle * Math.PI) / 180;
            const cx = 100 + Math.cos(rad) * b.dist * 80;
            const cy = 100 + Math.sin(rad) * b.dist * 80;
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r={b.size * 0.4} fill="#84cc16" opacity="0.7">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${2 + (i % 3)}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r={b.size * 0.8} fill="none" stroke="#84cc16" strokeWidth="0.3" opacity="0.3">
                  <animate attributeName="r" values={`${b.size * 0.8};${b.size * 1.5};${b.size * 0.8}`} dur={`${2 + (i % 3)}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2 + (i % 3)}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {/* Center dot */}
          <circle cx="100" cy="100" r="2" fill="#84cc16" opacity="0.9" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-lime-500/20 bg-lime-500/10 mb-8">
            <Radar className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-[10px] font-mono font-bold text-lime-300 tracking-[0.2em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6" style={{ fontSize: "clamp(40px, 7vw, 80px)" }}>
            {t.heading}<br />
            <span style={{ color: "#84cc16", textShadow: "0 0 30px rgba(132,204,22,0.2)" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 bg-lime-600 hover:bg-lime-500 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_40px_rgba(132,204,22,0.3)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-7 py-3.5 text-gray-400 hover:text-white font-medium rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-200">{t.cta2}</button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {t.detections.map((d, i) => (
              <div key={i} className="rounded-xl border border-lime-500/10 bg-lime-500/[0.03] backdrop-blur p-4"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <span className="text-xl font-bold text-lime-400 font-mono">{d.value}</span>
                <p className="text-xs font-medium text-white mt-1">{d.label}</p>
                <p className="text-[10px] text-gray-600 font-mono">{d.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
