"use client";

import { ArrowRight, FoldHorizontal, Newspaper, Quote } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Editorial Trust",
    title: "A newspaper-style hero for institutions that lead through substance.",
    body:
      "When the message must feel authoritative, legible, and enduring, editorial structure outperforms performance marketing theatrics every time.",
    primary: "Read the corporate brief",
  },
  ar: {
    label: "ثقة تحريرية",
    title: "واجهة افتتاحية للمؤسسات التي تقود عبر المضمون.",
    body:
      "حين يجب أن تبدو الرسالة ذات سلطة ووضوح واستدامة، تتفوق البنية التحريرية على مسرحية التسويق الأدائي في كل مرة.",
    primary: "اقرأ الموجز المؤسسي",
  },
} as const;

export function Hero14() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#f9f6f1] text-[#2f2a26]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero14-column { animation: hero14Lift 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero14-rule { animation: hero14Rule 9s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        @keyframes hero14Lift {
          from { opacity: 0; transform: translate3d(0, 24px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes hero14Rule {
          0%, 100% { transform: scaleX(0.35); opacity: 0.4; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero14-column, .hero14-rule { animation: none !important; }
        }
      `}</style>

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border-b border-[#d6cfc3] pb-4">
          <HeroLabel>{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="hero14-rule mt-5 h-px w-full origin-left bg-[#e07a5f]/40" />

        <div className="grid min-h-[calc(100vh-8rem)] gap-8 py-10 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
          <div className="hero14-column border-b border-[#d6cfc3] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8" style={{ animationDelay: "0.04s" }}>
            <div className="text-xs uppercase tracking-[0.28em] text-[#8a7464]">column one</div>
            <p className="mt-6 text-sm leading-8 text-[#6b5c4f]">
              Legacy brands earn credibility through editorial restraint, not decorative excess.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-[#dccfbe] bg-[#fffdfa] p-4">
              <Newspaper className="h-5 w-5 text-[#e07a5f]" />
              <div className="mt-4 text-lg font-semibold">Substance-first communication</div>
              <p className="mt-2 text-sm leading-7 text-[#6b5c4f]">
                A structure that lets serious businesses sound like themselves again.
              </p>
            </div>
          </div>

          <div className="hero14-column" style={{ animationDelay: "0.1s" }}>
            <div className="text-xs uppercase tracking-[0.28em] text-[#8a7464]">lead story</div>
            <h1
              className="mt-5 text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-[0.93] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6b5c4f] sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#2f2a26] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="hero14-column border-t border-[#d6cfc3] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" style={{ animationDelay: "0.16s" }}>
            <div className="flex items-center gap-3 text-[#e07a5f]">
              <Quote className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.28em]">editorial note</span>
            </div>
            <p className="mt-5 text-lg leading-8 text-[#3d342d]">
              “In enterprise categories, trust is typography, pacing, and proof arranged with discipline.”
            </p>
            <div className="mt-10 rounded-[1.5rem] border border-[#dccfbe] bg-[#fffdfa] p-4">
              <FoldHorizontal className="h-5 w-5 text-[#e07a5f]" />
              <div className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#8a7464]">
                Side brief
              </div>
              <p className="mt-3 text-sm leading-7 text-[#6b5c4f]">
                Terracotta accents, paper tone, and column rhythm create a premium corporate warmth without losing authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
