"use client";

/**
 * Service Checklist Hero
 * Interactive-looking checklist layout. Each item is a service offered.
 * Heading at top, CTA at bottom. Vertical list structure with warm orange palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Our Services",
    heading: "Everything You Need,",
    headingLine2: "All in One Place",
    subheading: "From routine care to specialized treatments — check off your needs and let us handle the rest.",
    cta: "Get Started",
    services: [
      { label: "General Consultation", checked: true, time: "30 min" },
      { label: "Dental Cleaning", checked: true, time: "45 min" },
      { label: "Eye Examination", checked: false, time: "20 min" },
      { label: "Physical Therapy", checked: false, time: "60 min" },
      { label: "Lab Tests & Diagnostics", checked: true, time: "15 min" },
      { label: "Pediatric Care", checked: false, time: "30 min" },
    ],
    completedLabel: "3 of 6 selected",
    progressLabel: "Your Service Plan",
  },
  ar: {
    badge: "خدماتنا",
    heading: "كل ما تحتاجه،",
    headingLine2: "في مكان واحد",
    subheading: "من الرعاية الروتينية إلى العلاجات المتخصصة — حدد احتياجاتك ودعنا نتولى الباقي.",
    cta: "ابدأ الآن",
    services: [
      { label: "استشارة عامة", checked: true, time: "٣٠ د" },
      { label: "تنظيف الأسنان", checked: true, time: "٤٥ د" },
      { label: "فحص العيون", checked: false, time: "٢٠ د" },
      { label: "العلاج الطبيعي", checked: false, time: "٦٠ د" },
      { label: "تحاليل وتشخيص", checked: true, time: "١٥ د" },
      { label: "رعاية الأطفال", checked: false, time: "٣٠ د" },
    ],
    completedLabel: "٣ من ٦ محددة",
    progressLabel: "خطة خدماتك",
  },
};

export function ServiceChecklist({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes checkPop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes slideInItem {
          from { opacity: 0; transform: translateX(${isAr ? "40px" : "-40px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 50%; }
        }
        @keyframes strikethrough {
          from { width: 0; }
          to { width: 100%; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .slide-in-item { animation: slideInItem 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .check-pop { animation: checkPop 0.4s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #fffbf5 0%, #fff7ed 50%, #fef3c7 100%)" }}
      >
        {/* Background decorative checkmarks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { top: "10%", left: "5%", size: 120, rot: -15 },
            { top: "60%", right: "8%", size: 100, rot: 10 },
            { top: "30%", right: "20%", size: 80, rot: -5 },
          ].map((pos, i) => (
            <svg
              key={i}
              className="absolute opacity-[0.04]"
              style={{ top: pos.top, left: pos.left, right: (pos as { right?: string }).right, width: pos.size, height: pos.size, transform: `rotate(${pos.rot}deg)` }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className={`text-center mb-12`}>
            <div
              className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                animationDelay: "0.1s",
                background: "rgba(249, 115, 22, 0.1)",
                color: "#c2410c",
                border: "1px solid rgba(249, 115, 22, 0.15)",
              }}
            >
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]" style={{ animationDelay: "0.2s" }}>
              <span className="block text-gray-900">{t.heading}</span>
              <span
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.headingLine2}
              </span>
            </h1>

            <p className="fade-up mt-5 text-gray-500 leading-relaxed max-w-lg mx-auto" style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>
          </div>

          {/* Checklist card */}
          <div
            className="fade-up mx-auto max-w-xl rounded-3xl overflow-hidden"
            style={{
              animationDelay: "0.4s",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(249, 115, 22, 0.08), 0 4px 12px rgba(0,0,0,0.04)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            {/* Progress header */}
            <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
              <div className={`flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
                <span className="text-sm font-bold text-gray-800">{t.progressLabel}</span>
                <span className="text-xs text-orange-600 font-semibold">{t.completedLabel}</span>
              </div>
              <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #f97316, #f59e0b)",
                    animation: "progressFill 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both",
                  }}
                />
              </div>
            </div>

            {/* Service items */}
            <div className="px-6 py-4 space-y-2">
              {t.services.map((service, i) => (
                <div
                  key={i}
                  className={`slide-in-item flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all hover:scale-[1.01] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    animationDelay: `${0.5 + i * 0.08}s`,
                    background: service.checked ? "rgba(249, 115, 22, 0.06)" : "transparent",
                    border: `1px solid ${service.checked ? "rgba(249, 115, 22, 0.1)" : "rgba(0,0,0,0.03)"}`,
                  }}
                >
                  {/* Checkbox */}
                  <div
                    className={`check-pop w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${service.checked ? "" : "border-2 border-gray-200"}`}
                    style={{
                      animationDelay: `${0.7 + i * 0.08}s`,
                      background: service.checked ? "linear-gradient(135deg, #f97316, #ea580c)" : "transparent",
                    }}
                  >
                    {service.checked && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>

                  {/* Label */}
                  <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
                    <span className={`text-sm font-semibold relative ${service.checked ? "text-gray-700" : "text-gray-500"}`}>
                      {service.label}
                    </span>
                  </div>

                  {/* Duration */}
                  <span className="text-xs text-gray-400 font-medium">{service.time}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-2">
              <a
                href="#"
                className={`group flex items-center justify-center gap-2 w-full py-4 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
                }}
              >
                {t.cta}
                <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
