function Clone() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Icons')
        }, 2000)
    })
}

async function msg(callback) {
    const msg = await Clone()
    console.log("Message: ", msg)
    callback()
}

msg(getResult)

function getResult() {
    console.log("Execute After");
}