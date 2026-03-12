"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    initials: "VH",
    brand: "VICTORIA HOUSE",
    linksLeft: ["Collections", "Boutique"],
    linksRight: ["Heritage", "Contact"],
  },
  ar: {
    initials: "ف ه",
    brand: "فيكتوريا هاوس",
    linksLeft: ["المجموعات", "البوتيك"],
    linksRight: ["التراث", "اتصل بنا"],
  },
};

export function NavLuxuryMonogram({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navMonogramSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes navMonogramFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .nav-monogram-circle {
          position: relative;
        }
        .nav-monogram-circle::before {
          content: '';
          position: absolute;
          inset: -3px;
          border: 1px solid #c9a84c44;
          border-radius: 50%;
          border-top-color: #c9a84c;
          animation: navMonogramSpin 6s linear infinite;
        }
        .nav-monogram-link {
          color: #666;
          transition: color 0.3s ease;
        }
        .nav-monogram-link:hover {
          color: #222;
        }
      `}</style>
      <nav
        className="bg-white py-6 px-10"
        style={{
          animation: "navMonogramFadeIn 0.8s ease",
          borderBottom: "1px solid #eee",
          borderTop: "1px solid #eee",
        }}
      >
        <div className={`max-w-6xl mx-auto flex items-center justify-center gap-12 ${isAr ? "flex-row-reverse" : ""}`}>
          {/* Left links */}
          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {(isAr ? t.linksRight : t.linksLeft).map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-monogram-link"
                style={{
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.2em",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  fontWeight: 300,
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Monogram */}
          <div
            className="nav-monogram-circle flex items-center justify-center"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid #ddd",
              background: "#fafafa",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "14px",
                letterSpacing: "0.15em",
                color: "#333",
                fontWeight: 400,
              }}
            >
              {t.initials}
            </span>
          </div>

          {/* Right links */}
          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {(isAr ? t.linksLeft : t.linksRight).map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-monogram-link"
                style={{
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.2em",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  fontWeight: 300,
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Brand name below */}
        <div className="text-center mt-2">
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "8px",
              letterSpacing: "0.5em",
              color: "#bbb",
              textTransform: "uppercase",
            }}
          >
            {t.brand}
          </span>
        </div>
      </nav>
    </>
  );
}
