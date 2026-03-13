"use client";

interface Hero07Props {
  language: "en" | "ar";
}

const content = {
  en: {
    testimonial:
      "\"Their approach to organizational transformation is unlike anything I've seen in twenty years of consulting. Rigorous, pragmatic, and genuinely focused on outcomes.\"",
    attribution: "Sarah Chen, Chief Strategy Officer, Meridian Group",
    heading: "Built for organizations that demand more",
    sub: "We combine deep industry expertise with operational precision to deliver results that matter.",
    cta: "Learn how we work",
    metrics: [
      "96% client retention",
      "$12B assets managed",
      "18 global offices",
      "2,400 professionals",
    ],
  },
  ar: {
    testimonial:
      "\"نهجهم في التحول المؤسسي لا يشبه أي شيء رأيته في عشرين عاماً من الاستشارات. صارم وعملي ومركّز حقاً على النتائج.\"",
    attribution: "سارة تشن، رئيسة قسم الاستراتيجية، مجموعة ميريديان",
    heading: "صُممت للمؤسسات التي تطالب بالمزيد",
    sub: "نجمع بين الخبرة العميقة في القطاع والدقة التشغيلية لتقديم نتائج ذات أهمية.",
    cta: "اعرف كيف نعمل",
    metrics: [
      "96% نسبة الاحتفاظ بالعملاء",
      "12 مليار$ أصول مُدارة",
      "18 مكتباً حول العالم",
      "2,400 متخصص",
    ],
  },
};

export function Hero07({ language }: Hero07Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <>
      <style>{`
        @keyframes hero07FromLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero07FromRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero07FromLeftRtl {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero07FromRightRtl {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero07FadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero07-back-card {
          animation: ${isAr ? "hero07FromLeftRtl" : "hero07FromLeft"} 0.7s ease-out 0.1s both;
        }
        .hero07-front-card {
          animation: ${isAr ? "hero07FromRightRtl" : "hero07FromRight"} 0.7s ease-out 0.3s both;
        }
        .hero07-metrics {
          animation: hero07FadeUp 0.6s ease-out 0.6s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero07-back-card,
          .hero07-front-card,
          .hero07-metrics {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section
        className={`min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 ${fontBody}`}
        style={{ backgroundColor: "#f3f4f6" }}
      >
        {/* Cards area */}
        <div className="relative w-full max-w-[800px] mx-auto mb-16">
          {/* Mobile: stacked. Desktop: overlapping */}
          <div className="flex flex-col md:block">
            {/* Back card — testimonial */}
            <div
              className={`hero07-back-card bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 md:absolute md:w-[75%] md:top-0 ${
                isAr
                  ? "md:left-0 md:translate-x-[-16px] md:translate-y-[-16px]"
                  : "md:right-0 md:translate-x-[16px] md:translate-y-[-16px]"
              } order-1 md:order-none mb-4 md:mb-0`}
            >
              <p
                className={`text-gray-600 text-base md:text-lg leading-relaxed font-light italic mb-6 ${fontBody}`}
              >
                {t.testimonial}
              </p>
              <p className="text-sm text-gray-400">{t.attribution}</p>
            </div>

            {/* Front card — main content */}
            <div
              className={`hero07-front-card bg-white rounded-2xl shadow-lg p-8 md:p-10 relative z-10 md:w-[70%] order-2 md:order-none ${
                isAr ? "md:mr-auto" : "md:ml-0"
              } md:mt-16`}
            >
              <h1
                className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 ${fontHeading}`}
              >
                {t.heading}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {t.sub}
              </p>
              <button
                className="cursor-pointer text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-md"
                style={{ backgroundColor: "#1d4ed8" }}
              >
                {t.cta}
              </button>
            </div>
          </div>

          {/* Spacer for absolute positioning on desktop */}
          <div className="hidden md:block h-[280px]" />
        </div>

        {/* Metrics row */}
        <div className="hero07-metrics w-full max-w-[800px] mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-4">
            {t.metrics.map((metric, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div className="hidden md:block w-px h-8 bg-gray-300 mx-6" />
                )}
                <span className="text-sm text-gray-500 px-2 text-center">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
