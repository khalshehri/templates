"use client";

/**
 * Navbar Template 08 — Transparent Dark
 * Dark text on transparent background, designed for light hero sections
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate08({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  return (
    <nav
      className={`w-full z-50 bg-transparent ${
        c.sticky ? "sticky top-0" : "relative"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — bold dark */}
          <a
            href="#"
            className="text-xl font-extrabold tracking-tight text-gray-900"
          >
            {isLogoImage ? (
              <img src={logoText} alt="" className="h-8 object-contain" />
            ) : (
              logoText
            )}
          </a>

          {/* Desktop Links — dark/gray */}
          <div className="hidden md:flex items-center gap-8">
            {c.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
            <a
              href={c.ctaButton.url}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.ctaButton.textAr : c.ctaButton.text}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {c.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
            <a
              href={c.ctaButton.url}
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg"
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.ctaButton.textAr : c.ctaButton.text}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
