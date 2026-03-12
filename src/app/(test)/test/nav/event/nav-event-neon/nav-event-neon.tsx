"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "NEON NIGHTS",
    links: ["Artists", "Lineup", "Tickets", "VIP"],
    cta: "Enter",
  },
  ar: {
    brand: "ليالي نيون",
    links: ["الفنانون", "البرنامج", "التذاكر", "VIP"],
    cta: "ادخل",
  },
};

export function NavEventNeon({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { text-shadow: 0 0 7px #ff00ff, 0 0 10px #ff00ff, 0 0 21px #ff00ff, 0 0 42px #ff00ff; }
          20%, 24%, 55% { text-shadow: none; }
        }
        @keyframes neonGlow {
          0%, 100% { text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff; }
          50% { text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
        }
        .neon-brand { animation: neonFlicker 3s ease infinite; color: #ff00ff; }
        .neon-link { transition: all 0.3s; }
        .neon-link:hover { color: #00ffff; text-shadow: 0 0 7px #00ffff, 0 0 15px #00ffff; }
        .neon-cta {
          border: 2px solid #00ffff;
          box-shadow: 0 0 10px rgba(0,255,255,0.3), inset 0 0 10px rgba(0,255,255,0.1);
          transition: all 0.3s;
        }
        .neon-cta:hover {
          box-shadow: 0 0 20px rgba(0,255,255,0.6), inset 0 0 20px rgba(0,255,255,0.2);
          background: rgba(0,255,255,0.1);
        }
      `}</style>
      <nav className="bg-gray-950 border-b border-gray-800">
        <div className={`max-w-6xl mx-auto px-6 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="neon-brand font-extrabold text-xl tracking-[0.2em] uppercase">{t.brand}</span>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="neon-link text-gray-400 text-sm font-medium uppercase tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <button className="neon-cta text-cyan-400 font-bold px-6 py-2 rounded text-sm uppercase tracking-wider">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
