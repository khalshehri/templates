"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "LUXE",
    links: ["Collections", "New Arrivals", "Exclusive", "About"],
    cartCount: 2,
    searchPlaceholder: "Search luxury items...",
  },
  ar: {
    brand: "لوكس",
    links: ["المجموعات", "وصل حديثاً", "حصري", "من نحن"],
    cartCount: 2,
    searchPlaceholder: "ابحث عن المنتجات الفاخرة...",
  },
};

export function NavEcomDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gray-950 border-b border-gray-800">
      <div className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-light text-amber-400 text-2xl tracking-[0.3em] uppercase">{t.brand}</span>

        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-gray-400 hover:text-amber-400 text-sm tracking-wider uppercase transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="text-gray-400 hover:text-amber-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-amber-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="relative text-gray-400 hover:text-amber-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-gray-950 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{t.cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
