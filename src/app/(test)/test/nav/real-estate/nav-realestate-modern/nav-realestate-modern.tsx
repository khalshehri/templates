"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "ModernEstate",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "List Property",
  },
  ar: {
    brand: "مودرن إستيت",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "أدرج عقارك",
  },
};

export function NavRealEstateModern({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .modern-re-link {
          position: relative;
        }
        .modern-re-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
        }
        .modern-re-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a
                key={link}
                href="#"
                className="modern-re-link text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md text-sm transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
