// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define port
const PORT = 3000;

// Helper function to serve files
const serveFile = (filePath, res, statusCode = 200) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};

// Create server
const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`);

    let filePath = '';

    switch (req.url) {
        case '/':
        case '/home':
            filePath = path.join(__dirname, 'pages', 'home.html');
            serveFile(filePath, res, 200);
            break;

        case '/about':
            filePath = path.join(__dirname, 'pages', 'about.html');
            serveFile(filePath, res, 200);
            break;

        case '/contact':
            filePath = path.join(__dirname, 'pages', 'contact.html');
            serveFile(filePath, res, 200);
            break;

        default:
            filePath = path.join(__dirname, 'pages', '404.html');
            serveFile(filePath, res, 404);
            break;
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});