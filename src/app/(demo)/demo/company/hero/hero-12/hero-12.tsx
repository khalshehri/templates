"use client";

interface Hero12Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Two sides of\nevery great\nstrategy",
    body: "The analytical rigor to see clearly. The creative courage to act boldly.",
    cta: "Let's talk",
    statValue: "2,400+",
    statLabel: "Strategists worldwide",
  },
  ar: {
    heading: "وجهان لكل\nاستراتيجية\nعظيمة",
    body: "الصرامة التحليلية للرؤية بوضوح. والشجاعة الإبداعية للتصرف بجرأة.",
    cta: "لنتحدث",
    statValue: "٢,٤٠٠+",
    statLabel: "استراتيجي حول العالم",
  },
};

export function Hero12({ language }: Hero12Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero12-lineGrow {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes hero12-slideLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero12-slideRight {
          from { opacity: 0; transform: translateX(48px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero12-slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero12-line, .hero12-left, .hero12-right, .hero12-mobile { animation: none !important; opacity: 1 !important; height: 100% !important; }
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left — indigo */}
        <div
          className="relative flex-1 flex items-center"
          style={{ backgroundColor: "#1e1b4b" }}
        >
          <div
            className="hero12-left w-full px-8 md:px-12 lg:px-20 py-20 md:py-0"
            style={{ animation: "hero12-slideLeft 0.9s ease-out 0.3s both" }}
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-pre-line leading-tight ${
                isAr
                  ? "font-[family-name:var(--font-changa)] text-right"
                  : "font-[family-name:var(--font-inter)] text-left"
              }`}
            >
              {t.heading}
            </h1>
          </div>
        </div>

        {/* Divider line — desktop only */}
        <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 z-10 items-center">
          <div className="relative w-px h-full">
            <div
              className="hero12-line absolute top-0 left-0 w-px bg-white/30"
              style={{ animation: "hero12-lineGrow 1.5s ease-out both" }}
            />
          </div>
        </div>

        {/* Right — coral */}
        <div
          className="relative flex-1 flex items-center"
          style={{ backgroundColor: "#ff6b6b" }}
        >
          <div
            className="hero12-right w-full px-8 md:px-12 lg:px-20 py-20 md:py-0 flex flex-col gap-10"
            style={{ animation: "hero12-slideRight 0.9s ease-out 0.3s both" }}
          >
            <p
              className={`text-white/90 text-lg md:text-xl max-w-md leading-relaxed ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)] text-right"
                  : "font-[family-name:var(--font-inter)] text-left"
              }`}
            >
              {t.body}
            </p>

            <div>
              <button
                className="cursor-pointer bg-white rounded-full px-8 py-3.5 font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                style={{ color: "#ff6b6b" }}
              >
                <span
                  className={
                    isAr
                      ? "font-[family-name:var(--font-tajawal)]"
                      : "font-[family-name:var(--font-inter)]"
                  }
                >
                  {t.cta}
                </span>
              </button>
            </div>

            <div className={isAr ? "text-right" : "text-left"}>
              <p
                className={`text-4xl md:text-5xl font-bold text-white ${
                  isAr
                    ? "font-[family-name:var(--font-changa)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.statValue}
              </p>
              <p
                className={`text-white/70 text-sm mt-1 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.statLabel}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
