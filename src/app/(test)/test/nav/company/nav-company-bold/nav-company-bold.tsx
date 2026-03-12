"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "TITAN",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    cta: "Work With Us",
  },
  ar: {
    brand: "تايتن",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    cta: "اعمل معنا",
  },
};

export function NavCompanyBold({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-bold-link {
          color: #374151;
          font-size: 15px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.2s;
          position: relative;
        }
        .nav-bold-link:hover {
          color: #000;
        }
        .nav-bold-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 3px;
          background: #000;
          transition: width 0.2s;
        }
        .nav-bold-link:hover::after {
          width: 100%;
        }
        .nav-bold-brand {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
        }
      `}</style>
      <nav className={`bg-white border-b-4 border-black px-8 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <span className="nav-bold-brand text-black">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-bold-link">{link}</a>
          ))}
        </div>
        <button className="bg-black text-white px-6 py-3 text-sm font-black uppercase tracking-wider hover:bg-gray-800 transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
