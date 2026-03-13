"use client";

import { ArrowRight, BriefcaseBusiness, Layers2, ShieldHalf } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Advisory Platform",
    title: "A floating command card for investment-grade execution.",
    body:
      "For finance and advisory teams, we package diligence, scenario analysis, and board communication into a clear operating surface executives actually use.",
    primary: "Inspect advisory stack",
    stats: [
      ["Debt capacity", "Reframed for 3 expansion scenarios"],
      ["Risk window", "Contained with covenant-aware pacing"],
      ["Narrative pack", "Built for board, lenders, and investors"],
    ],
  },
  ar: {
    label: "منصة استشارية",
    title: "بطاقة قيادة عائمة لتنفيذ جاهز للاستثمار.",
    body:
      "للفرق المالية والاستشارية، نجمع الفحص النافي للجهالة وتحليل السيناريوهات واتصال مجلس الإدارة في سطح تشغيلي واضح يستخدمه التنفيذيون فعلاً.",
    primary: "استعرض الطبقة الاستشارية",
    stats: [
      ["قدرة الدين", "أعيدت صياغتها لثلاثة سيناريوهات توسع"],
      ["نافذة المخاطر", "تم ضبطها بإيقاع واعٍ للالتزامات"],
      ["حزمة السرد", "مبنية للمجلس والممولين والمستثمرين"],
    ],
  },
} as const;

export function Hero06() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#eef2f7] text-[#0f172a]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero06-card { animation: hero06Float 11s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .hero06-glow { animation: hero06Glow 14s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero06-copy { animation: hero06Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero06Float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); }
          50% { transform: translate3d(0, -12px, 0) rotate(0deg); }
        }
        @keyframes hero06Glow {
          0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.5; }
          100% { transform: translate3d(12px, -20px, 0) scale(1.12); opacity: 0.9; }
        }
        @keyframes hero06Reveal {
          from { opacity: 0; transform: translate3d(0, 28px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero06-card, .hero06-glow, .hero06-copy { animation: none !important; }
        }
      `}</style>

      <div className="hero06-glow absolute right-10 top-12 h-64 w-64 rounded-full bg-[#2563eb]/14 blur-[90px]" />
      <div className="hero06-glow absolute bottom-16 left-8 h-56 w-56 rounded-full bg-[#93c5fd]/40 blur-[70px]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel>{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
          <div className="hero06-copy">
            <h1
              className="max-w-2xl text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="hero06-card relative mx-auto w-full max-w-xl">
            <div className="absolute -left-6 top-10 hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-4 shadow-[0_30px_80px_rgba(37,99,235,0.18)] md:block">
              <ShieldHalf className="h-6 w-6 text-[#2563eb]" />
              <div className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-500">Risk-managed</div>
            </div>
            <div className="absolute -right-4 bottom-12 hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:block">
              <BriefcaseBusiness className="h-6 w-6 text-slate-700" />
              <div className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-500">Board-ready</div>
            </div>

            <div className="rounded-[2.25rem] border border-white/85 bg-white/75 p-6 shadow-[0_50px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Execution canvas</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-900">Capital & control overview</div>
                </div>
                <div className="rounded-full bg-[#dbeafe] p-3 text-[#2563eb]">
                  <Layers2 className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {t.stats.map(([title, desc], index) => (
                  <div
                    key={title}
                    className="rounded-[1.6rem] border border-slate-200 bg-[#f8fbff] p-4"
                    style={{ marginInlineStart: `${index * 12}px` }}
                  >
                    <div className="text-sm font-semibold text-slate-900">{title}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
