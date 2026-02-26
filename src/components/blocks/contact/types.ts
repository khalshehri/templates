import { z } from "zod";

export const contactConfigSchema = z.object({
  heading: z.string().default("Get In Touch"),
  headingAr: z.string().default("تواصل معنا"),
  subheading: z
    .string()
    .default("Have a question or want to work together? We'd love to hear from you."),
  subheadingAr: z
    .string()
    .default("لديك سؤال أو تريد العمل معنا؟ يسعدنا سماعك."),
  email: z.string().default("hello@example.com"),
  phone: z.string().default("+966 50 000 0000"),
  address: z.string().default("Riyadh, Saudi Arabia"),
  addressAr: z.string().default("الرياض، المملكة العربية السعودية"),
  mapEmbed: z.string().optional(),
  formFields: z
    .array(
      z.object({
        name: z.string(),
        label: z.string(),
        labelAr: z.string(),
        type: z.enum(["text", "email", "tel", "textarea"]).default("text"),
        required: z.boolean().default(false),
        placeholder: z.string().optional(),
        placeholderAr: z.string().optional(),
      })
    )
    .default([
      {
        name: "name",
        label: "Full Name",
        labelAr: "الاسم الكامل",
        type: "text",
        required: true,
        placeholder: "John Doe",
        placeholderAr: "محمد أحمد",
      },
      {
        name: "email",
        label: "Email Address",
        labelAr: "البريد الإلكتروني",
        type: "email",
        required: true,
        placeholder: "john@example.com",
        placeholderAr: "mohammed@example.com",
      },
      {
        name: "phone",
        label: "Phone Number",
        labelAr: "رقم الهاتف",
        type: "tel",
        required: false,
        placeholder: "+966 50 000 0000",
        placeholderAr: "+966 50 000 0000",
      },
      {
        name: "message",
        label: "Message",
        labelAr: "الرسالة",
        type: "textarea",
        required: true,
        placeholder: "Tell us about your project...",
        placeholderAr: "أخبرنا عن مشروعك...",
      },
    ]),
  submitText: z.string().default("Send Message"),
  submitTextAr: z.string().default("إرسال الرسالة"),
});

export type ContactConfig = z.infer<typeof contactConfigSchema>;
