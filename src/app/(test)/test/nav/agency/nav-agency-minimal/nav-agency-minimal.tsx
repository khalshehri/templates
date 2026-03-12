"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "WHITEROOM",
    links: ["Work", "Studio", "Team", "Contact"],
  },
  ar: {
    brand: "وايت روم",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
  },
};

export function NavAgencyMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-art-minimal-link {
          color: #9ca3af;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: color 0.3s;
        }
        .nav-art-minimal-link:hover {
          color: #111;
        }
        .nav-art-minimal-brand {
          font-size: 36px;
          font-weight: 100;
          letter-spacing: 0.2em;
          color: #111;
          line-height: 1;
        }
      `}</style>
      <nav className={`bg-white px-12 py-10 flex items-end ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <span className="nav-art-minimal-brand">{t.brand}</span>
        <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-art-minimal-link">{link}</a>
          ))}
        </div>
      </nav>
    </>
  );
}
