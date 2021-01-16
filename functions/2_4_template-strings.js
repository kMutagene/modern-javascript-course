console.log('Kev')
console.log("Kev" + ' Schne') // " and ' are the same

let firstName = "Kev"
let secondName = "Schne"

let printName = function (firstName, secondName, age) {
    return `Hi, my name it ${firstName} ${secondName} and i am ${age}`
}

console.log(printName(firstName, secondName))