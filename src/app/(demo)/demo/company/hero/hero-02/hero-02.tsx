"use client";

import { ArrowRight, ChartColumnBig, ChevronRight, Layers3 } from "lucide-react";
import {
  HeroLabel,
  LocaleToggle,
  LogoStrip,
  useHeroLocale,
} from "../_shared";

const content = {
  en: {
    label: "Operating Blueprint",
    title: "Designing institutional growth with editorial discipline.",
    body:
      "We build long-horizon growth systems for holding groups, sovereign vehicles, and listed enterprises that need strategic precision with board-level aesthetics.",
    primary: "Review operating model",
    link: "See three flagship mandates",
    leftTitle: "Portfolio architecture",
    leftBody:
      "A cross-functional planning model for corporate development, capital allocation, and succession strategy.",
    stats: [
      ["A+", "governance posture"],
      ["74", "priority decisions mapped"],
      ["6", "workstreams synchronized"],
    ],
    logos: ["Meridian", "Northwave", "Aster", "Verdict", "Caspian"],
  },
  ar: {
    label: "مخطط التشغيل",
    title: "نبني النمو المؤسسي بانضباط تحريري رفيع.",
    body:
      "نصمم أنظمة نمو طويلة الأفق للمجموعات القابضة والصناديق السيادية والشركات المدرجة التي تحتاج دقة استراتيجية بمستوى مجلس الإدارة.",
    primary: "استعرض نموذج التشغيل",
    link: "شاهد ثلاث مهام رئيسية",
    leftTitle: "هندسة المحفظة",
    leftBody:
      "نموذج تخطيط متقاطع الوظائف للتطوير المؤسسي وتخصيص رأس المال واستراتيجية التعاقب القيادي.",
    stats: [
      ["A+", "جاهزية الحوكمة"],
      ["74", "قراراً استراتيجياً محدداً"],
      ["6", "مسارات عمل متزامنة"],
    ],
    logos: ["ميريديان", "نورث ويف", "أستر", "فيردكت", "كاسبيان"],
  },
} as const;

export function Hero02() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#faf8f5] text-[#292524]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero02-divider::after { content: ""; position: absolute; inset: 7% 0; width: 1px; background: linear-gradient(to bottom, transparent, rgba(120,113,108,0.3), transparent); animation: hero02Line 8s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .hero02-panel { animation: hero02Slide 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero02-card { animation: hero02Float 12s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        @keyframes hero02Line {
          0%, 100% { opacity: 0.35; transform: scaleY(0.9); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes hero02Slide {
          from { opacity: 0; transform: translate3d(0, 36px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes hero02Float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero02-divider::after, .hero02-panel, .hero02-card { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_34%),linear-gradient(135deg,rgba(120,113,108,0.06),transparent_35%,rgba(120,113,108,0.03))]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel>{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="mt-10 grid min-h-[calc(100vh-8rem)] gap-10 lg:grid-cols-[minmax(0,0.6fr)_40px_minmax(0,0.4fr)]">
          <div className="hero02-panel flex flex-col justify-center">
            <h1
              className="max-w-3xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#292524]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#57534e] sm:text-lg">
              {t.body}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#292524] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
                {t.primary}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#78716c] transition-colors duration-300 hover:text-[#292524]">
                {t.link}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-16">
              <LogoStrip items={t.logos} />
            </div>
          </div>

          <div className="hero02-divider relative hidden lg:block" />

          <div className="hero02-card flex items-end">
            <div className="w-full rounded-[2rem] border border-[#d6d3d1] bg-white/80 p-6 shadow-[0_30px_80px_rgba(41,37,36,0.08)] backdrop-blur">
              <div className="flex items-center justify-between">
                <HeroLabel>{t.leftTitle}</HeroLabel>
                <div className="flex gap-2">
                  <div className="rounded-full bg-[#f5f5f4] p-3">
                    <Layers3 className="h-5 w-5 text-[#57534e]" />
                  </div>
                  <div className="rounded-full bg-[#f5f5f4] p-3">
                    <ChartColumnBig className="h-5 w-5 text-[#57534e]" />
                  </div>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#57534e]">
                {t.leftBody}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.stats.map(([value, label]) => (
                  <div key={label} className="rounded-[1.5rem] border border-[#e7e5e4] bg-[#fafaf9] p-4">
                    <div className="text-2xl font-semibold text-[#292524]">{value}</div>
                    <div className="mt-1 text-xs text-[#78716c]">{label}</div>
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
