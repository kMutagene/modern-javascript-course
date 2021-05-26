const getDataPromise = (num, data) => 
    new Promise((resolve,reject) => {
        setTimeout(() => {
            typeof num === "number" 
            ? resolve( num * 2)
            : reject("no number")
        }, 2000)
    })

const processData = async () => {
    return await getDataPromise(2)
}

processData()
    .then((data) => 
        console.log(data)
    )
    .catch ((e) => {console.log(e)})