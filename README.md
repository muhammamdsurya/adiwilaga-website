# Landing Page — Adiwilaga Agung

Kontraktor Umum & Pengadaan Barang Jasa · **Versi 1.0** · 17 Agustus 2026

Situs **100% statis** (HTML + Tailwind CSS + Vanilla JavaScript). Tanpa database, tanpa backend, tanpa plugin. Cukup unggah folder ini ke hosting mana pun dan situs langsung jalan.

---

## Tujuan

Dokumen ini adalah panduan agar **konten situs dapat diperbarui tanpa keahlian coding**, serta panduan teknis untuk deploy dan optimasi.

---

## 1. Isi Folder

### Wajib diunggah ke hosting

```
index.html                    ← SATU-SATUNYA file yang perlu Anda edit
sitemap.xml                   ← Peta situs untuk Google (ganti domain di dalamnya)
robots.txt                    ← Izin mesin pencari (ganti domain di dalamnya)
.htaccess                     ← Konfigurasi Apache: HTTPS, cache, keamanan
assets/img/                   ← Semua gambar (logo, hero, layanan, produk, badge)
assets/css/tailwind.min.css   ← Salinan CSS lokal (jaring pengaman, lihat bagian 6)
```

### Hanya untuk pengembangan (tidak perlu diunggah)

```
README.md                     ← Dokumen ini
package.json                  ← Perintah build CSS
tailwind.config.js            ← Tema warna untuk proses build
src/input.css                 ← Sumber CSS untuk proses build
tools/gen_placeholders.py     ← Skrip pembuat gambar placeholder
tools/verify.js               ← Skrip uji otomatis (41 pemeriksaan)
screenshots/                  ← Hasil uji tampilan 4 ukuran layar
```

---

## 2. Cara Mengedit Konten (Tanpa Coding)

Buka `index.html` dengan **Notepad++ / VS Code / editor teks apa pun**, lalu cari blok ini di bagian atas file:

```html
<script id="site-data">
const SITE = { ... };
</script>
```

**Seluruh teks situs ada di dalam blok itu.** Anda tidak perlu menyentuh bagian lain.

### Aturan penting saat mengedit

| Aturan | Contoh Benar | Contoh Salah |
|---|---|---|
| Teks selalu dibungkus tanda kutip ganda | `nama: "Adiwilaga Agung",` | `nama: Adiwilaga Agung,` |
| Setiap baris diakhiri koma `,` kecuali baris terakhir dalam satu blok | `email: "a@b.com",` | `email: "a@b.com"` |
| Tanda `&` harus ditulis `&amp;` | `"Alat Kantor &amp; Bank"` | `"Alat Kantor & Bank"` |
| Jangan hapus tanda `{ }` `[ ]` | | |

> **Jika situs jadi kosong setelah diedit:** tekan `F12` di browser → tab **Console**. Pesan `[Adiwilaga Agung] Gagal merender konten...` akan menunjukkan baris yang salah. Biasanya penyebabnya koma atau tanda kutip yang kurang.

---

### 2.1 Mengganti Nomor WhatsApp ← paling sering

```js
kontak: {
  whatsapp:      "628xxxxxxxxxx",    // ← nomor untuk link WA (WAJIB diganti)
  whatsappLabel: "0812-xxxx-xxxx",   // ← tampilan nomor di layar
```

**Format `whatsapp` wajib internasional, tanpa `+`, tanpa spasi, tanpa tanda hubung:**

| Nomor asli | Tulis menjadi |
|---|---|
| `0812-3456-7890` | `"6281234567890"` |
| `+62 858 1234 5678` | `"6285812345678"` |
| `021-7654321` (telepon rumah) | tidak bisa untuk WhatsApp |

Satu perubahan ini otomatis memperbarui **semua** tombol WhatsApp: tombol melayang, tombol hero, 6 tombol layanan, 4 tombol produk, dan tombol besar di footer.

---

### 2.2 Mengganti Pesan WhatsApp Otomatis

- **Pesan umum** (tombol melayang, hero, footer): ubah `waPesanDefault`.
- **Pesan per layanan / produk**: ubah `waPesan` di dalam blok layanan/produk yang bersangkutan.

```js
waPesan: "Halo Adiwilaga Agung, saya ingin bertanya tentang jasa Konstruksi."
```

---

### 2.3 Menambah Layanan Baru

Salin satu blok di dalam `layanan: [ ... ]`, tempel setelahnya, lalu ubah isinya:

```js
{
  slug: "nama-layanan-baru",              // huruf kecil, pakai tanda hubung
  judul: "Nama Layanan Baru",
  icon: "wrench",                          // pilihan ikon di bawah
  img: "assets/img/layanan-baru.webp",     // letakkan fotonya di assets/img/
  alt: "Deskripsi singkat gambar untuk pembaca layar",
  deskripsi: "2–4 kalimat penjelasan layanan.",
  poin: ["Keunggulan 1", "Keunggulan 2", "Keunggulan 3"],
  waPesan: "Halo Adiwilaga Agung, saya ingin bertanya tentang Layanan Baru."
},
```

**Pilihan `icon` yang tersedia:** `building` · `wrench` · `shredder` · `printer` · `truck` · `cctv`

Kartu, tombol WhatsApp, animasi, dan data SEO akan **terbentuk otomatis**.

---

### 2.4 Menambah Produk Baru

Salin satu blok di dalam `produk: [ ... ]`:

```js
{
  nama: "Nama Produk",
  kategori: "Material Bangunan",           // label kecil di atas foto
  img: "assets/img/produk-baru.webp",
  alt: "Deskripsi gambar produk",
  spesifikasi: "Ukuran · Tipe · Grade",
  keunggulan: ["Poin 1", "Poin 2", "Poin 3"],
  waPesan: "Halo Adiwilaga Agung, saya ingin bertanya tentang produk Nama Produk."
},
```

Grid otomatis menyesuaikan: 4 kolom desktop → 2 kolom tablet → 1 kolom mobile. Berapa pun jumlah produknya.

---

### 2.5 Mengganti Gambar

Semua gambar saat ini masih **placeholder SVG**. Cara mengganti:

1. Siapkan foto asli, kompres dan **konversi ke `.webp`** (gratis: <https://squoosh.app>).
2. Simpan ke folder `assets/img/`.
3. Ubah nama file di blok DATA, contoh: `img: "assets/img/hero-1.svg"` → `img: "assets/img/hero-1.webp"`.

**Ukuran yang disarankan:**

| Jenis | Ukuran | Target berat file |
|---|---|---|
| Hero / banner (3 buah) | 1600 × 900 px | ≤ 200 KB |
| Foto layanan (6 buah) | 800 × 600 px | ≤ 80 KB |
| Foto produk | 800 × 800 px | ≤ 80 KB |
| Badge legalitas | 320 × 180 px | ≤ 20 KB |
| Logo | SVG atau PNG transparan 200 px | ≤ 20 KB |
| Gambar share sosmed (`og-image`) | 1200 × 630 px | ≤ 150 KB |

> Selalu isi `alt` dengan deskripsi gambar. Ini syarat aksesibilitas **dan** membantu SEO.

---

### 2.6 Mengganti Peta Google Maps

**Cara cepat** — cukup ubah `mapsQuery` menjadi alamat atau koordinat asli:

```js
mapsQuery: "-6.914744,107.609810",
```

**Cara presisi** — pakai embed resmi Google:

1. Buka Google Maps → cari lokasi Anda → **Bagikan** → tab **Sematkan peta** → **Salin HTML**.
2. Dari kode yang tersalin, ambil **hanya isi `src="..."`**.
3. Tempel ke `mapsEmbedUrl`:

```js
mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!...",
```

Jika `mapsEmbedUrl` diisi, `mapsQuery` diabaikan.

---

### 2.7 Legalitas, Statistik, Sosial Media

- **Statistik**: hapus baris di `statistik: [ ... ]` bila datanya belum tersedia — bagian itu ikut hilang otomatis.
- **Legalitas**: ganti `assets/img/badge-*.svg` dengan logo/scan sertifikat asli, dan isi kolom `nomor`.
- **Sosial media**: hanya akun dengan `url` selain `"#"` yang ditampilkan. Ikon tersedia: `instagram`, `facebook`, `tiktok`, `linkedin`, `youtube`.

---

## 3. Sebelum Situs Diluncurkan (Checklist Wajib)

- [ ] Ganti `whatsapp` dengan nomor WhatsApp bisnis aktif — **lalu uji klik dari HP**
- [ ] Ganti `telepon`, `email`, `alamatKantor`, `alamatGudang`
- [ ] Ganti `mapsQuery` atau `mapsEmbedUrl` dengan lokasi asli
- [ ] Ganti `tahunBerdiri` dan angka pada `statistik`
- [ ] Isi nomor `legalitas` (NIB, NPWP, dll.)
- [ ] Ganti semua gambar placeholder dengan foto asli (`.webp`)
- [ ] Ganti logo di `assets/img/logo.svg` dan `favicon.svg`
- [ ] **Ganti semua `https://www.adiwilagaagung.co.id` dengan domain asli** di:
      `index.html` (tag `canonical` + `og:*`), `sitemap.xml`, `robots.txt`
- [ ] Perbarui `<title>` dan `<meta name="description">` bila ada perubahan penawaran
- [ ] Pastikan hosting sudah **HTTPS** (SSL aktif)
- [ ] Daftarkan situs ke [Google Search Console](https://search.google.com/search-console) dan submit `sitemap.xml`

---

## 4. Cara Deploy

### Opsi A — Shared Hosting (cPanel) — paling umum di Indonesia

1. Login cPanel → **File Manager** → masuk ke folder `public_html`.
2. Kompres folder ini menjadi `.zip`, lalu **Upload** dan **Extract** di `public_html`.
3. Pastikan `index.html` berada langsung di dalam `public_html` (bukan di subfolder).
4. Aktifkan SSL gratis: cPanel → **SSL/TLS Status** → **Run AutoSSL**.
5. File `.htaccess` sudah otomatis memaksa HTTPS, mengaktifkan kompresi, dan cache.

### Opsi B — Netlify (gratis, tercepat untuk disiapkan)

1. Buka <https://app.netlify.com/drop>.
2. **Tarik-lepas seluruh folder** ini ke halaman tersebut. Selesai — situs langsung online.
3. HTTPS, CDN global, dan kompresi aktif otomatis.
4. Hubungkan domain sendiri di **Site settings → Domain management**.

### Opsi C — Vercel / Cloudflare Pages / GitHub Pages

Unggah folder sebagai repository, pilih framework **"Other" / "No framework"**, output directory = root. Tidak ada perintah build yang perlu dijalankan.

---

## 5. Cara Memperbarui Situs yang Sudah Online

1. Edit `index.html` di komputer Anda.
2. Buka `index.html` dengan browser untuk **memastikan tampilannya benar**.
3. Unggah ulang **hanya file yang berubah** (biasanya cuma `index.html` dan gambar baru).
4. Tekan `Ctrl + Shift + R` di browser untuk memaksa muat ulang tanpa cache.

> Simpan salinan `index.html` yang masih berfungsi sebelum mengedit. Itu jaring pengaman termurah.

---

## 6. Tentang Tailwind CSS: CDN + Jaring Pengaman Lokal

Situs ini memuat Tailwind dari **CDN** (`cdn.tailwindcss.com`) supaya Anda bisa menambah/mengubah class Tailwind apa pun **tanpa perlu menjalankan proses build**. Ini pilihan paling mudah di-maintain.

Namun ada dua hal yang perlu Anda tahu:

**a. Jaring pengaman sudah aktif.** Sebagian jaringan kantor, bank, dan instansi pemerintah di Indonesia memblokir CDN publik — dan mereka justru target klien Anda. Karena itu situs ini otomatis beralih ke salinan lokal `assets/css/tailwind.min.css` (≈24 KB, ≈5 KB setelah kompresi) bila CDN tidak dapat dijangkau. **Jangan hapus file itu.** Tampilan tidak akan pernah rusak menjadi teks tanpa gaya.

**b. Skor Lighthouse.** Dengan CDN, skor **Performance** biasanya **80–90** karena ada 1 permintaan JavaScript tambahan. Untuk menembus **≥ 90 konsisten**, jadikan CSS lokal sebagai sumber utama — di `index.html`, hapus dua blok ini dari `<head>`:

```html
<script src="https://cdn.tailwindcss.com/3.4.16"></script>
<script> ... if (window.tailwind) tailwind.config = { ... } ... </script>
```

lalu ganti dengan satu baris:

```html
<link rel="stylesheet" href="assets/css/tailwind.min.css">
```

Hasil: nol JavaScript pihak ketiga, tanpa kedipan tampilan saat load (FOUC), Performance ≥ 90.

**Konsekuensinya:** setelah diganti, setiap kali Anda menambah *class Tailwind baru* di HTML, CSS harus dibangun ulang (perlu Node.js sekali install):

```bash
npm install           # sekali saja
npm run build:css     # setiap kali menambah class Tailwind baru
```

> Mengubah **teks, nomor WhatsApp, layanan, produk, atau gambar** TIDAK memerlukan build ulang — hanya penambahan class Tailwind baru yang memerlukannya. Untuk pekerjaan sehari-hari, Anda tidak akan pernah menjalankan perintah ini.

Warna dan font tema didefinisikan di **dua tempat yang harus sama**: blok `tailwind.config` di dalam `index.html` (dipakai CDN) dan `tailwind.config.js` (dipakai proses build). Jika mengubah warna, ubah keduanya.

### Menjalankan uji otomatis

```bash
npm install
npx playwright install chromium
npm run verify
```

Skrip ini menjalankan 41 pemeriksaan (section, link WhatsApp, Maps, SEO, overflow di 4 ukuran layar, aksesibilitas) dan menyimpan screenshot ke `screenshots/`.

---

## 7. Opsional — Memisahkan Data ke File Sendiri

Bila lebih nyaman mengelola konten di file terpisah:

1. Potong isi blok `<script id="site-data">` (mulai dari `const SITE = {` sampai `};`) ke file baru `assets/js/data.js`.
2. Di `index.html`, ganti blok tersebut menjadi:

```html
<script src="assets/js/data.js"></script>
```

Pastikan baris ini tetap berada **di atas** script logika tampilan di bagian bawah file.

> Catatan: setelah dipisah, membuka `index.html` langsung dari folder (protokol `file://`) tetap berfungsi karena file dimuat lewat tag `<script src>`, bukan `fetch`.

---

## 8. Verifikasi Kualitas (Yang Sudah Dipenuhi)

| Kriteria PRD | Status | Cara memverifikasi sendiri |
|---|---|---|
| 5 section lengkap & berurutan | ✅ | Scroll dari atas ke bawah |
| Floating WhatsApp di semua device | ✅ | Buka di HP, tombol hijau di kanan bawah |
| WhatsApp kontekstual per card | ✅ | Klik tombol di kartu layanan — pesan sudah terisi nama layanan |
| Google Maps termuat | ✅ | Scroll ke section Kontak |
| Smooth scroll navigasi | ✅ | Klik menu di header |
| Responsif mobile/tablet/desktop | ✅ | `F12` → ikon HP → uji 375 / 768 / 1440 px |
| Lazy loading gambar | ✅ | `F12` → tab Network → gambar dimuat saat di-scroll |
| SEO dasar + JSON-LD | ✅ | Uji di <https://search.google.com/test/rich-results> |
| Tanpa database / backend | ✅ | Hanya file statis di folder ini |
| Aksesibilitas (kontras, alt, tap target) | ✅ | Lighthouse → Accessibility |
| Konten mudah diedit | ✅ | Satu blok DATA, lihat bagian 2 |

**Cara menjalankan Lighthouse:** buka situs di Chrome → `F12` → tab **Lighthouse** → pilih **Mobile** → **Analyze page load**.

---

## 9. Dukungan Browser

Chrome, Edge, Firefox, Safari (macOS & iOS), Samsung Internet — versi 2 tahun terakhir. Pada browser sangat lama yang tidak mendukung `IntersectionObserver`, animasi dan lazy-load peta otomatis dilewati; **seluruh konten dan tombol WhatsApp tetap berfungsi normal**.

---

## 10. Di Luar Lingkup Versi 1.0

Sesuai PRD bagian 10: tanpa CMS/admin panel, tanpa e-commerce/checkout, satu bahasa (Indonesia), tanpa blog. Semuanya dapat ditambahkan pada fase berikutnya.
