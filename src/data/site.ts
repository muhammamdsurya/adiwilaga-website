/* Seluruh konten situs ada di file ini. Ubah teks di sini, lalu `npm run build`.
   Gambar: taruh file .webp di src/assets/img/ lalu sebut namanya tanpa ekstensi. */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.webp', { eager: true });
export function img(name: string): ImageMetadata {
  const f = files[`../assets/img/${name}.webp`];
  if (!f) throw new Error(`Gambar tidak ditemukan: src/assets/img/${name}.webp`);
  return f.default;
}

export const company = {
  name: 'Adiwilaga Agung',
  tagline: 'Kontraktor Umum & Pengadaan Barang Jasa',
  founded: 2015,
  email: 'adiwilagaagung@gmail.com',
  wa: [
    { number: '6287881521871', label: '0878-8152-1871' },
    { number: '6282318278050', label: '0823-1827-8050' },
  ],
  address: {
    street: 'Srimaya Residence, Jl. Baswara Barat 5 No. ZBH 10, RT.003/RW.006, Ciketing Udik, Bantar Gebang',
    city: 'Bekasi', region: 'Jawa Barat', postal: '17153',
  },
  geo: { lat: -6.35906621, lng: 106.98495144 },
  mapsUrl: 'https://maps.google.com/?cid=13610697224522819314',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.270174033571!2d106.98495144!3d-6.35906621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69930064031879%3A0xbce2e9035d13e6f2!2sAdiwilaga%20Agung!5e0!3m2!1sid!2sid',
  hours: 'Setiap hari, 09.00-17.00 WIB',
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/adiwilagaagung761/', icon: 'instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/AdiwilagaAgung/', icon: 'facebook' },
    { name: 'LinkedIn', url: 'https://id.linkedin.com/in/adiwilaga-agung-3a2629258', icon: 'linkedin' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@_adiwilagaagung761', icon: 'tiktok' },
  ],
};
export const fullAddress = `${company.address.street}, ${company.address.city}, ${company.address.region} ${company.address.postal}`;
export const waLink = (msg = 'Halo Adiwilaga Agung, saya ingin bertanya tentang layanan Anda.', n = 0) =>
  `https://wa.me/${company.wa[n].number}?text=${encodeURIComponent(msg)}`;

export const stats = [
  { value: 11, suffix: '+', label: 'Tahun pengalaman' },
  { value: 120, suffix: '+', label: 'Proyek selesai' },
  { value: 45, suffix: '+', label: 'Klien korporat & instansi' },
  { value: 11, suffix: '', label: 'Lini layanan' },
];

export const legal = [
  { name: 'NIB', desc: 'Nomor Induk Berusaha' },
  { name: 'OSS RBA', desc: 'Perizinan berusaha berbasis risiko' },
  { name: 'NPWP', desc: 'Wajib pajak badan' },
  { name: 'SBU', desc: 'Sertifikat Badan Usaha jasa konstruksi' },
];

export const sectors = [
  { name: 'Perbankan', icon: 'bank' },
  { name: 'Instansi pemerintah', icon: 'flag' },
  { name: 'Perusahaan swasta', icon: 'building' },
  { name: 'Perorangan', icon: 'user' },
];

export const heroSlides = [
  { img: 'construction5', alt: 'Renovasi interior kantor oleh tim Adiwilaga Agung' },
  { img: 'repair2', alt: 'Perawatan kompresor oleh teknisi Adiwilaga Agung' },
  { img: 'printing4', alt: 'Pemasangan spanduk hasil percetakan Adiwilaga Agung' },
  { img: 'cctv1', alt: 'Teknisi Adiwilaga Agung memasang kamera CCTV' },
  { img: 'maintenance9', alt: 'Perawatan mesin hitung uang untuk perbankan' },
];

export const steps = [
  { title: 'Konsultasi', icon: 'chat', text: 'Kirim kebutuhan Anda lewat WhatsApp atau email, lengkap dengan foto atau dokumen bila ada.' },
  { title: 'Survey & Penawaran', icon: 'clip', text: 'Survey lokasi dan RAB gratis untuk proyek konstruksi. Layanan lain mendapat penawaran tertulis.' },
  { title: 'Pengerjaan', icon: 'hat', text: 'Tim teknis bekerja sesuai spesifikasi dan jadwal, dengan laporan progres berkala.' },
  { title: 'Serah Terima', icon: 'file', text: 'Laporan servis, Berita Acara, atau garansi sesuai jenis pekerjaan.' },
];

export type Service = {
  slug: string; title: string; short: string; meta: string; lead: string;
  cover: string; alt: string; points: string[]; scope: string[]; gallery: [string, string][];
  /* tautan tambahan di kartu "Minta penawaran" */
  link?: { text: string; label: string; url: string };
};

export const services: Service[] = [
  {
    slug: 'konstruksi', title: 'Konstruksi & Renovasi Gedung dan Rumah', short: 'Konstruksi & Renovasi',
    meta: 'Jasa konstruksi dan renovasi gedung kantor, ruko, dan rumah di Bekasi. Survey dan RAB gratis, laporan progres berkala, garansi pekerjaan struktur.',
    lead: 'Pembangunan baru dan renovasi gedung kantor, ruko, dan rumah tinggal. Mulai dari RAB, struktur, arsitektur, sampai finishing, dengan laporan progres berkala.',
    cover: 'construction5', alt: 'Renovasi interior gedung kantor oleh Adiwilaga Agung',
    points: ['Survey & RAB gratis', 'Gambar kerja dan progres berkala', 'Garansi pekerjaan struktur'],
    scope: ['Pembangunan gedung kantor, ruko, dan rumah tinggal', 'Renovasi interior, eksterior, dan apartemen', 'Pekerjaan struktur, arsitektur, dan finishing', 'Pemasangan keramik, sanitasi, pipa, dan pompa air', 'Pemasangan smart lock dan lampu'],
    gallery: [['construction5', 'Pengerjaan interior bangunan'], ['construction-site4', 'Pengerjaan eksterior bangunan'], ['construction1', 'Progres pekerjaan bangunan'], ['construction2', 'Pemasangan keramik'], ['construction3', 'Pemasangan pipa dan pompa air'], ['construction6', 'Pemasangan toilet'], ['construction7', 'Renovasi apartemen'], ['construction8', 'Pemasangan smart lock'], ['construction9', 'Pemasangan lampu rotary']],
  },
  {
    slug: 'service-alat-kantor-bank', title: 'Service & Maintenance Alat Kantor dan Bank', short: 'Service Alat Kantor & Bank',
    meta: 'Service dan maintenance mesin hitung uang, pass box, mesin antrian, printer, mesin tik, dan mesin absensi di Bekasi. Tersedia kontrak maintenance berkala.',
    lead: 'Perbaikan dan perawatan mesin hitung uang, mesin hitung koin, pass box, mesin antrian, printer, mesin tik, dan mesin absensi. Tersedia kontrak maintenance dengan jadwal kunjungan tetap.',
    cover: 'maintenance1', alt: 'Teknisi memperbaiki mesin hitung uang',
    points: ['Kontrak maintenance berkala', 'Teknisi on-site dan sparepart', 'Laporan servis tertulis'],
    scope: ['Mesin hitung uang dan mesin hitung koin', 'Pass box dan mesin antrian', 'Printer dot matrix, printer tinta, dan Printronix', 'Mesin tik elektrik dan manual', 'Mesin absensi dan timestamp Amano', 'Mesin penghancur kertas'],
    gallery: [['maintenance1', 'Servis mesin hitung uang'], ['maintenance2', 'Perawatan mesin'], ['maintenance3', 'Perbaikan mesin absen Amano'], ['printing3', 'Perbaikan mesin tik elektrik dan manual'], ['printing1', 'Perbaikan printer dot matrix'], ['maintenance7', 'Perbaikan printer tinta'], ['maintenance8', 'Maintenance mesin penghancur kertas'], ['maintenance9', 'Maintenance mesin hitung uang portable'], ['maintenance5', 'Servis mesin Printronix'], ['maintenance10', 'Perbaikan mesin Amano timestamp']],
  },
  {
    slug: 'sewa-mesin-penghancur-kertas', title: 'Sewa Mesin Penghancur Kertas & Pemusnahan Dokumen', short: 'Pemusnahan Dokumen',
    meta: 'Sewa mesin penghancur kertas dan pemusnahan dokumen arsip di Bekasi. Metode pulping, bisa on-site, disertai Berita Acara Pemusnahan resmi.',
    lead: 'Sewa mesin penghancur kertas untuk dipakai di lokasi Anda, atau pemusnahan arsip dengan metode pulping sehingga dokumen tidak dapat direkonstruksi. Setiap pemusnahan disertai Berita Acara Pemusnahan.',
    cover: 'paper-shredder1', alt: 'Mesin penghancur kertas untuk pemusnahan dokumen on-site',
    points: ['Berita Acara Pemusnahan resmi', 'Metode pulping, tidak bisa direkonstruksi', 'On-site dan disaksikan tim Anda'],
    scope: ['Sewa mesin penghancur kertas di lokasi Anda', 'Pemusnahan arsip dengan metode pulping', 'Pemusnahan on-site yang disaksikan tim Anda', 'Berita Acara Pemusnahan untuk setiap pekerjaan'],
    gallery: [['paper-shredder1', 'Sewa mesin penghancur kertas on-site'], ['paper-shredder2', 'Pemusnahan dokumen on-site'], ['paper-shredder3', 'Pemusnahan arsip metode pulping']],
  },
  {
    slug: 'percetakan-umum', title: 'Percetakan Umum', short: 'Percetakan',
    meta: 'Percetakan umum di Bekasi: kop surat, amplop, nota, kartu nama, ID card, buku, brosur, banner, spanduk, dan dokumen tender.',
    lead: 'Cetak kop surat, amplop, nota, formulir, kartu nama, ID card, buku, brosur, banner, spanduk, dan dokumen tender, termasuk bantuan desain sederhana dan pengerjaan cepat.',
    cover: 'printing4', alt: 'Pemasangan spanduk hasil cetak Adiwilaga Agung',
    points: ['Banner, spanduk, dan stiker', 'Bantuan desain sederhana', 'Cepat untuk kebutuhan tender'],
    scope: ['Kop surat, amplop, nota, dan formulir', 'Kartu nama dan ID card', 'Buku custom dan brosur', 'Banner, spanduk, dan stiker beserta pemasangan', 'Dokumen tender'],
    gallery: [['printing4', 'Cetak dan pemasangan spanduk'], ['printing5', 'Cetak dan pemasangan stiker'], ['printing6', 'Cetak ID card'], ['printing7', 'Cetak buku custom']],
  },
  {
    slug: 'supplier-material', title: 'Supplier Material Proyek', short: 'Material Proyek',
    meta: 'Supplier material proyek di Bekasi: pasir, batu split, abu batu, batu belah, keramik heavy duty, semen, besi. Harga proyek dan pengiriman terjadwal.',
    lead: 'Pasir, batu split, abu batu, batu belah, keramik, semen, besi, cat, dan pipa untuk skala retail maupun proyek. Spesifikasi disesuaikan dengan RAB dan dikirim terjadwal ke lokasi.',
    cover: 'abu-batu', alt: 'Material abu batu untuk proyek konstruksi',
    points: ['Harga proyek untuk volume besar', 'Spesifikasi sesuai RAB', 'Pengiriman terjadwal'],
    scope: ['Pasir Rangkas Abadi, Bangka Cream, dan Bangka Putih', 'Batu split, abu batu, dan batu belah', 'Keramik heavy duty', 'Semen, besi, cat, dan pipa'],
    gallery: [['abu-batu', 'Abu batu'], ['heavy-duty', 'Keramik heavy duty'], ['rangkas-abadi', 'Pasir Rangkas Abadi'], ['split', 'Batu split'], ['bangka-cream', 'Pasir Bangka Cream'], ['bangka-putih', 'Pasir Bangka Putih'], ['batu-belah', 'Batu belah']],
  },
  {
    slug: 'bongkar-pasang-gedung', title: 'Bongkar Gedung & Bangunan', short: 'Bongkar Bangunan',
    meta: 'Jasa bongkar gedung, interior, dan lantai di Bekasi, termasuk pengangkutan material bongkaran, oleh tenaga berpengalaman.',
    lead: 'Pembongkaran gedung, interior, dan lantai, termasuk pengangkutan material bongkaran, dikerjakan tenaga berpengalaman dengan peralatan yang sesuai.',
    cover: 'construction-site6', alt: 'Pembongkaran bangunan oleh tim Adiwilaga Agung',
    points: ['Tenaga berpengalaman', 'Angkut material bongkar', 'Prosedur kerja aman'],
    scope: ['Pembongkaran gedung dan bangunan', 'Pembongkaran interior dan lantai vinyl', 'Pengangkutan material bongkaran'],
    gallery: [['construction-site6', 'Pembongkaran bangunan'], ['construction-site5', 'Pembongkaran lantai vinyl'], ['construction-site8', 'Pengangkutan material bongkar']],
  },
  {
    slug: 'sewa-mobil', title: 'Sewa Mobil Operasional', short: 'Sewa Mobil',
    meta: 'Sewa mobil operasional di Bekasi untuk kantor maupun perorangan, lengkap dengan sopir profesional.',
    lead: 'Sewa mobil operasional untuk kantor maupun perorangan, lengkap dengan sopir profesional.',
    cover: 'rental-car1', alt: 'Mobil operasional untuk disewa',
    points: ['Armada siap pakai', 'Sopir profesional', 'Mengutamakan keselamatan'],
    scope: ['Mobil operasional untuk kantor', 'Sewa untuk kebutuhan perorangan', 'Termasuk sopir profesional'],
    gallery: [['rental-car1', 'Armada mobil operasional'], ['rental-car2', 'Mobil operasional siap pakai']],
  },
  {
    slug: 'sewa-tenda-perlengkapan-acara', title: 'Sewa Tenda & Perlengkapan Acara', short: 'Sewa Tenda & Acara',
    meta: 'Sewa tenda dan perlengkapan acara di Bekasi untuk kantor, instansi, dan perorangan: kursi bersarung, meja, backdrop, dan dekorasi, termasuk penataan di lokasi.',
    lead: 'Sewa tenda dan perlengkapan acara untuk kantor, instansi, dan perorangan. Kursi bersarung, meja, backdrop, dan dekorasi bunga kami antar dan tata di lokasi sampai acara siap dimulai.',
    cover: 'event-rental2', alt: 'Penataan kursi bersarung putih dan backdrop untuk acara seminar',
    points: ['Untuk kantor dan perorangan', 'Antar, pasang, dan bongkar', 'Penataan sesuai layout acara'],
    scope: ['Sewa tenda untuk acara indoor dan outdoor', 'Kursi bersarung dan meja', 'Backdrop dan banner acara', 'Dekorasi bunga dan standing flower', 'Pengantaran, penataan, dan pembongkaran'],
    gallery: [['event-rental2', 'Penataan kursi untuk seminar'], ['event-rental1', 'Meja narasumber dan backdrop acara'], ['event-rental3', 'Penataan kursi bersarung untuk peserta']],
  },
  {
    slug: 'custom-alat', title: 'Pengadaan Barang & Jasa Custom', short: 'Barang Custom',
    meta: 'Pembuatan brankas custom, troli, dan perkakas sesuai spesifikasi teknis di Bekasi, termasuk pengantaran barang jadi.',
    lead: 'Pembuatan brankas, troli, dan perkakas sesuai spesifikasi teknis Anda, termasuk pengantaran barang jadi.',
    cover: 'custom-tools2', alt: 'Pembuatan brankas custom',
    points: ['Brankas custom', 'Sesuai spesifikasi teknis', 'Garansi kualitas'],
    scope: ['Brankas custom', 'Troli waste oil', 'Perkakas sesuai spesifikasi', 'Pengantaran barang jadi'],
    gallery: [['custom-tools1', 'Troli waste oil custom'], ['custom-tools2', 'Brankas custom'], ['custom-tools3', 'Pengantaran brankas dan barang jadi']],
  },
  {
    slug: 'repair-alat', title: 'Perbaikan Alat & Perawatan Mesin', short: 'Perbaikan Mesin',
    meta: 'Perbaikan dan perawatan alat kerja dan mesin di Bekasi, seperti dongkrak dan kompresor, dengan garansi kualitas.',
    lead: 'Perbaikan dan perawatan alat kerja dan mesin seperti dongkrak dan kompresor sesuai kebutuhan operasional Anda.',
    cover: 'repair1', alt: 'Perbaikan dongkrak oleh teknisi Adiwilaga Agung',
    points: ['Dongkrak dan kompresor', 'Perawatan berkala', 'Garansi kualitas'],
    scope: ['Perbaikan dongkrak', 'Maintenance kompresor', 'Perawatan alat kerja dan mesin berkala'],
    gallery: [['repair1', 'Perbaikan dongkrak'], ['repair2', 'Maintenance kompresor']],
  },
  {
    slug: 'layanan-jasa-it', title: 'Layanan IT: CCTV, Jaringan & Absensi', short: 'CCTV & IT',
    meta: 'Instalasi CCTV, jaringan LAN dan Wi-Fi, mesin absensi sidik jari, akses pintu, dan custom software di Bekasi, termasuk perawatan berkala.',
    lead: 'Instalasi CCTV dengan akses dari HP, jaringan LAN dan Wi-Fi, mesin absensi sidik jari, akses pintu, dan custom software, termasuk perawatan berkala.',
    cover: 'cctv1', alt: 'Teknisi memasang kamera CCTV',
    points: ['CCTV dengan akses dari HP', 'Jaringan LAN dan Wi-Fi', 'Absensi sidik jari dan akses pintu', 'Custom software'],
    scope: ['Instalasi CCTV dengan akses dari HP', 'Jaringan LAN dan Wi-Fi', 'Mesin absensi sidik jari dan akses pintu', 'Pembuatan aplikasi dan software custom', 'Perawatan perangkat berkala'],
    gallery: [['cctv1', 'Pemasangan CCTV'], ['akses', 'Akses pintu sidik jari'], ['aplikasi', 'Pembuatan aplikasi custom']],
    link: { text: 'Lihat portofolio website dan aplikasi custom kami di', label: 'Ayrus Digital', url: 'https://ayrusdigital.my.id/' },
  },
];

export const products = [
  { name: 'Keramik Heavy Duty 10 x 20 cm', img: 'heavy-duty', alt: 'Keramik heavy duty 10 x 20 cm untuk bengkel, gudang, dan workshop', spec: '10 x 20 cm · Unpolished · Grade A', points: ['Untuk bengkel, gudang, dan workshop', 'Permukaan anti-slip', 'Stok proyek tersedia'] },
  { name: 'Batu Split 1-2 cm', img: 'split', alt: 'Batu split untuk pengecoran', spec: 'Ukuran 1-2 cm · Per kubik', points: ['Untuk campuran cor beton', 'Bersih dan terjaga', 'Tersedia volume besar'] },
  { name: 'Abu Batu', img: 'abu-batu', alt: 'Abu batu untuk campuran adukan', spec: 'Butiran halus · Curah / per kubik', points: ['Untuk plester dan acian', 'Tekstur halus merata', 'Harga bersaing untuk proyek'] },
  { name: 'Pasir Rangkas Abadi', img: 'rangkas-abadi', alt: 'Pasir Rangkas Abadi untuk konstruksi', spec: 'Butiran sedang · Curah / per kubik', points: ['Untuk cor dan pasangan bata', 'Kualitas terjaga', 'Dikirim ke lokasi'] },
  { name: 'Pasir Bangka Cream', img: 'bangka-cream', alt: 'Pasir Bangka Cream untuk plester', spec: 'Butiran halus · Warna cream', points: ['Untuk plesteran halus', 'Warna konsisten', 'Stok proyek besar'] },
  { name: 'Pasir Bangka Putih', img: 'bangka-putih', alt: 'Pasir Bangka Putih untuk finishing', spec: 'Butiran halus · Warna putih', points: ['Untuk acian dan finishing', 'Warna cerah dan bersih', 'Harga bersaing untuk volume besar'] },
  { name: 'Batu Belah', img: 'batu-belah', alt: 'Batu belah untuk pondasi', spec: 'Ukuran variatif · Curah / per kubik', points: ['Kuat untuk pondasi', 'Untuk talud dan saluran', 'Tersedia volume besar'] },
  { name: 'Mesin Penghancur & Pelebur Kertas', img: 'paper-shredder1', alt: 'Mesin penghancur kertas untuk kantor', spec: 'Strip cut · Cross cut · Sewa / beli', points: ['Potongan cross cut lebih aman', 'Opsi sewa harian', 'Pendampingan teknis'] },
  { name: 'Paket CCTV 4 Channel', img: 'cctv', alt: 'Paket CCTV 4 channel dengan DVR', spec: '4 kamera · DVR · Termasuk instalasi', points: ['Pantau dari HP (Android/iOS)', 'Kabel dan instalasi rapi', 'Garansi perangkat'] },
  { name: 'Software / Aplikasi Custom', img: 'aplikasi', alt: 'Pembuatan aplikasi custom web dan mobile', spec: 'Web & mobile · Sesuai kebutuhan', points: ['Dibuat sesuai proses bisnis Anda', 'Dukungan 24/7', 'Keamanan data terjaga'] },
];

/* `service` mengaitkan pertanyaan ke halaman layanan tertentu (tampil juga di sana) */
export const faq: { q: string; a: string; service?: string }[] = [
  { q: 'Apa saja layanan Adiwilaga Agung?', a: 'Konstruksi dan renovasi gedung atau rumah, service dan maintenance alat kantor dan bank, sewa mesin penghancur kertas dan pemusnahan dokumen, percetakan umum, supplier material proyek, bongkar bangunan, sewa mobil operasional, sewa tenda dan perlengkapan acara, pembuatan barang custom, perbaikan mesin, serta instalasi CCTV, jaringan, absensi, dan custom software.' },
  { q: 'Di mana lokasi Adiwilaga Agung?', a: 'Kantor kami di Srimaya Residence, Jl. Baswara Barat 5 No. ZBH 10, Ciketing Udik, Bantar Gebang, Bekasi, Jawa Barat 17153.' },
  { q: 'Kapan jam operasional Adiwilaga Agung?', a: 'Setiap hari pukul 09.00 sampai 17.00 WIB.' },
  { q: 'Apakah pemusnahan dokumen disertai Berita Acara?', a: 'Ya. Setiap pemusnahan disertai Berita Acara Pemusnahan. Dokumen dihancurkan dengan mesin penghancur kertas di lokasi Anda atau dilebur dengan metode pulping sehingga tidak dapat direkonstruksi.', service: 'sewa-mesin-penghancur-kertas' },
  { q: 'Apakah survey dan RAB proyek konstruksi gratis?', a: 'Ya, survey lokasi dan penyusunan RAB untuk proyek konstruksi dan renovasi tidak dipungut biaya.', service: 'konstruksi' },
  { q: 'Apakah tersedia kontrak maintenance mesin kantor dan bank?', a: 'Ya. Kami melayani kontrak maintenance berkala untuk mesin hitung uang, mesin hitung koin, pass box, mesin antrian, printer, dan mesin absensi, dengan teknisi on-site dan laporan servis tertulis.', service: 'service-alat-kantor-bank' },
  { q: 'Bagaimana cara meminta penawaran harga?', a: 'Kirim kebutuhan Anda lewat WhatsApp ke 0878-8152-1871 atau 0823-1827-8050, atau email adiwilagaagung@gmail.com. Kami bantu hitung estimasi dan susun penawaran.' },
];
