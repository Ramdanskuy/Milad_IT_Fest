export interface TimelineItemData {
  dateFormatted: string;
  endDateIso: string; // Used to check if past date Date.now() > new Date(endDateIso)
  title: string;
  description: string;
}

export interface ContactPerson {
  name: string;
  phone: string;
  role: string;
}

export interface EventData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  categoryTag: string; // e.g. "Umum / Pelajar / Mahasiswa"
  shortDescription: string;
  fullDescription: string;
  highlights: string[]; // Max 3 benefit/prizepool points for Home registration card
  prizepool: string;
  registrationFee: string;
  registrationLink: string;
  guidebookLink?: string;
  contactPersons: ContactPerson[];
  rules?: string[];
  timeline: TimelineItemData[];
  faqs: { question: string; answer: string }[];
  type: 'game' | 'sports' | 'design' | 'hackathon' | 'expo' | 'seminar';
}

export const eventsData: EventData[] = [
  {
    id: "mlbb",
    slug: "mobile-legends",
    title: "Mobile Legends Tournament",
    shortTitle: "Mobile Legends",
    categoryTag: "Umum & Pelajar",
    shortDescription: "Turnamen E-Sports Mobile Legends Bang Bang tingkat regional dengan total hadiah jutaan rupiah.",
    fullDescription: "Tunjukkan keahlian strategi dan kerjasama tim kamu dalam ajang Mobile Legends Tournament Milad IT Fest 2026. Kompetisi ini terbuka untuk seluruh player Mobile Legends di Riau dan sekitarnya.",
    highlights: [
      "Total Prizepool Rp 2.000.000",
      "E-Certificate untuk seluruh peserta",
      "Live Streaming Playoff & Final"
    ],
    prizepool: "Rp 2.000.000",
    registrationFee: "Rp 100.000 / Tim",
    registrationLink: "https://forms.google.com/example-mlbb",
    contactPersons: [
      { name: "Rizky Ramadhan", phone: "0812-3456-7890", role: "Koordinator MLBB" },
      { name: "Siti Rahma", phone: "0823-8899-1122", role: "Humas Turnamen" }
    ],
    rules: [
      "Setiap tim terdiri dari 5 pemain inti dan maksimal 2 pemain cadangan.",
      "Sistem pertandingan: Qualifiers (BO1), Quarter/Semi (BO3), Grand Final (BO5).",
      "Wajib menggunakan device smartphone (dilarang menggunakan emulator).",
      "Seluruh peserta wajib hadir di venue saat babak Playoff & Grand Final."
    ],
    timeline: [
      {
        dateFormatted: "1 – 25 Oktober 2026",
        endDateIso: "2026-10-25T23:59:59+07:00",
        title: "Pendaftaran Gelombang 1 (Early Bird)",
        description: "Pendaftaran dibuka dengan kuota terbatas 16 tim."
      },
      {
        dateFormatted: "26 Oktober –  16 November 2026",
        endDateIso: "2026-10-16T23:59:59+07:00",
        title: "Pendaftaran Gelombang 2",
        description: "Pendaftaran reguler hingga kuota 32 tim terpenuhi."
      },
      {
        dateFormatted: "18 November 2026",
        endDateIso: "2026-11-18T23:59:59+07:00",
        title: "Technical Meeting (Online)",
        description: "Pengundian bracket dan pembacaan rulebook pertandingan."
      },
      {
        dateFormatted: "21 – 22 November 2026",
        endDateIso: "2026-11-22T23:59:59+07:00",
        title: "Main Event & Grand Final",
        description: "Pertandingan babak knockout dan babak puncaknya di Stage Utama."
      }
    ],
    faqs: [
      {
        question: "Apakah peserta dari luar UIR boleh mendaftar?",
        answer: "Boleh! Turnamen ini bersifat umum untuk pelajar, mahasiswa, maupun masyarakat umum."
      },
      {
        question: "Apakah pertandingan dilakukan secara online atau offline?",
        answer: "Babak kualifikasi dilakukan secara online, sedangkan Semi Final dan Grand Final wajib hadir secara offline di venue UIR."
      }
    ],
    type: "game"
  },
  {
    id: "badminton",
    slug: "badminton",
    title: "Badminton Championship",
    shortTitle: "Badminton",
    categoryTag: "Civitas UIR & Pelajar",
    shortDescription: "Kejuaraan bulutangkis ganda putra & tunggal putra antar mahasiswa dan pelajar se-Riau.",
    fullDescription: "Ajang jalin silaturahmi dan unjuk bakat olahraga bulutangkis dalam rangka memeriahkan Milad Teknik Informatika UIR ke-19.",
    highlights: [
      "Total Prizepool Rp 2.000.000 + Medali",
      "Fasilitas lapangan indoor standar turnamen",
      "Sertifikat Cetak untuk Para Juara"
    ],
    prizepool: "Rp 2.000.000",
    registrationFee: "Rp 130.000 / Pasang (Ganda)",
    registrationLink: "https://forms.google.com/example-badminton",
    contactPersons: [
      { name: "Ahmad Fauzi", phone: "0813-7788-9900", role: "Koordinator Badminton" },
      { name: "Budi Santoso", phone: "0852-1122-3344", role: "Sie Acara" }
    ],
    rules: [
      "Kategori pertandingan: Ganda Putra Mahasiswa & Tunggal Putra Pelajar.",
      "Menggunakan sistem gugur dengan skor 21x3 rally point.",
      "Peserta wajib membawa raket sendiri dan menggunakan sepatu olahraga indoor.",
      "Shuttlecock disediakan oleh pihak panitia."
    ],
    timeline: [
      {
        dateFormatted: "1 Oktober – 8 November 2026",
        endDateIso: "2026-11-08T23:59:59+07:00",
        title: "Masa Pendaftaran Registrasi",
        description: "Pendaftaran peserta dan verifikasi berkas identitas."
      },
      {
        dateFormatted: "10 November 2026",
        endDateIso: "2026-11-10T23:59:59+07:00",
        title: "Technical Meeting",
        description: "Penjelasan peraturan pertandingan dan drawing lawan."
      },
      {
        dateFormatted: "14 – 15 November 2026",
        endDateIso: "2026-11-15T23:59:59+07:00",
        title: "Pertandingan Babak Penyisihan - Final",
        description: "Pelaksanaan pertandingan di Lapangan Indoor GSG UIR."
      }
    ],
    faqs: [
      {
        question: "Apakah shuttlecock disediakan panitia?",
        answer: "Ya, shuttlecock berkualitas standar turnamen disediakan panitia."
      }
    ],
    type: "sports"
  },
  {
    id: "uiux",
    slug: "ui-ux-design",
    title: "UI/UX Design Competition",
    shortTitle: "UI/UX Design",
    categoryTag: "Mahasiswa & Pelajar",
    shortDescription: "Kompetisi merancang antarmuka dan pengalaman pengguna aplikasi berorientasi solusi masalah sosial.",
    fullDescription: "Kompetisi UI/UX Design menantang ide kreatif peserta dalam memecahkan masalah nyata melalui desain produk digital yang intuitif, estetis, dan solutif.",
    highlights: [
      "Total Prizepool Rp 2.000.000 + E-Certificate",
      "Review langsung dari Lead UI/UX Designer Industri",
      "Satu Tim Berisi 1 - 3 Orang"
    ],
    prizepool: "Rp 2.000.000",
    registrationFee: "Rp 50.000 / Tim",
    registrationLink: "https://forms.google.com/example-uiux",
    guidebookLink: "https://drive.google.com/example-uiux-guidebook.pdf",
    contactPersons: [
      { name: "Nadia Putri", phone: "0812-9900-1122", role: "Koordinator UI/UX" },
      { name: "Dimas Anggara", phone: "0853-4455-6677", role: "PJ Karya" }
    ],
    rules: [
      "Tim terdiri dari 1 hingga 3 orang mahasiswa/pelajar.",
      "Karya merupakan ide orisinal dan belum pernah menjuarai lomba serupa.",
      "Output karya berupa Prototype Figma interaktif beserta Laporan Usability Study & Case Study.",
      "Finalis 5 besar akan mempresentasikan karyanya di hadapan Dewan Juri."
    ],
    timeline: [
      {
        dateFormatted: "1 Oktober – 5 Oktober 2026",
        endDateIso: "2026-10-05T23:59:59+07:00",
        title: "Pendaftaran Early Bird",
        description: "Pendaftaran Tim Lomba"
      },
      {
        dateFormatted: "6 Oktober – 7 November 2026",
        endDateIso: "2026-11-07T23:59:59+07:00",
        title: "Pendaftaran Reguler",
        description: "Pendaftaran Tim Lomba"
      },
      {
        dateFormatted: "8 – 11 November 2026",
        endDateIso: "2026-11-11T23:59:59+07:00",
        title: "Pendaftaran Extend & Pengumpulan Karya",
        description: "Perpanjangan masa pendaftaran dan pengumpulan karya."
      },
      {
        dateFormatted: "12 – 14 November 2026",
        endDateIso: "2026-11-14T23:59:59+07:00",
        title: "Penilaian Babak Penyisihan",
        description: "Penilaian Karya Tahap Awal"
      },
      {
        dateFormatted: "15 November 2026",
        endDateIso: "2026-11-15T23:59:59+07:00",
        title: "Pengumuman Finalis Top 5",
        description: "Pengumuman 5 karya terbaik yang masuk ke babak presentasi final."
      },
      {
        dateFormatted: "16 November 2026",
        endDateIso: "2026-11-16T23:59:59+07:00",
        title: "Technical Meeting Finalis",
        description: "Penjelasan aturan dan teknis presentasi (Online)."
      },
      {
        dateFormatted: "21 November 2026",
        endDateIso: "2026-11-21T23:59:59+07:00",
        title: "Presentasi Finalis",
        description: "Presentasi karya di depan juri profesional (Online)."
      }
    ],
    faqs: [
      {
        question: "Apakah software desain dibatasi hanya Figma?",
        answer: "Figma dianjurkan karena memudahkan pengujian prototype oleh juri, namun software pendukung lain tetap diperbolehkan."
      }
    ],
    type: "design"
  },
  {
    id: "hackathon",
    slug: "hackathon",
    title: "National Hackathon 2026",
    shortTitle: "Hackathon",
    categoryTag: "Mahasiswa Nasional",
    shortDescription: "Ajang kompetisi pengkodean 24 jam untuk membangun prototype aplikasi inovatif bertema Green Tech & AI.",
    fullDescription: "Hackathon Milad IT Fest 2026 mengundang mahasiswa terbaik Indonesia untuk ngoding marathon selama 24 jam demi menciptakan aplikasi inovatif berbasis teknologi AI & Sustainable Development Goals (SDGs).",
    highlights: [
      "Total Prizepool Rp 2.500.000 + Trophy",
      "Kesempatan Inkubasi & Direct Pitching ke Investor",
      "Free Konsumsi & Mentoring Selama Hackathon"
    ],
    prizepool: "Rp 2.500.000",
    registrationFee: "Rp 180.000 / Tim",
    registrationLink: "https://forms.google.com/example-hackathon",
    guidebookLink: "https://drive.google.com/example-hackathon-guidebook.pdf",
    contactPersons: [
      { name: "Fajar Pratama", phone: "0811-2233-4455", role: "Ketua Pelaksana Hackathon" },
      { name: "Clara Monik", phone: "0812-7766-5544", role: "Koor Tech & Rules" }
    ],
    rules: [
      "Satu tim beranggotakan 3 - 4 orang mahasiswa aktif perguruan tinggi.",
      "Koding wajib dimulai saat garis start (Hackathon 24 jam Dimulai).",
      "Dilarang menggunakan project yang sudah jadi sepenuhnya sebelum lomba.",
      "Penggunaan open-source library dan API publik diperbolehkan."
    ],
    timeline: [
      {
        dateFormatted: "01 September – 02 Oktober 2026",
        endDateIso: "2026-10-02T23:59:59+07:00",
        title: "Pendaftaran & Seleksi Abstrak Proposal",
        description: "Pengiriman ide solusi dan arsitektur aplikasi."
      },
      {
        dateFormatted: "08 Oktober 2026",
        endDateIso: "2026-10-08T23:59:59+07:00",
        title: "Pengumuman 15 Tim Lolos Finalis",
        description: "Pengumuman tim yang berhak mengikuti On-Site Coding Marathon."
      },
      {
        dateFormatted: "28 – 29 November 2026",
        endDateIso: "2026-11-29T23:59:59+07:00",
        title: "24-Hour Hackathon & Pitching",
        description: "Koding marathon 24 jam berturut-turut diikuti sesi demo produk di hadapan juri."
      }
    ],
    faqs: [
      {
        question: "Apakah peserta menginap di lokasi saat Hackathon?",
        answer: "Ya, panitia menyediakan ruangan kerja 24 jam lengkap dengan makanan, minuman, rest area, dan koneksi internet super cepat."
      }
    ],
    type: "hackathon"
  },
  {
    id: "pameran",
    slug: "pameran",
    title: "Tech Innovation Expo",
    shortTitle: "Pameran Inovasi",
    categoryTag: "Umum & Pelajar",
    shortDescription: "Pameran karya inovasi teknologi mahasiswa, startup lokal, dan proyek tugas akhir unggulan.",
    fullDescription: "Pameran teknologi terbesar di UIR yang menampilkan puluhan booth karya aplikasi, IoT, robotika, AI, dan game development hasil karya mahasiswa Teknik Informatika UIR dan tenant startup mitra.",
    highlights: [
      "Gratis Tiket Masuk untuk Seluruh Pengunjung",
      "Voting Karya Favorit Hadiah Rp 2.000.000",
      "Doorprise menarik untuk pengunjung booth"
    ],
    prizepool: "Rp 2.000.000 (Karya Favorit)",
    registrationFee: "Gratis Masuk (HTM Free)",
    registrationLink: "https://forms.google.com/example-pameran-booth",
    contactPersons: [
      { name: "Hendra Wijaya", phone: "0819-0011-2233", role: "Koordinator Expo" }
    ],
    rules: [
      "Terbuka untuk pengunjung umum dari berbagai kalangan.",
      "Registrasi pendaftaran booth karya ditujukan untuk mahasiswa/tim yang ingin memamerkan produk IT.",
      "Pengunjung berhak memilih karya terfavorit melalui voting QR Code di lokasi."
    ],
    timeline: [
      {
        dateFormatted: "15 September – 05 Oktober 2026",
        endDateIso: "2026-10-05T23:59:59+07:00",
        title: "Pendaftaran Stand / Booth Karya",
        description: "Pendaftaran tim/karya mahasiswa yang ingin membuka booth expo."
      },
      {
        dateFormatted: "13 – 16 Oktober 2026",
        endDateIso: "2026-10-16T23:59:59+07:00",
        title: "Pelaksanaan Tech Innovation Expo",
        description: "Pameran berlangsung selama 4 hari penuh di Atrium Gedung Serbaguna UIR."
      }
    ],
    faqs: [
      {
        question: "Apakah pengunjung dikenakan biaya masuk?",
        answer: "Tidak! Pameran ini gratis dan terbuka untuk umum, mahasiswa, serta siswa sekolah."
      }
    ],
    type: "expo"
  },
  {
    id: "seminar",
    slug: "seminar-nasional",
    title: "Seminar Nasional Teknologi Information 2026",
    shortTitle: "Seminar Nasional",
    categoryTag: "Umum & Mahasiswa",
    shortDescription: "Seminar bertema 'Shaping the Future with Generative AI & Cyber Security Excellence'.",
    fullDescription: "Seminar Nasional Milad IT Fest 2026 menghadirkan pakar industri kecerdasan buatan (AI) dan praktisi cyber security terkemuka untuk mengupas tuntas tren teknologi masa depan dan strategi pertahanan siber.",
    highlights: [
      "E-Certificate Nasional terakreditasi",
      "Goodie Bag, Snack Box, & Certificate Cetak",
      "Doorprizes Laptop, Tablet, & Smartwatch"
    ],
    prizepool: "Doorprizes bernilai Rp 10.000.000",
    registrationFee: "Rp 35.000 (Mahasiswa) / Rp 50.000 (Umum)",
    registrationLink: "https://forms.google.com/example-seminar",
    contactPersons: [
      { name: "Sari Dewi", phone: "0812-4455-6677", role: "Sie Registrasi Seminar" },
      { name: "Rian Prasetyo", phone: "0821-9988-7766", role: "Humas Event" }
    ],
    timeline: [
      {
        dateFormatted: "01 September – 10 Oktober 2026",
        endDateIso: "2026-10-10T23:59:59+07:00",
        title: "Masa Registrasi Peserta",
        description: "Pembelian tiket presale & tiket reguler seminar nasional."
      },
      {
        dateFormatted: "16 Oktober 2026",
        endDateIso: "2026-10-16T23:59:59+07:00",
        title: "Pelaksanaan Seminar Nasional & Closing Ceremony",
        description: "Sesi keynote speech, Q&A interaktif, doorprize, dan penutupan Milad IT Fest 2026."
      }
    ],
    faqs: [
      {
        question: "Apakah peserta online mendapatkan e-certificate?",
        answer: "Ya, e-certificate dapat diunduh oleh seluruh peserta terdaftar setelah acara selesai."
      }
    ],
    type: "seminar"
  }
];
