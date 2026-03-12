"use client";

/**
 * Command Bar Hero
 * Keyboard-first productivity tool aesthetic.
 * Background: #0a0a0a. Accent: gray/white minimal.
 */

import { ArrowRight, Command } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "KEYBOARD-FIRST",
    heading: "⌘K",
    headingAccent: "Everything",
    sub: "The command bar for your entire workflow. Search, navigate, and execute any action in milliseconds. Built for power users.",
    cta1: "Try It Free",
    cta2: "Shortcuts Guide",
    shortcuts: [
      { key: "⌘K", action: "Open command bar" },
      { key: "⌘⇧P", action: "Quick actions" },
      { key: "⌘/", action: "Search anything" },
    ],
  },
  ar: {
    badge: "لوحة المفاتيح أولاً",
    heading: "⌘K",
    headingAccent: "كل شيء",
    sub: "شريط الأوامر لسير عملك بالكامل. ابحث وتنقّل ونفّذ أي إجراء بالميلي ثانية. مبني للمحترفين.",
    cta1: "جرّب مجاناً",
    cta2: "دليل الاختصارات",
    shortcuts: [
      { key: "⌘K", action: "افتح شريط الأوامر" },
      { key: "⌘⇧P", action: "إجراءات سريعة" },
      { key: "⌘/", action: "ابحث عن أي شيء" },
    ],
  },
};

export function Hero08({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#0a0a0a" }}>
      {/* Subtle radial glow */}
      <div className="absolute w-[400px] h-[200px] rounded-full opacity-[0.04] blur-[80px] pointer-events-none"
        style={{ background: "white", top: "35%", left: "50%", transform: "translateX(-50%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Command className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-mono font-bold text-gray-400 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.05em] mb-6"
          style={{ fontSize: "clamp(56px, 14vw, 150px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="text-gray-500">{t.headingAccent}</span>
        </h1>

        <p className="text-gray-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-gray-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-500 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        {/* Shortcut cards */}
        <div className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.shortcuts.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-800 bg-gray-900/50">
              <kbd className="px-2 py-1 text-xs font-mono font-bold text-white bg-gray-800 rounded border border-gray-700">{s.key}</kbd>
              <span className="text-sm text-gray-500">{s.action}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
