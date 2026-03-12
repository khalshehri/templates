"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "ELYSIUM",
    links: ["Collections", "Boutique", "Heritage", "Journal"],
    cta: "Enquire",
  },
  ar: {
    brand: "إليزيوم",
    links: ["المجموعات", "البوتيك", "التراث", "المجلة"],
    cta: "استفسر",
  },
};

export function NavLuxurySerif({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navSerifFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-serif-link {
          transition: opacity 0.3s ease;
          opacity: 0.6;
        }
        .nav-serif-link:hover {
          opacity: 1;
        }
      `}</style>
      <nav
        className="bg-white py-10 px-12"
        style={{
          animation: "navSerifFade 1s ease",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.3em",
              fontSize: "16px",
              fontWeight: 300,
              color: "#222",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-12 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-serif-link"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  letterSpacing: "0.3em",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "#333",
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
              letterSpacing: "0.3em",
              fontSize: "10px",
              fontWeight: 300,
              color: "#555",
              textTransform: "uppercase",
              borderBottom: "1px solid #999",
              paddingBottom: "3px",
            }}
            className="hover:text-black transition-colors"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
