"use client";

/**
 * Quantum Orbit Hero
 * A central glowing orb surrounded by 3 concentric orbital rings at different
 * angles (like an atom). Each ring has orbiting feature nodes. Energy pulse
 * lines connect the center to nodes. Deep space background with nebula.
 */

import { ArrowRight, Shield, Zap, Globe, BarChart3, Lock, Cpu } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "One Platform,",
    headingHighlight: "Infinite Power",
    subheading:
      "Connect your entire stack. Automate workflows. Ship product faster than ever.",
    ctaPrimary: "Try It Free",
    ctaSecondary: "Book Demo",
    stats: [
      { value: "10M+", label: "API Calls / Day" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "<50ms", label: "Avg Latency" },
    ],
    orbitFeatures: [
      { icon: "shield", label: "Security" },
      { icon: "zap", label: "Speed" },
      { icon: "globe", label: "Global CDN" },
      { icon: "chart", label: "Analytics" },
      { icon: "lock", label: "Auth" },
      { icon: "cpu", label: "Compute" },
    ],
  },
  ar: {
    heading: "منصة واحدة،",
    headingHighlight: "قوة لا محدودة",
    subheading:
      "اربط كل أدواتك. أتمت سير العمل. أطلق منتجك أسرع من أي وقت.",
    ctaPrimary: "جرّب مجاناً",
    ctaSecondary: "احجز عرض",
    stats: [
      { value: "+10M", label: "طلب API / يومياً" },
      { value: "99.99%", label: "ضمان التشغيل" },
      { value: "<50ms", label: "متوسط التأخير" },
    ],
    orbitFeatures: [
      { icon: "shield", label: "الأمان" },
      { icon: "zap", label: "السرعة" },
      { icon: "globe", label: "شبكة عالمية" },
      { icon: "chart", label: "التحليلات" },
      { icon: "lock", label: "المصادقة" },
      { icon: "cpu", label: "الحوسبة" },
    ],
  },
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  shield: Shield,
  zap: Zap,
  globe: Globe,
  chart: BarChart3,
  lock: Lock,
  cpu: Cpu,
};

export function SaasOrbit({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  /* Ring configs: radius, rotation axis tilts, speed, node indices */
  const rings = [
    { r: 170, rx: 65, ry: 15, duration: 18, nodes: [0, 1] },
    { r: 130, rx: 50, ry: -30, duration: 24, nodes: [2, 3] },
    { r: 90,  rx: 75, ry: 45, duration: 14, nodes: [4, 5] },
  ];

  return (
    <>
      <style>{`
        @keyframes orbitRing1 {
          from { transform: rotateX(65deg) rotateY(15deg) rotateZ(0deg); }
          to   { transform: rotateX(65deg) rotateY(15deg) rotateZ(360deg); }
        }
        @keyframes orbitRing2 {
          from { transform: rotateX(50deg) rotateY(-30deg) rotateZ(0deg); }
          to   { transform: rotateX(50deg) rotateY(-30deg) rotateZ(360deg); }
        }
        @keyframes orbitRing3 {
          from { transform: rotateX(75deg) rotateY(45deg) rotateZ(0deg); }
          to   { transform: rotateX(75deg) rotateY(45deg) rotateZ(360deg); }
        }
        @keyframes counterRing1 {
          from { transform: rotateZ(0deg) rotateY(-15deg) rotateX(-65deg); }
          to   { transform: rotateZ(-360deg) rotateY(-15deg) rotateX(-65deg); }
        }
        @keyframes counterRing2 {
          from { transform: rotateZ(0deg) rotateY(30deg) rotateX(-50deg); }
          to   { transform: rotateZ(-360deg) rotateY(30deg) rotateX(-50deg); }
        }
        @keyframes counterRing3 {
          from { transform: rotateZ(0deg) rotateY(-45deg) rotateX(-75deg); }
          to   { transform: rotateZ(-360deg) rotateY(-45deg) rotateX(-75deg); }
        }
        @keyframes orbPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(139,92,246,0.4), 0 0 60px rgba(139,92,246,0.2), 0 0 100px rgba(6,182,212,0.1);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 50px rgba(139,92,246,0.6), 0 0 90px rgba(139,92,246,0.3), 0 0 140px rgba(6,182,212,0.15);
            transform: scale(1.05);
          }
        }
        @keyframes energyPulse {
          0% { stroke-dashoffset: 200; opacity: 0; }
          20% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes nebulaShift {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.25; }
          50% { transform: scale(1.15) rotate(8deg); opacity: 0.35; }
        }
        @keyframes ringGlow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.5; }
        }
        @keyframes dotTravel {
          0% { offset-distance: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .orbit-ring-1 { animation: orbitRing1 18s linear infinite; }
        .orbit-ring-2 { animation: orbitRing2 24s linear infinite; }
        .orbit-ring-3 { animation: orbitRing3 14s linear infinite; }
        .counter-1 { animation: counterRing1 18s linear infinite; }
        .counter-2 { animation: counterRing2 24s linear infinite; }
        .counter-3 { animation: counterRing3 14s linear infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030108]">
        {/* Nebula gradients */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            top: "10%",
            left: "40%",
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, rgba(88,28,135,0.06) 40%, transparent 70%)",
            animation: "nebulaShift 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            bottom: "5%",
            right: "10%",
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, rgba(14,116,144,0.04) 40%, transparent 70%)",
            animation: "nebulaShift 20s ease-in-out 5s infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: "40%",
            left: "-5%",
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 60%)",
            animation: "nebulaShift 30s ease-in-out 10s infinite",
          }}
        />

        {/* Star field - tiny static dots */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" aria-hidden="true">
          {Array.from({ length: 50 }, (_, i) => {
            const seed = i * 137.508;
            return (
              <circle
                key={i}
                cx={`${(seed * 7.3) % 100}%`}
                cy={`${(seed * 3.7) % 100}%`}
                r={i % 4 === 0 ? 1.2 : 0.6}
                fill={i % 5 === 0 ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.3)"}
              />
            );
          })}
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.1s" }}
              >
                {t.heading}
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #8b5cf6, #a78bfa, #06b6d4, #22d3ee)",
                  }}
                >
                  {t.headingHighlight}
                </span>
              </h1>

              <p
                className="fade-up mt-6 text-lg text-white/35 leading-relaxed max-w-md"
                style={{ animationDelay: "0.2s" }}
              >
                {t.subheading}
              </p>

              <div
                className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  }}
                >
                  {t.ctaPrimary}
                  <ArrowRight
                    size={16}
                    className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                  />
                </a>
                <a
                  href="#"
                  className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-xl hover:bg-white/5 transition-all"
                >
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Stats */}
              <div
                className={`fade-up mt-12 flex gap-8 pt-8 border-t border-white/[0.06] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
                {t.stats.map((stat, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/25 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orbit side */}
            <div
              className={`relative flex items-center justify-center h-[500px] ${isAr ? "lg:order-1" : ""}`}
              style={{ perspective: "800px" }}
            >
              {/* Energy pulse lines (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 500"
                aria-hidden="true"
              >
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const endX = 250 + Math.cos(rad) * 180;
                  const endY = 250 + Math.sin(rad) * 180;
                  return (
                    <line
                      key={i}
                      x1="250"
                      y1="250"
                      x2={endX}
                      y2={endY}
                      stroke={i % 2 === 0 ? "rgba(139,92,246,0.2)" : "rgba(6,182,212,0.15)"}
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      style={{
                        animation: `energyPulse ${3 + (i % 3)}s linear ${i * 0.5}s infinite`,
                      }}
                    />
                  );
                })}
                {/* Traveling dots on energy lines */}
                {[0, 120, 240].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const endX = 250 + Math.cos(rad) * 170;
                  const endY = 250 + Math.sin(rad) * 170;
                  return (
                    <circle
                      key={`dot-${i}`}
                      r="2.5"
                      fill={i === 0 ? "#8b5cf6" : i === 1 ? "#06b6d4" : "#a78bfa"}
                      style={{
                        offsetPath: `path("M 250 250 L ${endX} ${endY}")`,
                        animation: `dotTravel ${2 + i * 0.5}s ease-in-out ${i * 1.2}s infinite`,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Orbital ring 1 */}
              <div
                className="absolute orbit-ring-1"
                style={{
                  width: `${rings[0].r * 2}px`,
                  height: `${rings[0].r * 2}px`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid rgba(139,92,246,0.2)",
                    animation: "ringGlow 3s ease-in-out infinite",
                  }}
                />
                {rings[0].nodes.map((nodeIdx, ni) => {
                  const angle = (ni * 180) * (Math.PI / 180);
                  const feat = t.orbitFeatures[nodeIdx];
                  const Icon = iconMap[feat.icon] || Zap;
                  return (
                    <div
                      key={ni}
                      className="absolute counter-1"
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * rings[0].r}px - 20px)`,
                        top: `calc(50% + ${Math.sin(angle) * rings[0].r}px - 20px)`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                        <Icon size={16} className="text-violet-400" />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/30 whitespace-nowrap font-medium">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Orbital ring 2 */}
              <div
                className="absolute orbit-ring-2"
                style={{
                  width: `${rings[1].r * 2}px`,
                  height: `${rings[1].r * 2}px`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid rgba(6,182,212,0.15)",
                    animation: "ringGlow 4s ease-in-out 1s infinite",
                  }}
                />
                {rings[1].nodes.map((nodeIdx, ni) => {
                  const angle = ((ni * 180) + 90) * (Math.PI / 180);
                  const feat = t.orbitFeatures[nodeIdx];
                  const Icon = iconMap[feat.icon] || Zap;
                  return (
                    <div
                      key={ni}
                      className="absolute counter-2"
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * rings[1].r}px - 18px)`,
                        top: `calc(50% + ${Math.sin(angle) * rings[1].r}px - 18px)`,
                      }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                        <Icon size={14} className="text-cyan-400" />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/25 whitespace-nowrap font-medium">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Orbital ring 3 (innermost) */}
              <div
                className="absolute orbit-ring-3"
                style={{
                  width: `${rings[2].r * 2}px`,
                  height: `${rings[2].r * 2}px`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid rgba(167,139,250,0.12)",
                    animation: "ringGlow 5s ease-in-out 2s infinite",
                  }}
                />
                {rings[2].nodes.map((nodeIdx, ni) => {
                  const angle = ((ni * 180) + 45) * (Math.PI / 180);
                  const feat = t.orbitFeatures[nodeIdx];
                  const Icon = iconMap[feat.icon] || Zap;
                  return (
                    <div
                      key={ni}
                      className="absolute counter-3"
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * rings[2].r}px - 16px)`,
                        top: `calc(50% + ${Math.sin(angle) * rings[2].r}px - 16px)`,
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                        <Icon size={12} className="text-purple-400" />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-white/20 whitespace-nowrap font-medium">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Central orb */}
              <div
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, #a78bfa, #7c3aed 50%, #4c1d95 100%)",
                  animation: "orbPulse 4s ease-in-out infinite",
                }}
              >
                <Cpu size={28} className="text-white drop-shadow-lg" />
                {/* Inner glow ring */}
                <div
                  className="absolute inset-[-4px] rounded-full border border-violet-400/30"
                  style={{ animation: "ringGlow 3s ease-in-out infinite" }}
                />
                <div
                  className="absolute inset-[-10px] rounded-full border border-violet-400/10"
                  style={{ animation: "ringGlow 3s ease-in-out 1.5s infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
