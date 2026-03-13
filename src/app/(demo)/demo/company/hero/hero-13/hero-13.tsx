"use client";

interface Hero13Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Sustainable growth,\nmeasurable impact",
    body: "Building responsible enterprises that thrive across generations.",
    cta: "Our approach",
    stats: [
      { value: "35 Years", label: "In Operation" },
      { value: "$8.2B", label: "Revenue Managed" },
      { value: "12", label: "Regional Offices" },
    ],
  },
  ar: {
    heading: "نمو مستدام،\nتأثير قابل للقياس",
    body: "بناء مؤسسات مسؤولة تزدهر عبر الأجيال.",
    cta: "نهجنا",
    stats: [
      { value: "٣٥ عاماً", label: "في العمل" },
      { value: "$٨.٢ مليار", label: "إيرادات مُدارة" },
      { value: "١٢", label: "مكتباً إقليمياً" },
    ],
  },
};

export function Hero13({ language }: Hero13Props) {
  const t = content[language];
  const isAr = language === "ar";

  return (
    <>
      <style>{`
        @keyframes hero13-waveSway1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }
        @keyframes hero13-waveSway2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        @keyframes hero13-waveSway3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-15px); }
        }
        @keyframes hero13-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero13-wave1, .hero13-wave2, .hero13-wave3 { animation: none !important; }
          .hero13-fade { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* White top area */}
        <div className="relative bg-white flex-1 flex items-center justify-center px-6 pt-20 pb-40 md:pb-56">
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1
              className={`hero13-fade text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 whitespace-pre-line leading-tight ${
                isAr
                  ? "font-[family-name:var(--font-changa)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
              style={{ animation: "hero13-fadeUp 0.8s ease-out both" }}
            >
              {t.heading}
            </h1>

            <p
              className={`hero13-fade text-gray-500 text-lg mt-5 max-w-lg mx-auto ${
                isAr
                  ? "font-[family-name:var(--font-tajawal)]"
                  : "font-[family-name:var(--font-inter)]"
              }`}
              style={{ animation: "hero13-fadeUp 0.8s ease-out 0.15s both" }}
            >
              {t.body}
            </p>

            <div
              className="hero13-fade mt-8"
              style={{ animation: "hero13-fadeUp 0.8s ease-out 0.3s both" }}
            >
              <button
                className="cursor-pointer text-white px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:opacity-90"
                style={{ backgroundColor: "#0f3d3e" }}
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
          </div>
        </div>

        {/* SVG Waves */}
        <div className="absolute bottom-[30%] md:bottom-[28%] left-0 right-0 z-[2] pointer-events-none">
          {/* Wave 1 — darkest */}
          <svg
            className="hero13-wave1 w-full block"
            style={{ animation: "hero13-waveSway1 12s ease-in-out infinite" }}
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,180 L0,180 Z"
              fill="#0f3d3e"
            />
          </svg>
        </div>

        <div className="absolute bottom-[33%] md:bottom-[31%] left-0 right-0 z-[1] pointer-events-none">
          {/* Wave 2 — mid teal */}
          <svg
            className="hero13-wave2 w-full block"
            style={{ animation: "hero13-waveSway2 10s ease-in-out infinite" }}
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C320,40 560,150 840,90 C1120,30 1280,130 1440,100 L1440,180 L0,180 Z"
              fill="#1a5c5e"
            />
          </svg>
        </div>

        <div className="absolute bottom-[36%] md:bottom-[34%] left-0 right-0 z-[0] pointer-events-none">
          {/* Wave 3 — lightest teal */}
          <svg
            className="hero13-wave3 w-full block"
            style={{ animation: "hero13-waveSway3 14s ease-in-out infinite" }}
            viewBox="0 0 1440 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C180,130 420,30 660,90 C900,150 1140,50 1440,60 L1440,180 L0,180 Z"
              fill="#267b7d"
            />
          </svg>
        </div>

        {/* Dark teal bottom area */}
        <div
          className="relative flex items-center justify-center px-6 py-20 md:py-24"
          style={{ backgroundColor: "#0f3d3e", minHeight: "30vh" }}
        >
          <div
            className="hero13-fade relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center max-w-3xl mx-auto w-full"
            style={{ animation: "hero13-fadeUp 0.8s ease-out 0.5s both" }}
          >
            {t.stats.map((stat, i) => (
              <div key={i}>
                <p
                  className={`text-3xl md:text-4xl font-bold text-white ${
                    isAr
                      ? "font-[family-name:var(--font-changa)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`text-white/60 text-sm mt-1 ${
                    isAr
                      ? "font-[family-name:var(--font-tajawal)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
