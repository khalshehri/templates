"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Calendar, TrendingUp, Award } from "lucide-react";

const content = {
  en: {
    masthead: "THE CORPORATE JOURNAL",
    dateline: "Vol. XLVII — March 2026 — Special Edition",
    headline: "Legacy of Precision",
    deck: "How three decades of meticulous execution built an industry standard",
    body1:
      "For over thirty years, the firm has operated under a single conviction: that precision is not merely a practice but a philosophy. Every engagement, every deliverable, every client interaction has been measured against the highest benchmark the industry recognizes.",
    body2:
      "This relentless pursuit of exactitude has yielded what few organizations achieve — a reputation so thoroughly established that it precedes every conversation and outlasts every market cycle.",
    byline: "By the Executive Board",
    pullQuote:
      "Excellence is not a destination. It is the only acceptable standard of travel.",
    metricValue: "97.3",
    metricLabel: "Client Retention Rate",
    metricSub: "12 Consecutive Years",
    secondHeadline: "Global Expansion Continues",
    secondBody:
      "New offices in Riyadh and Singapore anchor a broader strategy to double international revenue within three fiscal years, cementing a footprint across four continents.",
    upcomingHeader: "UPCOMING",
    events: [
      { date: "APR 12", title: "Annual Shareholders Meeting" },
      { date: "MAY 03", title: "MENA Strategy Summit" },
      { date: "JUN 18", title: "Innovation & ESG Forum" },
    ],
    cta: "Request the full report",
  },
  ar: {
    masthead: "المجلة المؤسسية",
    dateline: "المجلد السابع والأربعون — مارس ٢٠٢٦ — إصدار خاص",
    headline: "إرث الدقة",
    deck: "كيف بنت ثلاثة عقود من التنفيذ الدقيق معياراً صناعياً",
    body1:
      "على مدار أكثر من ثلاثين عاماً، عملت المؤسسة وفق قناعة واحدة: أن الدقة ليست مجرد ممارسة بل فلسفة. كل مشروع، كل مخرج، كل تفاعل مع العميل قيس وفق أعلى المعايير التي يعترف بها القطاع.",
    body2:
      "أثمر هذا السعي الدؤوب نحو الإتقان ما تحققه مؤسسات قليلة — سمعة راسخة تسبق كل حوار وتتجاوز كل دورة سوقية.",
    byline: "بقلم مجلس الإدارة التنفيذي",
    pullQuote:
      "التميز ليس وجهة. إنه المعيار الوحيد المقبول للسير.",
    metricValue: "97.3",
    metricLabel: "معدل الاحتفاظ بالعملاء",
    metricSub: "١٢ سنة متتالية",
    secondHeadline: "التوسع العالمي مستمر",
    secondBody:
      "مكاتب جديدة في الرياض وسنغافورة ترسّخ استراتيجية أوسع لمضاعفة الإيرادات الدولية خلال ثلاث سنوات مالية، وتعزيز التواجد عبر أربع قارات.",
    upcomingHeader: "قادم",
    events: [
      { date: "١٢ أبريل", title: "اجتماع المساهمين السنوي" },
      { date: "٣ مايو", title: "قمة استراتيجية الشرق الأوسط" },
      { date: "١٨ يونيو", title: "منتدى الابتكار والاستدامة" },
    ],
    cta: "اطلب التقرير الكامل",
  },
};

export function Hero14({ language }: { language: "en" | "ar" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [metricCount, setMetricCount] = useState(0);
  const t = content[language];
  const isAr = language === "ar";
  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const serifFont = isAr ? "var(--font-changa)" : "Georgia, serif";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 97.3;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setMetricCount(target);
        clearInterval(interval);
      } else {
        setMetricCount(Math.round(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible]);

  const arrowIcon = isAr ? (
    <ArrowLeft className="w-4 h-4 transition-all duration-300 group-hover:-translate-x-1" />
  ) : (
    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
  );

  return (
    <>
      <style>{`
        @keyframes colReveal {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes metricSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .col-reveal-1 {
          animation: colReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .col-reveal-2 {
          animation: colReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }
        .col-reveal-3 {
          animation: colReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }
        .quote-border {
          animation: borderGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
          height: 0;
        }
        .metric-slide {
          animation: metricSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          opacity: 0;
        }
        .cta-fade {
          animation: fadeIn 0.6s ease 0.8s forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .col-reveal-1, .col-reveal-2, .col-reveal-3,
          .metric-slide, .cta-fade {
            animation: none !important;
            opacity: 1;
          }
          .quote-border {
            animation: none !important;
            height: 100%;
          }
        }
      `}</style>

      <section
        className="min-h-screen py-12 md:py-16 px-6 md:px-12 lg:px-20"
        style={{ background: "#f9f6f1" }}
      >
        {/* Masthead */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="border-t border-gray-300 mb-1" />
          <div className="border-t border-gray-300 mb-4" />
          <p
            className="text-center text-xs tracking-[0.3em] uppercase text-gray-400 mb-4"
            style={{ fontFamily: bodyFont }}
          >
            {t.masthead}
          </p>
          <div className="border-b border-gray-300 mb-1" />
          <div className="border-b border-gray-300 mb-3" />
          <p
            className="text-center text-sm text-gray-400 italic"
            style={{ fontFamily: serifFont }}
          >
            {t.dateline}
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 relative">
          {/* Column Dividers (desktop only) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[33.33%] w-px bg-gray-300/60" />
          <div className="hidden md:block absolute top-0 bottom-0 left-[66.66%] w-px bg-gray-300/60" />

          {/* Column 1 — Main Story */}
          <div
            className={`mb-8 md:mb-0 md:pr-6 ${isVisible ? "col-reveal-1" : "opacity-0"}`}
          >
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{
                fontFamily: serifFont,
                color: "#1a1a1a",
              }}
            >
              {t.headline}
            </h1>
            <p
              className="text-lg font-medium italic mb-5"
              style={{
                fontFamily: serifFont,
                color: "#e07a5f",
              }}
            >
              {t.deck}
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ fontFamily: bodyFont, color: "#374151" }}
            >
              {t.body1}
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ fontFamily: bodyFont, color: "#374151" }}
            >
              {t.body2}
            </p>
            <p
              className="text-xs italic text-gray-400"
              style={{ fontFamily: serifFont }}
            >
              {t.byline}
            </p>
          </div>

          {/* Column 2 — Pull Quote + Metric */}
          <div
            className={`mb-8 md:mb-0 md:px-2 ${isVisible ? "col-reveal-2" : "opacity-0"}`}
          >
            {/* Pull Quote */}
            <div className="relative mb-8">
              <div
                className={`absolute top-0 ${isAr ? "right-0" : "left-0"} w-1 bg-[#e07a5f] quote-border`}
                style={isVisible ? {} : { height: 0 }}
              />
              <blockquote
                className={`${isAr ? "pr-5" : "pl-5"} py-2`}
                style={{ fontFamily: serifFont }}
              >
                <p className="text-lg md:text-xl italic leading-relaxed text-gray-800">
                  &ldquo;{t.pullQuote}&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Metric Box */}
            <div
              className={`rounded-lg p-6 text-white ${isVisible ? "metric-slide" : "opacity-0"}`}
              style={{ background: "#e07a5f" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 opacity-80" />
                <Award className="w-5 h-5 opacity-80" />
              </div>
              <p
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{ fontFamily: headingFont }}
              >
                {metricCount.toFixed(1)}%
              </p>
              <p
                className="text-sm font-medium opacity-90 mb-1"
                style={{ fontFamily: bodyFont }}
              >
                {t.metricLabel}
              </p>
              <p
                className="text-xs opacity-70"
                style={{ fontFamily: bodyFont }}
              >
                {t.metricSub}
              </p>
            </div>
          </div>

          {/* Column 3 — Secondary Story + Events */}
          <div
            className={`md:pl-2 ${isVisible ? "col-reveal-3" : "opacity-0"}`}
          >
            <h2
              className="text-xl md:text-2xl font-bold mb-3 leading-tight"
              style={{ fontFamily: serifFont, color: "#1a1a1a" }}
            >
              {t.secondHeadline}
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: bodyFont, color: "#374151" }}
            >
              {t.secondBody}
            </p>

            {/* Upcoming Events Box */}
            <div className="border border-gray-300 rounded-lg p-4">
              <p
                className="text-xs tracking-[0.2em] uppercase font-bold mb-4"
                style={{
                  fontFamily: bodyFont,
                  color: "#e07a5f",
                }}
              >
                {t.upcomingHeader}
              </p>
              <div className="space-y-3">
                {t.events.map((event, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <Calendar
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#e07a5f" }}
                    />
                    <div>
                      <p
                        className="text-xs font-bold text-gray-500 uppercase"
                        style={{ fontFamily: bodyFont }}
                      >
                        {event.date}
                      </p>
                      <p
                        className="text-sm text-gray-800"
                        style={{ fontFamily: bodyFont }}
                      >
                        {event.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-300">
          <button
            className={`cta-fade group cursor-pointer flex items-center gap-2 transition-all duration-300 hover:gap-3 ${isVisible ? "cta-fade" : "opacity-0"}`}
            style={{
              fontFamily: serifFont,
              color: "#e07a5f",
              fontSize: "1rem",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <span className="font-medium">{t.cta}</span>
            {arrowIcon}
          </button>
        </div>
      </section>
    </>
  );
}
