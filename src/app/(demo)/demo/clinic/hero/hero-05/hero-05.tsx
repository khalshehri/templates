"use client";
import { ArrowRight, Eye } from "lucide-react";
interface Props { language: "en" | "ar"; }
const content = {
  en: { badge: "EYE CENTER", heading: "See The World", headingAccent: "Clearly", sub: "LASIK, cataract surgery, and complete eye care. 50,000+ successful procedures.", cta1: "Free Consultation", cta2: "Learn More" },
  ar: { badge: "مركز عيون", heading: "شاهد العالم", headingAccent: "بوضوح", sub: "ليزك وجراحة مياه بيضاء ورعاية عيون كاملة. 50,000+ عملية ناجحة.", cta1: "استشارة مجانية", cta2: "اعرف المزيد" },
};
export function Hero05({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#080808" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#f97316", top: "40%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f97316]/20 bg-[#f97316]/10 mb-8" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Eye className="w-4 h-4" style={{ color: "#f97316" }} /><span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#f97316" }}>{t.badge}</span>
        </div>
        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6" style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>{t.heading}<br /><span style={{ color: "#f97316" }}>{t.headingAccent}</span></h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_#f9731640]" style={{ background: "#f97316" }}>{t.cta1}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" /></button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>
      </div>
      <style>{`@keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </section>
  );
}
