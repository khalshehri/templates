import { z } from "zod";

export const clientsConfigSchema = z.object({
  heading: z.string().default("Trusted By Industry Leaders"),
  headingAr: z.string().default("موثوق من قادة الصناعة"),
  subheading: z.string().optional(),
  subheadingAr: z.string().optional(),
  items: z
    .array(
      z.object({
        name: z.string(),
        logo: z.string().optional(),
        url: z.string().optional(),
      })
    )
    .default([
      { name: "Aramco" },
      { name: "STC" },
      { name: "NEOM" },
      { name: "SABIC" },
      { name: "Mobily" },
      { name: "Al Rajhi" },
    ]),
});

export type ClientsConfig = z.infer<typeof clientsConfigSchema>;
