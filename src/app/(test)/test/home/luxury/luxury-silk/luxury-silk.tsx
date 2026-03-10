"use client";

/**
 * Luxury Silk Hero
 * Flowing silk/satin wave shapes in gold/cream. Content floats above the waves.
 * Soft, tactile feel. Gold/cream palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    label: "SILK & SATIN",
    heading: "Draped in\nPure Luxury",
    tagline: "Feel the whisper of silk against skin. Our fabrics are woven from the finest threads on earth.",
    cta: "Feel the Difference",
    material: "100% Mulberry Silk",
  },
  ar: {
    label: "حرير وساتان",
    heading: "مُلبّسة\nبفخامة مطلقة",
    tagline: "اشعر بهمس الحرير على البشرة. أقمشتنا منسوجة من أجود الخيوط على وجه الأرض.",
    cta: "اشعر بالفرق",
    material: "حرير التوت ١٠٠٪",
  },
};

export function LuxurySilk({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes silkWave1 {
          0%, 100% { d: path("M0,200 C200,150 400,250 600,200 C800,150 1000,250 1200,180 L1200,600 L0,600 Z"); }
          50% { d: path("M0,220 C200,180 400,220 600,180 C800,220 1000,170 1200,210 L1200,600 L0,600 Z"); }
        }
        @keyframes silkWave2 {
          0%, 100% { d: path("M0,260 C200,220 400,300 600,260 C800,220 1000,300 1200,240 L1200,600 L0,600 Z"); }
          50% { d: path("M0,280 C200,240 400,270 600,240 C800,280 1000,230 1200,270 L1200,600 L0,600 Z"); }
        }
        @keyframes silkWave3 {
          0%, 100% { d: path("M0,320 C200,280 400,350 600,320 C800,280 1000,350 1200,300 L1200,600 L0,600 Z"); }
          50% { d: path("M0,340 C200,310 400,330 600,300 C800,340 1000,300 1200,330 L1200,600 L0,600 Z"); }
        }
        @keyframes silkShimmer {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.15; }
        }
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .content-fade { animation: contentFade 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-start overflow-hidden" style={{ background: "#0d0b08" }}>
        {/* Warm ambient glow */}
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.3), transparent 70%)" }}
        />

        {/* Silk wave shapes (SVG) */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          style={{ height: "55%" }}
        >
          {/* Deepest wave - darkest gold */}
          <path
            d="M0,320 C200,280 400,350 600,320 C800,280 1000,350 1200,300 L1200,600 L0,600 Z"
            fill="rgba(120, 90, 20, 0.15)"
            style={{ animation: "silkWave3 8s ease-in-out infinite" }}
          />
          {/* Middle wave */}
          <path
            d="M0,260 C200,220 400,300 600,260 C800,220 1000,300 1200,240 L1200,600 L0,600 Z"
            fill="rgba(180, 140, 30, 0.08)"
            style={{ animation: "silkWave2 6s ease-in-out infinite" }}
          />
          {/* Top wave - lightest */}
          <path
            d="M0,200 C200,150 400,250 600,200 C800,150 1000,250 1200,180 L1200,600 L0,600 Z"
            fill="rgba(212, 175, 55, 0.05)"
            style={{ animation: "silkWave1 7s ease-in-out infinite" }}
          />

          {/* Shimmer highlights on waves */}
          <ellipse cx="400" cy="240" rx="200" ry="30" fill="rgba(245, 230, 168, 0.04)" style={{ animation: "silkShimmer 5s ease-in-out infinite" }} />
          <ellipse cx="800" cy="290" rx="150" ry="25" fill="rgba(245, 230, 168, 0.03)" style={{ animation: "silkShimmer 6s ease-in-out 1s infinite" }} />
          <ellipse cx="200" cy="310" rx="180" ry="20" fill="rgba(245, 230, 168, 0.03)" style={{ animation: "silkShimmer 7s ease-in-out 2s infinite" }} />
        </svg>

        {/* Additional wave layers for depth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, rgba(45, 35, 15, 0.3), transparent)",
          }}
        />

        {/* Content floating above waves */}
        <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-36 lg:pt-44 ${isAr ? "text-right" : "text-left"}`}>
          {/* Label */}
          <p
            className="content-fade text-[10px] uppercase tracking-[0.5em] font-light"
            style={{ color: "rgba(212, 175, 55, 0.4)", animationDelay: "0.3s" }}
          >
            {t.label}
          </p>

          {/* Line */}
          <div
            className={`content-fade mt-6 h-px w-16 ${isAr ? "ml-auto" : ""}`}
            style={{
              background: "linear-gradient(90deg, rgba(212, 175, 55, 0.4), transparent)",
              animationDelay: "0.5s",
            }}
          />

          {/* Heading */}
          <h1
            className="content-fade mt-8 text-5xl sm:text-7xl lg:text-8xl font-extralight leading-[0.95] whitespace-pre-line"
            style={{
              animationDelay: "0.7s",
              fontFamily: "var(--font-amiri), Georgia, serif",
              fontStyle: "italic",
              color: "rgba(245, 230, 168, 0.85)",
            }}
          >
            {t.heading}
          </h1>

          {/* Tagline */}
          <p
            className="content-fade mt-8 text-base font-light max-w-md leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.2)",
              fontFamily: "var(--font-amiri), Georgia, serif",
              animationDelay: "1s",
              marginLeft: isAr ? "auto" : undefined,
            }}
          >
            {t.tagline}
          </p>

          {/* CTA + material */}
          <div className={`content-fade mt-10 flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`} style={{ animationDelay: "1.3s" }}>
            <a
              href="#"
              className={`group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-light transition-colors duration-500 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ color: "rgba(212, 175, 55, 0.5)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(212, 175, 55, 0.9)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212, 175, 55, 0.5)"; }}
            >
              {t.cta}
              <ArrowRight size={12} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <span className="text-[10px] tracking-wider text-gray-700">{t.material}</span>
          </div>
        </div>
      </section>
    </>
  );
}
