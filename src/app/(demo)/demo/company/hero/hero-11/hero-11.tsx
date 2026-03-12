"use client";

/**
 * Split Image Hero
 * Modern agency / startup aesthetic.
 * Left: text content. Right: large team photo with gradient overlay.
 * Background: #09090b. Accent: indigo-500.
 */

import { ArrowRight, Sparkles } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "MEET THE TEAM",
    heading: "We Build",
    headingAccent: "What's Next",
    sub: "A team of 200+ engineers, designers, and strategists obsessed with crafting digital products that move the needle. We don't just build — we ship.",
    cta1: "Work With Us",
    cta2: "See Our Work",
    caption: "Our team at HQ — Riyadh, 2025",
  },
  ar: {
    badge: "تعرّف على الفريق",
    heading: "نبني",
    headingAccent: "ما هو قادم",
    sub: "فريق من 200+ مهندس ومصمم واستراتيجي مهووسين بصناعة منتجات رقمية تُحدث فرقاً. لا نبني فقط — نُطلق.",
    cta1: "اعمل معنا",
    cta2: "شاهد أعمالنا",
    caption: "فريقنا في المقر الرئيسي — الرياض، 2025",
  },
};

export function Hero11({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#09090b" }}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isAr ? "" : ""}`}>
          {/* Text */}
          <div className={`${isAr ? "text-right lg:order-2" : ""}`} style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono font-bold text-indigo-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}>
              {t.heading}<br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a78bfa)" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg"
              style={{ animation: "fadeUp 0.6s ease-out 0.15s both" }}>{t.sub}</p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ animation: "fadeUp 0.6s ease-out 0.25s both" }}>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                {t.cta1}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Image area */}
          <div className={`relative ${isAr ? "lg:order-1" : ""}`} style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Simulated team photo with gradient layers */}
              <div className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(180deg, transparent 40%, rgba(9,9,11,0.9) 100%),
                    linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #3730a3 50%, #4338ca 75%, #4f46e5 100%)
                  `,
                }} />
              {/* People silhouette shapes */}
              {[
                { left: "10%", height: "65%", width: "18%" },
                { left: "22%", height: "72%", width: "16%" },
                { left: "36%", height: "68%", width: "17%" },
                { left: "50%", height: "75%", width: "16%" },
                { left: "64%", height: "60%", width: "18%" },
                { left: "78%", height: "70%", width: "15%" },
              ].map((person, i) => (
                <div key={i} className="absolute bottom-[15%] flex flex-col items-center"
                  style={{ left: person.left, width: person.width }}>
                  {/* Head */}
                  <div className="rounded-full mb-1"
                    style={{
                      width: "40%", paddingBottom: "40%",
                      background: `linear-gradient(180deg, rgba(165,180,252,${0.15 + i * 0.03}), rgba(99,102,241,${0.1 + i * 0.02}))`,
                    }} />
                  {/* Body */}
                  <div className="w-full rounded-t-lg"
                    style={{
                      height: person.height,
                      background: `linear-gradient(180deg, rgba(99,102,241,${0.12 + i * 0.02}), transparent)`,
                    }} />
                </div>
              ))}
              {/* Grain overlay */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">{t.caption}</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
