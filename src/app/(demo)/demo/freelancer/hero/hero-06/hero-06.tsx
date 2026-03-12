"use client";

/**
 * Connect Hero
 * Network/connection dots aesthetic for freelancer.
 * Background: #06060a. Accent: violet #7c3aed.
 */

import { ArrowRight, Unplug } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "DIGITAL NOMAD",
    heading: "Connect",
    headingAccent: "Anywhere",
    sub: "Location-independent creative technologist. I bring global perspective and 24/7 availability to every engagement.",
    cta1: "Connect Now",
    cta2: "Availability",
    locations: ["Dubai", "London", "Berlin", "Bali"],
  },
  ar: {
    badge: "رحّال رقمي",
    heading: "تواصل من",
    headingAccent: "أي مكان",
    sub: "تقني إبداعي مستقل عن المكان. أجلب منظوراً عالمياً وتوفراً على مدار الساعة لكل مشروع.",
    cta1: "تواصل الآن",
    cta2: "التوفر",
    locations: ["دبي", "لندن", "برلين", "بالي"],
  },
};

export function Hero06({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#06060a" }}>
      {/* Connection dots */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {[
          [20, 30], [50, 15], [80, 25], [35, 55], [65, 50], [25, 80], [55, 75], [85, 70], [45, 40], [70, 85],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="0.8" fill="#7c3aed" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + i % 3}s`} repeatCount="indefinite" />
            </circle>
            {i > 0 && (
              <line x1={cx} y1={cy} x2={[20, 50, 80, 35, 65, 25, 55, 85, 45, 70][i - 1]} y2={[30, 15, 25, 55, 50, 80, 75, 70, 40, 85][i - 1]}
                stroke="#7c3aed" strokeWidth="0.15" opacity="0.3" />
            )}
          </g>
        ))}
      </svg>

      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#7c3aed", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Unplug className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-bold text-violet-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#7c3aed", textShadow: "0 0 40px rgba(124,58,237,0.3)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex items-center justify-center gap-6" style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.locations.map((l, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" style={{ animation: `pulse 2s ease-in-out ${i * 0.3}s infinite` }} />
              <span className="text-sm text-gray-500">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.5)} }
      `}</style>
    </section>
  );
}
