"use client";

interface Hero04Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Precision at every level of the organization",
    metric: "47",
    metricLabel: "Countries with active operations",
    body: "From boardroom strategy to operational execution, we deliver measurable outcomes that compound over time.",
    cta: "See case studies →",
  },
  ar: {
    heading: "دقة في كل مستوى من مستويات المؤسسة",
    metric: "٤٧",
    metricLabel: "دولة بعمليات نشطة",
    body: "من استراتيجية مجلس الإدارة إلى التنفيذ التشغيلي، نقدم نتائج قابلة للقياس تتراكم بمرور الوقت.",
    cta: "اطّلع على دراسات الحالة ←",
  },
};

export function Hero04({ language }: Hero04Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero04FadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero04-cell {
          animation: hero04FadeIn 0.6s ease-out both;
        }
        .hero04-cell-d1 { animation-delay: 0.1s; }
        .hero04-cell-d2 { animation-delay: 0.2s; }
        .hero04-cell-d3 { animation-delay: 0.3s; }
        .hero04-cell-d4 { animation-delay: 0.4s; }
        .hero04-cell-d5 { animation-delay: 0.5s; }
        @media (prefers-reduced-motion: reduce) {
          .hero04-cell {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section
        className={`bg-white min-h-screen ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-0">
            {/* Row 1: Heading (spans 2 cols) + Metric */}
            <div className="hero04-cell col-span-2 border border-gray-200 p-8 lg:p-10 flex items-end">
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] text-[#1a1a1a] ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.heading}
              </h1>
            </div>

            <div className="hero04-cell hero04-cell-d1 border border-gray-200 border-s-0 p-8 lg:p-10 flex flex-col justify-center">
              <span
                className={`text-6xl lg:text-7xl font-light text-[#1a1a1a] leading-none mb-3 ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.metric}
              </span>
              <span
                className={`text-sm text-gray-400 leading-snug ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.metricLabel}
              </span>
            </div>

            {/* Row 2: Photo + Body/CTA + Accent */}
            <div className="hero04-cell hero04-cell-d2 border border-gray-200 border-t-0 p-0 overflow-hidden">
              <div
                className="w-full h-full min-h-[240px]"
                style={{
                  background: "linear-gradient(135deg, #e5ddd4 0%, #d4ccc3 100%)",
                }}
              />
            </div>

            <div className="hero04-cell hero04-cell-d3 border border-gray-200 border-t-0 border-s-0 p-8 lg:p-10 flex flex-col justify-center">
              <p
                className={`text-sm md:text-base text-gray-500 leading-relaxed mb-8 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.body}
              </p>
              <a
                href="#"
                className={`text-[#1a1a1a] text-sm underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all duration-300 cursor-pointer w-fit ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.cta}
              </a>
            </div>

            <div className="hero04-cell hero04-cell-d4 border border-gray-200 border-t-0 border-s-0 p-8 lg:p-10 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#2563eb]" />
            </div>
          </div>

          {/* Mobile: stacked single column */}
          <div className="md:hidden flex flex-col gap-0">
            <div className="hero04-cell border border-gray-200 p-8">
              <h1
                className={`text-3xl font-medium leading-[1.15] text-[#1a1a1a] ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.heading}
              </h1>
            </div>

            <div className="hero04-cell hero04-cell-d1 border border-gray-200 border-t-0 p-8 flex items-center gap-6">
              <span
                className={`text-5xl font-light text-[#1a1a1a] leading-none ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.metric}
              </span>
              <span
                className={`text-sm text-gray-400 leading-snug ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.metricLabel}
              </span>
            </div>

            <div className="hero04-cell hero04-cell-d2 border border-gray-200 border-t-0 overflow-hidden">
              <div
                className="w-full aspect-[16/9]"
                style={{
                  background: "linear-gradient(135deg, #e5ddd4 0%, #d4ccc3 100%)",
                }}
              />
            </div>

            <div className="hero04-cell hero04-cell-d3 border border-gray-200 border-t-0 p-8">
              <p
                className={`text-sm text-gray-500 leading-relaxed mb-6 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.body}
              </p>
              <a
                href="#"
                className={`text-[#1a1a1a] text-sm underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all duration-300 cursor-pointer ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
              >
                {t.cta}
              </a>
            </div>

            <div className="hero04-cell hero04-cell-d4 border border-gray-200 border-t-0 p-6 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#2563eb]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
