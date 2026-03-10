"use client";

/**
 * Sushi/Japanese Hero
 * Japanese minimalist with chopstick illustration. Clean, zen aesthetic.
 * Minimal color palette with elegant spacing and brush stroke accents.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Omakase",
    heading: "The Art of",
    headingHighlight: "Japanese Cuisine",
    subheading:
      "Precision. Simplicity. Perfection. Our master sushi chef crafts each piece with decades of tradition and artistry.",
    ctaPrimary: "Reserve Omakase",
    ctaSecondary: "Full Menu",
    courses: [
      { name: "Otoro", desc: "Bluefin Tuna Belly", pieces: "2 pcs" },
      { name: "Uni", desc: "Hokkaido Sea Urchin", pieces: "1 pc" },
      { name: "Ikura", desc: "Salmon Roe", pieces: "Gunkan" },
      { name: "Tamago", desc: "Sweet Egg Custard", pieces: "1 pc" },
    ],
    omakasePrice: "$180",
    omakaseLabel: "Chef's Omakase",
    omakaseDesc: "12-course seasonal selection",
    japaneseText: "寿司",
    features: ["Fish Flown Daily", "Hinoki Wood Counter", "12 Seats Only", "Sake Pairing"],
  },
  ar: {
    badge: "أوماكاسي",
    heading: "فن",
    headingHighlight: "المطبخ الياباني",
    subheading:
      "دقة. بساطة. كمال. يصنع شيف السوشي الماهر كل قطعة بعقود من التقاليد والفن.",
    ctaPrimary: "حجز أوماكاسي",
    ctaSecondary: "القائمة الكاملة",
    courses: [
      { name: "أوتورو", desc: "بطن تونا زعانف زرقاء", pieces: "2 قطعة" },
      { name: "أوني", desc: "قنفذ بحر هوكايدو", pieces: "1 قطعة" },
      { name: "إكورا", desc: "بيض سلمون", pieces: "غونكان" },
      { name: "تاماغو", desc: "كاسترد بيض حلو", pieces: "1 قطعة" },
    ],
    omakasePrice: "$180",
    omakaseLabel: "أوماكاسي الشيف",
    omakaseDesc: "12 طبق موسمي مختار",
    japaneseText: "寿司",
    features: ["أسماك طازجة يومياً", "طاولة خشب هينوكي", "12 مقعد فقط", "ساكي مرافق"],
  },
};

export function RestaurantSushi({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes brushStroke {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes chopstickCross {
          from { opacity: 0; transform: rotate(-30deg) scale(0.8); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        @keyframes zenCircle {
          from { stroke-dashoffset: 300; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 0.15; }
        }
        @keyframes courseReveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0908]">
        {/* Zen circle background */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(234,88,12,0.15)" strokeWidth="1"
            strokeDasharray="300" style={{ animation: "zenCircle 3s ease-out 0.5s both" }} />
          <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(234,88,12,0.08)" strokeWidth="0.5"
            strokeDasharray="300" style={{ animation: "zenCircle 3s ease-out 0.8s both" }} />
        </svg>

        {/* Subtle warm glow */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, rgba(234,88,12,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={isAr ? "lg:order-2 text-right" : "lg:order-1"}>
              <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-sm font-medium mb-8"
                style={{ animationDelay: "0.1s" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}>
                {t.heading}
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {t.headingHighlight}
                </span>
              </h1>

              <p className="fade-up mt-6 text-lg text-white/35 max-w-md leading-relaxed"
                style={{ animationDelay: "0.3s" }}>
                {t.subheading}
              </p>

              <div className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                style={{ animationDelay: "0.4s" }}>
                <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-700 to-amber-600 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Course list */}
              <div className="fade-up mt-10 space-y-2" style={{ animationDelay: "0.5s" }}>
                {t.courses.map((course, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-orange-500/8 ${isAr ? "flex-row-reverse" : ""}`}
                    style={{ animation: `courseReveal 0.4s ease-out ${0.6 + i * 0.1}s both` }}>
                    <div className={isAr ? "text-right" : ""}>
                      <div className="text-sm text-white/50 font-medium">{course.name}</div>
                      <div className="text-[10px] text-white/20">{course.desc}</div>
                    </div>
                    <span className="text-[10px] text-orange-400/40 font-mono">{course.pieces}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chopstick + sushi plate visual */}
            <div className={`relative flex flex-col items-center justify-center ${isAr ? "lg:order-1" : "lg:order-2"}`}>
              {/* Large Japanese kanji */}
              <div className="text-[120px] sm:text-[150px] font-bold text-white/[0.03] leading-none select-none mb-4"
                style={{ fontFamily: "serif" }}>
                {t.japaneseText}
              </div>

              {/* Chopsticks SVG */}
              <svg viewBox="0 0 200 200" className="w-48 sm:w-56 -mt-20"
                style={{ animation: "chopstickCross 1s ease-out 0.5s both" }}>
                {/* Chopstick 1 */}
                <line x1="50" y1="20" x2="140" y2="170" stroke="rgba(120,53,15,0.3)" strokeWidth="3" strokeLinecap="round" />
                {/* Chopstick 2 */}
                <line x1="150" y1="20" x2="80" y2="170" stroke="rgba(120,53,15,0.25)" strokeWidth="3" strokeLinecap="round" />

                {/* Sushi piece between chopsticks */}
                <ellipse cx="110" cy="95" rx="18" ry="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                {/* Fish topping */}
                <ellipse cx="110" cy="90" rx="14" ry="6" fill="rgba(234,88,12,0.1)" stroke="rgba(234,88,12,0.15)" strokeWidth="0.3" />

                {/* Plate below */}
                <ellipse cx="100" cy="170" rx="50" ry="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

                {/* Wasabi dot */}
                <circle cx="70" cy="168" r="4" fill="rgba(34,197,94,0.1)" />
                {/* Ginger */}
                <ellipse cx="130" cy="168" rx="8" ry="3" fill="rgba(244,114,182,0.06)" />
              </svg>

              {/* Omakase card */}
              <div className="mt-4 text-center p-4 rounded-xl bg-white/[0.02] border border-orange-500/10 max-w-xs">
                <div className="text-[10px] text-orange-400/30 uppercase tracking-widest mb-1">{t.omakaseLabel}</div>
                <div className="text-3xl font-bold text-orange-400/60">{t.omakasePrice}</div>
                <div className="text-xs text-white/20 mt-1">{t.omakaseDesc}</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="fade-up mt-14 flex items-center justify-center gap-6 flex-wrap"
            style={{ animationDelay: "0.9s" }}>
            {t.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/20">
                <span className="w-1 h-1 rounded-full bg-orange-500/40" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
