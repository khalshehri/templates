"use client";

interface Hero15Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Intelligence that\naccelerates decisions",
    body: "Real-time insights, predictive analytics, and AI-powered recommendations for enterprise leaders.",
    cta: "See the platform →",
    stats: [
      { number: "3.2M", label: "Decisions supported daily" },
      { number: "47ms", label: "Average insight delivery" },
      { number: "99.9%", label: "Data accuracy rate" },
    ],
  },
  ar: {
    heading: "ذكاء يسرّع\nالقرارات",
    body: "رؤى فورية وتحليلات تنبؤية وتوصيات مدعومة بالذكاء الاصطناعي لقادة المؤسسات.",
    cta: "شاهد المنصة ←",
    stats: [
      { number: "٣.٢ مليون", label: "قرار مدعوم يومياً" },
      { number: "٤٧ مل‌ث", label: "متوسط تسليم الرؤى" },
      { number: "٩٩.٩٪", label: "دقة البيانات" },
    ],
  },
};

export function Hero15({ language }: Hero15Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a0533 0%, #0c1445 50%, #061224 100%)",
      }}
    >
      <style>{`
        @keyframes hero15SlideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero15SlideRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero15Pulse {
          0%, 100% { box-shadow: 0 0 8px 2px rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 0 16px 6px rgba(139, 92, 246, 0.7); }
        }
        .hero15-panel-left {
          animation: hero15SlideLeft 0.8s ease-out both;
        }
        .hero15-panel-right {
          animation: hero15SlideRight 0.8s ease-out 0.2s both;
        }
        .hero15-dot {
          animation: hero15Pulse 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero15-panel-left,
          .hero15-panel-right {
            animation: none;
            opacity: 1;
          }
          .hero15-dot {
            animation: none;
            box-shadow: 0 0 8px 2px rgba(139, 92, 246, 0.4);
          }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
          {/* Left Glass Panel */}
          <div
            className={`hero15-panel-left flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-center ${fontHeading}`}
          >
            <h1
              className={`text-3xl md:text-4xl font-semibold text-white whitespace-pre-line leading-tight ${fontHeading}`}
            >
              {t.heading}
            </h1>
            <p
              className={`mt-5 text-white/50 text-base leading-relaxed ${fontBody}`}
            >
              {t.body}
            </p>
            <a
              className={`mt-6 text-violet-300 text-sm cursor-pointer hover:text-white transition-all duration-300 underline underline-offset-4 inline-block ${fontBody}`}
            >
              {t.cta}
            </a>
          </div>

          {/* Glowing Dot */}
          <div className="hidden md:flex items-center justify-center px-4">
            <div className="hero15-dot w-2 h-2 rounded-full bg-violet-500" />
          </div>
          <div className="flex md:hidden items-center justify-center py-2">
            <div className="hero15-dot w-2 h-2 rounded-full bg-violet-500" />
          </div>

          {/* Right Glass Panel */}
          <div className="hero15-panel-right flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className={`py-5 ${i < t.stats.length - 1 ? "border-b border-white/5" : ""}`}
              >
                <div
                  className={`text-2xl font-light text-white ${fontHeading}`}
                >
                  {stat.number}
                </div>
                <div className={`mt-1 text-xs text-white/40 ${fontBody}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
