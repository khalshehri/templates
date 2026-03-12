"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Blackwell & Stern",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Consult Now",
  },
  ar: {
    brand: "بلاكويل وستيرن",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "استشر الآن",
  },
};

export function NavLawDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .law-dark-link {
          font-family: Georgia, 'Times New Roman', serif;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        .law-dark-link:hover {
          color: #c9a84c;
        }
      `}</style>
      <nav className="bg-[#0a0a0a] border-b border-[#c9a84c]/20 px-6 py-5">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-white font-serif text-xl tracking-widest uppercase" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>

          <div className={`hidden md:flex items-center gap-10 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="law-dark-link text-white/60 text-sm">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-[#c9a84c] hover:bg-[#d4b65c] text-[#0a0a0a] font-serif px-6 py-2.5 text-sm tracking-wider transition-colors" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
