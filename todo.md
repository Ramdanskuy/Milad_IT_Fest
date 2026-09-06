# TODO — Milad IT Fest 2026 Website

Status:
- `[ ]` belum dikerjakan
- `[-]` sedang dikerjakan
- `[x]` selesai

## Phase 1 — Project Setup & Routing
- [x] Inisialisasi Vite + React + TypeScript + Tailwind.
- [x] Install `react-router-dom` dan `framer-motion`.
- [x] Setup folder structure (`pages`, `data`, `components`).
- [x] Buat routing setup untuk Beranda, About, Sponsor, dan 6 Acara.

## Phase 2 — Data Structure (Easy to Edit)
- [x] Buat `siteConfig.ts` (Slogan, Countdown date, Visi).
- [x] Buat `eventsData.ts` (Data Ketentuan, Timeline, Prizepool, Benefit, Link Guidebook, Link Daftar).
- [x] Buat `speakersData.ts`.
- [x] Buat `sponsorsData.ts` (Logo, Info Card, Link).
- [x] Buat `faqData.ts`.

## Phase 3 — Core Components
- [x] Buat Navbar multi-page (dengan dropdown menu Acara).
- [x] Buat `AutoTypingSlogan` component.
- [x] Buat `CountdownTimer` component.
- [x] Buat `EventRegistrationCard` (dengan batas maks 3 poin benefit).
- [x] Buat `SponsorMarqueeInteractive` (Hover pause + popup info).
- [x] Buat `TournamentRuleCard` & `PrizePoolCard`.
- [x] Buat `SpeakerProfileCard`.
- [x] Buat `TimelineItem` dengan logika deteksi waktu (auto abu-abu jika lewat).

## Phase 4 — Build Pages
- [x] **Beranda**: Susun Hero -> About -> Roadmap -> Registration Cards -> Sponsor Marquee -> FAQ.
- [x] **Page Mobile Legends**: Header -> Rule + Prize -> Timeline -> FAQ.
- [x] **Page Badminton**: Duplicate layout ML.
- [x] **Page Pameran**: Duplicate layout ML.
- [x] **Page UI/UX**: Tambahkan button Guidebook.
- [x] **Page Hackathon**: Tambahkan button Guidebook.
- [x] **Page Seminar**: Ganti Rule card dengan SpeakerProfileCard.
- [x] **Page Sponsor**: Susun Grid Logo Sponsor & Partner -> CTA Hubungi Panitia.

## Phase 5 — Motion & Polish
- [x] Terapkan Framer Motion & CSS animations.
- [x] Test marquee hover pada ukuran layar desktop dan interaksi tap di mobile.
- [x] QA Testing komparasi tanggal (`isPastDate` auto abu-abu).
- [x] Pastikan link internal (Router Link) dan external (Guidebook/Daftar) berfungsi baik.

## Phase 6 — Verification & Deployment
- [x] TypeScript compile & Production Build (`npm run build`).
- [x] Menjalankan server dev lokal (`http://localhost:5174`).
- [x] Uji coba kemudahan edit file data oleh pihak panitia.