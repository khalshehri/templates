"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Lens Studio",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Focus",
  },
  ar: {
    brand: "ستوديو لينس",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "تركيز",
  },
};

export function NavPhotoLens({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .lens-link {
          position: relative;
          transition: all 0.3s ease;
          z-index: 1;
        }
        .lens-link::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%);
          transition: all 0.4s ease;
          z-index: -1;
        }
        .lens-link:hover::before {
          width: 60px;
          height: 60px;
        }
        .lens-link:hover {
          color: #9333ea;
        }
        .lens-brand-ring {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #9333ea, #6366f1, #9333ea);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lens-brand-inner {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #18181b;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <nav className="bg-[#18181b] border-b border-purple-500/10 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="lens-brand-ring">
              <div className="lens-brand-inner">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
              </div>
            </div>
            <span className="text-white font-light text-lg tracking-wider">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="lens-link text-gray-400 text-sm tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
