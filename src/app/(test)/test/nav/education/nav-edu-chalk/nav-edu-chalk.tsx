"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Greenfield School",
    links: ["Programs", "Faculty", "Research", "Apply"],
    cta: "Enroll",
  },
  ar: {
    brand: "مدرسة غرينفيلد",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    cta: "سجّل",
  },
};

export function NavEduChalk({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-edu-chalk {
          background: #2d4a3e;
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.02) 0%, transparent 50%);
        }
        .nav-edu-chalk-link {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          border-bottom: 2px dashed transparent;
          transition: border-color 0.3s, color 0.3s;
          padding-bottom: 2px;
          font-family: 'Courier New', monospace;
        }
        .nav-edu-chalk-link:hover {
          border-bottom-color: rgba(255,255,255,0.6);
          color: #fff;
        }
        .nav-edu-chalk-brand {
          font-family: 'Courier New', monospace;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .nav-edu-chalk-cta {
          border: 2px dashed rgba(255,255,255,0.6);
          color: #fff;
          background: transparent;
          font-family: 'Courier New', monospace;
          transition: background 0.3s, border-color 0.3s;
        }
        .nav-edu-chalk-cta:hover {
          background: rgba(255,255,255,0.1);
          border-color: #fff;
        }
        .nav-edu-chalk-dust {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0.05) 80%, transparent 100%);
        }
      `}</style>
      <nav className={`nav-edu-chalk relative px-8 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 border-2 border-dashed border-white/50 rounded flex items-center justify-center">
            <span className="text-white/80 text-xs font-bold" style={{ fontFamily: "'Courier New', monospace" }}>GF</span>
          </div>
          <span className="nav-edu-chalk-brand text-white text-lg font-bold">{t.brand}</span>
        </div>
        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-edu-chalk-link text-sm">
              {link}
            </a>
          ))}
        </div>
        <button className="nav-edu-chalk-cta px-5 py-2 rounded text-sm font-medium">
          {t.cta}
        </button>
        <div className="nav-edu-chalk-dust" />
      </nav>
    </>
  );
}
