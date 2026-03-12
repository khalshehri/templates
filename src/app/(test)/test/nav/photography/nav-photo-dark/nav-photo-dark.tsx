"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Dark Room",
    links: ["Portfolio", "About", "Pricing", "Contact"],
    cta: "Hire Me",
  },
  ar: {
    brand: "الغرفة المظلمة",
    links: ["المعرض", "من نحن", "الأسعار", "اتصل بنا"],
    cta: "وظفني",
  },
};

export function NavPhotoDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .darkroom-link {
          transition: all 0.4s ease;
          position: relative;
        }
        .darkroom-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #8b0000;
          transition: width 0.3s ease;
        }
        .darkroom-link:hover {
          color: #8b0000;
        }
        .darkroom-link:hover::after {
          width: 100%;
        }
        .darkroom-cta {
          background: #8b0000;
          transition: all 0.3s ease;
        }
        .darkroom-cta:hover {
          background: #a00000;
          box-shadow: 0 0 20px rgba(139, 0, 0, 0.4);
        }
      `}</style>
      <nav className="bg-[#0a0a0a] px-6 py-5 border-b border-[#8b0000]/20">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-2 h-2 rounded-full bg-[#8b0000] shadow-[0_0_8px_rgba(139,0,0,0.6)]" />
            <span className="text-white/90 font-light text-lg tracking-[0.2em] uppercase">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="darkroom-link text-gray-500 text-sm tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <button className="darkroom-cta text-white/90 px-5 py-2 text-sm tracking-wider uppercase">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
