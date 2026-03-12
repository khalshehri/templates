"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "LOUD",
    links: ["Work", "Studio", "Team", "Contact"],
  },
  ar: {
    brand: "لاود",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
  },
};

export function NavAgencyBold({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-agency-bold-link {
          font-size: 30px;
          font-weight: 900;
          color: #d1d5db;
          text-transform: uppercase;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
          line-height: 1;
        }
        .nav-agency-bold-link:hover {
          color: #111;
          transform: skewX(-4deg);
        }
        .nav-agency-bold-brand {
          font-size: 30px;
          font-weight: 900;
          color: #111;
          letter-spacing: -0.03em;
          line-height: 1;
        }
      `}</style>
      <nav className={`bg-white border-b-2 border-black px-8 py-6 flex items-center ${isAr ? "flex-row-reverse" : ""} gap-8 flex-wrap`}>
        <span className="nav-agency-bold-brand">{t.brand}</span>
        <div className="w-px h-8 bg-gray-300" />
        <div className={`flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-agency-bold-link">{link}</a>
          ))}
        </div>
      </nav>
    </>
  );
}
