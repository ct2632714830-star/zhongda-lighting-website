// 替换首页视频: 把视频放到 /public/videos/，然后修改 hero.video。
// 建议文件名: hero-lighting.mp4 或 hero-lighting.webm。
// 如果暂时没有视频，页面会自动显示 heroPoster 与柔和动态光影。
export const home = {
  hero: {
    video: "/videos/hero-lighting.mp4",
    poster: "/images/hero-factory-exterior.png",
    title: "Where Light Becomes Architecture",
    subtitle:
      "Bespoke lighting solutions for hotels, villas, galleries, and luxury commercial spaces.",
    primaryButton: "Explore Projects",
    secondaryButton: "Contact Us"
  },
  about: {
    eyebrow: "About ZD Bespoke Lighting",
    title: "Not a lighting supplier. A project partner for atmosphere, architecture, and detail.",
    body:
      "ZD Bespoke Lighting creates high-end custom lighting for architectural spaces, hotels, private villas, clubs, and luxury commercial projects. We combine design sensitivity, engineering drawings, material knowledge, manufacturing control, and global delivery support to help each space express its own quiet identity."
  },
  featuredProjects: {
    eyebrow: "Featured Projects",
    title: "Gallery-style project lighting for hospitality and private spaces."
  },
  process: {
    eyebrow: "Bespoke Process",
    title: "A calm, disciplined path from concept to installation support.",
    steps: [
      "Concept & Consultation",
      "Design Development",
      "Material & Sample Confirmation",
      "Production & Quality Control",
      "Delivery & Installation Support"
    ]
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Designed for overseas projects that require beauty, control, and delivery confidence.",
    items: [
      "Custom Design",
      "Engineering Drawings",
      "Material Selection",
      "Large-scale Production",
      "Global Delivery",
      "Project Support"
    ]
  },
  materials: {
    eyebrow: "Materials & Details",
    title: "Light expressed through metal, crystal, glass, acrylic, and warm architectural detail.",
    items: [
      { title: "Champagne Metal", image: "/materials/material-metal.svg" },
      { title: "Crystal Glow", image: "/materials/material-crystal.svg" },
      { title: "Soft Glass", image: "/materials/material-glass.svg" },
      { title: "Acrylic Diffusion", image: "/materials/material-acrylic.svg" },
      { title: "Art Installation", image: "/materials/material-art-installation.svg" },
      { title: "Warm Light Detail", image: "/materials/material-warm-light.svg" }
    ]
  },
  contactCta: {
    eyebrow: "Project Inquiry",
    title: "Tell us about the space. We will help shape the atmosphere.",
    subtitle:
      "For hotels, villas, galleries, clubs, and luxury commercial spaces, we welcome serious project conversations from designers, developers, procurement teams, and global partners."
  }
};
