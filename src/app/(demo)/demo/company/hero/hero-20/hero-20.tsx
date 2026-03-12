"use client";

/**
 * Neon City Hero
 * Cyberpunk / futuristic company aesthetic.
 * Neon-lit cityscape silhouette background with rain effect.
 * Background: #0a0614. Accent: multi-neon (pink, blue, purple).
 */

import { ArrowRight, Cpu } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "NEXT-GEN DIGITAL",
    heading: "Welcome to",
    headingAccent: "Tomorrow",
    sub: "We live at the intersection of technology and imagination. Augmented reality, spatial computing, and AI-native experiences — we're building what others haven't dreamed yet.",
    cta1: "Enter the Future",
    cta2: "Explore Tech",
    tags: ["AR / VR", "Spatial Computing", "Generative AI", "Edge Computing", "Web3"],
  },
  ar: {
    badge: "رقمي من الجيل القادم",
    heading: "مرحباً في",
    headingAccent: "الغد",
    sub: "نعيش عند تقاطع التقنية والخيال. الواقع المعزز، الحوسبة المكانية، وتجارب الذكاء الاصطناعي — نبني ما لم يحلم به الآخرون بعد.",
    cta1: "ادخل المستقبل",
    cta2: "استكشف التقنية",
    tags: ["AR / VR", "حوسبة مكانية", "AI توليدي", "حوسبة حافة", "Web3"],
  },
};

/* Rain drops */
const raindrops = Array.from({ length: 50 }, (_, i) => ({
  left: ((i * 47 + 13) % 100),
  delay: (i * 0.3) % 4,
  duration: 0.6 + (i * 0.17) % 0.8,
  height: 15 + (i * 7) % 25,
}));

export function Hero20({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0614" }}>
      {/* Rain effect */}
      {raindrops.map((r, i) => (
        <div key={i} className="absolute w-[1px] pointer-events-none opacity-20"
          style={{
            left: `${r.left}%`,
            top: "-5%",
            height: r.height,
            background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.4))",
            animation: `rain ${r.duration}s linear ${r.delay}s infinite`,
          }} />
      ))}

      {/* Neon city skyline */}
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1400 350" preserveAspectRatio="xMidYMax slice" style={{ height: "40%" }}>
        {/* Ground reflection */}
        <rect x="0" y="320" width="1400" height="30" fill="rgba(168,85,247,0.03)" />

        {/* Buildings */}
        <rect x="30" y="120" width="50" height="230" fill="#0f0a1a" stroke="rgba(168,85,247,0.12)" strokeWidth="0.5" />
        <rect x="100" y="60" width="80" height="290" fill="#0d0818" stroke="rgba(236,72,153,0.1)" strokeWidth="0.5" />
        <rect x="200" y="140" width="40" height="210" fill="#0f0a1a" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" />
        <rect x="260" y="40" width="90" height="310" fill="#0d0818" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
        {/* Neon sign on building */}
        <rect x="280" y="80" width="50" height="3" fill="rgba(236,72,153,0.6)" style={{ animation: "neonFlicker 3s ease-in-out infinite" }} />

        <rect x="380" y="100" width="60" height="250" fill="#0f0a1a" stroke="rgba(59,130,246,0.12)" strokeWidth="0.5" />
        <rect x="460" y="30" width="100" height="320" fill="#0b0616" stroke="rgba(168,85,247,0.1)" strokeWidth="0.5" />
        {/* Windows glow */}
        <rect x="480" y="50" width="8" height="5" fill="rgba(236,72,153,0.25)" />
        <rect x="510" y="70" width="8" height="5" fill="rgba(59,130,246,0.3)" />
        <rect x="495" y="100" width="8" height="5" fill="rgba(168,85,247,0.2)" />
        <rect x="530" y="55" width="8" height="5" fill="rgba(236,72,153,0.15)" />

        <rect x="580" y="80" width="70" height="270" fill="#0d0818" stroke="rgba(236,72,153,0.08)" strokeWidth="0.5" />
        <rect x="670" y="50" width="85" height="300" fill="#0f0a1a" stroke="rgba(59,130,246,0.12)" strokeWidth="0.5" />
        <rect x="690" y="70" width="6" height="4" fill="rgba(168,85,247,0.3)" />
        <rect x="720" y="85" width="6" height="4" fill="rgba(236,72,153,0.2)" />

        <rect x="780" y="110" width="55" height="240" fill="#0d0818" stroke="rgba(168,85,247,0.1)" strokeWidth="0.5" />
        <rect x="860" y="20" width="95" height="330" fill="#0b0616" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5" />
        {/* Neon sign */}
        <rect x="880" y="55" width="55" height="3" fill="rgba(59,130,246,0.6)" style={{ animation: "neonFlicker 4s ease-in-out 1s infinite" }} />

        <rect x="980" y="90" width="60" height="260" fill="#0f0a1a" stroke="rgba(236,72,153,0.1)" strokeWidth="0.5" />
        <rect x="1060" y="60" width="80" height="290" fill="#0d0818" stroke="rgba(168,85,247,0.12)" strokeWidth="0.5" />
        <rect x="1160" y="130" width="50" height="220" fill="#0f0a1a" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5" />
        <rect x="1230" y="50" width="90" height="300" fill="#0b0616" stroke="rgba(236,72,153,0.12)" strokeWidth="0.5" />
        <rect x="1250" y="75" width="8" height="5" fill="rgba(168,85,247,0.25)" />
        <rect x="1280" y="90" width="8" height="5" fill="rgba(59,130,246,0.2)" />
        <rect x="1340" y="100" width="60" height="250" fill="#0f0a1a" stroke="rgba(168,85,247,0.1)" strokeWidth="0.5" />
      </svg>

      {/* Neon glow overlays */}
      <div className="absolute bottom-[15%] left-[20%] w-[200px] h-[100px] rounded-full opacity-[0.06] blur-[60px] pointer-events-none" style={{ background: "#ec4899" }} />
      <div className="absolute bottom-[20%] right-[25%] w-[250px] h-[100px] rounded-full opacity-[0.05] blur-[60px] pointer-events-none" style={{ background: "#3b82f6" }} />
      <div className="absolute bottom-[10%] left-[50%] w-[300px] h-[80px] rounded-full opacity-[0.04] blur-[80px] pointer-events-none" style={{ background: "#a855f7" }} />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(10,6,20,0.9) 0%, rgba(10,6,20,0.5) 60%, rgba(10,6,20,0.7) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8"
          style={{ animation: "fadeUp 0.6s ease-out both" }}>
          <Cpu className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono font-bold text-purple-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 110px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)",
              textShadow: "none",
              filter: "drop-shadow(0 0 30px rgba(168,85,247,0.3))",
            }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 ${isAr ? "sm:flex-row-reverse" : ""}`}
          style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>
            {t.cta1}
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-700 hover:border-gray-500 transition-all">{t.cta2}</button>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap items-center justify-center gap-2"
          style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
          {t.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1.5 text-xs font-mono rounded-full border"
              style={{
                color: ["#ec4899", "#a855f7", "#3b82f6", "#ec4899", "#a855f7"][i],
                borderColor: ["rgba(236,72,153,0.2)", "rgba(168,85,247,0.2)", "rgba(59,130,246,0.2)", "rgba(236,72,153,0.2)", "rgba(168,85,247,0.2)"][i],
                background: ["rgba(236,72,153,0.05)", "rgba(168,85,247,0.05)", "rgba(59,130,246,0.05)", "rgba(236,72,153,0.05)", "rgba(168,85,247,0.05)"][i],
              }}>{tag}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes rain { from{transform:translateY(-100vh)} to{transform:translateY(100vh)} }
        @keyframes neonFlicker { 0%,100%{opacity:0.6} 10%{opacity:0.3} 20%{opacity:0.7} 50%{opacity:0.5} 80%{opacity:0.8} }
      `}</style>
    </section>
  );
}
