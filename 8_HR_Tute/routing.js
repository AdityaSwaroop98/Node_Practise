// Performing Task on a Particular Path is Called Routing 




const http = require("http");

function index(request, response) {
    response.writeHead(200);
    response.end("Node JS Routing");
}

function about(request, response) {
    response.writeHead(200)
    response.end('This Is About Page For The Test Of Routing')
}

http.createServer(function(req, res) {
    if (req.url == '/') {
        return index(req, res);
    }
    if (req.url == '/about') {
        return about(req, res);
    }
}).listen(7000);