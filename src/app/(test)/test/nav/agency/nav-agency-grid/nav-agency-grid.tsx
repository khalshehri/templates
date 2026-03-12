"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "GRID",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "Brief Us",
  },
  ar: {
    brand: "غريد",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "أرسل طلبك",
  },
};

export function NavAgencyGrid({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-grid-cell {
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 24px;
          border: 1px solid #e5e7eb;
          transition: background 0.2s, color 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .nav-grid-cell:hover {
          background: #111827;
          color: #fff;
          border-color: #111827;
        }
      `}</style>
      <nav className={`bg-white flex items-stretch ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center px-6 border-r border-gray-200 ${isAr ? "border-r-0 border-l border-gray-200" : ""}`}>
          <span className="text-black font-black text-2xl tracking-wider">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-stretch flex-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-grid-cell flex items-center">
              {link}
            </a>
          ))}
        </div>
        <div className={`flex items-center ${isAr ? "border-r border-gray-200" : "border-l border-gray-200"}`}>
          <button className="nav-grid-cell bg-black text-white border-black hover:bg-gray-800">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
