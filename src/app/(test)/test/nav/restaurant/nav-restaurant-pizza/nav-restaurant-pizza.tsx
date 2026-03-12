"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Bella Napoli",
    links: ["Menu", "Our Story", "Gallery", "Catering"],
    cta: "Order Online",
  },
  ar: {
    brand: "بيلا نابولي",
    links: ["القائمة", "قصتنا", "المعرض", "التموين"],
    cta: "اطلب أونلاين",
  },
};

export function NavRestaurantPizza({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navPizzaFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-pizza-link {
          color: #5c4a32;
          transition: color 0.3s;
          font-weight: 500;
        }
        .nav-pizza-link:hover {
          color: #c0392b;
        }
      `}</style>
      <nav
        className="py-4 px-8"
        style={{
          background: "#fdf6ee",
          borderBottom: "3px solid #c0392b",
          animation: "navPizzaFade 0.5s ease",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* Italian flag accent */}
            <div className="flex" style={{ gap: "2px" }}>
              <div style={{ width: "4px", height: "20px", background: "#27ae60", borderRadius: "2px" }} />
              <div style={{ width: "4px", height: "20px", background: "#fff", border: "1px solid #eee", borderRadius: "2px" }} />
              <div style={{ width: "4px", height: "20px", background: "#c0392b", borderRadius: "2px" }} />
            </div>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                fontWeight: 400,
                color: "#c0392b",
                fontStyle: "italic",
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
                className="nav-pizza-link"
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
                background: "#c0392b",
                padding: "8px 20px",
                borderRadius: "9999px",
                transition: "background 0.3s",
              }}
              className="hover:bg-red-700"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
