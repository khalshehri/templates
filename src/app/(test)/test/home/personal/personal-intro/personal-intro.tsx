"use client";

import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    greeting: "Hey, I'm",
    name: "Omar Hassan",
    role: "Full-Stack Developer & UI Designer",
    bio: "I build beautiful, performant web applications and design user experiences that people love. Currently open for freelance work and collaborations.",
    cta: "Let's Work Together",
    ctaSecondary: "View My Work",
    location: "Riyadh, Saudi Arabia",
    experience: "5+ years experience",
    socials: [
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "mail", url: "#" },
    ],
  },
  ar: {
    greeting: "مرحباً، أنا",
    name: "عمر حسن",
    role: "مطور Full-Stack ومصمم واجهات",
    bio: "أبني تطبيقات ويب جميلة وعالية الأداء وأصمم تجارب مستخدم يحبها الناس. متاح حالياً للعمل الحر والتعاون.",
    cta: "لنعمل معاً",
    ctaSecondary: "شاهد أعمالي",
    location: "الرياض، المملكة العربية السعودية",
    experience: "+5 سنوات خبرة",
    socials: [
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "mail", url: "#" },
    ],
  },
};

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function PersonalIntro({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes borderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30">
        {/* Soft blobs */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-cyan-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-200/15 rounded-full blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            {/* Photo side */}
            <div className={`flex justify-center ${isAr ? "lg:order-2" : ""}`}>
              <div className="fade-up relative" style={{ animationDelay: "0.1s" }}>
                {/* Gradient spinning border */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                      animation: "borderSpin 8s linear infinite",
                      padding: "3px",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-50 to-blue-50" />
                  </div>
                  {/* Photo placeholder */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl font-bold text-gray-400">
                    {isAr ? "ع" : "O"}
                  </div>
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -bottom-2 -right-2 bg-white shadow-lg rounded-xl px-3 py-2 border border-gray-100"
                  style={{ animation: "float 4s ease-in-out infinite" }}
                >
                  <span className="text-xs font-semibold text-gray-700">{t.experience}</span>
                </div>
                <div
                  className="absolute -top-2 -left-2 bg-white shadow-lg rounded-xl px-3 py-2 border border-gray-100"
                  style={{ animation: "float 4s ease-in-out 1s infinite" }}
                >
                  <span className="text-xs text-gray-500">{t.location}</span>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className={isAr ? "lg:order-1 text-right" : ""}>
              <p
                className="fade-up text-lg text-gray-400"
                style={{ animationDelay: "0.2s" }}
              >
                {t.greeting}
              </p>

              <h1
                className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mt-1"
                style={{ animationDelay: "0.3s" }}
              >
                {t.name}
              </h1>

              <p
                className="fade-up text-lg text-cyan-600 font-medium mt-2"
                style={{ animationDelay: "0.35s" }}
              >
                {t.role}
              </p>

              <p
                className="fade-up mt-6 text-gray-500 leading-relaxed max-w-md"
                style={{ animationDelay: "0.4s" }}
              >
                {t.bio}
              </p>

              {/* Social icons */}
              <div
                className={`fade-up mt-6 flex gap-3 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                {t.socials.map((social, i) => {
                  const Icon = socialIcons[social.platform] || Mail;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              {/* CTAs */}
              <div
                className={`fade-up mt-8 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="#"
                  className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  {t.cta}
                  <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href="#" className="px-7 py-3.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:border-gray-400 transition-all">
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
