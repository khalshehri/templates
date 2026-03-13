"use client";

import { useState } from "react";
import Link from "next/link";
import { Hero04 } from "./hero-04";

export default function Page() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-xl border-b border-white/[0.06] px-6 py-3 flex items-center justify-between">
        <Link
          href="/demo"
          className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
        >
          ← Back
        </Link>
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all duration-300 ${language === "en" ? "bg-white text-gray-900 shadow-sm" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ar")}
            className={`px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all duration-300 ${language === "ar" ? "bg-white text-gray-900 shadow-sm" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
          >
            AR
          </button>
        </div>
      </div>
      <Hero04 language={language} />
    </div>
  );
}
