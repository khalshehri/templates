"use client";

/**
 * Portfolio Showcase Hero
 * Gallery-style with floating project cards.
 * Background: #070707. Accent: rose #f43f5e.
 */

import { ArrowRight, Image } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "VISUAL DESIGNER",
    heading: "See the",
    headingAccent: "Difference",
    sub: "Award-winning visual designer with a passion for creating interfaces that are as beautiful as they are usable.",
    cta1: "View Portfolio",
    cta2: "About Me",
    projects: [
      { title: "Fintech App", tag: "UI/UX" },
      { title: "E-commerce", tag: "Branding" },
      { title: "SaaS Dashboard", tag: "Product" },
      { title: "Mobile App", tag: "Design" },
    ],
  },
  ar: {
    badge: "مصمم بصري",
    heading: "شاهد",
    headingAccent: "الفرق",
    sub: "مصمم بصري حائز على جوائز، شغوف بإنشاء واجهات جميلة وسهلة الاستخدام بنفس القدر.",
    cta1: "شاهد الأعمال",
    cta2: "عنّي",
    projects: [
      { title: "تطبيق مالي", tag: "UI/UX" },
      { title: "متجر إلكتروني", tag: "هوية" },
      { title: "لوحة SaaS", tag: "منتج" },
      { title: "تطبيق موبايل", tag: "تصميم" },
    ],
  },
};

export function Hero07({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#070707" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "#f43f5e", top: "20%", right: "20%" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/10 mb-8">
              <Image className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-bold text-rose-300 tracking-[0.2em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 88px)" }}>
              {t.heading}<br />
              <span style={{ color: "#f43f5e" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(244,63,94,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Project cards grid */}
          <div className="grid grid-cols-2 gap-3" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            {t.projects.map((p, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl border border-rose-500/10 bg-rose-500/[0.03] p-4 flex flex-col justify-end hover:border-rose-500/25 transition-all"
                style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <span className="text-[10px] text-rose-400/60 font-mono mb-1">{p.tag}</span>
                <span className="text-sm font-semibold text-white">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
