"use client";

/**
 * Navbar Template 10 — Gradient Bar
 * Full-width gradient background from theme-primary to theme-secondary with white text
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate10({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  return (
    <nav
      className={`w-full z-50 ${c.sticky ? "sticky top-0" : "relative"}`}
      style={{
        background: "linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — white */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-white shrink-0"
          >
            {isLogoImage ? (
              <img src={logoText} alt="" className="h-8 object-contain" />
            ) : (
              logoText
            )}
          </a>

          {/* Desktop Links — white */}
          <div className="hidden md:flex items-center gap-8">
            {c.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
            <a
              href={c.ctaButton.url}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-full transition-all hover:opacity-90 bg-white"
              style={{ color: "var(--theme-primary)" }}
            >
              {isAr ? c.ctaButton.textAr : c.ctaButton.text}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/20">
          <div className="px-4 py-4 space-y-3">
            {c.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="block text-sm font-medium text-white/80 hover:text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
            <a
              href={c.ctaButton.url}
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold rounded-full bg-white"
              style={{ color: "var(--theme-primary)" }}
            >
              {isAr ? c.ctaButton.textAr : c.ctaButton.text}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
