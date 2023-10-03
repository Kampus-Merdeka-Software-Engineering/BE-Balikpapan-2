const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const dressesCategory = [
    {
      id: 1,
      nama: 'Denim Mini Dress',
      harga: 280000,
    },
    {
      id: 2,
      nama: 'Basic Shirt Dress',
      harga: 280000,
    },
    {
      id: 3,
      nama: 'Button Mini Dress',
      harga: 280000,
    },
    {
      id: 4,
      nama: 'Button Neck Mini Dress',
      harga: 280000,
    },
    {
      id: 5,
      nama: 'Button Velvet Mini Dress',
      harga: 280000,
    },
    {
      id: 6,
      nama: 'Pocket Pleated Shirt Dress',
      harga: 280000,
    },
  ];
    
app.get('/dresses', (req, res) => {
  res.json(dressesCategory);
});

app.get('/dresses/:id', (req, res) => {
  const { id } = req.params;
  const produk = dressesCategory.find((item) => item.id === parseInt(id));
  if (produk) {
    res.json(produk);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.post('/dresses', (req, res) => {
  const { nama, harga } = req.body;
  const id = dressesCategory.length + 1; 
  const newProduk = { id, nama, harga };
  dressesCategory.push(newProduk);
  res.status(201).json(newProduk);
});

app.put('/dresses/:id', (req, res) => {
  const { id } = req.params;
  const { nama, harga } = req.body;
  const index = dressesCategory.findIndex((item) => item.id === parseInt(id));
  if (index !== -1) {
    topsCategory[index] = { id: parseInt(id), nama, harga };
    res.json(dressesCategory[index]);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.delete('/dresses/:id', (req, res) => {
  const { id } = req.params;
  const index = dressesCategory.findIndex((item) => item.id === parseInt(id));
  if (index !== -1) {
    const deletedProduk = dressesCategory.splice(index, 1);
    res.json(deletedProduk[0]);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});