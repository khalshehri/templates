"use client";

/**
 * Particle Constellation Hero
 * Venture Capital / investment firm aesthetic.
 * Background: #0a0810. Accent: amber-300 / orange-200.
 * Scattered particles connected by thin lines + orbiting spotlight.
 */

import { ArrowRight, Gem } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "STRATEGIC INVESTMENTS",
    heading: "Fueling",
    headingAccent: "The Next Wave",
    headingSuffix: "Of Innovation",
    sub: "We back founders building the future. From seed to scale, our portfolio spans AI, fintech, climate, and deep tech across 15 countries.",
    cta1: "Submit a Pitch",
    cta2: "Our Portfolio",
    strip: "250+ Portfolio Companies  ·  $8B+ Assets  ·  15 Countries  ·  Since 2012",
  },
  ar: {
    badge: "استثمارات استراتيجية",
    heading: "نغذّي",
    headingAccent: "الموجة القادمة",
    headingSuffix: "من الابتكار",
    sub: "ندعم المؤسسين الذين يبنون المستقبل. من البذرة إلى النمو، محفظتنا تمتد عبر الذكاء الاصطناعي والتقنية المالية والمناخ والتقنية العميقة في 15 دولة.",
    cta1: "قدّم عرضك",
    cta2: "محفظتنا",
    strip: "250+ شركة  ·  $8B+ أصول  ·  15 دولة  ·  منذ 2012",
  },
};

/* Deterministic particle positions */
const particles = Array.from({ length: 40 }, (_, i) => ({
  x: ((i * 73 + 11) % 90) + 5,
  y: ((i * 47 + 23) % 85) + 7,
  size: 1 + (i % 3),
  driftX: ((i * 13) % 20) - 10,
  driftY: ((i * 17) % 16) - 8,
  duration: 20 + (i * 3) % 20,
}));

/* Connections between nearby particles (pre-computed) */
const connections: [number, number][] = [];
for (let i = 0; i < particles.length; i++) {
  for (let j = i + 1; j < particles.length; j++) {
    const dx = particles[i].x - particles[j].x;
    const dy = particles[i].y - particles[j].y;
    if (Math.sqrt(dx * dx + dy * dy) < 18) {
      connections.push([i, j]);
    }
  }
}

export function Hero09({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0a0810" }}>
      {/* Particle constellation SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <line key={`l${i}`}
            x1={particles[a].x} y1={particles[a].y}
            x2={particles[b].x} y2={particles[b].y}
            stroke="rgba(252,211,77,0.06)"
            strokeWidth="0.08"
            style={{ animation: `connectionFade 6s ease-in-out ${(i * 0.5) % 4}s infinite` }}
          />
        ))}
        {/* Particles */}
        {particles.map((p, i) => (
          <circle key={`p${i}`}
            cx={p.x} cy={p.y} r={p.size * 0.15}
            fill={i % 5 === 0 ? "rgba(252,211,77,0.5)" : "rgba(252,211,77,0.15)"}
            style={{ animation: `particleDrift${i % 4} ${p.duration}s ease-in-out infinite` }}
          />
        ))}
      </svg>

      {/* Orbiting spotlight */}
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(252,211,77,0.04) 0%, transparent 60%)",
          animation: "spotlightOrbit 60s linear infinite",
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 mb-10"
          style={{ animation: "fadeUp 0.6s ease-out both" }}>
          <Gem className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold text-amber-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 110px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #fcd34d, #fed7aa)" }}>{t.headingAccent}</span><br />
          <span className="text-gray-500" style={{ fontSize: "0.55em" }}>{t.headingSuffix}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 ${isAr ? "sm:flex-row-reverse" : ""}`}
          style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-400 hover:to-orange-300 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(252,211,77,0.2)]">
            {t.cta1}
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        {/* Portfolio strip */}
        <p className="text-xs text-amber-400/30 font-mono tracking-wide"
          style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>{t.strip}</p>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes connectionFade { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes spotlightOrbit { from{transform:translate(-50%,-50%) rotate(0deg) translateX(200px)} to{transform:translate(-50%,-50%) rotate(360deg) translateX(200px)} }
        @keyframes particleDrift0 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(2px,-3px)} }
        @keyframes particleDrift1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-3px,2px)} }
        @keyframes particleDrift2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(1px,3px)} }
        @keyframes particleDrift3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-2px,-2px)} }
      `}</style>
    </section>
  );
}
