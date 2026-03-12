"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "WarmCare",
    links: ["Home", "Services", "About Us", "Gallery"],
    cta: "Book Now",
  },
  ar: {
    brand: "وارم كير",
    links: ["الرئيسية", "الخدمات", "من نحن", "المعرض"],
    cta: "احجز الآن",
  },
};

export function NavServiceWarm({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes warmShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .warm-shimmer {
          background-size: 200% 200%;
          animation: warmShimmer 4s ease infinite;
        }
      `}</style>
      <nav className="warm-shimmer bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-3 shadow-lg">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-white font-bold text-xl">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/90 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="bg-white text-orange-600 font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all text-sm">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
