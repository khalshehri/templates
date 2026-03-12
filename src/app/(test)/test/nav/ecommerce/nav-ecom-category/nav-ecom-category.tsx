"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "CatShop",
    categories: [
      { icon: "📱", label: "Electronics" },
      { icon: "👕", label: "Clothing" },
      { icon: "🏠", label: "Home" },
      { icon: "🎮", label: "Gaming" },
      { icon: "📚", label: "Books" },
      { icon: "💄", label: "Beauty" },
    ],
    cartCount: 3,
  },
  ar: {
    brand: "كات شوب",
    categories: [
      { icon: "📱", label: "إلكترونيات" },
      { icon: "👕", label: "ملابس" },
      { icon: "🏠", label: "منزل" },
      { icon: "🎮", label: "ألعاب" },
      { icon: "📚", label: "كتب" },
      { icon: "💄", label: "تجميل" },
    ],
    cartCount: 3,
  },
};

export function NavEcomCategory({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-extrabold text-teal-600 text-xl">{t.brand}</span>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="text-gray-500 hover:text-teal-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-teal-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="relative text-gray-500 hover:text-teal-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-teal-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{t.cartCount}</span>
          </button>
        </div>
      </div>
      {/* Category strip */}
      <div className="border-t border-gray-100">
        <div className={`max-w-7xl mx-auto px-6 py-2 flex items-center gap-1 overflow-x-auto ${isAr ? "flex-row-reverse" : ""}`}>
          {t.categories.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors whitespace-nowrap ${isAr ? "flex-row-reverse" : ""}`}
            >
              <span>{cat.icon}</span>
              <span className="font-medium">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
