const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home Page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Opp!</h1>
  <p> We cant seem to find the page that u r looking for</p>
  <a href="/">Back home</a>
  `);
});

server.listen(5000);
