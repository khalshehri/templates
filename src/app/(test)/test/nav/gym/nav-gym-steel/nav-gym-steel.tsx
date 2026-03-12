"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "STEELWORKS",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "Forge Ahead",
  },
  ar: {
    brand: "ستيل ووركس",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "انطلق",
  },
};

export function NavGymSteel({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .gym-steel-nav {
          background: linear-gradient(180deg, #2a2a2e, #1e1e22, #2a2a2e);
          border-bottom: 1px solid #3a3a40;
          border-top: 1px solid #3a3a40;
          position: relative;
        }
        .gym-steel-nav::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.03) 20%,
            rgba(255,255,255,0.05) 40%,
            rgba(255,255,255,0.03) 60%,
            rgba(255,255,255,0) 100%
          );
          pointer-events: none;
        }
        .gym-steel-brand {
          font-size: 20px;
          font-weight: 900;
          background: linear-gradient(180deg, #d4d4d8, #71717a, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .gym-steel-link {
          color: #71717a;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.2s;
          padding: 6px 14px;
          border: 1px solid transparent;
        }
        .gym-steel-link:hover {
          color: #d4d4d8;
          border-color: #3a3a40;
          background: rgba(255,255,255,0.03);
        }
        .gym-steel-cta {
          background: linear-gradient(180deg, #52525b, #3f3f46);
          color: #e4e4e7;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 10px 22px;
          border: 1px solid #52525b;
          transition: all 0.2s;
        }
        .gym-steel-cta:hover {
          background: linear-gradient(180deg, #71717a, #52525b);
          border-color: #71717a;
        }
        .gym-steel-bolt {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #71717a, #3f3f46);
          border: 1px solid #52525b;
          flex-shrink: 0;
        }
      `}</style>
      <nav className="gym-steel-nav px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="gym-steel-bolt" />
            <span className="gym-steel-brand">{t.brand}</span>
            <div className="gym-steel-bolt" />
          </div>

          <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gym-steel-link">{link}</a>
            ))}
          </div>

          <button className="gym-steel-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
