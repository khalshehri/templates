"use client";

import { ArrowRight, Cpu, Shield, Zap, Globe, BarChart3, Lock } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "One Platform,",
    headingHighlight: "Infinite Power",
    subheading: "Connect your entire stack. Automate workflows. Ship product faster than ever.",
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
    subheading: "اربط كل أدواتك. أتمت سير العمل. أطلق منتجك أسرع من أي وقت.",
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
  shield: Shield, zap: Zap, globe: Globe, chart: BarChart3, lock: Lock, cpu: Cpu,
};

export function SaasOrbit({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes corePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.3); }
          50% { box-shadow: 0 0 0 20px rgba(139,92,246,0); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .orbit-spin { animation: orbitSpin 20s linear infinite; }
        .orbit-spin-reverse { animation: orbitSpinReverse 30s linear infinite; }
        .counter-rotate { animation: orbitSpinReverse 20s linear infinite; }
        .counter-rotate-reverse { animation: orbitSpin 30s linear infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08081a]">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/5 rounded-full blur-[150px]" />

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
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p
                className="fade-up mt-6 text-lg text-white/40 leading-relaxed max-w-md"
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
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-violet-600 rounded-xl hover:bg-violet-500 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/50 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
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
                    <div className="text-xs text-white/30 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orbit side */}
            <div className={`relative flex items-center justify-center h-[450px] ${isAr ? "lg:order-1" : ""}`}>
              {/* Outer orbit ring */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-white/[0.04]">
                <div className="orbit-spin-reverse w-full h-full relative">
                  {t.orbitFeatures.slice(0, 3).map((feat, i) => {
                    const angle = (i * 120) * (Math.PI / 180);
                    const x = Math.cos(angle) * 190;
                    const y = Math.sin(angle) * 190;
                    const Icon = iconMap[feat.icon] || Zap;
                    return (
                      <div
                        key={i}
                        className="absolute counter-rotate-reverse"
                        style={{
                          left: `calc(50% + ${x}px - 22px)`,
                          top: `calc(50% + ${y}px - 22px)`,
                        }}
                      >
                        <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center backdrop-blur">
                          <Icon size={16} className="text-violet-400" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inner orbit ring */}
              <div className="absolute w-[240px] h-[240px] rounded-full border border-white/[0.06]">
                <div className="orbit-spin w-full h-full relative">
                  {t.orbitFeatures.slice(3, 6).map((feat, i) => {
                    const angle = (i * 120 + 60) * (Math.PI / 180);
                    const x = Math.cos(angle) * 120;
                    const y = Math.sin(angle) * 120;
                    const Icon = iconMap[feat.icon] || Zap;
                    return (
                      <div
                        key={i}
                        className="absolute counter-rotate"
                        style={{
                          left: `calc(50% + ${x}px - 18px)`,
                          top: `calc(50% + ${y}px - 18px)`,
                        }}
                      >
                        <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                          <Icon size={14} className="text-purple-400" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Center core */}
              <div
                className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-xl shadow-violet-600/30"
                style={{ animation: "corePulse 3s ease-in-out infinite" }}
              >
                <Cpu size={28} className="text-white" />
              </div>

              {/* Feature labels floating */}
              {t.orbitFeatures.map((feat, i) => {
                const positions = [
                  "top-2 right-2", "bottom-4 right-8", "top-1/4 left-0",
                  "bottom-2 left-4", "top-8 left-12", "bottom-1/4 right-0",
                ];
                return (
                  <div
                    key={i}
                    className={`absolute ${positions[i]} fade-up`}
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  >
                    <span className="text-[10px] text-white/20 font-medium">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
