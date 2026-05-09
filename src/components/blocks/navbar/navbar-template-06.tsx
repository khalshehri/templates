"use client";

/**
 * Navbar Template 06 — Double Row
 * Two rows: top row has logo + CTA, bottom row has links
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate06({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        c.sticky ? "sticky top-0" : "relative"
      } ${
        c.transparent
          ? "bg-transparent"
          : "bg-white border-b border-gray-200"
      }`}
    >
      {/* Top Row — Logo + CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--theme-primary)" }}
          >
            {isLogoImage ? (
              <img src={logoText} alt="" className="h-8 object-contain" />
            ) : (
              logoText
            )}
          </a>

          <div className="flex items-center gap-3">
            {c.ctaButton && (
              <a
                href={c.ctaButton?.url || "#"}
                className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaButton.textAr : c.ctaButton.text}
              </a>
            )}

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-100" />

      {/* Bottom Row — Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-center gap-10 h-11">
          {c.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {isAr ? link.labelAr : link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {c.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
            {c.ctaButton && (
              <a
                href={c.ctaButton?.url || "#"}
                className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg sm:hidden"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaButton.textAr : c.ctaButton.text}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
