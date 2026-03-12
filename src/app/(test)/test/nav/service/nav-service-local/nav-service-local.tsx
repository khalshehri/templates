"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "LocalPro",
    links: ["Home", "Services", "Reviews", "Contact"],
    area: "Downtown, Main St.",
    phone: "(555) 987-6543",
    cta: "Call Us",
  },
  ar: {
    brand: "خدمات محلية",
    links: ["الرئيسية", "الخدمات", "التقييمات", "اتصل بنا"],
    area: "وسط المدينة، الشارع الرئيسي",
    phone: "٩٦٦ ٥٥ ٩٨٧ ٦٥٤٣",
    cta: "اتصل بنا",
  },
};

export function NavServiceLocal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gradient-to-b from-amber-50 to-white border-b-2 border-amber-200">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div className={isAr ? "text-right" : ""}>
            <span className="font-bold text-amber-900 text-lg block leading-tight">{t.brand}</span>
            <span className={`text-xs text-amber-600 flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {t.area}
            </span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-amber-800 hover:text-amber-600 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <a href="#" className={`hidden sm:flex items-center gap-2 text-amber-800 font-semibold text-sm ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t.phone}
          </a>
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm">
            {t.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}
