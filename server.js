const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body style="text-align: center;"><h2>This service is no longer available.</h2><h2>Este servicio ya no se encuentra disponible.</h2><p>A similar service showing recent activity on the brandmeister network can be found at:</p><p>Un servicio similar que muestra actividad reciente en la red Brandmeister se encuentra en:</p><h3><a href="https://bminfo.ea7klk.es">https://bminfo.ea7klk.es</a></h3></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});