const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landingpage.html'));
});

app.get('/category_tops.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'category_tops.html'));
});

app.get('/category_bottoms.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'category_bottoms.html'));
});

app.get('/category_dresses.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'category_dresses.html'));
});

app.get('/about_us.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about_us.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
