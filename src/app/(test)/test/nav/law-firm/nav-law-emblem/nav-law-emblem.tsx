"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Royal Legal",
    linksLeft: ["Practice Areas", "Attorneys"],
    linksRight: ["About", "Contact"],
    cta: "Consult",
  },
  ar: {
    brand: "رويال القانونية",
    linksLeft: ["مجالات الممارسة", "المحامون"],
    linksRight: ["من نحن", "اتصل بنا"],
    cta: "استشارة",
  },
};

export function NavLawEmblem({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .emblem-shield {
          width: 40px;
          height: 46px;
          background: linear-gradient(135deg, #1a365d, #1e3a5f);
          clip-path: polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0% 70%, 0% 20%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .emblem-shield::after {
          content: '';
          width: 34px;
          height: 40px;
          background: linear-gradient(135deg, #c9a84c, #a8862a);
          clip-path: polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0% 70%, 0% 20%);
          position: absolute;
        }
        .emblem-initial {
          position: relative;
          z-index: 2;
          color: #1a365d;
          font-family: Georgia, serif;
          font-weight: bold;
          font-size: 14px;
        }
        .emblem-link {
          font-family: Georgia, serif;
          transition: color 0.3s ease;
        }
        .emblem-link:hover {
          color: #c9a84c;
        }
      `}</style>
      <nav className="bg-[#1a365d] px-6 py-4 border-b border-[#c9a84c]/20">
        <div className={`max-w-6xl mx-auto flex items-center justify-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.linksLeft.map((link) => (
              <a key={link} href="#" className="emblem-link text-gray-300 text-sm">
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="emblem-shield">
              <span className="emblem-initial">R</span>
            </div>
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.linksRight.map((link) => (
              <a key={link} href="#" className="emblem-link text-gray-300 text-sm">
                {link}
              </a>
            ))}
            <button className="bg-[#c9a84c] hover:bg-[#d4b65c] text-[#1a365d] font-serif px-4 py-1.5 text-sm transition-colors" style={{ fontFamily: "Georgia, serif" }}>
              {t.cta}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
