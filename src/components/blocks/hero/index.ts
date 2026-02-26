import { registerBlock } from "@/lib/registry";
import { heroConfigSchema } from "./types";
import { HeroTemplate01 } from "./hero-template-01";
import { HeroTemplate02 } from "./hero-template-02";
import { HeroTemplate03 } from "./hero-template-03";
import { HeroTemplate04 } from "./hero-template-04";
import { HeroTemplate05 } from "./hero-template-05";
import { HeroTemplate06 } from "./hero-template-06";
import { HeroTemplate07 } from "./hero-template-07";
import { HeroTemplate08 } from "./hero-template-08";
import { HeroTemplate09 } from "./hero-template-09";
import { HeroTemplate10 } from "./hero-template-10";
import { HeroTemplate11 } from "./hero-template-11";
import { HeroTemplate12 } from "./hero-template-12";
import { HeroTemplate13 } from "./hero-template-13";
import { HeroTemplate14 } from "./hero-template-14";
import { HeroTemplate15 } from "./hero-template-15";
import { HeroTemplate16 } from "./hero-template-16";
import { HeroTemplate17 } from "./hero-template-17";

registerBlock({
  type: "hero",
  label: "Hero Section",
  labelAr: "قسم البطل",
  category: "header",
  icon: "monitor",
  configSchema: heroConfigSchema,
  templates: [
    {
      id: "hero-template-01",
      name: "Centered",
      nameAr: "وسطي",
      description: "Centered heading with gradient background and stats",
      component: HeroTemplate01,
      defaultConfig: heroConfigSchema.parse({
        badge: { text: "New Release", textAr: "إصدار جديد" },
        ctaSecondary: {
          text: "Watch Demo",
          textAr: "شاهد العرض",
          url: "#demo",
        },
        stats: [
          { value: "10K+", label: "Customers", labelAr: "عميل" },
          { value: "99%", label: "Uptime", labelAr: "وقت التشغيل" },
          { value: "24/7", label: "Support", labelAr: "الدعم" },
        ],
      }),
    },
    {
      id: "hero-template-02",
      name: "Split Layout",
      nameAr: "تقسيم",
      description: "Text on left, image on right",
      component: HeroTemplate02,
      defaultConfig: heroConfigSchema.parse({
        badge: { text: "#1 Platform", textAr: "المنصة رقم 1" },
        ctaSecondary: {
          text: "Watch Demo",
          textAr: "شاهد العرض",
          url: "#demo",
        },
        stats: [
          { value: "500+", label: "Projects", labelAr: "مشروع" },
          { value: "98%", label: "Satisfaction", labelAr: "رضا العملاء" },
        ],
      }),
    },
    {
      id: "hero-template-03",
      name: "Dark Gradient",
      nameAr: "تدرج داكن",
      description: "Gradient mesh on dark background with bold typography — SaaS/Startup",
      component: HeroTemplate03,
      defaultConfig: heroConfigSchema.parse({
        heading: "Build Products That Users Love",
        headingAr: "ابنِ منتجات يحبها المستخدمون",
        subheading:
          "The all-in-one platform for teams who ship fast. From idea to launch in record time.",
        subheadingAr:
          "المنصة المتكاملة للفرق التي تنجز بسرعة. من الفكرة إلى الإطلاق في وقت قياسي.",
        highlightedWord: "Love",
        highlightedWordAr: "يحبها",
        badge: { text: "Now in Beta", textAr: "متاح الآن تجريبياً" },
        ctaSecondary: {
          text: "See Pricing",
          textAr: "شاهد الأسعار",
          url: "#pricing",
        },
        stats: [
          { value: "50K+", label: "Active Users", labelAr: "مستخدم نشط" },
          { value: "99.9%", label: "Uptime SLA", labelAr: "ضمان التشغيل" },
          { value: "2x", label: "Faster Delivery", labelAr: "أسرع في التسليم" },
        ],
      }),
    },
    {
      id: "hero-template-04",
      name: "Image Background",
      nameAr: "خلفية صورة",
      description:
        "Full-screen image with cinematic overlay — Restaurant/Event/Photography",
      component: HeroTemplate04,
      defaultConfig: heroConfigSchema.parse({
        heading: "An Unforgettable Experience",
        headingAr: "تجربة لا تُنسى",
        subheading:
          "Where exquisite flavors meet elegant ambiance. Reserve your table today.",
        subheadingAr:
          "حيث تلتقي النكهات الرائعة بالأجواء الأنيقة. احجز طاولتك اليوم.",
        ctaPrimary: {
          text: "Reserve Now",
          textAr: "احجز الآن",
          url: "#booking",
        },
        ctaSecondary: {
          text: "View Menu",
          textAr: "عرض القائمة",
          url: "#menu",
        },
        badge: { text: "Since 2010", textAr: "منذ 2010" },
        overlayOpacity: 60,
        stats: [
          { value: "15+", label: "Years", labelAr: "سنة" },
          { value: "5K+", label: "Guests Monthly", labelAr: "ضيف شهرياً" },
          { value: "4.9", label: "Rating", labelAr: "التقييم" },
        ],
      }),
    },
    {
      id: "hero-template-05",
      name: "Glass Dashboard",
      nameAr: "لوحة زجاجية",
      description:
        "Glassmorphism card with dashboard preview — Tech/Fintech/AI",
      component: HeroTemplate05,
      defaultConfig: heroConfigSchema.parse({
        heading: "Analytics That Drive Growth",
        headingAr: "تحليلات تقود النمو",
        subheading:
          "Understand your users, optimize your funnel, and scale with confidence. Powered by AI.",
        subheadingAr:
          "افهم مستخدميك، حسّن مسار التحويل، وتوسّع بثقة. مدعوم بالذكاء الاصطناعي.",
        badge: { text: "AI-Powered", textAr: "مدعوم بالذكاء الاصطناعي" },
        ctaSecondary: {
          text: "Live Demo",
          textAr: "عرض مباشر",
          url: "#demo",
        },
        stats: [
          { value: "2M+", label: "Events Tracked", labelAr: "حدث متتبع" },
          { value: "150ms", label: "Avg. Response", labelAr: "متوسط الاستجابة" },
          { value: "SOC2", label: "Compliant", labelAr: "متوافق" },
        ],
        floatingCards: [
          { icon: "users", title: "Active Users", titleAr: "المستخدمون النشطون", value: "12.5K" },
          { icon: "trending-up", title: "Conversion", titleAr: "التحويل", value: "8.2%" },
        ],
      }),
    },
    {
      id: "hero-template-06",
      name: "Search Hero",
      nameAr: "بطل البحث",
      description:
        "Prominent search bar with categories — Real Estate/Directory/Marketplace",
      component: HeroTemplate06,
      defaultConfig: heroConfigSchema.parse({
        heading: "Find Your Dream Home",
        headingAr: "اعثر على منزل أحلامك",
        subheading:
          "Explore thousands of properties across Saudi Arabia. Buy, rent, or invest with confidence.",
        subheadingAr:
          "استكشف آلاف العقارات في جميع أنحاء المملكة. اشترِ، استأجر، أو استثمر بثقة.",
        badge: { text: "#1 Property Platform", textAr: "المنصة العقارية الأولى" },
        searchPlaceholder: "Search by city, neighborhood, or property type...",
        searchPlaceholderAr: "ابحث بالمدينة، الحي، أو نوع العقار...",
        searchCategories: [
          { label: "All", labelAr: "الكل" },
          { label: "Buy", labelAr: "شراء" },
          { label: "Rent", labelAr: "إيجار" },
          { label: "Commercial", labelAr: "تجاري" },
        ],
        overlayOpacity: 50,
        stats: [
          { value: "25K+", label: "Properties", labelAr: "عقار" },
          { value: "15K+", label: "Happy Clients", labelAr: "عميل سعيد" },
          { value: "50+", label: "Cities", labelAr: "مدينة" },
        ],
      }),
    },
    {
      id: "hero-template-07",
      name: "Personal / Resume",
      nameAr: "شخصي / سيرة",
      description:
        "Personal intro with photo, roles, social links — Freelancer/CV",
      component: HeroTemplate07,
      defaultConfig: heroConfigSchema.parse({
        heading: "John Doe",
        headingAr: "محمد أحمد",
        subheading:
          "I design and build digital experiences that help businesses grow. Currently focused on web applications and design systems.",
        subheadingAr:
          "أصمم وأبني تجارب رقمية تساعد الشركات على النمو. أركز حالياً على تطبيقات الويب وأنظمة التصميم.",
        ctaPrimary: {
          text: "Get in Touch",
          textAr: "تواصل معي",
          url: "#contact",
        },
        ctaSecondary: {
          text: "Download CV",
          textAr: "تحميل السيرة",
          url: "#cv",
        },
        typedTexts: ["Full-Stack Developer", "UI/UX Designer", "Creative Thinker"],
        typedTextsAr: ["مطور ويب متكامل", "مصمم واجهات", "مفكر إبداعي"],
        socials: [
          { platform: "github", url: "#" },
          { platform: "linkedin", url: "#" },
          { platform: "twitter", url: "#" },
          { platform: "mail", url: "#" },
        ],
        stats: [
          { value: "5+", label: "Years Exp.", labelAr: "سنوات خبرة" },
          { value: "80+", label: "Projects", labelAr: "مشروع" },
        ],
      }),
    },
    {
      id: "hero-template-08",
      name: "Aurora Borealis",
      nameAr: "شفق قطبي",
      description:
        "Flowing aurora color bands on dark background — Creative agencies, modern brands",
      component: HeroTemplate08,
      defaultConfig: heroConfigSchema.parse({
        heading: "Where Creativity Meets Technology",
        headingAr: "حيث يلتقي الإبداع بالتكنولوجيا",
        subheading:
          "We craft digital experiences that captivate audiences and drive results. Let's build something extraordinary together.",
        subheadingAr:
          "نصنع تجارب رقمية تأسر الجمهور وتحقق النتائج. لنبنِ شيئاً استثنائياً معاً.",
        badge: { text: "Award Winning", textAr: "حائز على جوائز" },
        ctaSecondary: {
          text: "View Portfolio",
          textAr: "عرض الأعمال",
          url: "#portfolio",
        },
        stats: [
          { value: "200+", label: "Projects", labelAr: "مشروع" },
          { value: "50+", label: "Awards", labelAr: "جائزة" },
          { value: "12", label: "Countries", labelAr: "دولة" },
        ],
      }),
    },
    {
      id: "hero-template-09",
      name: "Blob Split",
      nameAr: "تقسيم فقاعي",
      description:
        "Asymmetric split with morphing gradient blob — Portfolios, design studios",
      component: HeroTemplate09,
      defaultConfig: heroConfigSchema.parse({
        heading: "Design That Speaks Volumes",
        headingAr: "تصميم يتحدث بصوت عالٍ",
        subheading:
          "We transform ideas into stunning visual experiences. Every pixel tells a story.",
        subheadingAr:
          "نحوّل الأفكار إلى تجارب بصرية مذهلة. كل بكسل يروي قصة.",
        badge: { text: "Studio", textAr: "استوديو" },
        ctaSecondary: {
          text: "Watch Reel",
          textAr: "شاهد العرض",
          url: "#reel",
        },
        stats: [
          { value: "8+", label: "Years", labelAr: "سنوات" },
          { value: "300+", label: "Clients", labelAr: "عميل" },
        ],
      }),
    },
    {
      id: "hero-template-10",
      name: "Marquee Editorial",
      nameAr: "نص متحرك",
      description:
        "Giant scrolling text in background with editorial feel — Fashion, creative, editorial",
      component: HeroTemplate10,
      defaultConfig: heroConfigSchema.parse({
        heading: "Redefining Digital Excellence",
        headingAr: "نعيد تعريف التميز الرقمي",
        subheading:
          "Bold ideas deserve bold execution. We create experiences that leave lasting impressions.",
        subheadingAr:
          "الأفكار الجريئة تستحق تنفيذاً جريئاً. نصنع تجارب تترك انطباعاً دائماً.",
        badge: { text: "Since 2018", textAr: "منذ 2018" },
        ctaSecondary: {
          text: "Our Story",
          textAr: "قصتنا",
          url: "#about",
        },
        marqueeWords: ["CREATE", "DESIGN", "INNOVATE", "IMPACT"],
        marqueeWordsAr: ["إبداع", "تصميم", "ابتكار", "تأثير"],
        stats: [
          { value: "150+", label: "Brands", labelAr: "علامة تجارية" },
          { value: "40+", label: "Team", labelAr: "فريق" },
          { value: "15", label: "Countries", labelAr: "دولة" },
        ],
      }),
    },
    {
      id: "hero-template-11",
      name: "Layered Cards",
      nameAr: "بطاقات متراصة",
      description:
        "3D layered glass cards with data previews — Fintech, SaaS, dashboards",
      component: HeroTemplate11,
      defaultConfig: heroConfigSchema.parse({
        heading: "Smart Insights, Real Results",
        headingAr: "رؤى ذكية، نتائج حقيقية",
        subheading:
          "Monitor your metrics in real-time. Make data-driven decisions with confidence.",
        subheadingAr:
          "راقب مقاييسك في الوقت الفعلي. اتخذ قرارات مبنية على البيانات بثقة.",
        badge: { text: "Live Dashboard", textAr: "لوحة مباشرة" },
        ctaSecondary: {
          text: "See Demo",
          textAr: "شاهد العرض",
          url: "#demo",
        },
        stats: [
          { value: "$2.4B", label: "Processed", labelAr: "تمت معالجتها" },
          { value: "10K+", label: "Companies", labelAr: "شركة" },
          { value: "99.99%", label: "Uptime", labelAr: "وقت التشغيل" },
        ],
        floatingCards: [
          { icon: "trending-up", title: "Revenue Growth", titleAr: "نمو الإيرادات", value: "+42%" },
          { icon: "users", title: "Active Users", titleAr: "المستخدمون", value: "28.5K" },
          { icon: "zap", title: "Performance", titleAr: "الأداء", value: "99.9%" },
        ],
      }),
    },
    {
      id: "hero-template-12",
      name: "Minimal Editorial",
      nameAr: "تحريري بسيط",
      description:
        "Ultra-clean with generous whitespace and accent lines — Luxury, consulting, studios",
      component: HeroTemplate12,
      defaultConfig: heroConfigSchema.parse({
        heading: "Crafting Timeless Digital Experiences",
        headingAr: "نصنع تجارب رقمية خالدة",
        highlightedWord: "Timeless",
        highlightedWordAr: "خالدة",
        subheading:
          "Where strategy meets design. We help ambitious brands build meaningful connections with their audience.",
        subheadingAr:
          "حيث تلتقي الاستراتيجية بالتصميم. نساعد العلامات التجارية الطموحة على بناء علاقات ذات معنى مع جمهورها.",
        badge: { text: "Premium Studio", textAr: "استوديو متميز" },
        ctaSecondary: {
          text: "View Work",
          textAr: "عرض الأعمال",
          url: "#portfolio",
        },
        stats: [
          { value: "12+", label: "Years", labelAr: "سنة" },
          { value: "180+", label: "Projects", labelAr: "مشروع" },
          { value: "35", label: "Awards", labelAr: "جائزة" },
        ],
      }),
    },
    {
      id: "hero-template-13",
      name: "Bento Grid",
      nameAr: "شبكة بنتو",
      description:
        "Apple/Vercel-style bento box grid with animated card reveal — SaaS, AI, tech",
      component: HeroTemplate13,
      defaultConfig: heroConfigSchema.parse({
        heading: "The Future of AI Is Here",
        headingAr: "مستقبل الذكاء الاصطناعي هنا",
        highlightedWord: "AI",
        highlightedWordAr: "الذكاء الاصطناعي",
        subheading:
          "Build smarter products with our AI-powered platform. From prototyping to production in days, not months.",
        subheadingAr:
          "ابنِ منتجات أذكى بمنصتنا المدعومة بالذكاء الاصطناعي. من النموذج الأولي إلى الإنتاج في أيام وليس أشهر.",
        badge: { text: "Now with GPT-5", textAr: "الآن مع GPT-5" },
        ctaSecondary: {
          text: "See Docs",
          textAr: "عرض التوثيق",
          url: "#docs",
        },
        stats: [
          { value: "100M+", label: "API Calls/Day", labelAr: "طلب API يومياً" },
          { value: "50ms", label: "Avg Latency", labelAr: "متوسط التأخير" },
          { value: "99.99%", label: "Uptime", labelAr: "وقت التشغيل" },
        ],
      }),
    },
    {
      id: "hero-template-14",
      name: "Particle Constellation",
      nameAr: "كوكبة جزيئات",
      description:
        "Animated floating particles on dark background with network lines — AI, cybersecurity, blockchain",
      component: HeroTemplate14,
      defaultConfig: heroConfigSchema.parse({
        heading: "Intelligence at Scale",
        headingAr: "ذكاء على نطاق واسع",
        highlightedWord: "Intelligence",
        highlightedWordAr: "ذكاء",
        subheading:
          "Harness the power of machine learning to transform your data into actionable insights. Enterprise-grade AI for everyone.",
        subheadingAr:
          "استغل قوة التعلم الآلي لتحويل بياناتك إلى رؤى قابلة للتنفيذ. ذكاء اصطناعي بمستوى المؤسسات للجميع.",
        badge: { text: "Trusted by Fortune 500", textAr: "موثوق من فورتشن 500" },
        ctaSecondary: {
          text: "Read Whitepaper",
          textAr: "اقرأ الورقة البيضاء",
          url: "#whitepaper",
        },
        stats: [
          { value: "5B+", label: "Predictions/Day", labelAr: "تنبؤ يومياً" },
          { value: "200+", label: "Enterprise Clients", labelAr: "عميل مؤسسي" },
          { value: "40+", label: "Countries", labelAr: "دولة" },
        ],
      }),
    },
    {
      id: "hero-template-15",
      name: "Kinetic Typography",
      nameAr: "طباعة حركية",
      description:
        "Words animate individually with stagger — Creative agencies, design studios, branding",
      component: HeroTemplate15,
      defaultConfig: heroConfigSchema.parse({
        heading: "We Make Brands Unforgettable",
        headingAr: "نصنع علامات تجارية لا تُنسى",
        highlightedWord: "Unforgettable",
        highlightedWordAr: "لا تُنسى",
        subheading:
          "From strategy to execution, we craft brand experiences that captivate audiences and drive growth.",
        subheadingAr:
          "من الاستراتيجية إلى التنفيذ، نصنع تجارب علامات تجارية تأسر الجمهور وتحقق النمو.",
        badge: { text: "Creative Studio", textAr: "استوديو إبداعي" },
        ctaSecondary: {
          text: "View Portfolio",
          textAr: "عرض الأعمال",
          url: "#portfolio",
        },
        stats: [
          { value: "150+", label: "Brands Built", labelAr: "علامة تم بناؤها" },
          { value: "25+", label: "Awards", labelAr: "جائزة" },
          { value: "8", label: "Years", labelAr: "سنوات" },
        ],
      }),
    },
    {
      id: "hero-template-16",
      name: "Retro Futuristic Grid",
      nameAr: "شبكة مستقبلية",
      description:
        "Synthwave perspective grid with neon glow and scanlines — Gaming, Web3, entertainment",
      component: HeroTemplate16,
      defaultConfig: heroConfigSchema.parse({
        heading: "Enter the Next Dimension",
        headingAr: "ادخل البُعد التالي",
        subheading:
          "Immersive digital experiences built for the next generation. Play, create, and connect in Web3.",
        subheadingAr:
          "تجارب رقمية غامرة مبنية للجيل القادم. العب، ابتكر، وتواصل في ويب 3.",
        badge: { text: "Beta Access", textAr: "وصول تجريبي" },
        ctaSecondary: {
          text: "Watch Trailer",
          textAr: "شاهد العرض",
          url: "#trailer",
        },
        stats: [
          { value: "1M+", label: "Players", labelAr: "لاعب" },
          { value: "50K", label: "NFTs Minted", labelAr: "NFT تم سكّها" },
          { value: "24/7", label: "Live", labelAr: "مباشر" },
        ],
      }),
    },
    {
      id: "hero-template-17",
      name: "Spotlight Reveal",
      nameAr: "كشف ضوئي",
      description:
        "Cinematic spotlight animation on dark background with viewfinder brackets — Premium, luxury, launches",
      component: HeroTemplate17,
      defaultConfig: heroConfigSchema.parse({
        heading: "Introducing Something Extraordinary",
        headingAr: "نقدم شيئاً استثنائياً",
        subheading:
          "A new standard of excellence. Crafted with precision, designed for those who demand the best.",
        subheadingAr:
          "معيار جديد للتميز. صُنع بدقة، ومُصمم لمن يطلبون الأفضل.",
        badge: { text: "Coming Soon", textAr: "قريباً" },
        ctaSecondary: {
          text: "Get Notified",
          textAr: "احصل على إشعار",
          url: "#notify",
        },
        stats: [
          { value: "3+", label: "Years in Making", labelAr: "سنوات تطوير" },
          { value: "1", label: "Vision", labelAr: "رؤية" },
          { value: "∞", label: "Possibilities", labelAr: "إمكانيات" },
        ],
      }),
    },
  ],
});
