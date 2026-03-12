"use client";

/**
 * Chef's Table Hero
 * Intimate chef's table / open kitchen aesthetic.
 * Background: #060606. Accent: warm white + copper.
 */

import { ArrowRight, ChefHat } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "CHEF'S TABLE",
    heading: "Watch.",
    headingAccent: "Taste. Feel.",
    sub: "Six seats around the pass. Watch Chef Amara transform raw ingredients into edible art. An intimate experience you'll never forget.",
    cta1: "Reserve a Seat",
    cta2: "Meet the Chef",
    experience: "6 seats · 3 hours · 15 courses · $350/person",
  },
  ar: {
    badge: "طاولة الشيف",
    heading: "شاهد.",
    headingAccent: "تذوّق. اشعر.",
    sub: "ستة مقاعد حول المطبخ المفتوح. شاهد الشيف أمارة تحوّل المكونات الخام إلى فن صالح للأكل. تجربة حميمة لن تُنسى.",
    cta1: "احجز مقعداً",
    cta2: "تعرّف على الشيف",
    experience: "6 مقاعد · 3 ساعات · 15 طبقاً · 1,300 ر.س/شخص",
  },
};

export function Hero10({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060606" }}>
      {/* Warm copper glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full opacity-8 blur-[80px] pointer-events-none"
        style={{ background: "#b87333", top: "30%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Spotlight effect */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(184,115,51,0.04), transparent 60%)" }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(6,6,6,0.9) 100%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 mb-10"
          style={{ animation: "fadeIn 1s ease-out both" }}>
          <div className="w-8 h-px" style={{ background: "rgba(184,115,51,0.4)" }} />
          <ChefHat className="w-5 h-5" style={{ color: "#b87333" }} />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "#b87333" }}>{t.badge}</span>
          <ChefHat className="w-5 h-5" style={{ color: "#b87333" }} />
          <div className="w-8 h-px" style={{ background: "rgba(184,115,51,0.4)" }} />
        </div>

        <h1 className="text-white leading-[0.85] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(52px, 12vw, 120px)", fontWeight: 200, animation: "fadeIn 1s ease-out 0.2s both" }}>
          {t.heading}<br />
          <span className="font-bold">{t.headingAccent}</span>
        </h1>

        <div className="w-16 h-px mx-auto mb-8" style={{ background: "rgba(184,115,51,0.3)", animation: "expandCenter 0.8s ease-out 0.4s both" }} />

        <p className="text-gray-500 text-lg max-w-md mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "Georgia, serif", animation: "fadeIn 1s ease-out 0.5s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ animation: "fadeIn 0.8s ease-out 0.6s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-none hover:bg-gray-200 transition-all">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-600 hover:text-white font-medium border-b border-transparent hover:border-white transition-all">{t.cta2}</button>
        </div>

        <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "#b87333", opacity: 0.6, animation: "fadeIn 0.8s ease-out 0.8s both" }}>{t.experience}</p>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes expandCenter { from{width:0} to{width:64px} }
      `}</style>
    </section>
  );
}
