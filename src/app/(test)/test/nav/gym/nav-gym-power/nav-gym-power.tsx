"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "POWERHOUSE",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "GET STRONG",
  },
  ar: {
    brand: "باور هاوس",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "كن قوياً",
  },
};

export function NavGymPower({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .gym-power-nav {
          background: #111;
          border-bottom: 2px solid #222;
        }
        .gym-power-brand {
          font-size: 26px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-shadow: 2px 2px 0 #e11d48;
        }
        .gym-power-link {
          color: #a3a3a3;
          font-size: 15px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .gym-power-link:hover {
          color: #fff;
          transform: scale(1.05);
        }
        .gym-power-cta {
          background: linear-gradient(135deg, #e11d48, #be123c);
          color: white;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 12px 28px;
          clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
          transition: opacity 0.2s;
        }
        .gym-power-cta:hover {
          opacity: 0.9;
        }
        .gym-power-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gym-power-bolt {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 16px solid #e11d48;
          position: relative;
        }
        .gym-power-bolt::after {
          content: '';
          position: absolute;
          top: -8px;
          left: -3px;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 16px solid #e11d48;
        }
      `}</style>
      <nav className="gym-power-nav px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="gym-power-icon">
              <div className="gym-power-bolt" />
            </div>
            <span className="gym-power-brand">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gym-power-link">{link}</a>
            ))}
          </div>

          <button className="gym-power-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
