"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "CardNav",
    links: ["Home", "Services", "Portfolio", "Contact"],
    cta: "Start Project",
  },
  ar: {
    brand: "كارد ناف",
    links: ["الرئيسية", "الخدمات", "الأعمال", "اتصل بنا"],
    cta: "ابدأ مشروع",
  },
};

export function NavServiceCard({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <div className="pt-4 px-6">
      <nav className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg shadow-orange-100/50 border border-orange-100 px-6 py-3">
        <div className={`flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-rose-400 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-gray-800">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-orange-600 hover:bg-orange-50 px-3.5 py-2 rounded-xl text-sm font-medium transition-all"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-all shadow-sm shadow-orange-200">
            {t.cta}
          </button>
        </div>
      </nav>
    </div>
  );
}
