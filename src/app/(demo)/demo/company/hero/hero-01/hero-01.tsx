"use client";

interface Hero01Props {
  language: "en" | "ar";
}

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

export function Hero01({ language }: Hero01Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <style>{`
        @keyframes hero01FadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero01-animate {
          animation: hero01FadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero01-delay-1 { animation-delay: 0.1s; }
        .hero01-delay-2 { animation-delay: 0.25s; }
        .hero01-delay-3 { animation-delay: 0.4s; }
        .hero01-delay-4 { animation-delay: 0.55s; }
        .hero01-delay-5 { animation-delay: 0.7s; }
        .hero01-delay-6 { animation-delay: 0.9s; }

        .hero01-underline {
          position: relative;
          display: inline;
        }

        .hero01-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #78716c;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [dir="rtl"] .hero01-underline::after {
          left: auto;
          right: 0;
        }

        .hero01-underline:hover::after {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero01-animate {
            animation: none;
            opacity: 1;
          }
          .hero01-underline::after {
            transition: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row min-h-screen items-center">
          {/* Left Side — Text */}
          <div className="flex-1 flex flex-col justify-center py-20 md:py-0 md:max-w-[55%]">
            <p
              className={`hero01-animate hero01-delay-1 text-[11px] tracking-[0.25em] text-stone-400 uppercase mb-8 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.eyebrow}
            </p>

            <h1
              className={`hero01-animate hero01-delay-2 text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 leading-[1.08] mb-8 whitespace-pre-line ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>

            <p
              className={`hero01-animate hero01-delay-3 text-stone-500 text-base leading-relaxed max-w-md mb-10 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>

            <div className="hero01-animate hero01-delay-4">
              <a
                href="#"
                className={`hero01-underline text-stone-600 text-sm tracking-wide cursor-pointer transition-all duration-300 hover:text-stone-900 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.cta}
              </a>
            </div>
          </div>

          {/* Vertical Divider — Desktop Only */}
          <div className="hidden md:flex items-center mx-8 lg:mx-12 self-stretch py-24">
            <div className="w-px h-full bg-stone-200/80" />
          </div>

          {/* Horizontal Divider — Mobile Only */}
          <div className="md:hidden w-full flex justify-center mb-8">
            <div className="h-px w-24 bg-stone-200/80" />
          </div>

          {/* Right Side — Image Placeholder */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center pb-16 md:pb-0 md:max-w-[40%]">
            <div
              className="hero01-animate hero01-delay-3 w-full aspect-[3/4] max-w-sm rounded-sm"
              style={{
                background:
                  "linear-gradient(145deg, #d4c5b5 0%, #e8ddd3 50%, #c9b8a4 100%)",
              }}
            />
            <p
              className={`hero01-animate hero01-delay-5 text-[11px] text-stone-400 mt-4 tracking-wide ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.caption}
            </p>
          </div>
        </div>

        {/* Bottom — Client Logos */}
        <div className="hero01-animate hero01-delay-6 border-t border-stone-200/60 py-8 flex justify-center gap-8 md:gap-12">
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
    </section>
  );
}
