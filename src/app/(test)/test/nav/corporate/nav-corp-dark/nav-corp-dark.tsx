"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    links: ["Home", "About", "Services", "Contact"],
    cta: "Get Started",
    searchPlaceholder: "Search...",
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    links: ["\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "\u0645\u0646 \u0646\u062d\u0646", "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
    cta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646",
    searchPlaceholder: "\u0628\u062d\u062b...",
  },
};

export function NavCorpDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-dark {
          background: #0a1628;
          border-bottom: 2px solid #d4a843;
        }
        .nav-dark-link {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-dark-link:hover {
          color: #d4a843;
        }
        .nav-dark-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: #d4a843;
          transition: width 0.3s ease;
        }
        .nav-dark-link:hover::after {
          width: 100%;
        }
        .nav-dark-cta {
          background: transparent;
          border: 1.5px solid #d4a843;
          color: #d4a843;
          transition: all 0.25s ease;
        }
        .nav-dark-cta:hover {
          background: #d4a843;
          color: #0a1628;
        }
        .nav-dark-search {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-dark-search:hover {
          color: #d4a843;
        }
      `}</style>
      <nav
        className={`nav-dark w-full px-8 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-xl font-bold text-white tracking-tight">
            {t.brand}
          </span>
        </div>

        {/* Links */}
        <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="nav-dark-link">
              {link}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="nav-dark-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <button className="nav-dark-cta text-sm font-semibold px-5 py-2 rounded-md">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
