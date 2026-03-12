"use client";

/**
 * Pipeline Hero
 * CI/CD / workflow automation aesthetic.
 * Background: #080808. Accent: orange #f97316.
 */

import { ArrowRight, GitBranch } from "lucide-react";

interface Props { language: "en" | "ar"; }

const content = {
  en: {
    badge: "WORKFLOW AUTOMATION",
    heading: "Automate",
    headingAccent: "The Boring Stuff",
    sub: "Visual workflow builder. Drag, connect, deploy. Automate any business process in minutes without writing a single line of code.",
    cta1: "Build a Workflow",
    cta2: "Templates",
    steps: [
      { num: "1", title: "Trigger", desc: "Form submit, webhook, schedule" },
      { num: "2", title: "Process", desc: "Transform, filter, enrich" },
      { num: "3", title: "Action", desc: "Send, create, update, notify" },
    ],
  },
  ar: {
    badge: "أتمتة سير العمل",
    heading: "أتمِت",
    headingAccent: "الأشياء المملة",
    sub: "منشئ سير عمل بصري. اسحب، اربط، انشر. أتمت أي عملية أعمال في دقائق بدون كتابة سطر كود واحد.",
    cta1: "ابنِ سير عمل",
    cta2: "القوالب",
    steps: [
      { num: "1", title: "المحفز", desc: "نموذج، webhook، جدول" },
      { num: "2", title: "المعالجة", desc: "تحويل، تصفية، إثراء" },
      { num: "3", title: "الإجراء", desc: "أرسل، أنشئ، حدّث، أشعر" },
    ],
  },
};

export function Hero07({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#080808" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "#f97316", top: "30%", right: "15%" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8">
              <GitBranch className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-mono font-bold text-orange-300 tracking-[0.15em] uppercase">{t.badge}</span>
            </div>

            <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 88px)" }}>
              {t.heading}<br />
              <span style={{ color: "#f97316" }}>{t.headingAccent}</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">{t.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                {t.cta1}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>

          {/* Pipeline steps */}
          <div className="space-y-4" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            {t.steps.map((s, i) => (
              <div key={i}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-orange-500/10 bg-orange-500/[0.03]"
                  style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.15}s both` }}>
                  <span className="text-2xl font-black text-orange-500/30 font-mono">{s.num}</span>
                  <div>
                    <h3 className="text-white font-semibold">{s.title}</h3>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
                {i < t.steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-orange-500/15" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
