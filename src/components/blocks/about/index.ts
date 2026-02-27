import { registerBlock } from "@/lib/registry";
import { aboutConfigSchema } from "./types";
import { AboutTemplate01 } from "./about-template-01";
import { AboutTemplate02 } from "./about-template-02";
import { AboutTemplate03 } from "./about-template-03";
import { AboutTemplate04 } from "./about-template-04";
import { AboutTemplate05 } from "./about-template-05";
import { AboutTemplate06 } from "./about-template-06";
import { AboutTemplate07 } from "./about-template-07";
import { AboutTemplate08 } from "./about-template-08";
import { AboutTemplate09 } from "./about-template-09";
import { AboutTemplate10 } from "./about-template-10";
import { AboutTemplate11 } from "./about-template-11";
import { AboutTemplate12 } from "./about-template-12";

registerBlock({
  type: "about",
  label: "About Us",
  labelAr: "من نحن",
  category: "content",
  icon: "info",
  configSchema: aboutConfigSchema,
  templates: [
    {
      id: "about-template-01",
      name: "Text + Image",
      nameAr: "نص + صورة",
      description: "About content with image side by side",
      component: AboutTemplate01,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        image: "",
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
        ],
      },
    },
    {
      id: "about-template-02",
      name: "Mission / Vision / Values",
      nameAr: "رسالة / رؤية / قيم",
      description: "Cards showcasing mission, vision, and core values",
      component: AboutTemplate02,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        mission:
          "To empower businesses with the tools they need to build a strong digital presence effortlessly.",
        missionAr:
          "تمكين الشركات بالأدوات التي تحتاجها لبناء حضور رقمي قوي بسهولة.",
        vision:
          "A world where every business, regardless of size, has a beautiful, professional online presence.",
        visionAr:
          "عالم تمتلك فيه كل شركة، بغض النظر عن حجمها، حضوراً رقمياً جميلاً واحترافياً.",
        values: [
          {
            title: "Innovation",
            titleAr: "الابتكار",
            description: "We constantly push boundaries to deliver cutting-edge solutions.",
            descriptionAr: "نتخطى الحدود باستمرار لتقديم حلول متطورة.",
            icon: "heart",
          },
          {
            title: "Quality",
            titleAr: "الجودة",
            description: "Every detail matters. We craft experiences that users love.",
            descriptionAr: "كل تفصيل مهم. نصنع تجارب يحبها المستخدمون.",
            icon: "target",
          },
          {
            title: "Trust",
            titleAr: "الثقة",
            description: "Transparency and reliability are at the core of everything we do.",
            descriptionAr: "الشفافية والموثوقية في صميم كل ما نقوم به.",
            icon: "eye",
          },
        ],
      },
    },
    {
      id: "about-template-03",
      name: "Minimal Split",
      nameAr: "تقسيم بسيط",
      description: "Minimal split with accent line and big stat numbers",
      component: AboutTemplate03,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
        ],
      },
    },
    {
      id: "about-template-04",
      name: "Timeline Story",
      nameAr: "قصة زمنية",
      description: "Vertical timeline with milestone dots and story paragraphs",
      component: AboutTemplate04,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        mission:
          "To empower businesses with the tools they need to build a strong digital presence effortlessly.",
        missionAr:
          "تمكين الشركات بالأدوات التي تحتاجها لبناء حضور رقمي قوي بسهولة.",
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
        ],
      },
    },
    {
      id: "about-template-05",
      name: "Full Image Background",
      nameAr: "خلفية صورة كاملة",
      description: "Large background image with dark overlay and centered white text",
      component: AboutTemplate05,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        image: "",
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
        ],
      },
    },
    {
      id: "about-template-06",
      name: "Stats Focus",
      nameAr: "تركيز على الأرقام",
      description: "Stats displayed huge and prominently at top, content below",
      component: AboutTemplate06,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
          { value: "24/7", label: "Support", labelAr: "دعم متاح" },
        ],
      },
    },
    {
      id: "about-template-07",
      name: "Magazine Two-Column",
      nameAr: "تخطيط مجلة بعمودين",
      description: "Editorial magazine layout with drop cap and clean typography",
      component: AboutTemplate07,
      defaultConfig: aboutConfigSchema.parse({}),
    },
    {
      id: "about-template-08",
      name: "Cards Grid",
      nameAr: "شبكة بطاقات",
      description: "Mission, vision, and values as cards with accent top border",
      component: AboutTemplate08,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        mission:
          "To empower businesses with the tools they need to build a strong digital presence effortlessly.",
        missionAr:
          "تمكين الشركات بالأدوات التي تحتاجها لبناء حضور رقمي قوي بسهولة.",
        vision:
          "A world where every business, regardless of size, has a beautiful, professional online presence.",
        visionAr:
          "عالم تمتلك فيه كل شركة، بغض النظر عن حجمها، حضوراً رقمياً جميلاً واحترافياً.",
        values: [
          {
            title: "Innovation",
            titleAr: "الابتكار",
            description: "We constantly push boundaries to deliver cutting-edge solutions.",
            descriptionAr: "نتخطى الحدود باستمرار لتقديم حلول متطورة.",
            icon: "heart",
          },
          {
            title: "Quality",
            titleAr: "الجودة",
            description: "Every detail matters. We craft experiences that users love.",
            descriptionAr: "كل تفصيل مهم. نصنع تجارب يحبها المستخدمون.",
            icon: "target",
          },
          {
            title: "Trust",
            titleAr: "الثقة",
            description: "Transparency and reliability are at the core of everything we do.",
            descriptionAr: "الشفافية والموثوقية في صميم كل ما نقوم به.",
            icon: "eye",
          },
        ],
      },
    },
    {
      id: "about-template-09",
      name: "Centered Narrative",
      nameAr: "سرد مركزي",
      description: "Clean centered layout with decorative accents and generous whitespace",
      component: AboutTemplate09,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        mission:
          "To empower businesses with the tools they need to build a strong digital presence effortlessly.",
        missionAr:
          "تمكين الشركات بالأدوات التي تحتاجها لبناء حضور رقمي قوي بسهولة.",
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
        ],
      },
    },
    {
      id: "about-template-10",
      name: "Numbered Sections",
      nameAr: "أقسام مرقمة",
      description: "Content in numbered sections with large decorative numbers",
      component: AboutTemplate10,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        mission:
          "To empower businesses with the tools they need to build a strong digital presence effortlessly.",
        missionAr:
          "تمكين الشركات بالأدوات التي تحتاجها لبناء حضور رقمي قوي بسهولة.",
        vision:
          "A world where every business, regardless of size, has a beautiful, professional online presence.",
        visionAr:
          "عالم تمتلك فيه كل شركة، بغض النظر عن حجمها، حضوراً رقمياً جميلاً واحترافياً.",
        values: [
          {
            title: "Innovation",
            titleAr: "الابتكار",
            description: "We constantly push boundaries to deliver cutting-edge solutions.",
            descriptionAr: "نتخطى الحدود باستمرار لتقديم حلول متطورة.",
          },
          {
            title: "Quality",
            titleAr: "الجودة",
            description: "Every detail matters. We craft experiences that users love.",
            descriptionAr: "كل تفصيل مهم. نصنع تجارب يحبها المستخدمون.",
          },
        ],
      },
    },
    {
      id: "about-template-11",
      name: "Side Image",
      nameAr: "صورة جانبية",
      description: "Image on right, text on left with stats as badges",
      component: AboutTemplate11,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        image: "",
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
        ],
      },
    },
    {
      id: "about-template-12",
      name: "Gradient Banner",
      nameAr: "شريط متدرج",
      description: "Gradient banner top with clean content below and gradient stat cards",
      component: AboutTemplate12,
      defaultConfig: {
        ...aboutConfigSchema.parse({}),
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
          { value: "24/7", label: "Support", labelAr: "دعم متاح" },
        ],
      },
    },
  ],
});
