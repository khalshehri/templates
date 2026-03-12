"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "Flowline", links: ["Features", "Integrations", "Pricing", "About"], cta: "Get Started" },
  ar: { brand: "فلولاين", links: ["المميزات", "التكاملات", "الأسعار", "عن الشركة"], cta: "ابدأ الآن" },
};

export function NavSaasGradient({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <nav className="bg-gray-950 relative">
      <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="text-white font-bold text-xl">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
          ))}
        </div>
        <a href="#" className="px-5 py-2 text-sm font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          {t.cta}
        </a>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </nav>
  );
}
