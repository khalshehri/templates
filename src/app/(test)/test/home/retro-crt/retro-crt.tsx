"use client";

/**
 * Retro CRT Hero
 * Old CRT monitor aesthetic — scanlines, phosphor glow, screen flicker,
 * VHS tracking distortion. Green-on-black terminal feel mixed with
 * glitchy color fringing. A nostalgic digital artifact brought to life.
 */

import { ArrowRight } from "lucide-react";

const content = {
  en: {
    boot: [
      "SYSTEM BOOT v3.7.1",
      "LOADING MODULES......... OK",
      "INITIALIZING DISPLAY.... OK",
      "CONNECTING.............. OK",
    ],
    heading: ["WELCOME TO", "THE FUTURE", "OF DESIGN"],
    sub: "> We don't just build websites. We engineer digital experiences that feel alive, responsive, and unforgettable.",
    cta: "EXECUTE_",
    cta2: "VIEW_SOURCE",
    prompt: "visitor@studio:~$",
    statusBar: "SIGNAL: STRONG | UPTIME: 99.97% | CLIENTS: WORLDWIDE | MODE: CREATIVE",
  },
  ar: {
    boot: [
      "تشغيل النظام الإصدار ٣.٧.١",
      "تحميل الوحدات......... تم",
      "تهيئة العرض........... تم",
      "جارٍ الاتصال........... تم",
    ],
    heading: ["مرحباً بك في", "مستقبل", "التصميم"],
    sub: "> لا نبني مواقع فحسب. نهندس تجارب رقمية تنبض بالحياة وتترك أثراً لا يُنسى.",
    cta: "تنفيذ_",
    cta2: "عرض_المصدر",
    prompt: "زائر@استوديو:~$",
    statusBar: "الإشارة: قوية | التشغيل: ٩٩.٩٧٪ | العملاء: عالمياً | الوضع: إبداعي",
  },
};

export function RetroCrt({ language }: { language: "en" | "ar" }) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.8; }
          94% { opacity: 1; }
          96% { opacity: 0.9; }
          97% { opacity: 1; }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(34,197,94,0.5), 0 0 20px rgba(34,197,94,0.3); }
          50% { text-shadow: 0 0 15px rgba(34,197,94,0.7), 0 0 30px rgba(34,197,94,0.4), 0 0 50px rgba(34,197,94,0.2); }
        }
        @keyframes bootLine {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 1px); }
          40% { transform: translate(2px, -1px); }
          60% { transform: translate(-1px, -2px); }
          80% { transform: translate(1px, 2px); }
        }
        @keyframes chromatic {
          0%, 100% { text-shadow: -2px 0 #ff0000, 2px 0 #00ffff, 0 0 10px rgba(34,197,94,0.5); }
          25% { text-shadow: 2px 0 #ff0000, -2px 0 #00ffff, 0 0 10px rgba(34,197,94,0.5); }
          50% { text-shadow: -1px 1px #ff0000, 1px -1px #00ffff, 0 0 10px rgba(34,197,94,0.5); }
          75% { text-shadow: 1px -1px #ff0000, -1px 1px #00ffff, 0 0 10px rgba(34,197,94,0.5); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes vhsTrack {
          0%, 100% { clip-path: inset(0 0 0 0); }
          5% { clip-path: inset(10% 0 85% 0); }
          10% { clip-path: inset(0 0 0 0); }
          15% { clip-path: inset(80% 0 5% 0); }
          20% { clip-path: inset(0 0 0 0); }
        }
        .crt-screen {
          animation: flicker 5s linear infinite;
        }
        .boot-line { animation: bootLine 0.3s ease-out both; }
        .crt-heading {
          animation: textGlow 3s ease-in-out infinite, chromatic 4s ease-in-out infinite;
          font-family: 'Courier New', 'Courier', monospace;
        }
        .crt-fade { animation: fadeIn 0.5s ease-out both; }
        .cursor-blink::after {
          content: '█';
          animation: cursorBlink 1s step-end infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* CRT screen effect wrapper */}
        <div className="crt-screen absolute inset-0">
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none z-30" style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }} />

          {/* Moving scanline bar */}
          <div
            className="absolute left-0 right-0 h-16 pointer-events-none z-30 opacity-[0.06]"
            style={{
              background: "linear-gradient(transparent, rgba(34,197,94,0.3), transparent)",
              animation: "scanline 6s linear infinite",
            }}
          />

          {/* Screen vignette */}
          <div className="absolute inset-0 z-20 pointer-events-none" style={{
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)",
          }} />

          {/* Screen curvature effect */}
          <div className="absolute inset-0 z-20 pointer-events-none rounded-[40px]" style={{
            boxShadow: "inset 0 0 120px rgba(0,0,0,0.5)",
          }} />

          {/* Phosphor green ambient */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            background: "radial-gradient(ellipse at center, rgba(34,197,94,0.3) 0%, transparent 70%)",
          }} />
        </div>

        {/* Content */}
        <div className={`relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full ${isAr ? "text-right" : "text-left"}`}>
          {/* Boot sequence */}
          <div className="mb-10 font-mono text-xs space-y-1">
            {t.boot.map((line, i) => (
              <div
                key={i}
                className="boot-line text-green-500/40"
                style={{ animationDelay: `${0.1 + i * 0.2}s` }}
              >
                {line}
              </div>
            ))}
          </div>

          {/* Terminal prompt */}
          <div
            className="crt-fade font-mono text-sm text-green-400/50 mb-6 flex items-center gap-2"
            style={{ animationDelay: "1s" }}
          >
            <span>{t.prompt}</span>
            <span className="cursor-blink text-green-400" />
          </div>

          {/* Heading */}
          <h1 className="leading-[0.85] mb-8">
            {t.heading.map((line, i) => (
              <span
                key={i}
                className={`crt-heading crt-fade block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black ${
                  i === 1 ? "text-green-400" : "text-green-500/80"
                }`}
                style={{ animationDelay: `${1.2 + i * 0.15}s` }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p
            className="crt-fade font-mono text-sm text-green-500/30 max-w-xl leading-relaxed"
            style={{ animationDelay: "1.7s" }}
          >
            {t.sub}
          </p>

          {/* CTAs */}
          <div
            className={`crt-fade mt-10 flex gap-4 ${isAr ? "flex-row-reverse" : ""}`}
            style={{ animationDelay: "1.9s" }}
          >
            <a
              href="#"
              className={`group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold font-mono uppercase tracking-widest text-black bg-green-400 hover:bg-green-300 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] ${isAr ? "flex-row-reverse" : ""}`}
            >
              {t.cta}
              <ArrowRight size={14} className={`transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#"
              className="px-8 py-4 text-sm font-bold font-mono uppercase tracking-widest text-green-400/50 border border-green-500/20 hover:border-green-500/40 hover:text-green-400/70 transition-all"
            >
              {t.cta2}
            </a>
          </div>

          {/* Status bar */}
          <div
            className="crt-fade mt-16 pt-4 border-t border-green-500/10"
            style={{ animationDelay: "2.1s" }}
          >
            <div className="font-mono text-[10px] text-green-500/15 tracking-widest uppercase">
              {t.statusBar}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
