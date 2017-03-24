const http = require ('http');
const fs = require('fs');

const PORT = 8081;

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, contents) => {
  res.end(contents);
    });
});

server.listen(PORT, (err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log(`server is listering on port ${PORT}...`);
});
