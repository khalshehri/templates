"use client";

import { ArrowRight, Dot, MoveRight } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Precision Type",
    headline: "PRECISION",
    subline: "When text becomes the architecture, the message must earn the scale.",
    body:
      "We create corporate identities for firms that compete on technical excellence, timing, and quiet authority rather than spectacle.",
    primary: "Request positioning review",
  },
  ar: {
    label: "دقة الحرف",
    headline: "الدقة",
    subline: "حين تصبح الكتابة هي البنية نفسها، يجب أن تستحق الرسالة هذا الحجم.",
    body:
      "نصمم هويات مؤسسية للشركات التي تنافس على التفوق التقني والتوقيت والسلطة الهادئة لا على الاستعراض.",
    primary: "اطلب مراجعة التموضع",
  },
} as const;

export function Hero12() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#fafafa] text-[#1a1a1a]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero12-outline { animation: hero12Draw 10s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
        .hero12-line { animation: hero12Line 8s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .hero12-copy { animation: hero12Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero12Draw {
          0% { letter-spacing: -0.08em; opacity: 0.8; }
          100% { letter-spacing: -0.04em; opacity: 1; }
        }
        @keyframes hero12Line {
          0%, 100% { transform: scaleX(0.3); opacity: 0.3; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes hero12Reveal {
          from { opacity: 0; transform: translate3d(0, 26px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero12-outline, .hero12-line, .hero12-copy { animation: none !important; }
        }
      `}</style>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel>{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="hero12-outline select-none text-[clamp(5rem,17vw,16rem)] font-semibold leading-none tracking-[-0.08em] text-transparent [text-stroke:1.5px_#1a1a1a] [-webkit-text-stroke:1.5px_#1a1a1a]">
            {t.headline}
          </div>
          <div className="hero12-line mt-4 h-px w-full origin-left bg-[#1a1a1a]/18" />

          <div className="hero12-copy mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
            <div>
              <p
                className="max-w-2xl text-[clamp(2rem,3vw,3rem)] leading-[1.02] tracking-[-0.05em]"
                style={{ fontFamily: headingFont as string }}
              >
                {t.subline}
              </p>
            </div>
            <div className="space-y-6">
              <p className="max-w-md text-base leading-8 text-[#4b5563] sm:text-lg">
                {t.body}
              </p>
              <button className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-all duration-300 hover:border-black/30 hover:bg-white">
                {t.primary}
                <ArrowRight className="h-4 w-4" />
              </button>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.26em] text-[#6b7280]">
                <span>Identity systems</span>
                <Dot className="h-4 w-4" />
                <span>Investor narrative</span>
                <Dot className="h-4 w-4" />
                <span>Technical authority</span>
                <MoveRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
