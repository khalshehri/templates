"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "BLAZE",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "Burn It",
  },
  ar: {
    brand: "بليز",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "احرقها",
  },
};

export function NavGymFlame({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes gym-flame-dance {
          0%, 100% { transform: scaleY(1) translateY(0); }
          25% { transform: scaleY(1.1) translateY(-1px); }
          50% { transform: scaleY(0.9) translateY(1px); }
          75% { transform: scaleY(1.05) translateY(-0.5px); }
        }
        .gym-flame-nav {
          background: linear-gradient(180deg, #1a0a00, #0d0500);
          border-bottom: 2px solid #92400e;
          position: relative;
        }
        .gym-flame-brand {
          font-size: 24px;
          font-weight: 900;
          background: linear-gradient(180deg, #fbbf24, #f97316, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .gym-flame-link {
          color: #78350f;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: all 0.3s;
        }
        .gym-flame-link:hover {
          color: #f97316;
          text-shadow: 0 0 8px rgba(249, 115, 22, 0.3);
        }
        .gym-flame-cta {
          background: linear-gradient(135deg, #f97316, #ef4444, #dc2626);
          color: white;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 10px 24px;
          border-radius: 4px;
          transition: opacity 0.2s;
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
        }
        .gym-flame-cta:hover {
          opacity: 0.9;
        }
        .gym-flame-icon {
          position: relative;
          width: 28px;
          height: 32px;
        }
        .gym-flame-shape {
          position: absolute;
          bottom: 0;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: gym-flame-dance 0.8s ease-in-out infinite;
        }
        .gym-flame-outer {
          width: 24px;
          height: 28px;
          left: 2px;
          background: linear-gradient(180deg, #fbbf24, #f97316, #ef4444);
        }
        .gym-flame-inner {
          width: 14px;
          height: 18px;
          left: 7px;
          bottom: 0;
          background: linear-gradient(180deg, #fef08a, #fbbf24);
          animation-delay: 0.1s;
        }
      `}</style>
      <nav className="gym-flame-nav px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="gym-flame-icon">
              <div className="gym-flame-shape gym-flame-outer" />
              <div className="gym-flame-shape gym-flame-inner" />
            </div>
            <span className="gym-flame-brand">{t.brand}</span>
          </div>

          <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="gym-flame-link">{link}</a>
            ))}
          </div>

          <button className="gym-flame-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
