"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "AURUM",
    links: ["Collections", "Atelier", "Heritage", "Press"],
    cta: "Private Viewing",
  },
  ar: {
    brand: "أوروم",
    links: ["المجموعات", "الأتيليه", "التراث", "الصحافة"],
    cta: "عرض خاص",
  },
};

export function NavLuxuryGold({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navGoldShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .nav-gold-brand {
          background: linear-gradient(90deg, #c9a84c, #e8d48b, #c9a84c, #a8893a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: navGoldShimmer 4s linear infinite;
        }
        .nav-gold-link {
          position: relative;
          color: #c9a84c;
          transition: color 0.3s ease;
        }
        .nav-gold-link:hover {
          color: #e8d48b;
        }
        .nav-gold-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: all 0.4s ease;
          transform: translateX(-50%);
        }
        .nav-gold-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav
        style={{ borderBottom: "1px solid #c9a84c33" }}
        className="py-6 px-10"
      >
        <div
          style={{ background: "#1a1a1a" }}
          className="absolute inset-0"
        />
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between relative z-10 ${isAr ? "flex-row-reverse" : ""}`}
          style={{ background: "#1a1a1a" }}
        >
          <span
            className="nav-gold-brand"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.4em",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-gold-link"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  letterSpacing: "0.2em",
                  fontSize: "11px",
                  textTransform: "uppercase",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.15em",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#1a1a1a",
              background: "linear-gradient(135deg, #c9a84c, #e8d48b)",
              padding: "8px 20px",
            }}
            className="hover:opacity-90 transition-opacity"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
