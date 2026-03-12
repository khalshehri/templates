"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "MAISON",
    links: ["Collections", "Boutique", "Heritage", "Contact"],
    cta: "Book Appointment",
  },
  ar: {
    brand: "ميزون",
    links: ["المجموعات", "البوتيك", "التراث", "اتصل بنا"],
    cta: "احجز موعد",
  },
};

export function NavLuxuryMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navMinimalFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-luxury-minimal-link {
          position: relative;
        }
        .nav-luxury-minimal-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #111;
          transition: width 0.4s ease;
        }
        .nav-luxury-minimal-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav
        style={{ animation: "navMinimalFadeIn 0.8s ease" }}
        className="bg-white py-8 px-12"
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.35em",
              fontSize: "14px",
              fontWeight: 300,
            }}
            className="text-black uppercase"
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-luxury-minimal-link text-gray-800 hover:text-black transition-colors"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  letterSpacing: "0.15em",
                  fontSize: "11px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "0.1em",
              fontSize: "10px",
              textTransform: "uppercase",
              borderBottom: "1px solid #ccc",
              paddingBottom: "2px",
            }}
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
