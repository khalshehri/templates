"use client";

import { ArrowRight, FileCode, Folder, Terminal, GitBranch } from "lucide-react";

const content = {
  en: {
    titleBar: "portfolio.tsx — John Doe",
    tabs: ["about.tsx", "skills.json", "contact.ts"],
    name: "John Doe",
    role: "Senior Frontend Engineer",
    experience: "10+ years",
    passion: "Building pixel-perfect UIs",
    commentWhatIDo: "// What I do",
    commentLine1: "// About me",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "GraphQL"],
    terminalCmd: "$ npm run career -- --available=true",
    terminalOutput: "Ready for new projects",
    ctaFn: "hire",
    ctaText: "Let's Build Together",
    sidebarBranch: "main",
  },
  ar: {
    titleBar: "portfolio.tsx — جون دو",
    tabs: ["about.tsx", "skills.json", "contact.ts"],
    name: "جون دو",
    role: "مهندس واجهات أمامية أول",
    experience: "+10 سنوات",
    passion: "بناء واجهات مثالية البكسل",
    commentWhatIDo: "// ماذا أفعل",
    commentLine1: "// نبذة عني",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "GraphQL"],
    terminalCmd: "$ npm run career -- --available=true",
    terminalOutput: "Ready for new projects",
    ctaFn: "hire",
    ctaText: "لنبني معاً",
    sidebarBranch: "main",
  },
};

const fileTree = [
  { type: "folder", name: "src", depth: 0 },
  { type: "folder", name: "components", depth: 1 },
  { type: "file", name: "Hero.tsx", depth: 2 },
  { type: "file", name: "Skills.tsx", depth: 2 },
  { type: "folder", name: "pages", depth: 1 },
  { type: "file", name: "about.tsx", depth: 2, active: true },
  { type: "file", name: "contact.ts", depth: 2 },
  { type: "file", name: "config.json", depth: 1 },
];

export function Hero02({ language }: { language: "en" | "ar" }) {
  const t = content[language];
  const isAr = language === "ar";
  const fontHeading = isAr ? "var(--font-changa)" : "var(--font-inter)";
  const fontBody = isAr ? "var(--font-tajawal)" : "var(--font-inter)";
  const fontMono = "'Menlo', 'Monaco', 'Courier New', monospace";

  const codeLines = [
    { type: "comment", text: t.commentLine1 },
    { type: "keyword", prefix: "const ", name: "developer", equals: true, opening: "{" },
    { type: "property", key: "name", value: `"${t.name}"`, isName: true },
    { type: "property", key: "role", value: `"${t.role}"` },
    { type: "property", key: "experience", value: `"${t.experience}"` },
    { type: "property", key: "passion", value: `"${t.passion}"` },
    { type: "closing", text: "};" },
    { type: "empty" },
    { type: "comment", text: t.commentWhatIDo },
    {
      type: "array",
      prefix: "const ",
      name: "skills",
      values: t.skills,
    },
    { type: "empty" },
    { type: "export", fnName: t.ctaFn, ctaText: t.ctaText },
  ];

  return (
    <>
      <style>{`
        @keyframes hero02-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes hero02-typeCode {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero02-terminalType {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes hero02-terminalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero02-sidebarFade {
          from { opacity: 0; transform: translateX(${isAr ? "8px" : "-8px"}); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hero02-cursor {
          animation: hero02-blink 0.8s step-end infinite;
        }

        .hero02-code-line {
          opacity: 0;
          animation: hero02-typeCode 0.3s ease-out forwards;
        }
        .hero02-code-line:nth-child(1) { animation-delay: 0.2s; }
        .hero02-code-line:nth-child(2) { animation-delay: 0.35s; }
        .hero02-code-line:nth-child(3) { animation-delay: 0.5s; }
        .hero02-code-line:nth-child(4) { animation-delay: 0.65s; }
        .hero02-code-line:nth-child(5) { animation-delay: 0.8s; }
        .hero02-code-line:nth-child(6) { animation-delay: 0.95s; }
        .hero02-code-line:nth-child(7) { animation-delay: 1.1s; }
        .hero02-code-line:nth-child(8) { animation-delay: 1.25s; }
        .hero02-code-line:nth-child(9) { animation-delay: 1.4s; }
        .hero02-code-line:nth-child(10) { animation-delay: 1.55s; }
        .hero02-code-line:nth-child(11) { animation-delay: 1.7s; }
        .hero02-code-line:nth-child(12) { animation-delay: 1.85s; }

        .hero02-terminal-cmd {
          opacity: 0;
          animation: hero02-terminalFade 0.3s ease-out 2.2s forwards;
        }
        .hero02-terminal-output {
          opacity: 0;
          animation: hero02-terminalFade 0.3s ease-out 2.8s forwards;
        }

        .hero02-sidebar-item {
          opacity: 0;
          animation: hero02-sidebarFade 0.3s ease-out forwards;
        }
        .hero02-sidebar-item:nth-child(1) { animation-delay: 0.1s; }
        .hero02-sidebar-item:nth-child(2) { animation-delay: 0.18s; }
        .hero02-sidebar-item:nth-child(3) { animation-delay: 0.26s; }
        .hero02-sidebar-item:nth-child(4) { animation-delay: 0.34s; }
        .hero02-sidebar-item:nth-child(5) { animation-delay: 0.42s; }
        .hero02-sidebar-item:nth-child(6) { animation-delay: 0.50s; }
        .hero02-sidebar-item:nth-child(7) { animation-delay: 0.58s; }
        .hero02-sidebar-item:nth-child(8) { animation-delay: 0.66s; }

        @media (prefers-reduced-motion: reduce) {
          .hero02-cursor { animation: none; opacity: 1; }
          .hero02-code-line { animation: none; opacity: 1; transform: none; }
          .hero02-terminal-cmd { animation: none; opacity: 1; }
          .hero02-terminal-output { animation: none; opacity: 1; }
          .hero02-sidebar-item { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

      <section
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: "#1e1e2e",
          fontFamily: fontBody,
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* IDE Window */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(205, 214, 244, 0.08)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(205, 214, 244, 0.05)",
            }}
          >
            {/* Title Bar */}
            <div
              style={{
                height: "36px",
                backgroundColor: "#11111b",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px",
                borderBottom: "1px solid rgba(205, 214, 244, 0.06)",
              }}
            >
              {/* Window dots */}
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#f38ba8" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#fab387" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#a6e3a1" }} />
              </div>
              {/* Title */}
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: "12px",
                  color: "#6c7086",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {t.titleBar}
              </span>
              {/* Spacer */}
              <div style={{ width: 52 }} />
            </div>

            {/* Tab Bar */}
            <div
              style={{
                height: "38px",
                backgroundColor: "#11111b",
                display: "flex",
                alignItems: "flex-end",
                paddingLeft: isAr ? undefined : "200px",
                paddingRight: isAr ? "200px" : undefined,
                borderBottom: "1px solid rgba(205, 214, 244, 0.06)",
              }}
              className="hidden md:flex"
            >
              {t.tabs.map((tab, i) => (
                <div
                  key={tab}
                  style={{
                    padding: "8px 16px",
                    fontFamily: fontMono,
                    fontSize: "12px",
                    color: i === 0 ? "#cdd6f4" : "#6c7086",
                    backgroundColor: i === 0 ? "#1e1e2e" : "transparent",
                    borderTop: i === 0 ? "2px solid #89b4fa" : "2px solid transparent",
                    borderRight: "1px solid rgba(205, 214, 244, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                  }}
                >
                  <FileCode style={{ width: 14, height: 14, color: i === 0 ? "#89b4fa" : "#6c7086" }} />
                  {tab}
                </div>
              ))}
            </div>
            {/* Mobile tab bar */}
            <div
              style={{
                height: "38px",
                backgroundColor: "#11111b",
                display: "flex",
                alignItems: "flex-end",
                borderBottom: "1px solid rgba(205, 214, 244, 0.06)",
              }}
              className="flex md:hidden"
            >
              {t.tabs.map((tab, i) => (
                <div
                  key={tab}
                  style={{
                    padding: "8px 12px",
                    fontFamily: fontMono,
                    fontSize: "11px",
                    color: i === 0 ? "#cdd6f4" : "#6c7086",
                    backgroundColor: i === 0 ? "#1e1e2e" : "transparent",
                    borderTop: i === 0 ? "2px solid #89b4fa" : "2px solid transparent",
                    borderRight: "1px solid rgba(205, 214, 244, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    cursor: "pointer",
                  }}
                >
                  <FileCode style={{ width: 12, height: 12, color: i === 0 ? "#89b4fa" : "#6c7086" }} />
                  {tab}
                </div>
              ))}
            </div>

            {/* Main Area */}
            <div style={{ display: "flex", backgroundColor: "#1e1e2e" }}>
              {/* Sidebar — hidden on mobile */}
              <div
                className="hidden md:flex"
                style={{
                  width: "200px",
                  minWidth: "200px",
                  backgroundColor: "#181825",
                  borderRight: isAr ? undefined : "1px solid rgba(205, 214, 244, 0.06)",
                  borderLeft: isAr ? "1px solid rgba(205, 214, 244, 0.06)" : undefined,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "12px 0",
                }}
              >
                {/* File Tree */}
                <div>
                  <div
                    style={{
                      padding: "4px 16px 8px",
                      fontFamily: fontMono,
                      fontSize: "11px",
                      color: "#6c7086",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Explorer
                  </div>
                  {fileTree.map((item, i) => (
                    <div
                      key={i}
                      className="hero02-sidebar-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "3px 16px",
                        paddingLeft: isAr ? undefined : `${16 + item.depth * 16}px`,
                        paddingRight: isAr ? `${16 + item.depth * 16}px` : undefined,
                        fontFamily: fontMono,
                        fontSize: "12px",
                        color: item.active ? "#cdd6f4" : "#6c7086",
                        backgroundColor: item.active ? "rgba(137, 180, 250, 0.08)" : "transparent",
                        cursor: "pointer",
                      }}
                    >
                      {item.type === "folder" ? (
                        <Folder style={{ width: 14, height: 14, color: "#89b4fa" }} />
                      ) : (
                        <FileCode
                          style={{
                            width: 14,
                            height: 14,
                            color: item.active ? "#a6e3a1" : "#6c7086",
                          }}
                        />
                      )}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom: Git + Terminal */}
                <div
                  style={{
                    padding: "8px 16px",
                    borderTop: "1px solid rgba(205, 214, 244, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: fontMono,
                      fontSize: "11px",
                      color: "#a6e3a1",
                      cursor: "pointer",
                    }}
                  >
                    <GitBranch style={{ width: 12, height: 12 }} />
                    <span>{t.sidebarBranch}</span>
                  </div>
                  <Terminal
                    style={{ width: 12, height: 12, color: "#6c7086", cursor: "pointer" }}
                  />
                </div>
              </div>

              {/* Editor Area */}
              <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                {/* Code Area */}
                <div
                  style={{
                    flex: 1,
                    padding: "20px 0",
                    minHeight: "420px",
                  }}
                >
                  {codeLines.map((line, i) => {
                    const lineNum = i + 1;
                    return (
                      <div
                        key={i}
                        className="hero02-code-line"
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          fontFamily: fontMono,
                          fontSize: "14px",
                          lineHeight: "2",
                          minHeight: "28px",
                          paddingLeft: isAr ? undefined : "8px",
                          paddingRight: isAr ? "8px" : undefined,
                        }}
                      >
                        {/* Line Number */}
                        <span
                          style={{
                            width: "48px",
                            minWidth: "48px",
                            textAlign: isAr ? "left" : "right",
                            paddingRight: isAr ? undefined : "20px",
                            paddingLeft: isAr ? "20px" : undefined,
                            color: "#6c7086",
                            fontSize: "12px",
                            userSelect: "none",
                          }}
                        >
                          {lineNum}
                        </span>

                        {/* Code Content */}
                        <div
                          style={{
                            flex: 1,
                            direction: "ltr",
                            textAlign: "left",
                          }}
                        >
                          {renderCodeLine(line, i === codeLines.length - 1, fontHeading)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Terminal Panel */}
                <div
                  style={{
                    borderTop: "1px solid rgba(205, 214, 244, 0.06)",
                    backgroundColor: "#11111b",
                    padding: "12px 20px",
                  }}
                >
                  {/* Terminal header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Terminal style={{ width: 12, height: 12, color: "#6c7086" }} />
                    <span
                      style={{
                        fontFamily: fontMono,
                        fontSize: "11px",
                        color: "#6c7086",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Terminal
                    </span>
                  </div>
                  {/* Command */}
                  <div
                    className="hero02-terminal-cmd"
                    style={{
                      fontFamily: fontMono,
                      fontSize: "13px",
                      color: "#cdd6f4",
                      direction: "ltr",
                      textAlign: "left",
                    }}
                  >
                    {t.terminalCmd}
                  </div>
                  {/* Output */}
                  <div
                    className="hero02-terminal-output"
                    style={{
                      fontFamily: fontMono,
                      fontSize: "13px",
                      color: "#a6e3a1",
                      marginTop: "4px",
                      direction: "ltr",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ marginRight: "6px" }}>&#10003;</span>
                    {t.terminalOutput}
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div
              style={{
                height: "24px",
                backgroundColor: "#181825",
                borderTop: "1px solid rgba(205, 214, 244, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 12px",
                fontFamily: fontMono,
                fontSize: "11px",
                color: "#6c7086",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#89b4fa" }}>
                  <GitBranch style={{ width: 11, height: 11, display: "inline", verticalAlign: "middle" }} />{" "}
                  main
                </span>
                <span>TypeScript React</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span>UTF-8</span>
                <span>LF</span>
                <span>Ln 12, Col 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface CodeLine {
  type: string;
  text?: string;
  prefix?: string;
  name?: string;
  equals?: boolean;
  opening?: string;
  key?: string;
  value?: string;
  isName?: boolean;
  values?: string[];
  fnName?: string;
  ctaText?: string;
}

function renderCodeLine(line: CodeLine, isLast: boolean, fontHeading: string) {
  const cursor = isLast ? (
    <span
      className="hero02-cursor"
      style={{
        display: "inline-block",
        width: "8px",
        height: "16px",
        backgroundColor: "#cdd6f4",
        marginLeft: "2px",
        verticalAlign: "text-bottom",
      }}
    />
  ) : null;

  switch (line.type) {
    case "comment":
      return (
        <span>
          <span style={{ color: "#6c7086", fontStyle: "italic" }}>{line.text}</span>
          {cursor}
        </span>
      );

    case "keyword":
      return (
        <span>
          <span style={{ color: "#89b4fa" }}>{line.prefix}</span>
          <span style={{ color: "#cdd6f4" }}>{line.name}</span>
          <span style={{ color: "#89b4fa" }}> = </span>
          <span style={{ color: "#cdd6f4" }}>{line.opening}</span>
          {cursor}
        </span>
      );

    case "property":
      return (
        <span style={{ paddingLeft: "24px", display: "inline-block" }}>
          <span style={{ color: "#89b4fa" }}>{line.key}</span>
          <span style={{ color: "#cdd6f4" }}>: </span>
          {line.isName ? (
            <span
              style={{
                color: "#a6e3a1",
                fontFamily: fontHeading,
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                lineHeight: "1.3",
                display: "inline",
              }}
            >
              {line.value}
            </span>
          ) : (
            <span style={{ color: "#a6e3a1" }}>{line.value}</span>
          )}
          <span style={{ color: "#cdd6f4" }}>,</span>
          {cursor}
        </span>
      );

    case "closing":
      return (
        <span>
          <span style={{ color: "#cdd6f4" }}>{line.text}</span>
          {cursor}
        </span>
      );

    case "empty":
      return <span>{cursor}&nbsp;</span>;

    case "array":
      return (
        <span>
          <span style={{ color: "#89b4fa" }}>{line.prefix}</span>
          <span style={{ color: "#cdd6f4" }}>{line.name}</span>
          <span style={{ color: "#89b4fa" }}> = </span>
          <span style={{ color: "#cdd6f4" }}>[</span>
          {line.values?.map((v, vi) => (
            <span key={vi}>
              <span style={{ color: "#a6e3a1" }}>&quot;{v}&quot;</span>
              {vi < (line.values?.length ?? 0) - 1 && (
                <span style={{ color: "#cdd6f4" }}>, </span>
              )}
            </span>
          ))}
          <span style={{ color: "#cdd6f4" }}>];</span>
          {cursor}
        </span>
      );

    case "export":
      return (
        <span>
          <span style={{ color: "#89b4fa" }}>export default </span>
          <span style={{ color: "#89b4fa" }}>function </span>
          <span style={{ color: "#f38ba8" }}>{line.fnName}</span>
          <span style={{ color: "#cdd6f4" }}>() {"{"}</span>
          <br />
          <span style={{ paddingLeft: "24px", display: "inline-block" }}>
            <span style={{ color: "#89b4fa" }}>return </span>
            <span style={{ color: "#cdd6f4" }}>&lt;</span>
            <span style={{ color: "#f38ba8" }}>Button</span>
            <span style={{ color: "#cdd6f4" }}>&gt;</span>
            <span style={{ color: "#a6e3a1" }}>{line.ctaText}</span>
            <span style={{ color: "#cdd6f4" }}>&lt;/</span>
            <span style={{ color: "#f38ba8" }}>Button</span>
            <span style={{ color: "#cdd6f4" }}>&gt;</span>
          </span>
          <br />
          <span style={{ color: "#cdd6f4" }}>{"}"}</span>
          {cursor}
        </span>
      );

    default:
      return cursor;
  }
}
