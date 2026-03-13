"use client";
import { useState } from "react";
import Link from "next/link";
import { Hero09 } from "./hero-09";

export default function Page() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <Link href="/demo" className="text-gray-400 hover:text-white text-sm">
          ← Back
        </Link>
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${language === "en" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ar")}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${language === "ar" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
          >
            AR
          </button>
        </div>
      </div>
      <Hero09 language={language} />
    </div>
  );
}
