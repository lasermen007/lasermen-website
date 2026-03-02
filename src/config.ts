// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "LaserMen - 专业激光设备制造商",
  description: "LaserMen是济南领先的激光设备制造商，提供光纤激光切割机、CO2激光雕刻机、激光焊接机、激光打标机等高品质激光加工解决方案。",
  language: "zh-CN",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "LaserMen",
  menuLinks: [
    { label: "首页", href: "#hero" },
    { label: "产品中心", href: "#products" },
    { label: "关于我们", href: "#about" },
    { label: "新闻资讯", href: "#blog" },
    { label: "常见问题", href: "#faq" },
    { label: "联系我们", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
  ],
  searchPlaceholder: "搜索激光设备...",
  cartEmptyText: "询价清单为空",
  cartCheckoutText: "提交询价",
  continueShoppingText: "继续浏览",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "专业激光设备制造商",
  title: "精密激光\n切割未来",
  ctaPrimaryText: "浏览产品",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "了解我们",
  ctaSecondaryTarget: "#about",
  backgroundImage: "/images/hero-laser.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "企业理念",
  heading: "以光为刃，精准智造",
  bodyParagraphs: [
    "LaserMen成立于2012年，是一家集研发、设计、生产、销售、服务于一体的现代化激光设备生产企业。我们专注于为全球用户提供高品质的激光加工解决方案。",
    "凭借十余年的技术积累和创新，我们的产品已遍布全球150多个国家和地区，涵盖光纤激光切割、CO2激光雕刻、激光焊接、激光打标等多个领域。",
  ],
  linkText: "了解更多",
  linkTarget: "#about",
  image1: "/images/subhero-1.jpg",
  image2: "/images/subhero-2.jpg",
  stats: [
    { value: 12, suffix: "+", label: "年行业经验" },
    { value: 150, suffix: "+", label: "服务国家" },
    { value: 98, suffix: "%", label: "客户满意度" },
    { value: 5000, suffix: "+", label: "设备出货量" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "制造实力",
  heading: "先进的生产体系",
  bodyParagraphs: [
    "我们拥有现代化的生产车间和完善的品质管理体系，从原材料采购到成品出厂，每个环节都严格把控。",
    "配备先进的加工设备和检测仪器，确保每一台激光设备都达到国际标准，为客户提供可靠的产品保障。",
  ],
  ctaText: "参观工厂",
  ctaTarget: "#contact",
  backgroundImage: "/images/video-bg.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "产品中心",
  heading: "激光设备系列",
  description: "我们提供全系列激光加工设备，满足不同行业的切割、雕刻、焊接、打标需求。",
  viewAllText: "查看全部",
  addToCartText: "加入询价",
  addedToCartText: "已添加",
  categories: ["全部", "激光切割", "激光雕刻", "激光焊接", "激光打标", "激光清洗"],
  products: [
    { id: 1, name: "光纤激光切割机", price: 35000, category: "激光切割", image: "/images/product-fiber.jpg" },
    { id: 2, name: "CO2激光雕刻机", price: 8500, category: "激光雕刻", image: "/images/product-co2.jpg" },
    { id: 3, name: "手持激光焊接机", price: 12000, category: "激光焊接", image: "/images/product-welding.jpg" },
    { id: 4, name: "光纤激光打标机", price: 5500, category: "激光打标", image: "/images/product-marking.jpg" },
    { id: 5, name: "混合激光切割机", price: 28000, category: "激光切割", image: "/images/product-hybrid.jpg" },
    { id: 6, name: "激光清洗机", price: 15000, category: "激光清洗", image: "/images/product-cleaning.jpg" },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Truck",
      title: "全球配送",
      description: "支持海运、空运等多种运输方式，产品远销全球150多个国家和地区。",
    },
    {
      icon: "ShieldCheck",
      title: "品质保障",
      description: "通过CE、ISO等国际认证，提供2年质保和终身维护服务。",
    },
    {
      icon: "Leaf",
      title: "绿色环保",
      description: "采用先进的激光技术，无污染、低能耗，符合环保标准。",
    },
    {
      icon: "Heart",
      title: "贴心服务",
      description: "7x24小时在线支持，提供安装调试、操作培训等全方位服务。",
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "新闻资讯",
  heading: "行业动态",
  viewAllText: "查看全部",
  readMoreText: "阅读更多",
  posts: [
    {
      id: 1,
      title: "LaserMen参加2024国际激光技术展览会",
      date: "2024年3月15日",
      image: "/images/blog-1.jpg",
      excerpt: "我们携最新研发的光纤激光切割机和手持焊接机亮相展会，获得广泛关注。",
    },
    {
      id: 2,
      title: "新一代智能激光切割头正式发布",
      date: "2024年2月28日",
      image: "/images/blog-2.jpg",
      excerpt: "采用全新光学设计，切割效率提升30%，精度更高，使用寿命更长。",
    },
    {
      id: 3,
      title: "售后服务升级，客户满意度再创新高",
      date: "2024年2月10日",
      image: "/images/blog-3.jpg",
      excerpt: "我们建立了完善的全球服务网络，为客户提供更快速、更专业的技术支持。",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "常见问题",
  heading: "客户问答",
  ctaText: "还有其他问题？联系我们",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "如何选择适合的激光设备？",
      answer: "选择激光设备需要考虑加工材料、厚度、精度要求等因素。您可以告诉我们您的具体需求，我们的技术团队会为您推荐最合适的设备型号。",
    },
    {
      id: 2,
      question: "设备的保修期是多久？",
      answer: "我们提供2年整机保修，激光管根据不同功率提供3-12个月的保修期。同时提供终身维护服务和技术支持。",
    },
    {
      id: 3,
      question: "是否提供上门安装和培训？",
      answer: "是的，我们提供免费的上门安装调试服务，并对操作人员进行专业培训，确保您能熟练使用设备。",
    },
    {
      id: 4,
      question: "设备可以切割哪些材料？",
      answer: "光纤激光切割机可切割不锈钢、碳钢、铝合金等金属材料；CO2激光机可切割亚克力、木材、皮革、布料等非金属材料。混合激光机可同时处理两类材料。",
    },
    {
      id: 5,
      question: "如何获取设备报价？",
      answer: "您可以通过网站询价功能、电话或邮件联系我们，提供您的加工需求，我们会在24小时内为您提供详细报价。",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "关于我们",
      heading: "专注激光，成就卓越",
      paragraphs: [
        "LaserMen（济南雷瑟门数控设备有限公司）成立于2012年，是一家专业从事激光设备研发、生产和销售的高新技术企业。",
        "我们拥有经验丰富的研发团队和先进的生产设备，产品涵盖光纤激光切割机、CO2激光雕刻机、激光焊接机、激光打标机等多个系列。",
      ],
      quote: "",
      attribution: "",
      image: "/images/about-1.jpg",
      backgroundColor: "#1a1a2e",
      textColor: "#ffffff",
    },
    {
      tag: "企业愿景",
      heading: "让激光技术服务于全球制造",
      paragraphs: [],
      quote: "我们致力于成为全球领先的激光设备供应商，以创新技术推动制造业升级，为客户创造更大价值。",
      attribution: "—— LaserMen 创始人",
      image: "/images/about-2.jpg",
      backgroundColor: "#16213e",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "联系我们",
  description: "有任何问题或需求？请随时与我们联系，我们的团队将在24小时内回复您。",
  locationLabel: "地址",
  location: "山东省济南市高新区工业南路59号",
  emailLabel: "邮箱",
  email: "sales@lasermen.cn",
  phoneLabel: "电话",
  phone: "+86 531 8888 8888",
  formFields: {
    nameLabel: "姓名",
    namePlaceholder: "请输入您的姓名",
    emailLabel: "邮箱",
    emailPlaceholder: "请输入您的邮箱",
    messageLabel: "留言",
    messagePlaceholder: "请描述您的需求...",
  },
  submitText: "发送留言",
  submittingText: "发送中...",
  submittedText: "已发送",
  successMessage: "感谢您的留言，我们会尽快与您联系！",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "LaserMen",
  brandDescription: "专业激光设备制造商，致力于为全球客户提供高品质的激光加工解决方案。",
  newsletterHeading: "订阅资讯",
  newsletterDescription: "订阅我们的邮件，获取最新产品信息和行业动态。",
  newsletterPlaceholder: "请输入您的邮箱",
  newsletterButtonText: "订阅",
  newsletterSuccessText: "订阅成功！",
  linkGroups: [
    {
      title: "产品中心",
      links: [
        { label: "光纤激光切割机", href: "#products" },
        { label: "CO2激光雕刻机", href: "#products" },
        { label: "激光焊接机", href: "#products" },
        { label: "激光打标机", href: "#products" },
      ],
    },
    {
      title: "服务支持",
      links: [
        { label: "技术支持", href: "#" },
        { label: "售后服务", href: "#" },
        { label: "配件中心", href: "#" },
        { label: "常见问题", href: "#faq" },
      ],
    },
    {
      title: "关于我们",
      links: [
        { label: "公司简介", href: "#about" },
        { label: "新闻资讯", href: "#blog" },
        { label: "加入我们", href: "#" },
        { label: "联系我们", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
  ],
  copyrightText: "© 2024 LaserMen. 保留所有权利。",
  socialLinks: [
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
  ],
};
