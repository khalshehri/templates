"use client";

/**
 * Cloud Platform Hero
 * Cloud infrastructure / platform aesthetic.
 * Background: #060612. Accent: sky blue #0ea5e9.
 */

import { ArrowRight, Cloud } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "CLOUD PLATFORM",
    heading: "Scale",
    headingAccent: "Without Limits",
    sub: "Deploy globally in seconds. Auto-scale to millions. Pay only for what you use. The cloud platform built for modern teams.",
    cta1: "Deploy Now",
    cta2: "Pricing",
    features: [
      { title: "Global CDN", desc: "200+ edge locations" },
      { title: "Auto-Scale", desc: "0 to ∞ automatically" },
      { title: "Zero Downtime", desc: "Rolling deployments" },
    ],
  },
  ar: {
    badge: "منصة سحابية",
    heading: "وسّع",
    headingAccent: "بلا حدود",
    sub: "انشر عالمياً في ثوانٍ. توسّع تلقائياً للملايين. ادفع فقط مقابل ما تستخدم. المنصة السحابية للفِرق الحديثة.",
    cta1: "انشر الآن",
    cta2: "الأسعار",
    features: [
      { title: "CDN عالمي", desc: "200+ موقع حافة" },
      { title: "توسع تلقائي", desc: "من 0 إلى ∞ تلقائياً" },
      { title: "صفر توقف", desc: "نشر متدرج" },
    ],
  },
};

export function Hero03({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060612" }}>
      {/* Cloud shapes */}
      {[
        { w: 200, h: 60, x: "15%", y: "20%", opacity: 0.02 },
        { w: 300, h: 80, x: "60%", y: "15%", opacity: 0.015 },
        { w: 250, h: 70, x: "30%", y: "70%", opacity: 0.02 },
        { w: 180, h: 50, x: "75%", y: "65%", opacity: 0.015 },
      ].map((c, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: c.w, height: c.h, left: c.x, top: c.y,
            background: "#0ea5e9", opacity: c.opacity, filter: "blur(30px)",
            animation: `cloudFloat ${6 + i * 2}s ease-in-out ${i * 0.5}s infinite alternate`,
          }} />
      ))}

      <div className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#0ea5e9", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Cloud className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-mono font-bold text-sky-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #38bdf8, #7dd3fc)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(14,165,233,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-sky-500/15 hover:border-sky-500/40 transition-all">{t.cta2}</button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.features.map((f, i) => (
            <div key={i} className="p-5 rounded-xl border border-sky-500/10 bg-sky-500/[0.03]">
              <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cloudFloat { from{transform:translateY(0)} to{transform:translateY(-10px)} }
      `}</style>
    </section>
  );
}
