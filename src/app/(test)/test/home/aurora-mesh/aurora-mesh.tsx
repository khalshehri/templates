"use client";

/**
 * Aurora Mesh Hero
 * Vivid animated gradient mesh that shifts and breathes like the northern lights.
 * Multiple overlapping radial gradients with hue-rotate and scale animations.
 * Frosted glass content card floating over the aurora.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Next-Gen Digital",
    heading: ["Experience", "Beyond", "Boundaries"],
    sub: "We weave light, motion, and code into digital experiences that transcend the ordinary. Your brand deserves to glow.",
    cta: "Ignite Your Vision",
    cta2: "Watch Reel",
    stats: [
      { value: "98%", label: "Client Retention" },
      { value: "2.4s", label: "Avg. Load Time" },
      { value: "50+", label: "Brands Elevated" },
    ],
  },
  ar: {
    badge: "الجيل الرقمي القادم",
    heading: ["تجربة", "تتجاوز", "الحدود"],
    sub: "ننسج الضوء والحركة والكود في تجارب رقمية تتخطى المألوف. علامتك التجارية تستحق أن تتوهج.",
    cta: "أشعل رؤيتك",
    cta2: "شاهد العرض",
    stats: [
      { value: "٩٨٪", label: "ولاء العملاء" },
      { value: "٢.٤ث", label: "سرعة التحميل" },
      { value: "+٥٠", label: "علامة تجارية" },
    ],
  },
};

export function AuroraMesh({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes aurora1 {
          0%, 100% { transform: translate(0, 0) scale(1); filter: hue-rotate(0deg); }
          25% { transform: translate(80px, -60px) scale(1.2); filter: hue-rotate(30deg); }
          50% { transform: translate(-40px, 40px) scale(0.9); filter: hue-rotate(60deg); }
          75% { transform: translate(60px, 20px) scale(1.1); filter: hue-rotate(90deg); }
        }
        @keyframes aurora2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); filter: hue-rotate(0deg); }
          33% { transform: translate(-70px, 50px) scale(1.3) rotate(30deg); filter: hue-rotate(-40deg); }
          66% { transform: translate(50px, -30px) scale(0.85) rotate(-20deg); filter: hue-rotate(40deg); }
        }
        @keyframes aurora3 {
          0%, 100% { transform: translate(0, 0) scale(1); filter: hue-rotate(0deg); opacity: 0.5; }
          50% { transform: translate(100px, 60px) scale(1.4); filter: hue-rotate(60deg); opacity: 0.7; }
        }
        @keyframes aurora4 {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
          50% { transform: scale(1.2) rotate(45deg); opacity: 0.6; }
        }
        @keyframes meshPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes glideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
        .glide-up { animation: glideUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .badge-glow { animation: badgePulse 3s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050208]">
        {/* Aurora layers */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-50"
          style={{
            top: "-15%", left: "-10%",
            background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)",
            animation: "aurora1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            top: "20%", right: "-5%",
            background: "radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(168,85,247,0.3) 40%, transparent 70%)",
            animation: "aurora2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-50"
          style={{
            bottom: "-10%", left: "30%",
            background: "radial-gradient(circle, rgba(34,211,238,0.5) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)",
            animation: "aurora3 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-40"
          style={{
            top: "50%", left: "50%", marginLeft: "-200px", marginTop: "-200px",
            background: "radial-gradient(circle, rgba(250,204,21,0.3) 0%, rgba(245,158,11,0.15) 40%, transparent 70%)",
            animation: "aurora4 15s ease-in-out infinite",
          }}
        />

        {/* Mesh grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "meshPulse 8s ease-in-out infinite",
        }} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`${isAr ? "text-right" : "text-left"}`}>
            {/* Badge */}
            <div
              className="glide-up badge-glow inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-medium text-violet-300 tracking-wider uppercase">{t.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.95] tracking-tight">
              {t.heading.map((word, i) => (
                <span
                  key={i}
                  className={`glide-up block ${
                    i === 0 ? "text-white" :
                    i === 1 ? "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent" :
                    "text-white/80"
                  }`}
                  style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Sub */}
            <p
              className="glide-up mt-8 text-lg text-white/30 max-w-xl leading-relaxed"
              style={{ animationDelay: "0.6s" }}
            >
              {t.sub}
            </p>

            {/* CTAs */}
            <div
              className={`glide-up mt-10 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.75s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)" }}
              >
                {t.cta}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-8 py-4 text-sm font-semibold text-white/40 border border-white/10 rounded-xl hover:bg-white/5 transition-all backdrop-blur-sm">
                {t.cta2}
              </a>
            </div>

            {/* Stats */}
            <div
              className={`glide-up mt-16 flex gap-10 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.9s" }}
            >
              {t.stats.map((stat, i) => (
                <div key={i} className={isAr ? "text-right" : ""}>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/25 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
