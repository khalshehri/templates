"use client";

/**
 * Resume Blueprint -- Resume Hero Template
 *
 * Architectural blueprint of career with dimension lines connecting experiences.
 * Technical drawing aesthetic with grid, callouts, and measurement annotations.
 *
 * @category Resume
 * @palette blueprint blue (#2563EB), indigo (#4F46E5), white lines (#E0EAFF), bg (#0A1628)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Daniel Kim",
    role: "Solutions Architect",
    heading: "Architecting the Future",
    subheading:
      "A meticulous builder of systems and solutions. Every project is a blueprint drawn with precision, scalability, and vision.",
    cta: "Review Blueprint",
    secondary: "Technical Specs",
    dimensions: [
      { label: "8 YRS", desc: "Architecture Experience" },
      { label: "25+", desc: "Systems Designed" },
      { label: "99.9%", desc: "Uptime Achieved" },
    ],
    specs: [
      { key: "SCALE", value: "Enterprise" },
      { key: "STACK", value: "Cloud-Native" },
      { key: "CERT", value: "AWS SA Pro" },
      { key: "TEAM", value: "12 Engineers" },
    ],
    revisionNote: "Rev. 3.2 — Updated March 2026",
  },
  ar: {
    name: "دانيال أحمد",
    role: "مهندس حلول",
    heading: "هندسة المستقبل",
    subheading:
      "بانٍ دقيق للأنظمة والحلول. كل مشروع مخطط مرسوم بدقة وقابلية للتوسع ورؤية.",
    cta: "راجع المخطط",
    secondary: "المواصفات التقنية",
    dimensions: [
      { label: "٨ سنوات", desc: "خبرة معمارية" },
      { label: "+٢٥", desc: "نظام مصمم" },
      { label: "٩٩.٩٪", desc: "وقت تشغيل" },
    ],
    specs: [
      { key: "النطاق", value: "مؤسسي" },
      { key: "التقنية", value: "سحابية" },
      { key: "الشهادة", value: "AWS SA Pro" },
      { key: "الفريق", value: "١٢ مهندس" },
    ],
    revisionNote: "مراجعة ٣.٢ — محدّث مارس ٢٠٢٦",
  },
};

export function ResumeBlueprint({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Larger grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-8">
        {/* Blueprint title block (bottom-right convention) */}
        <div
          className="mb-12 p-6 relative"
          style={{
            border: "1px solid rgba(37,99,235,0.25)",
          }}
        >
          {/* Corner marks */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-3 h-3`}
              style={{
                borderTop: pos.includes("top") ? "2px solid rgba(37,99,235,0.5)" : "none",
                borderBottom: pos.includes("bottom") ? "2px solid rgba(37,99,235,0.5)" : "none",
                borderLeft: pos.includes("left") ? "2px solid rgba(37,99,235,0.5)" : "none",
                borderRight: pos.includes("right") ? "2px solid rgba(37,99,235,0.5)" : "none",
              }}
            />
          ))}

          <div className="text-xs font-mono mb-2 uppercase tracking-widest" style={{ color: "rgba(37,99,235,0.5)" }}>
            {t.role}
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
            style={{
              color: "#E0EAFF",
              fontFamily: "monospace",
              letterSpacing: "-0.02em",
            }}
          >
            {t.name}
          </h1>

          <h2
            className="text-xl sm:text-2xl font-light mb-4"
            style={{ color: "rgba(37,99,235,0.7)" }}
          >
            {t.heading}
          </h2>

          <p
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "rgba(224,234,255,0.5)" }}
          >
            {t.subheading}
          </p>

          {/* Revision note */}
          <div
            className="absolute bottom-2 text-[10px] font-mono"
            style={{
              [isRTL ? "left" : "right"]: "12px",
              color: "rgba(37,99,235,0.3)",
            }}
          >
            {t.revisionNote}
          </div>
        </div>

        {/* Dimension lines with measurements */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {t.dimensions.map((dim, i) => (
            <div key={i} className="text-center relative py-4">
              {/* Top dimension line */}
              <div className="absolute top-0 left-2 right-2 flex items-center">
                <div className="flex-1 h-[1px]" style={{ backgroundColor: "rgba(37,99,235,0.3)" }} />
                <div className="w-[1px] h-2" style={{ backgroundColor: "rgba(37,99,235,0.3)" }} />
              </div>
              {/* Bottom dimension line */}
              <div className="absolute bottom-0 left-2 right-2 flex items-center">
                <div className="w-[1px] h-2" style={{ backgroundColor: "rgba(37,99,235,0.3)" }} />
                <div className="flex-1 h-[1px]" style={{ backgroundColor: "rgba(37,99,235,0.3)" }} />
              </div>

              <div
                className="text-2xl sm:text-3xl font-bold font-mono"
                style={{ color: "#2563EB" }}
              >
                {dim.label}
              </div>
              <div className="text-xs font-mono mt-1" style={{ color: "rgba(224,234,255,0.4)" }}>
                {dim.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Spec table */}
        <div
          className="mb-10 p-4"
          style={{ border: "1px solid rgba(37,99,235,0.15)" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {t.specs.map((spec, i) => (
              <div key={i} className="text-center">
                <div className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "rgba(37,99,235,0.4)" }}>
                  {spec.key}
                </div>
                <div className="text-sm font-mono font-bold" style={{ color: "#E0EAFF" }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compass decoration */}
        <div
          className="absolute opacity-20"
          style={{
            top: "15%",
            [isRTL ? "left" : "right"]: "8%",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" fill="none" stroke="#2563EB" strokeWidth="1" />
            <circle cx="30" cy="30" r="20" fill="none" stroke="#2563EB" strokeWidth="0.5" />
            <line x1="30" y1="2" x2="30" y2="58" stroke="#2563EB" strokeWidth="0.5" />
            <line x1="2" y1="30" x2="58" y2="30" stroke="#2563EB" strokeWidth="0.5" />
            <text x="30" y="8" textAnchor="middle" fill="#2563EB" fontSize="6" fontFamily="monospace">N</text>
          </svg>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            className="group flex items-center gap-2 px-7 py-3 rounded text-sm font-mono font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#2563EB",
              boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
            }}
          >
            {t.cta}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
            />
          </button>
          <button
            className="px-7 py-3 rounded text-sm font-mono font-semibold transition-colors"
            style={{ color: "#2563EB", border: "1px solid rgba(37,99,235,0.3)" }}
          >
            {t.secondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blueprintDraw {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
