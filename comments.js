// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});


