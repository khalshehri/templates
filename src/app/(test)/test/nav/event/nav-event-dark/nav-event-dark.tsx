"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "PREMIERE",
    links: ["About", "Trailer", "Cast", "Dates"],
    cta: "Watch Trailer",
    subtitle: "A cinematic experience",
  },
  ar: {
    brand: "العرض الأول",
    links: ["عن الفيلم", "الإعلان", "الممثلون", "المواعيد"],
    cta: "شاهد الإعلان",
    subtitle: "تجربة سينمائية",
  },
};

export function NavEventDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes redGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.3); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.6); }
        }
        .red-glow { animation: redGlow 3s ease infinite; }
      `}</style>
      <nav className="bg-black border-b border-red-900/30">
        <div className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={isAr ? "text-right" : ""}>
            <span className="font-bold text-red-500 text-xl tracking-[0.3em] uppercase block">{t.brand}</span>
            <span className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">{t.subtitle}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-red-400 text-sm tracking-wider uppercase transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className={`red-glow flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded text-sm transition-colors ${isAr ? "flex-row-reverse" : ""}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
