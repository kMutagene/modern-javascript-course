//Tip calculator

//total, tip percent as decimal with default

getTip = (total, tipPercentage = 0.2) => {
    return total * tipPercentage
}

console.log(getTip(100))

console.log(getTip(100, .3))

console.log(getTip(101.01, .234))