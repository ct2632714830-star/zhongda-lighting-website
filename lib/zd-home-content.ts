import type { Locale } from "@/lib/i18n";

export const assetPaths = {
  logo: "/zd-site/zd-logo.jpg",
  hero: "/zd-site/hero-lobby.png",
  banquet: "/zd-site/project-banquet.png",
  villa: "/zd-site/project-villa.png",
  craft: "/zd-site/craft-detail.png",
  founder: "/zd-site/founder-zeng-weihong.png",
  building: "/zd-site/company-building.png",
  projectHotelLobby: "/zd-site/projects/luxury-hotel-lobby.png",
  projectBanquetHall: "/zd-site/projects/grand-banquet-hall.jpg",
  projectResortReception: "/zd-site/projects/resort-reception.png",
  projectCommercialSpace: "/zd-site/projects/landmark-commercial-space.png"
};

export const navItems = [
  ["home", "Home"],
  ["collections", "Collections"],
  ["projects", "Projects"],
  ["bespoke", "Bespoke"],
  ["about", "About"],
  ["contact", "Contact"]
] as const;

const english = {
  nav: {
    home: "Home",
    collections: "Collections",
    projects: "Projects",
    bespoke: "Bespoke",
    about: "About",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Zhongda Lighting / 中大灯饰",
    title: "Lighting, Crafted for Space.",
    subtitle: "Bespoke lighting for hotels, villas, and landmark interiors.",
    primary: "Explore Collections",
    secondary: "Start a Bespoke Project",
    note: "Custom chandeliers, crystal installations, and engineered decorative lighting for refined architecture."
  },
  capabilities: [
    ["Bespoke Design", "Tailored lighting solutions for unique architectural spaces."],
    ["Hospitality Projects", "Signature lighting for luxury hotels, resorts, and banquet halls."],
    ["Villa & Residence", "Artistic lighting for refined private interiors."],
    ["Craftsmanship", "Premium materials, precision details, and expert finishing."]
  ],
  sectionLabels: {
    capabilities: "Core Capabilities",
    projects: "Signature Projects",
    process: "Bespoke Process",
    materials: "Materials & Craftsmanship",
    about: "About Brand",
    location: "Company Location",
    contact: "Project Inquiry"
  },
  sectionTitles: {
    capabilities: "Designed for projects that need more than a fixture.",
    projects: "Signature Projects",
    process: "From first sketch to installation support.",
    materials: "Materials that make quiet luxury visible."
  },
  materialIntro: "A restrained material palette, presented with the clarity and calm of a premium product showcase.",
  projectIntro: "Quietly expressive lighting, developed for spaces where every detail has to feel intentional.",
  viewProject: "View Project",
  projects: [
    ["Luxury Hotel Lobby", "The Ritz-Carlton Hotel", "A sculptural arrival moment for a five-star hospitality interior.", assetPaths.projectHotelLobby],
    ["Grand Banquet Hall", "The Ritz-Carlton Hotel", "Layered crystal light composed for ceremonies and large-scale events.", assetPaths.projectBanquetHall],
    ["Resort Reception", "The Indigo Hotel", "Warm decorative lighting for calm resort arrivals.", assetPaths.projectResortReception],
    ["Landmark Commercial Space", "Wanda Vista Hotel", "A precise light feature designed as spatial identity.", assetPaths.projectCommercialSpace],
    ["Private Villa", "Dubai, UAE", "A double-height residence installation with soft architectural presence.", assetPaths.villa],
    ["Custom Crystal Installation", "Global Projects", "Bespoke crystal and metal details engineered for project delivery.", assetPaths.craft]
  ],
  process: ["Consultation", "Concept Design", "3D Drawing", "Sampling", "Production", "Quality Check", "Delivery & Installation"],
  materials: [
    ["Crystal", "Optical clarity, delicate refraction, and chandelier-grade detailing."],
    ["Brass", "Warm champagne tone with refined brushed or polished finishes."],
    ["Stainless Steel", "Precise structure, clean edges, and long-term durability."],
    ["Glass", "Soft translucency for sculptural lighting volumes."],
    ["Acrylic", "Lightweight diffusion for modern custom forms."],
    ["Custom Metal Finish", "Project-specific color, texture, and surface treatment."]
  ],
  about: {
    title: "The Art of Light, Built with Precision.",
    body:
      "Zhongda Lighting creates bespoke decorative lighting for luxury hospitality, private residences, and landmark interiors. From concept development to production and installation support, we transform light into atmosphere.",
    stats: [["20+", "Years craft focus"], ["4000+", "Project references"], ["96", "Countries served"]],
    videoLabel: "Craft In Motion",
    videoText: "Light, material, and precision shown through Zhongda Lighting's production detail."
  },
  location: {
    title: "Zhongda Lighting Co., Ltd.",
    address: ["No. 2 Rongjing Road,", "Zhongshan City, Guangdong Province, China"],
    view: "View Location",
    business: "Business Information",
    imageLabel: "Zhongshan / Guangdong / China",
    imageText: "Design, development, and manufacturing under one roof."
  },
  trusted: {
    eyebrow: "Global Luxury Hospitality",
    title: "Trusted by Global Luxury Hospitality Brands",
    body1: "Zhongda Lighting has served and participated in lighting projects for many world-renowned hotel and commercial brands.",
    body2: "Behind every project is our commitment to bespoke design, precise craftsmanship, strict quality control, and reliable project delivery.",
    closing: "Zhongda Lighting - Bespoke Lighting for Landmark Spaces."
  },
  founder: {
    eyebrow: "Founder Profile",
    title: "Built with responsibility, shaped by light.",
    quote: "Lighting is more than illumination. It is an expression of space, architecture, atmosphere, and refined taste.",
    paragraphs: [
      "Mr. Zeng Weihong comes from a small city in China. Without a privileged background or an easy path, he built his career step by step through dedication, perseverance, and a deep passion for the lighting industry.",
      "From his early days in lighting manufacturing to the establishment of ZD Lighting, he has led the company with one clear standard: every project is both a business opportunity and a responsibility.",
      "Under his leadership, ZD Lighting treats every communication, drawing, sample, component, and finish with care, because in high-end interiors there are no small details."
    ],
    principles: [
      "Bespoke lighting for luxury hotels, private villas, clubs, and high-end commercial spaces.",
      "Strict control from design development and material selection to testing, production, and installation support.",
      "A belief that true luxury is restraint, detail, quality, and long-term trust."
    ],
    closing: "ZD Lighting - Shaping Spaces Through Light, Earning Trust Through Quality.",
    founderRole: "Founder of ZD Lighting"
  },
  contact: {
    title: "Tell us about the space.",
    subtitle: "Share drawings, references, or a simple idea. Our team will help shape the lighting direction.",
    whatsapp: "WhatsApp",
    submit: "Submit Project Inquiry",
    labels: {
      name: "Name",
      company: "Company",
      country: "Country",
      projectType: "Project Type",
      contact: "Email / WhatsApp",
      message: "Message",
      upload: "Upload Drawing or Reference Image"
    },
    placeholder: "Tell us about the project size, space type, schedule, or reference style.",
    projectTypes: ["Hotel", "Villa", "Resort", "Clubhouse", "Commercial Space", "Custom Installation"]
  },
  footer: {
    studio: "Bespoke Lighting Studio",
    intro: "Bespoke decorative lighting for luxury hospitality, villas, clubhouses, and landmark interiors.",
    copyright: "© 2026 Zhongda Lighting / Zhongda Lighting. All rights reserved.",
    inquiry: "Inquiry"
  }
};

export const homeContent: Record<Locale, typeof english> = {
  en: english,
  zh: {
    ...english,
    nav: { home: "首页", collections: "系列", projects: "项目", bespoke: "定制", about: "关于", contact: "联系" },
    hero: {
      eyebrow: "中大灯饰 / Zhongda Lighting",
      title: "为空间定制光。",
      subtitle: "服务高端酒店、别墅与地标空间的非标定制灯饰。",
      primary: "探索系列",
      secondary: "开始定制项目",
      note: "定制吊灯、水晶装置与工程化装饰照明，为高级建筑空间而生。"
    },
    capabilities: [
      ["非标定制设计", "为独特建筑空间提供专属灯光解决方案。"],
      ["酒店工程项目", "服务高端酒店、度假村与宴会厅的标志性灯饰。"],
      ["别墅与私宅", "为精致私宅空间打造艺术化装饰照明。"],
      ["精工制造", "严选材质、精准细节与专业表面处理。"]
    ],
    sectionLabels: {
      capabilities: "核心能力",
      projects: "精选项目",
      process: "定制流程",
      materials: "材质与工艺",
      about: "品牌介绍",
      location: "公司位置",
      contact: "项目询盘"
    },
    sectionTitles: {
      capabilities: "为需要的不止是一盏灯的项目而设计。",
      projects: "精选项目",
      process: "从初步草图到安装支持。",
      materials: "让静奢质感被看见的材料。"
    },
    materialIntro: "以克制的材料语言，呈现高级产品展示所需要的清晰、安静与质感。",
    projectIntro: "克制而有记忆点的灯光表达，为每个细节都需要被认真对待的空间而设计。",
    viewProject: "查看项目",
    projects: [
      ["豪华酒店大堂", "The Ritz-Carlton Hotel", "为五星级酒店入口打造雕塑感灯光记忆点。", assetPaths.projectHotelLobby],
      ["大型宴会厅", "The Ritz-Carlton Hotel", "为典礼与大型活动空间构建层次丰富的水晶灯光。", assetPaths.projectBanquetHall],
      ["私人别墅", "阿联酋 · 迪拜", "为挑高私宅空间定制柔和而有存在感的灯光装置。", assetPaths.villa],
      ["度假酒店接待区", "The Indigo Hotel", "以温润装饰灯光塑造平静的度假抵达体验。", assetPaths.projectResortReception],
      ["地标商业空间", "Wanda Vista Hotel", "以精准灯光特征塑造空间识别度。", assetPaths.projectCommercialSpace],
      ["定制水晶装置", "全球项目", "为项目交付工程化的水晶与金属细节。", assetPaths.craft]
    ],
    process: ["沟通咨询", "概念设计", "3D 图纸", "样品确认", "生产制造", "质量检查", "交付与安装"],
    materials: [
      ["水晶", "清澈透光、细腻折射与吊灯级细节。"],
      ["黄铜", "温润香槟色调，可做拉丝或抛光效果。"],
      ["不锈钢", "结构精准、边缘利落、耐用稳定。"],
      ["玻璃", "柔和透光，适合雕塑化灯光体量。"],
      ["亚克力", "轻量扩散，适合现代定制造型。"],
      ["定制金属表面", "根据项目定制颜色、纹理与表面处理。"]
    ],
    about: {
      title: "光的艺术，以精密制造实现。",
      body: "中大灯饰为高端酒店、私宅与地标空间打造非标定制装饰灯。从概念深化到生产与安装支持，我们把光转化为空间氛围。",
      stats: [["20+", "专注灯饰工艺"], ["4000+", "项目案例"], ["96", "服务国家"]],
      videoLabel: "工艺影像",
      videoText: "通过生产细节呈现中大灯饰对光、材料与精度的理解。"
    },
    location: {
      title: "中大灯饰有限公司",
      address: ["荣景路 2 号，", "中国广东省中山市"],
      view: "查看位置",
      business: "工商信息",
      imageLabel: "中山 / 广东 / 中国",
      imageText: "设计、深化与制造，在同一体系下完成。"
    },
    trusted: {
      eyebrow: "全球高端酒店项目",
      title: "受到全球高端酒店品牌信赖",
      body1: "中大灯饰曾服务并参与多个世界知名酒店与商业品牌的灯饰项目。",
      body2: "每个项目背后，都是我们对非标设计、精密工艺、严格品控与可靠交付的坚持。",
      closing: "中大灯饰 - 为地标空间定制灯光。"
    },
    founder: {
      eyebrow: "创始人介绍",
      title: "以责任建立，以光塑造。",
      quote: "灯光不只是照明，它是空间、建筑、氛围与审美品位的表达。",
      paragraphs: [
        "曾伟洪先生来自中国的一座小城市。没有优越的背景，也没有轻松的道路，他凭借坚持、勤奋和对灯饰行业的热爱，一步一步建立起自己的事业。",
        "从早期灯饰制造经验到创立中大灯饰，他始终坚持一个清晰标准：每一个项目既是商业机会，也是一份责任。",
        "在他的带领下，中大灯饰认真对待每一次沟通、每一张图纸、每一个样品、每一个零件和每一道表面处理，因为在高端空间里没有小细节。"
      ],
      principles: [
        "服务高端酒店、私人别墅、会所与高端商业空间的非标定制灯饰。",
        "从设计深化、材料选择到测试、生产与安装支持，全流程严格控制。",
        "相信真正的奢华来自克制、细节、品质与长期信任。"
      ],
      closing: "中大灯饰 - 用光塑造空间，以品质赢得信任。",
      founderRole: "中大灯饰创始人"
    },
    contact: {
      title: "告诉我们你的空间。",
      subtitle: "可以发送图纸、参考图片或简单想法，我们会协助你梳理灯光定制方向。",
      whatsapp: "WhatsApp",
      submit: "提交项目询盘",
      labels: {
        name: "姓名",
        company: "公司",
        country: "国家",
        projectType: "项目类型",
        contact: "邮箱 / WhatsApp",
        message: "留言",
        upload: "上传图纸或参考图片"
      },
      placeholder: "请描述项目面积、空间类型、时间计划或参考风格。",
      projectTypes: ["酒店", "别墅", "度假村", "会所", "商业空间", "定制装置"]
    },
    footer: {
      studio: "非标定制灯饰工作室",
      intro: "为高端酒店、别墅、会所与地标空间提供非标定制装饰照明。",
      copyright: "© 2026 中大灯饰 / Zhongda Lighting. 保留所有权利。",
      inquiry: "询盘"
    }
  },
  vi: {
    ...english,
    nav: { home: "Trang chủ", collections: "Bộ sưu tập", projects: "Dự án", bespoke: "Tùy chỉnh", about: "Giới thiệu", contact: "Liên hệ" },
    hero: {
      eyebrow: "Zhongda Lighting / 中大灯饰",
      title: "Ánh sáng được chế tác cho không gian.",
      subtitle: "Đèn tùy chỉnh cho khách sạn cao cấp, biệt thự và không gian biểu tượng.",
      primary: "Khám phá bộ sưu tập",
      secondary: "Bắt đầu dự án",
      note: "Đèn chùm tùy chỉnh, lắp đặt pha lê và giải pháp chiếu sáng trang trí kỹ thuật cho kiến trúc tinh tế."
    },
    sectionLabels: {
      capabilities: "Năng lực cốt lõi",
      projects: "Dự án tiêu biểu",
      process: "Quy trình tùy chỉnh",
      materials: "Vật liệu & thủ công",
      about: "Thương hiệu",
      location: "Vị trí công ty",
      contact: "Yêu cầu dự án"
    },
    sectionTitles: {
      capabilities: "Thiết kế cho những dự án cần nhiều hơn một bộ đèn.",
      projects: "Dự án tiêu biểu",
      process: "Từ phác thảo đầu tiên đến hỗ trợ lắp đặt.",
      materials: "Vật liệu làm hiện rõ vẻ sang trọng yên tĩnh."
    },
    materialIntro: "Bảng vật liệu tiết chế, được trình bày với sự rõ ràng và điềm tĩnh của một sản phẩm cao cấp.",
    viewProject: "Xem dự án",
    about: {
      title: "Nghệ thuật ánh sáng, được tạo nên bằng độ chính xác.",
      body: "Zhongda Lighting tạo ra đèn trang trí tùy chỉnh cho khách sạn cao cấp, nhà ở riêng và không gian biểu tượng.",
      stats: [["20+", "Năm tập trung thủ công"], ["4000+", "Dự án tham khảo"], ["96", "Quốc gia phục vụ"]],
      videoLabel: "Thủ công trong chuyển động",
      videoText: "Ánh sáng, vật liệu và độ chính xác được thể hiện qua chi tiết sản xuất của Zhongda Lighting."
    },
    location: {
      title: "Công ty Zhongda Lighting",
      address: ["Số 2 đường Rongjing,", "Thành phố Trung Sơn, tỉnh Quảng Đông, Trung Quốc"],
      view: "Xem vị trí",
      business: "Thông tin kinh doanh",
      imageLabel: "Trung Sơn / Quảng Đông / Trung Quốc",
      imageText: "Thiết kế, phát triển và sản xuất trong cùng một hệ thống."
    },
    founder: {
      eyebrow: "Hồ sơ nhà sáng lập",
      title: "Được xây dựng bằng trách nhiệm, được định hình bởi ánh sáng.",
      quote: "Ánh sáng không chỉ là chiếu sáng. Đó là biểu hiện của không gian, kiến trúc, bầu không khí và gu thẩm mỹ.",
      paragraphs: [
        "Ông Zeng Weihong đến từ một thành phố nhỏ ở Trung Quốc. Không có nền tảng đặc quyền, ông xây dựng sự nghiệp từng bước bằng sự tận tâm và kiên trì.",
        "Từ những ngày đầu trong ngành sản xuất đèn đến khi thành lập ZD Lighting, ông luôn giữ một tiêu chuẩn rõ ràng: mỗi dự án vừa là cơ hội kinh doanh vừa là trách nhiệm.",
        "Dưới sự lãnh đạo của ông, ZD Lighting chăm chút từng trao đổi, bản vẽ, mẫu, linh kiện và hoàn thiện bề mặt."
      ],
      principles: [
        "Đèn tùy chỉnh cho khách sạn sang trọng, biệt thự, câu lạc bộ và không gian thương mại cao cấp.",
        "Kiểm soát chặt chẽ từ phát triển thiết kế, chọn vật liệu đến thử nghiệm, sản xuất và hỗ trợ lắp đặt.",
        "Niềm tin rằng sự sang trọng thật sự đến từ sự tiết chế, chi tiết, chất lượng và niềm tin lâu dài."
      ],
      closing: "ZD Lighting - Định hình không gian bằng ánh sáng, tạo niềm tin bằng chất lượng.",
      founderRole: "Nhà sáng lập ZD Lighting"
    },
    contact: {
      ...english.contact,
      title: "Chia sẻ không gian của bạn.",
      subtitle: "Gửi bản vẽ, hình tham khảo hoặc ý tưởng ban đầu để đội ngũ của chúng tôi tư vấn.",
      submit: "Gửi yêu cầu dự án",
      labels: {
        name: "Tên",
        company: "Công ty",
        country: "Quốc gia",
        projectType: "Loại dự án",
        contact: "Email / WhatsApp",
        message: "Nội dung",
        upload: "Tải bản vẽ hoặc hình tham khảo"
      },
      placeholder: "Cho chúng tôi biết quy mô, loại không gian, lịch trình hoặc phong cách tham khảo."
    },
    footer: {
      studio: "Studio đèn tùy chỉnh",
      intro: "Đèn trang trí tùy chỉnh cho khách sạn cao cấp, biệt thự, câu lạc bộ và không gian biểu tượng.",
      copyright: "© 2026 Zhongda Lighting. Đã đăng ký bản quyền.",
      inquiry: "Yêu cầu"
    }
  },
  ar: {
    ...english,
    nav: { home: "الرئيسية", collections: "المجموعات", projects: "المشاريع", bespoke: "حسب الطلب", about: "من نحن", contact: "تواصل" },
    hero: {
      eyebrow: "Zhongda Lighting / 中大灯饰",
      title: "إضاءة مصممة للمساحة.",
      subtitle: "إضاءة مخصصة للفنادق الفاخرة والفلل والمساحات البارزة.",
      primary: "استكشف المجموعات",
      secondary: "ابدأ مشروعاً مخصصاً",
      note: "ثريات مخصصة وتركيبات كريستال وحلول إضاءة زخرفية هندسية للعمارة الراقية."
    },
    sectionLabels: {
      capabilities: "القدرات الأساسية",
      projects: "مشاريع مختارة",
      process: "عملية التخصيص",
      materials: "المواد والحرفية",
      about: "عن العلامة",
      location: "موقع الشركة",
      contact: "استفسار المشروع"
    },
    sectionTitles: {
      capabilities: "تصميم للمشاريع التي تحتاج إلى أكثر من وحدة إضاءة.",
      projects: "مشاريع مختارة",
      process: "من الرسم الأول إلى دعم التركيب.",
      materials: "مواد تجعل الفخامة الهادئة مرئية."
    },
    materialIntro: "لوحة مواد هادئة تقدم بوضوح وهدوء يليقان بعرض منتج فاخر.",
    viewProject: "عرض المشروع",
    about: {
      title: "فن الضوء بدقة التصنيع.",
      body: "تصمم Zhongda Lighting إضاءة زخرفية مخصصة للفنادق الفاخرة والمساكن الخاصة والمساحات البارزة.",
      stats: [["20+", "سنوات تركيز حرفي"], ["4000+", "مرجع مشروع"], ["96", "دولة مخدومة"]],
      videoLabel: "الحرفة في الحركة",
      videoText: "الضوء والمواد والدقة تظهر من خلال تفاصيل إنتاج Zhongda Lighting."
    },
    location: {
      title: "شركة Zhongda Lighting",
      address: ["رقم 2 طريق Rongjing،", "مدينة Zhongshan، مقاطعة Guangdong، الصين"],
      view: "عرض الموقع",
      business: "معلومات الأعمال",
      imageLabel: "Zhongshan / Guangdong / China",
      imageText: "التصميم والتطوير والتصنيع تحت سقف واحد."
    },
    founder: {
      eyebrow: "ملف المؤسس",
      title: "بنيت بالمسؤولية وتشكلت بالضوء.",
      quote: "الإضاءة ليست إنارة فقط، بل تعبير عن المساحة والعمارة والأجواء والذوق الرفيع.",
      paragraphs: [
        "جاء السيد Zeng Weihong من مدينة صغيرة في الصين، وبنى مسيرته خطوة بخطوة من خلال التفاني والمثابرة والشغف بصناعة الإضاءة.",
        "من بداياته في تصنيع الإضاءة إلى تأسيس ZD Lighting، قاد الشركة بمعيار واضح: كل مشروع فرصة ومسؤولية في الوقت نفسه.",
        "تحت قيادته، تهتم ZD Lighting بكل تواصل ورسم وعينة ومكوّن وتشطيب، لأن المساحات الراقية لا تحتوي على تفاصيل صغيرة."
      ],
      principles: [
        "إضاءة مخصصة للفنادق الفاخرة والفلل الخاصة والنوادي والمساحات التجارية الراقية.",
        "تحكم صارم من تطوير التصميم واختيار المواد إلى الاختبار والإنتاج ودعم التركيب.",
        "الإيمان بأن الفخامة الحقيقية هي التوازن والتفاصيل والجودة والثقة طويلة الأمد."
      ],
      closing: "ZD Lighting - تشكيل المساحات بالضوء وكسب الثقة بالجودة.",
      founderRole: "مؤسس ZD Lighting"
    },
    contact: {
      ...english.contact,
      title: "أخبرنا عن المساحة.",
      subtitle: "شارك الرسومات أو الصور المرجعية أو فكرة بسيطة وسيساعدك فريقنا في تحديد اتجاه الإضاءة.",
      submit: "إرسال استفسار المشروع",
      labels: {
        name: "الاسم",
        company: "الشركة",
        country: "الدولة",
        projectType: "نوع المشروع",
        contact: "البريد / WhatsApp",
        message: "الرسالة",
        upload: "تحميل رسم أو صورة مرجعية"
      },
      placeholder: "أخبرنا عن حجم المشروع أو نوع المساحة أو الجدول أو النمط المرجعي."
    },
    footer: {
      studio: "استوديو إضاءة مخصص",
      intro: "إضاءة زخرفية مخصصة للفنادق الفاخرة والفلل والنوادي والمساحات البارزة.",
      copyright: "© 2026 Zhongda Lighting. جميع الحقوق محفوظة.",
      inquiry: "استفسار"
    }
  }
};
