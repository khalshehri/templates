"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus",
    brandFull: "Nexus Corp",
    links: [
      { label: "Dashboard", icon: "grid" },
      { label: "About Us", icon: "info" },
      { label: "Services", icon: "briefcase" },
      { label: "Portfolio", icon: "image" },
      { label: "Blog", icon: "file-text" },
      { label: "Contact", icon: "mail" },
    ],
    cta: "Get Started",
    copyright: "2026 Nexus Corp",
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633",
    brandFull: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    links: [
      { label: "\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645", icon: "grid" },
      { label: "\u0645\u0646 \u0646\u062d\u0646", icon: "info" },
      { label: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", icon: "briefcase" },
      { label: "\u0627\u0644\u0645\u0639\u0631\u0636", icon: "image" },
      { label: "\u0627\u0644\u0645\u062f\u0648\u0646\u0629", icon: "file-text" },
      { label: "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627", icon: "mail" },
    ],
    cta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646",
    copyright: "2026 \u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
  },
};

function NavIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    grid: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    info: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    briefcase: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    image: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    "file-text": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    mail: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  };
  return <>{icons[name] || null}</>;
}

export function NavCorpSidebar({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-sidebar {
          width: 240px;
          min-height: 100vh;
          background: #0f172a;
          display: flex;
          flex-direction: column;
        }
        .nav-sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          color: rgba(255,255,255,0.55);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.15s;
          border-radius: 0;
          position: relative;
        }
        .nav-sidebar-link:hover {
          color: #fff;
          background: rgba(37, 99, 235, 0.12);
        }
        .nav-sidebar-link:hover::before {
          content: '';
          position: absolute;
          top: 0;
          ${isAr ? "right" : "left"}: 0;
          width: 3px;
          height: 100%;
          background: #2563eb;
          border-radius: 0 2px 2px 0;
        }
        .nav-sidebar-cta {
          background: #2563eb;
          color: #fff;
          transition: all 0.2s;
          width: 100%;
        }
        .nav-sidebar-cta:hover {
          background: #1d4ed8;
        }
        .nav-sidebar-brand {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
      `}</style>
      <div className={`flex ${isAr ? "flex-row-reverse" : ""}`}>
        <aside className="nav-sidebar" style={{ direction: isAr ? "rtl" : "ltr" }}>
          {/* Brand */}
          <div className="nav-sidebar-brand px-5 py-5 flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm">{t.brandFull}</div>
              <div className="text-gray-500 text-xs">Enterprise</div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex-1 py-4 flex flex-col gap-0.5">
            {t.links.map((link) => (
              <a key={link.label} href="#" className="nav-sidebar-link">
                <NavIcon name={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="p-4 border-t border-white/[0.06]">
            <button className="nav-sidebar-cta text-sm font-semibold py-2.5 rounded-lg">
              {t.cta}
            </button>
            <p className="text-gray-600 text-[10px] text-center mt-3">
              &copy; {t.copyright}
            </p>
          </div>
        </aside>

        {/* Page content placeholder */}
        <div className="flex-1 bg-gray-50 p-8">
          <div className="max-w-lg">
            <div className="h-6 w-48 bg-gray-200 rounded mb-3" />
            <div className="h-4 w-96 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-72 bg-gray-200 rounded mb-6" />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 bg-gray-200 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
