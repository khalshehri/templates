"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "PromoShop",
    links: ["New In", "Women", "Men", "Kids", "Sale"],
    promo: "Free shipping on orders $50+ | Use code: FREESHIP",
    cartCount: 1,
    searchPlaceholder: "Search...",
  },
  ar: {
    brand: "بروموشوب",
    links: ["الجديد", "نساء", "رجال", "أطفال", "تخفيضات"],
    promo: "شحن مجاني للطلبات فوق ٢٠٠ ر.س | كود: FREESHIP",
    cartCount: 1,
    searchPlaceholder: "بحث...",
  },
};

export function NavEcomPromo({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes slidePromo {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
        }
      `}</style>
      {/* Promo banner */}
      <div className="bg-rose-600 text-white text-center py-2 px-4">
        <p className="text-xs font-medium tracking-wide">{t.promo}</p>
      </div>
      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="font-extrabold text-gray-900 text-xl">{t.brand}</span>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-medium transition-colors ${i === t.links.length - 1 ? "text-rose-600 font-bold" : "text-gray-600 hover:text-gray-900"}`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <button className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="relative text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{t.cartCount}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
