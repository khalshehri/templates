"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Compass Realty",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "Explore Now",
  },
  ar: {
    brand: "كومباس العقارية",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "استكشف الآن",
  },
};

export function NavRealEstateCompass({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes compassSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .compass-icon:hover .compass-needle {
          animation: compassSpin 1s ease-in-out;
        }
        .compass-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .compass-link::before {
          content: '>';
          position: absolute;
          left: -12px;
          opacity: 0;
          transition: all 0.3s ease;
          color: #0284c7;
        }
        .compass-link:hover {
          color: #0284c7;
        }
        .compass-link:hover::before {
          opacity: 1;
          left: -16px;
        }
      `}</style>
      <nav className="bg-gradient-to-r from-sky-50 to-white border-b border-sky-200/50 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 compass-icon ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 rounded-full border-2 border-sky-600 flex items-center justify-center relative">
              <div className="compass-needle absolute w-0.5 h-5 bg-gradient-to-b from-red-500 to-sky-600 rounded-full" />
              <div className="absolute w-6 h-0.5 bg-sky-300 rounded-full" />
              <span className="absolute -top-1 text-[8px] text-sky-600 font-bold">N</span>
            </div>
            <span className="text-sky-900 font-bold text-lg">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="compass-link text-gray-600 text-sm font-medium">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
