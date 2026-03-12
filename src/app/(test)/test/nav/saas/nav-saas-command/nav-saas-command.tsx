"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "Orbital", links: ["Docs", "API", "Pricing", "Blog"], cta: "Sign Up", search: "⌘K" },
  ar: { brand: "أوربيتال", links: ["التوثيق", "الواجهة", "الأسعار", "المدونة"], cta: "سجل الآن", search: "⌘K" },
};

export function NavSaasCommand({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className={`max-w-7xl mx-auto px-6 h-14 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{link}</a>
          ))}
        </div>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="text-xs font-mono bg-white border border-gray-300 px-1.5 py-0.5 rounded">{t.search}</span>
          </button>
          <a href="#" className="px-4 py-1.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
            {t.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
