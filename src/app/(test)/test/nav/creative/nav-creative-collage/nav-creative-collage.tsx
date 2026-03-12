"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

export function NavCreativeCollage({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .collage-nav {
          background: #1c1c28;
          position: relative;
          overflow: hidden;
          min-height: 80px;
        }
        /* Layered background strips */
        .collage-nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: -5%;
          width: 40%;
          height: 100%;
          background: #2a1f3d;
          transform: skewX(-8deg);
          opacity: 0.6;
          z-index: 0;
        }
        .collage-nav::after {
          content: '';
          position: absolute;
          top: 0;
          right: -5%;
          width: 35%;
          height: 100%;
          background: #1d2d3a;
          transform: skewX(5deg);
          opacity: 0.5;
          z-index: 0;
        }
        .collage-strip {
          position: absolute;
          height: 100%;
          opacity: 0.3;
          z-index: 0;
        }
        .collage-brand {
          font-size: 1.8rem;
          font-weight: 900;
          color: #ff6b9d;
          position: relative;
          z-index: 2;
          font-family: Georgia, serif;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .collage-brand span {
          font-family: system-ui, sans-serif;
          font-weight: 300;
          font-size: 0.7em;
          color: #64d8cb;
          vertical-align: super;
          margin-left: 2px;
          margin-right: 2px;
        }
        .collage-links {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
        }
        .collage-link {
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
        }
        .collage-link:hover {
          transform: scale(1.1);
          z-index: 10;
        }
        .collage-link-0 {
          color: #ffd93d;
          font-family: Georgia, serif;
          font-size: 1.1rem;
          font-weight: 700;
          font-style: italic;
          padding: 0.3rem 0.8rem;
          transform: rotate(-3deg);
          opacity: 0.95;
        }
        .collage-link-1 {
          color: #1c1c28;
          background: #64d8cb;
          font-family: system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 0.5rem 1rem;
          transform: rotate(1deg) translateY(-3px);
        }
        .collage-link-2 {
          color: #ff6b9d;
          font-family: 'Courier New', monospace;
          font-size: 0.95rem;
          font-weight: 400;
          padding: 0.3rem 0.8rem;
          border: 1px dashed #ff6b9d;
          transform: rotate(2deg) translateY(4px);
          opacity: 0.85;
        }
        .collage-link-3 {
          color: white;
          font-family: Georgia, serif;
          font-size: 1.3rem;
          font-weight: 300;
          padding: 0.2rem 0.8rem;
          transform: rotate(-1deg);
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: #ffd93d;
          opacity: 0.9;
        }
        .collage-cta {
          position: relative;
          z-index: 2;
          background: #ff6b9d;
          color: #1c1c28;
          font-weight: 900;
          padding: 0.6rem 1.4rem;
          border: none;
          cursor: pointer;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transform: rotate(-2deg);
          transition: all 0.3s ease;
          clip-path: polygon(0% 0%, 100% 5%, 98% 100%, 2% 95%);
        }
        .collage-cta:hover {
          transform: rotate(0deg) scale(1.08);
          background: #ffd93d;
        }
        .collage-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px solid;
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
      <nav className="collage-nav" dir={isAr ? "rtl" : "ltr"}>
        {/* Background strips */}
        <div className="collage-strip" style={{ left: '30%', width: '15%', background: '#2d1b4e', transform: 'skewX(-15deg)' }} />
        <div className="collage-strip" style={{ left: '55%', width: '20%', background: '#1a3040', transform: 'skewX(10deg)' }} />
        {/* Decorative circles */}
        <div className="collage-circle" style={{ width: '60px', height: '60px', top: '-10px', left: '20%', borderColor: '#ff6b9d' }} />
        <div className="collage-circle" style={{ width: '40px', height: '40px', top: '15px', left: '70%', borderColor: '#64d8cb' }} />
        <div className="collage-circle" style={{ width: '30px', height: '30px', top: '5px', left: '45%', borderColor: '#ffd93d' }} />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative" style={{ zIndex: 2 }}>
          <div className="collage-brand">
            {isAr ? (
              <>{t.brand}<span>*</span></>
            ) : (
              <>{t.brand.slice(0, 3)}<span>&</span>{t.brand.slice(3)}</>
            )}
          </div>
          <div className={`collage-links gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className={`collage-link collage-link-${i}`}>
                {link}
              </a>
            ))}
          </div>
          <button className="collage-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
