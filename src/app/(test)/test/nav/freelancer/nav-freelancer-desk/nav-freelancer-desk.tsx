"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Alex M.",
    links: ["About", "Work", "Blog", "Contact"],
    cta: "Hire Me",
    status: "Working on it...",
  },
  ar: {
    brand: "أليكس م.",
    links: ["عني", "أعمالي", "المدونة", "تواصل"],
    cta: "وظفني",
    status: "أعمل عليه...",
  },
};

const icons = [
  /* person */ <svg key="i0" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* briefcase */ <svg key="i1" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 4V2.5A1.5 1.5 0 016.5 1h1A1.5 1.5 0 019 2.5V4" stroke="currentColor" strokeWidth="1.5"/></svg>,
  /* pen */ <svg key="i2" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12l1-4L10.5 1.5 12.5 3.5 6 11l-4 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  /* mail */ <svg key="i3" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
];

export function NavFreelancerDesk({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <nav className="border-b" style={{ backgroundColor: "#2d2d2d", borderColor: "#444" }}>
      <div className={`max-w-6xl mx-auto px-4 py-2 flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
        {/* Toolbar left - brand like window title */}
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-200 font-semibold text-sm">{t.brand}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
            {t.status}
          </span>
        </div>

        {/* Toolbar center - icon nav */}
        <div className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
          {t.links.map((link, i) => (
            <a
              key={link}
              href="#"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded transition-colors"
            >
              <span className="text-gray-500">{icons[i]}</span>
              {link}
            </a>
          ))}
        </div>

        {/* Toolbar right - CTA */}
        <button className="text-xs font-medium px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors">
          {t.cta}
        </button>
      </div>
    </nav>
  );
}
