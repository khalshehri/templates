"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    leftLinks: ["Home", "About", "Services"],
    rightLinks: ["Portfolio", "Blog", "Contact"],
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    leftLinks: ["\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "\u0645\u0646 \u0646\u062d\u0646", "\u0627\u0644\u062e\u062f\u0645\u0627\u062a"],
    rightLinks: ["\u0627\u0644\u0645\u0639\u0631\u0636", "\u0627\u0644\u0645\u062f\u0648\u0646\u0629", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
  },
};

export function NavCorpCentered({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-centered {
          background: #fff;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        .nav-centered-link {
          color: #4b5563;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
          padding: 20px 0;
        }
        .nav-centered-link:hover {
          color: #1e40af;
        }
        .nav-centered-brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          padding: 0 32px;
          position: relative;
        }
        .nav-centered-brand::before,
        .nav-centered-brand::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 1px;
          height: 28px;
          background: #d1d5db;
          transform: translateY(-50%);
        }
        .nav-centered-brand::before {
          ${isAr ? "right" : "left"}: 0;
        }
        .nav-centered-brand::after {
          ${isAr ? "left" : "right"}: 0;
        }
        .nav-centered-divider {
          width: 4px;
          height: 4px;
          background: #d1d5db;
          border-radius: 50%;
        }
      `}</style>
      <nav
        className="nav-centered w-full px-8"
        style={{ direction: isAr ? "rtl" : "ltr" }}
      >
        <div className={`flex items-center justify-center ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Left links */}
          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.leftLinks.map((link, i) => (
              <span key={link} className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
                <a href="#" className="nav-centered-link">{link}</a>
                {i < t.leftLinks.length - 1 && <span className="nav-centered-divider" />}
              </span>
            ))}
          </div>

          {/* Center brand */}
          <span className="nav-centered-brand">{t.brand}</span>

          {/* Right links */}
          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.rightLinks.map((link, i) => (
              <span key={link} className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
                {i > 0 && <span className="nav-centered-divider" />}
                <a href="#" className="nav-centered-link">{link}</a>
              </span>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
