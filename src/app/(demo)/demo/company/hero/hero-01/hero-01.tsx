"use client";

import {
  ArrowRight,
  Play,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import {
  HeroLabel,
  LocaleToggle,
  MetricChip,
  useHeroLocale,
} from "../_shared";

const content = {
  en: {
    label: "Strategy Command",
    title: "Boardroom clarity for companies navigating high-stakes change.",
    body:
      "We align capital, operations, and leadership around one measurable transformation agenda so executive teams move with confidence, not noise.",
    primary: "Book executive briefing",
    secondary: "Watch the methodology",
    cardTitle: "Transformation pulse",
    cardBody: "Global operating model, procurement reset, and capital sequencing now synchronized across 19 markets.",
    metrics: [
      { value: "31%", label: "operating margin uplift tracked" },
      { value: "19", label: "markets under one decision model" },
      { value: "11 wks", label: "to board-ready action plan" },
    ],
  },
  ar: {
    label: "غرفة الاستراتيجية",
    title: "وضوح تنفيذي للشركات التي تقود تحولات عالية الأثر.",
    body:
      "نربط رأس المال والعمليات والقيادة ضمن أجندة تحول واحدة قابلة للقياس حتى تتحرك الفرق التنفيذية بثقة لا بضجيج.",
    primary: "احجز جلسة تنفيذية",
    secondary: "شاهد المنهجية",
    cardTitle: "نبض التحول",
    cardBody:
      "نموذج التشغيل العالمي وإعادة ضبط المشتريات وتسلسل رأس المال أصبحت متزامنة عبر 19 سوقاً.",
    metrics: [
      { value: "31%", label: "تحسن في الهامش التشغيلي" },
      { value: "19", label: "سوقاً ضمن نموذج قرار موحد" },
      { value: "11 أسبوع", label: "لخطة جاهزة لمجلس الإدارة" },
    ],
  },
} as const;

export function Hero01() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#08090d] text-white"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero01-orb { animation: hero01Pulse 14s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .hero01-grid { animation: hero01Drift 22s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero01-ring { animation: hero01Spin 18s linear infinite; }
        .hero01-copy { animation: hero01Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero01Pulse {
          0%, 100% { transform: scale(1) translate3d(0, 0, 0); opacity: 0.5; }
          50% { transform: scale(1.16) translate3d(0, -20px, 0); opacity: 0.9; }
        }
        @keyframes hero01Drift {
          0% { transform: translate3d(-2%, 0, 0); }
          100% { transform: translate3d(2%, 3%, 0); }
        }
        @keyframes hero01Spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hero01Reveal {
          from { opacity: 0; transform: translate3d(0, 32px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero01-orb, .hero01-grid, .hero01-ring, .hero01-copy { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.26),_transparent_42%),radial-gradient(circle_at_75%_35%,_rgba(79,70,229,0.2),_transparent_18%)]" />
      <div className="hero01-grid absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="hero01-orb absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366f1]/20 blur-[140px]" />
      <div className="hero01-ring absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel tone="light">{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} inverse />
        </div>

        <div className="hero01-copy flex flex-1 flex-col items-center justify-center py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-[#6366f1]" />
            Fortune 500 operating system
          </div>

          <h1
            className="mt-8 max-w-5xl text-[clamp(3rem,8vw,7.1rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
            style={{ fontFamily: headingFont as string }}
          >
            {t.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {t.body}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/14 bg-white/5 px-6 py-3 text-sm font-semibold text-white/88 transition-colors duration-300 hover:bg-white/10">
              <Play className="h-4 w-4" />
              {t.secondary}
            </button>
          </div>

          <div className="mt-16 grid w-full gap-4 md:grid-cols-[1.25fr_0.75fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {t.metrics.map((metric) => (
                <MetricChip
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  tone="light"
                />
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-5 text-left backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-white/42">
                    {t.cardTitle}
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/74">
                    {t.cardBody}
                  </p>
                </div>
                <div className="rounded-full bg-white/10 p-3">
                  <Waypoints className="h-5 w-5 text-[#9fb2ff]" />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/56">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Risk controls validated by audit, finance, and legal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
