"use client";
import { ArrowRight, FileText } from "lucide-react";
interface Props { language: "en" | "ar"; }
const content = {
  en: { badge: "PERSONAL RESUME", heading: "Hello, I'm", headingAccent: "Alex Chen", sub: "Senior Product Designer with 10+ years crafting digital experiences for Fortune 500 companies. Currently open to new opportunities.", cta1: "Download CV", cta2: "Contact Me", experience: [{ role: "Lead Designer", company: "Google", years: "2020–Present" }, { role: "Sr. Designer", company: "Apple", years: "2016–2020" }, { role: "Designer", company: "Airbnb", years: "2013–2016" }] },
  ar: { badge: "سيرة ذاتية", heading: "مرحباً، أنا", headingAccent: "أحمد الشهري", sub: "مصمم منتجات أول بخبرة 10+ سنوات في صناعة تجارب رقمية لشركات Fortune 500. متاح حالياً لفرص جديدة.", cta1: "حمّل السيرة", cta2: "تواصل معي", experience: [{ role: "مصمم رئيسي", company: "Google", years: "2020–الآن" }, { role: "مصمم أول", company: "Apple", years: "2016–2020" }, { role: "مصمم", company: "Airbnb", years: "2013–2016" }] },
};
export function Hero01({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "#060606" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none" style={{ background: "#6366f1", top: "30%", right: "15%" }} />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div style={{ animation: "fadeInUp 0.6s ease-out both" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-8">
              <FileText className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-300 tracking-[0.2em] uppercase">{t.badge}</span>
            </div>
            <h1 className="leading-[0.9] tracking-[-0.03em] mb-6" style={{ fontSize: "clamp(44px, 8vw, 88px)" }}>
              <span className="text-gray-400 font-light">{t.heading}</span><br />
              <span className="font-black text-white">{t.headingAccent}</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">{t.sub}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">{t.cta1}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" /></button>
              <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
            </div>
          </div>
          <div className="space-y-4" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
            {t.experience.map((e, i) => (
              <div key={i} className="p-4 rounded-xl border border-indigo-500/10 bg-indigo-500/[0.03]" style={{ animation: `fadeInUp 0.4s ease-out ${0.3 + i * 0.1}s both` }}>
                <h3 className="text-white font-semibold">{e.role}</h3>
                <p className="text-sm text-indigo-400">{e.company}</p>
                <p className="text-xs text-gray-600 font-mono">{e.years}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </section>
  );
}
