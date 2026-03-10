"use client";

/**
 * Service Ribbon Hero
 * Horizontal service category ribbons/strips stacked, each a different color
 * with service name. Heading breaks across ribbons. Bold, graphic feel.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "SERVICES",
    subheading: "Everything your business needs, wrapped up in vibrant color",
    cta: "Explore All Services",
    ribbons: [
      { label: "Consultation", color: "#f97316", textColor: "#fff" },
      { label: "Diagnostics", color: "#fb923c", textColor: "#fff" },
      { label: "Treatment", color: "#fdba74", textColor: "#7c2d12" },
      { label: "Follow-Up Care", color: "#fed7aa", textColor: "#9a3412" },
      { label: "Preventive Health", color: "#fff7ed", textColor: "#c2410c" },
      { label: "Specialist Referral", color: "#fef3c7", textColor: "#92400e" },
      { label: "Emergency Services", color: "#dc2626", textColor: "#fff" },
    ],
    tagline: "7 DEPARTMENTS • 45 SPECIALISTS • 1 GOAL",
  },
  ar: {
    heading: "خدماتنا",
    subheading: "كل ما يحتاجه عملك، ملفوف بألوان نابضة بالحياة",
    cta: "استكشف جميع الخدمات",
    ribbons: [
      { label: "الاستشارات", color: "#f97316", textColor: "#fff" },
      { label: "التشخيص", color: "#fb923c", textColor: "#fff" },
      { label: "العلاج", color: "#fdba74", textColor: "#7c2d12" },
      { label: "المتابعة", color: "#fed7aa", textColor: "#9a3412" },
      { label: "الوقاية الصحية", color: "#fff7ed", textColor: "#c2410c" },
      { label: "إحالة المتخصصين", color: "#fef3c7", textColor: "#92400e" },
      { label: "خدمات الطوارئ", color: "#dc2626", textColor: "#fff" },
    ],
    tagline: "٧ أقسام • ٤٥ متخصص • هدف واحد",
  },
};

export function ServiceRibbon({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes ribbonSlide {
          from { transform: translateX(${isAr ? "-110%" : "110%"}); }
          to { transform: translateX(0); }
        }
        @keyframes ribbonSlideAlt {
          from { transform: translateX(${isAr ? "110%" : "-110%"}); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes headingDrop {
          from { opacity: 0; transform: translateY(-40px) scaleY(1.5); letter-spacing: 0.5em; }
          to { opacity: 1; transform: translateY(0) scaleY(1); letter-spacing: 0.3em; }
        }
        @keyframes ribbonHoverShine {
          from { left: -100%; }
          to { left: 200%; }
        }
        .ribbon-slide { animation: ribbonSlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .ribbon-slide-alt { animation: ribbonSlideAlt 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in { animation: fadeIn 0.8s ease both; }
        .heading-drop { animation: headingDrop 1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .ribbon-strip:hover .ribbon-shine {
          animation: ribbonHoverShine 0.6s ease-out;
        }
      `}</style>

      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#fafaf8" }}
      >
        {/* Background grid dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top section: heading */}
        <div className="relative z-10 text-center pt-20 sm:pt-28 pb-8 px-4">
          <h1
            className="heading-drop text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[0.3em]"
            style={{
              animationDelay: "0.1s",
              background: "linear-gradient(135deg, #f97316, #dc2626)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.heading}
          </h1>
          <p className="fade-in mt-4 text-gray-500 text-sm max-w-md mx-auto" style={{ animationDelay: "0.3s" }}>
            {t.subheading}
          </p>
        </div>

        {/* Ribbon strips */}
        <div className="relative z-10 py-8 space-y-2">
          {t.ribbons.map((ribbon, i) => {
            const isAlt = i % 2 === 1;
            return (
              <div
                key={i}
                className={`ribbon-strip relative cursor-pointer group ${isAlt ? "ribbon-slide-alt" : "ribbon-slide"}`}
                style={{
                  animationDelay: `${0.3 + i * 0.08}s`,
                  background: ribbon.color,
                  transform: isAlt ? `translateX(${isAr ? "-" : ""}3%)` : `translateX(${isAr ? "" : "-"}3%)`,
                }}
              >
                <div
                  className={`max-w-7xl mx-auto px-8 sm:px-16 py-4 sm:py-5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
                >
                  <span
                    className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide"
                    style={{ color: ribbon.textColor }}
                  >
                    {ribbon.label}
                  </span>
                  <ArrowRight
                    size={20}
                    style={{ color: ribbon.textColor, opacity: 0.5 }}
                    className={`transition-all group-hover:opacity-100 group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Hover shine */}
                <div
                  className="ribbon-shine absolute top-0 bottom-0 w-24 pointer-events-none"
                  style={{
                    left: "-100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom section: tagline + CTA */}
        <div className="relative z-10 text-center py-12 px-4">
          <p
            className="fade-in text-xs uppercase tracking-[0.4em] text-gray-400 font-semibold"
            style={{ animationDelay: "0.9s" }}
          >
            {t.tagline}
          </p>

          <div className="fade-in mt-8" style={{ animationDelay: "1s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-2xl transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
              style={{
                background: "linear-gradient(135deg, #f97316, #dc2626)",
                boxShadow: "0 8px 24px rgba(249, 115, 22, 0.3)",
              }}
            >
              {t.cta}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
