"use client";

/**
 * Personal Social Hero
 * Social media-inspired layout with profile header, bio, link grid.
 * Instagram/Twitter profile feel. Blue/cyan palette.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    handle: "@nadia.codes",
    name: "Nadia Hassan",
    title: "Frontend Developer",
    bio: "Building pixel-perfect UIs that users love. React, TypeScript, Tailwind. Open to freelance projects.",
    location: "Jeddah, SA",
    website: "nadia.dev",
    stats: [
      { value: "127", label: "Projects" },
      { value: "2.4K", label: "Followers" },
      { value: "890", label: "Following" },
    ],
    links: [
      { label: "Portfolio", emoji: "briefcase", url: "#" },
      { label: "GitHub", emoji: "code", url: "#" },
      { label: "Blog", emoji: "pencil", url: "#" },
      { label: "Resume", emoji: "doc", url: "#" },
      { label: "Contact", emoji: "mail", url: "#" },
      { label: "Calendar", emoji: "cal", url: "#" },
    ],
    cta: "Follow Me",
    verified: true,
  },
  ar: {
    handle: "@nadia.codes",
    name: "نادية حسن",
    title: "مطورة واجهات أمامية",
    bio: "أبني واجهات مثالية البكسل يحبها المستخدمون. React، TypeScript، Tailwind. منفتحة على المشاريع الحرة.",
    location: "جدة، السعودية",
    website: "nadia.dev",
    stats: [
      { value: "١٢٧", label: "مشروع" },
      { value: "٢.٤K", label: "متابع" },
      { value: "٨٩٠", label: "أتابع" },
    ],
    links: [
      { label: "الأعمال", emoji: "briefcase", url: "#" },
      { label: "GitHub", emoji: "code", url: "#" },
      { label: "المدونة", emoji: "pencil", url: "#" },
      { label: "السيرة الذاتية", emoji: "doc", url: "#" },
      { label: "تواصل", emoji: "mail", url: "#" },
      { label: "المواعيد", emoji: "cal", url: "#" },
    ],
    cta: "تابعني",
    verified: true,
  },
};

export function PersonalSocial({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  const emojiIcons: Record<string, React.ReactNode> = {
    briefcase: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
    code: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    pencil: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    doc: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
    mail: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    cal: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes verifiedPop {
          0% { transform: scale(0) rotate(-180deg); }
          60% { transform: scale(1.2) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes linkHover {
          from { transform: translateY(0); }
          to { transform: translateY(-2px); }
        }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .scale-in { animation: scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)" }}
      >
        <div className="relative z-10 w-full max-w-md mx-auto px-4 py-20">
          {/* Profile card */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(6, 182, 212, 0.08), 0 4px 12px rgba(0,0,0,0.04)",
              border: "1px solid rgba(6, 182, 212, 0.08)",
            }}
          >
            {/* Cover/header area */}
            <div
              className="h-28 relative"
              style={{ background: "linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee)" }}
            >
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>

            {/* Avatar */}
            <div className="relative -mt-14 flex justify-center">
              <div
                className="scale-in w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                style={{
                  animationDelay: "0.2s",
                  background: "linear-gradient(135deg, #0e7490, #06b6d4)",
                  border: "4px solid white",
                  boxShadow: "0 4px 16px rgba(6, 182, 212, 0.2)",
                }}
              >
                {isAr ? "ن" : "N"}
              </div>
              {t.verified && (
                <div
                  className="absolute bottom-0 right-1/2 translate-x-10 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center"
                  style={{
                    animation: "verifiedPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both",
                    boxShadow: "0 2px 8px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>

            {/* Profile info */}
            <div className="text-center px-6 pt-3 pb-4">
              <h1 className="fade-up text-xl font-bold text-gray-900" style={{ animationDelay: "0.3s" }}>
                {t.name}
              </h1>
              <p className="fade-up text-sm text-cyan-600 font-medium" style={{ animationDelay: "0.35s" }}>
                {t.handle}
              </p>
              <p className="fade-up text-xs text-gray-400 mt-1" style={{ animationDelay: "0.4s" }}>
                {t.title} · {t.location}
              </p>
            </div>

            {/* Bio */}
            <div className="fade-up px-6 pb-4" style={{ animationDelay: "0.45s" }}>
              <p className="text-sm text-gray-600 text-center leading-relaxed">{t.bio}</p>
            </div>

            {/* Stats */}
            <div
              className="fade-up flex justify-center gap-8 py-4 mx-6"
              style={{
                animationDelay: "0.5s",
                borderTop: "1px solid rgba(0,0,0,0.04)",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              {t.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Follow button */}
            <div className="fade-up px-6 py-4" style={{ animationDelay: "0.55s" }}>
              <a
                href="#"
                className={`group flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white rounded-xl transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #0891b2, #06b6d4)",
                  boxShadow: "0 4px 16px rgba(6, 182, 212, 0.25)",
                }}
              >
                {t.cta}
              </a>
            </div>

            {/* Links grid */}
            <div className="px-6 pb-6 space-y-2">
              {t.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className={`fade-up group flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-sm ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    animationDelay: `${0.6 + i * 0.06}s`,
                    background: "rgba(6, 182, 212, 0.04)",
                    border: "1px solid rgba(6, 182, 212, 0.06)",
                  }}
                >
                  <div className="text-cyan-500">{emojiIcons[link.emoji]}</div>
                  <span className="flex-1 text-sm font-semibold text-gray-700">{link.label}</span>
                  <ArrowRight size={14} className={`text-gray-300 group-hover:text-cyan-500 transition-colors ${isAr ? "rotate-180" : ""}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
