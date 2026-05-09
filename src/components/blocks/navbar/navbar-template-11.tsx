"use client";

/**
 * Navbar Template 11 — Glassmorphism
 * Frosted glass look with backdrop-blur and white/dark text switching
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate11({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  const textColor = c.transparent ? "text-white" : "text-gray-800";
  const textMuted = c.transparent ? "text-white/70" : "text-gray-500";

  return (
    <nav
      className={`w-full z-50 ${c.sticky ? "sticky top-0" : "relative"}`}
    >
      <div className="mx-4 mt-4">
        <div
          className={`mx-auto max-w-7xl rounded-2xl px-6 py-3 border backdrop-blur-xl ${
            c.transparent
              ? "bg-white/10 border-white/20"
              : "bg-white/60 border-gray-200/40"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className={`text-xl font-bold tracking-tight shrink-0 ${textColor}`}
            >
              {isLogoImage ? (
                <img src={logoText} alt="" className="h-8 object-contain" />
              ) : (
                logoText
              )}
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {c.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className={`text-sm font-medium transition-colors hover:opacity-100 ${textMuted}`}
                >
                  {isAr ? link.labelAr : link.label}
                </a>
              ))}
              {c.ctaButton && (
                <a
                  href={c.ctaButton?.url || "#"}
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? c.ctaButton.textAr : c.ctaButton.text}
                </a>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                c.transparent ? "hover:bg-white/10" : "hover:bg-gray-100"
              } ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div
              className={`md:hidden mt-4 pt-4 border-t pb-2 ${
                c.transparent ? "border-white/20" : "border-gray-200/50"
              }`}
            >
              <div className="space-y-3">
                {c.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className={`block text-sm font-medium py-1.5 ${textMuted}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {isAr ? link.labelAr : link.label}
                  </a>
                ))}
                {c.ctaButton && (
                  <a
                    href={c.ctaButton?.url || "#"}
                    className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl mt-2"
                    style={{ backgroundColor: "var(--theme-primary)" }}
                  >
                    {isAr ? c.ctaButton.textAr : c.ctaButton.text}
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
