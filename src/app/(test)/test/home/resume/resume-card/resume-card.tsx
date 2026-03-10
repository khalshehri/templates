"use client";

/**
 * Resume Card -- Resume Hero Template
 *
 * 3D business card floating in space with subtle rotation.
 * Front shows name/photo placeholder, back shows skills.
 * Elegant floating card with depth and shadow.
 *
 * @category Resume
 * @palette violet (#7C3AED), indigo (#4F46E5), slate (#1E293B), white (#F8FAFC)
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    name: "Sarah Chen",
    role: "Product Designer",
    email: "sarah@design.co",
    phone: "+1 (555) 012-3456",
    location: "San Francisco, CA",
    skills: ["UI/UX Design", "Figma", "Prototyping", "Design Systems", "User Research"],
    heading: "Crafting Digital Experiences",
    subheading:
      "A product designer with 6 years of experience creating intuitive, user-centered designs for startups and enterprises alike.",
    cta: "Get in Touch",
    secondary: "View Portfolio",
    flipHint: "Hover to see skills",
  },
  ar: {
    name: "سارة أحمد",
    role: "مصممة منتجات",
    email: "sara@design.co",
    phone: "+966 55 012 3456",
    location: "الرياض، السعودية",
    skills: ["تصميم واجهات", "فيجما", "نماذج أولية", "أنظمة تصميم", "بحث المستخدم"],
    heading: "صناعة تجارب رقمية",
    subheading:
      "مصممة منتجات بخبرة ٦ سنوات في إنشاء تصاميم بديهية تركز على المستخدم للشركات الناشئة والمؤسسات.",
    cta: "تواصل معي",
    secondary: "عرض الأعمال",
    flipHint: "مرر للرؤية المهارات",
  },
};

export function ResumeCard({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #1A1035 0%, #0F0A1F 50%, #080510 100%)",
      }}
    >
      {/* Ambient light blobs */}
      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          top: "10%",
          left: "20%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "300px",
          height: "300px",
          bottom: "20%",
          right: "15%",
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* 3D Card */}
        <div
          className="relative flex-shrink-0 group"
          style={{
            width: "340px",
            height: "200px",
            perspective: "1000px",
          }}
        >
          <div
            className="absolute inset-0 transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              animation: "cardFloat 6s ease-in-out infinite",
            }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)",
                boxShadow: "0 20px 60px rgba(124,58,237,0.3), 0 0 0 1px rgba(124,58,237,0.1)",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                {/* Avatar placeholder */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{
                    backgroundColor: "rgba(124,58,237,0.3)",
                    border: "2px solid rgba(167,139,250,0.4)",
                    color: "#C4B5FD",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                {/* Decorative logo */}
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(167,139,250,0.3)",
                  }}
                >
                  <span style={{ color: "#A78BFA", fontSize: "12px" }}>&#9670;</span>
                </div>
              </div>

              {/* Bottom info */}
              <div>
                <div className="text-lg font-bold" style={{ color: "#F8FAFC" }}>
                  {t.name}
                </div>
                <div className="text-sm" style={{ color: "#A78BFA" }}>
                  {t.role}
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs" style={{ color: "rgba(167,139,250,0.6)" }}>
                  <span>{t.email}</span>
                </div>
              </div>
            </div>

            {/* Back face (rotated) */}
            <div
              className="absolute inset-0 rounded-2xl p-6"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "linear-gradient(135deg, #312E81 0%, #4338CA 50%, #4F46E5 100%)",
                boxShadow: "0 20px 60px rgba(124,58,237,0.3)",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#A78BFA" }}>
                Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {t.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "rgba(167,139,250,0.15)",
                      color: "#C4B5FD",
                      border: "1px solid rgba(167,139,250,0.2)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-xs" style={{ color: "rgba(167,139,250,0.5)" }}>
                {t.location}
              </div>
            </div>
          </div>

          {/* Flip hint */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs"
            style={{ color: "rgba(167,139,250,0.4)" }}
          >
            {t.flipHint}
          </div>
        </div>

        {/* Text content */}
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: "rgba(124,58,237,0.1)",
              color: "#A78BFA",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            {t.role}
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            style={{
              color: "#F8FAFC",
              background: "linear-gradient(135deg, #F8FAFC 0%, #A78BFA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.heading}
          </h1>

          <p
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "rgba(203,213,225,0.7)" }}
          >
            {t.subheading}
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm" style={{ color: "rgba(167,139,250,0.6)" }}>
            <span>{t.email}</span>
            <span>|</span>
            <span>{t.phone}</span>
            <span>|</span>
            <span>{t.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #6366F1)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              }}
            >
              {t.cta}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                style={{ transform: isRTL ? "scaleX(-1)" : undefined }}
              />
            </button>
            <button
              className="px-7 py-3 rounded-xl text-sm font-semibold transition-colors"
              style={{ color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              {t.secondary}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cardFloat {
          0%, 100% {
            transform: rotateY(0deg) rotateX(5deg) translateY(0);
          }
          25% {
            transform: rotateY(10deg) rotateX(-2deg) translateY(-10px);
          }
          50% {
            transform: rotateY(180deg) rotateX(3deg) translateY(-5px);
          }
          75% {
            transform: rotateY(190deg) rotateX(-3deg) translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}
