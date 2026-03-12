"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Meridian",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    copyright: "2026 Meridian Inc.",
  },
  ar: {
    brand: "ميريديان",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    copyright: "2026 ميريديان",
  },
};

export function NavCompanySidebar({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-sidebar-link {
          display: block;
          color: #9ca3af;
          font-size: 15px;
          font-weight: 500;
          padding: 10px 24px;
          transition: color 0.2s, background 0.2s, padding-left 0.2s, padding-right 0.2s;
          border-left: 3px solid transparent;
        }
        [dir="rtl"] .nav-sidebar-link {
          border-left: none;
          border-right: 3px solid transparent;
        }
        .nav-sidebar-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
          border-left-color: #3b82f6;
          padding-left: 28px;
        }
        [dir="rtl"] .nav-sidebar-link:hover {
          border-left-color: transparent;
          border-right-color: #3b82f6;
          padding-left: 24px;
          padding-right: 28px;
        }
        .nav-sidebar-social {
          color: #6b7280;
          transition: color 0.2s;
        }
        .nav-sidebar-social:hover { color: #fff; }
      `}</style>
      <aside className={`fixed ${isAr ? "right-0" : "left-0"} top-0 bottom-0 w-[280px] bg-[#0f0f0f] border-r border-gray-800/50 flex flex-col z-40`} style={isAr ? { borderRight: "none", borderLeft: "1px solid rgba(31,41,55,0.5)" } : {}}>
        <div className="px-6 py-8">
          <span className="text-white font-bold text-2xl tracking-tight">{t.brand}</span>
        </div>
        <nav className="flex-1 py-4">
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-sidebar-link">{link}</a>
          ))}
        </nav>
        <div className="px-6 py-6 border-t border-gray-800/50">
          <div className="flex items-center gap-4 mb-4">
            {["M5 3l14 9-14 9V3z", "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"].map((d, i) => (
              <a key={i} href="#" className="nav-sidebar-social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-xs">&copy; {t.copyright}</p>
        </div>
      </aside>
      {/* Spacer for main content */}
      <div className={`${isAr ? "mr-[280px]" : "ml-[280px]"} p-8`}>
        <p className="text-gray-400 text-sm">Main content area</p>
      </div>
    </>
  );
}
