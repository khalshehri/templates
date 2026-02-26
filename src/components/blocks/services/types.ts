import { z } from "zod";

export const servicesConfigSchema = z.object({
  heading: z.string().default("Our Services"),
  headingAr: z.string().default("خدماتنا"),
  subheading: z
    .string()
    .default("We offer a wide range of professional services to help your business grow."),
  subheadingAr: z
    .string()
    .default("نقدم مجموعة واسعة من الخدمات المهنية لمساعدة أعمالك على النمو."),
  items: z
    .array(
      z.object({
        icon: z.string().default("briefcase"),
        title: z.string(),
        titleAr: z.string(),
        description: z.string(),
        descriptionAr: z.string(),
        image: z.string().optional(),
        price: z.string().optional(),
        priceAr: z.string().optional(),
      })
    )
    .default([
      {
        icon: "code",
        title: "Web Development",
        titleAr: "تطوير المواقع",
        description: "Custom websites built with the latest technologies for optimal performance.",
        descriptionAr: "مواقع مخصصة مبنية بأحدث التقنيات لأداء مثالي.",
      },
      {
        icon: "smartphone",
        title: "Mobile Apps",
        titleAr: "تطبيقات الجوال",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        descriptionAr: "تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android.",
      },
      {
        icon: "palette",
        title: "UI/UX Design",
        titleAr: "تصميم واجهات",
        description: "Beautiful, intuitive designs that delight users and drive engagement.",
        descriptionAr: "تصاميم جميلة وبديهية تُسعد المستخدمين وتزيد التفاعل.",
      },
      {
        icon: "bar-chart",
        title: "Digital Marketing",
        titleAr: "التسويق الرقمي",
        description: "Data-driven marketing strategies to grow your online presence.",
        descriptionAr: "استراتيجيات تسويق مبنية على البيانات لتنمية حضورك الرقمي.",
      },
      {
        icon: "shield",
        title: "Cybersecurity",
        titleAr: "الأمن السيبراني",
        description: "Protect your business with enterprise-grade security solutions.",
        descriptionAr: "احمِ أعمالك بحلول أمنية على مستوى المؤسسات.",
      },
      {
        icon: "cloud",
        title: "Cloud Solutions",
        titleAr: "حلول سحابية",
        description: "Scalable cloud infrastructure and migration services.",
        descriptionAr: "بنية سحابية قابلة للتوسع وخدمات الترحيل.",
      },
    ]),
});

export type ServicesConfig = z.infer<typeof servicesConfigSchema>;
