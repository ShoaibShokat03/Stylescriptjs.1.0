const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Get the file path from the request URL
  const filePath = 'index.html';

  // Get the file extension
  const ext = path.extname(filePath);

  // Set the content-type header based on the file extension
  let contentType = 'text/html';
  if (ext=='.js') {
    contentType = 'text/javascript';
  } else if (ext=='.css') {
    contentType = 'text/css';
  }
  else if (ext=='.json') {
    contentType = 'application/json';
  }
  else if (ext=='.png') {
    contentType = 'image/png';
  }
  else if (ext=='.jpg') {
    contentType = 'image/jpg';
  }
  else if (ext=='.gif') {
    contentType = 'image/gif';
  }

  // Read the file as a stream
  const fileStream = fs.createReadStream(filePath);

  // Set the content-type header
  res.setHeader('Content-Type', contentType);

  // Pipe the file stream to the response
  fileStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
