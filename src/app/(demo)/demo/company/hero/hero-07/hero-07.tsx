"use client";

/**
 * Hexagon Mesh Hero
 * Cybersecurity company aesthetic.
 * Background: #050a08. Accent: green-400 / emerald-300.
 * SVG hexagon grid with pulsing nodes + shield icon center.
 */

import { ArrowRight, Shield } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "CYBERSECURITY FIRST",
    heading: "Defend",
    headingAccent: "Your Digital Assets",
    headingSuffix: "With Confidence",
    sub: "Zero trust architecture, end-to-end encryption, and 24/7 threat monitoring. Enterprise-grade protection that scales with your business.",
    cta1: "Get Protected",
    cta2: "Security Audit",
    badges: ["Zero Trust Architecture", "SOC 2 Type II", "256-bit AES", "24/7 Monitoring"],
  },
  ar: {
    badge: "الأمن السيبراني أولاً",
    heading: "حصّن",
    headingAccent: "أصولك الرقمية",
    headingSuffix: "بثقة تامة",
    sub: "بنية ثقة صفرية، تشفير شامل، ومراقبة تهديدات على مدار الساعة. حماية بمستوى المؤسسات تتوسع مع أعمالك.",
    cta1: "احصل على الحماية",
    cta2: "تدقيق أمني",
    badges: ["بنية ثقة صفرية", "SOC 2 Type II", "تشفير 256-bit", "مراقبة 24/7"],
  },
};

/* Hexagon positions for the mesh (deterministic) */
const hexagons = Array.from({ length: 35 }, (_, i) => {
  const col = i % 7;
  const row = Math.floor(i / 7);
  const offset = row % 2 === 0 ? 0 : 7;
  return {
    cx: 12 + col * 14 + offset,
    cy: 10 + row * 18,
    active: [3, 7, 12, 18, 22, 28, 31].includes(i),
    delay: (i * 0.4) % 4,
  };
});

export function Hero07({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#050a08" }}>
      {/* Hexagon mesh SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {hexagons.map((hex, i) => (
          <g key={i}>
            <polygon
              points={`${hex.cx},${hex.cy - 4} ${hex.cx + 3.5},${hex.cy - 2} ${hex.cx + 3.5},${hex.cy + 2} ${hex.cx},${hex.cy + 4} ${hex.cx - 3.5},${hex.cy + 2} ${hex.cx - 3.5},${hex.cy - 2}`}
              fill={hex.active ? "rgba(74,222,128,0.06)" : "none"}
              stroke={hex.active ? "rgba(74,222,128,0.2)" : "rgba(74,222,128,0.04)"}
              strokeWidth="0.15"
              style={hex.active ? { animation: `hexPulse 3s ease-in-out ${hex.delay}s infinite` } : undefined}
            />
            {hex.active && (
              <circle cx={hex.cx} cy={hex.cy} r="0.5" fill="rgba(74,222,128,0.6)"
                style={{ animation: `hexPulse 3s ease-in-out ${hex.delay}s infinite` }} />
            )}
          </g>
        ))}
        {/* Central shield glow */}
        <circle cx="50" cy="50" r="12" fill="url(#shieldGlow)" style={{ animation: "shieldBreathe 5s ease-in-out infinite" }} />
        <defs>
          <radialGradient id="shieldGlow">
            <stop offset="0%" stopColor="rgba(74,222,128,0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className={`max-w-2xl ${isAr ? "mr-0 ml-auto text-right" : ""}`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-xs font-mono font-bold text-green-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(44px, 8vw, 92px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
            {t.heading}<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #4ade80, #6ee7b7)" }}>{t.headingAccent}</span><br />
            <span className="text-gray-500" style={{ fontSize: "0.6em" }}>{t.headingSuffix}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg"
            style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-10 ${isAr ? "sm:flex-row-reverse" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]">
              {t.cta1}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          {/* Security badges */}
          <div className={`flex flex-wrap gap-2 ${isAr ? "justify-end" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
            {t.badges.map((b, i) => (
              <div key={i} className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-green-500/10 bg-green-500/[0.03] ${isAr ? "flex-row-reverse" : ""}`}>
                <Shield className="w-3 h-3 text-green-500/40" />
                <span className="text-xs font-mono text-green-300/50">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes hexPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes shieldBreathe { 0%,100%{opacity:1;r:12} 50%{opacity:0.5;r:14} }
      `}</style>
    </section>
  );
}
