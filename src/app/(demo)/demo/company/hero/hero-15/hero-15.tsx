"use client";

import { ArrowRight, Eye, Layers, ScanSearch } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Reveal System",
    title: "Momentum revealed in measured horizontal cuts.",
    body:
      "For transformation leaders, clarity is earned one layer at a time: executive story, operating discipline, and visible confidence across the whole enterprise.",
    primary: "Reveal momentum plan",
  },
  ar: {
    label: "نظام الانكشاف",
    title: "زخم ينكشف عبر شرائح أفقية محسوبة.",
    body:
      "لقادة التحول، لا تُمنح الوضوح دفعة واحدة: بل يُبنى طبقة بعد طبقة بين سردية القيادة والانضباط التشغيلي والثقة المرئية عبر المؤسسة كلها.",
    primary: "اكشف خطة الزخم",
  },
} as const;

export function Hero15() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#0e0e0e] text-white"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero15-slat:nth-child(1) { animation-delay: 0s; }
        .hero15-slat:nth-child(2) { animation-delay: 0.08s; }
        .hero15-slat:nth-child(3) { animation-delay: 0.16s; }
        .hero15-slat:nth-child(4) { animation-delay: 0.24s; }
        .hero15-slat:nth-child(5) { animation-delay: 0.32s; }
        .hero15-slat { animation: hero15Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero15-glow { animation: hero15Glow 12s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        @keyframes hero15Reveal {
          from { opacity: 0; transform: translate3d(-30px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes hero15Glow {
          from { transform: translate3d(0, 0, 0) scale(1); opacity: 0.35; }
          to { transform: translate3d(20px, -16px, 0) scale(1.1); opacity: 0.85; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero15-slat, .hero15-glow { animation: none !important; }
        }
      `}</style>

      <div className="hero15-glow absolute right-0 top-1/4 h-80 w-80 rounded-full bg-white/10 blur-[140px]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel tone="light">{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} inverse />
        </div>

        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="hero15-slat flex min-h-[92px] items-center rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              >
                {index === 2 ? (
                  <h1
                    className="max-w-3xl text-[clamp(2.6rem,5vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
                    style={{ fontFamily: headingFont as string }}
                  >
                    {t.title}
                  </h1>
                ) : (
                  <div className="text-sm uppercase tracking-[0.28em] text-white/40">
                    Layer {String(index + 1).padStart(2, "0")}
                  </div>
                )}
              </div>
            ))}
            <p className="max-w-2xl px-2 text-base leading-8 text-white/68 sm:text-lg">
              {t.body}
            </p>
            <div className="px-2">
              <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/14">
                {t.primary}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              ["Vision layer", "Executive narrative aligned before launch.", Eye],
              ["Control layer", "Program governance visible to every sponsor.", Layers],
              ["Proof layer", "Evidence structured for investors, media, and teams.", ScanSearch],
            ].map(([title, body, Icon]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <Icon className="h-5 w-5 text-white/70" />
                <div className="mt-4 text-lg font-semibold">{title}</div>
                <p className="mt-2 text-sm leading-7 text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
