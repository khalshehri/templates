"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "ShieldHealth",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Protect Your Health",
  },
  ar: {
    brand: "درع الصحة",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "احمِ صحتك",
  },
};

export function NavClinicShield({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gradient-to-b from-slate-50 to-white border-b border-gray-200 shadow-sm">
      <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Shield icon */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path d="M14 1L2 6v8c0 8 5 14.5 12 17 7-2.5 12-9 12-17V6L14 1z" fill="url(#shield-grad)" stroke="#0d9488" strokeWidth="1.5"/>
              <path d="M10 16l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="shield-grad" x1="14" y1="1" x2="14" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#14b8a6"/>
                  <stop offset="1" stopColor="#0369a1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-lg">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-teal-600 font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-md">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
