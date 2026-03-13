"use client";

import { ArrowRight, CirclePlay, RadioTower, Shield, Zap } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Signal Layer",
    title: "Three synchronized bands for operational momentum.",
    body:
      "A corporate communications system that turns executive intent into movement across partners, plants, and markets with one living signal architecture.",
    primary: "Open command stream",
    bands: [
      ["Strategy band", "Board, M&A, operating thesis, capital pacing"],
      ["Control band", "Cyber, compliance, legal, procurement, assurance"],
      ["Field band", "Plants, fleets, channels, service operations"],
    ],
  },
  ar: {
    label: "طبقة الإشارة",
    title: "ثلاثة نطاقات متزامنة لزخم تشغيلي مستمر.",
    body:
      "نظام اتصالات مؤسسي يحول التوجيه التنفيذي إلى حركة عبر الشركاء والمصانع والأسواق ضمن هندسة إشارة حية واحدة.",
    primary: "افتح تدفق القيادة",
    bands: [
      ["نطاق الاستراتيجية", "المجلس والاستحواذ والأطروحة التشغيلية وإيقاع رأس المال"],
      ["نطاق الضبط", "الأمن السيبراني والامتثال والقانون والمشتريات والضمان"],
      ["نطاق الميدان", "المصانع والأساطيل والقنوات وعمليات الخدمة"],
    ],
  },
} as const;

export function Hero05() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero05-band { animation: hero05Slide 15s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero05-ticker { animation: hero05Ticker 28s linear infinite; }
        .hero05-copy { animation: hero05Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero05Slide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(12px); }
        }
        @keyframes hero05Ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes hero05Reveal {
          from { opacity: 0; transform: translate3d(0, 32px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero05-band, .hero05-ticker, .hero05-copy { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_26%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel tone="light">{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} inverse />
        </div>

        <div className="hero05-copy flex flex-1 flex-col justify-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            {t.bands.map(([title, desc], index) => {
              const Icon = index === 0 ? RadioTower : index === 1 ? Shield : Zap;
              return (
                <div
                  key={title}
                  className={`hero05-band relative grid gap-5 px-6 py-6 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:items-center ${
                    index === 0
                      ? "bg-[#111111]"
                      : index === 1
                        ? "bg-[#151515]"
                        : "bg-[#1b1b1b]"
                  } ${index !== 2 ? "border-b border-white/6" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full border border-white/10 bg-white/5 p-3 text-[#9ca3af]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/78">
                      {title}
                    </div>
                  </div>
                  <div className="max-w-2xl text-sm leading-7 text-white/62">{desc}</div>
                  <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-white/82 transition-colors duration-300 hover:text-white">
                    Inspect
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-10 max-w-4xl">
            <h1
              className="text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {t.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1">
                {t.primary}
                <CirclePlay className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-white/10 pt-6">
          <div className="hero05-ticker flex min-w-max gap-8 text-xs uppercase tracking-[0.32em] text-[#9ca3af]">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex gap-8">
                {[
                  "Governance lattice",
                  "Signal integrity",
                  "Enterprise routing",
                  "Board to field continuity",
                  "Critical path visibility",
                ].map((item) => (
                  <span key={`${idx}-${item}`}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
