"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Viewfinder",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Capture",
  },
  ar: {
    brand: "فيو فايندر",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "التقاط",
  },
};

export function NavPhotoViewfinder({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .viewfinder-nav {
          position: relative;
          background: #0f0f0f;
        }
        .viewfinder-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: rgba(255,255,255,0.4);
          z-index: 2;
        }
        .viewfinder-corner.tl { top: 6px; left: 6px; border-top: 2px solid; border-left: 2px solid; }
        .viewfinder-corner.tr { top: 6px; right: 6px; border-top: 2px solid; border-right: 2px solid; }
        .viewfinder-corner.bl { bottom: 6px; left: 6px; border-bottom: 2px solid; border-left: 2px solid; }
        .viewfinder-corner.br { bottom: 6px; right: 6px; border-bottom: 2px solid; border-right: 2px solid; }
        .vf-link:hover {
          color: #22c55e;
        }
        .vf-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
        }
      `}</style>
      <nav className="viewfinder-nav px-6 py-5">
        <div className="viewfinder-corner tl" />
        <div className="viewfinder-corner tr" />
        <div className="viewfinder-corner bl" />
        <div className="viewfinder-corner br" />
        <div className={`max-w-6xl mx-auto flex items-center justify-between relative z-10 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="vf-dot" />
            <span className="text-white/80 font-mono text-sm tracking-wider uppercase">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="vf-link text-gray-500 font-mono text-xs tracking-wider uppercase transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="border border-green-500/50 text-green-400 hover:bg-green-500/10 font-mono px-4 py-1.5 text-xs uppercase tracking-wider transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
