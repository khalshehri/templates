"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "James Wilson",
    links: ["About", "Work", "Contact"],
  },
  ar: {
    name: "جيمس ويلسون",
    links: ["عنّي", "أعمالي", "تواصل"],
  },
};

export function NavPersonalMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navPersonalMinFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-pmin-link {
          color: #999;
          transition: color 0.3s ease;
        }
        .nav-pmin-link:hover {
          color: #111;
        }
      `}</style>
      <nav
        className="py-6 px-8"
        style={{ animation: "navPersonalMinFade 0.8s ease" }}
      >
        <div
          className={`max-w-4xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#111" }}>
            {t.name}
          </span>

          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-pmin-link"
                style={{ fontSize: "14px" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
