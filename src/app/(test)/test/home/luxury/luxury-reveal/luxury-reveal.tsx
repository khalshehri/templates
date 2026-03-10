"use client";

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    category: "Haute Couture",
    heading: "Timeless Elegance",
    subheading: "Where craftsmanship meets vision. Discover collections that transcend seasons.",
    cta: "Explore Collection",
    year: "MMXXVI",
  },
  ar: {
    category: "أزياء راقية",
    heading: "أناقة خالدة",
    subheading: "حيث تلتقي الحرفية بالرؤية. اكتشف مجموعات تتجاوز المواسم.",
    cta: "استكشف المجموعة",
    year: "٢٠٢٦",
  },
};

export function LuxuryReveal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes letterReveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .letter-reveal { animation: letterReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; display: inline-block; }
        .line-expand { animation: lineExpand 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in { animation: fadeIn 1s ease both; }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a08]">
        {/* Subtle golden ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[150px]" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          {/* Category label */}
          <p
            className="fade-in text-xs uppercase tracking-[0.4em] text-amber-600/60 mb-12"
            style={{ animationDelay: "0.3s" }}
          >
            {t.category}
          </p>

          {/* Heading — letter by letter reveal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-[0.12em] leading-[1.1]"
            style={{ fontFamily: "var(--font-amiri), var(--font-el-messiri), serif" }}
          >
            {t.heading.split("").map((char, i) => (
              <span
                key={i}
                className="letter-reveal"
                style={{ animationDelay: `${0.5 + i * 0.06}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Golden line */}
          <div className="flex items-center justify-center mt-10 gap-3">
            <div
              className="line-expand h-px w-16 origin-right"
              style={{
                backgroundColor: "rgba(217,167,95,0.4)",
                animationDelay: "1.4s",
              }}
            />
            <div
              className="fade-in w-1.5 h-1.5 rounded-full bg-amber-600/50"
              style={{ animationDelay: "1.6s" }}
            />
            <div
              className="line-expand h-px w-16 origin-left"
              style={{
                backgroundColor: "rgba(217,167,95,0.4)",
                animationDelay: "1.4s",
              }}
            />
          </div>

          {/* Subheading */}
          <p
            className="fade-up mt-8 text-lg text-white/30 leading-relaxed max-w-md mx-auto font-light"
            style={{ animationDelay: "1.8s" }}
          >
            {t.subheading}
          </p>

          {/* CTA */}
          <div className="fade-up mt-12" style={{ animationDelay: "2s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-light tracking-widest uppercase text-amber-200/70 border border-amber-600/30 rounded-none hover:bg-amber-600/10 hover:border-amber-600/50 transition-all ${isAr ? "flex-row-reverse" : ""}`}
            >
              {t.cta}
              <ArrowRight size={14} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
          </div>

          {/* Year mark */}
          <p
            className="fade-in mt-20 text-xs tracking-[0.5em] text-white/10 uppercase"
            style={{ animationDelay: "2.2s" }}
          >
            {t.year}
          </p>
        </div>
      </section>
    </>
  );
}
