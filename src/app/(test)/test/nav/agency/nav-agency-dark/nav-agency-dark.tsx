"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Shadowbox",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "Inquire",
  },
  ar: {
    brand: "شادو بوكس",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "استفسر",
  },
};

export function NavAgencyDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-moody {
          background: #0a0a0a;
        }
        .nav-moody-link {
          color: #404040;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.4s;
          letter-spacing: 0.05em;
        }
        .nav-moody-link:hover {
          color: #737373;
        }
        .nav-moody-brand {
          color: #525252;
          font-weight: 300;
          font-size: 18px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .nav-moody-cta {
          color: #525252;
          border: 1px solid #262626;
          background: transparent;
          transition: color 0.3s, border-color 0.3s;
        }
        .nav-moody-cta:hover {
          color: #a3a3a3;
          border-color: #404040;
        }
        .nav-moody-line {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #1a1a1a 50%, transparent 100%);
        }
      `}</style>
      <div className="nav-moody">
        <nav className={`px-8 py-6 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
          <span className="nav-moody-brand">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="nav-moody-link">{link}</a>
            ))}
          </div>
          <button className="nav-moody-cta px-5 py-2 rounded text-sm font-medium">
            {t.cta}
          </button>
        </nav>
        <div className="nav-moody-line" />
      </div>
    </>
  );
}
