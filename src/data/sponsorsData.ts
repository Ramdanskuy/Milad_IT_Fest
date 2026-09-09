export interface Sponsor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'media-partner';
  tierLabel: string;
  logoUrl: string;
  description: string;
  websiteUrl: string;
}

export const sponsorsData: Sponsor[] = [
  {
    id: "sponsor-1",
    name: "Open Sponsorship",
    tier: "platinum",
    tierLabel: "Platinum Sponsor",
    logoUrl: "/sponsors/dicoding.png",
    description: "Dukung Inovasi Teknologi Generasi Muda — Bergabung Sebagai Sponsor IT Fest 2026 Sekarang.",
    websiteUrl: "https://wa.link/mea7wh"
  },
  {
    id: "sponsor-2",
    name: "Open Sponsorship",
    tier: "gold",
    tierLabel: "Gold Sponsor",
    logoUrl: "/sponsors/biznet.png",
    description: "Dukung Inovasi Teknologi Generasi Muda — Bergabung Sebagai Sponsor IT Fest 2026 Sekarang.",
    websiteUrl: "https://wa.link/mea7wh"
  },
  {
    id: "sponsor-3",
    name: "Open Sponsorship",
    tier: "silver",
    tierLabel: "Silver Sponsor",
    logoUrl: "/sponsors/dewaweb.png",
    description: "Dukung Inovasi Teknologi Generasi Muda — Bergabung Sebagai Sponsor IT Fest 2026 Sekarang.",
    websiteUrl: "https://wa.link/mea7wh"
  },
  {
    id: "sponsor-4",
    name: "Open Media Partner",
    tier: "media-partner",
    tierLabel: "Official Media Partner",
    logoUrl: "/sponsors/bm.png",
    description: "Suarakan Semangat Inovasi Teknologi Generasi Muda — Bergabung Sebagai Media Partner IT Fest 2026.",
    websiteUrl: "https://wa.link/mea7wh"
  }
];
