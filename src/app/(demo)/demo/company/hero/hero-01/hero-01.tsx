"use client";

/**
 * Nebula Hero
 * Deep space nebula with animated cosmic dust particles and star field.
 * Background: void black (#030308). Accent: indigo-violet (#6366f1).
 * Signature: layered radial nebula clouds + twinkling star dots.
 */

import { ArrowRight, Rocket } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "Infinite Possibilities",
    heading: "Explore",
    headingAccent: "New Frontiers",
    sub: "We propel enterprises beyond conventional limits into uncharted digital territories where innovation knows no boundaries.",
    cta1: "Launch Your Vision",
    cta2: "Discover More",
    stats: [
      { value: "∞", label: "Scalability" },
      { value: "24/7", label: "Global Operations" },
      { value: "100+", label: "Enterprise Partners" },
    ],
  },
  ar: {
    badge: "إمكانيات لا حدود لها",
    heading: "استكشف",
    headingAccent: "آفاقاً جديدة",
    sub: "ندفع المؤسسات إلى ما وراء الحدود التقليدية نحو مناطق رقمية غير مستكشفة حيث لا حدود للابتكار.",
    cta1: "أطلق رؤيتك",
    cta2: "اكتشف المزيد",
    stats: [
      { value: "∞", label: "قابلية التوسع" },
      { value: "24/7", label: "عمليات عالمية" },
      { value: "+100", label: "شريك مؤسسي" },
    ],
  },
};

// Deterministic stars
const STARS = Array.from({ length: 60 }, (_, i) => ({
  x: ((i * 1733 + 311) % 100), y: ((i * 2741 + 571) % 100),
  size: 1 + ((i * 541) % 2), delay: ((i * 757) % 50) / 10, dur: 2 + ((i * 331) % 4),
}));

export function Hero01({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#030308" }}>
      {/* Nebula clouds */}
      <div className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1 0%, #4f46e5 30%, transparent 70%)", top: "-15%", right: "-10%", animation: "nebulaFloat 15s ease-in-out infinite" }} />
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, #7c3aed 40%, transparent 70%)", bottom: "-5%", left: "-5%", animation: "nebulaFloat 20s ease-in-out infinite reverse" }} />
      <div className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #c084fc 0%, transparent 70%)", top: "40%", left: "40%", animation: "nebulaFloat 12s ease-in-out 3s infinite" }} />

      {/* Star field */}
      {STARS.map((s, i) => (
        <div key={i} className="absolute rounded-full bg-white pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.size}px`, height: `${s.size}px`, opacity: 0.3, animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite` }} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Rocket className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium text-indigo-300">{t.badge}</span>
        </div>

        <h1 className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 112px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc, #f0abfc)", backgroundSize: "200% 200%", animation: "gradShift 5s ease-in-out infinite" }}>
            {t.headingAccent}
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_50px_rgba(99,102,241,0.4)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-200">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-3xl font-bold text-white">{s.value}</span>
              <span className="block text-xs text-gray-500 mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nebulaFloat { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-20px) scale(1.05)} }
        @keyframes twinkle { 0%,100%{opacity:0.2} 50%{opacity:0.8} }
        @keyframes gradShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
