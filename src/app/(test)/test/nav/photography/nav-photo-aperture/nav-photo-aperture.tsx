"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Aperture Studio",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Book Session",
    badge: "f/1.8",
  },
  ar: {
    brand: "ستوديو أبيرتشر",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "احجز جلسة",
    badge: "f/1.8",
  },
};

export function NavPhotoAperture({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .aperture-icon {
          position: relative;
          width: 36px;
          height: 36px;
        }
        .aperture-blade {
          position: absolute;
          width: 14px;
          height: 2px;
          background: #6b7280;
          top: 50%;
          left: 50%;
          transform-origin: 0 50%;
        }
        .aperture-link:hover {
          color: #374151;
        }
        .f-badge {
          font-family: monospace;
          font-size: 10px;
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          padding: 2px 6px;
          border-radius: 4px;
          color: #6b7280;
        }
      `}</style>
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-9 h-9 rounded-full border-2 border-gray-400 flex items-center justify-center relative">
              <div className="w-3 h-3 rounded-full border-2 border-gray-500" />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-[10px] h-[1px] bg-gray-400"
                  style={{
                    transform: `rotate(${deg}deg)`,
                    transformOrigin: "center",
                    top: "50%",
                    left: "25%",
                  }}
                />
              ))}
            </div>
            <span className="text-gray-800 font-medium text-lg">{t.brand}</span>
            <span className="f-badge">{t.badge}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="aperture-link text-gray-500 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
