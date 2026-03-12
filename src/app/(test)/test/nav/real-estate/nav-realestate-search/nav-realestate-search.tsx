"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "FindHome",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "Search",
    searchPlaceholder: "Search properties...",
    location: "All Locations",
    type: "Property Type",
  },
  ar: {
    brand: "فايند هوم",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "بحث",
    searchPlaceholder: "ابحث عن عقارات...",
    location: "جميع المواقع",
    type: "نوع العقار",
  },
};

export function NavRealEstateSearch({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .search-nav-input:focus {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }
      `}</style>
      <nav className="bg-white shadow-md">
        <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-blue-600 font-bold text-xl">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3">
          <div className={`max-w-6xl mx-auto flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="flex-1 relative">
              <svg className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 ${isAr ? "right-3" : "left-3"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className={`search-nav-input w-full border border-gray-300 rounded-lg py-2.5 text-sm outline-none ${isAr ? "pr-10 pl-3" : "pl-10 pr-3"}`}
              />
            </div>
            <select className="border border-gray-300 rounded-lg py-2.5 px-4 text-sm text-gray-600 outline-none bg-white min-w-[140px]">
              <option>{t.location}</option>
            </select>
            <select className="border border-gray-300 rounded-lg py-2.5 px-4 text-sm text-gray-600 outline-none bg-white min-w-[140px]">
              <option>{t.type}</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2.5 rounded-lg text-sm transition-colors">
              {t.cta}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
