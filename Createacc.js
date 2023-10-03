const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const filePath = path.join(__dirname, 'create_account.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }

      res.end(data);
    });
  } else if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = parse(body);

      const firstName = formData['First Name'];
      const lastName = formData['Last Name'];
      const email = formData['Email'];
      const password = formData['Password'];


      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Account Created Successfully</h1>');
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method not allowed');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});