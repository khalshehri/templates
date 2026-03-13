"use client";

import { ArrowRight, Cpu, ScanLine, TerminalSquare } from "lucide-react";
import { HeroLabel, LocaleToggle, useHeroLocale } from "../_shared";

const content = {
  en: {
    label: "Control HUD",
    title: "A terminal-grade hero for technology leaders managing complexity.",
    body:
      "From architecture reviews to platform modernization, we help enterprise technology teams make modernization visible, measurable, and politically durable.",
    primary: "Open system console",
  },
  ar: {
    label: "واجهة التحكم",
    title: "واجهة بطابع الطرفية لقادة التقنية الذين يديرون التعقيد.",
    body:
      "من مراجعات البنية إلى تحديث المنصات، نساعد فرق التقنية المؤسسية على جعل التحديث مرئياً وقابلاً للقياس ومستداماً تنظيمياً.",
    primary: "افتح وحدة النظام",
  },
} as const;

export function Hero09() {
  const { language, setLanguage, dir, headingFont, bodyFont } = useHeroLocale();
  const t = content[language];

  return (
    <section
      dir={dir}
      className="relative min-h-screen overflow-hidden bg-[#111111] text-[#d4ffd7]"
      style={{ fontFamily: bodyFont as string }}
    >
      <style>{`
        .hero09-scan { animation: hero09Scan 7s linear infinite; }
        .hero09-grid { animation: hero09Grid 18s linear infinite; }
        .hero09-type { animation: hero09Reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes hero09Scan {
          from { transform: translateY(-20%); }
          to { transform: translateY(120%); }
        }
        @keyframes hero09Grid {
          from { background-position: 0 0, 0 0; }
          to { background-position: 0 50px, 50px 0; }
        }
        @keyframes hero09Reveal {
          from { opacity: 0; transform: translate3d(0, 26px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero09-scan, .hero09-grid, .hero09-type { animation: none !important; }
        }
      `}</style>

      <div className="hero09-grid absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:50px_50px]" />
      <div className="hero09-scan pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-[#22c55e]/10 to-transparent" />

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-8 font-mono sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <HeroLabel tone="light">{t.label}</HeroLabel>
          <LocaleToggle language={language} setLanguage={setLanguage} inverse />
        </div>

        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)]">
          <div className="hero09-type">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/8 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[#9bf6ad]">
              <ScanLine className="h-3.5 w-3.5" />
              system state: stable
            </div>
            <h1
              className="mt-8 max-w-3xl text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#f1fff2]"
              style={{ fontFamily: headingFont as string }}
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#88b68d] sm:text-lg">
              {t.body}
            </p>
            <button className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#22c55e]/26 bg-[#22c55e]/8 px-6 py-3 text-sm font-semibold text-[#d4ffd7] transition-colors duration-300 hover:bg-[#22c55e]/14">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="hero09-type rounded-[2rem] border border-[#22c55e]/16 bg-black/35 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-[#22c55e]/12 pb-4 text-xs uppercase tracking-[0.26em] text-[#88b68d]">
              <span>modernization monitor</span>
              <span>v2.6</span>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                ["platform_load", "78%", Cpu],
                ["security_posture", "green", TerminalSquare],
                ["migration_wave", "04/07", ScanLine],
              ].map(([label, value, Icon]) => (
                <div key={label} className="flex items-center justify-between rounded-[1.2rem] border border-[#22c55e]/12 bg-[#0f0f0f] px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#22c55e]/10 p-2 text-[#9bf6ad]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-[#88b68d]">{label}</div>
                      <div className="mt-1 text-sm text-[#effff1]">{value}</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#4ade80]">active</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
