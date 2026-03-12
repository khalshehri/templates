"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "The Quiet Journal",
    links: ["Tech", "Life", "Design", "Photography"],
    cta: "Subscribe",
  },
  ar: {
    brand: "المدوّنة الهادئة",
    links: ["تقنية", "حياة", "تصميم", "تصوير"],
    cta: "اشترك",
  },
};

export function NavPersonalBlog({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navBlogFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-blog-link {
          color: #777;
          transition: color 0.3s;
          padding-bottom: 2px;
        }
        .nav-blog-link:hover {
          color: #222;
          border-bottom: 1px solid #222;
        }
      `}</style>
      <nav
        className="bg-white py-5 px-8"
        style={{
          borderBottom: "2px solid #111",
          animation: "navBlogFade 0.6s ease",
        }}
      >
        <div
          className={`max-w-4xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "20px",
              fontWeight: 400,
              color: "#111",
            }}
          >
            {t.brand}
          </span>

          <div className={`flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-blog-link"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "13px",
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontSize: "12px",
                color: "#fff",
                background: "#111",
                padding: "6px 16px",
                borderRadius: "4px",
                transition: "background 0.3s",
              }}
              className="hover:bg-gray-700"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
