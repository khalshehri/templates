"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "CHROMATIC",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "Start",
  },
  ar: {
    brand: "كروماتيك",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "ابدأ",
  },
};

const blockColors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6"];

export function NavAgencyColor({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-color-block {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: filter 0.2s, padding 0.2s;
          white-space: nowrap;
        }
        .nav-color-block:hover {
          filter: brightness(1.15);
          color: #fff;
        }
      `}</style>
      <nav className={`flex items-stretch ${isAr ? "flex-row-reverse" : ""}`}>
        <div className="bg-black flex items-center px-6">
          <span className="text-white font-black text-lg tracking-wider">{t.brand}</span>
        </div>
        {t.links.map((link, i) => (
          <a
            key={i}
            href="#"
            className="nav-color-block flex-1"
            style={{ background: blockColors[i] }}
          >
            {link}
          </a>
        ))}
        <div className="bg-black flex items-center px-6">
          <button className="text-white font-bold text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
