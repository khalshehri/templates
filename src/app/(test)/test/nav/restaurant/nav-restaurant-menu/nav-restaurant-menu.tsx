"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Savora",
    links: ["About", "Gallery", "Events"],
    cta: "Our Menu",
    categories: ["Starters", "Mains", "Desserts", "Drinks"],
  },
  ar: {
    brand: "سافورا",
    links: ["عنّا", "المعرض", "الفعاليات"],
    cta: "قائمتنا",
    categories: ["المقبلات", "الأطباق", "الحلويات", "المشروبات"],
  },
};

export function NavRestaurantMenu({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navMenuFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-menu-link {
          color: #8b7355;
          transition: color 0.3s;
        }
        .nav-menu-link:hover {
          color: #5c4a32;
        }
        .nav-menu-cta {
          background: linear-gradient(135deg, #c45d3e, #d4714e);
          color: white;
          padding: 8px 24px;
          border-radius: 8px;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-menu-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(196,93,62,0.3);
        }
        .nav-menu-cat {
          color: #bba88e;
          font-size: 11px;
          transition: color 0.2s;
        }
        .nav-menu-cat:hover {
          color: #c45d3e;
        }
      `}</style>
      <nav
        style={{
          background: "#faf5ef",
          animation: "navMenuFade 0.6s ease",
        }}
      >
        {/* Main bar */}
        <div className={`max-w-6xl mx-auto flex items-center justify-between py-4 px-8 ${isAr ? "flex-row-reverse" : ""}`}>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "#3d2e1f",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className="nav-menu-link" style={{ fontSize: "14px" }}>
                {link}
              </a>
            ))}
            <a href="#" className="nav-menu-cta" style={{ fontSize: "14px" }}>
              {t.cta}
            </a>
          </div>
        </div>

        {/* Categories sub-bar */}
        <div
          className={`max-w-6xl mx-auto flex items-center justify-center gap-8 py-2 px-8 ${isAr ? "flex-row-reverse" : ""}`}
          style={{ borderTop: "1px solid #e8ddd0" }}
        >
          {t.categories.map((cat, i) => (
            <a key={i} href="#" className="nav-menu-cat">
              {cat}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
