"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Exposure",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Book Now",
  },
  ar: {
    brand: "إكسبوجر",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "احجز الآن",
  },
};

export function NavPhotoExposure({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .exposure-meter {
          height: 3px;
          background: linear-gradient(90deg, #000 0%, #333 20%, #666 40%, #999 60%, #ccc 80%, #fff 100%);
          position: relative;
        }
        .exposure-indicator {
          position: absolute;
          top: -3px;
          left: 60%;
          width: 8px;
          height: 8px;
          background: #f59e0b;
          border-radius: 50%;
          box-shadow: 0 0 4px rgba(245, 158, 11, 0.6);
        }
        .exposure-link {
          font-family: 'Courier New', monospace;
          transition: all 0.3s ease;
        }
        .exposure-link:hover {
          color: #f59e0b;
        }
        .exposure-val {
          font-family: 'Courier New', monospace;
          font-size: 10px;
          color: #6b7280;
        }
      `}</style>
      <nav className="bg-[#1c1c1c]">
        <div className="exposure-meter">
          <div className="exposure-indicator" />
        </div>
        <div className={`px-6 py-4 max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="text-white font-mono text-lg tracking-wider">{t.brand}</span>
            <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
              <span className="exposure-val">ISO 400</span>
              <span className="exposure-val">|</span>
              <span className="exposure-val">1/125s</span>
              <span className="exposure-val">|</span>
              <span className="exposure-val">f/2.8</span>
            </div>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="exposure-link text-gray-500 text-sm tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-amber-500 hover:bg-amber-400 text-[#1c1c1c] font-mono font-bold px-5 py-2 text-sm transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
