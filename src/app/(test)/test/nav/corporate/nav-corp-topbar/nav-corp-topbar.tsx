"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Nexus Corp",
    links: ["Home", "About", "Services", "Contact"],
    cta: "Get Started",
    phone: "+1 (800) 555-0199",
    email: "info@nexuscorp.com",
    topCta: "Schedule a Demo",
  },
  ar: {
    brand: "\u0646\u0643\u0633\u0633 \u0643\u0648\u0631\u0628",
    links: ["\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "\u0645\u0646 \u0646\u062d\u0646", "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627"],
    cta: "\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646",
    phone: "+966 55 000 0199",
    email: "info@nexuscorp.sa",
    topCta: "\u0627\u062d\u062c\u0632 \u0639\u0631\u0636",
  },
};

export function NavCorpTopbar({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-topbar-strip {
          background: #0f1d3a;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nav-topbar-strip a, .nav-topbar-strip span {
          color: rgba(255,255,255,0.6);
          font-size: 0.75rem;
          transition: color 0.2s;
        }
        .nav-topbar-strip a:hover {
          color: #93c5fd;
        }
        .nav-topbar-main {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .nav-topbar-link {
          color: #374151;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
          padding: 4px 0;
        }
        .nav-topbar-link:hover {
          color: #2563eb;
        }
        .nav-topbar-cta {
          background: #2563eb;
          color: #fff;
          transition: all 0.2s;
        }
        .nav-topbar-cta:hover {
          background: #1d4ed8;
        }
        .nav-topbar-social {
          color: rgba(255,255,255,0.5);
          transition: color 0.2s;
        }
        .nav-topbar-social:hover {
          color: #93c5fd;
        }
        .nav-topbar-demo {
          background: rgba(37, 99, 235, 0.3);
          color: #93c5fd;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 10px;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .nav-topbar-demo:hover {
          background: rgba(37, 99, 235, 0.5);
          color: #fff;
        }
      `}</style>
      <div style={{ direction: isAr ? "rtl" : "ltr" }}>
        {/* Top info strip */}
        <div className={`nav-topbar-strip w-full px-8 py-2 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
            <a href="#" className={`flex items-center gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
              </svg>
              <span>{t.phone}</span>
            </a>
            <a href="#" className={`flex items-center gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{t.email}</span>
            </a>
          </div>
          <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* Social icons */}
            <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
              {["twitter", "linkedin", "facebook"].map((social) => (
                <a key={social} href="#" className="nav-topbar-social">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    {social === "twitter" && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />}
                    {social === "linkedin" && <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />}
                    {social === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                  </svg>
                </a>
              ))}
            </div>
            <a href="#" className="nav-topbar-demo">{t.topCta}</a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className={`nav-topbar-main w-full px-8 py-4 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">{t.brand}</span>
          </div>
          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="nav-topbar-link">{link}</a>
            ))}
          </div>
          <button className="nav-topbar-cta text-sm font-semibold px-5 py-2.5 rounded-lg">
            {t.cta}
          </button>
        </nav>
      </div>
    </>
  );
}
