"use client";

import { ArrowRight, ShipWheel, Waves, Wind } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Maritime Scale",
    title: "Wave-built infrastructure for organizations managing motion at scale.",
    body:
      "Ports, utilities, and national infrastructure programs need more than a brand refresh. They need a strategic language that carries trust across every stakeholder horizon.",
    primary: "Navigate infrastructure story",
  },
  ar: {
    label: "موجة التوسع",
    title: "بنية موجية للمؤسسات التي تدير الحركة على نطاق واسع.",
    body:
      "الموانئ والمرافق وبرامج البنية الوطنية لا تحتاج مجرد تحديث بصري، بل لغة استراتيجية تحمل الثقة عبر كل أفق من أصحاب المصلحة.",
    primary: "انتقل إلى سردية البنية",
  },
} as const;

export function Hero11() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#0f172a,#1e3a5f)] text-white"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero11-wave-a { animation: hero11WaveA 16s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero11-wave-b { animation: hero11WaveB 20s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero11-copy { animation: hero11Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero11WaveA {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-3%, 2%, 0); }
        }
        @keyframes hero11WaveB {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(3%, -1%, 0); }
        }
        @keyframes hero11Reveal {
          from { opacity: 0; transform: translate3d(0, 28px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero11-wave-a, .hero11-wave-b, .hero11-copy { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-x-0 bottom-0 h-[42vh] overflow-hidden">
        <svg className="hero11-wave-a absolute bottom-0 w-[140%] max-w-none text-white/95" viewBox="0 0 1440 480" fill="none">
          <path
            d="M0 128L48 149.3C96 171 192 213 288 224C384 235 480 213 576 202.7C672 192 768 192 864 208C960 224 1056 256 1152 250.7C1248 245 1344 203 1392 181.3L1440 160V480H1392C1344 480 1248 480 1152 480C1056 480 960 480 864 480C768 480 672 480 576 480C480 480 384 480 288 480C192 480 96 480 48 480H0V128Z"
            fill="currentColor"
          />
        </svg>
        <svg className="hero11-wave-b absolute bottom-0 w-[140%] max-w-none text-white/70" viewBox="0 0 1440 480" fill="none">
          <path
            d="M0 224L48 202.7C96 181 192 139 288 149.3C384 160 480 224 576 245.3C672 267 768 245 864 234.7C960 224 1056 224 1152 240C1248 256 1344 288 1392 304L1440 320V480H1392C1344 480 1248 480 1152 480C1056 480 960 480 864 480C768 480 672 480 576 480C480 480 384 480 288 480C192 480 96 480 48 480H0V224Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel tone="light">{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} inverse />
        </div>

        <div className="hero11-copy grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div>
            <h1
              className="max-w-3xl text-[clamp(3rem,6vw,5.7rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/74 sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition-transform duration-300 hover:-translate-y-1">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-4">
            {[
              ["Strategic tide", "We align national narrative, regulator confidence, and public-facing clarity."],
              ["Delivery current", "Projects, procurement, and communications move as one visible system."],
              ["Trust horizon", "Institutional credibility is reinforced before launch, not after the fact."],
            ].map(([title, body], index) => {
              const Icon = index === 0 ? Waves : index === 1 ? Wind : ShipWheel;
              return (
                <div key={title} className="rounded-[1.8rem] border border-white/12 bg-white/6 p-5 backdrop-blur-xl">
                  <Icon className="h-5 w-5 text-white/72" />
                  <div className="mt-4 text-lg font-semibold">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/66">{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
