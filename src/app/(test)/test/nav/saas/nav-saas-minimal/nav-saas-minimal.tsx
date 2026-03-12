"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "simple.", links: ["Product", "Pricing", "About"], cta: "Sign in" },
  ar: { brand: "بسيط.", links: ["المنتج", "الأسعار", "عنّا"], cta: "تسجيل دخول" },
};

export function NavSaasMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <nav className="py-6">
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="text-gray-900 font-bold text-xl">{t.brand}</span>
        <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{link}</a>
          ))}
          <a href="#" className="text-sm text-gray-900 font-medium hover:underline">{t.cta} →</a>
        </div>
      </div>
    </nav>
  );
}
