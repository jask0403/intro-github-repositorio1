const http = require("http");

http
  .createServer(function (req, res) {
    res.write("<h1>Hola Mundo Servidor  Nodejs</h1>");
    res.end;
  })
  .listen(3000);
