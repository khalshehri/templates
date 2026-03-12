"use client";

/**
 * Fine Dining Hero
 * Elegant Michelin-star fine dining aesthetic.
 * Background: #050505. Accent: gold #d4a853.
 */

import { ArrowRight, Wine } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "FINE DINING",
    heading: "An Experience",
    headingAccent: "Beyond Taste",
    sub: "Two Michelin stars. Twelve courses. One unforgettable evening. Chef Laurent crafts each plate as a love letter to seasonal ingredients.",
    cta1: "Reserve",
    cta2: "Tasting Menu",
    details: [
      { label: "Courses", value: "12" },
      { label: "Wine Pairings", value: "7" },
      { label: "Michelin Stars", value: "★★" },
    ],
  },
  ar: {
    badge: "مطعم راقٍ",
    heading: "تجربة",
    headingAccent: "تفوق الذوق",
    sub: "نجمتا ميشلان. اثنا عشر طبقاً. أمسية لا تُنسى. الشيف لوران يصنع كل طبق كرسالة حب للمكونات الموسمية.",
    cta1: "احجز",
    cta2: "قائمة التذوق",
    details: [
      { label: "الأطباق", value: "12" },
      { label: "النبيذ", value: "7" },
      { label: "نجوم ميشلان", value: "★★" },
    ],
  },
};

export function Hero02({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#050505" }}>
      {/* Gold ambient glow */}
      <div className="absolute w-[400px] h-[250px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#d4a853", top: "25%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.9) 100%)" }} />

      {/* Elegant divider lines */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(212,168,83,0.15), transparent)" }} />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(212,168,83,0.15), transparent)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-3 mb-10"
          style={{ animation: "fadeIn 1s ease-out both" }}>
          <div className="w-8 h-px bg-amber-700/40" />
          <Wine className="w-4 h-4 text-amber-600" />
          <span className="text-[10px] font-bold text-amber-500/80 tracking-[0.3em] uppercase">{t.badge}</span>
          <Wine className="w-4 h-4 text-amber-600" />
          <div className="w-8 h-px bg-amber-700/40" />
        </div>

        <h1 className="leading-[0.9] tracking-[-0.02em] mb-8"
          style={{ fontSize: "clamp(44px, 9vw, 96px)", fontFamily: "Georgia, serif", animation: "fadeIn 1s ease-out 0.2s both" }}>
          <span className="text-white font-light">{t.heading}</span><br />
          <span className="font-bold italic" style={{ color: "#d4a853" }}>{t.headingAccent}</span>
        </h1>

        <div className="w-16 h-px mx-auto mb-8" style={{ background: "rgba(212,168,83,0.3)", animation: "expandCenter 0.8s ease-out 0.4s both" }} />

        <p className="text-gray-500 text-lg max-w-lg mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Georgia, serif", animation: "fadeIn 1s ease-out 0.5s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeIn 0.8s ease-out 0.6s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-none transition-all"
            style={{ background: "linear-gradient(135deg, #b8860b, #d4a853)", boxShadow: "0 0 30px rgba(212,168,83,0.15)" }}>
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-600 hover:text-white font-medium border-b border-transparent hover:border-amber-700 transition-all">{t.cta2}</button>
        </div>

        <div className="flex items-center justify-center gap-10"
          style={{ animation: "fadeIn 0.8s ease-out 0.8s both" }}>
          {t.details.map((d, i) => (
            <div key={i} className="text-center">
              <span className="text-2xl font-bold" style={{ color: "#d4a853" }}>{d.value}</span>
              <span className="block text-[10px] text-gray-700 tracking-[0.2em] uppercase mt-1">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes expandCenter { from{width:0} to{width:64px} }
      `}</style>
    </section>
  );
}
