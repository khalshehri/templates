"use client";

/**
 * Collage Overlap Hero
 * Creative / multi-disciplinary company.
 * Overlapping rotated "photo frames" with gradient fills.
 * Background: #0c0c10. Accent: fuchsia-400.
 */

import { ArrowRight, Aperture } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "MULTIDISCIPLINARY STUDIO",
    heading: "Bold Ideas.",
    headingAccent: "Beautiful Execution.",
    sub: "We're a collective of designers, developers, and dreamers who turn ambitious ideas into tangible, award-winning digital products.",
    cta1: "Start a Project",
    cta2: "Case Studies",
    awards: ["Awwwards SOTD ×12", "FWA ×8", "CSS Design Awards ×15"],
  },
  ar: {
    badge: "استوديو متعدد التخصصات",
    heading: "أفكار جريئة.",
    headingAccent: "تنفيذ جميل.",
    sub: "نحن مجموعة من المصممين والمطورين والحالمين الذين يحولون الأفكار الطموحة إلى منتجات رقمية ملموسة وحائزة على جوائز.",
    cta1: "ابدأ مشروعاً",
    cta2: "دراسات الحالة",
    awards: ["Awwwards SOTD ×12", "FWA ×8", "CSS Design Awards ×15"],
  },
};

const frames = [
  { w: 220, h: 280, x: "55%", y: "15%", rot: -8, bg: "linear-gradient(135deg, #701a75, #86198f, #a21caf)", z: 1 },
  { w: 180, h: 240, x: "68%", y: "30%", rot: 5, bg: "linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)", z: 2 },
  { w: 200, h: 160, x: "52%", y: "55%", rot: -3, bg: "linear-gradient(135deg, #134e4a, #0f766e, #14b8a6)", z: 3 },
  { w: 160, h: 220, x: "75%", y: "50%", rot: 12, bg: "linear-gradient(135deg, #7c2d12, #c2410c, #ea580c)", z: 4 },
  { w: 240, h: 180, x: "60%", y: "70%", rot: -6, bg: "linear-gradient(135deg, #1e3a5f, #1d4ed8, #3b82f6)", z: 5 },
];

export function Hero18({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#0c0c10" }}>
      {/* Collage frames */}
      <div className="absolute inset-0 pointer-events-none">
        {frames.map((f, i) => (
          <div key={i} className="absolute rounded-xl overflow-hidden shadow-2xl"
            style={{
              width: f.w, height: f.h,
              left: f.x, top: f.y,
              transform: `translate(-50%, -50%) rotate(${f.rot}deg)`,
              zIndex: f.z,
              animation: `frameFloat${i} ${4 + i}s ease-in-out ${i * 0.3}s infinite, frameReveal 0.6s ease-out ${0.2 + i * 0.1}s both`,
            }}>
            <div className="absolute inset-0" style={{ background: f.bg }} />
            {/* Photo grain */}
            <div className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
            {/* White border effect */}
            <div className="absolute inset-0 border-4 border-white/[0.06] rounded-xl" />
          </div>
        ))}
      </div>

      {/* Fuchsia glow */}
      <div className="absolute w-[400px] h-[300px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
        style={{ background: "#d946ef", top: "40%", right: "30%" }} />

      {/* Content */}
      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 py-24 ${isAr ? "text-right" : ""}`}>
        <div className={`max-w-xl ${isAr ? "mr-0 ml-auto" : ""}`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 mb-8 ${isAr ? "flex-row-reverse" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out both" }}>
            <Aperture className="w-4 h-4 text-fuchsia-400" />
            <span className="text-xs font-mono font-bold text-fuchsia-300 tracking-[0.15em] uppercase">{t.badge}</span>
          </div>

          <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(44px, 8vw, 88px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
            {t.heading}<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #d946ef, #e879f9)" }}>{t.headingAccent}</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed"
            style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-10 ${isAr ? "sm:flex-row-reverse" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(217,70,239,0.25)]">
              {t.cta1}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </button>
            <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
          </div>

          {/* Awards */}
          <div className={`flex flex-wrap gap-4 ${isAr ? "justify-end" : ""}`}
            style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
            {t.awards.map((a, i) => (
              <span key={i} className="text-xs text-fuchsia-400/30 font-mono">{a}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes frameReveal { from{opacity:0;transform:translate(-50%,-50%) scale(0.9) rotate(0deg)} to{opacity:1} }
        @keyframes frameFloat0 { 0%,100%{transform:translate(-50%,-50%) rotate(-8deg) translateY(0)} 50%{transform:translate(-50%,-50%) rotate(-8deg) translateY(-8px)} }
        @keyframes frameFloat1 { 0%,100%{transform:translate(-50%,-50%) rotate(5deg) translateY(0)} 50%{transform:translate(-50%,-50%) rotate(5deg) translateY(-6px)} }
        @keyframes frameFloat2 { 0%,100%{transform:translate(-50%,-50%) rotate(-3deg) translateY(0)} 50%{transform:translate(-50%,-50%) rotate(-3deg) translateY(-10px)} }
        @keyframes frameFloat3 { 0%,100%{transform:translate(-50%,-50%) rotate(12deg) translateY(0)} 50%{transform:translate(-50%,-50%) rotate(12deg) translateY(-5px)} }
        @keyframes frameFloat4 { 0%,100%{transform:translate(-50%,-50%) rotate(-6deg) translateY(0)} 50%{transform:translate(-50%,-50%) rotate(-6deg) translateY(-7px)} }
      `}</style>
    </section>
  );
}
