"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Studio Tools",
    links: ["Work", "Studio", "Team", "Contact"],
    cta: "New Project",
  },
  ar: {
    brand: "أدوات الاستوديو",
    links: ["أعمالنا", "الاستوديو", "الفريق", "اتصل بنا"],
    cta: "مشروع جديد",
  },
};

const toolIcons = [
  "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z M12 9v6 M9 12h6", // eye (Work)
  "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", // layers (Studio)
  "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", // users (Team)
  "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6", // mail (Contact)
];

export function NavAgencyStudio({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-studio {
          background: #1a1a1a;
          border-bottom: 1px solid #2a2a2a;
        }
        .nav-studio-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 8px 16px;
          border-radius: 8px;
          transition: background 0.15s;
          cursor: pointer;
        }
        .nav-studio-btn:hover {
          background: #2a2a2a;
        }
        .nav-studio-btn span {
          font-size: 10px;
          color: #6b7280;
          font-weight: 500;
          transition: color 0.15s;
        }
        .nav-studio-btn:hover span {
          color: #d1d5db;
        }
        .nav-studio-btn svg {
          color: #6b7280;
          transition: color 0.15s;
        }
        .nav-studio-btn:hover svg {
          color: #e5e7eb;
        }
        .nav-studio-divider {
          width: 1px;
          height: 28px;
          background: #2a2a2a;
          margin: 0 4px;
        }
        .nav-studio-new {
          background: #2563eb;
          transition: background 0.2s;
        }
        .nav-studio-new:hover {
          background: #1d4ed8;
        }
      `}</style>
      <nav className={`nav-studio px-4 py-2 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
            </svg>
          </div>
          <span className="text-gray-300 font-semibold text-sm">{t.brand}</span>
        </div>

        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <div key={i} className={`flex items-center ${isAr ? "flex-row-reverse" : ""}`}>
              <button className="nav-studio-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={toolIcons[i]} />
                </svg>
                <span>{link}</span>
              </button>
              {i < t.links.length - 1 && <div className="nav-studio-divider" />}
            </div>
          ))}
        </div>

        <button className={`nav-studio-new text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          {t.cta}
        </button>
      </nav>
    </>
  );
}
