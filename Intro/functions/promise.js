// callback
const getData = (callback) =>{
    setTimeout(() => {
        callback(undefined,"soos")
    }, 2000)
} 

getData((err,data) => {
    err
    ? console.log("??")
    : console.log("callback: soos")
})

// promise
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        //reject("promise: error")
        resolve("promise: soos")
    }, 2000)
})

myPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })