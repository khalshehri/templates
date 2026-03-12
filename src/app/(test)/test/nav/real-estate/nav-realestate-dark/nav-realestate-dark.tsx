"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Noir Properties",
    links: ["Properties", "About", "Agents", "Contact"],
    cta: "Explore Listings",
  },
  ar: {
    brand: "نوار العقارية",
    links: ["العقارات", "من نحن", "الوكلاء", "اتصل بنا"],
    cta: "استكشف العروض",
  },
};

export function NavRealEstateDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .re-dark-link {
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .re-dark-link:hover {
          color: #c9a84c;
          text-shadow: 0 0 12px rgba(201, 168, 76, 0.3);
        }
        .re-dark-cta {
          border: 1px solid rgba(201, 168, 76, 0.4);
          transition: all 0.3s ease;
        }
        .re-dark-cta:hover {
          background: rgba(201, 168, 76, 0.1);
          border-color: #c9a84c;
        }
      `}</style>
      <nav className="bg-[#0d0d0d] px-6 py-5 border-b border-[#c9a84c]/10">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="w-1 h-8 bg-[#c9a84c]" />
            <span className="text-white font-serif text-xl tracking-widest uppercase">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a
                key={link}
                href="#"
                className="re-dark-link text-gray-400 text-sm uppercase tracking-widest"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="re-dark-cta text-[#c9a84c] px-6 py-2 text-sm uppercase tracking-widest">
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
