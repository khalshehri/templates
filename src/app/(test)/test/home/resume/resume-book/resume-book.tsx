"use client";

/**
 * Resume Book -- Resume Hero Template
 *
 * Open book spread layout. Left page = experience, right page = skills.
 * Classic book metaphor with elegant typography and leather binding.
 *
 * @category Resume
 * @palette violet (#7C3AED), cream (#FAF5E4), leather (#3D2914), ink (#1A1A2E)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Michael Torres",
    role: "Creative Director",
    leftTitle: "Chapter I: Experience",
    experiences: [
      { year: "2023-Now", title: "Creative Director", company: "Nova Agency" },
      { year: "2020-2023", title: "Senior Designer", company: "Pixel Corp" },
      { year: "2018-2020", title: "Visual Designer", company: "Art Studio" },
    ],
    rightTitle: "Chapter II: Expertise",
    skills: ["Brand Strategy", "Visual Identity", "Art Direction", "Typography", "Motion Design", "Team Leadership"],
    cta: "Write the Next Chapter",
    secondary: "Read More",
    pageLeft: "— 1 —",
    pageRight: "— 2 —",
  },
  ar: {
    name: "محمد عبدالله",
    role: "مدير إبداعي",
    leftTitle: "الفصل الأول: الخبرات",
    experiences: [
      { year: "٢٠٢٣-الآن", title: "مدير إبداعي", company: "وكالة نوفا" },
      { year: "٢٠٢٠-٢٠٢٣", title: "مصمم أول", company: "بيكسل كورب" },
      { year: "٢٠١٨-٢٠٢٠", title: "مصمم بصري", company: "استوديو الفن" },
    ],
    rightTitle: "الفصل الثاني: المهارات",
    skills: ["استراتيجية العلامة", "الهوية البصرية", "الإخراج الفني", "الخطوط", "الحركة", "قيادة الفريق"],
    cta: "اكتب الفصل التالي",
    secondary: "اقرأ المزيد",
    pageLeft: "— ١ —",
    pageRight: "— ٢ —",
  },
};

export function ResumeBook({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #16132B 50%, #0F0C22 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-4">
        {/* Name and role above book */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-2"
            style={{
              color: "#F8FAFC",
              fontFamily: "Georgia, serif",
            }}
          >
            {t.name}
          </h1>
          <div className="text-lg" style={{ color: "#A78BFA" }}>
            {t.role}
          </div>
        </div>

        {/* Open book */}
        <div
          className="relative flex flex-col md:flex-row rounded-lg overflow-hidden"
          style={{
            boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(61,41,20,0.3)",
          }}
        >
          {/* Book spine */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 z-10"
            style={{
              background: "linear-gradient(90deg, #2D1E12 0%, #3D2914 50%, #2D1E12 100%)",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          />

          {/* Left page - Experience */}
          <div
            className="flex-1 p-6 sm:p-8 relative"
            style={{
              backgroundColor: "#FAF5E4",
              background: "linear-gradient(135deg, #FAF5E4 0%, #F0E8D0 100%)",
            }}
          >
            <h2
              className="text-lg font-bold mb-6"
              style={{
                color: "#3D2914",
                fontFamily: "Georgia, serif",
                borderBottom: "1px solid rgba(61,41,20,0.2)",
                paddingBottom: "8px",
              }}
            >
              {t.leftTitle}
            </h2>

            <div className="space-y-5">
              {t.experiences.map((exp, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{
                    [isRTL ? "borderRight" : "borderLeft"]: "2px solid rgba(124,58,237,0.3)",
                    [isRTL ? "paddingRight" : "paddingLeft"]: "16px",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute top-1 w-3 h-3 rounded-full"
                    style={{
                      [isRTL ? "right" : "left"]: "-7px",
                      backgroundColor: "#7C3AED",
                    }}
                  />
                  <div className="text-xs font-mono mb-1" style={{ color: "#7C3AED" }}>
                    {exp.year}
                  </div>
                  <div className="text-sm font-bold" style={{ color: "#1A1A2E" }}>
                    {exp.title}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(61,41,20,0.6)" }}>
                    {exp.company}
                  </div>
                </div>
              ))}
            </div>

            {/* Page number */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs"
              style={{ color: "rgba(61,41,20,0.3)", fontFamily: "Georgia, serif" }}
            >
              {t.pageLeft}
            </div>
          </div>

          {/* Right page - Skills */}
          <div
            className="flex-1 p-6 sm:p-8 relative"
            style={{
              backgroundColor: "#F8F2E0",
              background: "linear-gradient(225deg, #FAF5E4 0%, #F0E8D0 100%)",
            }}
          >
            <h2
              className="text-lg font-bold mb-6"
              style={{
                color: "#3D2914",
                fontFamily: "Georgia, serif",
                borderBottom: "1px solid rgba(61,41,20,0.2)",
                paddingBottom: "8px",
              }}
            >
              {t.rightTitle}
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {t.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-md text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(124,58,237,0.08)",
                    color: "#4C1D95",
                    border: "1px solid rgba(124,58,237,0.15)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Decorative quill */}
            <svg
              className="absolute opacity-10"
              style={{
                bottom: "40px",
                [isRTL ? "left" : "right"]: "20px",
              }}
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <path
                d="M50 5 Q35 20 30 35 Q28 40 25 45 L20 55 L22 50 Q18 42 20 35 Q25 15 45 5 Z"
                fill="#3D2914"
              />
              <line x1="20" y1="55" x2="15" y2="58" stroke="#3D2914" strokeWidth="1" />
            </svg>

            {/* Page number */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs"
              style={{ color: "rgba(61,41,20,0.3)", fontFamily: "Georgia, serif" }}
            >
              {t.pageRight}
            </div>
          </div>
        </div>

        {/* CTA below book */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #6366F1)",
              boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
            style={{ color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pageTurn {
          0% { transform: perspective(800px) rotateY(0deg); }
          100% { transform: perspective(800px) rotateY(-5deg); }
        }
      `}</style>
    </section>
  );
}
