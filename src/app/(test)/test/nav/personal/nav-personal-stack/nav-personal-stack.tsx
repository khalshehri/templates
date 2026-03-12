"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    name: "Tom Dev",
    links: ["About", "Projects", "Blog", "Contact"],
    stack: ["React", "TypeScript", "Node.js", "Python"],
  },
  ar: {
    name: "توم ديف",
    links: ["عنّي", "مشاريعي", "المدونة", "تواصل"],
    stack: ["React", "TypeScript", "Node.js", "Python"],
  },
};

export function NavPersonalStack({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  const stackColors: Record<string, string> = {
    React: "#61dafb",
    TypeScript: "#3178c6",
    "Node.js": "#339933",
    Python: "#3776ab",
  };

  return (
    <>
      <style>{`
        @keyframes navStackFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-stack-pill {
          transition: transform 0.2s ease;
        }
        .nav-stack-pill:hover {
          transform: translateY(-2px);
        }
        .nav-stack-link {
          color: #666;
          transition: color 0.2s;
        }
        .nav-stack-link:hover {
          color: #111;
        }
      `}</style>
      <nav
        className="bg-white py-4 px-8 shadow-sm"
        style={{ animation: "navStackFade 0.5s ease" }}
      >
        <div
          className={`max-w-5xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}
        >
          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <span style={{ fontSize: "16px", fontWeight: 600, color: "#111" }}>
              {t.name}
            </span>
            <div className={`flex items-center gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
              {t.stack.map((tech, i) => (
                <span
                  key={i}
                  className="nav-stack-pill"
                  style={{
                    fontSize: "10px",
                    color: stackColors[tech] || "#666",
                    background: `${stackColors[tech]}15`,
                    border: `1px solid ${stackColors[tech]}33`,
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-stack-link"
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
