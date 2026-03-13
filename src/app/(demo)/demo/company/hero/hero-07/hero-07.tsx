"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
    cta: "See case studies",
  },
  ar: {
    heading: "دقة في كل مستوى\nمن مستويات المؤسسة",
    label: "استشارات المؤسسات",
    metric: "٤٧",
    metricLabel: "دولة بعمليات نشطة",
    body: "من استراتيجية مجلس الإدارة إلى التنفيذ التشغيلي، نقدم نتائج قابلة للقياس تتراكم مع الوقت.",
    cta: "اطّلع على دراسات الحالة",
  },
};

export function Hero07({ language }: Hero07Props) {
  const [visible, setVisible] = useState(false);
  const t = content[language];
  const isAr = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hero07FadeUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero07LineGrow {
          from {
            width: 0;
          }
          to {
            width: 60px;
          }
        }

        .hero07-cell {
          opacity: 0;
        }

        .hero07-cell.hero07-visible {
          animation: hero07FadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .hero07-cell-0 { animation-delay: 0ms; }
        .hero07-cell-1 { animation-delay: 120ms; }
        .hero07-cell-2 { animation-delay: 240ms; }
        .hero07-cell-3 { animation-delay: 360ms; }

        .hero07-line {
          width: 0;
          height: 2px;
          background: #2563eb;
        }

        .hero07-line.hero07-visible {
          animation: hero07LineGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.5s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero07-cell {
            opacity: 1;
            transform: none;
          }
          .hero07-cell.hero07-visible {
            animation: none;
            opacity: 1;
          }
          .hero07-line {
            width: 60px;
          }
          .hero07-line.hero07-visible {
            animation: none;
            width: 60px;
          }
        }
      `}</style>

      <section
        className={`min-h-screen bg-white flex items-center justify-center px-4 py-16 md:py-24 ${
          isAr
            ? "font-[family-name:var(--font-tajawal)]"
            : "font-[family-name:var(--font-inter)]"
        }`}
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="w-full max-w-6xl mx-auto">
          {/* Desktop grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Row 1, Col 1-2: Heading Cell */}
            <div
              className={`hero07-cell ${visible ? "hero07-visible" : ""} hero07-cell-0 md:col-span-2 border border-gray-200 p-8 md:p-10 flex flex-col justify-between min-h-[240px] md:min-h-[300px] relative`}
            >
              <div>
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 whitespace-pre-line leading-tight ${
                    isAr
                      ? "font-[family-name:var(--font-changa)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {t.heading}
                </h1>
              </div>
              <div className="mt-6">
                <div
                  className={`hero07-line ${visible ? "hero07-visible" : ""} mb-4`}
                />
                <span
                  className={`text-[10px] tracking-[0.2em] text-gray-400 uppercase ${
                    isAr ? "font-[family-name:var(--font-tajawal)]" : ""
                  }`}
                >
                  {t.label}
                </span>
              </div>
            </div>

            {/* Row 1, Col 3: Metric Cell */}
            <div
              className={`hero07-cell ${visible ? "hero07-visible" : ""} hero07-cell-1 border border-gray-200 md:border-l-0 p-8 md:p-10 relative min-h-[200px] md:min-h-[300px] flex flex-col justify-center`}
            >
              {/* Blue square indicator */}
              <div
                className={`absolute top-4 ${
                  isAr ? "left-4" : "right-4"
                } w-4 h-4 bg-blue-600`}
              />
              <div>
                <span
                  className={`text-6xl md:text-7xl font-extralight text-gray-900 block ${
                    isAr
                      ? "font-[family-name:var(--font-changa)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {t.metric}
                </span>
                <p
                  className={`text-sm text-gray-500 mt-2 ${
                    isAr ? "font-[family-name:var(--font-tajawal)]" : ""
                  }`}
                >
                  {t.metricLabel}
                </p>
              </div>
            </div>

            {/* Row 2, Col 1: Photo Cell */}
            <div
              className={`hero07-cell ${visible ? "hero07-visible" : ""} hero07-cell-2 border border-gray-200 md:border-t-0 min-h-[200px] md:min-h-[260px] relative overflow-hidden`}
              style={{
                background:
                  "linear-gradient(135deg, #e8ddd3 0%, #d4c5b5 100%)",
              }}
            >
              {/* Subtle geometric overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-24 h-24 border border-gray-600 rotate-45" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-12 h-px bg-gray-600/30" />
              </div>
            </div>

            {/* Row 2, Col 2-3: Body + CTA Cell */}
            <div
              className={`hero07-cell ${visible ? "hero07-visible" : ""} hero07-cell-3 md:col-span-2 border border-gray-200 md:border-t-0 md:border-l-0 p-8 md:p-10 flex flex-col justify-center min-h-[200px] md:min-h-[260px]`}
            >
              <p
                className={`text-gray-500 text-base leading-relaxed max-w-lg ${
                  isAr ? "font-[family-name:var(--font-tajawal)]" : ""
                }`}
              >
                {t.body}
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className={`text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 text-base font-medium ${
                    isAr ? "font-[family-name:var(--font-tajawal)]" : ""
                  }`}
                >
                  {t.cta}
                  <ArrowRight
                    size={16}
                    className={`${isAr ? "rotate-180" : ""} transition-transform duration-300`}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="flex items-center gap-4 mt-8 md:mt-12">
            <div className="w-2 h-2 bg-blue-600" />
            <div className="flex-1 h-px bg-gray-100" />
            <span
              className={`text-[10px] tracking-[0.15em] text-gray-300 uppercase ${
                isAr ? "font-[family-name:var(--font-tajawal)]" : ""
              }`}
            >
              {isAr ? "مبني على الدقة" : "Built on precision"}
            </span>
            <div className="flex-1 h-px bg-gray-100" />
            <div className="w-2 h-2 bg-blue-600" />
          </div>
        </div>
      </section>
    </>
  );
}
