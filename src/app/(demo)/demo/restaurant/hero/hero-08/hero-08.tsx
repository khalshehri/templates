"use client";

/**
 * Food Truck Hero
 * Street food / casual vibe.
 * Background: #0c0c0c. Accent: lime #84cc16.
 */

import { ArrowRight, MapPin } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "STREET FOOD",
    heading: "Find Us.",
    headingAccent: "Feed Your Soul.",
    sub: "The best burgers in the city, served from four wheels of freedom. Check our location and come hungry.",
    cta1: "Find Us Today",
    cta2: "Full Menu",
    schedule: [
      { day: "MON-WED", location: "Downtown Square" },
      { day: "THU-FRI", location: "Marina Walk" },
      { day: "SAT-SUN", location: "Food Festival Park" },
    ],
  },
  ar: {
    badge: "طعام الشارع",
    heading: "جِدنا.",
    headingAccent: "أطعم روحك.",
    sub: "أفضل برغر في المدينة، يُقدّم من أربع عجلات من الحرية. تحقق من موقعنا وتعال جائعاً.",
    cta1: "جِدنا اليوم",
    cta2: "القائمة الكاملة",
    schedule: [
      { day: "الاثنين-الأربعاء", location: "ساحة وسط المدينة" },
      { day: "الخميس-الجمعة", location: "ممشى المارينا" },
      { day: "السبت-الأحد", location: "منتزه مهرجان الطعام" },
    ],
  },
};

export function Hero08({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0c0c0c" }}>
      {/* Neon lime glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-12 blur-[100px] pointer-events-none"
        style={{ background: "#84cc16", top: "40%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Street dots pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(132,204,22,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/20 bg-lime-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <MapPin className="w-4 h-4 text-lime-400" />
          <span className="text-xs font-bold text-lime-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.05em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#84cc16", textShadow: "0 0 40px rgba(132,204,22,0.3)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-lime-600 hover:bg-lime-500 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(132,204,22,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.schedule.map((s, i) => (
            <div key={i} className="p-4 rounded-xl border border-lime-500/10 bg-lime-500/[0.03]">
              <span className="text-xs font-mono font-bold text-lime-400 block mb-1">{s.day}</span>
              <span className="text-sm text-gray-400">{s.location}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
