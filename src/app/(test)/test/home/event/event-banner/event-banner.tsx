"use client";

/**
 * Event Banner Hero
 * Wide banner/flag unfurling with event name. Grand announcement style.
 * Decorative ribbon edges, bold typography, regal/celebration feel.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Grand Opening",
    heading: "The Event of",
    headingHighlight: "The Year",
    subheading:
      "An unforgettable experience awaits. Be part of something extraordinary. Mark your calendar, invite your friends.",
    ctaPrimary: "Reserve Your Spot",
    ctaSecondary: "Learn More",
    bannerTitle: "INNOVATION SUMMIT",
    bannerSubtitle: "2025",
    bannerDate: "MARCH 15-17",
    bannerLocation: "RIYADH",
    highlights: [
      { num: "50+", label: "Speakers" },
      { num: "3", label: "Days" },
      { num: "5K+", label: "Attendees" },
      { num: "100+", label: "Sessions" },
    ],
  },
  ar: {
    badge: "افتتاح كبير",
    heading: "حدث",
    headingHighlight: "العام",
    subheading:
      "تجربة لا تُنسى بانتظارك. كن جزءاً من شيء استثنائي. ضع التاريخ في رزنامتك، ادعُ أصدقاءك.",
    ctaPrimary: "احجز مقعدك",
    ctaSecondary: "اعرف المزيد",
    bannerTitle: "قمة الابتكار",
    bannerSubtitle: "2025",
    bannerDate: "15-17 مارس",
    bannerLocation: "الرياض",
    highlights: [
      { num: "+50", label: "متحدث" },
      { num: "3", label: "أيام" },
      { num: "+5K", label: "حضور" },
      { num: "+100", label: "جلسة" },
    ],
  },
};

export function EventBanner({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes unfurl {
          0% { transform: scaleX(0); opacity: 0; }
          60% { transform: scaleX(1.03); }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes ribbonWave {
          0%, 100% { transform: perspective(400px) rotateY(0deg); }
          25% { transform: perspective(400px) rotateY(2deg); }
          75% { transform: perspective(400px) rotateY(-2deg); }
        }
        @keyframes textReveal {
          from { opacity: 0; letter-spacing: 0.5em; }
          to { opacity: 1; letter-spacing: 0.2em; }
        }
        @keyframes cornerFade {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 0.3; transform: scale(1); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0505]">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(239,68,68,0.12) 0%, rgba(249,115,22,0.06) 50%, transparent 70%)" }} />

        {/* Decorative corner ornaments */}
        {[["top-8 left-8", "-1"], ["top-8 right-8", "1"], ["bottom-8 left-8", "-1"], ["bottom-8 right-8", "1"]].map(([pos, sx], i) => (
          <div key={i} className={`absolute ${pos} w-16 h-16 opacity-0`}
            style={{ animation: `cornerFade 0.6s ease-out ${0.8 + i * 0.1}s both`, transform: `scaleX(${sx})` }}>
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <path d="M5 5 L25 5 L25 10 L10 10 L10 25 L5 25 Z" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
            </svg>
          </div>
        ))}

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up text-lg text-white/35 max-w-xl mx-auto leading-relaxed mb-10"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            {/* Grand banner */}
            <div className="relative max-w-3xl mx-auto mb-12"
              style={{ animation: "unfurl 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both", transformOrigin: "center" }}>
              <div style={{ animation: "ribbonWave 6s ease-in-out infinite" }}>
                {/* Banner shape */}
                <div className="relative">
                  {/* Left ribbon tail */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-24 overflow-hidden">
                    <div className="w-0 h-0 border-t-[48px] border-b-[48px] border-r-[32px] border-t-transparent border-b-transparent border-r-red-900/30" />
                  </div>
                  {/* Right ribbon tail */}
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-24 overflow-hidden">
                    <div className="w-0 h-0 border-t-[48px] border-b-[48px] border-l-[32px] border-t-transparent border-b-transparent border-l-red-900/30" />
                  </div>

                  {/* Main banner body */}
                  <div className="relative bg-gradient-to-b from-red-900/20 to-red-950/30 border-y-2 border-red-500/20 py-10 sm:py-14 px-8"
                    style={{ boxShadow: "0 20px 60px rgba(239,68,68,0.1)" }}>
                    {/* Top decorative line */}
                    <div className="absolute top-3 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                    {/* Bottom decorative line */}
                    <div className="absolute bottom-3 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

                    <div className="text-xs text-red-400/40 uppercase tracking-[0.3em] mb-3"
                      style={{ animation: "textReveal 1.2s ease-out 0.8s both" }}>
                      {t.bannerDate} / {t.bannerLocation}
                    </div>

                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white/90 tracking-wide mb-2"
                      style={{ animation: "textReveal 1s ease-out 0.6s both" }}>
                      {t.bannerTitle}
                    </div>

                    <div className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent"
                      style={{ animation: "textReveal 1s ease-out 0.7s both" }}>
                      {t.bannerSubtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="fade-up flex items-center justify-center gap-4 mb-12"
              style={{ animationDelay: "0.8s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>

            {/* Stats */}
            <div className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
              style={{ animationDelay: "1s" }}>
              {t.highlights.map((h, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-red-300">{h.num}</div>
                  <div className="text-xs text-white/20 mt-1">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
