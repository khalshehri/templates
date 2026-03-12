"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "FORGE",
    links: ["Classes", "Trainers", "Membership", "Contact"],
    cta: "Start Free Trial",
  },
  ar: {
    brand: "فورج",
    links: ["الحصص", "المدربون", "العضوية", "اتصل بنا"],
    cta: "تجربة مجانية",
  },
};

export function NavGymDark({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .gym-dark-nav {
          background: #0a0a0a;
          border-bottom: 1px solid #1a1a1a;
        }
        .gym-dark-brand {
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .gym-dark-link {
          color: #525252;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.2s;
          padding: 6px 12px;
          position: relative;
        }
        .gym-dark-link:hover,
        .gym-dark-link.active {
          color: #e11d48;
        }
        .gym-dark-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 12px;
          right: 12px;
          height: 2px;
          background: #e11d48;
        }
        .gym-dark-cta {
          background: transparent;
          color: #e11d48;
          border: 1px solid #e11d48;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 8px 20px;
          transition: all 0.2s;
        }
        .gym-dark-cta:hover {
          background: #e11d48;
          color: white;
        }
      `}</style>
      <nav className="gym-dark-nav px-6 py-4">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="gym-dark-brand">{t.brand}</span>

          <div className={`hidden md:flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link, i) => (
              <a key={link} href="#" className={`gym-dark-link ${i === 0 ? "active" : ""}`}>{link}</a>
            ))}
          </div>

          <button className="gym-dark-cta">{t.cta}</button>
        </div>
      </nav>
    </>
  );
}
