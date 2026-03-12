"use client";
import { ArrowRight, Briefcase } from "lucide-react";
interface Props { language: "en" | "ar"; }
const content = {
  en: { badge: "CAREER PROFILE", heading: "Driven by", headingAccent: "Impact", sub: "Product manager who turns ambiguity into clarity. Track record of launching products used by millions.", cta1: "View Resume", cta2: "LinkedIn", stats: [{ value: "15M+", label: "Users Impacted" }, { value: "12", label: "Products Launched" }, { value: "3", label: "Patents Filed" }] },
  ar: { badge: "ملف مهني", heading: "مدفوع", headingAccent: "بالأثر", sub: "مدير منتجات يحوّل الغموض إلى وضوح. سجل حافل بإطلاق منتجات يستخدمها الملايين.", cta1: "اطلع على السيرة", cta2: "LinkedIn", stats: [{ value: "15M+", label: "مستخدم متأثر" }, { value: "12", label: "منتج أُطلق" }, { value: "3", label: "براءات اختراع" }] },
};
export function Hero02({ language }: Props) {
  const t = content[language];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#080808" }}>
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#0ea5e9", top: "40%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 mb-8" style={{ animation: "fadeInUp 0.6s ease-out both" }}>
          <Briefcase className="w-4 h-4 text-sky-400" /><span className="text-xs font-bold text-sky-300 tracking-[0.2em] uppercase">{t.badge}</span>
        </div>
        <h1 className="font-black text-white leading-[0.85] tracking-[-0.04em] mb-6" style={{ fontSize: "clamp(52px, 12vw, 130px)", animation: "fadeInUp 0.6s ease-out 0.1s both" }}>{t.heading}<br /><span style={{ color: "#0ea5e9" }}>{t.headingAccent}</span></h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed" style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}>{t.sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_0_40px_rgba(14,165,233,0.3)]">{t.cta1}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" /></button>
          <button className="px-8 py-4 text-gray-400 hover:text-white font-medium rounded-xl border border-gray-800 hover:border-gray-600 transition-all">{t.cta2}</button>
        </div>
        <div className="flex items-center justify-center gap-10" style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          {t.stats.map((s, i) => (<div key={i} className="text-center"><span className="text-3xl font-black text-sky-400 font-mono">{s.value}</span><span className="block text-xs text-gray-600 mt-1">{s.label}</span></div>))}
        </div>
      </div>
      <style>{`@keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </section>
  );
}
