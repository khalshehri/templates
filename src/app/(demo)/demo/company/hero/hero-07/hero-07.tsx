"use client";

interface Hero07Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Precision at every level\nof the organization",
    label: "ENTERPRISE CONSULTING",
    metric: "47",
    metricLabel: "Countries with active operations",
    body: "From boardroom strategy to operational execution, we deliver measurable outcomes that compound over time.",
    cta: "See case studies →",
  },
  ar: {
    heading: "دقة في كل مستوى\nمن مستويات المؤسسة",
    label: "استشارات المؤسسات",
    metric: "٤٧",
    metricLabel: "دولة بعمليات نشطة",
    body: "من استراتيجية مجلس الإدارة إلى التنفيذ التشغيلي، نقدم نتائج قابلة للقياس تتراكم مع الوقت.",
    cta: "اطّلع على دراسات الحالة ←",
  },
};

export function Hero07({ language }: Hero07Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes hero07CellIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero07-cell-0 {
          animation: hero07CellIn 0.5s ease-out 0s forwards;
          opacity: 0;
        }
        .hero07-cell-1 {
          animation: hero07CellIn 0.5s ease-out 0.1s forwards;
          opacity: 0;
        }
        .hero07-cell-2 {
          animation: hero07CellIn 0.5s ease-out 0.2s forwards;
          opacity: 0;
        }
        .hero07-cell-3 {
          animation: hero07CellIn 0.5s ease-out 0.3s forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero07-cell-0,
          .hero07-cell-1,
          .hero07-cell-2,
          .hero07-cell-3 {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2">
          {/* Heading cell — top-left, spans 2 cols */}
          <div className="hero07-cell-0 col-span-2 border border-gray-200 p-8 md:p-10 flex flex-col justify-end">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 whitespace-pre-line ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>
            <p
              className={`text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-6 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.label}
            </p>
          </div>

          {/* Metric cell — top-right, 1 col */}
          <div className="hero07-cell-1 col-span-1 border border-gray-200 p-8 md:p-10 relative">
            <div
              className="absolute top-4 bg-blue-600"
              style={{
                width: 16,
                height: 16,
                ...(isAr ? { left: 16 } : { right: 16 }),
              }}
            />
            <div className="flex flex-col justify-center h-full">
              <span
                className={`text-6xl md:text-7xl font-extralight text-gray-900 ${
                  isAr
                    ? "font-[family-name:var(--font-changa)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.metric}
              </span>
              <span
                className={`text-sm text-gray-500 mt-2 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.metricLabel}
              </span>
            </div>
          </div>

          {/* Photo cell — bottom-left, 1 col */}
          <div
            className="hero07-cell-2 col-span-1 border border-gray-200 min-h-[200px]"
            style={{
              background: "linear-gradient(135deg, #e8ddd3, #d4c5b5)",
            }}
          />

          {/* Body + CTA cell — bottom-right, spans 2 cols */}
          <div className="hero07-cell-3 col-span-2 border border-gray-200 p-8 md:p-10 flex flex-col justify-center">
            <p
              className={`text-gray-500 text-base leading-relaxed max-w-lg ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>
            <a
              className={`inline-block mt-6 text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 cursor-pointer transition-all duration-300 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.cta}
            </a>
          </div>
        </div>

        {/* Mobile stack */}
        <div className="md:hidden flex flex-col">
          {/* Heading cell */}
          <div className="hero07-cell-0 border border-gray-200 p-8 flex flex-col justify-end">
            <h1
              className={`text-3xl font-medium text-gray-900 whitespace-pre-line ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>
            <p
              className={`text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-6 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.label}
            </p>
          </div>

          {/* Metric cell */}
          <div className="hero07-cell-1 border border-gray-200 p-8 relative">
            <div
              className="absolute top-4 bg-blue-600"
              style={{
                width: 16,
                height: 16,
                ...(isAr ? { left: 16 } : { right: 16 }),
              }}
            />
            <span
              className={`text-6xl font-extralight text-gray-900 ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.metric}
            </span>
            <span
              className={`block text-sm text-gray-500 mt-2 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.metricLabel}
            </span>
          </div>

          {/* Photo cell */}
          <div
            className="hero07-cell-2 border border-gray-200 min-h-[200px]"
            style={{
              background: "linear-gradient(135deg, #e8ddd3, #d4c5b5)",
            }}
          />

          {/* Body + CTA cell */}
          <div className="hero07-cell-3 border border-gray-200 p-8 flex flex-col justify-center">
            <p
              className={`text-gray-500 text-base leading-relaxed ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>
            <a
              className={`inline-block mt-6 text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 cursor-pointer transition-all duration-300 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
