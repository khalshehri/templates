"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "ConferenceX",
    links: ["Agenda", "Speakers", "Venue", "Register"],
    cta: "Get Pass",
    speakers: ["Dr. Sarah Chen", "Prof. Ahmed Al-Rashid", "Maria Gonzalez", "James O'Brien", "Dr. Yuki Tanaka", "Omar Hassan", "Lisa Park", "David Miller"],
  },
  ar: {
    brand: "كونفرنس إكس",
    links: ["البرنامج", "المتحدثون", "المكان", "التسجيل"],
    cta: "احصل على تذكرة",
    speakers: ["د. سارة تشين", "أ. أحمد الراشد", "ماريا غونزاليس", "جيمس أوبراين", "د. يوكي تاناكا", "عمر حسن", "ليزا بارك", "ديفيد ميلر"],
  },
};

export function NavEventSpeaker({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-scroll { animation: tickerScroll 20s linear infinite; }
      `}</style>
      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="font-bold text-gray-900 text-lg">{t.brand}</span>
          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
            {t.cta}
          </button>
        </div>
      </nav>
      {/* Speaker ticker */}
      <div className="bg-blue-600 overflow-hidden">
        <div className="ticker-scroll whitespace-nowrap py-1.5">
          {[...t.speakers, ...t.speakers].map((speaker, i) => (
            <span key={i} className="text-white/90 text-xs font-medium mx-6 inline-block">
              &#127908; {speaker}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
