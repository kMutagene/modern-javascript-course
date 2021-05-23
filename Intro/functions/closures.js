const myFunction = (message2) => {
    const message = "sup b"
    const printMessage = (message3) => {
        console.log(message)
        console.log(message2)
        console.log(message3)
    }
    return printMessage
}

let x = myFunction("jojojojo")

x("hi")

// closure for creating a "private" variable
// count variable is only vailable in the scope of the mother function
// a closure is a function that is evaluated in an environment containing 
// one or more bound variables
const createCounter = () => {
    let count = 0
    return {
        increment() {count++},
        decrement() {count--},
        get(){return count}
    }
}

let counter = createCounter()
counter.increment()
console.log(counter)
console.log(counter.get())

// Currying / closure challenge

const createTipper = (baseTip) => {
    return (bill) => {
        return baseTip * bill
    }
}

let tip20 = createTipper(.2)
let tip15 = createTipper(.15)

console.log(tip20(100))
console.log(tip15(100))

