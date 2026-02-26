import { registerBlock } from "@/lib/registry";
import { teamConfigSchema } from "./types";
import { TeamTemplate01 } from "./team-template-01";
import { TeamTemplate02 } from "./team-template-02";
import { TeamTemplate03 } from "./team-template-03";
import { TeamTemplate04 } from "./team-template-04";
import { TeamTemplate05 } from "./team-template-05";
import { TeamTemplate06 } from "./team-template-06";
import { TeamTemplate07 } from "./team-template-07";
import { TeamTemplate08 } from "./team-template-08";
import { TeamTemplate09 } from "./team-template-09";
import { TeamTemplate10 } from "./team-template-10";
import { TeamTemplate11 } from "./team-template-11";
import { TeamTemplate12 } from "./team-template-12";

registerBlock({
  type: "team",
  label: "Team",
  labelAr: "الفريق",
  category: "social-proof",
  icon: "users",
  configSchema: teamConfigSchema,
  templates: [
    {
      id: "team-template-01",
      name: "Photo Grid",
      nameAr: "شبكة صور",
      description: "Team members in a grid with photos and socials",
      component: TeamTemplate01,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-02",
      name: "Scroll Cards",
      nameAr: "بطاقات قابلة للتمرير",
      description: "Horizontally scrollable team member cards",
      component: TeamTemplate02,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-03",
      name: "Hover Reveal",
      nameAr: "كشف عند التمرير",
      description: "Portrait cards with hover reveal overlay",
      component: TeamTemplate03,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-04",
      name: "Circular Photos",
      nameAr: "صور دائرية",
      description: "Round photo circles with name and role below",
      component: TeamTemplate04,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-05",
      name: "Hover Info",
      nameAr: "معلومات عند التمرير",
      description: "Photo cards with bio and role on hover overlay",
      component: TeamTemplate05,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-06",
      name: "Minimal List",
      nameAr: "قائمة بسيطة",
      description: "Horizontal list rows with photo, name, and socials",
      component: TeamTemplate06,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-07",
      name: "Side by Side",
      nameAr: "جنباً إلى جنب",
      description: "Large cards with photo and text side by side",
      component: TeamTemplate07,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-08",
      name: "Overlay Cards",
      nameAr: "بطاقات متراكبة",
      description: "Full photo background with name overlay at bottom",
      component: TeamTemplate08,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-09",
      name: "Magazine Grid",
      nameAr: "شبكة مجلة",
      description: "Varied card sizes with featured first member",
      component: TeamTemplate09,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-10",
      name: "Bordered Cards",
      nameAr: "بطاقات بإطار",
      description: "Cards with thick left border in primary color",
      component: TeamTemplate10,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-11",
      name: "Social Focus",
      nameAr: "تركيز اجتماعي",
      description: "Prominent social links as colored pill buttons",
      component: TeamTemplate11,
      defaultConfig: teamConfigSchema.parse({}),
    },
    {
      id: "team-template-12",
      name: "Compact Grid",
      nameAr: "شبكة مدمجة",
      description: "Small compact cards with expandable bio on click",
      component: TeamTemplate12,
      defaultConfig: teamConfigSchema.parse({}),
    },
  ],
});
