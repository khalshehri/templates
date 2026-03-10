"use client";

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    heading: ["Stack Up", "Your Vision"],
    sub: "Layer by layer, we build brands that rise above the noise. Bold design stacked with meaning.",
    cta: "Explore Work",
    cta2: "Contact Us",
  },
  ar: {
    heading: ["\u0631\u0643\u0651\u0628 \u0637\u0628\u0642\u0627\u062a", "\u0631\u0624\u064a\u062a\u0643"],
    sub: "\u0637\u0628\u0642\u0629 \u0628\u0639\u062f \u0637\u0628\u0642\u0629\u060c \u0646\u0628\u0646\u064a \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u062c\u0627\u0631\u064a\u0629 \u062a\u0631\u062a\u0641\u0639 \u0641\u0648\u0642 \u0627\u0644\u0636\u0648\u0636\u0627\u0621.",
    cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u0646\u0627",
    cta2: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627",
  },
};

const CARDS = [
  { bg: "#6d28d9", rotate: -6, translateY: 24, translateX: -12, scale: 0.92 },
  { bg: "#0891b2", rotate: 3, translateY: 12, translateX: 8, scale: 0.96 },
  { bg: "#be185d", rotate: -2, translateY: 4, translateX: -4, scale: 0.98 },
  { bg: "#0a0a0a", rotate: 0, translateY: 0, translateX: 0, scale: 1 },
];

export function CreativeStack({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes stackDeal {
          0%   { opacity: 0; transform: perspective(1200px) rotateX(15deg) rotateY(var(--card-rotateY, 0deg)) rotate(var(--card-rotate)) translateY(calc(var(--card-ty) + 60px)) translateX(var(--card-tx)) scale(calc(var(--card-scale) * 0.7)); }
          60%  { opacity: 1; }
          100% { opacity: 1; transform: perspective(1200px) rotateX(2deg) rotateY(var(--card-rotateY, 0deg)) rotate(var(--card-rotate)) translateY(var(--card-ty)) translateX(var(--card-tx)) scale(var(--card-scale)); }
        }
        @keyframes stackContentFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes stackHover {
          0%, 100% { transform: perspective(1200px) rotateX(2deg) rotateY(0deg) rotate(var(--card-rotate)) translateY(var(--card-ty)) translateX(var(--card-tx)) scale(var(--card-scale)); }
          50%      { transform: perspective(1200px) rotateX(3deg) rotateY(1deg) rotate(var(--card-rotate)) translateY(calc(var(--card-ty) - 4px)) translateX(var(--card-tx)) scale(var(--card-scale)); }
        }
        .stack-card {
          animation: stackDeal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .stack-card:hover {
          animation: stackDeal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both, stackHover 4s ease-in-out infinite;
        }
        .stack-content {
          animation: stackContentFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .stack-shadow {
          box-shadow: 0 25px 60px -12px rgba(0,0,0,0.5), 0 8px 20px -8px rgba(0,0,0,0.3);
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        dir={isAr ? "rtl" : "ltr"}
        style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #164e63 100%)" }}
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Stacked cards container */}
        <div className="relative" style={{ width: "min(90vw, 700px)", height: "min(70vh, 500px)", perspective: "1200px" }}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="stack-card stack-shadow absolute inset-0 rounded-3xl"
              style={{
                backgroundColor: card.bg,
                zIndex: i,
                animationDelay: `${i * 0.15}s`,
                "--card-rotate": `${card.rotate}deg`,
                "--card-ty": `${card.translateY}px`,
                "--card-tx": `${card.translateX}px`,
                "--card-scale": card.scale,
              } as React.CSSProperties}
            >
              {/* Card edge accent */}
              <div className="absolute inset-0 rounded-3xl" style={{
                border: "1px solid rgba(255,255,255,0.1)",
              }} />

              {/* Decorative corner marks on background cards */}
              {i < 3 && (
                <>
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
                </>
              )}

              {/* Content only on top card */}
              {i === CARDS.length - 1 && (
                <div className="stack-content absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12" style={{ animationDelay: "0.8s" }}>
                  {/* Colored dots representing layers */}
                  <div className="flex gap-3 mb-8">
                    {CARDS.slice(0, -1).map((c, ci) => (
                      <div key={ci} className="w-3 h-3 rounded-full" style={{ backgroundColor: c.bg, boxShadow: `0 0 10px ${c.bg}` }} />
                    ))}
                  </div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-center leading-[0.95] tracking-tight text-white">
                    {t.heading[0]}
                    <br />
                    <span style={{ color: "#a78bfa" }}>{t.heading[1]}</span>
                  </h1>

                  <p className="mt-6 text-base sm:text-lg text-center max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {t.sub}
                  </p>

                  <div className={`mt-8 flex items-center justify-center gap-4 flex-wrap ${isAr ? "flex-row-reverse" : ""}`}>
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl ${isAr ? "flex-row-reverse" : ""}`}
                      style={{ backgroundColor: "#7c3aed", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}
                    >
                      {t.cta}
                      <ArrowRight size={16} className={isAr ? "rotate-180" : ""} />
                    </a>
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl ${isAr ? "flex-row-reverse" : ""}`}
                      style={{ border: "2px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
                    >
                      {t.cta2}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating accent shapes */}
        <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: "#6d28d9", filter: "blur(30px)" }} />
        <div className="absolute bottom-[15%] right-[8%] w-32 h-32 rounded-full opacity-15" style={{ backgroundColor: "#0891b2", filter: "blur(40px)" }} />
      </section>
    </>
  );
}
