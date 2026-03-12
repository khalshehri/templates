"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

export function NavCreativeRetro({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .retro-nav {
          background: #f5e6c8;
          border-bottom: 3px double #8b6f47;
          position: relative;
          overflow: hidden;
        }
        .retro-nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 25% 50%, rgba(139,111,71,0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 50%, rgba(139,111,71,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .retro-brand {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #5c3d1e;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
        }
        .retro-brand::before,
        .retro-brand::after {
          content: '~';
          color: #b8860b;
          margin: 0 0.4rem;
          font-size: 1.2em;
        }
        .retro-divider {
          width: 1px;
          height: 20px;
          background: #8b6f47;
          opacity: 0.4;
          margin: 0 0.25rem;
        }
        .retro-link {
          font-family: Georgia, 'Times New Roman', serif;
          color: #6b4e2a;
          font-weight: 400;
          font-size: 0.95rem;
          padding: 0.4rem 0.8rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
          position: relative;
        }
        .retro-link:hover {
          color: #b8860b;
        }
        .retro-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 15%;
          right: 15%;
          height: 1px;
          background: #b8860b;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .retro-link:hover::after {
          transform: scaleX(1);
        }
        .retro-cta {
          font-family: Georgia, 'Times New Roman', serif;
          background: #5c3d1e;
          color: #f5e6c8;
          font-weight: 600;
          padding: 0.5rem 1.5rem;
          border: 1px solid #8b6f47;
          cursor: pointer;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
        }
        .retro-cta::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: -3px;
          bottom: -3px;
          border: 1px solid #8b6f47;
          opacity: 0.4;
          pointer-events: none;
        }
        .retro-cta:hover {
          background: #8b6f47;
          color: #faf0e0;
        }
        .retro-ornament {
          color: #b8860b;
          font-size: 1.2rem;
          opacity: 0.3;
          position: absolute;
          pointer-events: none;
          font-family: Georgia, serif;
        }
        .retro-top-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: repeating-linear-gradient(
            90deg,
            #8b6f47 0px, #8b6f47 8px,
            transparent 8px, transparent 12px
          );
          opacity: 0.4;
        }
      `}</style>
      <nav className="retro-nav" dir={isAr ? "rtl" : "ltr"}>
        <div className="retro-top-border" />
        {/* Ornamental decorations */}
        <span className="retro-ornament" style={{ top: '12px', left: '8%' }}>&#10045;</span>
        <span className="retro-ornament" style={{ top: '12px', right: '8%' }}>&#10045;</span>
        <span className="retro-ornament" style={{ top: '20px', left: '50%', transform: 'translateX(-50%)' }}>&#8258;</span>

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
          <span className="retro-brand">{t.brand}</span>
          <div className={`flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="retro-divider" />}
                <a href="#" className="retro-link">{link}</a>
              </span>
            ))}
          </div>
          <button className="retro-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
