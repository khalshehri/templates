"use client";

interface Hero16Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "We build what matters.",
    body: "Twenty years of turning strategic vision into operational reality for the Middle East's most ambitious enterprises.",
    cta: "Work with us",
    bigNumber: "24",
    established: "ESTABLISHED MMIII",
  },
  ar: {
    heading: "نبني ما يهم.",
    body: "عشرون عاماً من تحويل الرؤية الاستراتيجية إلى واقع تشغيلي لأكثر مؤسسات الشرق الأوسط طموحاً.",
    cta: "اعمل معنا",
    bigNumber: "٢٤",
    established: "ESTABLISHED MMIII",
  },
};

export function Hero16({ language }: Hero16Props) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr
    ? "font-[family-name:var(--font-changa)]"
    : "font-[family-name:var(--font-inter)]";
  const fontBody = isAr
    ? "font-[family-name:var(--font-tajawal)]"
    : "font-[family-name:var(--font-inter)]";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <style>{`
        @keyframes hero16Typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes hero16Blink {
          0%, 100% { border-color: #1a1a1a; }
          50% { border-color: transparent; }
        }
        @keyframes hero16FadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero16-typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #1a1a1a;
          animation: hero16Typing 2s steps(30, end) both,
                     hero16Blink 0.75s step-end infinite;
        }
        .hero16-body {
          opacity: 0;
          animation: hero16FadeIn 0.5s ease-out 2.2s both;
        }
        .hero16-cta {
          opacity: 0;
          animation: hero16FadeIn 0.5s ease-out 2.6s both;
        }
        @media (max-width: 767px) {
          .hero16-typing {
            white-space: normal;
            overflow: visible;
            border-right: none;
            animation: hero16FadeIn 0.6s ease-out both;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero16-typing {
            animation: none;
            opacity: 1;
            white-space: normal;
            overflow: visible;
            border-right: none;
          }
          .hero16-body,
          .hero16-cta {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Big decorative number */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${isAr ? "left-8 md:left-16" : "right-8 md:right-16"} select-none pointer-events-none`}
      >
        <span
          className={`text-[8rem] md:text-[12rem] font-bold text-gray-50 leading-none ${fontHeading}`}
        >
          {t.bigNumber}
        </span>
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-20`}
      >
        <div className={`${isAr ? "text-right" : "text-left"}`}>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${fontHeading}`}
          >
            <span className="hero16-typing">{t.heading}</span>
          </h1>

          <p
            className={`hero16-body mt-8 text-gray-400 text-lg max-w-md leading-relaxed ${fontBody} ${isAr ? "mr-0 ml-auto md:mr-0" : ""}`}
          >
            {t.body}
          </p>

          <div className="hero16-cta mt-8">
            <button
              className={`bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-all duration-300 text-sm ${fontBody}`}
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom established text */}
      <div
        className={`absolute bottom-8 ${isAr ? "right-8 md:right-16" : "left-8 md:left-16"}`}
      >
        <span
          className={`text-[10px] text-gray-300 tracking-widest ${fontBody}`}
        >
          {t.established}
        </span>
      </div>
    </section>
  );
}
