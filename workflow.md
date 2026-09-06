### 3. `workflow.md`
```markdown
# WORKFLOW — Milad IT Fest 2026 Website

## 1. Prinsip Workflow
Pisahkan secara tegas antara pembuatan UI Komponen, Halaman (Routing), Logika Animasi, dan Pengisian Data. Fokus utama adalah *Ease of Editing* untuk panitia.

## 2. Step 1 — Data Structure Lock (Penting!)
Sebelum coding visual, buat arsitektur `src/data/`. Pastikan schema untuk pendaftaran, link guidebook, CP, dan ketentuan lomba siap. Ini menjamin panitia bisa mengganti data kapan saja tanpa menyentuh kode JSX.

## 3. Step 2 — Core Setup & Routing
- Install `react-router-dom` dan `framer-motion`.
- Setup routing untuk Beranda, About Us, 6 Halaman Acara, dan Sponsor.
- Setup Navbar multi-page (Dropdown untuk menu Acara).

## 4. Step 3 — Design System & Components
Buat komponen reusable untuk mengakomodasi request spesifik:
- `AutoTypeSlogan`: Komponen teks animasi ketik.
- `EventCard`: Card daftar event di beranda (maks 3 poin penting).
- `SponsorMarquee`: Marquee berjalan, hover pause, popup info card.
- `TournamentRuleCard`: Card khusus page acara (Ketentuan + CP).
- `PrizePoolCard`: Card khusus page acara (Prizepool + e-certificate).
- `SpeakerProfileCard`: Card khusus page Seminar.
- `TimelineList`: Daftar timeline dengan *auto-greyscale logic* jika tanggal sudah lewat.

## 5. Step 4 — Build Pages
Bangun halaman satu per satu sesuai struktur di PRD:
1. **Beranda**: Hero (typing, countdown) -> About/Visi -> Roadmap -> Pendaftaran Lomba -> Sponsor Marquee -> FAQ.
2. **Page Acara (Kategori Game/Pameran)**: Header -> Rule Card & Prize Card -> Timeline -> FAQ.
3. **Page Acara (Kategori UI/UX & Hackathon)**: Tambahkan button "Guidebook" di bawah header.
4. **Page Acara (Seminar)**: Ganti Rule Card dengan `SpeakerProfileCard`.
5. **Page Sponsor**: Grid Logo -> CTA "Hubungi Panitia".

## 6. Step 5 — Motion & Interactivity Pass
- Tambahkan `Framer Motion` `whileInView` pada card pendaftaran agar muncul saat di-scroll.
- Uji coba interaksi *hover* pada sponsor marquee.

## 7. Step 6 — QA & Date Testing
Ubah waktu di sistem lokal (mocking date) untuk memastikan timeline yang sudah lewat benar-benar berubah menjadi abu-abu secara otomatis.