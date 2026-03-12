"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "PinPoint Realty",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "Find Nearby",
    city: "Riyadh, SA",
  },
  ar: {
    brand: "بين بوينت",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "ابحث بالقرب",
    city: "الرياض، السعودية",
  },
};

export function NavRealEstateMap({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .map-pin-bounce {
          animation: pinBounce 2s ease-in-out infinite;
        }
        .map-nav-link:hover {
          color: #16a34a;
        }
      `}</style>
      <nav className="bg-white shadow-sm border-b border-gray-100 px-6 py-3">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="map-pin-bounce">
              <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className={`flex flex-col ${isAr ? "items-end" : ""}`}>
              <span className="text-gray-900 font-bold text-lg leading-tight">{t.brand}</span>
              <span className="text-green-600 text-xs font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                {t.city}
              </span>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="map-nav-link text-gray-600 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-full text-sm transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
