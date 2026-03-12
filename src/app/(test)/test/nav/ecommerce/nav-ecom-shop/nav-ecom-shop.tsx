"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "ShopHub",
    links: ["New Arrivals", "Categories", "Deals", "Brands"],
    searchPlaceholder: "Search products, brands, categories...",
    account: "Account",
    cartCount: 3,
  },
  ar: {
    brand: "شوب هب",
    links: ["وصل حديثاً", "الأقسام", "العروض", "الماركات"],
    searchPlaceholder: "ابحث عن المنتجات والعلامات التجارية...",
    account: "الحساب",
    cartCount: 3,
  },
};

export function NavEcomShop({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-extrabold text-indigo-600 text-xl shrink-0">{t.brand}</span>

        <div className={`hidden md:flex items-center gap-4 shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-gray-600 hover:text-indigo-600 text-sm font-medium whitespace-nowrap transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <div className="relative">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className={`w-full bg-gray-100 border border-gray-200 rounded-full py-2.5 px-4 ${isAr ? "pr-10 text-right" : "pl-10"} text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
            />
            <svg className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 ${isAr ? "right-3.5" : "left-3.5"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className={`flex items-center gap-4 shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="text-gray-500 hover:text-indigo-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-red-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="relative text-gray-500 hover:text-indigo-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {t.cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
