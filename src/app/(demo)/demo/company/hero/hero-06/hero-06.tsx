"use client";

interface Hero06Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "We don't follow markets. We shape them.",
    marquee:
      "STRATEGY · OPERATIONS · GROWTH · DIGITAL · ADVISORY · CAPITAL · INNOVATION · VENTURES",
    sub: "A different kind of consultancy for organizations that refuse to stand still.",
    cta: "Talk to our team →",
  },
  ar: {
    heading: "لا نتبع الأسواق. بل نصنعها.",
    marquee:
      "استراتيجية · عمليات · نمو · رقمنة · استشارات · رأس مال · ابتكار · استثمارات",
    sub: "شركة استشارية مختلفة للمؤسسات التي ترفض الجمود.",
    cta: "تحدث مع فريقنا ←",
  },
};

export function Hero06({ language }: Hero06Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  const marqueeDirection = isAr ? "hero06MarqueeRtl" : "hero06MarqueeLtr";

  return (
    <>
      <style>{`
        @keyframes hero06MarqueeLtr {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes hero06MarqueeRtl {
          from { transform: translateX(0); }
          to { transform: translateX(50%); }
        }
        @keyframes hero06FadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero06-heading {
          animation: hero06FadeIn 0.8s ease-out both;
        }
        .hero06-marquee-inner {
          animation: ${marqueeDirection} 25s linear infinite;
        }
        .hero06-bottom {
          animation: hero06FadeIn 0.7s ease-out 0.4s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero06-heading,
          .hero06-bottom {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero06-marquee-inner {
            animation: none;
          }
        }
      `}</style>

      <section
        className={`min-h-screen flex flex-col ${fontBody}`}
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* TOP: Heading */}
        <div
          className={`hero06-heading flex-none pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 px-6 md:px-12 lg:px-20 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl ${fontHeading}`}
          >
            {t.heading}
          </h1>
        </div>

        {/* MIDDLE: Marquee strip */}
        <div
          className="flex-none border-y overflow-hidden py-5 md:py-6"
          style={{
            backgroundColor: "#111",
            borderColor: "rgba(255,255,255,0.05)",
          }}
        >
          <div className="hero06-marquee-inner flex whitespace-nowrap w-max">
            <span
              className={`text-sm md:text-base tracking-[0.15em] font-bold uppercase text-gray-500 ${
                isAr ? "px-4" : "px-4"
              }`}
            >
              {t.marquee}
            </span>
            <span
              className="text-sm md:text-base tracking-[0.15em] font-bold uppercase text-gray-500 px-4"
            >
              {t.marquee}
            </span>
            <span
              className="text-sm md:text-base tracking-[0.15em] font-bold uppercase text-gray-500 px-4"
            >
              {t.marquee}
            </span>
            <span
              className="text-sm md:text-base tracking-[0.15em] font-bold uppercase text-gray-500 px-4"
            >
              {t.marquee}
            </span>
          </div>
        </div>

        {/* BOTTOM: Sub + CTA */}
        <div
          className={`hero06-bottom flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20 ${
            isAr ? "text-left items-start" : "text-right items-end"
          }`}
        >
          <p className="text-gray-500 text-base md:text-lg max-w-md mb-8 leading-relaxed">
            {t.sub}
          </p>
          <button
            className="cursor-pointer text-white text-sm md:text-base font-medium border-b border-white/30 pb-1 transition-all duration-300 hover:border-white hover:tracking-wide bg-transparent"
          >
            {t.cta}
          </button>
        </div>
      </section>
    </>
  );
}
