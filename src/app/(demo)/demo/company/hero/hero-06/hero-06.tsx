"use client";

interface Hero06Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Precision at every level of the organization",
    category: "ENTERPRISE CONSULTING",
    metric: "47",
    metricLabel: "Countries with active operations",
    body: "From boardroom strategy to operational execution, we deliver measurable outcomes that compound over time.",
    cta: "See case studies \u2192",
  },
  ar: {
    heading: "دقة في كل مستوى من مستويات المؤسسة",
    category: "استشارات المؤسسات",
    metric: "٤٧",
    metricLabel: "دولة بعمليات نشطة",
    body: "من استراتيجية مجلس الإدارة إلى التنفيذ التشغيلي، نقدم نتائج قابلة للقياس تتراكم مع الوقت.",
    cta: "اطّلع على دراسات الحالة \u2190",
  },
};

export function Hero06({ language }: Hero06Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section className="relative min-h-screen bg-white">
      <style>{`
        @keyframes hero06CellIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero06-cell-0 { animation: hero06CellIn 0.6s ease-out both; animation-delay: 0.1s; }
        .hero06-cell-1 { animation: hero06CellIn 0.6s ease-out both; animation-delay: 0.2s; }
        .hero06-cell-2 { animation: hero06CellIn 0.6s ease-out both; animation-delay: 0.3s; }
        .hero06-cell-3 { animation: hero06CellIn 0.6s ease-out both; animation-delay: 0.4s; }
        @media (prefers-reduced-motion: reduce) {
          .hero06-cell-0,
          .hero06-cell-1,
          .hero06-cell-2,
          .hero06-cell-3 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="px-4 py-12 md:py-0 md:px-0 md:min-h-screen md:flex md:items-center">
        {/* Mobile: Stacked layout */}
        <div className="block md:hidden space-y-0">
          {/* Heading Cell */}
          <div className="hero06-cell-0 border border-gray-200 p-8">
            <h1
              className={`text-3xl font-medium text-gray-900 leading-tight ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>
            <p
              className={`text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-4 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.category}
            </p>
          </div>

          {/* Metric Cell */}
          <div className="hero06-cell-1 border border-gray-200 border-t-0 p-8 relative">
            <div
              className={`text-6xl font-extralight text-gray-900 ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.metric}
            </div>
            <p
              className={`text-sm text-gray-500 mt-2 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.metricLabel}
            </p>
            <div
              className={`absolute top-4 w-4 h-4 bg-blue-600 ${
                isAr ? "left-4" : "right-4"
              }`}
            />
          </div>

          {/* Photo Cell */}
          <div
            className="hero06-cell-2 border border-gray-200 border-t-0 h-48"
            style={{
              background: "linear-gradient(135deg, #e8ddd3, #d4c5b5)",
            }}
          />

          {/* Body + CTA Cell */}
          <div className="hero06-cell-3 border border-gray-200 border-t-0 p-8">
            <p
              className={`text-gray-500 text-base leading-relaxed mb-6 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>
            <a
              href="#"
              className={`text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-all duration-300 cursor-pointer text-base ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.cta}
            </a>
          </div>
        </div>

        {/* Desktop: CSS Grid */}
        <div
          className="hidden md:grid w-full max-w-6xl mx-auto"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* Heading Cell — top-left, spans 2 cols */}
          <div
            className="hero06-cell-0 border border-gray-200 p-8 lg:p-10 flex flex-col justify-end"
            style={{ gridColumn: "1 / 3", gridRow: "1 / 2", minHeight: "280px" }}
          >
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.heading}
            </h1>
            <p
              className={`text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-4 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.category}
            </p>
          </div>

          {/* Metric Cell — top-right */}
          <div
            className={`hero06-cell-1 border border-gray-200 p-8 lg:p-10 flex flex-col justify-center relative ${
              isAr ? "border-r-0" : "border-l-0"
            }`}
            style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
          >
            <div
              className={`text-6xl md:text-7xl font-extralight text-gray-900 ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.metric}
            </div>
            <p
              className={`text-sm text-gray-500 mt-3 ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.metricLabel}
            </p>
            <div
              className={`absolute top-5 w-4 h-4 bg-blue-600 ${
                isAr ? "left-5" : "right-5"
              }`}
            />
          </div>

          {/* Photo Cell — bottom-left */}
          <div
            className="hero06-cell-2 border border-gray-200 border-t-0"
            style={{
              gridColumn: "1 / 2",
              gridRow: "2 / 3",
              background: "linear-gradient(135deg, #e8ddd3, #d4c5b5)",
              minHeight: "240px",
            }}
          />

          {/* Body + CTA Cell — bottom-right, spans 2 cols */}
          <div
            className={`hero06-cell-3 border border-gray-200 border-t-0 p-8 lg:p-10 flex flex-col justify-center ${
              isAr ? "border-r-0" : "border-l-0"
            }`}
            style={{ gridColumn: "2 / 4", gridRow: "2 / 3" }}
          >
            <p
              className={`text-gray-500 text-base leading-relaxed mb-6 max-w-lg ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
            >
              {t.body}
            </p>
            <a
              href="#"
              className={`text-gray-900 underline underline-offset-4 hover:text-blue-600 transition-all duration-300 cursor-pointer text-base inline-block ${
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
