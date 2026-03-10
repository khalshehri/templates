"use client";

/**
 * CompanyGrowth — Data Visualization Hero
 *
 * Animated ascending bar chart showing growth trajectory.
 * Content beside the chart. Data-driven professional layout.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "DATA-DRIVEN GROWTH",
    heading: ["Numbers That", "Speak", "For Themselves"],
    sub: "Year after year, our performance tells the story. Consistent growth powered by strategic vision and operational excellence.",
    cta: "See Our Results",
    cta2: "Annual Report",
    bars: [
      { label: "2019", value: 35, amount: "$12M" },
      { label: "2020", value: 42, amount: "$18M" },
      { label: "2021", value: 55, amount: "$29M" },
      { label: "2022", value: 68, amount: "$45M" },
      { label: "2023", value: 78, amount: "$67M" },
      { label: "2024", value: 92, amount: "$98M" },
    ],
  },
  ar: {
    badge: "نمو قائم على البيانات",
    heading: ["أرقام", "تتحدث", "عن نفسها"],
    sub: "عامًا بعد عام، أداؤنا يروي القصة. نمو مستمر مدعوم بالرؤية الاستراتيجية والتميّز التشغيلي.",
    cta: "شاهد نتائجنا",
    cta2: "التقرير السنوي",
    bars: [
      { label: "٢٠١٩", value: 35, amount: "١٢M$" },
      { label: "٢٠٢٠", value: 42, amount: "١٨M$" },
      { label: "٢٠٢١", value: 55, amount: "٢٩M$" },
      { label: "٢٠٢٢", value: 68, amount: "٤٥M$" },
      { label: "٢٠٢٣", value: 78, amount: "٦٧M$" },
      { label: "٢٠٢٤", value: 92, amount: "٩٨M$" },
    ],
  },
};

export function CompanyGrowth({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes barGrow {
          from { height: 0; }
          to { height: var(--bar-height); }
        }
        @keyframes valueAppear {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes trendLine {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes gridFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes barShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#030d1f" }}>
        {/* Grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridFade 1.5s ease both",
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`flex flex-col lg:flex-row items-center gap-16 ${isAr ? "lg:flex-row-reverse" : ""}`}>
            {/* Text content */}
            <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
              <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/[0.04] mb-6 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.3s" }}>
                <span className="text-sm font-medium text-blue-300/60 tracking-widest">{t.badge}</span>
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.45s" }}>
                <span className="block text-white/90">{t.heading[0]}</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">{t.heading[1]}</span>
                <span className="block text-white/70">{t.heading[2]}</span>
              </h1>

              <p className="fade-up mt-5 text-base text-blue-100/30 leading-relaxed max-w-md"
                style={{ animationDelay: "0.6s" }}>{t.sub}</p>

              <div className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.75s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)" }}>
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-6 py-3 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/[0.04] transition-all">
                  {t.cta2}
                </a>
              </div>
            </div>

            {/* Bar chart visualization */}
            <div className="flex-1 w-full max-w-lg">
              <div className="relative p-6 rounded-2xl border border-blue-400/[0.08] backdrop-blur-sm"
                style={{ background: "rgba(3,13,31,0.6)" }}>
                {/* Y-axis labels */}
                <div className="absolute left-2 top-6 bottom-16 flex flex-col justify-between">
                  {["100%", "75%", "50%", "25%", "0%"].map((label, i) => (
                    <span key={i} className="text-[10px] text-blue-300/20">{label}</span>
                  ))}
                </div>

                {/* Chart area */}
                <div className={`${isAr ? "mr-6" : "ml-8"} relative`} style={{ height: 280 }}>
                  {/* Horizontal grid lines */}
                  {[0, 25, 50, 75, 100].map((v, i) => (
                    <div key={i} className="absolute w-full border-t border-blue-400/[0.04]"
                      style={{ bottom: `${v}%` }} />
                  ))}

                  {/* Trend line SVG */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 280" preserveAspectRatio="none">
                    <polyline
                      points={t.bars.map((b, i) => `${50 + i * 100},${280 - (b.value / 100) * 260}`).join(" ")}
                      fill="none" stroke="rgba(96,165,250,0.3)" strokeWidth="2"
                      strokeDasharray="600" strokeDashoffset="600"
                      style={{ animation: "trendLine 2s ease 1.5s both" }}
                    />
                  </svg>

                  {/* Bars */}
                  <div className="absolute inset-0 flex items-end justify-around px-2">
                    {t.bars.map((bar, i) => (
                      <div key={i} className="flex flex-col items-center gap-2" style={{ width: "14%" }}>
                        {/* Value label */}
                        <span className="text-xs font-bold text-blue-300/60"
                          style={{ animation: `valueAppear 0.4s ease ${1.2 + i * 0.15}s both` }}>
                          {bar.amount}
                        </span>
                        {/* Bar */}
                        <div className="w-full rounded-t-md relative overflow-hidden"
                          style={{
                            ["--bar-height" as string]: `${(bar.value / 100) * 220}px`,
                            height: 0,
                            animation: `barGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + i * 0.12}s both`,
                            background: `linear-gradient(180deg, rgba(96,165,250,0.8), rgba(30,64,175,0.6))`,
                          }}>
                          {/* Shimmer */}
                          <div className="absolute inset-0"
                            style={{
                              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                              backgroundSize: "200% 100%",
                              animation: "barShimmer 3s ease infinite",
                            }} />
                        </div>
                        {/* Year label */}
                        <span className="text-xs text-blue-300/30 mt-1">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
