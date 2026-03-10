"use client";

/**
 * Resume Mosaic -- Resume Hero Template
 *
 * Photo mosaic grid with career highlights. Each tile represents a career piece.
 * Asymmetric grid with gradient tiles assembling together.
 *
 * @category Resume
 * @palette violet (#7C3AED), indigo (#6366F1), fuchsia (#D946EF), dark (#0A0A14)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Priya Sharma",
    role: "UX Researcher",
    heading: "A Mosaic of Experience",
    subheading:
      "Each piece represents a chapter — research conducted, insights uncovered, products shaped, and users understood.",
    cta: "View Full Picture",
    secondary: "Download CV",
    tiles: [
      { label: "User Research", span: "col-span-2 row-span-2", color: "#7C3AED" },
      { label: "Prototyping", span: "col-span-1 row-span-1", color: "#6366F1" },
      { label: "Data Analysis", span: "col-span-1 row-span-1", color: "#8B5CF6" },
      { label: "Workshops", span: "col-span-1 row-span-2", color: "#A78BFA" },
      { label: "A/B Testing", span: "col-span-1 row-span-1", color: "#D946EF" },
      { label: "Interviews", span: "col-span-2 row-span-1", color: "#4F46E5" },
      { label: "Heuristics", span: "col-span-1 row-span-1", color: "#7C3AED" },
      { label: "Accessibility", span: "col-span-1 row-span-1", color: "#6366F1" },
    ],
  },
  ar: {
    name: "بريا شارما",
    role: "باحثة تجربة مستخدم",
    heading: "فسيفساء من الخبرات",
    subheading:
      "كل قطعة تمثل فصلاً — أبحاث أُجريت، رؤى اكتُشفت، منتجات شُكّلت، ومستخدمون فُهموا.",
    cta: "شاهد الصورة الكاملة",
    secondary: "تحميل السيرة",
    tiles: [
      { label: "بحث المستخدم", span: "col-span-2 row-span-2", color: "#7C3AED" },
      { label: "نماذج أولية", span: "col-span-1 row-span-1", color: "#6366F1" },
      { label: "تحليل البيانات", span: "col-span-1 row-span-1", color: "#8B5CF6" },
      { label: "ورش عمل", span: "col-span-1 row-span-2", color: "#A78BFA" },
      { label: "اختبار A/B", span: "col-span-1 row-span-1", color: "#D946EF" },
      { label: "مقابلات", span: "col-span-2 row-span-1", color: "#4F46E5" },
      { label: "تقييم إرشادي", span: "col-span-1 row-span-1", color: "#7C3AED" },
      { label: "إمكانية الوصول", span: "col-span-1 row-span-1", color: "#6366F1" },
    ],
  },
};

export function ResumeMosaic({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0A0A14" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Mosaic grid */}
        <div className="flex-shrink-0 grid grid-cols-4 gap-2" style={{ width: "360px", height: "360px" }}>
          {t.tiles.map((tile, i) => (
            <div
              key={i}
              className={`${tile.span} rounded-lg flex items-center justify-center p-3 transition-all duration-500 hover:scale-[1.03] cursor-default`}
              style={{
                backgroundColor: `${tile.color}15`,
                border: `1px solid ${tile.color}30`,
                animation: `mosaicFadeIn 0.5s ease-out ${i * 0.1}s both`,
              }}
            >
              <span
                className="text-xs sm:text-sm font-semibold text-center"
                style={{ color: `${tile.color}CC` }}
              >
                {tile.label}
              </span>
            </div>
          ))}
        </div>

        {/* Text content */}
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: "rgba(124,58,237,0.1)",
              color: "#A78BFA",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            {t.role}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-2"
            style={{ color: "#F8FAFC" }}
          >
            {t.name}
          </h1>

          <h2
            className="text-xl mb-5"
            style={{ color: "#A78BFA" }}
          >
            {t.heading}
          </h2>

          <p
            className="text-base leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(203,213,225,0.6)" }}
          >
            {t.subheading}
          </p>

          {/* Mini stat dots */}
          <div className="flex items-center gap-6 mb-8">
            {[
              { n: "120+", l: "Studies" },
              { n: "8", l: "Years" },
              { n: "50K", l: "Users" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: ["#7C3AED", "#D946EF", "#6366F1"][i],
                    boxShadow: `0 0 8px ${["#7C3AED", "#D946EF", "#6366F1"][i]}60`,
                  }}
                />
                <div>
                  <span className="text-sm font-bold" style={{ color: "#E2E8F0" }}>{s.n} </span>
                  <span className="text-xs" style={{ color: "rgba(167,139,250,0.5)" }}>{s.l}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #D946EF)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              }}
            >
              {t.cta}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="px-7 py-3 rounded-xl text-sm font-semibold transition-colors"
              style={{ color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mosaicFadeIn {
          0% { opacity: 0; transform: scale(0.8) rotate(-2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}
