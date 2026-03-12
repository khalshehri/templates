"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "CHAMPION",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "Go Gold",
  },
  ar: {
    brand: "تشامبيون",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "انطلق للذهب",
  },
};

export function NavGymChampion({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes gym-champion-shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .gym-champion-nav {
          background: linear-gradient(180deg, #1a1508, #0f0d06);
          border-bottom: 2px solid #b8860b;
        }
        .gym-champion-brand {
          font-size: 22px;
          font-weight: 900;
          background: linear-gradient(90deg, #b8860b, #ffd700, #b8860b, #ffd700, #b8860b);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gym-champion-shine 4s linear infinite;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .gym-champion-medal {
          width: 36px;
          height: 42px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gym-champion-ribbon-l,
        .gym-champion-ribbon-r {
          position: absolute;
          top: 0;
          width: 10px;
          height: 18px;
          z-index: 0;
        }
        .gym-champion-ribbon-l {
          left: 4px;
          background: #e11d48;
          transform: skewX(-10deg);
        }
        .gym-champion-ribbon-r {
          right: 4px;
          background: #3b82f6;
          transform: skewX(10deg);
        }
        .gym-champion-disc {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffd700, #b8860b);
          border: 2px solid #daa520;
          position: relative;
          z-index: 1;
          margin-top: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(184, 134, 11, 0.3);
        }
        .gym-champion-star {
          color: #1a1508;
          font-size: 14px;
          font-weight: 900;
          line-height: 1;
        }
        .gym-champion-link {
          color: #8b7d3c;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }
        .gym-champion-link:hover {
          color: #ffd700;
        }
        .gym-champion-cta {
          background: linear-gradient(135deg, #ffd700, #b8860b);
          color: #1a1508;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 10px 24px;
          border-radius: 4px;
          transition: opacity 0.2s;
          box-shadow: 0 2px 10px rgba(184, 134, 11, 0.25);
        }
        .gym-champion-cta:hover {
          opacity: 0.9;
        }
      `}</style>
      <nav className="gym-champion-nav px-6 py-3">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="gym-champion-medal">
              <div className="gym-champion-ribbon-l" />
              <div className="gym-champion-ribbon-r" />
              <div className="gym-champion-disc">
                <span className="gym-champion-star">&#9733;</span>
              </div>
            </div>
            <span className="gym-champion-brand">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gym-champion-link">{link}</a>
            ))}
          </div>

          <button className="gym-champion-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
