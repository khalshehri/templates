"use client";

/**
 * Navbar Template 05 — Sidebar Drawer
 * Always shows hamburger icon. Clicking opens a full-height sidebar slide-out drawer.
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { BlockProps } from "@/types/blocks";
import type { NavbarConfig } from "./types";

export function NavbarTemplate05({ config, language }: BlockProps) {
  const c = config as NavbarConfig;
  const isAr = language === "ar";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const logoText = isAr ? c.logoAr : c.logo;
  const isLogoImage = logoText.startsWith("/") || logoText.startsWith("http");

  return (
    <>
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
          <div className="flex h-16 items-center justify-between">
            {/* Hamburger — always visible */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu size={22} />
            </button>

            {/* Logo — center */}
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

            {/* CTA — right (desktop only) */}
            {c.ctaButton && (
              <a
                href={c.ctaButton?.url || "#"}
                className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold text-white rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                {isAr ? c.ctaButton.textAr : c.ctaButton.text}
              </a>
            )}
            <div className="sm:hidden w-10" />
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 transition-opacity"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 z-[70] h-full w-72 sm:w-80 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isAr ? "right-0" : "left-0"
        } ${
          drawerOpen
            ? "translate-x-0"
            : isAr
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <a
              href="#"
              className="text-lg font-bold"
              style={{ color: "var(--theme-primary)" }}
            >
              {isLogoImage ? (
                <img src={logoText} alt="" className="h-7 object-contain" />
              ) : (
                logoText
              )}
            </a>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
            {c.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setDrawerOpen(false)}
              >
                {isAr ? link.labelAr : link.label}
              </a>
            ))}
          </div>

          {/* Drawer CTA */}
          <div className="px-6 py-6 border-t border-gray-100">
            {c.ctaButton && (
              <a
                href={c.ctaButton?.url || "#"}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--theme-primary)" }}
                onClick={() => setDrawerOpen(false)}
              >
                {isAr ? c.ctaButton.textAr : c.ctaButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
