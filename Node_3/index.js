const fs = require("fs");
fs.writeFileSync('bio.txt', "Hello Everyone this is my first attempt ");
fs.appendFileSync('bio.txt', " Appending the file and trying..")
const read = fs.readFileSync('bio.txt', 'utf-8');
console.log(read);
// fs.readFile('bio.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });