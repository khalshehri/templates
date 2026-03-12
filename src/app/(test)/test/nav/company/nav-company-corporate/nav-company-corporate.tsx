"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    cta: "Get a Quote",
  },
  ar: {
    brand: "نيكسس كورب",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    cta: "احصل على عرض",
  },
};

export function NavCompanyCorporate({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-corp-link {
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
          position: relative;
          transition: color 0.2s;
        }
        .nav-corp-link:hover {
          color: #fff;
        }
        .nav-corp-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: width 0.3s;
        }
        .nav-corp-link:hover::after {
          width: 100%;
        }
        .nav-corp-cta {
          background: #3b82f6;
          transition: background 0.2s, transform 0.2s;
        }
        .nav-corp-cta:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }
      `}</style>
      <nav className={`bg-[#0f172a] border-b border-blue-900/30 px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-white font-bold text-lg">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-corp-link">{link}</a>
          ))}
        </div>
        <button className="nav-corp-cta text-white px-5 py-2 rounded-md text-sm font-semibold">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
