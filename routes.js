const fs = require('fs');
const path = require('path');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading page');
        return;
      }
      res.end(data);
    });
    return;
  }

  if (url === '/about' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading page');
        return;
      }
      res.end(data);
    });
    return;
  }

  if (url === '/contact' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading page');
        return;
      }
      res.end(data);
    });
    return;
  }

  // Default response for unmatched routes
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error loading page');
      return;
    }
    res.end(data);
  });
};

module.exports = requestHandler;