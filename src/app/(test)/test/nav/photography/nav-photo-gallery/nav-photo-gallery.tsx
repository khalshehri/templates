"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Gallery Studio",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Book Session",
  },
  ar: {
    brand: "ستوديو جاليري",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "احجز جلسة",
  },
};

export function NavPhotoGallery({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .gallery-link {
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 16px;
        }
        .gallery-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        .gallery-link:hover::before {
          border-color: #d4d4d4;
          box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
        }
        .gallery-link:hover {
          transform: translate(-2px, -2px);
        }
      `}</style>
      <nav className="bg-[#f5f5f0] border-b-2 border-gray-300 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-gray-900 font-light text-xl tracking-[0.15em] uppercase">{t.brand}</span>

          <div className={`hidden md:flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gallery-link text-gray-700 text-sm font-light tracking-wider uppercase">
                {link}
              </a>
            ))}
          </div>

          <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-5 py-2 text-sm uppercase tracking-wider font-light transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
