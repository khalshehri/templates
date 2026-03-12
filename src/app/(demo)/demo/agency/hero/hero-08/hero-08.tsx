"use client";

/**
 * Gradient Studio Hero
 * Fluid mesh gradient background.
 * Background: #050505. Accent: gradient mesh multi-color.
 */

import { ArrowRight, Sparkles } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "DIGITAL ARTISTRY",
    heading: "Where Art",
    headingAccent: "Meets Code",
    sub: "We blend artistic sensibility with technical mastery to create digital experiences that are as beautiful as they are functional.",
    cta1: "Create Together",
    cta2: "See Our Art",
    clients: ["Nike", "Spotify", "Airbnb", "Stripe", "Notion"],
  },
  ar: {
    badge: "فنون رقمية",
    heading: "حيث يلتقي",
    headingAccent: "الفن بالبرمجة",
    sub: "ندمج الحس الفني مع الإتقان التقني لنصنع تجارب رقمية جميلة وعملية بنفس القدر.",
    cta1: "لنبدع معاً",
    cta2: "شاهد أعمالنا",
    clients: ["Nike", "Spotify", "Airbnb", "Stripe", "Notion"],
  },
};

export function Hero08({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#050505" }}>
      {/* Mesh gradient blobs */}
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "#8b5cf6", top: "10%", left: "15%", animation: "meshFloat1 8s ease-in-out infinite" }} />
      <div className="absolute w-[350px] h-[350px] rounded-full opacity-12 blur-[90px] pointer-events-none"
        style={{ background: "#ec4899", bottom: "15%", right: "10%", animation: "meshFloat2 10s ease-in-out infinite" }} />
      <div className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "#06b6d4", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "meshFloat3 7s ease-in-out infinite" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-8"
          style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold text-purple-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <span className="text-white">{t.heading}</span><br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #8b5cf6, #ec4899, #06b6d4)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]">
            {t.cta1}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">{t.cta2}</button>
        </div>

        <div style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          <p className="text-xs text-gray-600 mb-4 tracking-widest uppercase">Trusted by leading brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {t.clients.map((c, i) => (
              <span key={i} className="text-lg font-bold text-gray-700 hover:text-gray-400 transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes meshFloat1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-20px)} }
        @keyframes meshFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-25px,15px)} }
        @keyframes meshFloat3 { 0%,100%{transform:translate(-50%,-50%)} 50%{transform:translate(-50%,-55%)} }
      `}</style>
    </section>
  );
}
