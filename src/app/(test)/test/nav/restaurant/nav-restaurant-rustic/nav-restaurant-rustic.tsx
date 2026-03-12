"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "THE BARN",
    links: ["Menu", "Our Farm", "Gallery", "Visit Us"],
    cta: "Order Now",
  },
  ar: {
    brand: "الحظيرة",
    links: ["القائمة", "مزرعتنا", "المعرض", "زورونا"],
    cta: "اطلب الآن",
  },
};

export function NavRestaurantRustic({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navRusticFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-rustic-bg {
          background: linear-gradient(180deg, #5c4a32 0%, #4a3a28 50%, #3d2e1f 100%);
        }
        .nav-rustic-link {
          color: #c4a882;
          transition: all 0.3s;
          font-weight: 500;
        }
        .nav-rustic-link:hover {
          color: #f0dbc0;
        }
      `}</style>
      <nav
        className="nav-rustic-bg py-5 px-8"
        style={{
          borderBottom: "3px solid #8b6f4e",
          borderTop: "3px solid #8b6f4e",
          animation: "navRusticFade 0.6s ease",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* Wheat/leaf icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v18M8 7c2 0 4 2 4 4M16 7c-2 0-4 2-4 4M6 12c2.5 0 5 2 6 4M18 12c-2.5 0-5 2-6 4" stroke="#c4a882" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#f0dbc0",
                letterSpacing: "0.25em",
              }}
            >
              {t.brand}
            </span>
          </div>

          <div className={`flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-rustic-link"
                style={{ fontSize: "14px" }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#3d2e1f",
                background: "#c4a882",
                padding: "8px 20px",
                borderRadius: "4px",
                border: "2px solid #8b6f4e",
                transition: "background 0.3s",
              }}
              className="hover:bg-amber-300"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
