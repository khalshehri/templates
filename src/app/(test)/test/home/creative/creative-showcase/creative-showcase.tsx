"use client";

/**
 * Creative Showcase — "Infinite Gallery"
 * ----------------------------------------
 * Two rows of portfolio cards auto-scrolling in opposite directions
 * (CSS-only marquee). Cards are tilted at slight angles with depth
 * shadows. A frosted glass panel in the center contains the heading
 * and CTA. The cards peek behind the glass panel creating depth.
 * Background has a subtle color mesh gradient.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "We Design Experiences",
    headingLine2: "People Remember",
    subheading:
      "Award-winning creative agency crafting digital experiences that move people.",
    ctaPrimary: "See Our Work",
    ctaSecondary: "Contact Us",
    stats: [
      { value: "200+", label: "Projects" },
      { value: "15", label: "Awards" },
      { value: "8", label: "Years" },
    ],
  },
  ar: {
    heading: "نصمم تجارب",
    headingLine2: "لا تُنسى",
    subheading:
      "وكالة إبداعية حائزة على جوائز تصنع تجارب رقمية تحرك المشاعر.",
    ctaPrimary: "شاهد أعمالنا",
    ctaSecondary: "تواصل معنا",
    stats: [
      { value: "+200", label: "مشروع" },
      { value: "15", label: "جائزة" },
      { value: "8", label: "سنوات" },
    ],
  },
};

/* ---- Card definitions for the scrolling rows ---- */
const ROW1_CARDS = [
  { title: "Brand Identity", accent: "#e11d48", icon: "B" },
  { title: "Web Platform", accent: "#2563eb", icon: "W" },
  { title: "Mobile App", accent: "#059669", icon: "M" },
  { title: "Campaign", accent: "#d97706", icon: "C" },
  { title: "Packaging", accent: "#9333ea", icon: "P" },
  { title: "Motion Design", accent: "#ec4899", icon: "M" },
  { title: "3D Visual", accent: "#0891b2", icon: "3" },
  { title: "UI System", accent: "#f97316", icon: "U" },
  { title: "Illustration", accent: "#6366f1", icon: "I" },
  { title: "Typography", accent: "#14b8a6", icon: "T" },
];

const ROW1_CARDS_AR = [
  { title: "هوية بصرية", accent: "#e11d48", icon: "ه" },
  { title: "منصة ويب", accent: "#2563eb", icon: "و" },
  { title: "تطبيق جوال", accent: "#059669", icon: "ت" },
  { title: "حملة إعلانية", accent: "#d97706", icon: "ح" },
  { title: "تغليف", accent: "#9333ea", icon: "غ" },
  { title: "موشن جرافيك", accent: "#ec4899", icon: "م" },
  { title: "تصميم ثلاثي", accent: "#0891b2", icon: "ث" },
  { title: "نظام واجهات", accent: "#f97316", icon: "ن" },
  { title: "رسم توضيحي", accent: "#6366f1", icon: "ر" },
  { title: "طباعة فنية", accent: "#14b8a6", icon: "ط" },
];

const ROW2_CARDS = [
  { title: "Logo Design", accent: "#f43f5e", icon: "L" },
  { title: "Social Media", accent: "#8b5cf6", icon: "S" },
  { title: "Photography", accent: "#10b981", icon: "P" },
  { title: "Print Design", accent: "#f59e0b", icon: "D" },
  { title: "AR/VR", accent: "#06b6d4", icon: "A" },
  { title: "Data Viz", accent: "#a855f7", icon: "D" },
  { title: "Copywriting", accent: "#ef4444", icon: "C" },
  { title: "UX Research", accent: "#3b82f6", icon: "R" },
  { title: "Animation", accent: "#22c55e", icon: "A" },
  { title: "Branding", accent: "#eab308", icon: "B" },
];

const ROW2_CARDS_AR = [
  { title: "تصميم شعار", accent: "#f43f5e", icon: "ش" },
  { title: "سوشيال ميديا", accent: "#8b5cf6", icon: "س" },
  { title: "تصوير", accent: "#10b981", icon: "ص" },
  { title: "مطبوعات", accent: "#f59e0b", icon: "ط" },
  { title: "واقع معزز", accent: "#06b6d4", icon: "ع" },
  { title: "بيانات مرئية", accent: "#a855f7", icon: "ب" },
  { title: "كتابة محتوى", accent: "#ef4444", icon: "ك" },
  { title: "بحث تجربة", accent: "#3b82f6", icon: "ج" },
  { title: "أنيميشن", accent: "#22c55e", icon: "أ" },
  { title: "علامة تجارية", accent: "#eab308", icon: "ل" },
];

/* ---- Card tilt patterns (degrees) ---- */
const TILTS = [2, -1.5, 3, -2, 1.5, -3, 2.5, -1, 2, -2.5];

export function CreativeShowcase({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const row1 = isAr ? ROW1_CARDS_AR : ROW1_CARDS;
  const row2 = isAr ? ROW2_CARDS_AR : ROW2_CARDS;

  /* duplicate cards for seamless loop */
  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];

  return (
    <>
      <style>{`
        /* ---- scrolling rows ---- */
        @keyframes galleryScrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes galleryScrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @keyframes glassFadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes textFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        .gallery-row-left {
          animation: galleryScrollLeft 40s linear infinite;
        }
        .gallery-row-right {
          animation: galleryScrollRight 40s linear infinite;
        }
        .glass-fade {
          animation: glassFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
        }
        .text-fade {
          animation: textFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* ---- card hover lift ---- */
        .gallery-card {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }
        .gallery-card:hover {
          transform: rotate(0deg) translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          z-index: 5;
        }

        /* ---- mesh gradient blobs ---- */
        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#0c0a14" }}
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* ---- Mesh gradient background ---- */}
        <div className="mesh-blob" style={{ width: "60vw", height: "60vw", top: "-20%", left: "-10%", background: "rgba(147,51,234,0.12)" }} />
        <div className="mesh-blob" style={{ width: "50vw", height: "50vw", bottom: "-15%", right: "-10%", background: "rgba(20,184,166,0.10)" }} />
        <div className="mesh-blob" style={{ width: "40vw", height: "40vw", top: "30%", right: "20%", background: "rgba(236,72,153,0.08)" }} />

        {/* ---- Subtle grid overlay ---- */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* ---- Scrolling Row 1 (upper) ---- */}
        <div className="absolute top-[8%] left-0 right-0 overflow-hidden">
          <div className="gallery-row-left flex gap-5 w-max" style={{ paddingLeft: 20 }}>
            {row1Loop.map((card, i) => (
              <div
                key={`r1-${i}`}
                className="gallery-card shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  width: 220,
                  height: 160,
                  transform: `rotate(${TILTS[i % TILTS.length]}deg)`,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  background: `linear-gradient(135deg, ${card.accent}18, ${card.accent}08)`,
                  border: `1px solid ${card.accent}25`,
                }}
              >
                <div className="h-full flex flex-col items-center justify-center gap-3 p-4">
                  {/* Icon circle */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white"
                    style={{
                      backgroundColor: `${card.accent}30`,
                      boxShadow: `0 0 20px ${card.accent}20`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-sm font-semibold text-center"
                    style={{ color: `${card.accent}cc` }}
                  >
                    {card.title}
                  </span>
                  {/* Decorative line */}
                  <div
                    className="w-8 h-0.5 rounded-full"
                    style={{ backgroundColor: `${card.accent}40` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Scrolling Row 2 (lower, opposite direction) ---- */}
        <div className="absolute bottom-[8%] left-0 right-0 overflow-hidden">
          <div className="gallery-row-right flex gap-5 w-max" style={{ paddingLeft: 20 }}>
            {row2Loop.map((card, i) => (
              <div
                key={`r2-${i}`}
                className="gallery-card shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  width: 200,
                  height: 145,
                  transform: `rotate(${TILTS[(i + 3) % TILTS.length]}deg)`,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  background: `linear-gradient(135deg, ${card.accent}18, ${card.accent}08)`,
                  border: `1px solid ${card.accent}25`,
                }}
              >
                <div className="h-full flex flex-col items-center justify-center gap-3 p-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold text-white"
                    style={{
                      backgroundColor: `${card.accent}30`,
                      boxShadow: `0 0 16px ${card.accent}20`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-xs font-semibold text-center"
                    style={{ color: `${card.accent}cc` }}
                  >
                    {card.title}
                  </span>
                  <div
                    className="w-6 h-0.5 rounded-full"
                    style={{ backgroundColor: `${card.accent}40` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Center frosted glass panel ---- */}
        <div
          className="glass-fade absolute left-1/2 top-1/2 z-20 w-[90vw] max-w-2xl"
          style={{
            transform: "translate(-50%, -50%)",
            background: "rgba(12,10,20,0.65)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 28,
            boxShadow: "0 0 80px 20px rgba(147,51,234,0.08), 0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
            padding: "3rem 2.5rem",
          }}
        >
          {/* Top decorative gradient line */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.5), rgba(20,184,166,0.5), transparent)",
            }}
          />

          <div className="text-center">
            {/* Heading */}
            <h1
              className="text-fade text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]"
              style={{ animationDelay: "0.5s", color: "#fff" }}
            >
              {t.heading}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #9333ea, #ec4899, #14b8a6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.headingLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-fade mt-6 text-base sm:text-lg max-w-md mx-auto leading-relaxed"
              style={{ animationDelay: "0.65s", color: "rgba(255,255,255,0.45)" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className="text-fade mt-10 flex items-center justify-center gap-4 flex-wrap"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-2xl hover:-translate-y-0.5 transition-all ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #9333ea, #ec4899)",
                  boxShadow: "0 0 30px rgba(147,51,234,0.3), 0 8px 20px rgba(0,0,0,0.3)",
                }}
              >
                {t.ctaPrimary}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                />
              </a>
              <a
                href="#"
                className="px-8 py-4 text-sm font-semibold rounded-2xl transition-all hover:bg-white/5"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Stats */}
            <div
              className="text-fade mt-10 flex items-center justify-center gap-8"
              style={{ animationDelay: "0.95s" }}
            >
              {t.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #9333ea, #14b8a6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decorative gradient line */}
          <div
            className="absolute bottom-0 left-[10%] right-[10%] h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.4), rgba(147,51,234,0.4), transparent)",
            }}
          />
        </div>

        {/* ---- Top/Bottom fade gradients (cards fade into edges) ---- */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, #0c0a14, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, #0c0a14, transparent)" }}
        />

        {/* ---- Left/Right fade gradients ---- */}
        <div
          className="absolute top-0 bottom-0 left-0 w-20 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, #0c0a14, transparent)" }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-20 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, #0c0a14, transparent)" }}
        />
      </section>
    </>
  );
}
