import { z } from "zod";

export const statsConfigSchema = z.object({
  heading: z.string().optional(),
  headingAr: z.string().optional(),
  subheading: z.string().optional(),
  subheadingAr: z.string().optional(),
  items: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
        labelAr: z.string(),
        icon: z.string().optional(),
        suffix: z.string().optional(),
      })
    )
    .default([
      { value: "10K+", label: "Happy Clients", labelAr: "عميل سعيد" },
      { value: "500+", label: "Projects Completed", labelAr: "مشروع مكتمل" },
      { value: "99%", label: "Satisfaction Rate", labelAr: "نسبة الرضا" },
      { value: "24/7", label: "Support Available", labelAr: "دعم متاح" },
    ]),
});

export type StatsConfig = z.infer<typeof statsConfigSchema>;
