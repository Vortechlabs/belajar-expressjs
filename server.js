// import dan konfigurasi dotenv
require('dotenv').config();

// 1. Import Express
const express = require('express');

// 2. Buat aplikasi Express
const app = express();

// 3. Tentukan port
const PORT = process.env.PORT || 3000;

// =========== BUAT ROUTE ===========

// Route untuk homepage
app.get('/', (req, res) => {
  res.send(`
    <h1>🎉 Selamat Datang di Server Express! </h1>
     <h1>${process.env.APP_NAME}</h1>
    <p>Dibuat oleh: ${process.env.AUTHOR}</p>
  `);
});

// Route untuk about page
app.get('/about', (req, res) => {
  res.send(`
    <h1>📖 Tentang Kami</h1>
  `);
});

// Route untuk halaman tidak ditemukan
app.use((req, res) => {
  res.status(404).send(`
    <h1>😢 404 - Halaman Tidak Ditemukan</h1>
    <p>URL yang kamu cari tidak ada</p>
    <a href="/">← Kembali ke Home</a>
  `);
});

// =========== JALANKAN SERVER ===========
app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 SERVER EXPRESS JALAN!");
  console.log("=================================");
  console.log(`🌐 Buka browser, kunjungi:`);
  console.log(`   http://localhost:${PORT}`);
  console.log("");
  console.log("💡 Tips:");
  console.log("   • Tekan Ctrl+C untuk stop server");
  console.log("   • Edit file server.js, otomatis restart!");
  console.log("=================================");
});