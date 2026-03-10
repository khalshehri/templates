"use client";

/**
 * Business Metrics Hero
 * Big animated counter numbers with bar chart backdrop.
 * Data visualization aesthetic with professional look.
 */

import { ArrowRight, TrendingUp } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "DATA-DRIVEN EXCELLENCE",
    heading: ["Numbers That", "Speak", "Volumes"],
    sub: "Our track record of success is measured in real results, not just promises.",
    cta: "See Case Studies",
    cta2: "Our Approach",
    metrics: [
      { value: "$2.4B", label: "Revenue Generated", barH: 85 },
      { value: "1,200+", label: "Clients Served", barH: 70 },
      { value: "99.7%", label: "Uptime SLA", barH: 95 },
      { value: "340+", label: "Team Members", barH: 55 },
    ],
    kpis: [
      { label: "YoY Growth", value: "+47%" },
      { label: "NPS Score", value: "92" },
      { label: "Projects Delivered", value: "3,800+" },
    ],
  },
  ar: {
    badge: "تميّز قائم على البيانات",
    heading: ["أرقام", "تتحدث", "عن نفسها"],
    sub: "سجلنا الحافل بالنجاح يُقاس بنتائج حقيقية، وليس مجرد وعود.",
    cta: "شاهد دراسات الحالة",
    cta2: "منهجيتنا",
    metrics: [
      { value: "٢.٤ مليار$", label: "إيرادات محققة", barH: 85 },
      { value: "+١,٢٠٠", label: "عميل تمت خدمتهم", barH: 70 },
      { value: "٩٩.٧%", label: "اتفاقية وقت التشغيل", barH: 95 },
      { value: "+٣٤٠", label: "عضو في الفريق", barH: 55 },
    ],
    kpis: [
      { label: "النمو السنوي", value: "+٤٧%" },
      { label: "مؤشر رضا العملاء", value: "٩٢" },
      { label: "المشاريع المنجزة", value: "+٣,٨٠٠" },
    ],
  },
};

export function CompanyMetrics({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes counterPulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; text-shadow: 0 0 30px rgba(59,130,246,0.4); }
        }
        @keyframes gridFade {
          from { opacity: 0; }
          to { opacity: 0.04; }
        }
        @keyframes scanLine {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes dataFlow {
          0% { transform: translateY(100%); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes kpiSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .bar-grow { animation: barGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; transform-origin: bottom; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#060c18" }}>
        {/* Subtle grid background */}
        <div className="absolute inset-0" style={{ animation: "gridFade 1s ease both" }}>
          {Array.from({ length: 40 }, (_, i) => (
            <div key={`h${i}`} className="absolute left-0 right-0 bg-blue-400"
              style={{ top: `${i * 2.5}%`, height: "0.5px", opacity: 0.04 }} />
          ))}
          {Array.from({ length: 40 }, (_, i) => (
            <div key={`v${i}`} className="absolute top-0 bottom-0 bg-blue-400"
              style={{ left: `${i * 2.5}%`, width: "0.5px", opacity: 0.04 }} />
          ))}
        </div>

        {/* Scan line */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent pointer-events-none"
          style={{ animation: "scanLine 8s linear infinite" }} />

        {/* Background bar chart decoration */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-8" style={{ height: "70%" }}>
          {Array.from({ length: 20 }, (_, i) => {
            const h = 15 + ((i * 7919 + 1301) % 60);
            return (
              <div key={i} className="bar-grow flex-1 mx-[2px] rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(180deg, rgba(59,130,246,${0.03 + (i % 3) * 0.01}) 0%, rgba(59,130,246,0.01) 100%)`,
                  animationDelay: `${0.5 + i * 0.05}s`,
                }} />
            );
          })}
        </div>

        {/* Data flow columns */}
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="absolute top-0 bottom-0 overflow-hidden pointer-events-none"
            style={{ left: `${15 + i * 14}%`, width: "1px" }}>
            <div className="w-full h-8 bg-gradient-to-b from-transparent via-blue-400/15 to-transparent"
              style={{ animation: `dataFlow ${4 + i * 0.5}s linear ${i * 0.8}s infinite` }} />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className={`${isAr ? "text-right" : ""}`}>
            {/* Badge */}
            <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/10 bg-blue-400/[0.03] mb-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.2s" }}>
              <TrendingUp size={14} className="text-blue-400/70" />
              <span className="text-sm font-medium text-blue-300/60 tracking-widest">{t.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.35s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent">
                {t.heading[1]}
              </span>
              <span className="block text-white/80">{t.heading[2]}</span>
            </h1>

            <p className="fade-up mt-6 text-lg text-blue-100/25 leading-relaxed max-w-lg"
              style={{ animationDelay: "0.5s" }}>{t.sub}</p>

            {/* Metric cards */}
            <div className={`fade-up mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl ${isAr ? "mr-0" : ""}`}
              style={{ animationDelay: "0.65s" }}>
              {t.metrics.map((metric, i) => (
                <div key={i} className="relative p-6 rounded-xl border border-blue-400/[0.08] backdrop-blur-sm overflow-hidden"
                  style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(10,15,30,0.8))" }}>
                  {/* Mini bar behind */}
                  <div className="absolute bottom-0 left-0 right-0 bar-grow rounded-t-sm"
                    style={{
                      height: `${metric.barH}%`,
                      background: "linear-gradient(180deg, rgba(59,130,246,0.08), rgba(59,130,246,0.02))",
                      animationDelay: `${0.8 + i * 0.15}s`,
                    }} />
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl font-black text-blue-200/90"
                      style={{ animation: `counterPulse 4s ease-in-out ${i * 0.5}s infinite` }}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-blue-300/30 mt-2 uppercase tracking-wider font-medium">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={`fade-up mt-10 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.8s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #1e3a8a, #3b82f6, #60a5fa)" }}>
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-blue-200/30 border border-blue-300/10 rounded-lg hover:bg-blue-300/[0.04] transition-all">
                {t.cta2}
              </a>
            </div>

            {/* KPI ribbon */}
            <div className={`fade-up mt-14 flex gap-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "1s" }}>
              {t.kpis.map((kpi, i) => (
                <div key={i} className="flex items-center gap-3" style={{ animation: `kpiSlide 0.6s ease both ${1.1 + i * 0.1}s` }}>
                  <div className="w-1 h-8 rounded-full bg-gradient-to-b from-blue-400/50 to-blue-400/10" />
                  <div>
                    <div className="text-lg font-bold text-blue-200/70">{kpi.value}</div>
                    <div className="text-[10px] text-blue-300/25 uppercase tracking-wider">{kpi.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
