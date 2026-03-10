"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Step by Step",
    heading: ["Ascending", "Beyond Limits"],
    sub: "Every step forward brings clarity. Our structured approach transforms complexity into measurable progress.",
    stats: [
      { value: "4x", label: "ROI Average" },
      { value: "200+", label: "Implementations" },
      { value: "97%", label: "Success Rate" },
    ],
    cta: "Start Climbing",
    cta2: "See Our Process",
  },
  ar: {
    badge: "خطوة بخطوة",
    heading: ["نرتقي", "بلا حدود"],
    sub: "كل خطوة للأمام تجلب الوضوح. نهجنا المنظم يحول التعقيد إلى تقدم قابل للقياس.",
    stats: [
      { value: "4x", label: "متوسط العائد" },
      { value: "+200", label: "عملية تنفيذ" },
      { value: "97%", label: "معدل النجاح" },
    ],
    cta: "ابدأ الصعود",
    cta2: "شاهد عمليتنا",
  },
};

export function CorporateStairs({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  const steps = [
    { content: "badge", width: "35%", offset: "0%" },
    { content: "heading", width: "55%", offset: "15%" },
    { content: "sub", width: "50%", offset: "30%" },
    { content: "stats", width: "60%", offset: "40%" },
    { content: "cta", width: "45%", offset: "55%" },
  ];

  return (
    <>
      <style>{`
        @keyframes stairReveal {
          from { opacity: 0; transform: translateX(-40px) translateY(20px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes stairRevealRtl {
          from { opacity: 0; transform: translateX(40px) translateY(20px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes stepLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        .stair-reveal { animation: stairReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .stair-reveal-rtl { animation: stairRevealRtl 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .step-line { animation: stepLine 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1120 0%, #0f1729 50%, #0a0f1e 100%)" }}>
        {/* Diagonal grid lines for staircase feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
          {Array.from({ length: 20 }, (_, i) => (
            <line key={i}
              x1={`${i * 10}%`} y1="0"
              x2={`${i * 10 + 60}%`} y2="100%"
              stroke="rgba(147,197,253,0.5)" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Staircase diagonal guide line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line
            x1={isAr ? "85%" : "15%"} y1="8%"
            x2={isAr ? "25%" : "75%"} y2="88%"
            stroke="rgba(96,165,250,0.06)" strokeWidth="1" strokeDasharray="8 8"
          />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const animClass = isAr ? "stair-reveal-rtl" : "stair-reveal";
              const delay = `${0.3 + i * 0.25}s`;
              const marginLeft = isAr ? "0" : step.offset;
              const marginRight = isAr ? step.offset : "0";

              return (
                <div key={i} className="relative" style={{ marginLeft, marginRight }}>
                  {/* Step connector dot */}
                  {i > 0 && (
                    <div className={`absolute -top-3 ${isAr ? "right-0" : "left-0"} w-2 h-2 rounded-full bg-blue-400/30`}
                      style={{ animation: `dotPulse 3s ease-in-out ${i * 0.5}s infinite` }} />
                  )}

                  {/* Step horizontal line */}
                  <div className={`step-line mb-3 h-[1px] ${isAr ? "origin-right" : "origin-left"}`} style={{
                    width: "60px",
                    background: "linear-gradient(90deg, rgba(96,165,250,0.3), transparent)",
                    animationDelay: delay,
                  }} />

                  <div className={`${animClass} pb-12 sm:pb-16`} style={{ animationDelay: delay }}>
                    {step.content === "badge" && (
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-500/5 ${isAr ? "flex-row-reverse" : ""}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-xs font-medium text-blue-300/50 tracking-widest uppercase">{t.badge}</span>
                      </div>
                    )}

                    {step.content === "heading" && (
                      <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] ${isAr ? "text-right" : ""}`}>
                        <span className="block text-white/90">{t.heading[0]}</span>
                        <span className="block bg-gradient-to-r from-blue-300 via-sky-200 to-blue-400 bg-clip-text text-transparent">{t.heading[1]}</span>
                      </h1>
                    )}

                    {step.content === "sub" && (
                      <p className={`text-lg text-blue-100/25 leading-relaxed max-w-lg ${isAr ? "text-right" : ""}`}>
                        {t.sub}
                      </p>
                    )}

                    {step.content === "stats" && (
                      <div className={`flex gap-10 sm:gap-16 flex-wrap ${isAr ? "flex-row-reverse" : ""}`}>
                        {t.stats.map((stat, si) => (
                          <div key={si} className={isAr ? "text-right" : ""}>
                            <div className="text-3xl sm:text-4xl font-black text-blue-200/80">{stat.value}</div>
                            <div className="text-xs text-blue-300/25 mt-1 uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {step.content === "cta" && (
                      <div className={`flex gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`}>
                        <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] ${isAr ? "flex-row-reverse" : ""}`}
                          style={{ background: "linear-gradient(135deg, #1e3a5f, #3b82f6)" }}>
                          {t.cta}
                          <ArrowRight size={15} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                        </a>
                        <a href="#" className="px-7 py-3.5 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/5 transition-all">
                          {t.cta2}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
