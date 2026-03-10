"use client";

/**
 * API Documentation Hero
 * Side-by-side request/response code blocks with syntax highlighting.
 * HTTP method badges, endpoint URL bar, and response status indicators.
 * Developer documentation feel with clean, technical aesthetic.
 */

import { ArrowRight } from "lucide-react";

interface Props {
  language: "en" | "ar";
}

const content = {
  en: {
    badge: "RESTful API",
    heading: "Build with Our",
    headingHighlight: "API First",
    subheading:
      "Comprehensive API documentation with SDKs in every language. Ship integrations in minutes, not months.",
    ctaPrimary: "Get API Key",
    ctaSecondary: "Read Docs",
    endpointUrl: "https://api.platform.dev/v2/users",
    method: "GET",
    requestTitle: "Request",
    responseTitle: "Response",
    requestLines: [
      { type: "keyword", text: "curl", rest: " -X GET \\" },
      { type: "url", text: '  "https://api.platform.dev/v2/users"', rest: " \\" },
      { type: "header", key: '  -H "Authorization:', value: ' Bearer sk_live_...abc"', rest: " \\" },
      { type: "header", key: '  -H "Content-Type:', value: ' application/json"' },
    ],
    responseLines: [
      { type: "bracket", text: "{" },
      { type: "prop", key: '  "status"', value: ': 200,' },
      { type: "prop", key: '  "data"', value: ": [" },
      { type: "nested", key: '    { "id"', value: ': "usr_1a2b3c",' },
      { type: "nested", key: '      "name"', value: ': "Khalid Ahmed",' },
      { type: "nested", key: '      "plan"', value: ': "enterprise"' },
      { type: "close", text: "    }," },
      { type: "close", text: "    ..." },
      { type: "close", text: "  ]," },
      { type: "prop", key: '  "total"', value: ": 1247" },
      { type: "bracket", text: "}" },
    ],
    sdks: ["Node.js", "Python", "Go", "Ruby", "PHP", "Java"],
  },
  ar: {
    badge: "واجهة برمجة RESTful",
    heading: "ابنِ باستخدام",
    headingHighlight: "الواجهة أولاً",
    subheading:
      "توثيق شامل للواجهة مع حزم SDK بكل لغة. أطلق التكاملات في دقائق، وليس أشهر.",
    ctaPrimary: "احصل على مفتاح API",
    ctaSecondary: "اقرأ التوثيق",
    endpointUrl: "https://api.platform.dev/v2/users",
    method: "GET",
    requestTitle: "الطلب",
    responseTitle: "الاستجابة",
    requestLines: [
      { type: "keyword", text: "curl", rest: " -X GET \\" },
      { type: "url", text: '  "https://api.platform.dev/v2/users"', rest: " \\" },
      { type: "header", key: '  -H "Authorization:', value: ' Bearer sk_live_...abc"', rest: " \\" },
      { type: "header", key: '  -H "Content-Type:', value: ' application/json"' },
    ],
    responseLines: [
      { type: "bracket", text: "{" },
      { type: "prop", key: '  "status"', value: ': 200,' },
      { type: "prop", key: '  "data"', value: ": [" },
      { type: "nested", key: '    { "id"', value: ': "usr_1a2b3c",' },
      { type: "nested", key: '      "name"', value: ': "خالد أحمد",' },
      { type: "nested", key: '      "plan"', value: ': "enterprise"' },
      { type: "close", text: "    }," },
      { type: "close", text: "    ..." },
      { type: "close", text: "  ]," },
      { type: "prop", key: '  "total"', value: ": 1247" },
      { type: "bracket", text: "}" },
    ],
    sdks: ["Node.js", "Python", "Go", "Ruby", "PHP", "Java"],
  },
};

export function SaasApi({ language }: Props) {
  const isAr = language === "ar";
  const t = content[language];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes codeLine {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .code-line { animation: codeLine 0.4s cubic-bezier(0.22, 1, 0.36, 1) both; opacity: 0; }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08061a]">
        {/* Dot grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        {/* Accent glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm font-medium mb-8"
              style={{ animationDelay: "0.1s" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              {t.badge}
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              style={{ animationDelay: "0.2s" }}>
              {t.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h1>

            <p className="fade-up mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.3s" }}>
              {t.subheading}
            </p>

            <div className="fade-up mt-8 flex items-center justify-center gap-4"
              style={{ animationDelay: "0.4s" }}>
              <a href="#" className={`group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}>
                {t.ctaPrimary}
                <ArrowRight size={16} className={`transition-transform group-hover:translate-x-0.5 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href="#" className="px-7 py-3.5 text-sm font-semibold text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Endpoint URL bar */}
          <div className="fade-up max-w-3xl mx-auto mb-6" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-violet-500/15 bg-white/[0.02]" dir="ltr">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 font-mono">{t.method}</span>
              <span className="text-sm text-white/40 font-mono truncate">{t.endpointUrl}</span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "statusPulse 2s ease-in-out infinite" }} />
                <span className="text-[10px] text-emerald-400/60 font-mono">200 OK</span>
              </span>
            </div>
          </div>

          {/* Side-by-side code blocks */}
          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto" style={{ animationDelay: "0.6s" }}>
            {/* Request */}
            <div className="rounded-xl border border-violet-500/15 bg-[#0b0f1a]/80 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-semibold text-violet-300">{t.requestTitle}</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
              </div>
              <div className="p-4 font-mono text-[12px] sm:text-[13px] leading-6" dir="ltr">
                {t.requestLines.map((line, i) => (
                  <div key={i} className="code-line" style={{ animationDelay: `${0.7 + i * 0.15}s` }}>
                    {line.type === "keyword" && (
                      <span><span className="text-violet-400 font-bold">{line.text}</span><span className="text-white/40">{line.rest}</span></span>
                    )}
                    {line.type === "url" && (
                      <span><span className="text-emerald-400">{line.text}</span><span className="text-white/40">{line.rest}</span></span>
                    )}
                    {line.type === "header" && (
                      <span><span className="text-white/30">{line.key}</span><span className="text-purple-300">{line.value}</span><span className="text-white/40">{line.rest || ""}</span></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Response */}
            <div className="rounded-xl border border-violet-500/15 bg-[#0b0f1a]/80 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="text-xs font-semibold text-emerald-300">{t.responseTitle}</span>
                <span className="text-[10px] text-emerald-400/50 font-mono">application/json</span>
              </div>
              <div className="p-4 font-mono text-[12px] sm:text-[13px] leading-6" dir="ltr">
                {t.responseLines.map((line, i) => (
                  <div key={i} className="code-line" style={{ animationDelay: `${0.9 + i * 0.1}s` }}>
                    {line.type === "bracket" && <span className="text-white/50">{line.text}</span>}
                    {line.type === "prop" && (
                      <span><span className="text-purple-300">{line.key}</span><span className="text-white/40">{line.value}</span></span>
                    )}
                    {line.type === "nested" && (
                      <span><span className="text-purple-300">{line.key}</span><span className="text-emerald-400">{line.value}</span></span>
                    )}
                    {line.type === "close" && <span className="text-white/30">{line.text}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SDK badges */}
          <div className="fade-up mt-10 flex items-center justify-center gap-3 flex-wrap" style={{ animationDelay: "1.2s" }}>
            {t.sdks.map((sdk, i) => (
              <span key={i} className="px-3 py-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] text-xs text-white/30 font-mono">
                {sdk}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
