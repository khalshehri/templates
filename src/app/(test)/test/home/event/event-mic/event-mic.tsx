"use client";

/**
 * Microphone Spotlight Hero
 * Microphone with spotlight beam, speaker/performance stage feel.
 * Stand-up/talk format with dramatic lighting and stage presence.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Live Event",
    heading: "Take the",
    headingHighlight: "Stage",
    subheading:
      "World-class speakers sharing groundbreaking ideas. Inspiring talks that will transform how you think about technology.",
    ctaPrimary: "Get Tickets",
    ctaSecondary: "Speaker Lineup",
    speakers: [
      { name: "Sarah Chen", role: "CEO, TechCo", topic: "The Future of AI" },
      { name: "Ahmad Hassan", role: "CTO, CloudBase", topic: "Scaling to Millions" },
      { name: "Maria Santos", role: "VP Product, InnovateLab", topic: "Design Thinking" },
    ],
    nextUp: "Next Speaker",
    stats: ["30+ Speakers", "3 Stages", "50+ Talks", "2 Days"],
  },
  ar: {
    badge: "حدث مباشر",
    heading: "اعتلِ",
    headingHighlight: "المسرح",
    subheading:
      "متحدثون عالميون يشاركون أفكاراً رائدة. محادثات ملهمة ستغير طريقة تفكيرك في التكنولوجيا.",
    ctaPrimary: "احصل على تذاكر",
    ctaSecondary: "قائمة المتحدثين",
    speakers: [
      { name: "سارة تشن", role: "الرئيس التنفيذي، تك كو", topic: "مستقبل الذكاء الاصطناعي" },
      { name: "أحمد حسن", role: "كبير التقنيين، كلاود بيس", topic: "التوسع للملايين" },
      { name: "ماريا سانتوس", role: "نائبة رئيس المنتج", topic: "التفكير التصميمي" },
    ],
    nextUp: "المتحدث التالي",
    stats: ["+30 متحدث", "3 مسارح", "+50 محادثة", "يومان"],
  },
};

export function EventMic({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spotlightPulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.12; }
        }
        @keyframes micFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes soundWave {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes speakerSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0505]">
        {/* Spotlight cone from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[600px] opacity-[0.07]"
          style={{
            background: "linear-gradient(180deg, rgba(249,115,22,0.5) 0%, transparent 100%)",
            clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
            animation: "spotlightPulse 4s ease-in-out infinite",
          }} />

        {/* Stage floor gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-red-950/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text + speaker cards */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Speaker cards */}
              <div className="mt-10 space-y-3">
                <div className="text-[10px] text-orange-400/40 uppercase tracking-wider font-bold mb-2">{t.nextUp}</div>
                {t.speakers.map((speaker, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-red-500/10 ${isAr ? "flex-row-reverse" : ""}`}
                    style={{ animation: `speakerSlide 0.5s ease-out ${0.6 + i * 0.15}s both` }}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/15 to-orange-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-red-300/60">{speaker.name[0]}</span>
                    </div>
                    <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
                      <div className="text-sm font-semibold text-white/70">{speaker.name}</div>
                      <div className="text-[10px] text-white/25">{speaker.role}</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/15">
                      <span className="text-[9px] text-orange-300/60">{speaker.topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Microphone visualization */}
            <div className={`relative flex justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              <div style={{ animation: "micFloat 4s ease-in-out infinite" }}>
                <svg viewBox="0 0 200 350" className="w-48 sm:w-56" style={{ filter: "drop-shadow(0 20px 40px rgba(239,68,68,0.1))" }}>
                  {/* Sound waves */}
                  {[1, 2, 3].map((_, i) => (
                    <circle key={i} cx="100" cy="80" r="30" fill="none"
                      stroke="rgba(239,68,68,0.15)" strokeWidth="1"
                      style={{ animation: `soundWave ${2 + i * 0.5}s ease-out ${i * 0.5}s infinite` }} />
                  ))}

                  {/* Mic head */}
                  <ellipse cx="100" cy="80" rx="30" ry="45" fill="none"
                    stroke="rgba(239,68,68,0.3)" strokeWidth="2" />
                  {/* Mic grid lines */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1="75" y1={50 + i * 12} x2="125" y2={50 + i * 12}
                      stroke="rgba(239,68,68,0.1)" strokeWidth="0.5" />
                  ))}
                  {/* Mic body ring */}
                  <ellipse cx="100" cy="125" rx="25" ry="8" fill="none"
                    stroke="rgba(239,68,68,0.25)" strokeWidth="2.5" />
                  {/* Mic stand */}
                  <line x1="100" y1="133" x2="100" y2="280"
                    stroke="rgba(239,68,68,0.2)" strokeWidth="3" />
                  {/* Base */}
                  <ellipse cx="100" cy="280" rx="40" ry="10" fill="none"
                    stroke="rgba(239,68,68,0.15)" strokeWidth="2" />
                  {/* Spotlight hit on mic head */}
                  <ellipse cx="90" cy="70" rx="8" ry="15"
                    fill="rgba(249,115,22,0.08)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="fade-up mt-14 flex items-center justify-center gap-8 flex-wrap"
            style={{ animationDelay: "1s" }}>
            {t.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/20">
                <span className="w-1 h-1 rounded-full bg-red-500/50" />
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
