"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "MapService",
    links: ["Home", "Services", "Areas", "Reviews"],
    cta: "Get Directions",
    address: "123 Main Street, Suite 200, Downtown",
  },
  ar: {
    brand: "خدمة الموقع",
    links: ["الرئيسية", "الخدمات", "المناطق", "التقييمات"],
    cta: "احصل على الاتجاهات",
    address: "١٢٣ شارع الملك فهد، المركز التجاري",
  },
};

export function NavServiceMap({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-slate-800 text-white">
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div className={isAr ? "text-right" : ""}>
            <span className="font-bold block leading-tight">{t.brand}</span>
            <span className={`text-xs text-slate-400 flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
              <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {t.address}
            </span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className={`flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
