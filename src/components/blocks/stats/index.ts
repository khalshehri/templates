import { registerBlock } from "@/lib/registry";
import { statsConfigSchema } from "./types";
import { StatsTemplate01 } from "./stats-template-01";
import { StatsTemplate02 } from "./stats-template-02";
import { StatsTemplate03 } from "./stats-template-03";
import { StatsTemplate04 } from "./stats-template-04";
import { StatsTemplate05 } from "./stats-template-05";
import { StatsTemplate06 } from "./stats-template-06";
import { StatsTemplate07 } from "./stats-template-07";
import { StatsTemplate08 } from "./stats-template-08";
import { StatsTemplate09 } from "./stats-template-09";
import { StatsTemplate10 } from "./stats-template-10";
import { StatsTemplate11 } from "./stats-template-11";
import { StatsTemplate12 } from "./stats-template-12";

registerBlock({
  type: "stats",
  label: "Statistics",
  labelAr: "الإحصائيات",
  category: "social-proof",
  icon: "bar-chart-2",
  configSchema: statsConfigSchema,
  templates: [
    {
      id: "stats-template-01",
      name: "Colored Banner",
      nameAr: "شريط ملون",
      description: "Stats on a primary-colored background",
      component: StatsTemplate01,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-02",
      name: "Icon Cards",
      nameAr: "بطاقات بأيقونات",
      description: "Stats in cards with optional icons",
      component: StatsTemplate02,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-03",
      name: "Glass Cards",
      nameAr: "بطاقات زجاجية",
      description: "Glass cards on gradient mesh background",
      component: StatsTemplate03,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-04",
      name: "Progress Bars",
      nameAr: "أشرطة تقدم",
      description: "Horizontal progress bars with value and label",
      component: StatsTemplate04,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-05",
      name: "Gradient Cards",
      nameAr: "بطاقات متدرجة",
      description: "Cards with gradient background at low opacity",
      component: StatsTemplate05,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-06",
      name: "Bordered Grid",
      nameAr: "شبكة بحدود",
      description: "Editorial grid with strong borders between stats",
      component: StatsTemplate06,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-07",
      name: "Icon + Number",
      nameAr: "أيقونة + رقم",
      description: "Circle icon placeholder above each stat value",
      component: StatsTemplate07,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-08",
      name: "Full Width Banner",
      nameAr: "شريط بعرض كامل",
      description: "Dark background full-width with vertical dividers",
      component: StatsTemplate08,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-09",
      name: "Minimal Inline",
      nameAr: "سطر بسيط",
      description: "All stats in a single horizontal line with thin separators",
      component: StatsTemplate09,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-10",
      name: "Circle Numbers",
      nameAr: "أرقام دائرية",
      description: "Values inside large circles with primary border",
      component: StatsTemplate10,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-11",
      name: "Dark Mode",
      nameAr: "الوضع الداكن",
      description: "Dark background with glow effect on values",
      component: StatsTemplate11,
      defaultConfig: statsConfigSchema.parse({}),
    },
    {
      id: "stats-template-12",
      name: "Animated Counter",
      nameAr: "عداد رقمي",
      description: "Digital counter style with monospace font and industrial feel",
      component: StatsTemplate12,
      defaultConfig: statsConfigSchema.parse({}),
    },
  ],
});
