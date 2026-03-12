"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    greeting: "Hi, I'm",
    name: "Sarah",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
  },
  ar: {
    greeting: "مرحبًا، أنا",
    name: "سارة",
    links: ["عنّي", "أعمالي", "المدونة", "تواصل"],
    cta: "وظّفني",
  },
};

export function NavPersonalHello({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes navHelloWave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes navHelloFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-hello-wave {
          display: inline-block;
          animation: navHelloWave 2s ease infinite;
          transform-origin: 70% 70%;
        }
        .nav-hello-link {
          color: #666;
          transition: all 0.3s ease;
          border-radius: 9999px;
          padding: 6px 14px;
        }
        .nav-hello-link:hover {
          color: #333;
          background: #f0f0f0;
        }
      `}</style>
      <nav
        className="py-5 px-8"
        style={{
          background: "#fafaf8",
          animation: "navHelloFadeIn 0.6s ease",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="nav-hello-wave text-xl">👋</span>
            <span style={{ fontSize: "15px", color: "#555" }}>
              {t.greeting}{" "}
              <strong style={{ color: "#222", fontWeight: 600 }}>{t.name}</strong>
            </span>
          </div>

          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-hello-link"
                style={{ fontSize: "14px" }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontSize: "13px",
                color: "#fff",
                background: "#333",
                padding: "7px 18px",
                borderRadius: "9999px",
                marginLeft: isAr ? "0" : "8px",
                marginRight: isAr ? "8px" : "0",
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
