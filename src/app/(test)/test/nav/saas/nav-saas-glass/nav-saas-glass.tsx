"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "Prism", links: ["Product", "Pricing", "Resources", "Company"], cta: "Try Free" },
  ar: { brand: "بريزم", links: ["المنتج", "الأسعار", "الموارد", "الشركة"], cta: "جرب مجاناً" },
};

export function NavSaasGlass({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <div className="pt-4 px-4">
      <nav className="max-w-4xl mx-auto backdrop-blur-xl bg-white/[0.06] border border-white/[0.08] rounded-full px-6 h-14 flex items-center justify-between shadow-lg shadow-black/20">
        <span className={`text-white font-bold text-lg ${isAr ? "order-last" : ""}`}>{t.brand}</span>
        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="text-sm text-gray-300 hover:text-white transition-colors">{link}</a>
          ))}
        </div>
        <a href="#" className={`px-5 py-1.5 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors ${isAr ? "order-first" : ""}`}>
          {t.cta}
        </a>
      </nav>
    </div>
  );
}
