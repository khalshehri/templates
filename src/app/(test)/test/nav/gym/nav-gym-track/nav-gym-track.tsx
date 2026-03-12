"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "SPEEDFIT",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "RACE IN",
  },
  ar: {
    brand: "سبيد فيت",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "انطلق",
  },
};

export function NavGymTrack({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .track-nav {
          position: relative;
          overflow: hidden;
        }
        .track-nav::before {
          content: '';
          position: absolute;
          top: 0;
          right: -20px;
          width: 200px;
          height: 100%;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(234, 179, 8, 0.08) 8px,
            rgba(234, 179, 8, 0.08) 16px
          );
          z-index: 0;
        }
        .track-link {
          transition: all 0.2s ease;
          position: relative;
          z-index: 1;
        }
        .track-link:hover {
          color: #eab308;
          transform: skewX(-3deg);
        }
      `}</style>
      <nav className="track-nav bg-[#111] px-6 py-4 border-b-2 border-yellow-500/30">
        <div className={`max-w-6xl mx-auto flex items-center justify-between relative z-10 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="flex gap-0.5">
              <div className="w-1 h-6 bg-yellow-500 skew-x-[-12deg]" />
              <div className="w-1 h-6 bg-yellow-500 skew-x-[-12deg]" />
              <div className="w-1 h-6 bg-yellow-500 skew-x-[-12deg]" />
            </div>
            <span className="text-white font-black text-lg tracking-widest italic">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="track-link text-gray-400 text-sm font-bold uppercase tracking-wider">
                {link}
              </a>
            ))}
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-6 py-2.5 text-sm tracking-widest uppercase skew-x-[-6deg] transition-colors">
            <span className="inline-block skew-x-[6deg]">{t.cta}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
