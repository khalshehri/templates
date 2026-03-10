"use client";

/**
 * Education Notebook -- Education Hero Template
 *
 * Spiral notebook with ruled lines, content typed on the lines.
 * Handwritten font feel with margin line, spiral binding, and doodles.
 *
 * @category Education
 * @palette cream (#FFFDF7), blue lines (#C5D8E8), red margin (#E8646A), emerald (#059669)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    badge: "Notes & Knowledge",
    heading: "Write Your Own Learning Story",
    subheading:
      "Every great journey begins with a single note. Fill your pages with knowledge, skills, and the confidence to create something remarkable.",
    cta: "Take Notes",
    secondary: "View Courses",
    marginNote: "Important!",
    doodleStar: "★",
    checkItems: ["Critical Thinking", "Problem Solving", "Creative Design"],
  },
  ar: {
    badge: "ملاحظات ومعرفة",
    heading: "اكتب قصة تعلّمك بنفسك",
    subheading:
      "كل رحلة عظيمة تبدأ بملاحظة واحدة. املأ صفحاتك بالمعرفة والمهارات والثقة لإنشاء شيء مميز.",
    cta: "دوّن ملاحظاتك",
    secondary: "عرض الدورات",
    marginNote: "!مهم",
    doodleStar: "★",
    checkItems: ["التفكير النقدي", "حل المشكلات", "التصميم الإبداعي"],
  },
};

export function EducationNotebook({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  const lineCount = 20;

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2D3B2D 0%, #1A2A1A 50%, #0F1A0F 100%)",
      }}
    >
      {/* Desk texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Notebook */}
      <div className="relative z-10 w-full max-w-2xl mx-4">
        {/* Shadow beneath notebook */}
        <div
          className="absolute -bottom-4 left-4 right-4 h-8 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
          }}
        />

        {/* Notebook body */}
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            backgroundColor: "#FFFDF7",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4), 4px 4px 0 rgba(0,0,0,0.1)",
            minHeight: "600px",
          }}
        >
          {/* Spiral binding holes */}
          <div
            className="absolute top-0 bottom-0 z-20 flex flex-col justify-start gap-[28px] pt-4"
            style={{ [isRTL ? "right" : "left"]: "28px" }}
          >
            {Array.from({ length: lineCount }).map((_, i) => (
              <div
                key={i}
                className="rounded-full border-2 flex-shrink-0"
                style={{
                  width: "14px",
                  height: "14px",
                  borderColor: "#B0B0B0",
                  backgroundColor: "#E8E4DC",
                  boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.15)",
                }}
              />
            ))}
          </div>

          {/* Margin line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] z-10"
            style={{
              [isRTL ? "right" : "left"]: "70px",
              backgroundColor: "#E8646A",
              opacity: 0.5,
            }}
          />

          {/* Ruled lines */}
          <div className="absolute top-0 left-0 right-0 bottom-0">
            {Array.from({ length: lineCount }).map((_, i) => (
              <div
                key={i}
                className="w-full"
                style={{
                  height: "30px",
                  borderBottom: "1px solid #C5D8E8",
                }}
              />
            ))}
          </div>

          {/* Content area */}
          <div
            className="relative z-10 py-10 px-6"
            style={{
              [isRTL ? "marginRight" : "marginLeft"]: "80px",
              [isRTL ? "marginLeft" : "marginRight"]: "24px",
            }}
          >
            {/* Margin note */}
            <div
              className="absolute top-12"
              style={{
                [isRTL ? "right" : "left"]: "-60px",
                transform: "rotate(-90deg)",
                transformOrigin: isRTL ? "right center" : "left center",
              }}
            >
              <span
                className="text-[10px] font-bold tracking-wide"
                style={{ color: "#E8646A" }}
              >
                {t.marginNote}
              </span>
            </div>

            {/* Badge */}
            <div className="mb-6 pt-2">
              <span
                className="inline-block px-3 py-1 rounded text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(5,150,105,0.1)",
                  color: "#059669",
                  border: "1px dashed rgba(5,150,105,0.4)",
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Heading - handwritten style */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{
                color: "#1A2E1A",
                fontFamily: "'Georgia', serif",
                lineHeight: "1.35",
              }}
            >
              {t.heading}
            </h1>

            {/* Underline doodle */}
            <svg width="200" height="8" viewBox="0 0 200 8" className="mb-5">
              <path
                d="M0 4 Q25 1 50 4 Q75 7 100 4 Q125 1 150 4 Q175 7 200 4"
                stroke="#059669"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
            </svg>

            {/* Subheading */}
            <p
              className="text-base leading-relaxed mb-6"
              style={{
                color: "#4A5A4A",
                fontFamily: "'Georgia', serif",
                lineHeight: "30px",
              }}
            >
              {t.subheading}
            </p>

            {/* Checklist items */}
            <div className="mb-8 space-y-1">
              {t.checkItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2" style={{ lineHeight: "30px" }}>
                  <span style={{ color: "#059669", fontSize: "14px" }}>✓</span>
                  <span style={{ color: "#2D4A2D", fontFamily: "'Georgia', serif", fontSize: "14px" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Star doodle in corner */}
            <div
              className="absolute opacity-20"
              style={{
                top: "20px",
                [isRTL ? "left" : "right"]: "20px",
                fontSize: "40px",
                color: "#059669",
                transform: "rotate(15deg)",
              }}
            >
              {t.doodleStar}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                className="group flex items-center gap-2 px-6 py-2.5 rounded text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#059669",
                  boxShadow: "0 3px 10px rgba(5,150,105,0.3)",
                }}
              >
                {t.cta}
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
                />
              </button>
              <button
                className="px-6 py-2.5 rounded text-sm font-semibold transition-colors"
                style={{ color: "#059669", border: "1px dashed rgba(5,150,105,0.4)" }}
              >
                {t.secondary}
              </button>
            </div>
          </div>

          {/* Page curl bottom-right */}
          <div
            className="absolute bottom-0 z-20"
            style={{
              [isRTL ? "left" : "right"]: 0,
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #FFFDF7 45%, #E8E4DC 50%, #D4D0C8 100%)",
              boxShadow: "-2px -2px 4px rgba(0,0,0,0.08)",
              clipPath: isRTL
                ? "polygon(100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      {/* Pencil decoration */}
      <div
        className="absolute bottom-[15%] z-20 hidden md:block"
        style={{ [isRTL ? "left" : "right"]: "8%" }}
      >
        <div
          style={{
            width: "8px",
            height: "160px",
            background: "linear-gradient(90deg, #EAB308, #FDE047, #EAB308)",
            transform: "rotate(-25deg)",
            borderRadius: "2px",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
          }}
        >
          {/* Pencil tip */}
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2"
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "14px solid #8B7500",
            }}
          />
          {/* Eraser */}
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-t"
            style={{
              width: "10px",
              height: "12px",
              backgroundColor: "#F9A8D4",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes notebookWrite {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
