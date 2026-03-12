"use client";

/**
 * Photo Grid Mosaic Hero
 * Multi-service company with project showcase.
 * Asymmetric masonry grid of project "photos" (gradient placeholders).
 * Background: #0a0a0a. Accent: teal-400.
 */

import { ArrowRight, Grid3X3 } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "OUR PORTFOLIO",
    heading: "Crafted With",
    headingAccent: "Purpose",
    sub: "Every project tells a story. From brand identities to digital platforms, here's a glimpse of what we've built for clients who dare to stand out.",
    cta1: "View All Projects",
    cta2: "Start a Project",
    photos: [
      { label: "Brand Identity — NEOM", gradient: "linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf)", span: "row-span-2" },
      { label: "Mobile App — Lucid", gradient: "linear-gradient(135deg, #1e293b, #334155, #475569)", span: "" },
      { label: "Web Platform — Takaful", gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6, #a78bfa)", span: "" },
      { label: "Campaign — Vision 2030", gradient: "linear-gradient(135deg, #b45309, #d97706, #f59e0b)", span: "col-span-2" },
      { label: "Dashboard — Riyali", gradient: "linear-gradient(135deg, #0369a1, #0284c7, #0ea5e9)", span: "" },
      { label: "E-commerce — Souq+", gradient: "linear-gradient(135deg, #be185d, #db2777, #ec4899)", span: "row-span-2" },
    ],
  },
  ar: {
    badge: "أعمالنا",
    heading: "صُنعت",
    headingAccent: "بهدف",
    sub: "كل مشروع يروي قصة. من الهويات البصرية إلى المنصات الرقمية، إليكم لمحة مما بنيناه لعملاء يجرؤون على التميّز.",
    cta1: "جميع المشاريع",
    cta2: "ابدأ مشروعك",
    photos: [
      { label: "هوية بصرية — نيوم", gradient: "linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf)", span: "row-span-2" },
      { label: "تطبيق — Lucid", gradient: "linear-gradient(135deg, #1e293b, #334155, #475569)", span: "" },
      { label: "منصة — تكافل", gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6, #a78bfa)", span: "" },
      { label: "حملة — رؤية 2030", gradient: "linear-gradient(135deg, #b45309, #d97706, #f59e0b)", span: "col-span-2" },
      { label: "لوحة — ريالي", gradient: "linear-gradient(135deg, #0369a1, #0284c7, #0ea5e9)", span: "" },
      { label: "متجر — سوق+", gradient: "linear-gradient(135deg, #be185d, #db2777, #ec4899)", span: "row-span-2" },
    ],
  },
};

export function Hero16({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0a0a0a" }}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className={`grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center ${isAr ? "" : ""}`}>
          {/* Text */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`} style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <Grid3X3 className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-mono font-bold text-teal-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
              {t.heading}<br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #14b8a6, #2dd4bf)" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg"
              style={{ animation: "fadeUp 0.6s ease-out 0.15s both" }}>{t.sub}</p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.25s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(20,184,166,0.25)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Photo grid */}
          <div className={`grid grid-cols-3 gap-2.5 auto-rows-[120px] ${isAr ? "lg:order-1" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>
            {t.photos.map((photo, i) => (
              <div key={i}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${photo.span}`}
                style={{ animation: `photoReveal 0.4s ease-out ${0.3 + i * 0.08}s both` }}>
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: photo.gradient }} />
                {/* Grain */}
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
                {/* Label overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white/80">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes photoReveal { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </section>
  );
}
