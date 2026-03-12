"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    links: ["Home", "About", "Services", "Contact"],
    cta: "Get Started",
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    links: ["\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "\u0645\u0646 \u0646\u062d\u0646", "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
    cta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646",
  },
};

export function NavCorpClassic({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-classic-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-classic-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
        }
        .nav-classic-link:hover::after {
          width: 100%;
        }
        .nav-classic-link:hover {
          color: #2563eb;
        }
        .nav-classic-cta {
          transition: all 0.2s ease;
        }
        .nav-classic-cta:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
      `}</style>
      <nav
        className={`w-full bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            {t.brand}
          </span>
        </div>

        {/* Centered Links */}
        <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a
              key={link}
              href="#"
              className="nav-classic-link text-sm font-medium text-gray-600"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <button className="nav-classic-cta bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
