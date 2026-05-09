"use client";

/**
 * Navbar Template 12 — Minimal Underline
 * Ultra-clean: no background on links, just text with 2px underline on hover
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate12({ config, language }: BlockProps) {
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
        c.transparent ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-gray-900 shrink-0"
          >
            {isLogoImage ? (
              <img src={logoText} alt="" className="h-8 object-contain" />
            ) : (
              logoText
            )}
          </a>

          {/* Desktop Links — underline on hover */}
          <div className="hidden md:flex items-center gap-8">
            {c.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="relative text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors py-1 group"
              >
                {isAr ? link.labelAr : link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                />
              </a>
            ))}
          </div>

          {/* CTA — outline style */}
          {c.ctaButton && (
            <a
              href={c.ctaButton?.url || "#"}
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg border-2 transition-all hover:text-white shrink-0"
              style={{
                borderColor: "var(--theme-primary)",
                color: "var(--theme-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--theme-primary)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--theme-primary)";
              }}
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
                className="block w-full text-center px-5 py-2.5 text-sm font-semibold rounded-lg border-2"
                style={{
                  borderColor: "var(--theme-primary)",
                  color: "var(--theme-primary)",
                }}
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
