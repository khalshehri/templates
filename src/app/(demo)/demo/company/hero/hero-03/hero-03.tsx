"use client";

interface Hero03Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Infrastructure for what\u2019s next",
    sub: "Enterprise-grade platforms built for scale, security, and the demands of tomorrow\u2019s markets.",
    cta: "Request a briefing",
    stats: ["230+ enterprise clients", "12 markets", "$4.2B assets managed"],
  },
  ar: {
    heading: "بنية تحتية لما هو قادم",
    sub: "منصات بمستوى المؤسسات مصممة للنمو والأمان ومتطلبات أسواق الغد.",
    cta: "اطلب جلسة إحاطة",
    stats: ["+230 عميل مؤسسي", "12 سوقاً", "4.2 مليار$ أصول مُدارة"],
  },
};

export function Hero03({ language }: Hero03Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero03FadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes hero03OrbDrift {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-20px, 10px);
          }
          66% {
            transform: translate(15px, -8px);
          }
        }
        .hero03-fade {
          animation: hero03FadeUp 0.7s ease-out both;
        }
        .hero03-fade-d1 { animation-delay: 0.15s; }
        .hero03-fade-d2 { animation-delay: 0.3s; }
        .hero03-fade-d3 { animation-delay: 0.5s; }
        .hero03-orb {
          animation: hero03OrbDrift 30s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero03-fade {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero03-orb {
            animation: none;
          }
        }
      `}</style>

      <section
        className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
        style={{
          background: "linear-gradient(180deg, #0c1220 0%, #1a1a2e 100%)",
        }}
      >
        {/* Ambient orb */}
        <div
          className="hero03-orb absolute pointer-events-none"
          style={{
            top: "-5%",
            right: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
          <h1
            className={`hero03-fade text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6 ${isAr ? "font-[family-name:var(--font-changa)]" : "font-[family-name:var(--font-inter)]"}`}
          >
            {t.heading}
          </h1>

          <p
            className={`hero03-fade hero03-fade-d1 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
          >
            {t.sub}
          </p>

          <a
            href="#"
            className={`hero03-fade hero03-fade-d2 inline-block px-8 py-3.5 border border-white/30 text-white text-sm cursor-pointer transition-all duration-300 hover:border-white/60 hover:bg-white/5 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
          >
            {t.cta}
          </a>

          {/* Stats */}
          <div className="hero03-fade hero03-fade-d3 mt-20 flex flex-col sm:flex-row items-center justify-center gap-0">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-4 bg-white/10 mx-6" />
                )}
                {i > 0 && (
                  <div className="sm:hidden w-12 h-px bg-white/10 my-4" />
                )}
                <span
                  className={`text-sm text-gray-500 ${isAr ? "font-[family-name:var(--font-tajawal)]" : "font-[family-name:var(--font-inter)]"}`}
                >
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
