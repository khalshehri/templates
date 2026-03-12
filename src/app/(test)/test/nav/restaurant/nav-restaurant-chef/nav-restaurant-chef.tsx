"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Chef's Table",
    links: ["Menu", "Reservations", "About", "Gallery"],
    cta: "Book Now",
  },
  ar: {
    brand: "مائدة الشيف",
    links: ["القائمة", "الحجوزات", "عنّا", "المعرض"],
    cta: "احجز الآن",
  },
};

export function NavRestaurantChef({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navChefFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-chef-link {
          color: #6b5240;
          transition: color 0.3s;
        }
        .nav-chef-link:hover {
          color: #3d2e1f;
        }
      `}</style>
      <nav
        className="py-5 px-8"
        style={{
          background: "#f5efe8",
          borderBottom: "2px solid #d4c4ae",
          animation: "navChefFade 0.6s ease",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* Chef hat icon */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <ellipse cx="16" cy="12" rx="10" ry="8" fill="#8b6f4e" opacity="0.2" />
              <path d="M8 14c-2-1-3-3-2-5s3-3 5-2c1-2 3-3 5-3s4 1 5 3c2-1 4 0 5 2s0 4-2 5" stroke="#8b6f4e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <rect x="9" y="14" width="14" height="8" rx="1" fill="#8b6f4e" opacity="0.15" stroke="#8b6f4e" strokeWidth="1.5" />
              <line x1="9" y1="18" x2="23" y2="18" stroke="#8b6f4e" strokeWidth="1" opacity="0.4" />
            </svg>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#3d2e1f",
              }}
            >
              {t.brand}
            </span>
          </div>

          <div className={`flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-chef-link"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "14px",
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "13px",
                color: "#f5efe8",
                background: "#5c4a32",
                padding: "8px 20px",
                borderRadius: "6px",
                transition: "background 0.3s",
              }}
              className="hover:bg-amber-900"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
