"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Maria Rodriguez",
    title: "UX Designer & Consultant",
    email: "hello@maria.design",
    links: ["About", "Portfolio", "Services", "Contact"],
  },
  ar: {
    name: "ماريا رودريغيز",
    title: "مصممة تجربة المستخدم",
    email: "hello@maria.design",
    links: ["عنّي", "أعمالي", "خدماتي", "تواصل"],
  },
};

export function NavPersonalCard({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navCardSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-card-container {
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          animation: navCardSlide 0.5s ease;
        }
        .nav-card-link {
          color: #666;
          transition: all 0.2s ease;
          padding: 5px 12px;
          border-radius: 6px;
        }
        .nav-card-link:hover {
          color: #111;
          background: #f5f5f5;
        }
      `}</style>
      <div className="px-6 pt-4">
        <nav className="nav-card-container px-6 py-4 max-w-5xl mx-auto">
          <div
            className={`flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
          >
            <div className={isAr ? "text-right" : ""}>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#111" }}>
                {t.name}
              </div>
              <div className={`flex items-center gap-3 mt-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                <span style={{ fontSize: "12px", color: "#888" }}>{t.title}</span>
                <span style={{ fontSize: "10px", color: "#ccc" }}>|</span>
                <span style={{ fontSize: "12px", color: "#aaa" }}>{t.email}</span>
              </div>
            </div>

            <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.links.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="nav-card-link"
                  style={{ fontSize: "13px" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
