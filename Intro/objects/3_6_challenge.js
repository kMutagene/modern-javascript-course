// 1 - 5
// guess
// return true if guess correct, false otherwise

let randomWholeBetween = function (min, max) {
    return Math.floor (Math.random() * (max - min + 1)) + min
}
let makeGuess = function (guess) {
    let rnd = randomWholeBetween(1,5)
    return (rnd === guess)
}

console.log(makeGuess(1))