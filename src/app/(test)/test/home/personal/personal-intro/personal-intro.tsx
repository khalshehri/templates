"use client";

import { ArrowRight, Github, Linkedin, Twitter, Dribbble, Instagram } from "lucide-react";

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
      { platform: "github", url: "#", angle: 0 },
      { platform: "linkedin", url: "#", angle: 72 },
      { platform: "twitter", url: "#", angle: 144 },
      { platform: "dribbble", url: "#", angle: 216 },
      { platform: "instagram", url: "#", angle: 288 },
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
      { platform: "github", url: "#", angle: 0 },
      { platform: "linkedin", url: "#", angle: 72 },
      { platform: "twitter", url: "#", angle: 144 },
      { platform: "dribbble", url: "#", angle: 216 },
      { platform: "instagram", url: "#", angle: 288 },
    ],
  },
};

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
  instagram: Instagram,
};

export function PersonalIntro({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes dashedSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px 4px rgba(196, 181, 253, 0.3), 0 0 60px 8px rgba(253, 164, 175, 0.15); }
          50% { box-shadow: 0 0 30px 8px rgba(196, 181, 253, 0.5), 0 0 80px 16px rgba(253, 164, 175, 0.25); }
        }
        @keyframes handwritingReveal {
          from { max-width: 0; }
          to { max-width: 600px; }
        }
        @keyframes typewriter {
          from { max-width: 0; }
          to { max-width: 500px; }
        }
        @keyframes blinkCaret {
          0%, 100% { border-color: transparent; }
          50% { border-color: #c4b5fd; }
        }
        @keyframes meshFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }
        @keyframes meshFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 15px) scale(0.95); }
          66% { transform: translate(20px, -25px) scale(1.04); }
        }
        @keyframes meshFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, 20px) scale(1.06); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .orbit-ring { animation: orbitSpin 20s linear infinite; }
        .orbit-icon-counter { animation: orbitSpinReverse 20s linear infinite; }
        .dashed-ring { animation: dashedSpin 30s linear infinite; }
        .glow-ring { animation: glowPulse 3s ease-in-out infinite; }
        .handwriting-reveal {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: handwritingReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;
        }
        .typewriter-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both;
          border-right: 2px solid transparent;
          animation: typewriter 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both,
                     blinkCaret 0.8s step-end 1.2s infinite;
        }
      `}</style>

      <section
        dir={isAr ? "rtl" : "ltr"}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #f5f3ff 30%, #ecfdf5 60%, #fef7ee 100%)" }}
      >
        {/* Gradient mesh background blobs */}
        <div
          className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(196,181,253,0.5) 0%, transparent 70%)",
            animation: "meshFloat1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[50%] right-[10%] w-[350px] h-[350px] rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, rgba(253,164,175,0.5) 0%, transparent 70%)",
            animation: "meshFloat2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[30%] w-[300px] h-[300px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(134,239,172,0.5) 0%, transparent 70%)",
            animation: "meshFloat3 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[5%] right-[30%] w-[250px] h-[250px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(253,224,171,0.6) 0%, transparent 70%)",
            animation: "meshFloat2 18s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="flex flex-col items-center text-center">

            {/* Spotlight Portrait with orbiting icons */}
            <div className="fade-up relative mb-12" style={{ animationDelay: "0.1s" }}>
              {/* Outer glow ring */}
              <div
                className="glow-ring absolute inset-0 rounded-full"
                style={{
                  width: "240px",
                  height: "240px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Orbiting social icons ring */}
              <div
                className="orbit-ring absolute"
                style={{
                  width: "280px",
                  height: "280px",
                  top: "50%",
                  left: "50%",
                  marginTop: "-140px",
                  marginLeft: "-140px",
                }}
              >
                {t.socials.map((social, i) => {
                  const Icon = socialIcons[social.platform] || Github;
                  const angle = social.angle;
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <a
                      key={i}
                      href={social.url}
                      className="orbit-icon-counter absolute w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-lg shadow-purple-500/10 flex items-center justify-center text-gray-500 hover:text-purple-500 hover:scale-125 transition-all duration-300 border border-white/50"
                      style={{
                        top: "50%",
                        left: "50%",
                        marginTop: "-18px",
                        marginLeft: "-18px",
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>

              {/* Middle dashed ring */}
              <div
                className="dashed-ring absolute rounded-full"
                style={{
                  width: "220px",
                  height: "220px",
                  top: "50%",
                  left: "50%",
                  marginTop: "-110px",
                  marginLeft: "-110px",
                  border: "1.5px dashed rgba(196,181,253,0.4)",
                }}
              />

              {/* Inner gradient border ring */}
              <div
                className="relative rounded-full p-[3px]"
                style={{
                  width: "200px",
                  height: "200px",
                  background: "linear-gradient(135deg, #c4b5fd, #fda4af, #86efac, #c4b5fd)",
                }}
              >
                {/* Photo placeholder */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-green-50 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl font-light text-purple-300/70">
                    {isAr ? "ع" : "O"}
                  </span>
                </div>
              </div>
            </div>

            {/* Greeting */}
            <p
              className="fade-up text-sm uppercase tracking-[0.3em] text-purple-400/70 font-medium"
              style={{ animationDelay: "0.3s" }}
            >
              {t.greeting}
            </p>

            {/* Name with handwriting reveal */}
            <div
              className="fade-up mt-2"
              style={{ animationDelay: "0.4s" }}
            >
              <h1 className="handwriting-reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #7c3aed, #db2777, #059669)",
                  }}
                >
                  {t.name}
                </span>
              </h1>
            </div>

            {/* Role with typewriter effect */}
            <div className="mt-3 h-7 flex items-center justify-center">
              <p className="typewriter-text text-base sm:text-lg font-medium text-gray-500">
                {t.role}
              </p>
            </div>

            {/* Decorative line */}
            <div
              className="fade-up mt-6 w-12 h-[2px] rounded-full"
              style={{
                animationDelay: "0.6s",
                background: "linear-gradient(90deg, #c4b5fd, #fda4af)",
              }}
            />

            {/* Bio */}
            <p
              className="fade-up mt-5 text-gray-400 leading-relaxed max-w-md text-sm sm:text-base"
              style={{ animationDelay: "0.65s" }}
            >
              {t.bio}
            </p>

            {/* Location & Experience badges */}
            <div
              className="fade-up mt-5 flex items-center gap-3 flex-wrap justify-center"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 rounded-full border border-purple-100">
                {t.location}
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-pink-600 bg-pink-50 rounded-full border border-pink-100">
                {t.experience}
              </span>
            </div>

            {/* CTAs */}
            <div
              className={`fade-up mt-8 flex items-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/20 ${isAr ? "flex-row-reverse" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #db2777)",
                }}
              >
                {t.cta}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                />
              </a>
              <a
                href="#"
                className="px-7 py-3.5 text-sm font-semibold text-gray-500 bg-white/60 backdrop-blur-sm border border-gray-200/80 rounded-full hover:bg-white hover:border-gray-300 transition-all"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
