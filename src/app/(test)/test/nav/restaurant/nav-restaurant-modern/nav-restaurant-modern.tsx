"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "NOURISH",
    links: ["Menu", "About", "Gallery", "Contact"],
    cta: "Reserve a Table",
  },
  ar: {
    brand: "نوريش",
    links: ["القائمة", "عنّا", "المعرض", "اتصل بنا"],
    cta: "احجز طاولة",
  },
};

export function NavRestaurantModern({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navModernFade {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-modern-link {
          color: #666;
          transition: color 0.3s;
          position: relative;
        }
        .nav-modern-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #0d9488;
          transition: width 0.3s ease;
        }
        .nav-modern-link:hover {
          color: #111;
        }
        .nav-modern-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav
        className="bg-white py-5 px-8"
        style={{
          borderBottom: "1px solid #eee",
          animation: "navModernFade 0.5s ease",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#111",
              letterSpacing: "0.15em",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-modern-link"
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
                color: "white",
                background: "#0d9488",
                padding: "8px 20px",
                borderRadius: "8px",
                transition: "background 0.3s",
              }}
              className="hover:bg-teal-700"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
