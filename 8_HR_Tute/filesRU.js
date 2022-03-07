const fs = require('fs');

// const content = [{
//     type: "Node Application"
// }];

// fs.writeFileSync('test.json', JSON.stringify(content));


// Write File In Asynchronous Way 


// const content = "We are testing File System In Node JS"

// fs.writeFile('test.txt', content, { flag: 'w+' }, err => {
//     if (err) {
//         console.log(err)
//         return
//     }

//     console.log("Done !")
// })

// UNLINK A FILE 


fs.unlink('test.json', err => {
    if (err) {
        console.log(err)
        return
    }

    console.log("Removed!")
})