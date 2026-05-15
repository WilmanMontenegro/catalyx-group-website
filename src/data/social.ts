export interface SocialLink {
  id: string;
  label: string;
  href: string;
  handle: string;
}

export const techceleraTagline = "Tecnología que impulsa tu negocio";

export const techceleraMotto = ["Conectamos", "Optimizamos", "Impulsamos"] as const;

export const techceleraSocial: SocialLink[] = [
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@techcelera",
    handle: "@techcelera",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/techclera/",
    handle: "@techclera",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/techclera",
    handle: "techclera",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/573234134426",
    handle: "323 413 4426",
  },
];

export const techceleraWebsite = "https://techcelera.com";

export const techceleraSocialUrls = [
  ...techceleraSocial.map((link) => link.href),
  techceleraWebsite,
];
