"use client";

interface Hero05Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "We don't follow\nmarkets. We\nshape them.",
    body: "A different kind of firm for organizations that refuse to stand still.",
    marquee: "STRATEGY \u00b7 OPERATIONS \u00b7 DIGITAL \u00b7 GROWTH \u00b7 ADVISORY \u00b7 INNOVATION \u00b7 CAPITAL \u00b7 VENTURES",
    cta: "Start a conversation \u2192",
  },
  ar: {
    heading: "\u0644\u0627 \u0646\u062a\u0628\u0639\n\u0627\u0644\u0623\u0633\u0648\u0627\u0642.\n\u0628\u0644 \u0646\u0635\u0646\u0639\u0647\u0627.",
    body: "\u0634\u0631\u0643\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0631\u0641\u0636 \u0627\u0644\u062c\u0645\u0648\u062f.",
    marquee: "\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u00b7 \u0639\u0645\u0644\u064a\u0627\u062a \u00b7 \u0631\u0642\u0645\u0646\u0629 \u00b7 \u0646\u0645\u0648 \u00b7 \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u00b7 \u0627\u0628\u062a\u0643\u0627\u0631 \u00b7 \u0631\u0623\u0633 \u0645\u0627\u0644 \u00b7 \u0627\u0633\u062a\u062b\u0645\u0627\u0631\u0627\u062a",
    cta: "\u0627\u0628\u062f\u0623 \u0645\u062d\u0627\u062f\u062b\u0629 \u2190",
  },
};

export function Hero05({ language }: Hero05Props) {
  const isAr = language === "ar";
  const t = content[language];

  const marqueeAnimationName = isAr ? "hero05MarqueeRtl" : "hero05Marquee";

  return (
    <>
      <style>{`
        @keyframes hero05Marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes hero05MarqueeRtl {
          from { transform: translateX(0); }
          to { transform: translateX(50%); }
        }
        @keyframes hero05FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero05-content-1 { opacity: 0; animation: hero05FadeUp 0.7s ease-out 0.2s forwards; }
        .hero05-content-2 { opacity: 0; animation: hero05FadeUp 0.7s ease-out 0.4s forwards; }
        .hero05-content-3 { opacity: 0; animation: hero05FadeUp 0.7s ease-out 0.6s forwards; }
        .hero05-content-4 { opacity: 0; animation: hero05FadeUp 0.7s ease-out 0.8s forwards; }
        @media (prefers-reduced-motion: reduce) {
          .hero05-content-1, .hero05-content-2, .hero05-content-3, .hero05-content-4 {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero05-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <section className="min-h-screen bg-[#0a0a0a] flex flex-col">
        {/* BAND 1 — Top content */}
        <div className="flex-1 flex flex-col justify-center pt-24 md:pt-32 pb-12 px-6 md:px-16">
          <h1
            className={`hero05-content-1 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 whitespace-pre-line ${
              isAr
                ? "font-[family-name:var(--font-changa)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.heading}
          </h1>
          <p
            className={`hero05-content-2 text-gray-500 text-lg max-w-lg leading-relaxed ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.body}
          </p>
        </div>

        {/* BAND 2 — Marquee strip */}
        <div className="hero05-content-3 bg-[#111] border-y border-white/[0.06] py-5 overflow-hidden">
          <div
            className="hero05-marquee-track flex whitespace-nowrap"
            style={{
              animation: `${marqueeAnimationName} 25s linear infinite`,
            }}
          >
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className={`text-sm tracking-[0.3em] text-gray-600 uppercase font-bold px-4 shrink-0 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.marquee}
                <span className="mx-4">{"\u00b7"}</span>
              </span>
            ))}
          </div>
        </div>

        {/* BAND 3 — Bottom CTA */}
        <div className="hero05-content-4 px-6 md:px-16 py-12 flex justify-end">
          <button
            className={`text-gray-400 hover:text-white text-sm cursor-pointer transition-all duration-300 bg-transparent border-none ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {t.cta}
          </button>
        </div>
      </section>
    </>
  );
}
