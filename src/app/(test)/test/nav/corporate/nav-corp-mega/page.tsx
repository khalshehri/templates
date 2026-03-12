"use client";
import { useState } from "react";
import Link from "next/link";
import { NavCorpMega } from "./nav-corp-mega";

export default function NavCorpMegaTestPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/test/nav/corporate" className="text-gray-400 hover:text-white text-sm">
            &larr; Back
          </Link>
          <span className="text-white font-semibold">Nav Corp Mega</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded text-sm transition-colors ${language === "en" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ar")}
            className={`px-3 py-1 rounded text-sm transition-colors ${language === "ar" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
          >
            AR
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100">
        <NavCorpMega language={language} />
        <div className="p-8 text-center text-gray-400 text-sm mt-20">
          Hover over &quot;Services&quot; to see the mega menu dropdown
        </div>
      </div>
    </div>
  );
}
