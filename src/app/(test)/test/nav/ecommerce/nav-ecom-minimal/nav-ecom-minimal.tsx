"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Minimalist",
    links: ["Shop", "About", "Contact"],
    cartCount: 2,
  },
  ar: {
    brand: "مينيمالست",
    links: ["تسوق", "من نحن", "اتصل بنا"],
    cartCount: 2,
  },
};

export function NavEcomMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className={`max-w-5xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-light text-gray-900 text-2xl tracking-widest uppercase">{t.brand}</span>

        <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-gray-900 text-sm tracking-wide uppercase transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {t.cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
