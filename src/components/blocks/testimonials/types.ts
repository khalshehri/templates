import { z } from "zod";

export const testimonialsConfigSchema = z.object({
  heading: z.string().default("What Our Clients Say"),
  headingAr: z.string().default("ماذا يقول عملاؤنا"),
  subheading: z
    .string()
    .default("Don't just take our word for it — hear from some of our satisfied customers."),
  subheadingAr: z
    .string()
    .default("لا تأخذ كلمتنا فقط — اسمع من بعض عملائنا الراضين."),
  items: z
    .array(
      z.object({
        name: z.string(),
        nameAr: z.string(),
        role: z.string(),
        roleAr: z.string(),
        avatar: z.string().optional(),
        text: z.string(),
        textAr: z.string(),
        rating: z.number().min(1).max(5).default(5),
      })
    )
    .default([
      {
        name: "Sarah Johnson",
        nameAr: "سارة جونسون",
        role: "CEO, TechStart",
        roleAr: "المديرة التنفيذية، تك ستارت",
        text: "This platform completely transformed our online presence. We saw a 200% increase in leads within the first month.",
        textAr: "هذه المنصة حولت حضورنا الرقمي بالكامل. شهدنا زيادة 200% في العملاء المحتملين خلال الشهر الأول.",
        rating: 5,
      },
      {
        name: "Ahmed Al-Rashid",
        nameAr: "أحمد الراشد",
        role: "Founder, DesignHub",
        roleAr: "المؤسس، ديزاين هب",
        text: "The bilingual support is incredible. Our Arabic and English customers both have a seamless experience.",
        textAr: "الدعم ثنائي اللغة مذهل. عملاؤنا العرب والإنجليز يحظون بتجربة سلسة.",
        rating: 5,
      },
      {
        name: "Maria Santos",
        nameAr: "ماريا سانتوس",
        role: "Marketing Director, GrowthCo",
        roleAr: "مديرة التسويق، غروث كو",
        text: "Easy to use, beautiful templates, and outstanding customer support. Highly recommend!",
        textAr: "سهل الاستخدام، قوالب جميلة، ودعم عملاء متميز. أنصح به بشدة!",
        rating: 5,
      },
      {
        name: "Khalid Ibrahim",
        nameAr: "خالد إبراهيم",
        role: "Owner, Khalid Restaurant",
        roleAr: "مالك، مطعم خالد",
        text: "Our restaurant website looks absolutely stunning. Customers can now easily browse our menu and make reservations.",
        textAr: "موقع مطعمنا يبدو رائعاً. يمكن للعملاء الآن تصفح القائمة بسهولة وإجراء الحجوزات.",
        rating: 5,
      },
    ]),
});

export type TestimonialsConfig = z.infer<typeof testimonialsConfigSchema>;
