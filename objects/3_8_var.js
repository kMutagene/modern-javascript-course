console.log(age) // is undefined instead of error
var age = 1337 // var declaration, but not assignment is always put on top of the scope


if (10 === 10) {
    var lol = "lol" // function-based scope
}

console.log(lol) // can access because of same function scope

const setName = function () {
    var lol = 1337 // function creates new scope for var
}

console.log(lol)

lol = "lul"

var lol = 42 // can shadow/'reassign' in the same scope

console.log(lol)