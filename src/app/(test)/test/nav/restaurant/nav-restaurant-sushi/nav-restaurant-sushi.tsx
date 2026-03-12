"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "KIZEN",
    tagline: "Japanese Kitchen",
    links: ["Omakase", "Menu", "About", "Reservations"],
  },
  ar: {
    brand: "كيزن",
    tagline: "المطبخ الياباني",
    links: ["أوماكاسي", "القائمة", "عنّا", "الحجوزات"],
  },
};

export function NavRestaurantSushi({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navSushiFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-sushi-link {
          color: #999;
          transition: color 0.4s ease;
          letter-spacing: 0.2em;
        }
        .nav-sushi-link:hover {
          color: #333;
        }
      `}</style>
      <nav
        className="bg-white"
        style={{ animation: "navSushiFade 1s ease" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Top spacing */}
          <div className="pt-8 pb-4 text-center">
            <div
              style={{
                fontSize: "24px",
                fontWeight: 300,
                color: "#222",
                letterSpacing: "0.5em",
              }}
            >
              {t.brand}
            </div>
            <div
              style={{
                fontSize: "9px",
                color: "#bbb",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              {t.tagline}
            </div>
          </div>

          {/* Thin line */}
          <div className="flex justify-center">
            <div style={{ width: "40px", height: "1px", background: "#ddd" }} />
          </div>

          {/* Links */}
          <div
            className={`flex items-center justify-center gap-12 py-5 ${isAr ? "flex-row-reverse" : ""}`}
          >
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-sushi-link"
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Bottom line */}
          <div style={{ height: "1px", background: "#f0f0f0" }} />
        </div>
      </nav>
    </>
  );
}
