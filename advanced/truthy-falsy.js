const products = []
const product = products[0]

// truthy - values that resolve to true in a boolean context
// falsy - values that resolve to false in a boolean context

product
    ? console.log("yep")
    : console.log("nop")

// falsy values - false, 0, "", null, undefined, NaN

const truthyOrFalsy = (value) => {
    return value 
        ? `${value} is truthy`
        : `${value} is falsy`
}

console.log(truthyOrFalsy(0))
console.log(truthyOrFalsy(1))
console.log(truthyOrFalsy(""))
console.log(truthyOrFalsy({}))
console.log(truthyOrFalsy({a:0}))
console.log(truthyOrFalsy([]))
console.log(truthyOrFalsy(NaN))