"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "NEON LABS",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "Hire Us",
  },
  ar: {
    brand: "نيون لابز",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "وظّفنا",
  },
};

export function NavAgencyNeon({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-neon-link {
          color: #6b7280;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.2s, text-shadow 0.2s;
        }
        .nav-neon-link:hover {
          color: #06b6d4;
          text-shadow: 0 0 8px rgba(6,182,212,0.5), 0 0 20px rgba(6,182,212,0.3);
        }
        .nav-neon-brand {
          color: #06b6d4;
          text-shadow: 0 0 10px rgba(6,182,212,0.4), 0 0 30px rgba(6,182,212,0.2);
          font-weight: 900;
          letter-spacing: 0.15em;
        }
        .nav-neon-cta {
          border: 1px solid #06b6d4;
          color: #06b6d4;
          background: transparent;
          transition: background 0.2s, box-shadow 0.2s, color 0.2s;
        }
        .nav-neon-cta:hover {
          background: #06b6d4;
          color: #000;
          box-shadow: 0 0 15px rgba(6,182,212,0.5), 0 0 30px rgba(6,182,212,0.2);
        }
        .nav-neon-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #06b6d4, transparent);
          opacity: 0.3;
        }
      `}</style>
      <div className="bg-[#0a0a0a]">
        <nav className={`px-8 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
          <span className="nav-neon-brand text-lg">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="nav-neon-link">{link}</a>
            ))}
          </div>
          <button className="nav-neon-cta px-5 py-2 rounded text-sm font-semibold">
            {t.cta}
          </button>
        </nav>
        <div className="nav-neon-line" />
      </div>
    </>
  );
}
