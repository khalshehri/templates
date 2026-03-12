"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "StreamCon",
    links: ["Sessions", "Chat", "Resources", "FAQ"],
    liveText: "LIVE NOW",
    viewers: "2.4K watching",
    cta: "Join Stream",
  },
  ar: {
    brand: "ستريم كون",
    links: ["الجلسات", "المحادثة", "الموارد", "الأسئلة"],
    liveText: "مباشر الآن",
    viewers: "٢.٤ ألف مشاهد",
    cta: "انضم للبث",
  },
};

export function NavEventLive({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .live-pulse { animation: livePulse 1.5s ease infinite; }
      `}</style>
      <nav className="bg-gray-950 border-b border-gray-800">
        <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            <span className="font-bold text-white text-lg">{t.brand}</span>
            <div className={`flex items-center gap-2 bg-red-600/20 border border-red-600/30 px-3 py-1 rounded-full ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full live-pulse" />
              </div>
              <span className="text-red-400 text-xs font-bold uppercase tracking-wide">{t.liveText}</span>
            </div>
            <span className="hidden sm:inline text-gray-500 text-xs">{t.viewers}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
