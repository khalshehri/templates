"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: { brand: "Artistry", links: ["Work", "Studio", "About", "Contact"], cta: "Let's Create" },
  ar: { brand: "فنون", links: ["أعمالنا", "الاستوديو", "من نحن", "اتصل بنا"], cta: "لنبدع معاً" },
};

const stickerStyles = [
  { bg: "#FF6B6B", rotate: "-2deg", shape: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" },
  { bg: "#4ECDC4", rotate: "1.5deg", shape: "polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)" },
  { bg: "#FFE66D", rotate: "-1deg", shape: "polygon(3% 0%, 100% 3%, 97% 100%, 0% 97%)" },
  { bg: "#A78BFA", rotate: "2deg", shape: "polygon(0% 0%, 97% 5%, 100% 100%, 3% 95%)" },
];

export function NavCreativeSticker({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .sticker-nav {
          background: #f8f5f0;
          border-bottom: 3px dashed #ddd;
          position: relative;
        }
        .sticker-brand {
          font-size: 1.6rem;
          font-weight: 900;
          color: #1a1a1a;
          background: #FFE66D;
          padding: 0.3rem 1rem;
          transform: rotate(-3deg);
          display: inline-block;
          border: 2px solid #1a1a1a;
          box-shadow: 3px 3px 0 #1a1a1a;
          position: relative;
        }
        .sticker-brand::after {
          content: '';
          position: absolute;
          top: -3px;
          right: -3px;
          width: 12px;
          height: 12px;
          background: #f8f5f0;
          border-left: 2px solid #1a1a1a;
          border-bottom: 2px solid #1a1a1a;
          transform: rotate(-45deg);
          transform-origin: bottom left;
        }
        .sticker-link {
          display: inline-block;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.4rem 1.2rem;
          cursor: pointer;
          text-decoration: none;
          color: white;
          border: 2px solid rgba(0,0,0,0.15);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .sticker-link:hover {
          transform: scale(1.1) rotate(0deg) !important;
          box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
          z-index: 10;
        }
        .sticker-link-0 {
          background: #FF6B6B;
          clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
          transform: rotate(-2deg);
        }
        .sticker-link-1 {
          background: #4ECDC4;
          clip-path: polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%);
          transform: rotate(1.5deg);
        }
        .sticker-link-2 {
          background: #FFE66D;
          color: #1a1a1a;
          text-shadow: none;
          clip-path: polygon(3% 0%, 100% 3%, 97% 100%, 0% 97%);
          transform: rotate(-1deg);
        }
        .sticker-link-3 {
          background: #A78BFA;
          clip-path: polygon(0% 0%, 97% 5%, 100% 100%, 3% 95%);
          transform: rotate(2deg);
        }
        .sticker-cta {
          background: #1a1a1a;
          color: #FFE66D;
          font-weight: 800;
          padding: 0.5rem 1.5rem;
          border: 3px solid #1a1a1a;
          cursor: pointer;
          font-size: 0.9rem;
          transform: rotate(1deg);
          transition: all 0.3s ease;
          box-shadow: 4px 4px 0 #FF6B6B;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .sticker-cta:hover {
          transform: rotate(-1deg) scale(1.05);
          box-shadow: 6px 6px 0 #4ECDC4;
        }
        .sticker-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0.3;
        }
      `}</style>
      <nav className="sticker-nav" dir={isAr ? "rtl" : "ltr"}>
        {/* Decorative dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="sticker-dot"
            style={{
              background: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#A78BFA"][i % 4],
              top: `${15 + (i % 3) * 25}%`,
              left: `${5 + i * 8}%`,
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <span className="sticker-brand">{t.brand}</span>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={i} href="#" className={`sticker-link sticker-link-${i}`}>
                {link}
              </a>
            ))}
          </div>
          <button className="sticker-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
