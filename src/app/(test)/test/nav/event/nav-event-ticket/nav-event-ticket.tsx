"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "MusicFest",
    links: ["Lineup", "Venue", "FAQ"],
    cta: "Get Tickets",
    date: "Mar 25-27",
    price: "From $49",
  },
  ar: {
    brand: "مهرجان الموسيقى",
    links: ["البرنامج", "المكان", "الأسئلة"],
    cta: "احصل على تذاكر",
    date: "٢٥-٢٧ مارس",
    price: "من ١٨٩ ر.س",
  },
};

export function NavEventTicket({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 shadow-lg">
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="font-extrabold text-white text-xl">{t.brand}</span>
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{t.date}</span>
        </div>

        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link) => (
            <a key={link} href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="hidden sm:inline text-purple-200 text-sm">{t.price}</span>
          <button className={`flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            {t.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}
