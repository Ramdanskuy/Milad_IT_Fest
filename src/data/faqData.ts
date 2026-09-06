export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'umum' | 'pendaftaran' | 'sertifikat' | 'lokasi';
}

export const generalFaqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa itu Milad IT Fest 2026?",
    answer: "Milad IT Fest 2026 adalah rangkain perayaan Hari Ulang Tahun ke-19 Teknik Informatika Universitas Islam Riau (UIR) yang dirangkaikan dengan Technofest UIR Vol. 2. Event ini menghadirkan 6 mata acara mencakup kompetisi e-sports, olahraga, desain UI/UX, hackathon, pameran inovasi, dan seminar nasional.",
    category: "umum"
  },
  {
    id: "faq-2",
    question: "Siapa saja yang boleh mengikuti acara ini?",
    answer: "Sebagian besar acara terbuka untuk Mahasiswa, Pelajar (SMA/SMK sederajat), serta Masyarakat Umum se-Indonesia. Silakan cek syarat kategori pada masing-masing halaman Detail Acara.",
    category: "umum"
  },
  {
    id: "faq-3",
    question: "Bagaimana cara mendaftar perlombaan atau seminar?",
    answer: "Anda dapat memilih acara yang ingin diikuti pada menu 'Acara' atau di section Pendaftaran pada halaman Beranda, lalu klik tombol 'Daftar Sekarang' untuk mengisi formulir pendaftaran resmi.",
    category: "pendaftaran"
  },
  {
    id: "faq-4",
    question: "Apakah peserta akan mendapatkan Sertifikat?",
    answer: "Ya! Seluruh peserta perlombaan dan seminar nasional akan mendapatkan E-Certificate resmi dari Himpunan Mahasiswa Teknik Informatika UIR. Khusus pemenang lomba akan menerima Sertifikat Cetak & Trophy/Medali.",
    category: "sertifikat"
  },
  {
    id: "faq-5",
    question: "Di mana lokasi pelaksanaan Milad IT Fest 2026?",
    answer: "Acara utama diselenggarakan secara offline di Gedung Serbaguna (GSG) Universitas Islam Riau & Kompleks Kampus Teknik Informatika UIR Pekanbaru. Beberapa babak awal penyisihan lomba dilakukan secara online.",
    category: "lokasi"
  }
];
