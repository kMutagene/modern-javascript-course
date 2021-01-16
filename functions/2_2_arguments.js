// multiple function arguments

let add = function (first, second) {
    return first + second
}

let add_arrow = (first, second) => {
    return first + second
}

console.log(add(1, 2))

// default arguments

let getScoreText = (name = 'anonymous', score = 0) => {name
    return `name: ${name}; score: ${score}`
}

console.log(getScoreText(null,2))
