"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Instant Photo",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Snap!",
  },
  ar: {
    brand: "صورة فورية",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "التقط!",
  },
};

export function NavPhotoPolaroid({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .polaroid-brand {
          background: white;
          padding: 6px 12px 16px 12px;
          box-shadow: 2px 3px 8px rgba(0,0,0,0.15);
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
        }
        .polaroid-brand:hover {
          transform: rotate(0deg);
        }
        .polaroid-link {
          transition: all 0.3s ease;
        }
        .polaroid-link:hover {
          transform: rotate(-1deg);
          color: #ec4899;
        }
      `}</style>
      <nav className="bg-[#f5f0eb] border-b border-[#e5ddd4] px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="polaroid-brand">
            <div className="w-20 h-5 bg-gradient-to-r from-pink-200 to-amber-200 rounded-sm mb-1" />
            <span className="text-gray-800 text-xs font-handwriting block text-center">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="polaroid-link text-gray-600 text-sm font-medium">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors shadow-md">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
