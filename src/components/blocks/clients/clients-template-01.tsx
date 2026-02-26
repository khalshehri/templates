"use client";

import type { BlockProps } from "@/types/blocks";
import type { ClientsConfig } from "./types";

export function ClientsTemplate01({ config, language }: BlockProps) {
  const c = config as ClientsConfig;
  const isAr = language === "ar";

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            {isAr ? c.headingAr : c.heading}
          </p>
        </div>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {c.items.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 object-contain"
                />
              ) : (
                <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
