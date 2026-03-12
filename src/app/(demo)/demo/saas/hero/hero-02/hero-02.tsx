"use client";

/**
 * API Terminal Hero
 * Developer-first API product.
 * Background: #0d1117. Accent: green #22c55e.
 */

import { ArrowRight, Code2 } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "DEVELOPER API",
    heading: "Ship",
    headingAccent: "In Minutes",
    sub: "Beautiful APIs that developers love. Type-safe SDKs, comprehensive docs, and 99.99% uptime. Your backend, simplified.",
    cta1: "Get API Key",
    cta2: "Read Docs",
    codeSnippet: `fetch("https://api.example.com/v2/data", {\n  headers: { "Authorization": "Bearer sk_..." }\n})`,
  },
  ar: {
    badge: "واجهة مطوّرين",
    heading: "أطلق",
    headingAccent: "في دقائق",
    sub: "واجهات برمجة جميلة يحبها المطورون. حزم SDK آمنة، توثيق شامل، و99.99% جهوزية. خلفيتك، مبسّطة.",
    cta1: "احصل على مفتاح API",
    cta2: "اقرأ التوثيق",
    codeSnippet: `fetch("https://api.example.com/v2/data", {\n  headers: { "Authorization": "Bearer sk_..." }\n})`,
  },
};

export function Hero02({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0d1117" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#22c55e", top: "30%", right: "20%" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-green-500/20 bg-green-500/10 mb-8">
              <Code2 className="w-4 h-4 text-green-400" />
              <span className="text-xs font-mono font-bold text-green-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(48px, 10vw, 100px)" }}>
              {t.heading}<br />
              <span style={{ color: "#22c55e", textShadow: "0 0 30px rgba(34,197,94,0.2)" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-lg border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Code block */}
          <div className="rounded-xl border border-green-500/15 bg-green-500/[0.03] overflow-hidden"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            <div className="h-8 bg-green-500/5 flex items-center px-4 gap-1.5 border-b border-green-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              <span className="text-[10px] text-gray-600 ml-3 font-mono">index.ts</span>
            </div>
            <pre className="p-5 text-sm font-mono text-green-300/70 leading-6 overflow-x-auto">
              <code>{t.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
