"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus",
    links: ["About", "Work", "Contact"],
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633",
    links: ["\u0645\u0646 \u0646\u062d\u0646", "\u0623\u0639\u0645\u0627\u0644\u0646\u0627", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
  },
};

export function NavCorpMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-minimal {
          height: 40px;
          border-bottom: 1px solid #e5e7eb;
          background: transparent;
        }
        .nav-minimal-brand {
          font-size: 0.875rem;
          font-weight: 700;
          color: #111827;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .nav-minimal-link {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.15s;
        }
        .nav-minimal-link:hover {
          color: #111827;
        }
        .nav-minimal-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #d1d5db;
        }
      `}</style>
      <nav
        className={`nav-minimal w-full px-8 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
      >
        {/* Logo */}
        <span className="nav-minimal-brand">{t.brand}</span>

        {/* Links */}
        <div className={`flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <span key={link} className={`flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
              {i > 0 && <span className="nav-minimal-dot" />}
              <a href="#" className="nav-minimal-link">{link}</a>
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
