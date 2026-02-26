import { z } from "zod";

export const navbarConfigSchema = z.object({
  logo: z.string().default("Safahati"),
  logoAr: z.string().default("صفحاتي"),
  links: z
    .array(
      z.object({
        label: z.string(),
        labelAr: z.string(),
        url: z.string(),
      })
    )
    .default([
      { label: "Home", labelAr: "الرئيسية", url: "#" },
      { label: "Services", labelAr: "خدماتنا", url: "#services" },
      { label: "About", labelAr: "من نحن", url: "#about" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
  ctaButton: z
    .object({
      text: z.string().default("Get Started"),
      textAr: z.string().default("ابدأ الآن"),
      url: z.string().default("#contact"),
    })
    .default({ text: "Get Started", textAr: "ابدأ الآن", url: "#contact" }),
  sticky: z.boolean().default(true),
  transparent: z.boolean().default(false),
});

export type NavbarConfig = z.infer<typeof navbarConfigSchema>;
