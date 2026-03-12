"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "OPULENCE",
    links: ["Salon", "Gallery", "Events", "Membership"],
    cta: "Reserve",
  },
  ar: {
    brand: "أوبيولنس",
    links: ["الصالون", "المعرض", "الفعاليات", "العضوية"],
    cta: "احجز",
  },
};

export function NavLuxuryCurtain({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navCurtainDrop {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes navCurtainGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(201,168,76,0.3); }
          50% { text-shadow: 0 0 40px rgba(201,168,76,0.6); }
        }
        .nav-curtain-bg {
          background: linear-gradient(180deg, #0d0d0d 0%, #1a1510 50%, #0d0d0d 100%);
        }
        .nav-curtain-brand {
          animation: navCurtainGlow 3s ease infinite;
        }
        .nav-curtain-link {
          color: #7a7060;
          transition: all 0.4s ease;
        }
        .nav-curtain-link:hover {
          color: #c9a84c;
          text-shadow: 0 0 10px rgba(201,168,76,0.3);
        }
      `}</style>
      <nav
        className="nav-curtain-bg py-8 px-10"
        style={{ animation: "navCurtainDrop 1s ease" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Center brand */}
          <div className="text-center mb-5">
            <span
              className="nav-curtain-brand"
              style={{
                fontFamily: "Georgia, serif",
                letterSpacing: "0.5em",
                fontSize: "20px",
                fontWeight: 300,
                color: "#c9a84c",
              }}
            >
              {t.brand}
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div style={{ width: "80px", height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c44, transparent)" }} />
            <div style={{ width: "6px", height: "6px", background: "#c9a84c", transform: "rotate(45deg)" }} />
            <div style={{ width: "80px", height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c44, transparent)" }} />
          </div>

          {/* Links */}
          <div className={`flex items-center justify-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-curtain-link"
                style={{
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.25em",
                  fontSize: "10px",
                  textTransform: "uppercase",
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontFamily: "Georgia, serif",
                letterSpacing: "0.2em",
                fontSize: "10px",
                textTransform: "uppercase",
                color: "#0d0d0d",
                background: "linear-gradient(135deg, #c9a84c, #e8d48b)",
                padding: "6px 20px",
                marginLeft: isAr ? "0" : "8px",
                marginRight: isAr ? "8px" : "0",
              }}
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
