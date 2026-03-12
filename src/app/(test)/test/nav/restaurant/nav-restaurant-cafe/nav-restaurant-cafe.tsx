"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Brew & Bean",
    links: ["Menu", "Our Beans", "Locations", "About"],
    cta: "Order Ahead",
  },
  ar: {
    brand: "حبة وفنجان",
    links: ["القائمة", "حبوبنا", "الفروع", "عنّا"],
    cta: "اطلب مسبقًا",
  },
};

export function NavRestaurantCafe({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navCafeFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes navCafeSteam {
          0%, 100% { transform: translateY(0) scaleX(1); opacity: 0.4; }
          50% { transform: translateY(-4px) scaleX(1.2); opacity: 0.7; }
        }
        .nav-cafe-link {
          color: #7a6652;
          transition: color 0.3s;
        }
        .nav-cafe-link:hover {
          color: #3d2e1f;
        }
      `}</style>
      <nav
        className="py-4 px-8"
        style={{
          background: "linear-gradient(180deg, #f5efe8, #efe6da)",
          borderBottom: "1px solid #d4c4ae",
          animation: "navCafeFade 0.6s ease",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* Coffee cup icon */}
            <div style={{ position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="10" width="14" height="10" rx="2" stroke="#6b4f3a" strokeWidth="1.5" fill="#6b4f3a" opacity="0.15" />
                <path d="M17 12h1.5a2.5 2.5 0 010 5H17" stroke="#6b4f3a" strokeWidth="1.5" />
                <path d="M7 8c0-1 .5-2 1.5-2S10 7 10 8" stroke="#6b4f3a" strokeWidth="1" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M11 7c0-1.5 .5-2.5 1.5-2.5S14 5.5 14 7" stroke="#6b4f3a" strokeWidth="1" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
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

          <div className={`flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-cafe-link"
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
                color: "#f5efe8",
                background: "#6b4f3a",
                padding: "8px 20px",
                borderRadius: "9999px",
                transition: "background 0.3s",
              }}
              className="hover:bg-amber-800"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
