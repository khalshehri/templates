"use client";

import { ArrowRight, Sparkles } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Creative Studio",
    headingLine1: "Where Ideas",
    headingLine2: "Collide",
    subheading:
      "We create bold visual identities that break conventions and make your brand unforgettable.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "View Portfolio",
    services: ["Branding", "Web Design", "Motion", "Strategy"],
  },
  ar: {
    badge: "استوديو إبداعي",
    headingLine1: "حيث تتصادم",
    headingLine2: "الأفكار",
    subheading:
      "نصنع هويات بصرية جريئة تكسر القواعد وتجعل علامتك التجارية لا تُنسى.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "عرض الأعمال",
    services: ["هوية بصرية", "تصميم مواقع", "موشن", "استراتيجية"],
  },
};

export function CreativeClash({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
          to { opacity: 1; transform: rotate(0) scale(1); }
        }
        .slide-left { animation: slideLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .slide-right { animation: slideRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in { animation: fadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .rotate-in { animation: rotateIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* Diagonal color blocks */}
        <div
          className="slide-left absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)",
            background: "linear-gradient(135deg, #ec4899, #f43f5e)",
          }}
        />
        <div
          className="slide-right absolute inset-0"
          style={{
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 40% 100%)",
            background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Collision line — glowing diagonal */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 46%, rgba(255,255,255,0.2) 47%, rgba(255,255,255,0.6) 47.5%, rgba(255,255,255,0.2) 48%, transparent 49%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="text-center">
            {/* Badge */}
            <div
              className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/80 text-sm font-medium mb-10"
              style={{ animationDelay: "0.3s" }}
            >
              <Sparkles size={14} />
              {t.badge}
            </div>

            {/* Heading */}
            <h1
              className="fade-in text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-[0.95]"
              style={{ animationDelay: "0.4s" }}
            >
              {t.headingLine1}
              <br />
              <span
                className="rotate-in inline-block"
                style={{
                  animationDelay: "0.6s",
                  WebkitTextStroke: "2px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.headingLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="fade-in mt-8 text-lg sm:text-xl text-white/50 max-w-lg mx-auto leading-relaxed"
              style={{ animationDelay: "0.7s" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className="fade-in mt-10 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-gray-950 bg-white rounded-full hover:bg-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-2xl ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a
                href="#"
                className="px-8 py-4 text-sm font-bold text-white/70 border border-white/20 rounded-full hover:bg-white/10 transition-all"
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* Service tags */}
            <div
              className="fade-in mt-14 flex items-center justify-center gap-3 flex-wrap"
              style={{ animationDelay: "0.9s" }}
            >
              {t.services.map((s, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium text-white/60 border border-white/10 rounded-full hover:border-white/30 hover:text-white/80 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
