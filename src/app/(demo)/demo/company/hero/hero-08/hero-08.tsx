"use client";

interface Hero08Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "EST. 2003",
    headingLine1: "Where discipline",
    headingLine2: "meets ambition",
    body: "Two decades of guiding the region\u2019s most important institutions through transformation. We don\u2019t just advise \u2014 we build.",
    cta: "Start a conversation",
    bottom: "Riyadh \u2014 Dubai \u2014 London",
  },
  ar: {
    eyebrow: "\u062A\u0623\u0633\u0633\u062A \u0662\u0660\u0660\u0663",
    headingLine1: "\u062D\u064A\u062B \u064A\u0644\u062A\u0642\u064A \u0627\u0644\u0627\u0646\u0636\u0628\u0627\u0637",
    headingLine2: "\u0628\u0627\u0644\u0637\u0645\u0648\u062D",
    body: "\u0639\u0642\u062F\u0627\u0646 \u0645\u0646 \u062A\u0648\u062C\u064A\u0647 \u0623\u0647\u0645 \u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u062E\u0644\u0627\u0644 \u0627\u0644\u062A\u062D\u0648\u0644. \u0646\u062D\u0646 \u0644\u0627 \u0646\u0642\u062F\u0645 \u0627\u0644\u0645\u0634\u0648\u0631\u0629 \u0641\u062D\u0633\u0628 \u2014 \u0628\u0644 \u0646\u0628\u0646\u064A.",
    cta: "\u0627\u0628\u062F\u0623 \u0645\u062D\u0627\u062F\u062B\u0629",
    bottom: "\u0627\u0644\u0631\u064A\u0627\u0636 \u2014 \u062F\u0628\u064A \u2014 \u0644\u0646\u062F\u0646",
  },
};

export function Hero08({ language }: Hero08Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero08-line-expand {
          from { width: 0; }
          to { width: var(--hero08-line-width); }
        }
        @keyframes hero08-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero08-line {
          animation: hero08-line-expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          --hero08-line-width: 8rem;
        }
        @media (min-width: 768px) {
          .hero08-line {
            --hero08-line-width: 12rem;
          }
        }
        .hero08-heading {
          opacity: 0;
          animation: hero08-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        .hero08-body {
          opacity: 0;
          animation: hero08-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }
        .hero08-cta {
          opacity: 0;
          animation: hero08-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }
        .hero08-bottom {
          opacity: 0;
          animation: hero08-fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero08-line {
            animation: none;
            width: var(--hero08-line-width) !important;
          }
          .hero08-heading,
          .hero08-body,
          .hero08-cta,
          .hero08-bottom {
            animation: none;
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section
        className="min-h-screen flex items-center justify-center bg-[#f5f0ea]"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="flex flex-col items-center text-center px-6 py-20">
          {/* Eyebrow */}
          <p
            className={`text-[11px] tracking-[0.25em] text-stone-400 uppercase ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.eyebrow}
          </p>

          {/* Spacer */}
          <div className="h-6" />

          {/* The Animated Line */}
          <div className="hero08-line h-px bg-stone-300" style={{ width: 0 }} />

          {/* Spacer */}
          <div className="h-8" />

          {/* Heading */}
          <h1
            className={`hero08-heading text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 leading-[1.15] whitespace-pre-line ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.headingLine1}
            {"\n"}
            {t.headingLine2}
          </h1>

          {/* Spacer */}
          <div className="h-6" />

          {/* Body */}
          <p
            className={`hero08-body text-stone-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.body}
          </p>

          {/* Spacer */}
          <div className="h-8" />

          {/* CTA */}
          <button
            className={`hero08-cta border border-stone-300 text-stone-700 px-7 py-3 rounded-none cursor-pointer transition-all duration-300 hover:bg-stone-800 hover:text-white hover:border-stone-800 ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.cta}
          </button>

          {/* Spacer */}
          <div className="h-16" />

          {/* Bottom locations */}
          <p
            className={`hero08-bottom text-[11px] text-stone-400 tracking-wide ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.bottom}
          </p>
        </div>
      </section>
    </>
  );
}
