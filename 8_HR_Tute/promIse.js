let promise = new Promise(function(resolve, reject) {
    // setTimeout(() => reject(Error("Run Before")), 1000)
    setTimeout(() => resolve("In Promise"), 1000)
});

promise.then(
    result => {
        console.log(result)
        getAfter()
    },
    error => console.log(error)
)

function getAfter() {
    console.log("Print After");
}