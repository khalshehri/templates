"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "HealthFlow",
    links: ["Services", "Doctors", "About", "Contact"],
    cta: "Get Started",
  },
  ar: {
    brand: "تدفق الصحة",
    links: ["الخدمات", "الأطباء", "من نحن", "اتصل بنا"],
    cta: "ابدأ الآن",
  },
};

export function NavClinicModern({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-blue-600 shadow-lg">
      <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 2h4v4h4v4h-4v4H6v-4H2V6h4V2z" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span className="text-white font-bold text-lg">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-sm text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full font-medium transition-all">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-white text-teal-700 hover:bg-teal-50 text-sm font-bold px-6 py-2.5 rounded-full transition-colors shadow-md">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
