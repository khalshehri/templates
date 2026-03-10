"use client";

/**
 * Holographic Terminal Hero
 * A floating 3D terminal window with perspective transform, glowing edges,
 * and holographic scan lines. Animated code deployment sequence with
 * syntax-highlighted lines appearing one by one. Particle field of floating
 * dots behind, with a mirrored reflection below the terminal.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "Developer-First Platform",
    heading: "Ship Faster.",
    headingLine2: "Scale Smarter.",
    subheading:
      "The modern deployment platform that turns your code into production in seconds. Built by developers, for developers.",
    ctaPrimary: "Start Free",
    ctaSecondary: "Read Docs",
    codeLines: [
      { type: "comment", text: "// Deploy to production in one command" },
      { type: "keyword", text: "const " , fn: "deploy", rest: " = await " , fn2: "pipeline", rest2: "({" },
      { type: "prop", text: '  target: ', value: '"production"', comma: "," },
      { type: "prop", text: '  regions: ', value: '["us-east", "eu-west", "ap-south"]', comma: "," },
      { type: "prop", text: '  scaling: ', value: '"auto"', comma: "," },
      { type: "prop", text: '  tests: ', value: "true", comma: "," },
      { type: "close", text: "});" },
      { type: "blank", text: "" },
      { type: "log", text: "▸ Building project.............. ", status: "done ✓" },
      { type: "log", text: "▸ Running 47 tests.............. ", status: "passed ✓" },
      { type: "log", text: "▸ Deploying to 3 regions........ ", status: "live ✓" },
      { type: "success", text: "✦ https://your-app.dev is live" },
    ],
    features: ["Zero-config deploys", "Edge functions", "Auto-scaling", "Real-time logs"],
  },
  ar: {
    badge: "منصة المطورين أولاً",
    heading: "انشر أسرع.",
    headingLine2: "وسّع بذكاء.",
    subheading:
      "منصة النشر الحديثة التي تحول كودك إلى إنتاج في ثوانٍ. بُنيت بواسطة مطورين، للمطورين.",
    ctaPrimary: "ابدأ مجاناً",
    ctaSecondary: "اقرأ التوثيق",
    codeLines: [
      { type: "comment", text: "// نشر إلى الإنتاج بأمر واحد" },
      { type: "keyword", text: "const ", fn: "deploy", rest: " = await ", fn2: "pipeline", rest2: "({" },
      { type: "prop", text: '  target: ', value: '"production"', comma: "," },
      { type: "prop", text: '  regions: ', value: '["us-east", "eu-west", "ap-south"]', comma: "," },
      { type: "prop", text: '  scaling: ', value: '"auto"', comma: "," },
      { type: "prop", text: '  tests: ', value: "true", comma: "," },
      { type: "close", text: "});" },
      { type: "blank", text: "" },
      { type: "log", text: "▸ جارِ البناء.................. ", status: "تم ✓" },
      { type: "log", text: "▸ تشغيل 47 اختبار.............. ", status: "نجح ✓" },
      { type: "log", text: "▸ النشر على 3 مناطق............ ", status: "مباشر ✓" },
      { type: "success", text: "✦ https://your-app.dev مباشر الآن" },
    ],
    features: ["نشر بدون إعدادات", "دوال الحافة", "توسع تلقائي", "سجلات مباشرة"],
  },
};

/* Generate deterministic particle positions */
function getParticles() {
  const particles: { x: number; y: number; size: number; delay: number; duration: number; dx: number; dy: number }[] = [];
  for (let i = 0; i < 28; i++) {
    const seed = i * 137.508; // golden angle
    particles.push({
      x: ((seed * 7.3) % 100),
      y: ((seed * 3.7) % 100),
      size: 1 + (i % 3),
      delay: (i * 0.8) % 6,
      duration: 8 + (i % 5) * 3,
      dx: ((i % 7) - 3) * 12,
      dy: ((i % 5) - 2) * 10,
    });
  }
  return particles;
}

const particles = getParticles();

export function SaasTerminal({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes holoScan {
          0% { top: -2%; }
          100% { top: 102%; }
        }
        @keyframes termFloat {
          0%, 100% { transform: perspective(1200px) rotateX(8deg) rotateY(-3deg) translateY(0px); }
          50% { transform: perspective(1200px) rotateX(6deg) rotateY(-1deg) translateY(-12px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(74,222,128,0.15), 0 0 40px rgba(74,222,128,0.05), inset 0 0 30px rgba(74,222,128,0.03); }
          50% { box-shadow: 0 0 25px rgba(74,222,128,0.3), 0 0 60px rgba(74,222,128,0.1), 0 0 100px rgba(34,211,238,0.05), inset 0 0 40px rgba(74,222,128,0.05); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(74,222,128,0.15); }
          50% { border-color: rgba(74,222,128,0.35); }
        }
        @keyframes codeLine {
          from { opacity: 0; transform: translateX(-16px); filter: blur(4px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes particleDrift {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          25% { opacity: 0.6; }
          50% { transform: translate(var(--dx), var(--dy)); opacity: 0.3; }
          75% { opacity: 0.5; }
        }
        @keyframes dotPulse {
          0%, 100% { r: 1; }
          50% { r: 1.8; }
        }
        @keyframes reflectionShimmer {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.06; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .code-line {
          animation: codeLine 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
          opacity: 0;
        }
        .term-float {
          animation: termFloat 8s ease-in-out infinite, glowPulse 4s ease-in-out infinite, borderGlow 4s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#06080f]">
        {/* Deep radial glow behind terminal */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(74,222,128,0.08) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)",
          }}
        />
        {/* Subtle violet accent top-right */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Particle field */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
          {particles.map((p, i) => (
            <circle
              key={i}
              cx={`${p.x}%`}
              cy={`${p.y}%`}
              r={p.size}
              fill={i % 3 === 0 ? "rgba(34,211,238,0.4)" : i % 3 === 1 ? "rgba(74,222,128,0.35)" : "rgba(139,92,246,0.3)"}
              style={{
                // @ts-expect-error CSS custom properties
                "--dx": `${p.dx}px`,
                "--dy": `${p.dy}px`,
                animation: `particleDrift ${p.duration}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          ))}
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div
              className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.badge}
            </div>

            <h1
              className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}
            >
              {t.heading}
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {t.headingLine2}
              </span>
            </h1>

            <p
              className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              {t.subheading}
            </p>

            {/* CTAs */}
            <div
              className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#"
                className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t.ctaPrimary}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`}
                />
              </a>
              <a
                href="#"
                className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* 3D Floating Terminal */}
          <div className="flex flex-col items-center">
            <div
              className="term-float w-full max-w-2xl rounded-xl border border-emerald-500/20 bg-[#0b0f18]/90 backdrop-blur-sm overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-white/20 font-mono tracking-wide">
                  ~/deploy.ts
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-400/50 font-mono">LIVE</span>
                </div>
              </div>

              {/* Terminal body with code */}
              <div className="relative p-5 font-mono text-[13px] leading-6 min-h-[280px]" dir="ltr">
                {t.codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="code-line"
                    style={{ animationDelay: `${0.6 + i * 0.18}s` }}
                  >
                    {line.type === "comment" && (
                      <span className="text-white/20 italic">{line.text}</span>
                    )}
                    {line.type === "keyword" && (
                      <span>
                        <span className="text-cyan-400">{line.text}</span>
                        <span className="text-orange-400">{line.fn}</span>
                        <span className="text-white/50">{line.rest}</span>
                        <span className="text-orange-400">{line.fn2}</span>
                        <span className="text-white/50">{line.rest2}</span>
                      </span>
                    )}
                    {line.type === "prop" && (
                      <span>
                        <span className="text-white/30">{line.text}</span>
                        <span className="text-emerald-400">{line.value}</span>
                        <span className="text-white/20">{line.comma}</span>
                      </span>
                    )}
                    {line.type === "close" && (
                      <span className="text-white/50">{line.text}</span>
                    )}
                    {line.type === "blank" && <span>&nbsp;</span>}
                    {line.type === "log" && (
                      <span>
                        <span className="text-white/25">{line.text}</span>
                        <span className="text-emerald-400 font-semibold">{line.status}</span>
                      </span>
                    )}
                    {line.type === "success" && (
                      <span className="text-cyan-400 font-bold">{line.text}</span>
                    )}
                  </div>
                ))}

                {/* Blinking cursor */}
                <div
                  className="code-line mt-1"
                  style={{ animationDelay: `${0.6 + t.codeLines.length * 0.18 + 0.3}s` }}
                >
                  <span
                    className="inline-block w-2 h-4 bg-emerald-400/80"
                    style={{ animation: "cursorBlink 1s step-end infinite" }}
                  />
                </div>

                {/* Holographic scan line */}
                <div
                  className="absolute left-0 right-0 h-[2px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(74,222,128,0.25), rgba(34,211,238,0.2), transparent)",
                    animation: "holoScan 3s linear infinite",
                  }}
                />
              </div>
            </div>

            {/* Terminal reflection */}
            <div
              className="w-full max-w-2xl h-24 overflow-hidden pointer-events-none"
              style={{
                transform: "perspective(1200px) rotateX(8deg) rotateY(-3deg) scaleY(-1)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15), transparent 80%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.15), transparent 80%)",
                animation: "reflectionShimmer 6s ease-in-out infinite",
              }}
            >
              <div className="rounded-xl border border-emerald-500/10 bg-[#0b0f18]/50">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.03]">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="p-5 font-mono text-[13px] leading-6 text-white/10" dir="ltr">
                  {t.codeLines.slice(0, 4).map((line, i) => (
                    <div key={i} className="opacity-40">
                      {line.type === "comment" && <span>{line.text}</span>}
                      {line.type === "keyword" && <span>{line.text}{line.fn}{line.rest}{line.fn2}{line.rest2}</span>}
                      {line.type === "prop" && <span>{line.text}{line.value}{line.comma}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature pills */}
          <div
            className="fade-up mt-10 flex items-center justify-center gap-4 flex-wrap"
            style={{ animationDelay: "1s" }}
          >
            {t.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-white/25"
              >
                <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
