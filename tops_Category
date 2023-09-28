const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const dressesCategory = [
    {
      id: 1,
      nama: 'Essential Crew Neck',
      harga: 280000,
    },
    {
      id: 2,
      nama: 'Round Neck Button Cardigan',
      harga: 280000,
    },
    {
      id: 3,
      nama: 'V-neck Cardigan',
      harga: 280000,
    },
    {
      id: 4,
      nama: 'Half Zip-up Knitted',
      harga: 280000,
    },
    {
      id: 5,
      nama: 'Cutted Basic Crop Shirt',
      harga: 280000,
    },
    {
      id: 6,
      nama: 'Square Neck Cropped Cardigan',
      harga: 280000,
    },
    {
      id: 7,
      nama: 'Puff Knitted Cardigan',
      harga: 280000,
    },
    {
      id: 8,
      nama: 'Half Button Knitted Top',
      harga: 280000,
    },
    {
      id: 9,
      nama: 'Jacket Sleeveless Knit Set',
      harga: 280000,
    },
    {
      id: 10,
      nama: 'Collar Half Button',
      harga: 280000,
    },
    {
      id: 11,
      nama: 'Cropped Cardigan',
      harga: 280000,
    },
    {
      id: 12,
      nama: 'Cable-Knit Slim-Fit Cardigan',
      harga: 280000,
    },
  ];      
    
app.get('/tops', (req, res) => {
  res.json(topsCategory);
});

app.get('/tops/:id', (req, res) => {
  const { id } = req.params;
  const produk = topsCategory.find((item) => item.id === parseInt(id));
  if (produk) {
    res.json(produk);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.post('/tops', (req, res) => {
  const { nama, harga } = req.body;
  const id = topsCategory.length + 1; 
  const newProduk = { id, nama, harga };
  topsCategory.push(newProduk);
  res.status(201).json(newProduk);
});

app.put('/tops/:id', (req, res) => {
  const { id } = req.params;
  const { nama, harga } = req.body;
  const index = topsCategory.findIndex((item) => item.id === parseInt(id));
  if (index !== -1) {
    topsCategory[index] = { id: parseInt(id), nama, harga };
    res.json(topsCategory[index]);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.delete('/tops/:id', (req, res) => {
  const { id } = req.params;
  const index = topsCategory.findIndex((item) => item.id === parseInt(id));
  if (index !== -1) {
    const deletedProduk = topsCategory.splice(index, 1);
    res.json(deletedProduk[0]);
  } else {
    res.status(404).json({ pesan: 'Produk tidak ditemukan' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});