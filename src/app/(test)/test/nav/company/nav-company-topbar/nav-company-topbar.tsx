"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Premier Holdings",
    links: ["About", "Services", "Industries", "Careers", "Contact"],
    cta: "Get in Touch",
    phone: "+1 (555) 123-4567",
    email: "info@premierholdings.com",
    address: "123 Business Ave, Suite 100",
  },
  ar: {
    brand: "بريمير القابضة",
    links: ["عن الشركة", "الخدمات", "القطاعات", "الوظائف", "اتصل بنا"],
    cta: "تواصل معنا",
    phone: "+966 50 123 4567",
    email: "info@premierholdings.com",
    address: "شارع الأعمال 123، جناح 100",
  },
};

export function NavCompanyTopbar({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .nav-topbar-link {
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-topbar-link:hover { color: #1d4ed8; }
      `}</style>
      <div className={`bg-gray-900 text-gray-400 text-xs px-8 py-2 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <div className={`flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
          <span className={`flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {t.phone}
          </span>
          <span className={`hidden sm:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            {t.email}
          </span>
        </div>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          {["facebook", "twitter", "linkedin"].map((s) => (
            <a key={s} href="#" className="hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                {s === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                {s === "twitter" && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>}
                {s === "linkedin" && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
              </svg>
            </a>
          ))}
        </div>
      </div>
      <nav className={`bg-white border-b border-gray-200 px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between`}>
        <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
        <div className={`hidden md:flex items-center gap-7 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="nav-topbar-link">{link}</a>
          ))}
        </div>
        <button className="bg-blue-700 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
