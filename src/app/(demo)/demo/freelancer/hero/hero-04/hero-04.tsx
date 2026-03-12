"use client";

/**
 * Badge ID Hero
 * Personal brand card / ID badge aesthetic.
 * Background: #060606. Accent: cyan #06b6d4.
 */

import { ArrowRight, BadgeCheck } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "VERIFIED FREELANCER",
    name: "Alex Morgan",
    title: "Product Designer & Developer",
    heading: "Design That",
    headingAccent: "Converts",
    sub: "Specialized in turning complex problems into simple, intuitive interfaces that drive real business results.",
    cta1: "Book a Call",
    cta2: "Case Studies",
    specialties: ["Product Design", "Design Systems", "Prototyping", "Front-end Dev"],
  },
  ar: {
    badge: "مستقل موثّق",
    name: "أحمد المرجان",
    title: "مصمم منتجات ومطور",
    heading: "تصميم",
    headingAccent: "يُحوّل",
    sub: "متخصص في تحويل المشكلات المعقدة إلى واجهات بسيطة وبديهية تحقق نتائج أعمال حقيقية.",
    cta1: "احجز مكالمة",
    cta2: "دراسات حالة",
    specialties: ["تصميم منتجات", "أنظمة تصميم", "نماذج أولية", "تطوير واجهات"],
  },
};

export function Hero04({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060606" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#06b6d4", top: "30%", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-center">
          {/* ID Card */}
          <div className="w-[280px] mx-auto lg:mx-0 p-6 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.03] backdrop-blur"
            style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-cyan-400">{t.name[0]}</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <h3 className="text-white font-bold">{t.name}</h3>
                <BadgeCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-xs text-gray-500 mb-4">{t.title}</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {t.specialties.map((s, i) => (
                  <span key={i} className="px-2 py-1 text-[10px] text-cyan-300/60 border border-cyan-500/10 rounded bg-cyan-500/[0.03]">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ animation: "fadeInUp 0.6s ease-out 0.15s both" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-6">
              <BadgeCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 88px)" }}>
              {t.heading}<br />
              <span style={{ color: "#06b6d4" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
