"use client";

const content = {
  en: {
    eyebrow: "STRATEGIC ADVISORY",
    heading: "Clarity in complexity,\nprecision in execution",
    body: "We partner with leadership teams across the Middle East to navigate transformation, unlock growth, and build organizations that endure.",
    cta: "Explore our work →",
    caption: "Riyadh, Kingdom of Saudi Arabia",
    logos: ["ARAMCO", "STC", "SABIC", "NEOM"],
  },
  ar: {
    eyebrow: "الاستشارات الاستراتيجية",
    heading: "وضوح في التعقيد،\nدقة في التنفيذ",
    body: "نتشارك مع فرق القيادة في الشرق الأوسط للتعامل مع التحول وإطلاق النمو وبناء مؤسسات تدوم.",
    cta: "استكشف أعمالنا ←",
    caption: "الرياض، المملكة العربية السعودية",
    logos: ["أرامكو", "STC", "سابك", "نيوم"],
  },
};

export function Hero02({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero02-animate {
          opacity: 0;
          animation: heroFadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero02-delay-1 { animation-delay: 0.1s; }
        .hero02-delay-2 { animation-delay: 0.25s; }
        .hero02-delay-3 { animation-delay: 0.4s; }
        .hero02-delay-4 { animation-delay: 0.55s; }
        .hero02-delay-5 { animation-delay: 0.7s; }

        .hero02-cta {
          position: relative;
          display: inline-block;
          text-decoration: none;
        }

        .hero02-cta::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #57534e;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [dir="rtl"] .hero02-cta::after {
          left: auto;
          right: 0;
        }

        .hero02-cta:hover::after {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero02-animate {
            opacity: 1;
            animation: none;
          }

          .hero02-cta::after {
            transition: none;
          }
        }
      `}</style>

      <section
        className="min-h-screen bg-[#faf8f5]"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 lg:pt-36 pb-16">
          <div className="flex flex-col md:flex-row md:items-stretch md:gap-0">
            {/* Left Side — Text (60%) */}
            <div className="md:w-[60%] flex flex-col justify-center pb-12 md:pb-0 md:pr-12 lg:pr-20">
              {/* Eyebrow */}
              <p
                className={`hero02-animate hero02-delay-1 text-[11px] tracking-[0.25em] text-stone-400 uppercase mb-8 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.eyebrow}
              </p>

              {/* Heading */}
              <h1
                className={`hero02-animate hero02-delay-2 text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 leading-[1.08] mb-8 whitespace-pre-line ${
                  isAr
                    ? "font-[family-name:var(--font-changa)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.heading}
              </h1>

              {/* Body */}
              <p
                className={`hero02-animate hero02-delay-3 text-stone-500 text-base leading-relaxed max-w-md mb-10 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.body}
              </p>

              {/* CTA */}
              <div className="hero02-animate hero02-delay-4">
                <a
                  href="#"
                  className={`hero02-cta text-stone-600 text-sm tracking-wide cursor-pointer ${
                    isAr
                      ? "font-[family-name:var(--font-tajawal)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-stone-200/80 self-stretch hero02-animate hero02-delay-3" />
            <hr className="md:hidden border-stone-200/80 mb-10 hero02-animate hero02-delay-3" />

            {/* Right Side — Image (40%) */}
            <div className="md:w-[40%] md:pl-12 lg:pl-20 flex flex-col justify-center">
              <div
                className="hero02-animate hero02-delay-4 aspect-[3/4] w-full rounded-sm"
                style={{
                  background:
                    "linear-gradient(145deg, #d4c5b5 0%, #e8ddd3 50%, #c9b8a4 100%)",
                }}
              />
              <p
                className={`hero02-animate hero02-delay-5 text-[11px] text-stone-400 mt-4 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.caption}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-16">
          <div className="hero02-animate hero02-delay-5 border-t border-stone-200/80 pt-8">
            <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
              {t.logos.map((logo, i) => (
                <span
                  key={i}
                  className={`text-[10px] tracking-[0.2em] text-stone-300 uppercase ${
                    isAr
                      ? "font-[family-name:var(--font-tajawal)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
