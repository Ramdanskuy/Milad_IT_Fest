export interface SiteConfig {
  eventName: string;
  subTitle: string;
  organizer: string;
  edition: string;
  theme: string;
  eventDate: string; // ISO date string for countdown timer: "2026-10-12T08:00:00+07:00"
  eventDateFormatted: string;
  location: string;
  heroSlogans: string[];
  about: {
    title: string;
    description: string[];
    visionTitle: string;
    visionText: string;
    missionPoints: string[];
  };
  contact: {
    email: string;
    instagram: string;
    whatsapp: string;
    address: string;
  };
}

export const siteConfig: SiteConfig = {
  eventName: "MILAD IT FEST 2026",
  subTitle: "Technofest UIR Vol. 2 & Milad Teknik Informatika ke-19",
  organizer: "HIMATIF UIR",
  edition: "Milad Teknik Informatika UIR ke-19",
  theme: "Innovation & Technology: Creating Solutions, Shaping the Future",
  eventDate: "2026-10-12T08:00:00+07:00",
  eventDateFormatted: "12 - 16 Oktober 2026",
  location: "Gedung Serbaguna & Kampus Teknik Informatika UIR, Pekanbaru",
  heroSlogans: [
    "Innovation & Technology: Creating Solutions, Shaping the Future.",
    "Rayakan 19 Tahun Perjalanan Teknik Informatika UIR Bersama Kami.",
    "Technofest UIR Vol. 2 — Tunjukkan Karya Terbaikmu & Jadi Juara!",
    "Wadah Inovasi, Kolaborasi, dan Kompetisi Teknologi Terbesar di UIR."
  ],
  about: {
    title: "Tentang Milad IT Fest 2026",
    description: [
      "MILAD IT FEST 2026 adalah perhelatan tahunan terbesar yang diselenggarakan oleh Himpunan Mahasiswa Teknik Informatika (HIMATIF) Universitas Islam Riau.",
      "Menggabungkan perayaan ulang tahun ke-19 Program Studi Teknik Informatika UIR dengan ajang Technofest UIR Vol. 2, event ini menghadirkan berbagai kompetisi teknologi, olahraga, pameran inovasi, dan seminar nasional bertaraf tinggi."
    ],
    visionTitle: "Visi & Misi Event",
    visionText: "Menjadi wadah akselerasi talenta digital muda Indonesia untuk berinovasi, berkompetisi secara sehat, dan menciptakan solusi teknologi berdampak tinggi bagi masa depan.",
    missionPoints: [
      "Mengasah keterampilan teknis dan soft skill mahasiswa serta pelajar di bidang IT.",
      "Mendorong terciptanya produk inovasi digital karya anak bangsa.",
      "Membangun jejaring kolaborasi antara akademisi, praktisi industri, dan komunitas teknologi.",
      "Mempererat silaturahmi civitas akademika Teknik Informatika UIR."
    ]
  },
  contact: {
    email: "milad.itfest2026@uir.ac.id",
    instagram: "@himatif_uir",
    whatsapp: "+62 822-8899-7711 (Humas Panitia)",
    address: "Jl. Kaharuddin Nasution No.113, Simpang Tiga, Marpoyan Damai, Pekanbaru, Riau 28284"
  }
};
