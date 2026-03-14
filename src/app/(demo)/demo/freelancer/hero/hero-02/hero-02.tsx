"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowRight, FileCode, Folder, Terminal, GitBranch } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine } from "@tsparticles/engine";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [particlesReady, setParticlesReady] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setParticlesReady(true);
  }, []);

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

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // Make everything visible immediately
        gsap.set(".hero02-code-line", { opacity: 1, y: 0 });
        gsap.set(".hero02-terminal-cmd", { opacity: 1 });
        gsap.set(".hero02-terminal-output", { opacity: 1 });
        gsap.set(".hero02-sidebar-item", { opacity: 1, x: 0 });
        gsap.set(".hero02-cursor", { opacity: 1 });
        return;
      }

      const sidebarX = isAr ? 8 : -8;

      // Sidebar items fade in with stagger
      gsap.from(".hero02-sidebar-item", {
        x: sidebarX,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.1,
      });

      // Code lines type in with stagger
      gsap.from(".hero02-code-line", {
        y: 4,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.2,
      });

      // Terminal command fades in after code lines
      gsap.from(".hero02-terminal-cmd", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        delay: 2.2,
      });

      // Terminal output fades in after command
      gsap.from(".hero02-terminal-output", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        delay: 2.8,
      });

      // Cursor blinking with GSAP
      gsap.to(".hero02-cursor", {
        opacity: 0,
        duration: 0.4,
        ease: "steps(1)",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "#1e1e2e",
        fontFamily: fontBody,
      }}
    >
      {/* Particles background */}
      <Particles
        id="hero02-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: { enable: true },
            },
            color: {
              value: ["#a6e3a1", "#89b4fa", "#94e2d5"],
            },
            shape: {
              type: ["circle", "edge"],
            },
            opacity: {
              value: { min: 0.08, max: 0.3 },
              animation: {
                enable: true,
                speed: 0.8,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "top",
              outModes: {
                default: "out",
              },
              straight: true,
              random: true,
            },
            links: {
              enable: false,
            },
          },
          detectRetina: true,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
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
