"use client";

/**
 * Notebook Hero
 * Handwritten / sketch notebook aesthetic.
 * Background: #0a0a08. Accent: warm yellow #facc15.
 */

import { ArrowRight, PenLine } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "UX WRITER & DESIGNER",
    heading: "Words That",
    headingAccent: "Work",
    sub: "I craft copy and design interfaces that communicate clearly, convert effectively, and delight users at every touchpoint.",
    cta1: "Start Writing",
    cta2: "Read Samples",
    expertise: [
      { title: "UX Copy", desc: "Microcopy that guides" },
      { title: "Brand Voice", desc: "Tone that resonates" },
      { title: "UI Design", desc: "Layouts that flow" },
    ],
  },
  ar: {
    badge: "كاتب ومصمم UX",
    heading: "كلمات",
    headingAccent: "تعمل",
    sub: "أصيغ نصوصاً وأصمم واجهات تتواصل بوضوح وتحوّل بفعالية وتُسعد المستخدمين.",
    cta1: "لنبدأ الكتابة",
    cta2: "اقرأ نماذج",
    expertise: [
      { title: "نصوص UX", desc: "نصوص ترشد" },
      { title: "صوت العلامة", desc: "نبرة تتردد" },
      { title: "تصميم UI", desc: "تخطيطات تنساب" },
    ],
  },
};

export function Hero05({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0a08" }}>
      {/* Notebook lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(250,204,21,0.4) 31px, rgba(250,204,21,0.4) 32px)", backgroundSize: "100% 32px" }} />

      {/* Left margin line */}
      <div className="absolute top-0 bottom-0 w-px pointer-events-none opacity-[0.06]"
        style={{ left: "80px", background: "#ef4444" }} />

      <div className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#facc15", top: "40%", right: "20%" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 mb-8">
            <PenLine className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold text-yellow-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="leading-[0.9] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(48px, 10vw, 100px)", fontFamily: "Georgia, serif" }}>
            <span className="text-white font-light">{t.heading}</span><br />
            <span className="font-bold italic" style={{ color: "#facc15" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(250,204,21,0.3)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {t.expertise.map((e, i) => (
              <div key={i} className="p-4 rounded-lg border border-yellow-500/10 bg-yellow-500/[0.03]"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <h3 className="text-sm font-semibold text-yellow-300 mb-1">{e.title}</h3>
                <p className="text-xs text-gray-500">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
