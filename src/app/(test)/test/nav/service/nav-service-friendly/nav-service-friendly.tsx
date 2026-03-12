"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "FriendlySpace",
    links: ["Home", "About", "Services", "Blog", "Contact"],
    cta: "Say Hello",
  },
  ar: {
    brand: "مساحة ودية",
    links: ["الرئيسية", "من نحن", "الخدمات", "المدونة", "اتصل بنا"],
    cta: "قل مرحبا",
  },
};

const pillColors = [
  "bg-pink-100 text-pink-700 hover:bg-pink-200",
  "bg-sky-100 text-sky-700 hover:bg-sky-200",
  "bg-violet-100 text-violet-700 hover:bg-violet-200",
  "bg-amber-100 text-amber-700 hover:bg-amber-200",
  "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
];

export function NavServiceFriendly({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className={`max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-9 h-9 bg-gradient-to-br from-pink-300 via-violet-300 to-sky-300 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <span className="font-bold text-gray-700">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${pillColors[i % pillColors.length]}`}
            >
              {link}
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-pink-400 to-violet-400 hover:from-pink-500 hover:to-violet-500 text-white font-semibold px-5 py-2 rounded-full text-sm transition-all shadow-sm">
          {t.cta} &#128075;
        </button>
      </div>
    </nav>
  );
}
