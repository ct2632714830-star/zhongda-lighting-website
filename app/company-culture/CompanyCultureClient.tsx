"use client";

import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type GratitudeImage = {
  src: string;
  alt: string;
  title: string;
  body: string;
};

type GratitudeContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    teamLabel: string;
    teamText: string;
  };
  highlights: [string, string][];
  people: {
    eyebrow: string;
    title: string;
    memoryLabel: string;
    images: GratitudeImage[];
  };
  client: {
    meta: string;
    title: string;
    paragraphs: string[];
    signature: string;
    closing: string;
  };
  employee: {
    meta: string;
    title: string;
    paragraphs: string[];
    signature: string;
    closing: string;
  };
};

const englishClientLetter = [
  "Greetings,",
  "Thank you very much for your continued trust and support for Zhongda Lighting. It is our great honor to be involved in your projects and to provide you with high-end bespoke lighting solutions.",
  "For us, every collaboration is more than just an order - it is a responsibility and a commitment. From initial communication, design development, and material selection to production, quality inspection, packaging, delivery, and project implementation, we always uphold a professional attitude and strict standards to provide every client with reliable and valuable service.",
  "At Zhongda Lighting, we believe that truly outstanding lighting is not only a functional product, but also a reflection of spatial atmosphere, artistic beauty, and engineering quality. Because of the trust of clients like you, we are able to continuously improve our design capabilities, manufacturing strength, and project service standards, creating refined lighting works for hotels, villas, clubs, and commercial spaces.",
  "In the future, we will continue to maintain our high standards for quality, our dedication to details, and our commitment to responsible service for every client. We will keep improving our products and services to create greater value for your projects.",
  "Once again, thank you for your support and trust in Zhongda Lighting. We look forward to continuing our cooperation and working together to create more exceptional lighting projects."
];

const englishEmployeeLetter = [
  "Dear Zhongda Lighting Family,",
  "Thank you for your hard work.",
  "Here, I would like to sincerely say thank you to every employee who has devoted sweat, time, and effort to Zhongda Lighting.",
  "Zhongda Lighting would not be where it is today without the dedication and perseverance of every one of you. Many of you have left your hometowns, your families, and the places you know best to come to Guangdong Province - a place full of opportunities, but also full of challenges. You have devoted your youth, energy, and sense of responsibility to Zhongda Lighting.",
  "The summer in Guangdong is long and extremely hot, and the work in the workshop is never easy. Whether it is production, hand polishing, glass processing, spray painting, lighting assembly, quality inspection, packaging, delivery, or project follow-up, every position requires patience, attention to detail, and a strong sense of responsibility.",
  "It is because of your quiet dedication on the front line that every product of Zhongda Lighting can be carefully completed, every project can be successfully delivered, and every client can truly feel our quality and sincerity.",
  "You are not just employees. You are the most valuable strength of Zhongda Lighting. With your hands, you create our products. With your sweat, you protect our quality. With your perseverance, you support the growth of the company.",
  "Without your day-to-day dedication, Zhongda Lighting would not have achieved what it has today. Without your responsibility and commitment in every position, we would not have earned the recognition and trust of our clients.",
  "In my heart, you are the most admirable and beloved people of Zhongda Lighting.",
  "Thank you for staying committed to your work even in the hot weather. Thank you for treating every detail seriously even during busy production periods. Thank you for making extraordinary contributions through ordinary work.",
  "Behind every light, there is your hard work. Behind every successful project, there is your quiet and selfless dedication.",
  "In the future, Zhongda Lighting will continue to move forward. We also hope that the company can become a platform that every employee can rely on, trust, and grow with. We will continue working hard to make sure that your efforts are seen, your dedication is rewarded, and every member of the Zhongda Lighting family can gain more hope and achievement through this work.",
  "Once again, thank you to all employees for your hard work and dedication. May we continue to stand together, move forward side by side, and build Zhongda Lighting into a stronger, more stable, and better company."
];

const gratitudeContent = {
  en: {
    hero: {
      eyebrow: "A Letter of Gratitude",
      title: "With Sincere Appreciation.",
      intro: "Two letters of thanks from Zhongda Lighting, written for the people who make every refined lighting project possible.",
      teamLabel: "Zhongda Lighting Team",
      teamText: "Behind every light is a team that gives time, skill, patience, and responsibility."
    },
    highlights: [
      ["Trust", "Every project begins with the confidence our clients place in Zhongda Lighting."],
      ["Responsibility", "We treat communication, design, production, inspection, and delivery as one complete promise."],
      ["Improvement", "Client support drives our design capability, manufacturing quality, and service standards forward."]
    ],
    people: {
      eyebrow: "People Behind The Light",
      title: "Gratitude made visible through the people of Zhongda Lighting.",
      memoryLabel: "Team Memory",
      images: [
        {
          src: "/zd-site/gratitude/leadership-office.jpg",
          alt: "Zhongda Lighting project service team",
          title: "Project Service Team",
          body: "The people behind calm communication, careful follow-up, and reliable project support."
        },
        {
          src: "/zd-site/gratitude/front-desk-team.jpg",
          alt: "Zhongda Lighting front desk team",
          title: "Office & Front Desk Team",
          body: "A team presence that reflects the company spirit behind every client relationship."
        },
        {
          src: "/zd-site/gratitude/core-team-lobby.jpg",
          alt: "Zhongda Lighting core team in lobby",
          title: "Core Team",
          body: "Responsibility, service, and execution gathered in one shared direction."
        }
      ]
    },
    client: {
      meta: "Letter 01 / To Our Clients",
      title: "Dear Valued Client,",
      paragraphs: englishClientLetter,
      signature: "Zhongda Lighting / ZD Bespoke Lighting",
      closing: "With sincere appreciation"
    },
    employee: {
      meta: "Letter 02 / To Our Employees",
      title: "A Letter of Appreciation to All Employees of Zhongda Lighting",
      paragraphs: englishEmployeeLetter,
      signature: "Zhongda Lighting",
      closing: "With sincere appreciation"
    }
  },
  zh: {
    hero: {
      eyebrow: "感谢信",
      title: "致以诚挚感谢。",
      intro: "来自中大灯饰的两封感谢信，写给让每一个精致灯饰项目得以实现的人。",
      teamLabel: "中大灯饰团队",
      teamText: "每一盏灯背后，都有一群投入时间、技艺、耐心与责任的人。"
    },
    highlights: [
      ["信任", "每一个项目，都始于客户对中大灯饰的信任。"],
      ["责任", "我们把沟通、设计、生产、检验与交付视为一整套承诺。"],
      ["进步", "客户的支持推动我们持续提升设计能力、制造品质与服务标准。"]
    ],
    people: {
      eyebrow: "灯光背后的人",
      title: "把感谢落到真实的人与团队身上。",
      memoryLabel: "团队记忆",
      images: [
        {
          src: "/zd-site/gratitude/leadership-office.jpg",
          alt: "中大灯饰项目服务团队",
          title: "项目服务团队",
          body: "他们负责沉稳沟通、细致跟进与可靠的项目支持。"
        },
        {
          src: "/zd-site/gratitude/front-desk-team.jpg",
          alt: "中大灯饰前台与办公室团队",
          title: "办公室与前台团队",
          body: "团队的精神面貌，也体现着公司对每一段客户关系的重视。"
        },
        {
          src: "/zd-site/gratitude/core-team-lobby.jpg",
          alt: "中大灯饰核心团队",
          title: "核心团队",
          body: "责任、服务与执行力，汇聚成同一个方向。"
        }
      ]
    },
    client: {
      meta: "第一封 / 致我们的客户",
      title: "尊敬的客户：",
      paragraphs: [
        "您好！",
        "非常感谢您一直以来对中大灯饰的信任与支持。能够参与您的项目，并为您提供高端定制灯饰解决方案，是我们的荣幸。",
        "对我们来说，每一次合作都不只是一份订单，更是一份责任与承诺。从前期沟通、设计深化、材料选择，到生产制造、品质检验、包装发货与项目落地，我们始终以专业态度和严格标准，为每一位客户提供可靠且有价值的服务。",
        "中大灯饰相信，真正优秀的灯饰不只是功能产品，更是空间氛围、艺术审美与工程品质的体现。正因为有像您这样的客户信任，我们才能不断提升设计能力、制造实力与项目服务标准，为酒店、别墅、会所及商业空间打造更加精致的灯光作品。",
        "未来，我们将继续保持对品质的高要求、对细节的专注，以及对每一位客户负责的服务态度。我们也会不断完善产品与服务，为您的项目创造更大的价值。",
        "再次感谢您对中大灯饰的支持与信任。期待未来继续携手合作，共同创造更多出色的灯饰项目。"
      ],
      signature: "中大灯饰 / ZD Bespoke Lighting",
      closing: "谨致诚挚感谢"
    },
    employee: {
      meta: "第二封 / 致我们的员工",
      title: "致中大灯饰全体员工的感谢信",
      paragraphs: [
        "亲爱的中大灯饰家人们：",
        "大家辛苦了。",
        "在这里，我想真诚地向每一位为中大灯饰付出汗水、时间与努力的员工说一声感谢。",
        "没有每一位员工的坚守与付出，就没有今天的中大灯饰。你们中的很多人离开家乡、离开亲人，来到广东这片充满机会也充满挑战的地方，把青春、精力与责任心投入到中大灯饰。",
        "广东的夏天漫长而炎热，车间里的工作从来不轻松。无论是生产、手工抛光、玻璃加工、喷漆、灯具装配、品质检验、包装发货，还是项目跟进，每一个岗位都需要耐心、细致和强烈的责任感。",
        "正是因为你们在一线默默付出，中大灯饰的每一件产品才能被认真完成，每一个项目才能顺利交付，每一位客户才能真正感受到我们的品质与诚意。",
        "你们不只是员工，更是中大灯饰最宝贵的力量。你们用双手创造产品，用汗水守护品质，用坚持支撑公司的成长。",
        "没有你们日复一日的付出，中大灯饰不会有今天的成绩；没有你们在各自岗位上的责任与坚守，我们也无法赢得客户的认可与信任。",
        "在我心里，你们是中大灯饰最值得尊敬、也最可爱的人。",
        "感谢你们在炎热天气中依然坚守岗位，感谢你们在繁忙生产期仍然认真对待每一个细节，感谢你们在平凡工作中做出不平凡的贡献。",
        "每一盏灯的背后，都有你们的辛勤付出；每一个成功交付的项目背后，都有你们安静而无私的奉献。",
        "未来，中大灯饰还会继续向前。我们也希望公司能够成为每一位员工可以依靠、信任并共同成长的平台。我们会继续努力，让你们的付出被看见，让你们的努力得到回报，让每一位中大灯饰家人都能通过这份工作获得更多希望与成就。",
        "再次感谢全体员工的辛勤付出与奉献。愿我们继续站在一起、并肩向前，把中大灯饰建设成为更强、更稳、更好的公司。"
      ],
      signature: "中大灯饰",
      closing: "谨致诚挚感谢"
    }
  },
  vi: {
    hero: {
      eyebrow: "Thư cảm ơn",
      title: "Với lòng biết ơn chân thành.",
      intro: "Hai bức thư cảm ơn từ Zhongda Lighting dành cho những người tạo nên từng dự án chiếu sáng tinh tế.",
      teamLabel: "Đội ngũ Zhongda Lighting",
      teamText: "Phía sau mỗi ánh đèn là thời gian, tay nghề, sự kiên nhẫn và trách nhiệm."
    },
    highlights: [
      ["Niềm tin", "Mỗi dự án bắt đầu từ niềm tin khách hàng dành cho Zhongda Lighting."],
      ["Trách nhiệm", "Chúng tôi xem giao tiếp, thiết kế, sản xuất, kiểm tra và giao hàng là một lời hứa trọn vẹn."],
      ["Tiến bộ", "Sự ủng hộ của khách hàng thúc đẩy năng lực thiết kế, chất lượng sản xuất và tiêu chuẩn dịch vụ."]
    ],
    people: {
      eyebrow: "Con người phía sau ánh sáng",
      title: "Lòng biết ơn được thể hiện qua đội ngũ Zhongda Lighting.",
      memoryLabel: "Kỷ niệm đội ngũ",
      images: [
        { src: "/zd-site/gratitude/leadership-office.jpg", alt: "Đội ngũ dịch vụ dự án Zhongda Lighting", title: "Đội dịch vụ dự án", body: "Những người tạo nên giao tiếp bình tĩnh, theo dõi cẩn thận và hỗ trợ đáng tin cậy." },
        { src: "/zd-site/gratitude/front-desk-team.jpg", alt: "Đội văn phòng Zhongda Lighting", title: "Đội văn phòng & lễ tân", body: "Tinh thần đội ngũ phản ánh sự trân trọng trong từng mối quan hệ khách hàng." },
        { src: "/zd-site/gratitude/core-team-lobby.jpg", alt: "Đội ngũ nòng cốt Zhongda Lighting", title: "Đội ngũ nòng cốt", body: "Trách nhiệm, dịch vụ và thực thi cùng hướng về một mục tiêu." }
      ]
    },
    client: {
      meta: "Thư 01 / Gửi khách hàng",
      title: "Kính gửi Quý khách hàng,",
      paragraphs: [
        "Xin chào,",
        "Cảm ơn Quý khách đã luôn tin tưởng và ủng hộ Zhongda Lighting. Chúng tôi rất vinh dự được tham gia vào dự án của Quý khách và cung cấp giải pháp chiếu sáng tùy chỉnh cao cấp.",
        "Với chúng tôi, mỗi hợp tác không chỉ là một đơn hàng mà còn là trách nhiệm và cam kết. Từ trao đổi ban đầu, phát triển thiết kế, lựa chọn vật liệu đến sản xuất, kiểm tra, đóng gói, giao hàng và triển khai dự án, chúng tôi luôn giữ tiêu chuẩn chuyên nghiệp.",
        "Zhongda Lighting tin rằng chiếu sáng xuất sắc không chỉ là sản phẩm chức năng mà còn là biểu hiện của không gian, thẩm mỹ và chất lượng kỹ thuật.",
        "Trong tương lai, chúng tôi sẽ tiếp tục giữ tiêu chuẩn cao về chất lượng, chú trọng chi tiết và phục vụ có trách nhiệm.",
        "Một lần nữa, xin cảm ơn sự ủng hộ và tin tưởng của Quý khách. Chúng tôi mong tiếp tục hợp tác và tạo nên nhiều dự án chiếu sáng đặc biệt hơn."
      ],
      signature: "Zhongda Lighting / ZD Bespoke Lighting",
      closing: "Trân trọng cảm ơn"
    },
    employee: {
      meta: "Thư 02 / Gửi nhân viên",
      title: "Thư cảm ơn gửi toàn thể nhân viên Zhongda Lighting",
      paragraphs: [
        "Gửi gia đình Zhongda Lighting thân mến,",
        "Cảm ơn mọi người vì sự chăm chỉ.",
        "Tôi chân thành cảm ơn từng nhân viên đã dành mồ hôi, thời gian và nỗ lực cho Zhongda Lighting.",
        "Zhongda Lighting không thể có ngày hôm nay nếu thiếu sự tận tụy và kiên trì của mỗi người. Nhiều bạn đã rời quê hương và gia đình để đến Quảng Đông, một nơi đầy cơ hội nhưng cũng nhiều thử thách.",
        "Mùa hè ở Quảng Đông dài và rất nóng, công việc trong xưởng chưa bao giờ dễ dàng. Mỗi vị trí đều cần sự kiên nhẫn, tỉ mỉ và tinh thần trách nhiệm.",
        "Chính sự cống hiến thầm lặng của các bạn giúp từng sản phẩm được hoàn thiện cẩn thận, từng dự án được giao thành công và từng khách hàng cảm nhận được chất lượng của chúng ta.",
        "Các bạn không chỉ là nhân viên. Các bạn là sức mạnh quý giá nhất của Zhongda Lighting.",
        "Cảm ơn các bạn đã nghiêm túc với từng chi tiết và tạo nên đóng góp phi thường trong công việc bình thường.",
        "Phía sau mỗi ánh đèn là công sức của các bạn. Phía sau mỗi dự án thành công là sự tận tụy thầm lặng của các bạn.",
        "Trong tương lai, Zhongda Lighting sẽ tiếp tục tiến về phía trước và trở thành một nền tảng để mọi thành viên có thể tin cậy, phát triển và đạt được nhiều hy vọng hơn.",
        "Một lần nữa, xin cảm ơn toàn thể nhân viên. Mong chúng ta tiếp tục đồng hành và xây dựng Zhongda Lighting mạnh mẽ, ổn định và tốt đẹp hơn."
      ],
      signature: "Zhongda Lighting",
      closing: "Trân trọng cảm ơn"
    }
  },
  ar: {
    hero: {
      eyebrow: "رسالة شكر",
      title: "مع خالص التقدير.",
      intro: "رسالتا شكر من Zhongda Lighting إلى الأشخاص الذين يجعلون كل مشروع إضاءة راق ممكنا.",
      teamLabel: "فريق Zhongda Lighting",
      teamText: "خلف كل ضوء فريق يمنح الوقت والمهارة والصبر والمسؤولية."
    },
    highlights: [
      ["الثقة", "كل مشروع يبدأ من الثقة التي يضعها العملاء في Zhongda Lighting."],
      ["المسؤولية", "ننظر إلى التواصل والتصميم والإنتاج والفحص والتسليم كوعد كامل."],
      ["التطوير", "يدفعنا دعم العملاء إلى تطوير التصميم وجودة التصنيع ومعايير الخدمة."]
    ],
    people: {
      eyebrow: "الأشخاص خلف الضوء",
      title: "امتنان يظهر من خلال فريق Zhongda Lighting.",
      memoryLabel: "ذاكرة الفريق",
      images: [
        { src: "/zd-site/gratitude/leadership-office.jpg", alt: "فريق خدمة المشاريع", title: "فريق خدمة المشاريع", body: "الأشخاص وراء التواصل الهادئ والمتابعة الدقيقة والدعم الموثوق." },
        { src: "/zd-site/gratitude/front-desk-team.jpg", alt: "فريق المكتب والاستقبال", title: "فريق المكتب والاستقبال", body: "حضور الفريق يعكس روح الشركة في كل علاقة مع العملاء." },
        { src: "/zd-site/gratitude/core-team-lobby.jpg", alt: "الفريق الأساسي", title: "الفريق الأساسي", body: "المسؤولية والخدمة والتنفيذ في اتجاه واحد مشترك." }
      ]
    },
    client: {
      meta: "الرسالة 01 / إلى عملائنا",
      title: "عميلنا العزيز،",
      paragraphs: [
        "تحية طيبة،",
        "شكرا جزيلا على ثقتكم ودعمكم المستمرين لـ Zhongda Lighting. يشرفنا أن نشارك في مشاريعكم وأن نقدم لكم حلولا مخصصة للإضاءة الفاخرة.",
        "بالنسبة لنا، كل تعاون ليس مجرد طلب، بل هو مسؤولية والتزام. من التواصل الأولي وتطوير التصميم واختيار المواد إلى الإنتاج والفحص والتغليف والتسليم، نلتزم دائما بالمعايير المهنية.",
        "نؤمن في Zhongda Lighting بأن الإضاءة المتميزة ليست منتجا وظيفيا فقط، بل تعبير عن أجواء المكان والجمال الفني وجودة الهندسة.",
        "سنواصل في المستقبل الحفاظ على معاييرنا العالية للجودة واهتمامنا بالتفاصيل وخدمتنا المسؤولة لكل عميل.",
        "مرة أخرى، نشكركم على دعمكم وثقتكم. نتطلع إلى مواصلة التعاون وابتكار المزيد من مشاريع الإضاءة الاستثنائية."
      ],
      signature: "Zhongda Lighting / ZD Bespoke Lighting",
      closing: "مع خالص التقدير"
    },
    employee: {
      meta: "الرسالة 02 / إلى موظفينا",
      title: "رسالة شكر إلى جميع موظفي Zhongda Lighting",
      paragraphs: [
        "إلى عائلة Zhongda Lighting العزيزة،",
        "شكرا لكم على عملكم الجاد.",
        "أود هنا أن أشكر بصدق كل موظف قدم وقته وجهده وعرقه من أجل Zhongda Lighting.",
        "لم تكن Zhongda Lighting لتصل إلى ما هي عليه اليوم دون تفاني كل واحد منكم ومثابرته. كثير منكم ترك مسقط رأسه وعائلته وجاء إلى قوانغدونغ، حيث الفرص والتحديات معا.",
        "الصيف في قوانغدونغ طويل وحار جدا، والعمل في الورشة ليس سهلا. كل منصب يحتاج إلى صبر ودقة وإحساس قوي بالمسؤولية.",
        "بفضل تفانيكم الهادئ في الخط الأمامي، يمكن إكمال كل منتج بعناية وتسليم كل مشروع بنجاح.",
        "أنتم لستم موظفين فقط، بل أنتم القوة الأثمن في Zhongda Lighting. بأيديكم تصنعون المنتجات، وبجهدكم تحمون الجودة.",
        "شكرا لكم على التزامكم في الطقس الحار، وعلى أخذ كل تفصيل بجدية حتى في فترات الإنتاج المزدحمة.",
        "خلف كل ضوء عملكم الشاق، وخلف كل مشروع ناجح تفانيكم الهادئ.",
        "في المستقبل، ستواصل Zhongda Lighting التقدم، ونتمنى أن تصبح الشركة منصة يمكن لكل موظف الاعتماد عليها والثقة بها والنمو معها.",
        "مرة أخرى، نشكر جميع الموظفين على عملهم وتفانيهم. فلنواصل الوقوف معا لبناء شركة أقوى وأكثر استقرارا وأفضل."
      ],
      signature: "Zhongda Lighting",
      closing: "مع خالص التقدير"
    }
  }
} satisfies Record<Locale, GratitudeContent>;

export default function CompanyCulturePage() {
  const { locale } = useI18n();
  const content = gratitudeContent[locale];
  const clientLetter = content.client.paragraphs;
  const employeeLetter = content.employee.paragraphs;

  return (
    <main className="bg-warmwhite pt-24">
      <section className="container-lux py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{content.hero.eyebrow}</p>
            <h1 className="mt-5 text-balance text-[clamp(3.2rem,7.6vw,7rem)] font-semibold leading-[0.9] text-zinc-950">
              {content.hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
              {content.hero.intro}
            </p>
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[310px] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-[0_30px_100px_rgba(20,20,20,.12)] md:min-h-[420px]">
              <Image
                src="/zd-site/gratitude/zhongda-full-team.jpg"
                alt="Zhongda Lighting full team group photo"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/70">{content.hero.teamLabel}</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/90">
                  {content.hero.teamText}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative min-h-36 overflow-hidden rounded-[1.25rem] bg-zinc-100 md:min-h-44">
                <Image
                  src="/zd-site/gratitude/front-desk-team.jpg"
                  alt="Zhongda Lighting lobby team"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative min-h-36 overflow-hidden rounded-[1.25rem] bg-zinc-100 md:min-h-44">
                <Image
                  src="/zd-site/gratitude/core-team-lobby.jpg"
                  alt="Zhongda Lighting core team"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200/70 bg-[#f1f0ec] py-16 md:py-24">
        <div className="container-lux grid gap-5 md:grid-cols-3">
          {content.highlights.map(([title, body]) => (
            <article key={title} className="rounded-[1rem] border border-white/80 bg-white/65 p-6 shadow-[0_18px_60px_rgba(20,20,20,.06)] backdrop-blur-xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">{content.hero.eyebrow}</p>
              <h2 className="mt-5 text-2xl font-semibold text-zinc-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-lux py-16 md:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{content.people.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-zinc-950 md:text-6xl">
            {content.people.title}
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.people.images.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(20,20,20,.07)]">
              <div className="relative aspect-[4/3] bg-zinc-100">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">{content.people.memoryLabel}</p>
                <h3 className="mt-4 text-2xl font-semibold text-zinc-950">{image.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{image.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-lux py-16 md:py-24">
        <div className="grid gap-8 xl:grid-cols-2">
          <article className="relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white p-7 shadow-[0_28px_100px_rgba(20,20,20,.08)] md:p-9 xl:flex xl:h-[760px] xl:flex-col">
            <div className="absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-champagne/30 md:block" />
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-champagne">{content.client.meta}</p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-zinc-950 xl:text-4xl">{content.client.title}</h2>
            <div className="mt-8 grid gap-8 text-[15px] leading-8 text-zinc-600 md:grid-cols-2 xl:min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-3">
              {[clientLetter.slice(0, 3), clientLetter.slice(3)].map((column, index) => (
                <div key={index} className="space-y-5">
                  {column.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-zinc-200 pt-6">
              <p className="text-lg font-semibold text-zinc-950">{content.client.signature}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-champagne">{content.client.closing}</p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-[#fbfaf7] p-7 shadow-[0_24px_80px_rgba(20,20,20,.06)] md:p-9 xl:flex xl:h-[760px] xl:flex-col">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-champagne/25" />
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-champagne">{content.employee.meta}</p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-zinc-950 xl:text-4xl">
              {content.employee.title}
            </h2>
            <div className="mt-8 grid gap-8 text-[15px] leading-8 text-zinc-600 md:grid-cols-2 xl:min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-3">
              {[employeeLetter.slice(0, 7), employeeLetter.slice(7)].map((column, index) => (
                <div key={index} className="space-y-5">
                  {column.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-zinc-200 pt-6">
              <p className="text-lg font-semibold text-zinc-950">{content.employee.signature}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-champagne">{content.employee.closing}</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
