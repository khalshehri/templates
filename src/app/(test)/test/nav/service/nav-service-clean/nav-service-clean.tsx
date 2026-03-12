"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "CleanServe",
    links: ["Home", "Services", "Pricing", "About", "Contact"],
    cta: "Get Quote",
  },
  ar: {
    brand: "خدمة نظيفة",
    links: ["الرئيسية", "الخدمات", "الأسعار", "من نحن", "اتصل بنا"],
    cta: "احصل على عرض",
  },
};

export function NavServiceClean({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-50">
      <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">CS</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors ${i === 0 ? "text-teal-600" : "text-gray-500 hover:text-teal-600"}`}
            >
              {link}
            </a>
          ))}
        </div>

        <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-5 py-2 rounded-md text-sm transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
