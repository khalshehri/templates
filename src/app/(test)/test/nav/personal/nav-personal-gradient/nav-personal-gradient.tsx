"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Luna Park",
    links: ["About", "Projects", "Blog", "Contact"],
    cta: "Let's Talk",
  },
  ar: {
    name: "لونا بارك",
    links: ["عنّي", "مشاريعي", "المدونة", "تواصل"],
    cta: "لنتحدث",
  },
};

export function NavPersonalGradient({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes navGradientFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-gradient-bg {
          background: linear-gradient(135deg, #a8c0ff, #c2b6d9, #f0b6c6, #a8c0ff);
          background-size: 300% 300%;
          animation: navGradientShift 8s ease infinite;
        }
        .nav-gradient-link {
          color: rgba(255,255,255,0.8);
          transition: all 0.3s ease;
          padding: 6px 14px;
          border-radius: 9999px;
        }
        .nav-gradient-link:hover {
          color: white;
          background: rgba(255,255,255,0.2);
        }
      `}</style>
      <nav
        className="nav-gradient-bg py-4 px-8"
        style={{ animation: "navGradientFadeIn 0.6s ease" }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span style={{ fontSize: "18px", fontWeight: 700, color: "white" }}>
            {t.name}
          </span>

          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-gradient-link"
                style={{ fontSize: "14px" }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontSize: "13px",
                color: "#7c6b9e",
                background: "white",
                padding: "7px 18px",
                borderRadius: "9999px",
                fontWeight: 600,
                marginLeft: isAr ? "0" : "6px",
                marginRight: isAr ? "6px" : "0",
                transition: "transform 0.2s",
              }}
              className="hover:scale-105"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
