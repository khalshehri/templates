"use client";

interface Hero18Props {
  language: "en" | "ar";
}

const content = {
  en: {
    heading: "Precision-targeted\nresults",
    body: "Every engagement calibrated for maximum impact. No wasted motion. No wasted resources.",
    cta: "GO",
    corners: {
      topLeft: "EST. 2003",
      topRight: "RIYADH, KSA",
      bottomLeft: "47 MARKETS",
      bottomRight: "ISO 27001",
    },
  },
  ar: {
    heading: "نتائج\nمستهدفة بدقة",
    body: "كل مشروع مُعاير لأقصى تأثير. بلا حركة ضائعة. بلا موارد مهدرة.",
    cta: "ابدأ",
    corners: {
      topLeft: "تأسست ٢٠٠٣",
      topRight: "الرياض، م.ع.س",
      bottomLeft: "٤٧ سوقاً",
      bottomRight: "ISO 27001",
    },
  },
};

export function Hero18({ language }: Hero18Props) {
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
      style={{ backgroundColor: "#f9f9f7" }}
    >
      <style>{`
        @keyframes hero18ExpandH {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes hero18ExpandV {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes hero18FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero18-line-h {
          animation: hero18ExpandH 1s ease-out both;
        }
        .hero18-line-v {
          animation: hero18ExpandV 1s ease-out both;
        }
        .hero18-content {
          animation: hero18FadeIn 0.6s ease-out 0.6s both;
        }
        .hero18-corners {
          animation: hero18FadeIn 0.5s ease-out 1s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero18-line-h,
          .hero18-line-v {
            animation: none;
            width: 100%;
            height: 100%;
          }
          .hero18-content,
          .hero18-corners {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Crosshair horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-center pointer-events-none z-0">
        <div className="hero18-line-h h-px bg-gray-200 mx-auto" style={{ maxWidth: "100%" }} />
      </div>

      {/* Crosshair vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 flex items-center pointer-events-none z-0">
        <div className="hero18-line-v w-px bg-gray-200 -translate-x-1/2" />
      </div>

      {/* Corner labels */}
      <div className="hero18-corners absolute top-8 left-8 md:left-12">
        <span className={`text-[10px] text-gray-300 tracking-widest ${fontBody}`}>
          {isAr ? t.corners.topRight : t.corners.topLeft}
        </span>
      </div>
      <div className="hero18-corners absolute top-8 right-8 md:right-12">
        <span className={`text-[10px] text-gray-300 tracking-widest ${fontBody}`}>
          {isAr ? t.corners.topLeft : t.corners.topRight}
        </span>
      </div>
      <div className="hero18-corners absolute bottom-8 left-8 md:left-12">
        <span className={`text-[10px] text-gray-300 tracking-widest ${fontBody}`}>
          {isAr ? t.corners.bottomRight : t.corners.bottomLeft}
        </span>
      </div>
      <div className="hero18-corners absolute bottom-8 right-8 md:right-12">
        <span className={`text-[10px] text-gray-300 tracking-widest ${fontBody}`}>
          {isAr ? t.corners.bottomLeft : t.corners.bottomRight}
        </span>
      </div>

      {/* Center content */}
      <div className="hero18-content relative z-10 text-center px-6 max-w-2xl">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight whitespace-pre-line ${fontHeading}`}
        >
          {t.heading}
        </h1>
        <p
          className={`mt-6 text-gray-400 text-base max-w-md mx-auto leading-relaxed ${fontBody}`}
        >
          {t.body}
        </p>
        <div className="mt-8 flex justify-center">
          <button
            className={`w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:text-white text-gray-800 group ${fontBody}`}
          >
            <span className="text-xs font-bold tracking-widest group-hover:text-white transition-all duration-300">
              {t.cta}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
