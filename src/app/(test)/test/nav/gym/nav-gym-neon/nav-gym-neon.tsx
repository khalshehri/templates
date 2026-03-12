"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "NEON GYM",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "SIGN UP",
  },
  ar: {
    brand: "نيون جيم",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "سجّل الآن",
  },
};

export function NavGymNeon({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes neonFlicker {
          0%, 100% { text-shadow: 0 0 7px #84cc16, 0 0 10px #84cc16, 0 0 21px #84cc16; }
          50% { text-shadow: 0 0 4px #84cc16, 0 0 7px #84cc16; }
        }
        .neon-brand {
          color: #84cc16;
          animation: neonFlicker 3s ease-in-out infinite;
        }
        .neon-link {
          transition: all 0.3s ease;
        }
        .neon-link:hover {
          color: #a3e635;
          text-shadow: 0 0 8px rgba(163, 230, 53, 0.5);
        }
        .neon-cta {
          border: 2px solid #84cc16;
          color: #84cc16;
          text-shadow: 0 0 5px rgba(132, 204, 22, 0.5);
          box-shadow: 0 0 10px rgba(132, 204, 22, 0.2), inset 0 0 10px rgba(132, 204, 22, 0.1);
          transition: all 0.3s ease;
        }
        .neon-cta:hover {
          background: rgba(132, 204, 22, 0.15);
          box-shadow: 0 0 20px rgba(132, 204, 22, 0.4), inset 0 0 20px rgba(132, 204, 22, 0.15);
        }
      `}</style>
      <nav className="bg-[#0a0a0a] px-6 py-5 border-b border-[#84cc16]/10">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="neon-brand font-black text-xl tracking-[0.2em]">{t.brand}</span>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="neon-link text-gray-500 text-sm font-bold uppercase tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <button className="neon-cta font-black px-6 py-2 text-sm tracking-[0.15em] uppercase">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
