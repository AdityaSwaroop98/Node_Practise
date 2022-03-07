const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end('Hello From The Other Side');
    } else if (req.url == "/about") {
        res.end('Hello From The About Side');
    } else if (req.url == "/contact") {
        res.end('Hello From The Contact Side');
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h2>Error 404!</h2>");
    }
});
server.listen(7000, '127.0.0.1', () => {
    console.log("Listening");
});