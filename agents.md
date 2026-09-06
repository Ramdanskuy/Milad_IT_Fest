# AGENTS.md — Milad IT Fest 2026 Website

## 1. Project Mission
Membangun website multi-page interaktif untuk MILAD IT FEST 2026. Website harus terasa dinamis (animasi ketik, scroll reveal, sponsor interaktif) dengan desain Neo-Brutalism, sekaligus menjunjung tinggi prinsip *Ease of Use* bagi maintainer (data terpisah dari layout).

## 2. Primary Stack (Updated)
- React + Vite
- TypeScript
- Tailwind CSS
- **React Router DOM** (Untuk navigasi multi-page Beranda, About, Acara, Sponsor)
- **Framer Motion** (Wajib untuk scroll animations, typing text, dan marquee hover)
- Lucide React (Icons)

## 3. Coding Rules Khusus Interaktivitas & Data
- **Data Driven:** Tidak boleh ada teks paragraf, ketentuan lomba, harga, URL guidebook, atau kontak panitia yang di-hardcode di dalam komponen `.tsx`. SEMUA harus di-*import* dari folder `src/data/`.
- **Date Automation:** Implementasikan pengecekan waktu dinamis pada komponen timeline.
  ```tsx
  const isExpired = new Date(item.endTime).getTime() < Date.now();
  // Gunakan className `grayscale opacity-60` jika isExpired true.