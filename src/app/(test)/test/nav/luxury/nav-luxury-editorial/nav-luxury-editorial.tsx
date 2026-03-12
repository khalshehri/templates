"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    category: "LUXURY LIFESTYLE",
    brand: "The Atelier",
    links: ["Fashion", "Art", "Travel", "Culture"],
    issue: "Issue 47 — Spring 2026",
  },
  ar: {
    category: "نمط الحياة الفاخر",
    brand: "الأتيليه",
    links: ["أزياء", "فن", "سفر", "ثقافة"],
    issue: "العدد ٤٧ — ربيع ٢٠٢٦",
  },
};

export function NavLuxuryEditorial({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navEditorialSlide {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-editorial-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-editorial-link:hover {
          color: #333;
        }
      `}</style>
      <nav
        className="bg-white"
        style={{ animation: "navEditorialSlide 0.6s ease" }}
      >
        {/* Top bar */}
        <div
          className={`flex items-center justify-between px-10 py-2 ${isAr ? "flex-row-reverse" : ""}`}
          style={{ borderBottom: "1px solid #e5e5e5" }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "9px",
              letterSpacing: "0.3em",
              color: "#999",
              textTransform: "uppercase",
            }}
          >
            {t.category}
          </span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "#bbb",
            }}
          >
            {t.issue}
          </span>
        </div>

        {/* Brand */}
        <div className="text-center py-6" style={{ borderBottom: "1px solid #e5e5e5" }}>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "36px",
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: "#111",
            }}
          >
            {t.brand}
          </h1>
        </div>

        {/* Links */}
        <div
          className={`flex items-center justify-center gap-12 py-4 ${isAr ? "flex-row-reverse" : ""}`}
          style={{ borderBottom: "2px solid #111" }}
        >
          {t.links.map((link, i) => (
            <a
              key={i}
              href="#"
              className="nav-editorial-link"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#666",
                textTransform: "uppercase",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
