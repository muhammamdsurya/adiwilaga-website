/* ===========================================================================
   tailwind.config.js — Adiwilaga Agung
   ---------------------------------------------------------------------------
   Deskripsi : Konfigurasi tema korporat (navy + aksen oranye) untuk proses
               BUILD CSS lokal. Isinya HARUS sama dengan blok `tailwind.config`
               yang ada di dalam index.html.
   Dipakai   : npx tailwindcss -i src/input.css -o assets/css/tailwind.min.css --minify
   Tanggal Modifikasi : 17 Agustus 2026
   =========================================================================== */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy:   { 950:'#04101F', 900:'#071A32', 800:'#0B2545', 700:'#123B6B', 600:'#1B4F8A', 500:'#2A6BB0' },
        accent: { 400:'#FB923C', 500:'#F97316', 600:'#EA580C', 700:'#C2410C' },
        wa:     { 500:'#25D366', 600:'#1EBE5D' }
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        card:  '0 1px 2px rgba(7,26,50,.06), 0 8px 24px -8px rgba(7,26,50,.12)',
        lift:  '0 8px 16px -4px rgba(7,26,50,.12), 0 24px 48px -12px rgba(7,26,50,.22)',
        float: '0 8px 24px rgba(7,26,50,.28)'
      }
    }
  },
  plugins: []
}
