"use client";

import { useState } from "react";
import Link from "next/link";
import { ResumeTimeline } from "./resume-timeline";

export default function ResumeTimelineTestPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/test/home/resume" className="text-gray-400 hover:text-white text-sm">← Back</Link>
          <span className="text-white font-semibold">Career Timeline</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLanguage("en")} className={`px-3 py-1 rounded text-sm transition-colors ${language === "en" ? "bg-violet-600 text-white" : "bg-gray-800 text-gray-400"}`}>EN</button>
          <button onClick={() => setLanguage("ar")} className={`px-3 py-1 rounded text-sm transition-colors ${language === "ar" ? "bg-violet-600 text-white" : "bg-gray-800 text-gray-400"}`}>AR</button>
        </div>
      </div>
      <ResumeTimeline language={language} />
    </div>
  );
}
