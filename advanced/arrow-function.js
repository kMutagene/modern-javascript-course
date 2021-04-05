const square = (number) => number * number

const squareLong = (number) => {return number * number}

console.log(square(3))

const ppl = [{
    name: "soos",
    age: 1337
},{
    name: "meem",
    age: 69
}]

const under420 = ppl.filter((ppl => ppl.age < 420))

console.log(under420)