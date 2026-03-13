"use client";

interface Hero17Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Structure creates\nfreedom",
    band2Text: "SINCE 2003",
    body: "We design organizational frameworks that give leaders the freedom to focus on what matters most.",
    cta: "Discover our framework →",
    stats: [
      { number: "180+", label: "Frameworks deployed" },
      { number: "35", label: "Countries served" },
      { number: "94%", label: "Client retention" },
    ],
  },
  ar: {
    heading: "الهيكل يصنع\nالحرية",
    band2Text: "منذ ٢٠٠٣",
    body: "نصمم أُطراً مؤسسية تمنح القادة حرية التركيز على ما يهم أكثر.",
    cta: "اكتشف إطارنا ←",
    stats: [
      { number: "١٨٠+", label: "إطار عمل منفّذ" },
      { number: "٣٥", label: "دولة نخدمها" },
      { number: "٩٤٪", label: "نسبة الاحتفاظ" },
    ],
  },
};

export function Hero17({ language }: Hero17Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <style>{`
        @keyframes hero17SlideIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero17-band-1 {
          animation: hero17SlideIn 0.7s ease-out both;
        }
        .hero17-band-2 {
          animation: hero17SlideIn 0.7s ease-out 0.1s both;
        }
        .hero17-band-3 {
          animation: hero17SlideIn 0.7s ease-out 0.2s both;
        }
        .hero17-band-4 {
          animation: hero17SlideIn 0.7s ease-out 0.3s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero17-band-1,
          .hero17-band-2,
          .hero17-band-3,
          .hero17-band-4 {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Band 1 — Cream heading */}
      <div
        className="hero17-band-1 flex-[45] flex items-end"
        style={{ backgroundColor: "#f8f6f3" }}
      >
        <div className="w-full max-w-6xl mx-auto px-8 md:px-16 pb-10 pt-16">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-tight whitespace-pre-line ${fontHeading}`}
            style={{ color: "#2d3436" }}
          >
            {t.heading}
          </h1>
        </div>
      </div>

      {/* Band 2 — Terracotta accent */}
      <div
        className="hero17-band-2 flex-[5] flex items-center"
        style={{ backgroundColor: "#e07a5f" }}
      >
        <div className="w-full max-w-6xl mx-auto px-8 md:px-16">
          <span
            className={`text-[10px] text-white/70 tracking-[0.3em] ${fontBody}`}
          >
            {t.band2Text}
          </span>
        </div>
      </div>

      {/* Band 3 — White body + CTA */}
      <div className="hero17-band-3 flex-[30] flex items-center bg-white">
        <div className="w-full max-w-6xl mx-auto px-8 md:px-16 py-10">
          <p
            className={`text-gray-400 text-lg max-w-lg leading-relaxed ${fontBody}`}
          >
            {t.body}
          </p>
          <a
            className={`mt-6 inline-block cursor-pointer underline underline-offset-4 transition-all duration-300 hover:opacity-70 ${fontBody}`}
            style={{ color: "#e07a5f" }}
          >
            {t.cta}
          </a>
        </div>
      </div>

      {/* Band 4 — Dark stats */}
      <div
        className="hero17-band-4 flex-[20] flex items-center"
        style={{ backgroundColor: "#2d3436" }}
      >
        <div className="w-full max-w-6xl mx-auto px-8 md:px-16 py-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {t.stats.map((stat, i) => (
              <div key={i}>
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
