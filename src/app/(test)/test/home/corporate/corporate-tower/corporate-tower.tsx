"use client";

import { ArrowRight, Shield, Award, Users, Building2 } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Enterprise Solutions",
    heading: "Building Trust,",
    headingLine2: "Delivering Results.",
    subheading:
      "We partner with leading organizations to drive growth, streamline operations, and deliver measurable outcomes.",
    ctaPrimary: "Schedule Consultation",
    ctaSecondary: "Our Services",
    stats: [
      { value: "25+", label: "Years of Experience" },
      { value: "500+", label: "Enterprise Clients" },
      { value: "98%", label: "Client Retention" },
    ],
    trustedBy: "Trusted by industry leaders",
  },
  ar: {
    badge: "حلول المؤسسات",
    heading: "نبني الثقة،",
    headingLine2: "نحقق النتائج.",
    subheading:
      "نتشارك مع المؤسسات الرائدة لدفع النمو وتبسيط العمليات وتحقيق نتائج ملموسة.",
    ctaPrimary: "حجز استشارة",
    ctaSecondary: "خدماتنا",
    stats: [
      { value: "+25", label: "عاماً من الخبرة" },
      { value: "+500", label: "عميل مؤسسي" },
      { value: "98%", label: "معدل الاحتفاظ" },
    ],
    trustedBy: "موثوق من قبل رواد الصناعة",
  },
};

export function CorporateTower({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes towerRise {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .tower-rise { animation: towerRise 1s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: bottom; }
        .fade-up { animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${isAr ? "direction-rtl" : ""}`}>
            {/* Text side */}
            <div className={isAr ? "lg:order-2 text-right" : ""}>
              {/* Badge */}
              <div
                className={`fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-50 text-blue-700 text-sm font-medium mb-8 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                <Shield size={14} />
                {t.badge}
              </div>

              {/* Heading */}
              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
                style={{ animationDelay: "0.2s" }}
              >
                {t.heading}
                <br />
                <span className="text-blue-600">{t.headingLine2}</span>
              </h1>

              {/* Accent line */}
              <div
                className="h-1 w-20 bg-blue-600 mt-6 rounded-full origin-left"
                style={{ animation: "lineGrow 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both" }}
              />

              {/* Subheading */}
              <p
                className="fade-up mt-6 text-lg text-gray-500 leading-relaxed max-w-md"
                style={{ animationDelay: "0.4s" }}
              >
                {t.subheading}
              </p>

              {/* CTAs */}
              <div
                className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  {t.ctaPrimary}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:border-gray-400 transition-all"
                >
                  {t.ctaSecondary}
                </a>
              </div>

              {/* Stats */}
              <div
                className={`fade-up mt-12 flex gap-8 pt-8 border-t border-gray-100 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.6s" }}
              >
                {t.stats.map((stat, i) => (
                  <div key={i} className={isAr ? "text-right" : ""}>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tower illustration side */}
            <div className={`relative flex items-end justify-center h-[500px] ${isAr ? "lg:order-1" : ""}`}>
              {/* Buildings */}
              <div className="flex items-end gap-3">
                {/* Building 1 — short */}
                <div className="tower-rise flex flex-col items-center" style={{ animationDelay: "0.3s" }}>
                  <div className="w-16 sm:w-20 h-48 bg-gradient-to-t from-blue-100 to-blue-50 rounded-t-md relative">
                    <div className="absolute inset-2 grid grid-cols-2 gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-blue-200/60 rounded-sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Building 2 — tall main */}
                <div className="tower-rise flex flex-col items-center" style={{ animationDelay: "0.5s" }}>
                  <div className="w-24 sm:w-32 h-80 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-lg relative shadow-xl">
                    {/* Antenna */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-blue-400 rounded-full" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-300 rounded-full" />
                    {/* Windows */}
                    <div className="absolute inset-3 grid grid-cols-3 gap-1.5">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-sm"
                          style={{
                            backgroundColor: i % 5 === 0 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Building 3 — medium */}
                <div className="tower-rise flex flex-col items-center" style={{ animationDelay: "0.4s" }}>
                  <div className="w-20 sm:w-24 h-60 bg-gradient-to-t from-gray-200 to-gray-100 rounded-t-md relative">
                    <div className="absolute inset-2 grid grid-cols-2 gap-1.5">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="bg-gray-300/60 rounded-sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Building 4 — short wide */}
                <div className="tower-rise flex flex-col items-center" style={{ animationDelay: "0.6s" }}>
                  <div className="w-14 sm:w-16 h-36 bg-gradient-to-t from-blue-200 to-blue-100 rounded-t-sm relative">
                    <div className="absolute inset-2 grid grid-cols-2 gap-1">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-blue-300/50 rounded-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ground line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />

              {/* Floating icons */}
              <div className="absolute top-8 right-4 fade-up bg-white shadow-lg rounded-xl p-3 border border-gray-100" style={{ animationDelay: "0.8s" }}>
                <Building2 size={20} className="text-blue-600" />
              </div>
              <div className="absolute top-24 left-4 fade-up bg-white shadow-lg rounded-xl p-3 border border-gray-100" style={{ animationDelay: "0.9s" }}>
                <Award size={20} className="text-blue-600" />
              </div>
              <div className="absolute bottom-16 left-8 fade-up bg-white shadow-lg rounded-xl p-3 border border-gray-100" style={{ animationDelay: "1s" }}>
                <Users size={20} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Trust logos */}
          <div className="fade-up mt-16 text-center" style={{ animationDelay: "0.7s" }}>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">{t.trustedBy}</p>
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-20 h-8 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
