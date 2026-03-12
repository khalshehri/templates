"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    links: ["Home", "About", "Services", "Portfolio", "Contact"],
    cta: "Get Started",
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    links: ["\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "\u0645\u0646 \u0646\u062d\u0646", "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", "\u0627\u0644\u0645\u0639\u0631\u0636", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
    cta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646",
  },
};

export function NavCorpRibbon({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-ribbon-wrapper {
          position: relative;
        }
        .nav-ribbon-stripe {
          height: 4px;
          background: linear-gradient(90deg, #1e40af, #2563eb, #3b82f6);
        }
        .nav-ribbon {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .nav-ribbon-brand {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-ribbon-brand-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 0.875rem;
        }
        .nav-ribbon-link {
          color: #4b5563;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          padding: 6px 12px;
          border-radius: 6px;
        }
        .nav-ribbon-link:hover {
          color: #1e40af;
          background: #eff6ff;
        }
        .nav-ribbon-cta {
          background: linear-gradient(135deg, #1e40af, #2563eb);
          color: #fff;
          transition: all 0.25s;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.2);
        }
        .nav-ribbon-cta:hover {
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
          transform: translateY(-1px);
        }
      `}</style>
      <div className="nav-ribbon-wrapper" style={{ direction: isAr ? "rtl" : "ltr" }}>
        {/* Top ribbon stripe */}
        <div className="nav-ribbon-stripe" />

        {/* Main nav */}
        <nav className={`nav-ribbon w-full px-8 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Logo */}
          <div className={`nav-ribbon-brand ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="nav-ribbon-brand-icon">N</div>
            <span>{t.brand}</span>
          </div>

          {/* Links */}
          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="nav-ribbon-link">{link}</a>
            ))}
          </div>

          {/* CTA */}
          <button className="nav-ribbon-cta text-sm font-semibold px-6 py-2.5 rounded-lg">
            {t.cta}
          </button>
        </nav>
      </div>
    </>
  );
}
