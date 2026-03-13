"use client";

interface Hero04Props {
  language: "en" | "ar";
}

const content = {
  en: {
    eyebrow: "GLOBAL OPERATIONS",
    heading: "Engineered for scale\nacross borders",
    body: "Operating in 47 markets with 2,400 professionals, we bring institutional rigor to every engagement.",
    cta: "View capabilities",
    stats: [
      { number: "47", label: "Active Markets" },
      { number: "2.4K", label: "Professionals" },
      { number: "$18B", label: "Assets Under Advisory" },
    ],
  },
  ar: {
    eyebrow: "العمليات العالمية",
    heading: "مصممة للنمو\nعبر الحدود",
    body: "نعمل في 47 سوقاً مع 2,400 متخصص، ونجلب الصرامة المؤسسية لكل مشروع.",
    cta: "عرض القدرات",
    stats: [
      { number: "٤٧", label: "سوقاً نشطاً" },
      { number: "٢.٤ ألف", label: "متخصص" },
      { number: "$١٨ مليار", label: "أصول تحت الاستشارة" },
    ],
  },
};

export function Hero04({ language }: Hero04Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes hero04DiagonalSlide {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes hero04FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero04StatsFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero04-diagonal {
          animation: hero04DiagonalSlide 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero04-text-1 { opacity: 0; animation: hero04FadeUp 0.6s ease-out 0.3s forwards; }
        .hero04-text-2 { opacity: 0; animation: hero04FadeUp 0.6s ease-out 0.45s forwards; }
        .hero04-text-3 { opacity: 0; animation: hero04FadeUp 0.6s ease-out 0.6s forwards; }
        .hero04-text-4 { opacity: 0; animation: hero04FadeUp 0.6s ease-out 0.75s forwards; }
        .hero04-stat-1 { opacity: 0; animation: hero04StatsFade 0.5s ease-out 1s forwards; }
        .hero04-stat-2 { opacity: 0; animation: hero04StatsFade 0.5s ease-out 1.15s forwards; }
        .hero04-stat-3 { opacity: 0; animation: hero04StatsFade 0.5s ease-out 1.3s forwards; }
        @media (prefers-reduced-motion: reduce) {
          .hero04-diagonal,
          .hero04-text-1, .hero04-text-2, .hero04-text-3, .hero04-text-4,
          .hero04-stat-1, .hero04-stat-2, .hero04-stat-3 {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-white">
        {/* Dark diagonal overlay — desktop */}
        <div
          className="hero04-diagonal absolute inset-0 hidden md:block bg-[#1e293b]"
          style={{
            clipPath: isAr
              ? "polygon(0 0, 45% 0, 65% 100%, 0 100%)"
              : "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)",
          }}
        />

        {/* Content wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
          {/* LEFT SIDE — White, text content */}
          <div
            className={`flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 md:py-0 ${
              isAr ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className={`max-w-lg ${isAr ? "md:mr-auto md:ml-16 lg:ml-24" : ""}`}>
              <div className="hero04-text-1 flex items-center gap-2 mb-6">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full" />
                <span
                  className={`text-[11px] tracking-[0.2em] text-gray-400 uppercase ${
                    isAr
                      ? "font-[family-name:var(--font-tajawal)]"
                      : "font-[family-name:var(--font-inter)]"
                  }`}
                >
                  {t.eyebrow}
                </span>
              </div>

              <h1
                className={`hero04-text-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.1] mb-6 whitespace-pre-line ${
                  isAr
                    ? "font-[family-name:var(--font-changa)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.heading}
              </h1>

              <p
                className={`hero04-text-3 text-gray-500 text-base max-w-md leading-relaxed mb-8 ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.body}
              </p>

              <button
                className={`hero04-text-4 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-all duration-300 text-sm ${
                  isAr
                    ? "font-[family-name:var(--font-tajawal)]"
                    : "font-[family-name:var(--font-inter)]"
                }`}
              >
                {t.cta}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — Dark on mobile, stats positioned in diagonal on desktop */}
          <div
            className={`flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 bg-[#1e293b] md:bg-transparent ${
              isAr ? "md:order-1" : "md:order-2"
            }`}
          >
            <div
              className={`space-y-10 ${
                isAr ? "md:mr-auto md:ml-8 lg:ml-16" : "md:ml-auto md:mr-8 lg:mr-16"
              }`}
            >
              {t.stats.map((stat, i) => (
                <div key={i} className={`hero04-stat-${i + 1}`}>
                  <div
                    className={`text-3xl font-light text-white mb-1 ${
                      isAr
                        ? "font-[family-name:var(--font-changa)]"
                        : "font-[family-name:var(--font-inter)]"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-sm text-gray-400 ${
                      isAr
                        ? "font-[family-name:var(--font-tajawal)]"
                        : "font-[family-name:var(--font-inter)]"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
