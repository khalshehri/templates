"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Morrison & Partners",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Free Consultation",
  },
  ar: {
    brand: "موريسون وشركاؤه",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "استشارة مجانية",
  },
};

export function NavLawClassic({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .law-classic-link {
          transition: color 0.3s ease;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .law-classic-link:hover {
          color: #c9a84c;
        }
        .law-classic-cta {
          font-family: Georgia, 'Times New Roman', serif;
          background: linear-gradient(135deg, #c9a84c, #a8862a);
          transition: all 0.3s ease;
        }
        .law-classic-cta:hover {
          background: linear-gradient(135deg, #d4b65c, #b8963e);
          box-shadow: 0 4px 16px rgba(201, 168, 76, 0.3);
        }
      `}</style>
      <nav className="bg-[#1a2744] border-b-2 border-[#c9a84c]/30 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="flex flex-col items-center">
              <div className="w-8 h-0.5 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10px] tracking-[0.2em] my-0.5">EST. 1985</span>
              <div className="w-8 h-0.5 bg-[#c9a84c]" />
            </div>
            <span className="text-white font-serif text-lg tracking-wide" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="law-classic-link text-gray-300 text-sm">
                {link}
              </a>
            ))}
          </div>

          <button className="law-classic-cta text-[#1a2744] font-medium px-6 py-2.5 text-sm">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
