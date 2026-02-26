import type { SectionData } from "@/types/blocks";
import type { SiteTheme } from "@/types/theme";

export interface IndustryTemplate {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  defaultTheme: Omit<SiteTheme, "direction">;
  sections: Omit<SectionData, "id">[];
}

/* ── Helper: shared footer/contact/cta builders ─────────────── */

function makeNavbar(logo: string, logoAr: string, links: { label: string; labelAr: string; url: string }[], templateId = "navbar-template-01") {
  return {
    blockType: "navbar" as const,
    templateId,
    config: {
      logo, logoAr,
      links,
      ctaButton: { text: "Contact Us", textAr: "تواصل معنا", url: "#contact" },
      sticky: true,
      transparent: false,
    },
    sortOrder: 0,
    isVisible: true,
  };
}

function makeFooter(logo: string, logoAr: string, desc: string, descAr: string, templateId = "footer-template-01") {
  return {
    blockType: "footer" as const,
    templateId,
    config: {
      logo, logoAr,
      description: desc,
      descriptionAr: descAr,
      columns: [
        {
          title: "Links", titleAr: "روابط",
          links: [
            { label: "About", labelAr: "من نحن", url: "#about" },
            { label: "Services", labelAr: "خدماتنا", url: "#services" },
            { label: "Contact", labelAr: "تواصل", url: "#contact" },
          ],
        },
        {
          title: "Legal", titleAr: "قانوني",
          links: [
            { label: "Privacy", labelAr: "الخصوصية", url: "#privacy" },
            { label: "Terms", labelAr: "الشروط", url: "#terms" },
          ],
        },
      ],
      copyright: `© 2026 ${logo}. All rights reserved.`,
      copyrightAr: `© 2026 ${logoAr}. جميع الحقوق محفوظة.`,
      socials: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "linkedin", url: "#" },
      ],
    },
    sortOrder: 99,
    isVisible: true,
  };
}

function makeContact(sortOrder: number) {
  return {
    blockType: "contact" as const,
    templateId: "contact-template-01",
    config: {
      heading: "Get In Touch",
      headingAr: "تواصل معنا",
      subheading: "Have a question? We'd love to hear from you.",
      subheadingAr: "لديك سؤال؟ يسعدنا سماعك.",
      email: "info@example.com",
      phone: "+966 50 123 4567",
      address: "Riyadh, Saudi Arabia",
      addressAr: "الرياض، المملكة العربية السعودية",
      formFields: [
        { name: "name", label: "Full Name", labelAr: "الاسم الكامل", type: "text", required: true, placeholder: "John Doe", placeholderAr: "محمد أحمد" },
        { name: "email", label: "Email", labelAr: "البريد الإلكتروني", type: "email", required: true, placeholder: "you@example.com", placeholderAr: "you@example.com" },
        { name: "message", label: "Message", labelAr: "الرسالة", type: "textarea", required: true, placeholder: "Your message...", placeholderAr: "رسالتك..." },
      ],
      submitText: "Send Message",
      submitTextAr: "إرسال الرسالة",
    },
    sortOrder,
    isVisible: true,
  };
}

function makeCta(heading: string, headingAr: string, desc: string, descAr: string, btnText: string, btnTextAr: string, sortOrder: number) {
  return {
    blockType: "cta" as const,
    templateId: "cta-template-01",
    config: {
      heading, headingAr,
      description: desc, descriptionAr: descAr,
      buttonText: btnText, buttonTextAr: btnTextAr,
      buttonUrl: "#contact",
    },
    sortOrder,
    isVisible: true,
  };
}

/* ── 1. Company ─────────────────────────────────────────────── */

const company: IndustryTemplate = {
  id: "company",
  name: "Company",
  nameAr: "شركة",
  icon: "building-2",
  description: "Professional corporate website with services, team, and stats",
  descriptionAr: "موقع شركة احترافي مع خدمات وفريق وإحصائيات",
  defaultTheme: {
    colors: { primary: "#2563EB", primaryForeground: "#FFFFFF", secondary: "#7C3AED", secondaryForeground: "#FFFFFF", accent: "#F59E0B", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#F1F5F9", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#E2E8F0", ring: "#2563EB", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-inter)", body: "var(--font-inter)" },
    borderRadius: "md",
  },
  sections: [
    makeNavbar("TechCorp", "تك كورب", [
      { label: "About", labelAr: "من نحن", url: "#about" },
      { label: "Services", labelAr: "خدماتنا", url: "#services" },
      { label: "Team", labelAr: "الفريق", url: "#team" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-01", sortOrder: 1, isVisible: true,
      config: {
        heading: "Building the Future of Technology",
        headingAr: "نبني مستقبل التكنولوجيا",
        subheading: "We deliver innovative solutions that drive business growth and digital transformation.",
        subheadingAr: "نقدم حلولاً مبتكرة تدفع نمو الأعمال والتحول الرقمي.",
        ctaPrimary: { text: "Get Started", textAr: "ابدأ الآن", url: "#contact" },
        ctaSecondary: { text: "Learn More", textAr: "اعرف المزيد", url: "#about" },
        badge: { text: "Trusted by 500+ companies", textAr: "موثوق من 500+ شركة" },
        stats: [
          { value: "500+", label: "Clients", labelAr: "عميل" },
          { value: "10+", label: "Years", labelAr: "سنوات" },
          { value: "99%", label: "Satisfaction", labelAr: "رضا" },
        ],
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "Who We Are",
        headingAr: "من نحن",
        content: "We are a leading technology company dedicated to helping businesses thrive in the digital age. With a team of expert engineers and consultants, we deliver tailored solutions.",
        contentAr: "نحن شركة تقنية رائدة مكرسة لمساعدة الشركات على الازدهار في العصر الرقمي. بفريق من المهندسين والمستشارين الخبراء نقدم حلولاً مخصصة.",
        stats: [
          { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
          { value: "100+", label: "Team Members", labelAr: "عضو فريق" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Our Services",
        headingAr: "خدماتنا",
        subheading: "Comprehensive solutions for your business.",
        subheadingAr: "حلول شاملة لعملك.",
        items: [
          { icon: "code", title: "Software Development", titleAr: "تطوير البرمجيات", description: "Custom software solutions tailored to your needs.", descriptionAr: "حلول برمجية مخصصة حسب احتياجاتك." },
          { icon: "cloud", title: "Cloud Services", titleAr: "خدمات سحابية", description: "Scalable cloud infrastructure and migration.", descriptionAr: "بنية سحابية قابلة للتوسع وخدمات الترحيل." },
          { icon: "shield", title: "Cybersecurity", titleAr: "الأمن السيبراني", description: "Protect your business with enterprise-grade security.", descriptionAr: "احمِ أعمالك بأمان على مستوى المؤسسات." },
          { icon: "bar-chart", title: "Data Analytics", titleAr: "تحليل البيانات", description: "Turn your data into actionable insights.", descriptionAr: "حوّل بياناتك إلى رؤى قابلة للتنفيذ." },
        ],
      },
    },
    {
      blockType: "team", templateId: "team-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Our Team",
        headingAr: "فريقنا",
        subheading: "Meet the experts behind our success.",
        subheadingAr: "تعرّف على الخبراء وراء نجاحنا.",
        items: [
          { name: "Ahmad Hassan", nameAr: "أحمد حسن", role: "CEO", roleAr: "المدير التنفيذي", bio: "10+ years in tech leadership.", bioAr: "أكثر من 10 سنوات في القيادة التقنية.", socials: [{ platform: "linkedin", url: "#" }] },
          { name: "Fatima Al-Zahra", nameAr: "فاطمة الزهراء", role: "CTO", roleAr: "المديرة التقنية", bio: "Expert in cloud architecture.", bioAr: "خبيرة في بنية السحابة.", socials: [{ platform: "linkedin", url: "#" }] },
          { name: "Omar Khaled", nameAr: "عمر خالد", role: "Lead Developer", roleAr: "المطور الرئيسي", bio: "Full-stack developer.", bioAr: "مطور متكامل.", socials: [{ platform: "linkedin", url: "#" }] },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 5, isVisible: true,
      config: {
        items: [
          { value: "500+", label: "Clients", labelAr: "عميل" },
          { value: "1000+", label: "Projects", labelAr: "مشروع" },
          { value: "99%", label: "Satisfaction", labelAr: "رضا" },
          { value: "24/7", label: "Support", labelAr: "دعم" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 6, isVisible: true,
      config: {
        heading: "What Our Clients Say",
        headingAr: "ماذا يقول عملاؤنا",
        items: [
          { name: "Sarah Johnson", nameAr: "سارة جونسون", role: "CEO, StartUp Inc", roleAr: "المديرة التنفيذية", text: "Outstanding service and results. Highly recommended!", textAr: "خدمة ونتائج متميزة. أنصح بهم بشدة!", rating: 5 },
          { name: "Mohammed Ali", nameAr: "محمد علي", role: "CTO, DataFlow", roleAr: "المدير التقني", text: "They transformed our digital infrastructure completely.", textAr: "حوّلوا بنيتنا الرقمية بالكامل.", rating: 5 },
        ],
      },
    },
    makeCta("Ready to Transform Your Business?", "مستعد لتحويل أعمالك؟", "Let's build something great together.", "لنبنِ شيئاً عظيماً معاً.", "Get Started", "ابدأ الآن", 7),
    makeContact(8),
    makeFooter("TechCorp", "تك كورب", "Building the future of technology.", "نبني مستقبل التكنولوجيا."),
  ],
};

/* ── 2. Creative Agency ─────────────────────────────────────── */

const agency: IndustryTemplate = {
  id: "agency",
  name: "Creative Agency",
  nameAr: "وكالة إبداعية",
  icon: "palette",
  description: "Bold creative agency with portfolio and client showcase",
  descriptionAr: "وكالة إبداعية جريئة مع معرض أعمال وعملاء",
  defaultTheme: {
    colors: { primary: "#EC4899", primaryForeground: "#FFFFFF", secondary: "#8B5CF6", secondaryForeground: "#FFFFFF", accent: "#F97316", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#FDF2F8", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#FCE7F3", ring: "#EC4899", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-el-messiri)", body: "var(--font-cairo)" },
    borderRadius: "lg",
  },
  sections: [
    makeNavbar("Pixelcraft", "بيكسل كرافت", [
      { label: "About", labelAr: "من نحن", url: "#about" },
      { label: "Services", labelAr: "خدماتنا", url: "#services" },
      { label: "Work", labelAr: "أعمالنا", url: "#clients" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-15", sortOrder: 1, isVisible: true,
      config: {
        heading: "We Make Brands Unforgettable",
        headingAr: "نجعل العلامات التجارية لا تُنسى",
        highlightedWord: "Unforgettable",
        highlightedWordAr: "لا تُنسى",
        subheading: "Strategy, design, and digital experiences that captivate audiences and drive results.",
        subheadingAr: "استراتيجية وتصميم وتجارب رقمية تأسر الجمهور وتحقق نتائج.",
        ctaPrimary: { text: "See Our Work", textAr: "شاهد أعمالنا", url: "#clients" },
        ctaSecondary: { text: "Start a Project", textAr: "ابدأ مشروعاً", url: "#contact" },
      },
    },
    {
      blockType: "about", templateId: "about-template-02", sortOrder: 2, isVisible: true,
      config: {
        heading: "Who We Are",
        headingAr: "من نحن",
        content: "We're a team of designers, developers, and strategists who craft digital experiences that connect brands with their audience.",
        contentAr: "نحن فريق من المصممين والمطورين والاستراتيجيين نصنع تجارب رقمية تربط العلامات التجارية بجمهورها.",
        stats: [
          { value: "200+", label: "Projects", labelAr: "مشروع" },
          { value: "50+", label: "Awards", labelAr: "جائزة" },
          { value: "8+", label: "Years", labelAr: "سنوات" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-03", sortOrder: 3, isVisible: true,
      config: {
        heading: "What We Do",
        headingAr: "ماذا نفعل",
        subheading: "Creative solutions that move the needle.",
        subheadingAr: "حلول إبداعية تحقق الفرق.",
        items: [
          { icon: "palette", title: "Brand Identity", titleAr: "هوية العلامة", description: "Logo, colors, and visual identity that stand out.", descriptionAr: "شعار وألوان وهوية بصرية مميزة." },
          { icon: "layout", title: "Web Design", titleAr: "تصميم المواقع", description: "Beautiful, responsive websites that convert.", descriptionAr: "مواقع جميلة ومتجاوبة تحقق نتائج." },
          { icon: "video", title: "Motion Design", titleAr: "تصميم الحركة", description: "Animated content that tells your story.", descriptionAr: "محتوى متحرك يروي قصتك." },
          { icon: "megaphone", title: "Digital Marketing", titleAr: "التسويق الرقمي", description: "Data-driven campaigns for maximum ROI.", descriptionAr: "حملات مبنية على البيانات لأقصى عائد." },
        ],
      },
    },
    {
      blockType: "clients", templateId: "clients-template-02", sortOrder: 4, isVisible: true,
      config: {
        heading: "Trusted By",
        headingAr: "موثوق من",
        items: [
          { name: "Brand A" }, { name: "Brand B" }, { name: "Brand C" },
          { name: "Brand D" }, { name: "Brand E" }, { name: "Brand F" },
        ],
      },
    },
    {
      blockType: "team", templateId: "team-template-02", sortOrder: 5, isVisible: true,
      config: {
        heading: "The Creatives",
        headingAr: "المبدعون",
        subheading: "Talented minds driving our vision.",
        subheadingAr: "عقول موهوبة تقود رؤيتنا.",
        items: [
          { name: "Lina Khalil", nameAr: "لينا خليل", role: "Creative Director", roleAr: "المديرة الإبداعية", bio: "Award-winning designer.", bioAr: "مصممة حائزة على جوائز.", socials: [{ platform: "instagram", url: "#" }] },
          { name: "Youssef Nader", nameAr: "يوسف نادر", role: "Art Director", roleAr: "المدير الفني", bio: "Visual storyteller.", bioAr: "راوي قصص بصرية.", socials: [{ platform: "instagram", url: "#" }] },
        ],
      },
    },
    makeCta("Have a Project in Mind?", "لديك مشروع في بالك؟", "Let's create something amazing together.", "لنبتكر شيئاً مذهلاً معاً.", "Start a Project", "ابدأ مشروعاً", 6),
    makeContact(7),
    makeFooter("Pixelcraft", "بيكسل كرافت", "Creative agency crafting bold digital experiences.", "وكالة إبداعية تصنع تجارب رقمية جريئة."),
  ],
};

/* ── 3. Freelancer ──────────────────────────────────────────── */

const freelancer: IndustryTemplate = {
  id: "freelancer",
  name: "Freelancer",
  nameAr: "مستقل",
  icon: "user",
  description: "Personal portfolio for freelancers and consultants",
  descriptionAr: "معرض أعمال شخصي للمستقلين والمستشارين",
  defaultTheme: {
    colors: { primary: "#6366F1", primaryForeground: "#FFFFFF", secondary: "#06B6D4", secondaryForeground: "#FFFFFF", accent: "#F59E0B", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#F1F5F9", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#E2E8F0", ring: "#6366F1", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-rubik)", body: "var(--font-inter)" },
    borderRadius: "md",
  },
  sections: [
    makeNavbar("Ali Hassan", "علي حسن", [
      { label: "About", labelAr: "عني", url: "#about" },
      { label: "Services", labelAr: "خدماتي", url: "#services" },
      { label: "Testimonials", labelAr: "آراء العملاء", url: "#testimonials" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-07", sortOrder: 1, isVisible: true,
      config: {
        heading: "Hi, I'm Ali Hassan",
        headingAr: "مرحباً، أنا علي حسن",
        subheading: "Full-stack developer and UI/UX designer helping startups build beautiful products.",
        subheadingAr: "مطور متكامل ومصمم واجهات أساعد الشركات الناشئة في بناء منتجات جميلة.",
        ctaPrimary: { text: "Hire Me", textAr: "وظّفني", url: "#contact" },
        ctaSecondary: { text: "View Work", textAr: "شاهد أعمالي", url: "#services" },
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About Me",
        headingAr: "عني",
        content: "I'm a passionate developer with 8+ years of experience building web and mobile applications. I specialize in React, Node.js, and modern UI design.",
        contentAr: "أنا مطور شغوف بأكثر من 8 سنوات خبرة في بناء تطبيقات الويب والموبايل. متخصص في React و Node.js وتصميم واجهات حديثة.",
        stats: [
          { value: "8+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "150+", label: "Projects", labelAr: "مشروع" },
          { value: "50+", label: "Happy Clients", labelAr: "عميل سعيد" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "My Services",
        headingAr: "خدماتي",
        subheading: "What I can do for you.",
        subheadingAr: "ما يمكنني تقديمه لك.",
        items: [
          { icon: "code", title: "Web Development", titleAr: "تطوير المواقع", description: "Fast, responsive websites built with modern tech.", descriptionAr: "مواقع سريعة ومتجاوبة بتقنيات حديثة." },
          { icon: "smartphone", title: "Mobile Apps", titleAr: "تطبيقات الجوال", description: "Cross-platform mobile applications.", descriptionAr: "تطبيقات جوال متعددة المنصات." },
          { icon: "palette", title: "UI/UX Design", titleAr: "تصميم واجهات", description: "Beautiful interfaces that users love.", descriptionAr: "واجهات جميلة يحبها المستخدمون." },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Client Reviews",
        headingAr: "آراء العملاء",
        items: [
          { name: "Sara Ahmed", nameAr: "سارة أحمد", role: "Startup Founder", roleAr: "مؤسسة شركة ناشئة", text: "Ali delivered our MVP in record time. Exceptional quality!", textAr: "علي أنجز منتجنا الأولي في وقت قياسي. جودة استثنائية!", rating: 5 },
          { name: "John Miller", nameAr: "جون ميلر", role: "Product Manager", roleAr: "مدير المنتج", text: "Professional, communicative, and highly skilled.", textAr: "محترف ومتواصل وذو مهارات عالية.", rating: 5 },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 5, isVisible: true,
      config: {
        items: [
          { value: "150+", label: "Projects", labelAr: "مشروع" },
          { value: "50+", label: "Clients", labelAr: "عميل" },
          { value: "100%", label: "Completion", labelAr: "إتمام" },
          { value: "5.0", label: "Rating", labelAr: "تقييم" },
        ],
      },
    },
    makeCta("Let's Work Together", "لنعمل معاً", "Ready to bring your idea to life?", "مستعد لتحويل فكرتك إلى واقع؟", "Get in Touch", "تواصل معي", 6),
    makeContact(7),
    makeFooter("Ali Hassan", "علي حسن", "Full-stack developer & UI/UX designer.", "مطور متكامل ومصمم واجهات."),
  ],
};

/* ── 4. Resume / CV ─────────────────────────────────────────── */

const resume: IndustryTemplate = {
  id: "resume",
  name: "Resume / CV",
  nameAr: "سيرة ذاتية",
  icon: "file-text",
  description: "Professional online resume with skills and experience",
  descriptionAr: "سيرة ذاتية احترافية بالمهارات والخبرات",
  defaultTheme: {
    colors: { primary: "#0F172A", primaryForeground: "#FFFFFF", secondary: "#475569", secondaryForeground: "#FFFFFF", accent: "#2563EB", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#F8FAFC", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#E2E8F0", ring: "#0F172A", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-readex-pro)", body: "var(--font-inter)" },
    borderRadius: "sm",
  },
  sections: [
    makeNavbar("Nora Abdullah", "نورة عبدالله", [
      { label: "About", labelAr: "عني", url: "#about" },
      { label: "Skills", labelAr: "مهاراتي", url: "#services" },
      { label: "Experience", labelAr: "خبراتي", url: "#stats" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-07", sortOrder: 1, isVisible: true,
      config: {
        heading: "Nora Abdullah",
        headingAr: "نورة عبدالله",
        subheading: "Senior Product Designer with 6+ years of experience creating user-centered digital products.",
        subheadingAr: "مصممة منتجات أولى بأكثر من 6 سنوات خبرة في إنشاء منتجات رقمية تركز على المستخدم.",
        ctaPrimary: { text: "Download CV", textAr: "تحميل السيرة", url: "#" },
        ctaSecondary: { text: "Contact Me", textAr: "تواصل معي", url: "#contact" },
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About Me",
        headingAr: "عني",
        content: "I'm a product designer passionate about creating intuitive and beautiful user experiences. I've worked with startups and enterprises to ship products used by millions.",
        contentAr: "أنا مصممة منتجات شغوفة بإنشاء تجارب مستخدم بديهية وجميلة. عملت مع شركات ناشئة ومؤسسات لإطلاق منتجات يستخدمها الملايين.",
        stats: [
          { value: "6+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "30+", label: "Products Shipped", labelAr: "منتج مُطلق" },
          { value: "3", label: "Design Awards", labelAr: "جوائز تصميم" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-02", sortOrder: 3, isVisible: true,
      config: {
        heading: "Skills & Expertise",
        headingAr: "المهارات والخبرات",
        subheading: "Core competencies I bring to every project.",
        subheadingAr: "الكفاءات الأساسية التي أقدمها لكل مشروع.",
        items: [
          { icon: "figma", title: "UI/UX Design", titleAr: "تصميم واجهات", description: "Figma, Sketch, prototyping, and design systems.", descriptionAr: "فيغما، سكيتش، النماذج الأولية وأنظمة التصميم." },
          { icon: "users", title: "User Research", titleAr: "بحث المستخدمين", description: "Interviews, surveys, usability testing.", descriptionAr: "مقابلات، استبيانات، اختبار قابلية الاستخدام." },
          { icon: "layout", title: "Design Systems", titleAr: "أنظمة التصميم", description: "Scalable component libraries and style guides.", descriptionAr: "مكتبات مكونات قابلة للتوسع وأدلة أنماط." },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-02", sortOrder: 4, isVisible: true,
      config: {
        items: [
          { value: "6+", label: "Years Experience", labelAr: "سنوات خبرة" },
          { value: "30+", label: "Products", labelAr: "منتج" },
          { value: "3M+", label: "Users Impacted", labelAr: "مستخدم" },
          { value: "3", label: "Awards", labelAr: "جوائز" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-02", sortOrder: 5, isVisible: true,
      config: {
        heading: "Recommendations",
        headingAr: "التوصيات",
        items: [
          { name: "Khalid Omar", nameAr: "خالد عمر", role: "VP of Product", roleAr: "نائب رئيس المنتج", text: "Nora is one of the most talented designers I've worked with.", textAr: "نورة من أكثر المصممين موهبة الذين عملت معهم.", rating: 5 },
        ],
      },
    },
    makeContact(6),
    makeFooter("Nora Abdullah", "نورة عبدالله", "Senior Product Designer.", "مصممة منتجات أولى."),
  ],
};

/* ── 5. Restaurant ──────────────────────────────────────────── */

const restaurant: IndustryTemplate = {
  id: "restaurant",
  name: "Restaurant",
  nameAr: "مطعم",
  icon: "utensils",
  description: "Elegant restaurant website with menu and reservations",
  descriptionAr: "موقع مطعم أنيق مع قائمة الطعام والحجوزات",
  defaultTheme: {
    colors: { primary: "#B45309", primaryForeground: "#FFFFFF", secondary: "#92400E", secondaryForeground: "#FFFFFF", accent: "#D97706", accentForeground: "#FFFFFF", background: "#FFFBEB", foreground: "#1C1917", muted: "#FEF3C7", mutedForeground: "#78716C", card: "#FFFFFF", cardForeground: "#1C1917", border: "#E7E5E4", ring: "#B45309", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-amiri)", body: "var(--font-cairo)" },
    borderRadius: "md",
  },
  sections: [
    makeNavbar("Al Diwan", "الديوان", [
      { label: "About", labelAr: "عنا", url: "#about" },
      { label: "Menu", labelAr: "القائمة", url: "#services" },
      { label: "Reviews", labelAr: "التقييمات", url: "#testimonials" },
      { label: "Reserve", labelAr: "احجز", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-04", sortOrder: 1, isVisible: true,
      config: {
        heading: "A Culinary Journey Like No Other",
        headingAr: "رحلة طهي لا مثيل لها",
        subheading: "Experience authentic flavors crafted with passion and the finest ingredients.",
        subheadingAr: "استمتع بنكهات أصيلة مصنوعة بشغف وأجود المكونات.",
        ctaPrimary: { text: "Reserve a Table", textAr: "احجز طاولة", url: "#contact" },
        ctaSecondary: { text: "View Menu", textAr: "عرض القائمة", url: "#services" },
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "Our Story",
        headingAr: "قصتنا",
        content: "Founded in 2010, Al Diwan brings the rich traditions of Arabian cuisine to life. Our chefs combine time-honored recipes with modern techniques to create an unforgettable dining experience.",
        contentAr: "تأسس الديوان في 2010، ليُحيي تقاليد المطبخ العربي الغنية. يجمع طهاتنا بين وصفات عريقة وتقنيات حديثة لتقديم تجربة طعام لا تُنسى.",
        stats: [
          { value: "15+", label: "Years", labelAr: "سنة" },
          { value: "50+", label: "Dishes", labelAr: "طبق" },
          { value: "4.9", label: "Rating", labelAr: "تقييم" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Our Menu",
        headingAr: "قائمتنا",
        subheading: "Crafted with love and the finest ingredients.",
        subheadingAr: "مُعدّة بحب وأجود المكونات.",
        items: [
          { icon: "flame", title: "Grills & Kebabs", titleAr: "المشويات والكباب", description: "Premium cuts grilled to perfection over charcoal.", descriptionAr: "قطع ممتازة مشوية على الفحم بإتقان." },
          { icon: "salad", title: "Fresh Salads", titleAr: "السلطات الطازجة", description: "Garden-fresh salads with house-made dressings.", descriptionAr: "سلطات طازجة من الحديقة مع صلصات منزلية." },
          { icon: "soup", title: "Soups & Starters", titleAr: "الشوربات والمقبلات", description: "Traditional soups and appetizers to start your meal.", descriptionAr: "شوربات ومقبلات تقليدية لبدء وجبتك." },
          { icon: "cake", title: "Desserts", titleAr: "الحلويات", description: "Handcrafted Arabian sweets and modern desserts.", descriptionAr: "حلويات عربية يدوية وحلويات عصرية." },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 4, isVisible: true,
      config: {
        items: [
          { value: "15+", label: "Years", labelAr: "سنة" },
          { value: "50K+", label: "Guests Served", labelAr: "ضيف تم خدمته" },
          { value: "4.9", label: "Rating", labelAr: "تقييم" },
          { value: "50+", label: "Dishes", labelAr: "طبق" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 5, isVisible: true,
      config: {
        heading: "Guest Reviews",
        headingAr: "آراء الضيوف",
        items: [
          { name: "Reem Al-Saud", nameAr: "ريم آل سعود", role: "Food Blogger", roleAr: "مدوّنة طعام", text: "The best Arabian dining experience in Riyadh. The lamb kabsa is divine!", textAr: "أفضل تجربة طعام عربي في الرياض. الكبسة لحم رائعة!", rating: 5 },
          { name: "David Chen", nameAr: "ديفيد تشن", role: "Travel Writer", roleAr: "كاتب سفر", text: "A must-visit restaurant. Authentic flavors in a stunning setting.", textAr: "مطعم يجب زيارته. نكهات أصيلة في أجواء مذهلة.", rating: 5 },
        ],
      },
    },
    makeCta("Reserve Your Table", "احجز طاولتك", "Join us for an unforgettable dining experience.", "انضم إلينا لتجربة طعام لا تُنسى.", "Book Now", "احجز الآن", 6),
    makeContact(7),
    makeFooter("Al Diwan", "الديوان", "Authentic Arabian cuisine since 2010.", "مطبخ عربي أصيل منذ 2010."),
  ],
};

/* ── 6. Medical Clinic ──────────────────────────────────────── */

const clinic: IndustryTemplate = {
  id: "clinic",
  name: "Medical Clinic",
  nameAr: "عيادة طبية",
  icon: "heart-pulse",
  description: "Professional clinic website with doctors and appointments",
  descriptionAr: "موقع عيادة احترافي مع الأطباء والمواعيد",
  defaultTheme: {
    colors: { primary: "#0891B2", primaryForeground: "#FFFFFF", secondary: "#0E7490", secondaryForeground: "#FFFFFF", accent: "#06B6D4", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#F0FDFA", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#CCFBF1", ring: "#0891B2", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-tajawal)", body: "var(--font-tajawal)" },
    borderRadius: "md",
  },
  sections: [
    makeNavbar("Shifa Clinic", "عيادة شفاء", [
      { label: "About", labelAr: "عنا", url: "#about" },
      { label: "Services", labelAr: "خدماتنا", url: "#services" },
      { label: "Doctors", labelAr: "الأطباء", url: "#team" },
      { label: "FAQ", labelAr: "الأسئلة", url: "#faq" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-01", sortOrder: 1, isVisible: true,
      config: {
        heading: "Your Health, Our Priority",
        headingAr: "صحتك أولويتنا",
        subheading: "Comprehensive medical care with a team of experienced specialists dedicated to your wellbeing.",
        subheadingAr: "رعاية طبية شاملة بفريق من المتخصصين ذوي الخبرة المكرّسين لصحتك.",
        ctaPrimary: { text: "Book Appointment", textAr: "احجز موعد", url: "#contact" },
        ctaSecondary: { text: "Our Services", textAr: "خدماتنا", url: "#services" },
        badge: { text: "Open 7 Days a Week", textAr: "مفتوح 7 أيام في الأسبوع" },
        stats: [
          { value: "20+", label: "Specialists", labelAr: "متخصص" },
          { value: "50K+", label: "Patients", labelAr: "مريض" },
          { value: "15+", label: "Years", labelAr: "سنة" },
        ],
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About Our Clinic",
        headingAr: "عن عيادتنا",
        content: "Shifa Clinic has been providing exceptional medical care since 2008. Our state-of-the-art facility and experienced medical team ensure you receive the highest standard of healthcare.",
        contentAr: "عيادة شفاء تقدم رعاية طبية استثنائية منذ 2008. مرافقنا الحديثة وفريقنا الطبي الخبير يضمنان حصولك على أعلى معايير الرعاية الصحية.",
        stats: [
          { value: "15+", label: "Years", labelAr: "سنة" },
          { value: "50K+", label: "Patients", labelAr: "مريض" },
          { value: "20+", label: "Doctors", labelAr: "طبيب" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Our Specialties",
        headingAr: "تخصصاتنا",
        subheading: "Comprehensive medical services under one roof.",
        subheadingAr: "خدمات طبية شاملة تحت سقف واحد.",
        items: [
          { icon: "heart", title: "Cardiology", titleAr: "أمراض القلب", description: "Advanced heart care and diagnostics.", descriptionAr: "رعاية متقدمة للقلب والتشخيص." },
          { icon: "brain", title: "Neurology", titleAr: "الأعصاب", description: "Expert neurological care and treatment.", descriptionAr: "رعاية وعلاج عصبي متخصص." },
          { icon: "bone", title: "Orthopedics", titleAr: "العظام", description: "Joint, bone, and muscle care.", descriptionAr: "رعاية المفاصل والعظام والعضلات." },
          { icon: "eye", title: "Ophthalmology", titleAr: "العيون", description: "Complete eye care services.", descriptionAr: "خدمات رعاية العيون الكاملة." },
          { icon: "baby", title: "Pediatrics", titleAr: "الأطفال", description: "Caring for your children's health.", descriptionAr: "رعاية صحة أطفالك." },
          { icon: "stethoscope", title: "General Medicine", titleAr: "الطب العام", description: "Primary care for the whole family.", descriptionAr: "رعاية أولية لجميع أفراد العائلة." },
        ],
      },
    },
    {
      blockType: "team", templateId: "team-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Our Doctors",
        headingAr: "أطباؤنا",
        subheading: "Experienced specialists dedicated to your care.",
        subheadingAr: "متخصصون ذوو خبرة مكرّسون لرعايتك.",
        items: [
          { name: "Dr. Amira Saleh", nameAr: "د. أميرة صالح", role: "Cardiologist", roleAr: "أخصائية قلب", bio: "15 years of cardiac care experience.", bioAr: "15 سنة خبرة في رعاية القلب.", socials: [] },
          { name: "Dr. Hassan Ali", nameAr: "د. حسن علي", role: "Neurologist", roleAr: "أخصائي أعصاب", bio: "Expert in neurological disorders.", bioAr: "خبير في الاضطرابات العصبية.", socials: [] },
          { name: "Dr. Layla Nasser", nameAr: "د. ليلى ناصر", role: "Pediatrician", roleAr: "أخصائية أطفال", bio: "10 years in pediatric care.", bioAr: "10 سنوات في رعاية الأطفال.", socials: [] },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 5, isVisible: true,
      config: {
        items: [
          { value: "50K+", label: "Patients Treated", labelAr: "مريض تم علاجه" },
          { value: "20+", label: "Specialists", labelAr: "متخصص" },
          { value: "15+", label: "Years", labelAr: "سنة" },
          { value: "98%", label: "Patient Satisfaction", labelAr: "رضا المرضى" },
        ],
      },
    },
    {
      blockType: "faq", templateId: "faq-template-01", sortOrder: 6, isVisible: true,
      config: {
        heading: "Frequently Asked Questions",
        headingAr: "الأسئلة الشائعة",
        items: [
          { question: "What are your working hours?", questionAr: "ما هي ساعات العمل؟", answer: "We are open Saturday–Thursday, 8 AM to 10 PM.", answerAr: "نفتح من السبت إلى الخميس، 8 صباحاً حتى 10 مساءً." },
          { question: "Do you accept insurance?", questionAr: "هل تقبلون التأمين؟", answer: "Yes, we accept most major insurance providers.", answerAr: "نعم، نقبل معظم شركات التأمين الكبرى." },
          { question: "How do I book an appointment?", questionAr: "كيف أحجز موعداً؟", answer: "You can book online through our contact form or call us.", answerAr: "يمكنك الحجز عبر نموذج التواصل أو الاتصال بنا." },
        ],
      },
    },
    makeCta("Book Your Appointment Today", "احجز موعدك اليوم", "Your health can't wait. Schedule a visit with our specialists.", "صحتك لا تنتظر. حدد موعداً مع متخصصينا.", "Book Now", "احجز الآن", 7),
    makeContact(8),
    makeFooter("Shifa Clinic", "عيادة شفاء", "Comprehensive medical care for the whole family.", "رعاية طبية شاملة لجميع أفراد العائلة."),
  ],
};

/* ── 7. Real Estate ─────────────────────────────────────────── */

const realestate: IndustryTemplate = {
  id: "realestate",
  name: "Real Estate",
  nameAr: "عقارات",
  icon: "home",
  description: "Real estate agency with property listings and features",
  descriptionAr: "وكالة عقارية مع قوائم العقارات والميزات",
  defaultTheme: {
    colors: { primary: "#059669", primaryForeground: "#FFFFFF", secondary: "#047857", secondaryForeground: "#FFFFFF", accent: "#10B981", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#F0FDF4", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#DCFCE7", ring: "#059669", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-almarai)", body: "var(--font-cairo)" },
    borderRadius: "md",
  },
  sections: [
    makeNavbar("Dar Properties", "دار العقارات", [
      { label: "About", labelAr: "عنا", url: "#about" },
      { label: "Services", labelAr: "خدماتنا", url: "#services" },
      { label: "Features", labelAr: "المميزات", url: "#features" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-06", sortOrder: 1, isVisible: true,
      config: {
        heading: "Find Your Dream Home",
        headingAr: "اعثر على منزل أحلامك",
        subheading: "Premium properties across Saudi Arabia. Let us help you find the perfect place to call home.",
        subheadingAr: "عقارات مميزة في جميع أنحاء المملكة. دعنا نساعدك في العثور على المكان المثالي.",
        ctaPrimary: { text: "Browse Properties", textAr: "تصفح العقارات", url: "#services" },
        ctaSecondary: { text: "Contact Agent", textAr: "تواصل مع وكيل", url: "#contact" },
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About Dar Properties",
        headingAr: "عن دار العقارات",
        content: "With over 20 years in the Saudi real estate market, Dar Properties is your trusted partner for buying, selling, and renting premium properties across the Kingdom.",
        contentAr: "بأكثر من 20 عاماً في سوق العقارات السعودي، دار العقارات شريكك الموثوق لشراء وبيع وتأجير العقارات المميزة في جميع أنحاء المملكة.",
        stats: [
          { value: "20+", label: "Years", labelAr: "سنة" },
          { value: "5000+", label: "Properties Sold", labelAr: "عقار مُباع" },
          { value: "98%", label: "Client Satisfaction", labelAr: "رضا العملاء" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Our Services",
        headingAr: "خدماتنا",
        subheading: "Full-service real estate solutions.",
        subheadingAr: "حلول عقارية متكاملة.",
        items: [
          { icon: "home", title: "Residential Sales", titleAr: "بيع السكني", description: "Villas, apartments, and townhouses.", descriptionAr: "فلل وشقق ومنازل." },
          { icon: "building", title: "Commercial", titleAr: "تجاري", description: "Offices, retail spaces, and warehouses.", descriptionAr: "مكاتب ومحلات ومستودعات." },
          { icon: "key", title: "Rentals", titleAr: "الإيجارات", description: "Short and long-term rental properties.", descriptionAr: "عقارات للإيجار قصير وطويل المدى." },
          { icon: "compass", title: "Property Management", titleAr: "إدارة العقارات", description: "End-to-end property management services.", descriptionAr: "خدمات إدارة عقارات شاملة." },
        ],
      },
    },
    {
      blockType: "features", templateId: "features-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Why Choose Us",
        headingAr: "لماذا تختارنا",
        subheading: "What sets Dar Properties apart.",
        subheadingAr: "ما يميز دار العقارات.",
        items: [
          { icon: "shield", title: "Trusted & Licensed", titleAr: "موثوق ومرخص", description: "Licensed by the Saudi Real Estate Authority.", descriptionAr: "مرخص من الهيئة العامة للعقار." },
          { icon: "trending-up", title: "Market Expertise", titleAr: "خبرة سوقية", description: "Deep knowledge of local real estate trends.", descriptionAr: "معرفة عميقة باتجاهات السوق المحلي." },
          { icon: "users", title: "Dedicated Agents", titleAr: "وكلاء متخصصون", description: "Personal agent assigned to every client.", descriptionAr: "وكيل شخصي مخصص لكل عميل." },
          { icon: "clock", title: "Fast Transactions", titleAr: "معاملات سريعة", description: "Streamlined process from search to close.", descriptionAr: "عملية مبسطة من البحث حتى الإغلاق." },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 5, isVisible: true,
      config: {
        items: [
          { value: "5000+", label: "Properties Sold", labelAr: "عقار مُباع" },
          { value: "20+", label: "Years", labelAr: "سنة" },
          { value: "30+", label: "Agents", labelAr: "وكيل" },
          { value: "98%", label: "Satisfaction", labelAr: "رضا" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 6, isVisible: true,
      config: {
        heading: "Client Stories",
        headingAr: "قصص العملاء",
        items: [
          { name: "Fahad Al-Otaibi", nameAr: "فهد العتيبي", role: "Homeowner", roleAr: "مالك منزل", text: "Dar Properties made buying our first home a breeze.", textAr: "دار العقارات جعلت شراء منزلنا الأول سهلاً.", rating: 5 },
          { name: "Sara Mahmoud", nameAr: "سارة محمود", role: "Investor", roleAr: "مستثمرة", text: "Excellent market knowledge and professional service.", textAr: "معرفة سوقية ممتازة وخدمة احترافية.", rating: 5 },
        ],
      },
    },
    makeCta("Find Your Perfect Property", "اعثر على عقارك المثالي", "Browse our listings or speak to an agent today.", "تصفح عقاراتنا أو تحدث مع وكيل اليوم.", "Browse Listings", "تصفح العقارات", 7),
    makeContact(8),
    makeFooter("Dar Properties", "دار العقارات", "Premium real estate services in Saudi Arabia.", "خدمات عقارية مميزة في المملكة العربية السعودية."),
  ],
};

/* ── 8. SaaS Product ────────────────────────────────────────── */

const saas: IndustryTemplate = {
  id: "saas",
  name: "SaaS Product",
  nameAr: "منتج SaaS",
  icon: "rocket",
  description: "Modern SaaS product page with pricing and features",
  descriptionAr: "صفحة منتج SaaS حديثة مع الأسعار والميزات",
  defaultTheme: {
    colors: { primary: "#7C3AED", primaryForeground: "#FFFFFF", secondary: "#6D28D9", secondaryForeground: "#FFFFFF", accent: "#A78BFA", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#F5F3FF", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#EDE9FE", ring: "#7C3AED", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-inter)", body: "var(--font-inter)" },
    borderRadius: "lg",
  },
  sections: [
    makeNavbar("Flowboard", "فلوبورد", [
      { label: "Features", labelAr: "المميزات", url: "#features" },
      { label: "Pricing", labelAr: "الأسعار", url: "#pricing" },
      { label: "FAQ", labelAr: "الأسئلة", url: "#faq" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-03", sortOrder: 1, isVisible: true,
      config: {
        heading: "Project Management, Simplified",
        headingAr: "إدارة المشاريع بكل بساطة",
        subheading: "The all-in-one platform to plan, track, and deliver your projects on time.",
        subheadingAr: "المنصة المتكاملة لتخطيط وتتبع وتسليم مشاريعك في الوقت المحدد.",
        ctaPrimary: { text: "Start Free Trial", textAr: "ابدأ التجربة المجانية", url: "#" },
        ctaSecondary: { text: "Watch Demo", textAr: "شاهد العرض", url: "#" },
        badge: { text: "New: AI-powered insights", textAr: "جديد: رؤى مدعومة بالذكاء الاصطناعي" },
        stats: [
          { value: "50K+", label: "Users", labelAr: "مستخدم" },
          { value: "99.9%", label: "Uptime", labelAr: "وقت التشغيل" },
          { value: "4.9/5", label: "Rating", labelAr: "تقييم" },
        ],
      },
    },
    {
      blockType: "features", templateId: "features-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "Powerful Features",
        headingAr: "ميزات قوية",
        subheading: "Everything you need to manage your projects effectively.",
        subheadingAr: "كل ما تحتاجه لإدارة مشاريعك بفعالية.",
        items: [
          { icon: "layout", title: "Kanban Boards", titleAr: "لوحات كانبان", description: "Visual project management with drag and drop.", descriptionAr: "إدارة مشاريع بصرية بالسحب والإفلات." },
          { icon: "clock", title: "Time Tracking", titleAr: "تتبع الوقت", description: "Built-in timers and detailed time reports.", descriptionAr: "مؤقتات مدمجة وتقارير وقت مفصلة." },
          { icon: "users", title: "Team Collaboration", titleAr: "تعاون الفريق", description: "Real-time collaboration with comments and mentions.", descriptionAr: "تعاون فوري مع التعليقات والإشارات." },
          { icon: "bar-chart", title: "Analytics", titleAr: "التحليلات", description: "Insights into team productivity and project health.", descriptionAr: "رؤى حول إنتاجية الفريق وصحة المشروع." },
          { icon: "zap", title: "Automations", titleAr: "الأتمتة", description: "Automate repetitive tasks and workflows.", descriptionAr: "أتمت المهام المتكررة وسير العمل." },
          { icon: "lock", title: "Security", titleAr: "الأمان", description: "Enterprise-grade security with SSO and 2FA.", descriptionAr: "أمان على مستوى المؤسسات مع SSO و 2FA." },
        ],
      },
    },
    {
      blockType: "pricing", templateId: "pricing-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Simple Pricing",
        headingAr: "أسعار بسيطة",
        subheading: "No hidden fees. Cancel anytime.",
        subheadingAr: "بدون رسوم مخفية. إلغاء في أي وقت.",
        currency: "$",
        currencyAr: "$",
        plans: [
          { name: "Free", nameAr: "مجاني", description: "For individuals", descriptionAr: "للأفراد", priceMonthly: 0, priceYearly: 0, features: ["3 Projects", "Basic boards", "1 GB storage"], featuresAr: ["3 مشاريع", "لوحات أساسية", "1 جيجا تخزين"], cta: "Get Started", ctaAr: "ابدأ", highlighted: false },
          { name: "Pro", nameAr: "احترافي", description: "For teams", descriptionAr: "للفرق", priceMonthly: 12, priceYearly: 120, features: ["Unlimited projects", "Advanced boards", "50 GB storage", "Analytics", "Priority support"], featuresAr: ["مشاريع غير محدودة", "لوحات متقدمة", "50 جيجا تخزين", "تحليلات", "دعم أولوي"], cta: "Start Trial", ctaAr: "ابدأ التجربة", highlighted: true, badge: "Popular", badgeAr: "الأكثر شعبية" },
          { name: "Enterprise", nameAr: "المؤسسات", description: "For organizations", descriptionAr: "للمؤسسات", priceMonthly: 49, priceYearly: 490, features: ["Everything in Pro", "SSO & 2FA", "Unlimited storage", "Custom integrations", "Dedicated support"], featuresAr: ["كل شيء في الاحترافي", "SSO و 2FA", "تخزين غير محدود", "تكاملات مخصصة", "دعم مخصص"], cta: "Contact Sales", ctaAr: "تواصل معنا", highlighted: false },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 4, isVisible: true,
      config: {
        items: [
          { value: "50K+", label: "Users", labelAr: "مستخدم" },
          { value: "1M+", label: "Tasks Completed", labelAr: "مهمة مكتملة" },
          { value: "99.9%", label: "Uptime", labelAr: "وقت التشغيل" },
          { value: "150+", label: "Countries", labelAr: "دولة" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 5, isVisible: true,
      config: {
        heading: "Loved by Teams",
        headingAr: "محبوب من الفرق",
        items: [
          { name: "Emily Rodriguez", nameAr: "إيميلي رودريغيز", role: "PM at TechCo", roleAr: "مديرة مشاريع", text: "Flowboard cut our project delivery time by 40%.", textAr: "فلوبورد خفض وقت تسليم مشاريعنا بنسبة 40%.", rating: 5 },
          { name: "Ali Mansour", nameAr: "علي منصور", role: "CTO at DataHub", roleAr: "المدير التقني", text: "Best project management tool we've ever used.", textAr: "أفضل أداة إدارة مشاريع استخدمناها.", rating: 5 },
        ],
      },
    },
    {
      blockType: "faq", templateId: "faq-template-01", sortOrder: 6, isVisible: true,
      config: {
        heading: "FAQ",
        headingAr: "الأسئلة الشائعة",
        items: [
          { question: "Is there a free plan?", questionAr: "هل يوجد خطة مجانية؟", answer: "Yes! Our Free plan includes 3 projects with basic features.", answerAr: "نعم! الخطة المجانية تتضمن 3 مشاريع مع ميزات أساسية." },
          { question: "Can I cancel anytime?", questionAr: "هل يمكنني الإلغاء في أي وقت؟", answer: "Absolutely. No contracts, cancel anytime.", answerAr: "بالتأكيد. بدون عقود، إلغاء في أي وقت." },
          { question: "Do you offer discounts for startups?", questionAr: "هل توفرون خصومات للشركات الناشئة؟", answer: "Yes, we offer 50% off for qualifying startups.", answerAr: "نعم، نقدم خصم 50% للشركات الناشئة المؤهلة." },
        ],
      },
    },
    makeCta("Ready to Boost Productivity?", "مستعد لتعزيز الإنتاجية؟", "Start your free trial today. No credit card required.", "ابدأ تجربتك المجانية اليوم. بدون بطاقة ائتمان.", "Start Free Trial", "ابدأ التجربة المجانية", 7),
    makeContact(8),
    makeFooter("Flowboard", "فلوبورد", "Project management, simplified.", "إدارة المشاريع بكل بساطة."),
  ],
};

/* ── 9. E-commerce ──────────────────────────────────────────── */

const ecommerce: IndustryTemplate = {
  id: "ecommerce",
  name: "E-commerce",
  nameAr: "تجارة إلكترونية",
  icon: "shopping-cart",
  description: "Online store with products, features, and pricing",
  descriptionAr: "متجر إلكتروني مع المنتجات والميزات والأسعار",
  defaultTheme: {
    colors: { primary: "#DC2626", primaryForeground: "#FFFFFF", secondary: "#991B1B", secondaryForeground: "#FFFFFF", accent: "#F97316", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#FEF2F2", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#FECACA", ring: "#DC2626", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-changa)", body: "var(--font-cairo)" },
    borderRadius: "md",
  },
  sections: [
    makeNavbar("Souq Style", "سوق ستايل", [
      { label: "Products", labelAr: "المنتجات", url: "#services" },
      { label: "Features", labelAr: "المميزات", url: "#features" },
      { label: "Reviews", labelAr: "التقييمات", url: "#testimonials" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-02", sortOrder: 1, isVisible: true,
      config: {
        heading: "Shop the Latest Trends",
        headingAr: "تسوّق أحدث الصيحات",
        subheading: "Discover curated collections with fast delivery across Saudi Arabia.",
        subheadingAr: "اكتشف مجموعات مختارة بتوصيل سريع في جميع أنحاء المملكة.",
        ctaPrimary: { text: "Shop Now", textAr: "تسوّق الآن", url: "#services" },
        ctaSecondary: { text: "New Arrivals", textAr: "وصل حديثاً", url: "#" },
      },
    },
    {
      blockType: "features", templateId: "features-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "Why Shop With Us",
        headingAr: "لماذا تتسوق معنا",
        subheading: "A shopping experience you'll love.",
        subheadingAr: "تجربة تسوق ستحبها.",
        items: [
          { icon: "truck", title: "Free Shipping", titleAr: "شحن مجاني", description: "Free delivery on orders over 200 SAR.", descriptionAr: "توصيل مجاني للطلبات فوق 200 ريال." },
          { icon: "refresh-cw", title: "Easy Returns", titleAr: "إرجاع سهل", description: "30-day hassle-free return policy.", descriptionAr: "سياسة إرجاع سهلة خلال 30 يوماً." },
          { icon: "shield", title: "Secure Payment", titleAr: "دفع آمن", description: "100% secure checkout with multiple payment options.", descriptionAr: "دفع آمن 100% مع خيارات متعددة." },
          { icon: "headphones", title: "24/7 Support", titleAr: "دعم مستمر", description: "Our team is always here to help.", descriptionAr: "فريقنا متاح دائماً لمساعدتك." },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Our Collections",
        headingAr: "مجموعاتنا",
        subheading: "Curated for your style.",
        subheadingAr: "مختارة لأناقتك.",
        items: [
          { icon: "shirt", title: "Men's Fashion", titleAr: "أزياء رجالية", description: "Thobes, suits, casual wear, and accessories.", descriptionAr: "ثياب، بدلات، ملابس كاجوال، وإكسسوارات." },
          { icon: "gem", title: "Women's Fashion", titleAr: "أزياء نسائية", description: "Abayas, dresses, handbags, and jewelry.", descriptionAr: "عبايات، فساتين، حقائب، ومجوهرات." },
          { icon: "watch", title: "Accessories", titleAr: "إكسسوارات", description: "Watches, sunglasses, and more.", descriptionAr: "ساعات، نظارات شمسية، والمزيد." },
          { icon: "gift", title: "Gifts", titleAr: "هدايا", description: "Curated gift sets for every occasion.", descriptionAr: "مجموعات هدايا مختارة لكل مناسبة." },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 4, isVisible: true,
      config: {
        items: [
          { value: "100K+", label: "Happy Customers", labelAr: "عميل سعيد" },
          { value: "5000+", label: "Products", labelAr: "منتج" },
          { value: "24h", label: "Fast Delivery", labelAr: "توصيل سريع" },
          { value: "4.8/5", label: "Rating", labelAr: "تقييم" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 5, isVisible: true,
      config: {
        heading: "Customer Reviews",
        headingAr: "آراء العملاء",
        items: [
          { name: "Huda Al-Rashid", nameAr: "هدى الراشد", role: "Verified Buyer", roleAr: "مشترية مؤكدة", text: "Amazing quality and super fast delivery!", textAr: "جودة مذهلة وتوصيل سريع جداً!", rating: 5 },
          { name: "Turki Saeed", nameAr: "تركي سعيد", role: "Verified Buyer", roleAr: "مشتري مؤكد", text: "My go-to online store. Great customer service.", textAr: "متجري المفضل. خدمة عملاء رائعة.", rating: 5 },
        ],
      },
    },
    makeCta("Start Shopping Today", "ابدأ التسوق اليوم", "Free shipping on your first order!", "شحن مجاني على طلبك الأول!", "Shop Now", "تسوّق الآن", 6),
    makeContact(7),
    makeFooter("Souq Style", "سوق ستايل", "Your favorite online store in Saudi Arabia.", "متجرك المفضل في المملكة العربية السعودية."),
  ],
};

/* ── 10. Event / Conference ─────────────────────────────────── */

const event: IndustryTemplate = {
  id: "event",
  name: "Event / Conference",
  nameAr: "فعالية / مؤتمر",
  icon: "calendar",
  description: "Event or conference page with speakers and schedule",
  descriptionAr: "صفحة فعالية أو مؤتمر مع المتحدثين والجدول",
  defaultTheme: {
    colors: { primary: "#E11D48", primaryForeground: "#FFFFFF", secondary: "#BE123C", secondaryForeground: "#FFFFFF", accent: "#FB923C", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#FFF1F2", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#FFE4E6", ring: "#E11D48", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-rubik)", body: "var(--font-cairo)" },
    borderRadius: "lg",
  },
  sections: [
    makeNavbar("TechSummit 2026", "قمة التقنية 2026", [
      { label: "About", labelAr: "عنا", url: "#about" },
      { label: "Schedule", labelAr: "الجدول", url: "#features" },
      { label: "Speakers", labelAr: "المتحدثون", url: "#team" },
      { label: "Tickets", labelAr: "التذاكر", url: "#pricing" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-04", sortOrder: 1, isVisible: true,
      config: {
        heading: "TechSummit 2026",
        headingAr: "قمة التقنية 2026",
        subheading: "The biggest technology conference in the Middle East. March 15-17, Riyadh.",
        subheadingAr: "أكبر مؤتمر تقني في الشرق الأوسط. 15-17 مارس، الرياض.",
        ctaPrimary: { text: "Get Tickets", textAr: "احصل على تذاكر", url: "#pricing" },
        ctaSecondary: { text: "View Schedule", textAr: "عرض الجدول", url: "#features" },
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About the Event",
        headingAr: "عن الفعالية",
        content: "TechSummit brings together 5000+ industry leaders, developers, and innovators for 3 days of keynotes, workshops, and networking.",
        contentAr: "قمة التقنية تجمع أكثر من 5000 قائد صناعة ومطور ومبتكر لـ 3 أيام من الكلمات الرئيسية وورش العمل والتواصل.",
        stats: [
          { value: "5000+", label: "Attendees", labelAr: "حاضر" },
          { value: "50+", label: "Speakers", labelAr: "متحدث" },
          { value: "3", label: "Days", labelAr: "أيام" },
        ],
      },
    },
    {
      blockType: "features", templateId: "features-template-03", sortOrder: 3, isVisible: true,
      config: {
        heading: "Event Schedule",
        headingAr: "جدول الفعالية",
        subheading: "Three days packed with insights and innovation.",
        subheadingAr: "ثلاثة أيام مليئة بالرؤى والابتكار.",
        items: [
          { icon: "mic", title: "Day 1: Keynotes", titleAr: "اليوم 1: كلمات رئيسية", description: "Opening ceremony and keynote presentations from industry leaders.", descriptionAr: "حفل الافتتاح وعروض رئيسية من قادة الصناعة." },
          { icon: "code", title: "Day 2: Workshops", titleAr: "اليوم 2: ورش عمل", description: "Hands-on workshops on AI, cloud, and web development.", descriptionAr: "ورش عمل تطبيقية حول الذكاء الاصطناعي والسحابة وتطوير الويب." },
          { icon: "users", title: "Day 3: Networking", titleAr: "اليوم 3: تواصل", description: "Networking sessions, startup pitches, and closing ceremony.", descriptionAr: "جلسات تواصل وعروض شركات ناشئة وحفل الختام." },
        ],
      },
    },
    {
      blockType: "team", templateId: "team-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Featured Speakers",
        headingAr: "المتحدثون المميزون",
        subheading: "Learn from the best in the industry.",
        subheadingAr: "تعلّم من الأفضل في الصناعة.",
        items: [
          { name: "Dr. Khalid Ibrahim", nameAr: "د. خالد إبراهيم", role: "AI Researcher", roleAr: "باحث ذكاء اصطناعي", bio: "Leading AI researcher.", bioAr: "باحث رائد في الذكاء الاصطناعي.", socials: [{ platform: "twitter", url: "#" }] },
          { name: "Jennifer Liu", nameAr: "جنيفر ليو", role: "VP at CloudTech", roleAr: "نائبة الرئيس", bio: "Cloud architecture expert.", bioAr: "خبيرة بنية سحابية.", socials: [{ platform: "twitter", url: "#" }] },
          { name: "Ahmed Nasser", nameAr: "أحمد ناصر", role: "Startup Founder", roleAr: "مؤسس شركة ناشئة", bio: "Serial entrepreneur.", bioAr: "رائد أعمال متعدد.", socials: [{ platform: "twitter", url: "#" }] },
        ],
      },
    },
    {
      blockType: "pricing", templateId: "pricing-template-01", sortOrder: 5, isVisible: true,
      config: {
        heading: "Tickets",
        headingAr: "التذاكر",
        subheading: "Choose your ticket type.",
        subheadingAr: "اختر نوع تذكرتك.",
        currency: "SAR",
        currencyAr: "ر.س",
        plans: [
          { name: "Standard", nameAr: "عادي", description: "General admission", descriptionAr: "دخول عام", priceMonthly: 500, priceYearly: 500, features: ["All keynotes", "Networking access", "Lunch included"], featuresAr: ["جميع الكلمات الرئيسية", "وصول للتواصل", "غداء مشمول"], cta: "Buy Ticket", ctaAr: "اشترِ تذكرة", highlighted: false },
          { name: "VIP", nameAr: "VIP", description: "Premium experience", descriptionAr: "تجربة مميزة", priceMonthly: 1500, priceYearly: 1500, features: ["All keynotes", "VIP networking", "Workshop access", "Speaker meet & greet", "Premium seating"], featuresAr: ["جميع الكلمات الرئيسية", "تواصل VIP", "ورش العمل", "لقاء المتحدثين", "مقاعد مميزة"], cta: "Buy VIP", ctaAr: "اشترِ VIP", highlighted: true, badge: "Best Value", badgeAr: "أفضل قيمة" },
        ],
      },
    },
    {
      blockType: "faq", templateId: "faq-template-01", sortOrder: 6, isVisible: true,
      config: {
        heading: "FAQ",
        headingAr: "الأسئلة الشائعة",
        items: [
          { question: "Where is the event?", questionAr: "أين تقام الفعالية؟", answer: "Riyadh International Convention Center.", answerAr: "مركز الرياض الدولي للمؤتمرات." },
          { question: "Is parking available?", questionAr: "هل يتوفر موقف سيارات؟", answer: "Yes, free parking is available for all attendees.", answerAr: "نعم، موقف مجاني لجميع الحضور." },
        ],
      },
    },
    makeCta("Don't Miss Out", "لا تفوّت الفرصة", "Early bird pricing ends soon. Secure your spot now.", "أسعار الحجز المبكر تنتهي قريباً. احجز مكانك الآن.", "Get Tickets", "احصل على تذاكر", 7),
    makeContact(8),
    makeFooter("TechSummit 2026", "قمة التقنية 2026", "The biggest tech conference in the Middle East.", "أكبر مؤتمر تقني في الشرق الأوسط."),
  ],
};

/* ── 11. Photography ────────────────────────────────────────── */

const photography: IndustryTemplate = {
  id: "photography",
  name: "Photography",
  nameAr: "تصوير",
  icon: "camera",
  description: "Photography portfolio with services and client gallery",
  descriptionAr: "معرض تصوير مع خدمات ومعرض العملاء",
  defaultTheme: {
    colors: { primary: "#0F172A", primaryForeground: "#FFFFFF", secondary: "#334155", secondaryForeground: "#FFFFFF", accent: "#F59E0B", accentForeground: "#0F172A", background: "#FFFFFF", foreground: "#0F172A", muted: "#F8FAFC", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#E2E8F0", ring: "#0F172A", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-el-messiri)", body: "var(--font-inter)" },
    borderRadius: "sm",
  },
  sections: [
    makeNavbar("Lens Studio", "ستوديو العدسة", [
      { label: "About", labelAr: "عني", url: "#about" },
      { label: "Services", labelAr: "خدماتي", url: "#services" },
      { label: "Clients", labelAr: "عملائي", url: "#clients" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-17", sortOrder: 1, isVisible: true,
      config: {
        heading: "Capturing Moments That Last Forever",
        headingAr: "نلتقط لحظات تدوم للأبد",
        subheading: "Professional photography for weddings, events, portraits, and commercial projects.",
        subheadingAr: "تصوير احترافي للأعراس والفعاليات والبورتريه والمشاريع التجارية.",
        ctaPrimary: { text: "Book a Session", textAr: "احجز جلسة", url: "#contact" },
        ctaSecondary: { text: "View Portfolio", textAr: "عرض الأعمال", url: "#services" },
        stats: [
          { value: "1000+", label: "Sessions", labelAr: "جلسة" },
          { value: "500+", label: "Happy Clients", labelAr: "عميل سعيد" },
          { value: "10+", label: "Years", labelAr: "سنوات" },
        ],
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About Me",
        headingAr: "عني",
        content: "I'm a professional photographer based in Riyadh with a passion for capturing authentic moments. My style blends artistic vision with a documentary approach to create timeless images.",
        contentAr: "أنا مصور محترف مقيم في الرياض بشغف لالتقاط اللحظات الحقيقية. أسلوبي يجمع بين الرؤية الفنية والنهج التوثيقي لإنشاء صور خالدة.",
        stats: [
          { value: "10+", label: "Years", labelAr: "سنوات" },
          { value: "1000+", label: "Sessions", labelAr: "جلسة" },
          { value: "500+", label: "Clients", labelAr: "عميل" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Services",
        headingAr: "الخدمات",
        subheading: "Professional photography for every occasion.",
        subheadingAr: "تصوير احترافي لكل مناسبة.",
        items: [
          { icon: "heart", title: "Weddings", titleAr: "الأعراس", description: "Full wedding day coverage and pre-wedding sessions.", descriptionAr: "تغطية كاملة ليوم الزفاف وجلسات ما قبل الزفاف." },
          { icon: "users", title: "Portraits", titleAr: "بورتريه", description: "Professional headshots and family portraits.", descriptionAr: "صور شخصية احترافية وصور عائلية." },
          { icon: "building", title: "Commercial", titleAr: "تجاري", description: "Product photography and brand content.", descriptionAr: "تصوير منتجات ومحتوى العلامات التجارية." },
          { icon: "calendar", title: "Events", titleAr: "فعاليات", description: "Corporate events, conferences, and celebrations.", descriptionAr: "فعاليات الشركات والمؤتمرات والاحتفالات." },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Client Love",
        headingAr: "حب العملاء",
        items: [
          { name: "Noura & Faisal", nameAr: "نورة وفيصل", role: "Wedding Clients", roleAr: "عملاء زفاف", text: "Our wedding photos are absolutely stunning. Every moment was captured perfectly!", textAr: "صور زفافنا مذهلة. كل لحظة تم التقاطها بإتقان!", rating: 5 },
          { name: "Maha Saleh", nameAr: "مها صالح", role: "Brand Manager", roleAr: "مديرة العلامة التجارية", text: "Professional, creative, and easy to work with.", textAr: "محترف ومبدع وسهل التعامل معه.", rating: 5 },
        ],
      },
    },
    {
      blockType: "clients", templateId: "clients-template-01", sortOrder: 5, isVisible: true,
      config: {
        heading: "Featured In",
        headingAr: "ظهر في",
        items: [
          { name: "Saudi Gazette" }, { name: "Arab News" }, { name: "Vogue Arabia" },
          { name: "Harper's Bazaar" }, { name: "GQ Middle East" },
        ],
      },
    },
    makeCta("Ready for Your Session?", "مستعد لجلستك؟", "Let's create something beautiful together.", "لنبتكر شيئاً جميلاً معاً.", "Book Now", "احجز الآن", 6),
    makeContact(7),
    makeFooter("Lens Studio", "ستوديو العدسة", "Professional photography in Riyadh.", "تصوير احترافي في الرياض."),
  ],
};

/* ── 12. Law Firm ───────────────────────────────────────────── */

const lawfirm: IndustryTemplate = {
  id: "lawfirm",
  name: "Law Firm",
  nameAr: "مكتب محاماة",
  icon: "scale",
  description: "Professional law firm with practice areas and attorneys",
  descriptionAr: "مكتب محاماة احترافي مع مجالات الممارسة والمحامين",
  defaultTheme: {
    colors: { primary: "#1E3A5F", primaryForeground: "#FFFFFF", secondary: "#2C5282", secondaryForeground: "#FFFFFF", accent: "#C69C3F", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#F8FAFC", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#E2E8F0", ring: "#1E3A5F", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-amiri)", body: "var(--font-noto-sans-arabic)" },
    borderRadius: "sm",
  },
  sections: [
    makeNavbar("Al-Faisal Law", "الفيصل للمحاماة", [
      { label: "About", labelAr: "عنا", url: "#about" },
      { label: "Practice Areas", labelAr: "مجالاتنا", url: "#services" },
      { label: "Attorneys", labelAr: "المحامون", url: "#team" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-12", sortOrder: 1, isVisible: true,
      config: {
        heading: "Justice. Integrity. Excellence.",
        headingAr: "عدالة. نزاهة. تميز.",
        subheading: "A leading law firm providing expert legal counsel across commercial, civil, and criminal law.",
        subheadingAr: "مكتب محاماة رائد يقدم استشارات قانونية متخصصة في القانون التجاري والمدني والجنائي.",
        ctaPrimary: { text: "Free Consultation", textAr: "استشارة مجانية", url: "#contact" },
        ctaSecondary: { text: "Our Practice Areas", textAr: "مجالاتنا", url: "#services" },
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About Our Firm",
        headingAr: "عن مكتبنا",
        content: "Al-Faisal Law has been serving clients in Saudi Arabia for over 25 years. Our team of experienced attorneys provides comprehensive legal solutions with the highest professional standards.",
        contentAr: "مكتب الفيصل للمحاماة يخدم العملاء في المملكة العربية السعودية منذ أكثر من 25 عاماً. فريقنا من المحامين ذوي الخبرة يقدم حلولاً قانونية شاملة بأعلى المعايير المهنية.",
        stats: [
          { value: "25+", label: "Years", labelAr: "سنة" },
          { value: "2000+", label: "Cases Won", labelAr: "قضية رابحة" },
          { value: "15+", label: "Attorneys", labelAr: "محامي" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-02", sortOrder: 3, isVisible: true,
      config: {
        heading: "Practice Areas",
        headingAr: "مجالات الممارسة",
        subheading: "Expert legal services across multiple disciplines.",
        subheadingAr: "خدمات قانونية متخصصة عبر تخصصات متعددة.",
        items: [
          { icon: "briefcase", title: "Commercial Law", titleAr: "القانون التجاري", description: "Business formation, contracts, and corporate governance.", descriptionAr: "تأسيس الشركات والعقود وحوكمة الشركات." },
          { icon: "home", title: "Real Estate Law", titleAr: "القانون العقاري", description: "Property transactions, disputes, and registration.", descriptionAr: "المعاملات العقارية والنزاعات والتسجيل." },
          { icon: "users", title: "Family Law", titleAr: "قانون الأسرة", description: "Divorce, custody, and inheritance matters.", descriptionAr: "الطلاق والحضانة ومسائل الميراث." },
          { icon: "shield", title: "Criminal Defense", titleAr: "الدفاع الجنائي", description: "Expert criminal defense representation.", descriptionAr: "تمثيل دفاع جنائي متخصص." },
        ],
      },
    },
    {
      blockType: "team", templateId: "team-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Our Attorneys",
        headingAr: "محامونا",
        subheading: "Experienced legal professionals.",
        subheadingAr: "محترفون قانونيون ذوو خبرة.",
        items: [
          { name: "Abdullah Al-Faisal", nameAr: "عبدالله الفيصل", role: "Managing Partner", roleAr: "الشريك الإداري", bio: "25+ years in corporate law.", bioAr: "أكثر من 25 سنة في القانون التجاري.", socials: [{ platform: "linkedin", url: "#" }] },
          { name: "Laila Hassan", nameAr: "ليلى حسن", role: "Senior Partner", roleAr: "شريك أول", bio: "Family law specialist.", bioAr: "متخصصة في قانون الأسرة.", socials: [{ platform: "linkedin", url: "#" }] },
          { name: "Yasser Nouri", nameAr: "ياسر نوري", role: "Associate", roleAr: "محامي", bio: "Criminal defense attorney.", bioAr: "محامي دفاع جنائي.", socials: [{ platform: "linkedin", url: "#" }] },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 5, isVisible: true,
      config: {
        items: [
          { value: "2000+", label: "Cases Won", labelAr: "قضية رابحة" },
          { value: "25+", label: "Years", labelAr: "سنة" },
          { value: "15+", label: "Attorneys", labelAr: "محامي" },
          { value: "95%", label: "Success Rate", labelAr: "نسبة النجاح" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 6, isVisible: true,
      config: {
        heading: "Client Testimonials",
        headingAr: "شهادات العملاء",
        items: [
          { name: "Mansour Group", nameAr: "مجموعة منصور", role: "Corporate Client", roleAr: "عميل مؤسسي", text: "Al-Faisal Law has been our legal partner for 10 years. Outstanding professionalism.", textAr: "مكتب الفيصل شريكنا القانوني منذ 10 سنوات. احترافية متميزة.", rating: 5 },
        ],
      },
    },
    {
      blockType: "faq", templateId: "faq-template-01", sortOrder: 7, isVisible: true,
      config: {
        heading: "FAQ",
        headingAr: "الأسئلة الشائعة",
        items: [
          { question: "Do you offer free consultations?", questionAr: "هل تقدمون استشارات مجانية؟", answer: "Yes, we offer a free 30-minute initial consultation.", answerAr: "نعم، نقدم استشارة أولية مجانية لمدة 30 دقيقة." },
          { question: "What areas of law do you cover?", questionAr: "ما المجالات القانونية التي تغطونها؟", answer: "Commercial, real estate, family, and criminal law.", answerAr: "القانون التجاري والعقاري والأسري والجنائي." },
        ],
      },
    },
    makeCta("Need Legal Advice?", "تحتاج استشارة قانونية؟", "Schedule your free consultation today.", "حدد موعد استشارتك المجانية اليوم.", "Free Consultation", "استشارة مجانية", 8),
    makeContact(9),
    makeFooter("Al-Faisal Law", "الفيصل للمحاماة", "Trusted legal counsel since 2001.", "استشارات قانونية موثوقة منذ 2001."),
  ],
};

/* ── 13. Gym / Fitness ──────────────────────────────────────── */

const gym: IndustryTemplate = {
  id: "gym",
  name: "Gym / Fitness",
  nameAr: "صالة رياضية",
  icon: "dumbbell",
  description: "Fitness center with classes, trainers, and membership plans",
  descriptionAr: "مركز لياقة مع حصص ومدربين وخطط عضوية",
  defaultTheme: {
    colors: { primary: "#EF4444", primaryForeground: "#FFFFFF", secondary: "#DC2626", secondaryForeground: "#FFFFFF", accent: "#F97316", accentForeground: "#FFFFFF", background: "#FFFFFF", foreground: "#0F172A", muted: "#FEF2F2", mutedForeground: "#64748B", card: "#FFFFFF", cardForeground: "#0F172A", border: "#FECACA", ring: "#EF4444", success: "#16A34A", warning: "#EAB308", destructive: "#DC2626" },
    fonts: { heading: "var(--font-changa)", body: "var(--font-tajawal)" },
    borderRadius: "md",
  },
  sections: [
    makeNavbar("IronFit", "آيرون فت", [
      { label: "About", labelAr: "عنا", url: "#about" },
      { label: "Programs", labelAr: "البرامج", url: "#services" },
      { label: "Membership", labelAr: "العضوية", url: "#pricing" },
      { label: "Trainers", labelAr: "المدربون", url: "#team" },
      { label: "Contact", labelAr: "تواصل", url: "#contact" },
    ]),
    {
      blockType: "hero", templateId: "hero-template-16", sortOrder: 1, isVisible: true,
      config: {
        heading: "Push Your Limits",
        headingAr: "تخطَّ حدودك",
        subheading: "State-of-the-art facilities, expert trainers, and programs designed to transform your body and mind.",
        subheadingAr: "مرافق حديثة ومدربون خبراء وبرامج مصممة لتحويل جسمك وعقلك.",
        ctaPrimary: { text: "Join Now", textAr: "انضم الآن", url: "#pricing" },
        ctaSecondary: { text: "Free Trial", textAr: "تجربة مجانية", url: "#contact" },
      },
    },
    {
      blockType: "about", templateId: "about-template-01", sortOrder: 2, isVisible: true,
      config: {
        heading: "About IronFit",
        headingAr: "عن آيرون فت",
        content: "IronFit is Riyadh's premier fitness center. With over 5000 sqm of training space, the latest equipment, and certified trainers, we're committed to helping you achieve your fitness goals.",
        contentAr: "آيرون فت هو مركز اللياقة الأول في الرياض. بأكثر من 5000 متر مربع من مساحة التدريب وأحدث المعدات ومدربين معتمدين نلتزم بمساعدتك على تحقيق أهداف لياقتك.",
        stats: [
          { value: "5000+", label: "Members", labelAr: "عضو" },
          { value: "50+", label: "Classes/Week", labelAr: "حصة/أسبوع" },
          { value: "20+", label: "Trainers", labelAr: "مدرب" },
        ],
      },
    },
    {
      blockType: "services", templateId: "services-template-01", sortOrder: 3, isVisible: true,
      config: {
        heading: "Programs",
        headingAr: "البرامج",
        subheading: "Something for everyone.",
        subheadingAr: "شيء للجميع.",
        items: [
          { icon: "dumbbell", title: "Strength Training", titleAr: "تدريب القوة", description: "Free weights, machines, and powerlifting.", descriptionAr: "أوزان حرة وأجهزة ورفع أثقال." },
          { icon: "heart", title: "Cardio", titleAr: "كارديو", description: "Treadmills, bikes, and HIIT classes.", descriptionAr: "أجهزة المشي والدراجات وحصص HIIT." },
          { icon: "flame", title: "CrossFit", titleAr: "كروس فت", description: "High-intensity functional training.", descriptionAr: "تدريب وظيفي عالي الكثافة." },
          { icon: "sparkles", title: "Yoga & Pilates", titleAr: "يوغا وبيلاتس", description: "Mind-body wellness classes.", descriptionAr: "حصص صحة الجسم والعقل." },
          { icon: "boxing-glove", title: "Boxing", titleAr: "ملاكمة", description: "Boxing and kickboxing classes.", descriptionAr: "حصص ملاكمة وكيك بوكسينج." },
          { icon: "users", title: "Personal Training", titleAr: "تدريب شخصي", description: "One-on-one sessions with certified trainers.", descriptionAr: "جلسات فردية مع مدربين معتمدين." },
        ],
      },
    },
    {
      blockType: "pricing", templateId: "pricing-template-01", sortOrder: 4, isVisible: true,
      config: {
        heading: "Membership Plans",
        headingAr: "خطط العضوية",
        subheading: "Choose the plan that fits your goals.",
        subheadingAr: "اختر الخطة المناسبة لأهدافك.",
        currency: "SAR",
        currencyAr: "ر.س",
        plans: [
          { name: "Basic", nameAr: "أساسي", description: "Gym access only", descriptionAr: "دخول الصالة فقط", priceMonthly: 199, priceYearly: 1990, features: ["Full gym access", "Locker room", "Free WiFi"], featuresAr: ["دخول كامل للصالة", "غرفة خزائن", "واي فاي مجاني"], cta: "Join Basic", ctaAr: "انضم أساسي", highlighted: false },
          { name: "Premium", nameAr: "مميز", description: "Gym + classes", descriptionAr: "صالة + حصص", priceMonthly: 349, priceYearly: 3490, features: ["Full gym access", "All group classes", "Sauna & pool", "Free parking"], featuresAr: ["دخول كامل للصالة", "جميع الحصص الجماعية", "ساونا ومسبح", "موقف مجاني"], cta: "Join Premium", ctaAr: "انضم مميز", highlighted: true, badge: "Most Popular", badgeAr: "الأكثر شعبية" },
          { name: "Elite", nameAr: "نخبة", description: "Everything included", descriptionAr: "كل شيء مشمول", priceMonthly: 599, priceYearly: 5990, features: ["Everything in Premium", "4 PT sessions/month", "Nutrition plan", "Priority booking"], featuresAr: ["كل شيء في المميز", "4 جلسات تدريب/شهر", "خطة تغذية", "أولوية الحجز"], cta: "Join Elite", ctaAr: "انضم نخبة", highlighted: false },
        ],
      },
    },
    {
      blockType: "team", templateId: "team-template-01", sortOrder: 5, isVisible: true,
      config: {
        heading: "Our Trainers",
        headingAr: "مدربونا",
        subheading: "Certified professionals dedicated to your success.",
        subheadingAr: "محترفون معتمدون ملتزمون بنجاحك.",
        items: [
          { name: "Khaled Fitness", nameAr: "خالد فتنس", role: "Head Trainer", roleAr: "المدرب الرئيسي", bio: "NASM certified, 10+ years.", bioAr: "معتمد من NASM، أكثر من 10 سنوات.", socials: [{ platform: "instagram", url: "#" }] },
          { name: "Reem Active", nameAr: "ريم أكتيف", role: "Yoga Instructor", roleAr: "مدربة يوغا", bio: "RYT-500 certified.", bioAr: "معتمدة RYT-500.", socials: [{ platform: "instagram", url: "#" }] },
        ],
      },
    },
    {
      blockType: "stats", templateId: "stats-template-01", sortOrder: 6, isVisible: true,
      config: {
        items: [
          { value: "5000+", label: "Members", labelAr: "عضو" },
          { value: "50+", label: "Classes/Week", labelAr: "حصة/أسبوع" },
          { value: "20+", label: "Trainers", labelAr: "مدرب" },
          { value: "5000m²", label: "Training Space", labelAr: "مساحة التدريب" },
        ],
      },
    },
    {
      blockType: "testimonials", templateId: "testimonials-template-01", sortOrder: 7, isVisible: true,
      config: {
        heading: "Member Stories",
        headingAr: "قصص الأعضاء",
        items: [
          { name: "Salman Al-Harbi", nameAr: "سلمان الحربي", role: "Member since 2022", roleAr: "عضو منذ 2022", text: "IronFit changed my life. Lost 30kg and gained confidence!", textAr: "آيرون فت غيّر حياتي. خسرت 30 كيلو واكتسبت ثقة!", rating: 5 },
          { name: "Dana Khalid", nameAr: "دانة خالد", role: "Member since 2023", roleAr: "عضوة منذ 2023", text: "Best gym in Riyadh. Amazing trainers and facilities.", textAr: "أفضل صالة في الرياض. مدربون ومرافق رائعة.", rating: 5 },
        ],
      },
    },
    makeCta("Start Your Transformation", "ابدأ تحوّلك", "Join IronFit today and get your first week free!", "انضم لآيرون فت اليوم واحصل على أسبوعك الأول مجاناً!", "Join Now", "انضم الآن", 8),
    makeContact(9),
    makeFooter("IronFit", "آيرون فت", "Riyadh's premier fitness center.", "مركز اللياقة الأول في الرياض."),
  ],
};

/* ── Export all templates ────────────────────────────────────── */

export const industryTemplates: IndustryTemplate[] = [
  company,
  agency,
  freelancer,
  resume,
  restaurant,
  clinic,
  realestate,
  saas,
  ecommerce,
  event,
  photography,
  lawfirm,
  gym,
];

export function getIndustryTemplate(id: string): IndustryTemplate | undefined {
  return industryTemplates.find((t) => t.id === id);
}
