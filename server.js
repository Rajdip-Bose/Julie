const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Handle CSS files
    if (req.url.endsWith('.css')) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('CSS file not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
        return;
    }

    // Handle PNG files
    if (req.url.endsWith('.png')) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Image not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data);
        });
        return;
    }

    // Serve index.html by default
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});