"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Flamingo Studio",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "Start a Project",
  },
  ar: {
    brand: "استوديو فلامنغو",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "ابدأ مشروعاً",
  },
};

export function NavAgencyCreative({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-creative {
          background: linear-gradient(135deg, #ec4899, #f97316);
        }
        .nav-creative-link {
          color: rgba(255,255,255,0.9);
          font-size: 15px;
          font-weight: 700;
          position: relative;
          transition: transform 0.2s;
          display: inline-block;
        }
        .nav-creative-link:hover {
          transform: scale(1.15) rotate(-2deg);
          color: #fff;
        }
        .nav-creative-cta {
          background: #fff;
          color: #ec4899;
          font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-creative-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .nav-creative-blob {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          filter: blur(20px);
          pointer-events: none;
        }
      `}</style>
      <nav className={`nav-creative relative overflow-hidden px-8 py-5 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className="nav-creative-blob" style={{ top: -20, left: "20%" }} />
        <div className="nav-creative-blob" style={{ bottom: -30, right: "10%" }} />
        <span className="text-white font-black text-xl relative z-10">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-8 relative z-10 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-creative-link">{link}</a>
          ))}
        </div>
        <button className="nav-creative-cta px-6 py-2 rounded-full text-sm relative z-10">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
