// 修改 Logo: 把真实 logo 放到 /public/logo/，然后修改 logoPath。
// 修改联系方式: 只改 contact 里的 phone、whatsapp、email、socials。
export const site = {
  name: "ZD Bespoke Lighting",
  logoPath: "/logo/zd-logo.svg",
  seo: {
    title: "ZD Bespoke Lighting | Luxury Bespoke Architectural Lighting",
    description:
      "High-end bespoke lighting, architectural light art, and custom lighting solutions for hotels, villas, galleries, and luxury commercial spaces.",
    keywords: [
      "bespoke lighting",
      "architectural lighting",
      "luxury lighting",
      "hotel lighting",
      "villa lighting",
      "custom chandelier",
      "project lighting"
    ]
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ],
  contact: {
    email: "inquiry@zdbespokelighting.com",
    phone: "+86 190 4718 6703",
    whatsapp: "https://wa.me/8619047186703",
    instagram: "https://instagram.com/",
    facebook: "https://www.facebook.com/profile.php?id=61589420906827"
  },
  inquiryForm: {
    fields: ["Name", "Company", "Country", "Project Type", "WhatsApp / Email"],
    messagePlaceholder: "Message"
  }
};
