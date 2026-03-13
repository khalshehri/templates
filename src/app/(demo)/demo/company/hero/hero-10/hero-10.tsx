"use client";

interface Hero10Props {
  language: "en" | "ar";
}

const content = {
  en: {
    line1: "Build",
    line2word1: "Beyond",
    line2word2: "Limits",
    sub: "Strategic advisory for enterprises redefining what's possible.",
    copyright: "© 2024",
  },
  ar: {
    line1: "ابنِ",
    line2word1: "بلا",
    line2word2: "حدود",
    sub: "استشارات استراتيجية لمؤسسات تعيد تعريف الممكن.",
    copyright: "© ٢٠٢٤",
  },
};

export function Hero10({ language }: Hero10Props) {
  const t = content[language];
  const isAr = language === "ar";
  const headingFont = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const bodyFont = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <>
      <style>{`
        @keyframes hero10FadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero10-word-1 {
          opacity: 0;
          animation: hero10FadeIn 0.6s ease-out 0s forwards;
        }
        .hero10-word-2 {
          opacity: 0;
          animation: hero10FadeIn 0.6s ease-out 0.2s forwards;
        }
        .hero10-word-3 {
          opacity: 0;
          animation: hero10FadeIn 0.6s ease-out 0.4s forwards;
        }
        .hero10-sub {
          opacity: 0;
          animation: hero10FadeIn 0.5s ease-out 0.7s forwards;
        }
        .hero10-cta {
          opacity: 0;
          animation: hero10FadeIn 0.5s ease-out 0.9s forwards;
        }
        .hero10-outlined {
          -webkit-text-stroke: 2px #1a1a1a;
          -webkit-text-fill-color: transparent;
        }
        .hero10-copyright {
          writing-mode: vertical-rl;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero10-word-1,
          .hero10-word-2,
          .hero10-word-3,
          .hero10-sub,
          .hero10-cta {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section className={`bg-white min-h-screen relative flex flex-col justify-center ${bodyFont}`}>
        <div className={`px-8 sm:px-12 md:px-20 lg:px-28 py-20 md:py-16 ${isAr ? "text-right" : "text-left"}`}>
          {/* Massive heading */}
          <div className={`${headingFont}`}>
            {/* Line 1 */}
            <div className="hero10-word-1">
              <span className="block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.9] tracking-tight text-gray-900">
                {t.line1}
              </span>
            </div>

            {/* Line 2 */}
            <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 flex-wrap">
              <span className="hero10-word-2 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.9] tracking-tight hero10-outlined">
                {t.line2word1}
              </span>
              <span className="hero10-word-3 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.9] tracking-tight text-gray-900">
                {t.line2word2}
              </span>
            </div>
          </div>

          {/* Subheading */}
          <p className="hero10-sub mt-12 md:mt-16 text-sm text-gray-400 max-w-md">
            {t.sub}
          </p>

          {/* Circle CTA button */}
          <div className="hero10-cta mt-8">
            <button
              className="cursor-pointer w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-transparent transition-all duration-300 hover:bg-gray-900 hover:border-gray-900 group"
              aria-label={isAr ? "المزيد" : "Learn more"}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className={`text-gray-900 group-hover:text-white transition-all duration-300 ${isAr ? "rotate-180" : ""}`}
              >
                <path
                  d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Copyright - bottom right, vertical */}
        <div className={`absolute bottom-8 ${isAr ? "left-6 sm:left-8" : "right-6 sm:right-8"}`}>
          <span className="hero10-copyright text-xs text-gray-300 tracking-wide font-[family-name:var(--font-inter)]">
            {t.copyright}
          </span>
        </div>
      </section>
    </>
  );
}
