"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "NatureHeal",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Book Visit",
    tagline: "Holistic wellness",
  },
  ar: {
    brand: "طبيعة الشفاء",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احجز زيارة",
    tagline: "عافية شاملة",
  },
};

export function NavClinicGreen({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-green-100">
      <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Leaf icon */}
          <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 15C3 11 5 5 13 3c1 5-1 9-4 11" fill="#22c55e" opacity="0.3"/>
              <path d="M5 15C3 11 5 5 13 3c1 5-1 9-4 11" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M9 14c-2-2-3-5-2-8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={`${isAr ? "text-right" : ""}`}>
            <span className="font-bold text-green-900 block leading-tight">{t.brand}</span>
            <span className="text-[10px] text-green-500">{t.tagline}</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-green-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
