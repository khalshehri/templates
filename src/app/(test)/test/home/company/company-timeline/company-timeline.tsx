"use client";

/**
 * Milestone Timeline Hero
 * Horizontal timeline with milestone dots and expanding content.
 * Shows company history as a journey line with key years.
 */

import { ArrowRight, Clock } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "OUR JOURNEY",
    heading: ["Two Decades", "of", "Innovation"],
    sub: "From a small startup to a global enterprise, every milestone has shaped who we are today.",
    cta: "Join Our Story",
    cta2: "About Us",
    milestones: [
      { year: "2003", title: "Founded", desc: "Started with a vision and 5 team members" },
      { year: "2007", title: "First 100 Clients", desc: "Reached our first major client milestone" },
      { year: "2012", title: "Global Expansion", desc: "Opened offices in London and Singapore" },
      { year: "2016", title: "IPO", desc: "Successfully listed on the stock exchange" },
      { year: "2020", title: "Digital Pivot", desc: "Launched cloud-first platform strategy" },
      { year: "2024", title: "AI Integration", desc: "Embedded AI across all product lines" },
    ],
  },
  ar: {
    badge: "رحلتنا",
    heading: ["عقدان", "من", "الابتكار"],
    sub: "من شركة ناشئة صغيرة إلى مؤسسة عالمية، كل إنجاز شكّل هويتنا اليوم.",
    cta: "انضم لقصتنا",
    cta2: "عن الشركة",
    milestones: [
      { year: "٢٠٠٣", title: "التأسيس", desc: "بدأنا برؤية و5 أعضاء فريق" },
      { year: "٢٠٠٧", title: "أول 100 عميل", desc: "وصلنا لأول إنجاز رئيسي في العملاء" },
      { year: "٢٠١٢", title: "التوسع العالمي", desc: "افتتحنا مكاتب في لندن وسنغافورة" },
      { year: "٢٠١٦", title: "الطرح العام", desc: "إدراج ناجح في البورصة" },
      { year: "٢٠٢٠", title: "التحول الرقمي", desc: "إطلاق استراتيجية المنصة السحابية" },
      { year: "٢٠٢٤", title: "دمج الذكاء الاصطناعي", desc: "دمج الذكاء الاصطناعي في جميع المنتجات" },
    ],
  },
};

export function CompanyTimeline({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes dotAppear {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(15px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes dotRing {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes shimmerLine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-15px); opacity: 0.6; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .line-grow { animation: lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; transform-origin: left; }
        .line-grow-rtl { animation: lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) both; transform-origin: right; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#080e1c" }}>
        {/* Background texture */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(30,60,100,0.15) 0%, transparent 60%)",
        }} />

        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-indigo-400/20"
            style={{
              left: `${((i * 4973 + 2111) % 10000) / 100}%`,
              top: `${((i * 7919 + 1301) % 10000) / 100}%`,
              animation: `floatParticle ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
            }} />
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          {/* Header */}
          <div className={`mb-16 ${isAr ? "text-right" : ""}`}>
            <div className={`fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/10 bg-indigo-400/[0.03] mb-8 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.2s" }}>
              <Clock size={14} className="text-indigo-400/70" />
              <span className="text-sm font-medium text-indigo-300/60 tracking-widest">{t.badge}</span>
            </div>

            <h1 className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.35s" }}>
              <span className="block text-white/90">{t.heading[0]}</span>
              <span className="inline text-white/50">{t.heading[1]} </span>
              <span className="inline bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                {t.heading[2]}
              </span>
            </h1>

            <p className="fade-up mt-5 text-lg text-indigo-100/25 leading-relaxed max-w-lg"
              style={{ animationDelay: "0.5s" }}>{t.sub}</p>
          </div>

          {/* Timeline */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className={`absolute top-6 left-0 right-0 h-[2px] ${isAr ? "line-grow-rtl" : "line-grow"}`}
              style={{
                background: "linear-gradient(90deg, rgba(99,102,241,0.4), rgba(99,102,241,0.15), rgba(99,102,241,0.4))",
                backgroundSize: "200% 100%",
                animationDelay: "0.6s",
              }}>
              {/* Shimmer on line */}
              <div className="absolute inset-0" style={{
                background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
                backgroundSize: "50% 100%",
                animation: "shimmerLine 3s linear infinite",
              }} />
            </div>

            {/* Milestone dots and cards */}
            <div className={`grid grid-cols-6 gap-4 ${isAr ? "direction-rtl" : ""}`}>
              {t.milestones.map((milestone, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  {/* Dot */}
                  <div className="relative z-10" style={{ animation: `dotAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1) both ${0.8 + i * 0.15}s` }}>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-indigo-400/30"
                      style={{ animation: `dotRing 3s ease-out ${i * 0.5}s infinite` }} />
                    <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                  </div>

                  {/* Card */}
                  <div className="mt-6 text-center" style={{ animation: `cardReveal 0.6s ease both ${1 + i * 0.15}s` }}>
                    <div className="text-xl font-black text-indigo-300/80 mb-1">{milestone.year}</div>
                    <div className="text-sm font-semibold text-white/70 mb-1">{milestone.title}</div>
                    <div className="text-xs text-indigo-200/25 leading-relaxed">{milestone.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className={`fade-up flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
            style={{ animationDelay: "1.6s" }}>
            <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ background: "linear-gradient(135deg, #312e81, #6366f1, #818cf8)" }}>
              {t.cta}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-7 py-3.5 text-sm font-semibold text-indigo-200/30 border border-indigo-300/10 rounded-lg hover:bg-indigo-300/[0.04] transition-all">
              {t.cta2}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
