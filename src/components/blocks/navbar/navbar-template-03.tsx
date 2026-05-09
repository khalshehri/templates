"use client";

/**
 * Navbar Template 03 — Centered Logo, Glass Style
 * Floating glass bar with centered logo, links on both sides
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate03({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [open, setOpen] = useState(false);
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  const links = c.links;
  const leftLinks = links.slice(0, Math.ceil(links.length / 2));
  const rightLinks = links.slice(Math.ceil(links.length / 2));

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-sm shadow-black/5 px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left links — desktop */}
            <div className={`hidden lg:flex items-center gap-8 flex-1 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
              {leftLinks.map((link, i) => (
                link && (
                  <a
                    key={i}
                    href={link.url || "#"}
                    className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
                  >
                    {isAr ? link.labelAr : link.label}
                  </a>
                )
              ))}
            </div>

            {/* Center — Logo */}
            <a
              href="/"
              className="text-xl font-bold tracking-tight shrink-0 px-6"
              style={{ color: "var(--theme-primary)" }}
            >
              {isLogoImage ? (
                <img src={logoText} alt="" className="h-8 object-contain" />
              ) : (
                logoText
              )}
            </a>

            {/* Right links + CTA — desktop */}
            <div className={`hidden lg:flex items-center gap-8 flex-1 justify-end ${isAr ? "flex-row-reverse" : ""}`}>
              {rightLinks.map((link, i) => (
                link && (
                  <a
                    key={i}
                    href={link.url || "#"}
                    className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
                  >
                    {isAr ? link.labelAr : link.label}
                  </a>
                )
              ))}
              {c.ctaButton && (
                <a
                  href={c.ctaButton?.url || "#"}
                  className="px-5 py-2 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? c.ctaButton?.textAr : c.ctaButton?.text}
                </a>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100 pb-2">
              <div className="flex flex-col gap-3">
                {links.map((link, i) => (
                  link && (
                    <a
                      key={i}
                      href={link.url || "#"}
                      className={`text-sm text-gray-600 hover:text-gray-900 font-medium py-1 ${isAr ? "text-right" : ""}`}
                    >
                      {isAr ? link.labelAr : link.label}
                    </a>
                  )
                ))}
                {c.ctaButton && (
                  <a
                    href={c.ctaButton?.url || "#"}
                    className="mt-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl text-center"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {isAr ? c.ctaButton?.textAr : c.ctaButton?.text}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
