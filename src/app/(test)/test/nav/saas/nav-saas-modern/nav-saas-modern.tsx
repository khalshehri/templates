"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "CloudBase", links: ["Features", "Pricing", "Docs", "Blog"], cta: "Start Free" },
  ar: { brand: "كلاود بيس", links: ["المميزات", "الأسعار", "التوثيق", "المدونة"], cta: "ابدأ مجاناً" },
};

export function NavSaasModern({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <nav className="bg-gray-950 border-b border-gray-800">
      <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="text-white font-bold text-xl">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className={`px-4 py-1.5 rounded-full text-sm transition-colors ${i === 0 ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800/50"}`}>
              {link}
            </a>
          ))}
        </div>
        <a href="#" className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all">
          {t.cta}
        </a>
      </div>
    </nav>
  );
}
