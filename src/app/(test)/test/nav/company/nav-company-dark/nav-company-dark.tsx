"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Blackstone Group",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    cta: "Contact Us",
  },
  ar: {
    brand: "مجموعة بلاكستون",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    cta: "تواصل معنا",
  },
};

export function NavCompanyDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-dark-link {
          color: #9ca3af;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nav-dark-link:hover {
          color: #e5e7eb;
        }
        .nav-dark-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          height: 1px;
          background: #4b5563;
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .nav-dark-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
      <nav className={`bg-[#111111] border-b border-gray-800/50 px-8 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <span className="text-white font-semibold text-lg tracking-wide">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-dark-link">{link}</a>
          ))}
        </div>
        <button className="border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 px-5 py-2 rounded text-sm font-medium transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
