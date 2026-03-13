"use client";

interface Hero01Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "ENTERPRISE SOLUTIONS",
    heading: "Strategy that moves organizations forward",
    sub: "We partner with leadership teams to navigate complexity, unlock growth, and build lasting competitive advantage.",
    cta: "Explore our work →",
    caption: "Global headquarters, Riyadh",
    logos: ["ARAMCO", "STC", "SABIC", "NEOM"],
  },
  ar: {
    eyebrow: "حلول المؤسسات",
    heading: "استراتيجية تدفع المؤسسات إلى الأمام",
    sub: "نتشارك مع فرق القيادة للتعامل مع التعقيدات وإطلاق النمو وبناء ميزة تنافسية دائمة.",
    cta: "استكشف أعمالنا ←",
    caption: "المقر الرئيسي، الرياض",
    logos: ["أرامكو", "STC", "سابك", "نيوم"],
  },
};

export function Hero01({ language }: Hero01Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero01FadeUp {
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
          animation: hero01FadeUp 0.8s ease-out both;
        }
        .hero01-animate-delay-1 {
          animation-delay: 0.1s;
        }
        .hero01-animate-delay-2 {
          animation-delay: 0.2s;
        }
        .hero01-animate-delay-3 {
          animation-delay: 0.3s;
        }
        .hero01-animate-delay-4 {
          animation-delay: 0.5s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero01-animate {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section
        className={`bg-[#fafaf9] min-h-screen ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24">
          {/* Main split */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-0">
            {/* Left — Text content (55%) */}
            <div className="md:w-[55%] flex flex-col justify-center md:pe-12 lg:pe-16">
              <p
                className={`hero01-animate text-xs tracking-[0.2em] text-gray-400 uppercase mb-6 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.eyebrow}
              </p>

              <h1
                className={`hero01-animate hero01-animate-delay-1 text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#1a1a1a] mb-6 ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.heading}
              </h1>

              <p
                className={`hero01-animate hero01-animate-delay-2 text-base md:text-lg text-gray-500 leading-relaxed max-w-md mb-10 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.sub}
              </p>

              <a
                href="#"
                className="hero01-animate hero01-animate-delay-3 text-[#1a1a1a] text-sm underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all duration-300 cursor-pointer inline-block w-fit"
              >
                {t.cta}
              </a>
            </div>

            {/* Divider */}
            <div className="block md:hidden w-full h-px bg-gray-200 my-2" />
            <div className="hidden md:block w-px bg-gray-200 shrink-0" />

            {/* Right — Photo placeholder (45%) */}
            <div className="md:w-[45%] md:ps-12 lg:ps-16 hero01-animate hero01-animate-delay-2">
              <div
                className="w-full aspect-[3/4] rounded-none"
                style={{
                  background: "linear-gradient(160deg, #d4c8be 0%, #e8e0d8 100%)",
                }}
              />
              <p
                className={`text-xs text-gray-400 mt-3 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.caption}
              </p>
            </div>
          </div>

          {/* Trust logos */}
          <div className="hero01-animate hero01-animate-delay-4 mt-20 md:mt-28 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-10 md:gap-16 flex-wrap">
              {t.logos.map((logo) => (
                <span
                  key={logo}
                  className={`text-[11px] tracking-[0.15em] text-gray-300 uppercase ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
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
