"use client";

interface Hero02Props {
  language: "en" | "ar";
}

const content = {
  en: {
    category: "ADVISORY & CONSULTING",
    headingBefore: "Where discipline meets\u00A0",
    headingBold: "Ambition",
    body: "Two decades of guiding the region\u2019s most important institutions through transformation. We don\u2019t just advise \u2014 we build.",
    cta: "Start a conversation",
    vertical: "EST. 2003",
  },
  ar: {
    category: "الاستشارات والتوجيه",
    headingBefore: "حيث يلتقي الانضباط بـ",
    headingBold: "الطموح",
    body: "عقدان من توجيه أهم مؤسسات المنطقة خلال التحول. نحن لا نقدم المشورة فحسب \u2014 بل نبني.",
    cta: "ابدأ محادثة",
    vertical: "تأسست ٢٠٠٣",
  },
};

export function Hero02({ language }: Hero02Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero02SlideIn {
          from {
            opacity: 0;
            transform: translateX(${isAr ? "30px" : "-30px"});
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes hero02FadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .hero02-photo {
          animation: hero02SlideIn 1s ease-out both;
        }
        .hero02-fade {
          animation: hero02FadeIn 0.8s ease-out both;
        }
        .hero02-fade-d1 {
          animation-delay: 0.15s;
        }
        .hero02-fade-d2 {
          animation-delay: 0.3s;
        }
        .hero02-fade-d3 {
          animation-delay: 0.45s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero02-photo,
          .hero02-fade {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section
        className={`bg-[#f5f0eb] min-h-screen relative overflow-hidden ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
      >
        {/* Vertical text — right edge on LTR, left edge on RTL */}
        <div
          className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${isAr ? "left-6" : "right-6"} items-center`}
        >
          <span
            className={`text-[11px] tracking-[0.2em] text-gray-400 uppercase whitespace-nowrap ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: isAr ? "rotate(180deg)" : "none",
            }}
          >
            {t.vertical}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 relative">
          {/* Category + Heading row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-16 mb-16 md:mb-24">
            {/* Category label — left side */}
            <div className="md:w-[30%] hero02-fade">
              <p
                className={`text-[11px] tracking-[0.2em] text-gray-400 uppercase md:pt-4 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.category}
              </p>
            </div>

            {/* Heading — pushed right */}
            <div className="md:w-[65%] hero02-fade hero02-fade-d1">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.05] text-[#1a1a1a] ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.headingBefore}
                <span className="font-semibold">{t.headingBold}</span>
              </h1>
            </div>
          </div>

          {/* Bottom area: photo + body */}
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            {/* Photo placeholder — bottom-left, 40% width */}
            <div className="w-full md:w-[40%] hero02-photo">
              <div
                className="w-full aspect-[4/5]"
                style={{
                  background: "linear-gradient(145deg, #c4a882 0%, #8b7355 100%)",
                }}
              />
            </div>

            {/* Body + CTA */}
            <div className="md:w-[45%] md:pt-8 hero02-fade hero02-fade-d2">
              <p
                className={`text-sm md:text-base text-gray-500 leading-relaxed mb-10 max-w-sm ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.body}
              </p>

              <a
                href="#"
                className={`hero02-fade hero02-fade-d3 inline-block px-7 py-3 border border-[#1a1a1a] text-[#1a1a1a] text-sm cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:text-[#f5f0eb] ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.cta}
              </a>
            </div>
          </div>

          {/* Mobile vertical text */}
          <div className="lg:hidden mt-16 flex justify-center">
            <span
              className={`text-[11px] tracking-[0.2em] text-gray-400 uppercase ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
            >
              {t.vertical}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
