"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "NOIR",
    links: ["Archive", "Gallery", "Editions", "Contact"],
    cta: "Explore",
  },
  ar: {
    brand: "نوار",
    links: ["الأرشيف", "المعرض", "الإصدارات", "اتصل بنا"],
    cta: "استكشف",
  },
};

export function NavLuxuryNoir({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navNoirReveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-noir-link {
          color: #555;
          transition: color 0.4s ease;
          position: relative;
        }
        .nav-noir-link:hover {
          color: #888;
        }
        .nav-noir-link::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #333;
          opacity: 0;
          transition: opacity 0.3s;
          transform: translateY(-50%);
        }
        .nav-noir-link:hover::before {
          opacity: 1;
        }
      `}</style>
      <nav
        style={{
          background: "#0a0a0a",
          borderBottom: "1px solid #1a1a1a",
          animation: "navNoirReveal 1.2s ease",
        }}
        className="py-7 px-10"
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              letterSpacing: "0.5em",
              fontSize: "14px",
              fontWeight: 300,
              color: "#444",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-noir-link"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  letterSpacing: "0.2em",
                  fontSize: "10px",
                  fontWeight: 300,
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
              letterSpacing: "0.25em",
              fontSize: "9px",
              fontWeight: 300,
              textTransform: "uppercase",
              color: "#666",
              border: "1px solid #333",
              padding: "6px 18px",
              transition: "all 0.3s ease",
            }}
            className="hover:border-gray-500 hover:text-gray-400"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
