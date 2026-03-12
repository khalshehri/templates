"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Chambers Law",
    links: ["Practice Areas", "Attorneys", "About", "Contact"],
    cta: "Research",
  },
  ar: {
    brand: "تشامبرز للقانون",
    links: ["مجالات الممارسة", "المحامون", "من نحن", "اتصل بنا"],
    cta: "بحث",
  },
};

export function NavLawLibrary({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .library-nav {
          background: linear-gradient(180deg, #5c3d2e, #4a3225);
        }
        .library-link {
          font-family: Georgia, serif;
          transition: all 0.3s ease;
          padding: 6px 14px;
          border-left: 2px solid transparent;
        }
        .library-link:hover {
          border-left-color: #c9a84c;
          background: rgba(0,0,0,0.15);
          color: #f5e6c8;
        }
        .book-icon {
          display: flex;
          gap: 2px;
          align-items: flex-end;
        }
        .book-spine {
          border-radius: 1px;
        }
      `}</style>
      <nav className="library-nav px-6 py-4 border-b-2 border-[#3d2b1f]">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="book-icon">
              <div className="book-spine w-1.5 h-5 bg-[#8b0000]" />
              <div className="book-spine w-1.5 h-6 bg-[#1a365d]" />
              <div className="book-spine w-1.5 h-5 bg-[#065f46]" />
              <div className="book-spine w-1.5 h-7 bg-[#92400e]" />
              <div className="book-spine w-1.5 h-4 bg-[#581c87]" />
            </div>
            <span className="text-[#f5e6c8] font-serif text-lg" style={{ fontFamily: "Georgia, serif" }}>{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="library-link text-[#d4c5a0] text-sm">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-[#f5e6c8] hover:bg-[#e8d9b8] text-[#3d2b1f] font-serif px-5 py-2 text-sm transition-colors" style={{ fontFamily: "Georgia, serif" }}>
            {t.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
