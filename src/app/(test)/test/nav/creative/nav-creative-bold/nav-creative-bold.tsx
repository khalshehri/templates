"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

export function NavCreativeBold({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .bold-nav {
          background: #0d0d0d;
          position: relative;
          overflow: hidden;
          padding: 0;
        }
        .bold-nav::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff0055, #ffcc00, #00ff88, #0066ff, #ff0055);
          background-size: 200% 100%;
          animation: bold-line 3s linear infinite;
        }
        @keyframes bold-line {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .bold-inner {
          max-width: 90rem;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .bold-brand {
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          letter-spacing: -0.04em;
          line-height: 1;
          white-space: nowrap;
          position: relative;
        }
        .bold-brand::after {
          content: '.';
          color: #ff0055;
        }
        .bold-links {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          flex-wrap: nowrap;
        }
        .bold-link {
          color: rgba(255,255,255,0.6);
          font-weight: 900;
          font-size: 1.5rem;
          padding: 0.3rem 0.6rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          letter-spacing: -0.02em;
          line-height: 1;
          white-space: nowrap;
        }
        .bold-link:hover {
          color: white;
        }
        .bold-link:nth-child(1) { font-size: 1.8rem; }
        .bold-link:nth-child(2) { font-size: 1.3rem; transform: translateY(-4px); }
        .bold-link:nth-child(3) { font-size: 1.6rem; }
        .bold-link:nth-child(4) { font-size: 1.1rem; transform: translateY(2px); }
        .bold-link:hover:nth-child(1) { color: #ff0055; }
        .bold-link:hover:nth-child(2) { color: #ffcc00; }
        .bold-link:hover:nth-child(3) { color: #00ff88; }
        .bold-link:hover:nth-child(4) { color: #0066ff; }
        .bold-slash {
          color: rgba(255,255,255,0.15);
          font-weight: 100;
          font-size: 2rem;
          line-height: 1;
          user-select: none;
        }
        .bold-cta {
          background: white;
          color: #0d0d0d;
          font-weight: 900;
          padding: 0.6rem 2rem;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.2s ease;
          white-space: nowrap;
          clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%);
        }
        .bold-cta:hover {
          background: #ff0055;
          color: white;
          clip-path: polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%);
        }
        .bold-accent {
          position: absolute;
          font-weight: 900;
          font-size: 8rem;
          color: rgba(255,255,255,0.02);
          pointer-events: none;
          line-height: 1;
          letter-spacing: -0.05em;
        }
      `}</style>
      <nav className="bold-nav" dir={isAr ? "rtl" : "ltr"}>
        <span className="bold-accent" style={{ top: '-20px', right: '5%' }}>BOLD</span>
        <div className="bold-inner">
          <span className="bold-brand">{t.brand}</span>
          <div className={`bold-links ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <span key={i} className="flex items-baseline gap-1">
                {i > 0 && <span className="bold-slash">/</span>}
                <a href="#" className="bold-link">{link}</a>
              </span>
            ))}
          </div>
          <button className="bold-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
