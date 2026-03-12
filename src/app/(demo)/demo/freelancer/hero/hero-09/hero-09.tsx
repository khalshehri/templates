"use client";

/**
 * Calendar Hero
 * Time/availability-focused booking aesthetic.
 * Background: #08080c. Accent: emerald #10b981.
 */

import { ArrowRight, CalendarDays } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "BOOKING OPEN",
    heading: "Time Is",
    headingAccent: "Precious",
    sub: "I respect deadlines because I respect people. Transparent timelines, honest estimates, and on-time delivery — every single time.",
    cta1: "Book a Slot",
    cta2: "Pricing",
    availability: [
      { month: "APR", status: "2 slots", open: true },
      { month: "MAY", status: "3 slots", open: true },
      { month: "JUN", status: "Full", open: false },
      { month: "JUL", status: "1 slot", open: true },
    ],
  },
  ar: {
    badge: "الحجز مفتوح",
    heading: "الوقت",
    headingAccent: "ثمين",
    sub: "أحترم المواعيد لأنني أحترم الناس. جداول شفافة، تقديرات صادقة، وتسليم في الموعد — كل مرة.",
    cta1: "احجز موعداً",
    cta2: "الأسعار",
    availability: [
      { month: "أبريل", status: "2 متاح", open: true },
      { month: "مايو", status: "3 متاح", open: true },
      { month: "يونيو", status: "ممتلئ", open: false },
      { month: "يوليو", status: "1 متاح", open: true },
    ],
  },
};

export function Hero09({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#08080c" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#10b981", top: "40%", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
          <CalendarDays className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-emerald-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#10b981" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.availability.map((a, i) => (
            <div key={i} className={`px-5 py-3 rounded-xl border text-center ${a.open ? "border-emerald-500/15 bg-emerald-500/[0.03]" : "border-gray-800 bg-gray-900/30"}`}>
              <span className="text-xs font-mono font-bold block mb-1" style={{ color: a.open ? "#10b981" : "#4b5563" }}>{a.month}</span>
              <span className={`text-[10px] ${a.open ? "text-emerald-300/60" : "text-gray-600"}`}>{a.status}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}
