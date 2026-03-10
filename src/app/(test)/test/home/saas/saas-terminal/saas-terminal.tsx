"use client";

import { ArrowRight, Terminal, Check } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Developer-First Platform",
    heading: "Ship Faster.",
    headingLine2: "Scale Smarter.",
    subheading: "The modern deployment platform that turns your code into production in seconds. Built by developers, for developers.",
    ctaPrimary: "Start Free",
    ctaSecondary: "Read Docs",
    terminalLines: [
      { type: "cmd", text: "$ npx deploy --prod" },
      { type: "log", text: "▸ Building project..." },
      { type: "log", text: "▸ Running 47 tests... all passed ✓" },
      { type: "log", text: "▸ Optimizing assets..." },
      { type: "log", text: "▸ Deploying to 12 edge regions..." },
      { type: "success", text: "✓ Live at https://your-app.dev" },
    ],
    integrations: ["GitHub", "GitLab", "Vercel", "AWS", "Docker", "Stripe"],
    features: ["Zero-config deploys", "Edge functions", "Auto-scaling", "Real-time logs"],
  },
  ar: {
    badge: "منصة المطورين أولاً",
    heading: "انشر أسرع.",
    headingLine2: "وسّع بذكاء.",
    subheading: "منصة النشر الحديثة التي تحول كودك إلى إنتاج في ثوانٍ. بُنيت بواسطة مطورين، للمطورين.",
    ctaPrimary: "ابدأ مجاناً",
    ctaSecondary: "اقرأ التوثيق",
    terminalLines: [
      { type: "cmd", text: "$ npx deploy --prod" },
      { type: "log", text: "▸ جارِ البناء..." },
      { type: "log", text: "▸ تشغيل 47 اختبار... نجحت جميعها ✓" },
      { type: "log", text: "▸ تحسين الأصول..." },
      { type: "log", text: "▸ النشر على 12 منطقة حافة..." },
      { type: "success", text: "✓ مباشر على https://your-app.dev" },
    ],
    integrations: ["GitHub", "GitLab", "Vercel", "AWS", "Docker", "Stripe"],
    features: ["نشر بدون إعدادات", "دوال الحافة", "توسع تلقائي", "سجلات مباشرة"],
  },
};

export function SaasTerminal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typeLine {
          from { width: 0; opacity: 1; }
          to { width: 100%; opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scanline {
          from { top: -2px; }
          to { top: 100%; }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .terminal-line {
          animation: fadeUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
          opacity: 0;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className={`text-center max-w-3xl mx-auto ${isAr ? "text-center" : ""}`}>
            <div
              className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              <Terminal size={14} />
              {t.badge}
            </div>

            <h1
              className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heading}
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {t.headingLine2}
              </span>
            </h1>

            <p
              className="fade-up mt-6 text-lg text-white/40 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/50 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Terminal window */}
          <div
            className="fade-up mt-14 max-w-2xl mx-auto"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-[#12121a] border border-white/[0.06] rounded-xl overflow-hidden shadow-2xl shadow-violet-500/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-white/20 font-mono">terminal</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-2 min-h-[200px]" dir="ltr">
                {t.terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className="terminal-line"
                    style={{ animationDelay: `${0.6 + i * 0.3}s` }}
                  >
                    {line.type === "cmd" && (
                      <span className="text-green-400">{line.text}</span>
                    )}
                    {line.type === "log" && (
                      <span className="text-white/40">{line.text}</span>
                    )}
                    {line.type === "success" && (
                      <span className="text-emerald-400 font-semibold">{line.text}</span>
                    )}
                  </div>
                ))}
                {/* Blinking cursor */}
                <div className="terminal-line" style={{ animationDelay: "2.4s" }}>
                  <span
                    className="inline-block w-2.5 h-4 bg-green-400/80"
                    style={{ animation: "blink 1s step-end infinite" }}
                  />
                </div>
              </div>
            </div>

            {/* Scanline effect */}
            <div className="relative -mt-[1px] h-0 overflow-visible pointer-events-none">
              <div
                className="absolute left-0 right-0 h-px bg-violet-400/10"
                style={{ animation: "scanline 4s linear infinite" }}
              />
            </div>
          </div>

          {/* Integration pills */}
          <div
            className="fade-up mt-10 flex items-center justify-center gap-3 flex-wrap"
            style={{ animationDelay: "0.8s" }}
          >
            {t.integrations.map((name, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs text-white/30 font-mono"
              >
                {name}
              </div>
            ))}
          </div>

          {/* Feature checklist */}
          <div
            className="fade-up mt-8 flex items-center justify-center gap-6 flex-wrap"
            style={{ animationDelay: "0.9s" }}
          >
            {t.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm text-white/30">
                <Check size={14} className="text-emerald-500/60" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
