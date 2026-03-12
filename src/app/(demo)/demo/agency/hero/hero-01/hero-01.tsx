"use client";

/**
 * Paint Splash Hero
 * Creative agency with paint splatter effects.
 * Background: #0a0a0a. Accent: magenta #e11d48.
 */

import { ArrowRight, Palette } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "CREATIVE AGENCY",
    heading: "We Paint",
    headingAccent: "Digital Dreams",
    sub: "Bold ideas deserve bold execution. We're the creative agency that turns wild concepts into stunning digital realities.",
    cta1: "Start a Project",
    cta2: "Our Work",
    stats: [
      { value: "200+", label: "Projects Delivered" },
      { value: "45", label: "Awards Won" },
      { value: "98%", label: "Client Retention" },
    ],
  },
  ar: {
    badge: "وكالة إبداعية",
    heading: "نرسم",
    headingAccent: "أحلاماً رقمية",
    sub: "الأفكار الجريئة تستحق تنفيذاً جريئاً. نحن الوكالة الإبداعية التي تحوّل المفاهيم إلى واقع رقمي مذهل.",
    cta1: "ابدأ مشروعك",
    cta2: "أعمالنا",
    stats: [
      { value: "200+", label: "مشروع مُنجز" },
      { value: "45", label: "جائزة" },
      { value: "98%", label: "احتفاظ بالعملاء" },
    ],
  },
};

const SPLATS = [
  { cx: 20, cy: 30, r: 120, color: "rgba(225,29,72,0.08)", delay: 0 },
  { cx: 75, cy: 20, r: 90, color: "rgba(168,85,247,0.06)", delay: 0.3 },
  { cx: 50, cy: 70, r: 100, color: "rgba(225,29,72,0.05)", delay: 0.6 },
  { cx: 85, cy: 65, r: 80, color: "rgba(251,146,60,0.05)", delay: 0.9 },
];

export function Hero01({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0a0a" }}>
      {/* Paint splats */}
      {SPLATS.map((s, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            left: `${s.cx}%`, top: `${s.cy}%`, width: s.r, height: s.r,
            background: s.color, filter: "blur(40px)",
            transform: "translate(-50%,-50%) scale(0)",
            animation: `splatIn 0.8s cubic-bezier(0.16,1,0.3,1) ${s.delay}s forwards`,
          }} />
      ))}

      {/* Drip lines */}
      {[15, 35, 55, 72, 88].map((x, i) => (
        <div key={i} className="absolute top-0 w-px pointer-events-none"
          style={{
            left: `${x}%`, height: `${30 + i * 12}%`,
            background: `linear-gradient(to bottom, transparent, rgba(225,29,72,${0.03 + i * 0.01}), transparent)`,
            animation: `drip 2s ease-out ${i * 0.2}s both`,
          }} />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/10 mb-8">
            <Palette className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-bold text-rose-300 tracking-[0.2em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(48px, 10vw, 108px)" }}>
            {t.heading}<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #e11d48, #f97316, #a855f7)" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(225,29,72,0.3)]">
              {t.cta1}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          <div className="flex flex-wrap gap-10">
            {t.stats.map((s, i) => (
              <div key={i} style={{ animation: `fadeInUp 0.5s ease-out ${0.3 + i * 0.1}s both` }}>
                <span className="text-2xl font-black text-rose-400">{s.value}</span>
                <span className="block text-xs text-gray-600 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes splatIn { to{transform:translate(-50%,-50%) scale(1)} }
        @keyframes drip { from{height:0;opacity:0} to{opacity:1} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
