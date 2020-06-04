// Basic http server
let http = require('http');

let ourApp = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.end('Hello and welcome to our Homepage from Node.');
  }

  if (req.url == '/about') {
    res.end('Thank you for your interest from Node.');
  }
  res.end('We cannot find the page you are looking for.');
});
ourApp.listen(3000);
