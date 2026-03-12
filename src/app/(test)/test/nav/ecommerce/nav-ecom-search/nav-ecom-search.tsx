"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "FindIt",
    searchPlaceholder: "What are you looking for today?",
    cartCount: 4,
    trending: ["Wireless Earbuds", "Running Shoes", "Smart Watch"],
  },
  ar: {
    brand: "فايند إت",
    searchPlaceholder: "عن ماذا تبحث اليوم؟",
    cartCount: 4,
    trending: ["سماعات لاسلكية", "أحذية رياضية", "ساعة ذكية"],
  },
};

export function NavEcomSearch({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className={`max-w-7xl mx-auto px-6 py-4 flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-extrabold text-violet-600 text-xl shrink-0">{t.brand}</span>

        <div className="flex-1 min-w-0">
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className={`w-full bg-gray-50 border-2 border-gray-200 focus:border-violet-500 rounded-xl py-3 ${isAr ? "pr-12 pl-4 text-right" : "pl-12 pr-4"} text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors`}
            />
            <div className={`absolute top-1/2 -translate-y-1/2 ${isAr ? "right-4" : "left-4"}`}>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className={`flex items-center gap-2 mt-1 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="text-xs text-gray-400">{isAr ? "رائج:" : "Trending:"}</span>
            {t.trending.map((term) => (
              <a key={term} href="#" className="text-xs text-violet-500 hover:text-violet-700 transition-colors">
                {term}
              </a>
            ))}
          </div>
        </div>

        <div className={`flex items-center gap-3 shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="text-gray-500 hover:text-violet-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="relative text-gray-500 hover:text-violet-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{t.cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
