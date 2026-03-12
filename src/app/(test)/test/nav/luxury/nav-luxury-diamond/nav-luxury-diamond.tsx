"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "BRILLIANCE",
    links: ["Jewels", "Haute Couture", "Atelier", "Appointments"],
    cta: "View Collection",
  },
  ar: {
    brand: "بريليانس",
    links: ["المجوهرات", "الأزياء الراقية", "الأتيليه", "المواعيد"],
    cta: "عرض المجموعة",
  },
};

export function NavLuxuryDiamond({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navDiamondFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes navDiamondSparkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .nav-diamond-border {
          position: relative;
        }
        .nav-diamond-border::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 8px,
            #c9a84c33 8px,
            #c9a84c33 9px,
            transparent 9px,
            transparent 13px,
            #c9a84c22 13px,
            #c9a84c22 14px
          );
        }
        .nav-diamond-link {
          color: #888;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-diamond-link:hover {
          color: #c9a84c;
        }
        .nav-diamond-link::before {
          content: '◇';
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 6px;
          color: #c9a84c;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nav-diamond-link:hover::before {
          opacity: 1;
          animation: navDiamondSparkle 1s ease infinite;
        }
      `}</style>
      <nav
        className="nav-diamond-border py-7 px-10"
        style={{
          background: "#111",
          animation: "navDiamondFade 0.8s ease",
        }}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.7 }}>
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="#c9a84c" />
            </svg>
            <span
              style={{
                fontFamily: "Georgia, serif",
                letterSpacing: "0.4em",
                fontSize: "14px",
                fontWeight: 300,
                color: "#c9a84c",
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
                className="nav-diamond-link"
                style={{
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.15em",
                  fontSize: "10px",
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
              letterSpacing: "0.1em",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#111",
              background: "#c9a84c",
              padding: "7px 18px",
              transition: "all 0.3s",
            }}
            className="hover:bg-amber-400"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
