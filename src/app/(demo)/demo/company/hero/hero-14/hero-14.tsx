"use client";

/**
 * Gradient Mesh Background Hero
 * Creative tech company — full animated gradient mesh background.
 * Multiple overlapping blobs morph and drift.
 * Accent: multi-color (pink, blue, purple, teal).
 */

import { ArrowRight, Palette } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "CREATIVE TECHNOLOGY",
    heading: "Where Art",
    headingAccent: "Meets Code",
    sub: "We fuse world-class design with cutting-edge engineering. The result? Digital experiences that people actually remember.",
    cta1: "See Our Work",
    cta2: "Our Process",
    clients: ["Google", "Spotify", "Airbnb", "Netflix", "Stripe"],
  },
  ar: {
    badge: "التقنية الإبداعية",
    heading: "حيث الفن",
    headingAccent: "يلتقي بالكود",
    sub: "ندمج تصميماً عالمياً مع هندسة متطورة. النتيجة؟ تجارب رقمية يتذكرها الناس فعلاً.",
    cta1: "شاهد أعمالنا",
    cta2: "منهجيتنا",
    clients: ["Google", "Spotify", "Airbnb", "Netflix", "Stripe"],
  },
};

const blobs = [
  { color: "rgba(236,72,153,0.15)", size: 500, x: "15%", y: "20%", dur: 20, dx: 80, dy: 60 },
  { color: "rgba(59,130,246,0.12)", size: 450, x: "70%", y: "60%", dur: 25, dx: -60, dy: -40 },
  { color: "rgba(168,85,247,0.1)", size: 400, x: "50%", y: "10%", dur: 22, dx: 40, dy: 80 },
  { color: "rgba(20,184,166,0.1)", size: 350, x: "80%", y: "20%", dur: 28, dx: -50, dy: 50 },
  { color: "rgba(249,115,22,0.08)", size: 300, x: "30%", y: "70%", dur: 18, dx: 60, dy: -30 },
];

export function Hero14({ language }: Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#09090b" }}>
      {/* Gradient mesh blobs */}
      {blobs.map((b, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size, height: b.size,
            background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
            left: b.x, top: b.y,
            transform: "translate(-50%, -50%)",
            filter: "blur(80px)",
            animation: `blobDrift${i} ${b.dur}s ease-in-out infinite`,
          }} />
      ))}

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 backdrop-blur-sm mb-8"
          style={{ animation: "fadeUp 0.6s ease-out both" }}>
          <Palette className="w-4 h-4 text-pink-400" />
          <span className="text-xs font-mono font-bold text-pink-300 tracking-[0.15em] uppercase">{t.badge}</span>
        </div>

        <h1 className="font-black text-white leading-[0.9] tracking-[-0.05em] mb-6"
          style={{ fontSize: "clamp(52px, 11vw, 120px)", animation: "fadeUp 0.6s ease-out 0.1s both" }}>
          {t.heading}<br />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6, #14b8a6)" }}>{t.headingAccent}</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 ${isAr ? "sm:flex-row-reverse" : ""}`}
          style={{ animation: "fadeUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_50px_rgba(236,72,153,0.2)]"
            style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}>
            {t.cta1}
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
          </button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-700 hover:border-gray-500 backdrop-blur-sm transition-all">{t.cta2}</button>
        </div>

        {/* Client logos (text) */}
        <div className="flex flex-wrap items-center justify-center gap-8"
          style={{ animation: "fadeUp 0.6s ease-out 0.4s both" }}>
          <span className="text-xs text-gray-600 uppercase tracking-widest">{isAr ? "يثقون بنا" : "Trusted by"}</span>
          {t.clients.map((c, i) => (
            <span key={i} className="text-sm font-semibold text-gray-500/50">{c}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blobDrift0 { 0%,100%{transform:translate(-50%,-50%) translate(0,0)} 33%{transform:translate(-50%,-50%) translate(80px,60px)} 66%{transform:translate(-50%,-50%) translate(-30px,40px)} }
        @keyframes blobDrift1 { 0%,100%{transform:translate(-50%,-50%) translate(0,0)} 33%{transform:translate(-50%,-50%) translate(-60px,-40px)} 66%{transform:translate(-50%,-50%) translate(40px,-20px)} }
        @keyframes blobDrift2 { 0%,100%{transform:translate(-50%,-50%) translate(0,0)} 33%{transform:translate(-50%,-50%) translate(40px,80px)} 66%{transform:translate(-50%,-50%) translate(-50px,30px)} }
        @keyframes blobDrift3 { 0%,100%{transform:translate(-50%,-50%) translate(0,0)} 33%{transform:translate(-50%,-50%) translate(-50px,50px)} 66%{transform:translate(-50%,-50%) translate(30px,-40px)} }
        @keyframes blobDrift4 { 0%,100%{transform:translate(-50%,-50%) translate(0,0)} 33%{transform:translate(-50%,-50%) translate(60px,-30px)} 66%{transform:translate(-50%,-50%) translate(-40px,50px)} }
      `}</style>
    </section>
  );
}
