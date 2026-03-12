"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Urban Realty",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "View Projects",
  },
  ar: {
    brand: "أوربان العقارية",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "عرض المشاريع",
  },
};

export function NavRealEstateBuilding({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .building-nav {
          position: relative;
          overflow: hidden;
        }
        .building-nav::before {
          content: '';
          position: absolute;
          bottom: 0;
          right: 20px;
          width: 30px;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(100, 116, 139, 0.15) 3px,
            rgba(100, 116, 139, 0.15) 6px
          );
          border-left: 2px solid rgba(100, 116, 139, 0.2);
          border-right: 2px solid rgba(100, 116, 139, 0.2);
        }
        .building-nav::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 60px;
          width: 20px;
          height: 70%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(100, 116, 139, 0.1) 3px,
            rgba(100, 116, 139, 0.1) 6px
          );
          border-left: 2px solid rgba(100, 116, 139, 0.15);
          border-right: 2px solid rgba(100, 116, 139, 0.15);
        }
        .building-link:hover {
          color: #475569;
          transform: translateY(-1px);
        }
      `}</style>
      <nav className="building-nav bg-slate-50 border-b-2 border-slate-300 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between relative z-10 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="flex gap-0.5">
              <div className="w-2 h-8 bg-slate-700" />
              <div className="w-2 h-6 bg-slate-500 self-end" />
              <div className="w-2 h-10 bg-slate-800 self-end" />
            </div>
            <span className="text-slate-800 font-bold text-lg uppercase tracking-wider">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="building-link text-slate-600 text-sm font-medium transition-all duration-200">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-slate-800 hover:bg-slate-900 text-white font-medium px-5 py-2 text-sm transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
