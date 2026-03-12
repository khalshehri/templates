"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "TrustPro",
    links: ["Home", "Services", "About", "Contact"],
    cta: "Free Estimate",
    badges: [
      { icon: "\u2605", text: "4.9 Rating" },
      { icon: "\u2713", text: "Licensed" },
      { icon: "\u2713", text: "Insured" },
    ],
  },
  ar: {
    brand: "ثقة برو",
    links: ["الرئيسية", "الخدمات", "من نحن", "اتصل بنا"],
    cta: "تقدير مجاني",
    badges: [
      { icon: "\u2605", text: "تقييم ٤.٩" },
      { icon: "\u2713", text: "مرخص" },
      { icon: "\u2713", text: "مؤمن" },
    ],
  },
};

export function NavServiceTrust({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white border-b-2 border-blue-600">
      {/* Trust badges strip */}
      <div className="bg-blue-600 text-white">
        <div className={`max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.badges.map((badge, i) => (
            <span key={i} className={`flex items-center gap-1.5 text-xs font-medium ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="text-yellow-300">{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
      {/* Main nav */}
      <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">TP</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors shadow-sm">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
