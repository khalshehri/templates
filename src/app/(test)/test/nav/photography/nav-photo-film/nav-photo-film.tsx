"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "FilmFrame",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Book Now",
  },
  ar: {
    brand: "فيلم فريم",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "احجز الآن",
  },
};

export function NavPhotoFilm({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .film-strip-border {
          background: repeating-linear-gradient(
            90deg,
            #333 0px,
            #333 8px,
            transparent 8px,
            transparent 12px,
            #333 12px,
            #333 20px,
            transparent 20px,
            transparent 24px
          );
          height: 8px;
        }
        .film-link:hover {
          color: #fbbf24;
        }
      `}</style>
      <nav className="bg-[#1a1a1a]">
        <div className="film-strip-border" />
        <div className={`px-6 py-4 max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-8 h-6 border-2 border-gray-400 rounded-sm flex items-center justify-center">
              <div className="w-4 h-3 border border-gray-500 rounded-sm" />
            </div>
            <span className="text-white font-mono text-lg tracking-wider">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="film-link text-gray-400 text-sm tracking-wider transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-amber-500 hover:bg-amber-400 text-[#1a1a1a] font-semibold px-5 py-2 text-sm transition-colors">
            {t.cta}
          </button>
        </div>
        <div className="film-strip-border" />
      </nav>
    </>
  );
}
