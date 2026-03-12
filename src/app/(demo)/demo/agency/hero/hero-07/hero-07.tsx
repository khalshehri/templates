"use client";

/**
 * Darkroom Hero
 * Photography darkroom with red safelight glow.
 * Background: #0a0404. Accent: darkroom red #b91c1c.
 */

import { ArrowRight, Aperture } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "REFINED CREATIVE",
    heading: "Develop",
    headingAccent: "The Vision",
    sub: "In the darkroom of creativity, we carefully develop your brand's image — adjusting contrast, enhancing clarity, until the perfect picture emerges.",
    cta1: "Develop With Us",
    cta2: "The Process",
    values: [
      { title: "Patience", desc: "Great work takes time" },
      { title: "Precision", desc: "Every detail refined" },
      { title: "Craft", desc: "Handmade with care" },
    ],
  },
  ar: {
    badge: "إبداع راقٍ",
    heading: "طوّر",
    headingAccent: "الرؤية",
    sub: "في غرفة الإبداع المظلمة، نطوّر صورة علامتك بعناية — نضبط التباين ونعزز الوضوح حتى تظهر الصورة المثالية.",
    cta1: "طوّر معنا",
    cta2: "العملية",
    values: [
      { title: "الصبر", desc: "العمل الرائع يحتاج وقتاً" },
      { title: "الدقة", desc: "كل تفصيل مصقول" },
      { title: "الحِرفة", desc: "مصنوع يدوياً بعناية" },
    ],
  },
};

export function Hero07({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0404" }}>
      {/* Red safelight glow */}
      <div className="absolute w-[500px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#b91c1c", top: "10%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="absolute w-[200px] h-[200px] rounded-full opacity-8 blur-[60px] pointer-events-none"
        style={{ background: "#b91c1c", bottom: "30%", right: "20%" }} />

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "150px" }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,4,4,0.8) 100%)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div style={{ animation: "fadeIn 1s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-800/30 bg-red-900/20 mb-8">
              <Aperture className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-300 tracking-[0.2em] uppercase">{t.badge}</span>
            </div>

            <h1 className="leading-[0.9] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 96px)", fontFamily: "Georgia, serif" }}>
              <span className="text-white font-light">{t.heading}</span><br />
              <span className="font-bold italic" style={{ color: "#dc2626" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-7 py-3.5 bg-red-800 hover:bg-red-700 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(185,28,28,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-7 py-3.5 text-gray-500 hover:text-white font-medium rounded-lg border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          <div className="space-y-6" style={{ animation: "fadeIn 1s ease-out 0.3s both" }}>
            {t.values.map((v, i) => (
              <div key={i} className="p-5 rounded-xl border border-red-900/20 bg-red-950/10"
                style={{ animation: `fadeIn 0.6s ease-out ${0.5 + i * 0.15}s both` }}>
                <h3 className="text-lg font-semibold text-red-300 mb-1">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
      `}</style>
    </section>
  );
}
