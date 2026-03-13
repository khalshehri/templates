"use client";

import { ArrowRight, BadgeCheck, Compass, Workflow } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Transformation Geometry",
    title: "Infrastructure thinking, cut with sharp strategic edges.",
    body:
      "We help industrial groups redesign decision velocity across networks, facilities, and capital programs without losing governance depth.",
    primary: "Enter transformation brief",
    points: [
      "Program controls embedded from day one",
      "Scenario planning for board and field teams",
      "Regional execution architecture with shared accountability",
    ],
  },
  ar: {
    label: "هندسة التحول",
    title: "تفكير بنيوي للبنية التحتية بحدة استراتيجية دقيقة.",
    body:
      "نساعد المجموعات الصناعية على إعادة تصميم سرعة القرار عبر الشبكات والمرافق وبرامج رأس المال دون خسارة عمق الحوكمة.",
    primary: "ادخل إلى موجز التحول",
    points: [
      "ضوابط البرامج مدمجة من اليوم الأول",
      "تخطيط سيناريوهات للمجلس والفرق الميدانية",
      "هندسة تنفيذ إقليمية بمساءلة مشتركة",
    ],
  },
} as const;

export function Hero04() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-white text-[#0f172a]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero04-clip { animation: hero04Shift 14s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero04-card { animation: hero04Rise 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero04-grid { animation: hero04Pan 20s linear infinite; }
        @keyframes hero04Shift {
          0% { clip-path: polygon(38% 0, 100% 0, 100% 100%, 54% 100%); }
          100% { clip-path: polygon(44% 0, 100% 0, 100% 100%, 60% 100%); }
        }
        @keyframes hero04Rise {
          from { opacity: 0; transform: translate3d(0, 28px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes hero04Pan {
          from { transform: translateX(0); }
          to { transform: translateX(48px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero04-clip, .hero04-card, .hero04-grid { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[#f8fafc]" />
      <div className="hero04-clip absolute inset-0 bg-[#1e293b]" />
      <div className="hero04-grid absolute right-0 top-0 h-full w-[52%] opacity-20 [background-image:linear-gradient(rgba(37,99,235,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.25)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel>{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="hero04-card">
            <h1
              className="max-w-3xl text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.93] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="mt-12 grid gap-4">
              {t.points.map((point, index) => {
                const Icon = index === 0 ? BadgeCheck : index === 1 ? Compass : Workflow;
                return (
                  <div key={point} className="flex items-start gap-4 rounded-[1.6rem] border border-slate-200 bg-white/75 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.06)]">
                    <div className="rounded-full bg-[#dbeafe] p-3 text-[#2563eb]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-7 text-[#334155]">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero04-card lg:pl-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.32)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Delivery map
                  </div>
                  <div className="mt-2 text-2xl font-semibold">4-layer control stack</div>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                  Live
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  ["Corporate office", "Capital policy, portfolio sequencing, governance lanes"],
                  ["Regional command", "Supplier resiliency, permits, risk escalation"],
                  ["Site execution", "Field readiness, shift planning, productivity cadence"],
                ].map(([title, desc], index) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4"
                    style={{ marginInlineStart: `${index * 16}px` }}
                  >
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="mt-2 text-sm leading-7 text-white/64">{desc}</div>
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
