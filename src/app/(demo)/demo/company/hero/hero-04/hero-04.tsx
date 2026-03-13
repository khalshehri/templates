"use client";

interface Hero04Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "We don't follow\nmarkets. We\nshape them.",
    body: "A different kind of firm for organizations that refuse to stand still.",
    marquee:
      "STRATEGY \u00b7 OPERATIONS \u00b7 DIGITAL \u00b7 GROWTH \u00b7 ADVISORY \u00b7 INNOVATION \u00b7 CAPITAL \u00b7 VENTURES",
    cta: "Start a conversation \u2192",
  },
  ar: {
    heading: "لا نتبع\nالأسواق.\nبل نصنعها.",
    body: "شركة مختلفة للمؤسسات التي ترفض الجمود.",
    marquee:
      "استراتيجية \u00b7 عمليات \u00b7 رقمنة \u00b7 نمو \u00b7 استشارات \u00b7 ابتكار \u00b7 رأس مال \u00b7 استثمارات",
    cta: "ابدأ محادثة \u2190",
  },
};

export function Hero04({ language }: Hero04Props) {
  const t = content[language];
  const isAr = language === "ar";

  const marqueeText = `${t.marquee} \u00a0\u00a0\u00a0 ${t.marquee} \u00a0\u00a0\u00a0 `;

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <style>{`
        @keyframes hero04MarqueeLtr {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes hero04MarqueeRtl {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(50%);
          }
        }

        @keyframes hero04FadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .hero04-marquee-ltr {
          animation: hero04MarqueeLtr 25s linear infinite;
        }

        .hero04-marquee-rtl {
          animation: hero04MarqueeRtl 25s linear infinite;
        }

        .hero04-fadein {
          animation: hero04FadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .hero04-delay-1 { animation-delay: 0.1s; }
        .hero04-delay-2 { animation-delay: 0.3s; }
        .hero04-delay-3 { animation-delay: 0.5s; }

        .hero04-cta {
          position: relative;
          display: inline-block;
        }

        .hero04-cta::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #9ca3af;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [dir="rtl"] .hero04-cta::after {
          left: auto;
          right: 0;
        }

        .hero04-cta:hover::after {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero04-marquee-ltr,
          .hero04-marquee-rtl {
            animation: none;
          }
          .hero04-fadein {
            animation: none;
            opacity: 1;
          }
          .hero04-cta::after {
            transition: none;
          }
        }
      `}</style>

      {/* TOP BAND — Heading + Body */}
      <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12 md:pb-16">
        <h1
          className={`hero04-fadein hero04-delay-1 text-5xl md:text-6xl lg:text-7xl font-bold text-white whitespace-pre-line leading-[1.05] mb-6 ${
            isAr
              ? "font-[family-name:var(--font-changa)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
        >
          {t.heading}
        </h1>

        <p
          className={`hero04-fadein hero04-delay-2 text-gray-500 text-lg max-w-lg ${
            isAr
              ? "font-[family-name:var(--font-tajawal)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
        >
          {t.body}
        </p>
      </div>

      {/* MIDDLE BAND — Marquee Ticker */}
      <div
        className="hero04-fadein hero04-delay-2 border-y py-5 overflow-hidden whitespace-nowrap"
        style={{
          backgroundColor: "#111",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div
          className={`inline-block ${
            isAr ? "hero04-marquee-rtl" : "hero04-marquee-ltr"
          }`}
        >
          <span
            className={`text-sm tracking-[0.3em] text-gray-600 uppercase font-bold ${
              isAr
                ? "font-[family-name:var(--font-tajawal)]"
                : "font-[family-name:var(--font-inter)]"
            }`}
          >
            {marqueeText}
          </span>
        </div>
      </div>

      {/* BOTTOM BAND — CTA */}
      <div
        className={`hero04-fadein hero04-delay-3 flex px-6 md:px-12 lg:px-20 py-10 md:py-14 ${
          isAr ? "justify-start" : "justify-end"
        }`}
      >
        <a
          href="#"
          className={`hero04-cta text-gray-400 hover:text-white text-sm tracking-wide cursor-pointer transition-all duration-300 ${
            isAr
              ? "font-[family-name:var(--font-tajawal)]"
              : "font-[family-name:var(--font-inter)]"
          }`}
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
