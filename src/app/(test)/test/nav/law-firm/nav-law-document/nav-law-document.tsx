"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Lawson & Associates",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "File Case",
    stamp: "ESTABLISHED",
  },
  ar: {
    brand: "لوسون وشركاؤه",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "رفع قضية",
    stamp: "تأسست",
  },
};

export function NavLawDocument({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .doc-nav {
          background: #fefefe;
          border-top: 4px double #333;
          border-bottom: 4px double #333;
        }
        .doc-stamp {
          border: 2px solid #8b0000;
          color: #8b0000;
          font-size: 8px;
          padding: 2px 8px;
          letter-spacing: 0.15em;
          transform: rotate(-5deg);
          font-family: Georgia, serif;
          opacity: 0.7;
        }
        .doc-link {
          font-family: Georgia, serif;
          transition: color 0.3s ease;
        }
        .doc-link:hover {
          color: #1a365d;
        }
      `}</style>
      <nav className="doc-nav px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="text-gray-900 font-serif text-lg tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
            <span className="doc-stamp">{t.stamp}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="doc-link text-gray-600 text-sm">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-[#1a365d] hover:bg-[#1e3a5f] text-white font-serif px-5 py-2 text-sm transition-colors" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
