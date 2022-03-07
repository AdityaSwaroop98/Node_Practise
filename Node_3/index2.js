const nodemon = require("nodemon")
const http = require("http");
const server = http.createServer((req, res) => {
    res.end('Hello From The Other Side');
});
server.listen(7000, '127.0.0.1', () => {
    console.log("Listening");
});