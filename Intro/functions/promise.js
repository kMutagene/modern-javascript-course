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
const getDataPromise = (data) => 
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })


const myPromise = getDataPromise("promise: soos")

myPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })