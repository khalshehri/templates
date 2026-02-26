"use client";

/**
 * Navbar Template 09 — Split Brand
 * Logo centered and larger. Navigation links split: first half left, second half right
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate09({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);

  const halfIdx = Math.ceil(c.links.length / 2);
  const leftLinks = c.links.slice(0, halfIdx);
  const rightLinks = c.links.slice(halfIdx);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        c.sticky ? "sticky top-0" : "relative"
      } ${
        c.transparent
          ? "bg-transparent"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left Links — desktop */}
          <div
            className={`hidden lg:flex items-center gap-8 flex-1 ${
              isAr ? "flex-row-reverse justify-end" : ""
            }`}
          >
            {leftLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
          </div>

          {/* Center Logo — larger */}
          <a
            href="#"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight shrink-0 px-8"
            style={{ color: "var(--theme-primary)" }}
          >
            {isAr ? c.logoAr : c.logo}
          </a>

          {/* Right Links — desktop */}
          <div
            className={`hidden lg:flex items-center gap-8 flex-1 justify-end ${
              isAr ? "flex-row-reverse" : ""
            }`}
          >
            {rightLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
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
