"use client";

/**
 * Split Personality Hero
 * Screen split diagonally — left half is stark white with black text,
 * right half is deep black with white text. The diagonal cut creates
 * tension. A circular "portal" at the intersection reveals a gradient.
 * Hover/scroll shifts the split. Yin-yang energy.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    left: { tag: "LIGHT SIDE", heading: "We", sub: "Design" },
    right: { tag: "DARK SIDE", heading: "We", sub: "Develop" },
    center: "∞",
    tagline: "Two minds. One vision. Infinite possibilities.",
    cta: "See Our Duality",
    cta2: "Case Studies",
    capabilities: ["Brand Identity", "UI/UX Design", "Full-Stack Dev", "Motion Design"],
  },
  ar: {
    left: { tag: "الجانب المضيء", heading: "نحن", sub: "نصمم" },
    right: { tag: "الجانب المظلم", heading: "نحن", sub: "نطوّر" },
    center: "∞",
    tagline: "عقلان. رؤية واحدة. إمكانيات لا نهائية.",
    cta: "شاهد ازدواجيتنا",
    cta2: "دراسات الحالة",
    capabilities: ["هوية بصرية", "تصميم واجهات", "تطوير شامل", "تصميم حركي"],
  },
};

export function SplitPersonality({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes splitReveal {
          from { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
          to { clip-path: polygon(55% 0, 100% 0, 100% 100%, 45% 100%); }
        }
        @keyframes portalSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes portalPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 60px rgba(139,92,246,0.3); }
          50% { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 0 100px rgba(139,92,246,0.5); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes infinitySpin {
          from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          to { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }
        .split-dark { animation: splitReveal 1.2s cubic-bezier(0.65, 0, 0.35, 1) both; }
        .slide-l { animation: slideLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .slide-r { animation: slideRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        {/* Light side (full background) */}
        <div className="absolute inset-0 bg-[#fafafa]" />

        {/* Dark side (clipped diagonal) */}
        <div
          className="split-dark absolute inset-0 bg-[#0a0a0a]"
          style={{ animationDelay: "0.3s" }}
        />

        {/* Diagonal line */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(139,92,246,0.3) 50%, transparent calc(50% + 1px))",
        }} />

        {/* Center portal */}
        <div
          className="absolute left-1/2 top-1/2 w-28 h-28 rounded-full z-20"
          style={{
            background: "conic-gradient(from 0deg, #7c3aed, #ec4899, #06b6d4, #7c3aed)",
            animation: "portalPulse 4s ease-in-out infinite",
          }}
        >
          <div className="absolute inset-2 rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <span
              className="text-3xl font-thin text-white/80"
              style={{ animation: "infinitySpin 20s linear infinite", display: "inline-block" }}
            >
              {t.center}
            </span>
          </div>
        </div>

        {/* Content layer */}
        <div className="relative z-10 min-h-screen flex">
          {/* Left panel — light */}
          <div className="w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20">
            <span
              className="slide-l text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-4"
              style={{ animationDelay: "0.5s" }}
            >
              {t.left.tag}
            </span>
            <div className="slide-l" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9]">
                {t.left.heading}
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-violet-600 leading-[0.9]">
                {t.left.sub}
              </h2>
            </div>
          </div>

          {/* Right panel — dark */}
          <div className={`w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 ${isAr ? "text-right" : "text-right"}`}>
            <span
              className="slide-r text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase mb-4"
              style={{ animationDelay: "0.7s" }}
            >
              {t.right.tag}
            </span>
            <div className="slide-r" style={{ animationDelay: "0.8s" }}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9]">
                {t.right.heading}
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-violet-400 leading-[0.9]">
                {t.right.sub}
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-12 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Tagline */}
            <p
              className="fade-up text-center text-sm text-gray-500 mb-6"
              style={{ animationDelay: "1s" }}
            >
              {t.tagline}
            </p>

            {/* CTAs */}
            <div
              className={`fade-up flex items-center justify-center gap-4 mb-6 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "1.1s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-lg transition-all hover:-translate-y-1 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)" }}
              >
                {t.cta}
                <ArrowRight size={14} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
                {t.cta2}
              </a>
            </div>

            {/* Capabilities */}
            <div
              className="fade-up flex items-center justify-center gap-6 flex-wrap"
              style={{ animationDelay: "1.2s" }}
            >
              {t.capabilities.map((cap, i) => (
                <span key={i} className="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-violet-500" />}
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
