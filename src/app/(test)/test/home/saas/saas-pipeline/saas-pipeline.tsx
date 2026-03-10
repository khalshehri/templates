"use client";

/**
 * CI/CD Pipeline Hero
 * Connected pipeline stages flowing left-to-right (or right-to-left in RTL).
 * Each stage is a card with icon, connected by animated dashed lines with
 * flowing dots representing data/builds moving through the pipeline.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Continuous Delivery",
    heading: "From Code to",
    headingHighlight: "Production",
    subheading:
      "Automate your entire deployment pipeline. Push code, run tests, deploy globally — all in one seamless flow.",
    ctaPrimary: "Start Building",
    ctaSecondary: "View Pipeline",
    stages: [
      { icon: "{ }", label: "Code", status: "Committed", color: "violet" },
      { icon: ">>", label: "Build", status: "Compiling", color: "purple" },
      { icon: "!!", label: "Test", status: "47 Passed", color: "fuchsia" },
      { icon: "[]", label: "Stage", status: "Preview", color: "pink" },
      { icon: "^^", label: "Deploy", status: "Live", color: "emerald" },
    ],
    stats: [
      { value: "2.4s", label: "Avg Build" },
      { value: "99.9%", label: "Uptime" },
      { value: "500+", label: "Deploys/Day" },
      { value: "12", label: "Regions" },
    ],
  },
  ar: {
    badge: "التسليم المستمر",
    heading: "من الكود إلى",
    headingHighlight: "الإنتاج",
    subheading:
      "أتمت خط النشر بالكامل. ادفع الكود، شغّل الاختبارات، انشر عالمياً — كل ذلك في تدفق سلس واحد.",
    ctaPrimary: "ابدأ البناء",
    ctaSecondary: "عرض الخط",
    stages: [
      { icon: "{ }", label: "كود", status: "تم الإيداع", color: "violet" },
      { icon: ">>", label: "بناء", status: "يجمّع", color: "purple" },
      { icon: "!!", label: "اختبار", status: "47 نجح", color: "fuchsia" },
      { icon: "[]", label: "تجهيز", status: "معاينة", color: "pink" },
      { icon: "^^", label: "نشر", status: "مباشر", color: "emerald" },
    ],
    stats: [
      { value: "2.4s", label: "متوسط البناء" },
      { value: "99.9%", label: "وقت التشغيل" },
      { value: "500+", label: "نشر/يوم" },
      { value: "12", label: "منطقة" },
    ],
  },
};

export function SaasPipeline({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes flowDot {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes flowDotRtl {
          0% { right: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { right: 100%; opacity: 0; }
        }
        @keyframes stageGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.1); }
          50% { box-shadow: 0 0 30px rgba(139,92,246,0.25); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes dashScroll {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .stage-card { animation: stageGlow 3s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08061a]">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Pipeline visualization */}
          <div className="fade-up relative" style={{ animationDelay: "0.6s" }}>
            <div className={`flex items-center justify-between gap-2 sm:gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.stages.map((stage, i) => (
                <div key={i} className="flex-1 relative">
                  <div className={`flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
                    {/* Stage card */}
                    <div className="stage-card relative flex-shrink-0 w-full bg-white/[0.04] border border-violet-500/20 rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm"
                      style={{ animationDelay: `${i * 0.3}s` }}>
                      {/* Active pulse on last stage */}
                      {i === 4 && (
                        <div className="absolute -top-1 -right-1 w-3 h-3">
                          <span className="absolute inset-0 rounded-full bg-emerald-400" />
                          <span className="absolute inset-0 rounded-full bg-emerald-400" style={{ animation: "pulseRing 2s ease-out infinite" }} />
                        </div>
                      )}
                      <div className="text-lg sm:text-2xl font-mono font-bold text-violet-400 mb-1">{stage.icon}</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">{stage.label}</div>
                      <div className="text-[10px] sm:text-xs text-white/30 mt-0.5">{stage.status}</div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {i < t.stages.length - 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 h-[2px] hidden sm:block"
                      style={{
                        [isAr ? "left" : "right"]: "-8px",
                        width: "16px",
                      }}>
                      <svg className="w-full h-2 overflow-visible" viewBox="0 0 16 2">
                        <line x1="0" y1="1" x2="16" y2="1"
                          stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="4 4"
                          style={{ animation: "dashScroll 1s linear infinite" }} />
                      </svg>
                      {/* Flowing dot */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400"
                        style={{
                          animation: `${isAr ? "flowDotRtl" : "flowDot"} 2s ease-in-out ${i * 0.4}s infinite`,
                          position: "absolute",
                        }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="fade-up mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
            style={{ animationDelay: "0.9s" }}>
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-violet-300">{stat.value}</div>
                <div className="text-xs text-white/25 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
