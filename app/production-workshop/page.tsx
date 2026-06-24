"use client";

import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type WorkshopContent = {
  eyebrow: string;
  title: string;
  intro: string;
  imageAlt: string;
  processItems: [string, string, string][];
};

const workshopVideos = [
  "/zd-site/workshop-videos/german-cnc.mp4",
  "/zd-site/workshop-videos/semi-automatic-machine-tools.mp4",
  "/zd-site/workshop-videos/hand-polishing.mp4",
  "/zd-site/workshop-videos/large-scale-laser-cutting.mp4",
  "/zd-site/workshop-videos/large-format-cutting.mp4",
  "/zd-site/workshop-videos/dust-free-spray-painting.mp4",
  "/zd-site/workshop-videos/glass-manufacturing.mp4",
  "/zd-site/workshop-videos/manual-assembly-inspection.mp4"
];

const workshopContent = {
  en: {
    eyebrow: "Production & Workshop",
    title: "Production & Workshop",
    intro:
      "From engineering drawings to production, inspection, and packing, Zhongda Lighting controls each stage with project-level discipline.",
    imageAlt: "Zhongda Lighting workshop assembly",
    processItems: [
      ["01", "German-imported CNC machining equipment", "Precision machining supports stable parts, repeatable quality, and refined custom lighting structures."],
      ["02", "Semi-automatic machine tools", "Efficient equipment improves consistency while keeping space for project-specific adjustment and detail control."],
      ["03", "Hand polishing by skilled craftsmen", "Experienced craftsmen polish metal and decorative parts by hand for a refined surface finish."],
      ["04", "Large-scale laser cutting", "Laser cutting supports accurate shapes, clean edges, and complex bespoke lighting components."],
      ["05", "Large-format cutting", "Large-format processing handles oversized architectural lighting parts for hotel and landmark spaces."],
      ["06", "Dust-free spray painting", "Controlled finishing helps achieve cleaner color, smoother texture, and more stable surface quality."],
      ["07", "Glass manufacturing", "Glass parts are produced and selected for translucency, clarity, diffusion, and decorative expression."],
      ["08", "Manual assembly and inspection", "Final assembly and inspection confirm structure, wiring, finish, packing, and delivery readiness."]
    ]
  },
  zh: {
    eyebrow: "生产工艺和车间",
    title: "生产工艺和车间",
    intro: "从工程图纸到生产、检验与包装，中大灯饰以项目级标准把控每一个环节。",
    imageAlt: "中大灯饰车间装配现场",
    processItems: [
      ["01", "德国进口 CNC 精密加工设备", "精密加工保障零部件稳定、质量可重复，并支撑高端定制灯饰结构。"],
      ["02", "半自动化机床设备", "高效设备提升生产一致性，同时保留项目定制所需的细节调整空间。"],
      ["03", "熟练工匠手工抛光", "经验丰富的工匠对金属与装饰件进行手工抛光，呈现更细腻的表面质感。"],
      ["04", "大型激光切割", "激光切割实现精准造型、干净边缘和复杂非标灯饰部件加工。"],
      ["05", "大幅面材料切割", "大幅面加工可承接酒店、会所与地标空间所需的大型建筑灯饰部件。"],
      ["06", "无尘喷漆工艺", "受控表面处理帮助实现更干净的色彩、更平滑的肌理和更稳定的品质。"],
      ["07", "玻璃制造与筛选", "玻璃部件根据透光度、清澈度、扩散效果和装饰表现进行生产与挑选。"],
      ["08", "人工装配与检验", "最终装配与检验确认结构、线路、表面、包装和交付状态。"]
    ]
  },
  vi: {
    eyebrow: "Sản xuất & xưởng",
    title: "Sản xuất & xưởng",
    intro: "Từ bản vẽ kỹ thuật đến sản xuất, kiểm tra và đóng gói, Zhongda Lighting kiểm soát từng bước theo tiêu chuẩn dự án.",
    imageAlt: "Khu vực lắp ráp xưởng Zhongda Lighting",
    processItems: [
      ["01", "Thiết bị CNC nhập khẩu từ Đức", "Gia công chính xác giúp linh kiện ổn định và bảo đảm chất lượng lặp lại."],
      ["02", "Máy công cụ bán tự động", "Thiết bị hiệu quả nâng cao độ đồng nhất và vẫn giữ không gian điều chỉnh theo từng dự án."],
      ["03", "Đánh bóng thủ công bởi thợ lành nghề", "Thợ kinh nghiệm hoàn thiện bề mặt kim loại và chi tiết trang trí bằng tay."],
      ["04", "Cắt laser quy mô lớn", "Cắt laser tạo hình chính xác, mép sạch và chi tiết đèn tùy chỉnh phức tạp."],
      ["05", "Cắt khổ lớn", "Xử lý khổ lớn phục vụ các bộ phận đèn kiến trúc cho khách sạn và công trình biểu tượng."],
      ["06", "Sơn trong môi trường sạch", "Quy trình hoàn thiện có kiểm soát giúp màu sắc sạch hơn và bề mặt ổn định hơn."],
      ["07", "Sản xuất kính", "Chi tiết kính được sản xuất và chọn theo độ trong, độ khuếch tán và hiệu ứng trang trí."],
      ["08", "Lắp ráp và kiểm tra thủ công", "Kiểm tra cuối xác nhận kết cấu, dây điện, bề mặt, đóng gói và trạng thái giao hàng."]
    ]
  },
  ar: {
    eyebrow: "الإنتاج والورشة",
    title: "الإنتاج والورشة",
    intro: "من الرسومات الهندسية إلى الإنتاج والفحص والتغليف، تتحكم Zhongda Lighting في كل مرحلة بمعايير تنفيذ دقيقة.",
    imageAlt: "منطقة التجميع في ورشة Zhongda Lighting",
    processItems: [
      ["01", "معدات CNC مستوردة من ألمانيا", "يدعم التشغيل الدقيق ثبات الأجزاء وجودة قابلة للتكرار لهياكل الإضاءة المخصصة."],
      ["02", "آلات شبه أوتوماتيكية", "ترفع المعدات الكفاءة والاتساق مع إبقاء مجال للتعديل حسب متطلبات المشروع."],
      ["03", "تلميع يدوي بواسطة حرفيين مهرة", "يصقل الحرفيون المعادن والقطع الزخرفية يدويا للحصول على سطح راق."],
      ["04", "قطع ليزر واسع النطاق", "يوفر القطع بالليزر أشكالا دقيقة وحواف نظيفة ومكونات مخصصة معقدة."],
      ["05", "قطع كبير الحجم", "يعالج القطع الكبير مكونات الإضاءة المعمارية للفنادق والمساحات البارزة."],
      ["06", "طلاء في بيئة خالية من الغبار", "يساعد التشطيب المتحكم به على ألوان أنظف وملمس أكثر سلاسة وجودة مستقرة."],
      ["07", "تصنيع الزجاج", "تنتج الأجزاء الزجاجية وتختار حسب الشفافية والوضوح والانتشار والتعبير الزخرفي."],
      ["08", "تجميع وفحص يدوي", "يؤكد الفحص النهائي الهيكل والأسلاك والتشطيب والتغليف وجاهزية التسليم."]
    ]
  }
} satisfies Record<Locale, WorkshopContent>;

export default function ProductionWorkshopPage() {
  const { locale } = useI18n();
  const content = workshopContent[locale];

  return (
    <main className="bg-warmwhite pt-24">
      <section className="container-lux py-16 md:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{content.eyebrow}</p>
            <h1 className="mt-5 text-balance text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-zinc-950">
              {content.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              {content.intro}
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.4rem] bg-zinc-100 shadow-[0_30px_100px_rgba(20,20,20,.12)]">
            <Image src="/zd-site/production-workshop-assembly.png" alt={content.imageAlt} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-lux pb-24 md:pb-32">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {workshopVideos.map((video, index) => (
            <article key={video} className="overflow-hidden rounded-[1.7rem] border border-white/80 bg-white/70 shadow-[0_20px_70px_rgba(20,20,20,.08)] backdrop-blur-xl">
              <div className="relative aspect-[4/3] bg-zinc-100">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={content.processItems[index][1]}
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">{content.processItems[index][0]}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-zinc-950">{content.processItems[index][1]}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{content.processItems[index][2]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
