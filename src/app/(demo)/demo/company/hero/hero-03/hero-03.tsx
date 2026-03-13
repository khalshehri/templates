"use client";

import { ArrowUpRight, CircleDashed, TrendingUp } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Growth Duality",
    title: "Finance on one side. Market ambition on the other.",
    body:
      "For enterprises balancing discipline and expansion, we connect treasury rigor with commercial momentum in a single, executive-grade growth narrative.",
    primary: "Explore capital strategy",
    secondary: "Read market thesis",
    stats: [
      ["$4.2B", "portfolio capital governed"],
      ["17", "growth markets activated"],
    ],
  },
  ar: {
    label: "ثنائية النمو",
    title: "التمويل في جانب. وطموح السوق في الجانب الآخر.",
    body:
      "للشركات التي توازن بين الانضباط والتوسع، نصل صرامة الخزانة بزخم السوق ضمن سردية نمو تنفيذية متكاملة.",
    primary: "استكشف استراتيجية رأس المال",
    secondary: "اقرأ رؤية السوق",
    stats: [
      ["4.2B$", "رأس مال خاضع للحكم المؤسسي"],
      ["17", "سوق نمو تم تفعيلها"],
    ],
  },
} as const;

export function Hero03() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero03-seam { animation: hero03Glow 9s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .hero03-panel-left { animation: hero03Left 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero03-panel-right { animation: hero03Right 1s cubic-bezier(0.16, 1, 0.3, 1) both 0.08s; }
        @keyframes hero03Glow {
          0%, 100% { box-shadow: 0 0 0 rgba(255,255,255,0.1); opacity: 0.6; }
          50% { box-shadow: 0 0 50px rgba(255,255,255,0.35); opacity: 1; }
        }
        @keyframes hero03Left {
          from { opacity: 0; transform: translate3d(-26px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes hero03Right {
          from { opacity: 0; transform: translate3d(26px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero03-seam, .hero03-panel-left, .hero03-panel-right { animation: none !important; }
        }
      `}</style>

      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hero03-panel-left relative flex flex-col justify-between overflow-hidden bg-[#1e1b4b] px-6 py-8 text-white sm:px-10 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_22%),radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.24),transparent_32%)]" />
          <div className="relative flex items-center justify-between">
            <HeroLabel tone="light">{t.label}</HeroLabel>
            <LocaleToggle language={language} setLanguage={setLanguage} inverse />
          </div>
          <div className="relative py-14">
            <p className="text-xs uppercase tracking-[0.32em] text-white/58">
              Treasury. governance. downside protection.
            </p>
            <h1
              className="mt-6 max-w-2xl text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/72">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10">
              {t.primary}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="relative grid gap-3 sm:grid-cols-2">
            {t.stats.map(([value, label]) => (
              <div key={label} className="rounded-[1.75rem] border border-white/12 bg-white/7 p-4">
                <div className="text-2xl font-semibold">{value}</div>
                <div className="mt-1 text-xs text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero03-panel-right relative flex flex-col justify-between overflow-hidden bg-[#ff6b6b] px-6 py-8 text-[#2b0c11] sm:px-10 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.35),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_32%)]" />
          <div className="relative ml-auto rounded-full border border-[#2b0c11]/12 bg-white/30 p-3">
            <CircleDashed className="h-6 w-6" />
          </div>
          <div className="relative max-w-xl self-end py-12 text-right">
            <p className="text-xs uppercase tracking-[0.32em] text-[#2b0c11]/55">
              demand. expansion. market density.
            </p>
            <h2
              className="mt-6 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.05em]"
              style={{ fontFamily: headingFont as string }}
            >
              Build the commercial story investors can feel.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#2b0c11]/75">
              Regional growth, category capture, and channel readiness staged into one legible move set.
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#2b0c11] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
              {t.secondary}
              <TrendingUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="hero03-seam pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/40 lg:block" />
    </section>
  );
}
