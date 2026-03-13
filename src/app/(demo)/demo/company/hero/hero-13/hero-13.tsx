"use client";

import { ArrowRight, Circle, Radar, Target } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Orbit Model",
    title: "Trust, scale, and leadership arranged in gravitational order.",
    body:
      "We build strategic positioning systems for institutions with multiple audiences, long sales cycles, and reputations that need to hold under scrutiny.",
    primary: "Enter orbit map",
  },
  ar: {
    label: "نموذج المدار",
    title: "الثقة والتوسع والقيادة مرتبة ضمن جاذبية واضحة.",
    body:
      "نبني أنظمة تموضع استراتيجي للمؤسسات ذات الجماهير المتعددة ودورات البيع الطويلة والسمعة التي يجب أن تصمد تحت التدقيق.",
    primary: "ادخل خريطة المدار",
  },
} as const;

export function Hero13() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero13-ring-a { animation: hero13Spin 20s linear infinite; }
        .hero13-ring-b { animation: hero13SpinReverse 26s linear infinite; }
        .hero13-dot { animation: hero13Pulse 8s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .hero13-copy { animation: hero13Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero13Spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes hero13SpinReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes hero13Pulse {
          0%, 100% { transform: scale(0.92); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes hero13Reveal {
          from { opacity: 0; transform: translate3d(0, 26px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero13-ring-a, .hero13-ring-b, .hero13-dot, .hero13-copy { animation: none !important; }
        }
      `}</style>

      <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[80px]" />
      <div className="hero13-ring-a absolute left-1/2 top-1/2 h-[24rem] w-[24rem] rounded-full border border-white/[0.08]" />
      <div className="hero13-ring-b absolute left-1/2 top-1/2 h-[34rem] w-[34rem] rounded-full border border-white/[0.05]" />
      <div className="hero13-ring-a absolute left-1/2 top-1/2 h-[44rem] w-[44rem] rounded-full border border-white/[0.04]" />
      <div className="hero13-dot absolute left-[calc(50%+12rem)] top-1/2 h-3 w-3 rounded-full bg-white/70" />
      <div className="hero13-dot absolute left-1/2 top-[calc(50%-17rem)] h-2.5 w-2.5 rounded-full bg-white/50" />
      <div className="hero13-dot absolute left-[calc(50%-20rem)] top-[calc(50%+3rem)] h-4 w-4 rounded-full bg-white/35" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel tone="light">{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} inverse />
        </div>

        <div className="hero13-copy grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
          <div>
            <h1
              className="max-w-xl text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/68 sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4">
            {[
              ["Core", "The central promise: strategic credibility that scales."],
              ["Orbit A", "Investor, regulator, and leadership narratives synchronized."],
              ["Orbit B", "Commercial motion shaped around trust and precision."],
            ].map(([title, body], index) => {
              const Icon = index === 0 ? Target : index === 1 ? Radar : Circle;
              return (
                <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <Icon className="h-5 w-5 text-white/64" />
                  <div className="mt-4 text-lg font-semibold">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/58">{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
