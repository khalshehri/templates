"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "emma writes",
    links: ["About Me", "My Work", "Thoughts", "Say Hello"],
  },
  ar: {
    brand: "إيما تكتب",
    links: ["عنّي", "أعمالي", "أفكاري", "تواصل معي"],
  },
};

export function NavPersonalHandwrite({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navHandwriteFade {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes navHandwriteUnderline {
          from { width: 0; }
          to { width: 100%; }
        }
        .nav-handwrite-brand {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          position: relative;
        }
        .nav-handwrite-brand::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #e8b4b8, #dda0a4);
          border-radius: 2px;
          transform: rotate(-1deg);
        }
        .nav-handwrite-link {
          color: #888;
          transition: all 0.3s ease;
          font-style: italic;
        }
        .nav-handwrite-link:hover {
          color: #d4878c;
        }
      `}</style>
      <nav
        className="py-6 px-8"
        style={{
          background: "#fefcfb",
          borderBottom: "1px solid #f0e8e6",
          animation: "navHandwriteFade 0.7s ease",
        }}
      >
        <div
          className={`max-w-4xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            className="nav-handwrite-brand"
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "#444",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-handwrite-link"
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
