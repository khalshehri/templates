"use client";

/**
 * Product Hunt Hero
 * Launch / product announcement aesthetic.
 * Background: #0a0a0a. Accent: orange-red #ea580c.
 */

import { ArrowRight, Rocket } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "JUST LAUNCHED",
    heading: "Meet",
    headingAccent: "Velocity 2.0",
    sub: "The all-in-one platform your team has been waiting for. Faster, smarter, and more beautiful than ever. Launching today.",
    cta1: "Get Early Access",
    cta2: "What's New",
    newFeatures: ["AI Copilot", "Real-time Collab", "Custom Workflows", "Dark Mode", "API v2"],
    votes: "1,247 upvotes on Product Hunt",
  },
  ar: {
    badge: "تم الإطلاق",
    heading: "تعرّف على",
    headingAccent: "Velocity 2.0",
    sub: "المنصة الشاملة التي انتظرها فريقك. أسرع وأذكى وأجمل من أي وقت. يُطلق اليوم.",
    cta1: "احصل على الوصول المبكر",
    cta2: "ما الجديد",
    newFeatures: ["مساعد AI", "تعاون فوري", "سير عمل مخصص", "الوضع الداكن", "API v2"],
    votes: "1,247 تصويت على Product Hunt",
  },
};

export function Hero10({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0a0a0a" }}>
      {/* Launch glow */}
      <div className="absolute w-[500px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#ea580c", top: "25%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Confetti-like particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="absolute w-1 h-3 rounded-full pointer-events-none"
          style={{
            background: ["#ea580c", "#f97316", "#fbbf24", "#ef4444"][i % 4],
            left: `${10 + (i * 7) % 80}%`, top: `-5%`,
            opacity: 0.3,
            animation: `confetti ${3 + (i % 3)}s ease-out ${i * 0.2}s both`,
            transform: `rotate(${i * 30}deg)`,
          }} />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Rocket className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold text-orange-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #ea580c, #f97316, #fbbf24)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(234,88,12,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <p className="text-xs text-orange-400/50 mb-8 font-mono"
          style={{ animation: "fadeInUp 0.6s ease-out 0.35s both" }}>{t.votes}</p>

        <div className="flex flex-wrap items-center justify-center gap-2"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.newFeatures.map((f, i) => (
            <span key={i} className="px-3 py-1.5 text-xs text-orange-300/60 border border-orange-500/10 rounded-full bg-orange-500/[0.03]">{f}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes confetti { 0%{transform:translateY(0) rotate(0deg);opacity:0.3} 100%{transform:translateY(100vh) rotate(720deg);opacity:0} }
      `}</style>
    </section>
  );
}
