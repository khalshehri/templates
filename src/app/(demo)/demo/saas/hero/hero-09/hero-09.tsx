"use client";

/**
 * Security Shield Hero
 * Cybersecurity / data protection SaaS.
 * Background: #060810. Accent: cyan #06b6d4.
 */

import { ArrowRight, Shield } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "ENTERPRISE SECURITY",
    heading: "Zero Trust.",
    headingAccent: "Total Protection.",
    sub: "End-to-end encryption, real-time threat detection, and automated compliance. Protect your data like it matters — because it does.",
    cta1: "Get Protected",
    cta2: "Security Whitepaper",
    certifications: ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA"],
  },
  ar: {
    badge: "أمان المؤسسات",
    heading: "ثقة صفرية.",
    headingAccent: "حماية كاملة.",
    sub: "تشفير من طرف لطرف، كشف تهديدات فوري، وامتثال آلي. احمِ بياناتك كأنها مهمة — لأنها كذلك.",
    cta1: "احصل على الحماية",
    cta2: "ورقة الأمان",
    certifications: ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA"],
  },
};

export function Hero09({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060810" }}>
      {/* Shield glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#06b6d4", top: "35%", left: "50%", transform: "translateX(-50%)" }} />

      {/* Hex grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(6,182,212,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Large shield icon background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
        <Shield className="w-[400px] h-[400px] text-cyan-500" strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Shield className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-cyan-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(48px, 10vw, 108px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span style={{ color: "#06b6d4", textShadow: "0 0 40px rgba(6,182,212,0.2)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.certifications.map((c, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/10 bg-cyan-500/[0.03]">
              <Shield className="w-3 h-3 text-cyan-500/50" />
              <span className="text-sm font-mono text-cyan-300/60">{c}</span>
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
