"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    links: ["Home", "About", "Services", "Portfolio", "Contact"],
    cta: "Get Started",
    login: "Sign In",
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    links: ["\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "\u0645\u0646 \u0646\u062d\u0646", "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", "\u0627\u0644\u0645\u0639\u0631\u0636", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
    cta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646",
    login: "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
  },
};

export function NavCorpSplit({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-split {
          background: #f8f9fa;
          border-bottom: 1px solid #e5e7eb;
        }
        .nav-split-link {
          color: #4b5563;
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.2s;
          padding: 8px 0;
          position: relative;
        }
        .nav-split-link:hover {
          color: #1e40af;
        }
        .nav-split-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: #1e40af;
          border-radius: 1px;
          transition: width 0.3s ease;
        }
        .nav-split-link:hover::before {
          width: 100%;
        }
        .nav-split-cta {
          background: #1e40af;
          color: #fff;
          transition: all 0.2s;
        }
        .nav-split-cta:hover {
          background: #1e3a8a;
          box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
        }
        .nav-split-login {
          color: #1e40af;
          font-weight: 600;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .nav-split-login:hover {
          color: #1e3a8a;
        }
      `}</style>
      <nav
        className={`nav-split w-full px-10 py-3 grid grid-cols-3 items-center`}
        style={{ direction: isAr ? "rtl" : "ltr" }}
      >
        {/* Logo — far left (or far right in RTL) */}
        <div className={`flex ${isAr ? "justify-end" : "justify-start"}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              {t.brand}
            </span>
          </div>
        </div>

        {/* Centered nav */}
        <div className={`flex items-center justify-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="nav-split-link">
              {link}
            </a>
          ))}
        </div>

        {/* Actions — far right (or far left in RTL) */}
        <div className={`flex items-center gap-4 ${isAr ? "justify-start flex-row-reverse" : "justify-end"}`}>
          <a href="#" className="nav-split-login">{t.login}</a>
          <button className="nav-split-cta text-sm font-semibold px-5 py-2 rounded-lg">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
