"use client";

/**
 * Navbar Template 07 — Floating Island
 * Floating capsule shape centered at top with margin and box-shadow
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate07({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  return (
    <nav
      className={`w-full z-50 ${
        c.sticky ? "sticky top-0" : "relative"
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 pt-4">
        <div
          className="bg-white rounded-full px-6 py-3 flex items-center justify-between"
          style={{
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight shrink-0"
            style={{ color: "var(--theme-primary)" }}
          >
            {isLogoImage ? (
              <img src={logoText} alt="" className="h-8 object-contain" />
            ) : (
              logoText
            )}
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* CTA */}
          {c.ctaButton && (
            <a
              href={c.ctaButton?.url || "#"}
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90 shrink-0"
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              {isAr ? c.ctaButton.textAr : c.ctaButton.text}
            </a>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden mt-2 bg-white rounded-2xl px-5 py-4"
            style={{
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="space-y-3">
              {c.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-1.5"
                  onClick={() => setMobileOpen(false)}
                >
                  {isAr ? link.labelAr : link.label}
                </a>
              ))}
              {c.ctaButton && (
                <a
                  href={c.ctaButton?.url || "#"}
                  className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white rounded-full mt-2"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  {isAr ? c.ctaButton.textAr : c.ctaButton.text}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
