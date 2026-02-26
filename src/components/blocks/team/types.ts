import { z } from "zod";

export const teamConfigSchema = z.object({
  heading: z.string().default("Meet Our Team"),
  headingAr: z.string().default("تعرّف على فريقنا"),
  subheading: z
    .string()
    .default("The talented people behind our success."),
  subheadingAr: z
    .string()
    .default("الأشخاص الموهوبون وراء نجاحنا."),
  items: z
    .array(
      z.object({
        name: z.string(),
        nameAr: z.string(),
        role: z.string(),
        roleAr: z.string(),
        photo: z.string().optional(),
        bio: z.string().optional(),
        bioAr: z.string().optional(),
        socials: z
          .array(
            z.object({
              platform: z.string(),
              url: z.string(),
            })
          )
          .optional(),
      })
    )
    .default([
      {
        name: "Ahmad Hassan",
        nameAr: "أحمد حسن",
        role: "CEO & Founder",
        roleAr: "المدير التنفيذي والمؤسس",
        bio: "10+ years of experience in tech leadership.",
        bioAr: "أكثر من 10 سنوات خبرة في القيادة التقنية.",
        socials: [
          { platform: "twitter", url: "#" },
          { platform: "linkedin", url: "#" },
        ],
      },
      {
        name: "Fatima Al-Zahra",
        nameAr: "فاطمة الزهراء",
        role: "Head of Design",
        roleAr: "رئيسة قسم التصميم",
        bio: "Award-winning designer with a passion for user experience.",
        bioAr: "مصممة حائزة على جوائز بشغف لتجربة المستخدم.",
        socials: [
          { platform: "twitter", url: "#" },
          { platform: "linkedin", url: "#" },
        ],
      },
      {
        name: "Omar Khaled",
        nameAr: "عمر خالد",
        role: "Lead Developer",
        roleAr: "المطور الرئيسي",
        bio: "Full-stack developer specialized in scalable web applications.",
        bioAr: "مطور متكامل متخصص في تطبيقات الويب القابلة للتوسع.",
        socials: [
          { platform: "twitter", url: "#" },
          { platform: "linkedin", url: "#" },
        ],
      },
      {
        name: "Nora Abdullah",
        nameAr: "نورة عبدالله",
        role: "Marketing Manager",
        roleAr: "مديرة التسويق",
        bio: "Digital marketing expert with a data-driven approach.",
        bioAr: "خبيرة تسويق رقمي بنهج مبني على البيانات.",
        socials: [
          { platform: "twitter", url: "#" },
          { platform: "linkedin", url: "#" },
        ],
      },
    ]),
});

export type TeamConfig = z.infer<typeof teamConfigSchema>;
