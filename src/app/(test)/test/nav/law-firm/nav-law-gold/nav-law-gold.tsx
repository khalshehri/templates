"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Goldstein Legal",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Case Review",
  },
  ar: {
    brand: "جولدشتاين القانونية",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "مراجعة القضية",
  },
};

export function NavLawGold({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .law-gold-link {
          font-family: Georgia, serif;
          transition: all 0.3s ease;
          color: #78716c;
        }
        .law-gold-link:hover {
          color: #c9a84c;
        }
        .law-gold-brand {
          font-family: Georgia, serif;
          background: linear-gradient(135deg, #c9a84c, #a8862a, #c9a84c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      <nav className="bg-[#fefcf7] border-b-2 border-[#c9a84c]/20 px-6 py-5">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-0.5 h-8 bg-[#c9a84c]" />
            <span className="law-gold-brand text-xl font-bold tracking-wide">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="law-gold-link text-sm tracking-wide">
                {link}
              </a>
            ))}
          </div>

          <button className="border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white px-6 py-2 text-sm font-serif tracking-wide transition-colors" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
