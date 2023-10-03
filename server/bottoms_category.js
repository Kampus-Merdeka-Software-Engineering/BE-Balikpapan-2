const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const bottomsCategory = [
    {
      id: 1,
      nama: 'Wide Cotton Pants',
      harga: 280000,
    },
    {
      id: 2,
      nama: 'Banded Wide Leg Pants',
      harga: 280000,
    },
    {
      id: 3,
      nama: 'Basic Pintuck Tailored Pants',
      harga: 280000,
    },
    {
      id: 4,
      nama: 'Buckled Cotton Pants',
      harga: 280000,
    },
    {
      id: 5,
      nama: 'Cargo Long Skirt',
      harga: 280000,
    },
    {
      id: 6,
      nama: 'Jeans Long Skirt',
      harga: 280000,
    },
    {
      id: 7,
      nama: 'Pleated Denim Mini Skirt',
      harga: 280000,
    },
    {
      id: 8,
      nama: 'Pintuck Pleated Maxi Skirt',
      harga: 280000,
    },
  ];
  
app.get('/bottoms', (req, res) => {
  res.json(bottomsCategory);
});

app.get('/bottoms/:id', (req, res) => {
  const { id } = req.params;
  const produk = bottomsCategory.find((item) => item.id === parseInt(id));
  if (produk) {
    res.json(produk);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.post('/bottoms', (req, res) => {
  const { nama, harga } = req.body;
  const id = bottomsCategory.length + 1; 
  const newProduk = { id, nama, harga };
  topsCategory.push(newProduk);
  res.status(201).json(newProduk);
});

app.put('/bottoms/:id', (req, res) => {
  const { id } = req.params;
  const { nama, harga } = req.body;
  const index = bottomsCategory.findIndex((item) => item.id === parseInt(id));
  if (index !== -1) {
    topsCategory[index] = { id: parseInt(id), nama, harga };
    res.json(bottomsCategory[index]);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.delete('/bottoms/:id', (req, res) => {
  const { id } = req.params;
  const index = bottomsCategory.findIndex((item) => item.id === parseInt(id));
  if (index !== -1) {
    const deletedProduk = bottomsCategory.splice(index, 1);
    res.json(deletedProduk[0]);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
