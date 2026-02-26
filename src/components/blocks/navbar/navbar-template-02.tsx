"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate02({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={`w-full z-50 ${c.sticky ? "sticky top-0" : "relative"}`}
    >
      {/* Top Bar */}
      <div
        className="hidden md:block text-white text-xs py-2"
        style={{ backgroundColor: "var(--theme-foreground)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone size={12} />
              +966 50 000 0000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} />
              info@example.com
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <span>{isAr ? "تابعنا" : "Follow us"}</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-xl font-bold tracking-tight">
              <span style={{ color: "var(--theme-primary)" }}>
                {isAr ? c.logoAr : c.logo}
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {c.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all"
                >
                  {isAr ? link.labelAr : link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={c.ctaButton.url}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all hover:opacity-90 shadow-sm hover:shadow-md"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaButton.textAr : c.ctaButton.text}
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-2">
              {c.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {isAr ? link.labelAr : link.label}
                </a>
              ))}
              <a
                href={c.ctaButton.url}
                className="block w-full text-center mt-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaButton.textAr : c.ctaButton.text}
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
