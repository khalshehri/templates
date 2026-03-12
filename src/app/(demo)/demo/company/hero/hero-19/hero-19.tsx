"use client";

/**
 * Retro Terminal Hero
 * Developer tools / devops company aesthetic.
 * CRT monitor effect with green phosphor text, scanlines, flicker.
 * Background: #020c02. Accent: green #22c55e.
 */

import { ArrowRight, Terminal } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "DEVELOPER-FIRST",
    heading: "> deploy",
    headingAccent: "--global",
    sub: "Infrastructure as code. Ship to 200+ edge nodes in < 50ms. Zero config. Zero downtime. Built by developers, for developers.",
    cta1: "Get API Key",
    cta2: "Read Docs",
    terminal: [
      { prompt: true, text: "$ npx deploy --region=mena --scale=auto" },
      { prompt: false, text: "✓ Building... done (2.3s)" },
      { prompt: false, text: "✓ Optimizing... 47 routes compiled" },
      { prompt: false, text: "✓ Deploying to 12 edge regions..." },
      { prompt: false, text: "✓ Live at → https://app.example.com" },
      { prompt: false, text: "" },
      { prompt: false, text: "  Latency: 23ms (p99) | 99.99% uptime" },
      { prompt: true, text: "$ █" },
    ],
  },
  ar: {
    badge: "المطوّرون أولاً",
    heading: "> deploy",
    headingAccent: "--global",
    sub: "البنية التحتية ككود. انشر على 200+ عقدة حافة في أقل من 50ms. بدون إعدادات. بدون توقف. مبني بواسطة مطورين، للمطورين.",
    cta1: "احصل على مفتاح API",
    cta2: "اقرأ التوثيق",
    terminal: [
      { prompt: true, text: "$ npx deploy --region=mena --scale=auto" },
      { prompt: false, text: "✓ جارِ البناء... تم (2.3s)" },
      { prompt: false, text: "✓ تحسين... 47 مسار تم تجميعها" },
      { prompt: false, text: "✓ جارِ النشر على 12 منطقة حافة..." },
      { prompt: false, text: "✓ مباشر ← https://app.example.com" },
      { prompt: false, text: "" },
      { prompt: false, text: "  زمن الاستجابة: 23ms (p99) | 99.99% وقت تشغيل" },
      { prompt: true, text: "$ █" },
    ],
  },
};

export function Hero19({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#020c02" }}>
      {/* CRT scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(34,197,94,0.1) 1px, rgba(34,197,94,0.1) 2px)",
          backgroundSize: "100% 3px",
        }} />

      {/* Screen flicker */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ animation: "crtFlicker 0.1s steps(2) infinite", background: "rgba(34,197,94,0.005)" }} />

      {/* Green vignette glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.03) 0%, transparent 60%)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`} style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-xs font-mono font-bold text-green-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-mono font-black leading-[0.9] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(40px, 7vw, 80px)", color: "#22c55e", textShadow: "0 0 20px rgba(34,197,94,0.3), 0 0 60px rgba(34,197,94,0.1)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
              {t.heading}<br />
              <span className="text-green-300/60">{t.headingAccent}</span>
            </h1>

            <p className="text-green-400/50 text-lg mb-10 leading-relaxed max-w-lg font-mono"
              style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-mono font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-green-500/60 hover:text-green-400 font-mono font-medium rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Terminal window */}
          <div className={`${isAr ? "lg:order-1" : ""}`} style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>
            <div className="rounded-xl border border-green-500/15 bg-green-500/[0.02] overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.05)]">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-green-500/10 bg-green-500/[0.03]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/10" />
                </div>
                <span className="text-[10px] font-mono text-green-500/30 ml-2">terminal — zsh — 80×24</span>
              </div>
              {/* Terminal content */}
              <div className="p-5 font-mono text-sm leading-7">
                {t.terminal.map((line, i) => (
                  <div key={i}
                    style={{ animation: `terminalType 0.3s ease-out ${0.5 + i * 0.2}s both` }}
                    className={line.prompt ? "text-green-400" : "text-green-500/50"}>
                    {line.text || "\u00A0"}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes crtFlicker { 0%{opacity:0.97} 50%{opacity:1} }
        @keyframes terminalType { from{opacity:0;transform:translateX(-5px)} to{opacity:1;transform:translateX(0)} }
      `}</style>
    </section>
  );
}
