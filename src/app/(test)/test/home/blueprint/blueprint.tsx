"use client";

/**
 * Blueprint Hero Template
 *
 * Architecture/engineering blueprint aesthetic. Deep blueprint-blue background
 * with a precise CSS grid overlay, technical drawing elements (dimension lines,
 * crosshairs, annotation bubbles), and a title block. Content draws itself in
 * with line-drawing animations. Monospace labels, dashed connector lines, and
 * registration marks complete the technical-drawing feel.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "We Design Digital Experiences",
    subheading: "Precision-engineered websites built to specification",
    description:
      "Every pixel measured. Every interaction calculated. We bring architectural discipline to web design, constructing digital spaces that perform exactly as planned.",
    cta: "View Specifications",
    annotation1: "LAYOUT",
    annotation2: "GRID",
    annotation3: "TYPE",
    revLabel: "REV. 03",
    scaleLabel: "SCALE 1:1",
    dateLabel: "DATE 2024",
    titleBlockProject: "PROJECT: SAFAHATI PLATFORM",
    titleBlockDrawing: "DRAWING: HERO SECTION — MAIN",
    titleBlockApproved: "APPROVED",
    dimensionLabel: "1440 px",
    dimensionHeight: "900 px",
  },
  ar: {
    heading: "نصمم تجارب رقمية",
    subheading: "مواقع مهندسة بدقة ومبنية وفق المواصفات",
    description:
      "كل بكسل محسوب. كل تفاعل مدروس. نجلب الانضباط المعماري إلى تصميم الويب، لبناء مساحات رقمية تعمل تمامًا كما هو مخطط.",
    cta: "عرض المواصفات",
    annotation1: "تخطيط",
    annotation2: "شبكة",
    annotation3: "خط",
    revLabel: "المراجعة ٠٣",
    scaleLabel: "المقياس ١:١",
    dateLabel: "التاريخ ٢٠٢٤",
    titleBlockProject: "المشروع: منصة صفحاتي",
    titleBlockDrawing: "الرسم: قسم البطل — الرئيسي",
    titleBlockApproved: "معتمد",
    dimensionLabel: "١٤٤٠ بكسل",
    dimensionHeight: "٩٠٠ بكسل",
  },
};

export function Blueprint({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0d2137" }}
    >
      {/* --- Inline keyframes --- */}
      <style>{`
        @keyframes bp-draw-h {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes bp-draw-v {
          from { height: 0; }
          to   { height: 100%; }
        }
        @keyframes bp-fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bp-circle-draw {
          from { stroke-dashoffset: 126; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes bp-dash-draw {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes bp-crosshair-fade {
          0%   { opacity: 0; }
          60%  { opacity: 0; }
          100% { opacity: 0.6; }
        }
        @keyframes bp-pulse {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 0.8; }
        }
        @keyframes bp-title-block-draw {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }
        .bp-draw-h { animation: bp-draw-h 1.2s ease-out forwards; }
        .bp-draw-v { animation: bp-draw-v 1.2s ease-out forwards; }
        .bp-fade-1 { opacity:0; animation: bp-fade-in 0.8s ease-out 0.4s forwards; }
        .bp-fade-2 { opacity:0; animation: bp-fade-in 0.8s ease-out 0.7s forwards; }
        .bp-fade-3 { opacity:0; animation: bp-fade-in 0.8s ease-out 1.0s forwards; }
        .bp-fade-4 { opacity:0; animation: bp-fade-in 0.8s ease-out 1.3s forwards; }
        .bp-fade-5 { opacity:0; animation: bp-fade-in 0.8s ease-out 1.6s forwards; }
        .bp-circle-draw {
          stroke-dasharray: 126;
          stroke-dashoffset: 126;
          animation: bp-circle-draw 1s ease-out 0.6s forwards;
        }
        .bp-dash-draw {
          stroke-dasharray: 12 8;
          stroke-dashoffset: 600;
          animation: bp-dash-draw 2s linear 0.8s forwards;
        }
        .bp-crosshair { animation: bp-crosshair-fade 2s ease-out forwards; }
        .bp-pulse { animation: bp-pulse 3s ease-in-out infinite; }
        .bp-title-block { animation: bp-title-block-draw 1s ease-out 1.2s both; }
      `}</style>

      {/* --- Grid overlay --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px),
            linear-gradient(rgba(96,165,250,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 20px 20px, 100px 100px, 100px 100px",
        }}
      />

      {/* --- Corner crosshairs / registration marks --- */}
      {/* Top-left */}
      <div className="bp-crosshair absolute top-6 left-6 w-10 h-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-blue-300/60" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-blue-300/60" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/60" />
      </div>
      {/* Top-right */}
      <div className="bp-crosshair absolute top-6 right-6 w-10 h-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-blue-300/60" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-blue-300/60" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/60" />
      </div>
      {/* Bottom-left */}
      <div className="bp-crosshair absolute bottom-6 left-6 w-10 h-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-blue-300/60" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-blue-300/60" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/60" />
      </div>
      {/* Bottom-right */}
      <div className="bp-crosshair absolute bottom-6 right-6 w-10 h-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-blue-300/60" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-blue-300/60" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/60" />
      </div>

      {/* --- Top dimension line (width) --- */}
      <div className="absolute top-14 left-16 right-16 pointer-events-none bp-fade-2">
        {/* end marks */}
        <div className="absolute left-0 -top-2 w-px h-5 bg-blue-300/50" />
        <div className="absolute right-0 -top-2 w-px h-5 bg-blue-300/50" />
        {/* line */}
        <div className="w-full h-px bg-blue-300/40 bp-draw-h" />
        {/* label */}
        <span
          className="absolute top-2 left-1/2 -translate-x-1/2 text-blue-300/60 text-[10px] tracking-[0.2em]"
          style={{ fontFamily: "monospace" }}
        >
          {t.dimensionLabel}
        </span>
      </div>

      {/* --- Left dimension line (height) --- */}
      <div
        className={`absolute top-24 bottom-24 pointer-events-none bp-fade-2 ${
          isAr ? "right-10" : "left-10"
        }`}
      >
        <div className="absolute top-0 -left-2 h-px w-5 bg-blue-300/50" />
        <div className="absolute bottom-0 -left-2 h-px w-5 bg-blue-300/50" />
        <div className="h-full w-px bg-blue-300/40 mx-auto bp-draw-v" />
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/60 text-[10px] tracking-[0.2em] whitespace-nowrap"
          style={{
            fontFamily: "monospace",
            writingMode: "vertical-lr",
            transform: "rotate(180deg) translateX(50%)",
          }}
        >
          {t.dimensionHeight}
        </span>
      </div>

      {/* --- Dashed connector SVG --- */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* dashed diagonal lines from annotations */}
        <line
          x1="260"
          y1="280"
          x2="460"
          y2="380"
          stroke="rgba(96,165,250,0.25)"
          className="bp-dash-draw"
        />
        <line
          x1="1180"
          y1="280"
          x2="980"
          y2="380"
          stroke="rgba(96,165,250,0.25)"
          className="bp-dash-draw"
        />
        <line
          x1="720"
          y1="180"
          x2="720"
          y2="340"
          stroke="rgba(96,165,250,0.25)"
          className="bp-dash-draw"
        />
      </svg>

      {/* --- Annotation circles --- */}
      {/* Circle 1 — top-left area */}
      <div
        className={`absolute top-[28%] pointer-events-none bp-fade-3 ${
          isAr ? "right-[16%]" : "left-[16%]"
        }`}
      >
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="rgba(96,165,250,0.5)"
            strokeWidth="1"
            className="bp-circle-draw"
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-blue-300/80 text-sm font-bold"
          style={{ fontFamily: "monospace" }}
        >
          1
        </span>
        <span
          className={`absolute -bottom-5 text-blue-300/50 text-[9px] tracking-widest whitespace-nowrap ${
            isAr ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
          }`}
          style={{ fontFamily: "monospace" }}
        >
          {t.annotation1}
        </span>
      </div>

      {/* Circle 2 — top-center */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 pointer-events-none bp-fade-3">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="rgba(96,165,250,0.5)"
            strokeWidth="1"
            className="bp-circle-draw"
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-blue-300/80 text-sm font-bold"
          style={{ fontFamily: "monospace" }}
        >
          2
        </span>
        <span
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-blue-300/50 text-[9px] tracking-widest whitespace-nowrap"
          style={{ fontFamily: "monospace" }}
        >
          {t.annotation2}
        </span>
      </div>

      {/* Circle 3 — top-right area */}
      <div
        className={`absolute top-[28%] pointer-events-none bp-fade-3 ${
          isAr ? "left-[16%]" : "right-[16%]"
        }`}
      >
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="rgba(96,165,250,0.5)"
            strokeWidth="1"
            className="bp-circle-draw"
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-blue-300/80 text-sm font-bold"
          style={{ fontFamily: "monospace" }}
        >
          3
        </span>
        <span
          className={`absolute -bottom-5 text-blue-300/50 text-[9px] tracking-widest whitespace-nowrap ${
            isAr ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
          }`}
          style={{ fontFamily: "monospace" }}
        >
          {t.annotation3}
        </span>
      </div>

      {/* --- Technical meta labels (top strip) --- */}
      <div
        className={`absolute top-24 flex gap-8 pointer-events-none bp-fade-2 ${
          isAr ? "right-20" : "left-20"
        }`}
      >
        {[t.revLabel, t.scaleLabel, t.dateLabel].map((label, i) => (
          <span
            key={i}
            className="text-blue-300/40 text-[10px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "monospace" }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* ====== MAIN CONTENT ====== */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-6 ${
          isAr ? "text-right" : "text-left"
        }`}
      >
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          {/* Subheading */}
          <p
            className="bp-fade-1 text-blue-300/70 text-xs sm:text-sm tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "monospace" }}
          >
            {t.subheading}
          </p>

          {/* Main heading — blueprint title style */}
          <h1
            className="bp-fade-2 text-white text-3xl sm:text-5xl md:text-6xl font-extralight uppercase tracking-[0.18em] leading-tight mb-8"
            style={{ fontFamily: "inherit" }}
          >
            {t.heading}
          </h1>

          {/* Horizontal rule with drawing animation */}
          <div className="w-full max-w-md mx-auto mb-8 relative">
            <div className="h-px bg-blue-300/30 bp-draw-h" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300/60 bp-pulse" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300/60 bp-pulse" />
          </div>

          {/* Description */}
          <p className="bp-fade-3 text-blue-200/50 text-sm sm:text-base max-w-xl leading-relaxed mb-10">
            {t.description}
          </p>

          {/* CTA */}
          <button
            className={`bp-fade-4 group relative inline-flex items-center gap-3 px-8 py-3 border border-blue-300/40 text-blue-100 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-blue-300/10 hover:border-blue-300/70 ${
              isAr ? "flex-row-reverse" : ""
            }`}
            style={{ fontFamily: "monospace" }}
          >
            {t.cta}
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isAr
                  ? "rotate-180 group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />
            {/* corner accents on button */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-300/60" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-300/60" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-300/60" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-300/60" />
          </button>
        </div>
      </div>

      {/* --- Title block (bottom-right, like a real blueprint) --- */}
      <div
        className={`bp-title-block absolute bottom-8 ${
          isAr ? "left-8" : "right-8"
        } border border-blue-300/30 pointer-events-none`}
      >
        <div className="px-5 py-3 space-y-1 min-w-[220px]">
          {/* Title block header line */}
          <div className="border-b border-blue-300/20 pb-1 mb-1">
            <span
              className="text-blue-300/50 text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              {t.titleBlockProject}
            </span>
          </div>
          <span
            className="block text-blue-300/40 text-[8px] tracking-[0.2em]"
            style={{ fontFamily: "monospace" }}
          >
            {t.titleBlockDrawing}
          </span>
          <div className="flex items-center justify-between pt-1 border-t border-blue-300/20 mt-1">
            <span
              className="text-blue-300/30 text-[8px] tracking-[0.2em]"
              style={{ fontFamily: "monospace" }}
            >
              {t.dateLabel}
            </span>
            <span
              className="text-emerald-400/50 text-[8px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              {t.titleBlockApproved}
            </span>
          </div>
        </div>
      </div>

      {/* --- Faint center crosshair --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bp-crosshair">
        <div className="w-20 h-px bg-blue-300/15" style={{ marginLeft: "-40px" }} />
        <div
          className="h-20 w-px bg-blue-300/15"
          style={{ marginTop: "-40px", marginLeft: "-0.5px" }}
        />
      </div>
    </section>
  );
}
