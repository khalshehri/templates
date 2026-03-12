"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    links: ["Home", "About", "Services", "Contact"],
    cta: "Get Started",
    megaTitle: "Our Services",
    megaItems: [
      { title: "Web Development", desc: "Custom websites and applications" },
      { title: "Mobile Apps", desc: "iOS and Android development" },
      { title: "Cloud Solutions", desc: "Scalable infrastructure" },
      { title: "Data Analytics", desc: "Business intelligence tools" },
      { title: "Cybersecurity", desc: "Protection and compliance" },
      { title: "AI & Automation", desc: "Intelligent business solutions" },
    ],
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    links: ["\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "\u0645\u0646 \u0646\u062d\u0646", "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
    cta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646",
    megaTitle: "\u062e\u062f\u0645\u0627\u062a\u0646\u0627",
    megaItems: [
      { title: "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628", desc: "\u0645\u0648\u0627\u0642\u0639 \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0645\u062e\u0635\u0635\u0629" },
      { title: "\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0647\u0627\u062a\u0641", desc: "\u062a\u0637\u0648\u064a\u0631 iOS \u0648 Android" },
      { title: "\u062d\u0644\u0648\u0644 \u0633\u062d\u0627\u0628\u064a\u0629", desc: "\u0628\u0646\u064a\u0629 \u062a\u062d\u062a\u064a\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0648\u0633\u0639" },
      { title: "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a", desc: "\u0623\u062f\u0648\u0627\u062a \u0630\u0643\u0627\u0621 \u0627\u0644\u0623\u0639\u0645\u0627\u0644" },
      { title: "\u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0633\u064a\u0628\u0631\u0627\u0646\u064a", desc: "\u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0648\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644" },
      { title: "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a", desc: "\u062d\u0644\u0648\u0644 \u0623\u0639\u0645\u0627\u0644 \u0630\u0643\u064a\u0629" },
    ],
  },
};

export function NavCorpMega({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-mega {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          position: relative;
        }
        .nav-mega-link {
          color: #374151;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 24px 0;
          transition: color 0.2s;
        }
        .nav-mega-link:hover {
          color: #1d4ed8;
        }
        .nav-mega-trigger {
          position: relative;
        }
        .nav-mega-panel {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          border-top: 2px solid #2563eb;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-4px);
          transition: all 0.25s ease;
          z-index: 100;
        }
        .nav-mega-trigger:hover .nav-mega-panel {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .nav-mega-item {
          padding: 16px;
          border-radius: 8px;
          transition: background 0.15s;
        }
        .nav-mega-item:hover {
          background: #f0f5ff;
        }
        .nav-mega-item-icon {
          width: 40px;
          height: 40px;
          background: #eff6ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .nav-mega-cta {
          background: #2563eb;
          color: #fff;
          transition: all 0.2s;
        }
        .nav-mega-cta:hover {
          background: #1d4ed8;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
        }
        .nav-mega-chevron {
          transition: transform 0.2s;
          margin-top: 1px;
        }
        .nav-mega-trigger:hover .nav-mega-chevron {
          transform: rotate(180deg);
        }
      `}</style>
      <nav
        className="nav-mega w-full px-8"
        style={{ direction: isAr ? "rtl" : "ltr" }}
      >
        <div className={`flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">{t.brand}</span>
          </div>

          {/* Links with mega menu */}
          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) =>
              i === 2 ? (
                <div key={link} className="nav-mega-trigger">
                  <a href="#" className={`nav-mega-link flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
                    {link}
                    <svg className="nav-mega-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </a>
                  {/* Mega panel */}
                  <div className="nav-mega-panel">
                    <div className="max-w-5xl mx-auto px-8 py-6">
                      <h3 className={`text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 ${isAr ? "text-right" : ""}`}>
                        {t.megaTitle}
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {t.megaItems.map((item) => (
                          <a key={item.title} href="#" className={`nav-mega-item flex items-center gap-3 ${isAr ? "flex-row-reverse text-right" : ""}`}>
                            <div className="nav-mega-item-icon">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link} href="#" className="nav-mega-link">{link}</a>
              )
            )}
          </div>

          {/* CTA */}
          <button className="nav-mega-cta text-sm font-semibold px-5 py-2.5 rounded-lg">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
