"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Clarity Homes",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "Schedule Tour",
  },
  ar: {
    brand: "كلاريتي هومز",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "حجز جولة",
  },
};

export function NavRealEstateGlass({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .glass-re-nav {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-re-link {
          transition: all 0.3s ease;
        }
        .glass-re-link:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .glass-re-cta {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        .glass-re-cta:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
      <nav className="glass-re-nav px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-9 h-9 border border-white/30 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CH</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-wide">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="glass-re-link text-white/80 hover:text-white px-4 py-2 rounded-lg text-sm font-medium">
                {link}
              </a>
            ))}
          </div>

          <button className="glass-re-cta text-white font-medium px-6 py-2 rounded-lg text-sm">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
