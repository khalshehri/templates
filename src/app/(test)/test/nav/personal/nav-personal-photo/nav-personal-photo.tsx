"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Alex Chen",
    title: "Product Designer",
    links: ["About", "Portfolio", "Blog", "Contact"],
  },
  ar: {
    name: "أليكس تشين",
    title: "مصمم منتجات",
    links: ["عنّي", "أعمالي", "المدونة", "تواصل"],
  },
};

export function NavPersonalPhoto({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navPhotoFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-photo-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: 600;
          flex-shrink: 0;
        }
        .nav-photo-link {
          color: #555;
          transition: color 0.3s;
          position: relative;
        }
        .nav-photo-link:hover {
          color: #111;
        }
        .nav-photo-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #667eea;
          transition: width 0.3s ease;
          border-radius: 1px;
        }
        .nav-photo-link:hover::after {
          width: 100%;
        }
      `}</style>
      <nav
        className="bg-white py-4 px-8 shadow-sm"
        style={{ animation: "navPhotoFadeIn 0.6s ease" }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="nav-photo-avatar">
              {isAr ? "أ" : "A"}
            </div>
            <div className={isAr ? "text-right" : ""}>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#111" }}>
                {t.name}
              </div>
              <div style={{ fontSize: "12px", color: "#888" }}>
                {t.title}
              </div>
            </div>
          </div>

          <div className={`flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-photo-link"
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
