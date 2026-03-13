"use client";

import { ArrowRight, BarChart3, Gem, Orbit, Sparkles } from "lucide-react";
import { HeroLabel, LocaleToggle, MetricChip, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Innovation Cloud",
    title: "Glass surfaces for enterprise innovation without the startup theater.",
    body:
      "We turn transformation programs into something leaders can see, govern, and trust: strategy framed in disciplined visibility rather than hype.",
    primary: "Launch innovation review",
    metrics: [
      { value: "12", label: "innovation bets prioritized" },
      { value: "94%", label: "board approval readiness" },
      { value: "5", label: "cross-market pilots mobilized" },
    ],
  },
  ar: {
    label: "سحابة الابتكار",
    title: "أسطح زجاجية لابتكار مؤسسي بلا مسرحية الشركات الناشئة.",
    body:
      "نحوّل برامج التحول إلى شيء يمكن للقادة رؤيته وحوكمته والثقة به: استراتيجية ضمن وضوح منضبط لا ضجيج مبالغ فيه.",
    primary: "ابدأ مراجعة الابتكار",
    metrics: [
      { value: "12", label: "رهان ابتكار تمت أولويته" },
      { value: "94%", label: "جاهزية لاعتماد المجلس" },
      { value: "5", label: "تجارب متعددة الأسواق تم تفعيلها" },
    ],
  },
} as const;

export function Hero08() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#0f0f1a,#1a1025)] text-white"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero08-ribbon { animation: hero08Ribbon 18s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero08-card { animation: hero08Float 10s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .hero08-reveal { animation: hero08Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero08Ribbon {
          0% { transform: translate3d(-4%, 0, 0) rotate(-6deg); }
          100% { transform: translate3d(4%, 2%, 0) rotate(6deg); }
        }
        @keyframes hero08Float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -14px, 0); }
        }
        @keyframes hero08Reveal {
          from { opacity: 0; transform: translate3d(0, 30px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero08-ribbon, .hero08-card, .hero08-reveal { animation: none !important; }
        }
      `}</style>

      <div className="hero08-ribbon absolute -left-20 top-12 h-80 w-80 rounded-full bg-[#8b5cf6]/20 blur-[120px]" />
      <div className="hero08-ribbon absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c084fc]/16 blur-[120px]" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel tone="light">{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} inverse />
        </div>

        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="hero08-reveal">
            <h1
              className="max-w-xl text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/72 sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/18">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4">
            <div className="hero08-card rounded-[2rem] border border-white/14 bg-white/8 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/48">Innovation ledger</div>
                  <div className="mt-2 text-2xl font-semibold">Visibility without friction</div>
                </div>
                <Gem className="h-6 w-6 text-[#c4b5fd]" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {t.metrics.map((metric) => (
                  <MetricChip
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                    tone="light"
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="hero08-card rounded-[1.75rem] border border-white/14 bg-white/7 p-5 backdrop-blur-xl">
                <Orbit className="h-6 w-6 text-[#8b5cf6]" />
                <div className="mt-6 text-lg font-semibold">Portfolio orchestration</div>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  Strategic bets ranked by regulatory complexity, capability load, and revenue impact.
                </p>
              </div>
              <div className="hero08-card rounded-[1.75rem] border border-white/14 bg-white/7 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <Sparkles className="h-6 w-6 text-[#ddd6fe]" />
                  <BarChart3 className="h-6 w-6 text-white/50" />
                </div>
                <div className="mt-6 grid grid-cols-6 gap-2">
                  {[42, 68, 54, 84, 60, 92].map((height, index) => (
                    <div key={height} className="rounded-full bg-white/8 p-1">
                      <div
                        className="rounded-full bg-gradient-to-t from-[#8b5cf6] to-[#f5d0fe]"
                        style={{ height: `${height}px`, animationDelay: `${index * 0.1}s` }}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  Continuous signal on sponsorship strength, execution confidence, and launch sequencing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
