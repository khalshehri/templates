"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Prestige Realty",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "View Properties",
  },
  ar: {
    brand: "بريستيج العقارية",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "عرض العقارات",
  },
};

export function NavRealEstateLuxury({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes luxuryGoldShine {
          0%, 100% { background-position: -200% center; }
          50% { background-position: 200% center; }
        }
        .luxury-gold-text {
          background: linear-gradient(90deg, #c9a84c, #f0d78c, #c9a84c, #a8862a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: luxuryGoldShine 4s linear infinite;
        }
        .luxury-link:hover {
          color: #c9a84c;
        }
        .luxury-cta {
          background: linear-gradient(135deg, #c9a84c, #a8862a);
          transition: all 0.3s ease;
        }
        .luxury-cta:hover {
          background: linear-gradient(135deg, #f0d78c, #c9a84c);
          box-shadow: 0 4px 20px rgba(201, 168, 76, 0.4);
        }
      `}</style>
      <nav className="bg-[#1a1a1a] border-b border-[#c9a84c]/20 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 border-2 border-[#c9a84c] rounded flex items-center justify-center">
              <span className="text-[#c9a84c] font-serif font-bold text-lg">P</span>
            </div>
            <span className="luxury-gold-text font-serif text-xl font-bold tracking-wide">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a
                key={link}
                href="#"
                className="luxury-link text-gray-300 text-sm font-medium tracking-wider uppercase transition-colors duration-300"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {link}
              </a>
            ))}
          </div>

          <button className="luxury-cta text-[#1a1a1a] font-semibold px-6 py-2.5 text-sm tracking-wider uppercase">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
