"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

const content = {
  en: {
    badge: "Trusted Worldwide",
    heading: ["Riding the Wave", "of Progress"],
    sub: "Transform your operations with data-driven strategies and cutting-edge solutions that deliver measurable ROI across every department.",
    cta: "Get Started",
    cta2: "Learn More",
    stats: [
      { value: "3.2M+", label: "Transactions Daily" },
      { value: "99.99%", label: "System Reliability" },
      { value: "45ms", label: "Avg Response Time" },
    ],
    badges: ["Enterprise Ready", "Bank-Grade Security", "24/7 Support", "Multi-Region"],
  },
  ar: {
    badge: "موثوق عالمياً",
    heading: ["نركب موجة", "التقدم"],
    sub: "حوّل عملياتك باستراتيجيات مبنية على البيانات وحلول متطورة تحقق عائد استثمار قابل للقياس في كل قسم.",
    cta: "ابدأ الآن",
    cta2: "اعرف المزيد",
    stats: [
      { value: "+3.2M", label: "معاملة يومياً" },
      { value: "99.99%", label: "موثوقية النظام" },
      { value: "45ms", label: "متوسط الاستجابة" },
    ],
    badges: ["جاهز للمؤسسات", "أمان مصرفي", "دعم 24/7", "متعدد المناطق"],
  },
};

export function CorporateWave({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes waveFlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes waveFlow2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .slide-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .slide-in { animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .slide-in-r { animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .badge-pop { animation: badgePop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden" style={{ background: "#071020" }}>
        {/* Top content area - left aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-40 sm:pb-52">
          <div className={`max-w-2xl ${isAr ? "mr-0 ml-auto text-right" : ""}`}>
            <div className={`slide-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/10 bg-indigo-500/5 mb-8 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
              <span className="text-xs font-medium text-indigo-300/50 tracking-widest uppercase">{t.badge}</span>
            </div>

            <h1 className={`slide-in text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] ${isAr ? "" : ""}`} style={{ animationDelay: "0.4s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="block bg-gradient-to-r from-indigo-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">{t.heading[1]}</span>
            </h1>

            <p className="slide-in mt-6 text-lg text-indigo-100/25 leading-relaxed" style={{ animationDelay: "0.6s" }}>
              {t.sub}
            </p>

            <div className={`slide-in mt-8 flex gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "0.8s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #312e81, #4f46e5, #6366f1)" }}>
                {t.cta}
                <ArrowRight size={15} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-indigo-200/30 border border-indigo-300/10 rounded-lg hover:bg-indigo-300/5 transition-all">
                {t.cta2}
              </a>
            </div>
          </div>
        </div>

        {/* Flowing wave SVG separator */}
        <div className="absolute left-0 right-0 z-10" style={{ top: "55%" }}>
          {/* Wave layer 1 */}
          <div className="relative overflow-hidden" style={{ height: "120px" }}>
            <svg className="absolute" style={{ width: "200%", height: "120px", animation: "waveFlow 12s linear infinite" }} viewBox="0 0 2400 120" preserveAspectRatio="none">
              <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 C1400,20 1600,100 1800,60 C2000,20 2200,100 2400,60 L2400,120 L0,120 Z"
                fill="rgba(49,46,129,0.15)" />
            </svg>
          </div>
          {/* Wave layer 2 */}
          <div className="relative overflow-hidden -mt-24" style={{ height: "120px" }}>
            <svg className="absolute" style={{ width: "200%", height: "120px", animation: "waveFlow2 15s linear infinite" }} viewBox="0 0 2400 120" preserveAspectRatio="none">
              <path d="M0,80 C150,40 350,100 600,70 C850,40 1050,110 1200,80 C1350,50 1550,100 1800,70 C2050,40 2250,100 2400,80 L2400,120 L0,120 Z"
                fill="rgba(67,56,202,0.08)" />
            </svg>
          </div>
          {/* Wave layer 3 - main line */}
          <div className="relative overflow-hidden -mt-28" style={{ height: "120px" }}>
            <svg className="absolute" style={{ width: "200%", height: "120px", animation: "waveFlow 18s linear infinite" }} viewBox="0 0 2400 120" preserveAspectRatio="none">
              <path d="M0,70 C300,30 500,110 800,60 C1100,10 1300,110 1600,70 C1900,30 2100,100 2400,70"
                fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" />
              <path d="M0,70 C300,30 500,110 800,60 C1100,10 1300,110 1600,70 C1900,30 2100,100 2400,70 L2400,120 L0,120 Z"
                fill="rgba(30,27,75,0.3)" />
            </svg>
          </div>
        </div>

        {/* Bottom area - stats and trust badges below wave */}
        <div className="relative z-10 mt-auto" style={{ background: "linear-gradient(180deg, transparent, rgba(5,8,20,0.8))" }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-16">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {t.stats.map((stat, i) => (
                <div key={i} className={`slide-up ${isAr ? "text-right" : ""}`} style={{ animationDelay: `${1.2 + i * 0.15}s` }}>
                  <div className="text-3xl sm:text-4xl font-black text-indigo-200/80" style={{ textShadow: "0 0 30px rgba(99,102,241,0.2)" }}>{stat.value}</div>
                  <div className="text-xs text-indigo-300/25 mt-1.5 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust badges below */}
            <div className={`flex flex-wrap gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.badges.map((badge, i) => (
                <div key={i} className={`badge-pop inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/10 bg-indigo-500/5 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ animationDelay: `${1.6 + i * 0.1}s` }}>
                  <CheckCircle size={13} className="text-indigo-400/40" />
                  <span className="text-xs text-indigo-200/35 font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-20" style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }} />
      </section>
    </>
  );
}
