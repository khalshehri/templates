"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "The Velvet Room",
    links: ["Cocktails", "Kitchen", "Events", "About"],
    hours: "Open 6PM – 2AM",
  },
  ar: {
    brand: "الغرفة المخملية",
    links: ["الكوكتيلات", "المطبخ", "الفعاليات", "عنّا"],
    hours: "مفتوح ٦م – ٢ص",
  },
};

export function NavRestaurantBar({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navBarFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes navBarGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .nav-bar-bg {
          background: linear-gradient(180deg, #1a1410 0%, #0f0d0a 100%);
        }
        .nav-bar-link {
          color: #8a7560;
          transition: all 0.4s;
        }
        .nav-bar-link:hover {
          color: #d4a54a;
          text-shadow: 0 0 12px rgba(212,165,74,0.3);
        }
      `}</style>
      <nav
        className="nav-bar-bg py-5 px-10"
        style={{
          borderBottom: "1px solid #2a221a",
          animation: "navBarFade 0.8s ease",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={isAr ? "text-right" : ""}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "20px",
                fontWeight: 300,
                color: "#d4a54a",
                fontStyle: "italic",
              }}
            >
              {t.brand}
            </span>
          </div>

          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-bar-link"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <span
            style={{
              fontSize: "10px",
              color: "#6a5a48",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid #3a2e22",
              padding: "5px 14px",
              animation: "navBarGlow 3s ease infinite",
            }}
          >
            {t.hours}
          </span>
        </div>
      </nav>
    </>
  );
}
