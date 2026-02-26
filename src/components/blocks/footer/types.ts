import { z } from "zod";

export const footerConfigSchema = z.object({
  logo: z.string().default("Safahati"),
  logoAr: z.string().default("صفحاتي"),
  description: z
    .string()
    .default(
      "Build beautiful websites in minutes. No coding required."
    ),
  descriptionAr: z
    .string()
    .default("ابنِ مواقع جميلة في دقائق. لا حاجة للبرمجة."),
  columns: z
    .array(
      z.object({
        title: z.string(),
        titleAr: z.string(),
        links: z.array(
          z.object({
            label: z.string(),
            labelAr: z.string(),
            url: z.string(),
          })
        ),
      })
    )
    .default([
      {
        title: "Product",
        titleAr: "المنتج",
        links: [
          { label: "Features", labelAr: "المميزات", url: "#features" },
          { label: "Pricing", labelAr: "الأسعار", url: "#pricing" },
          { label: "Templates", labelAr: "القوالب", url: "#templates" },
        ],
      },
      {
        title: "Company",
        titleAr: "الشركة",
        links: [
          { label: "About", labelAr: "من نحن", url: "#about" },
          { label: "Blog", labelAr: "المدونة", url: "#blog" },
          { label: "Careers", labelAr: "الوظائف", url: "#careers" },
        ],
      },
      {
        title: "Support",
        titleAr: "الدعم",
        links: [
          { label: "Help Center", labelAr: "مركز المساعدة", url: "#help" },
          { label: "Contact", labelAr: "تواصل معنا", url: "#contact" },
          { label: "Status", labelAr: "الحالة", url: "#status" },
        ],
      },
    ]),
  copyright: z.string().default("© 2026 Safahati. All rights reserved."),
  copyrightAr: z.string().default("© 2026 صفحاتي. جميع الحقوق محفوظة."),
  socials: z
    .array(
      z.object({
        platform: z.string(),
        url: z.string(),
      })
    )
    .default([
      { platform: "twitter", url: "#" },
      { platform: "instagram", url: "#" },
      { platform: "linkedin", url: "#" },
    ]),
});

export type FooterConfig = z.infer<typeof footerConfigSchema>;
