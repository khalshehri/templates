"use client";

import { ArrowRight, FileStack, Layers3, Stamp } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Leadership Papers",
    title: "Layered authority for firms built on trust, legacy, and judgment.",
    body:
      "We shape leadership narratives for institutions that cannot afford generic positioning, combining governance depth with a contemporary market presence.",
    primary: "Review leadership dossier",
  },
  ar: {
    label: "أوراق القيادة",
    title: "سلطة متراكبة للشركات المبنية على الثقة والإرث والحكم الرشيد.",
    body:
      "نصوغ سرديات القيادة للمؤسسات التي لا تحتمل تموضعاً عاماً، عبر دمج عمق الحوكمة مع حضور سوقي معاصر.",
    primary: "استعرض ملف القيادة",
  },
} as const;

export function Hero10() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#fefefe] text-[#111827]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero10-paper-a { animation: hero10PaperA 12s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero10-paper-b { animation: hero10PaperB 14s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero10-copy { animation: hero10Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero10PaperA {
          from { transform: rotate(-7deg) translate3d(0, 0, 0); }
          to { transform: rotate(-4deg) translate3d(10px, -12px, 0); }
        }
        @keyframes hero10PaperB {
          from { transform: rotate(4deg) translate3d(0, 0, 0); }
          to { transform: rotate(7deg) translate3d(-10px, 10px, 0); }
        }
        @keyframes hero10Reveal {
          from { opacity: 0; transform: translate3d(0, 30px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero10-paper-a, .hero10-paper-b, .hero10-copy { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,24,39,0.04),transparent_26%)]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel>{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
          <div className="hero10-copy">
            <h1
              className="max-w-xl text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.93] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="hero10-paper-a absolute inset-0 rounded-[2rem] border border-[#d1d5db] bg-[#f5f5f5] shadow-[0_30px_90px_rgba(15,23,42,0.08)]" />
            <div className="hero10-paper-b absolute inset-[3%] rounded-[2rem] border border-[#d1d5db] bg-[#fafafa] shadow-[0_30px_90px_rgba(15,23,42,0.08)]" />
            <div className="hero10-copy relative rounded-[2rem] border border-[#d1d5db] bg-white p-6 shadow-[0_40px_100px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Chairman brief</div>
                  <div className="mt-2 text-2xl font-semibold">Institutional positioning memo</div>
                </div>
                <Stamp className="h-6 w-6 text-slate-400" />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["Narrative spine", "Purpose, market relevance, and governance signal aligned."],
                  ["Stakeholder lens", "Customers, talent, regulators, and investors translated into one storyline."],
                  ["Legacy frame", "Credibility retained while the future-facing proposition becomes sharper."],
                  ["Delivery layer", "Chair speech, investor deck, website, and annual report all synchronized."],
                ].map(([title, desc], index) => {
                  const Icon = index % 2 === 0 ? FileStack : Layers3;
                  return (
                    <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                      <Icon className="h-5 w-5 text-slate-500" />
                      <div className="mt-4 text-sm font-semibold text-slate-900">{title}</div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">{desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
