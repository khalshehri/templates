"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Lightbox",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "View Work",
  },
  ar: {
    brand: "لايت بوكس",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "عرض الأعمال",
  },
};

export function NavPhotoLightbox({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .lightbox-nav {
          position: relative;
          background: #111;
        }
        .lightbox-nav::before {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 60px rgba(0,0,0,0.8), inset 0 0 120px rgba(0,0,0,0.4);
          pointer-events: none;
          z-index: 1;
        }
        .lightbox-link {
          transition: all 0.3s ease;
          z-index: 2;
          position: relative;
        }
        .lightbox-link:hover {
          color: white;
          text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
      `}</style>
      <nav className="lightbox-nav px-6 py-5">
        <div className={`max-w-6xl mx-auto flex items-center justify-between relative z-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-white text-xl font-light tracking-[0.15em] relative z-10">{t.brand}</span>

          <div className={`hidden md:flex items-center gap-8 relative z-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="lightbox-link text-gray-500 text-sm tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <button className="relative z-10 border border-white/30 text-white/80 hover:bg-white/10 hover:text-white px-5 py-2 text-sm tracking-wider transition-all">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
