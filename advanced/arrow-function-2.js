const add = function (a,b) {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log(add(1,2,3,4))

const add2 = (a,b) => {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

// arguments is only available in functions defined by `function` syntax
console.log(add2(1,2,3,4))

// arrow functions do not bind their `this value`:


const car = {
    color: "red",
    getSummary: function() {
        console.log(this.color)
    },
    getSummary2: () => {
        console.log(this.color)
    },
    getSummary3() {
        console.log(this.color)
    }
}

car.getSummary()

// this is not bound in the arrow function, car is undefined.
car.getSummary2()
car.getSummary3()