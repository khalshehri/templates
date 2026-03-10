"use client";

/**
 * Neon Noir Hero
 * Cyberpunk-inspired with neon signs, rain lines, and
 * a dark rainy city vibe. Glowing text with flicker effect.
 * Hot pink + electric blue neons on pitch black.
 */

import { ArrowRight, Zap } from "lucide-react";

const content = {
  en: {
    sign: "OPEN 24/7",
    heading: ["THE FUTURE", "IS NOW"],
    sub: "Step into the next dimension of digital. Where neon dreams meet pixel-perfect reality.",
    cta: "Enter The Grid",
    cta2: "Signal Us",
    tags: ["CYBERNETIC", "DESIGN", "SYSTEM"],
  },
  ar: {
    sign: "مفتوح 24/7",
    heading: ["المستقبل", "هو الآن"],
    sub: "ادخل البعد التالي من الرقمية. حيث تلتقي أحلام النيون بواقع البكسل المثالي.",
    cta: "ادخل الشبكة",
    cta2: "أرسل إشارة",
    tags: ["سيبرنتيك", "تصميم", "نظام"],
  },
};

// Rain drops
const RAIN = Array.from({ length: 50 }, (_, i) => ({
  x: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 0.5 + Math.random() * 1,
  height: 15 + Math.random() * 25,
  opacity: 0.05 + Math.random() * 0.15,
}));

export function NeonNoir({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes rainFall {
          from { transform: translateY(-100vh); }
          to { transform: translateY(100vh); }
        }
        @keyframes neonFlicker {
          0%, 92%, 100% { opacity: 1; text-shadow: 0 0 10px #f472b6, 0 0 40px #ec4899, 0 0 80px #db2777; }
          93% { opacity: 0.8; text-shadow: 0 0 5px #f472b680; }
          94% { opacity: 1; text-shadow: 0 0 10px #f472b6, 0 0 40px #ec4899, 0 0 80px #db2777; }
          96% { opacity: 0.6; text-shadow: 0 0 3px #f472b640; }
          97% { opacity: 1; text-shadow: 0 0 10px #f472b6, 0 0 40px #ec4899, 0 0 80px #db2777; }
        }
        @keyframes signGlow {
          0%, 100% { box-shadow: 0 0 10px #f472b6, 0 0 30px #ec4899, inset 0 0 10px #f472b633; }
          50% { box-shadow: 0 0 20px #f472b6, 0 0 60px #ec4899, 0 0 100px #db277780, inset 0 0 20px #f472b644; }
        }
        @keyframes blueGlow {
          0%, 100% { text-shadow: 0 0 10px #38bdf8, 0 0 30px #0ea5e9, 0 0 60px #0284c7; }
          50% { text-shadow: 0 0 15px #38bdf8, 0 0 45px #0ea5e9, 0 0 90px #0284c7; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          from { top: -10%; }
          to { top: 110%; }
        }
        .neon-flicker { animation: neonFlicker 4s ease-in-out infinite; }
        .blue-glow { animation: blueGlow 3s ease-in-out infinite; }
        .fade-in { animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05050a]">
        {/* Rain */}
        {RAIN.map((drop, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent pointer-events-none"
            style={{
              left: `${drop.x}%`,
              height: drop.height,
              opacity: drop.opacity,
              animation: `rainFall ${drop.duration}s linear infinite`,
              animationDelay: `${drop.delay}s`,
            }}
          />
        ))}

        {/* Floor reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

        {/* Scanline */}
        <div
          className="absolute left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(244,114,182,0.05), transparent)",
            animation: "scanline 8s linear infinite",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          {/* Neon sign */}
          <div
            className="fade-in inline-flex items-center gap-2 px-5 py-2 rounded-sm border border-pink-500/50 mb-12"
            style={{ animation: "signGlow 3s ease-in-out infinite, fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both", animationDelay: "0.1s" }}
          >
            <Zap size={14} className="text-pink-400" />
            <span className="text-sm font-mono font-bold text-pink-300 tracking-widest">{t.sign}</span>
          </div>

          {/* Heading */}
          <h1 className="font-black tracking-tighter leading-[0.85]">
            <span
              className="neon-flicker block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-pink-400"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {t.heading[0]}
            </span>
            <span
              className="blue-glow block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-sky-400 mt-2"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {t.heading[1]}
            </span>
          </h1>

          {/* Horizontal neon line */}
          <div className="mx-auto mt-8 w-40 h-px" style={{ background: "linear-gradient(90deg, transparent, #f472b6, #38bdf8, transparent)", boxShadow: "0 0 20px #f472b680" }} />

          <p className="fade-in mt-8 text-lg text-white/25 max-w-md mx-auto font-mono" style={{ animationDelay: "0.5s" }}>
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="fade-in mt-10 flex items-center justify-center gap-4" style={{ animationDelay: "0.65s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold font-mono uppercase tracking-wider text-white border-2 border-pink-500 hover:bg-pink-500/20 transition-all hover:shadow-[0_0_30px_#ec4899] ${isAr ? "flex-row-reverse" : ""}`}
            >
              {t.cta}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a href="#" className="px-8 py-4 text-sm font-bold font-mono uppercase tracking-wider text-sky-400/60 border-2 border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/5 transition-all">
              {t.cta2}
            </a>
          </div>

          {/* Tags */}
          <div className="fade-in mt-12 flex items-center justify-center gap-4 font-mono" style={{ animationDelay: "0.8s" }}>
            {t.tags.map((tag, i) => (
              <span key={i} className="text-xs tracking-[0.3em] text-white/10">
                {i > 0 && <span className="mr-4 text-pink-500/30">//</span>}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
