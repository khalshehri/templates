"use client";

import { ArrowRight, Blocks, Building2, Network, ShieldCheck } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Infrastructure Grid",
    title: "A bento system for enterprises engineering scale.",
    body:
      "We choreograph real estate, logistics, and governance into one expansion framework that keeps growth sharp, accountable, and materially visible.",
    primary: "Map expansion system",
  },
  ar: {
    label: "شبكة البنية",
    title: "نظام بانتو للمؤسسات التي تبني التوسع بدقة.",
    body:
      "ننسق العقار واللوجستيات والحوكمة ضمن إطار توسع واحد يحافظ على النمو حاداً وقابلاً للمساءلة ومرئياً مادياً.",
    primary: "ارسم نظام التوسع",
  },
} as const;

export function Hero07() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  const cards = [
    {
      title: language === "en" ? "Network density" : "كثافة الشبكة",
      body:
        language === "en"
          ? "87 nodes assessed for capacity, redundancy, and capital fit."
          : "تم تقييم 87 عقدة من حيث السعة والاعتمادية وملاءمة رأس المال.",
      icon: Network,
      span: "sm:col-span-2",
    },
    {
      title: language === "en" ? "Asset readiness" : "جاهزية الأصول",
      body:
        language === "en"
          ? "Sites ranked by permit speed, workforce availability, and utility resilience."
          : "تم ترتيب المواقع حسب سرعة التصاريح وتوفر القوى العاملة ومرونة المرافق.",
      icon: Building2,
      span: "",
    },
    {
      title: language === "en" ? "Control layer" : "طبقة الضبط",
      body:
        language === "en"
          ? "Compliance and cyber governance embedded before rollout."
          : "الامتثال والحوكمة السيبرانية مدمجان قبل الإطلاق.",
      icon: ShieldCheck,
      span: "",
    },
    {
      title: language === "en" ? "Program architecture" : "هندسة البرنامج",
      body:
        language === "en"
          ? "From land strategy to commissioning, workstreams share one decision cadence."
          : "من استراتيجية الأراضي إلى التشغيل التجريبي، تتشارك المسارات إيقاع قرار موحد.",
      icon: Blocks,
      span: "sm:col-span-2",
    },
  ];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-white text-[#111827]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero07-grid { animation: hero07Shift 16s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero07-card { animation: hero07Rise 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero07Shift {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, -10px, 0); }
        }
        @keyframes hero07Rise {
          from { opacity: 0; transform: translate3d(0, 26px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero07-grid, .hero07-card { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_20%)]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel>{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="grid min-h-[calc(100vh-7rem)] gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="hero07-card flex flex-col justify-center">
            <h1
              className="max-w-xl text-[clamp(3rem,5.8vw,5.4rem)] font-semibold leading-[0.93] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600 sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-[#2563eb]/20 bg-[#2563eb]/8 px-6 py-3 text-sm font-semibold text-[#2563eb] transition-transform duration-300 hover:-translate-y-1">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="hero07-grid grid auto-rows-[minmax(160px,1fr)] gap-4 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`hero07-card ${card.span} border border-slate-200 bg-slate-50 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.05)]`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="rounded-full bg-[#dbeafe] p-3 text-[#2563eb] w-fit">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-10">
                      <h2 className="text-2xl font-semibold tracking-[-0.04em]">{card.title}</h2>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{card.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
