"use client";

interface Props { language: "en" | "ar"; }

const content = {
  en: { brand: "DataHub", breadcrumb: ["Dashboard", "Analytics"], links: ["Overview", "Reports", "Settings"], user: "JD" },
  ar: { brand: "داتا هب", breadcrumb: ["لوحة التحكم", "التحليلات"], links: ["نظرة عامة", "التقارير", "الإعدادات"], user: "م ع" },
};

export function NavSaasDashboard({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  return (
    <nav className="bg-[#1a1d23] border-b border-gray-700/50">
      <div className={`max-w-7xl mx-auto px-6 h-14 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-white font-bold">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-1 text-sm ${isAr ? "flex-row-reverse" : ""}`}>
            {t.breadcrumb.map((crumb, i) => (
              <span key={i} className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
                {i > 0 && <span className="text-gray-600 mx-1">/</span>}
                <a href="#" className={i === t.breadcrumb.length - 1 ? "text-white" : "text-gray-500 hover:text-white transition-colors"}>
                  {crumb}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`hidden md:flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className={`text-sm transition-colors ${i === 0 ? "text-white" : "text-gray-500 hover:text-white"}`}>{link}</a>
            ))}
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            {t.user}
          </div>
        </div>
      </div>
    </nav>
  );
}
