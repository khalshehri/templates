"use client";

import { ArrowRight, Zap, Globe, Shield, TrendingUp } from "lucide-react";

const content = {
  en: {
    heading: "Enterprise Infrastructure for the Modern Era",
    cells: [
      { type: "stat", value: "99.99%", label: "Guaranteed Uptime" },
      { type: "icon", icon: "shield", label: "Zero-Trust Security", desc: "End-to-end encryption with military-grade protocols" },
      { type: "quote", text: "Transformed our entire digital operation in 90 days.", author: "Sarah Chen, CTO" },
      { type: "stat", value: "850+", label: "Enterprise Clients" },
      { type: "icon", icon: "globe", label: "Global Scale", desc: "12 data centers across 6 continents" },
      { type: "cta", label: "Start Building", sublabel: "Free trial, no credit card" },
    ],
  },
  ar: {
    heading: "بنية تحتية مؤسسية للعصر الحديث",
    cells: [
      { type: "stat", value: "99.99%", label: "وقت تشغيل مضمون" },
      { type: "icon", icon: "shield", label: "أمان صفري الثقة", desc: "تشفير شامل بمعايير عسكرية" },
      { type: "quote", text: "حوّلت عملياتنا الرقمية بالكامل في 90 يوماً.", author: "سارة تشن، مدير تقني" },
      { type: "stat", value: "+850", label: "عميل مؤسسي" },
      { type: "icon", icon: "globe", label: "نطاق عالمي", desc: "12 مركز بيانات في 6 قارات" },
      { type: "cta", label: "ابدأ البناء", sublabel: "تجربة مجانية بدون بطاقة" },
    ],
  },
};

const iconMap: Record<string, React.FC<{ size: number; className?: string }>> = {
  shield: Shield,
  globe: Globe,
  zap: Zap,
  trend: TrendingUp,
};

export function CorporateGrid({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes gridFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes headingSlide {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes counterPulse {
          0%, 100% { text-shadow: 0 0 20px rgba(34,211,238,0.2); }
          50% { text-shadow: 0 0 40px rgba(34,211,238,0.4); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(34,211,238,0.08); }
          50% { border-color: rgba(34,211,238,0.2); }
        }
        @keyframes quoteFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .grid-cell { animation: gridFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .heading-slide { animation: headingSlide 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "#050a14" }}>
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        {/* Full-width heading spanning top */}
        <div className={`relative z-10 px-6 sm:px-10 lg:px-16 pt-24 pb-10 ${isAr ? "text-right" : ""}`}>
          <h1 className="heading-slide text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] max-w-5xl" style={{ animationDelay: "0.2s" }}>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">{t.heading}</span>
          </h1>
          <div className="mt-4 h-[2px] w-20" style={{ background: "linear-gradient(90deg, #22d3ee, transparent)", animationDelay: "0.4s" }} />
        </div>

        {/* Bento grid - 2x3 layout */}
        <div className="relative z-10 flex-1 px-6 sm:px-10 lg:px-16 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
            {t.cells.map((cell, i) => {
              const delay = `${0.4 + i * 0.12}s`;

              if (cell.type === "stat") {
                return (
                  <div key={i} className={`grid-cell relative p-8 rounded-2xl border border-cyan-400/10 ${isAr ? "text-right" : ""}`}
                    style={{ animationDelay: delay, background: "linear-gradient(135deg, rgba(8,20,40,0.9), rgba(5,12,28,0.95))" }}>
                    <div className="text-5xl sm:text-6xl font-black text-cyan-200/90 mb-3" style={{ animation: "counterPulse 4s ease-in-out infinite" }}>
                      {cell.value}
                    </div>
                    <div className="text-sm text-cyan-300/30 uppercase tracking-wider font-medium">{cell.label}</div>
                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 w-8 h-8">
                      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-cyan-400/20 to-transparent" />
                      <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-cyan-400/20 to-transparent" />
                    </div>
                  </div>
                );
              }

              if (cell.type === "icon") {
                const Icon = iconMap[cell.icon || "zap"] || Zap;
                return (
                  <div key={i} className={`grid-cell relative p-8 rounded-2xl border border-cyan-400/8 ${isAr ? "text-right" : ""}`}
                    style={{ animationDelay: delay, background: "linear-gradient(145deg, rgba(10,25,50,0.8), rgba(5,12,28,0.9))" }}>
                    <div className="w-12 h-12 rounded-xl border border-cyan-400/15 bg-cyan-400/5 flex items-center justify-center mb-5"
                      style={{ animation: "borderGlow 3s ease-in-out infinite" }}>
                      <Icon size={22} className="text-cyan-300/60" />
                    </div>
                    <div className="text-lg font-bold text-white/80 mb-2">{cell.label}</div>
                    <div className="text-sm text-cyan-100/20 leading-relaxed">{cell.desc}</div>
                  </div>
                );
              }

              if (cell.type === "quote") {
                return (
                  <div key={i} className={`grid-cell relative p-8 rounded-2xl border border-cyan-400/8 flex flex-col justify-between ${isAr ? "text-right" : ""}`}
                    style={{ animationDelay: delay, background: "linear-gradient(160deg, rgba(12,30,55,0.7), rgba(5,12,28,0.9))", animation: `gridFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay} both, quoteFloat 6s ease-in-out infinite` }}>
                    <div>
                      <div className="text-3xl text-cyan-400/20 mb-3 font-serif">&ldquo;</div>
                      <p className="text-base text-white/50 italic leading-relaxed">{cell.text}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/10" />
                      <span className="text-xs text-cyan-300/30 font-medium">{cell.author}</span>
                    </div>
                  </div>
                );
              }

              if (cell.type === "cta") {
                return (
                  <div key={i} className="grid-cell relative p-8 rounded-2xl border border-cyan-400/15 flex flex-col items-center justify-center text-center"
                    style={{ animationDelay: delay, background: "linear-gradient(135deg, rgba(6,95,120,0.2), rgba(5,12,28,0.9))" }}>
                    <a href="#" className={`group inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] ${isAr ? "flex-row-reverse" : ""}`}
                      style={{ background: "linear-gradient(135deg, #0e7490, #06b6d4, #22d3ee)" }}>
                      {cell.label}
                      <ArrowRight size={18} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                    </a>
                    <span className="mt-3 text-xs text-cyan-300/25">{cell.sublabel}</span>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
