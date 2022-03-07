// const http = require('http')

// http.createServer((req, res) => {
//     res.write("Hello")
//     res.end()


// }).listen(4000);
const express = require('express')
const app = express();



// auth = true;
// ----- MiddleWares----------------------------
// function MyMiddleWare(req, res, next) {
//     if (auth) {
//         console.log("Authenticated")

//     } else {
//         console.log("Not_Authenticated")

//     }
//     next();
// }

// function MyMiddleWare2(req, res, next) {
//     console.log("Second MiddleWare Active!")
//     next();
// }
// --------------------------------------------
app.get('/', (req, res) => {
    var MyString = `<h1>Hi This is under Get Method of Express JS</h1>
    <p>Lorem ipsum... </p>
    <a href ="">Click me -> </a>   
     `;
    res.send(MyString)
});
app.get('/contacts', (req, res) => {
    var ContactString = `<h1>Hey There... This is my contact string </h1>
    
    <pre>Here I Can Share my Contact details 
    and
    As I have Opted For 'Pre' Command from HTML thats why I will get Separated lines </pre>

    <a href = "https://www.google.com"> Now Google It ! </a>
    `
    res.send(ContactString)
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Started At ${PORT}`));