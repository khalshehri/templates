"use client";

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    category: "The Collection",
    season: "Autumn / Winter 2026",
    heading: "Redefining Modern Luxury",
    subheading: "A curated journey through exquisite craftsmanship and contemporary design.",
    cta: "View Collection",
    scroll: "Scroll to explore",
  },
  ar: {
    category: "المجموعة",
    season: "خريف / شتاء 2026",
    heading: "إعادة تعريف الفخامة العصرية",
    subheading: "رحلة منتقاة عبر الحرفية الرفيعة والتصميم المعاصر.",
    cta: "عرض المجموعة",
    scroll: "مرر للاستكشاف",
  },
};

export function LuxuryEditorial({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in { animation: fadeIn 1.2s ease both; }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen image placeholder bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />

        <div className="relative z-10 w-full max-w-5xl px-6 sm:px-10 py-20">
          {/* Magazine layout */}
          <div className="flex flex-col items-center text-center">
            {/* Top category + season line */}
            <div
              className="fade-in flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/40 mb-12"
              style={{ animationDelay: "0.3s" }}
            >
              <span>{t.category}</span>
              <span className="w-8 h-px bg-white/20" />
              <span>{t.season}</span>
            </div>

            {/* Large serif heading */}
            <h1
              className="fade-up text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-[1.1]"
              style={{
                fontFamily: "var(--font-amiri), var(--font-el-messiri), serif",
                animationDelay: "0.5s",
              }}
            >
              {t.heading}
            </h1>

            {/* Thin divider */}
            <div
              className="fade-in w-12 h-px bg-amber-500/50 mt-8"
              style={{ animationDelay: "0.8s" }}
            />

            {/* Subheading — sans-serif, thin */}
            <p
              className="fade-up mt-8 text-base sm:text-lg font-light text-white/40 max-w-md leading-relaxed tracking-wide"
              style={{ animationDelay: "1s" }}
            >
              {t.subheading}
            </p>

            {/* CTA */}
            <div className="fade-up mt-10" style={{ animationDelay: "1.2s" }}>
              <a
                href="#"
                className={`group inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-widest uppercase text-white/80 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.cta}
                <ArrowRight size={14} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>

          {/* Scroll indicator at bottom */}
          <div
            className="fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              {t.scroll}
            </span>
            <div
              className="w-px h-6 bg-white/20"
              style={{ animation: "scrollDown 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
