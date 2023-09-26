
const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request, "<<< request")
  console.log(response, "<<< response")

  if (request.url === "/") {
    response.write("Ini halaman kosong ya ?");
    response.end()
  }

  if (request.url === "/hallowBrow" && request.method === "GET") {
    response.end("<h1 style='color: red;'>ini adalah halaman Hallow Brow</h1>")
  }

  if (request.url === "/balikpapan2" && request.method === "GET") {
    response.end("")
  }
})

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server sedang berjalan pada url dan port http://localhost:${PORT}`)
})