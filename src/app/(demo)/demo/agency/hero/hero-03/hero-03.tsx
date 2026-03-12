"use client";

/**
 * Film Reel Hero
 * Cinematic film strip aesthetic.
 * Background: #080808. Accent: gold #eab308.
 */

import { ArrowRight, Film } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "CREATIVE PRODUCTION",
    heading: "Every Brand",
    headingAccent: "Has a Story",
    sub: "We direct, design, and deliver brand narratives that captivate audiences. Your story deserves an award-winning production.",
    cta1: "Tell Your Story",
    cta2: "Watch Reel",
    roles: ["Director", "Storyteller", "Designer", "Strategist"],
  },
  ar: {
    badge: "إنتاج إبداعي",
    heading: "كل علامة",
    headingAccent: "لها قصة",
    sub: "نُخرج ونصمم ونقدم سرديات تأسر الجمهور. قصتك تستحق إنتاجاً حائزاً على الجوائز.",
    cta1: "احكِ قصتك",
    cta2: "شاهد الأعمال",
    roles: ["مخرج", "راوي قصص", "مصمم", "استراتيجي"],
  },
};

export function Hero03({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#080808" }}>
      {/* Film strip borders */}
      <div className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-4 opacity-[0.06] pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-8 h-6 rounded-sm border border-white" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 flex items-center justify-between px-4 opacity-[0.06] pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-8 h-6 rounded-sm border border-white" />
        ))}
      </div>

      {/* Warm spotlight */}
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#eab308", top: "30%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "128px" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Film className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-bold text-yellow-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="leading-[0.9] tracking-[-0.03em] mb-6"
          style={{ fontSize: "clamp(44px, 9vw, 100px)", fontFamily: "Georgia, serif", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <span className="text-white font-light">{t.heading}</span><br />
          <span className="font-bold italic" style={{ color: "#eab308" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.roles.map((r, i) => (
            <span key={i} className="px-4 py-1.5 text-xs font-mono text-yellow-400/60 border border-yellow-500/10 rounded">{r}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
