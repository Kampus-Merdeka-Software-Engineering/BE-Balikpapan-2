const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const filePath = path.join(__dirname, 'about_us.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }

    res.end(data);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
