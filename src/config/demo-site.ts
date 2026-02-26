import type { SectionData } from "@/types/blocks";
import type { SiteTheme } from "@/types/theme";

export const demoTheme: SiteTheme = {
  colors: {
    primary: "#2563EB",
    primaryForeground: "#FFFFFF",
    secondary: "#7C3AED",
    secondaryForeground: "#FFFFFF",
    accent: "#F59E0B",
    accentForeground: "#FFFFFF",
    background: "#FFFFFF",
    foreground: "#0F172A",
    muted: "#F1F5F9",
    mutedForeground: "#64748B",
    card: "#FFFFFF",
    cardForeground: "#0F172A",
    border: "#E2E8F0",
    ring: "#2563EB",
    success: "#16A34A",
    warning: "#EAB308",
    destructive: "#DC2626",
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  borderRadius: "md",
  direction: "ltr",
};

export const demoSections: SectionData[] = [
  {
    id: "1",
    blockType: "navbar",
    templateId: "navbar-template-01",
    config: {
      logo: "TechFlow",
      logoAr: "تك فلو",
      links: [
        { label: "Services", labelAr: "خدماتنا", url: "#services" },
        { label: "About", labelAr: "من نحن", url: "#about" },
        { label: "Pricing", labelAr: "الأسعار", url: "#pricing" },
        { label: "Contact", labelAr: "تواصل", url: "#contact" },
      ],
      ctaButton: {
        text: "Get Started",
        textAr: "ابدأ الآن",
        url: "#contact",
      },
      sticky: true,
      transparent: false,
    },
    sortOrder: 0,
    isVisible: true,
  },
  {
    id: "2",
    blockType: "hero",
    templateId: "hero-template-01",
    config: {
      heading: "Build Websites That Convert",
      headingAr: "ابنِ مواقع تحقق نتائج",
      subheading:
        "Create stunning, high-performance websites in minutes. Trusted by thousands of businesses worldwide.",
      subheadingAr:
        "أنشئ مواقع مذهلة وعالية الأداء في دقائق. موثوق من آلاف الشركات حول العالم.",
      ctaPrimary: {
        text: "Start Building Free",
        textAr: "ابدأ البناء مجاناً",
        url: "#signup",
      },
      ctaSecondary: {
        text: "Watch Demo",
        textAr: "شاهد العرض",
        url: "#demo",
      },
      badge: {
        text: "✨ Launching v2.0",
        textAr: "✨ إطلاق الإصدار 2.0",
      },
      stats: [
        { value: "10K+", label: "Websites Built", labelAr: "موقع تم بناؤه" },
        { value: "99.9%", label: "Uptime", labelAr: "وقت التشغيل" },
        { value: "150+", label: "Countries", labelAr: "دولة" },
      ],
    },
    sortOrder: 1,
    isVisible: true,
  },
  {
    id: "3",
    blockType: "clients",
    templateId: "clients-template-01",
    config: {
      heading: "Trusted By Industry Leaders",
      headingAr: "موثوق من قادة الصناعة",
      items: [
        { name: "Aramco" },
        { name: "STC" },
        { name: "NEOM" },
        { name: "SABIC" },
        { name: "Mobily" },
        { name: "Al Rajhi" },
      ],
    },
    sortOrder: 2,
    isVisible: true,
  },
  {
    id: "4",
    blockType: "services",
    templateId: "services-template-01",
    config: {
      heading: "What We Offer",
      headingAr: "ماذا نقدم",
      subheading:
        "Comprehensive solutions tailored to your business needs.",
      subheadingAr: "حلول شاملة مصممة خصيصاً لاحتياجات عملك.",
      items: [
        {
          icon: "code",
          title: "Web Development",
          titleAr: "تطوير المواقع",
          description:
            "Custom websites built with the latest technologies for optimal performance.",
          descriptionAr:
            "مواقع مخصصة مبنية بأحدث التقنيات لأداء مثالي.",
        },
        {
          icon: "smartphone",
          title: "Mobile Apps",
          titleAr: "تطبيقات الجوال",
          description:
            "Native and cross-platform mobile applications for iOS and Android.",
          descriptionAr:
            "تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android.",
        },
        {
          icon: "palette",
          title: "UI/UX Design",
          titleAr: "تصميم واجهات",
          description:
            "Beautiful, intuitive designs that delight users and drive engagement.",
          descriptionAr:
            "تصاميم جميلة وبديهية تُسعد المستخدمين وتزيد التفاعل.",
        },
        {
          icon: "bar-chart",
          title: "Digital Marketing",
          titleAr: "التسويق الرقمي",
          description:
            "Data-driven marketing strategies to grow your online presence.",
          descriptionAr:
            "استراتيجيات تسويق مبنية على البيانات لتنمية حضورك الرقمي.",
        },
        {
          icon: "shield",
          title: "Cybersecurity",
          titleAr: "الأمن السيبراني",
          description:
            "Protect your business with enterprise-grade security solutions.",
          descriptionAr:
            "احمِ أعمالك بحلول أمنية على مستوى المؤسسات.",
        },
        {
          icon: "cloud",
          title: "Cloud Solutions",
          titleAr: "حلول سحابية",
          description:
            "Scalable cloud infrastructure and migration services.",
          descriptionAr:
            "بنية سحابية قابلة للتوسع وخدمات الترحيل.",
        },
      ],
    },
    sortOrder: 3,
    isVisible: true,
  },
  {
    id: "5",
    blockType: "about",
    templateId: "about-template-01",
    config: {
      heading: "Who We Are",
      headingAr: "من نحن",
      content:
        "We are a passionate team of engineers, designers, and marketers dedicated to helping businesses build their digital presence. With over a decade of experience and a commitment to excellence, we deliver solutions that drive real results.",
      contentAr:
        "نحن فريق شغوف من المهندسين والمصممين والمسوقين المكرّسين لمساعدة الشركات في بناء حضورها الرقمي. بأكثر من عقد من الخبرة والتزام بالتميز، نقدم حلولاً تحقق نتائج حقيقية.",
      stats: [
        { value: "10+", label: "Years Experience", labelAr: "سنوات خبرة" },
        { value: "500+", label: "Projects Done", labelAr: "مشروع منجز" },
        { value: "100+", label: "Happy Clients", labelAr: "عميل سعيد" },
      ],
    },
    sortOrder: 4,
    isVisible: true,
  },
  {
    id: "6",
    blockType: "features",
    templateId: "features-template-01",
    config: {
      heading: "Everything You Need to Succeed",
      headingAr: "كل ما تحتاجه للنجاح",
      subheading:
        "Powerful features designed to help you build, launch, and grow your online presence.",
      subheadingAr:
        "ميزات قوية مصممة لمساعدتك في البناء والإطلاق وتنمية حضورك الرقمي.",
      items: [
        {
          icon: "zap",
          title: "Lightning Fast",
          titleAr: "سرعة البرق",
          description:
            "Every page loads in under 2 seconds. Optimized for Core Web Vitals.",
          descriptionAr:
            "كل صفحة تحمل في أقل من ثانيتين. محسّن لمؤشرات الويب الأساسية.",
        },
        {
          icon: "shield",
          title: "Enterprise Security",
          titleAr: "أمان المؤسسات",
          description:
            "SSL encryption, DDoS protection, and automatic backups included.",
          descriptionAr:
            "تشفير SSL، حماية DDoS، ونسخ احتياطية تلقائية مضمنة.",
        },
        {
          icon: "globe",
          title: "Bilingual Support",
          titleAr: "دعم ثنائي اللغة",
          description:
            "Native Arabic RTL and English LTR support built into every template.",
          descriptionAr:
            "دعم أصلي للعربية والإنجليزية مدمج في كل قالب.",
        },
        {
          icon: "palette",
          title: "Beautiful Templates",
          titleAr: "قوالب جميلة",
          description:
            "112 professionally designed templates across 13 industries.",
          descriptionAr:
            "112 قالب مصمم بشكل احترافي عبر 13 صناعة.",
        },
        {
          icon: "smartphone",
          title: "Mobile First",
          titleAr: "الموبايل أولاً",
          description:
            "Responsive design that looks perfect on every screen size.",
          descriptionAr:
            "تصميم متجاوب يبدو مثالياً على كل حجم شاشة.",
        },
        {
          icon: "headphones",
          title: "24/7 Support",
          titleAr: "دعم مستمر",
          description:
            "Our team is always here to help you build something amazing.",
          descriptionAr:
            "فريقنا متاح دائماً لمساعدتك في بناء شيء مذهل.",
        },
      ],
    },
    sortOrder: 5,
    isVisible: true,
  },
  {
    id: "7",
    blockType: "stats",
    templateId: "stats-template-01",
    config: {
      items: [
        { value: "10K+", label: "Happy Clients", labelAr: "عميل سعيد" },
        { value: "500+", label: "Projects Completed", labelAr: "مشروع مكتمل" },
        { value: "99%", label: "Satisfaction Rate", labelAr: "نسبة الرضا" },
        { value: "24/7", label: "Support Available", labelAr: "دعم متاح" },
      ],
    },
    sortOrder: 6,
    isVisible: true,
  },
  {
    id: "8",
    blockType: "testimonials",
    templateId: "testimonials-template-02",
    config: {
      heading: "What Our Clients Say",
      headingAr: "ماذا يقول عملاؤنا",
      subheading:
        "Don't just take our word for it — hear from some of our satisfied customers.",
      subheadingAr:
        "لا تأخذ كلمتنا فقط — اسمع من بعض عملائنا الراضين.",
      items: [
        {
          name: "Sarah Johnson",
          nameAr: "سارة جونسون",
          role: "CEO, TechStart",
          roleAr: "المديرة التنفيذية، تك ستارت",
          text: "This platform completely transformed our online presence. We saw a 200% increase in leads within the first month.",
          textAr:
            "هذه المنصة حولت حضورنا الرقمي بالكامل. شهدنا زيادة 200% في العملاء المحتملين خلال الشهر الأول.",
          rating: 5,
        },
        {
          name: "Ahmed Al-Rashid",
          nameAr: "أحمد الراشد",
          role: "Founder, DesignHub",
          roleAr: "المؤسس، ديزاين هب",
          text: "The bilingual support is incredible. Our Arabic and English customers both have a seamless experience.",
          textAr:
            "الدعم ثنائي اللغة مذهل. عملاؤنا العرب والإنجليز يحظون بتجربة سلسة.",
          rating: 5,
        },
        {
          name: "Maria Santos",
          nameAr: "ماريا سانتوس",
          role: "Marketing Director, GrowthCo",
          roleAr: "مديرة التسويق، غروث كو",
          text: "Easy to use, beautiful templates, and outstanding customer support. Highly recommend!",
          textAr:
            "سهل الاستخدام، قوالب جميلة، ودعم عملاء متميز. أنصح به بشدة!",
          rating: 5,
        },
        {
          name: "Khalid Ibrahim",
          nameAr: "خالد إبراهيم",
          role: "Owner, Khalid Restaurant",
          roleAr: "مالك، مطعم خالد",
          text: "Our restaurant website looks absolutely stunning. Customers can now easily browse our menu and make reservations.",
          textAr:
            "موقع مطعمنا يبدو رائعاً. يمكن للعملاء الآن تصفح القائمة بسهولة وإجراء الحجوزات.",
          rating: 5,
        },
      ],
    },
    sortOrder: 7,
    isVisible: true,
  },
  {
    id: "9",
    blockType: "team",
    templateId: "team-template-01",
    config: {
      heading: "Meet Our Team",
      headingAr: "تعرّف على فريقنا",
      subheading: "The talented people behind our success.",
      subheadingAr: "الأشخاص الموهوبون وراء نجاحنا.",
      items: [
        {
          name: "Ahmad Hassan",
          nameAr: "أحمد حسن",
          role: "CEO & Founder",
          roleAr: "المدير التنفيذي والمؤسس",
          bio: "10+ years of experience in tech leadership.",
          bioAr: "أكثر من 10 سنوات خبرة في القيادة التقنية.",
          socials: [
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" },
          ],
        },
        {
          name: "Fatima Al-Zahra",
          nameAr: "فاطمة الزهراء",
          role: "Head of Design",
          roleAr: "رئيسة قسم التصميم",
          bio: "Award-winning designer with a passion for user experience.",
          bioAr: "مصممة حائزة على جوائز بشغف لتجربة المستخدم.",
          socials: [
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" },
          ],
        },
        {
          name: "Omar Khaled",
          nameAr: "عمر خالد",
          role: "Lead Developer",
          roleAr: "المطور الرئيسي",
          bio: "Full-stack developer specialized in scalable web applications.",
          bioAr: "مطور متكامل متخصص في تطبيقات الويب القابلة للتوسع.",
          socials: [
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" },
          ],
        },
        {
          name: "Nora Abdullah",
          nameAr: "نورة عبدالله",
          role: "Marketing Manager",
          roleAr: "مديرة التسويق",
          bio: "Digital marketing expert with a data-driven approach.",
          bioAr: "خبيرة تسويق رقمي بنهج مبني على البيانات.",
          socials: [
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" },
          ],
        },
      ],
    },
    sortOrder: 8,
    isVisible: true,
  },
  {
    id: "10",
    blockType: "pricing",
    templateId: "pricing-template-02",
    config: {
      heading: "Simple, Transparent Pricing",
      headingAr: "أسعار بسيطة وشفافة",
      subheading:
        "Choose the plan that's right for your business. No hidden fees.",
      subheadingAr: "اختر الخطة المناسبة لعملك. بدون رسوم مخفية.",
      currency: "SAR",
      currencyAr: "ر.س",
      billingToggle: true,
      plans: [
        {
          name: "Starter",
          nameAr: "المبتدئ",
          description: "Perfect for individuals",
          descriptionAr: "مثالي للأفراد",
          priceMonthly: 0,
          priceYearly: 0,
          features: [
            "1 Website",
            "5 Pages",
            "Basic Templates",
            "Community Support",
          ],
          featuresAr: [
            "موقع واحد",
            "5 صفحات",
            "قوالب أساسية",
            "دعم مجتمعي",
          ],
          cta: "Start Free",
          ctaAr: "ابدأ مجاناً",
          highlighted: false,
        },
        {
          name: "Professional",
          nameAr: "الاحترافي",
          description: "Best for growing businesses",
          descriptionAr: "الأفضل للأعمال المتنامية",
          priceMonthly: 49,
          priceYearly: 490,
          features: [
            "5 Websites",
            "Unlimited Pages",
            "All Templates",
            "Priority Support",
            "Blog & CMS",
            "Analytics",
          ],
          featuresAr: [
            "5 مواقع",
            "صفحات غير محدودة",
            "جميع القوالب",
            "دعم أولوي",
            "مدونة ونظام محتوى",
            "تحليلات",
          ],
          cta: "Get Started",
          ctaAr: "ابدأ الآن",
          highlighted: true,
          badge: "Most Popular",
          badgeAr: "الأكثر شعبية",
        },
        {
          name: "Enterprise",
          nameAr: "المؤسسات",
          description: "For large organizations",
          descriptionAr: "للمؤسسات الكبيرة",
          priceMonthly: 149,
          priceYearly: 1490,
          features: [
            "Unlimited Websites",
            "Unlimited Pages",
            "All Templates",
            "24/7 Support",
            "Blog & CMS",
            "Advanced Analytics",
            "Custom Domain",
            "White Label",
          ],
          featuresAr: [
            "مواقع غير محدودة",
            "صفحات غير محدودة",
            "جميع القوالب",
            "دعم على مدار الساعة",
            "مدونة ونظام محتوى",
            "تحليلات متقدمة",
            "نطاق مخصص",
            "علامة بيضاء",
          ],
          cta: "Contact Sales",
          ctaAr: "تواصل معنا",
          highlighted: false,
        },
      ],
    },
    sortOrder: 9,
    isVisible: true,
  },
  {
    id: "11",
    blockType: "faq",
    templateId: "faq-template-01",
    config: {
      heading: "Frequently Asked Questions",
      headingAr: "الأسئلة الشائعة",
      subheading:
        "Everything you need to know. Can't find the answer? Contact us.",
      subheadingAr:
        "كل ما تحتاج معرفته. لم تجد الإجابة؟ تواصل معنا.",
      items: [
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
            "Absolutely! Every template supports both Arabic (RTL) and English (LTR) out of the box.",
          answerAr:
            "بالتأكيد! كل قالب يدعم العربية (RTL) والإنجليزية (LTR) بشكل مدمج.",
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
            "We offer email support for all plans, priority support for Pro, and 24/7 dedicated support for Enterprise.",
          answerAr:
            "نوفر دعم عبر البريد لجميع الخطط، دعم أولوي للاحترافي، ودعم مخصص على مدار الساعة للمؤسسات.",
        },
      ],
    },
    sortOrder: 10,
    isVisible: true,
  },
  {
    id: "12",
    blockType: "cta",
    templateId: "cta-template-01",
    config: {
      heading: "Ready to Build Your Website?",
      headingAr: "مستعد لبناء موقعك؟",
      description:
        "Join thousands of businesses that trust TechFlow. Start building your website today — it's free.",
      descriptionAr:
        "انضم إلى آلاف الشركات التي تثق بتك فلو. ابدأ بناء موقعك اليوم — مجاناً.",
      buttonText: "Get Started Free",
      buttonTextAr: "ابدأ مجاناً",
      buttonUrl: "#signup",
    },
    sortOrder: 11,
    isVisible: true,
  },
  {
    id: "13",
    blockType: "contact",
    templateId: "contact-template-01",
    config: {
      heading: "Get In Touch",
      headingAr: "تواصل معنا",
      subheading:
        "Have a question or want to work together? We'd love to hear from you.",
      subheadingAr:
        "لديك سؤال أو تريد العمل معنا؟ يسعدنا سماعك.",
      email: "hello@techflow.com",
      phone: "+966 50 123 4567",
      address: "King Fahd Road, Riyadh, Saudi Arabia",
      addressAr: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
      formFields: [
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
      ],
      submitText: "Send Message",
      submitTextAr: "إرسال الرسالة",
    },
    sortOrder: 12,
    isVisible: true,
  },
  {
    id: "14",
    blockType: "footer",
    templateId: "footer-template-01",
    config: {
      logo: "TechFlow",
      logoAr: "تك فلو",
      description:
        "Build beautiful, fast websites in minutes. Trusted by 10,000+ businesses.",
      descriptionAr:
        "ابنِ مواقع جميلة وسريعة في دقائق. موثوق من أكثر من 10,000 شركة.",
      columns: [
        {
          title: "Product",
          titleAr: "المنتج",
          links: [
            { label: "Features", labelAr: "المميزات", url: "#features" },
            { label: "Templates", labelAr: "القوالب", url: "#templates" },
            { label: "Pricing", labelAr: "الأسعار", url: "#pricing" },
            { label: "Changelog", labelAr: "التحديثات", url: "#changelog" },
          ],
        },
        {
          title: "Company",
          titleAr: "الشركة",
          links: [
            { label: "About", labelAr: "من نحن", url: "#about" },
            { label: "Blog", labelAr: "المدونة", url: "#blog" },
            { label: "Careers", labelAr: "الوظائف", url: "#careers" },
          ],
        },
        {
          title: "Legal",
          titleAr: "قانوني",
          links: [
            { label: "Privacy", labelAr: "الخصوصية", url: "#privacy" },
            { label: "Terms", labelAr: "الشروط", url: "#terms" },
          ],
        },
      ],
      copyright: "© 2026 TechFlow. All rights reserved.",
      copyrightAr: "© 2026 تك فلو. جميع الحقوق محفوظة.",
      socials: [
        { platform: "twitter", url: "#" },
        { platform: "instagram", url: "#" },
        { platform: "linkedin", url: "#" },
      ],
    },
    sortOrder: 13,
    isVisible: true,
  },
];
