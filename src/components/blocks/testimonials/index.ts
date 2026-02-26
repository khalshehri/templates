import { registerBlock } from "@/lib/registry";
import { testimonialsConfigSchema } from "./types";
import { TestimonialsTemplate01 } from "./testimonials-template-01";
import { TestimonialsTemplate02 } from "./testimonials-template-02";
import { TestimonialsTemplate03 } from "./testimonials-template-03";
import { TestimonialsTemplate04 } from "./testimonials-template-04";
import { TestimonialsTemplate05 } from "./testimonials-template-05";
import { TestimonialsTemplate06 } from "./testimonials-template-06";
import { TestimonialsTemplate07 } from "./testimonials-template-07";
import { TestimonialsTemplate08 } from "./testimonials-template-08";
import { TestimonialsTemplate09 } from "./testimonials-template-09";
import { TestimonialsTemplate10 } from "./testimonials-template-10";
import { TestimonialsTemplate11 } from "./testimonials-template-11";
import { TestimonialsTemplate12 } from "./testimonials-template-12";

registerBlock({
  type: "testimonials",
  label: "Testimonials",
  labelAr: "آراء العملاء",
  category: "social-proof",
  icon: "message-square",
  configSchema: testimonialsConfigSchema,
  templates: [
    {
      id: "testimonials-template-01",
      name: "Card Grid",
      nameAr: "شبكة بطاقات",
      description: "Testimonial cards in a 2-column grid",
      component: TestimonialsTemplate01,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-02",
      name: "Featured + Stack",
      nameAr: "مميز + مكدس",
      description: "Large featured testimonial with side stack",
      component: TestimonialsTemplate02,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-03",
      name: "Single Quote",
      nameAr: "اقتباس واحد",
      description: "Large single rotating quote with navigation",
      component: TestimonialsTemplate03,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-04",
      name: "Social Cards",
      nameAr: "بطاقات اجتماعية",
      description: "Styled like social media posts with avatar and stars",
      component: TestimonialsTemplate04,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-05",
      name: "Large Quote",
      nameAr: "اقتباس كبير",
      description: "Single large testimonial with navigation dots",
      component: TestimonialsTemplate05,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-06",
      name: "Rating Focus",
      nameAr: "تركيز على التقييم",
      description: "Large prominent star ratings with testimonial text",
      component: TestimonialsTemplate06,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-07",
      name: "Carousel Slider",
      nameAr: "عرض دوّار",
      description: "Horizontal slider with arrow navigation",
      component: TestimonialsTemplate07,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-08",
      name: "Wall of Love",
      nameAr: "جدار الحب",
      description: "Masonry grid of colorful testimonial cards",
      component: TestimonialsTemplate08,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-09",
      name: "Chat Bubbles",
      nameAr: "فقاعات محادثة",
      description: "Testimonials styled as chat message bubbles",
      component: TestimonialsTemplate09,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-10",
      name: "Minimal Cards",
      nameAr: "بطاقات بسيطة",
      description: "Ultra-clean cards with thin border and quote icon",
      component: TestimonialsTemplate10,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-11",
      name: "Side by Side",
      nameAr: "جنباً إلى جنب",
      description: "Sticky heading on left with stacked testimonials on right",
      component: TestimonialsTemplate11,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
    {
      id: "testimonials-template-12",
      name: "Gradient Cards",
      nameAr: "بطاقات متدرجة",
      description: "Cards with subtle gradient backgrounds and accent stars",
      component: TestimonialsTemplate12,
      defaultConfig: testimonialsConfigSchema.parse({}),
    },
  ],
});
