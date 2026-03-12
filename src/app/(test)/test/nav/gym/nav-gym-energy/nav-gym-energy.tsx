"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "POWER GYM",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "JOIN NOW",
  },
  ar: {
    brand: "باور جيم",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "انضم الآن",
  },
};

export function NavGymEnergy({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes energyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(225, 29, 72, 0); }
        }
        .energy-cta {
          animation: energyPulse 2s infinite;
          transition: all 0.3s ease;
        }
        .energy-cta:hover {
          transform: scale(1.05);
          background: #be123c;
        }
        .energy-link {
          transition: all 0.2s ease;
          border-bottom: 3px solid transparent;
        }
        .energy-link:hover {
          color: #e11d48;
          border-bottom-color: #e11d48;
        }
      `}</style>
      <nav className="bg-black border-b-4 border-red-600 px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center skew-x-[-6deg]">
              <span className="text-white font-black text-lg skew-x-[6deg]">P</span>
            </div>
            <span className="text-white font-black text-xl tracking-wider">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="energy-link text-gray-300 text-sm font-bold uppercase tracking-wider pb-1">
                {link}
              </a>
            ))}
          </div>

          <button className="energy-cta bg-red-600 text-white font-black px-8 py-3 text-sm tracking-widest uppercase">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
