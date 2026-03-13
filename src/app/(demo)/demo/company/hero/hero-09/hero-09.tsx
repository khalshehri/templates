"use client";

interface Hero09Props {
  language: "en" | "ar";
}

const logos = ["ARAMCO", "STC", "SABIC", "NEOM", "ACWA", "stc pay"];

const content = {
  en: {
    heading: "Trusted by the region's most important organizations",
    body: "For over two decades, we've provided strategic advisory, operational consulting, and technology solutions to enterprises that define the Middle East's economic landscape.",
    cta: "Learn more about our approach →",
    badges: "A+ Credit Rating · ISO 27001 · SOC 2 Certified",
  },
  ar: {
    heading: "موثوق من أهم مؤسسات المنطقة",
    body: "لأكثر من عقدين، قدمنا الاستشارات الاستراتيجية والتشغيلية والحلول التقنية للمؤسسات التي تحدد المشهد الاقتصادي في الشرق الأوسط.",
    cta: "اعرف المزيد عن نهجنا ←",
    badges: "تصنيف ائتماني +A · ISO 27001 · SOC 2",
  },
};

export function Hero09({ language }: Hero09Props) {
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
        @keyframes hero09FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero09-logos {
          opacity: 0;
          animation: hero09FadeIn 0.6s ease-out 0.3s forwards;
        }
        .hero09-heading {
          opacity: 0;
          animation: hero09FadeIn 0.6s ease-out 0.5s forwards;
        }
        .hero09-body {
          opacity: 0;
          animation: hero09FadeIn 0.6s ease-out 0.7s forwards;
        }
        .hero09-cta {
          opacity: 0;
          animation: hero09FadeIn 0.6s ease-out 0.9s forwards;
        }
        .hero09-badges {
          opacity: 0;
          animation: hero09FadeIn 0.6s ease-out 1.1s forwards;
        }
        .hero09-underline {
          position: relative;
          display: inline-block;
        }
        .hero09-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: #6b7280;
          transition: width 0.3s ease;
        }
        .hero09-underline:hover::after {
          width: 100%;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero09-logos,
          .hero09-heading,
          .hero09-body,
          .hero09-cta,
          .hero09-badges {
            animation: none;
            opacity: 1;
          }
          .hero09-underline::after {
            transition: none;
          }
        }
      `}</style>

      <section className={`bg-white min-h-screen ${bodyFont}`}>
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 lg:py-36">
          {/* Logo row */}
          <div className="hero09-logos flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-gray-300 text-xs sm:text-sm font-semibold tracking-widest uppercase select-none font-[family-name:var(--font-inter)]"
              >
                {logo}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="hero09-heading mt-10 mb-10 border-t border-gray-100" />

          {/* Heading */}
          <h1
            className={`hero09-heading text-center text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight tracking-tight ${headingFont}`}
          >
            {t.heading}
          </h1>

          {/* Body */}
          <p className="hero09-body mt-6 text-center text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            {t.body}
          </p>

          {/* CTA link */}
          <div className="hero09-cta mt-10 text-center">
            <a
              href="#"
              className="hero09-underline cursor-pointer text-gray-500 text-base transition-all duration-300 hover:text-gray-900"
            >
              {t.cta}
            </a>
          </div>

          {/* Badges */}
          <div className="hero09-badges mt-16 md:mt-24 text-center">
            <p className="text-xs text-gray-300 tracking-wide">
              {t.badges}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
