let myName 

myName = "Kev"

if (myName === undefined) {
    console.log("strange concept coming from a strong statically typed language background.")
} else {
    console.log("everything good")
}
// non-set arguments ill be undefined
let square = function (num) {console.log(num)}

// if function has no return statement, return value is undefined (as default return value)
let result = square()
console.log(result)

// 'clear' a value (why should u ever do such things?)
let age = 26
age = undefined // better not use this as it is a language default
age = null // use null when assigning "nothing"

console.log(age)