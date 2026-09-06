# PRD — Website Milad IT Fest 2026

## 1. Ringkasan Produk
Website Milad IT Fest 2026 adalah official event website multi-page yang interaktif dan dinamis. Menggabungkan identitas Milad ke-19 Teknik Informatika UIR dengan Technofest UIR Vol. 2. Website dirancang dengan gaya dark-mode Neo-Brutalism, mengutamakan kemudahan pengeditan data (easy to edit) oleh panitia, serta pengalaman visual yang interaktif melalui animasi scroll, animasi ketik otomatis, dan interaksi hover.

## 2. Identitas Event
- Nama: MILAD IT FEST 2026
- Penyelenggara: HIMATIF / Teknik Informatika UIR
- Milad: Teknik Informatika UIR ke-19
- Tema: Innovation & Technology: Creating Solutions, Shaping the Future
- Tanggal utama: 12 Oktober 2026

## 3. Information Architecture (Multi-Page)
Struktur Navigasi Utama (Navbar):
1. **Beranda**
2. **About Us**
3. **Acara** (Dropdown/Menu)
   - Mobile Legends
   - Badminton
   - UI/UX Design
   - Hackathon
   - Pameran (Tech Innovation Expo)
   - Seminar Nasional
4. **Sponsor**

## 4. Functional Requirements (Struktur Halaman)

### FR-01 — Page: Beranda (Home)
- **Section 1 (Hero):** Judul acara bersih (tanpa card di atasnya). Di bawah judul terdapat slogan dengan animasi ketik otomatis (auto-typing). Di bawahnya tanggal dan lokasi, diikuti *countdown timer* menuju acara.
- **Section 2 (About & Vision):** Penjelasan Milad IT Fest beserta Visi penyelenggara.
- **Section 3 (Roadmap):** Roadmap/timeline keseluruhan acara Milad IT Fest.
- **Section 4 (Pendaftaran Acara):** Card registrasi (Mobile Legends, Badminton, UI/UX, Hackathon, Expo, Seminar). 
  - Isi Card: Judul, Tag Kategori (Umum/Pelajar/Mahasiswa), Deskripsi singkat, Maksimal 3 poin penting (prizepool/benefit), tombol "Daftar Sekarang", dan tombol "Lihat Detail Acara".
- **Section 5 (Sponsor & Media Partner):** Animasi marquee logo berjalan (kiri/kanan). Saat logo di-hover, animasi berhenti, muncul card informasi tentang sponsor tersebut, dan jika diklik menuju website/IG mereka.
- **Section 6 (FAQ):** Pertanyaan umum (Accordion).

### FR-02 — Page: Acara (Mobile Legends, Badminton, Pameran)
- **Header:** Judul Acara & Call to Action (CTA).
- **Detail Layout:** Card Ketentuan Turnamen + Button "Contact Person" & "Daftar Sekarang". Di sampingnya terdapat Card "Prizepool" dengan label *e-certificate* di bawahnya.
- **Timeline Kegiatan:** Daftar timeline khusus acara tersebut. Jika timeline sudah terlewat, UI otomatis berubah menjadi warna abu-abu (berdasarkan deteksi tanggal otomatis).
- **FAQ:** FAQ spesifik acara.

### FR-03 — Page: Acara (UI/UX Design & Hackathon)
- Sama seperti FR-02, namun di bawah Judul Acara wajib terdapat 2 button sejajar: **"Guidebook"** dan **"Daftar Sekarang"**.

### FR-04 — Page: Acara (Seminar Nasional)
- **Header:** Judul & CTA.
- **Detail Layout (Berbeda):** Card ketentuan diganti dengan **Foto Profil Speaker**, disampingnya terdapat informasi Agenda, deskripsi, dan tombol "Daftar Sekarang".
- **Timeline & FAQ:** Sama seperti halaman acara lainnya.

### FR-05 — Page: Sponsor
- Berisi grid/layout logo-logo Sponsor dan Media Partner.
- Di bagian bawah terdapat Call to Action besar dengan tombol **"Hubungi Panitia"**.

### FR-06 — Interactivity & Data Management
- **Animasi:** Animasi scroll reveal (card muncul saat di-scroll), auto-typing, marquee interaktif.
- **Easy to Edit (Data Driven):** Seluruh informasi (Lomba, Ketentuan, Timeline, Data Speaker, Sponsor, CP, Link Guidebook, Link Daftar, FAQ) HARUS disimpan dalam file data statis (JSON/TS) terpisah, sehingga panitia non-coder dapat dengan mudah mengedit teks dan link tanpa mengubah komponen UI.

## 5. Non-Functional Requirements
- **Responsive:** Mobile, Tablet, Desktop.
- **Performance:** Animasi interaktif tidak boleh memblokir initial load.
- **Data Logic:** Timeline mendeteksi tanggal saat ini (Date.now()) untuk merender status *past/grey* atau *active*.