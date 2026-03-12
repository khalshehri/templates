"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "The Grand Theatre",
    links: ["Shows", "Schedule", "About", "Tickets"],
    cta: "Book Seats",
  },
  ar: {
    brand: "المسرح الكبير",
    links: ["العروض", "الجدول", "عن المسرح", "التذاكر"],
    cta: "احجز مقاعد",
  },
};

export function NavEventStage({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gradient-to-b from-red-950 via-red-900 to-red-950 border-b-2 border-yellow-600/50 shadow-xl">
      <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-10 h-10 border-2 border-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-yellow-400 text-lg">&#9733;</span>
          </div>
          <span className="font-serif text-yellow-400 text-xl tracking-wide">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-red-200/80 hover:text-yellow-400 text-sm font-medium tracking-wide transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-red-950 font-bold px-6 py-2.5 rounded text-sm transition-all shadow-lg border border-yellow-400/50">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
