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

export function NavCorpGlass({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-glass {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }
        .nav-glass-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
          min-height: 200px;
        }
        .nav-glass-link {
          color: rgba(255, 255, 255, 0.75);
          transition: color 0.2s, text-shadow 0.2s;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .nav-glass-link:hover {
          color: #ffffff;
          text-shadow: 0 0 12px rgba(147, 197, 253, 0.5);
        }
        .nav-glass-cta {
          background: rgba(59, 130, 246, 0.6);
          border: 1px solid rgba(147, 197, 253, 0.3);
          backdrop-filter: blur(8px);
          transition: all 0.2s;
        }
        .nav-glass-cta:hover {
          background: rgba(59, 130, 246, 0.85);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        .nav-glass-brand {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
      `}</style>
      <div className="nav-glass-bg p-6">
        <nav
          className={`nav-glass rounded-2xl mx-auto max-w-6xl px-8 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="nav-glass-brand">{t.brand}</span>
          </div>

          {/* Links */}
          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="nav-glass-link">
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <button className="nav-glass-cta text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
              {t.cta}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
