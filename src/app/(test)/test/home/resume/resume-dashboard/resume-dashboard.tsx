"use client";

/**
 * Resume Dashboard -- Resume Hero Template
 *
 * Analytics dashboard layout showing career stats, skill meters, experience chart.
 * Data visualization aesthetic with charts and metric cards.
 *
 * @category Resume
 * @palette violet (#7C3AED), indigo (#6366F1), cyan (#06B6D4), dark (#0B0B14)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Jordan Lee",
    role: "Data Scientist",
    heading: "Career Analytics Dashboard",
    subheading:
      "Numbers tell the story. 10 years of impact, measured in projects delivered, teams led, and problems solved.",
    cta: "Connect With Me",
    secondary: "Full Resume",
    stats: [
      { value: "10+", label: "Years Experience", color: "#7C3AED" },
      { value: "47", label: "Projects Shipped", color: "#06B6D4" },
      { value: "12", label: "Awards Won", color: "#8B5CF6" },
      { value: "3M+", label: "Users Impacted", color: "#A78BFA" },
    ],
    skills: [
      { name: "Python", level: 95 },
      { name: "Machine Learning", level: 90 },
      { name: "Data Viz", level: 85 },
      { name: "SQL", level: 92 },
      { name: "Cloud/AWS", level: 78 },
    ],
    experienceYears: [2015, 2017, 2019, 2021, 2023, 2025],
    experienceValues: [20, 35, 55, 70, 85, 95],
  },
  ar: {
    name: "عمر أحمد",
    role: "عالم بيانات",
    heading: "لوحة تحليلات المسيرة",
    subheading:
      "الأرقام تروي القصة. ١٠ سنوات من التأثير، تُقاس بالمشاريع المُنجزة والفرق المُدارة والمشاكل المحلولة.",
    cta: "تواصل معي",
    secondary: "السيرة الكاملة",
    stats: [
      { value: "+١٠", label: "سنوات خبرة", color: "#7C3AED" },
      { value: "٤٧", label: "مشروع منجز", color: "#06B6D4" },
      { value: "١٢", label: "جائزة", color: "#8B5CF6" },
      { value: "+٣م", label: "مستخدم متأثر", color: "#A78BFA" },
    ],
    skills: [
      { name: "بايثون", level: 95 },
      { name: "تعلم آلي", level: 90 },
      { name: "تصور بيانات", level: 85 },
      { name: "SQL", level: 92 },
      { name: "سحابة/AWS", level: 78 },
    ],
    experienceYears: [2015, 2017, 2019, 2021, 2023, 2025],
    experienceValues: [20, 35, 55, 70, 85, 95],
  },
};

export function ResumeDashboard({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0B0B14" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Dashboard header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <div className="text-sm font-medium mb-1" style={{ color: "#7C3AED" }}>
              {t.role}
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#F8FAFC" }}
            >
              {t.name}
            </h1>
            <p className="text-sm mt-1" style={{ color: "rgba(167,139,250,0.5)" }}>
              {t.heading}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="group flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
              style={{
                backgroundColor: "#7C3AED",
                boxShadow: "0 4px 15px rgba(124,58,237,0.3)",
              }}
            >
              {t.cta}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="px-5 py-2 rounded-lg text-sm font-semibold"
              style={{ color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              {t.secondary}
            </button>
          </div>
        </div>

        {/* Stats cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{
                backgroundColor: "rgba(124,58,237,0.06)",
                border: "1px solid rgba(124,58,237,0.12)",
              }}
            >
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "rgba(167,139,250,0.5)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column: Skills + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skills panel */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: "rgba(124,58,237,0.04)",
              border: "1px solid rgba(124,58,237,0.1)",
            }}
          >
            <div className="text-sm font-semibold mb-4" style={{ color: "#A78BFA" }}>
              Skills Proficiency
            </div>
            <div className="space-y-4">
              {t.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span style={{ color: "#E2E8F0" }}>{skill.name}</span>
                    <span style={{ color: "rgba(167,139,250,0.6)" }}>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ backgroundColor: "rgba(124,58,237,0.12)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, #7C3AED, #A78BFA)`,
                        boxShadow: "0 0 8px rgba(124,58,237,0.4)",
                        animation: `skillGrow 1.5s ease-out ${i * 0.15}s both`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience growth chart */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: "rgba(124,58,237,0.04)",
              border: "1px solid rgba(124,58,237,0.1)",
            }}
          >
            <div className="text-sm font-semibold mb-4" style={{ color: "#A78BFA" }}>
              Career Growth
            </div>
            <div className="relative" style={{ height: "200px" }}>
              <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 50, 100, 150].map((y) => (
                  <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(124,58,237,0.08)" strokeWidth="1" />
                ))}

                {/* Area fill */}
                <path
                  d={`M0 200 ${t.experienceValues.map((v, i) => `L${i * 60} ${200 - v * 2}`).join(" ")} L${(t.experienceValues.length - 1) * 60} 200 Z`}
                  fill="url(#chartGradient)"
                />

                {/* Line */}
                <path
                  d={`M${t.experienceValues.map((v, i) => `${i * 60} ${200 - v * 2}`).join(" L")}`}
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2"
                />

                {/* Data points */}
                {t.experienceValues.map((v, i) => (
                  <circle
                    key={i}
                    cx={i * 60}
                    cy={200 - v * 2}
                    r="4"
                    fill="#7C3AED"
                    stroke="#0B0B14"
                    strokeWidth="2"
                  />
                ))}

                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(124,58,237,0.3)" />
                    <stop offset="100%" stopColor="rgba(124,58,237,0)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Year labels */}
              <div className="flex justify-between mt-2">
                {t.experienceYears.map((year, i) => (
                  <span key={i} className="text-[10px]" style={{ color: "rgba(167,139,250,0.4)" }}>
                    {year}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="mt-6 text-center text-base max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(167,139,250,0.5)" }}
        >
          {t.subheading}
        </p>
      </div>

      <style>{`
        @keyframes skillGrow {
          0% { width: 0; }
        }
      `}</style>
    </section>
  );
}
