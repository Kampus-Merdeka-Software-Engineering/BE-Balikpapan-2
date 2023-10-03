const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const filePath = path.join(__dirname, 'landingpage.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (req.url === 'landingpage.css') {
      const filePath = path.join(__dirname, 'path/to/your/css/landingpage.css');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    } else if (req.url === 'navbar.css') {
      const filePath = path.join(__dirname, 'navbar.css');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    } else if (req.url === '/images/landingpageimage.png')
      const filePath = path.join(__dirname, 'path/to/your/images/landingpageimage.png');
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'image/png' });
          res.end(data);
        }
      });
    }
  } else if (req.method === 'POST') {
    if (req.url === '/your-post-endpoint') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', () => {
        console.log('Received POST data:', body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request received');
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
