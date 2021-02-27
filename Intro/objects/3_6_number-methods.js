let num = 42.1337

console.log(num.toFixed(3))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.random())

let min = 0
let max = 1

let randomWholeBetween = function (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min
}

console.log(randomWholeBetween(min, max))

