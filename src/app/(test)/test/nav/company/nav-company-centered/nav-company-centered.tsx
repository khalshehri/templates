"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "LUXEHAUS",
    leftLinks: ["About", "Services", "Portfolio"],
    rightLinks: ["Industries", "Careers", "Contact"],
  },
  ar: {
    brand: "لوكس هاوس",
    leftLinks: ["عن الشركة", "الخدمات", "الأعمال"],
    rightLinks: ["القطاعات", "الوظائف", "اتصل بنا"],
  },
};

export function NavCompanyCentered({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-centered-link {
          color: #6b7280;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-centered-link:hover {
          color: #111827;
        }
        .nav-centered-brand {
          font-size: 24px;
          font-weight: 300;
          letter-spacing: 0.3em;
          color: #111827;
        }
      `}</style>
      <nav className={`bg-white border-b border-gray-200 px-8 py-6 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`hidden md:flex items-center gap-8 flex-1 ${isAr ? "flex-row-reverse justify-end" : "justify-start"}`}>
          {(isAr ? t.rightLinks : t.leftLinks).map((link, i) => (
            <a key={i} href="#" className="nav-centered-link">{link}</a>
          ))}
        </div>
        <div className="flex-shrink-0 px-8">
          <span className="nav-centered-brand">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 flex-1 ${isAr ? "flex-row-reverse justify-start" : "justify-end"}`}>
          {(isAr ? t.leftLinks : t.rightLinks).map((link, i) => (
            <a key={i} href="#" className="nav-centered-link">{link}</a>
          ))}
        </div>
      </nav>
    </>
  );
}
