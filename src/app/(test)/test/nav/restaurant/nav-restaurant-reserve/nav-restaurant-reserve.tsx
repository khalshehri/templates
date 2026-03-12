"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Harvest",
    links: ["Menu", "About", "Gallery"],
    cta: "Reserve a Table",
    ctaHint: "Tonight, 7:00 PM",
  },
  ar: {
    brand: "هارفست",
    links: ["القائمة", "عنّا", "المعرض"],
    cta: "احجز طاولة",
    ctaHint: "الليلة، ٧:٠٠ مساءً",
  },
};

export function NavRestaurantReserve({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navReserveFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes navReservePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(22,163,74,0); }
        }
        .nav-reserve-link {
          color: #555;
          transition: color 0.3s;
        }
        .nav-reserve-link:hover {
          color: #111;
        }
        .nav-reserve-cta {
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          padding: 10px 28px;
          border-radius: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
          animation: navReservePulse 2s ease infinite;
        }
        .nav-reserve-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22,163,74,0.3);
        }
      `}</style>
      <nav
        className="bg-white py-4 px-8"
        style={{
          borderBottom: "1px solid #eee",
          animation: "navReserveFade 0.5s ease",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "#222",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-reserve-link"
                style={{ fontSize: "14px" }}
              >
                {link}
              </a>
            ))}
          </div>

          <a href="#" className="nav-reserve-cta" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", fontWeight: 600 }}>{t.cta}</div>
            <div style={{ fontSize: "10px", opacity: 0.8, marginTop: "2px" }}>
              {t.ctaHint}
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}
