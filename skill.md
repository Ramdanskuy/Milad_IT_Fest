### 5. `skill.md`
```markdown
# SKILL.md — Development & Design Skills

## 1. Multi-Page Architecture (React Router)
Kemampuan merancang routing dinamis dan terstruktur. Mengelola navigasi dropdown untuk submenu "Acara" di navbar, dan menjaga state UI (seperti posisi scroll) saat berpindah halaman.

## 2. Advanced Motion Design (Framer Motion)
Wajib menguasai:
- **Typewriter Effect:** Menganimasikan teks semboyan/slogan secara prosedural.
- **Scroll Reveal:** Membuat elemen (seperti card event) muncul dari bawah/samping secara elegan ketika user scroll halaman ke bawah.
- **Interactive Marquee:** Membuat slider horizontal logo sponsor yang berjalan mulus, bisa berhenti (*pause-on-hover*), dan memicu munculnya komponen *Tooltip/Info Card* absolut secara akurat di atas logo.

## 3. Data Engineering & Time Logic
Skill untuk membangun struktur data JSON/TypeScript yang mudah diedit (*easy to edit*). 
Mampu menulis *helper functions* untuk komparasi tanggal.
Contoh fungsionalitas wajib:
Mampu mengubah status visual UI timeline dari `Active/Accent Color` menjadi `Muted/Grayscale` secara otomatis berdasarkan waktu server/lokal klien.

## 4. Component Flexibility
Kemampuan menggunakan satu template Layout Halaman Acara, namun memanipulasinya secara dinamis.
- *Skill required:* Mampu membuat conditional rendering rendering (misal: `if (event.hasGuidebook) render <Button>Guidebook</Button>`).
- Mampu melakukan *swap* komponen antara `RuleCard` (untuk lomba) dan `SpeakerProfileCard` (untuk seminar) pada satu layout yang sama.

## 5. Neo-Brutalism in Multi-Page
Menjaga konsistensi bayangan tajam (hard shadow), border tebal, dan warna kontras (Accent: Orange/Cyan) di setiap halaman. Interaksi button dan card harus terasa "ditekan" (tactile) untuk memperkuat tema teknologi & inovasi.