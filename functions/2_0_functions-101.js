// Function - input (argument(s)), code, output (return value)

let greetUser = function () {
    // function scope
    console.log("welcome user!")
}

let square = function (number) {
    console.log(`input: ${number}`)
    let result = number * number
    return result
}

greetUser()
console.log(square(3))