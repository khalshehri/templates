"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "MAISON",
    leftLinks: ["Women", "Men"],
    rightLinks: ["Collections", "Stores"],
    cartCount: 1,
  },
  ar: {
    brand: "ميزون",
    leftLinks: ["نساء", "رجال"],
    rightLinks: ["المجموعات", "المتاجر"],
    cartCount: 1,
  },
};

export function NavEcomBrand({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className={`max-w-6xl mx-auto px-6 py-5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        {/* Left links */}
        <div className={`hidden md:flex items-center gap-8 flex-1 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
          {t.leftLinks.map((link) => (
            <a key={link} href="#" className="text-gray-500 hover:text-gray-900 text-xs tracking-[0.2em] uppercase transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Center brand */}
        <div className="flex-1 text-center">
          <span className="font-serif text-3xl tracking-[0.4em] text-gray-900 uppercase">{t.brand}</span>
        </div>

        {/* Right links + icons */}
        <div className={`flex items-center gap-6 flex-1 ${isAr ? "flex-row-reverse justify-start" : "justify-end"}`}>
          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.rightLinks.map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-gray-900 text-xs tracking-[0.2em] uppercase transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">{t.cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
