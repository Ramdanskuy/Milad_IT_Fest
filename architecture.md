# Architecture — Milad IT Fest 2026 Website

## 1. Architecture Goal
Membangun arsitektur multi-page yang sangat interaktif namun 100% *data-driven*. Konten harus "Easy to Edit" di mana panitia cukup mengubah file data (TS/JSON) untuk memperbarui timeline, ketentuan lomba, speaker, atau mengubah warna timeline menjadi abu-abu secara otomatis jika tanggal terlewat.

## 2. High-Level Architecture (Multi-Page)
- Framework: React + Vite + TypeScript.
- Routing: **React Router DOM** (Multi-page routing).
- Styling: Tailwind CSS (Neo-Brutalism).
- Animation: **Framer Motion** (Scroll reveal, marquee, typing effect).

## 3. Folder Structure
```text
src/
├─ components/
│  ├─ ui/          # Button, Card, Badge
│  ├─ motion/      # AutoTyping, MarqueeSponsor, ScrollReveal
│  └─ sections/    # Hero, About, Roadmap, FAQ
├─ data/           # PUSAT DATA (Easy to Edit)
│  ├─ home.ts
│  ├─ events.ts
│  ├─ sponsors.ts
│  └─ faq.ts
├─ pages/
│  ├─ Home.tsx
│  ├─ About.tsx
│  ├─ Sponsor.tsx
│  └─ acara/
│     ├─ MobileLegends.tsx
│     ├─ UiUxDesign.tsx
│     └─ SeminarNasional.tsx
├─ lib/            # Utility (misal: isPastDate checker)