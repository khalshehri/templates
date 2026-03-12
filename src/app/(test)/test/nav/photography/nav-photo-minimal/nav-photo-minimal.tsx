"use client";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "Jane Smith",
    links: ["Portfolio", "About", "Contact"],
    cta: "",
  },
  ar: {
    brand: "جين سميث",
    links: ["المعرض", "من نحن", "اتصل بنا"],
    cta: "",
  },
};

export function NavPhotoMinimal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        .minimal-photo-link {
          transition: opacity 0.3s ease;
          opacity: 0.5;
        }
        .minimal-photo-link:hover {
          opacity: 1;
        }
      `}</style>
      <nav className="px-6 py-8">
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isAr ? "flex-row-reverse" : ""}`}>
          <span className="text-gray-900 text-2xl font-light tracking-[0.1em]">{t.brand}</span>

          <div className={`flex items-center gap-8 ${isAr ? "flex-row-reverse" : ""}`}>
            {t.links.map((link) => (
              <a key={link} href="#" className="minimal-photo-link text-gray-900 text-sm font-light tracking-wider uppercase">
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
