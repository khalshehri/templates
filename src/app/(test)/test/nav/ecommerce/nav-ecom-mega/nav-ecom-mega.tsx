"use client";

import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "MegaStore",
    links: ["Electronics", "Fashion", "Home", "Sports"],
    categories: {
      Electronics: ["Phones", "Laptops", "Tablets", "Accessories", "Audio", "Gaming"],
      Fashion: ["Men", "Women", "Kids", "Shoes", "Bags", "Watches"],
      Home: ["Furniture", "Kitchen", "Decor", "Lighting", "Garden", "Storage"],
      Sports: ["Fitness", "Running", "Swimming", "Cycling", "Outdoor", "Yoga"],
    },
    shopAll: "Shop All",
    cartCount: 5,
  },
  ar: {
    brand: "ميغا ستور",
    links: ["الإلكترونيات", "الأزياء", "المنزل", "الرياضة"],
    categories: {
      "الإلكترونيات": ["الهواتف", "اللابتوبات", "التابلت", "الإكسسوارات", "الصوتيات", "الألعاب"],
      "الأزياء": ["رجال", "نساء", "أطفال", "أحذية", "حقائب", "ساعات"],
      "المنزل": ["أثاث", "مطبخ", "ديكور", "إضاءة", "حدائق", "تخزين"],
      "الرياضة": ["لياقة", "جري", "سباحة", "دراجات", "خارجي", "يوغا"],
    },
    shopAll: "تسوق الكل",
    cartCount: 5,
  },
};

export function NavEcomMega({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 relative">
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <span className="font-extrabold text-gray-900 text-xl">{t.brand}</span>

        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <div
              key={link}
              className="relative"
              onMouseEnter={() => setActiveMenu(link)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeMenu === link ? "text-indigo-600 bg-indigo-50" : "text-gray-600 hover:text-indigo-600"}`}>
                {link}
              </button>
            </div>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <button className="relative text-gray-600 hover:text-indigo-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{t.cartCount}</span>
          </button>
        </div>
      </div>

      {/* Mega menu dropdown */}
      {activeMenu && (
        <div
          className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className={`max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 md:grid-cols-6 gap-4 ${isAr ? "direction-rtl" : ""}`}>
            {(t.categories as Record<string, string[]>)[activeMenu]?.map((cat: string) => (
              <a key={cat} href="#" className="text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 p-2 rounded transition-colors">
                {cat}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-100 px-6 py-3">
            <a href="#" className="text-sm text-indigo-600 font-medium hover:underline">{t.shopAll} &rarr;</a>
          </div>
        </div>
      )}
    </nav>
  );
}
