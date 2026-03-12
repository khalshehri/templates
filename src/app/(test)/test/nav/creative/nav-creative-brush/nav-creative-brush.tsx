"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

const brushColors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12"];

export function NavCreativeBrush({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .brush-nav {
          background: #faf8f5;
          border-bottom: 1px solid #e8e4de;
          position: relative;
        }
        .brush-brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #2c2c2c;
          font-style: italic;
          position: relative;
          display: inline-block;
        }
        .brush-brand::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: -5%;
          right: -5%;
          height: 8px;
          background: linear-gradient(90deg,
            transparent 0%,
            #e74c3c 5%, #e74c3c 15%,
            transparent 16%, transparent 18%,
            #e74c3c 19%, #e74c3c 45%,
            transparent 46%, transparent 48%,
            #e74c3c 49%, #e74c3c 80%,
            transparent 81%, transparent 83%,
            #e74c3c 84%, #e74c3c 95%,
            transparent 100%
          );
          opacity: 0.7;
          border-radius: 4px;
        }
        .brush-link {
          color: #555;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .brush-link::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 10%;
          right: 10%;
          height: 6px;
          border-radius: 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: 0.75;
        }
        [dir="rtl"] .brush-link::after {
          transform-origin: right;
        }
        .brush-link:hover::after {
          transform: scaleX(1);
        }
        .brush-link:hover {
          color: #2c2c2c;
        }
        .brush-link-0::after {
          background: linear-gradient(90deg,
            transparent 0%, #e74c3c 8%, #e74c3c 30%,
            transparent 32%, #e74c3c 35%, #e74c3c 70%,
            transparent 72%, #e74c3c 75%, #e74c3c 92%, transparent 100%
          );
        }
        .brush-link-1::after {
          background: linear-gradient(90deg,
            transparent 0%, #3498db 5%, #3498db 40%,
            transparent 42%, #3498db 44%, #3498db 85%,
            transparent 87%, #3498db 90%, transparent 100%
          );
        }
        .brush-link-2::after {
          background: linear-gradient(90deg,
            #2ecc71 0%, #2ecc71 25%,
            transparent 27%, #2ecc71 30%, #2ecc71 60%,
            transparent 62%, #2ecc71 65%, #2ecc71 95%, transparent 100%
          );
        }
        .brush-link-3::after {
          background: linear-gradient(90deg,
            transparent 0%, #f39c12 10%, #f39c12 50%,
            transparent 52%, #f39c12 55%, #f39c12 90%,
            transparent 92%, #f39c12 95%, transparent 100%
          );
        }
        .brush-cta {
          background: transparent;
          color: #2c2c2c;
          font-weight: 700;
          padding: 0.5rem 1.5rem;
          border: 2px solid #2c2c2c;
          cursor: pointer;
          font-size: 0.9rem;
          position: relative;
          overflow: hidden;
          transition: color 0.4s ease;
          z-index: 1;
        }
        .brush-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg,
            #e74c3c 0%, #e74c3c 30%,
            transparent 32%, #3498db 35%, #3498db 60%,
            transparent 62%, #2ecc71 65%, #2ecc71 100%
          );
          transition: left 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: -1;
        }
        .brush-cta:hover::before {
          left: 0;
        }
        .brush-cta:hover {
          color: white;
          border-color: transparent;
        }
        .brush-canvas-dot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          pointer-events: none;
        }
      `}</style>
      <nav className="brush-nav" dir={isAr ? "rtl" : "ltr"}>
        {/* Scattered paint dots decoration */}
        {brushColors.flatMap((color, ci) =>
          [0, 1, 2].map((j) => (
            <div
              key={`${ci}-${j}`}
              className="brush-canvas-dot"
              style={{
                background: color,
                width: `${4 + j * 2}px`,
                height: `${4 + j * 2}px`,
                top: `${10 + ci * 20 + j * 5}%`,
                left: `${3 + ci * 25 + j * 8}%`,
              }}
            />
          ))
        )}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <span className="brush-brand">{t.brand}</span>
          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className={`brush-link brush-link-${i}`}>
                {link}
              </a>
            ))}
          </div>
          <button className="brush-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
