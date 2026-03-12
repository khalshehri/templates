"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Soie",
    links: ["Collections", "Lookbook", "Craftsmanship", "Maison"],
    cta: "Discover",
  },
  ar: {
    brand: "سوا",
    links: ["المجموعات", "دفتر الأناقة", "الحرفية", "الدار"],
    cta: "اكتشف",
  },
};

export function NavLuxurySilk({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navSilkFloat {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes navSilkSheen {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .nav-silk-bg {
          background: linear-gradient(135deg, #f5f0eb 0%, #faf8f5 40%, #f0ece5 70%, #ffffff 100%);
          background-size: 200% 200%;
          animation: navSilkSheen 8s ease infinite;
        }
        .nav-silk-brand {
          font-family: 'Georgia', serif;
          font-style: italic;
          transition: letter-spacing 0.4s ease;
        }
        .nav-silk-brand:hover {
          letter-spacing: 0.15em;
        }
        .nav-silk-link {
          color: #888;
          transition: all 0.4s ease;
        }
        .nav-silk-link:hover {
          color: #555;
          transform: translateY(-1px);
        }
      `}</style>
      <nav
        className="nav-silk-bg py-7 px-10"
        style={{ animation: "navSilkFloat 0.8s ease" }}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            className="nav-silk-brand"
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "#3a3a3a",
              letterSpacing: "0.1em",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-silk-link"
                style={{
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.15em",
                  fontSize: "11px",
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
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "12px",
              color: "#777",
              borderBottom: "1px solid #ccc",
              paddingBottom: "2px",
              transition: "color 0.3s",
            }}
            className="hover:text-gray-900"
          >
            {t.cta}
          </a>
        </div>
      </nav>
    </>
  );
}
