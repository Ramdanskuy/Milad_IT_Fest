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
    name: "Telkomsel Digital",
    tier: "platinum",
    tierLabel: "Platinum Sponsor",
    logoUrl: "/sponsors/telkomsel.webp",
    description: "Penyedia layanan telekomunikasi seluler dan ekosistem jaringan digital terdepan di Indonesia.",
    websiteUrl: "https://www.telkomsel.com"
  },
  {
    id: "sponsor-2",
    name: "Dicoding Indonesia",
    tier: "platinum",
    tierLabel: "Platinum Sponsor",
    logoUrl: "/sponsors/dicoding.png",
    description: "Platform edukasi teknologi terpercaya untuk mencetak developer standar global di Indonesia.",
    websiteUrl: "https://www.dicoding.com"
  },
  {
    id: "sponsor-3",
    name: "Bank Riau Kepri Syariah",
    tier: "gold",
    tierLabel: "Gold Sponsor",
    logoUrl: "/sponsors/brksyariah.png",
    description: "Bank Pembangunan Daerah Riau dan Kepulauan Riau berprinsip syariah yang mendukung gerakan literasi digital.",
    websiteUrl: "https://brksyariah.co.id"
  },
  {
    id: "sponsor-4",
    name: "Biznet Networks",
    tier: "gold",
    tierLabel: "Gold Sponsor",
    logoUrl: "/sponsors/biznet.png",
    description: "Infrastruktur jaringan fiber optic ultra cepat untuk konektivitas internet modern.",
    websiteUrl: "https://www.biznetnetworks.com"
  },
  {
    id: "sponsor-5",
    name: "Dewaweb Cloud",
    tier: "silver",
    tierLabel: "Silver Sponsor",
    logoUrl: "/sponsors/dewaweb.png",
    description: "Layanan cloud hosting cepat & aman dengan sertifikasi ISO 27001 di Indonesia.",
    websiteUrl: "https://www.dewaweb.com"
  },
  {
    id: "sponsor-6",
    name: "Infomatika Riau Media",
    tier: "media-partner",
    tierLabel: "Official Media Partner",
    logoUrl: "/sponsors/infomatika-riau.png",
    description: "Portal berita teknologi dan seputar kegiatan kemahasiswaan se-Provinsi Riau.",
    websiteUrl: "https://instagram.com/infomatika_riau"
  },
  {
    id: "sponsor-7",
    name: "Event Riau ID",
    tier: "media-partner",
    tierLabel: "Official Media Partner",
    logoUrl: "/sponsors/event-riau.png",
    description: "Platform publikasi event pemuda & mahasiswa terbesar di Pekanbaru & Riau.",
    websiteUrl: "https://instagram.com/eventriau_id"
  }
];
