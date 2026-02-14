# Lumina AI - Next Gen Chatbot Interface

## Deskripsi

**Lumina AI** adalah antarmuka chatbot modern yang dirancang dengan estetika **Glassmorphism** premium. Proyek ini berfokus pada pengalaman pengguna yang halus (buttery smooth), responsif di berbagai perangkat (Mobile & Desktop), dan visual yang memukau dengan animasi latar belakang yang dinamis.

Dikembangkan sebagai antarmuka frontend yang siap diintegrasikan dengan backend AI manapun, Lumina AI menghadirkan fitur-fitur seperti riwayat percakapan, statistik sesi, dan input pesan yang kaya fitur.

## Tech Stack

Proyek ini dibangun menggunakan teknologi web modern untuk menjamin performa tinggi dan kemudahan pengembangan:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router) - Untuk performa SSR/CSR yang optimal.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Menjamin keamanan tipe data dan skalabilitas kode.
- **Styling**: 
  - [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework.
  - **Custom CSS** - Untuk efek Glassmorphism dan animasi Blob yang kompleks.
- **UI Components**: 
  - [shadcn/ui](https://ui.shadcn.com/) - Komponen UI yang dapat dikustomisasi dan aksesibel.
  - [Lucide React](https://lucide.dev/) - Ikon vektor yang ringan dan konsisten.
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - Untuk transisi halaman dan elemen interaktif yang halus.
- **Optimization**: `next/image`, `next/dynamic` (Lazy Loading), `React.memo`.

## Cara Menjalankan (Run)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal Anda:

1.  **Clone Repository**
    ```bash
    git clone https://github.com/username/chatbot-interface.git
    cd chatbot-interface
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    ```

3.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```

4.  **Akses Aplikasi**
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Pengembangan Masa Depan (Roadmap)

Berikut adalah beberapa fitur dan peningkatan yang direncanakan untuk pengembangan selanjutnya:

- [ ] **Integrasi Backend AI Real**: Menghubungkan antarmuka dengan API OpenAI, Anthropic, atau model lokal (Ollama).
- [ ] **Sistem Autentikasi**: Login pengguna dengan NextAuth (Google/GitHub/Email).
- [ ] **Penyimpanan Database**: Menyimpan riwayat percakapan secara permanen menggunakan Supabase atau PostgreSQL.
- [ ] **Tema Kustom (Dark/Light/System)**: Menambahkan toggle tema dengan preferensi pengguna yang persisten.
- [ ] **Dukungan Multi-bahasa (i18n)**: Lokalisasi antarmuka untuk berbagai bahasa.
- [ ] **Voice Input/Output**: Integrasi Web Speech API untuk interaksi suara.
- [ ] **Export Chat**: Fitur untuk mengunduh riwayat percakapan dalam format PDF atau Markdown.

---

Dibuat dengan oleh [Gadang Mahiswara](jmahiswara.my.id)
