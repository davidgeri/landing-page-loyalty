# Cakrasoft Add-ons Company Profile

Website company profile untuk **Cakrasoft Add-ons**, dibangun sebagai aplikasi frontend modern yang responsif dan mudah dikembangkan.

## Daftar Isi

- [Cakrasoft Add-ons Company Profile](#cakrasoft-add-ons-company-profile)
  - [Daftar Isi](#daftar-isi)
  - [Tentang Proyek](#tentang-proyek)
  - [Teknologi](#teknologi)
  - [Prasyarat](#prasyarat)
  - [Menjalankan Proyek](#menjalankan-proyek)
  - [Perintah yang Tersedia](#perintah-yang-tersedia)
  - [Struktur Halaman dan Routing](#struktur-halaman-dan-routing)
  - [Struktur Proyek](#struktur-proyek)
  - [Kontribusi](#kontribusi)
  - [Lisensi](#lisensi)

## Tentang Proyek

Proyek ini merupakan website company profile yang menyajikan informasi mengenai layanan, produk, serta identitas Cakrasoft Add-ons. Aplikasi dirancang dengan pendekatan component-based agar antarmuka tetap konsisten, modular, dan mudah dipelihara.

## Teknologi

Proyek ini menggunakan teknologi berikut:

- [Vue 3](https://vuejs.org/) sebagai framework antarmuka pengguna
- [TypeScript](https://www.typescriptlang.org/) untuk pengembangan yang lebih aman dan terstruktur
- [Vite](https://vite.dev/) sebagai build tool dan development server
- [Vue Router](https://router.vuejs.org/) untuk pengelolaan navigasi halaman
- [Pinia](https://pinia.vuejs.org/) untuk manajemen state
- [Tailwind CSS](https://tailwindcss.com/) untuk styling berbasis utility
- [PrimeVue](https://primevue.org/) untuk komponen antarmuka tambahan
- [Lucide](https://lucide.dev/) untuk ikon
- [Anime.js](https://animejs.com/) untuk animasi

## Prasyarat

Pastikan perangkat pengembangan telah memiliki:

- [Node.js](https://nodejs.org/) versi LTS yang masih didukung
- [pnpm](https://pnpm.io/), yang dapat diinstal melalui Corepack atau npm

## Menjalankan Proyek

1. Clone repositori ini.

   ```bash
   git clone https://github.com/davidgeri/landing-page-loyalty.git
   ```

2. Masuk ke direktori proyek.

   ```bash
   cd landing-page-loyalty
   ```

3. Instal dependensi proyek.

   ```bash
   pnpm install
   ```

4. Jalankan development server.

   ```bash
   pnpm dev
   ```

5. Buka alamat lokal yang ditampilkan Vite di browser, biasanya `http://localhost:3032`.

## Perintah yang Tersedia

| Perintah | Deskripsi |
| --- | --- |
| `pnpm dev` | Menjalankan aplikasi dalam mode pengembangan. |
| `pnpm build` | Melakukan pemeriksaan tipe TypeScript dan membangun aplikasi untuk produksi. |
| `pnpm preview` | Menjalankan pratinjau hasil build produksi secara lokal. |

## Struktur Halaman dan Routing

Aplikasi menggunakan [Vue Router](https://router.vuejs.org/) dengan mode history browser. Konfigurasi rute berada di [`src/router/index.ts`](src/router/index.ts), sedangkan setiap halaman disimpan pada direktori [`src/views`](src/views).

```text
Start (/)
└── Home
    ├── About (/about)
    ├── Products (/product)
    │   ├── Detail Channel Manager (/product/channel-manager)
    │   ├── Detail Booking Engine (/product/booking-engine)
    │   └── Detail Cakra Loyalty (/product/cakra-loyalty)
    ├── FAQ (/faq)
    ├── Contact (/contact)
    └── Request Demo (/request-demo)

404 Page (/:pathMatch(.*)*)
└── Halaman terpisah untuk rute yang tidak ditemukan
```

| Halaman | Rute | Tujuan |
| --- | --- | --- |
| Home | `/` | Halaman utama yang memperkenalkan Cakrasoft Add-ons serta mengarahkan pengunjung ke informasi lanjutan. |
| About | `/about` | Menampilkan profil perusahaan, visi, misi, dan ekosistem Cakrasoft. |
| Products | `/product` | Menyajikan daftar dan informasi umum produk yang tersedia. |
| Detail Channel Manager | `/product/channel-manager` | Menjelaskan fitur dan manfaat produk Channel Manager. |
| Detail Booking Engine | `/product/booking-engine` | Menjelaskan fitur dan manfaat produk Booking Engine. |
| Detail Cakra Loyalty | `/product/cakra-loyalty` | Menjelaskan fitur dan manfaat produk Cakra Loyalty. |
| FAQ | `/faq` | Menjawab pertanyaan yang sering diajukan oleh pengunjung. |
| Contact | `/contact` | Menyediakan informasi atau sarana untuk menghubungi tim Cakrasoft. |
| Request Demo | `/request-demo` | Menyediakan halaman bagi calon pelanggan untuk mengajukan permintaan demo. |
| 404 Page | `/:pathMatch(.*)*` | Menangani URL yang tidak cocok dengan rute aplikasi. |

Selain rute detail produk yang spesifik, aplikasi juga menyediakan rute dinamis `/product/:slug` melalui komponen `src/views/Product/Detail.vue`. Namun, tiga detail produk pada sitemap di atas saat ini memiliki komponen dan rute khusus tersendiri.

## Struktur Proyek

```text
landing-page-loyalty/
├── .vscode/
│   └── extensions.json                  # Rekomendasi ekstensi VS Code
├── public/                              # Aset statis yang disajikan langsung
│   ├── assets/                          # Mockup antarmuka produk
│   │   ├── accounting-ui.png
│   │   ├── b-engine-ui.png
│   │   ├── banquet-ui.png
│   │   ├── c-manajer-ui.png
│   │   ├── frontdesk-desktop-1.png
│   │   ├── frontdesk-ui.png
│   │   ├── loyalty-mobile-2.png
│   │   ├── loyalty-ui.png
│   │   ├── pos-ui.png
│   │   └── report-ui.png
│   ├── icon/                            # Ikon produk
│   │   ├── accounting.png
│   │   ├── b-engine.png
│   │   ├── banquet.png
│   │   ├── c-manajer.png
│   │   ├── frontdesk.png
│   │   ├── inven.png
│   │   └── pos.png
│   └── images/                          # Logo, ilustrasi, dan gambar situs
│       ├── partnership/                 # Logo klien atau mitra
│       ├── Logo-cakra (2).png
│       ├── Logo-cakra-minimal.png
│       ├── Mockup(Hero).png
│       ├── Mockup(Hero).svg
│       ├── cakra_ico.ico
│       ├── footerico.svg
│       ├── logo-booking-engine-2.png
│       ├── logo-channel-manager.png
│       └── mockup-benefits.png
├── src/                                 # Kode sumber aplikasi
│   ├── components/                      # Komponen UI yang dapat digunakan kembali
│   │   ├── button/
│   │   ├── cardLoyalty/
│   │   ├── cta/
│   │   ├── footer/
│   │   ├── navbar/
│   │   └── outlinepill/
│   ├── composable/
│   │   └── README.md
│   ├── constants/
│   │   └── README.md
│   ├── router/
│   │   └── index.ts                     # Definisi rute aplikasi
│   ├── store/
│   │   └── navmenu.ts                   # State menu navigasi
│   ├── types/
│   │   └── README.md
│   ├── views/                           # Halaman dan section halaman
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── DetailBE/
│   │   ├── DetailCM/
│   │   ├── DetailLoyalty/
│   │   ├── FAQ/
│   │   ├── Home/
│   │   ├── Product/
│   │   ├── Request-Demo/
│   │   └── NotFound.vue
│   ├── App.vue                          # Komponen root aplikasi
│   ├── main.ts                          # Titik masuk aplikasi
│   └── style.css                        # Gaya global aplikasi
├── .gitignore                           # Aturan berkas yang diabaikan Git
├── .todo                                # Catatan pekerjaan proyek
├── index.html                           # Template HTML Vite
├── package.json                         # Metadata proyek dan skrip pnpm
├── pnpm-lock.yaml                       # Lockfile dependensi pnpm
├── tsconfig.app.json                    # Konfigurasi TypeScript aplikasi
├── tsconfig.json                        # Konfigurasi TypeScript utama
├── tsconfig.node.json                   # Konfigurasi TypeScript untuk Node.js
└── vite.config.ts                       # Konfigurasi Vite
```

Direktori hasil build (`dist/`) dan dependensi lokal (`node_modules/`) tidak ditampilkan karena dihasilkan secara otomatis.

## Kontribusi

Untuk berkontribusi pada proyek ini:

1. Buat branch baru dari branch yang relevan.
2. Terapkan perubahan dengan mengikuti pola dan gaya kode yang telah ada.
3. Pastikan aplikasi dapat dibangun tanpa error menggunakan `pnpm build`.
4. Ajukan pull request dengan deskripsi perubahan yang jelas.

## Lisensi

Lisensi proyek belum ditentukan. Hubungi pemilik repositori untuk informasi terkait penggunaan dan distribusi proyek.
