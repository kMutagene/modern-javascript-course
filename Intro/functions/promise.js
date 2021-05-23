// callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === "number") {
            callback(undefined, num * 2)
        } else {
            callback("no number", undefined)
        }
    }, 2000)
} 

// "callback hell"
getDataCallback(2, (err,data) => {
    err
    ? console.log("??")
    : getDataCallback (data, (err,data) => {
        err
        ? console.log("??")
        : console.log(`callback data: ${data}`)
    })
})

// promise
const getDataPromise = (num, data) => 
    new Promise((resolve,reject) => {
        setTimeout(() => {
            typeof num === "number" 
            ? resolve( num * 2)
            : reject("no number")
        }, 2000)
    })

// not so nice promise nesting
getDataPromise(2)
    .then((data) => {
        getDataPromise(data)
            .then((data) => {console.log(`promise nesting data: ${data}`)})
            .catch((error) => {console.log(error)})
    })
    .catch((error) => {console.log(error)})

// promise chaining
getDataPromise("")
    .then((data) => {
        return getDataPromise(data)
    })
    .then((data) => {console.log(`promise chainingdata: ${data}`)})
    .catch((error) => {console.log(error)})