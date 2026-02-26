import { z } from "zod";

export const aboutConfigSchema = z.object({
  heading: z.string().default("About Us"),
  headingAr: z.string().default("من نحن"),
  subheading: z.string().optional(),
  subheadingAr: z.string().optional(),
  content: z
    .string()
    .default(
      "We are a passionate team dedicated to helping businesses build their digital presence. With years of experience and a commitment to excellence, we deliver solutions that drive real results."
    ),
  contentAr: z
    .string()
    .default(
      "نحن فريق شغوف مكرّس لمساعدة الشركات في بناء حضورها الرقمي. بسنوات من الخبرة والتزام بالتميز، نقدم حلولاً تحقق نتائج حقيقية."
    ),
  image: z.string().optional(),
  mission: z.string().optional(),
  missionAr: z.string().optional(),
  vision: z.string().optional(),
  visionAr: z.string().optional(),
  values: z
    .array(
      z.object({
        title: z.string(),
        titleAr: z.string(),
        description: z.string(),
        descriptionAr: z.string(),
        icon: z.string().optional(),
      })
    )
    .optional(),
  stats: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
        labelAr: z.string(),
      })
    )
    .optional(),
});

export type AboutConfig = z.infer<typeof aboutConfigSchema>;
