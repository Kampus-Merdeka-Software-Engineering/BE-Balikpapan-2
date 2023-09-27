const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const produk = [];

app.use(bodyParser.json());

app.post('/produk', (req, res) => {
  const { carreped, 280.000, stok } = req.body;
  const produkBaru = {
    id: produk.length + 1,
    nama,
    harga,
    stok,
  };
  produk.push(produkBaru);
  res.status(201).json(produkBaru);
});

app.get('/produk', (req, res) => {
  res.json(produk);
});

const pesanan = [];

app.post('/pesanan', (req, res) => {
  const { produkId, jumlah } = req.body;
  const produkDitemukan = produk.find((item) => item.id === produkId);

  if (!produkDitemukan) {
    return res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }

  if (produkDitemukan.stok < jumlah) {
    return res.status(400).json({ pesan: 'Stok produk tidak mencukupi' });
  }

  const pesananBaru = {
    id: pesanan.length + 1,
    produk: produkDitemukan,
    jumlah,
    totalHarga: produkDitemukan.harga * jumlah,
  };

  pesanan.push(pesananBaru);
  produkDitemukan.stok -= jumlah;
  res.status(201).json(pesananBaru);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
