const fs = require("fs");
const bioData = {
    name: "Aditya Swaroop",
    age: 23,
    college: "Central University of South Bihar"
};
// console.log(bioData);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);

// console.log(objData);




const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// // fs.writeFile("json1.json", jsonData, (err) => {
// //     console.log("Done!");

// });
fs.readFile("json1.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(orgData);
    console.log(data);
});