"use client";

/**
 * Office Network Hero
 * Connected node graph representing offices/partners with pulse animations.
 * Nodes connected by animated lines showing data flow.
 */

import { ArrowRight, Network } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "INTERCONNECTED",
    heading: ["One Network,", "Infinite", "Possibilities"],
    sub: "Our offices work as one seamless operation, connected by technology and shared purpose.",
    cta: "Explore Network",
    cta2: "Partner With Us",
    nodes: [
      { label: "HQ", sub: "Riyadh" },
      { label: "EMEA", sub: "London" },
      { label: "APAC", sub: "Singapore" },
      { label: "Americas", sub: "New York" },
      { label: "R&D", sub: "Berlin" },
      { label: "Innovation", sub: "Tokyo" },
    ],
  },
  ar: {
    badge: "مترابطون",
    heading: ["شبكة واحدة،", "إمكانيات", "لا حدود لها"],
    sub: "مكاتبنا تعمل كعملية واحدة متكاملة، مترابطة بالتكنولوجيا والهدف المشترك.",
    cta: "استكشف الشبكة",
    cta2: "كن شريكنا",
    nodes: [
      { label: "المقر الرئيسي", sub: "الرياض" },
      { label: "أوروبا والشرق الأوسط", sub: "لندن" },
      { label: "آسيا والمحيط الهادئ", sub: "سنغافورة" },
      { label: "الأمريكتين", sub: "نيويورك" },
      { label: "البحث والتطوير", sub: "برلين" },
      { label: "الابتكار", sub: "طوكيو" },
    ],
  },
};

// Node positions (percentage based)
const NODE_POSITIONS = [
  { x: 50, y: 35 },  // HQ center
  { x: 22, y: 25 },  // EMEA
  { x: 78, y: 25 },  // APAC
  { x: 18, y: 60 },  // Americas
  { x: 50, y: 70 },  // R&D
  { x: 82, y: 60 },  // Innovation
];

// Connection pairs
const CONNECTIONS = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 3], [2, 5], [3, 4], [4, 5], [1, 2],
];

export function CompanyNetwork({ language }: Props) {
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
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes nodePulse {
          0%, 100% { box-shadow: 0 0 15px rgba(99,102,241,0.3); }
          50% { box-shadow: 0 0 30px rgba(99,102,241,0.6), 0 0 60px rgba(99,102,241,0.2); }
        }
        @keyframes nodeRing {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes lineDrawFwd {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes dataPulse {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes hqGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#06091a" }}>
        {/* Background gradient */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }} />

        {/* Network visualization */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Connection lines */}
            {CONNECTIONS.map(([a, b], i) => {
              const nA = NODE_POSITIONS[a];
              const nB = NODE_POSITIONS[b];
              return (
                <line key={i}
                  x1={nA.x} y1={nA.y} x2={nB.x} y2={nB.y}
                  stroke="rgba(99,102,241,0.12)" strokeWidth="0.15"
                  strokeDasharray="200" strokeDashoffset="200"
                  style={{ animation: `lineDrawFwd 1.5s ease ${0.8 + i * 0.1}s both` }} />
              );
            })}
          </svg>

          {/* Nodes */}
          {NODE_POSITIONS.map((pos, i) => {
            const isHQ = i === 0;
            const size = isHQ ? 80 : 56;
            return (
              <div key={i} className="absolute" style={{
                left: `${pos.x}%`, top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
                animation: `nodeAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1) both ${0.6 + i * 0.12}s`,
              }}>
                {/* Pulse ring */}
                <div className="absolute rounded-full border border-indigo-400/20"
                  style={{
                    width: size + 20, height: size + 20,
                    top: -10, left: -10,
                    animation: `nodeRing 4s ease-out ${i * 0.6}s infinite`,
                  }} />

                {/* Node circle */}
                <div className="rounded-full border border-indigo-400/20 backdrop-blur-xl flex flex-col items-center justify-center"
                  style={{
                    width: size, height: size,
                    background: isHQ
                      ? "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(59,130,246,0.15))"
                      : "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(30,40,80,0.3))",
                    animation: `nodePulse ${isHQ ? 3 : 5}s ease-in-out ${i * 0.3}s infinite`,
                  }}>
                  <span className={`font-bold text-indigo-200/80 ${isHQ ? "text-xs" : "text-[9px]"}`}>
                    {t.nodes[i].label}
                  </span>
                  <span className={`text-indigo-300/40 ${isHQ ? "text-[10px]" : "text-[8px]"}`}>
                    {t.nodes[i].sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`max-w-xl ${isAr ? "mr-auto text-right" : ""}`}>
            <div className="p-8 rounded-2xl backdrop-blur-xl border border-indigo-400/[0.06]"
              style={{ background: "rgba(6,9,26,0.8)" }}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/10 bg-indigo-400/[0.03] mb-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}>
                <Network size={14} className="text-indigo-400/70" />
                <span className="text-sm font-medium text-indigo-300/60 tracking-widest">{t.badge}</span>
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]"
                style={{ animationDelay: "0.45s" }}>
                <span className="block text-white/90">{t.heading[0]}</span>
                <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                  {t.heading[1]}
                </span>
                <span className="block text-white/80">{t.heading[2]}</span>
              </h1>

              <p className="fade-up mt-5 text-base text-indigo-100/25 leading-relaxed"
                style={{ animationDelay: "0.6s" }}>{t.sub}</p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.75s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #312e81, #6366f1, #818cf8)" }}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-indigo-200/30 border border-indigo-300/10 rounded-lg hover:bg-indigo-300/[0.04] transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
