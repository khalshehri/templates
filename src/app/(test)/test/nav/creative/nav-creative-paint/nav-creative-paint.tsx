"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

const splashColors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A78BFA", "#F472B6"];

export function NavCreativePaint({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .paint-nav {
          background: #1a1a2e;
          position: relative;
          overflow: visible;
        }
        .paint-link {
          position: relative;
          color: #e2e8f0;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.5rem 1.25rem;
          cursor: pointer;
          transition: color 0.3s ease;
          text-decoration: none;
          z-index: 1;
        }
        .paint-link::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1), height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: -1;
          opacity: 0.85;
        }
        .paint-link:hover::before {
          width: 120%;
          height: 250%;
        }
        .paint-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 30%;
          width: 6px;
          height: 0;
          border-radius: 0 0 3px 3px;
          transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s;
          z-index: -1;
        }
        .paint-link:hover::after {
          height: 18px;
        }
        .paint-link-0::before, .paint-link-0::after { background: #FF6B6B; }
        .paint-link-1::before, .paint-link-1::after { background: #4ECDC4; }
        .paint-link-2::before, .paint-link-2::after { background: #FFE66D; }
        .paint-link-3::before, .paint-link-3::after { background: #A78BFA; }
        .paint-link-0:hover { color: #fff; }
        .paint-link-1:hover { color: #fff; }
        .paint-link-2:hover { color: #1a1a2e; }
        .paint-link-3:hover { color: #fff; }
        .paint-brand {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FF6B6B, #4ECDC4, #FFE66D, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .paint-cta {
          background: linear-gradient(135deg, #F472B6, #A78BFA);
          color: white;
          font-weight: 700;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        .paint-cta:hover {
          transform: scale(1.05);
        }
        .paint-cta::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #FF6B6B, #4ECDC4, #FFE66D, #A78BFA, #F472B6);
          border-radius: 9999px;
          z-index: -1;
          animation: paint-rotate 3s linear infinite;
          background-size: 300% 300%;
        }
        @keyframes paint-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .paint-drip {
          position: absolute;
          bottom: -12px;
          width: 8px;
          height: 12px;
          border-radius: 0 0 50% 50%;
          animation: drip 2s ease-in-out infinite;
        }
        @keyframes drip {
          0%, 100% { height: 12px; opacity: 0.8; }
          50% { height: 20px; opacity: 1; }
        }
      `}</style>
      <nav className="paint-nav" dir={isAr ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <span className="paint-brand">{t.brand}</span>
          <div className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className={`paint-link paint-link-${i}`}>
                {link}
              </a>
            ))}
          </div>
          <button className="paint-cta">{t.cta}</button>
          {/* Decorative drips along the bottom */}
          {splashColors.map((color, i) => (
            <div
              key={i}
              className="paint-drip"
              style={{
                left: `${15 + i * 18}%`,
                background: color,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
