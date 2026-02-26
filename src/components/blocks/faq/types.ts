import { z } from "zod";

export const faqConfigSchema = z.object({
  heading: z.string().default("Frequently Asked Questions"),
  headingAr: z.string().default("الأسئلة الشائعة"),
  subheading: z
    .string()
    .default("Everything you need to know. Can't find the answer you're looking for? Contact us."),
  subheadingAr: z
    .string()
    .default("كل ما تحتاج معرفته. لم تجد الإجابة التي تبحث عنها؟ تواصل معنا."),
  items: z
    .array(
      z.object({
        question: z.string(),
        questionAr: z.string(),
        answer: z.string(),
        answerAr: z.string(),
      })
    )
    .default([
      {
        question: "How do I get started?",
        questionAr: "كيف أبدأ؟",
        answer:
          "Simply sign up for a free account, choose a template that fits your industry, and start customizing your content. No coding required.",
        answerAr:
          "ببساطة سجل حساب مجاني، اختر قالباً يناسب مجالك، وابدأ بتخصيص المحتوى. لا حاجة للبرمجة.",
      },
      {
        question: "Can I use my own domain?",
        questionAr: "هل يمكنني استخدام نطاقي الخاص؟",
        answer:
          "Yes! Pro and Enterprise plans support custom domains. You can connect your existing domain or register a new one.",
        answerAr:
          "نعم! خطط الاحترافي والمؤسسات تدعم النطاقات المخصصة. يمكنك ربط نطاقك الحالي أو تسجيل نطاق جديد.",
      },
      {
        question: "Is there Arabic language support?",
        questionAr: "هل يوجد دعم للغة العربية؟",
        answer:
          "Absolutely! Every template supports both Arabic (RTL) and English (LTR) out of the box. Your visitors can switch between languages seamlessly.",
        answerAr:
          "بالتأكيد! كل قالب يدعم العربية (RTL) والإنجليزية (LTR) بشكل مدمج. يمكن لزوارك التبديل بين اللغات بسلاسة.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        questionAr: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
        answer:
          "Yes, you can cancel your subscription at any time. Your website will remain active until the end of your billing period.",
        answerAr:
          "نعم، يمكنك إلغاء اشتراكك في أي وقت. سيبقى موقعك نشطاً حتى نهاية فترة الفوترة.",
      },
      {
        question: "Do you offer customer support?",
        questionAr: "هل توفرون دعم العملاء؟",
        answer:
          "We offer email support for all plans, priority support for Pro plans, and 24/7 dedicated support for Enterprise plans.",
        answerAr:
          "نوفر دعم عبر البريد لجميع الخطط، دعم أولوي لخطة الاحترافي، ودعم مخصص على مدار الساعة لخطة المؤسسات.",
      },
    ]),
});

export type FaqConfig = z.infer<typeof faqConfigSchema>;
