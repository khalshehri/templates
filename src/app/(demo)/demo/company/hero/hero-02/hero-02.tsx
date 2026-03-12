"use client";

/**
 * Circuit Board Hero
 * Tech PCB circuit trace patterns with electric green pathways.
 * Background: dark PCB green-black (#050a05). Accent: electric green (#22c55e).
 * Signature: animated SVG circuit traces with pulsing data nodes.
 */

import { ArrowRight, Cpu } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "Engineered to Perfection",
    heading: "Hardwired",
    headingAccent: "for Growth",
    sub: "Our solutions are deeply integrated into your business DNA — engineered with precision, built for performance, optimized for scale.",
    cta1: "Connect Systems",
    cta2: "Technical Specs",
    metrics: [
      { value: "0.3ms", label: "Response Time" },
      { value: "10M+", label: "Requests/sec" },
      { value: "Zero", label: "Single Points of Failure" },
    ],
  },
  ar: {
    badge: "هندسة متقنة",
    heading: "مبرمجون",
    headingAccent: "للنمو",
    sub: "حلولنا متجذرة في الحمض النووي لأعمالك — مهندسة بدقة، مبنية للأداء، ومحسّنة للتوسع.",
    cta1: "اربط الأنظمة",
    cta2: "المواصفات التقنية",
    metrics: [
      { value: "0.3ms", label: "زمن الاستجابة" },
      { value: "+10M", label: "طلب/ثانية" },
      { value: "صفر", label: "نقاط فشل وحيدة" },
    ],
  },
};

// Circuit trace paths (SVG)
const TRACES = [
  "M0,30 H25 V50 H45 V30 H65 V60 H85 V30 H100",
  "M0,50 H15 V70 H35 V50 H55 V80 H75 V50 H100",
  "M0,70 H20 V40 H40 V70 H60 V40 H80 V70 H100",
  "M0,20 H30 V35 H50 V15 H70 V35 H100",
  "M0,85 H10 V65 H30 V85 H50 V65 H70 V85 H90 V65 H100",
];

// Circuit nodes (junction points)
const NODES = [
  { x: 25, y: 30 }, { x: 45, y: 50 }, { x: 65, y: 30 }, { x: 85, y: 60 },
  { x: 15, y: 70 }, { x: 55, y: 80 }, { x: 35, y: 50 }, { x: 75, y: 50 },
  { x: 30, y: 35 }, { x: 70, y: 35 }, { x: 50, y: 15 }, { x: 20, y: 40 },
];

export function Hero02({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#050a05" }}>
      {/* Green ambient */}
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#22c55e", top: "10%", right: "-5%" }} />

      {/* Circuit board traces */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {TRACES.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#22c55e" strokeWidth="0.3">
            <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur={`${3 + i}s`} repeatCount="indefinite" />
          </path>
        ))}
        {NODES.map((n, i) => (
          <g key={`n${i}`}>
            <circle cx={n.x} cy={n.y} r="0.8" fill="#22c55e" opacity="0.6">
              <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 3)}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={n.x} cy={n.y} r="1.5" fill="none" stroke="#22c55e" strokeWidth="0.15" opacity="0.3">
              <animate attributeName="r" values="1.5;2.5;1.5" dur={`${2 + (i % 3)}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2 + (i % 3)}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-green-500/20 bg-green-500/10 mb-8">
              <Cpu className="w-3.5 h-3.5 text-green-400" />
              <span className="text-xs font-mono font-medium text-green-300 tracking-wider uppercase">{t.badge}</span>
            </div>

            <h1 className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6" style={{ fontSize: "clamp(44px, 8vw, 88px)" }}>
              {t.heading}<br />
              <span className="text-green-400" style={{ textShadow: "0 0 40px rgba(34,197,94,0.3)" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group inline-flex items-center gap-2 px-7 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-7 py-3.5 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-200">{t.cta2}</button>
            </div>

            <div className="flex flex-wrap gap-8">
              {t.metrics.map((m, i) => (
                <div key={i} style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                  <span className="text-2xl font-bold text-white font-mono">{m.value}</span>
                  <span className="block text-xs text-gray-500 mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PCB visual card */}
          <div className="relative hidden lg:block" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
            <div className="rounded-2xl border border-green-500/15 bg-green-500/[0.03] backdrop-blur p-8">
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-green-400"><span className="text-gray-600">01</span> system.init()</div>
                <div className="flex items-center gap-2 text-green-300"><span className="text-gray-600">02</span> modules.load([&quot;core&quot;, &quot;ai&quot;, &quot;scale&quot;])</div>
                <div className="flex items-center gap-2 text-green-200"><span className="text-gray-600">03</span> network.connect(regions: 28)</div>
                <div className="flex items-center gap-2 text-white"><span className="text-gray-600">04</span> status: <span className="text-green-400">● ALL SYSTEMS OPERATIONAL</span></div>
                <div className="flex items-center gap-2 text-gray-500"><span className="text-gray-600">05</span> latency: 0.3ms | uptime: 99.999%</div>
                <div className="flex gap-2 mt-4"><span className="text-green-400">$</span><span className="w-2 h-5 bg-green-400" style={{ animation: "blink 1s step-end infinite" }} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
