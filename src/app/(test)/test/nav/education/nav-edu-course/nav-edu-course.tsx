"use client";
import { useState } from "react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    brand: "CourseVault",
    links: ["Programs", "Faculty", "Research", "Apply"],
    browse: "Browse Courses",
    badge: "200+",
    badgeLabel: "courses",
    cta: "Sign Up Free",
    categories: ["Computer Science", "Business", "Design", "Engineering", "Mathematics", "Languages"],
  },
  ar: {
    brand: "خزنة الدورات",
    links: ["البرامج", "هيئة التدريس", "البحث العلمي", "التقديم"],
    browse: "تصفح الدورات",
    badge: "+200",
    badgeLabel: "دورة",
    cta: "سجّل مجاناً",
    categories: ["علوم الحاسب", "إدارة أعمال", "تصميم", "هندسة", "رياضيات", "لغات"],
  },
};

export function NavEduCourse({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <style>{`
        .nav-edu-course-dropdown {
          animation: navEduCourseSlide 0.2s ease-out;
        }
        @keyframes navEduCourseSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-edu-course-cat {
          transition: background 0.15s, color 0.15s;
        }
        .nav-edu-course-cat:hover {
          background: #7c3aed;
          color: #fff;
        }
      `}</style>
      <nav className={`bg-white shadow-sm px-8 py-4 flex items-center ${isAr ? "flex-row-reverse" : ""} justify-between relative`}>
        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
            </svg>
          </div>
          <span className="text-gray-900 font-bold text-lg">{t.brand}</span>
          <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-0.5 rounded-full">
            {t.badge} {t.badgeLabel}
          </span>
        </div>
        <div className={`hidden md:flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={`flex items-center gap-1 text-violet-700 text-sm font-semibold hover:text-violet-900 transition-colors ${isAr ? "flex-row-reverse" : ""}`}
            >
              {t.browse}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {showDropdown && (
              <div className={`nav-edu-course-dropdown absolute top-full mt-2 ${isAr ? "right-0" : "left-0"} bg-white border border-gray-200 rounded-xl shadow-lg p-3 w-56 z-50`}>
                {t.categories.map((cat, i) => (
                  <a key={i} href="#" className="nav-edu-course-cat block px-3 py-2 rounded-lg text-sm text-gray-700">
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>
          {t.links.map((link, i) => (
            <a key={i} href="#" className="text-gray-600 hover:text-violet-700 text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>
        <button className="bg-violet-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 transition-colors">
          {t.cta}
        </button>
      </nav>
    </>
  );
}
