"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: "Precision Engineering for Complex Systems",
    body: "We architect enterprise solutions that scale across borders, delivering measurable outcomes through disciplined engineering and relentless innovation.",
    cta: "View Capabilities",
    since: "Since 2003",
    countries: "Countries Served",
    tags: [
      "Cloud Infrastructure",
      "AI & Analytics",
      "Cybersecurity",
      "Digital Transformation",
    ],
  },
  ar: {
    heading: "الهندسة الدقيقة للأنظمة المعقدة",
    body: "نصمم حلولاً مؤسسية قابلة للتوسع عبر الحدود، ونقدم نتائج قابلة للقياس من خلال الهندسة المنضبطة والابتكار المستمر.",
    cta: "عرض القدرات",
    since: "منذ 2003",
    countries: "دولة",
    tags: [
      "البنية التحتية السحابية",
      "الذكاء الاصطناعي والتحليلات",
      "الأمن السيبراني",
      "التحول الرقمي",
    ],
  },
};

export function Hero07({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const headingFont = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const bodyFont = isAr ? "var(--font-tajawal)" : "var(--font-inter)";

  const [count, setCount] = useState(0);
  const targetCount = 47;

  useEffect(() => {
    setCount(0);
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [language]);

  return (
    <section className="min-h-screen bg-gray-200 flex items-center justify-center p-1 md:p-4">
      <style>{`
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }

        .hero07-cell {
          animation: heroFadeIn 0.6s ease-out both;
        }

        .hero07-cell-0 { animation-delay: 0s; }
        .hero07-cell-1 { animation-delay: 0.15s; }
        .hero07-cell-2 { animation-delay: 0.3s; }
        .hero07-cell-3 { animation-delay: 0.45s; }

        .hero07-pulse:hover {
          animation: heroPulse 0.8s ease-in-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero07-cell {
            animation: none;
            opacity: 1;
          }
          .hero07-pulse:hover {
            animation: none;
          }
        }
      `}</style>

      <div
        className="w-full max-w-6xl bg-gray-200 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-[1px] min-h-[80vh]"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Cell A — Main content (col 1-2, row 1-2) */}
        <div className="hero07-cell hero07-cell-0 bg-white md:col-span-2 md:row-span-2 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
            style={{ fontFamily: headingFont }}
          >
            {t.heading}
          </h1>

          <p
            className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: bodyFont }}
          >
            {t.body}
          </p>

          <div className="mt-8">
            <button
              className="cursor-pointer transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-8 py-3.5 rounded-none inline-flex items-center gap-2 group"
              style={{ fontFamily: bodyFont }}
            >
              {t.cta}
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                  isAr ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Cell B — Metric (col 3, row 1) */}
        <div className="hero07-cell hero07-cell-1 bg-white flex flex-col items-center justify-center p-8 md:p-6">
          <span
            className="text-7xl md:text-8xl font-black text-blue-600 leading-none tabular-nums"
            style={{ fontFamily: headingFont }}
          >
            {count}
          </span>
          <span
            className="mt-3 text-gray-500 text-sm font-medium uppercase tracking-widest text-center"
            style={{ fontFamily: bodyFont }}
          >
            {t.countries}
          </span>
        </div>

        {/* Cell C — Since badge (col 3, row 2) */}
        <div className="hero07-cell hero07-cell-2 hero07-pulse bg-blue-600 flex flex-col items-center justify-center p-8 md:p-6 cursor-pointer transition-all duration-300 hover:bg-blue-700">
          <span
            className="text-white text-2xl md:text-3xl font-bold"
            style={{ fontFamily: headingFont }}
          >
            {t.since}
          </span>
          <ArrowRight
            className={`w-5 h-5 text-white/70 mt-3 ${isAr ? "rotate-180" : ""}`}
          />
        </div>

        {/* Cell D — Tags strip (col 1-3, row 3) */}
        <div className="hero07-cell hero07-cell-3 bg-white md:col-span-3 flex flex-wrap items-center justify-center gap-3 md:gap-4 p-6 md:p-8">
          {t.tags.map((tag, i) => (
            <span
              key={i}
              className="cursor-pointer transition-all duration-300 border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-none"
              style={{ fontFamily: bodyFont }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
