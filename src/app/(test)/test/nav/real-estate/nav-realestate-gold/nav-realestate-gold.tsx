"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Golden Estates",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "View Listings",
  },
  ar: {
    brand: "العقارات الذهبية",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "عرض القوائم",
  },
};

export function NavRealEstateGold({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .gold-re-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .gold-re-link:hover {
          color: #c9a84c;
        }
        .gold-re-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #c9a84c;
          transition: width 0.3s ease;
        }
        .gold-re-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav className="bg-white border-b-2 border-[#c9a84c]/30 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 rounded-full border-2 border-[#c9a84c] flex items-center justify-center">
              <span className="text-[#c9a84c] font-serif font-bold text-lg">G</span>
            </div>
            <div className={`flex flex-col ${isAr ? "items-end" : ""}`}>
              <span className="text-[#c9a84c] font-serif font-bold text-lg leading-tight">{t.brand}</span>
              <span className="text-[#c9a84c]/50 text-[10px] uppercase tracking-[0.3em]">Premium Real Estate</span>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gold-re-link text-gray-700 text-sm font-medium">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold px-6 py-2.5 text-sm transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
