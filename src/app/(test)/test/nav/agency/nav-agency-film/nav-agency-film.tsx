"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "REEL HOUSE",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "View Reel",
  },
  ar: {
    brand: "ريل هاوس",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "شاهد أعمالنا",
  },
};

export function NavAgencyFilm({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-film {
          background: #111;
          position: relative;
        }
        .nav-film::before,
        .nav-film::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 24px;
          background:
            repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent 4px,
              #333 4px,
              #333 8px,
              transparent 8px,
              transparent 16px
            );
        }
        .nav-film::before { left: 0; }
        .nav-film::after { right: 0; }
        .nav-film-link {
          color: #9ca3af;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Courier New', monospace;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .nav-film-link:hover {
          color: #fbbf24;
        }
        .nav-film-num {
          color: #4b5563;
          font-size: 11px;
        }
        .nav-film-cta {
          border: 1px solid #fbbf24;
          color: #fbbf24;
          background: transparent;
          font-family: 'Courier New', monospace;
          transition: background 0.2s, color 0.2s;
        }
        .nav-film-cta:hover {
          background: #fbbf24;
          color: #111;
        }
      `}</style>
      <nav className={`nav-film px-12 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <span className="text-white font-black text-lg tracking-widest" style={{ fontFamily: "'Courier New', monospace" }}>
          {t.brand}
        </span>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className={`nav-film-link ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="nav-film-num">0{i + 1}</span>
              {link}
            </a>
          ))}
        </div>
        <button className="nav-film-cta px-5 py-2 rounded text-sm font-semibold">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
