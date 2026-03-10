"use client";
import { useState } from "react";
import Link from "next/link";
import { GymRings } from "./gym-rings";

export default function Page() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/test/home/gym" className="text-gray-400 hover:text-white text-sm">← Back</Link>
          <span className="text-white font-semibold">Olympic Rings</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setLang("en")} className={`px-3 py-1 rounded text-sm ${lang === "en" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}>EN</button>
          <button onClick={() => setLang("ar")} className={`px-3 py-1 rounded text-sm ${lang === "ar" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}>AR</button>
        </div>
      </div>
      <GymRings language={lang} />
    </div>
  );
}
