"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "PALAZZO",
    links: ["Collections", "Showroom", "Bespoke", "Contact"],
    cta: "Visit Us",
  },
  ar: {
    brand: "بالاتزو",
    links: ["المجموعات", "صالة العرض", "حسب الطلب", "اتصل بنا"],
    cta: "زورونا",
  },
};

export function NavLuxuryMarble({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navMarbleFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-marble-bg {
          background:
            linear-gradient(125deg, #f5f5f0 0%, #ebe8e2 25%, #f8f6f2 50%, #e8e4dd 75%, #f5f3ef 100%),
            linear-gradient(45deg, rgba(200,190,175,0.1) 0%, transparent 50%);
        }
        .nav-marble-link {
          color: #555;
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-marble-link:hover {
          color: #8b7530;
        }
        .nav-marble-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.3s ease;
        }
        .nav-marble-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav
        className="nav-marble-bg py-6 px-10"
        style={{
          animation: "navMarbleFade 0.7s ease",
          borderBottom: "2px solid #c9a84c22",
        }}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#c9a84c",
                transform: "rotate(45deg)",
              }}
            />
            <span
              style={{
                fontFamily: "Georgia, serif",
                letterSpacing: "0.35em",
                fontSize: "16px",
                fontWeight: 400,
                color: "#2a2a2a",
              }}
            >
              {t.brand}
            </span>
          </div>

          <div className={`flex items-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-marble-link"
                style={{
                  fontFamily: "Georgia, serif",
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
              fontFamily: "Georgia, serif",
              letterSpacing: "0.15em",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#fff",
              background: "#2a2a2a",
              padding: "8px 22px",
              transition: "background 0.3s",
            }}
            className="hover:bg-amber-900"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
