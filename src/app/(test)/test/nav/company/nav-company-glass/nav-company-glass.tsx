"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Clarity Inc.",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    cta: "Let's Talk",
  },
  ar: {
    brand: "كلاريتي",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    cta: "تواصل معنا",
  },
};

export function NavCompanyGlass({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-glass-link {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-glass-link:hover {
          color: #fff;
        }
        .nav-glass-cta {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .nav-glass-cta:hover {
          background: rgba(255,255,255,0.25);
        }
      `}</style>
      <nav className={`bg-white/10 backdrop-blur-md border-b border-white/10 px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <span className="text-white font-bold text-lg tracking-tight">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-glass-link">{link}</a>
          ))}
        </div>
        <button className="nav-glass-cta text-white px-5 py-2 rounded-full text-sm font-semibold">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
