# Situs Adiwilaga Agung

Kontraktor Umum & Pengadaan Barang Jasa. Dibangun dengan [Astro](https://astro.build) + Tailwind CSS 4. Hasil build berupa **HTML statis** di folder `dist/` (tanpa server, tanpa database).

Halaman yang dihasilkan: beranda, 10 halaman layanan (`/layanan/<slug>/`), halaman 404, `sitemap-index.xml`.

## Menjalankan

Butuh Node.js 22.23 atau lebih baru (disarankan 24).

```bash
npm install
```

```bash
npm run dev
```

Buka <http://localhost:4321>. Perubahan langsung terlihat.

```bash
npm run build
```

Hasil siap unggah ada di `dist/`. Cek hasilnya dengan `npm run preview`.

## Mengedit konten

**Hampir semua konten ada di satu file: [`src/data/site.ts`](src/data/site.ts).**

| Yang diubah | Bagian di `site.ts` |
|---|---|
| Nomor WhatsApp, email, alamat, jam, sosial media | `company` |
| Angka pencapaian | `stats` |
| Gambar slide hero | `heroSlides` |
| Langkah "Cara Kerja" | `steps` |
| Layanan (otomatis jadi halaman sendiri) | `services` |
| Produk | `products` |
| FAQ (isi `service` agar tampil juga di halaman layanan itu) | `faq` |

Menambah layanan = menambah satu objek di `services`. Halaman `/layanan/<slug>/`, kartu di beranda, tautan footer, sitemap, dan structured data (JSON-LD) terbentuk otomatis.

### Gambar

Taruh foto (`.webp`, `.jpg`, atau `.png` dikonversi dulu ke `.webp`) di `src/assets/img/`, lalu sebut namanya tanpa ekstensi di `site.ts`, misalnya `cover: 'proyek-baru'`. Astro otomatis membuat beberapa ukuran WebP yang terkompres. Nama yang salah membuat build gagal dengan pesan yang jelas.

## Struktur

```
src/data/site.ts          Konten
src/data/schema.ts        Structured data (JSON-LD), dibangun dari site.ts
src/layouts/Base.astro    <head>, header, footer, tombol WhatsApp melayang
src/components/           Hero, Roadmap (cara kerja), Faq, CtaBand, Icon, Sprite
src/pages/index.astro     Beranda
src/pages/layanan/[slug].astro   Template halaman layanan
src/styles/global.css     Token warna & font, animasi
public/                   File apa adanya: font, favicon, og-image, robots.txt, llms.txt, .htaccess
```

## Aturan desain

- Warna: navy untuk dasar, biru (`accent-*`) untuk ikon, garis, dan tautan. Hijau WhatsApp (`wa-500`) **hanya** untuk tombol utama.
- Font: Lexend (judul) dan Source Sans 3 (teks), di-host sendiri di `public/fonts/`.
- Teks minimal 15px, kontras minimal 4.5:1, target sentuh minimal 44px.
- Animasi dimatikan bila pengguna memilih "kurangi animasi" di sistem operasinya.

## Deploy

- **Cloudflare Pages / Netlify / Vercel (disarankan):** hubungkan repository, build command `npm run build`, output directory `dist`. HTTPS, CDN, dan kompresi Brotli otomatis.
- **cPanel:** jalankan `npm run build` di komputer, lalu unggah **isi** folder `dist/` ke `public_html`. File `.htaccess` sudah ikut.

Setelah domain aktif, ganti `site` di `astro.config.mjs` bila domainnya berbeda, lalu submit `https://domain-anda/sitemap-index.xml` ke Google Search Console dan Bing Webmaster Tools.

## Sebelum online

- [ ] Isi nomor NIB/NPWP/SBU di `legal` bila ingin ditampilkan
- [ ] Lengkapi Google Business Profile dengan alamat, jam, dan nomor yang sama persis
- [ ] Uji structured data di <https://search.google.com/test/rich-results>
