export type Locale = "en" | "zh" | "vi" | "ar";

export const locales: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
  { code: "ar", label: "العربية", short: "AR" }
];

const projectImages = {
  hotel: "/zd-site/hero-lobby.png",
  villa: "/zd-site/project-villa.png",
  banquet: "/zd-site/project-banquet.png",
  gallery: "/zd-site/craft-detail.png",
  lounge: "/zd-site/hero-lobby.png",
  chandelier: "/zd-site/craft-detail.png"
};

const legacyDictionary = {
  nav: {
    home: "Home",
    signature: "Collections",
    bespoke: "Bespoke",
    projects: "Projects",
    craftsmanship: "Craftsmanship",
    about: "About",
    news: "News",
    contact: "Contact",
    capabilities: "Capabilities",
    founders: "Founders",
    process: "Process"
  },
  hero: {
    eyebrow: "Bespoke Lighting Studio",
    title: "Lighting, Crafted for Space.",
    subtitle: "Bespoke lighting for hotels, villas, and landmark interiors.",
    primary: "Explore Collections",
    secondary: "Start a Bespoke Project",
    slides: [
      { title: "Luxury Hotel Lobby", subtitle: "A sculptural arrival moment.", image: projectImages.hotel },
      { title: "Private Villa", subtitle: "Quiet light for refined residences.", image: projectImages.villa },
      { title: "Craft Detail", subtitle: "Precision in every reflection.", image: projectImages.chandelier }
    ]
  },
  statement: {
    eyebrow: "Light as Art",
    title: "Light, crafted for unforgettable spaces.",
    body: "We create custom lighting for hospitality, private residences, and landmark interiors."
  },
  categories: {
    eyebrow: "Collections",
    title: "Six ways to shape atmosphere.",
    items: [
      ["Signature Designs", "Refined lighting objects for architectural spaces.", projectImages.chandelier],
      ["Bespoke Installations", "Custom compositions from concept to engineering.", projectImages.gallery],
      ["Hotel Lighting", "Lobby, suite, restaurant and ballroom lighting.", projectImages.hotel],
      ["Villa Lighting", "Decorative lighting for private residences.", projectImages.villa],
      ["Clubhouse Lighting", "Calm luxury for social interiors.", projectImages.lounge],
      ["Light Art", "Large-scale installations for landmark interiors.", projectImages.banquet]
    ]
  },
  references: {
    eyebrow: "Projects",
    title: "Project stories from landmark interiors.",
    view: "View Project",
    items: [
      ["Luxury Hotel Lobby", "Saudi Arabia", "Hospitality", "A sculptural chandelier for a five-star arrival.", projectImages.hotel],
      ["Grand Banquet Hall", "Saudi Arabia", "Hospitality", "Layered crystal light for events.", projectImages.banquet],
      ["Private Villa", "UAE", "Residence", "A double-height custom installation.", projectImages.villa]
    ]
  },
  craftsmanship: {
    eyebrow: "Craftsmanship",
    title: "From concept to engineering and delivery.",
    body: "Crystal, metal, glass, sampling, inspection, export packing, and installation support.",
    steps: ["Concept", "Drawing", "Sampling", "Production", "Inspection", "Delivery"]
  },
  strength: {
    eyebrow: "Numbers",
    title: "A quiet scale behind bespoke projects.",
    items: [["20+", "Years"], ["4000+", "Projects"], ["96", "Countries"], ["300+", "Team"], ["72h", "Response"], ["1", "Studio"]]
  },
  awards: {
    eyebrow: "Recognition",
    title: "Recognition, kept understated.",
    items: ["Hospitality Design", "Architectural Lighting", "Material Craft", "Bespoke Partner"]
  },
  news: {
    eyebrow: "Inspiration",
    title: "Ideas and project observations.",
    readAll: "See All",
    items: [
      ["Lighting Design", "3 min", "The return of quiet sparkle", "Crystal, shadow, and restraint in hotel interiors.", projectImages.chandelier]
    ]
  },
  contact: {
    eyebrow: "Project Inquiry",
    title: "Start a project conversation.",
    fields: {
      name: "Name",
      company: "Company",
      country: "Country",
      email: "Email",
      whatsapp: "WhatsApp",
      projectType: "Project Type",
      message: "Message"
    },
    projectTypes: ["Hotel Project", "Villa", "Resort", "Clubhouse", "Commercial Space", "Other"],
    send: "Start a Project",
    whatsappButton: "Contact on WhatsApp",
    company: "Zhongda Lighting",
    address: "Zhongshan City, Guangdong Province, China"
  },
  footer: {
    intro: "Luxury bespoke lighting design and manufacturing for hotels, villas, resorts and landmark interiors.",
    customers: "For Customers",
    important: "Information",
    about: "About",
    newsletter: "Light & Inspiration",
    newsletterText: "Discover collections and project stories.",
    copyright: "© 2026 Zhongda Lighting. All rights reserved."
  },
  about: {
    eyebrow: "About",
    title: "Custom lighting shaped for architecture.",
    body: "Zhongda Lighting specializes in custom decorative lighting for luxury hospitality and private interiors.",
    points: ["Bespoke design", "Engineering delivery", "Global project support", "Quality inspection"]
  },
  projects: { eyebrow: "Selected Projects", title: "Lighting scenarios for refined spaces.", view: "View Details", items: [] },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Spatial light art solutions.",
    intro: "From concept to installation support.",
    items: ["Custom Chandeliers", "Crystal Lighting", "Metal Lighting", "Hotel Lighting"]
  },
  founders: { eyebrow: "Founders", title: "Creative judgment and manufacturing discipline.", items: [] },
  process: {
    eyebrow: "Process",
    title: "From inquiry to delivery support.",
    items: [["Consultation", "Understand the project."], ["Concept", "Shape the idea."], ["Delivery", "Support installation."]]
  },
  global: { eyebrow: "Global Service", title: "Serving projects worldwide.", regions: ["Middle East", "Europe", "Asia", "North America"] }
};

export const dictionary: Record<Locale, any> = {
  en: legacyDictionary,
  zh: legacyDictionary,
  vi: legacyDictionary,
  ar: legacyDictionary
};
