"use client";
import { ArrowRight, Handshake } from "lucide-react";
interface Props { language: "en" | "ar"; }
const content = {
  en: { badge: "MEDIATION", heading: "Resolve", headingAccent: "Together", sub: "Alternative dispute resolution and mediation services. Faster, cheaper, fairer.", cta1: "Start Mediation", cta2: "Learn More" },
  ar: { badge: "وساطة", heading: "حل", headingAccent: "معاً", sub: "خدمات حل نزاعات بديلة ووساطة. أسرع وأرخص وأعدل.", cta1: "ابدأ الوساطة", cta2: "اعرف المزيد" },
};
export function Hero10({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#080808" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#22c55e", top: "40%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/10 mb-8" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Handshake className="w-4 h-4" style={{ color: "#22c55e" }} /><span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#22c55e" }}>{t.badge}</span>
        </div>
        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6" style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>{t.heading}<br /><span style={{ color: "#22c55e" }}>{t.headingAccent}</span></h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all" style={{ background: "#22c55e" }}>{t.cta1}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" /></button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>
      </div>
      <style>{`@keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </section>
  );
}
