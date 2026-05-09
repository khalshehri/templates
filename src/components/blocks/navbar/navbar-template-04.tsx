"use client";

/**
 * Navbar Template 04 — Pill Navigation
 * Rounded pill-shaped buttons for each nav link with primary-colored active/hover pills
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate04({ config, language }: BlockProps) {
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
          : "bg-white/90 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight shrink-0"
            style={{ color: "var(--theme-primary)" }}
          >
            {isLogoImage ? (
              <img src={logoText} alt="" className="h-8 object-contain" />
            ) : (
              logoText
            )}
          </a>

          {/* Desktop Pill Links */}
          <div className="hidden md:flex items-center gap-2">
            {c.links.map((link, i) => (
              link && (
                <a
                  key={i}
                  href={link.url || "#"}
                  className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full transition-all duration-200 hover:text-white"
                  style={{
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ["--tw-hover-bg" as any]: "var(--theme-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--theme-primary)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {isAr ? link.labelAr : link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Pill */}
          <div className="hidden md:block">
            {c.ctaButton && (
              <a
                href={c.ctaButton?.url || "#"}
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaButton?.textAr : c.ctaButton?.text}
              </a>
            )}
          </div>

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
          <div className="px-4 py-4 space-y-2">
            {c.links.map((link, i) => (
              link && (
                <a
                  key={i}
                  href={link.url || "#"}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {isAr ? link.labelAr : link.label}
                </a>
              )
            ))}
            {c.ctaButton && (
              <a
                href={c.ctaButton?.url || "#"}
                className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white rounded-full mt-2"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaButton?.textAr : c.ctaButton?.text}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
