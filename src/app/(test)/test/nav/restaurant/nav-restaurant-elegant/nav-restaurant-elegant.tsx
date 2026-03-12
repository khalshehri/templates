"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "La Maison",
    tagline: "Fine Dining",
    links: ["Menu", "Wine List", "Private Dining", "Reservations"],
    cta: "Reserve",
  },
  ar: {
    brand: "لا ميزون",
    tagline: "مطعم فاخر",
    links: ["القائمة", "النبيذ", "الصالة الخاصة", "الحجوزات"],
    cta: "احجز",
  },
};

export function NavRestaurantElegant({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navElegantFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-elegant-link {
          color: #8a7a60;
          transition: color 0.3s;
          letter-spacing: 0.15em;
        }
        .nav-elegant-link:hover {
          color: #c9a84c;
        }
      `}</style>
      <nav
        className="py-6 px-10"
        style={{
          background: "#1a1a1a",
          borderBottom: "1px solid #c9a84c33",
          animation: "navElegantFade 0.8s ease",
        }}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={isAr ? "text-right" : ""}>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "20px",
                color: "#c9a84c",
                letterSpacing: "0.2em",
              }}
            >
              {t.brand}
            </div>
            <div
              style={{
                fontSize: "9px",
                color: "#666",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              {t.tagline}
            </div>
          </div>

          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-elegant-link"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "11px",
                  textTransform: "uppercase",
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                background: "#c9a84c",
                padding: "7px 22px",
                transition: "opacity 0.3s",
              }}
              className="hover:opacity-90"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
