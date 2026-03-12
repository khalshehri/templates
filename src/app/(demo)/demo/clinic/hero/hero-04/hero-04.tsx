"use client";
import { ArrowRight, Baby } from "lucide-react";
interface Props { language: "en" | "ar"; }
const content = {
  en: { badge: "WOMEN'S HEALTH", heading: "Empowering", headingAccent: "Women's Wellness", sub: "Comprehensive women's health services from adolescence through menopause and beyond.", cta1: "Schedule Visit", cta2: "Learn More" },
  ar: { badge: "صحة المرأة", heading: "تمكين", headingAccent: "صحة المرأة", sub: "خدمات صحة المرأة الشاملة من المراهقة وحتى سن اليأس وما بعده.", cta1: "حدد موعداً", cta2: "اعرف المزيد" },
};
export function Hero04({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#080808" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#ec4899", top: "40%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ec4899]/20 bg-[#ec4899]/10 mb-8" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Baby className="w-4 h-4" style={{ color: "#ec4899" }} /><span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#ec4899" }}>{t.badge}</span>
        </div>
        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6" style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>{t.heading}<br /><span style={{ color: "#ec4899" }}>{t.headingAccent}</span></h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_#ec489940]" style={{ background: "#ec4899" }}>{t.cta1}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" /></button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>
      </div>
      <style>{`@keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </section>
  );
}
